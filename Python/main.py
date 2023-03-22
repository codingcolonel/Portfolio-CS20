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
# score = 0

# # Question 1
# answer1 = input('Who is your teacher? ')
# if answer1 == 'Mr. V' or answer1 == 'Mr. Veldkamp':
#     print('correct')
#     score = score + 1
# else:
#     print('incorrect')

# # Question 2
# answer2 = input('What is 2 + 3? ')
# if answer2 == '5':
#     print('correct')
#     score = score + 1
# else:
#     print('incorrect')

# print(score)

# # Python Coin Flip Sim

# import random

# numHeads = 0
# numTails = 0

# n = 1
# while n <= 5:
#     randNum = random.randrange(1, 3)
#     print(randNum)
#     if randNum == 1:
#         numHeads += numHeads + 1
#     else:
#         numTails += 1

#     n += 1

# print('Number of heads = ', numHeads, 'Number of tails = ', numTails)

# for n in range(10):
#     print('hi')


# # Python Menu Loop

# # Main Program Loop
# loop = True
# while loop:
#     # Print Main Menu
#     print("\nMAIN MENU")
#     print("1: Option 1")
#     print("2: Option 2")
#     print("3: Option 3")
#     print("4: EXIT")

#     # Get Menu Selection from User
#     selection = input("Enter Selection (1-4): ")

#     # Take Action Based on Menu Selection
#     if selection == "1":
#         print("\nOption 1")
#     elif selection == "2":
#         print("Option 2")
#     elif selection == "3":
#         print("Option 3")
#     elif selection == "4":
#         print("EXIT")
#         loop = False
