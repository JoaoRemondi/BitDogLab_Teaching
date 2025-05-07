from machine import Pin, PWM
import time

# Considere a cor azul como sendo amarelo
led_verde = Pin(11, Pin.OUT)
led_amarelo = Pin(13, Pin.OUT)
led_vermelho = Pin(12, Pin.OUT)

def set_rgb(vermelho, amarelo, verde):
    """ Ativa ou desativa os LEDs RGB (cátodo comum) """
    led_vermelho.value(vermelho)
    led_amarelo.value(amarelo)
    led_verde.value(verde)

# Função para tocar um beep no buzzer
def beep():
    buzzer = PWM(Pin(21))  # Buzzer A no GPIO21
    buzzer.freq(311)  # Define a frequência do som
    buzzer.duty_u16(40000)  # Volume máximo (0 a 65535, 40000 já é alto)
    time.sleep(1)  # Duração do som
    buzzer.duty_u16(0)  # Desliga o som

# Definição do botão (ajuste conforme necessário)
botao = Pin(5, Pin.IN, Pin.PULL_UP)

def semaforo():
    while True:
        # Mantém o semáforo verde até que o botão seja pressionado
        set_rgb(0, 0, 1)  # Apenas o verde aceso
        while botao.value() == 1:
            pass  # Espera o botão ser pressionado
        
        # Luz amarela por 8 segundos com beeps
        set_rgb(0, 1, 0)  # Apenas o amarelo aceso
        for _ in range(4):
            beep()
            time.sleep(1)
        
        # Luz vermelha por 12 segundos
        set_rgb(1, 0, 0)  # Apenas o vermelho aceso
        time.sleep(6)  # Primeiros 6 segundos sem piscar
        
        # Últimos 6 segundos piscando vermelho e bipando
        for _ in range(6):
            set_rgb(1, 0, 0)  # Vermelho ligado
            beep()
            set_rgb(0, 0, 0)  # Apaga tudo
            time.sleep(1)

# Inicia o semáforo
semaforo()
