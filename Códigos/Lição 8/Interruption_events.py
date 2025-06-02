from machine import Pin
import time

# Definindo LED
led = Pin(12, Pin.OUT)

# Função que será chamada automaticamente quando o botão for pressionado
def alternar_led(pin):
    led.toggle()  # Inverte o estado do LED (liga ou desliga)
    print("Botão pressionado!")

# Botão
botao = Pin(5, Pin.IN, Pin.PULL_UP)

botao.irq(trigger=Pin.IRQ_FALLING, handler=alternar_led)

while True:
    print("Esperando o botão...")
    time.sleep(1)
