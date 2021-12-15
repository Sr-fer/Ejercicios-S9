function main(auxEquipo, nombres)  {
var liga_futbol = new Liga([], "Futbol")
var nombres = ["Celta", "Deportivo", "Levante", "Real Madrid", "Barcelona", "Atletico de Madrid", "Athletic club", "Betis", "Juventus", "Real Sociedad", "PSG", "Villareal", "Bayern", "Sevilla", "Manchester","Cádiz", "Celta", "Elche", "Granada", "Rayo", "Valencia", "Malloraca"]
for (var i= 0; i<nombres.length;i++){
var auxEquipo = new Equipo(nombres[i]);
liga_futbol.aniadirequipo(auxEquipo);
}
liga_futbol.jugarLiga()
liga_futbol.mostrar()
}

main() 