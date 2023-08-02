class Obj{
    constructor(x,y,w,h,attrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.attrib = attrib
    }

    des_obj(){
        let img = new Image()
            img.src = this.attrib
            des.drawImage(img,this.x,this.y,this.w,this.h)
    } 
}

class F1 extends Obj{
    dir = 0

    mover(){
        this.x += this.dir
        if(this.x<= 16){
            this.x = 16
        }else if(this.x >= 534){
            this.x = 534
        }
    }
}

class Car extends Obj{
    mover(){
        this.y += 5
        
        if(this.y >= 610){
            this.y = -100
                      // Math.random() * (max - min + 1) + min
                this.x = (Math.random() * (540 - 2 + 1) + 2)
        }
    }
}

class Est_l extends Obj{
    des_obj(){
        des.beginPath()  // para iniciar e poder tornar um objeto
        des.lineWidth = '5' // espessura da linha
        des.fillStyle = this.attrib // cor da pintura
        des.strokeStyle = 'white' // cor da linha
        des.rect(this.x,this.y,this.w,this.h)
        des.closePath() // para fechar e poder tornar um objeto
        des.stroke()  // risca linha
        des.fill()  // pinta a área
    }
}

class Est_c extends Obj{
    des_obj(){
        des.beginPath()  // para iniciar e poder tornar um objeto
        des.lineWidth = '5' // espessura da linha
        des.fillStyle = this.attrib // cor da pintura
        des.strokeStyle = 'yellow' // cor da linha
        des.rect(this.x,this.y,this.w,this.h)
        des.closePath() // para fechar e poder tornar um objeto
        des.stroke()  // risca linha
        des.fill()  // pinta a área
    }

    mover(){
        this.y += 3
        if(this.y >= 610){
            this.y = -60
        }
    } 
}

// classe estrada

// classe texto
