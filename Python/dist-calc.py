# Distance Calculator Python

# Welcome
print('WELCOME TO THE DISTANCE CALCULATOR!')

# Get coordinates from user
x1 = float(input('\nEnter x1 value: '))
y1 = float(input('Enter y1 value: '))
x2 = float(input('Enter x2 value: '))
y2 = float(input('Enter y2 value: '))

# Process
dist = ((x2 - x1)**2 + (y2 - y1)**2)**0.5

# Output distance
print('\nDistance between two points is: ', dist)
