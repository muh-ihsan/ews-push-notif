const admin = require("firebase-admin");

module.exports = (payload) => {
  admin
    .messaging()
    .sendToTopic("notif", payload)
    .then(() => {
      console.log("FCM: Notification sends successfully.");
    })
    .catch((e) => {
      if (e.code === "messaging/authentication-error") {
        console.log("FCM Error: Tidak dapat mengautentikasi ke server FCM.");
      } else {
        console.log("FCM Error: ", e);
      }
    });
};
