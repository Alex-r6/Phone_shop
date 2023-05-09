from django.contrib.auth.models import User
from rest_framework import serializers

from app.order.models import Order, ElemOrder, OrderStatus, ChatOrder
from app.product.serializers import ProductSerializer
from app.user.serializers import UserSerializer


class OrderStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderStatus
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    status = OrderStatusSerializer(read_only=True, many=False)

    class Meta:
        model = Order
        fields = '__all__'


class ElemOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElemOrder
        fields = '__all__'


class ElemOrderSerializer2(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True, many=False)

    class Meta:
        model = ElemOrder
        fields = '__all__'


class OrderSerializerTwo(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class ChatOrderSerializer(serializers.ModelSerializer):
    name = UserSerializer(read_only=True, many=False)

    class Meta:
        model = ChatOrder
        fields = '__all__'
