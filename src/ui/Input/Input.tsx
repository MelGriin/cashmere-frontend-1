import { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsnm } from "utils/clsnm";
import styles from "./Input.module.scss";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  containerClassName?: string;
  rightEl?: ReactNode;
  leftEl?: ReactNode;
  containerProps?: ComponentPropsWithoutRef<"div">;
  height?: string;
  extendRight?: boolean;
  extendLeft?: boolean;
  hideLeftBorder?: boolean;
  hideRightBorder?: boolean;
  rightElClassName?: string;
  leftElClassName?: string;
}

const Input = ({
  value,
  onChange,
  containerClassName,
  rightElClassName,
  leftElClassName,
  containerProps,
  rightEl,
  leftEl,
  height = "58px",
  extendRight = false,
  extendLeft = false,
  hideLeftBorder,
  hideRightBorder,
  className,
  style,
  ...props
}: InputProps) => {
  return (
    <div
      className={clsnm(styles.wrapper, containerClassName)}
      {...containerProps}
    >
      <input
        style={{ height, ...style }}
        value={value}
        onChange={onChange}
        className={clsnm(
          styles.input,
          hideLeftBorder && styles.hideLeftBorder,
          hideRightBorder && styles.hideRightBorder,
          extendLeft && styles.extendLeft,
          extendRight && styles.extendRight,
          rightEl && styles.rightEl,
          leftEl && styles.leftEl,
          className
        )}
        {...props}
      />
      {rightEl && (
        <div className={clsnm(styles.right, rightElClassName)}>{rightEl}</div>
      )}
      {leftEl && (
        <div className={clsnm(styles.left, leftElClassName)}>{leftEl}</div>
      )}
    </div>
  );
};

export { Input };