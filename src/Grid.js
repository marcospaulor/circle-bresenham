class Grid{
    constructor(){
        // Condição ternária;
        this.grid = width > 1000 ? 100 : 36;
        this.sF = this.scaleFactor();
    }

    scaleFactor(){
        return width / this.grid;
    }

    drawGrid(){
        for (var i = 0; i < this.grid * this.sF; i += this.sF) {
            // linhas de Y
            line(i, 1, i, height);
            // linhas de X
            line(1, i, width, i);
    
            // linhas de -Y
            line(-i,1,-i,-height);
            // // linhas de -X
            line(1,-i,-width,-i);
    
            // // linhas de Y
            line(-i,1,-i,height);
            // // linhas de -x
            line(1,i,-width,i);
    
            // // linhas de -Y
            line(i,1,i,-height);
            // // linhas de X
            line(1,-i,width,-i);
        }
        // Determina as linhas do plano cartesiano
        stroke(0);//Cor da linha
        strokeWeight(4);
        line(0,0,0,height);
        line(0,0,width,0);
        line(0,0,0,-height);
        line(0,0,-width,0);

        return;
    }
}