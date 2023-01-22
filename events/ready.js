const { status } = require("../configurations/config.json");
const { ActivityType } = require("discord.js");

module.exports = (client) => {
  // console.log(status);

  client.user.setActivity(`${status[1].text}`, {
    type: ActivityType.Watching,
    // url: status[1].url,
  });
  // client.user.setStatus("dnd");
  console.log(`Logged in as ${client.user.tag}!`);
};
