from django.contrib import admin

from app.order.models import ElemOrder, Order, OrderStatus, ChatOrder


class OrderAdmin(admin.ModelAdmin):
    list_display = ('fio', 'phone', 'address', 'user', 'status')


class ElemOrderAdmin(admin.ModelAdmin):
    list_display = ('order', 'count', 'product')


admin.site.register(Order, OrderAdmin)
admin.site.register(ElemOrder, ElemOrderAdmin)
admin.site.register(OrderStatus)
admin.site.register(ChatOrder)