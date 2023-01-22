const { IsVoiceChannel } = require("../../utils/Functions");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  try {
    if (!IsVoiceChannel(interaction)) return;

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, {
        title: "Queue is empty!",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
      return;
    }

    if (queue.playing) {
      queue.seek(0);
      TextEmbed(interaction, {
        title: `Restarted Current Songs.`,
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
    } else {
      TextEmbed(interaction, {
        title: `Nothing is playing!`,
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
    }
  } catch (error) {
    console.log("Error Seek: ", error);
  }
};

module.exports.config = {
  name: "restart",
  aliases: ["restart"],
  description: "restart's current playing song.",
};
