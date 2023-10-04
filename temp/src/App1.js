import Hello from "./Hello";
import Layout from "./Layout";

function App1() {
  const arr = ["가", "나", "다", "라"];

  return (
    <Layout>
      <>App1에서 작성한 영역</>
      {arr.map((el, index) => (
        <Hello key={index} data={el} />
      ))}
    </Layout>
  );
}

export default App1;
