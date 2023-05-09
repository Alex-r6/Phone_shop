from django.contrib.auth.models import User
from django.db import models


class ProductCategory(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Product(models.Model):
    img = models.ImageField('img', null=True, blank=True, upload_to='info_img')
    name = models.CharField(max_length=20)
    price = models.FloatField(default=0)
    text = models.TextField()
    description = models.CharField(max_length=100, null=True)
    discount = models.IntegerField(default=0)
    instock = models.BooleanField(default=True)
    popular = models.BooleanField(default=False)
    screen_size = models.FloatField(default=0)
    memory = models.IntegerField(default=0)
    battery = models.IntegerField(default=0)
    category = models.ForeignKey(ProductCategory, null=True, blank=True, on_delete=models.SET_NULL)
    like = models.IntegerField(default=0)
    stars = models.IntegerField(default=0)
    new = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class LikeProduct(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class ProductComment(models.Model):
    author = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    text = models.TextField()
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.CASCADE)


class ProductImg(models.Model):
    img = models.ImageField('img', null=True, blank=True, upload_to='product_img')
    title = models.CharField(max_length=20, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class ProductImgLogo(models.Model):
    img = models.ImageField('img', null=True, blank=True, upload_to='img_logo')
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Banner(models.Model):
    img = models.ImageField('img', null=True, blank=True, upload_to='banner')
    price = models.FloatField(default=0)
    visible = models.BooleanField(default=False)


class ProductSpecification(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    specification = models.CharField(max_length=50)
    specification_value = models.TextField(null=True)


class NeedfullProduct(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.CASCADE)


class ProductСomparison(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.CASCADE)


class ProductVideo(models.Model):
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.CASCADE)
    video = models.TextField()


class ContactInfo(models.Model):
    name = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    name_form = models.CharField(max_length=20, null=True, blank=True)
    email = models.CharField(max_length=20)
    phone = models.CharField(max_length=30)
    message = models.TextField()


class FaqInfo(models.Model):
    name = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    name_form = models.CharField(max_length=20, null=True, blank=True)
    question = models.CharField(max_length=400)
    answer = models.CharField(max_length=500)
    visible = models.BooleanField(default=False)


class ArticleCategory(models.Model):
        name = models.CharField(max_length=30)
        quantity = models.IntegerField(default=0)

        def __str__(self):
            return self.name


class Article(models.Model):
    img = models.ImageField('img', null=True, blank=True, upload_to='article')
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    text = models.TextField()
    date = models.CharField(max_length=25)
    author = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    category = models.ForeignKey(ArticleCategory, null=True, on_delete=models.CASCADE)


class BlogComment(models.Model):
    name_form = models.CharField(max_length=30, null=True, blank=True)
    name = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    email = models.CharField(max_length=30)
    comment = models.TextField()
    article = models.ForeignKey(Article, null=True, blank=True, on_delete=models.CASCADE)
