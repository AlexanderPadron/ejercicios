let autos = [
    {tipo:'bus',asientos:13},
    {tipo:'auto',asientos:4},
    {tipo:'camioneta',asientos:7}
]
let personas = 'joiuju'
let aviso = false

function auxiliar (){
    let pt=personas
    autos.forEach(function(d){
        if (personas > 0 && d.asientos>0 ){
            d.asientos= d.asientos - 1
            personas = personas -1
        }
    })
    if(personas==pt){
        aviso=true
    }
  if (personas>0 && !aviso){
    auxiliar()
  }   
}

auxiliar()

console.log(autos,' Personas afuera ',personas)