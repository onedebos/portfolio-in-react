import React from "react";
import "../styles/Paginate.css";

const Paginate = ({ projectsPerPage, paginate, totalProjects }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalProjects / projectsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  const displayPageNumbers = pageNumbers.map(number => (
    <li key={number} className="page-item">
      <a onClick={() => paginate(number)} href="#!" className="page-link">
        {number === 1 ? (
          <div className="less">
            <div className="less-p">{"<<"}&nbsp;less</div>
            <div className="less-bg"></div>
          </div>
        ) : (
          <div className="more">
            <div className="more-p">more&nbsp;{">>"} </div>
            <div className="less-bg"></div>
          </div>
        )}
      </a>
    </li>
  ));

  return <div className="pagination-links">{displayPageNumbers}</div>;
};

export default Paginate;
