const functions = require("firebase-functions");
const admin = require("firebase-admin");

const getValue = require("../modules/getValue");
const setValue = require("../modules/setValue");
const sendFCM = require("../modules/sendFCM");

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

exports.flowMeterBaru = functions.database
  .ref("ewsApp/flow-meter/{flowMeterId}")
  .onCreate(async (change, context) => {
    const { flowMeterId } = context.params;
    const IdNum = flowMeterId.substring(9);
    const objBaru = {
      energyFlow: 0,
      flowRate: 0,
      fluidSoundSpeed: 0,
      nama: "Flow Meter " + IdNum,
      tempInlet: 0,
      tempOutlet: 0,
      negativeAcc: 0,
      positiveAcc: 0,
      velocity: 0,
      totalAir: 0,
    };

    await setValue.setNewMonitor("flow-meter", flowMeterId, objBaru);
  });
