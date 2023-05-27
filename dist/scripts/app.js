import { Card } from "./card.js";
import { HttpClient } from "./httpClient.js";

const cardsWrapper = document.getElementById("cards-wrapper");
const modal = document.querySelector(".modal_wrapper");
const dayReservation = document.getElementById("day-reservation");
const moduleDrName =document.getElementById("module-dr-name");
const moduleDrSpecialist =document.getElementById("module-dr-specialist");
const moduleDrImage = document.getElementById("module-dr-image");
const modulePatientLastname = document.getElementById("module-patient-lastname");
const modulePatientFirstname = document.getElementById("module-patient-firstname");
const modulePatientMobileNumber = document.getElementById("module-patient-mobile-number");

const cards = [];

const request = new HttpClient("http://localhost:3000/all");
request.getAll().then((result) => {
  console.log(result);
  // cards = [...result]
  result.forEach((item) => {
    cards.push(new Card(item));
  });
  console.log(cards);
  init();
});

function generateCard(card){
  return `<div data-id=${card.id} class="card">
  <div class="w-[70px] h-[70px] overflow-hidden rounded-full">
    <img class="w-full h-full object-cover" src="${card.image}" />
  </div>

  <p>نام :<span class="mx-2">${card.name}</span></p>
  <p>تخصص :<span class="mx-2">${card.specialist}</span></p>

  <button onclick="handleReservationBtn(this)" class="bg-indigo-500 text-sm rounded-full px-4 py-1 pb-2">
    رزرو پزشک
  </button>
</div>`
}


function init(){
cards.forEach((card)=>{
  cardsWrapper.innerHTML += generateCard(card);
})
}

window.handleReservationBtn=(e)=>{
const cardElement = e.closest(".card");
const id = cardElement.dataset.id;
cards.forEach((card)=>{
  if (card.id===id){
    modal.classList.remove("hidden");
    dayReservation.innerHTML = generateBtn(card.reserveDate);
    moduleDrName.textContent = card.name;
    moduleDrSpecialist.textContent = card.specialist;
    moduleDrImage.src = card.image;

  }
})
}

function generateBtn(list){
  let html = "";
  list.forEach((day)=>{
html += `<button onclick="handleDateBtn(this)" >${day}</button>`
  })
  return html
}

window.handleDateBtn=(e)=>{
  const btns = dayReservation.querySelectorAll("button");
  btns.forEach((btn)=>{
btn.classList.remove("active-btn")
  })
e.classList.toggle("active-btn");
const reservationInfo = {
  "patientFirstName":modulePatientFirstname.value,
  "patientLastName":modulePatientLastname.value,
  "patientMobilNumber":modulePatientMobileNumber.value,
  "reserveDate":e.textContent,
}
modal.classList.add("hidden");
console.log(reservationInfo);

}

