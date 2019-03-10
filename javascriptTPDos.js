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
  return 'No hay ventas'
}
  
}
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard MZI"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard ASUS 1200"]))
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1200"]))


//---------------------------------------------------------------------------------------------------------------------------

//cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que 
//formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.


function cantidadVentasComponente(componente){

  var i = 0;

  local.ventas.map(function(cadaVenta){

     cadaVenta.componentes.map(function(cadaComponente){

       if(componente === cadaComponente){
         i++;
       }
     })
  })

  return i;
}

console.log( cantidadVentasComponente("Monitor GPRS 3000") ); // 3
console.log( cantidadVentasComponente("Motherboard ASUS 1500") );//2
console.log( cantidadVentasComponente("Monitor ASC 543") );
console.log( cantidadVentasComponente("Motherboard ASUS 1200") );
console.log( cantidadVentasComponente("Motherboard MZI") );
console.log( cantidadVentasComponente("HDD Toyiva") );
console.log( cantidadVentasComponente("HDD Wezter Dishital") );
console.log( cantidadVentasComponente("RAM Quinston") );
console.log( cantidadVentasComponente("RAM Quinston Fury") );


//---------------------------------------------------------------------------------------------------------------------------

//vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

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

arrayVentas = arrayVentas.sort();


  if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteAda) ){

    return 'Ada'

  }else if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteGrace) ){

    return 'Grace'

  } else if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteHedy) ){

    return 'Hedy'

  } else if(arrayVentas[arrayVentas.length-1]== precioMaquina(cadaComponenteSheryl) ){

    return 'Sheryl'
  }

}

console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
console.log(vendedoraDelMes(2, 2019)); 


//---------------------------------------------------------------------------------------------------------------------------

//ventasMes(mes, anio): Obtener las ventas de un mes.

function ventasMes(mes,anio){

  var componentesVendidos =[];
  var componentesASumar =[];

  local.ventas.map(function(cadaVenta){

    if(mes -1 === cadaVenta.fecha.getMonth() && anio === cadaVenta.fecha.getFullYear()){
      componentesVendidos.push(cadaVenta.componentes)
  }
  })
  
  componentesVendidos.map(function(cadaVenta){
    cadaVenta.map(function(cadaComponente){
      componentesASumar.push(cadaComponente)
    })
  })
  
  return precioMaquina(componentesASumar)
}

console.log( ventasMes(1, 2019) ); // 1250
console.log( ventasMes(2, 2019) ); // 320


//---------------------------------------------------------------------------------------------------------------------------

//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function ventasVendedora(nombre){

  var venta = [];
  var componentesASumar = [];

  local.ventas.map(function(cadaVenta){

    if(cadaVenta.nombreVendedora === nombre){

      venta.push(cadaVenta.componentes);
      
    }
  })
  venta.map(function(cadaVenta){
    cadaVenta.map(function(cadaComponente){
      componentesASumar.push(cadaComponente)
    })
  })
    return precioMaquina (componentesASumar)
}

console.log( ventasVendedora("Grace") ); // 900
console.log( ventasVendedora("Ada") ); // 670


//---------------------------------------------------------------------------------------------------------------------------

//componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido(){

  var componentes = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ]
  local.ventas.map(function(cadaVenta){

    cadaVenta.componentes.map(function(cadaComponente){

      if(cadaComponente ==='Monitor GPRS 3000'){

        componentes[0].push('Monitor GPRS 3000')

      }else if(cadaComponente ==='Motherboard ASUS 1500'){

        componentes[1].push('Motherboard ASUS 1500')

      }else if(cadaComponente ==='Monitor ASC 543'){

        componentes[2].push('Monitor ASC 543')

      }else if(cadaComponente ==='Motherboard ASUS 1200'){

        componentes[3].push('Motherboard ASUS 1200')

      }else if(cadaComponente ==='Motherboard MZI'){

        componentes[4].push('Motherboard MZI')

      }else if(cadaComponente ==='HDD Toyiva'){

        componentes[5].push('HDD Toyiva')

      }else if(cadaComponente ==='"HDD Wezter Dishital'){

        componentes[6].push('"HDD Wezter Dishital')

      }else if(cadaComponente ==='RAM Quinston'){

        componentes[7].push('RAM Quinston')

      }else if(cadaComponente ==='RAM Quinston Fury'){

        componentes[8].push('RAM Quinston Fury')

      }

    })
  })
  
  var largos = [];

  componentes.map(function(cadaComponente){
    if(cadaComponente.length>0){

    largos.push(cadaComponente.length)
    }
  })
  largos = largos.sort()

    if(largos[largos.length-1] === componentes[0].length){

      return 'Monitor GPRS 3000'

    }else if(largos[largos.length-1] === componentes[1].length){

      return 'Motherboard ASUS 1500'

    }else if(largos[largos.length-1] === componentes[2].length){

      return 'Monitor ASC 543'

    }else if(largos[largos.length-1] === componentes[3].length){

      return 'Motherboard ASUS 1200'

    }else if(largos[largos.length-1] === componentes[4].length){

      return 'Motherboard MZI'

    }else if(largos[largos.length-1] === componentes[5].length){

      return 'HDD Toyiva'

    }else if(largos[largos.length-1] === componentes[6].length){

      return 'HDD Wezter Dishital'

    }else if(largos[largos.length-1] === componentes[7].length){

      return 'RAM Quinston'

    }else if(largos[largos.length-1] === componentes[8].length){

      return 'RAM Quinston Fury'
    }
    
}

console.log( componenteMasVendido() ); // Monitor GPRS 3000






//---------------------------------------------------------------------------------------------------------------------------

//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.

//console.log( huboVentas(3, 2019) ); // false
