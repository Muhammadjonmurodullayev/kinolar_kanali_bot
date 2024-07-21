























const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram Bot API token
const token = '6524039955:AAHLnvKPCNot_LpaIEOFC43M60NqFOkU7AM';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });
const channel4Name = 'Intagram';

const channel4Id = 'https://t.me/Kinolarkanali21';
// Handle /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Replace with your channel IDs and names
    const channel1Id = 'https://t.me/Kinolarkanali21';
    const channel2Id = 'https://t.me/Kinolarkanali21';
    const channel3Id = 'https://www.instagram.com/kinolarkanali21/';
    const channel1Name = 'Kinolar Kanali';
    const channel2Name = 'Kinolar Kanali';
    const channel3Name = 'Intagram';
    // const channel2Name = 'instagram';

    // Keyboard markup
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: channel1Name, url: `${channel1Id}` },
                ],
                [
                    { text: channel2Name, url: `${channel2Id}` },
                    
                ],
                [
                    { text: channel3Name, url: `${channel3Id}` },
                    
                ],
                [
                    { text: 'Check Subscriptions', callback_data: 'check_subscriptions' }
                ]
            ]
        }
    };

    // Send message with channels and button
    bot.sendMessage(chatId, "Kanallarga obuna bo'ling", keyboard);
});

// Handle button press
bot.on('callback_query', (query) => {
    console.log(query);
    const chatId = query.message.chat.id;
    const userId = query.from.id;
    
    if (query.data === 'check_subscriptions') {
        // Replace with your channel IDs
        const channel1Id = '-1002031134343';
        const channel2Id = 'https://www.instagram.com/kinolarkanali21/';
        const channel3Id = '-1002031134343';

        // Check if user is member of channels
        bot.getChatMember(channel1Id, userId).then((member1) => {
            bot.getChatMember(channel3Id, userId).then((member3) => {
                const isMember1 = member1.status === 'member' || member1.status === 'administrator';
                // const isMember2 = member2.status === 'member' || member2.status === 'administrator';
                const isMember3 = member3.status === 'member' || member3.status === 'administrator';
                console.log(chatId);
                if (isMember1 && isMember3) {
                    const keyboard2 = {
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: channel4Name, url: `${channel4Id}` },
                                ],
                               
                            ]
                        }
                    };
                    bot.sendMessage(chatId, 'Salom!',keyboard2); // Send 'salom' if subscribed to both channels
                } else {
                    bot.sendMessage(chatId, "Siz kanallarga obuna bo'lmagansiz kanallarga obuna bo'ling!");
                }
            });
        });
    }
});
