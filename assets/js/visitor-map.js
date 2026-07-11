(function () {
  "use strict";

  var container = document.querySelector("[data-visitor-map-endpoint]");
  if (!container) return;

  var endpoint = container.getAttribute("data-visitor-map-endpoint").replace(/\/$/, "");
  var count = container.querySelector("[data-visitor-count]");
  var mapElement = container.querySelector("[data-visitor-map]");

  function displayCount(total) {
    count.textContent = Number(total || 0).toLocaleString() + " page views";
  }

  function loadMap(points) {
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(stylesheet);

    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js";
    script.onload = function () {
      var map = window.L.map(mapElement, {
        attributionControl: true,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        zoomControl: false,
        touchZoom: false,
        keyboard: false
      }).setView([20, 0], 1);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 4,
        minZoom: 1,
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map);

      points.forEach(function (point) {
        if (typeof point.latitude !== "number" || typeof point.longitude !== "number") return;
        var radius = Math.min(12, 4 + Math.log2(point.views + 1) * 1.8);
        window.L.circleMarker([point.latitude, point.longitude], {
          radius: radius,
          color: "#ffffff",
          weight: 1,
          fillColor: "#d17842",
          fillOpacity: 0.82
        }).bindTooltip(point.country + ": " + Number(point.views).toLocaleString() + " views").addTo(map);
      });
    };
    script.onerror = function () {
      mapElement.textContent = "Map unavailable.";
    };
    document.head.appendChild(script);
  }

  fetch(endpoint + "/v1/visit", { method: "POST", keepalive: true })
    .catch(function () { return null; })
    .then(function () {
      return fetch(endpoint + "/v1/stats");
    })
    .then(function (response) {
      if (!response || !response.ok) throw new Error("Statistics unavailable");
      return response.json();
    })
    .then(function (data) {
      displayCount(data.total_views);
      loadMap(data.points || []);
    })
    .catch(function () {
      count.textContent = "Visitor statistics unavailable";
    });
}());
