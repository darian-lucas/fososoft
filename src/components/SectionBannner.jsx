import ProductCard from "./ProductCard";
import Breadcrumb from "../components/BreadCrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../data";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const SectionBannner = () => {
  return (
    <section className="section__banner">
      <div className="container">
        <Breadcrumb></Breadcrumb>
        <div className="banner">
          <img src="/images/banner.png" alt="" className="banner__image" />
          <div className="banner__products relative p-12 bg-[#025FCA]">
            <Swiper
              grabCursor="true"
              spaceBetween={20}
              slidesPerView={5}
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              className="mySwiper w-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className=" custom-prev flex items-center  gap-x-3 justify-center absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-brand-100 rounded-full w-10 h-10">
              <img src="/images/arrow-left.svg" alt="Prev" />
            </button>
            <button className=" custom-next flex items-center justify-center absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-brand-100 rounded-full w-10 h-10">
              <img src="/images/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBannner;
