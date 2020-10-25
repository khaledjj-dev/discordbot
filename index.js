//starts a website that can be pinged to keep the bot alive
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //when user goes to the link
  res.send("Hello fag! this is \nDicky the bot, khaled is my dad");
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); //listens for user to acces the website

//finished all website code

//initlises discord.js package
require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client(); //most people use Client insted of bot its up to you

//pulls sensitave variables from .env folder (.env is a environment file that only you can see the content so put all senstive information there)
const prefix = process.env.PREFIX;
const version = process.env.VERSION;

bot.once("ready", () => {
  //when the bot turn on
  console.log("Ready!");
  console.log("Prefix:" + prefix);
  console.log("Version:" + version);
  console.log("______________________");
  bot.user.setActivity("with khaled's balls");
});

bot.on("message", async (msg) => {
  // when a user send a message most people use message but i use msg
  if (msg.author.bot) return; // if the msg is sent by a bot then it ignores it

  let args = msg.content.toLowerCase().substring(prefix.length).split(" "); //put user msg into a LowerCase array
  let text = msg.content; // the exact msg the user sent

  if (msg.guild === null) {
    //if the user dms the bot

    if (text.charAt(0) !== prefix) {
      // checks if the user included the prefix
      msg.author.send("you forgot the prefix :( btw its " + prefix);
      return;
    }

    //put all DM the comands here

    if (args[0] === "ping") {
      //example command
      msg.author.send("living through this misery");
    }

    if (args[0] === "sad") {
      msg.channel.send("https://cdn.discordapp.com/attachments/768495894227714111/768505693379493918/image0.jpg");

      return;

    }
    return;
  }
  //put all server the comands here
  if (args[0] === "ping") {
   
    //example command
    msg.channel.send("living through this misery");
    return;
  }

  if (args[0] === "bruh") {

    msg.channel.send("https://cdn.discordapp.com/attachments/768495894227714111/768504445381378049/image0.jpg");

    return;
  }

  if (args[0] === "sad") {

    msg.channel.send("https://cdn.discordapp.com/attachments/768495894227714111/768561592425775155/video0.mov");

    return;
  }
});

bot.login(process.env.TOKEN); // turn bot online