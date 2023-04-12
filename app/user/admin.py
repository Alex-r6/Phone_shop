from django.contrib import admin

from app.user.models import Profile, Role


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'nickname', 'phone', 'viber', 'telegram', 'role')


admin.site.register(Profile, ProfileAdmin)
admin.site.register(Role)