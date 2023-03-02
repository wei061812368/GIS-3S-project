# 安装conda环境

## 安装conda

可以使用anaconda或miniconda作为conda环境

以miniconda为例，在官网提供了一个即点即用的安装器，可以自行下载：

https://docs.conda.io/en/latest/miniconda.html

python版本可选3.7或3.8（无所谓其实）

## 创建环境

conda提供了“环境”，用于区分不同的工作/开发场景，因此，也建议在本课程的学习中建立一个独立的环境。

下面一行指令可以通过交大源建立一个名为`devgis`的Python3.7 conda环境：

```shell
conda create -n devgis python=3.7 -c https://mirrors.sjtug.sjtu.edu.cn/anaconda/cloud/conda-forge -y
```

conda安装的国内镜像配置，实现快速下载：https://juejin.cn/post/6844903988324728840



进入刚刚创建好的环境：

```shell
activate devgis
```



利用阿里云源安装geopandas：

```shell
pip install -i https://mirrors.aliyun.com/pypi/simple/ geopandas==0.10.2
```

如遇到安装问题，可以通过https://www.lfd.uci.edu/~gohlke/pythonlibs/直接下载对应库的.whl文件进行安装，比如GDAL、Fiona。



输入指令`python`进入python命令行，执行命令查看是否成功安装geopandas（成功会输出版本号：'0.10.2'）

```python
import geopandas as gpd;gpd.__version__
```

输入`exit()`退出python命令行



安装ipympl

ipympl包是matplotlib开发组专门为Jupyter环境开发的交互式后端，利用Jupyter Widget实现功能，项目地址为https://github.com/matplotlib/ipympl

```shell
conda install -c https://mirrors.sjtug.sjtu.edu.cn/anaconda/cloud/conda-forge ipympl
或者
pip install -i https://mirrors.aliyun.com/pypi/simple/ ipympl
```



# 安装Jupyter Notebook

## 安装

在conda命令行下输入（注意还是devgis环境）：

```shell
conda install -c https://mirrors.sjtug.sjtu.edu.cn/anaconda/cloud/conda-forge jupyter
或者
pip install -i https://mirrors.aliyun.com/pypi/simple/ jupyter
```

直至出现 `done` 即可



## 配置

为了使Jupyter可以使用之前创建的环境，还需要安装一个插件：

```shell
conda install -c https://mirrors.sjtug.sjtu.edu.cn/anaconda/cloud/conda-forge nb_conda
```



在命令行下继续输入命令：

```shell
jupyter notebook --generate-config
```

可见输出

```shell
Writing default config to: C:\Users\Username\.jupyter\jupyter_notebook_config.py
```

说明jupyter的默认配置被输出到了 `C:\Users\Username\.jupyter\jupyter_notebook_config.py` 文件中（具体路径以各自输出为准）

【配置是个性化的，可以按需设置】

## 启动

启动指定目录：https://blog.csdn.net/mighty13/article/details/112646335

在命令行中输入：

```shell
jupyter notebook 
```

即可启动jupyer，默认浏览器会新建一个jupyter页面

点击New: Notebook: Python [conda env:devgis]即可新建笔记本

