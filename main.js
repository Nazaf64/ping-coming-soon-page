const emailInput = document.getElementById("email");
const btn = document.getElementById("btn");
const errorMessage = document.getElementById("error");
const mobileErrorMessage = document.getElementById("mobile_error");

window.onresize = windowResized;

function windowResized() {
    // console.log(window.innerWidth);
    return window.innerWidth;
    // return windowWidth;

    // if(windowWidth >= 850){

    // }
}

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
        return (false)
}

function emailSubmit() {
    // var windowWidth = windowResized;    

    if (emailInput.value === ''){
        errorMessage.innerText = "Please fill in this field";
        mobileErrorMessage.innerText = "Please fill in this field";
        emailInput.className = "invalid";
    } else if (emailInput.value != ''){
        var logic = ValidateEmail(emailInput.value);
        if(logic == false) {
            errorMessage.innerText = "Please provide a valid email address";
            mobileErrorMessage.innerText = "Please provide a valid email address";
            emailInput.className = "invalid";

        } else {
            errorMessage.innerText = "";
        }
    } 
    // else if (emailInput.value === '' && windowWidth < 850) {
    //     mobileErrorMessage.innerText = "Please fill in this field";
    //     emailInput.className = "invalid";
    // } else if (emailInput.value != '' && windowWidth < 850) {
    //     var logic = ValidateEmail(emailInput.value);
    //     if(logic == false) {
    //         mobileErrorMessage.innerText = "Please provide a valid email address";
    //         emailInput.className = "invalid";
    // }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    emailSubmit();
})