# Python quiz in Python

# Score variable
score = 0

# First Question
print('What year did Python first appear')
q1ans = input('Q1 Answer: ')

if q1ans == '1991':
    print('Correct')
    score += 1
else:
    print('Incorrect')

# Second Question
print('True or false: Python is a static typed language')
q2ans = input('Q2 Answer: ')

if q2ans == 'False' or q2ans == 'f':
    print('Correct')
    score += 1
else:
    print('Incorrect')

# Third Question
print('Who is the creator of Python')
q3ans = input('Q3 Answer: ')

if q3ans == 'Guido van Rossum' or q3ans == 'Guido':
    print('Correct')
    score += 1
else:
    print('Incorrect')

# Fourth Question
print('True or false: Python, C# and Javascript are refered to as object-oriented languages')
q4ans = input('Q4 Answer: ')

if q4ans == 'True' or q4ans == 't':
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
