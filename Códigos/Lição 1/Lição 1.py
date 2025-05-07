from machine import Pin, SoftI2C, PWM
from ssd1306 import SSD1306_I2C
import neopixel
import time

#Parte 1
def Acender_Leds():
    # Número de LEDs na sua matriz 5x5
    NUM_LEDS = 25

    # Inicializar a matriz de NeoPixels no GPIO7
    np = neopixel.NeoPixel(Pin(7), NUM_LEDS)

    # Definindo a matriz de LEDs
    LED_MATRIX = [
    [24, 23, 22, 21, 20],
    [15, 16, 17, 18, 19],
    [14, 13, 12, 11, 10],
    [5, 6, 7, 8, 9],
    [4, 3, 2, 1, 0]
    ]

    #Cores básicas dos LED

    RED = (50, 0, 0)
    GREEN = (0, 50, 0)
    BLUE = (0, 0, 50)
    YELLOW = (30, 30, 0)
    MAGENTA = (30, 0, 30)
    CYAN = (0, 30, 30)
    WHITE = (25, 25, 25)
    BLACK = (0, 0, 0)


    Acender_leds = [2, 6, 14, 15, 23, 17, 21, 19, 10, 8]

    for led in Acender_leds:
        np[led] = BLACK  # RED
    np.write()

#Parte 2
def Escreve_na_tela():
    #Define pinos de entrada da tela
    i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
    
    #Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
    oled = SSD1306_I2C(128, 64, i2c)
    
    #Define o texto de entrada na posição (x,y) = (0,0) e acesso (valor 1)
    oled.text("Hello BitDoglab", 0, 0, 1)
    
    #Atualiza a tela
    oled.show()
def Troca_cor():
    # Configuração dos botões
    button_a = Pin(5, Pin.IN, Pin.PULL_UP)
    button_b = Pin(6, Pin.IN, Pin.PULL_UP)

    # Número de LEDs na sua matriz 5x5
    NUM_LEDS = 25

    # Inicializar a matriz de NeoPixels no GPIO7
    np = neopixel.NeoPixel(Pin(7), NUM_LEDS)

    # Definindo a matriz de LEDs
    LED_MATRIX = [
        [24, 23, 22, 21, 20],
        [15, 16, 17, 18, 19],
        [14, 13, 12, 11, 10],
        [5, 6, 7, 8, 9],
        [4, 3, 2, 1, 0]
    ]

    #Cores básicas dos LED

    RED = (50, 0, 0)
    GREEN = (0, 50, 0)
    BLUE = (0, 0, 50)
    YELLOW = (30, 30, 0)
    MAGENTA = (30, 0, 30)
    CYAN = (0, 30, 30)
    WHITE = (25, 25, 25)
    BLACK = (0, 0, 0)


    Acender_leds = [2, 6, 14, 15, 23, 17, 21, 19, 10, 8]

    while True:
    
        # Se o botão for pressionado a button_a.value passa a ter valor 0, logo temos uma mudança para a cor desejada
        if not button_a.value():
            for led in Acender_leds:
                np[led] = RED  # RED
            np.write()
            time.sleep(0.2)
        
        
        if not button_b.value():
            for led in Acender_leds:
                np[led] = GREEN  # GREEN
            np.write()
            time.sleep(0.2)
            
def beep():
    buzzer = PWM(Pin(21))  # Buzzer A conectado ao GPIO21
    
    # Primeiro tom
    buzzer.freq(311)
    buzzer.duty_u16(40000)
    time.sleep(1)
    buzzer.duty_u16(0)
    
def play_music():
    buzzer = PWM(Pin(21))
    ##Tabela Nota frequência

    #Nota         frequência
    #Sol (G)  G4    392.00
    #Lá (A)   A4    440.00
    #Si (B)   B4    493.88
    #Dó (C)   C5    523.25
    #Ré (D)   D5    587.33
    #Mi (E)   E5    659.26
    #Fá (F)   F5    698.46
    #Sol (G)  G5    783.99


    notes = [
        392, 392, 392, 311, 466, 392, 311, 466, 392,  # Primeira parte
        587, 587, 587, 622, 466, 369, 311, 466, 392,   # Segunda parte
        784, 392, 392, 784, 739, 698, 659, 622, 659,    # Terceira parte
        415, 554, 523, 493, 466, 440, 466,             # Quarta parte
        311, 369, 311, 466, 392                        # Final
    ]
    
    durations = [
        0.6, 0.6, 0.6, 0.4, 0.4, 0.4, 0.4, 0.4, 1,  # Durações da primeira parte
        0.6, 0.6, 0.6, 0.4, 0.4, 0.4, 0.4, 0.4, 1,  # Durações da segunda parte
        0.6, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 1,  # Durações da terceira parte
        0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 1,            # Durações da quarta parte
        0.4, 0.4, 0.4, 0.4, 1                        # Durações do final
    ]
    
    for note, duration in zip(notes, durations):
        buzzer.freq(round(note/4))
        #Controla o volume
        buzzer.duty_u16(1000)
        time.sleep(duration)
        buzzer.duty_u16(0)
        time.sleep(0.05)  # Pequena pausa entre as notas

#play_music()
#beep()
#Troca_cor()
Acender_Leds()
#Escreve_na_tela()