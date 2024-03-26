import ExifReader from 'exifreader';

export async function getGpsFromImg(file: File) {
  const exif = await ExifReader.load(file);

  const lat = Number(exif.GPSLatitude?.description);
  const lng = Number(exif.GPSLongitude?.description);

  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    throw Error('GPS 정보가 있는 사진만 업로드 가능합니다.');
  }

  return { lat, lng };
}
