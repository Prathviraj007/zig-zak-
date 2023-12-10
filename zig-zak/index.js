const gameInfo=document.querySelector('.game-info');
const boxes= document.querySelectorAll('.box');
const newBtn=document.querySelector('.btn');

let currentPlayer;
let gridGame;
let winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function initGame(){
    currentPlayer='X';
    gridGame=['','','','','','','','',''];
    //ui par empty ke liye
    boxes.forEach((data,ind)=>{
        data.innerHTML=''
        boxes[ind].style.pointerEvents='all'
        boxes[ind].classList.remove('win')
        
    })
    newBtn.classList.remove('active');
    gameInfo.textContent=`Current player :- ${currentPlayer}`

}
initGame();

function swapPlayer(){
     if(currentPlayer=='X'){
        currentPlayer='0'
        gameInfo.textContent=`Current player :- ${currentPlayer}`
     }
     else{
        currentPlayer='X'
        gameInfo.textContent=`Current player :- ${currentPlayer}`
     }

}
function gameOver(){
    let answer='';

    winningPosition.forEach((position)=>{
        console.log('ii',position)
        console.log('pp',position[0])
        console.log('jj',gridGame[position[0]] )
        if((gridGame[position[0]]!=='' || gridGame[position[1]]!=='' || gridGame[position[2]]!=='')
        &&(gridGame[position[0]]===gridGame[position[1]]) && (gridGame[position[1]]===gridGame[position[2]])){
            // console.log('completed',gridGame[position[2]] )
            if(gridGame[position[0]]==='X')
            answer='X';
            else
            answer = '0';



            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })
       
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

           if(answer!==""){
            gameInfo.textContent=`Winner Player - ${answer}`;
            newBtn.classList.add("active");
            return;
           }
        
           let fillCount=0;
           gridGame.forEach((box)=>{
            if(box!==''){
                fillCount++;
            }
           })

           //game is tie
           if(fillCount===9){
            gameInfo.textContent="game tie";
            newBtn.classList.add("active")
           }
}

function handleClick(index){
    if(gridGame[index]===''){
        boxes[index].innerHTML=currentPlayer;
        gridGame[index]=currentPlayer;
        boxes[index].style.pointerEvents='none';
        swapPlayer()
        gameOver()
    }
}

boxes.forEach((event,index)=>{
    event.addEventListener('click',function(){
        // console.log(index);
        handleClick(index);
    })
})
 

newBtn.addEventListener('click' , initGame);