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
inputFirst.addEventListener("change", checkInput);
inputLast.addEventListener("change", checkInput);

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

