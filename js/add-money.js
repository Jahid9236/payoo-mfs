console.log('add money js added');

document.getElementById('btn-add-money').addEventListener('click', function(){
    

    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');

    

})

document.getElementById('add-money').addEventListener('click', function(event){

    event.preventDefault();

    const amount = document.getElementById('amount-add-money').value;
    // console.log(amount);

    const balance = document.getElementById('current-balance').innerText;
    // console.log(balance);

    const pinNumber = document.getElementById('pin-number').value;

    if(isNaN(amount)){
        alert("Enter number as amount please");
    }
    else{

        if(pinNumber === "1234"){
            const amountNumber = parseFloat(amount);
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber + amountNumber;

            document.getElementById('current-balance').innerText = newBalance;
        }
        else{
            alert("Your Pin Number is not correct");
        }

    }

})