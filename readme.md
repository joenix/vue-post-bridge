# vue-post-bridge

Communication between `Vue` and `window.open`

## Install

```sh
npm i vue-post-bridge
# or
yarn add vue-post-bridge
```

## 1. Use in `main.js`

```js
import vuePostBridge from "vue-post-bridge";

Vue.use(vuePostBridge);
```

## 2. Use component in `.vue`

```html
<!--
 @title { string } - title of
 @url { string } - route with same domain
 @option { json } - option of window.open
 @outer { boolean } - according to the outer window when set `true`
 @auto { boolean } - no button when set `true`
 !-->
<vue-post-bridge
  :title="title"
  :url="url"
  :option="option"
  :outer="false"
  :auto="false"
/>
```

## Register Action in `Vue`

```js
this.$registry({
  message(info) {
    console.log(`Get info from opener : ${info}`);
  }
});
```

## Use Action in `Opener`

```js
this.$charm("message", "hello world");
```
