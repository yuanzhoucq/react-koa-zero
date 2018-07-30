const rp = require('request-promise');
const AccessTokenModel = require('../models/AccessTokenModel');
const Config = require('../../config');
const {appId, appSecret} = Config.WeChat.miniApp;


async function getAccessToken() {
  const name = "wechat";
  const prevToken = await AccessTokenModel.model.findOne({name});
  if (prevToken && prevToken.expireTime > Date.now()) return prevToken.accessToken;
  else {
    try {
      const r = await rp({
        uri: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`,
        json: true
      });

      const token = {
        name,
        accessToken: r.access_token,
        expireTime: parseInt(r.expires_in) * 1000 + Date.now() - 60 * 1000
      };
      await AccessTokenModel.model.deleteOne({name});
      new AccessTokenModel.model(token).save();
      return token.accessToken
    }
    catch (e) {
      AccessTokenModel.logger.log('Getting miniapp access token failed.', e);
      return false
    }
  }
}

/**
 * @param code, return by wx.login(), reference:
 * https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html
 */
async function getSessionKeyAndOpenID(code) {
  try {
    return await rp({
      uri: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
    })
  } catch (e) {
    console.log("Getting session_key and openid from WeChat server failed.", e);
    return false
  }
}

module.exports = {
  getAccessToken,
  getSessionKeyAndOpenID
};

