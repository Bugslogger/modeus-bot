const { apiKeys, ad } = require("../../configurations/config.json");
const { EmbedBuilder } = require("discord.js");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports.run = async (bot, interaction) => {
  const query = interaction.options.get("gifname").value;
  const user = interaction.options.get("user");
  const index = Math.floor(Math.random() * ad.footer.length);
  const footer = ad.footer[index];

  // url Async requesting function
  function httpGetAsync(theUrl, callback) {
    // create the request object
    var xmlHttpp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttpp.onreadystatechange = function () {
      if (xmlHttpp.readyState == 4 && xmlHttpp.status == 200) {
        callback(xmlHttpp.responseText);
      }
    };

    // open as a GET call, pass in the url and set async = True
    xmlHttpp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttpp.send(null);

    return;
  }

  // callback for the top 8 GIFs of search
  async function tenorCallback_search(responsetext) {
    const gifNumber = Math.floor(Math.random() * 20);
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];
    // console.log(top_10_gifs);

    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)
    const embed = new EmbedBuilder()
      .setTitle(
        user === null
          ? `${interaction.user.username} sent ${query}`
          : `${interaction.user.username} sent ${query} to ${user.user.username}`
      )
      .setColor("DarkButNotBlack")
      .setFooter({ text: footer })
      .setImage(top_10_gifs[gifNumber]["media"][0]["gif"]["url"]);

    await interaction.reply({ embeds: [embed] });

    return;
  }

  // function to call the trending and category endpoints
  function grab_data() {
    // set the apikey and limit

    var lmt = 20;

    // test search term
    var search_term = "excited";

    // using default locale of en_US
    var search_url = `https://g.tenor.com/v1/search?q=${query}&key=${apiKeys.tensor}&limit=${lmt}`;

    httpGetAsync(search_url, tenorCallback_search);

    // data will be loaded by each call's callback
    return;
  }

  // SUPPORT FUNCTIONS ABOVE
  // MAIN BELOW

  // start the flow
  grab_data();
};

module.exports.config = {
  name: "gif",
  aliases: ["gif"],
  description: "send gif in text channel.",
  options: [
    {
      name: "gifname",
      description: "Enter gif name.",
      type: 3,
      required: true,
    },
    {
      name: "user",
      description: "tag user",
      type: 6,
    },
  ],
};
