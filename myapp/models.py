from django.db import models
from django.contrib.auth.models import User

class Movie(models.Model):
    title = models.CharField(max_length=200)
    language = models.CharField(max_length=50)
    duration = models.IntegerField()
    poster = models.ImageField(upload_to='posters/')

    description = models.TextField()
    trailer_url = models.URLField(blank=True, null=True)


    def __str__(self):
        return self.title
    
class Cast(models.Model):
    movie = models.ForeignKey('Movie', on_delete=models.CASCADE, related_name='cast_members')
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='cast/')

    def __str__(self):
        return self.name




# Show Model (Movie + Date + Time)
class Show(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    price = models.IntegerField()
    theatre = models.CharField(max_length=100,blank=True, null=True)

    def __str__(self):
        return f"{self.movie.title} - {self.date} - {self.time}"


# Seat Model
class Seat(models.Model):
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=5)
    is_booked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.seat_number} - {self.show}"


# Booking Model
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    booking_time = models.DateTimeField(auto_now_add=True)
    total_amount = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.show}"
