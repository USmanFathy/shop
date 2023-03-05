from django.shortcuts import render , get_object_or_404
from shop.models import Product , Category
from django.conf import settings
from django.core.mail import send_mail
from .models import Team
def gallery(request ,category_slug = None):
    category = None
    products   = Product.objects.all()
    categories = Category.objects.all()

    if category_slug :
        category = get_object_or_404(Category , slug =category_slug)
        products = products.filter(category=category)
    

    return render (request,
                    'gallery/gallery.html',
                    {
                        'category':category,
                        'categories':categories,
                        'products':products,
                        })



def contact (request):

    if request.method == "POST":
        message_email=request.POST['message-email']
        message_subject=request.POST['message-subject']
        message=request.POST['message']
        sender = request.POST['name']
        send_mail(
            f'from  {sender}' +' About '+ message_subject ,
            message,
            message_email,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
            )


        return render(request,'contact/contact-us.html', {'contact':contact,})
    else:
        return render(request,'contact/contact-us.html', {'contact':contact,})


def about(request):
    team = Team.objects.all()
    return render(request,'about/about-us.html', {'team':team,})