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
console.log(ventasVendedora)
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
/*
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

  var monitorGprs3000 = 0;
  var motherboardAsus1500 = 0;
  var monitorAsc543 = 0;
  var motherboardAsus1200 = 0;
  var motherboardMzi = 0;
  var hddToyiva = 0;
  var hddWezterDishital = 0;
  var ramQuinston = 0;
  var ramQuinstonFury = 0;

  local.ventas.map(function(cadaVenta){

    cadaVenta.componentes.map(function(cadaComponente){

      if(cadaComponente === 'Monitor GPRS 3000'){

        monitorGprs3000 = cantidadVentasComponente('Monitor GPRS 3000')

      }else if(cadaComponente === 'Motherboard ASUS 1500'){

        motherboardAsus1500 = cantidadVentasComponente('Motherboard ASUS 1500')

      }else if(cadaComponente === 'Monitor ASC 543'){

        monitorAsc543 = cantidadVentasComponente('Monitor ASC 543')

      }else if(cadaComponente === 'Motherboard ASUS 1200'){

        motherboardAsus1200 = cantidadVentasComponente('Motherboard ASUS 1200')

      }else if(cadaComponente === 'Motherboard MZI'){

        motherboardMzi = cantidadVentasComponente('Motherboard MZI')

      }else if(cadaComponente === 'HDD Toyiva'){

        hddToyiva = cantidadVentasComponente('HDD Toyiva')

      }else if(cadaComponente === 'HDD Wezter Dishital'){

        hddWezterDishital = cantidadVentasComponente('HDD Wezter Dishital')

      }else if(cadaComponente === 'RAM Quinston'){

        ramQuinston = cantidadVentasComponente('RAM Quinston')

      }else if(cadaComponente === 'RAM Quinston Fury'){

        ramQuinstonFury = cantidadVentasComponente('RAM Quinston Fury')

      }
    })

  })

  if(monitorGprs3000 > motherboardAsus1500 && monitorGprs3000 > monitorAsc543 && monitorGprs3000 > motherboardAsus1200 && monitorGprs3000 > motherboardMzi && monitorGprs3000 > hddToyiva && monitorGprs3000 > hddWezterDishital && monitorGprs3000 > ramQuinston && monitorGprs3000 > ramQuinstonFury){
    
    return 'Monitor GPRS 3000'

  }else if(motherboardAsus1500 > monitorGprs3000 && motherboardAsus1500 > monitorAsc543 && motherboardAsus1500 > motherboardAsus1200 && motherboardAsus1500 > motherboardMzi && motherboardAsus1500 > hddToyiva && motherboardAsus1500 > hddWezterDishital && motherboardAsus1500 > ramQuinston && motherboardAsus1500 > ramQuinstonFury){
    
    return 'Motherboard ASUS 1500'

  }else if(monitorAsc543 > monitorGprs3000 && monitorAsc543 > motherboardAsus1500 && monitorAsc543 > motherboardAsus1200 && monitorAsc543 > motherboardMzi && monitorAsc543 > hddToyiva && monitorAsc543 > hddWezterDishital && monitorAsc543 > ramQuinston && monitorAsc543 > ramQuinstonFury){
    
    return 'monitorAsc 543'

  }else if(motherboardAsus1200 > monitorGprs3000 && motherboardAsus1200 > motherboardAsus1500 && motherboardAsus1200 > monitorAsc543 && motherboardAsus1200 > motherboardMzi && motherboardAsus1200 > hddToyiva && motherboardAsus1200 > hddWezterDishital && motherboardAsus1200 > ramQuinston && motherboardAsus1200 > ramQuinstonFury){
    
    return 'Motherboard ASUS 1200'

  }else if(motherboardMzi > monitorGprs3000 && motherboardMzi > motherboardAsus1500 && motherboardMzi > monitorAsc543 && motherboardAsus1200 < motherboardMzi && motherboardMzi > hddToyiva && motherboardMzi > hddWezterDishital && motherboardMzi > ramQuinston && motherboardMzi > ramQuinstonFury){
    
    return 'Motherboard MZI'

  }else if(hddToyiva > monitorGprs3000 && hddToyiva > motherboardAsus1500 && hddToyiva > monitorAsc543 && hddToyiva > motherboardAsus1200 && hddToyiva > motherboardMzi && hddToyiva > hddWezterDishital && hddToyiva > ramQuinston && hddToyiva > ramQuinstonFury){
    
    return 'HDD Toyiva'

  }else if(hddWezterDishital > monitorGprs3000 && hddWezterDishital > motherboardAsus1500 && hddWezterDishital > monitorAsc543 && hddWezterDishital > motherboardAsus1200 && hddWezterDishital > motherboardMzi && hddToyiva < hddWezterDishital && hddWezterDishital > ramQuinston && hddWezterDishital > ramQuinstonFury){
    
    return 'HDD Wezter Dishital'

  }else if(ramQuinston > monitorGprs3000 && ramQuinston > motherboardAsus1500 && ramQuinston > monitorAsc543 && ramQuinston > motherboardAsus1200 && ramQuinston > motherboardMzi && ramQuinston > hddToyiva && ramQuinston > hddWezterDishital && ramQuinston > ramQuinstonFury){
    
    return 'RAM Quinston'

  }else if(ramQuinstonFury > monitorGprs3000 && ramQuinstonFury > motherboardAsus1500 && ramQuinstonFury > monitorAsc543 && ramQuinstonFury > motherboardAsus1200 && ramQuinstonFury > motherboardMzi && ramQuinstonFury > hddToyiva && ramQuinstonFury > hddWezterDishital && ramQuinstonFury > ramQuinston){
    
    return 'RAM Quinston Fury'

  } 
}

console.log( componenteMasVendido() ); // Monitor GPRS 3000
console.log('\n')

//---------------------------------------------------------------------------------------------------------------------------

//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.

function huboVentas(mes,anio){

var ventas = false;

  local.ventas.map(function(cadaVenta){

    if(mes -1 === cadaVenta.fecha.getMonth() && anio === cadaVenta.fecha.getFullYear()){

    ventas = true;        

    }

  })
  return ventas
}

console.log( huboVentas(3, 2019) ); // false
console.log( huboVentas(1, 2019) ); // true
console.log( huboVentas(2, 2019) ); // true
console.log('\n')


//---------------------------------------------------------------------------------------------------------------------------

//2.Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. 
//Por ejemplo: 
//{ fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }. 
//Por este cambio, se pide:

//En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).

local.ventas.map(function(cadaVenta){
  cadaVenta.sucursal = 'Centro'
})


//---------------------------------------------------------------------------------------------------------------------------

//Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']

local.sucursales = ['Centro', 'Caballito'];


//---------------------------------------------------------------------------------------------------------------------------

//Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, 
//componentes, sucursal

// 12/02/2019, Hedy, [Monitor GPRS 3000, HDD Toyiva], Centro
// 24/02/2019, Sheryl, [Motherboard ASUS 1500, HDD Wezter Dishital], Caballito
// 01/02/2019, Ada, [Motherboard MZI, RAM Quinston Fury], Centro
// 11/02/2019, Grace, [Monitor ASC 543, RAM Quinston], Caballito
// 15/02/2019, Ada, [Motherboard ASUS 1200, RAM Quinston Fury], Centro
// 12/02/2019, Hedy, [Motherboard ASUS 1500, HDD Toyiva], Caballito
// 21/02/2019, Grace, [Motherboard MZI, RAM Quinston], Centro
// 08/02/2019, Sheryl, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 16/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston Fury], Centro
// 27/02/2019, Hedy, [Motherboard ASUS 1200, HDD Toyiva], Caballito
// 22/02/2019, Grace, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 05/02/2019, Ada, [Motherboard ASUS 1500, RAM Quinston], Centro
// 01/02/2019, Grace, [Motherboard MZI, HDD Wezter Dishital], Centro
// 07/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston], Caballito
// 14/02/2019, Ada, [Motherboard ASUS 1200, HDD Toyiva], Centro

local.ventas.push({fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', componentes: ['Monitor GPRS 3000', 'HDD Toyiva'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 24), nombreVendedora: 'Sheryl', componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'], sucursal: 'Caballito'})
local.ventas.push({fecha: new Date(2019, 1, 01), nombreVendedora: 'Ada', componentes: ['Motherboard MZI', 'RAM Quinston Fury'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 11), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'RAM Quinston'], sucursal: 'Caballito'})
local.ventas.push({fecha: new Date(2019, 1, 15), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'], sucursal: 'Caballito'})
local.ventas.push({fecha: new Date(2019, 1, 21), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'RAM Quinston'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 08), nombreVendedora: 'Sheryl', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 16), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 27), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Caballito'})
local.ventas.push({fecha: new Date(2019, 1, 22), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 05), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1500', 'RAM Quinston'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 01), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'HDD Wezter Dishital'], sucursal: 'Centro'})
local.ventas.push({fecha: new Date(2019, 1, 07), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston'], sucursal: 'Caballito'})
local.ventas.push({fecha: new Date(2019, 1, 14), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Centro'})


//---------------------------------------------------------------------------------------------------------------------------

//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal){

  var venta = [];
  var componentesASumar = [];
  
  local.ventas.map(function(cadaVenta){

    if(cadaVenta.sucursal === sucursal){

      venta.push(cadaVenta.componentes)
    }
  })
  
  return reducir(venta, componentesASumar) 

}

console.log( ventasSucursal("Centro") ); // 4195
console.log( ventasSucursal("Caballito") ); // 
console.log('\n')

//Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una 
//propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

//Resuelto más arriba 


//---------------------------------------------------------------------------------------------------------------------------

//Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

function sucursalDelMes(mes, anio){

  var centro = [];
  var componentesASumarCentro = [];
  var caballito = [];
  var componentesASumarCaballito = [];
  
  local.ventas.map(function(cadaVenta){

    if(mes -1 === cadaVenta.fecha.getMonth() && anio === cadaVenta.fecha.getFullYear()){

      if(cadaVenta.sucursal === 'Centro'){

        centro.push(cadaVenta.componentes)

      }else if(cadaVenta.sucursal === 'Caballito'){

        caballito.push(cadaVenta.componentes)
      }
    }
  })
  centro = reducir(centro, componentesASumarCentro);
  caballito = reducir(caballito, componentesASumarCaballito);
  

if(centro > caballito){

    return 'Centro';

}else if(caballito> centro){

    return 'Caballito'
  }
}
console.log( sucursalDelMes(1, 2019) ); // "Centro"
console.log( sucursalDelMes(2, 2019) ); 
console.log('\n')

//---------------------------------------------------------------------------------------------------------------------------

//3. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

//renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

function renderPorMes(){

  var enero =[];
  var eneroVentas = [];
  var febrero =[];
  var febreroVentas = [];
  var marzo = [];
  var marzoVentas = [];
  var abril =[];
  var abrilVentas = [];
  var mayo =[];
  var mayoVentas = [];
  var junio =[];
  var junioVentas = [];
  var julio =[];
  var julioVentas = [];
  var julio =[];
  var julioVentas = [];
  var agosto = [];
  var agostoVentas = [];
  var septiembre = [];
  var septiembreVentas = [];
  var octubre = [];
  var octubreVentas = [];
  var noviembre = [];
  var noviembreVentas = [];
  var diciembre = [];
  var diciembreVentas = [];


  local.ventas.map(function(cadaVenta){

    if(cadaVenta.fecha.getMonth() === 0){

      enero.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 1){

      febrero.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 2){

      marzo.push(cadaVenta.componentes)
      
    }else if(cadaVenta.fecha.getMonth() === 3){

      abril.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 4){

      mayo.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 5){

      junio.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 6){

      julio.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 7){

      agosto.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 8){

      septiembre.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 9){

      octubre.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 10){

      noviembre.push(cadaVenta.componentes)

    }else if(cadaVenta.fecha.getMonth() === 11){

      diciembre.push(cadaVenta.componentes)

  }

})

enero.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(enero.length){

      eneroVentas.push(cadaComponente)

    } else {

      return 0
    }

  })

})

febrero.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(febrero.length){

      febreroVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
marzo.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(marzo.length){

      marzoVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
abril.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(abril.length){

      abrilVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
mayo.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(mayo.length){

      mayoVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
junio.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(junio.length){

      junioVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
julio.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(julio.length){

      julioVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
agosto.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(agosto.length){

      agostoVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
septiembre.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(septiembre.length){

      septiembreVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
octubre.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(octubre.length){

      octubreVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})
noviembre.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(noviembre.length){

      noviembreVentas.push(cadaComponente)

    } else {
      
      return 0

    }

  })

})
diciembre.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    if(diciembre.length){

      diciembreVentas.push(cadaComponente)

    } else {
      
      return 0
    }

  })

})

return 'Total por mes:' + '\n Total de enero 2019: ' + precioMaquina(eneroVentas) + '\n Total de febrero 2019: ' + precioMaquina(febreroVentas) 
}

console.log( renderPorMes() );
console.log('\n')

// Ventas por mes:
//   Total de enero 2019: 1250,
//   Total de febrero 2019: 4210



//---------------------------------------------------------------------------------------------------------------------------

//renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal(){

  var centro =[];
  var centroComponentes = [];
  var caballito = [];
  var caballitoComponentes = [];

  local.ventas.map(function(cadaVenta){

    if(cadaVenta.sucursal === 'Centro'){

      centro.push(cadaVenta.componentes)

    } else if(cadaVenta.sucursal === 'Caballito'){

      caballito.push(cadaVenta.componentes)
    }

  })

centro.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    centroComponentes.push(cadaComponente)
  })
})

caballito.map(function(cadaVenta){

  cadaVenta.map(function(cadaComponente){

    caballitoComponentes.push(cadaComponente)
  })
})

return 'Ventas por sucursal:' + '\nTotal de Centro: ' + precioMaquina(centroComponentes) + '\n Total de Caballito: ' + precioMaquina(caballitoComponentes)
}

console.log( renderPorSucursal() );
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265


//---------------------------------------------------------------------------------------------------------------------------

//render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

function vendedora(){
  
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
 
function render(){

  
return 'Reporte ' + '\nVentas por mes: \n' + renderPorMes() + '\n\n ventas por sucursal: ' + renderPorSucursal() + '\n\n Producto estrella ' + componenteMasVendido () + '\n\n Vendedora que más ingresos generó: ' + vendedora()
}


console.log( render() );
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace
*/