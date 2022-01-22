import './App.css';
import Button from './components/Button';
import ThemeContext from './context/ThemeContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value="dark">
          <Button />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
