const admin = require("firebase-admin");

admin.initializeApp();

exports.panelPompa = require("./groups/panelPompa");
exports.flowMeter = require("./groups/flowMeter");
exports.pressureSolar = require("./groups/pressureSolar");
exports.test = require("./groups/test");
