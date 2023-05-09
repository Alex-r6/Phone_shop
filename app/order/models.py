from django.contrib.auth.models import User
from django.db import models

from app.product.models import Product


class OrderStatus(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    fio = models.CharField(max_length=40)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    email = models.CharField(max_length=50, null=True)
    status = models.ForeignKey(OrderStatus, null=True, blank=True, on_delete=models.CASCADE)


class ElemOrder(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    count = models.IntegerField(default=0)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    total = models.IntegerField(default=0)


class ChatOrder(models.Model):
    name = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    form_name = models.CharField(max_length=20, null=True)
    order = models.ForeignKey(Order, null=True, blank=True, on_delete=models.CASCADE)
    text = models.TextField()
