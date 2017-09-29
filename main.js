/* eslint-disable no-unused-vars */

const $raceTrack = document.querySelector('.race-track')

function renderCar() {
  const $raceCar = document.createElement('img')
  $raceCar.classList.add('race-car')
  $raceCar.setAttribute('src', 'rsz_1race-car.jpg')
  $raceTrack.appendChild($raceCar)
}

renderCar()
