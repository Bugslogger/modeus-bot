const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    let message = interaction.options.get("loop").value;
    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    if (queue.playing) {
      mode = queue.setRepeatMode(parseInt(message) || 0);
      mode = mode ? (mode === 2 ? "Repeat queue" : "Repeat song") : "Off";
      TextEmbed(interaction, { title: `${mode}`, desc: "" });
    } else {
      TextEmbed(interaction, { title: "Nothing playing!", desc: "" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "loop",
  aliases: ["repeat"],
  description: "Loop queue or song you wish we play.",
  options: [
    {
      name: "loop",
      choices: [
        {
          name: "song",
          value: "1",
        },
        {
          name: "queue",
          value: "2",
        },
        {
          name: "Off",
          value: "0",
        },
      ],
      description: "repeat songs or queue.",
      type: 3,
      required: true,
    },
    // {
    //   name: "spotify",
    //   description: "enter spotify url",
    //   type: 3,
    // },
    // {
    //   name: "url",
    //   description: "enter song url",
    //   type: 3,
    // },
  ],
};
