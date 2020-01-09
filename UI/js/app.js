const usersCard = document.querySelector('#usersCard')
const userName = document.querySelector('#userName');
const user2 = document.querySelector('#users');


const url = "https://randomuser.me/api/?results=10";

fetch(url)
.then((resp) => resp.json())
.then((data) => {

    const users = data.results;

    let output;
    return users.map(user => {
        let name = user.name.first,
            img = user.picture.large,
            location = user.location.city;

        output += `<div class="users__card" id="users">
        <div class="users__card__img">
            <img src="${img}" class="card__img--responsive" alt="">
        </div>
        <h2 class="users--name" id="userName">${name}</h2>
        <p class="users--location"><i class="icofont-location-pin users--location--pin"></i> ${location}</p>
        <a href="#" class="user__view--profile">View Profile</a>
    </div>`;
    usersCard.innerHTML = output;
    });
    
}).catch((error) => {
    console.log(error);
    
});


 






