const { Client, GatewayIntentBits, Collection } = require("discord.js");
const {
  Guilds,
  GuildMessages,
  GuildVoiceStates,
  GuildIntegrations,
} = GatewayIntentBits;
const client = new Client({
  intents: [Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations],
});
require("dotenv").config();

const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");

const { RegisterSlash } = require("./utils/RegisterSlash");
const loadCommands = require("./utils/loadCommands");

client.commands = new Collection();
client.aliases = new Collection();

client.distube = new DisTube(client, {
  leaveOnStop: false,
  leaveOnEmpty: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  nsfw: true,
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true,
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin({ update: false }),
  ],
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction.customId);
  console.log(interaction.memberPermissions);
});

require("./utils/loadDistubeEvent")(client);

require("./utils/loadEvents")(client);

loadCommands(client);
RegisterSlash(client, process.env.TOKEN);

client.login(process.env.TOKEN);
