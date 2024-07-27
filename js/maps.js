// Crear un objeto mapa
var map = L.map("map").setView([-0.31, -73.1], 7);

// Enlazar un mapa base a mi objeto de mapa
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Enlazar las capas WMS
var AFP = L.tileLayer.wms("http://localhost:8080/geoserver/GeoCuellar/wms?", {
    Layers: "Humedales_rur",
    format: "image/png",
    transparent: true
}).addTo(map);

// Agregar una tabla de contenido con control de capas
var baseMaps = {
    "OpenStreetMap": osm
};

var overlayMaps = {
    "Humedales Rurales": AFP
};

// Crear un control de capas moderno usando leaflet-control-layers
var layersControl = L.control.layers(baseMaps, overlayMaps, {
    collapsed: false // Muestra el control expandido por defecto
}).addTo(map);

// Mover el control de capas a un div específico
var layersControlContainer = layersControl.getContainer();
document.getElementById('layersControl').appendChild(layersControlContainer);
