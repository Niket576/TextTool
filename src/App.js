
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0c5494';
      showAlert("Dark mode had been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode had been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextTool" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About  mode={mode}/>}/>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
