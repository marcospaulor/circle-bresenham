class CircleBresenham{
    constructor(x,y,r){
        this.raio = r;
        this.X = x;
        this.Y = y;
        this.sF = new Grid().sF
    }
    
    // Cálculo da escala de X
    scaleX(){
        return this.X * this.sF;
    }

    // Cálculo da escala de Y
    scaleY(){
        return this.Y * this.sF
    }
    // Cálculo da escala do Raio
    scaleRaio(){
        return this.raio * this.sF
    }

    showCircle(){
        let x = 0
        let y = this.scaleRaio()
        // Variável de decisão
        let d = (3 * this.sF) - (2 * this.scaleRaio());
        this.symPlot(x,y);
        while(x <= y){
            if(d <= 0){
                d = d + (4 * x) + (6 * this.sF);
            } else {
                d = d + (4 * x) - (4 * y) + (10 * this.sF);
                y -= this.sF;
            }

            x += this.sF;
            this.symPlot(x,y);
        }
    }

    showRefCircle(){
        stroke(0,220,0);
        noFill();
        circle(this.scaleX() + (this.sF/2), this.scaleY() + (this.sF/2), this.scaleRaio() * 2);
        return;
    }

    symPlot(x,y){
        this.fillPixel(x + this.scaleX(), y + this.scaleY());
        this.fillPixel(x + this.scaleX(), -y + this.scaleY());
        this.fillPixel(-x + this.scaleX(), -y + this.scaleY());
        this.fillPixel(-x + this.scaleX(), y + this.scaleY());
        this.fillPixel(y + this.scaleX(), x + this.scaleY());
        this.fillPixel(y + this.scaleX(), -x + this.scaleY());
        this.fillPixel(-y + this.scaleX(), -x + this.scaleY());
        this.fillPixel(-y + this.scaleX(), x + this.scaleY());
    }

    fillPixel(x,y){
        noStroke();
        let squareColor = color(255,0,0);
        squareColor.setAlpha(200);
        fill(squareColor)
        square(x, y, this.sF)
    }
}