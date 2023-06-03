from .bot import bot
from .handlers import *

from telegram.ext import (
    ConversationHandler,
    CommandHandler,
    Dispatcher,
    MessageHandler,
    Filters,
    PicklePersistence, CallbackQueryHandler,
)


dispatcher = Dispatcher(
    bot,
    workers=0,
    update_queue=None,
    # persistence=PicklePersistence("telegram_bot/state"),
)


# Handle start command


dispatcher.add_handler(CommandHandler("start", start_handler))
# dispatcher.add_handler(MessageHandler(filters=Filters.text, callback=main_offer))
#
# dispatcher.add_handler(CallbackQueryHandler(callback=check_menu))