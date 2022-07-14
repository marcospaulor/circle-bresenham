class Circle{
    constructor(r,x,y){
        this.raio = r;
        this.X = x;
        this.Y = y;
    }

    scaleFactor(){
        // width / grids
        let sF = width / 26
        return sF
    }

    scaleRaio(){
        let r = this.raio * this.scaleFactor()
        return r
    }

    showRefCircle(){}
}