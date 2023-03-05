from django.db import models
from django.urls import reverse

class Blog (models.Model):
    title       = models.CharField(max_length=100)
    slug        = models.SlugField(max_length=200 , unique=True)
    image       = models.ImageField(upload_to ='blogs/%Y/%m/%d' , blank = True)
    description = models.TextField()

    class Meta :
        ordering = ['title']
        indexes =[
            models.Index(fields=['title']),
        ]
    def __str__(self) -> str:
        return self.title
    def get_absolute_url(self):
        return reverse("shop:product_list_by_category", args=[self.slug])

class Comment(models.Model):
    blog  = models.ForeignKey(Blog , related_name='blog',on_delete=models.CASCADE)
    comment = models.TextField()

class Views(models.Model):
    blog  = models.ForeignKey(Blog , related_name='blogview',on_delete=models.CASCADE)
    Views = models.BooleanField(default=False)

class Likes (models.Model):
    blog  = models.ForeignKey(Blog , related_name='bloglike',on_delete=models.CASCADE)
    like = models.BooleanField(default=False)


