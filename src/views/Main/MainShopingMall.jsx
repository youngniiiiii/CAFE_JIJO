import Button from "@/components/Button";
import MainpageTitle from "@/components/Main/MainpageTitle";
import { Link } from "react-router-dom";
import ShopingMallCarousel from "@/components/Main/ShopingMallCarousel";
import nextArrow from "../../assets/images/main/nextArrow.png";

function MainShopingMall() {
  return (
    <section className="grid items-center h-screen grid-cols-2 overflow-hidden bg-primary ">
      <h2 className="sr-only">메인페이지 쇼핑몰</h2>
      <div className="flex justify-center m-auto text-deepDarkGray px-[5rem]">
        <div>
          <MainpageTitle highLight="secondaryHighlight" subHeading="지조 있게 추천하는 제품" mainHeading="CAFE JIJO SHOPING MALL"></MainpageTitle>
          <p className="text-jj_22 mobile:text-jj_18">카페 지조가 추천하는 제품들을 둘러보세요!</p>
          <p className="flex flex-col pt-5 pb-10 font-light whitespace-nowrap mobile:text-jj_13">
            <span>지조 MD가 직접 선정하는 다양한 제품들을</span>
            <span>합리적인 가격으로 만나보실 수 있습니다.</span>
          </p>
          <Link to="/menu/product">
            <Button type="button" color="secondary" className="px-[3rem] text-center text-jj_20 font-normal h-[3.4375rem] break-keep">
              상품 더보기
            </Button>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="w-full h-auto py-10 overflow-hidden bg-secondary p-7 rounded-l-2xl">
          <p className="pb-2 font-light text-white text-jj_20 mobile:text-jj_14">카페 지조에서 픽한 MD 전용상품!</p>
          <h4 className="text-white font-bold leading-[1] break-keep text-jj_34 pb-4 mobile:text-jj_43">지조 MD 전용 상품</h4>
          <Link to="/menu/product">
            <button className="flex items-center px-6 py-2 font-bold rounded-full text-deepDarkGray bg-primary text-jj_16 font-pretendard">
              상품 더보기
              <img src={nextArrow} alt="" className="block h-auto w-[1.2rem] ml-1" aria-hidden="true" />
            </button>
          </Link>
          <ShopingMallCarousel />
        </div>
      </div>
    </section>
  );
}

export default MainShopingMall;
