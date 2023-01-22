const { EmbedBuilder } = require("discord.js");
const { ad } = require("./config.json");
const { readdirSync } = require("fs");

function CommandsName(folders) {
  const file = readdirSync(`${process.cwd()}/commands/${folders}`);
  const name = file.map((val) => `\`${val.split(".")[0]}\``);
  return name;
}
let index = Math.floor(Math.random() * ad.footer.length);
const music = CommandsName("Music");

const Music = (bot) => {
  return new EmbedBuilder()
    .setTitle(`Music [${music.length}]`)
    .setAuthor({
      name: `${bot.user.username}`,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(music.toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack")
    .setFooter({ text: ad.footer[index] });
};

const BotInfo = (bot) => {
  return new EmbedBuilder()
    .setTitle(`Bot Command [${CommandsName("BotInfo").length}]`)
    .setAuthor({
      name: `${bot.user.username}`,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(CommandsName("BotInfo").toString().replaceAll(",", ", "))
    .setColor("DarkButNotBlack")
    .setFooter({ text: ad.footer[index] });
};

const Mod = (bot) => {
  return new EmbedBuilder()
    .setTitle(`Moderation [${CommandsName("Moderation").length}]`)
    .setAuthor({
      name: `${bot.user.username}`,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(
      CommandsName("Moderation").length > 0
        ? CommandsName("Moderation").toString().replaceAll(",", ", ")
        : "`Commands Comming Soon..`"
    )
    .setColor("DarkButNotBlack")
    .setFooter({ text: ad.footer[index] });
};

const Game = (bot) => {
  return new EmbedBuilder()
    .setTitle(`Games [${CommandsName("Games").length}]`)
    .setAuthor({
      name: `${bot.user.username}`,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(
      CommandsName("Games").length > 0
        ? CommandsName("Games").toString().replaceAll(",", ", ")
        : "`Commands Comming Soon..`"
    )
    .setColor("DarkButNotBlack")
    .setFooter({ text: ad.footer[index] });
};

const Fun = (bot) => {
  return new EmbedBuilder()
    .setTitle(`Fun [${CommandsName("Fun").length}]`)
    .setAuthor({
      name: `${bot.user.username}`,
      iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setDescription(
      CommandsName("Fun").length > 0
        ? CommandsName("Fun").toString().replaceAll(",", ", ")
        : "`Commands Comming Soon..`"
    )
    .setColor("DarkButNotBlack")
    .setFooter({ text: ad.footer[index] });
};

module.exports = { Music, BotInfo, Mod, Fun, Game };
