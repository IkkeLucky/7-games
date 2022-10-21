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

function createBoard () {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/question.jpg')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}

createBoard()