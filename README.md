## Thunder Component

* 可作为独立组件应用到任何项目当中
* 可以放到Page Builder页面中，并支持属性编辑
* 可以作为一个独立页面运行


## 项目结构规范

```sh
#动态打包构建结果目录，构建时自动生成
/dist
#运行代码示例的目录
/examples  
#组件包源代码目录，经过babel转换后自动生成
/lib
#项目依赖安装目录，npm install时自动生成
/node_modules
#源代码目录，项目基础结构，里面列的文件必须按照这个结构存在，其他可按照自己的需求安排。
/src
    #export组件的文件，必须存在
    index.js
    #Page Builder属性配置代码存放的目录
    /props
        #export 属性组件文件
        index.js
#git忽略文件列表
.gitignore
#npm忽略文件列表
.npmignore
#babel转换配置
babel.config.js
#包锁文件
package-lock.json
#包信息描述
package.json
#文档
README.md
#动态打包任务配置
webpack.config.js
#eamples任务配置
webpack.example.js
```

以上目录结构为项目的基础结构，开发者开发目录为/src目录，你将在这里完成你组件逻辑的开发。
**/src/props** 开发此组件在Page Builder里可编辑的属性，在 **/src/props/index.js** 输出属性配置。

上面的目录结构会被我们的构建工具自动引用，请不要调整这些文件的结构，但你可以根据需要增加自己需要的文件和目录