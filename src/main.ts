import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken =
  'pk.eyJ1IjoiY2FybG9zMjcwODE1IiwiYSI6ImNsNG5hbnNyZTBmZnIzanE4dGRydWRiYjMifQ.w4gIPnM1liUL9OuL_abHAg';

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocalización');
  throw new Error('Navegador no soporta la geolocalizacón');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
