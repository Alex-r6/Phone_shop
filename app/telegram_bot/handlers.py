from telegram import Update

from app.telegram_bot.messages import open_start


def start_handler(update: Update, context) -> None:
    user_id = update.message.from_user.id
    print(user_id)
    open_start(user_id, context)