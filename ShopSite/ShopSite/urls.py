
from django.contrib import admin
from django.urls import path
from django.urls import include, path
from rest_framework import routers
from marketplace import views

router = routers.DefaultRouter()
router.register(r'marketplace', views.CarsViewSet)
router.register(r'Equipement', views.EquipementViewSet)
router.register(r'Accessoires', views.AccessoireViewSet)
router.register(r'', views.CarsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]