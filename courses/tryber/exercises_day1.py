a = 10
b = 5
a + b
a - b
a * b
a / b
a // b
a ** b
a % b

hours = 6
minutes = hours * 60
seconds = minutes * 60
minutes
seconds

books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic
cost

trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da Computação")
trybe_course[0] = "Fundamentos"

var = set()
var.add("Lauro Cesar")
var

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

#  erro de sintaxe object.key

info["recorrente"] = "Sim"
del info["origem"]


my_list = [20, 20, 1, 2];
count_elements = {
    20: 2,
    1: 1,
    2: 2
}

number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
result



ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings



ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0: # se o resto é zero, é divisível
        print(f'{rating} é múltiplo de 3')

#  função recebe dois números e retorna o maior deles
def bigger(number, other):
    if other > number:
        return other
    return number

#  média aritmética dos valores contidos em uma lista
def avg(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

#  programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n
def square(n):
    for row in range(n):
        print(n * '*')

#  lista de nomes e retorne o nome com a maior quantidade de caracteres
def greater_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name

#  Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).
def paints(area):
    price = 80
    liters = area / 3
    required = liters // 18
    if liters % 18:
        required += 1
    return required, required * price

import math
def costs(area):
    price = 80
    liters = area / 3
    required = math.ceil(liters / 18)
    return required, required * price

#  função que receba os três lados de um triângulo e informe qual o tipo de triâgulo formado ou "não é triangulo" , caso não seja possível formar um triângulo
def triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"

#  Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 3
def min(numbers):
    smaller: numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
        return smaller

def minimum(numbers):
    return min(numbers)

minimum = min

#  Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n=5 o triângulo terá 5 asteriscos na base
def half_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')

