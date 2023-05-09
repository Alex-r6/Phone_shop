from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from app.order.models import Order
from app.product.models import ProductVideo
from app.product.serializers import VideoSerializer
from app.user.models import Profile
from app.user.serializers import OrderListSerializer, ProfileSerializer, UpdateProfileSerializer


class GetOrderList(generics.ListAPIView):
    serializer_class = OrderListSerializer

    def get_queryset(self):
        return Order.objects.all()


class GetProfileToToken(APIView):

    def get_object(self,user):
        return Profile.objects.get(user=user)

    def get(self, request, *args, **kwargs):
        item_user = self.get_object(request.user)
        serializer = ProfileSerializer(item_user)
        return Response(serializer.data)


class UpdateProfileToToken(APIView):

    def get_object(self, user):
        return Profile.objects.get(user=user)

    def patch(self, request, *args, **kwargs):
        print(request.data)
        item_user = self.get_object(request.user)
        serializer = UpdateProfileSerializer(item_user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class GetListOrderManager(APIView):
    serializer_class = OrderListSerializer

    def get(self, request, *args, **kwargs):
        queryset = Order.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(queryset,1)
        try:
            orders = paginator.page(page)
        except PageNotAnInteger:
            orders = paginator.page(1)
        except EmptyPage:
            orders = paginator.page(paginator.num_pages)
        serializer = OrderListSerializer(orders, many=True)
        return Response({"data": serializer.data, "num_page": paginator.num_pages})
