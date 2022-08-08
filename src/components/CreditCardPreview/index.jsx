
const CreditCardPreview = ({cardNumber}) => {
	return <div className="CreditCardPreview">
		<span className="CreditCardChip"></span>
		<span class="CreditCardBrand"></span>
		<span class="CreditCardNumber">{cardNumber}</span>
		<div class="CreditCardHolderName">
			<p>Card Holder Name</p>
			<p></p>
        </div>
		<div class="CreditCardExpirationDate">
			<p>Expires</p>
			<p></p>
		</div>
	</div>
}
export default CreditCardPreview