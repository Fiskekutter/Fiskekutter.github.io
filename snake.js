
var c = document.getElementById("cSnake");
var ctx = c.getContext("2d");

ctx.lineWidth = 5;

let lineX= 150
let lineY= 150;

let directionX = 1;
let directionY = 0;

async function snakeLoop() {
    let moveX = lineX;
    let moveY = lineY;

    lineX = lineX + directionX;
    lineY = lineY + directionY;
    
    ctx.beginPath();
    ctx.moveTo(lineX, lineY);
    ctx.lineTo(moveX, moveY);
    ctx.stroke();
        
    if(lineX == 300 || lineY == 300 || lineX == 0 || lineY == 0){
        clearTimeout(refresh);
    }
}

var refresh = setInterval(snakeLoop, 500);


document.addEventListener("keydown", 
    (event) => {
        const keyName = event.key;
    
    switch(keyName){
        case 's':
            directionX = 0;
            directionY = 1;
            console.log("s was pressed");
            break;
        case 'w':
            directionX = 0;
            directionY = -1;
            console.log("w was pressed");
            break;
        case 'd':
            directionX = 1;
            directionY = 0;
            console.log("d was pressed");
            break;
        case 'a':
            directionX = -1;
            directionY = 0;
            console.log("a was pressed");
            break;
    }
})