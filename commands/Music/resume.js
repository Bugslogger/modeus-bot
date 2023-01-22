const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async(bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
        TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    if (!queue.playing) {
      queue.resume(interaction);
      TextEmbed(interaction, { title: "You resumed song!", desc: "" });
    } else {
      TextEmbed(interaction, { title: "Already playing!", desc: "" });
    }
  } catch (error) {
    console.log("Error Pause: ", error);
  }
};

module.exports.config = {
  name: "resume",
  aliases: ["r"],
  description: "resume paused song.",
};
