// initial values
let x, y, r, d, xc, yc;

let i = 0;
let grids = 50;
let scalFact;

function setup() {
    createCanvas(1000, 800);
    background(255);
    translate(width/2, height/2)
    scale(1,-1)

    scalFact = width / grids;
    r = 10 * scalFact;

    xc = 0 * scalFact;
    yc = 0 * scalFact;

    showGrids();
    bresenham();
    showRefCircle();
}

function draw(){}

function showGrids() {
    // stroke(255);
    for (i; i < grids * scalFact; i += scalFact) {
        // stroke(0,0,0)
        // linhas de Y
        line(i, 1, i, height);
        // linhas de X
        line(1, i, width, i);

        // stroke(255,0,0)
        // linhas de -Y
        line(-i,1,-i,-height);
        // // linhas de -X
        line(1,-i,-width,-i);

        // stroke(0,0,255)
        // // linhas de Y
        line(-i,1,-i,height)
        // // linhas de -x
        line(1,i,-width,i);

        // stroke(1,255,1)
        // // linhas de -Y
        line(i,1,i,-height)
        // // linhas de X
        line(1,-i,width,-i)
    }
    stroke(0)
    strokeWeight(4)
    line(0,0,0,height)
    line(0,0,width,0)
    line(0,0,0,-height)
    line(0,0,-width,0)
}

function showRefCircle() {
    stroke(0,220,0);
    noFill();
    circle(xc + (scalFact / 2), yc + (scalFact / 2), r * 2);
}

function bresenham() {
    x = 0;
    y = r;

    d = (3 * scalFact) - (2 * r);

    symPlot();
    while (x <= y) {
        if (d <= 0) {
            d = d + (4 * x) + (6 * scalFact);
        } else {
            d = d + (4 * x) - (4 * y) + (10 * scalFact);
            y -= scalFact;
        }

        x += scalFact;
        symPlot();
    }
}

function symPlot() {
    fillPixel(x + xc, y + yc);
    fillPixel(x + xc, -y + yc);
    fillPixel(-x + xc, -y + yc);
    fillPixel(-x + xc, y + yc);
    fillPixel(y + xc, x + yc);
    fillPixel(y + xc, -x + yc);
    fillPixel(-y + xc, -x + yc);
    fillPixel(-y + xc, x + yc);
}

function fillPixel(x, y) {
    noStroke();
    squareColor = color(255, 0, 0);
    squareColor.setAlpha(200);
    fill(squareColor);
    square(x, y, scalFact);
}