#maxaltfilms
#website/views.py

from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class HomePageView(TemplateView):
	# you can use the get method
    # def get(self, request, **kwargs):
    #     return render(request, 'index.html', context=None)
    # or you can use the template_name method
    template_name = 'index.html'

# add a view with a template
class AboutPageView(TemplateView):
	template_name = 'about.html'