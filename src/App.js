
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
        cardExpirationMonth : 'MM',
        cardExpirationYear : 'YY'
    }
  }

  onlyNumbers = (evt) => {
    return /^[0-9]*$/.test(evt.target.value)
  }

  formatCreditCardNumber = (cardNumber) => {
    // TODO: take card number string, format it to - #### #### #### ####
    return cardNumber.match(/.{1,4}/g) || []
  }

  handleCreditCardNumber = (evt) => {
    if(this.onlyNumbers(evt) && evt.target.value.length <= 16){
      this.setState({
        cardNumber : this.formatCreditCardNumber(evt.target.value)
      })
    }
  }

  handleCreditCardHolderName = (evt) => {
    this.setState({
      cardHolderName : evt.target.value
    })
  }

  handleCreditCardExpirationMonth = (evt) => {
    this.setState({
      cardExpirationMonth : evt.target.value
    })
  }

  handleCreditCardExpirationYear = (evt) => {
    this.setState({
      cardExpirationYear : evt.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    
  }

  render () {
    return (
      <div className="App">
        <CreditCardPreview
           cardNumber = {this.state.cardNumber}
           cardHolderName = {this.state.cardHolderName}
           cardExpirationMonth = {this.state.cardExpirationMonth}
           cardExpirationYear = {this.state.cardExpirationYear}
        />
        <CreditCardForm 
          handleCreditCardNumber = {this.handleCreditCardNumber}
          handleCreditCardHolderName = {this.handleCreditCardHolderName}
          handleCreditCardExpirationMonth = {this.handleCreditCardExpirationMonth}
          handleCreditCardExpirationYear = {this.handleCreditCardExpirationYear}
          handleSubmit = {this.handleSubmit}
          cardNumber = {this.state.cardNumber}
          cartHolderName={this.state.cardHolderName}
          cardExpirationMonth = {this.state.cardExpirationMonth}
          cardExpirationYear = {this.state.cardExpirationYear}
        />
      </div>
    );
  }
}

export default App;
