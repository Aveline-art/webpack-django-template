from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'server/index.html')

def test(request):
    return render(request, 'server/test.html')