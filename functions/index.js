const functions = require("firebase-functions");
const admin = require("firebase-admin");

const getValue = require("./modules/getValue");
const sendFCM = require("./modules/sendFCM");

admin.initializeApp();

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
      sendFCM(notifUnderPayload);
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
      sendFCM(notifOverPayload);
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
      sendFCM(notifUnderPayload);
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
      sendFCM(notifOverPayload);
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
      sendFCM(notifUnderPayload);
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
      sendFCM(notifOverPayload);
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
      sendFCM(notifUnderPayload);
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
      sendFCM(notifOverPayload);
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
      sendFCM(notifUnderPayload);
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
      sendFCM(notifOverPayload);
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
      sendFCM(notifUnderPayload);
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
      sendFCM(notifOverPayload);
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

exports.sendFlowRate = functions.database
  .ref("ewsApp/flow-meter/{flowMeterId}/flowRate")
  .onWrite(async (change, context) => {
    const flowMeterId = context.params.flowMeterId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Flow Meter
    const flowMeterName = await getValue.getMonitorName(
      "flow-meter",
      flowMeterId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("flow-meter", "flowRate");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Pipa Underflow!",
        body: `Pipa ${flowMeterName} sedang mengalami underflow! Value: ${currentValue} m3/h`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Pipa Overflow!",
        body: `Pipa ${flowMeterName} sedang mengalami overflow! Value: ${currentValue} m3/h`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      sendFCM(notifOverPayload);
    }
  });

exports.sendVelocity = functions.database
  .ref("ewsApp/flow-meter/{flowMeterId}/velocity")
  .onWrite(async (change, context) => {
    const flowMeterId = context.params.flowMeterId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Flow Meter
    const flowMeterName = await getValue.getMonitorName(
      "flow-meter",
      flowMeterId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("flow-meter", "velocity");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Pipa Under Velocity!",
        body: `Pipa ${flowMeterName} sedang mengalami under velocity! Value: ${currentValue} m/s`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Pipa Over Velocity!",
        body: `Pipa ${flowMeterName} sedang mengalami over velocity! Value: ${currentValue} m/s`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      sendFCM(notifOverPayload);
    }
  });

// exports.sendEnergyFlow = functions.database
//   .ref("ewsApp/flow-meter/{flowMeterId}/energyFlow")
//   .onWrite(async (change, context) => {
//     const flowMeterId = context.params.flowMeterId;

//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);

//     // Get Nama Flow Meter
//     const flowMeterName = await getValue.getMonitorName(
//       "flow-meter",
//       flowMeterId
//     );

//     // Get gauge value
//     const gaugeLimit = await getValue.getGaugeLimit("flow-meter", "energyFlowRate");
//     const valueMin = gaugeLimit.min;
//     const valueMax = gaugeLimit.max;

//     const notifUnderPayload = {
//       data: {
//         jenisMonitor: "FlowMeter",
//         monitorId: flowMeterId,
//       },
//       notification: {
//         title: "Energy Flow Rate Pipa Under!",
//         body: `Pipa ${flowMeterName} sedang mengalami under energy flow rate! Value: ${currentValue} GJ/h`,
//         sound: "notifsound.wav",
//         android_channel_id: "ews_warning",
//       },
//     };
//     if (currentValue < valueMin && beforeValue >= valueMin) {
//       sendFCM(notifUnderPayload);
//     }

//     const notifOverPayload = {
//       data: {
//         jenisMonitor: "FlowMeter",
//         monitorId: flowMeterId,
//       },
//       notification: {
//         title: "Energy Flow Rate Pipa Over!",
//         body: `Pipa ${flowMeterName} sedang mengalami over energy flow rate! Value: ${currentValue} GJ/h`,
//         sound: "notifsound.wav",
//         android_channel_id: "ews_warning",
//       },
//     };
//     if (currentValue > valueMax && beforeValue <= valueMax) {
//       sendFCM(notifOverPayload);
//     }
//   });

