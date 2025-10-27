import re

# arr = [11, 120, 1320, 4210, 5340, 62250, 756740, 8012341, 94530, 10630]

# output = [
#     num
#     for num in arr
#     if ((num // 10) % 10) % 2 == 0
# ]

# output.sort(reverse=True)
# print(output)


# print("hello", end="-")
# print("world")

# n = int(input())
# arr = list(map(int, input().split()))
# def find_missing(n, arr):
#     total = n * (n + 1) // 2
#     sum_of_arr = sum(arr)
#     return total - sum_of_arr
# print(find_missing(n, arr))

# arr = list(map(int, input().split()))
# reversed_arr = arr[::-1]
# print(reversed_arr)

# arr = list(map(int, input().split()))
# set_arr = list(set(arr))
# set_arr.sort()
# print(set_arr[-2])

# arr = list(map(int, input().split()))
# arr.sort()
# print(arr)

# arr = list(map(int, input().split()))
# output = []
# for x in arr:
#     if arr.count(x) != 1:
#         if x not in output:
#             output.append(x)
# print(output)

# arr1 = list(map(int, input().split()))
# arr2 = list(map(int, input().split()))
# arr1_set = set(arr1)
# arr2_set = set(arr2)
# common_elements = list(arr1_set | arr2_set)
# common_elements.sort()
# print(common_elements)

# arr = list(map(int, input().split()))
# k = int(input())
# n = len(arr)
# k = k % n
# arr[:] = arr[-k:] + arr[:-k]
# print(arr)

# n = int(input())
# for i in range(2,n//2):
#     if n%i==0:
#         print("Not Prime")
#         break
# else:
#     print("Prime")

# quantity = int(input())
# distance = int(input())

# if quantity > 0 and distance > 0:
#     fuel_cost1 = (quantity * 100) / distance
#     print(f"{fuel_cost1:.2f} liters per 100 km")
#     fuel_cost2 = (distance * 0.6214) / (quantity * 0.2642)
#     print(f"{fuel_cost2:.2f} miles per gallon")
# else:
#     print("Invalid input. Quantity and distance must be positive numbers.")

# noOfPizzas = int(input("Enter number of Pizzas bought: "))
# noOfPuffs = int(input("Enter number of Puffs bought: "))
# noOfColdDrinks = int(input("Enter number of Cold Drinks bought: "))

# costOfPizza = 100
# costOfPuffs = 20
# costOfColdDrinks = 10

# print("Bill Details")
# print(f"No. of Pizzas: {noOfPizzas}")
# print(f"No. of Puffs: {noOfPuffs}")
# print(f"No. of Cold Drinks: {noOfColdDrinks}")
# print(f"Total Price: {(costOfPizza*noOfPizzas) + (costOfPuffs*noOfPuffs) + (costOfColdDrinks*noOfColdDrinks)}")
# print("ENJOY THE SHOW!!!")

# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())

# print(a, ":", chr(a))
# print(b, ":", chr(b))
# print(c, ":", chr(c))
# print(d, ":", chr(d))


# cse = int(input("Enter the no of students placed in CSE: "))
# ece = int(input("Enter the no of students placed in ECE: "))
# mech = int(input("Enter the no of students placed in MECH: "))

# if cse < 0 or ece < 0 or mech < 0:
#     print("Input is Invalid")
# elif (cse == ece) and (ece == mech):
#     print("None of the departments has got the highest placement")
# a = max(cse, ece, mech)
# if a == cse:
#     print("CSE has got the highest placement")
# if a == ece:
#     print("ECE has got the highest placement")
# if a == mech:
#     print("MECH has got the highest placement")


# lower = int(input())
# upper = int(input())    

# def isPrime(num):
#     if num < 2:
#         return False
#     for i in range(2, num):
#         if num % i == 0:
#             return False
#     return True

# for i in range(lower, upper + 1):
#     if isPrime(i):
#         print(i)

# str1 = input("Enter a string: ")
# str2 = str1[::-1]

# print(str1 == str2)

# str1 = "helco"
# listStr1 = list(str1)
# str2 = ""
# listStr2 = sorted(listStr1)
# count = 0
# for a,b in zip(listStr1, listStr2):
#     if a != b:
#         count += 1

# print(count)

# Problem: You are given a string s containing blanks ('_') and an integer n. Your task is to count the total number of ways to fill the blanks such that the resultant string becomes a valid palindrome. Since the result can be large, return the answer modulo n.

N = int(input())
arr = list(map(int, input().split()))
K = int(input())

#if i,j in arr are such that j = i+k and arr[i] + arr[j] is even, count such pairs
count = 0
n = len(arr)
for i in range(n):
    for j in range(i+1, n):
        if j - i == K and (arr[i] + arr[j]) % 2 == 0:
            count += 1