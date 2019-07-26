from django.db import models


class CarsTable(models.Model):
    marque = models.CharField(max_length=20)
    modele = models.CharField(max_length=200)
    annee = models.IntegerField()
    couleur = models.CharField(max_length=20)
    img = models.CharField(max_length=500)
    prix = models.FloatField(default=0)

    

    def __str__ (self):
        return self.modele

class Fich(models.Model):
    car = models.ForeignKey(CarsTable, related_name='fich', on_delete=models.CASCADE)
    cylindre = models.IntegerField()
    puissance = models.IntegerField()
    boite = models.BooleanField(default=True)
    desc = models.CharField(max_length=500)
    energie = models.CharField(max_length=100)
    nb_place = models.IntegerField()
    nb_door = models.IntegerField()


class EquipementTable(models.Model):
    nom = models.CharField(max_length=20)
    marque = models.CharField(max_length=200)
    img_url = models.CharField(max_length=500)
    prix = models.FloatField(default=0)


class AccessoiresTable(models.Model):
    nom = models.CharField(max_length=20)
    img_urle = models.CharField(max_length=500)
    prix = models.FloatField(default=0)

