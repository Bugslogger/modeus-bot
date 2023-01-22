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
      queue.stop(interaction);
      TextEmbed(interaction, { title: "I stopped playing.", desc: "" });
    } else {
      TextEmbed(interaction, { title: "Nothing is playing!", desc: "" });
    }
  } catch (error) {
    console.log("Error Stop: ", error);
  }
};

module.exports.config = {
  name: "stop",
  aliases: ["stop"],
  description: "stops playing songs.",
};
