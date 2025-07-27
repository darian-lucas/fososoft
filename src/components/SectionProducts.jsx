import React, { useState } from "react";
import { products } from "../data";
import ProductCard from "./ProductCard";

const SectionProducts = () => {
  const [activeTab, setActiveTab] = useState("Liên quan");
  const [showDropdown, setShowDropdown] = useState(false);

  const tabs = ["Liên quan", "Bán chạy", "Mới nhất", "Nổi bật"];
  const priceOptions = ["Giá: Thấp → Cao", "Giá: Cao → Thấp"];
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePriceClick = (option) => {
    setSelectedPrice(option);
    setShowDropdown(false);
  };
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    brand: true,
    year: false,
    origin: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <section className="section__products">
      <div className="container py-8">
        <div className="section_products-wrapper grid grid-cols-12 gap-x-5">
          <div className="col-span-3 bg-white rounded-lg py-3 h-fit shadow">
            {/* Header */}
            <div className="flex items-center gap-2 p-3 border-b border-[#919EAB33]">
              <img src="/images/filter.svg" alt="filter" />
              <h2 className="text-2xl font-semibold text-brand-500">Bộ Lọc</h2>
            </div>

            {/* Danh mục sản phẩm */}
            <div className="px-3 py-4 border-b border-[#919EAB33]">
              <button
                onClick={() => toggleSection("category")}
                className="flex justify-between items-center w-full"
              >
                <span className="font-semibold text-xl text-primary">
                  Danh mục sản phẩm
                </span>
                <img
                  src="/images/arrow-down.svg"
                  alt=""
                  className={`transition-transform duration-300 ${
                    openSections.category ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSections.category ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="space-y-4 pt-4">
                  {[
                    "Lọc gió Động cơ - Air Filter",
                    "Lọc Nhiên Liệu - Fuel Filter",
                    "Bộ lọc dầu",
                    "Chưa phân loại",
                    "Khác",
                  ].map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-x-3 cursor-pointer"
                    >
                      <input type="checkbox" className="peer hidden" />
                      <div
                        className="w-6 h-6 rounded-md border border-secondary flex items-center justify-center
           peer-checked:bg-blue-600 peer-checked:border-blue-600 relative transition"
                      >
                        <img
                          src="/images/checked.svg"
                          alt="check"
                          className="w-3 h-3 transition"
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {item} <span className="text-secondary">(24)</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Khoảng giá */}
            <div className="px-3 py-4 border-b border-[#919EAB33]">
              <button
                onClick={() => toggleSection("price")}
                className="flex justify-between items-center w-full"
              >
                <span className="font-semibold text-xl text-primary">
                  Khoảng giá
                </span>
                <img
                  src="/images/arrow-down.svg"
                  alt=""
                  className={`transition-transform duration-300 ${
                    openSections.price ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSections.price ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="space-y-2 pt-4">
                  {[
                    "Dưới 100,000 đ",
                    "100,000 đ - 300,000 đ",
                    "300,000 đ - 500,000 đ",
                    "Trên 500,000 đ",
                  ].map((price, index) => (
                    <div
                      key={index}
                      className="border border-[#919EAB3D] text-primary text-center py-2 rounded cursor-pointer hover:bg-gray-50"
                    >
                      {price}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thương hiệu */}
            <div className="px-3 py-4 border-b border-[#919EAB33]">
              <button
                onClick={() => toggleSection("brand")}
                className="flex justify-between items-center w-full"
              >
                <span className="font-semibold text-xl text-primary">
                  Thương hiệu
                </span>
                <img
                  src="/images/arrow-down.svg"
                  alt=""
                  className={`transition-transform duration-300 ${
                    openSections.brand ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSections.brand ? "max-h-[500px]" : "max-h-0"
                }`}
                mt-5
              >
                <div className="space-y-4 pt-4">
                  {["Asakashi", "Bosch", "Huyndai"].map((brand, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-x-3 cursor-pointer"
                    >
                      <input type="checkbox" className="peer hidden" />
                      <div
                        className="w-6 h-6 rounded-md border border-secondary flex items-center justify-center
           peer-checked:bg-blue-600 peer-checked:border-blue-600 relative transition"
                      >
                        <img
                          src="/images/checked.svg"
                          alt="check"
                          className="w-3 h-3 transition"
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {brand} <span className="text-secondary">(24)</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Năm sản xuất */}
            <div className="px-3 py-4 border-b border-[#919EAB33]">
              <button
                onClick={() => toggleSection("year")}
                className="flex justify-between items-center w-full"
              >
                <span className="font-semibold text-xl text-primary">
                  Năm sản xuất
                </span>
                <img
                  src="/images/arrow-down.svg"
                  alt=""
                  className={`transition-transform duration-300 ${
                    openSections.year ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSections.year ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="space-y-4 pt-4">
                  {[2021, 2020, 2019, 2018].map((year, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-x-3 cursor-pointer"
                    >
                      <input type="checkbox" className="peer hidden" />
                      <div
                        className="w-6 h-6 rounded-md border border-secondary flex items-center justify-center
           peer-checked:bg-blue-600 peer-checked:border-blue-600 relative transition"
                      >
                        <img
                          src="/images/checked.svg"
                          alt="check"
                          className="w-3 h-3 transition"
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {year} <span className="text-secondary">(24)</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Xuất xứ */}
            <div className="px-3 py-4">
              <button
                onClick={() => toggleSection("origin")}
                className="flex justify-between items-center w-full"
              >
                <span className="font-semibold text-xl text-primary">
                  Xuất xứ
                </span>
                <img
                  src="/images/arrow-down.svg"
                  alt=""
                  className={`transition-transform duration-300 ${
                    openSections.origin ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSections.origin ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="space-y-4 pt-4">
                  {["Đức", "Nhật Bản", "Trung Quốc"].map((country, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-x-3 cursor-pointer"
                    >
                      <input type="checkbox" className="peer hidden" />
                      <div
                        className="w-6 h-6 rounded-md border border-secondary flex items-center justify-center
           peer-checked:bg-blue-600 peer-checked:border-blue-600 relative transition"
                      >
                        <img
                          src="/images/checked.svg"
                          alt="check"
                          className="w-3 h-3 transition"
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {country} <span className="text-secondary">(24)</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-xl font-semibold text-primary">
                Danh sách sản phẩm
              </h2>

              <div className="flex items-center gap-x-6 text-sm">
                <span className="text-primary text-base">Sắp xếp theo</span>

                {/* Tabs */}
                <div className="flex items-center gap-x-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabClick(tab)}
                      className={`relative px-4 py-2 rounded-lg font-semibold transition ${
                        activeTab === tab
                          ? "border-brand-500 text-brand-500 !border bg-white font-bold"
                          : " text-primary bg-white"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <>
                          <span className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-t-blue-500 border-l-[24px] border-l-transparent rounded-tr-md"></span>
                          <img
                            src="/images/checked.svg"
                            alt=""
                            className="absolute top-1 right-1 w-2 h-2 text-white"
                          />
                        </>
                      )}
                    </button>
                  ))}
                </div>

                {/* Dropdown Giá */}
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100"
                  >
                    {selectedPrice}
                    <img
                      src="/images/arrow-down.svg"
                      alt=""
                      className={`h-4 w-4 transition-transform ${
                        showDropdown ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 w-44 bg-white border border-gray-200 shadow-lg rounded z-50">
                      {priceOptions.map((option) => (
                        <div
                          key={option}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handlePriceClick(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;
