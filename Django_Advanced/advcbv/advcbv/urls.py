from django.contrib import admin
from django.urls import path, include
from basic_app import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('basic_app/', include('basic_app.urls', namespace='basic_app')),
    path('admin/', admin.site.urls),
]
