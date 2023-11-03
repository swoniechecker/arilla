const { ButtonBuilder } = require('discord.js');

module.exports = {
  interaction: {
    name: "bağış",
    description: "Bot geliştiricisine yemek ısmarlamanız için yardımcı olur.",
    options: []
  },
  aliases: [],
  category: "Bot",
  memberPermissions: [],
  botPermissions: ["SendMessages", "EmbedLinks", "ReadMessageHistory"],
  nsfw: false,
  cooldown: false,
  ownerOnly: false,

  async execute(client, interaction, data) {

    return interaction.reply({
      content: "<https://github.com/RFKaya/Nraphy>",
      embeds: [
        {
          color: client.settings.embedColors.default,
          title: '**»** Canın Sağ Olsun Kardeeş! 💖',
          description: '**•** Nraphy GitHub projemizi yıldızlayarak destek olabilirsin 😇',
        }
      ],
      components: [
        {
          data: { type: 1 }, components: [
            new ButtonBuilder().setLabel('Nraphy GitHub Projesi').setURL(`https://github.com/RFKaya/Nraphy`).setStyle('Link')
          ]
        },
      ]
    });

  }
};