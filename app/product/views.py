from django.db.models import F
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from app.product.models import Product, ProductCategory, ProductComment, ProductImg, ProductImgLogo, Banner, \
    LikeProduct, NeedfullProduct, ProductСomparison, FaqInfo, ContactInfo, Article, ArticleCategory, BlogComment, \
    ProductSpecification, ProductVideo
from app.product.pagination import ProductPagination, ContactInfoPagination, FaqListPagination
from app.product.serializers import ProductSerializer, CategorySerializer, ProductCommentSerializer, \
    ProductImgSerializer, LogoSerializer, BannerSerializer, NeedfullProductSerializer, ProductСomparisonSerializer, \
    ProductСomparisonSerializer2, NeedfullProductSerializer2, ContactInfoSerializer, FaqInfoSerializer, \
    ArticleSerializer, CategoryArticleSerializer, BlogCommentSerializer, ProductSpecificationSerializer, VideoSerializer


class GetAllProductList(generics.ListAPIView):
    serializer_class = ProductSerializer
    pagination_class = ProductPagination

    def get_queryset(self):
        return Product.objects.all()


class GetProductFilterByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer
    pagination_class = ProductPagination

    def get_queryset(self):
        return Product.objects.filter(category_id=self.kwargs['id'])


class GetProduct(APIView):

    def get_object(self, id):
        return Product.objects.get(id=id)

    def get(self, request, id, *args, **kwargs):
        item = self.get_object(id)
        serializer = ProductSerializer(item)
        return Response(serializer.data)


