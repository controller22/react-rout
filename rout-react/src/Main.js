import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const goTempPage = () => {
    navigate("/temp");
  };
  return (
    <div>
      <div>메인페이지</div>
      {/* <Link to={"/temp"}>임시페이지로 이동</Link> */}
      <button onClick={goTempPage}>임시페이지로 이동</button>
    </div>
  );
}
