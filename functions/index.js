const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sendPanelVoltR = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/voltR")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get Monitor name
    let namaPanel = "";
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

    // Get gauge value
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/panel-pompa/volt`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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
    if (currentValue < valueMin && beforeValue >= valueMin) {
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
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

exports.sendPanelVoltS = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/voltS")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get Monitor name
    let namaPanel = "";
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/panel-pompa/volt`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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
        title: "Volt S Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue}`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
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
        title: "Volt S Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue}`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

exports.sendPanelVoltT = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/voltT")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get Monitor name
    let namaPanel = "";
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/panel-pompa/volt`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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
        title: "Volt T Undervolt!",
        body: `${namaPanel} sedang mengalami undervolt! Value: ${currentValue}`,
      },
    };
    if (currentValue < valueMin && beforeValue >= valueMin) {
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
        title: "Volt T Overvolt!",
        body: `${namaPanel} sedang mengalami Overvolt! Value: ${currentValue}`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

exports.sendPanelCurrentR = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/currentR")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get Monitor name
    let namaPanel = "";
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/panel-pompa/current`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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
        title: "Current R Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
      },
    };

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
        title: "Current R Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

exports.sendPanelCurrentS = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/currentS")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get Monitor name
    let namaPanel = "";
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/panel-pompa/current`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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
        title: "Current S Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
      },
    };

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
        title: "Current S Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

exports.sendPanelCurrentT = functions.database
  .ref("ewsApp/panel-pompa/{panelPompaId}/currentT")
  .onWrite(async (change, context) => {
    const panelPompaId = context.params.panelPompaId;

    // Get Monitor name
    let namaPanel = "";
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/panel-pompa/current`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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
        title: "Current T Undercurrent!",
        body: `${namaPanel} sedang mengalami undercurrent! Value: ${currentValue}`,
      },
    };

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
        title: "Current T Overcurrent!",
        body: `${namaPanel} sedang mengalami overcurrent! Value: ${currentValue}`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/flow-meter/flowRate`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/flow-meter/velocity`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/flow-meter/temperature`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/flow-meter/temperature`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
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

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

exports.sendPressure = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}/pressurePsi")
  .onWrite(async (change, context) => {
    const pressureSolarId = context.params.pressureSolarId;
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Pressure Solar
    let pressureSolarName;
    await admin
      .database()
      .ref(`ewsApp/pressure-solar/${pressureSolarId}/nama`)
      .once("value")
      .then((snapshot) => {
        pressureSolarName = snapshot.val();
        functions.logger.log("Nama Monitor: ", pressureSolarName);
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    // Get gauge value
    let valueMin, valueMax;
    await admin
      .database()
      .ref(`ewsApp/gaugeValue/pressure-solar/pressurePsi`)
      .once("value")
      .then((snapshot) => {
        const gaugeValue = snapshot.val();
        valueMin = gaugeValue.min;
        valueMax = gaugeValue.max;
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

    const notifUnderPayload = {
      notification: {
        title: "Pipa Under Pressure!",
        body: `Pipa ${pressureSolarName} sedang mengalami under pressure! Value: ${currentValue}`,
      },
    };

    if (currentValue < valueMin && beforeValue >= valueMin) {
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
        title: "Pipa Over Pressure!",
        body: `Pipa ${pressureSolarName} sedang mengalami over pressure! Value: ${currentValue}`,
      },
    };
    if (currentValue > valueMax && beforeValue <= valueMax) {
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

exports.sendBattery = functions.database
  .ref("ewsApp/pressure-solar/{pressureSolarId}/voltage")
  .onWrite(async (change, context) => {
    const pressureSolarId = context.params.pressureSolarId;
    const currentValue = change.after.val();
    const beforeValue = change.before.val();
    functions.logger.log("currentValue: ", currentValue);
    functions.logger.log("beforeValue: ", beforeValue);

    // Get Nama Pressure Solar
    let pressureSolarName;
    await admin
      .database()
      .ref(`ewsApp/pressure-solar/${pressureSolarId}/nama`)
      .once("value")
      .then((snapshot) => {
        pressureSolarName = snapshot.val();
        functions.logger.log("Nama Monitor: ", pressureSolarName);
      })
      .catch((err) => {
        functions.logger.error("Error: ", err);
      });

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
  .ref("ewsApp/pressure-solar/{pressureSolarId}/pressurePsi")
  .onWrite(async (change, context) => {
    pressureSolarId = context.params.pressureSolarId;
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

    // Untuk menambah keys pada object ke array
    const pressureKeys = Object.keys(pressureData);

    for (let i = 0; i < pressureKeys.length; i++) {
      // Jika sudah mencapai iterasi terakhir, break
      if (i == pressureKeys.length - 1) {
        break;
      }

      const num1 = Number(pressureData[pressureKeys[i]]["pressurePsi"]);
      const num2 = Number(pressureData[pressureKeys[i + 1]]["pressurePsi"]);

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
