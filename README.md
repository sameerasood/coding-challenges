## Coding Challenges for Tech Interview Prep

### 1. Missing Number

    Given an array of numbers from 1 to n, one number is missing.
    Write a function to find the missing number.

    Input - an array of integers
    output - single integer

    summation formula - n*(n+1)/2

    test case 1:
    input => [2]
    output => 2

    test case 2:
    input => [1,3]
    output => 2

    test case 3:
    input => [1,4,5,3,2,7,9,8]
    output => 6

    Edge cases - Array has a non-integer or an empty array

### 2. Prime number checker

    Write a function that checks if a given number is prime (only divisible by 1 and itself).

    input - number
    output - string telling whether the number is prime or not.

    test case 1:
    input: 2
    output - 2 is a prime number

    input: 4
    output: 4 is not a prime number

    edge cases - numbers less than or equal to 1

### 3. Fibonacci Sequence:

    Write a function that generates the Fibonacci sequence up to a given number n.
    The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.

    input type = number
    output type = array

    test case:1
    input = 2
    output = [0,1]

    test case:2
    input = 3
    output = [0,1,1]

    test case:3
    input = 5
    output = [0,1,1,2,3]

### 4. Reverse a string

    Write a function that takes a string as input and returns the string reversed.

    input - string
    output - reversed string

    test case 1:
    input: "a"
    output: "a"

    test case 2:
    input: "an"
    output: "na"

    test case 3:
    input: "interview"
    output: "weivretni"

    edge cases:

    1. empty string
    2. wrong data type

### 5. Remove duplicates

    Write a function that takes an array of numbers or strings and removes any duplicate values.

    input: an array of numbers or strings
    output: array with 0 duplicate elements

    test case 1:
    input: [1]
    output: [1]

    test case 2:
    input: [1,1]
    output: [1]

    test case 3:
    input: [1,2,3,2,4]
    output: [1,2,3,4]

### 6. Palindrome Checker:

    Write a function that checks if a given string is a palindrome
    (reads the same forwards and backwards),ignoring spaces and punctuation.

    input: string
    output: Yes/no

    test case 1:
    input: "I"
    output: Yes, it is a palindrome

    test case 2:
    input: "noon"
    output: Yes, it is a palindrome

    test case 3:
    input: "none"
    output: No, it is not a palindrome
