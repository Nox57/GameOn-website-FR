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
    if (this.value.length >= 2 && this.value !== null) {
        // We check with regex if there is numbers [0-9] in the value
        if (/\d/.test(this.value)) {
            this.classList.add("input_error");
            document.getElementById("infos-"+this.id).textContent = "Le champ du prénom ne doit pas contenir de chiffre.";
            document.getElementById("infos-"+this.id).classList.add("error_msg");
        }
        else {
            document.getElementById("infos-"+this.id).textContent = "";
            this.classList.add("input_validated");
            this.classList.remove("input_error");
        }
    }
    else {
        this.classList.add("input_error");
        document.getElementById("infos-"+this.id).textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        document.getElementById("infos-"+this.id).classList.add("error_msg");
    } 
}

//verification de l'email
function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
        document.getElementById("infos-"+this.id).textContent = "";
        this.classList.add("input_validated");
        this.classList.remove("input_error");
    }
    else {
        this.classList.add("input_error");
        document.getElementById("infos-"+this.id).textContent = "Veuillez entrer une adresse email correcte.";
        document.getElementById("infos-"+this.id).classList.add("error_msg");
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
    console.log(this.value);
    // On transforme la date en timestamp
    let timestamp = Date.parse(this.value);
    console.log(timestamp)
    if (timestamp == NaN) {
        this.classList.add("input_error");
        document.getElementById("infos-"+this.id).textContent = "Veuillez entrer une date de naissance valide.";
        document.getElementById("infos-"+this.id).classList.add("error_msg");
    }
    else {
        // -2208988800000 = 1 janv 1900
        if (timestamp < -2208988800000) {
            this.classList.add("input_error");
            document.getElementById("infos-"+this.id).textContent = "Veuillez entrer une date de naissance valide.";
            document.getElementById("infos-"+this.id).classList.add("error_msg");
        }
        else {
            document.getElementById("infos-"+this.id).textContent = "";
            this.classList.add("input_validated");
            this.classList.remove("input_error");
        }
    }
}

function checkNumberTournamentPlayed() {
    //parseInt en base décimal (10)
    let parsed = parseInt(this.value, 10)
    if (parsed >= 0 && parsed <= 100) {
        document.getElementById("infos-"+this.id).textContent = "";
        this.classList.add("input_validated");
        this.classList.remove("input_error"); 
    }
    else {
        console.log(typeof this.value)
        this.classList.add("input_error");
        document.getElementById("infos-"+this.id).textContent = "Veuillez entrer un nombre valide entre 0 et 100.";
        document.getElementById("infos-"+this.id).classList.add("error_msg"); 
    }
}

