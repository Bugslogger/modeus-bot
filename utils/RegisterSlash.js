const { client_id } = require("../configurations/config.json");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");


async function RegisterSlash(client,TOKEN) {
  const rest = new REST({ version: "10" }).setToken(TOKEN);
  // registering for slash commands
  try {
    const commands = await client.command;
    if (commands === undefined) return;

    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(client_id), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

module.exports = { RegisterSlash };
