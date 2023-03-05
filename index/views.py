from django.shortcuts import render ,get_object_or_404
from .models import Blog 
from shop.models import Product , Category
from cart.cart import Cart 
def index(request ,category_slug = None):
    category = None
    products   = Product.objects.all()
    categories = Category.objects.all()

    if category_slug :
        category = get_object_or_404(Category , slug =category_slug)
        products = products.filter(category=category)
    blog = Blog.objects.all()

    cart = Cart(request)
    return render (request,
                    'index/index.html',
                    {
                        'category':category,
                        'categories':categories,
                        'products':products,
                        'blog':blog,
                        'cart':cart})