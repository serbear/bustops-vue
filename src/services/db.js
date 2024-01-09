// noinspection HttpUrlsUsage

// const host = "84.50.49.183";
const host = "localhost";

export function GetAllRegions() {
  let url = `http://${host}:3000/allStopAreas`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log("Network response was not ok");
        return { name: "error" };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return { name: "error" };
    });
}
export function GetRegionStops(regionName) {
  let url = `http://${host}:3000/areaStopsByAreaName`;
  let postData = { name: regionName };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Network response was not ok");
        return { name: "error" };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return { name: "error" };
    });
}

export async function GetBusesForStopOfRegion(stopId) {
  let url = `http://${host}:3000/busesForStopOfRegion`;
  let postData = {
    stop_id: stopId,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Network response was not ok");
        return { name: "error" };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return { name: "error" };
    });
}
export async function GetStopDescription(stopName, regionName) {
  let url = `http://${host}:3000/stopDescription`;
  let postData = {
    stop_name: stopName,
    stop_area: regionName,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Network response was not ok");
        return { name: "error" };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return { name: "error" };
    });
}
export function GetRegionAndNearestStop(coordinates) {
  let url = `http://${host}:3000/nearestRegionAndStop`;
  let postData = {
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Network response was not ok");
        return { name: "error" };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return { name: "error" };
    });
}
