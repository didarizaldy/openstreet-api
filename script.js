var map = L.map('map', {
    center: [-6.230694, 106.974382],
    zoom: 16
});

L.control.scale().addTo(map);
L.marker([-6.230694, 106.974382]).addTo(map)
    .bindPopup("<b>Kranji Kota Bekasi.").openPopup();
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Dibuat dengan OpenStreet-API'
}).addTo(map);

  var searchControl = new L.esri.Controls.Geosearch().addTo(map);

  var results = new L.LayerGroup().addTo(map);

  searchControl.on('results', function(data){
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });

setTimeout(function(){$('.pointer').fadeOut('slow');},3400);