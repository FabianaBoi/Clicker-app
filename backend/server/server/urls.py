from django.urls import path
from . import views
app_name = 'backend'
urlpatterns = [
    path('api/increase/', views.incrementCounter, name='incrementCounter'),
    path('api/clicks/', views.clicksSoFar, name='clicksSoFar'),
]
