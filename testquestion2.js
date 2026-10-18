let pokemons = ["Pikachu", "Raichu", "Balbasaur", "Mewtwo", "Charizard" ];
let yPos;
let happy;

function setup() {
    createCanvas(200, 300);
    Fill("pink");
    textAlign(CENTER, CENTER);
    fontSize(20);
    yPos = 100;
}

function draw() {
    for (let i = 0; i < pokemons.length; i++) {

        text( pokemon[i], width / 2, yPos)
        yPos = yPos + i * 30
    }
}
 