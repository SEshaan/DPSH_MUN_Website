x = open("./input.txt","r").read().split("\n")
y = []
final = ""


for i in x:
    y = i.split("\t")
    final += (f'(" ","{y[0]}","{y[1]}","{y[2].split("-")[0] + y[2].split("-")[1]}"),')

print(final)