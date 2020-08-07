from polls.models import click_info

def SaveClick(parameter_list):
    c = click_info(
        timestamp = parameter_list["timestamp"],
        agent_browser = parameter_list["agent_browser"],
        ip_address= parameter_list["ip_address"]
     )

    c.save()
    return click_info.objects.count()