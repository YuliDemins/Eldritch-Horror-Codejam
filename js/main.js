import { cardsDataGreen } from './green.js'
import { cardsDataBrown } from './brown.js'
import { cardsDataBlue } from './blue.js'
import { ancientsData } from './ancients.js'

const Levels = document.querySelectorAll('.level_btn')

const veryEasy = document.getElementById('very_easy')
const Easy = document.getElementById('easy')
const Normal = document.getElementById('normal')
const Hard = document.getElementById('hard')
const veryHard = document.getElementById('very_hard')

const firstStageGreen = document.querySelector('.first_stage-green')
const firstStageBrown = document.querySelector('.first_stage-brown')
const firstStageBlue = document.querySelector('.first_stage-blue')

const SecondStageGreen = document.querySelector('.second_stage-green')
const SecondStageBrown = document.querySelector('.second_stage-brown')
const SecondStageBlue = document.querySelector('.second_stage-blue')

const ThirdStageGreen = document.querySelector('.third_stage-green')
const ThirdStageBrown = document.querySelector('.third_stage-brown')
const ThirdStageBlue = document.querySelector('.third_stage-blue')

const Ancient = document.querySelectorAll('.ancient')
const Cards = document.querySelector ('.cards')
const RandomCards = document.querySelector ('.random')

const DeskBtn = document.querySelector('.desk_btn')

let arrAllCards = [...cardsDataGreen,...cardsDataBrown, ...cardsDataBlue]

let arr = []

let arrColor = []

Ancient.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        arrColor = []
        if (e.currentTarget) {
            arrColor.length = 0

            firstStageGreen.textContent = ancientsData[index].firstStage.greenCards
            firstStageBrown.textContent = ancientsData[index].firstStage.brownCards
            firstStageBlue.textContent = ancientsData[index].firstStage.blueCards 
        
            SecondStageGreen.textContent = ancientsData[index].secondStage.greenCards
            SecondStageBrown.textContent = ancientsData[index].secondStage.brownCards
            SecondStageBlue.textContent = ancientsData[index].secondStage.blueCards
    
            ThirdStageGreen.textContent = ancientsData[index].thirdStage.greenCards
            ThirdStageBrown.textContent = ancientsData[index].thirdStage.brownCards
            ThirdStageBlue.textContent = ancientsData[index].thirdStage.blueCards

            arrColor.push(ancientsData[index].firstStage.greenCards + ancientsData[index].secondStage.greenCards + ancientsData[index].thirdStage.greenCards)
            arrColor.push(ancientsData[index].firstStage.brownCards + ancientsData[index].secondStage.brownCards + ancientsData[index].thirdStage.brownCards)
            arrColor.push(ancientsData[index].firstStage.blueCards + ancientsData[index].secondStage.blueCards + ancientsData[index].thirdStage.blueCards)

            Cards.classList.remove('_active')
            RandomCards.classList.remove('_active')
            cards = []
            arr = []

            Levels.forEach((item, index) => item.classList.remove('_disable'))

            Ancient.forEach((item, index) => item.firstElementChild.classList.remove('_select'))
            item.firstElementChild.classList.add('_select')
        } 
    })
})

Levels.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        DeskBtn.classList.remove('_disable')
        let firstRound = []
        let SecondRound = []
        let ThirdRound = []

        cards = []

        Levels.forEach(item => item.classList.remove('_select'))
        item.classList.add('_select')
        Cards.classList.remove('_active')
        RandomCards.classList.remove('_active')

        if (e.currentTarget == veryEasy) {
            console.log(e.currentTarget.id)
            veryEasyLevel()
        }
        if (e.currentTarget == Easy) {
            console.log(e.currentTarget.id)
            easyLevel()
        }
        if (e.currentTarget == Normal) {
            console.log(e.currentTarget.id)
            normalLevel()
        }
        if (e.currentTarget == Hard) {
            console.log(e.currentTarget.id)
            hardLevel()
        }
        if (e.currentTarget == veryHard) {
            console.log(e.currentTarget.id)
            veryHardLevel()
        }})     
})

let firstRound = []
let SecondRound = []
let ThirdRound = []

let cards= []

let arrGreen = []
let arrBrown = []
let arrBlue = []

