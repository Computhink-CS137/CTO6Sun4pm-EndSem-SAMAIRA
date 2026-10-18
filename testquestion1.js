let posX;
let speedX;
function setup() {
    createCanvas(600, 400);
    posX = width / 2;
    speedX = 5;
    background(137, 216, 230);
}

function draw () {
    background(137, 216, 230);
    circle(posX, 200, 50);
    fill(0, 200, 0);
    posX = posX + speedX
    if (posX >= 575) {
        speedX = -speedX
    }

}
