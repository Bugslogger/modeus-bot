const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");
const { EmbedBuilder } = require("discord.js");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;
    let index = 9;
    // interaction.deferReply();
    // interaction.deleteReply();

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, {
        title: "Queue is empty!",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
      return;
    }

    const q = queue.songs
      .map(
        (song, i) =>
          `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${
            song.formattedDuration
          }\``
      )
      .join("\n");

    const embed = new EmbedBuilder()
      .setColor("DarkButNotBlack")
      .setTitle("Queue!")
      .setDescription(q);

    await interaction.reply({ embeds: [embed] });
    // TextEmbed(interaction, { title: "Queue!", desc: q });

    console.log(q);
  } catch (error) {
    console.log(error, "Error Queue");
  }
};

module.exports.config = {
  name: "queue",
  aliases: ["q"],
  description: "displays list of songs in current queue.",
};
