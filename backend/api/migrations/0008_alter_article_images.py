# Generated by Django 5.0.7 on 2024-07-24 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_image_alter_article_image_remove_article_images_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='images',
            field=models.ManyToManyField(blank=True, related_name='articles', to='api.image'),
        ),
    ]