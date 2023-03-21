# Python Input-Output
# Input
# name = input('What is your name? ')
# time_of_day = input('What time of day is it? ')

# Output
# print('hello ' + name)
# print('have a great ' + time_of_day)


# Python Simple-Calc
# num1 = float(input('Enter a number: '))
# num2 = float(input('Enter another number:  '))

# total = num1 + num2

# print('The sum of the two numbers is', total)


# Python Simple Quiz Start

# Score
score = 0

# Question 1
answer1 = input('Who is your teacher? ')
if answer1 == 'Mr. V' or answer1 == 'Mr. Veldkamp':
    print('correct')
    score = score + 1
else:
    print('incorrect')

# Question 2
answer2 = input('What is 2 + 3? ')
if answer2 == '5':
    print('correct')
    score = score + 1
else:
    print('incorrect')

print(score)
