###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!


import random


def generateCode():
    digits = list(range(10))
    random.shuffle(digits)
    return digits[:3]


def checkGuess(code, guess):
    if (code[0] == int(guess[0]) and code[1] == int(guess[1]) and code[2] == int(guess[2])):
        return "You win!"
    elif (code[0] == int(guess[0]) or code[1] == int(guess[1]) or code[2] == int(guess[2])):
        return "Match!"
    elif (code[0] == int(guess[0]) or code[0] == int(guess[1]) or code[0] == int(guess[2])):
        return "Close!"
    elif (code[1] == int(guess[0]) or code[1] == int(guess[1]) or code[1] == int(guess[2])):
        return "Close!"
    elif (code[2] == int(guess[0]) or code[2] == int(guess[1]) or code[2] == int(guess[2])):
        return "Close!"
    else:
        return "Nope"


result = ''

print("Welcome Code Breaker! Let's see if you can guess my 3 digit number!")

code = generateCode()
print(code)

print("Code has been generated. Please enter a 3 digit number.")

while result != 'You win!':
    guess = input("What is your guess?\n")

    result = checkGuess(code, guess)

    print("Your result is:")
    print(result)

# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!
