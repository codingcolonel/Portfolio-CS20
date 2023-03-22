# Distance Calculator Python

# Get coordinates from user
x1 = float(input('Enter x1 value: '))
y1 = float(input('Enter y1 value: '))
x2 = float(input('Enter x2 value: '))
y2 = float(input('Enter y2 value: '))

# Process
dist = ((x2 - x1)**2 + (y2 - y1)**2)**0.5

# Output distance
print('Distance between two points is: ', dist)
