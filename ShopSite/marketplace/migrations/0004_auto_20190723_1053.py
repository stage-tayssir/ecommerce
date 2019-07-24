# Generated by Django 2.2.3 on 2019-07-23 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0003_carstable_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='carstable',
            name='desc',
            field=models.CharField(default=' ', max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='carstable',
            name='prix',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]