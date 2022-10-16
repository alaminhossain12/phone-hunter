const loadPhone = (search) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};

const displayPhones = (phones) => {
  // console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerHTML = "";
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card">
    <img src="${phone.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <h2>${phone.brand}</h2>
        <p class="card-text">
          ${phone.slug}
        </p>
        <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-success">Details</button>
      </div>
  </div>
    `;
    phonesContainer.appendChild(phoneDiv);
  });
};

const searchPhone = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadPhone(searchText);
  searchField.value = "";
};

const loadPhoneDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhonesDetails(data.data));
};

const displayPhonesDetails = (phone) => {
  console.log(phone);
  const phoneDetails = document.getElementById("phones-details");
  phoneDetails.innerHTML = "";
  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("card");
  phoneDiv.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <h2>${phone.brand}</h2>
      <p>${phone.mainFeatures.storage}<p>
      <p class="card-text">
        ${phone.slug}
      </p>
      <h3>${phone.releaseDate}</h3>
    </div>
  `;
  phoneDetails.appendChild(phoneDiv);
};

loadPhone("apple");
