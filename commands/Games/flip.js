const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  let coin = ["head", "tail", "head", "tail"];
  const length = Math.floor(Math.random() * coin.length);
  //   console.log(interaction.user.id);
  TextEmbed(interaction, {
    title: "Coin Flip",
    desc: `<@${interaction.user.id}> you got ${coin[length].toUpperCase()}`,
  });
  //   await interaction.reply(`<@${interaction.user.id}> you got ${coin[length]}`);
};
module.exports.config = {
  name: "flip",
  description: "flip coin.",
};
