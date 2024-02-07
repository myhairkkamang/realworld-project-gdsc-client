import Link from "next/link";

const HomeFeedToggle: React.FC = () => {
  return (
    <>
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <Link className="nav-link" href=""> 
              Your Feed
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" href="">
              Global Feed
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeFeedToggle;
