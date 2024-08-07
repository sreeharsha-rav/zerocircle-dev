export const loanPOC_json = {
    "title": "Loan for POC",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "LoanPOC",
            "title": "Loan for POC",
            "elements": [
              {
                "type": "text",
                "name": "Company",
                "title": "Company",
                "hideNumber": true,
                "placeholder": "Company Name"
              },
              {
                "type": "panel",
                "name": "Address",
                "title": "Address",
                "elements": [
                  {
                    "type": "text",
                    "name": "AddressLine1",
                    "title": "Address Line 1",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "placeholder": "Address Line 1"
                  },
                  {
                    "type": "text",
                    "name": "AddressLine2",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "placeholder": "Address Line 2"
                  },
                  {
                    "type": "text",
                    "name": "City",
                    "titleLocation": "hidden",
                    "placeholder": "City"
                  },
                  {
                    "type": "text",
                    "name": "State",
                    "startWithNewLine": false,
                    "titleLocation": "hidden",
                    "placeholder": "State"
                  },
                  {
                    "type": "text",
                    "name": "ZipCode",
                    "startWithNewLine": false,
                    "titleLocation": "hidden",
                    "placeholder": "Zip Code"
                  }
                ]
              },
              {
                "type": "boolean",
                "name": "LoanQualify",
                "title": "Do you qualify for loan?",
                "hideNumber": true,
                "swapOrder": true
              },
              {
                "type": "dropdown",
                "name": "Amount",
                "startWithNewLine": false,
                "title": "Amount",
                "hideNumber": true,
                "choicesOrder": "desc",
                "placeholder": "Select...",
                "choicesMin": 1000000,
                "choicesMax": 10000000,
                "choicesStep": 1000000,
                "autocomplete": "transaction-amount"
              },
              {
                "type": "file",
                "name": "question2",
                "title": "Relevant Documentation",
                "hideNumber": true,
                "showPreview": false,
                "imageHeight": "20px",
                "waitForUpload": true
              },
              {
                "type": "text",
                "name": "RoundedAmount",
                "startWithNewLine": false,
                "title": "Rounded Amount",
                "hideNumber": true,
                "inputType": "number",
                "autocomplete": "transaction-amount",
                "placeholder": "$ Rounded Amount"
              }
            ]
          }
        ]
      }
    ],
    "showTitle": false
};