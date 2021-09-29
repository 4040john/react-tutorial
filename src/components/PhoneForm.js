import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',
    }

    handelChange = (e) => { //e 라는 이벤트 객체를 파라미터로 받아옴
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => { //React 에서 이벤트 핸들러 함수를 바인드할때 화살표 함수를 사용
        e.preventDefault(); //submit 버튼이 눌리면 기본적으로 새로고침이 되어 그것을 방지
        this.props.onCreate(this.state); //props로 부모컴포넌트(APP)으로 부터 onCreate를 받아 호출**
        this.setState({  //등록후 state값 초기화
            name:'',
            phone:'',
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name" //여러가지 input을 관리하기위해 각각의 name 설정
                    placeholder="이름" 
                    onChange={this.handelChange} 
                    value={this.state.name}
                />
                <input 
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handelChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;