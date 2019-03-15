main.js就是通过 npx webpack这个指令将所有的js打包后生成的。所以在index.html中只需要引用main.js就可以啦

默认是main.js 可以通过cli设置输出npx webpack --config webpack.config.js，比如这里指定了配置文件

考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便，我们可以设置一个快捷方式。在 package.json 添加一个 npm 脚本(npm script)：