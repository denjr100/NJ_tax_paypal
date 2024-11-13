// This bot is ((((((((((Free))))))))))))) made by :k.xj (Abukhalid)
// discord : https://discord.gg/2N2WqpUtEy
//__    __     _____         ______  ________   ______   _______   ________ 
//|  \  |  \   |     \       /      \|        \ /      \ |       \ |        \
//| $$\ | $$    \$$$$$      |  $$$$$$\\$$$$$$$$|  $$$$$$\| $$$$$$$\| $$$$$$$$
//| $$$\| $$      | $$      | $$___\$$  | $$   | $$  | $$| $$__| $$| $$__    
//| $$$$\ $$ __   | $$       \$$    \   | $$   | $$  | $$| $$    $$| $$  \   
//| $$\$$ $$|  \  | $$       _\$$$$$$\  | $$   | $$  | $$| $$$$$$$\| $$$$$   
//| $$ \$$$$| $$__| $$      |  \__| $$  | $$   | $$__/ $$| $$  | $$| $$_____ 
//| $$  \$$$ \$$    $$       \$$    $$  | $$    \$$    $$| $$  | $$| $$     \
 //\$$   \$$  \$$$$$$         \$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$$$$$$$
 
const { 
  Client, 
  GatewayIntentBits, 
  Collection,
  SlashCommandBuilder, 
  ActionRowBuilder, 
  StringSelectMenuBuilder, 
  ModalBuilder, 
  TextInputBuilder, 
  TextInputStyle,
  AttachmentBuilder
} = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// This bot is ((((((((((Free))))))))))))) made by :k.xj (Abukhalid)
// discord : https://discord.gg/2N2WqpUtEy
//__    __     _____         ______  ________   ______   _______   ________ 
//|  \  |  \   |     \       /      \|        \ /      \ |       \ |        \
//| $$\ | $$    \$$$$$      |  $$$$$$\\$$$$$$$$|  $$$$$$\| $$$$$$$\| $$$$$$$$
//| $$$\| $$      | $$      | $$___\$$  | $$   | $$  | $$| $$__| $$| $$__    
//| $$$$\ $$ __   | $$       \$$    \   | $$   | $$  | $$| $$    $$| $$  \   
//| $$\$$ $$|  \  | $$       _\$$$$$$\  | $$   | $$  | $$| $$$$$$$\| $$$$$   
//| $$ \$$$$| $$__| $$      |  \__| $$  | $$   | $$__/ $$| $$  | $$| $$_____ 
//| $$  \$$$ \$$    $$       \$$    $$  | $$    \$$    $$| $$  | $$| $$     \
 //\$$   \$$  \$$$$$$         \$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$$$$$$$
                                                                           
                                                                           
                                                                           

client.NJCommandsCollection = new Collection();

