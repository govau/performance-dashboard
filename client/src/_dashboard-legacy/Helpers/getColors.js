const KPI_COLOR_PALETTE = [
  // copied from src/configure.js:4
  '#cf7e33', // gold
  '#7e985c', // green
  '#007cc3', // blue
  '#6e63a7', // purple
];

// note: additions to this file should comparitatively update
// referenced at client/src/_dashboard-legacy/Helpers/strokeDashes.js
function getColors() {
  return KPI_COLOR_PALETTE;
}
module.exports = getColors;
