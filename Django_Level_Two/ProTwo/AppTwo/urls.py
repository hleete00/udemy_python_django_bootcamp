from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_account, name='account-list'),
    #path('', views.help, name="help"),

]
