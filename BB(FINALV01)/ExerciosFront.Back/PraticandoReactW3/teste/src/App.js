import logo from './logo.svg';
import './index.css';

function App() {
  const carros = [
    { marca: 'Ford', modelo: 'Fusion', ano: 2019 },
    { marca: 'Chevrolet', modelo: 'Onix', ano: 2020 },
    { marca: 'Fiat', modelo: 'Argo', ano: 2018 },
    { marca: 'Volkswagen', modelo: 'Gol', ano: 2017 },
    { marca: 'Toyota', modelo: 'Corolla', ano: 2016 },
  ];
  return (
    <div className='carro'>
      <h1>Carros</h1>
      <ul>
        {carros.map((carro) => (
          <li key={carro.ano}>
            {carro.marca} {carro.modelo} - {carro.ano}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
