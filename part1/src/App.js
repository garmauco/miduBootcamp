import './App.css';
import Mensaje from './Mensaje'

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="Esto es"/>
      <Mensaje color="blue" message="un Curso"/>
      <Mensaje color="green" message="de React"/>
    </div>
  );
}

export default App;
