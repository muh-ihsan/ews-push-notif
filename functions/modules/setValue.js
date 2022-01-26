const admin = require("firebase-admin");

exports.setNewMonitor = async (jenisMonitor, monitorId, objSet) => {
  try {
    await admin
      .database()
      .ref(`ewsApp/${jenisMonitor}/${monitorId}`)
      .update(objSet);
  } catch (err) {
    console.error(err);
  }
};
