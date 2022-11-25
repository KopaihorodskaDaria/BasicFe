const container = document.getElementById('container');

			async function getPerson(){
				const url = 'https://randomuser.me/api';
				const response = await fetch(url, {method: 'GET', });

				const responseResult= await response.json();
				return responseResult.results[0];
			}

			async function download(){
				const person = await getPerson();

				const temple = `
					<div class ="card">
						<div><img scr = "${person.picture.medium}" alt=""></div>
						<div>
							<p><b>city:${person.location.city}</p>
							<p><b>country:${person.location.country}</p>
							<p><b>name:${person.name}</p>
							<p><b>postcode:${person.location.postcode}</p>
						</div>
					</div>`;

				container.insertAdjacentHTML('afterbegin', temple);
			}
