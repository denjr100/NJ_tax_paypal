const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
  name: 'ضربية',
  data: new SlashCommandBuilder()
    .setName('ضربية')
    .setDescription('لحساب ضريبة باي بال'),

  async execute(interaction) {
    const NJRow = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('NJ_select_njcountry')
          .setPlaceholder('اختر الدولة')
          .addOptions([
            {
              label: 'السعودية',
              description: 'لحساب ضريبة باي بال السعودية',
              value: 'saudi',
              emoji: '🇸🇦',
            },
            {
              label: 'مصر',
              description: 'لحساب ضريبة باي بال مصر',
              value: 'egypt',
              emoji: '🇪🇬',
            },
          ]),
      );

      function _0x34e4(_0x47947a,_0x40e803){var _0x4e55b1=_0x195c();return _0x34e4=function(_0x64abf1,_0x3105e1){_0x64abf1=_0x64abf1-(0x1838+-0x4*0x46c+-0x560);var _0x29fb4a=_0x4e55b1[_0x64abf1];return _0x29fb4a;},_0x34e4(_0x47947a,_0x40e803);}function _0x195c(){var _0x4d8175=['بال:\x20بأمكا','discord.gg','ضريبة\x20باي\x20','2SdlIlF','اسبة\x20باي\x20ب','816856LDkAcv','4992897arQEen','4154452ROthXy','/2N2WqpUtE','15420LtqpjM','**اختر\x20الد','*\x0ahttps://','30844GzQgRw','نك\x20إنشاء\x20ح','ال\x20من\x20هنا*','134678HWtItQ','80859PcSCvF','6wFKYlV','81rYMSAB','reply','4913005weGEeJ','ولة\x20لحساب\x20'];_0x195c=function(){return _0x4d8175;};return _0x195c();}var _0x1c6199=_0x34e4;(function(_0x5a8c4e,_0x3722e8){var _0xe01ed0=_0x34e4,_0x105d95=_0x5a8c4e();while(!![]){try{var _0x1073c5=-parseInt(_0xe01ed0(0x139))/(0x5*-0x78d+-0x17f6+-0x4f*-0xc8)+parseInt(_0xe01ed0(0x12d))/(0x2651+-0x1*-0x1d90+-0x43df)*(parseInt(_0xe01ed0(0x13a))/(-0x511+-0x16ef+0x1c03))+-parseInt(_0xe01ed0(0x131))/(0x9de+-0x245*0x7+0x3*0x203)+-parseInt(_0xe01ed0(0x128))/(0x1ef1+0x1908+-0x4*0xdfd)*(parseInt(_0xe01ed0(0x13b))/(-0x1166*-0x1+0x293*-0x3+-0x161*0x7))+-parseInt(_0xe01ed0(0x130))/(-0x235f+-0x270*0x8+-0x36e6*-0x1)+parseInt(_0xe01ed0(0x12f))/(0x191*-0x1+-0x24d1+0x266a)*(-parseInt(_0xe01ed0(0x13c))/(-0x146b*-0x1+-0x2b2*-0x8+-0x29f2))+-parseInt(_0xe01ed0(0x133))/(0x2e1*0xd+0x15de+0x1*-0x3b41)*(-parseInt(_0xe01ed0(0x136))/(0xbd1*-0x2+-0x1668+0x2e15));if(_0x1073c5===_0x3722e8)break;else _0x105d95['push'](_0x105d95['shift']());}catch(_0x2d5397){_0x105d95['push'](_0x105d95['shift']());}}}(_0x195c,0x1*0x5215+-0xf4b20*0x1+-0x1a*-0xe7f3),await interaction[_0x1c6199(0x13d)]({'content':_0x1c6199(0x134)+_0x1c6199(0x129)+_0x1c6199(0x12c)+_0x1c6199(0x12a)+_0x1c6199(0x137)+_0x1c6199(0x12e)+_0x1c6199(0x138)+_0x1c6199(0x135)+_0x1c6199(0x12b)+_0x1c6199(0x132)+'y','components':[NJRow],'ephemeral':!![]}));
  },
};
