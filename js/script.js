const eta = prompt('Scrivi la tua eta');

const km = prompt('Scrivi i kilometri da percorrere');

const prezzoKm = 0.21;

let prezzoBigl = km * prezzoKm;

document.getElementById("conto").innerHTML =
     `
     Il prezzo del tuo biglietto e : ${prezzoBigl.toFixed(2)} €
     `;

if(eta < 18){
     sconto = (prezzoBigl * 20) / 100;
     prezzoBigl = prezzoBigl - sconto;
     document.getElementById("conto-scontato").innerHTML =
     `
     (Minorenne) Il prezzo scontato del 20% e ${prezzoBigl.toFixed(2)} € 
     `;
   } else if(eta > 65){
     sconto = (prezzoBigl * 40) / 100;
     prezzoBigl = prezzoBigl - sconto;
     document.getElementById("conto-scontato").innerHTML =
     `
    (Over 65) Il prezzo scontato del 40% e ${prezzoBigl.toFixed(2)} € 
     `;
   }else{
     document.getElementById("conto-scontato").innerHTML =
     `
     Il prezzo senza sconti e : ${prezzoBigl.toFixed(2)} €
     `;
   }
   

