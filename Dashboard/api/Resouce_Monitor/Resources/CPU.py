import psutil
import platform

class CPU:

    def __init__(self) -> None:
        pass
        
    @property
    def type(self): 
        return platform.processor()
    
    @property
    def p_cores(self):
        return psutil.cpu_count(logical=False)

    @property
    def t_cores(self): 
        return psutil.cpu_count(logical=True)
    
    @property 
    def max_freq(self):
        return psutil.cpu_freq().max
    
    @property
    def min_freq(self):
        return psutil.cpu_freq().min

    @property
    def current_freq(): 
        return psutil.cpu_freq().current
    
    @property
    def usage_percent():
        return psutil.cpu_percent()

    @property
    def temps():
        return psutil.sensors_temperatures() \
            if hasattr(psutil, 'sensors_temperatures') else {}
 