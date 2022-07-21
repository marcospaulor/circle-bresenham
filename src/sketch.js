// Variáveis para obter o elemento de input X e Y
let inputY = document.getElementById("y");
let inputX = document.getElementById("x");
let inputRaio = document.getElementById("r")
function setup() {
    if(windowWidth > 1000){
        createCanvas(windowWidth-50, windowHeight+200);
    } else {
        createCanvas(windowWidth-50,windowHeight-20);
    }
    background(255);
    translate(width/2, height/2)
    scale(1,-1)

    // Instancia do grid
    let grid = new Grid();
    grid.drawGrid() // Desenha as linhas do grid no canvas
}

// Redimencionar canvas
function windowResized(){
    setup();
    insertCircle();
}

// Insere um circulo de bresenham e sua referência
function insertCircle() {
    let x = inputX.value
    let y = inputY.value
    let r = inputRaio.value
    if (x != "" && y != "" && r != "") {
        if(x >= -26 && x <= 26 && y >= -26 && y <= 26 && r > 0){
            let circle = new CircleBresenham(x,y,r)
            circle.showCircle()
            circle.showRefCircle()

        }
    }
}

// Limpa o Canvas
function limparCanvas() {
    return setup();
}