function veryEasyLevel() {
    arr.length = 0;
    arrGreen.length= 0;
    arrBrown.length= 0;
    arrBlue.length= 0;

    cardsDataGreen.filter(card => card.difficulty == 'easy').length >= arrColor[0] ? arrGreen = cardsDataGreen.filter(card => card.difficulty == 'easy').splice(0, arrColor[0]) : arrGreen = [].concat(cardsDataGreen.filter(card => card.difficulty == 'easy'),cardsDataGreen.filter(card => card.difficulty == 'normal')).splice(0, arrColor[0])

    cardsDataBrown.filter(card => card.difficulty == 'easy').length >= arrColor[1] ? arrBrown = cardsDataBrown.filter(card => card.difficulty == 'easy').splice(0, arrColor[0]) : arrBrown = [].concat(cardsDataBrown.filter(card => card.difficulty == 'easy'),cardsDataBrown.filter(card => card.difficulty == 'normal')).splice(0, arrColor[1])

    cardsDataBlue.filter(card => card.difficulty == 'easy').length >= arrColor[1] ? arrBlue = cardsDataBlue.filter(card => card.difficulty == 'easy').splice(0, arrColor[0]) : arrBlue = [].concat(cardsDataBlue.filter(card => card.difficulty == 'easy'),cardsDataBrown.filter(card => card.difficulty == 'normal')).splice(0, arrColor[2])
    arr = [].concat(arrGreen, arrBrown, arrBlue)
    }
    

function easyLevel() {
    arr.length = 0;
    arrGreen.length= 0;
    arrBrown.length= 0;
    arrBlue.length= 0;

    for (let i = 0; i < arrAllCards.length; i++){
       if (arrAllCards[i].difficulty !== 'hard') {
       if (arrAllCards[i].color == 'green') arrGreen.push(arrAllCards[i])
       else if (arrAllCards[i].color == 'brown') arrBrown.push(arrAllCards[i])
       else if (arrAllCards[i].color == 'blue') arrBlue.push(arrAllCards[i])
       arr.push(arrAllCards[i])
       } 
    }  
}

function normalLevel() {
    arr.length = 0;
    arrGreen.length= 0;
    arrBrown.length= 0;
    arrBlue.length= 0;
    for (let i = 0; i < arrAllCards.length; i++){
        arr.push(arrAllCards[i])
        if (arrAllCards[i].color == 'green') arrGreen.push(arrAllCards[i])
        else if (arrAllCards[i].color == 'brown') arrBrown.push(arrAllCards[i])
        else if (arrAllCards[i].color == 'blue') arrBlue.push(arrAllCards[i])
    } 
}

function hardLevel() {
    arr.length = 0;
    arrGreen.length= 0;
    arrBrown.length= 0;
    arrBlue.length= 0;
    for (let i = 0; i < arrAllCards.length; i++){
        if (arrAllCards[i].difficulty !== 'easy') {
        if (arrAllCards[i].color == 'green') arrGreen.push(arrAllCards[i])
        else if (arrAllCards[i].color == 'brown') arrBrown.push(arrAllCards[i])
        else if (arrAllCards[i].color == 'blue') arrBlue.push(arrAllCards[i])
        arr.push(arrAllCards[i])
        } 
     } 
}

function veryHardLevel() {
    arr.length = 0;
    arrGreen.length= 0;
    arrBrown.length= 0;
    arrBlue.length= 0;

    cardsDataGreen.filter(card => card.difficulty == 'hard').length >= arrColor[0] ? arrGreen = cardsDataGreen.filter(card => card.difficulty == 'hard').splice(0, arrColor[0]) : arrGreen = [].concat(cardsDataGreen.filter(card => card.difficulty == 'hard'),cardsDataGreen.filter(card => card.difficulty == 'normal')).splice(0, arrColor[0])

    cardsDataBrown.filter(card => card.difficulty == 'hard').length >= arrColor[1] ? arrBrown = cardsDataBrown.filter(card => card.difficulty == 'hard').splice(0, arrColor[0]) : arrBrown = [].concat(cardsDataBrown.filter(card => card.difficulty == 'hard'),cardsDataBrown.filter(card => card.difficulty == 'normal')).splice(0, arrColor[1])

    cardsDataBlue.filter(card => card.difficulty == 'hard').length >= arrColor[1] ? arrBlue = cardsDataBlue.filter(card => card.difficulty == 'hard').splice(0, arrColor[0]) : arrBlue = [].concat(cardsDataBlue.filter(card => card.difficulty == 'hard'),cardsDataBrown.filter(card => card.difficulty == 'normal')).splice(0, arrColor[2])

    arr = [].concat(arrGreen, arrBrown, arrBlue)
}

