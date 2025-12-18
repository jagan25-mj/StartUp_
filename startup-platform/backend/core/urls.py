from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),
]

# Admin site customization
admin.site.site_header = 'Startup Platform Admin'
admin.site.site_title = 'Startup Platform'
admin.site.index_title = 'Dashboard'