// exports.sendFluidSound = functions.database
//   .ref("ewsApp/flow-meter/{flowMeterId}/fluidSoundSpeed")
//   .onWrite(async (change, context) => {
//     const flowMeterId = context.params.flowMeterId;

//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);

//     // Get Nama Flow Meter
//     const flowMeterName = await getValue.getMonitorName(
//       "flow-meter",
//       flowMeterId
//     );

//     // Get gauge value
//     const gaugeLimit = await getValue.getGaugeLimit("flow-meter", "fluidSound");
//     const valueMin = gaugeLimit.min;
//     const valueMax = gaugeLimit.max;

//     const notifUnderPayload = {
//       data: {
//         jenisMonitor: "FlowMeter",
//         monitorId: flowMeterId,
//       },
//       notification: {
//         title: "Fluid Sound Speed Pipa Under!",
//         body: `Pipa ${flowMeterName} sedang mengalami under fluid sound speed! Value: ${currentValue} m/s`,
//         sound: "notifsound.wav",
//         android_channel_id: "ews_warning",
//       },
//     };
//     if (currentValue < valueMin && beforeValue >= valueMin) {
//       sendFCM(notifUnderPayload);
//     }

//     const notifOverPayload = {
//       data: {
//         jenisMonitor: "FlowMeter",
//         monitorId: flowMeterId,
//       },
//       notification: {
//         title: "Fluid Sound Speed Pipa Over!",
//         body: `Pipa ${flowMeterName} sedang mengalami over fluid sound speed! Value: ${currentValue} m/s`,
//         sound: "notifsound.wav",
//         android_channel_id: "ews_warning",
//       },
//     };
//     if (currentValue > valueMax && beforeValue <= valueMax) {
//       sendFCM(notifOverPayload);
//     }
//   });

exports.sendTempInlet = functions.database
  .ref("ewsApp/flow-meter/{flowMeterId}/tempInlet")
  .onWrite(async (change, context) => {
    const flowMeterId = context.params.flowMeterId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Flow Meter
    const flowMeterName = await getValue.getMonitorName(
      "flow-meter",
      flowMeterId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("flow-meter", "tempInlet");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Temperature Inlet Pipa Under Heat!",
        body: `Inlet pipa ${flowMeterName} sedang mengalami under heat! Value: ${currentValue} °C`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Temperature Inlet Pipa Over Heat!",
        body: `Inlet pipa ${flowMeterName} sedang mengalami over heat! Value: ${currentValue} °C`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      sendFCM(notifOverPayload);
    }
  });

exports.sendTempOutlet = functions.database
  .ref("ewsApp/flow-meter/{flowMeterId}/tempOutlet")
  .onWrite(async (change, context) => {
    const flowMeterId = context.params.flowMeterId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Flow Meter
    const flowMeterName = await getValue.getMonitorName(
      "flow-meter",
      flowMeterId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit("flow-meter", "tempOutlet");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Temperature Outlet Pipa Under Heat!",
        body: `Outlet pipa ${flowMeterName} sedang mengalami under heat! Value: ${currentValue} °C`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "FlowMeter",
        monitorId: flowMeterId,
      },
      notification: {
        title: "Temperature Outlet Pipa Over Heat!",
        body: `Outlet pipa ${flowMeterName} sedang mengalami over heat! Value: ${currentValue} °C`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      sendFCM(notifOverPayload);
    }
  });

