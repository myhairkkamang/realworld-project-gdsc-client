const HomePagination = () => {
  return (
    <>
      <ul className="pagination">
        <li className="page-item active">
          <a className="page-link" href="">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="">
            2
          </a>
        </li>
      </ul>
    </>
  );
};

// 페이지네이션은 article 목록수에 맞춰서 자동으로 다음 페이지와 버튼이 생성되도록

export default HomePagination;
