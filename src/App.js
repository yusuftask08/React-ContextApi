import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          <Container />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
