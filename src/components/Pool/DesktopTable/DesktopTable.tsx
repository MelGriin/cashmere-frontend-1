import styles from "./DesktopTable.module.scss";
import { PersonalData, GlobalData } from "../datas";
import { Icon, Tooltip } from "ui";
import { InfoIcon } from "assets/icons";
import { setWhichGlobalModal, setWhichPersonalModal } from "store/slicers/pool";
import { useDispatch, useSelector } from "react-redux";

interface Table {
  whichPool?: boolean;
  bodyCount: number;
}

const PoolDesktopTitle = () => {
  return (
    <div className={styles.tableTitle}>
      <div className={styles.title1}>Name</div>
      <div className={styles.title2}>Network</div>
      <div className={styles.title3}>Liquidity</div>
      <div className={styles.title4}>Volume (24h)</div>
      <div className={styles.title5}>VEAPR</div>
      <div className={styles.title6}>My Total APR</div>
    </div>
  );
};

const PoolDesktopTable = ({ whichPool, bodyCount }: Table) => {
  const dispatch = useDispatch();
  const trial:any = useSelector((state:any) => state.pool.whichGlobalModal)
  return (
    <>
      {whichPool
        ? PersonalData.map((data, i) => {
            return (
              <div
                className={styles.tableBody}
                key={i}
                onClick={() => {
                  dispatch(setWhichPersonalModal(i));
                  dispatch(setWhichGlobalModal(-1));
                  console.log(trial)
                }}
              >
                <div className={styles.datas}>
                  <div className={styles.data1}>
                    <span className={styles.logoAndName}>
                      {data.logo && (
                        <img
                          style={{ width: "25px", marginRight: "14.5px" }}
                          src={data.logo}
                          alt="Logo of Token"
                        ></img>
                      )}
                      <span>{data.name}</span>
                    </span>
                    <span className={styles.cRatio}>
                      Compensation Ratio: %154.89{" "}
                      <Tooltip placement="top" content="Content coming here">
                        <Icon size={16}>
                          <InfoIcon />
                        </Icon>
                      </Tooltip>
                    </span>
                  </div>
                  <div className={styles.data2}>{data.network}</div>
                  <div className={styles.data3}>%{data.liquidity}</div>
                  <div className={styles.data4}>%{data.volume}</div>
                  <div className={styles.data5}>{data.veapr}%</div>
                  <div className={styles.data6}>{data.myTotalApr}%</div>
                </div>
              </div>
            );
          })
        : GlobalData.map((data, i) => {
            if (i < bodyCount) {
              return (
                <div
                  className={styles.tableBody}
                  key={i}
                  onClick={() => {
                    dispatch(setWhichPersonalModal(-1));
                    dispatch(setWhichGlobalModal(i));
                  }}
                >
                  <div className={styles.line}></div>
                  <div className={styles.datas}>
                    <div className={styles.data1}>
                      <span className={styles.logoAndName}>
                        {data.logo && (
                          <img
                            style={{ width: "25px", marginRight: "14.5px" }}
                            src={data.logo}
                            alt="Logo"
                          ></img>
                        )}
                        <span>{data.name}</span>
                      </span>
                      <span className={styles.cRatio}>
                        <span>Compensation Ratio: %154.89</span>
                        <Tooltip placement="top" content="Content coming here">
                          <Icon size={16}>
                            <InfoIcon />
                          </Icon>
                        </Tooltip>
                      </span>
                    </div>
                    <div className={styles.data2}>{data.network}</div>
                    <div className={styles.data3}>%{data.liquidity}</div>
                    <div className={styles.data4}>%{data.volume}</div>
                    <div className={styles.data5}>{data.veapr}%</div>
                    <div className={styles.data6}>{data.myTotalApr}%</div>
                  </div>
                </div>
              );
            }
          })}
    </>
  );
};

export { PoolDesktopTable, PoolDesktopTitle };
