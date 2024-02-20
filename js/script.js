const eta = prompt('Scrivi la tua eta');

console.log(eta);

const km = prompt('Scrivi i kilometri da percorrere');

console.log(km);

const prezzoKm = 0.21;

let prezzoBigl = km * prezzoKm;

console.log(prezzoBigl);

if(eta < 18){
     sconto = (prezzoBigl * 20) / 100;
     prezzoBigl = prezzoBigl - sconto;
     console.log(prezzoBigl.toFixed(2)); 
   } else if(eta > 65){
     sconto = (prezzoBigl * 40) / 100;
     prezzoBigl = prezzoBigl - sconto;
     console.log(prezzoBigl.toFixed(2));
   }else{
     console.log(prezzoBigl.toFixed(2));
   }

