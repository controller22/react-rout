function Layout(props) {
  return (
    <div>
      <div>레이아웃에서 작성한 영역</div>
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
