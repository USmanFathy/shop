from django.db import models

class Team(models.Model):

    name        = models.CharField(max_length=200)
    description = models.TextField()
    image       = models.ImageField(upload_to='team/%Y/%m/%d')
    job         = models.CharField(max_length=200)
    instgram    =models.EmailField()
    facebook    =models.EmailField()
    twitter     =models.EmailField()
    gmail       =models.EmailField()


    def __str__(self) -> str:
        return self.name