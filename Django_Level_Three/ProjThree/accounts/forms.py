
from django.forms import ModelForm
from .models import Account


class AccountSignupForm(ModelForm):
    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email']
