class conversion:
    def int2roman(self, N):
        inte = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        rome = ["M", "CM", "D", "CD","C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        num = ''
        i = 0
        while  N > 0:
            for _ in range(N // inte[i]):
                num = num + rome[i]
                N = N - inte[i]
            i += 1
        return num


print(conversion().int2roman(152))
print(conversion().int2roman(234))
print(conversion().int2roman(89))
print(conversion().int2roman(500))
print(conversion().int2roman(269))
print(conversion().int2roman(542))

