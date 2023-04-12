from django.contrib import admin

from app.product.models import Product, ProductCategory, ProductComment, ProductImg, ProductImgLogo, Banner, \
    LikeProduct, ProductSpecification, NeedfullProduct, ProductСomparison, ProductVideo, ContactInfo, FaqInfo, \
    ArticleCategory, Article, BlogComment


class ItemSpecificationInLine(admin.StackedInline):
    model = ProductSpecification
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    inlines = [ItemSpecificationInLine]
    list_display = ('id', 'name', 'text', 'screen_size', 'memory', 'battery')


class ProductSpecificationAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'specification')


class NeedfullProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'product')


class ProductСomparisonAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'product')


admin.site.register(ProductCategory),
admin.site.register(Product, ProductAdmin),
admin.site.register(ProductComment)
admin.site.register(ProductImg)
admin.site.register(ProductImgLogo)
admin.site.register(Banner)
admin.site.register(LikeProduct)
admin.site.register(ProductSpecification, ProductSpecificationAdmin)
admin.site.register(NeedfullProduct, NeedfullProductAdmin)
admin.site.register(ProductСomparison, ProductСomparisonAdmin)
admin.site.register(ProductVideo)
admin.site.register(ContactInfo)
admin.site.register(FaqInfo)
admin.site.register(Article)
admin.site.register(ArticleCategory)
admin.site.register(BlogComment)
