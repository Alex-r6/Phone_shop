from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from app.telegram_bot.messages import sent_news_message, open_start
import requests


def get_photo_link(photo_bytes):
    data = {"file": photo_bytes}
    with requests.Session() as session:
        r = session.post("https://telegra.ph/upload/", files=data)
        link = "https://telegra.ph/" + r.json()[0]["src"]
    return link


class TelegramUserId(models.Model):
    user_id = models.CharField(max_length=30)


class TelegramNews(models.Model):
    title = models.CharField(max_length=30)
    text = models.TextField()
    img = models.ImageField('img', null=True, blank=True, upload_to='telegram_img')
    sent = models.BooleanField(default=False)

    image_url = models.URLField(blank=True, null=True)

    def save(self, *args, **kwargs):
        try:
            if not self.image_url:
                image_bytes = self.img.read()
                link = get_photo_link(image_bytes)
                self.image_url = link
            super().save(*args, **kwargs)
        except:
            super().save(*args, **kwargs)


@receiver(post_save, sender=TelegramNews)
def sent_news(sender, instance, created, **kwargs):
    if instance.sent:
        # open_start(668786100, {})
        for item in TelegramUserId.objects.all():
            print(item.user_id)
            sent_news_message(item.user_id,instance.image_url, instance.title + "\n\n"  + instance.text, {})