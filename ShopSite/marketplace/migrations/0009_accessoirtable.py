# Generated by Django 2.2.2 on 2019-07-26 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0008_carstable_prix'),
    ]

    operations = [
        migrations.CreateModel(
            name='AccessoirTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=20)),
                ('marque', models.CharField(max_length=200)),
                ('img_url', models.CharField(max_length=300)),
                ('prix', models.FloatField(default=0)),
            ],
        ),
    ]
