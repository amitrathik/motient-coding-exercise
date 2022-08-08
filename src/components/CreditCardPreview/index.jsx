import React from 'react';

import CreditCardChip from '../CreditCardChip';
import CreditCardBrand from '../CreditCardBrand';
import CreditCardNumber from '../CreditCardNumber';
import CreditCardHolderName from '../CreditCardHolderName';
import CreditCardExpirationDate from '../CreditCardExpirationDate';

class CreditCardPreview extends React.Component{
	render(){
		return <div className="CreditCardPreview">
			<CreditCardChip/>
			<CreditCardBrand />
			<CreditCardNumber />
			<CreditCardHolderName />
			<CreditCardExpirationDate />
      </div>
	}
}

export default CreditCardPreview