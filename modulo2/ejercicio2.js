var form = document.getElementById("formulario");
var docGasNec = document.getElementById("GastosNecesarios");
var docGasOpc = document.getElementById("GastosOpcionales");
var docAhoInv = document.getElementById("AhorroInversion");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var ingresoTotal = document.getElementById("ingresoTotal").value;
    var gastosNecesarios = (ingresoTotal * 0.5).toFixed(2);
    var gastosOpcionales = (ingresoTotal * 0.3).toFixed(2);
    var ahorros = (ingresoTotal * 0.2).toFixed(2);
    docGasNec.innerHTML = gastosNecesarios;
    docGasOpc.innerHTML = gastosOpcionales;
    docAhoInv.innerHTML = ahorros;
});
