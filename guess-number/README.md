# 笔记

## Modulize

模块化对于制作游戏是非常重要的，尽可能地抽离代码，防止重复代码。

一般来说游戏可以分成几个模块：`init`, `gameStart`, `render`, `interact events handler`。其他更加细节的部分根据规则确定。

## Separating the game information from the display

将游戏画面与数据分离，游戏画面使用 render 渲染。