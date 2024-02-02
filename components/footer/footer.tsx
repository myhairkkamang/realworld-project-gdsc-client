import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container">
        <Link href="/" className="logo-font">
          conduit{" "}
        </Link>
        <span className="attribution">
          An interactive learning project from{" "}
          <Link href="https://thinkster.io">Thinkster</Link>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </>
  );
};

export default Footer;
