//Obtener el nombre del jugador y generar la bienvenida
const nameInput = $('.name');
const nameIntro = $('.name--intro');

$('.name--input').on('click', function () {
  const name = nameInput.val();
  const nameWelcome = `¡Hola, ${name}, ya podés jugar!`
  nameIntro.append(nameWelcome);
})

//Crear el array de cartas
const cardsBasic = ['assets/adaLovelace.jpg', 'assets/chienS.png', 'assets/graceHopper.jpg'];

//Hago tres copias de las cartas originales
const actualCards = cardsBasic.concat(cardsBasic, cardsBasic, cardsBasic);

//Aleatorizar las cartas
actualCards.sort(() => 0.5 - Math.random());

//Variables iniciales

const matchCard = 'assets/star.png';
const backCard = 'assets/adafront.png';

let pickedCards = [];
let matches = 0; //Cuento las coincidencias
let chances = 12; //Oportunidades que tengo para ganar


//Función principal, cambio las imágenes
$('.card').on('click', function (e) {
  let clickedCard = $(this).index();
  let cardImg = $(this);
  cardImg.attr('src', actualCards[clickedCard]);
  cardImg.addClass('selected');

  if (cardImg.hasClass('selected')) {
    pickedCards.push(cardImg);
  }
  else {
    return;
  }
  setTimeout(function () {
    if (pickedCards.length == 2) {
      const firstCard = pickedCards[0];
      const secondCard = pickedCards[1];

      if (firstCard.attr('src') === secondCard.attr('src')) {
        firstCard.attr('src', matchCard);
        secondCard.attr('src', matchCard);
        pickedCards = [];
        matches++;
        firstCard.removeClass('selected');
        secondCard.removeClass('selected');
      }
      else {
        firstCard.attr('src', backCard);
        secondCard.attr('src', backCard);
        pickedCards = [];
        chances--
        document.getElementById('chancesLeft').innerHTML = chances;
        firstCard.removeClass('selected');
        secondCard.removeClass('selected');
      }
    }

    if (matches === 6) {
      alert('¡Ganaste!')
    }

    if (chances === 0) {
      alert('¡Perdiste!')
    }


  }, 1800);




})



