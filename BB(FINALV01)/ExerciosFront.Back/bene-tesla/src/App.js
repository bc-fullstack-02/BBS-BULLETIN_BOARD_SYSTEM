import './App.css';
import Home from './components/Inicio'
import Conta from './components/contaform';
function App() {
  const menu = [
    {
      name: 'INICIO',
      link: '/home',
    },
    {
      name: 'SOBRE',
      link: '/about',
    },
    {
      name: 'CONTATO',
      link: 'https://bene-tesla369.vercel.app/index.html',
    },
  ];
  return (

    <>
      <header className="App-header">
        <ul>
          {menu.map((item) => (
            <li>
              <a href={item.link}>{
                item.name
              }</a>
            </li>
          ))}
        </ul>
      </header>
      <Home />
      <Conta />
    </>

  );
}
export default App;