import React from 'react'

class Son extends React.Component{
    render() {
        return (
            <div>子组件：{this.props.msg}</div>    
        )   
    }
}

export default Son;