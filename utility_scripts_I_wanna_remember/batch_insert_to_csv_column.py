import csv, sys, random
cids = [701829, 32086821185414, 419344, 22144, 660822, 756597474414199, 304466804484872]
data = []
with open('order_messages_demo.csv', "rb") as file:
	reader = csv.reader(file, delimiter=',')
	for index, row in enumerate(reader):
		if index is 0: 
			new_row = ['cid:Int32']
		else: 
			new_row = [random.choice(cids)]
		for column in row:
			new_row.append(column)
		data.append(new_row)

# print(random.choice(data))
	with open('new_csv.csv', "wb") as write_file: 
		write = csv.writer(write_file, delimiter=",")
		for newer_row in data:
			write.writerow(newer_row)