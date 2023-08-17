document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked');
    //step-2: get the email address inside the email input field
    //always remenber to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    //step-3: get password set id on the html element
    // 3.b - get the element
    //3.c get the value from the element
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    console.log(email, password);
    //Danger: do not vaqerify email password on the client side
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    } else {
        console.log('invalid user');
    }
})