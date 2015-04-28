# babel-plugin-react-hotify *(warning: alpha quality)*

>Note: this project is **unstable** and is a **work-in-progress evolution** of **[React Hot Loader](http://gaearon.github.io/react-hot-loader)**.  
>**Don't use it for real projects yet, use [React Hot Loader](http://gaearon.github.io/react-hot-loader) instead.**

Babel plugin that enables [react-hotify](https://github.com/gaearon/react-hotify) for all classes with `render()` method.  
Work in progress, alpha quality.  

Refer to [The Death of React Hot Loader](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4) for some context.

### Limitations

Only processes ES6 classes with `render` method.

### Usage

```
npm install --save-dev babel-plugin-react-hotify
```

and put

```
{
  "plugins": ["babel-plugin-react-hotify"]
}
```

in your `.babelrc`.

Make sure `babel` is the only Webpack loader you use, remove `react-hot` from there. Also make sure Webpack's HMR is enabled (same instructions as with React Hot Loader except for actually putting it in `loaders`).
