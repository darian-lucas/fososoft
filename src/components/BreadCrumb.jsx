import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className="pt-6 pb-8">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="hover:text-[#024897] text-[#919EAB]">
            Trang chủ
          </Link>
        </li>
        {paths.map((segment, index) => {
          const to = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;
          const label = capitalizeFirstLetter(decodeURIComponent(segment));
          return (
            <li key={index} className="flex items-center space-x-2">
              <span>&gt;</span>
              {isLast ? (
                <span className="text-[#024897]">{label}</span>
              ) : (
                <Link to={to} className="hover:text-[#024897]">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
