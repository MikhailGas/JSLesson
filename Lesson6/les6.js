

let chess ={
    name: 'Шахматы',
    designation: {
        col: ['A','B','C','D','E','F','G','H'],
        row: [1,2,3,4,5,6,7,8],
    },
    figurs: {
        BlackKing:'&#9818',
        BlackQueen:'&#9819',
        BlackRook:'&#9820',
        BlackBishop:'&#9821',
        BlackKnight:'&#9822',
        BlackPawn:'&#9823',
        WhiteKing:'&#9812',
        WhiteQueen:'&#9813',
        WhiteRook:'&#9814',
        WhiteBishop:'&#9815',
        WhiteKnight:'&#9816',
        WhitePawn:'&#9817',
        empty:'',
    },
    gameField:{},
    redrawText: function(){
        let cell;
        for (let i = 1; i < 9; i++){
            for(let j = 1; j < 9; j++){
                cell = document.querySelector('.pos' + i + j);
                cell.innerHTML = '<span class="' + this.gameField['' + i + j].color + '">' + this.gameField['' + i + j].fig + '</span>';
                
            }
            
        }
    },
    redrawImg: function(){
        let cell;
        for (let i = 1; i < 9; i++){
            for(let j = 1; j < 9; j++){
                if(this.gameField['' + i + j] != 'empty'){
                    cell = document.querySelector('.pos' + i + j);
                    cell.innerHTML = this.figurs[this.gameField['' + i + j]];
                }
                
                
            }
            
        }
    },
    startPosition: function(color){
        let colorGamer = color;
        let sequenceWhiteComp = ['WhiteRook','WhiteKnight','WhiteBishop','WhiteKing','WhiteQueen','WhiteBishop','WhiteKnight','WhiteRook'];
        let sequenceWhiteGamer = ['WhiteRook','WhiteKnight','WhiteBishop','WhiteQueen','WhiteKing','WhiteBishop','WhiteKnight','WhiteRook'];
        let sequenceBlackComp = ['BlackRook','BlackKnight','BlackBishop','BlackQueen','BlackKing','BlackBishop','BlackKnight','BlackRook'];
        let sequenceBlackGamer = ['BlackRook','BlackKnight','BlackBishop','BlackKing','BlackQueen','BlackBishop','BlackKnight','BlackRook'];
        for (let i = 1; i < 9; i++){
            for(let j = 1; j < 9; j++){
                if (colorGamer == 'white' && i == 1){
                    this.gameField['' + i + j] = sequenceBlackComp[j - 1]
                }
                if (colorGamer == 'white' && i == 2){
                    this.gameField['' + i + j] = 'BlackPawn';
                }
                if (colorGamer == 'white' && i == 8){
                    this.gameField['' + i + j] = sequenceWhiteGamer[j - 1];
                }
                if (colorGamer == 'white' && i == 7){
                    this.gameField['' + i + j] = 'WhitePawn';
                }
                if(i > 2 && i < 7){
                    this.gameField['' + i + j] = 'empty';
                }
            }
            
            
        }
        for (let i = 1; i < 9; i++){
            for(let j = 1; j < 9; j++){
                if (colorGamer == 'black' && i == 1){
                    this.gameField['' + i + j] = sequenceWhiteComp[j - 1];
                }
                if (colorGamer == 'black' && i == 2){
                    this.gameField['' + i + j] = 'WhitePawn';
                }
                if (colorGamer == 'black' && i == 8){
                    this.gameField['' + i + j] = sequenceBlackGamer[j - 1];
                }
                if (colorGamer == 'black' && i == 7){
                    this.gameField['' + i + j] = 'BlackPawn';
                }
                if(i > 2 && i < 7){
                    this.gameField['' + i + j] = 'empty';
                }
            }
            
            
        }
    }
};
let time = {
    white: 30,
    black: 30,
};
let currentPlayer = 'white';
let timer1 = createElement('div', 'timer');
let timer2 = createElement('div', 'timer');

let colorGamer = 'white';
let button1, button2;

if(colorGamer = 'white'){
    button1 = createElement('div', 'button pressed');
    button2 = createElement('div', 'button active');
}else{
    button1 = createElement('div', 'button active');
    button2 = createElement('div', 'button pressed');
}


function createElement(elem, className){
    let element = document.createElement(elem);
    element.classList = className;
    return element;
}

