from django.shortcuts import render
from .models import Movie
from .models import Show
from .models import Seat
from .models import Booking, Seat, Show
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.shortcuts import  get_object_or_404

from django.shortcuts import  get_object_or_404


from django.shortcuts import  get_object_or_404
from collections import defaultdict


from datetime import date, timedelta, datetime

def funky(request, movie_id):

    movie = get_object_or_404(Movie, id=movie_id)

    # selected date
    selected_date = request.GET.get('date')

    if selected_date:
        selected_date = datetime.strptime(selected_date, "%Y-%m-%d").date()
    else:
        selected_date = date.today()

    # next 7 days
    dates = [date.today() + timedelta(days=i) for i in range(7)]

    # get all shows for movie
    shows_qs = Show.objects.filter(movie=movie)

    # ✅ get all theatres (even if no show today)
    all_theatres = shows_qs.values_list('theatre', flat=True).distinct()

    # filter selected date
    today_shows = shows_qs.filter(date=selected_date).order_by('theatre', 'time')

    shows = defaultdict(list)

    # add shows
    for show in today_shows:
        shows[show.theatre].append(show)

    # ✅ add empty theatres also
    for theatre in all_theatres:
        shows.setdefault(theatre, [])

    shows = dict(shows)

    hours = movie.duration // 60
    minutes = movie.duration % 60
    movie_runtime = f"{hours}:{minutes:02d}"

    return render(request, "funky.html", {
        "movie": movie,
        "movie_runtime": movie_runtime,
        "shows": shows,
        "dates": dates,
        "selected_date": selected_date
    })




def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('/interface/')
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})

    return render(request, 'login.html')


def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        User.objects.create_user(username=username, password=password)
        return redirect('/login/')

    return render(request, 'signup.html')


from django.contrib.auth.decorators import login_required

@login_required(login_url='/login/')
def book_seats(request):
    if request.method == 'POST':
        seat_ids = request.POST.get('seats')
        show_id = request.POST.get('show_id')

        if not seat_ids:
            return render(request, 'error.html', {'msg': 'No seats selected'})

        seat_list = seat_ids.split(',')
        seats = Seat.objects.filter(id__in=seat_list)

        total_price = seats.count() * Show.objects.get(id=show_id).price

        booking = Booking.objects.create(
            user=request.user,
            show_id=show_id,
            total_amount=total_price
        )

        seats.update(is_booked=True)

        request.session['booking_id'] = booking.id

        return render(request, 'payment.html', {'amount': total_price})


from .models import Show   # your show model

def seat_selection(request, show_id):

    show = get_object_or_404(Show, id=show_id)

    context = {
        "show": show
    }

    return render(request, "seat_selection.html", context)


@login_required
def show_list(request, movie_id):
    movie = Movie.objects.get(id=movie_id)
    shows = Show.objects.filter(movie=movie)
    cast = movie.cast_members.all()

    return render(request, 'shows.html', {
        'movie': movie,
        'shows': shows,
        'cast': cast
    })




def home(request):
    movies = Movie.objects.all()
    return render(request, 'home.html', {'movies': movies})

def movies(request):
    return render(request, 'movies.html')

def sampleseat(request):
    return render(request, 'seat_selection.html')

def payment(request):
    return render(request,'payment.html')

def confirmation(request):
    return render(request, 'confirmation.html')

def aboutus(request):
    return render(request, 'aboutus.html')

def anaganaga(request):
    return render(request, 'anaganaga.html')

def barabar(request):
    return render(request, 'barabar.html')

def bartha(request):
    return render(request, 'bartha.html')

def border2(request):
    return render(request, 'border2.html')

def confirmation(request):
    return render(request, 'confirmation.html')

def contact(request):
    return render(request, 'contact.html')

def dhurandhar(request):
    return render(request, 'dhurandhar.html')

def euphoria(request):
    return render(request, 'euphoria.html')



def honey(request):
    return render(request, 'honey.html')

def interface(request):
    return render(request, 'interface.html')

def kingdom(request):
    return render(request, 'kingdom.html')

def learnmore(request):
    return render(request, 'learnmore.html')

def manashankara(request):
    return render(request, 'manashankara.html')

def contact(request):
    return render(request, 'contact.html')

def movies(request):
    return render(request, 'movies.html')

def og(request):
    return render(request, 'og.html')

def payment(request):
    return render(request, 'payment.html')

def rajasaab(request):
    return render(request, 'rajasaab.html')

def sampleseat(request):
    return render(request, 'sampleseat.html')

def selection(request):
    return render(request, 'selection.html')

def shows(request):
    return render(request, 'shows.html')

def straykids(request):
    return render(request, 'straykids.html')

def tester(request):
    return render(request, 'tester.html')

def thesecondwind(request):
    return render(request, 'thesecondwind.html')

def vadh2(request):
    return render(request, 'vadh2.html')

def withlove(request):
    return render(request, 'withlove.html')

