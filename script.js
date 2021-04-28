function inicia(){
    //Ponteiros
    segundo = document.getElementById('segundo')
    minuto = document.getElementById('minuto')
    hora = document.getElementById('hora')
    //Hora atual
    data = new Date()
    seg = data.getSeconds()
    min = data.getMinutes()
    hor = data.getHours()
    //Ajuste de horas
    switch(hor){
        case 1:
            if(hor == 13){
                hor = 1
            }
            break
        case 2:
            if(hor == 14){
                hor = 2
            }
            break
        case 3:
            if(hor == 15){
                hor = 3
            }
            break
        case 4:
            if(hor == 16){
                hor = 4
            }
            break
        case 5:
            if(hor == 17){
                hor = 5
            }
            break
        case 6:
            if(hor == 18){
                hor = 6
            }
            break
        case 7:
            if(hor == 19){
                hor = 7
            }
            break
        case 8:
            if(hor == 20){
                hor = 8
            }
            break
        case 9:
            if(hor == 21){
                hor = 9
            }
            break
        case 10:
            if(hor == 22){
                hor = 10
            }
            break
        default:
            if(hor == 23){
                hor = 11
            }
            break
    }
    //Atualiza Segundos
    for(x=0; x<=60; x++){
        a = x*6
        if(seg == x){
            segundo.style.transform = 'rotate('+a+'deg)'
        }
    }
    //Atualiza Minutos
    for(y=0; y<=60; y++){
        b = y*6
        if(min == y){
            minuto.style.transform = 'rotate('+b+'deg)'
        }
    }
    //Atualiza Horas
    for(z=0; z<=24; z++){
        c = z*30
        if(hor == z){
            hora.style.transform = 'rotate('+c+'deg)'
        }
    }
   loop = requestAnimationFrame(inicia)
}
window.addEventListener('load', inicia)