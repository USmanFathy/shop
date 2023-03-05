from django.shortcuts import render ,get_object_or_404 ,redirect

from .models import Wishlist
from shop.models import Product

def wishlist(request):
    wish = Wishlist.objects.all()
    return render(request ,'wishlist/wishlist.html',{'list':wish})



def wishlist_remove(request , product_id):
    wish = Wishlist.objects.filter(product=product_id)
    wish.delete()
    return redirect('wishlist:wishlist_detail')

def wishlist_add(request , product_id):
    wish = Wishlist.objects.all()
    product = get_object_or_404( Product , id=product_id)
    wish.create(product=product , status='stock')
    return redirect('wishlist:wishlist_detail')