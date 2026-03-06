from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view, name='login'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('interface/', views.interface, name='interface'),
    path('aboutus/', views.aboutus, name='aboutus'),
    path('contact/', views.contact, name='contact'),
    path('learnmore/', views.learnmore, name='learnmore'),
    path('home/', views.home, name='home'),
    path('movie/<int:movie_id>/', views.show_list, name='show_list'),
    path('funky/<int:movie_id>/', views.funky, name='funky'),  # ✅ only this
    path('seats/<int:show_id>/', views.seat_selection, name='seat_selection'),
    path('book/', views.book_seats, name='book_seats'),
    path('confirmation/', views.confirmation, name='confirmation'),
    path('', views.movies, name='movies'),
    path('sampleseat/', views.sampleseat, name='sampleseat'),
    path('payment/', views.payment, name='payment'),
    path('confirmation/', views.confirmation, name='confirmation'),
]

