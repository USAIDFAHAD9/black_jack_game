let cards=[]  // this is an array to store cards
let sum= 0
let hasblackjack= false
let isalive = false
let message = ""
let sumEl=document.querySelector('#sum-el')
let messageEl=document.querySelector('#message-el')
let cardsEl=document.querySelector('#cards-el')

let playerEl=document.querySelector('#player-el')

let player={
    name:'Usaid',
    chips:14
}
playerEl.textContent=player.name+':  $'+player.chips
function startgame()
{
    isalive=true
    let firstCard=randomCard();
    let secondCard=randomCard();
    cards=[firstCard, secondCard]
    sum= cards[0] + cards[1]
    rendergame()
}

function rendergame()
{
    if(sum<=20)
    {
        message='Do you want to draw another card??'
    }
    else if(sum===21)
    {   
        message=" Wuhooo you've got a black jack..!" 
        hasblackjack= true
    }
    else
    {
        message="You're out of the game"
        isalive = false
    }
    messageEl.textContent=message
    sumEl.textContent='Sum:' + sum
    cardsEl.textContent='Cards: '

    for(let i=0 ; i<cards.length ; i++)
    {
        cardsEl.textContent+= cards[i]
        if(i!=cards.length-1)
        cardsEl.textContent+=','

    }
}

function newcard()
{
    if((isalive===true) && (hasblackjack===false))
    {
        let newCard = randomCard()
        sum+=newCard
        cards.push(newCard)
        rendergame()
    }
    
}

function randomCard(){
    let no= Math.floor(Math.random()*13)+1
    console.log(no)
    if(no===1)
    {
        return 11
    }
    
    else if (no>=10)
    {
        return 10
    }
    
    else
    {
        return no
    }
}
