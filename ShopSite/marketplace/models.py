from django.db import models


class CarsTable(models.Model):
    marque = models.CharField(max_length=20)
    modele = models.CharField(max_length=200)
    annee = models.IntegerField()
    cylindre = models.IntegerField()
    puissance = models.IntegerField()
    couleur = models.CharField(max_length=20)
    boite = models.CharField(max_length=20)
    img = models.CharField(max_length=300)
    

    

    def __str__ (self):
        return self.modele


