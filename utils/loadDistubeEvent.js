const fs = require("fs");
module.exports = (bot) => {
  try {
    fs.readdir("distube/", (_err, files) => {
      files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`../distube/${file}`);
        // console.log(event, "event");
        let eventName = file.split(".")[0];
        // console.log("eventName", eventName, "file", file, _err, files);
        bot.distube.on(eventName, event.bind(bot));
        delete require.cache[require.resolve(`../distube/${file}`)];
      });
    });
  } catch (error) {
    console.log("Error LoadEvents: ", error);
  }
};
