# Simulation of 2 six sided dice

# Import random library
import random


# Dice variables
# dice1 = 0
# dice2 = 0
# sum = 0

# Dice Roll Object
class dice_roll():
    # Initialize object
    def __init__(self):
        self.dice1 = random.randrange(1, 7)
        self.dice2 = random.randrange(1, 7)
        self.sum = self.dice1 + self.dice2


# d1 = dice_roll()
# d2 = dice_roll()

# print(d1.dice1, ',', d1.dice2,
#       ' (sum:', d1.sum, ')')
# print(d2.dice1, ',', d2.dice2,
#       ' (sum:', d2.sum, ')')

loop = True
while (loop):
    # Print Menu
    print('\nDice Roll Simulatator Menu')
    print('1. Roll Dice Once')
    print('2. Roll Dice Five Times')
    print("3. Roll Dice 'n' Times")
    print('4. Roll Dice until Snake Eyes')
    print('5. Exit')

    # Get selection
    selection = input('Select an option (1-5): ')

    # Effectuate menu selection
    if selection == '1':
        # Create new object
        obj = dice_roll()
        print(obj.dice1, ',', obj.dice2, ' (sum:', obj.sum, ')')
    elif selection == '2':
        for n in range(5):
            # Create new object
            obj = dice_roll()
            print(obj.dice1, ',', obj.dice2, ' (sum:', obj.sum, ')')
    elif selection == '3':
        num = int(input('How many rolls would you like? '))
        for n in range(num):
            # Create new object
            obj = dice_roll()
            print(obj.dice1, ',', obj.dice2, ' (sum:', obj.sum, ')')
    elif selection == '4':
        # Track how many rolls it takes
        numRolls = 1

        # First roll must be runn before loop due to reference issues
        obj = dice_roll()
        print(obj.dice1, ',', obj.dice2, ' (sum:', obj.sum, ')')

        while (obj.sum != 2):
            obj = dice_roll()
            print(obj.dice1, ',', obj.dice2, ' (sum:', obj.sum, ')')
            numRolls += 1

        print('SNAKE EYES! It took', numRolls, ' rolls to get snake eyes.')
    elif selection == '5':
        print("EXIT")
        loop = False
