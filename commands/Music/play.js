const { IsVoiceChannel } = require("../../utils/Functions");
const { EmbedBuilder } = require("discord.js");
const { ad } = require("../../configurations/config.json");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    // await interaction.deferReply();
    // await interaction.deleteReply();

    let index = Math.floor(Math.random() * ad.footer.length);
    let footer = ad.footer[index];
    console.log(index);
    
    const embed = new EmbedBuilder()
      .setTitle("Reading Your Request...")
      .setColor("DarkButNotBlack")
      .setFooter({ text: footer });

    await interaction.reply({ embeds: [embed] });

    let voice = interaction.member.voice.channel;
    let message = interaction.options.get("song").value;

    await bot.distube.play(voice, message, {
      textChannel: interaction.channel,
      member: interaction.member,
      interaction,
    });

    // await interaction.reply("Pong! " + interaction.options.get("song").value);
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "play",
  aliases: ["p"],
  description: "play command play's your favourate songs",
  options: [
    {
      name: "song",
      description: "Enter song name or url",
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
