const eta = prompt('Scrivi la tua eta');

const km = prompt('Scrivi i kilometri da percorrere');

const prezzoKm = 0.21;

let prezzoBigl = km * prezzoKm;

if(eta < 18){
     sconto = (prezzoBigl * 20) / 100;
     prezzoBigl = prezzoBigl - sconto;
     document.getElementById("conto").innerHTML =
     `
     Il tuo conto con sconto del 20% e ${prezzoBigl.toFixed(2)} €
     `
   } else if(eta > 65){
     sconto = (prezzoBigl * 40) / 100;
     prezzoBigl = prezzoBigl - sconto;
     document.getElementById("conto").innerHTML =
     `
     Il tuo conto con sconto del 40% e ${prezzoBigl.toFixed(2)} €
     `
   }else{
     document.getElementById("conto").innerHTML =
     `
     Il tuo conto senza sconti e ${prezzoBigl.toFixed(2)} €
     `
   }

