import React from 'react';

class Welcome extends React.Component{
    render(){
        const isLogin = true
        console.log(<p>test createElement</p>)
        return (
            <div className='this' htmlFor='htmlfor'>
                {isLogin ? this.coursera() : <p>Sorry, you should login first</p>}
            </div>
        )
    }

    coursera(){
        const todoList = ['learn react','learn redux']
        return (
            <div>
                <h1>Hello React</h1>
                <p>Next is your coursera</p>
                <u1>
                    {
                        todoList.map(item => <li>{item}</li>)
                    }
                </u1>
            </div>
        )
    }
}

export default Welcome