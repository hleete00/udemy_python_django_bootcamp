from django.contrib import admin
from django.urls import path
from basic_app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('form_page/', views.form_name_view, name='form-name'),
    path('admin/', admin.site.urls),
]
