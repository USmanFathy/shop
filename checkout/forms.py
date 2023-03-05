from django import forms 
from .models import Order 

class OrderCreate(forms.ModelForm):
    
    class Meta:
        model = Order
        fields =['first_name','last_name','username','email','address1','address2','paid','city','country','zipcode']