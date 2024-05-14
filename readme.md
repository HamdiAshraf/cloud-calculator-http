your task is to implement a cloud calculator using the HTTP module

the request url form will be: /[operation]?a=[num1]&b=[num2]

the calculator must have the following operations
add: send a + b
subtract: send a - b
multiply: send a \* b
divide: send a / b

example:
http://localhost:3000/add?a=3&b=6
response => 9
