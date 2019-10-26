const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjM3MzAzNzcxMzkwODA0MDE2.XbMNfA.wxE3ROxUqwpXGPSoe-oNNqPyHsw';

const PREFIX = '-';                                                                                                                                                                                                                                                                                                       

bot.on('ready', () =>{
    console.log('This bot is online and ready.');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'hello':
                 message.channel.sendMessage('Hello!')
            break;
        case 'owner': 'Owner';
                message.channel.sendMessage('Winterlamp is owned by Khor and Zapz. Feel free to send them a message!')
                break;
        case 'bot':
            if(args[1] === 'version'){
                 message.channel.sendMessage('Since I am new, I am only version 1.0.1. I get update every week so I will be more advanced. :)')
            }else{
                message.channel.sendMessage('Invalid command!')
            }
        break;
        case 'how':
            if(args[1] === 'are')
            if(args[2] === 'you?'){
                message.channel.sendMessage('Doing great, thanks for asking.')
            }else{
                   message.channel.sendMessage('I am sorry but I do not know how to help you with that.')
            }
        break;
        case 'profile':
            const embed = new Discord.RichEmbed()
            .setTitle('**__Information__**')
            .addField('Name', message.author.username)
            .addField('Tag', message.author.tag)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
        case 'help':
            message.author.sendMessage('Winterlamp is a virtual assistant to talk to you when you are bored. The prefix to use Winterlamp is `-`. To use me, be sure that your command is all in small letter except "I" and does not have punctuation.')
        break;
        case 'bye':
            message.channel.sendMessage('Awh. Bye!')
            break;
        case 'goodbye':
            message.channel.sendMessage('See you later!')
            break;
        case 'I':
            if(args[1] === 'got')
            if(args[2] === 'to')
            if(args[3] === 'go'){
            message.channel.sendMessage('Farewell. It was nice talking to you!')
        }else{
            message.channel.sendMessage('I am sorry but I do not know how to help you with that.')
     }
            break;
        
      case 'I':
        if (args[1] === 'love')
        if (args[2] === 'you ')
          message.channel.sendMessage("Awhh! That is so sweet of you!")

        case 'dm':
            message.channel.sendMessage('Done! A DM have been sent to your DM.')
            message.author.sendMessage('Hello! My epithet is Winterlamp. I was made by Khor and Zapz. I am equipped with a lot of fun and useful commands that may cheer you up! Type *-help* to get started')
            break;
        
        };
    }
)
bot.login(token);