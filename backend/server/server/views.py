from django.http import JsonResponse
from django.utils import timezone
from polls import SaveToDb 

def incrementCounter (request) :
    timestamp = timezone.now()
    ip_address = request.META["REMOTE_ADDR"]
    agent_browser = request.META["HTTP_USER_AGENT"]

    #inserire chiamata metodo save click, che salva su db i dati del click
    result_count = SaveToDb.SaveClick({"timestamp": timestamp,"ip_address": ip_address, "agent_browser": agent_browser}) 

    #estrarre dal db il numero di righe (record)
    return JsonResponse({'response_text': result_count})


def clicksSoFar (request) : 
    counter = request.id

    return id
