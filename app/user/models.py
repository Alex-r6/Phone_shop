from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class Role(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    img = models.ImageField('img', null=True, blank=True, upload_to='product_img')
    nickname = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    viber = models.CharField(max_length=20)
    telegram = models.CharField(max_length=20)
    role = models.ForeignKey(Role, null=True, blank=True, on_delete=models.SET_NULL)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, phone='+380')
