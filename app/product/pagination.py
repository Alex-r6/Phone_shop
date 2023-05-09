from rest_framework.pagination import PageNumberPagination


class ProductPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'page_size'


class ContactInfoPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'


class FaqListPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'page_size'
