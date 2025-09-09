set_length = int(input('Введіть бажану довжину масиву: '))
numbers = [i for i in range(set_length)]
even_numbers_counter = 0
even_numbers = []

for number in numbers:
    print(f'елемент {numbers.index(number)}, значення {number}')
    
for number in numbers:
    if number % 2 == 0:
        even_numbers_counter += 1
        even_numbers.append(number)
        
print('кількість простих чисел = ', even_numbers_counter)
print('їх сумма дорівнює ', sum(even_numbers))

arithmetical_mean = sum(numbers) / set_length
numbers_greater_than_arithmetical_mean = 0

for number in numbers:
    if number > arithmetical_mean:
        numbers_greater_than_arithmetical_mean += 1

print('середнє арифметичне цього масиву становить ', arithmetical_mean)        
print('кількість чисел більших за середнє арифметичне масиву = ', numbers_greater_than_arithmetical_mean)
