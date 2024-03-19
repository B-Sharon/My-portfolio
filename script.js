function response(){
    //once the submit button has been clicked, the user is notified of the submission
    alert("Your message has been received !");
    
    const followUp = prompt("Would you like to receive a follow up email?").toLowerCase();
    if (followUp === "yes"){
        alert('You will receive an email from me within 24 hours.')
    }
    alert ('Thank you for checking out my portfolio !')


}
