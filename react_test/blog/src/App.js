import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // useState를 쓰면 array [a, b]가 나옴
  // a -> 데이터 ('남자 코트 추천')
  // b -> 데이터를 정정하기 위한 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']); 
  let [titles, titles_change] = useState(['제목1', '제목2', '제목3']);
  let [great, great_change] = useState(0);

  function 제목바꾸기(){
    // 글제목에 있던 0번째 데이터를 여자코트 추천으로 바꿈 
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  let posts = '강남 고기 맛집';
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h4> { 글제목[0] } <span onClick={() => { great_change(great + 1) }}>👍</span> { great } </h4>
        <p>9월 15일</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { titles[0] } </h4>
        <p>9월 15일</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { titles[1] } </h4>
        <p>9월 15일</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { titles[2] } </h4>
        <p>9월 15일</p>
        <hr/>
      </div>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
