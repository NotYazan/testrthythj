const { Client, Events,  } = require('discord.js');
const client = new Client({
    intents: 131071,
});

client.on(Events.ClientReady, async () => {
    console.log(client.user.tag)
}).login("MTA1MDA3NTc1NjAwNjQ4MTkzMQ.GZre6s.ArnJu634AFp0n15VDhIAyH4MLW8fxyvmUQztXE");
