const { TextEmbed } = require("./messageEmbed");

let object = {
  title: "You are not in voice channel."
}

function IsVoiceChannel(interaction) {
  try {
    const member = interaction.member.voice.channel;

    if (member === null) {
      TextEmbed(interaction,object)
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  IsVoiceChannel,
};
