const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();
    let volume = interaction.options.get("volume").value;

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    if (queue.playing) {
      queue.setVolume(volume);
      TextEmbed(interaction, { title: `Volume: ${volume}%`, desc: "" });
    }

  } catch (error) {
    console.log("Error volume: ", error);
  }
};

module.exports.config = {
  name: "volume",
  aliases: ["vol"],
  description: "controls song volume.",
  options: [
    {
      name: "volume",
      description: "control volume of your music.",
      type: 4,
      min_value: 0,
      max_value: 100,
      required: true,
    },
  ],
};
