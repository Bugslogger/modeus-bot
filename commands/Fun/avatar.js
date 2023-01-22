const { EmbedBuilder } = require("discord.js");
const { ad } = require("../../configurations/config.json");

module.exports.run = async (bot, interaction) => {
  const user = interaction.options.get("username");
  const index = Math.floor(Math.random() * ad.footer.length);
  const footer = ad.footer[index];
  console.log(user);

  try {
    if (user !== null) {
      const embed = new EmbedBuilder()
        .setTitle(`You have fantastic profile picture!`)
        .setImage(user.user.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: footer });

      await interaction.reply({ embbeds: [embed] });
    } else {
      const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} Avatar!`)
        .setImage(interaction.user.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: footer });

      await interaction.reply({ embbeds: [embed] });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "avatar",
  description: "send user profile picture",
  options: [
    {
      name: "username",
      description: "tag user",
      type: 6,
    },
  ],
};
