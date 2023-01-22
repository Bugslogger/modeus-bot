const { readdirSync } = require("fs");
const {
  EmbedBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
} = require("discord.js");
const { ad, permissions } = require("../../configurations/config.json");
const { SendMessage } = permissions;
module.exports.run = async (bot, interaction) => {
  const messageSendPerms = interaction.member.permissions.has(SendMessage);
  console.log("perms", messageSendPerms);

  try {
    let index = Math.floor(Math.random() * ad.footer.length);
    let footer = ad.footer[index];

    const embed = new EmbedBuilder()
      .setTitle(`Hello, Darling 😘`)
      .setDescription(
        `I'm Modeus Discord Bot To Provide You Breathtaking Features And My Love.\n\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=1046306068134903818&permissions=8&scope=bot%20applications.commands)\n[Support Server]( https://discord.gg/FpC8kX5kQB)`
      )
      .setThumbnail(
        `https://cdn.discordapp.com/avatars/${bot.user.id}/${bot.user.avatar}.png`
      )
      .setColor("DarkButNotBlack")
      .setAuthor({
        name: `${bot.user.username}`,
        iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
      })
      .setFooter({ text: footer });

    const menu = new ActionRowBuilder().addComponents(
      new SelectMenuBuilder()
        .setCustomId("help")
        .setPlaceholder("Modeus Love 💖")
        .addOptions(
          {
            label: "Music",
            description: "Music Command List",
            value: "music",
          },
          {
            label: "Game",
            description: "Games Command List",
            value: "game",
          },
          {
            label: "Moderation",
            description: "Commands for managing your server",
            value: "mod",
          },
          {
            label: "Fun",
            description: "commands like gif/image and many more",
            value: "fun",
          },
          {
            label: "Bot",
            description: "Extra Commands",
            value: "bot",
          }
        )
    );

    await interaction.reply({ embeds: [embed], components: [menu] });
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};

module.exports.config = {
  name: "help",
  aliases: ["help"],
  description: "know more about modeus fetures and commands ❤",
};
