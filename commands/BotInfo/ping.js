const { EmbedBuilder } = require("discord.js");
const { ad } = require("../../configurations/config.json");

module.exports.run = async (bot, interaction) => {
  try {
    let index = Math.floor(Math.random() * ad.footer.length);
    let footer = ad.footer[index];
    console.log(index);

    const embed = new EmbedBuilder()
      .setDescription(`**Melody Heart Bit ${bot.ws.ping}ms**`)
      .setColor("DarkButNotBlack")
      .setFooter({ text: footer });
      
    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "ping",
  aliases: ["ping"],
  description: "Melody Heart Bit Rate ❤",
};
