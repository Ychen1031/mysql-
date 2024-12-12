print('hello world')

def draw_christmas_tree(height):
    for i in range(height):
        print(' ' * (height - i - 1) + '*' * (2 * i + 1))
    print(' ' * (height - 1) + '|')

# 設定聖誕樹的高度
tree_height = 7
draw_christmas_tree(tree_height)