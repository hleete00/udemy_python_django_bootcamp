from django import forms
from django.contrib.auth.models import User
from basic_app.models import UserProfileDetails


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta():
        model = User
        fields = ('username', 'email', 'password')


class UserProfileDetailsForm(forms.ModelForm):
    class Meta():
        model = UserProfileDetails
        fields = ('portfolio_site', 'profile_picture')
