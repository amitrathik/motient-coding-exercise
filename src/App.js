
import React from 'react';
import './App.css';

import CreditCardForm from './components/CreditCardForm';
import CreditCardPreview from './components/CreditCardPreview';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        cardNumber : '',
        cardHolderName : '',
        cardExpirationDate : {
          month : '',
          year : ''
        }
    }
  }

  onlyNumbers = (evt) => {
    console.log(/^[0-9]+$/.test(evt.target.value));
    return /^[0-9]+$/.test(evt.target.value)
  }

  handleCreditCardNumber = (evt) => {
    if(this.onlyNumbers(evt)){
      console.log("only numbers entered")
      this.setState({
        cardNumber : evt.target.value
      })
    }
  }


  render () {
    return (
      <div className="App">
        <CreditCardPreview
           cardNumber = {this.state.cardNumber}
        />
        <CreditCardForm 
          handleCreditCardNumber = {this.handleCreditCardNumber}
          cardNumber = {this.state.cardNumber}
        />
      </div>
    );
  }
}

export default App;
