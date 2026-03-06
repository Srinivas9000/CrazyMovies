from django.contrib import admin
from .models import Movie, Show, Seat, Booking
from .models import Cast


admin.site.register(Show)
admin.site.register(Seat)
admin.site.register(Booking)
@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'duration')


@admin.register(Cast)
class CastAdmin(admin.ModelAdmin):
    list_display = ('name', 'movie', 'role')
