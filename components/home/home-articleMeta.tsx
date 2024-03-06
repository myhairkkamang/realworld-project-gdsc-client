import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomeArticleMeta = () => {
  return (
    <>
      <div className="article-meta">
        <Link href="/profile/eric-simons">
          <Image src="http://i.imgur.com/Qr71crq.jpg" alt="" />
        </Link>
        <div className="info">
          <Link href="/profile/eric-simons" className="author">
            Eric Simons
          </Link>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
    </>
  );
};

export default HomeArticleMeta;
