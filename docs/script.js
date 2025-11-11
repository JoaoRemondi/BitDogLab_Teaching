// SPDX-License-Identifier: MIT
// Copyright (c) 2025, CodeMagic LTD

import { MessagePortTransport } from './message-port-transport.js';
import { WokwiClient } from './wokwi-client.js';

const diagram = `{
  "version": 1,
  "author": "Anonymous maker",
  "editor": "wokwi",
  "parts": [
    {
      "type": "wokwi-pi-pico",
      "id": "pico",
      "top": 73.65,
      "left": -15.6,
      "attrs": { "env": "micropython-20241129-v1.24.1" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r1",
      "top": 215.15,
      "left": -182.4,
      "attrs": { "value": "150" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r2",
      "top": 224.75,
      "left": -182.4,
      "attrs": { "value": "220" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r3",
      "top": 234.35,
      "left": -182.4,
      "attrs": { "value": "220" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn1",
      "top": 320.2,
      "left": 173,
      "rotate": 180,
      "attrs": { "color": "green", "xray": "", "bounce": "0" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn2",
      "top": 368.2,
      "left": 230.6,
      "rotate": 180,
      "attrs": { "color": "blue", "xray": "", "bounce": "0" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn3",
      "top": 368.2,
      "left": 115.4,
      "rotate": 180,
      "attrs": { "color": "red", "xray": "", "bounce": "0" }
    },
    {
      "type": "wokwi-pushbutton-6mm",
      "id": "btn4",
      "top": 26.6,
      "left": 38.4,
      "attrs": { "color": "green", "xray": "1" }
    },
    {
      "type": "wokwi-buzzer",
      "id": "bz1",
      "top": 26.1,
      "left": 158.1,
      "rotate": 90,
      "attrs": { "volume": "0.1" }
    },
    {
      "type": "board-ssd1306",
      "id": "oled1",
      "top": 204.74,
      "left": 144.23,
      "attrs": { "i2cAddress": "0x3c" }
    },
    {
      "type": "wokwi-analog-joystick",
      "id": "joystick1",
      "top": 322.2,
      "left": -146.8,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-rgb-led",
      "id": "rgb2",
      "top": 397.6,
      "left": 193.1,
      "attrs": { "common": "cathode" }
    },
    { "type": "wokwi-neopixel", "id": "rgb1", "top": 169.3, "left": -97, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb3", "top": 169.3, "left": -125.8, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb4", "top": 169.3, "left": -154.6, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb5", "top": 169.3, "left": -183.4, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb6", "top": 169.3, "left": -212.2, "attrs": {} },
    {
      "type": "wokwi-neopixel",
      "id": "rgb7",
      "top": 147.7,
      "left": -96.8,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb8",
      "top": 147.7,
      "left": -125.6,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb9",
      "top": 147.7,
      "left": -154.4,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb10",
      "top": 147.7,
      "left": -183.2,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb11",
      "top": 147.7,
      "left": -212,
      "rotate": 180,
      "attrs": {}
    },
    { "type": "wokwi-neopixel", "id": "rgb12", "top": 130.9, "left": -97, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb13", "top": 130.9, "left": -125.8, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb14", "top": 130.9, "left": -154.6, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb15", "top": 130.9, "left": -183.4, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb16", "top": 130.9, "left": -212.2, "attrs": {} },
    {
      "type": "wokwi-neopixel",
      "id": "rgb17",
      "top": 109.3,
      "left": -96.8,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb18",
      "top": 109.3,
      "left": -125.6,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb19",
      "top": 109.3,
      "left": -154.4,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb20",
      "top": 109.3,
      "left": -183.2,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-neopixel",
      "id": "rgb21",
      "top": 109.3,
      "left": -212,
      "rotate": 180,
      "attrs": {}
    },
    { "type": "wokwi-neopixel", "id": "rgb22", "top": 92.5, "left": -97, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb23", "top": 92.5, "left": -125.8, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb24", "top": 92.5, "left": -154.6, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb25", "top": 92.5, "left": -183.4, "attrs": {} },
    { "type": "wokwi-neopixel", "id": "rgb26", "top": 92.5, "left": -212.2, "attrs": {} }
  ],
  "connections": [
    [ "pico:GP11", "r1:2", "green", [ "h0" ] ],
    [ "pico:GP12", "r2:2", "green", [ "h0" ] ],
    [ "pico:GP13", "r3:2", "green", [ "h0" ] ],
    [ "oled1:VCC", "pico:3V3", "red", [ "v0" ] ],
    [ "btn1:1.r", "pico:GP10", "green", [ "v-2.8", "h-192", "v-144" ] ],
    [ "joystick1:HORZ", "pico:GP27", "violet", [ "v-28.8", "h172.8", "v-134.4", "h-9.6" ] ],
    [ "joystick1:SEL", "pico:GP22", "blue", [ "v-38.4", "h172.8", "v-96" ] ],
    [ "joystick1:VERT", "pico:GP26", "gold", [ "v-19.2", "h172.8", "v-134.4" ] ],
    [ "joystick1:VCC", "pico:3V3", "red", [ "v-9.6", "h172.8", "v-192" ] ],
    [ "pico:RUN", "btn4:1.r", "green", [ "h58.8", "v-172.8" ] ],
    [ "oled1:SDA", "pico:GP14", "white", [ "v-9.6", "h38.47", "v96", "h-115.2", "v-38.4" ] ],
    [ "oled1:SCL", "pico:GP15", "#8f4814", [ "v-19.2", "h57.9", "v115.2", "h-134.4", "v-38.4" ] ],
    [ "oled1:GND", "pico:GND.8", "black", [ "v-105.6", "h-124.8" ] ],
    [ "btn3:1.r", "pico:GP5", "green", [ "v0", "h-153.8", "v-259.2" ] ],
    [ "rgb2:R", "r3:1", "green", [ "v0", "h-384", "v-211.2" ] ],
    [ "rgb2:G", "r2:1", "green", [ "v19.2", "h-421.1", "v-240" ] ],
    [ "rgb2:B", "r1:1", "green", [ "v28.8", "h-440", "v-259.2" ] ],
    [ "bz1:2", "pico:3V3", "red", [ "h-28.8", "v57.2" ] ],
    [ "pico:GP21", "bz1:1", "purple", [ "h49.2", "v-153.6" ] ],
    [ "btn3:2.r", "pico:GND.5", "black", [ "h-9.8", "v-134.6" ] ],
    [ "btn1:2.r", "pico:GND.5", "black", [ "h-67.4", "v-86.6" ] ],
    [ "btn2:1.l", "pico:GND.5", "black", [ "h28.8", "v-86.4", "h-220.8", "v-67.2" ] ],
    [ "btn2:2.l", "pico:GP6", "green", [ "h0", "v-9.8", "h-326.4", "v-211.2" ] ],
    [ "joystick1:GND", "pico:GND.1", "black", [ "v-48", "h67.2", "v-144" ] ],
    [ "rgb2:COM", "pico:GND.1", "black", [ "v-0.4", "h-403.1", "v-240", "h134.4", "v-105.6" ] ],
    [ "rgb1:DOUT", "rgb3:DIN", "green", [ "h0" ] ],
    [ "rgb3:DOUT", "rgb4:DIN", "green", [ "h0" ] ],
    [ "rgb4:DOUT", "rgb5:DIN", "green", [ "h0" ] ],
    [ "rgb5:DOUT", "rgb6:DIN", "green", [ "h0" ] ],
    [ "rgb11:DOUT", "rgb10:DIN", "green", [ "h0" ] ],
    [ "rgb10:DOUT", "rgb9:DIN", "green", [ "h0" ] ],
    [ "rgb9:DOUT", "rgb8:DIN", "green", [ "h0" ] ],
    [ "rgb8:DOUT", "rgb7:DIN", "green", [ "h0" ] ],
    [ "rgb12:DOUT", "rgb13:DIN", "green", [ "h0" ] ],
    [ "rgb13:DOUT", "rgb14:DIN", "green", [ "h0" ] ],
    [ "rgb14:DOUT", "rgb15:DIN", "green", [ "h0" ] ],
    [ "rgb15:DOUT", "rgb16:DIN", "green", [ "h0" ] ],
    [ "rgb16:DOUT", "rgb21:DIN", "green", [ "h0" ] ],
    [ "rgb6:DOUT", "rgb11:DIN", "green", [ "h0" ] ],
    [ "rgb7:DOUT", "rgb12:DIN", "green", [ "h0" ] ],
    [ "rgb21:DOUT", "rgb20:DIN", "green", [ "h0" ] ],
    [ "rgb20:DOUT", "rgb19:DIN", "green", [ "h0" ] ],
    [ "rgb19:DOUT", "rgb18:DIN", "green", [ "h0" ] ],
    [ "rgb18:DOUT", "rgb17:DIN", "green", [ "h0" ] ],
    [ "rgb17:DOUT", "rgb22:DIN", "green", [ "h0" ] ],
    [ "rgb22:DOUT", "rgb23:DIN", "green", [ "h0" ] ],
    [ "rgb23:DOUT", "rgb24:DIN", "green", [ "h0" ] ],
    [ "rgb24:DOUT", "rgb25:DIN", "green", [ "h0" ] ],
    [ "rgb25:DOUT", "rgb26:DIN", "green", [ "h0" ] ],
    [ "rgb26:VSS", "rgb16:VSS", "black", [ "v0" ] ],
    [ "rgb16:VSS", "rgb6:VSS", "black", [ "v0" ] ],
    [ "rgb25:VSS", "rgb15:VSS", "black", [ "v0" ] ],
    [ "rgb15:VSS", "rgb5:VSS", "black", [ "v0" ] ],
    [ "rgb24:VSS", "rgb14:VSS", "black", [ "v0" ] ],
    [ "rgb14:VSS", "rgb4:VSS", "black", [ "v0" ] ],
    [ "rgb23:VSS", "rgb13:VSS", "black", [ "v0" ] ],
    [ "rgb13:VSS", "rgb3:VSS", "black", [ "v0" ] ],
    [ "rgb21:VSS", "rgb11:VSS", "black", [ "v0" ] ],
    [ "rgb19:VSS", "rgb9:VSS", "black", [ "v0" ] ],
    [ "rgb18:VSS", "rgb8:VSS", "black", [ "v0" ] ],
    [ "rgb17:VSS", "rgb7:VSS", "black", [ "v0" ] ],
    [ "rgb1:VSS", "rgb3:VSS", "black", [ "v8.7", "h-0.8" ] ],
    [ "rgb1:VSS", "rgb4:VSS", "black", [ "v8.7", "h-58.4" ] ],
    [ "rgb1:VSS", "rgb5:VSS", "black", [ "v8.7", "h-87.2" ] ],
    [ "rgb1:VSS", "rgb6:VSS", "black", [ "v8.7", "h-116" ] ],
    [ "rgb19:VSS", "rgb25:VSS", "black", [ "v0" ] ],
    [ "rgb20:VSS", "rgb26:VSS", "black", [ "v0" ] ],
    [ "rgb17:VSS", "rgb23:VSS", "black", [ "v0" ] ],
    [ "rgb1:VSS", "rgb11:VSS", "black", [ "v8.7", "h-144.8", "v-38.4" ] ],
    [ "rgb18:VSS", "rgb24:VSS", "black", [ "v0" ] ],
    [ "rgb6:VDD", "rgb26:VDD", "red", [ "h-9.6", "v-76.8" ] ],
    [ "rgb16:VDD", "rgb26:VDD", "red", [ "h-9.6", "v-38.4" ] ],
    [ "rgb16:VDD", "rgb22:VDD", "red", [ "h-9.6", "v-48", "h124.8" ] ],
    [ "rgb22:VDD", "rgb12:VDD", "red", [ "h0" ] ],
    [ "rgb12:VDD", "rgb1:VDD", "red", [ "h0" ] ],
    [ "rgb23:VDD", "rgb26:VDD", "red", [ "h0", "v-9.6", "h-96", "v9.6" ] ],
    [ "rgb23:VDD", "rgb13:VDD", "red", [ "h0" ] ],
    [ "rgb13:VDD", "rgb3:VDD", "red", [ "h0" ] ],
    [ "rgb24:VDD", "rgb26:VDD", "red", [ "h0", "v-9.6", "h-67.2", "v9.6" ] ],
    [ "rgb24:VDD", "rgb14:VDD", "red", [ "h0" ] ],
    [ "rgb14:VDD", "rgb4:VDD", "red", [ "h0" ] ],
    [ "rgb25:VDD", "rgb26:VDD", "red", [ "h0", "v-9.6", "h-38.4", "v9.6" ] ],
    [ "rgb25:VDD", "rgb15:VDD", "red", [ "h0" ] ],
    [ "rgb15:VDD", "rgb5:VDD", "red", [ "h0" ] ],
    [ "rgb7:VDD", "rgb17:VDD", "red", [ "h0" ] ],
    [ "rgb17:VDD", "rgb26:VDD", "red", [ "h0", "v-38.4", "h-144", "v9.6" ] ],
    [ "rgb3:VDD", "rgb9:VDD", "red", [ "h0" ] ],
    [ "rgb4:VDD", "rgb10:VDD", "red", [ "h0" ] ],
    [ "rgb5:VDD", "rgb11:VDD", "red", [ "h0" ] ],
    [ "rgb13:VDD", "rgb19:VDD", "red", [ "h0" ] ],
    [ "rgb14:VDD", "rgb20:VDD", "red", [ "h0" ] ],
    [ "rgb15:VDD", "rgb21:VDD", "red", [ "h0" ] ],
    [ "rgb8:VDD", "rgb1:VDD", "red", [ "h0" ] ],
    [ "rgb18:VDD", "rgb12:VDD", "red", [ "h0" ] ],
    [ "rgb1:VSS", "pico:GND.1", "black", [ "v-0.9", "h18.4", "v-76.8" ] ],
    [ "rgb1:DIN", "pico:GP7", "violet", [ "h0" ] ],
    [ "rgb7:VDD", "pico:3V3", "red", [ "h9.6", "v-96", "h163.2", "v57.6" ] ],
    [ "btn4:1.l", "pico:GND.1", "black", [ "h-67.2", "v76.8" ] ]
  ],
  "dependencies": {}
}`;

