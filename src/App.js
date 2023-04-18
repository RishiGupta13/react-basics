import './App.css';
// import {Greet} from './components/Greet'
// import {Message} from './components/Message'
import {ParentComponent} from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      {/* <Greet name='Bruce Wayne'/>
      <Greet name='Emilia Clark'/>
      <Greet name='Dwayne Johnson'>
        <p>I beat John Cena</p>
      </Greet> */}

      {/* <Message/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
