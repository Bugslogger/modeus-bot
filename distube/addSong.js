const { TextEmbed, DistubeEventSend } = require("../utils/messageEmbed");
const { ad } = require("../configurations/config.json");
module.exports = (bot, queue, song) => {
  let songs = {
    title: "Added To Queue",
    desc: `${queue.name}`,
    url: ad.url,
  };

  try {
    DistubeEventSend(bot, songs);
  } catch (error) {
    console.log(error);
  }
  //   console.log(queue, song);
};
