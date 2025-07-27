const Footer = () => {
  return (
    <footer class="bg-[url(/images/bg-footer.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="container py-24">
        <div className="footer__wrapper grid grid-cols-12 text-secondary gap-x-26">
          <div className="footer-item col-span-5">
            <h5 className="uppercase text-base font-semibold text-[#013065]">
              Viet Hung Auto Production Trading Joint Stock Company
            </h5>
            <div className="flex flex-col mt-8 font-normal">
              <span>
                Tax code: <strong> 0305094228</strong>
              </span>
              <span className="mt-4">
                Address:
                <strong>
                  13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
                  Nam.
                </strong>
              </span>
              <span className="mt-4">
                Phone number: <strong>0283 760 7607</strong>
              </span>
              <span className="mt-4">
                Opening hour: <strong>09:00 - 22:00 from Mon - Fri</strong>
              </span>
            </div>
            <div className="mt-8 object-cover">
              <img src="/images/bocongthuong.png" alt="" />
            </div>
          </div>
          <div className="footer-item col-span-2">
            <h5 className="uppercase text-2xl font-semibold text-[#013065]">
              Sitemap
            </h5>
            <div className="flex flex-col gap-y-3 mt-8">
              <a>About</a>
              <a className="mt-4 no-underline">Article</a>
              <a className="mt-4 no-underline">Cart</a>
              <a className="mt-4 no-underline">Contact</a>
            </div>
          </div>
          <div className="footer-item col-span-2">
            <h5 className="uppercase text-2xl font-semibold text-[#013065]">
              Legal
            </h5>
            <div className="flex flex-col gap-y-3 mt-8">
              <a className="mt-4 no-underline text-primary font-semibold">
                _ Privacy policy
              </a>
              <a className="mt-4 no-underline">Cookie policy</a>
              <a className="mt-4 no-underline">Delivery policy</a>
              <a className="mt-4 no-underline">FAQs</a>
            </div>
          </div>
          <div className="footer-item col-span-3 ml-auto">
            <h5 className="uppercase text-2xl font-semibold text-[#013065]">
              Download App
            </h5>
            <div className="flex flex-col gap-y-3 footer__app mt-8">
              <div className="footer_google w-fit">
                <a
                  href="#"
                  className="flex items-center gap-x-4 no-underline px-5 py-3 bg-primary rounded-xl"
                >
                  <img src="/images/play_store.svg" alt="" />
                  <div className="text-white flex flex-col gap-y-1">
                    <span className="font-normal text-sm">Get It On</span>
                    <span className="font-semibold">Google Play Store</span>
                  </div>
                </a>
              </div>
              <div className="footer_apple w-fit">
                <a
                  href="#"
                  className="flex items-center gap-x-4 no-underline px-5 py-3 bg-brand-500 rounded-xl"
                >
                  <img src="/images/apple_store.svg" alt="" />
                  <div className="text-white flex flex-col gap-y-1">
                    <span className="font-normal text-sm">Download from</span>
                    <span className="font-semibold">Apple App Store</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-2 mt-8">
              <img
                src="/images/star.svg"
                alt=""
                className="p-2 bg-[#D80027] rounded-full"
              />
              <div className="flex items-center gap-x-2 cursor-pointer">
                <span className="text-xl text-primary font-semibold">VI</span>
                <img src="/images/arrow-down.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
