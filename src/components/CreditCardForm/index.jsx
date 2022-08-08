
const CreditCardForm = ({handleCreditCardNumber, cardNumber}) => {
  return <form className="CreditCardForm">
    <div className="field">
      <label>Card Number</label>
      <input 
        type="text" 
        name="creditCardNumber" 
        id="creditCardNumber"  
        onChange={(evt) => {handleCreditCardNumber(evt)}} value={cardNumber} />
    </div>

    <div className="field">
      <label>Card Holder Name</label>
      <input type="text" name="creditCardHolderName" id="creditCardHolderName"/>
    </div>

    <div className="field">
      <label>Expiration Date</label>
      <select type="select" name="expirationMonth" id="expirationMonth">
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
      <select type="select" name="expirationYear" id="expirationYear">
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>


    <div className="field">
      <label>CVV</label>
      <input type="text" name="creditCardCVV" id="creditCardCVV"/>
    </div>

    <button type="submit">Submit</button>
    
  </form>
}

export default CreditCardForm;