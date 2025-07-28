import { useEffect, useState } from "react";
import { categories, products } from "../data";
import ProductCard from "./ProductCard";

export default function HeaderCategoryMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const [headerBottom, setHeaderBottom] = useState(211);

  useEffect(() => {
    const updateHeaderPosition = () => {
      const headerElement = document.querySelector(".header");

      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        setHeaderBottom(Math.max(0, rect.bottom));
      }
    };
    window.addEventListener("scroll", updateHeaderPosition);
    window.addEventListener("resize", updateHeaderPosition);
    updateHeaderPosition();
    return () => {
      window.removeEventListener("scroll", updateHeaderPosition);
      window.removeEventListener("resize", updateHeaderPosition);
    };
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 z-40"
          style={{
            top: `${headerBottom}px`,
            background: "rgba(103, 114, 139, 0.8)",
          }}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className="header__category-wrapper relative z-50"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {/* Nút Danh mục sản phẩm */}
        <div className="header__category px-4 py-3 bg-[#0155C6] w-fit rounded-lg flex items-center gap-x-2 cursor-pointer">
          <img src="/images/menu.svg" alt="" />
          <div className="flex items-center gap-x-8">
            <span className="capitalize text-white">Danh mục sản phẩm</span>
            <img
              className={`invert brightness-0 transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
              src="/images/arrow-down.svg"
              alt=""
            />
          </div>
        </div>

        {/* Mega Menu */}
        {isMenuOpen && (
          <div className="absolute top-[58px] left-0 bg-white shadow-lg w-[1376px] flex z-50 rounded-b-lg overflow-hidden">
            {/* Cột trái */}
            <div className="w-full max-w-[263px]">
              <ul>
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className={`p-4 cursor-pointer hover:bg-grey-200 ${
                      activeCategory.id === cat.id ? "bg-gray-100" : ""
                    }`}
                    onMouseEnter={() => setActiveCategory(cat)}
                  >
                    <a
                      href="#"
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-3">
                        <img src={cat.img} alt="" className="w-10 h-10" />
                        <span>{cat.name}</span>
                      </div>
                      <img
                        src="/images/arrow-right.svg"
                        alt=""
                        className="w-4 h-4"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột phải */}
            <div className="flex-1 bg-grey-200 px-6">
              <div className="grid grid-cols-3 gap-4 border-b border-[#919EAB3D] py-6">
                {activeCategory.subCategories.map((sub, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 cursor-pointerp-2 rounded-lg px-4 py-3 bg-white"
                  >
                    <img src={sub.img} alt="" className="object-cover" />
                    <span>{sub.name}</span>
                  </div>
                ))}
              </div>
              <div className="pb-4">
                <div className="flex items-center py-6 justify-between">
                  <h3 className="text-2xl font-semibold text-primary">
                    Sản phẩm bán chạy
                  </h3>
                  <a href="#" className="flex items-center gap-2 no-underline">
                    <span className="text-brand-500 font-semibold">
                      Xem tất cả
                    </span>
                    <img
                      src="/images/arrow-double-right.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </a>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {products.slice(0, 5).map((product) => (
                    <ProductCard
                      product={product}
                      key={product.id}
                      imgClass="w-[184px] h-[184px]"
                      badge="hidden"
                      info="px-3 py-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
