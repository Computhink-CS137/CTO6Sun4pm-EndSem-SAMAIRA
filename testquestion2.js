let pokemons = ["Pikachu", "Raichu", "Balbasaur", "Mewtwo", "Charizard" ];
let yPos;

function setup() {
    createCanvas(200, 300);
    Fill("pink");
    textAlign(CENTER, CENTER);
    fontSize(20);
    yPos = 100;
}

function draw() {
    for (let i; i < 5; i++) {
        yPos = yPos + i 
    }
}
