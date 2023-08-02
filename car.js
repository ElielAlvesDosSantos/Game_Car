let des = document.getElementById('des').getContext('2d')

// definição das instâncias
const f1 = new F1(260,460,70,120,'assets/img/carro_01.png')
const c1= new Car(100,-100,70,120,'assets/img/carro_01.png')
const c2 = new Car(250,-300,70,120,'assets/img/carro_01.png')
const c3 = new Car(350,-500,70,120,'assets/img/carro_01.png')
const bg_e = new Est_l(10,0,8,600,'white')
const bg_d = new Est_l(580,0,8,600,'white')
const bg_c1 = new Est_c(291,0,8,80,'yellow')
const bg_c2 = new Est_c(291,160,8,80,'yellow')
const bg_c3 = new Est_c(291,320,8,80,'yellow')
const bg_c4 = new Est_c(291,480,8,80,'yellow')

// config de audio/som
const som1 = new Audio('assets/sound/motor_11.wav')
som1.volume = 1.0
som1.loop = true

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        f1.dir -=5
    }else if(event.key === 'd'){
        f1.dir +=5
    }
         som1.play()
})

document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        f1.dir = 0
    }else if(event.key === 'd'){
        f1.dir = 0
    }
})

// game over

// pontos

// colisao

function desenha(){
    bg_e.des_obj()
    bg_d.des_obj()
    bg_c1.des_obj()
    bg_c2.des_obj()
    bg_c3.des_obj()
    bg_c4.des_obj()
    c1.des_obj()
    c2.des_obj()
    c3.des_obj()
    f1.des_obj()
}

function atualiza(){
    c1.mover()
    c2.mover()
    c3.mover()
    f1.mover()
    bg_c1.mover()
    bg_c2.mover()
    bg_c3.mover()
    bg_c4.mover() 
}

// principal
function main(){
    des.clearRect(0,0,600,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()