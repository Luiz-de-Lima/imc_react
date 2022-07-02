export type Level = {
  title: string;
  color: string;
  icone: 'down' | 'up';
  imc: number[];
  yourImc?: number;
}

export const levels: Level[] = [
  { title: 'Magreza', color: '#96A3AB', icone: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0ead69', icone: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#e2b036', icone: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#c3423f', icone: 'down', imc: [30.1, 99] },
]

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * 2)

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      levels[i].yourImc = parseFloat(imc.toFixed(2))
      return levels[i]
    }
  }
  return null
}
