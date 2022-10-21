const cardArray = [
    {
        name: 'newYork',
        img: 'images/newYork.jpg',
    },
    {
        name: 'copenhague',
        img: 'images/copenhague.jpg'
    },
    {
        name: 'london',
        img: 'images/london.jpg',
    },
    {
        name: 'rio',
        img: 'images/rio.jpg',
    },
    {
        name: 'argy',
        img: 'images/argy.jpg',
    },
    {
        name: 'newYork',
        img: 'images/newYork.jpg',
    },
    {
        name: 'copenhague',
        img: 'images/copenhague.jpg'
    },
    {
        name: 'london',
        img: 'images/london.jpg',
    },
    {
        name: 'rio',
        img: 'images/rio.jpg',
    },
    {
        name: 'argy',
        img: 'images/argy.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/question.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')

    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/complete.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/complete.jpg')
        cards[cardsChosenIds[0].removeEventListener('click', flipcard)]
        cards[cardsChosenIds[1].removeEventListener('click', flipcard)]
        cardsWon.push(cardsChosen)
    }
    cardsChosen = []
    cardsChosenIds = []
}

function flipcard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    // Now to check if they match
    if (cardsChosen.length === 2){
        setTimeout(checkMatch , 500)
    }
}