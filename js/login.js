// console.log('login button added');

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    console.log('login button is clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    

    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber, phoneNumber);

    if(phoneNumber === "5" && pinNumber === "1234"){
        console.log('you are logged in');
        window.location.href = "home.html";
    }
    else{
        console.log('You entered wrong phone or pin number.')
    }

})
