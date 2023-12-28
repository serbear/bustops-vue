import resolve from "node:resolve";

export function GetAllRegions() {
  let url = "http://localhost:3000/allStopAreas";

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

export function GetRegionLikeName(regionName) {
  let url = "http://localhost:3000/stopAreasByName";
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

export function GetRegionStops(regionName) {
  let url = "http://localhost:3000/areaStopsByAreaName";
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

export async function GetBusesForStopOfRegion(regionName, stopName) {
  let url = "http://localhost:3000/busesForStopOfRegion";
  let postData = {
    region_name: regionName,
    stop_name: stopName,
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
