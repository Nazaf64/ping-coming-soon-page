const emailInput = document.getElementById("email");
const btn = document.getElementById("btn");
const errorMessage = document.getElementById("error");
const mobileErrorMessage = document.getElementById("mobile_error");
const social_icons = document.getElementsByClassName("social-icon");



// window.onresize = windowResized;

// function windowResized() {
//     return window.innerWidth;
// }

for(i = 0; i < social_icons.length; i++){
    social_icons[i].addEventListener("mouseover", (e)=> {
        e.preventDefault;
        hoverSocial(e.target);
    })
}

function hoverSocial(icon) {
    if(icon.src === "ionicons/logo-facebook.svg"){
        icon.src = "ionicons/logo-facebook-hover.svg";
    } else if (icon.src === "ionicons/logo-twitter.svg"){
        icon.src = "ionicons/logo-twitter-hover.svg";
    } else if (icon.src === "ionicons/logo-instagram.svg"){
        icon.src = "ionicons/logo-instagram-hover.svg";
    }
    console.log(icon.src);
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
            mobileErrorMessage.innerText = "";
            emailInput.className = "email";
        }
    } 
}

function clearFields() {
        emailInput.value = '';
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    emailSubmit();
})

window.onload = function () {
    clearFields()
}