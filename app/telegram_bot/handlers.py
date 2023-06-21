from telegram import Update

from app.telegram_bot.messages import open_start, open_button
from app.telegram_bot.models import TelegramUserId


def start_handler(update: Update, context) -> None:
    # print(update)
    num = update.message.from_user.id
    print(num)
    count_elem = TelegramUserId.objects.filter(user_id=num).count()
    if count_elem == 0:
        new_user = TelegramUserId(user_id=num)
        new_user.save()
    open_start(num, context)
    open_button(num, context)

def check_menu(update: Update, context):
    print('hello')

def main_offer(update: Update, context):
    id_user = update.message.from_user.id
    message = update.message.text
    print(update)
    print('*****', message)
    print(id_user)
    if '✍️ Підписатися' == message:
        print('Функція підписування користувача')
    elif '✍️ Відписатися' == message:
        print('Функція відписування')
        object = TelegramUserId.objects.get(user_id=id_user)
        print(object)
        object.delete()
