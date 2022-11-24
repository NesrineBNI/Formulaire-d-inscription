const usernameEl = document.querySelector('#Nom');
const prenomEl = document.querySelector('#Prénom');
const emailEl = document.querySelector('#email');
const telephoneEl = document.querySelector('#Télephone');


const form = document.querySelector('#form');

const checkUsername = () => {
    let valid = false;
    const min = 3, max = 30;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'le Nom ne peut pas être vide');
    } else if(!isNomValid(username)){
        showError(usernameEl, 'Pas un Nom valide')
    }
     else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Nom minimum ${min} et ${max} characters.`);
    }
     else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};
const checkPrenom = () => {
    let valid = false;
    const min = 3, max = 30;
    const prenom = prenomEl.value.trim();

    if (!isRequired(prenom)) {
        showError(prenomEl, 'le prénome ne peut pas être vide');
    } else if(!isNomValid(prenom)){
        showError(prenomEl, 'Pas un prénome valide')
    }
     else if (!isBetween(prenom.length, min, max)) {
        showError(prenomEl, `prénome minimum 3 ${min} et maximum ${max} characters.`)
    }
     else {
        showSuccess(prenomEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'le email ne peut pas être vide');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Pas un téléphone valide,par exemple prenom.nom@ofppt.ma')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};
const checkTelephone = () => {
    let valid = false;
    const telephone = telephoneEl.value.trim();
    if (!isRequired(telephone)) {
        showError(telephoneEl, 'le téléphone ne peut pas être vide');
    } else if (!isTelephoneValid(telephone)) {
        showError(telephoneEl, 'Pas un téléphone valide,exactement 10 chiffres et commencer obligatoirement par 05 ou 06 ou 07')
    } else {
        showSuccess(telephoneEl);
        valid = true;
    }
    return valid;
}

const isEmailValid = (email) => {
    const re = new RegExp(
        '^[a-zA-Z0-9.-_]+[.]{1}[a-zA-Z0-9-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,4}$','g'
    );
    return re.test(email);
};

const isNomValid = (username) => {
    const re = /^[a-zA-Z-\s]+$/;
    return re.test(username);
}
const isTelephoneValid = (telephone) => {
    const re =  /(07|06|05)\d{8}/;
    return re.test(telephone);
}


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the show element
    const show = input.parentElement;
    // add the error class
    show.classList.remove('success');
    show.classList.add('error');

    // show the error message
    const error = show.querySelector('span');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the show element
    const show = input.parentElement;

    // remove the error class
    show.classList.remove('error');
    show.classList.add('success');

    // hide the error message
    const error = show.querySelector('span');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isPrenom = checkPrenom(),
        isEmailValid = checkEmail(),
        isTelephone = checkTelephone();
        

    let isFormValid = isUsernameValid && isPrenom &&
        isEmailValid && isTelephone;
        

    // submit to the server if the form is valid
    if (isFormValid) {
	    window.open(href='valid.html',target='_blank');
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'Nom':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'Prénom':
            checkPrenom();
            break;
        case 'Télephone':
            checkTelephone();
            break;
       
    }
}));

// checkbox Genre && Groupe && Club

function Genre(){
    let allCheck = document.querySelectorAll('.check');
    let selected = 0;

    for (let count = 0 ; count < allCheck.length; count++){
        if (allCheck[count].checked == true) {
            selected += 1;
        }
    }
    if (selected > 1) {
        document.querySelector('#invalid').innerText = 'Non dépaser un check';
        return false;
    }else if(selected == ''){
        document.querySelector('#invalid').innerText = 'Non dépaser un check';
    }
    else{
        document.querySelector('#invalid').innerText = "";
    }
}

function Groupe(){
    let allGroupe = document.querySelectorAll('.checkGroupe');
    let sel = 0;

    for (let i = 0 ; i < allGroupe.length; i++){
        if (allGroupe[i].checked == true) {
            sel += 1;
        }
    }
    if (sel > 1) {
        document.querySelector('#error').innerText = 'Non dépaser un check';
        return false;
    }else{
        document.querySelector('#error').innerText = "";
    }
}

function Club(){
    let allClub = document.querySelectorAll('.checkClub');
    let selClub = 0;

    for (let j = 0 ; j < allClub.length; j++){
        if (allClub[j].checked == true) {
            selClub++;
        }
    }
    if (selClub >= 3) {
        document.querySelector('#message').innerText = 'Non dépaser trois check';
        return false;
    }else{
        document.querySelector('#message').innerText = "";
    }
}

