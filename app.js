const config  = require('dotenv').config();
const Discord = require('discord.js');
const client  = new Discord.Client();

const token   = config.parsed.DISCORD_BOT_API_TOKEN;
const MessageBuilder = require('./message_builder');

process.on('unhandledRejection', console.dir);


// onStart Process
client.on('ready', () => console.log('ready...'));

// onReciveMessage form joinServer
client.on('message', message =>{
    if(message.author.bot) return;

    if (message.content.match(/^\/bosyu/)) {

        const sendMessage = MessageBuilder.build(message.content);
        message.channel.send(sendMessage);

    }
});

client.login(token);
