from django.urls import path
from . import views


app_name = 'contact'

urlpatterns = [
    path('gallery/',views.gallery , name='gallery'),
    path('',views.contact , name='contact'),
    path('about/',views.about , name='about'),

    ]