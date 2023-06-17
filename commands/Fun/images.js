const axios = require("axios").default;
const { EmbedBuilder } = require("discord.js");
// const { setColor, setTimestamp, setTitle, setFooter, setImage, setAuthor, setURL, setDescription, setThumbnail } = new MessageEmbed();
const embed = new EmbedBuilder();
const { apiKeys, ad } = require("../../configurations/config.json");
const { TextEmbed } = require("../../utils/messageEmbed");

module.exports.run = async (bot, interaction) => {
  const query = interaction.options.get("imagename").value;
  const type = interaction.options.get("type").value;
  const category = interaction.options.get("category").value;

  let index = Math.floor(Math.random() * ad.footer.length);
  let footer = ad.footer[index];
  //   console.log(query, type);
  //   return;

  try {
    // await interaction.reply("Searching Best Image For You...");

    const request = await axios.get(
      `https://pixabay.com/api/?key=${apiKeys.pixabay}&q=${query}&image_type=${
        type || "all"
      }&category=${category || "people"}&safesearch=false&per_page=50`
    );
    const len = request.data.hits.length;
    const RandomNumber = Math.floor(Math.random() * len);

    const embed = new EmbedBuilder()
      .setTitle(`Here's Your ${query} 😉`)
      .setColor("DarkButNotBlack")
      .setAuthor({
        name: `${bot.user.username}`,
        iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
      })
      .setDescription(`**Images found:** ${len}\n**Image ID:** ${RandomNumber}`)
      .setFooter({ text: footer })

      .setImage(
        request.data.hits[RandomNumber].webformatURL
          ? request.data.hits[RandomNumber].webformatURL
          : request.data.hits[RandomNumber].previewURL
      );

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    console.log(error);
    return;
    TextEmbed(interaction, {
      title: `${bot.user.username} Error`,
      description: error,
      time: new Date().getTime(),
    });
  }
};

module.exports.config = {
  name: "image",
  aliases: ["img"],
  description: "Ask Melody what images you want to see.",
  options: [
    {
      name: "imagename",
      description: "Enter image name.",
      type: 3,
      required: true,
    },
    {
      name: "type",
      description: 'Image type. i.e. "all", "photo", "illustration", "vector"',
      type: 3,
      choices: [
        { name: "photo", value: "photo" },
        { name: "illustration", value: "illustration" },
        { name: "vector", value: "vector" },
      ],
    },
    {
      name: "category",
      description: "Image category",
      type: 3,
      choices: [
        { name: "backgrounds", value: "backgrounds" },
        { name: "fashion", value: "fashion" },
        { name: "music", value: "music" },
        { name: "business", value: "business" },
        { name: "buildings", value: "buildings" },
        { name: "travel", value: "travel" },
        { name: "transportation", value: "transportation" },
        { name: "sports", value: "sports" },
        { name: "food", value: "food" },
        { name: "nature", value: "nature" },
        { name: "computer", value: "computer" },
        { name: "industry", value: "industry" },
        { name: "animals", value: "animals" },
        { name: "places", value: "places" },
        { name: "religion", value: "religion" },
        { name: "people", value: "people" },
        { name: "health", value: "health" },
        { name: "feelings", value: "feelings" },
        { name: "education", value: "education" },
        { name: "science", value: "science" },
      ],
    },
  ],
};

//  backgrounds, fashion, nature, science, education, feelings, health, people, religion, places,
//  animals, industry, computer, food, sports, transportation, travel, buildings, business, music
