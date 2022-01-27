const admin = require("firebase-admin");

module.exports = async (jenisMonitor, monitorId, indicator) => {
  const baseRef = `ewsApp/others/notifTime/${jenisMonitor}/${monitorId}`;
  const timeNow = new Date();

  try {
    const timeRef = `${baseRef}/${indicator}`;
    const timeDb = await admin.database().ref(timeRef).get();
    if (!timeDb.exists()) {
      const timeLimit = new Date();
      timeLimit.setSeconds(timeLimit.getSeconds() + 60);
      await admin
        .database()
        .ref(baseRef)
        .update({
          [indicator]: timeLimit.toISOString(),
        });
      return true;
    } else {
      const timeFromDb = new Date(timeDb.val());
      if (timeNow > timeFromDb) {
        timeNow.setSeconds(timeNow.getSeconds() + 60);
        await admin
          .database()
          .ref(baseRef)
          .update({
            [indicator]: timeNow.toISOString(),
          });
        return true;
      } else {
        return false;
      }
    }
  } catch (e) {
    console.error(e);
  }
};
