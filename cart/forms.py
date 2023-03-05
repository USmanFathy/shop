from django import forms 

product_quantity = [(i , str(i)) for i in range(1 ,101)]


class CartAddProduct(forms.Form):
    quantity = forms.TypedChoiceField(
        choices=product_quantity ,
        coerce=int
    )
    override = forms.BooleanField(required=False , 
    initial=False ,
    widget=forms.HiddenInput())