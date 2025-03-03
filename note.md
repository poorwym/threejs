
Code Snippets：https://gist.github.com/adrianhajdin/b1d33c262941a7e21aad833a1cfc84b1
Assets, Components, Public folders：https://drive.google.com/drive/folders/1KVU8iaH0E_JFtShNiR3BgCSA3pawXY4Z?usp=share_link
项目地址
https://github.com/adrianhajdin/project_3D_developer_portfolio

```bash
npm create vite@latest . -- --template react
```

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

index.css中加入
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
npm install --legacy-peer-deps @react-three/drei @react-three/fiber maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```
这些库的作用如下：

1. **@react-three/drei 和 @react-three/fiber**：
   - 这两个库是用于在React中集成Three.js的工具
   - Three.js是一个强大的3D图形库，可以在浏览器中创建和显示3D内容
   - @react-three/fiber提供了React渲染器，使Three.js能够在React环境中工作
   - @react-three/drei提供了一系列有用的Three.js组件和辅助工具

2. **maath**：
   - 一个数学工具库，用于处理3D图形中的数学计算
   - 提供了向量、矩阵等数学运算函数

3. **react-tilt**：
   - 一个React组件，用于创建倾斜效果
   - 当用户鼠标悬停在元素上时，元素会根据鼠标位置产生倾斜动画效果

4. **react-vertical-timeline-component**：
   - 用于创建垂直时间轴的React组件
   - 常用于展示项目经历、工作经验等按时间顺序排列的内容

5. **@emailjs/browser**：
   - 一个客户端发送电子邮件的库
   - 允许直接从浏览器发送电子邮件，无需服务器端代码

6. **framer-motion**：
   - 一个用于React的动画库
   - 提供了声明式的API来创建流畅的动画和过渡效果

7. **react-router-dom**：
   - React的路由库
   - 用于在单页应用(SPA)中管理导航和URL
   - 允许创建多页面的用户体验，而不需要实际刷新页面



```bash
npm install --legacy-peer-deps three
```

``bash
npm run dev
```