const microPythonCode = `
from machine import Pin, ADC, PWM, Timer, SoftI2C
from ssd1306 import SSD1306_I2C
import neopixel
import time

#Matriz de Leds
NUM_LEDS = 25       # 5x5 = 25 LEDs
PIN_LED = 7        # pino conectado ao DIN (ajuste conforme seu circuito)

# Inicializa a matriz
np = neopixel.NeoPixel(Pin(PIN_LED), NUM_LEDS)

# Acende todos em vermelho
for i in range(NUM_LEDS):
    np[i] = (255, 0, 0)
np.write()
time.sleep(0.1)

# Configuração dos botões
button_a = Pin(5, Pin.IN, Pin.PULL_UP)
button_b = Pin(6, Pin.IN, Pin.PULL_UP)
button_c = Pin(10, Pin.IN, Pin.PULL_UP)

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)

# Configuração dos pinos do joystick
vrx = ADC(Pin(27)) # Eixo X
vry = ADC(Pin(26)) # Eixo Y
sw = Pin(22, Pin.PULL_DOWN) # Botão

# Configuração dos pinos dos LEDs
led_r = PWM(Pin(12, Pin.OUT))
led_g = PWM(Pin(13, Pin.OUT))
led_b = PWM(Pin(11, Pin.OUT))

# Definição das frequências dos PWMs dos LEDs
led_r.freq(50)
led_g.freq(50)
led_b.freq(50)

def mostrar(texto):
    oled.fill(0)
    oled.text(texto, 0, 10)
    oled.show()

# Função para mapear o valor do joystick para o brilho do LED
def map_value(value, in_min, in_max, out_min, out_max):
  return int((value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

alto_falante = PWM(Pin(21))

notas = {
    'C4': 261,
    'D4': 294,
    'E4': 329,
    'F4': 349,
    'G4': 392,
    'A4': 440,
    'B4': 494,
    'C5': 523,
    'PAUSA': 0
}

musica = [
    ('C4', 1), ('C4', 1), ('G4', 1), ('G4', 1), ('A4', 1), ('A4', 1), ('G4', 2),
    ('F4', 1), ('F4', 1), ('E4', 1), ('E4', 1), ('D4', 1), ('D4', 1), ('C4', 2),
]

# Estado da música
indice = 0
tocando = False
timer = Timer()

def proximo_passo(t):
    global indice, tocando

    if not tocando:
        return

    if indice >= len(musica):
        alto_falante.duty_u16(0)
        indice = 0
        tocando = False
        return

    nota, duracao = musica[indice]
    freq = notas[nota]

    if freq > 0:
        alto_falante.freq(freq)
        alto_falante.duty_u16(32768)
    else:
        alto_falante.duty_u16(0)

    # Duracao base: 250ms por unidade
    tempo_ms = 250 * duracao

    # Agenda a próxima nota
    timer.init(mode=Timer.ONE_SHOT, period=tempo_ms, callback=proximo_passo)

    indice += 1

def iniciar_musica():
    global tocando, indice
    if not tocando:
        tocando = True
        indice = 0
        proximo_passo(None)  # inicia imediatamente

#iniciar_musica()
# Exemplo de uso
while True:

    if button_a.value() == 0:
        mostrar("Botao A pressionado")
    elif button_b.value() == 0:
        mostrar("Botao B pressionado")
    elif button_c.value() == 0:
        mostrar("Botao C pressionado")

    x_val = vrx.read_u16()
    y_val = vry.read_u16()

    # Mapeia os valores do joystick para os valores de PWM dos LEDs
    led_r.duty_u16(x_val)
    led_g.duty_u16(y_val)
    led_b.duty_u16(x_val // 2 + y_val // 2)

    if sw.value() == 0: # Se o botão do joystick for pressionado
        led_r.duty_u16(0)
        led_g.duty_u16(0)
        led_b.duty_u16(0)

    # Pequena pausa para não sobrecarregar o processador.
    time.sleep_ms(1)
    iniciar_musica()  # dispara a música sem bloquear

`;

