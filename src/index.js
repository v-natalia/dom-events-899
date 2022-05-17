
// selectionner des elements et ajouter des elem HTML
const list = document.querySelector("#players");
// list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
// list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");
const element = list.querySelector(".red");

// ajouter, enlever une class css
const list = document.querySelector('#fifa-wins li')
// console.log(list);
// list.classList.add('red');
// list.classList.toggle('red');
// list.classList.remove("red");

// modifier un element dans un champ de formulaire
const email = document.querySelector('#email');
// const emailInput = document.getElementById("email");
console.log(email.value);
email.value = 'natalia@gmail.com';


// selectionner le text ou le HTML d'un element
const home = document.getElementById('home');
// typeof home;

console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);
home.innerHTML = "Le Wagon <strong>rocks</strong>!";
// typeof(home.innerHTML);


// selectionner 1 photo
const romain = document.getElementById('romain');
console.log(romain);

romain.addEventListener('click', (event) => {
  // console.log('You clicked')
  // console.log(event.currentTarget);
  romain.classList.toggle('img-circle');

});

// selectionner plusieurs photos
const photos = document.querySelectorAll('img');
photos.forEach((img) => {
  img.addEventListener('click', (event) => {
    // debugger
    event.currentTarget.classList.toggle('img-circle');
  });
});
