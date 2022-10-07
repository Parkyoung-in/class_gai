from cgi import test 

testCase = list()

testCase.append([3,4])
testCase.append([27,19])
def solution(num1,num2):
    tempvar = num1 * num2
    answer = tempvar
    return answer


for temp1, temp2 in testCase:
    solution(temp1, temp2)