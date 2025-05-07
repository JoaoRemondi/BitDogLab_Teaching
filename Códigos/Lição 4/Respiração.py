from machine import Pin
import time

led = Pin(13, Pin.OUT) # led RGB cor azul

tempo_do_pulso = 0

def duty_cycle(ciclo_total, tempo_ligado):
    led.value(1) 
    time.sleep(tempo_ligado)
    led.value(0)
    time.sleep(ciclo_total - tempo_ligado)

ciclo_total = 0.01  # 10 ms (equivalente a 100 Hz)

while True:
    # Aumenta o brilho
    tempo_do_pulso = 0
    while tempo_do_pulso <= ciclo_total:
        duty_cycle(ciclo_total, tempo_do_pulso)
        tempo_do_pulso += 0.00005  # passo pequeno para suavizar

    # Diminui o brilho
    tempo_do_pulso = ciclo_total
    while tempo_do_pulso >= 0:
        duty_cycle(ciclo_total, tempo_do_pulso)
        tempo_do_pulso -= 0.00005  # passo pequeno para suavizar