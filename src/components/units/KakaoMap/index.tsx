import { Map } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import CustomMarker from './CustomMarker';

interface Props {
  spots?: {
    latitude: number;
    longitude: number;
  }[];
}

function KaKaoMap({ spots }: Props) {
  const [center, setCenter] = useState({
    lat: 33.45070199999999,
    lng: 126.5706679999999,
  });

  useEffect(() => {
    if (!spots || spots?.length === 0) return;

    const latValues = spots.map((spot) => spot.latitude);
    const lngValues = spots.map((spot) => spot.longitude);

    const sumOfLng = lngValues.reduce((sum, lng) => sum + lng, 0);
    const sumOfLat = latValues.reduce((sum, lat) => sum + lat, 0);
    const averageLat = sumOfLat / spots.length;
    const averageLng = sumOfLng / spots.length;
    setCenter({ lat: averageLat, lng: averageLng });
  }, [spots, setCenter]);

  return (
    <Map className="h-full w-full" center={center}>
      {spots?.map(({ latitude, longitude}, idx) => (
        <CustomMarker
          // eslint-disable-next-line react/no-array-index-key
          key={`${latitude}_${longitude}_${idx}`}
          label={`Spot ${idx + 1}`}
          lat={latitude}
          lng={longitude}
        />
      ))}
    </Map>
  );
}

export default KaKaoMap;
