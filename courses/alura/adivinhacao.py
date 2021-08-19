print("---------------------------------")
print("Welcome to the Guessing Game!")
print("---------------------------------")

secret_number = 42

kick_str = input("Enter a number: ")
print("You typed ", kick_str)
kick = int(kick_str)

right = kick == secret_number
greater = kick > secret_number
less = kick < secret_number

if right:
    print("Congratulations! You did it!")
else:
    if greater:
        print("Your kick was greater than secret number!")
    elif less:
        print("Your kick was less than secret number!")
print("Game Over")


contador = 1
while(contador <= 10):
    print(contador)  # 1, 3, 7, 9
    contador = contador + 2  # 3, 5
    if(contador == 5):
        contador = contador + 2  # 7
