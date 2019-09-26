import os


for i in os.listdir('.'):
    if i.__contains__('lv'):
        os.renames(i,i+'.jpg')