const ssd1306 = `
#MicroPython SSD1306 OLED driver, I2C and SPI interfaces created by Adafruit

import time
import framebuf

# register definitions
SET_CONTRAST        = const(0x81)
SET_ENTIRE_ON       = const(0xa4)
SET_NORM_INV        = const(0xa6)
SET_DISP            = const(0xae)
SET_MEM_ADDR        = const(0x20)
SET_COL_ADDR        = const(0x21)
SET_PAGE_ADDR       = const(0x22)
SET_DISP_START_LINE = const(0x40)
SET_SEG_REMAP       = const(0xa0)
SET_MUX_RATIO       = const(0xa8)
SET_COM_OUT_DIR     = const(0xc0)
SET_DISP_OFFSET     = const(0xd3)
SET_COM_PIN_CFG     = const(0xda)
SET_DISP_CLK_DIV    = const(0xd5)
SET_PRECHARGE       = const(0xd9)
SET_VCOM_DESEL      = const(0xdb)
SET_CHARGE_PUMP     = const(0x8d)


class SSD1306:
    def __init__(self, width, height, external_vcc):
        self.width = width
        self.height = height
        self.external_vcc = external_vcc
        self.pages = self.height // 8
        # Note the subclass must initialize self.framebuf to a framebuffer.
        # This is necessary because the underlying data buffer is different
        # between I2C and SPI implementations (I2C needs an extra byte).
        self.poweron()
        self.init_display()

    def init_display(self):
        for cmd in (
            SET_DISP | 0x00, # off
            # address setting
            SET_MEM_ADDR, 0x00, # horizontal
            # resolution and layout
            SET_DISP_START_LINE | 0x00,
            SET_SEG_REMAP | 0x01, # column addr 127 mapped to SEG0
            SET_MUX_RATIO, self.height - 1,
            SET_COM_OUT_DIR | 0x08, # scan from COM[N] to COM0
            SET_DISP_OFFSET, 0x00,
            SET_COM_PIN_CFG, 0x02 if self.height == 32 else 0x12,
            # timing and driving scheme
            SET_DISP_CLK_DIV, 0x80,
            SET_PRECHARGE, 0x22 if self.external_vcc else 0xf1,
            SET_VCOM_DESEL, 0x30, # 0.83*Vcc
            # display
            SET_CONTRAST, 0xff, # maximum
            SET_ENTIRE_ON, # output follows RAM contents
            SET_NORM_INV, # not inverted
            # charge pump
            SET_CHARGE_PUMP, 0x10 if self.external_vcc else 0x14,
            SET_DISP | 0x01): # on
            self.write_cmd(cmd)
        self.fill(0)
        self.show()

    def poweroff(self):
        self.write_cmd(SET_DISP | 0x00)

    def contrast(self, contrast):
        self.write_cmd(SET_CONTRAST)
        self.write_cmd(contrast)

    def invert(self, invert):
        self.write_cmd(SET_NORM_INV | (invert & 1))

    def show(self):
        x0 = 0
        x1 = self.width - 1
        if self.width == 64:
            # displays with width of 64 pixels are shifted by 32
            x0 += 32
            x1 += 32
        self.write_cmd(SET_COL_ADDR)
        self.write_cmd(x0)
        self.write_cmd(x1)
        self.write_cmd(SET_PAGE_ADDR)
        self.write_cmd(0)
        self.write_cmd(self.pages - 1)
        self.write_framebuf()

    def fill(self, col):
        self.framebuf.fill(col)

    def pixel(self, x, y, col):
        self.framebuf.pixel(x, y, col)

    def scroll(self, dx, dy):
        self.framebuf.scroll(dx, dy)

    def text(self, string, x, y, col=1):
        self.framebuf.text(string, x, y, col)


class SSD1306_I2C(SSD1306):
    def __init__(self, width, height, i2c, addr=0x3c, external_vcc=False):
        self.i2c = i2c
        self.addr = addr
        self.temp = bytearray(2)
        # Add an extra byte to the data buffer to hold an I2C data/command byte
        # to use hardware-compatible I2C transactions.  A memoryview of the
        # buffer is used to mask this byte from the framebuffer operations
        # (without a major memory hit as memoryview doesn't copy to a separate
        # buffer).
        self.buffer = bytearray(((height // 8) * width) + 1)
        self.buffer[0] = 0x40  # Set first byte of data buffer to Co=0, D/C=1
        self.framebuf = framebuf.FrameBuffer1(memoryview(self.buffer)[1:], width, height)
        super().__init__(width, height, external_vcc)

    def write_cmd(self, cmd):
        self.temp[0] = 0x80 # Co=1, D/C#=0
        self.temp[1] = cmd
        self.i2c.writeto(self.addr, self.temp)

    def write_framebuf(self):
        # Blast out the frame buffer using a single I2C transaction to support
        # hardware I2C interfaces.
        self.i2c.writeto(self.addr, self.buffer)

    def poweron(self):
        pass


class SSD1306_SPI(SSD1306):
    def __init__(self, width, height, spi, dc, res, cs, external_vcc=False):
        self.rate = 10 * 1024 * 1024
        dc.init(dc.OUT, value=0)
        res.init(res.OUT, value=0)
        cs.init(cs.OUT, value=1)
        self.spi = spi
        self.dc = dc
        self.res = res
        self.cs = cs
        self.buffer = bytearray((height // 8) * width)
        self.framebuf = framebuf.FrameBuffer1(self.buffer, width, height)
        super().__init__(width, height, external_vcc)

    def write_cmd(self, cmd):
        self.spi.init(baudrate=self.rate, polarity=0, phase=0)
        self.cs.high()
        self.dc.low()
        self.cs.low()
        self.spi.write(bytearray([cmd]))
        self.cs.high()

    def write_framebuf(self):
        self.spi.init(baudrate=self.rate, polarity=0, phase=0)
        self.cs.high()
        self.dc.high()
        self.cs.low()
        self.spi.write(self.buffer)
        self.cs.high()

    def poweron(self):
        self.res.high()
        time.sleep_ms(1)
        self.res.low()
        time.sleep_ms(10)
        self.res.high()
`;

const outputText = document.getElementById('output-text');

window.addEventListener('message', (event) => {
  const client = new WokwiClient(new MessagePortTransport(event.data.port));

  client.addEventListener('wokwi:connected', async (event) => {
    console.log('Wokwi client connected', event.detail);
    await client.serialMonitorListen();
    await client.fileUpload('ssd1306.py', ssd1306);
    await client.fileUpload('main.py', microPythonCode);
    await client.fileUpload('diagram.json', diagram);
  });

  client.addEventListener('serial-monitor:data', (event) => {
    const rawBytes = new Uint8Array(event.detail.bytes);
    outputText.textContent += new TextDecoder().decode(rawBytes);
  });

  document.querySelector('.start-button').addEventListener('click', () => {
    client.simStart({
      firmware: 'main.py',
      elf: 'main.py',
    });
  });
});
console.log('Wokwi ESP32 MicroPython script loaded');
