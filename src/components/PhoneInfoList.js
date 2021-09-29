import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {

    static defaultProps = {  //디폴트값 설정, 이 설정이 없으면 에러
        data : []
    }

    render() {
        const { data , onRemove , onUpdate } = this.props;  //data 값을 props 로받아옴   //비구조화 할당

        //if (!data) return null;
        const list = data.map(      // data 라는 배열을 가져와서 map 함수를 통하여 JSX 로 변환
            info => (
                <PhoneInfo 
                    onRemove={onRemove}   
                    onUpdate={onUpdate}  
                    info={info} 
                    key={info.id} 
                />
            ) //key라는 고유값을 id 값으로 넣어줌
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;