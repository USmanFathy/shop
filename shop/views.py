from django.shortcuts import render , get_object_or_404 , redirect
from .models import Category , Product
from django.db.models import Count
from cart.forms import CartAddProduct
from . forms import Addcommentform
def product_list (request ,category_slug = None):
    category = None
    categories = Category.objects.annotate(total_product=Count('products'))
    products   = Product.objects.all()

    if category_slug :
        category = get_object_or_404(Category , slug =category_slug)
        products = products.filter(category=category)

    numberofproducts = products.count()
    return render (request,
                    'shop/shop.html',
                    {
                        'category':category,
                        'categories':categories,
                        'products':products,
                        'number':numberofproducts
                    }
            )



def product_detail(request ,id ,slug):
    product = get_object_or_404(Product ,
                                id =id ,
                                slug=slug)
    products   = Product.objects.all()
    cart_product_form = CartAddProduct()
    form = Addcommentform()
    if request.method == 'POST':
        form = Addcommentform(request.POST)

        if form.is_valid():
            comment = form.save(commit=False)
            comment.product=product
            comment.save()
    return render(request , 'shop/Shop-Detail.html',{'product':product,'products':products,'cart':cart_product_form , 'form':form})

