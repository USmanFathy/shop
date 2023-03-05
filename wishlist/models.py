from django.db import models
from shop.models import Product 


class Wishlist(models.Model):

    Stock='Stock'
    in_Stock='in Stock'
    CHOICES_STATUS = (
        (Stock,'Stock'),
        (in_Stock,'in Stock')
    )
    product    =models.ForeignKey(Product , related_name='product' , on_delete=models.CASCADE)
    status     =models.CharField(max_length=10 , choices=CHOICES_STATUS)
    def __str__(self) -> str:
        return self.product.name
