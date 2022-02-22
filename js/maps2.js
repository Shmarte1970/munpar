function initMap() {

  // Opciones del map

  var options  = {
    zoom:16,
    center:{lat:41.450756, lng:2.206758}

  }

  // Nuevo Mapa
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Añadir punto de localizacion.

  var Punto = 'puntomunpar.png';

  var marker = new google.maps.Marker({
      position:{lat:41.450756, lng:2.206758},
      map:map,
      icon: Punto
  });

  var ventanaInfo = new google.maps.InfoWindow({
    /* content:'<h1>Marisol Muñoz'*/
    content:'<div class="info-window">' +
            '<h3>Marisol Muñoz Pardo</h3>' +
            '<div class="info-content">' +
            '<h4>-Despacho de Abogados-</h4>' +
            '<h4>Avd. Santa Coloma nº 2 1º-2ª</h4>'+
            '<h3>Telf 93 184 48 37</h3>'+
          /*  '<img src="images/despacho.png" height="160px" width="160px">'+*/
            '<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.478350733191!2d2.2045681154803805!3d41.45053930004064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bc8d84053f11%3A0x241c37c46cb0d9bb!2sMarisol%20Mu%C3%B1oz%20Advocada!5e0!3m2!1ses!2ses!4v1645006695597!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy""><img src="images/maps.jpg" height="75px" width="75px"></a>'+
            '</div>' +
            '</div>'

  });

  marker.addListener('click', function(){
    ventanaInfo.open(map, marker);
  });

}