function getRound() {
    let shuffleGreen = arrGreen.sort(() => Math.random() - 0.5);
    let shuffleBrown = arrBrown.sort(() => Math.random() - 0.5); 
    let shuffleBlue = arrBlue.sort(() => Math.random() - 0.5); 

    if (cards.length == 0) {
        for (let i = 1; i <= +firstStageGreen.textContent; i++ ) firstRound.push(...shuffleGreen.splice(0, 1))
        for (let i = 1; i <= +firstStageBrown.textContent; i++ ) firstRound.push(...shuffleBrown.splice(0, 1))
        for (let i = 1; i <= +firstStageBlue.textContent; i++ ) firstRound.push(...shuffleBlue.splice(0, 1))

        for (let i = 1; i <= +SecondStageGreen.textContent; i++ ) SecondRound.push(...shuffleGreen.splice(0, 1))
        for (let i = 1; i <= +SecondStageBrown.textContent; i++ ) SecondRound.push(...shuffleBrown.splice(0, 1))
        for (let i = 1; i <= +SecondStageBlue.textContent; i++ ) SecondRound.push(...shuffleBlue.splice(0, 1))

        for (let i = 1; i <= +ThirdStageGreen.textContent; i++ ) ThirdRound.push(...shuffleGreen.splice(0, 1))
        for (let i = 1; i <= +ThirdStageBrown.textContent; i++ ) ThirdRound.push(...shuffleBrown.splice(0, 1))
        for (let i = 1; i <= +ThirdStageBlue.textContent; i++ ) ThirdRound.push(...shuffleBlue.splice(0, 1))
    
        let shuffleFirst = firstRound.sort(() => Math.random() - 0.5);
        let shuffleSecond = SecondRound.sort(() => Math.random() - 0.5);
        let shuffleThird = ThirdRound.sort(() => Math.random() - 0.5);

        cards = [...shuffleFirst, ...shuffleSecond, ...shuffleThird] 
    }
}

DeskBtn.addEventListener ('click', () => {
    firstRound = []
    SecondRound = []
    ThirdRound = []
    cards =[]

    getRound()

    Cards.classList.add('_active')
    RandomCards.classList.remove('_active')
    DeskBtn.classList.add('_disable')

    Levels.forEach((item, index) => item.classList.add('_disable'))
})

function createCards() { 
        cards.length > 0 ? showCards() : hiddenCards() 
}

function showCards(){
    RandomCards.classList.add('_active')
    RandomCards.style.backgroundImage = `url(${cards[0].url})`
    console.log(cards[0].id, cards[0].difficulty) 
    cards.shift()  
}

function hiddenCards() {
    Cards.classList.remove('_active')
    RandomCards.classList.remove('_active')
    arr = []
}
 
Cards.addEventListener('click', () => { 
    tracker()
    createCards()    
})

function tracker () {
    if (firstRound.length > 0) {
        if (cards[0].color == 'green' && firstStageGreen.textContent > 0) firstStageGreen.textContent--;
        if (cards[0].color == 'brown' && firstStageBrown.textContent > 0) firstStageBrown.textContent--;
        if (cards[0].color == 'blue' && firstStageBlue.textContent > 0) firstStageBlue.textContent --;
        firstRound.shift()
    } 
    else if (SecondRound.length > 0 && firstRound.length == 0) {
        if (cards[0].color == 'green' && SecondStageGreen.textContent > 0) SecondStageGreen.textContent--;
        if (cards[0].color == 'brown' && SecondStageBrown.textContent > 0 ) SecondStageBrown.textContent--;
        if (cards[0].color == 'blue' && SecondStageBlue.textContent > 0) SecondStageBlue.textContent --;
        SecondRound.shift()  
    } 
    else if (ThirdRound.length > 0 && firstRound.length == 0 && SecondRound.length == 0) {
        if (cards[0].color == 'green' && ThirdStageGreen.textContent > 0) ThirdStageGreen.textContent--;
        if (cards[0].color == 'brown' && ThirdStageBrown.textContent > 0) ThirdStageBrown.textContent--;
        if (cards[0].color == 'blue' && ThirdStageBlue.textContent > 0 ) ThirdStageBlue.textContent --;
        ThirdRound.shift();
    } 
}