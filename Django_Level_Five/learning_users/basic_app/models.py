from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User


class UserProfileDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    portfolio_site = models.URLField(blank=True)
    profile_picture = models.ImageField(
        upload_to='profile_pictures', blank=True)

    def __str__(self):
        return self.user.username