exports.sendPressure = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}/pressureBar")
  .onWrite(async (change, context) => {
    const pressureSolarId = context.params.pressureSolarId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Pressure Solar
    const pressureSolarName = await getValue.getMonitorName(
      "pressure-solar",
      pressureSolarId
    );

    // Get gauge value
    const gaugeLimit = await getValue.getGaugeLimit(
      "pressure-solar",
      "pressureBar"
    );
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      data: {
        jenisMonitor: "PressureSolar",
        monitorId: pressureSolarId,
      },
      notification: {
        title: "Pipa Under Pressure!",
        body: `Pipa ${pressureSolarName} sedang mengalami under pressure! Value: ${currentValue} bar`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      data: {
        jenisMonitor: "PressureSolar",
        monitorId: pressureSolarId,
      },
      notification: {
        title: "Pipa Over Pressure!",
        body: `Pipa ${pressureSolarName} sedang mengalami over pressure! Value: ${currentValue} bar`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      sendFCM(notifOverPayload);
    }
  });

exports.sendBattery = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}/voltage")
  .onWrite(async (change, context) => {
    const pressureSolarId = context.params.pressureSolarId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Pressure Solar
    const pressureSolarName = await getValue.getMonitorName(
      "pressure-solar",
      pressureSolarId
    );

    // Cek value terdapat persen
    let newCurrentValue, newBeforeValue;
    if (currentValue.search("%") !== -1) {
      newCurrentValue = currentValue.replace("%", "");
      newBeforeValue = beforeValue.replace("%", "");
    } else {
      newCurrentValue = currentValue;
      newBeforeValue = beforeValue;
    }

    const notifPayload = {
      data: {
        jenisMonitor: "PressureSolar",
        monitorId: pressureSolarId,
      },
      notification: {
        title: "Low Battery!",
        body: `Baterai pada solar panel ${pressureSolarName} mencapai titik low. Value: ${currentValue}`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };

    if (newCurrentValue < 15 && newBeforeValue >= 15) {
      sendFCM(notifPayload);
    }
  });

exports.deteksiBocorPressure = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}/pressureBar")
  .onWrite(async (change, context) => {
    pressureSolarId = context.params.pressureSolarId;

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Mengambil objek pada pressure solar
    let pressureData;
    await admin
      .database()
      .ref(`ewsApp/pressure-solar`)
      .once("value")
      .then((snapshot) => {
        pressureData = snapshot.val();
        functions.logger.log("Pressure data: ", snapshot.val());
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    functions.logger.log("PressureData return: ", pressureData);

    // Payload untuk notifikasi
    const notifPayload = {
      data: {
        jenisMonitor: "PressureSolar",
        monitorId: pressureSolarId,
      },
      notification: {
        title: "Terdapat anomali pada tekanan pipa!",
        body: `Terdapat kemungkinan adanya kebocoran pada pipa.`,
        sound: "notifsound.wav",
        android_channel_id: "ews_warning",
      },
    };

    // Untuk menambah keys pada object ke array
    const pressureKeys = Object.keys(pressureData);

    let kebocoran = false;
    const warningRef = admin.database().ref("ewsApp/warning");

    // Perbandingan nilai sensor
    for (let i = 0; i < pressureKeys.length; i++) {
      // Jika sudah mencapai iterasi terakhir, break
      if (i == pressureKeys.length - 1) {
        break;
      }

      // Mengambil nilai pressure dari iterasi sekarang dan iterasi berikutnya
      const num1 = Number(pressureData[pressureKeys[i]]["pressureBar"]);
      const num2 = Number(pressureData[pressureKeys[i + 1]]["pressureBar"]);

      functions.logger.log("num1: ", num1);
      functions.logger.log("num2: ", num2);

      // Perhitungan perbedaan antara dua nilai pressure
      const results = (Math.abs(num1 - num2) / ((num1 + num2) / 2)) * 100;

      // Apabila perbedaan lebih dari 50%
      if (results >= 50) {
        kebocoran = true;
        break;
      } else {
        kebocoran = false;
      }
    }

    // Untuk menentukan kebocoran
    if (kebocoran) {
      let bocorValue;
      await admin
        .database()
        .ref(`${warningRef}/kebocoran`)
        .once("value")
        .then((response) => {
          bocorValue = response.val();
        })
        .catch(console.error);
      if (bocorValue === false) {
        sendFCM(notifPayload);
      }
      warningRef.update({
        kebocoran: true,
      });
      functions.logger.log("Terjadi kebocoran.");
    } else {
      warningRef.update({
        kebocoran: false,
      });
      functions.logger.log("Tidak terjadi kebocoran.");
    }
  });
