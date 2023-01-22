const { readdirSync } = require("fs");

module.exports = function loadCommands(client) {
  let commandArray = [];

  try {
    readdirSync(`${process.cwd()}/commands`).forEach((folders) => {
      // getting files from each folders
      const file = readdirSync(`${process.cwd()}/commands/${folders}`).filter(
        (files) => {
          // checks if file ends extension or not
          // console.log("files: ", files);
          return files.endsWith(".js");
        }
      );

      // accessing each js file
      for (let commandName of file) {
        const command = require(`${process.cwd()}/commands/${folders}/${commandName}`);

        if (!command) return;
        commandArray.push(command.config);
        client.commands.set(command.config.name, command);
      }
    });
    client.command = commandArray;
  } catch (error) {
    console.log("error: ", error);
  }
};
