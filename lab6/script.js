
async function getPerson(){
				
	const response = await fetch('https://randomuser.me/api/');
	const {results:[person]} = await response.json();
	return {
		imageLink: person.picture.large,
		city: person.location.city,
		country: person.location.country,
		name: `${person.name.first} ${person.name.last}`,
		postcode: person.location.postcode,
	};
};

document.querySelector('.downloadBtn').addEventListener('click', async(event)=>{
	event.target.disabled = true;

	const{imageLink, city, country, name, postcode} = await getPerson();
	const card = document.createElement('div');
	card.classList.add('card');
	card.innerHTML = `
	<img class="card-image" scr="${imageLink}" alt="card-image">
	<div class="card-text">City:&nbsp;<span>${city}</span></div>
	<div class="card-text">Country:&nbsp;<span>${country}</span></div>
	<div class="card-text">Name:&nbsp;<span>${name}</span></div>
	<div class="card-text">Postcode:&nbsp;<span>${postcode}</span></div>
	`
	document.querySelector('.cards').append(card);
	event.target.disabled = false;
});




/*

const maybeError = document.getElementById('maybeError');
const button = document.getElementById('add-button');
let url = 'https://randomuser.me/api';

button.addEventListener('click', ()=>{
	fetch(url)
	.then((response)=>response.json())
	.then((data)=>display(data))
	.catch(error => maybeError.innerHTML = error);
});

function download(data){
	information = data['results'][0];
	profile =document.createElement('div');
	profile.setAttribute('id', 'profile');

	let image = document.createElement('img');
	image.scr=information['picture']['large'];
	profile.appendChild(image);

	let city = document.createElement('p');
	image.innerHTML=`City: ${information['location']['city']}`;
	profile.appendChild(city);

	let country = document.createElement('p');
	image.innerHTML=`Country: ${information['location']['country']}`;
	profile.appendChild(country);

	let name = document.createElement('p');
	image.innerHTML=`Name: ${information['name']}`;
	profile.appendChild(name);

	let postcode = document.createElement('p');
	image.innerHTML=`Postcode: ${information['location']['postcode']}`;
	profile.appendChild(postcode);

    document.getElementById('information').appendChild(profile)
    maybeError.innerHTML='Success!'
}


/*
