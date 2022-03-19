const admin = require("firebase-admin");
const functions = require("firebase-functions");

exports.telemetryFetchHour1 = functions.database
  .ref("ewsApp/panel-pompa/panelPompa1/") //Change
  .onWrite(async (change, context) => {
    // Get current time
    const timeNow = new Date();
    try {
      const hourDatabaseStringFetch = await admin
        .database()
        .ref("ewsApp/others/telemetryHour/panelPompa1") //Change
        .once("value");
      hourDatabaseString = hourDatabaseStringFetch.val();
      const hourDatabase = new Date(hourDatabaseString);

      if (timeNow >= hourDatabase || !hourDatabaseStringFetch.exists()) {
        timeNow.setHours(timeNow.getHours() + 1);
        await admin
          .database()
          .ref(
            `ewsApp/others/telemetryFetch/panelPompa1/${timeNow.toUTCString()}`
          )
          .update(change.after.val());
        await admin.database().ref("ewsApp/others/telemetryHour").update({
          panelPompa1: timeNow.toISOString(),
        });
      }
    } catch (e) {
      console.error(e);
    }
  });

exports.telemetryFetchHour2 = functions.database
  .ref("ewsApp/panel-pompa/panelPompa2/") //Change
  .onWrite(async (change, context) => {
    // Get current time
    const timeNow = new Date();
    try {
      const hourDatabaseStringFetch = await admin
        .database()
        .ref("ewsApp/others/telemetryHour/panelPompa2") //Change
        .once("value");
      hourDatabaseString = hourDatabaseStringFetch.val();
      const hourDatabase = new Date(hourDatabaseString);

      if (timeNow >= hourDatabase || !hourDatabaseStringFetch.exists()) {
        timeNow.setHours(timeNow.getHours() + 1);
        await admin
          .database()
          .ref(
            `ewsApp/others/telemetryFetch/panelPompa2/${timeNow.toUTCString()}`
          )
          .update(change.after.val());
        await admin.database().ref("ewsApp/others/telemetryHour").update({
          panelPompa2: timeNow.toISOString(),
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
