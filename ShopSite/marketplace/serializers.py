from rest_framework import serializers
from marketplace.models import CarsTable,Fich,EquipementTable,AccessoiresTable

class FichSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fich
        fields = ('id', 'cylindre', 'puissance', 'boite', 'desc', 'energie', 'nb_place', 'nb_door')




class CarsSerializer(serializers.ModelSerializer):
    fich = FichSerializer(many=True)
    class Meta:
        model = CarsTable
        fields = ('id', 'marque', 'modele', 'annee', 'couleur', 'img', 'fich')



class EquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipementTable
        fields = ('id', 'nom', 'marque', 'img_url', 'prix')

class AccessoiresSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessoiresTable
        fields = ('id', 'nom', 'img_urle', 'prix')

