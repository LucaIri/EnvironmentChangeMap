// Initialize the map centered on Africa
var map = L.map("map").setView([1.5, 17.5], 3.5);
// Define locations & success stories for African environmentalism
var locations = [
  {
    name: "Shinyanga Reforestation, Tanzania",
    coords: [-3.68, 33.42],
    description:
      "Community-led reforestation restored 300,000+ hectares, reducing deforestation and increasing biodiversity.",
  },
  {
    name: "Odaa Bulluq Sacred Forest, Ethiopia",
    coords: [9.03, 38.74],
    description:
      "Once degraded, this sacred forest is being restored by empowering local communities and honoring indigenous traditions.",
  },
  {
    name: "Great Green Wall, Sahel Region",
    coords: [15.98, 10.17],
    description:
      "A massive reforestation effort spanning 11 countries aims to stop desertification and promote sustainable farming.",
  },
  {
    name: "Burkina Faso Cashew Farming",
    coords: [12.24, -1.56],
    description:
      "Farmers plant cashew trees to restore forests while creating economic incentives, showing a balance between conservation and livelihoods.",
  },
  {
    name: "Sacred Groves, Ghana",
    coords: [7.95, -1.02],
    description:
      "Indigenous communities protect forests due to spiritual significance, creating biodiversity hotspots and natural climate solutions.",
  },
];
// Add markers for each location
locations.forEach(function (location) {
  var marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(`<h3>${location.name}</h3><p>${location.description}</p>`);
});
// Load OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);
