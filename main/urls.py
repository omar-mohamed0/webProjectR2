from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('appropriteplants/', views.appropriteplants, name='appropriteplants'),
    path('plant_health_check/', views.plant_health_check, name='plant_health_check'),
]

