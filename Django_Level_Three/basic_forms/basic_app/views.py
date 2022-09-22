from django.shortcuts import render
from . import forms

def index(request):
    return render(request, 'basic_app/index.html')

def form_name_view(request):
    form = forms.FormName()
    
    if request.method == 'post':
        form = forms.FormName(request.POST)
        
        if form.is_valid():
            print("Success!")

    return render(request, 'basic_app/form_page.html', {'form': form})