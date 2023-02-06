const { TextEmbed } = require("./messageEmbed");

let object = {
  title: "You are not in voice channel.",
};

function IsVoiceChannel(interaction) {
  try {
    const member = interaction.member.voice.channel;

    if (member === null) {
      TextEmbed(interaction, object);
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

const isUserHasParms = (message, perms) => {
  try {
    let isTrue = message.channel.permissionsFor(message.member).has(perms);
    // console.log(isTrue," ERRORS");
    if (isTrue) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(`[Error while checking perms]: ${error}`);
  }
};
module.exports = {
  IsVoiceChannel,
  isUserHasParms,
};
