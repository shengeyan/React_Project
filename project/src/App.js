import React from 'react'
import './App.css';
import { v4 as uuid } from "uuid";
import Son from './Son'
import Texts from './Text'

// const string=[
// {id:1,name:'八嘎八嘎'},
// {id:2,name:'哟西哟西'},
// {id:3,name:'哇哈哇哈'},
// ]

// 1.函数组件
// 2.类组件
class Hello extends React.Component{

  state = {
    count : 0,
    list: [1,2,3],
    person: {
       name:'jack',
       age:18
    },
    id:uuid,
  }

  render(h) {
    return <div>莫西莫西:h</div>
  }
}

// 事件绑定：传参采用箭头函数变形
// 赋值：采用setState方法
// 实例属性：state对象{键值对}
// this指向修正：三种方法
// React状态不可变
// createRef 非受控组件
// ID：uuid插件 
// 数据传输：mobx redux hook
// 父传子：props
// 子传父：函数
// props校验 prop-types




// function App() {
//   return (
//     <div className="App">
//       {/* <ul>
//         {string.map(string=><li>{string.name}</li>)}
//       </ul> */}
//       <Hello ></Hello>
//       <Son msg={this.state.msg}>父组件</Son>
//     </div>
//   );
// }

class App extends React.Component {
  state={
    msg:'moximoxi'
  }

  render() {
    return (
      <>
      <Son msg={this.state.msg}>父组件</Son>
      <Texts></Texts>
      </>
    )
  }
}


export default App;
