# Generated by Django 2.2.3 on 2019-07-23 09:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0004_auto_20190723_1053'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carstable',
            name='desc',
        ),
        migrations.RemoveField(
            model_name='carstable',
            name='prix',
        ),
    ]