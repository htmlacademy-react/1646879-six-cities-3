import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { LocationType } from '../types';
import { Map, TileLayer } from 'leaflet';

type UseMapProps = {
  containerRef: MutableRefObject<HTMLElement | null>;
  location: LocationType;
}

const TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://carto.com/attributions">CARTO</a>';

function useMap({containerRef, location}: UseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (containerRef.current !== null && isRenderedRef.current === false) {
      const {latitude, longitude, zoom} = location;

      const instance = new Map(containerRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      const layer = new TileLayer(
        TILE_LAYER_URL,
        {
          attribution: TILE_LAYER_ATTRIBUTION,
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [containerRef, location]);

  return map;
}

export default useMap;
