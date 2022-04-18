import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalCheck from './components/DigitalCheck';
import CommentBox from './components/CommentBox';
import React from "react";
import CommentList from './components/ComponentList';
import ThemeContext  from './theme-context';
import ThemedBar from './components/ThemedBar';


const themes={
  light:{
      classname: 'btn btn-primary',
      bgColor: '#eeeeee',
      color: '#000'
  },
  dark:{
      classname: 'btn btn-light',
      bgColor: '#222222',
      color: '#fff'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply'],
      tags: ['aaa', 'bbb', 'ccc'],
      theme: 'light'
    }

    this.addComment = this.addComment.bind(this)
  }

  addComment(comment){
    this.setState({
      comments: [...this.state.comments,comment]
    })
  }

  changeTheme(theme){
    this.setState({
      theme,
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
      <div className="App">
        <NameCard name="zwy" number={12345678} isHuman tags={this.state.tags} />
        <LikesButton />
        <DigitalCheck />
        <p className="">评论列表</p>
        <CommentList comments={this.state.comments} />
        <CommentBox
          commentsLength={this.state.comments.length}
          onAddComment= {this.addComment} />
        <a href="#theme-switcher"  className='btn btn-light' onClick={()=>this.changeTheme('light')}>浅色主题</a>
        <a href="#theme-switcher"  className='btn btn-secondary' onClick={()=>this.changeTheme('dark')}>深色主题</a>
        <ThemedBar/>
      </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
