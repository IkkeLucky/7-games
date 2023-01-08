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
const resultDisplay = document.querySelector('#result')
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
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/question.jpg')
        cards[optionTwoId].setAttribute('src', 'images/question.jpg')
        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/complete.jpg')
        cards[optionTwoId].setAttribute('src', 'images/complete.jpg')
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src', 'images/question.jpg')
        cards[optionTwoId].setAttribute('src', 'images/question.jpg')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congrats! You found them all'
    }
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