const { EmbedBuilder, time } = require("discord.js");
const { ad } = require("../configurations/config.json");
const embed = new EmbedBuilder();

/**
 *
 * @param {any} interaction
 * @param {Object} object
 *
 * ```js
 *
 * function TextEmbed(interaction, object) {
 *       object?.title && embed.setTitle(object?.title);
 *       object?.desc && embed.setDescription(object?.desc);
 *       object?.author && embed.setAuthor(object?.author);
 *       object?.footer && embed.setFooter(object?.footer);
 *       object?.image && embed.setImage(object?.image);
 *       object?.thumbnail && embed.setThumbnail(object?.thumbnail);
 *       object?.time && embed.setTimestamp();
 *       object?.url && embed.setURL(object?.url);
 *       object?.sp && embed.spliceFields(object?.sp);
 *       object?.fields && embed.setFields(object?.fields);
 *       embed.setColor("DarkButNotBlack");
 *
 *       interaction.reply({ embeds: [embed] });
 *   }
 *
 * ```
 *
 *
 */
async function TextEmbed(interaction, object) {
  let index = Math.floor(Math.random() * ad.footer.length);
  let footer = ad.footer[index];
  // console.log(index, footer);

  const embed = {
    title: object.title || "",
    description: object.desc || "",
    footer: { text: footer },
    timestamp: object.time,
    Author: object.author || "",
    color: 15110828,
  };

  // object?.title && embed.setTitle(object?.title);
  // object?.desc && embed.setDescription(object?.desc);
  // object?.author && embed.setAuthor(object?.author);
  // object?.footer && embed.setFooter(object?.footer);
  // object?.image && embed.setImage(object?.image);
  // object?.thumbnail && embed.setThumbnail(object?.thumbnail);
  // object?.time && embed.setTimestamp();
  // object?.url && embed.setURL(object?.url);
  // object?.sp && embed.spliceFields(object?.sp);
  // object?.fields && embed.setFields(object?.fields);
  // embed.setColor("DarkButNotBlack");

  await interaction.reply({ embeds: [embed] });
}

function DistubeEventSend(interaction, object) {
  let index = Math.floor(Math.random() * ad.footer.length);
  let footer = ad.footer[index];
  console.log(index, footer); 

  object?.title && embed.setTitle(object?.title);
  object?.desc && embed.setDescription(object?.desc);
  object?.author && embed.setAuthor(object?.author);
  object?.image && embed.setImage(object?.image);
  object?.thumbnail && embed.setThumbnail(object?.thumbnail);
  object?.time && embed.setTimestamp();
  object?.url && embed.setURL(object?.url);
  object?.sp && embed.spliceFields(object?.sp);
  object?.fields && embed.setFields(object?.fields);
  embed.setFooter({ text: footer });
  embed.setColor("DarkButNotBlack");

  interaction.textChannel.send({ embeds: [embed] });
}

module.exports = { TextEmbed, DistubeEventSend };
