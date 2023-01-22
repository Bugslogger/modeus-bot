const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();
    let time = interaction.options.get("time").value;

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    if (queue.playing) {
      queue.seek(time);
      TextEmbed(interaction, { title: `Seeked To: ${time} seconds`, desc: "" });
    } else {
      TextEmbed(interaction, { title: `Nothing is playing.`, desc: "" });
    }
  } catch (error) {
    console.log("Error Seek: ", error);
  }
};

module.exports.config = {
  name: "seek",
  aliases: ["seek"],
  description: "seek's to perticular duration.",
  options: [
    {
      name: "time",
      description: "Enter amount of duration to seek.",
      type: 4,
      min_value: 0,
      required: true,
    },
  ],
};
