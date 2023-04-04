//MANIPULATE THE FORM ELEMENT UPON SUBMIT
//grab the from from the DOM
const form = document.getElementById("booking-form");

//function that is executed when form is submitted
const displayThankYouMessage = (e) => {
  //prevents the page from reloading, which is the default behaviour of a form submit
  e.preventDefault();
  //grabs the parent element of the form, which is the surrounding div
  //and replaces the HTML inside that div with a p tag containing a thank you note
  //and adds an id to that p
  const thankYouMessageContainer = e.target.parentNode;
  thankYouMessageContainer.innerHTML =
    "<p>You have booked your space! Congratulations!</p>";
  thankYouMessageContainer.children[0].id = "thank-you-message";
  //resets the form to empty fields
  e.target.reset(); 
  const randomTransactionId = Math.floor(Math.random() * 100).toString();
  //clears the potential previous ecommerce object by setting it to null
  dataLayer.push({ ecommerce: null });
  //pushes a purchase event into the dataLayer
  dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: randomTransactionId,
      value: 40.00,
      currency: "EUR",
      tax: 19,
      items: [
        {
          item_id: "1234",
          item_name: "amazing product",
        },
      ],
    },
  });
  console.log(dataLayer);
};

//adds an event listener to the form that listens to submit events and calls the
//displayThankYouMessage function
form.addEventListener("submit", displayThankYouMessage);

