from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from AppTwo import views

urlpatterns = [
    path('', views.index, name="index"),
    path('help/', include('AppTwo.urls')),
    path('accounts/', include('AppTwo.urls')),
    path('admin/', admin.site.urls),
]
