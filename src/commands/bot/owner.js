const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Ferdi Rahmad Rizaldi`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Ferdi#8072`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Infinesting`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://infinesting.id](https://infinesting.id)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 