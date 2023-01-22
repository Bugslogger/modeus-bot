const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = (bot, interaction) => {
  try {
    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, {
        desc: "Queue is Empty!",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
      return;
    }

    let isPlaying = queue.playing;
    let currentSong = queue.songs;

    if (!isPlaying) {
      TextEmbed(interaction, {
        desc: "Nothing is playing right now!",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
      return;
    }

    TextEmbed(interaction, {
      desc: `**playing:** ${currentSong[0].name} - ${currentSong[0].formattedDuration}`,
      author: {
        name: `${bot.user.username}`,
        iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "playing",
  description: "let you know if anything is playing or not.",
  aliases: ["ip"],
};
