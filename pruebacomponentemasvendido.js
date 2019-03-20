
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
  
  return 0
}
  
}
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard MZI"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard ASUS 1200"]))
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1200"]))
console.log('\n')

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
console.log('\n')

//---------------------------------------------------------------------------------------------------------------------------

//vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

function vendedoraDelMes(mes,anio){

  var ventasVendedora = [];



  for(i=0; i<local.vendedoras.length; i++){
      ventasVendedora[i]={nombre: local.vendedoras[i], componentes: [] }
  }

  for(i=0; i<local.ventas.length; i++){

      if(mes -1 === local.ventas[i].fecha.getMonth() && anio === local.ventas[i].fecha.getFullYear()){
          
          for(j=0; j<ventasVendedora.length; j++){

              if(local.ventas[i].nombreVendedora === ventasVendedora[j].nombre){
            
                  ventasVendedora[j].componentes.push(precioMaquina(local.ventas[i].componentes))
              }
          }

          
      }
  }

  for(i=0; i<ventasVendedora.length; i++){

    if(ventasVendedora[i].componentes.length){

          ventasVendedora[i].componentes = ventasVendedora[i].componentes.reduce(function(total,suma){
            return total + suma

      })
      
    }
  
  }

  var valorMaximo = 0;
  var vendedora ='';

  for(i=0; i<ventasVendedora.length; i++){

    if(valorMaximo< ventasVendedora[i].componentes){

      valorMaximo = ventasVendedora[i].componentes;

      vendedora = ventasVendedora[i].nombre;

    }
  }
return vendedora

}

console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
console.log(vendedoraDelMes(2, 2019)); 
console.log('\n')
//---------------------------------------------------------------------------------------------------------------------------

//ventasMes(mes, anio): Obtener las ventas de un mes.

function ventasMes(mes,anio){

  var componentesVendidos =[];


  local.ventas.map(function(cadaVenta){

    if(mes -1 === cadaVenta.fecha.getMonth() && anio === cadaVenta.fecha.getFullYear()){

      cadaVenta.componentes.map(function(cadaComponente){

        componentesVendidos.push(cadaComponente)
      })
  }
  })

  return precioMaquina(componentesVendidos)
}

console.log( ventasMes(1, 2019) ); // 1250
console.log( ventasMes(2, 2019) ); // 320
console.log('\n')

//---------------------------------------------------------------------------------------------------------------------------

//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function reducir(arrayUno, arrayDos){

  arrayUno.map(function(cadaVenta){

    cadaVenta.map(function(cadaComponente){

      arrayDos.push(cadaComponente)
    })
  })
  return precioMaquina (arrayDos)
}


function ventasVendedora(nombre){

  var venta = [];
  var componentesASumar = [];

  local.ventas.map(function(cadaVenta){

    if(cadaVenta.nombreVendedora === nombre){

      venta.push(cadaVenta.componentes);
      
    }
  })

return reducir(venta, componentesASumar) 
}
console.log( ventasVendedora("Grace") ); // 900
console.log( ventasVendedora("Ada") ); // 670
console.log('\n')

//---------------------------------------------------------------------------------------------------------------------------

//componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido(){

    var compo = [];

    for(var i =0; i<local.precios.length; i++){

        compo[i] = {componente: local.precios[i].componente, contador:0}

    }

    for(var i = 0; i< local.ventas.length; i++){

        for(var j=0; j<compo.length; j++){

            if(local.ventas[i].componentes[j] === compo[j].componente){

                compo[j].contador ++
            }
        }
    }

    var valorMaximo = 0;
    var componenteMasVendido = '';

    for(var i=0; i< compo.length; i++){



        if(valorMaximo < compo[i].contador){
            
            valorMaximo = compo[i].contador;
            componenteMasVendido = compo[i].componente
        }
    }

    return componenteMasVendido
}

console.log( componenteMasVendido()); // Monitor GPRS 3000
console.log('\n')

//---------------------------------------------------------------------------------------------------------------------------

//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.

