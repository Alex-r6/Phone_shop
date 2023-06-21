from telegram import InlineKeyboardMarkup


def chunks(lst: list, n: int):
    for i in range(0, len(lst), n):
        yield lst[i: i + n]


def send_chunked_message(
        user_id,
        bot,
        buttons: list,
        photo=None,
        text: str = "...",
        limit: int = 45,
        chunk: int = 3,
):

    if len(buttons) > limit:
        first = True
        for x in range(0, len(buttons), limit):
            reply_markup = InlineKeyboardMarkup(
                list(chunks(buttons[x: x + limit], chunk))
            )
            if first and photo:
                bot.send_photo(
                    user_id,
                    reply_markup=reply_markup,
                )
            else:
                bot.send_message(
                    user_id,
                    text=text,
                    reply_markup=reply_markup,
                )
            first = False
    else:
        if photo:
            bot.send_photo(
                user_id,
                photo,
                caption=text,
                reply_markup=InlineKeyboardMarkup(list(chunks(buttons, chunk))),
            )
        else:
            bot.send_message(
                user_id,
                text=text,
                reply_markup=InlineKeyboardMarkup(list(chunks(buttons, chunk))),
            )
