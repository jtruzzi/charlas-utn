import requests # Ejecutar: "pip3 install requests" o "pip install requests" para instalar la libreria
import datetime
import time

response = requests.get("https://www.valordolarblue.com.ar/data.json?ts={}".format(time.time()))
cotizaciones = sorted(
    response.json(), 
    key=lambda cotizacion: datetime.datetime.strptime(cotizacion["fecha"], '%Y-%m-%d'), 
    reverse= True
)

print()
print("Últimas cotizaciones")
print()
for cotizacion in cotizaciones[0:5]:
    print("{}: ${}".format(cotizacion["fecha"], cotizacion["blue_venta"]))

print()
cotizacion_actual = cotizaciones[0]
ultima_mayor = None
for cotizacion in cotizaciones:
    if (cotizacion_actual["blue_venta"] < cotizacion["blue_venta"]):
        ultima_mayor = cotizacion
        break
if (ultima_mayor == None):
    print("Máximo historico!")
else:
    print("La última cotizacion mayor a ${} fue el {}".format(cotizacion_actual["blue_venta"], ultima_mayor["fecha"]))
print()
