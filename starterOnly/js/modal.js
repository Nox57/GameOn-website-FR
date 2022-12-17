function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthDate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");
const inputCheckboxTerms = document.getElementById("checkbox1");
const submitForm = document.querySelector("#modal-form");

// launch modal event & close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
    modalBg.style.display = "block";
}

// close modal form
function closeModal() {
    modalBg.style.display = "none";
}

// inputs listener
inputFirst.addEventListener("change", checkName);
inputLast.addEventListener("change", checkName);
inputEmail.addEventListener("change", checkEmail);
inputBirthDate.addEventListener("change", checkBirthDate);
inputQuantity.addEventListener("change", checkNumberTournamentPlayed);
inputCheckboxTerms.addEventListener("change", checkedCheckbox);

// submit listener 
submitForm.addEventListener("submit", validate);

// form validation
function validate(form) {
    form.preventDefault();
    if (checkName.call(inputFirst) && checkName.call(inputLast) && checkEmail.call(inputEmail) && checkBirthDate.call(inputBirthDate) && checkNumberTournamentPlayed.call(inputQuantity) && checkedCheckbox.call(inputCheckboxTerms) && checkRadio()) {
        let formValidated = document.querySelector(".modal-body");
        formValidated.innerHTML = "<p>Merci pour votre inscription.</p>"
    }
}

// we check if input firstname and lastname is valid
function checkName() {
    console.log(this);
    // We check if it's firstname or lastname input
    let name = this.id === "first" ? "prénom" : "nom";
    // We check if the value is equal or greater than 2 characters & if the value is not null
    if (this.value.length >= 2 && this.value != null) {
        // We check with regex if there is no numbers [0-9] in the value
        if (!(/\d/.test(this.value))) {
            document.getElementById("infos-"+this.id).textContent = "";
            this.classList.add("input_validated");
            this.classList.remove("input_error");
            return true;
        }
        else {
            display_error(this, "Le "+name+" ne doit pas contenir de chiffres.");
            return false;
        }
    }
    else {
        display_error(this, "Veuillez entrer 2 caractères ou plus pour le champ du "+name+".");
        return false;
    } 
}

// We check if email is valid
function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
        document.getElementById("infos-"+this.id).textContent = "";
        this.classList.add("input_validated");
        this.classList.remove("input_error");
        return true;
    }
    else {
        display_error(this, "Veuillez entrer une adresse email valide.");
        return false;
    }
}

// We check if terms of use are valid
function checkedCheckbox() {
    if (this.checked === true) {
        document.getElementById("infos-"+this.id).textContent = "";
        this.classList.add("input_validated");
        this.classList.remove("input_error");
        return true;
    }
    else {
        display_error(this, "Vous devez accepter les conditions d'utilisation.");
        return false;
    }
}

// We check if bithdate is valid
function checkBirthDate() {
    // We transform date in timestamp
    let timestamp = Date.parse(this.value);
    // -2208988800000 = 1 janv 1900
    if (timestamp != NaN && timestamp > -2208988800000 && timestamp < Date.now()) {
        document.getElementById("infos-"+this.id).textContent = "";
        this.classList.add("input_validated");
        this.classList.remove("input_error");
        return true;
    }
    else {
        display_error(this, "Veuillez entrer une date de naissance valide.");
        return false;
    }
}

// We check if the user typed a number between 0 and 99
function checkNumberTournamentPlayed() {
    let number = Number(this.value)
    if (Number.isInteger(number) && number >= 0 && number <= 99) {
        document.getElementById("infos-"+this.id).textContent = "";
        this.classList.add("input_validated");
        this.classList.remove("input_error");
        return true;
    }
    else {
        display_error(this, "Veuillez entrer un nombre valide entre 0 et 100.");
        return false;
    }
}

// We check if a radio button is checked
function checkRadio() {
    let checked = false;
    let errorlocation = document.getElementById("infos-location");
    for (let i = 1; i < 7; i++) {
        if (document.getElementById('location'+i).checked) {
            checked = true;
            break;
        }
    }
    if (checked) {
        errorlocation.innerHTML = "";
        errorlocation.classList.remove("error_msg");
        errorlocation.style.display = "none";
        return true;
    }
    else {
        errorlocation.classList.add("error_msg");
        errorlocation.innerHTML = "Vous devez selectionner un lieu.";
        errorlocation.style.display = "block";
        return false;
    }
}

// Displaying error messages
function display_error(element, errorMessage) {
    //console.log("id = "+element.id+" / classlist = "+element.classList)
    
    element.classList.add("input_error");
    document.getElementById("infos-"+element.id).style.display = "block";
    document.getElementById("infos-"+element.id).classList.add("error_msg");
    document.getElementById("infos-"+element.id).textContent = errorMessage;

}

