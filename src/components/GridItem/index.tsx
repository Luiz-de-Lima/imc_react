import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type GridProps = {
  item: Level;
};
export const GridItem = ({ item }: GridProps) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img
          src={item.icone === "up" ? upImage : downImage}
          alt=""
          width="30"
        />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourImc && (
        <div className={styles.yourImc}>
          Seu IMC é: {item.yourImc} kg/m²
        </div>
      )}
      <div className={styles.gridInfo}>
        <>
          <p>
            Imc está entre
            <strong>{item.imc[0]}</strong> e<strong>{item.imc[1]}</strong>
          </p>
        </>
      </div>
    </div>
  );
};
