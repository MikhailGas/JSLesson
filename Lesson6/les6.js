

let chess ={
    name: 'Шахматы',
    designation: {
        col: ['A','B','C','D','E','F','G','H'],
        row: [1,2,3,4,5,6,7,8],
    },
    figurs: {
        BlackKing:{fig: 'Кр', color: 'black', img:'king'},
        BlackQueen:{fig: 'Ф', color: 'black', img:'queen'},
        BlackBishop:{fig: 'С', color: 'black', img:'bishop'},
        BlackKnight:{fig: 'К', color: 'black', img:'knight'},
        BlackRook:{fig: 'Л', color: 'black', img:'rook'},
        BlackPawn:{fig: 'П', color: 'black', img:'pawn'},
        WhiteKing:{fig: 'КР', color: 'white', img:'king'},
        WhiteQueen:{fig: 'Ф', color: 'white', img:'queen'},
        WhiteBishop:{fig: 'С', color: 'white', img:'bishop'},
        WhiteKnight:{fig: 'К', color: 'white', img:'knight'},
        WhiteRook:{fig: 'Л', color: 'white', img:'rook'},
        WhitePawn:{fig: 'П', color: 'white', img:'pawn'},
        empty:{fig:'', color:'', img:''},
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
                    cell.innerHTML = '<i class="fas fa-chess-' + this.figurs[this.gameField['' + i + j]].img + ' ' + this.figurs[this.gameField['' + i + j]].color +  '"></i>';
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

let timer1 = createElement('div', 'timer');
let timer2 = createElement('div', 'timer');
let button1 = createElement('div', 'button active');
let button2 = createElement('div', 'button pressed');

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
chess.startPosition('black'); // цвет фигур игрока(игрок внизу)
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
    
    if(event.target.tagName == 'I'){
        if(!isSelect){
            event.target.offsetParent.style.backgroundColor = 'green';
            isSelect = !isSelect;
            selectCellPos = event.target.offsetParent.classList[2];    
            
        }else{
            if (event.target.offsetParent.style.backgroundColor == 'green' || event.target.offsetParent.style.backgroundColor == 'red'){
                event.target.offsetParent.style.backgroundColor = '';
                isSelect = !isSelect;
                selectCellPos = '';
            }
                
        }
        
    }
          
    
    if(event.target.tagName == 'TD' && event.target.childElementCount != 0){
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
    if(!flagCount2){
        flagCount2 = true;
        flagCount1 = false;
        button1.classList.add('pressed');
        button1.classList.remove('active')
        button2.classList.remove('pressed');
        button2.classList.add('active');
        timerID2 = setTimeout(test, 1000);
        clearTimeout(timerID1);
    }
    
    
}

button2.onclick = function(){
    if(!flagCount1){
        flagCount1 = true;
        flagCount2 = false;
        button2.classList.add('pressed');
        button2.classList.remove('active');
        button1.classList.remove('pressed');
        button1.classList.add('active');
        timerID1 = setTimeout(test, 1000);
        clearTimeout(timerID2);
    }
    
    
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










