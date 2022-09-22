from django.shortcuts import render
from .forms import AccountSignupForm


def home(request):
    return render(request, 'accounts/home.html')


def signup(request):
    form = AccountSignupForm()
    print(request.method)
    if (request.method == 'POST'):
        form = AccountSignupForm(request.POST)
        if form.is_valid():
            form.save()

        return render(request, home(request))

    return render(request, 'accounts/signup.html', {'form': form})
