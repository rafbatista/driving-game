/* eslint-disable no-unused-vars */

const $raceTrack = document.querySelector('.race-track')
$raceTrack.style.position = 'relative'
$raceTrack.style.width = '500px'
$raceTrack.style.height = '400px'

const $raceCar = document.createElement('img')
$raceCar.classList.add('race-car')
$raceCar.setAttribute('src', 'rsz_1race-car.jpg')
$raceCar.style.position = 'absolute'

const $buttonCont = document.querySelector('.button-container')
$buttonCont.style.width = '300px'
$buttonCont.style.height = '200px'

function renderCarOnPage() {
  $raceTrack.appendChild($raceCar)
}

renderCarOnPage()

const $startButton = document.createElement('button')
$startButton.setAttribute('type', 'button')
$startButton.setAttribute('name', 'button')
$startButton.textContent = 'Start'

function renderStartButtonOnPage() {
  $buttonCont.appendChild($startButton)
}

renderStartButtonOnPage()

class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
  }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
    }
  }
  start() {
    setInterval(function () {
      raceCar.move()
      $raceCar.style.left = raceCar.location[0] + 'px'
      $raceCar.style.top = raceCar.location[1] + 'px'
    }, 16)
  }
}

const raceCar = new Car('east', 2, [0, 0])

let hasStarted = false
$startButton.addEventListener('click', function (event) {
  if (!hasStarted) {
    raceCar.start()
    hasStarted = true
  }
})
