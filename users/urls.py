from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views
from . views import register
urlpatterns = [
    # Login, logout views
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]

