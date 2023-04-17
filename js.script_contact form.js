
const form = document.getElementById("contact");

const displayMessageSent = (e) => {
 
  e.preventDefault();
 
  const MessageSentContainer = e.target.parentNode;
  MessageSentContainer.innerHTML =
    "<p>Your message has been sent.</p>";
  MessageSentContainer.children[0].id = "message-sent";
 
  e.target.reset(); 
  const randomTransactionId = Math.floor(Math.random() * 100).toString();
  
form.addEventListener("submit", displayMessageSent);
}
