from . import *
class Resources:
    def __init__(self) -> None:
        self.CPU = CPU()
        self.memory = Memory()
        self.disk = Disk()
        self.network = Network()
        self.proccesses = Processes()
    
