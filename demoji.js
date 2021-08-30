module.exports = {
    name: 'demoji',
    async execute(message) {
        if (message.author.id == 425336044687458306) {
            for (const [key, e] of message.guild.emojis.cache) {
                try {
                    await e.delete();
                    console.log('Deleted Emoji');
                } catch (err) {
                    console.log(err)
                }
            }
            message.author.send('Action Completed. - Delete Emoji');
            console.log('Ran demoji command. (SUCCESS)'); 
        } else {
          console.log('Ran demoji command. (FAIL)'); 
        }
                
    }
};