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


//1. Se pide desarrollar las siguientes funciones:

//precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, 
//que es la suma de los precios de cada componente incluido


arrayComponentes
function precioMaquina (){

  if(arrayComponentes.length){
  var sumaPrecios = [];
  
    arrayComponentes.map(function(cadaComponente){
      local.precios.map(function(precio){
        if(precio.componente === cadaComponente){
          sumaPrecios.push(precio.precio)
        }
      })
    })

  return sumaPrecios.reduce(function(total,suma){ //Este return retorna TODA la función

    return total + suma; // Este este return es solo de esta función
  })
} 
  
}

//--------------------------------------------------------------------------------------------------

//vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.


function vendedoraDelMes(mes,anio){
  
   var ventasMes =[];
  
  local.ventas.map(function(cadaVenta){
      if(mes -1 === cadaVenta.fecha.getMonth() && anio === cadaVenta.fecha.getFullYear()){
          ventasMes.push(cadaVenta);
      }
  })

  var ventaAda =[];
  var cadaComponenteAda = [0];
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

var arrayVentas = [];

if (cadaComponenteAda.length>0){

  arrayVentas.push(precioMaquina(cadaComponenteAda));
}

if (cadaComponenteGrace.length>0){

  arrayVentas.push(precioMaquina(cadaComponenteGrace));
}
if (cadaComponenteHedy.length>0){

  arrayVentas.push(precioMaquina(cadaComponenteHedy));
}
if (cadaComponenteSheryl.length>0){

  arrayVentas.push(precioMaquina(cadaComponentesheryl));
}

arrayVentas.sort();

if(precioMaquina(cadaComponenteAda) !== []){
  if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteAda) ){
    return 'Ada'
  }

} else if(precioMaquina(cadaComponenteGrace) !== []){
  if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteGrace) ){
    return 'Grace'
  }

} else if(precioMaquina(cadaComponenteHedy) !== []){
  if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteHedy) ){
    return 'Hedy'
  }

} else if(precioMaquina(cadaComponenteSheryl) !== []){
  if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteSheryl) ){
    return 'Hedy'
  }
}
}


console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
console.log(vendedoraDelMes(2, 2019));

/*
var ventasFiltradas = []
recorrer el array ventas ventasFiltradas

for ventasFiltradas.vendedora

if(local.ventas[i].vendedora === 'Ada')

var ventasDeAda[];
si las ventas tienen el nombre Ada tengo que sumar las 
ventasDeAda.push(ventasFiltradas)



for(){
  var nuevaVariable = vendedoras[i]
  nombre de variable dinamico

  for(let i=0; i<cantidadDiv;i++){
    var texto+i;
}
}
*/

//ventasMes(mes, anio): Obtener las ventas de un mes.

//console.log( ventasMes(1, 2019) ); // 1250





//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

//console.log( ventasVendedora("Grace") ); // 900
/*
function ventasVendedora(nombre){
  local.ventas.map(cadaVenta){
    console.log(cadaVenta.vendedoras + ' y '+ nombre)
  }
}
ventasVendedora('Grace')*/
//console.log( ventasVendedora("Grace") )