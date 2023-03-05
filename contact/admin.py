from django.contrib import admin
from .models import Team 

@admin.register(Team)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name' ,'description' ,'image']
    