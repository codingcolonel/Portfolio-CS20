# Python quiz in Python

# Welcome
print('WELCOME TO THE PYTHON QUIZ')

# Score variable
score = 0

# First Question
print('1. What year did Python first appear')
q1ans = input('Q1 Answer: ').lower()

if q1ans == '1991':
    print('Correct')
    score += 1
else:
    print('Incorrect')

# Second Question
print('2. True or false: Python is a statically typed language')
q2ans = input('Q2 Answer: ').lower()

if q2ans == 'false' or q2ans == 'f':
    print('Correct')
    score += 1
else:
    print('Incorrect')

# Third Question
print('3. Who is the creator of Python')
q3ans = input('Q3 Answer: ').lower()

if q3ans == 'guido van rossum' or q3ans == 'guido':
    print('Correct')
    score += 1
else:
    print('Incorrect')

# Fourth Question
print('4. True or false: Python, C# and Javascript are refered to as object-oriented languages')
q4ans = input('Q4 Answer: ').lower()

if q4ans == 'true' or q4ans == 't':
    print('Correct')
    score += 1
else:
    print('Incorrect')

# Output score and feedback
percentage = int(score / 4 * 100)

print('YOUR RESULTS:')
print(score, ' / 4 ', '(', percentage, '%)')

if score == 0:
    print('You need to study!')
elif score == 1:
    print('Better luck next time!')
elif score == 2:
    print('You can do better!')
elif score == 3:
    print('Good job!')
else:
    print('Perfect!')
