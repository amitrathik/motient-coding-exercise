
const CreditCardForm = ({handleCreditCardNumber, handleCreditCardHolderName, handleCreditCardExpirationMonth, handleCreditCardExpirationYear, handleSubmit, cardNumber, cardHolderName, cardExpirationMonth,cardExpirationYear}) => {
  return <form className="CreditCardForm" onSubmit={handleSubmit}>
    <div className="field">
      <label>Card Number</label>
      <input 
        type="text" 
        name="creditCardNumber" 
        id="creditCardNumber"  
        onChange={(evt) => {handleCreditCardNumber(evt)}} 
        value={cardNumber} 
      />
    </div>

    <div className="field">
      <label>Card Holder Name</label>
      <input 
        type="text" 
        name="creditCardHolderName" 
        id="creditCardHolderName"
        onChange={(evt) => {handleCreditCardHolderName(evt)}} 
        value={cardHolderName} 
      />
    </div>

    <div className="field">
      <label>Expiration Date</label>
      <select 
        type="select" 
        name="expirationMonth" 
        id="expirationMonth"
        value={cardExpirationMonth}
        onChange={(evt) => {handleCreditCardExpirationMonth(evt)}}  
      >
        <option value="MM">MM</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select 
        type="select" 
        name="expirationYear" 
        id="expirationYear"
        value={cardExpirationYear}
        onChange={(evt) => {handleCreditCardExpirationYear(evt)}}  
      >
        <option value="YY">YY</option>
        <option value="2022">22</option>
        <option value="2023">23</option>
        <option value="2024">24</option>
        <option value="2025">25</option>
      </select>
    </div>


    <div className="field">
      <label>CVV</label>
      <input type="text" name="creditCardCVV" id="creditCardCVV"/>
    </div>

    <button type="submit" >Submit</button>
    
  </form>
}

export default CreditCardForm;