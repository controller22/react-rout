import { Link } from "react-router-dom";

export default function Temp() {
  return (
    <div>
      <div>임시페이지</div>
      <Link to={"/"}>메인페이지로 이동</Link>
    </div>
  );
}
