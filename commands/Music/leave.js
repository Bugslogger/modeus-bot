const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();

    bot.distube.voices.leave(interaction);

    TextEmbed(interaction, {
      title: "Disconnected from voice channel!",
      desc: "",
    });
    
  } catch (error) {
    console.log("Error Pause: ", error);
  }
};

module.exports.config = {
  name: "leave",
  aliases: ["l"],
  description: "Disconnects from voice channel.",
};
