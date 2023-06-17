const { IsVoiceChannel } = require("../../utils/Functions");
const { EmbedBuilder } = require("discord.js");
const { ad } = require("../../configurations/config.json");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    // const index = Math.floor(Math.random() * ad.footer.length);
    // const footer = ad.footer[index];
    const voiceChannel = interaction.member.voice.channel;

    if (IsVoiceChannel(interaction)) {
      bot.distube.voices.join(voiceChannel);
      TextEmbed(interaction, {
        desc: "Successfully joined your voice channel.",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
    } else {
      TextEmbed(interaction, {
        desc: "Bebbi, You must first be on the voice channel.",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
      //   const embed = new EmbedBuilder()
      //     .setTitle("")
      //     .setDescription("Bebbi, You must first be on the voice channel.")
      //     .setColor("DarkButNotBlack")
      //     .setAuthor({
      //       name: `${bot.user.username}`,
      //       iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
      //     })
      //     .setFooter({ text: footer });

      //   await interaction.reply({ embeds: [embed] });
    }
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
};

module.exports.config = {
  name: "join",
  description: "Join's you voice channel.",
  aliases: ["join"],
};

// const embed = new EmbedBuilder()
// .setTitle(`Hello, Darling 😘`)
// .setDescription(
//   `I'm Melody Discord Bot To Provide You Breathtaking Features And My Love.\n\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=1046306068134903818&permissions=8&scope=bot%20applications.commands)\n[Support Server]( https://discord.gg/FpC8kX5kQB)`
// )
// .setThumbnail(
//   `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png`
// )
// .setColor("DarkButNotBlack")
// .setAuthor({
//   name: `${bot.user.username}`,
//   iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
// })
// .setFooter({ text: footer });
