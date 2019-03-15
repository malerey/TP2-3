//console.log('Hola Mundo')

//Local de ventas de PCs
//Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

//Lista de las vendedoras de la empresa
//Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades fecha, nombreVendedora (un String con el nombre), componentes (un array Strings con el nombre de cada componente vendido).
//Lista de precios de los componentes, de la forma (nombre componente, precio).

var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};



function precioMaquina (arrayComponentes){

  if(arrayComponentes.length){
  var sumPrecios = [];
  
    arrayComponentes.map(function(cadaComponente){
      local.precios.map(function(precio){
        if(precio.componente === cadaComponente){
          sumPrecios.push(precio.precio)
        }
      })
    })

  return sumPrecios.reduce(function(total,suma){ //Este return retorna TODA la función

    return total + suma; // Este este return es solo de esta función
  })
} else{
  return 0
}
}

function vendedoraDelMes(mes,anio){
  
  var ventasMes =[];
 
 local.ventas.map(function(cadaVenta){
     if(mes -1 === cadaVenta.fecha.getMonth() && anio === cadaVenta.fecha.getFullYear()){
         ventasMes.push(cadaVenta);
     }
 })

 var ventaAda =[];
 var cadaComponenteAda = [];
 var ventaGrace=[];
 var cadaComponenteGrace = [];
 var ventaHedy=[];
 var cadaComponenteHedy = [];
 var ventaSheryl=[];
 var cadaComponenteSheryl = [];

 ventasMes.map(function(cadaVenta){

     if(cadaVenta.nombreVendedora === 'Ada'){
       ventaAda.push(cadaVenta.componentes)

     }else if(cadaVenta.nombreVendedora === 'Grace'){
       ventaGrace.push(cadaVenta.componentes)

     }else if(cadaVenta.nombreVendedora === 'Hedy'){
       ventaHedy.push(cadaVenta.componentes)

   } else if(cadaVenta.nombreVendedora === 'Sheryl'){
   ventaSheryl.push(cadaVenta.componentes)
   }

 })

ventaAda.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteAda.push(componente)
   })
})

ventaGrace.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteGrace.push(componente)
   })
})

ventaHedy.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteHedy.push(componente)
   })
})

ventaSheryl.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteSheryl.push(componente)
   })
})



if (precioMaquina(cadaComponenteAda)>precioMaquina(cadaComponenteGrace)&& precioMaquina(cadaComponenteAda)> precioMaquina(cadaComponenteHedy)&& precioMaquina(cadaComponenteAda)> precioMaquina(cadaComponenteSheryl)){

  return 'Ada';

}else if (precioMaquina(cadaComponenteGrace)>precioMaquina(cadaComponenteAda)&& precioMaquina(cadaComponenteGrace)> precioMaquina(cadaComponenteHedy)&& precioMaquina(cadaComponenteGrace)> precioMaquina(cadaComponenteSheryl)){

  return 'Grace';

}else if (precioMaquina(cadaComponenteHedy)>precioMaquina(cadaComponenteAda)&& precioMaquina(cadaComponenteHedy)> precioMaquina(cadaComponenteGrace)&& precioMaquina(cadaComponenteHedy)> precioMaquina(cadaComponenteSheryl)){

  return 'Hedy';

}else if (precioMaquina(cadaComponenteSheryl)>precioMaquina(cadaComponenteAda)&& precioMaquina(cadaComponenteSheryl)> precioMaquina(cadaComponenteGrace)&& precioMaquina(cadaComponenteSheryl)> precioMaquina(cadaComponenteHedy)){

  return 'Sheryl';

}   

}


console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
console.log(vendedoraDelMes(2, 2019)); 


//----------------------------------------------------------------------------------------
function vendedoraDelMes(){
  
 var ventaAda =[];
 var cadaComponenteAda = [];
 var ventaGrace=[];
 var cadaComponenteGrace = [];
 var ventaHedy=[];
 var cadaComponenteHedy = [];
 var ventaSheryl=[];
 var cadaComponenteSheryl = [];

 local.ventas.map(function(cadaVenta){

     if(cadaVenta.nombreVendedora === 'Ada'){
       ventaAda.push(cadaVenta.componentes)

     }else if(cadaVenta.nombreVendedora === 'Grace'){
       ventaGrace.push(cadaVenta.componentes)

     }else if(cadaVenta.nombreVendedora === 'Hedy'){
       ventaHedy.push(cadaVenta.componentes)

   } else if(cadaVenta.nombreVendedora === 'Sheryl'){
   ventaSheryl.push(cadaVenta.componentes)
   }

 })

ventaAda.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteAda.push(componente)
   })
})

ventaGrace.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteGrace.push(componente)
   })
})

ventaHedy.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteHedy.push(componente)
   })
})

ventaSheryl.map(function(cadaVenta){
   cadaVenta.map(function(componente){
       cadaComponenteSheryl.push(componente)
   })
})



if (precioMaquina(cadaComponenteAda)>precioMaquina(cadaComponenteGrace)&& precioMaquina(cadaComponenteAda)> precioMaquina(cadaComponenteHedy)&& precioMaquina(cadaComponenteAda)> precioMaquina(cadaComponenteSheryl)){

  return 'Ada';

}else if (precioMaquina(cadaComponenteGrace)>precioMaquina(cadaComponenteAda)&& precioMaquina(cadaComponenteGrace)> precioMaquina(cadaComponenteHedy)&& precioMaquina(cadaComponenteGrace)> precioMaquina(cadaComponenteSheryl)){

  return 'Grace';

}else if (precioMaquina(cadaComponenteHedy)>precioMaquina(cadaComponenteAda)&& precioMaquina(cadaComponenteHedy)> precioMaquina(cadaComponenteGrace)&& precioMaquina(cadaComponenteHedy)> precioMaquina(cadaComponenteSheryl)){

  return 'Hedy';

}else if (precioMaquina(cadaComponenteSheryl)>precioMaquina(cadaComponenteAda)&& precioMaquina(cadaComponenteSheryl)> precioMaquina(cadaComponenteGrace)&& precioMaquina(cadaComponenteSheryl)> precioMaquina(cadaComponenteHedy)){

  return 'Sheryl';

}   

}


console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
console.log(vendedoraDelMes(2, 2019)); 
