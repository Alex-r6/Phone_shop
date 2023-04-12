from django.urls import path

from app.user.views import GetOrderList, GetProfileToToken, UpdateProfileToToken, GetListOrderManager

urlpatterns = [
    path('get/order/list/', GetOrderList.as_view()),
    path('get/profile/to/token/', GetProfileToToken.as_view()),
    path('update/profile/to/token/', UpdateProfileToToken.as_view()),
    path('get/list/order/manager/', GetListOrderManager.as_view())
]

