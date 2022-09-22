from django.shortcuts import render
from django.http import HttpResponse
from .models import Account


def index(request):
    return HttpResponse("<em> My Second App </em>")


def help(request):
    context = {'help': 'Help Page'}
    return render(request, 'AppTwo/help.html', context)


def list_account(request):
    context = {'accounts': Account.objects.all()}
    return render(request, 'AppTwo/list_account.html', context)