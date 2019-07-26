from rest_framework import viewsets
from rest_framework.response import Response
from marketplace.serializers import CarsSerializer,EquipementSerializer,AccessoiresSerializer
from marketplace.models import CarsTable,EquipementTable,AccessoiresTable


class CarsViewSet(viewsets.ModelViewSet):
    queryset = CarsTable.objects.all()
    serializer_class = CarsSerializer


class EquipementViewSet(viewsets.ModelViewSet):
    queryset = EquipementTable.objects.all()
    serializer_class = EquipementSerializer

class AccessoireViewSet(viewsets.ModelViewSet):
    queryset = AccessoiresTable.objects.all()
    serializer_class = AccessoiresSerializer
