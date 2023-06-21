from telegram import InlineKeyboardButton, InlineKeyboardMarkup, KeyboardButton, ReplyKeyboardMarkup

from app.telegram_bot.bot import bot
from app.telegram_bot.config import send_chunked_message


def open_start(user_id: int, context) -> None:
    bot.send_message(
        user_id,
        text="Привіт.",
    )
    bot.send_message(
        user_id,
        text="Привіт222.",

    )
def open_button(user_id: int, context):
    # keybord = []
    # button = InlineKeyboardButton("❌ Отписаться", callback_data=f'delete_user_{user_id}')
    # keybord.append([button])
    # reply_markup = InlineKeyboardMarkup(keybord)
    list_btn_row_1 = [
            [KeyboardButton(" ✍️ Відписатися", callback_data='settings')],
            [KeyboardButton(" ✍️ Підписатися", callback_data='settings')],
    ]
    keyboard = ReplyKeyboardMarkup(list_btn_row_1, True)
    bot.send_message(
        user_id,
        reply_markup=keyboard,
        text='Відписка'
    )
def sent_news_message(user_id: int,img, text, context) -> None:
    # bot.send_message(
    #     user_id,
    #     text= text,
    # )
    send_chunked_message(
        user_id=user_id,
        bot=bot,
        buttons=[],
        chunk=1,
        photo=img,
        text=text
    )
