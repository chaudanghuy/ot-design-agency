# Generated by Django 5.0.7 on 2024-07-25 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_page_content'),
    ]

    operations = [
        migrations.CreateModel(
            name='SliderImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
