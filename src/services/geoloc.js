export function GetGeoLocation(callback) {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    callback({ latitude, longitude });
  }
  function error() {
    callback({ error: "Unable to retrieve your location." });
  }

  if (!navigator.geolocation) {
    callback({ error: "Geolocation is not supported by your browser." });
  } else {
    return navigator.geolocation.getCurrentPosition(success, error);
  }
}
