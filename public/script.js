// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Definir un nuevo ícono personalizado para la Catedral de Aguascalientes
var iconoCatedral = L.icon({
  iconUrl: 'images/catedral.png',  // Ruta de la imagen de la Catedral
  iconSize: [38, 38],              // Tamaño del ícono
  iconAnchor: [22, 94],            // Punto del ícono que se posicionará en el mapa
  popupAnchor: [-3, -76]           // Punto desde el cual se abrirá el popup
});

// Añadir un marcador para la Catedral con el ícono personalizado
var catedral = L.marker([21.8818, -102.2912], { icon: iconoCatedral }).addTo(map);
catedral.bindPopup("<b>Catedral de Aguascalientes</b><br>Un ícono cultural.");

// Definir otro ícono personalizado para el Museo Nacional de la Muerte
var iconoMuseo = L.icon({
  iconUrl: 'images/museo.png',  // Ruta de la imagen del Museo
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

// Añadir un marcador para el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconoMuseo }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Añadir otros marcadores con íconos personalizados
// Marcador para la Plaza de la Patria
var iconoPlaza = L.icon({
  iconUrl: 'images/plaza.png',  // Ruta de la imagen de la Plaza
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconoPlaza }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Añadir marcador para el Parque Tres Centurias
var iconoParque = L.icon({
  iconUrl: 'images/parque.png',  // Ruta de la imagen del Parque Tres Centurias
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

var parqueTresCenturias = L.marker([21.8886, -102.2960], { icon: iconoParque }).addTo(map);
parqueTresCenturias.bindPopup("<b>Parque Tres Centurias</b><br>Un lugar de historia y entretenimiento.");

// Añadir un círculo en la ubicación de la Feria de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
  color: 'green',
  fillColor: '#0f3',
  fillOpacity: 0.5,
  radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Dibuja un polígono que delimita el Centro Histórico
var centroHistorico = L.polygon([
  [21.8821, -102.2935],
  [21.8829, -102.2865],
  [21.8797, -102.2860],
  [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Añadir controles de capas para permitir mostrar/ocultar los marcadores y formas
var baseMaps = {
  "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

var overlayMaps = {
  "Lugares importantes": L.layerGroup([catedral, plazaPatria, museoMuerte, parqueTresCenturias]),
  "Feria de San Marcos": feriaSanMarcos,
  "Centro Histórico": centroHistorico
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
