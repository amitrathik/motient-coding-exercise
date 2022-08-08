
import './App.css';

import CreditCardForm from './components/CreditCardForm';
import CreditCardPreview from './components/CreditCardPreview';

function App() {
  return (
    <div className="App">
      <CreditCardPreview/>
      <CreditCardForm/>
    </div>
  );
}

export default App;
