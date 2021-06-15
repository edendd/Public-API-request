const gallery = document.getElementById("gallery");
let Api = "https://randomuser.me/api/?results=12&nat=us";

fetch(Api)
  .then((response) => response.json())
  //.then(data => console.log(data))

  .then((data) => {
    generateprofile(data.results);
    changeModal(data.results);
  });

// creating the helper function to generate the profile
function generateprofile(data) {
  data.map((user) => {
    user = `<div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${user.picture.medium}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
                <p class="card-text">${user.email}</p>
                <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
            </div>
        </div>`;

    gallery.insertAdjacentHTML("beforeend", user);
  });
}

// use ethis function to access the modal

function generateModal(userData) {
  let date = new Date(userData.dob.date);
  let month = date.getMonth();
  let day = date.getDay();
  let year = date.getFullYear();
  const birthday = `${month}-${day}-${year}`;

  modal = `<div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${userData.picture.medium}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${userData.name.first} </h3>
        <p class="modal-text">${userData.email}</p>
        <p class="modal-text cap">${userData.location.city}</p>
        <hr>
        <p class="modal-text">${userData.phone}</p>
        <p class="modal-text">${userData.location.street.number} ${userData.location.street.name} ${userData.location.city}</p>
        <p class="modal-text">Birthdate: ${birthday}</p>
    </div>
  </div>
</div>`;

  gallery.insertAdjacentHTML("beforeend", modal);

  // event listner to link modal window
  let closeButton = document.querySelector(".modal-close-btn");
  let modalContainer = document.querySelector(".modal-container");

  closeButton.addEventListener("click", (e) => {
    modalContainer.style.display = "none";
    modalContainer.remove();
  });
}

// helps to change users by looping over on the list
function changeModal(modalData) {
  let card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", (e) => {
      generateModal(modalData[i]);
    });
  }
}
