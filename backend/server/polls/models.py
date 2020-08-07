from django.db import models

#from django.db import models


class click_info (models.Model):
    timestamp = models.DateTimeField('date published')
    ip_address = models.CharField(max_length=255)
    agent_browser = models.CharField(max_length=255)

def __str__(self):
        return self.agent_browser + self.ip_address


#from pools.