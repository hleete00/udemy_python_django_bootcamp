from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from first_app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('first_app/', include('first_app.urls')),
    path('admin/', admin.site.urls),
]
