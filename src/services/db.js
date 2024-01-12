// noinspection HttpUrlsUsage

import { RequestMethods } from "@/enums.js";

const host = "http://localhost"; // http://84.50.49.183
const port = "3000";

function fetchData(endPoint, method, bodyData) {
  return fetch(`${host}:${port}${endPoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  })
    .then((response) => {
      if (!response.ok) {
        return { status: "error", message: "Network response was not ok" };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return { status: "error", message: error.message };
    });
}
function fetchGetData(endPoint, bodyData) {
  return fetchData(endPoint, RequestMethods.GET, bodyData);
}
function fetchPostData(endPoint, bodyData) {
  return fetchData(endPoint, RequestMethods.POST, bodyData);
}

export function GetAllRegions() {
  return fetchGetData("/allStopAreas");
}
export function GetRegionStops(regionName) {
  return fetchPostData("/areaStopsByAreaName", {
    name: regionName,
  });
}

export async function GetBusesForStopOfRegion(stopId) {
  return fetchPostData("/busesForStopOfRegion", {
    stop_id: stopId,
  });
}
export async function GetStopDescription(stopName, regionName) {
  return fetchPostData("/stopDescription", {
    stop_name: stopName,
    stop_area: regionName,
  });
}
export function GetRegionAndNearestStop(coordinates) {
  return fetchPostData("/nearestRegionAndStop", {
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  });
}
