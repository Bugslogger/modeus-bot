const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = (bot, interaction) => {
  const queue = bot.distube.getQueue(interaction);
  if (!queue) {
    TextEmbed(interaction, {
      desc: "There is nothing in the queue right now!",
      author: {
        name: `${bot.user.username}`,
        iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
      },
    });
    return;
  }
  const isPlaying = queue.playing;
  if (isPlaying) {
    if (queue.songs.length > 2) {
      queue.shuffle();
      TextEmbed(interaction, {
        desc: "Shuffled songs in the queue",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
    } else {
      TextEmbed(interaction, {
        desc: "There is only one song left in queue. can't shuffle.",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
    }
  } else {
    if (queue.songs.length > 1) {
      queue.shuffle();
      TextEmbed(interaction, {
        desc: "Shuffled songs in the queue",
      });
    } else {
      TextEmbed(interaction, {
        desc: "There is only one song in queue. can't shuffle.",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
    }
  }
};

module.exports.config = {
  name: "shuffle",
  description: "shuffle songs in queue",
  aliases: ["sf"],
};
