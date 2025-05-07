from machine import Pin
import time

led = Pin(13, Pin.OUT) # led RGB cor azul

def duty_cycle(ciclo_total, tempo_ligado):
    led.value(1) 
    time.sleep(tempo_ligado)
    led.value(0)
    time.sleep(ciclo_total - tempo_ligado)

while True:
    # 100Hz → (1/100)s = 0,01s total de ciclo
    # Vamos simular duty cycle mudando tempos manualmente
    duty_cycle(0.01, 0.007)  # 70% de brilho