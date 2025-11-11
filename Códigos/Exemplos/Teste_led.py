from machine import Pin
import neopixel
from utime import sleep

# --- CONFIGURAÇÃO ---
NUM_LEDS = 25       # 5x5 = 25 LEDs
PIN_LED = 7        # pino conectado ao DIN (ajuste conforme seu circuito)

# Inicializa a matriz
np = neopixel.NeoPixel(Pin(PIN_LED), NUM_LEDS)

# --- LOOP PRINCIPAL ---
while True:
    # Acende todos em vermelho
    for i in range(NUM_LEDS):
        np[i] = (255, 0, 0)
    np.write()
    sleep(1)
    
    # Acende todos em verde
    for i in range(NUM_LEDS):
        np[i] = (0, 255, 0)
    np.write()
    sleep(1)
    
    # Acende todos em azul
    for i in range(NUM_LEDS):
        np[i] = (0, 0, 255)
    np.write()
    sleep(1)
    
    # Apaga todos
    for i in range(NUM_LEDS):
        np[i] = (0, 0, 0)
    np.write()
    sleep(1)