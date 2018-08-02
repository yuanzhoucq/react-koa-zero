const rp = require('request-promise');
const {GoogleMapApiKey} = require('../config').API;

async function getCityFromGeoCoors(lag, long) {
  try {
    let r = await rp({
      uri: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lag},${long}&key=${GoogleMapApiKey}&language=en&result_type=locality`,
      json: true
    });
    return r.results[0].address_components[0].long_name
  } catch (e) {
    console.log("Getting city from Google maps failed.", e);
    return false
  }
}

module.exports = {getCityFromGeoCoors};