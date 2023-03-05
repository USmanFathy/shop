from django.contrib import admin

from .models import Wishlist

@admin.register(Wishlist)
class CategoryAdmin(admin.ModelAdmin):
    pass
