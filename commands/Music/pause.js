const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    if (queue.playing) {
      queue.pause(interaction);
      TextEmbed(interaction, { title: "You paused song!", desc: "" });
    } else {
      TextEmbed(interaction, { title: "Nothing is playing!", desc: "" });
    }
  } catch (error) {
    console.log("Error Pause: ", error);
  }
};

module.exports.config = {
  name: "pause",
  aliases: ["pa"],
  description: "pause playing song.",
};
