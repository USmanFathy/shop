from django.contrib import admin
from . models import Order ,OrderItem

class OrderItemInline(admin.TabularInline):
    model = OrderItem 
    raw_id_fields =['product']


@admin.register(Order)
class OrderAdmin (admin.ModelAdmin):
    list_display=['id','first_name','last_name','username','email','address1','address2','paid','created','updated','city','country','zipcode']

    list_filter=['paid','created','updated']
    inlines = [OrderItemInline]