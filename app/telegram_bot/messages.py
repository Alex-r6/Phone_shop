from app.telegram_bot.bot import bot

def open_start(user_id: int, context) -> None:
    bot.send_message(
        user_id,
        text="Привіт.",
    )
    bot.send_message(
        user_id,
        text="Привіт222.",
    )