class GetAllCategoryList(generics.ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return ProductCategory.objects.all()


class AddProductComment(APIView):

    def post(self, request, *args, **kwargs):
        item = ProductCommentSerializer(data=request.data)
        if item.is_valid():
            if str(request.user) != 'AnonymousUser':
                item.save(author=request.user)
            else:
                item.save()
            return Response(item.data)
        return Response(item.errors)


class GetProductCommentList(generics.ListAPIView):
    serializer_class = ProductCommentSerializer

    def get_queryset(self):
        return ProductComment.objects.filter(product_id=self.kwargs['id'])


class GetProductImgList(generics.ListAPIView):
    serializer_class = ProductImgSerializer

    def get_queryset(self):
        return ProductImg.objects.filter(product_id=self.kwargs['id'])


class SearchProductByName(generics.ListAPIView):
    serializer_class = ProductSerializer
    pagination_class = ProductPagination

    def get_queryset(self):
        return Product.objects.filter(name__icontains=self.kwargs['search'])


class GetAllCommentByManager(generics.ListAPIView):
    serializer_class = ProductCommentSerializer

    def get_queryset(self):
        return ProductComment.objects.all()


class DelCommentManagerById(APIView):

    def get_object(self, id):
        return ProductComment.objects.get(id=id)

    def delete(self, request,  id):
        item = self.get_object(id)
        item.delete()
        return Response('Valid Delete')


class GetAllProductsLogo(generics.ListAPIView):
    serializer_class = LogoSerializer

    def get_queryset(self):
        return ProductImgLogo.objects.all()


class GetPopularProduct(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(popular=True)


class GetSameProductByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        product = Product.objects.get(id=self.kwargs['id'])
        return Product.objects.filter(category_id=product.category.id).exclude(id=product.id)


class GetAllBannersList(generics.ListAPIView):
    serializer_class = BannerSerializer

    def get_queryset(self):
        return Banner.objects.all()


class AddLike(APIView):

    def post(self, request, *args, **kwargs):
        objects = LikeProduct.objects.filter(user=request.user, product_id=request.data.get('product'))
        print(objects)
        if objects.exists():
            print("delete")
            objects.delete()
            Product.objects.filter(id=request.data.get('product')).update(like=F('like') -1)
            type = 'delete'
        else:
            print('create')
            new_object = LikeProduct(user=request.user, product_id=request.data.get('product'))
            new_object.save()
            Product.objects.filter(id=request.data.get('product')).update(like=F('like') +1)
            type = 'create'
        return Response(type)


class AddNeedfullProduct(APIView):

    def post(self, request, *args, **kwargs):
        if str(request.user) == 'AnonymousUser':
            return Response('Error user')
        objects = NeedfullProduct.objects.filter(user=request.user, product_id=request.data.get('product'))
        if objects.exists():
            return Response('Valid object')
        else:
            serializer = NeedfullProductSerializer2(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data)
            return Response(serializer.errors)


class DelNeedfullProduct(APIView):

    def get_object(self, id):
        return NeedfullProduct.objects.get(id=id)

    def delete(self, request, id):
        item = self.get_object(id)
        item.delete()
        return Response('Valid delete')


class GetAllNeedfullProductList(generics.ListAPIView):
    serializer_class = NeedfullProductSerializer

    def get_queryset(self):
        return NeedfullProduct.objects.all()


class AddProductСomparison(APIView):

    def post(self, request, *args, **kwargs):
        if str(request.user) == 'AnonymousUser':
            return Response("Error user")
        objects = ProductСomparison.objects.filter(user=request.user, product_id=request.data.get('product'))
        if objects.exists():
            return Response('Same product')
        else:
            serializer = ProductСomparisonSerializer2(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data)
        return Response(serializer.errors)


class GetProductComparisonByUser(generics.ListAPIView):
    serializer_class = ProductСomparisonSerializer

    def get_queryset(self):
        return ProductСomparison.objects.filter(user=self.request.user)


class DelProductComparison(APIView):
     def get_object(self, id):
         return ProductСomparison.objects.get(id=id)

     def delete(self, request, id):
         item = self.get_object(id)
         item.delete()
         return Response('Valid delete')



class AddContactInfo(APIView):
    def post(self, request, *args, **kwargs):
        item = ContactInfoSerializer(data=request.data)
        if item.is_valid():
            if str(request.user) != 'AnonymousUser':
                item.save(name=request.user)
            else:
                item.save()
            return Response(item.data)
        return Response(item.errors)


class GetAllContactInfoList(generics.ListAPIView):
    serializer_class = ContactInfoSerializer
    pagination_class = ContactInfoPagination

    def get_queryset(self):
        return ContactInfo.objects.all()


class GetFagList(generics.ListAPIView):
    serializer_class = FaqInfoSerializer

    def get_queryset(self):
        return FaqInfo.objects.filter(visible=True)


class GetAllFaqList(generics.ListAPIView):
    serializer_class = FaqInfoSerializer
    pagination_class = FaqListPagination

    def get_queryset(self):
        return FaqInfo.objects.all()


class GetFaqListByAnswer(generics.ListAPIView):

    def get_object(self, id):
        return FaqInfo.objects.get(id=id)

    def get(self, request, id, *args, **kwargs):
        item = self.get_object(id)
        serializer = FaqInfoSerializer(item)
        return Response(serializer.data)


class AddFaqQuestion(APIView):

    def post(self, request, *args, **kwargs):
        question = FaqInfoSerializer(data=request.data, partial=True)
        if question.is_valid():
            if str(request.user) != 'AnonymousUser':
                question.save(name=request.user)
            else:
                question.save()
            return Response(question.data)
        return Response(question.errors)


class UpdateFaqQuestion(APIView):

    def get_object(self, id):
        return FaqInfo.objects.get(id=id)

    def patch(self, request, id, *args, **kwargs):
        item = self.get_object(id)
        print(item)
        serializer = FaqInfoSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            print(serializer)
            serializer.save()
            return Response(serializer.data)
        return Response('Error valid serializer')


class GetAllArticlesList(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.all()


class GetAllCategoryArticleList(generics.ListAPIView):
    serializer_class = CategoryArticleSerializer

    def get_queryset(self):
        return ArticleCategory.objects.all()


class GetArticleByCategory(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(category_id=self.kwargs['id'])


class GetArticleById(APIView):
    def get_object(self,id):
        return Article.objects.get(id=id)

    def get(self, request,id, *args, **kwargs):
        article = self.get_object(id)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)


class AddBlogComment(APIView):

    def post(self, request, *args, **kwargs):
        item = BlogCommentSerializer(data=request.data)
        if item.is_valid():
            if str(request.user) != 'AnonymousUser':
                item.save(name=request.user)
            else:
                item.save()
            return Response(item.data)
        return Response(item.errors)


class GetBlogCommentList(generics.ListAPIView):
    serializer_class = BlogCommentSerializer

    def get_queryset(self):
        return BlogComment.objects.filter(article_id=self.kwargs['id'])


class GetProductSpecificationById(generics.ListAPIView):
    serializer_class = ProductSpecificationSerializer

    def get_queryset(self):
        return ProductSpecification.objects.filter(product_id=self.kwargs['id'])


class GetListVideoToProduct(generics.ListAPIView):
    serializer_class = VideoSerializer

    def get_queryset(self):
        return ProductVideo.objects.filter(product_id=self.kwargs['id'])


class GetListVideoToProduct(generics.ListAPIView):
    serializer_class = VideoSerializer

    def get_queryset(self):
        return ProductVideo.objects.filter(product_id=self.kwargs['id'])
