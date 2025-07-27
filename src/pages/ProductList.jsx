import SectionBannner from "../components/SectionBannner";
import SectionProducts from "../components/SectionProducts";
const ProductList = () => {
  return (
    <div className="bg-[#F4F6F8]">
      <SectionBannner></SectionBannner>
      <SectionProducts></SectionProducts>
      <div className="container services py-10">
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="flex px-3 items-center gap-4 bg-white shadow-[0_8px_16px_#919EAB29] rounded-xl w-[336px] h-25 no-underline"
          >
            <div className="shrink-0">
              <img
                src="/images/money.svg"
                alt=""
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="flex gap-y-3 flex-col">
              <h6 className="text-primary font-bold">Miễn phí vận chuyển</h6>
              <span className="text-secondary text-sm">
                Với hoá đơn từ 1 triệu
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex px-3 items-center gap-4 bg-white shadow-[0_8px_16px_#919EAB29] rounded-xl w-[336px] h-25 no-underline"
          >
            <div className="shrink-0">
              <img
                src="/images/support.svg"
                alt=""
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="flex gap-y-3 flex-col">
              <h6 className="text-primary font-bold">Hỗ trợ 24/7</h6>
              <span className="text-secondary text-sm">
                Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex px-3 items-center gap-4 bg-white shadow-[0_8px_16px_#919EAB29] rounded-xl w-[336px] h-25 no-underline"
          >
            <div className="shrink-0">
              <img
                src="/images/delivery.svg"
                alt=""
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="flex gap-y-3 flex-col">
              <h6 className="text-primary font-bold">Giao hàng nhanh 2h</h6>
              <span className="text-secondary text-sm">
                Trong vòng bán kính 10km nội thành TP HCM
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex px-3 items-center gap-4 bg-white shadow-[0_8px_16px_#919EAB29] rounded-xl w-[336px] h-25 no-underline"
          >
            <div className="shrink-0">
              <img
                src="/images/package.svg"
                alt=""
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="flex gap-y-3 flex-col">
              <h6 className="text-primary font-bold">30 ngày đổi trả</h6>
              <span className="text-secondary text-sm">
                Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="cta__banner bg-brand-50">
        <div className="container py-11 flex justify-between items-center">
          <div className="cta__left flex gap-4 items-center">
            <img src="/images/system.svg" alt="" />
            <h2 className="text-primary text-[28px]">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </h2>
          </div>
          <button className="flex items-center gap-3 py-3 px-6 bg-white rounded-full w-51">
            <span className="text-brand-600 text-2xl font-semibold">Xem ngay</span>
            <img src="/images/arrow-right-long.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
