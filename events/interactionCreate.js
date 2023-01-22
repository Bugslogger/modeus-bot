const { permissions } = require("../configurations/config.json");
const { Music, BotInfo, Mod, Fun, Game } = require("../configurations/help");

module.exports = async (bot, interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      // await interaction.deferUpdate().catch(null);
      if (interaction.customId == "help") {
        // console.log(interaction.values[0]);
        switch (interaction.values[0]) {
          case "music":
            await interaction.reply({
              embeds: [Music(bot)],
              ephemeral: true,
            });
            break;
          case "mod":
            await interaction.reply({
              embeds: [Mod(bot)],
              ephemeral: true,
            });
            break;
          case "fun":
            await interaction.reply({
              embeds: [Fun(bot)],
              ephemeral: true,
            });
            break;
          case "game":
            await interaction.reply({
              embeds: [Game(bot)],
              ephemeral: true,
            });
            break;
          case "bot":
            await interaction.reply({
              embeds: [BotInfo(bot)],
              ephemeral: true,
            });
            break;

          default:
            break;
        }
      }
    }

    if (!interaction.isChatInputCommand()) return;

    // await interaction.deferReply();
    // await interaction.deleteReply();

    const { VoiceJoin, SendMessage } = permissions;
    const messageSendPerms = interaction.member.permissions.has(SendMessage);
    const voiceJoinPerms = interaction.member.permissions.has(VoiceJoin);
    // console.log("message", bot.user.permissions.has(SendMessage));
    if (!messageSendPerms) {
      await interaction.reply("you don't have Send Message Permission");
      return;
    }

    const commandFile = bot.commands.get(interaction.commandName);

    if (!commandFile) return;
    commandFile.run(bot, interaction);
  } catch (error) {
    console.log("Create Interaction: ", error);
  }
};
