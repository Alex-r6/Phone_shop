from django.contrib.auth.models import User
from rest_framework import serializers

from app.product.models import Product, ProductCategory, ProductComment, ProductImg, ProductImgLogo, Banner, \
    NeedfullProduct, ProductСomparison, ContactInfo, FaqInfo, Article, ArticleCategory, BlogComment, \
    ProductSpecification, ProductVideo
from app.user.models import Profile


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True, many=False)
    img = serializers.ImageField(use_url=False)

    class Meta:
        model = Product
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    img_profile = serializers.SerializerMethodField('get_img_profile')

    def get_img_profile(self, item):
        profile = Profile.objects.get(user=item)
        return str(profile.img)

    class Meta:
        model = User
        fields = ('username', 'img_profile')


class ProductCommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True, many=False)

    class Meta:
        model = ProductComment
        fields = '__all__'


class ProductImgSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=False)

    class Meta:
        model = ProductImg
        fields = '__all__'


class LogoSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=False)

    class Meta:
        model = ProductImgLogo
        fields = '__all__'


class BannerSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=False)

    class Meta:
        model = Banner
        fields = '__all__'


class ProductСomparisonSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)
    product = ProductSerializer(read_only=True, many=False)

    class Meta:
        model = ProductСomparison
        fields = '__all__'


class NeedfullProductSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)
    product = ProductSerializer(read_only=True, many=False)

    class Meta:
        model = NeedfullProduct
        fields = '__all__'


class ProductСomparisonSerializer2(serializers.ModelSerializer):
    class Meta:
        model = ProductСomparison
        fields = '__all__'


class ContactInfoSerializer(serializers.ModelSerializer):
    name = UserSerializer(read_only=True, many=False)

    class Meta:
        model = ContactInfo
        fields = '__all__'


class NeedfullProductSerializer2(serializers.ModelSerializer):
    class Meta:
        model = NeedfullProduct
        fields = '__all__'


class FaqInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FaqInfo
        fields = '__all__'


class CategoryArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleCategory
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=False)
    author = UserSerializer(read_only=True, many=False)
    category = CategorySerializer(read_only=True, many=False)

    class Meta:
        model = Article
        fields = '__all__'


class BlogCommentSerializer(serializers.ModelSerializer):
    name = UserSerializer(read_only=True, many=False)

    class Meta:
        model = BlogComment
        fields = '__all__'


class ProductSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecification
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVideo
        fields ='__all__'
