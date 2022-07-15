import './App.css';
import mockDb from './mockDb.json';
import DataList from './components/DataList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-bar">
          <DataList db={mockDb}/>
        </div>
      </header>
    </div>
  );
}

export default App;
