from django.contrib.auth.models import User
from rest_framework import serializers

from app.order.models import Order, OrderStatus
from app.user.models import Profile, Role


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('id', 'name')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', )


class OrderStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderStatus
        fields = '__all__'


class OrderListSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)
    status = OrderStatusSerializer(read_only=True, many=False)

    class Meta:
        model = Order
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    role = RoleSerializer(read_only=True, many=False)
    img = serializers.ImageField(use_url=False)

    class Meta:
        model = Profile
        fields = ('img', 'nickname', 'phone', 'viber', 'telegram', 'role')


class UpdateProfileSerializer(serializers.ModelSerializer):
    role = RoleSerializer(read_only=True, many=False)

    class Meta:
        model = Profile
        fields = ('img', 'nickname', 'phone', 'viber', 'telegram', 'role')
