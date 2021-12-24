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
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "volt");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Volt R Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue} V`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Volt R Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue} V`,
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
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "volt");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Volt S Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue} V`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Volt S Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue} V`,
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
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "volt");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Volt T Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue}`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Volt T Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue}`,
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
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "current");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Current R Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Current R Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
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
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "current");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Current S Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Current S Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
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
    const gaugeLimit = await getValue.getGaugeLimit("panel-pompa", "current");
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Current T Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Current T Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
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
      notification: {
        title: `${ledName} ON!`,
        body: `Lampu ${ledName} menyala`,
      },
    };
    if (currentValue && !beforeValue) {
      sendFCM(notifPayload);
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
      notification: {
        title: "Pipa Underflow!",
        body: `Pipa ${flowMeterName} sedang mengalami underflow! Value: ${currentValue} m3/h`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Pipa Overflow!",
        body: `Pipa ${flowMeterName} sedang mengalami overflow! Value: ${currentValue} m3/h`,
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
      notification: {
        title: "Pipa Under Velocity!",
        body: `Pipa ${flowMeterName} sedang mengalami under velocity! Value: ${currentValue} m/s`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Pipa Over Velocity!",
        body: `Pipa ${flowMeterName} sedang mengalami over velocity! Value: ${currentValue} m/s`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      sendFCM(notifOverPayload);
    }
  });

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
    const gaugeLimit = await getValue.getGaugeLimit(
      "flow-meter",
      "temperature"
    );
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Temperature Inlet Pipa Under Heat!",
        body: `Inlet pipa ${flowMeterName} sedang mengalami under heat! Value: ${currentValue} °C`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Temperature Inlet Pipa Over Heat!",
        body: `Inlet pipa ${flowMeterName} sedang mengalami over heat! Value: ${currentValue} °C`,
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
    const gaugeLimit = await getValue.getGaugeLimit(
      "flow-meter",
      "temperature"
    );
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Temperature Outlet Pipa Under Heat!",
        body: `Outlet pipa ${flowMeterName} sedang mengalami under heat! Value: ${currentValue} °C`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Temperature Outlet Pipa Over Heat!",
        body: `Outlet pipa ${flowMeterName} sedang mengalami over heat! Value: ${currentValue} °C`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
      sendFCM(notifOverPayload);
    }
  });

exports.sendPressure = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}/pressurePsi")
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
      "pressurePsi"
    );
    const valueMin = gaugeLimit.min;
    const valueMax = gaugeLimit.max;

    const notifUnderPayload = {
      notification: {
        title: "Pipa Under Pressure!",
        body: `Pipa ${pressureSolarName} sedang mengalami under pressure! Value: ${currentValue} psi`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
      sendFCM(notifUnderPayload);
    }

    const notifOverPayload = {
      notification: {
        title: "Pipa Over Pressure!",
        body: `Pipa ${pressureSolarName} sedang mengalami over pressure! Value: ${currentValue} psi`,
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

    const notifPayload = {
      notification: {
        title: "Low Battery!",
        body: `Baterai pada solar panel ${pressureSolarName} mencapai titik low. Value: ${currentValue}%`,
      },
    };

    if (currentValue < 15 && beforeValue >= 15) {
      sendFCM(notifPayload);
    }
  });

exports.deteksiBocorPressure = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}/pressurePsi")
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
      notification: {
        title: "Terdapat anomali pada tekanan pipa!",
        body: `Terdapat kemungkinan adanya kebocoran pada pipa.`,
      },
    };

    // Untuk menambah keys pada object ke array
    const pressureKeys = Object.keys(pressureData);

    // Perbandingan nilai sensor
    for (let i = 0; i < pressureKeys.length; i++) {
      // Jika sudah mencapai iterasi terakhir, break
      if (i == pressureKeys.length - 1) {
        break;
      }

      // Mengambil nilai pressure dari iterasi sekarang dan iterasi berikutnya
      const num1 = Number(pressureData[pressureKeys[i]]["pressurePsi"]);
      const num2 = Number(pressureData[pressureKeys[i + 1]]["pressurePsi"]);

      functions.logger.log("num1: ", num1);
      functions.logger.log("num2: ", num2);

      // Perhitungan perbedaan antara dua nilai pressure
      const results = (Math.abs(num1 - num2) / ((num1 + num2) / 2)) * 100;

      // Apabila perbedaan lebih dari 50%
      if (results >= 50) {
        sendFCM(notifPayload);
        functions.logger.log("Terjadi kebocoran.");
        break;
      } else {
        functions.logger.log("Tidak terjadi kebocoran.");
      }
    }
  });
