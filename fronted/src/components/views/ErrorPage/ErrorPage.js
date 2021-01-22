import React from 'react';
import './ErrorPage.scss';

function ErrorPage() {
  return (
    <div className="error_page_wrap">
      <div className="container">
      <h2 className="title">요청하신 페이지를 찾을 수 없습니다.</h2>
      <div>
        <p> 404 ERROR </p>
      </div>
    </div>
    </div>
  );
}

export default ErrorPage;