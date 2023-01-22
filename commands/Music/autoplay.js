const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    const autoplay = queue.toggleAutoplay(interaction);

    TextEmbed(interaction, {
      title: `Autoplay: ${autoplay ? "On" : "Off"}`,
      desc: "",
    });
  } catch (error) {
    console.log("Error autoplay: ", error);
  }
};

module.exports.config = {
  name: "autoplay",
  aliases: ["ap"],
  description: "autoplay automatically adds song to current playing queue.",
};
