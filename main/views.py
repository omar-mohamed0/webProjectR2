from django.shortcuts import render
from django.contrib.auth.models import User
from django.core.files.uploadedfile import UploadedFile
# Create your views here.


def home(request):

    return render(request, 'main/home.html')


def dashboard(request):
    # Get all users, ordered by date joined (newest first)
    users = User.objects.all().order_by('-date_joined')

    # Get the last registered user
    last_registered_user = users.first() if users else None

    context = {
        'users': users,
        'last_registered_user': last_registered_user
    }

    return render(request, 'main/dashboard.html', context)

def appropriteplants(request):

    return render(request, 'main/appropriteplants.html')



def plant_health_check(request):
    response_message = None
    image_name = None  # To display the name of the uploaded image

    if request.method == "POST" and request.FILES.get("image"):
        uploaded_image = request.FILES["image"]  # Get the uploaded image
        image_name = uploaded_image.name  # Get the file name (optional)

        # Perform some logic with the uploaded image
        # For now, we simply set a fixed response
        response_message = "Your plant has a pest."
    context = {
        "response_message": response_message,
        "image_name": image_name
    }
    return render(request, "main/plant_health_check.html", context )