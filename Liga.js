var Liga = function(Equipos, Deporte) {
this.Equipos = Equipos
this.Deporte = Deporte

this.getEquipos = function() {
return this.Equipos
}
this.getDeporte = function() {
return this.Deporte
}
this.aniadirequipo = function(auxEquipo) {
this.Equipos.push(auxEquipo)
return this.Equipos
}
this.mostrar = function()  {
console.log(this.Equipos)
}
this.jugarLiga = function () {
for(var i = 0; i<this.Equipos.length -1;i++){ 
for(var j = i + 1; j<this.Equipos.length; j++) { 
var Numero_Aleatorio = azar() 
if(Numero_Aleatorio <= 33) {
this.Equipos[i].setPuntos(3)
this.Equipos[i].setPartidos(1)
this.Equipos[i].setVictorias(1)
this.Equipos[j].setDerrotas(1)
this.Equipos[j].setPartidos(1)
}
else if(Numero_Aleatorio >= 34 && Numero_Aleatorio <= 66) {
this.Equipos[j].setPuntos(3)
this.Equipos[j].setPartidos(1)
this.Equipos[j].setVictorias(1)
this.Equipos[i].setDerrotas(1)
this.Equipos[i].setPartidos(1)
}
else {
this.Equipos[i].setPuntos(1)
this.Equipos[j].setPuntos(1)
this.Equipos[i].setPartidos(1)
this.Equipos[j].setPartidos(1)
this.Equipos[i].setEmpates(1)
this.Equipos[j].setEmpates(1)
}
}
}
}
}