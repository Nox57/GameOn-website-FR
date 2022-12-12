function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const submitForm = document.querySelector("#modal-form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}


// close modal event
closeBtn.addEventListener("click", closeModal);


// submit listener 
submitForm.addEventListener("submit", validate);

// form validation
function validate(e) {
    e.preventDefault();
    console.log("Submit button clicked");
}

// verif inputs
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthDate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");
const inputCheckboxTerms = document.getElementById("checkbox1");
const inputCheckboxNextEvents = document.getElementById("checkbox2");
inputFirst.addEventListener("change", checkInput);
inputLast.addEventListener("change", checkInput);
inputEmail.addEventListener("change", checkEmail);
inputBirthDate.addEventListener("change", checkBirthDate);
inputQuantity.addEventListener("change", checkNumberTournamentPlayed);
inputCheckboxTerms.addEventListener("change", checkedCheckbox);
inputCheckboxNextEvents.addEventListener("change", checkedCheckbox);



// function to check if input is valid
function checkInput() {
    console.log(this.value);
    // We check if the value is equal or greater than 2 characters & if the value is not null
    // and we check with regex if there is no numbers [0-9] in the value
    if (this.value.length >= 2 && this.value !== null && !(/\d/.test(this.value))) {
        errorManagement(this.id, this.classList);
    }
    else {
        errorManagement(this.id, this.classList, false);
    } 
}

//verification de l'email
function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
        errorManagement(this.id, this.classList);
    }
    else {
        errorManagement(this.id, this.classList, false);
    }
}

// verification des checkbox 
function checkedCheckbox() {
    if (this.checked == true) {
        console.log("checked")
    }
    else {
        console.log("pas checked")
    }
}

function checkBirthDate() {
    // On transforme la date en timestamp
    let timestamp = Date.parse(this.value);
    // -2208988800000 = 1 janv 1900
    if (timestamp != NaN && timestamp > -2208988800000 && timestamp < Date.now()) {
        errorManagement(this.id, this.classList);
    }
    else {
        errorManagement(this.id, this.classList, false);
    }
}

function checkNumberTournamentPlayed() {
    let number = Number(this.value)
    if (Number.isInteger(number) && number >= 0 && number <= 100) {
        errorManagement(this.id, this.classList);
    }
    else {
        errorManagement(this.id, this.classList, false);
    }
}

// gestion des messages d'erreur 
function errorManagement(id, classlist, isValid = true) {
    console.log("id = "+id+" / classlist = "+classlist+" / "+isValid)

    let listInputsError = {
        "first" : "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
        "last" : "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
        "email" : "Veuillez entrer une adresse email valide.",
        "birthdate" : "Veuillez entrer une date de naissance valide.",
        "quantity" : "Veuillez entrer un nombre valide entre 0 et 100.",
        "checkbox1" : "Vous devez accepter les conditions d'utilisation."
    }
    
    if (isValid) {
        document.getElementById("infos-"+id).textContent = "";
        classlist.add("input_validated");
        classlist.remove("input_error"); 
    }
    else {
        console.log(listInputsError)
        classlist.add("input_error");
        document.getElementById("infos-"+id).classList.add("error_msg");
        document.getElementById("infos-"+id).textContent = listInputsError[id]
    }
}

