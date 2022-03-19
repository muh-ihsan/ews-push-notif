const functions = require("firebase-functions");
const admin = require("firebase-admin");

const getValue = require("../modules/getValue");
const setValue = require("../modules/setValue");
const sendFCM = require("../modules/sendFCM");
const isTime = require("../modules/timer");

exports.sendPanelVoltR = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/voltR")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get current and before change value
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Monitor name
    const namaPanel = await getValue.getMonitorName(
      "panel-pompa",
      panelPompaId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "voltR");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Volt R Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue} V`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      const canSend = await isTime("panelPompa", panelPompaId, "voltR");
      if (canSend) {
        sendFCM(notifUnderPayload);
      }
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Volt R Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue} V`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      const canSend = await isTime("panelPompa", panelPompaId, "voltR");
      if (canSend) {
        sendFCM(notifOverPayload);
      }
    }
  });

exports.sendPanelVoltS = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/voltS")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get current and before change value
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Monitor name
    const namaPanel = await getValue.getMonitorName(
      "panel-pompa",
      panelPompaId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "voltS");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Volt S Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue} V`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };

    if (currentValue < valueMin && beforeValue >= valueMin) {
      const canSend = await isTime("panelPompa", panelPompaId, "voltS");
      if (canSend) {
        sendFCM(notifUnderPayload);
      }
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Volt S Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue} V`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      const canSend = await isTime("panelPompa", panelPompaId, "voltS");
      if (canSend) {
        sendFCM(notifOverPayload);
      }
    }
  });

exports.sendPanelVoltT = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/voltT")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get current and before change value
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Monitor name
    const namaPanel = await getValue.getMonitorName(
      "panel-pompa",
      panelPompaId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "voltT");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Volt T Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue} V`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      const canSend = await isTime("panelPompa", panelPompaId, "voltT");
      if (canSend) {
        sendFCM(notifUnderPayload);
      }
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Volt T Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue} V`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      const canSend = await isTime("panelPompa", panelPompaId, "voltT");
      if (canSend) {
        sendFCM(notifOverPayload);
      }
    }
  });

exports.sendPanelCurrentR = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/currentR")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get current and before change value
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Monitor name
    const namaPanel = await getValue.getMonitorName(
      "panel-pompa",
      panelPompaId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "currentR");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Current R Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue} A`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      const canSend = await isTime("panelPompa", panelPompaId, "currentR");
      if (canSend) {
        sendFCM(notifUnderPayload);
      }
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Current R Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue} A`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      const canSend = await isTime("panelPompa", panelPompaId, "currentR");
      if (canSend) {
        sendFCM(notifOverPayload);
      }
    }
  });

exports.sendPanelCurrentS = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/currentS")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get current and before change value
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Monitor name
    const namaPanel = await getValue.getMonitorName(
      "panel-pompa",
      panelPompaId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "currentS");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Current S Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue} A`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      const canSend = await isTime("panelPompa", panelPompaId, "currentS");
      if (canSend) {
        sendFCM(notifUnderPayload);
      }
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Current S Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue} A`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      const canSend = await isTime("panelPompa", panelPompaId, "currentS");
      if (canSend) {
        sendFCM(notifOverPayload);
      }
    }
  });

exports.sendPanelCurrentT = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/currentT")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get current and before change value
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Monitor name
    const namaPanel = await getValue.getMonitorName(
      "panel-pompa",
      panelPompaId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "currentT");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Current T Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue} A`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      const canSend = await isTime("panelPompa", panelPompaId, "currentT");
      if (canSend) {
        sendFCM(notifUnderPayload);
      }
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: "Current T Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue} A`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      const canSend = await isTime("panelPompa", panelPompaId, "currentT");
      if (canSend) {
        sendFCM(notifOverPayload);
      }
    }
  });

exports.sendLED = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/{ledId}/value")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;
    const ledId = context.params.ledId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();

    // Get Monitor name
    const namaPanel = await getValue.getMonitorName(
      "panel-pompa",
      panelPompaId
    );

    // Get Nama LED
    let ledName;
    await admin
      .database()
      .ref(`ewsApp/panel-pompa/${panelPompaId}/${ledId}/nama`)
      .once("value")
      .then((snapshot) => {
        ledName = snapshot.val();
        functions.logger.log("Nama Monitor: ", snapshot.val());
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    const notifPayload = {
      data: {
        jenisMonitor: "PanelPompa",
        monitorId: panelPompaId,
      },
      notification: {
        title: `${ledName} ${currentValue}!`,
        body: `Lampu ${ledName} pada ${namaPanel} ${currentValue}.`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (change.before.exists() && change.after.exists()) {
      if (currentValue !== beforeValue) {
        sendFCM(notifPayload);
      }
    }
  });

exports.relayChange = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/{relayId}/trigger")
  .onWrite(async (change, context) => {
    const { panelPompaId, relayId } = context.params;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();

    let oppRelay;
    if (relayId == "relay1") {
      oppRelay = "relay2";
    } else {
      oppRelay = "relay1";
    }

    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    if (change.before.exists() && change.after.exists()) {
      if (currentValue !== beforeValue) {
        await admin
          .database()
          .ref(`ewsApp/panel-pompa/${panelPompaId}/${oppRelay}`)
          .update({
            trigger: Number(!currentValue),
          })
          .catch(functions.logger.error);
      }
    }
  });

exports.calculatePower = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/powerPositif")
  .onWrite(async (change, context) => {
    const { panelPompaId } = context.params;
    const powerPositif = change.after.val();
    try {
      const powerNegatifFetch = await admin
        .database()
        .ref(`ewsApp/panel-pompa/${panelPompaId}/powerNegatif`)
        .once("value");
      const powerNegatif = powerNegatifFetch.val();
      functions.logger.log("power positif: ", powerPositif);
      functions.logger.log("power negatif: ", powerNegatif);
      const power = powerPositif - powerNegatif;
      await admin.database().ref(`ewsApp/panel-pompa/${panelPompaId}`).update({
        power,
      });
    } catch (e) {
      console.error(e);
    }
  });

exports.panelPompaBaru = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}")
  .onCreate(async (change, context) => {
    const { panelPompaId } = context.params;
    const IdNum = panelPompaId.substring(10);
    const objBaru = {
      currentR: 0,
      currentS: 0,
      currentT: 0,
      frequency: 0,
      relay1: { nama: "Relay 1", trigger: 0 },
      relay2: { nama: "Relay 2", trigger: 1 },
      nama: "Panel Pompa " + IdNum,
      power: 0,
      powerFactor: 0,
      voltR: 0,
      voltS: 0,
      voltT: 0,
    };

    await setValue.setNewMonitor("panel-pompa", panelPompaId, objBaru);
  });
