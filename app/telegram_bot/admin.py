from django.contrib import admin

from app.telegram_bot.models import TelegramUserId, TelegramNews


class TelegramUserIdAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id')


class TelegramNewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'sent')


admin.site.register(TelegramUserId, TelegramUserIdAdmin)
admin.site.register(TelegramNews, TelegramNewsAdmin)
