import re
from typing import List
from django.shortcuts import render
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic import View, TemplateView, ListView, DetailView, CreateView, DeleteView, UpdateView
from .models import School, Student

def index(request):
    return render(request, 'index.html')

class CBView(View):
    def get(self, request):
        return HttpResponse("class based view")
    
    
class IndexView(TemplateView):
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['context'] = 'Basic TemplateView context'
        return context
    
    
class SchoolListView(ListView):
    context_object_name = 'schools'
    model = School
    
    
class SchoolDetailView(DetailView):
    context_object_name = 'school_detail'
    model = School
    template_name = 'basic_app/school_detail.html'
    
    
class SchoolCreateView(CreateView):
    model = School
    fields = ['name', 'principal', 'location']
    
    
class SchoolUpdateView(UpdateView):
    model = School
    fields = ['name', 'principal']
    
class SchoolDeleteView(DeleteView):
    model = School
    success_url = reverse_lazy("basic_app:list")