const commandFiles = fs.readdirSync('./njj').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./njj/${file}`);
  client.NJCommandsCollection.set(command.name, command);
}

async function createCalculationImage(interaction, njamount, njfee, total, njcountry) {
  const canvas = createCanvas(800, 400);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FF0000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  
  try {
    const avatar = await loadImage(interaction.user.displayAvatarURL({ format: 'png', size: 128 }));
    ctx.save();
    ctx.beginPath();
    ctx.arc(400, 80, 40, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 360, 40, 80, 80);
    ctx.restore();
  } catch (error) {
    console.error('Error loading avatar:', error);
  }

  ctx.font = 'bold 25px Arial';
  ctx.fillText(interaction.user.tag, 400, 150);

  const njcountryName = njcountry === 'saudi' ? 'السعودية' : 'مصر';
  ctx.fillText(`حساب ضريبة باي بال - ${njcountryName}`, 400, 190);

  ctx.font = 'bold 28px Arial';
  ctx.fillText(`المبلغ المطلوب استلامه: $${njamount.toFixed(2)}`, 400, 240);
  ctx.fillText(`رسوم باي بال: $${njfee.toFixed(2)}`, 400, 290);
  ctx.fillText(`المرسل عليه أن يدفع: $${total.toFixed(2)}`, 400, 340);

  ctx.font = '20px Arial';
  ctx.fillText(`${interaction.user.username} : شكرا لإستعمال الحاسبة حقتنا`, 400, 380);

  return new AttachmentBuilder(canvas.toBuffer(), { name: 'calculation.png' });
}

// This bot is ((((((((((Free))))))))))))) made by :k.xj (Abukhalid)
// discord : https://discord.gg/2N2WqpUtEy
//__    __     _____         ______  ________   ______   _______   ________ 
//|  \  |  \   |     \       /      \|        \ /      \ |       \ |        \
//| $$\ | $$    \$$$$$      |  $$$$$$\\$$$$$$$$|  $$$$$$\| $$$$$$$\| $$$$$$$$
//| $$$\| $$      | $$      | $$___\$$  | $$   | $$  | $$| $$__| $$| $$__    
//| $$$$\ $$ __   | $$       \$$    \   | $$   | $$  | $$| $$    $$| $$  \   
//| $$\$$ $$|  \  | $$       _\$$$$$$\  | $$   | $$  | $$| $$$$$$$\| $$$$$   
//| $$ \$$$$| $$__| $$      |  \__| $$  | $$   | $$__/ $$| $$  | $$| $$_____ 
//| $$  \$$$ \$$    $$       \$$    $$  | $$    \$$    $$| $$  | $$| $$     \
 //\$$   \$$  \$$$$$$         \$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$$$$$$$
                                                                           
                                                                                                                                      
 function NJcolored(text, color) {
  console.log(`\x1b[${color}m${text}\x1b[0m`);
}
var _0x3d5837=_0x3f76;function _0x3f76(_0x2807d0,_0x11deed){var _0x1f1559=_0x1f15();return _0x3f76=function(_0x3f7625,_0x60c1db){_0x3f7625=_0x3f7625-0x1b0;var _0x2d4992=_0x1f1559[_0x3f7625];return _0x2d4992;},_0x3f76(_0x2807d0,_0x11deed);}(function(_0xae1273,_0x34c479){var _0x2e53b3=_0x3f76,_0x41fa85=_0xae1273();while(!![]){try{var _0x4d5837=-parseInt(_0x2e53b3(0x1ba))/0x1+-parseInt(_0x2e53b3(0x1bc))/0x2+-parseInt(_0x2e53b3(0x1b7))/0x3*(-parseInt(_0x2e53b3(0x1b5))/0x4)+-parseInt(_0x2e53b3(0x1c1))/0x5+-parseInt(_0x2e53b3(0x1c0))/0x6+-parseInt(_0x2e53b3(0x1b8))/0x7+parseInt(_0x2e53b3(0x1b2))/0x8;if(_0x4d5837===_0x34c479)break;else _0x41fa85['push'](_0x41fa85['shift']());}catch(_0x706c7d){_0x41fa85['push'](_0x41fa85['shift']());}}}(_0x1f15,0x7e501),client[_0x3d5837(0x1b1)](_0x3d5837(0x1b6),()=>{var _0x45dc6c=_0x3d5837;NJcolored(_0x45dc6c(0x1b4),_0x45dc6c(0x1bb)),NJcolored(_0x45dc6c(0x1bd),'1;91'),NJcolored(_0x45dc6c(0x1b3),_0x45dc6c(0x1bb)),NJcolored('discord.gg/njstore',_0x45dc6c(0x1bb)),NJcolored(_0x45dc6c(0x1b9),_0x45dc6c(0x1be)),NJcolored(_0x45dc6c(0x1b0),_0x45dc6c(0x1bf));}));function _0x1f15(){var _0x5370f0=['1954162lLBPBT','Code\x20by\x20NJ\x20-\x20ﺪﻟﺎﺧ\x20ﻮﺑﺍ','698099GIEuZJ','1;91','1859658JkaZAL','اﺪﺑﺍ\x20ﻪﻌﻴﺑ\x20ﺮﻈﺤﻳ\x20ﻲﻧﺎﺠﻣ\x20تﻮﺒﻟﺍ\x20اﺬﻫ|\x20This\x20bot\x20is\x20free\x20and\x20should\x20never\x20be\x20sold','1;34','1;35','3343074ttiPAX','1970315vitgkh','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20/$$\x20/$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20|\x20$$|__/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/$$/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20/$$$$$$$\x20/$$\x20\x20/$$$$$$$\x20\x20/$$$$$$$\x20\x20/$$$$$$\x20\x20\x20/$$$$$$\x20\x20\x20/$$$$$$$\x20\x20\x20\x20\x20\x20/$$$$$$\x20\x20\x20/$$$$$$\x20\x20\x20\x20\x20\x20/$$//$$$$$$$\x20\x20/$$\x20\x20/$$$$$$$\x20/$$$$$$\x20\x20\x20\x20/$$$$$$\x20\x20\x20/$$$$$$\x20\x20\x20/$$$$$$\x20\x0a\x20/$$__\x20\x20$$|\x20$$\x20/$$_____/\x20/$$_____/\x20/$$__\x20\x20$$\x20/$$__\x20\x20$$\x20/$$__\x20\x20$$\x20\x20\x20\x20\x20/$$__\x20\x20$$\x20/$$__\x20\x20$$\x20\x20\x20\x20/$$/|\x20$$__\x20\x20$$|__/\x20/$$_____/|_\x20\x20$$_/\x20\x20\x20/$$__\x20\x20$$\x20/$$__\x20\x20$$\x20/$$__\x20\x20$$\x0a|\x20$$\x20\x20|\x20$$|\x20$$|\x20\x20$$$$$$\x20|\x20$$\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20\x20$$|\x20$$\x20\x20__/|\x20$$\x20\x20|\x20$$\x20\x20\x20\x20|\x20$$\x20\x20\x20$$|\x20$$\x20\x20\x20$$\x20\x20\x20/$$/\x20|\x20$$\x20\x20\x20$$\x20/$$|\x20\x20$$$$$$\x20\x20\x20|\x20$$\x20\x20\x20\x20|\x20$$\x20\x20\x20$$|\x20$$\x20\x20__/|\x20$$$$$$$$\x0a|\x20$$\x20\x20|\x20$$|\x20$$\x20____\x20\x20$$|\x20$$\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20|\x20$$|\x20$$\x20\x20\x20\x20\x20\x20|\x20$$\x20\x20|\x20$$\x20\x20\x20\x20|\x20$$\x20\x20|\x20$$|\x20$$\x20\x20|\x20$$\x20\x20/$$/\x20\x20|\x20$$\x20\x20|\x20$$|\x20$$\x20____\x20\x20$$\x20\x20|\x20$$\x20/$$|\x20$$\x20\x20|\x20$$|\x20$$\x20\x20\x20\x20\x20\x20|\x20$$_____/\x0a|\x20\x20$$$$$$$|\x20$$\x20/$$$$$$$/|\x20\x20$$$$$$$|\x20\x20$$$$$$/|\x20$$\x20\x20\x20\x20\x20\x20|\x20\x20$$$$$$$\x20/$$|\x20\x20$$$$$$$|\x20\x20$$$$$$$\x20/$$/\x20\x20\x20|\x20$$\x20\x20|\x20$$|\x20$$\x20/$$$$$$$/\x20\x20|\x20\x20$$$$/|\x20\x20$$$$$$/|\x20$$\x20\x20\x20\x20\x20\x20|\x20\x20$$$$$$$\x0a\x20_______/|__/|_______/\x20\x20_______/\x20______/\x20|__/\x20\x20\x20\x20\x20\x20\x20_______/|__/\x20____\x20\x20$$\x20____\x20\x20$$|__/\x20\x20\x20\x20|__/\x20\x20|__/|\x20$$|_______/\x20\x20\x20\x20___/\x20\x20\x20______/\x20|__/\x20\x20\x20\x20\x20\x20\x20_______/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/$$\x20\x20\x20$$\x20/$$\x20\x20\x20$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/$$\x20\x20|\x20$$\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20\x20$$$$$$/|\x20\x20$$$$$$/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20\x20$$$$$$/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20______/\x20\x20______/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20______/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20','once','26699920ILRDSP','كﺪﻋﺎﺴﻧ\x20حﺍﺮﻣ\x20و\x20ﻚﻌﻣ\x20ﻞﻐﺘﺸﻳ\x20حﺍﺮﻣ\x20تﺮﻴﻏ\x20اﺫﺍ\x20نﻻ\x20ﻒﻠﻣ\x20يﺍ\x20ﻢﺳﺍ\x20ﺮﻴﻐﺗﻻ\x20|\x20Do\x20not\x20change\x20the\x20name\x20of\x20any\x20file\x20as\x20it\x20wont\x20work\x20if\x20you\x20do\x20and\x20we\x20won’t\x20be\x20able\x20to\x20help\x20you','ﻦﻳﻻ\x20نﻭﺍﻻ\x20|\x20Online','124QVJNUF','ready','3699uIJfrf'];_0x1f15=function(){return _0x5370f0;};return _0x1f15();}

// This bot is ((((((((((Free))))))))))))) made by :k.xj (Abukhalid)
// discord : https://discord.gg/2N2WqpUtEy
//__    __     _____         ______  ________   ______   _______   ________ 
//|  \  |  \   |     \       /      \|        \ /      \ |       \ |        \
//| $$\ | $$    \$$$$$      |  $$$$$$\\$$$$$$$$|  $$$$$$\| $$$$$$$\| $$$$$$$$
//| $$$\| $$      | $$      | $$___\$$  | $$   | $$  | $$| $$__| $$| $$__    
//| $$$$\ $$ __   | $$       \$$    \   | $$   | $$  | $$| $$    $$| $$  \   
//| $$\$$ $$|  \  | $$       _\$$$$$$\  | $$   | $$  | $$| $$$$$$$\| $$$$$   
//| $$ \$$$$| $$__| $$      |  \__| $$  | $$   | $$__/ $$| $$  | $$| $$_____ 
//| $$  \$$$ \$$    $$       \$$    $$  | $$    \$$    $$| $$  | $$| $$     \
 //\$$   \$$  \$$$$$$         \$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$$$$$$$
                                                                           
                                                                           
                                                                           

client.on('interactionCreate', async interaction => {
  if (interaction.isCommand()) {
    const command = client.NJCommandsCollection.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: '<@707813418924769281>خطأ، تواصل مع الدعم الفني\nhttps://discord.gg/xzea3A6bNp', ephemeral: true });
    }
  } else if (interaction.isStringSelectMenu()) {
    if (interaction.customId === 'NJ_select_njcountry') {
      const njcountry = interaction.values[0]; 
      
      const modal = new ModalBuilder()
        .setCustomId(`NJ_calculate_tax_${njcountry}`) 
        .setTitle('حساب ضريبة باي بال');

      const njamountInput = new TextInputBuilder()
        .setCustomId('NJ_njamount')
        .setLabel('المبلغ الي تبي تستلمه:')
        .setStyle(TextInputStyle.Short)
        .setPlaceholder('اكتب المبلغ ')
        .setRequired(true);

      const modalRow = new ActionRowBuilder().addComponents(njamountInput);
      modal.addComponents(modalRow);

      await interaction.showModal(modal);
    }
  } else if (interaction.isModalSubmit()) {
    if (interaction.customId.startsWith('NJ_calculate_tax_')) {
      const njcountry = interaction.customId.split('_')[3]; 
      const njamount = parseFloat(interaction.fields.getTextInputValue('NJ_njamount')); 

      if (isNaN(njamount)) {
        await interaction.reply({
          content: 'حط مبلغ',
          ephemeral: true
        });
        return;
      }

      let njfeePercentage = 0;
      let fixednjfee = 0.30;  

// This bot is ((((((((((Free))))))))))))) made by :k.xj (Abukhalid)
// discord : https://discord.gg/2N2WqpUtEy
//__    __     _____         ______  ________   ______   _______   ________ 
//|  \  |  \   |     \       /      \|        \ /      \ |       \ |        \
//| $$\ | $$    \$$$$$      |  $$$$$$\\$$$$$$$$|  $$$$$$\| $$$$$$$\| $$$$$$$$
//| $$$\| $$      | $$      | $$___\$$  | $$   | $$  | $$| $$__| $$| $$__    
//| $$$$\ $$ __   | $$       \$$    \   | $$   | $$  | $$| $$    $$| $$  \   
//| $$\$$ $$|  \  | $$       _\$$$$$$\  | $$   | $$  | $$| $$$$$$$\| $$$$$   
//| $$ \$$$$| $$__| $$      |  \__| $$  | $$   | $$__/ $$| $$  | $$| $$_____ 
//| $$  \$$$ \$$    $$       \$$    $$  | $$    \$$    $$| $$  | $$| $$     \
 //\$$   \$$  \$$$$$$         \$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$$$$$$$
                                                                           
                                                                           
                                                                           

      if (njcountry === 'saudi') {
        njfeePercentage = 0.0489; // نسبة العمولة في السعودية
      } else if (njcountry === 'egypt') {
        njfeePercentage = 0.039; // نسبة العمولة في مصر
      }

// This bot is ((((((((((Free))))))))))))) made by :k.xj (Abukhalid)
// discord : https://discord.gg/2N2WqpUtEy
//__    __     _____         ______  ________   ______   _______   ________ 
//|  \  |  \   |     \       /      \|        \ /      \ |       \ |        \
//| $$\ | $$    \$$$$$      |  $$$$$$\\$$$$$$$$|  $$$$$$\| $$$$$$$\| $$$$$$$$
//| $$$\| $$      | $$      | $$___\$$  | $$   | $$  | $$| $$__| $$| $$__    
//| $$$$\ $$ __   | $$       \$$    \   | $$   | $$  | $$| $$    $$| $$  \   
//| $$\$$ $$|  \  | $$       _\$$$$$$\  | $$   | $$  | $$| $$$$$$$\| $$$$$   
//| $$ \$$$$| $$__| $$      |  \__| $$  | $$   | $$__/ $$| $$  | $$| $$_____ 
//| $$  \$$$ \$$    $$       \$$    $$  | $$    \$$    $$| $$  | $$| $$     \
 //\$$   \$$  \$$$$$$         \$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$$$$$$$
                                                                           
                                           
                                                                           

      const njfee = njamount * njfeePercentage + fixednjfee; 
      const total = njamount + njfee; 

      const imageAttachment = await createCalculationImage(interaction, njamount, njfee, total, njcountry);

      await interaction.reply({
        files: [imageAttachment],
        components: [row], 
        ephemeral: false
      });
    }
  }
});

client.login(config.token);

// This bot is ((((((((((Free))))))))))))) made by :k.xj (Abukhalid)
// discord : https://discord.gg/2N2WqpUtEy
//__    __     _____         ______  ________   ______   _______   ________ 
//|  \  |  \   |     \       /      \|        \ /      \ |       \ |        \
//| $$\ | $$    \$$$$$      |  $$$$$$\\$$$$$$$$|  $$$$$$\| $$$$$$$\| $$$$$$$$
//| $$$\| $$      | $$      | $$___\$$  | $$   | $$  | $$| $$__| $$| $$__    
//| $$$$\ $$ __   | $$       \$$    \   | $$   | $$  | $$| $$    $$| $$  \   
//| $$\$$ $$|  \  | $$       _\$$$$$$\  | $$   | $$  | $$| $$$$$$$\| $$$$$   
//| $$ \$$$$| $$__| $$      |  \__| $$  | $$   | $$__/ $$| $$  | $$| $$_____ 
//| $$  \$$$ \$$    $$       \$$    $$  | $$    \$$    $$| $$  | $$| $$     \
 //\$$   \$$  \$$$$$$         \$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$$$$$$$
                                                                           
                                                                           
                                                                           
