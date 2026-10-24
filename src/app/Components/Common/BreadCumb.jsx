import Link from "next/link";

const BreadCumb = ({ Title }) => {
  return (
    <div className="bz-breadcrumb">
      <div className="bz-container">
        <div className="bz-breadcrumb-inner">
          <nav className="bz-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">
              <i className="bi bi-chevron-right"></i>
            </span>
            <span>{Title}</span>
          </nav>
          <h1>{Title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
