import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          <Header />
          <hr />
          <Button />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
