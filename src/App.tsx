import React, { useState } from "react";
import styles from "./App.module.css";
import logo from "../src/assets/powered.png";
import { levels, calculateImc } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState<number>(0);
  type InputChangeElement = React.ChangeEvent<HTMLInputElement>;

  const teste = (event: InputChangeElement) => {
    const value = parseFloat(event.target.value);
    if (value < 1) {
      alert("números negativos não se encaixam em altura");
    }
    setHeightField(value);
  };

  const handleCalculateButton = () => {
    if (heightField && weightField) {
    } else {
      alert("existem campos vazios, por favor preencher para prosseguir");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>

          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="digite a sua altura. Ex:1.5 (em métros)"
            value={heightField > 0 ? heightField : ""}
            onChange={teste}
          />
          <input
            type="number"
            placeholder="digite o seu peso. Ex:30.5 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={teste}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
