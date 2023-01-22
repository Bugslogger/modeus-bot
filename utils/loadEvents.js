const fs = require("fs");

module.exports = (bot) => {
  try {
    fs.readdir("events/", (_err, files) => {
      files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`../events/${file}`);
        // console.log(event, "event");
        let eventName = file.split(".")[0];
        // console.log('eventName',eventName, 'file', file, _err, files);
        bot.on(eventName, event.bind(null, bot));
        delete require.cache[require.resolve(`../events/${file}`)];
      });
    });
  } catch (error) {
    console.log("Error LoadEvents: ", error);
  }
};
