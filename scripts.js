const gallery = document.getElementById('gallery')
let Api = 'https://randomuser.me/api/?results=12&nat=us'

fetch(Api)
.then(response => response.json())
//.then(data => console.log(data)) will be able to see the user in log
.then(data => { 
    generateprofile(data.results);
    generateModal(data.results);
})

// creating the helper function to generate the profile
function generateprofile(data) {

const profile =  data.map( user => {
        `<div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${user.picture.medium}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${user.first} ${user.last}</h3>
                <p class="card-text">email</p>
                <p class="card-text cap">city, state</p>
            </div>
        </div>`
     } )

}