from django.urls import path

from app.product.views import *

urlpatterns = [
    path('get/all/product/list/', GetAllProductList.as_view()),
    path('get/product/filter/by/category/<int:id>/', GetProductFilterByCategory.as_view()),
    path('get/product/<int:id>/', GetProduct.as_view()),
    path('get/all/category/list/', GetAllCategoryList.as_view()),
    path('add/product/comment/', AddProductComment.as_view()),
    path('get/product/comment/list/<int:id>/', GetProductCommentList.as_view()),
    path('get/product/img/list/<int:id>/', GetProductImgList.as_view()),
    path('search/product/by/name/<str:search>/', SearchProductByName.as_view()),
    path('get/all/comment/by/manager/', GetAllCommentByManager.as_view()),
    path('del/comment/manager/by/id/<int:id>/', DelCommentManagerById.as_view()),
    path('get/all/products/logo/', GetAllProductsLogo.as_view()),
    path('get/popular/product/',  GetPopularProduct.as_view()),
    path('get/same/product/by/category/<int:id>/', GetSameProductByCategory.as_view()),
    path('get/all/banners/list/', GetAllBannersList.as_view()),
    path('add/like/', AddLike.as_view()),
    path('add/needfullproduct/', AddNeedfullProduct.as_view()),
    path('get/all/needfullproduct/list/', GetAllNeedfullProductList.as_view()),
    path('del/needfullproduct/<int:id>/', DelNeedfullProduct.as_view()),
    path('add/product/comparison/', AddProductСomparison.as_view()),
    path('get/product/comparison/by/user/', GetProductComparisonByUser.as_view()),
    path('del/product/comparison/<int:id>/', DelProductComparison.as_view()),
    path('add/contact/info/', AddContactInfo.as_view()),
    path('get/fag/list/', GetFagList.as_view()),
    path('get/all/contact/info/list/', GetAllContactInfoList.as_view()),
    path('add/faq/question/', AddFaqQuestion.as_view()),
    path('get/all/articles/list/', GetAllArticlesList.as_view()),
    path('get/all/category/article/list/', GetAllCategoryArticleList.as_view()),
    path('get/article/by/category/<int:id>/', GetArticleByCategory.as_view()),
    path('get/article/by/id/<int:id>/', GetArticleById.as_view()),
    path('add/blog/comment/', AddBlogComment.as_view()),
    path('get/blog/comment/list/<int:id>/', GetBlogCommentList.as_view()),
    path('get/all/faq/list/', GetAllFaqList.as_view()),
    path('get/faq/list/by/answer/<int:id>/', GetFaqListByAnswer.as_view()),
    path('update/faq/question/<int:id>/', UpdateFaqQuestion.as_view()),
    path('get/product/specification/by/id/<int:id>/', GetProductSpecificationById.as_view()),
    path('get/list/video/to/product/<int:id>/', GetListVideoToProduct.as_view())
]