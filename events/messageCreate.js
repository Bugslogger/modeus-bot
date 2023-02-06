const config = require("../configurations/config.json");
const { isUserHasParms } = require("../utils/Functions");

module.exports = async (bot, message) => {
  // const { permissions, prefix } = config;
  // const { Admin, SendMessage, VoiceJoin } = permissions;
  // const messageArray = message.content.split(" ");
  // const cmd = messageArray[0];
  // const args = messageArray.slice(1);
  // let msg = message.content.toLowerCase();

  // // console.log(prefix, "message", message.content);

  // // check is it is real user or bot
  // if (message.author.bot || message.channel.type === "dm") {
  //   // console.log("is bot", message.author.bot);
  //   return;
  // }

  // // checks if message starts with prefix or not
  // if (!msg.startsWith(prefix)) {
  //   // console.log(message);
  //   console.log("****************", message.content);
  //   return;
  // }

  // //  first check if user has permission to join the channel or to send message.
  // if (isUserHasParms(message, SendMessage)) {
  //   if (!isUserHasParms(message, VoiceJoin))
  //     return message.channel.send(
  //       `${bot.emotes.error} | Sorry, You are not allowed to join voice channel ask your admin.`
  //     );

  //   // const Prefix = prefix.toLowerCase();

  //   if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`)))
  //     return message.channel.send(
  //       `${message.guild.name}'s Prefix is \`${prefix}\`\n\nTo get a list of commands, say \`${prefix}help\``
  //     );

  //   try {
  //     const commandfile =
  //       bot.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) ||
  //       bot.commands.get(
  //         bot.aliases.get(cmd.slice(prefix.length).toString().toLowerCase())
  //       );

  //     if (!commandfile) {
  //       // message.channel.send(`${bot.emotes.error} | somthing went wrong. may be there is a space between prefix and command`);
  //       return;
  //     }
  //     if (commandfile) {
  //         commandfile.run(bot, message, args);
  //         console.log(args, "commands executed");
  //     } else {
  //       console.log("messageCreate error: ");
  //     }
  //   } catch (error) {
  //     console.log("messageCreate", error);
  //   }

  //   // console.log("send voice: ", isUserHasParms(message, VoiceJoin));
  //   // console.log("send message: ", isUserHasParms(message, SendMessage));
  // } else {
  //   console.log("no permission to join the channel or to send message");
  //   // message.channel.send(
  //   //   `${bot.emotes.error} | Sorry, You are not allowed to send message in this channel ask your admin.`
  //   // );
  // }
};
