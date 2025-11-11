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
from machine import Pin
import time

led = Pin(11, Pin.OUT)

def duty_cycle(ciclo_total, tempo_ligado):
    led.value(1) 
    time.sleep(tempo_ligado)
    led.value(0)
    time.sleep(ciclo_total - tempo_ligado)

while True:
    # 100Hz → (1/100)s = 0,01s total de ciclo
    # Vamos simular duty cycle mudando tempos manualmente
    duty_cycle(0.01, 0.007)  # 70% de brilho
`;

const outputText = document.getElementById('output-text');

window.addEventListener('message', (event) => {
  const client = new WokwiClient(new MessagePortTransport(event.data.port));

  client.addEventListener('wokwi:connected', async (event) => {
    console.log('Wokwi client connected', event.detail);
    await client.serialMonitorListen();
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
