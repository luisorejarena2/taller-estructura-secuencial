
//PRIMER PUNTO

// let a=2,b=5,c=1
// console.log((3*a)-4*(b/a**2))
// console.log(((((b+c)/2*a+10)*3)*b)-6)

//SEGUNDO PUNTO

// let capital,ganancia=0
// capital=parseFloat(prompt('Digite cuanto capital va a invertir en el banco '))
// ganancia=capital*0.012
// console.log('Su ganancia mensual es de: '+ganancia)

//TERCER PUNTO

// let base,altura,area=0
// base=parseFloat(prompt('Ingrese la base del triangulo '))
// altura=parseFloat(prompt('Ingrese la altura del triangulo '))
// area=(base*altura)/2
// console.log('El areal del triangulo es '+area)

//CUARTO PUNTO

// let salario=980000,comision=170000,salarioFinal,autosVendidos,totalVentas=0

// autosVendidos=parseInt(prompt('Digite cuantos autos vendio este mes '))
// totalVentas=parseFloat(prompt('Digite el valor total de las ventas de este mes '))

// salarioFinal=salario+(autosVendidos*comision)+(totalVentas*0.05)
// console.log('El salario final del trabajador es de '+salarioFinal)

//QUINTO PUNTO

// let n1,n2,n3,n4,pro=0

// n1=parseFloat(prompt('Digite la primera nota del 40% '))
// n2=parseFloat(prompt('Digite la segunda nota del 40% '))
// n3=parseFloat(prompt('Digite la primera nota del 60% '))
// n4=parseFloat(prompt('Digite la segunda nota del 60% '))
// pro=((n1*0.20+n2*0.20)+(n3*0.30+n4*0.30))
// console.log('El promedio de las calificaciones es de '+pro)

//SEXTO PUNTO

// let edad,numPulsa=0

// edad=parseInt(prompt('Digite su edad '))
// numPulsa=(220-edad)/10
// console.log('Las pulsaciones de esta persona en 10 segundos son '+numPulsa)

//SEPTIMO PUNTO

// let suelBase,ventUno,ventDos,ventTres,comisiones,suelTotal=0

// suelBase=parseFloat(prompt('Digite su sueldo base '))
// ventUno=parseFloat(prompt('Digite el valor de su primera venta '))
// ventDos=parseFloat(prompt('Digite el valor de su segunda venta '))
// ventTres=parseFloat(prompt('Digite el valor de su tercera venta '))
// comisiones=(ventUno+ventDos+ventTres)*0.10
// suelTotal=suelBase+comisiones
// console.log('El trabajador tiene una comision por sus tres ventas de '+comisiones)
// console.log('El trabajador tiene un sueldo total de '+suelTotal)

//OCTAVO PUNTO

let exaMatema,exaFisica,exaQuimica,t1Mat,t2Mat,t3Mat,t1Fis,t2Fis,t1Qui,t2Qui,t3Qui,proMa,proFi,proQui,proGe=0

exaMatema=parseFloat(prompt('Digite su nota de la evaluacion de Matematicas '))
t1Mat=parseFloat(prompt('Digite su nota de la 1 tarea de Matematicas '))
t2Mat=parseFloat(prompt('Digite su nota de la 2 tarea de Matematicas '))
t3Mat=parseFloat(prompt('Digite su nota de la 3 tarea de Matematicas '))
exaFisica=parseFloat(prompt('Digite su nota de la evaluacion de Fisica '))
t1Fis=parseFloat(prompt('Digite su nota de la 1 tarea de Fisica '))
t2Fis=parseFloat(prompt('Digite su nota de la 2 tarea de Fisica '))
exaQuimica=parseFloat(prompt('Digite su nota de la evaluacion de Quimica '))
t1Qui=parseFloat(prompt('Digite su nota de la 1 tarea de Quimica '))
t2Qui=parseFloat(prompt('Digite su nota de la 2 tarea de Quimica '))
t3Qui=parseFloat(prompt('Digite su nota de la 3 tarea de Quimica '))

proMa=(exaMatema*0.90)+(((t1Mat+t2Mat+t3Mat)/3)*0.10)
proFi=(exaFisica*0.80)+(((t1Fis+t2Fis)/2)*0.20)
proQui=(exaQuimica*0.85)+(((t1Qui+t2Qui+t3Qui)/3)*0.15)

proGe=(proMa+proFi+proQui)/3

console.log('El promedio de Matematicas es '+proMa)
console.log('El promedio de Quimica es '+proQui)
console.log('El promedio de Fisica es '+proFi)
console.log('El promedio general es de '+proGe)













