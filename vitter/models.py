from django.db import models

class Tweet(models.Model):
    post = models.CharField("Post", max_length=50, default="", blank=True)
    username = models.CharField("Username", max_length=30, default="", blank=True)
    date = models.DateTimeField("Date Posted", auto_now_add=True)
