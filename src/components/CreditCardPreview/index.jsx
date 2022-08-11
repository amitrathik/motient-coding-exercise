
const CreditCardPreview = ({cardNumber, cardHolderName, cardExpirationMonth, cardExpirationYear}) => {
	return <div className="CreditCardPreview">
		<span className="CreditCardChip"></span>
		<span className="CreditCardBrand"></span>
		<span className="CreditCardNumber">{cardNumber !== "" ? cardNumber : '#### #### #### ####'}</span>
		<div className="CreditCardHolderName">
			<p>Card Holder Name</p>
			<p>{cardHolderName}</p>
        </div>
		<div className="CreditCardExpirationDate">
			<p>Expires</p>
			<p>{cardExpirationMonth}/{cardExpirationYear}</p>
		</div>
	</div>
}
export default CreditCardPreview