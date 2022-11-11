
var isValidate = true;
var errors=[];
var inputs=[];
const body = document.querySelector("body");
const divForInputs = document.createElement("div")

function Submit(){
	cleanAfterNewInput();
	checkInputs("nameInput", /^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/, "ПІБ");
	checkInputs("phoneInput", /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/, "Телефон");
	checkInputs("facultyInput", /^[A-ЯҐЄІЇ]{4}$/, "Факультет");
	checkInputs("birthdayInput", /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/, "День народження");
	checkInputs("addressInput", /^м\.\s[A-ЯҐЄІЇ]{1}[a-яіїє]+$/, "Адреса");

	if(isValidate){
		const entered_data=document.createElement("h3");
		entered_data.innerHTML="Введені дані:";
		divForInputs.appendChild(entered_data);
		inputs.forEach(inputData => divForInputs.appendChild(inputData));
		body.appendChild(divForInputs);
	}else{
		errors.forEach(error => {
			const field=document.getElementById(error);
			field.style.border="1px #821111 solid";
			field.style.background="#d4b8b8";
			
		});
	}

}

function cleanAfterNewInput(){
	errors.forEach(error  => {
		const field=document.getElementById(error);
		field.style.background="white";
		field.style.border="1px #858585 solid";
	});

	while (divForInputs.firstChild){
		divForInputs.removeChild(divForInputs.firstChild);
	}
	errors=[];
	inputs=[];
	isValidate=true;
	
}

function checkInputs(id, regex, name) {
	const valueElement = document.getElementById(id).value;
	if(valueElement.match(regex)){
		const inputData = document.createElement("p");
		inputData.innerHTML="<b>" + name + "</b>:" + valueElement;
		inputs.push(inputData);
	}else{
		isValidate=false;
		errors.push(id);
	}
}




