const rp = require('request-promise');
const {TencentMapApiKey} = require('../config').API;


async function getCityFromGeoCoors(lag, long) {
  try {
    let r = await rp({
      uri: `https://apis.map.qq.com/ws/geocoder/v1/?location=${lag},${long}&key=${TencentMapApiKey}&language=en`,
      json: true
    });

    if(r.status != 0){
      console.log("get locality from the tencent map fails");
      console.log(r);
      return r;
    }
    return r.result.address_component.locality;

  } catch (e) {
    console.log("Getting city from Tencent maps failed.", e);
    return false
  }
}

module.exports = {getCityFromGeoCoors};