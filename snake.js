
var c = document.getElementById("cSnake");
var ctx = c.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(150, 150, 30, 10);

let lineX= 150
let lineY= 150;

let directionX = 5;
let directionY = 0;

async function snakeLoop() {

    ctx.clearRect(lineX, lineY, 30, 10);

    lineX += directionX;
    lineY += directionY;

    ctx.fillRect(lineX, lineY, 30, 10);

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
            directionY = 5;
            console.log("s was pressed");
            break;
        case 'w':
            directionX = 0;
            directionY = -5;
            console.log("w was pressed");
            break;
        case 'd':
            directionX = 5;
            directionY = 0;
            console.log("d was pressed");
            break;
        case 'a':
            directionX = -5;
            directionY = 0;
            console.log("a was pressed");
            break;
    }
})