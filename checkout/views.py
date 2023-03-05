from django.shortcuts import render , redirect
from .forms import OrderCreate
from .models import OrderItem
from cart.cart import Cart 
from django.urls import reverse
def order_create(request):
    cart = Cart(request)
    if request.method =='POST':
        form = OrderCreate(request.POST)
        if form.is_valid():
            order = form.save()
            for item in cart:
                OrderItem.objects.create(order=order ,
                                        product=item['product'],
                                        price= item['price'],
                                        quantity = item['quantity'])
            cart.clear()

        request.session['order_id']=order.id

        return redirect(reverse('payment:process'))
    else:
        form = OrderCreate()
    return render(request ,'checkout/checkout.html' ,{'form':form ,'cart':cart})