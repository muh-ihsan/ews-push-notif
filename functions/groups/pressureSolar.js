const functions = require("firebase-functions");
const admin = require("firebase-admin");

const getValue = require("../modules/getValue");
const setValue = require("../modules/setValue");
const sendFCM = require("../modules/sendFCM");

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

exports.pressureSolarBaru = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}")
  .onCreate(async (change, context) => {
    const { pressureSolarId } = context.params;
    const IdNum = pressureSolarId.substring(13);
    const objBaru = {
      nama: "Pressure Solar " + IdNum,
      current: 0,
      pressureBar: 0,
      pressurePsi: 0,
      voltage: 0,
    };

    await setValue.setNewMonitor("pressure-solar", pressureSolarId, objBaru);
  });
