from django.urls import path

from app.order.views import *

urlpatterns = [
    path('add/order/', AddOrder.as_view()),
    path('add/elem/order/', AddElemOrder.as_view()),
    path('get/order/list/by/user/', GetOrderListByUser.as_view()),
    path('update/order/<int:id>/', UpdateOrder.as_view()),
    path('del/order/<int:id>/', DelOrder.as_view()),
    path('get/all/order/status/list/', GetAllOrderStatusList.as_view()),
    path('get/order/by/id/<int:id>/', GetOrderById.as_view()),
    path('get/elem/order/by/order/id/<int:id>/', GetElemOrderByOrderId.as_view()),
    path('get/elem/order/by/id/<int:id>/', GetElemOrderById.as_view()),
    path('delete/order/by/manager/<int:id>/', DeleteOrderByManager.as_view()),
    path('add/chat/order/<int:id>/', AddChatOrder.as_view()),
    path('get/chat/order/by/id/<int:id>/', GetChatOrderById.as_view()),
]