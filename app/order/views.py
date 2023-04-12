from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from app.order.models import Order, OrderStatus, ElemOrder, ChatOrder
from app.order.pagination import OrderPagination
from app.order.serializers import OrderSerializer, ElemOrderSerializer, OrderStatusSerializer, OrderSerializerTwo, \
    ElemOrderSerializer2, ChatOrderSerializer


class AddOrder(APIView):

    def post(self, request, *args, **kwargs):
        item = OrderSerializer(data=request.data)
        if item.is_valid():
            if str(request.user) != 'AnonymousUser':
                item.save(user=request.user, status_id=1)
            else:
                item.save()
            return Response(item.data)
        return Response(item.errors)


class AddElemOrder(APIView):

    def post(self, request, *args, **kwargs):
        item = ElemOrderSerializer(data=request.data)
        if item.is_valid():
            item.save()
            return Response(item.data)
        return Response(item.errors)


class GetOrderListByUser(generics.ListAPIView):
    serializer_class = OrderSerializer
    pagination_class = OrderPagination

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)


class UpdateOrder(APIView):

    def get_object(self, id):
        return Order.objects.get(id=id)

    def patch(self, request, id, *args, **kwargs):
        item = self.get_object(id)
        serializer = OrderSerializerTwo(item, data=request.data, partial=True)
        if serializer.is_valid():
            if str(request.user) != 'AnonymousUser':
                serializer.save()
            return Response(serializer.data)
        return Response('Error valid serializer')


class DelOrder(APIView):

    def get_object(self,id):
        return Order.objects.get(id=id)

    def delete(self, request, id):
        item = self.get_object(id)
        if item.status.name != 'in process':
            item.delete()
            return Response('Delete valid')
        return Response('Error Delete')


class GetAllOrderStatusList(generics.ListAPIView):
    serializer_class = OrderStatusSerializer

    def get_queryset(self):
        return OrderStatus.objects.all()


class GetOrderById(APIView):

    def get_object(self, id):
        return Order.objects.get(id=id)

    def get(self, request, id, *args, **kwargs):
        item = self.get_object(id)
        serializer = OrderSerializer(item)
        return Response(serializer.data)


class GetElemOrderById(APIView):
    def get_object(self, id):
        return ElemOrder.objects.get(id=id)

    def get(self, request, id, *args, **kwargs):
        item = self.get_object(id)
        serializer = ElemOrderSerializer(item)
        return Response(serializer.data)


class GetElemOrderByOrderId(generics.ListAPIView):
    serializer_class = ElemOrderSerializer2

    def get_queryset(self):
        return ElemOrder.objects.filter(order_id=self.kwargs['id'])


class DeleteOrderByManager(APIView):

    def get_object(self, id):
        return Order.objects.get(id=id)

    def delete(self, request, id):
        item = self.get_object(id)
        item.delete()
        return Response('Valid delete')


class AddChatOrder(APIView):

    def post(self,request, *args, **kwargs):
        item = ChatOrderSerializer(data=request.data)
        if item.is_valid():
            if str(request.user) != 'AnonymousUser':
                item.save(name=request.user)
            else:
                item.save()
            return Response(item.data)
        return Response(item.errors)


class GetChatOrderById(generics.ListAPIView):
    serializer_class = ChatOrderSerializer

    def get_queryset(self):
        return ChatOrder.objects.filter(order_id=self.kwargs['id'])





