const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const alienImg = ['./assets/monster-1.png','./assets/monster-2.png', './assets/monster-3.png']

//captar movimento e tiro da nave
function flyShip(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault()
        moveUp()
    } else if(event.key === 'ArrowDown') {
        event.preventDefault()
        moveDown();
    } else if(event.key === " ") {
        event.preventDefault()
        fireLaser()
    }
}

//função para subir
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top')
    if(topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition)
        position -= 50
        yourShip.style.top = `${position}px`
    }
}

//função para descer
function moveDown() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top')
    if(topPosition === "500px"){
        return
    } else {
        let position = parseInt(topPosition)
        position += 50
        yourShip.style.top = `${position}px`
    }
}

//funcao atirar
function fireLaser(){
    let laser = createLaserElement()
    playArea.appendChild(laser)
    moveLaser(laser)
}

function createLaserElement(){
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'))
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'))
    let newLaser = document.createElement('img')
    newLaser.src = './assets/shoot.png'
    newLaser.classList.add('laser')
    newLaser.style.left = `${xPosition}px`
    newLaser.style.top = `${yPosition - 10}px`
    return newLaser
}

function moveLaser(laser){
     let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left) 
        
        if(xPosition === 340){
            laser.remove()
        } else {
            laser.style.left = `${xPosition + 8}px`
        }
     },10)    
}


//cria inimigos aleatorios
function createAliens(){
    let newAlien = document.createElement('img')
    let alienSprite = alienImg[Math.floor(Math.random() * alienImg.length)]  //sorteio de imgs
    newAlien.src = alienSprite
    newAlien.classList.add('alien')
    newAlien.classList.add('alien-transition')
    newAlien.style.left = '370px'
    newAlien.style.top = `${Math.floor(Math.random() * 330) + 30}`
    playArea.appendChild(newAlien)
    moveAlien(newAlien)
}

//


window.addEventListener('keydown',flyShip)









