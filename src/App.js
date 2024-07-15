import RippleButton from './Components/RippleButton';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h4>Click on the Button to see Ripple Effect</h4>
      <RippleButton children={'Click me'} />
    </div>
  );
}

export default App;
