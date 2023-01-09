const timeLeftDisplay = document.querySelector('#timeLeft')
const resultDisplay = document.querySelector('#result')
const startPauseDisplay = document.querySelector('#startPause')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76
const width = 9

function moveFrog(e) {

    squares[currentIndex].classList.remove('frog')

    switch(e.key) {
        case 'ArrowLeft' :
            if(currentIndex % width !== 0)  currentIndex -= 1
            break
    }
    switch(e.key) {
        case 'ArrowRight' :
            if(currentIndex % width < width -1) currentIndex += 1
            break
    }
    switch(e.key) {
        case 'ArrowUp' :
            if(currentIndex - width >= 0) currentIndex -= width
            break
    }
    switch(e.key) {
        case 'ArrowDown' :
            if(currentIndex + width < width * width) currentIndex += width
            break
    }

    squares[currentIndex].classList.add('frog')


}

document.addEventListener('keyup', moveFrog)