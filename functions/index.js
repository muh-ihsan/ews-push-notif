const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// TODO: Batas value over dan under pada code ini masih sementara. Ganti jadi value yang pasti.

exports.sendPanelVoltR = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/voltR")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;
    let namaPanel = "";

    // Get Monitor name
    await admin
      .database()
      .ref(`/ewsApp/panel-pompa/${panelPompaId}/nama`)
      .once("value")
      .then((snapshot) => {
        namaPanel = snapshot.val();
        functions.logger.log("Nama Monitor: ", snapshot.val());
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    const notifUnderPayload = {
      notification: {
        title: "Volt R Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue}`,
      },
    };
    if (currentValue < 200 && beforeValue >= 200) {
      admin
        .messaging()
        .sendToTopic("notif", notifUnderPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }

    const notifOverPayload = {
      notification: {
        title: "Volt R Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue}`,
      },
    };
    if (currentValue > 300 && beforeValue <= 300) {
      admin
        .messaging()
        .sendToTopic("notif", notifOverPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }
  });

// exports.sendPanelVoltS = functions.database
//   .ref("ewsApp/panel-pompa/{panelPompaId}/voltS")
//   .onWrite(async (change, context) => {
//     const panelPompaId = context.params.panelPompaId;
//     let namaPanel = "";

//     // Get Monitor name
//     await admin
//       .database()
//       .ref(`/ewsApp/panel-pompa/${panelPompaId}/nama`)
//       .once("value")
//       .then((snapshot) => {
//         namaPanel = snapshot.val();
//         functions.logger.log("Nama Monitor: ", snapshot.val());
//       })
//       .catch((err) => {
//         functions.logger.error("Error: ", err);
//       });

//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);

//     const notifUnderPayload = {
//       notification: {
//         title: "Volt S Undervolt!",
//         body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue < 200 && beforeValue >= 200) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifUnderPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }

//     const notifOverPayload = {
//       notification: {
//         title: "Volt S Overvolt!",
//         body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue > 300 && beforeValue <= 300) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifOverPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }
//   });

// exports.sendPanelVoltT = functions.database
//   .ref("ewsApp/panel-pompa/{panelPompaId}/voltT")
//   .onWrite(async (change, context) => {
//     const panelPompaId = context.params.panelPompaId;
//     let namaPanel = "";

//     // Get Monitor name
//     await admin
//       .database()
//       .ref(`/ewsApp/panel-pompa/${panelPompaId}/nama`)
//       .once("value")
//       .then((snapshot) => {
//         namaPanel = snapshot.val();
//         functions.logger.log("Nama Monitor: ", snapshot.val());
//       })
//       .catch((err) => {
//         functions.logger.error("Error: ", err);
//       });

//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);

//     const notifUnderPayload = {
//       notification: {
//         title: "Volt T Undervolt!",
//         body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue < 200 && beforeValue >= 200) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifUnderPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }

//     const notifOverPayload = {
//       notification: {
//         title: "Volt T Overvolt!",
//         body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue > 300 && beforeValue <= 300) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifOverPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }
//   });

// exports.sendPanelCurrentR = functions.database
//   .ref("ewsApp/panel-pompa/{panelPompaId}/currentR")
//   .onWrite(async (change, context) => {
//     const panelPompaId = context.params.panelPompaId;
//     let namaPanel = "";

//     // Get Monitor name
//     await admin
//       .database()
//       .ref(`/ewsApp/panel-pompa/${panelPompaId}/nama`)
//       .once("value")
//       .then((snapshot) => {
//         namaPanel = snapshot.val();
//         functions.logger.log("Nama Monitor: ", snapshot.val());
//       })
//       .catch((err) => {
//         functions.logger.error("Error: ", err);
//       });

//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);
//     const notifUnderPayload = {
//       notification: {
//         title: "Current R Undercurrent!",
//         body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
//       },
//     };

//     if (currentValue < 500 && beforeValue >= 500) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifUnderPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }

//     const notifOverPayload = {
//       notification: {
//         title: "Current R Overcurrent!",
//         body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue > 3000 && beforeValue <= 3000) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifOverPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }
//   });

// exports.sendPanelCurrentS = functions.database
//   .ref("ewsApp/panel-pompa/{panelPompaId}/currentS")
//   .onWrite(async (change, context) => {
//     const panelPompaId = context.params.panelPompaId;
//     let namaPanel = "";

//     // Get Monitor name
//     await admin
//       .database()
//       .ref(`/ewsApp/panel-pompa/${panelPompaId}/nama`)
//       .once("value")
//       .then((snapshot) => {
//         namaPanel = snapshot.val();
//         functions.logger.log("Nama Monitor: ", snapshot.val());
//       })
//       .catch((err) => {
//         functions.logger.error("Error: ", err);
//       });

//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);
//     const notifUnderPayload = {
//       notification: {
//         title: "Current S Undercurrent!",
//         body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
//       },
//     };

//     if (currentValue < 500 && beforeValue >= 500) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifUnderPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }

//     const notifOverPayload = {
//       notification: {
//         title: "Current S Overcurrent!",
//         body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue > 3000 && beforeValue <= 3000) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifOverPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }
//   });

// exports.sendPanelCurrentT = functions.database
//   .ref("ewsApp/panel-pompa/{panelPompaId}/currentT")
//   .onWrite(async (change, context) => {
//     const panelPompaId = context.params.panelPompaId;
//     let namaPanel = "";

//     // Get Monitor name
//     await admin
//       .database()
//       .ref(`/ewsApp/panel-pompa/${panelPompaId}/nama`)
//       .once("value")
//       .then((snapshot) => {
//         namaPanel = snapshot.val();
//         functions.logger.log("Nama Monitor: ", snapshot.val());
//       })
//       .catch((err) => {
//         functions.logger.error("Error: ", err);
//       });

//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);
//     const notifUnderPayload = {
//       notification: {
//         title: "Current T Undercurrent!",
//         body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
//       },
//     };

//     if (currentValue < 500 && beforeValue >= 500) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifUnderPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }

//     const notifOverPayload = {
//       notification: {
//         title: "Current T Overcurrent!",
//         body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue > 3000 && beforeValue <= 3000) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifOverPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }
//   });

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

    const notifUnderPayload = {
      notification: {
        title: `${ledName} ON!`,
        body: `Lampu ${ledName} menyala`,
      },
    };

    if (currentValue && !beforeValue) {
      admin
        .messaging()
        .sendToTopic("notif", notifUnderPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
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
    let flowMeterName;
    await admin
      .database()
      .ref(`ewsApp/flow-meter/${flowMeterId}/nama`)
      .once("value")
      .then((snapshot) => {
        flowMeterName = snapshot.val();
        functions.logger.log("Nama Monitor: ", snapshot.val());
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    const notifUnderPayload = {
      notification: {
        title: "Pipa Underflow!",
        body: `Pipa ${flowMeterName} sedang mengalami underflow! Value: ${currentValue}`,
      },
    };

    if (currentValue < 800 && beforeValue >= 800) {
      admin
        .messaging()
        .sendToTopic("notif", notifUnderPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }

    const notifOverPayload = {
      notification: {
        title: "Pipa Overflow!",
        body: `Pipa ${flowMeterName} sedang mengalami overflow! Value: ${currentValue}`,
      },
    };
    if (currentValue > 300 && beforeValue <= 300) {
      admin
        .messaging()
        .sendToTopic("notif", notifOverPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
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
    let flowMeterName;
    await admin
      .database()
      .ref(`ewsApp/flow-meter/${flowMeterId}/nama`)
      .once("value")
      .then((snapshot) => {
        flowMeterName = snapshot.val();
        functions.logger.log("Nama Monitor: ", snapshot.val());
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    const notifUnderPayload = {
      notification: {
        title: "Pipa Under Velocity!",
        body: `Pipa ${flowMeterName} sedang mengalami under velocity! Value: ${currentValue}`,
      },
    };

    if (currentValue < 0.7 && beforeValue >= 0.7) {
      admin
        .messaging()
        .sendToTopic("notif", notifUnderPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }

    const notifOverPayload = {
      notification: {
        title: "Pipa Over Velocity!",
        body: `Pipa ${flowMeterName} sedang mengalami over velocity! Value: ${currentValue}`,
      },
    };
    if (currentValue > 3 && beforeValue <= 3) {
      admin
        .messaging()
        .sendToTopic("notif", notifOverPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
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
    let flowMeterName;
    await admin
      .database()
      .ref(`ewsApp/flow-meter/${flowMeterId}/nama`)
      .once("value")
      .then((snapshot) => {
        flowMeterName = snapshot.val();
        functions.logger.log("Nama Monitor: ", snapshot.val());
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    const notifUnderPayload = {
      notification: {
        title: "Temperature Inlet Pipa Under Heat!",
        body: `Inlet pipa ${flowMeterName} sedang mengalami under heat! Value: ${currentValue}`,
      },
    };

    if (currentValue < 5 && beforeValue >= 5) {
      admin
        .messaging()
        .sendToTopic("notif", notifUnderPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }

    const notifOverPayload = {
      notification: {
        title: "Temperature Inlet Pipa Over Heat!",
        body: `Inlet pipa ${flowMeterName} sedang mengalami over heat! Value: ${currentValue}`,
      },
    };
    if (currentValue > 75 && beforeValue <= 75) {
      admin
        .messaging()
        .sendToTopic("notif", notifOverPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
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
    let flowMeterName;
    await admin
      .database()
      .ref(`ewsApp/flow-meter/${flowMeterId}/nama`)
      .once("value")
      .then((snapshot) => {
        flowMeterName = snapshot.val();
        functions.logger.log("Nama Monitor: ", flowMeterName);
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    const notifUnderPayload = {
      notification: {
        title: "Temperature Outlet Pipa Under Heat!",
        body: `Outlet pipa ${flowMeterName} sedang mengalami under heat! Value: ${currentValue}`,
      },
    };

    if (currentValue < 5 && beforeValue >= 5) {
      admin
        .messaging()
        .sendToTopic("notif", notifUnderPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }

    const notifOverPayload = {
      notification: {
        title: "Temperature Outlet Pipa Over Heat!",
        body: `Outlet pipa ${flowMeterName} sedang mengalami over heat! Value: ${currentValue}`,
      },
    };
    if (currentValue > 75 && beforeValue <= 75) {
      admin
        .messaging()
        .sendToTopic("notif", notifOverPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }
  });

// exports.sendPressure = functions.database
//   .ref("pressureSensor/{pressureSensorId}/pressurepsi")
//   .onWrite(async (change, context) => {
//     const pressureSensorId = context.params.pressureSensorId;
//     const currentValue = change.after.val();
//     const beforeValue = change.before.val();
//     functions.logger.log("currentValue: ", currentValue);
//     functions.logger.log("beforeValue: ", beforeValue);

//     // Get Nama Pressure Solar
//     const pressureSolarName = "Pressure Sensor " + pressureSensorId;
//     functions.logger.info("Nama Pressure sensor: ", pressureSolarName);

//     const notifUnderPayload = {
//       notification: {
//         title: "Pipa Under Pressure!",
//         body: `Pipa ${pressureSolarName} sedang mengalami under pressure! Value: ${currentValue}`,
//       },
//     };

//     if (currentValue < 30 && beforeValue >= 30) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifUnderPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }

//     const notifOverPayload = {
//       notification: {
//         title: "Pipa Over Pressure!",
//         body: `Pipa ${pressureSolarName} sedang mengalami over pressure! Value: ${currentValue}`,
//       },
//     };
//     if (currentValue > 80 && beforeValue <= 80) {
//       admin
//         .messaging()
//         .sendToTopic("notif", notifOverPayload)
//         .then(() => {
//           console.log("FCM: Notification sends successfully.");
//         })
//         .catch((err) => {
//           console.log("Error FCM: ", err);
//         });
//     }
//   });

exports.sendBattery = functions.database
  .ref("pressureSensor/{pressureSensorId}/voltage")
  .onWrite(async (change, context) => {
    const pressureSensorId = context.params.pressureSensorId;
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Pressure Solar
    const pressureSolarName = "Pressure Sensor " + pressureSensorId;
    functions.logger.info("Nama Pressure sensor: ", pressureSolarName);

    const notifUnderPayload = {
      notification: {
        title: "Low Battery!",
        body: `Baterai pada solar panel ${pressureSolarName} mencapai titik low. Value: ${currentValue}`,
      },
    };

    if (currentValue < 15 && beforeValue >= 15) {
      admin
        .messaging()
        .sendToTopic("notif", notifUnderPayload)
        .then(() => {
          console.log("FCM: Notification sends successfully.");
        })
        .catch((err) => {
          console.log("Error FCM: ", err);
        });
    }
  });

exports.deteksiBocorPressure = functions.database
  .ref("pressureSensor/{pressureSensorId}/pressurepsi")
  .onWrite(async (change, context) => {
    pressureSensorId = context.params.pressureSensorId;
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);
    const notifPayload = {
      notification: {
        title: "Terdapat anomali pada tekanan pipa!",
        body: `Terdapat kemungkinan adanya kebocoran pada pipa.`,
      },
    };

    let pressureData;
    await admin
      .database()
      .ref(`pressureSensor`)
      .once("value")
      .then((snapshot) => {
        pressureData = snapshot.val();
        functions.logger.log("Pressure data: ", snapshot.val());
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    functions.logger.log("PressureData return: ", pressureData);

    for (let i = 1; i < pressureData.length; i++) {
      const num1 = Number(pressureData[i]["pressurepsi"]);
      const num2 = Number(pressureData[i + 1]["pressurepsi"]);

      functions.logger.log("num1: ", num1);
      functions.logger.log("num2: ", num2);

      const results = (Math.abs(num1 - num2) / ((num1 + num2) / 2)) * 100;

      if (results >= 50) {
        admin
          .messaging()
          .sendToTopic("notif", notifPayload)
          .then(() => {
            console.log("FCM: Notification sends successfully.");
          })
          .catch((err) => {
            console.log("Error FCM: ", err);
          });
        functions.logger.log("Terjadi kebocoran.");
        break;
      } else {
        functions.logger.log("Tidak terjadi kebocoran.");
      }
    }
  });
