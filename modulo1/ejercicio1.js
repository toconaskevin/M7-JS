var form = document.getElementById("formulario");
var resultado = document.getElementById("puntoEquilibrio");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var costosFijos = document.getElementById("costoFijo").value;
    var costosVariables = document.getElementById("costoVariable").value;
    var precioVenta = document.getElementById("precioVenta").value;
    var puntoEquilibrio = (costosFijos / (precioVenta - costosVariables));
    resultado.innerHTML = puntoEquilibrio.toFixed(2);
});