function chessboard(){
    let gameBox = createElement('div', 'gameBox');
    let chessboard = createElement('table', 'chessboard');
    let app = document.querySelector('#app');
    let timerBox = createElement('div', 'timerBox');
    
    

    app.after(gameBox);
    gameBox.append(chessboard);
    gameBox.append(timerBox);
    timerBox.append(button1, timer1,timer2,button2);
    button1.innerText = 'Игрок 1';
    button2.innerText = 'Игрок 2';
    
    let isWhite = true;
    for (let i = 0; i <= 9; i++){
        let chessboard__row = createElement('tr', 'chessboard__row');
        chessboard.append(chessboard__row);
        for (let j = 0; j <= 9; j++){
            let chessboard__cell = createElement('td', 'chessboard__cell');
            chessboard__row.append(chessboard__cell);

            if (((i > 0) && (i < 9)) && ((j > 0) && (j < 9))){
                if(isWhite){
                    chessboard__cell.classList.add('chessboard__cell_white');

                    chessboard__cell.classList.add('pos' + i + j);


                    isWhite = false;
                }else{
                    chessboard__cell.classList.add('chessboard__cell_black');
                    chessboard__cell.classList.add('pos' + i + j);

                    isWhite = true;
                }
                if(j == 8) isWhite = !isWhite;

            }
            if ((i == 0 || i == 9) && (j > 0 && j < 9)){
                chessboard__cell.innerHTML = chess.designation.col[j-1];
            }
            if ((j == 0 || j == 9) && (i > 0 && i < 9)){
                chessboard__cell.innerHTML = chess.designation.row[i-1];
            }

        }
    }
}

// 1. ---------------------------------------------------
chessboard();

// 2. ---------------------------------------------------
chess.startPosition(colorGamer); // цвет фигур игрока(игрок внизу)
//chess.redrawText();

// 3. ----------------------------------------------------
chess.redrawImg();

let app = document.querySelector('#app');
let flagCount1 = false;
let flagCount2 = false;
let firstPlayerTime = 300;
let secondPlayerTime = 300;
let timerID1;
let timerID2;
let chessboard1 = document.querySelector('.chessboard');
let isSelect = false;
let body = document.querySelector('body');
let selectCellPos;


body.addEventListener('click', function(event){
    
    if(selectCellPos && (event.target.tagName == 'BODY' || event.target.offsetParent.tagName == 'BODY')){
        let cell = document.querySelector('.' + selectCellPos);
        cell.style.backgroundColor = 'red';
    }
    
                                         });

chessboard1.addEventListener('click', function(event){
    
   
          
    console.log(event);
    if(event.target.tagName == 'TD' && event.target.innerText != ''){
        if(!isSelect){
            event.target.style.backgroundColor = 'green';
            isSelect = !isSelect;
                
            
        }else{
            if (event.target.style.backgroundColor == 'green'){
                event.target.style.backgroundColor = '';
                isSelect = !isSelect;
            }
                
        }
        
        
    }
        
            console.log(event);
    
    
    
})



button1.onclick = function(){
    if(button1.classList[1] == 'active'){
        if(currentPlayer == 'white') currentPlayer = 'black'
        else currentPlayer = 'white';
        button1.classList.add('pressed');
        button1.classList.remove('active')
        button2.classList.remove('pressed');
        button2.classList.add('active');
        if(!flagCount1) {
            setTimeout(timer, 1000);
            flagCount1 = true;
        }
    }
    
    
}

button2.onclick = function(){
    if(button2.classList[1] == 'active'){
        if(currentPlayer == 'white') currentPlayer = 'black'
        else currentPlayer = 'white';
        button2.classList.add('pressed');
        button2.classList.remove('active');
        button1.classList.remove('pressed');
        button1.classList.add('active');
        if(!flagCount1) {
            setTimeout(timer, 1000);
            flagCount1 = true;
        }
    }
    
    
}

// данной переменной присваивается, чей ход, это определить либо по кнопке, либо какая фигура походила (много вариатнов)

function timer() {
    time[currentPlayer]--

    if (time[currentPlayer] > 0) {
        setTimeout(timer, 1000);
        if(colorGamer == 'white'){
            timer1.innerText = time['black'];
            timer2.innerText = time['white'];
        }
        else{
            timer1.innerText = time['white'];
            timer2.innerText = time['black'];
        }
        
        return
    }
    alert(`у игрока ${currentPlayer} 30 минут прошло`);
}




function test(){
    if (flagCount1) {
        firstPlayerTime--;
        if (firstPlayerTime > 0){
            timer1.innerText = firstPlayerTime;
            timerID1 = setTimeout(test, 1000);
            return;
        }
        timer1.innerText = 'Время вышло';
    }
    if (flagCount2) {
        secondPlayerTime--;
        if (secondPlayerTime > 0){
            timer2.innerText = secondPlayerTime;
            timerID2 = setTimeout(test, 1000);
            return;
        }
        timer2.innerText = 'Время вышло';
    }
   
   
    
}










