const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjM3MzAzNzcxMzkwODA0MDE2.XbMNfA.wxE3ROxUqwpXGPSoe-oNNqPyHsw";

const PREFIX = "-";

const servers = {};

bot.on("ready", () => {
  console.log("This bot is online and ready.");
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  const http = require("http");
  const express = require("express");
  const app = express();
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);
  
  const eris = require("eris");

  // Create a Client instance with our bot token.
  const bot = new eris.Client("my_token");

  // When the bot is connected and ready, log to console.
  bot.on("ready", () => {
    console.log("Connected and ready.");
  });

  // Every time a message is sent anywhere the bot is present,
  // this event will fire and we will check if the bot was mentioned.
  // If it was, the bot will attempt to respond with "Present".
  bot.on("messageCreate", async msg => {
    const botWasMentioned = msg.mentions.find(
      mentionedUser => mentionedUser.id === bot.user.id
    );

    if (botWasMentioned) {
      try {
        await msg.channel.createMessage("Present");
      } catch (err) {
        // There are various reasons why sending a message may fail.
        // The API might time out or choke and return a 5xx status,
        // or the bot may not have permission to send the
        // message (403 status).
        console.warn("Failed to respond to mention.");
        console.warn(err);
      }
    }
  });

  bot.on("error", err => {
    console.warn(err);
  });

  bot.connect();
  
  switch (args[0]) {
    case "hello":
      message.channel.sendMessage("Hello!");
      break;
    case "hi":
      message.channel.sendMessage("Hi, my friend!");
      break;
    case "sup":
      message.channel.sendMessage("Hola!");
      break;
    case "yo":
      message.channel.sendMessage("Hi!");
      break;
    case "owner":
      message.channel.sendMessage(
        "Winterlamp is owned by Khor and Zapz. Feel free to send them a message!"
      );
      break;
    case "bot":
      if (args[1] === "version") {
        message.channel.sendMessage(
          "Since I am new, I am only version 1.0.1. I get update every week so I will be more advanced. :)"
        );
      } else {
        message.channel.sendMessage("Invalid command!");
      }
      break;

    case "profile":
      const profile = new Discord.RichEmbed()
        .setTitle("**__Information__**")
        .addField("Name", message.author.username)
        .addField("Tag", message.author.tag)
        .setThumbnail(message.author.avatarURL)
        .setColor(0xf1c40f)
        .setTimestamp();
      message.channel.sendEmbed(profile);
      break;
    case "help":
      message.author.sendMessage(
        'Winterlamp is a virtual assistant to talk to you when you are bored. The prefix to use Winterlamp is `-`. To use me, be sure that your command is all in small letter except "I" and does not have punctuation except if you are asking a question.'
      );
      break;
    case "bye":
      message.channel.sendMessage("Awh. Bye!");
      break;
    case "goodbye":
      message.channel.sendMessage("See you later!");
      break;
    case "I":
      if (args[1] === "got")
        if (args[2] === "to")
          if (args[3] === "go") {
            message.channel.sendMessage(
              "Farewell. It was nice talking to you!"
            );
          } else {
            message.channel.sendMessage(
              "I am sorry but I do not know how to help you with that."
            );
          }

      break;
    case "dm":
      message.channel.sendMessage("Done! A DM have been sent to your DM.");
      message.author.sendMessage(
        "Hello! My epithet is Winterlamp. I was made by Khor and Zapz. I am equipped with a lot of fun and useful commands that may cheer you up! Type `-help` to get started"
      );

      break;
  }
});

bot.login(token);
