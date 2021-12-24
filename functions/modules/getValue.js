const admin = require("firebase-admin");

exports.getMonitorName = async (jenisMonitor, monitorId) => {
  try {
    const response = await admin
      .database()
      .ref(`ewsApp/${jenisMonitor}/${monitorId}/nama`)
      .once("value");

    const namaMonitor = response.val();
    return namaMonitor;
  } catch (err) {
    console.log("An error occured: " + err);
  }
};

exports.getGaugeLimit = async (jenisMonitor, jenisGauge) => {
  try {
    const response = await admin
      .database()
      .ref(`ewsApp/gaugeValue/${jenisMonitor}/${jenisGauge}`)
      .once("value");

    const fetchedObject = response.val();
    return fetchedObject;
  } catch (err) {
    console.log("An error occured: " + err);
  }
};
