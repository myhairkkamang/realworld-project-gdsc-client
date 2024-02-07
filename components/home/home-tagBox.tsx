// interface PopularTagProps {
//   tags: string[];
// }

// const PopularTag = ({ tags }: PopularTagProps) => {
//   return (
//     <div className="tag-list">
//       {tags.map((tag) => (
//         <a href="" className="tag-pill tag-default">
//           {tag}
//         </a>
//       ))}
//     </div>
//   );
// };

// popular tags를 가져오는 알고리즘 필요

const HomeTagBox = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="sidebar">
          <p>Popular Tags</p>
          <div className="tag-list">
            <a href="" className="tag-pill tag-default">
              programming
            </a>
            <a href="" className="tag-pill tag-default">
              javascript
            </a>
            <a href="" className="tag-pill tag-default">
              emberjs
            </a>
            <a href="" className="tag-pill tag-default">
              angularjs
            </a>
            <a href="" className="tag-pill tag-default">
              react
            </a>
            <a href="" className="tag-pill tag-default">
              mean
            </a>
            <a href="" className="tag-pill tag-default">
              node
            </a>
            <a href="" className="tag-pill tag-default">
              rails
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTagBox;
