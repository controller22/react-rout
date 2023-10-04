import { useEffect, useState } from "react";
import Item from "./item";

function App() {
  // 원칙 상 컴포넌트 내부 변수는 state로 만드는것이 좋다
  const [searchValue, setSearchValue] = useState("");
  
  // 렌더링 시마다 변경되는 변수라면
  // 렌더링 시 안바뀌게 하려면 state사용
  // 상관 x 일반 변수로 사용
  const randomNumber = Math.random();
  
  const changeSearchValue = (event) => {
    setSearchValue((prev) => event.target.value);
  };

  const [movieList, setMovieList] = useState([]);

  // useEffect(실행할 함수,감지할 상태 리스트);

  useEffect(()=>{
    // console.log("통신");
    fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230930")
    .then(res=>res.json())
    .then((result)=>{
      setMovieList(prev=>result.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  useEffect(()=>{
    console.log("상태 변경");
  },[searchValue])

  return (
    <div>
      <div>{randomNumber}</div>
      <input
        value={searchValue}
        onChange={changeSearchValue}
        placeholder="검색어를 입력해주세요"
      />
      <ul>
        {movieList
          .filter((el) => el.movieNm.includes(searchValue))
          .map((el, index) => (
            <Item key={index} data={el.movieNm} />
          ))}
      </ul>
    </div>
  );
}

export default App;
