import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;
  
  state = {
    information : [],
  }

  handleCreate = (data) => { //date 를 파라미터로 받아옴  //자식 컴포넌트에 전달해줄 메소드 //화살표 함수의 this 는 외부함수(부모함수)의 this 를 상속
    //console.log(data);
    const { information } = this.state;                       //리액트애서는 state 내부의 값을 직접적으로 수정하면 절대로 안됨
    this.setState({                                           //concat, slice, map, filter 같은 함수를 사용해야함
      information: information.concat(Object.assign({},data,{ //기존에 있던 배열을 수정하지않고 새로운 배열에 데이터를 넣어 불변성을 유지
        //...data,
        id: this.id++   //고유아이디값 설정(key값)
      }))
    });
  }

  handleRemove = (id) => {
    const { information } = this.state; //비구조화 할당
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }



  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList 
          data={this.state.information} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
