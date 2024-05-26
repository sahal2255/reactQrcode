import './App.css';
import QRCodeGenerator from './component/QRCodeComponent';
function App() {
  return (
    <div className="App">
      {/* <h1 className='qr-header'> QRCode Generator</h1> */}

      <QRCodeGenerator />
    </div>
  );
}

export default App;
