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
