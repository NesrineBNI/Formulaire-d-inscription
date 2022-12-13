const form = document.getElementById('form');
const username = document.getElementById('username');
const prenome = document.getElementById('prenom');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const femin = document.getElementById('Féminin');
const masc = document.getElementById('Masculin');
const DW1 = document.getElementById('DW101');
const DW2 = document.getElementById('DW102');
const DW3 = document.getElementById('DW103');
const DM1 = document.getElementById('DM101');
const DM2 = document.getElementById('DM102');
// let arr = [];
// const arr = [] ;

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	// if(checkInputs() == true){
	// 	window.open(href='valid.html',target='_blank');
	// 	console.log('hi');
	// }

	// if(arr.length === 7){
	// 	form.submit();
	// }
	
});

function checkInputs() {

	const usernameValue = username.value.trim();
	const prenomValue = prenome.value.trim();
	const emailValue = email.value.trim();
	const telephoneValue = telephone.value.trim();
	
    if(usernameValue === '') {
		setErrorFor(username, 'le Nom ne peut pas être vide');
    }
    else if (username.value.length <= 3 | username.value.length > 30){
		setErrorFor(username, 'Nom minimum 3 et maximum 30 characters');
    } else if(!isNomValid(usernameValue)){
        setErrorFor(username, 'Pas un Nom valide');
    }
     else {
		setSuccessFor(username);
		// arr.push(true);

	}
    if(prenomValue === '') {
		setErrorFor(prenome, 'le prénome ne peut pas être vide');
	}else if (prenome.value.length <= 3 | prenome.value.length > 30){
		setErrorFor(prenome, 'prénome minimum 3 et maximum 30 characters');
    } else if(!isNomValid(prenomValue)){
        setErrorFor(prenome, 'Pas un prénome valide');
    }
    else {
		setSuccessFor(prenome);
		// arr.push(true);

	}
	
	if(emailValue === '') {
		setErrorFor(email, 'le email ne peut pas être vide');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Pas un téléphone valide,par exemple prenom.nom@ofppt.ma');
	} else {
		setSuccessFor(email);
		// arr.push(true);

	}

	if(telephoneValue === '') {
		setErrorFor(telephone, 'le téléphone ne peut pas être vide');
	} else if (!istelephone(telephoneValue)) {
		setErrorFor(telephone, 'Pas un téléphone valide,exactement 10 chiffres et commencer obligatoirement par 05 ou 06 ou 07');
	} else {
		setSuccessFor(telephone);
		// arr.push(true);

	}
	
	// check genre
	if(femin.checked == true || masc.checked == true){
		document.querySelector('#invalid').innerText = '';
		// arr.push(true);


	}else{
		document.querySelector('#invalid').innerText = "s'il vous plaît check Genre ";
		
	}
	// check groupe
	if(DW1.checked == true || DW2.checked == true || DW3.checked == true || DM1.checked == true || DM2.checked == true){
		document.querySelector('#msg').innerText = '';
		// arr.push(true);


	}else{
		document.querySelector('#msg').innerText = "s'il vous plaît check Groupe";	
	}
	// selected
	
	let resultClub = document.querySelector("#resultClub");
	
	if(sel.selectedOptions.length === 0){
	resultClub.innerHTML="s'il vous plaît check Club"
		
	} else if(sel.selectedOptions.length > 3){
	resultClub.innerHTML="maximum 3 Club"
	}else {
		resultClub.innerHTML=" " ;
		// arr.push(true);
		
	}
	if(usernameValue == true || prenomValue == true || emailValue == true || telephoneValue == true || femin.checked == true || masc.checked == true || DW1.checked == true || DW2.checked == true || DW3.checked == true || DM1.checked == true || DM2.checked == true || sel.selectedOptions.length == true){
		window.open(href='valid.html',target='_blank');

	}
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	
    const re = new RegExp(
        '^[a-zA-Z0-9.-_]+[.]{1}[a-zA-Z0-9-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,4}$','g'
    );
    return re.test(email);
}
const isNomValid = (username) => {
    const re = /^[a-zA-Z-\s]+$/;
    return re.test(username);
}
const istelephone = (telephone) => {
    const re = /(07|06|05)\d{8}/;
    return re.test(telephone);
}
// let form = document.getElementById("form")
