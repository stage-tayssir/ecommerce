from rest_framework import viewsets
from rest_framework.response import Response
from marketplace.serializers import CarsSerializer
from marketplace.models import CarsTable


class CarsViewSet(viewsets.ModelViewSet):
    queryset = CarsTable.objects.all()
    serializer_class = CarsSerializer
    