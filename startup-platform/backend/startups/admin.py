from django.contrib import admin
from .models import Startup


@admin.register(Startup)
class StartupAdmin(admin.ModelAdmin):
    """Admin for Startup model"""
    
    list_display = ['name', 'founder', 'stage', 'industry', 'is_active', 'created_at']
    list_filter = ['stage', 'industry', 'is_active', 'created_at']
    search_fields = ['name', 'description', 'founder__email']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('founder', 'name', 'description')
        }),
        ('Details', {
            'fields': ('stage', 'industry', 'required_skills')
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
    )
    
    readonly_fields = ['created_at', 'updated_at']