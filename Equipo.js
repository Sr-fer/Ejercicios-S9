var Equipo = function(nombre)  {
this.nombre = nombre
this.puntos  = 0
this.partidos  = 0
this.victorias  = 0
this.derrotas  = 0
this.empates   = 0

this.getPuntos = function() {
return this.puntos
}
this.getPartidos = function() {
return this.partidos
}
this.getVictorias = function() {
return this.victorias
}
this.getDerrotas = function() {
return this.derrotas
}
this.getEmpates = function() {
return this.empates
}
this.getNombre = function() {
    return this.nombre
    }
this.setPuntos = function(puntos) {
    this.puntos += puntos
    }
    this.setPartidos = function(partidos) {
        this.partidos += partidos
    }
    this.setVictorias = function(victorias) {
        this.victorias += victorias
    }
    this.setDerrotas = function(derrotas) {
        this.derrotas += derrotas 
    }
    this.setEmpates = function(empates) {
        this.empates += empates 
    }
    this.setNombre = function(nombre) {
        this.nombre += nombre
        }
}
