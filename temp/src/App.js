import "./App.css";
import Hello from "./Hello";

function App() {
  const arr = ["가", "나", "다", "라"];
  // const arr = [<Hello />, <Hello />, <Hello />, <Hello />];
  
  // map 풀어쓰기
  // const chagneArr=()=>{
  //   const newArr=[];
  //   for (const key in arr) {
  //    newArr.push(<Hello key={key} data={arr[key]}/>) ;
  //   }
  //   return newArr;
  // }

  const func =el=>el+'입니다';
  const newArr=arr.map(func)

  return (
    <>
    {/*  map 배열의 속성을 변경 */ }
      {newArr.map((el, index) => ( <Hello key={index} data={el} />))} 
      {/* {chagneArr()} */}
    </>
  );
}

export default App;
