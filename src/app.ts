import {createApp} from 'vue'
import {Button, Toast, Cell, Icon, Avatar, Swiper, TextArea, Uploader,Layout ,InfiniteLoading,Steps   } from "@nutui/nutui-taro";
import '@nutui/nutui-taro/dist/style.css';
import './app.scss'




// import { createUI } from 'taro-ui-vue3'
// 引用全部组件样式
// import 'taro-ui-vue3/dist/style/index.scss'


const App = createApp({
    onShow(options) {
    },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

})

// 引用全部组件
App
    .use(Button).use(Toast).use(Cell).use(Icon).use(Avatar).use(Swiper).use(TextArea).use(Uploader).use(Layout ).use(InfiniteLoading ).use(Steps )

export default App
