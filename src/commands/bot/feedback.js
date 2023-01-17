const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1064341891077918730",
    token: "kYLhEvAOygiVimb_mosOFyqdifqYAHXF5vVuOyrvRe36cIFBOyD6dhYBUM3jVmMRE98A",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 