import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { CardProps, CityType } from '../../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: CityType;
  offers: CardProps[];
  activeOffer: CardProps | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers, activeOffer}: MapProps): JSX.Element {
  const containerRef = useRef(null);
  const map = useMap({containerRef, location: city.location});

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }

  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;

        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });

        marker
          .setIcon(
            offer.id === activeOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      className="cities__map map"
      ref={containerRef}
      // style={{
      //   height: '100%',
      //   width: '100%',
      //   maxWidth: '512px',
      // }}
    />
  );
}

export default Map;
