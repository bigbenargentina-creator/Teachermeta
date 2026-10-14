// 1. JS SE CONECTA AL HTML
// document = todo tu index.html
// getElementById busca el id que pusiste en el HTML y lo guarda en una variable (apodo)
const listaLateral = document.getElementById("lista-lateral");
const espacioBlanco = document.getElementById("espacio-blanco");

// 2. RECORRE CADA LINK DE link.js
misLinks.forEach(pagina => {
  
  // --- CREA EL ITEM DE LA IZQUIERDA (EL ROJO) ---
  const item = document.createElement("div"); // Crea un div vacío en memoria, no se ve aún
  item.className = "item"; // LE PONE LA CLASE "item" -> ACÁ SE CONECTA CON EL CSS (.item)
  item.innerHTML = `${pagina.logo} ${pagina.nombre}`; // Escribe el contenido que viene de link.js
  item.onclick = () => window.open(pagina.url, "_blank"); // Al clickear, abre el link
  listaLateral.appendChild(item); // RECIÉN ACÁ LO METE EN EL HTML Y APARECE EN PANTALLA
  
  // --- CREA LA TARJETA DE LA DERECHA (LA BLANCA) ---
  const card = document.createElement("div");
  card.className = "preview-card"; // CONEXIÓN CON CSS (.preview-card)
  card.innerHTML = `
    <div style="font-size:30px;">${pagina.logo}</div>
    <h3>${pagina.nombre}</h3>
    <p style="font-size:11px; color:gray;">${pagina.url}</p>
    <button style="background:${pagina.color}; color:white; border:none; padding:8px 12px; border-radius:6px;">
      Abrir
    </button>
  `;
  // El background:${pagina.color} de arriba viene de link.js, no del style.css
  espacioBlanco.appendChild(card);
});