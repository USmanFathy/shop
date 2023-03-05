from django import forms
from . models import Comment


class Addcommentform(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ('comment',)
