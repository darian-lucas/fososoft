const ProductCard = ({
  product,
  imgClass = "w-[237px] h-[237px]",
  badge = "block",
  info = "p-6 ",
}) => {
  return (
    <div className="product__card bg-white rounded-lg w-full hover:shadow-[0_8px_16px_#0375F329]">
      {/* Image */}
      <div className="product__image p-2">
        <a href="##" className="no-underline">
          <img
            src={`/images/${product.img}`}
            alt={product.name}
            className={`${imgClass} object-cover`}
          />
        </a>
      </div>

      {/* Info */}
      <div className={`product__info flex flex-col gap-y-4 ${info}`}>
        {/* Badge */}
        <div
          className={`product__badge px-3 py-1 bg-gradient-to-r from-[#FFD666] to-[#FFAB00] flex items-center gap-x-2 w-fit rounded-full ${badge}`}
        >
          <img src="/images/badge.svg" alt="" />
          <span className="text-sm font-semibold text-[#7A0916]">
            Giá cực sốc
          </span>
        </div>

        {/* Name */}
        <h6 className="line-clamp-2 font-semibold leading-6">{product.name}</h6>

        {/* Price */}
        <div className="product__price flex flex-col gap-y-3">
          <span className="text-xl text-[#B71D18] font-semibold">
            {product.sale_price.toLocaleString("vi-VN")} đ
          </span>
          <div className="flex items-center gap-x-3 text-sm">
            <span className="line-through text-disabled">
              {product.price.toLocaleString("vi-VN")} đ
            </span>
            <span className="text-[#B71D18] font-semibold">
              {product.percent_discount} %
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="text-brand-600 text-sm font-semibold !bg-brand-50 py-2 px-[17px] rounded-lg outline-none border-0 hover:!bg-brand-600 hover:text-white transition-all">
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
