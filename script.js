const frases = [
  "O campo alimenta a cidade; a cidade impulsiona o campo.",
  "Tecnologia urbana e saberes do campo formam um futuro sustentável.",
  "A conexão entre campo e cidade é a base de uma sociedade equilibrada.",
  "A cidade depende do campo tanto quanto o campo depende da cidade.",
  "A integração entre campo e cidade fortalece o desenvolvimento do país.",
  "Valorizar o campo é construir uma cidade mais consciente."
];

let indice = 0;

function mudarFrase() {
  document.getElementById("frase").innerText = frases[indice];
  indice = (indice + 1) % frases.length; 
}