const Discord = require('Discord.js');
const bot = new Discord.Client();

const token = 'NjM3MzAznzcxMzkwODa0MDE2.XbMNfa.wxE3ROxUqwpXGPSoe-oNNqPyHsw';

const PREFIX = '-';

bot.on('ready', () =>{
  console.log('Ready!');
})

bot.on('message', message=>{
  
  let args = message.content.substring(PREFIX.length).split(" ");
  
  switch(args[0]){
    case 'noob':
      message.channel.sendMessage('test')
      break;
      
  }