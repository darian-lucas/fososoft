import HeaderCategoryMenu from "../HeaderCategoryMenu";

const Header = () => {
  return (
    <header className="w-full header">
      {/* Start header top */}
      <div className="heade__top w-full bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6] py-2 text-xs text-[#F3F2F2]">
        <div className="container flex items-center justify-between">
          <div className="header__top-left flex items-center">
            <div className="flex">
              <img
                className="mr-2"
                src="/images/subtract.svg"
                alt="Hình ảnh minh họa"
              />
              <span>
                Nhập mã{" "}
                <strong className="text-[#FACA4A] text-sm">NEWBIE</strong> giảm
                ngay 10% cho lần đầu mua hàng.
              </span>
            </div>
          </div>
          <div className="header__top-right flex items-center gap-x-8">
            <div className="flex items-center gap-x-2">
              <img src="/images/call.svg" alt="Hình ảnh minh họa" />
              <span>
                Hotline:{" "}
                <strong className="text-[#FACA4A] text-sm">
                  0283 760 7607
                </strong>{" "}
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/images/devices.svg" alt="Hình ảnh minh họa" />
              <span>Tải ứng dụng</span>
            </div>
          </div>
        </div>
      </div>
      {/* End header top */}

      {/* Start header main */}
      <div className="header__main w-full container py-6 flex items-center gap-12">
        <div className="header__logo">
          <img src="/images/logo.png" alt="Hình ảnh minh họa" />
        </div>
        <div className="header__search flex relative w-full py-2">
          <input
            type="text"
            placeholder="Tìm sản phẩm..."
            className="border-2 border-[#0373F3] rounded-full py-4 px-5 w-full"
          />
          <div className="absolute right-28 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <img src="/images/camera.svg" alt="Camera" />
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer py-2 bg-brand-500">
            <img src="/images/search.svg" alt="Search" className="px-6" />
          </div>
        </div>
        <div className="header__info flex items-center gap-8 shrink-0">
          <div className="header__language flex items-center gap-x-2 ">
            <img
              src="/images/star.svg"
              alt=""
              className="p-2 bg-[#D80027] rounded-full"
            />
            <span>VI</span>
          </div>
          <div className="header__cart flex items-center gap-x-2 relative cursor-pointer">
            <img src="/images/cart.svg" alt="" />
            <span className="w-5 h-5 text-xs flex items-center justify-center bg-[#FF5630] absolute rounded-full text-white -top-3 right-16 ">
              12
            </span>
            <span>Giỏ hàng</span>
          </div>
          <div className="header__user flex items-center gap-x-2 cursor-pointer">
            <img src="/images/user.svg" alt="" />
            <span>Tài khoản</span>
          </div>
        </div>
      </div>
      {/* End header main */}

      {/* Start header navbar */}
      <div className="header__navbar container flex items-center justify-between pb-4">
        <HeaderCategoryMenu />
        <div className="header__list text-black flex items-center gap-x-22">
          <ul className="header__nav flex items-center gap-x-5">
            <li>
              <a href="" className="no-underline font-medium capitalize">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="" className="no-underline font-medium capitalize">
                Bài viết
              </a>
            </li>
            <li>
              <a href="" className="no-underline font-medium capitalize">
                Catelog
              </a>
            </li>
            <li>
              <a href="" className="no-underline font-medium capitalize">
                Liên hệ
              </a>
            </li>
          </ul>
          <div className="header__services flex items-center gap-x-5">
            <div className="flex items-center gap-x-2">
              <img src="/images/clock.svg" alt="" />
              <span className="font-semibold">Hỗ trợ 24/7</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/images/hand_money.svg" alt="" />
              <span className="font-semibold capitalize">
                Miễn phí vận chuyển
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/images/truck.svg" alt="" />
              <span className="font-semibold capitalize">
                Giao hàng nhanh 2h
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/images/subtract.svg" alt="" />
              <span className="font-semibold capitalize">30 ngày đổi trả</span>
            </div>
          </div>
        </div>
      </div>
      {/* End header navbar */}
    </header>
  );
};

export default Header;
