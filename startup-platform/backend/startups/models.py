from django.db import models
from django.conf import settings


class Startup(models.Model):
    """Startup model for storing startup information"""
    
    STAGE_CHOICES = [
        ('IDEA', 'Idea Stage'),
        ('MVP', 'MVP Stage'),
        ('EARLY', 'Early Stage'),
        ('GROWTH', 'Growth Stage'),
        ('SCALE', 'Scale Stage'),
    ]
    
    founder = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='startups'
    )
    name = models.CharField(max_length=255)
    description = models.TextField()
    stage = models.CharField(max_length=10, choices=STAGE_CHOICES, default='IDEA')
    industry = models.CharField(max_length=100)
    required_skills = models.JSONField(default=list, blank=True)
    
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'startups'
        verbose_name = 'Startup'
        verbose_name_plural = 'Startups'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.name