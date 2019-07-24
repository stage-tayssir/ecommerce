from django.contrib.auth.models import User
from rest_framework import serializers
from marketplace.models import CarsTable


class CarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarsTable
        fields = ('id', 'marque', 'modele', 'annee','cylindre','puissance','couleur','boite','img')



