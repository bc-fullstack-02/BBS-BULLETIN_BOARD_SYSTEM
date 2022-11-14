import './App.css';

import Pessoa from './components/pessoa';

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
      link: '/contact',
    },
  ];

  return (
     
    <div className="App">
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
     <Pessoa nome="Bene"  idade="30" cidade="SAO PAULO" estado="SP" pais="Brasil"/>
    </div>
  );
}
 export default App;