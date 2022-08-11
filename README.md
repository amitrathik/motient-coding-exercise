# Motient Coding Exercise

The objective is to build a credit card form with a preview. 


## Notes
Since I had an outdated dev environment for React, I decided to bootstrap the project using the latest version [Create React App](https://github.com/facebook/create-react-app)

## Components
- Credit Card Form
	- Fields:
		- Card Number
			- Should only take numbers only
			- Should populate the card preview as user types
			- ?Should format text string to group 4 numbers separated by spaces ie, #### #### #### ####
			- ?Should validate card type by regex, this could update the card vendor ie, visa or mastercard
		- Card Holder Name
			- Should be limited to 50 characters
			- Should populate the card holder name in card preview as user types
		- Expiration Date
			- Month
				- Should just be a list from 01-12
			- Year
				- Should be a list of years, I think only current year +7?
		- CVV
			- Should be limited to 3 numbers
	- Actions:
		- On Submit
			- console log state and sample payload to be sent to server
			- I will likely use form data api to collect form entry and prep it for submission
		- On blur
			- field should update with correct formatted display, and the preview should be updated. 
			- I think preview should be limited to each specific field, but I think react will force the entire preview to update?
			

		
- Credit Card Preview
	- Partials:
		- Card Chip Image
			- Displays image of chip
		- Card Number
			- Should obscure the middle 8 numbers with *
		- Card Holder Name
			- Label above
			- Name displayed below label
		- Card Vendor
			- Displays image of logo
		- Card Expiration Date
			- a box with white border displaying date : expires mm/yy

