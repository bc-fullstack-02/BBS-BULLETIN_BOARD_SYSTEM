import './App.css';

import Pessoa from './components/pessoa';
import List from './components/list';

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
     <Pessoa nome="Bene"  idade="30" cidade="SAO PAULO" estado="SP" pais="Brasil" id="5"/>
     <List/> 
      
   </div>
 
  );
}
 export default App;