const { EmbedBuilder } = require("discord.js");
const { ad } = require("../../configurations/config.json");

module.exports.run = async (bot, interaction) => {
  try {
    let index = Math.floor(Math.random() * ad.footer.length);
    let footer = ad.footer[index];
    console.log(index);

    const embed = new EmbedBuilder()
      .setTitle(`Hello, Darling 😘`)
      .setDescription(`use command \`help\` to know what things i can do.`)
      .setColor("DarkButNotBlack")
      .setAuthor({
        name: `About ${bot.user.username}`,
        iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
      })
      .setFooter({ text: footer });

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    new Error(error);
  }
};

module.exports.config = {
  name: "about",
  aliases: ["about"],
  description: "know about modeus ❤",
};
