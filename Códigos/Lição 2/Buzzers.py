from machine import Pin, PWM
import time

def beep():
    buzzer = PWM(Pin(21))  # Buzzer A conectado ao GPIO21
    
    # Define a frequência do som
    buzzer.freq(311)
    # Define o volume ( de 0 a 40000, sendo 40000 o máximo)
    buzzer.duty_u16(40000)
    # Toca por 1 segundo
    time.sleep(1)
    # Desliga o som
    buzzer.duty_u16(0)
    
beep()