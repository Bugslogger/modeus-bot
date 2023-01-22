const { IsVoiceChannel } = require("../../utils/Functions");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    interaction.deferReply();
    interaction.deleteReply();

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Queue is empty!", desc: "" });
      return;
    }

    let voice = interaction.member.voice.channel;
    let message = interaction.options.get("song").value;

    // console.log({
    //   textChannel: interaction.channel,
    //   member: interaction.member,
    //   interaction,
    // });

    const embed = new EmbedBuilder()
    .setTitle("Skiping Current Song...")
    .setColor("DarkButNotBlack")
    .setFooter({ text: footer });

  await interaction.reply({ embeds: [embed] });

    await bot.distube.play(voice, message, {
      textChannel: interaction.channel,
      member: interaction.member,
      interaction,
      skip: true,
    });

    // await interaction.reply("Pong! " + interaction.options.get("song").value);
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "playskip",
  aliases: ["ps"],
  description: "playskip skip's current playing song and play's requested song.",
  options: [
    {
      name: "song",
      description: "enter song name or url",
      type: 3,
      required: true,
    },
  ],
};
