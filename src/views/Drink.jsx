import Categories from "@/components/Categories"
import JijoSpinner from "@/components/JijoSpinner"
import MenuBubble from "@/components/MenuBubble"
import MenuTitle from "@/components/MenuTitle"
import Products from "@/components/Products"
import { useState } from "react"
import JiJoHelmet from "@/utils/JiJoHelmet"
import drinkImage01 from "@/assets/images/menu/drink/drink_image01.jpg"
import usePaginationQuery from "@/hooks/usePaginationQuery"
import MenuBanner from '@/components/Menu/MenuBanner';

function Drink() {
  const [category, setCategory] = useState("전체보기") //커피, 티, 에이드&주스, 스무디&프라페, 디카페인, 음료, 신상품

  const { error, ...rest } = usePaginationQuery({
    perPage: 20,
    queryKey: "beverage",
    dependency: category,
    options: {
      sort: "-created",
      filter: category !== "전체보기" ? `(category~'${category}')` : "",
    },
  })

  // const { data, status } = usePocketBaseFilteredData(collection, 1, 20, category !== "전체보기" ? `(category~'${category}')` : "")

  const handleCategory = (newCategory) => {
    setCategory(newCategory)
  }

  if (status === "loading") {
    return <JijoSpinner />
  }

  if (error) {
    return <div role="alert">{error.toString()}</div>
  }

  return (
    <div>
      <JiJoHelmet pageTitle="메뉴소개 - 음료" />
      <MenuTitle title="MEGA MENU" mainMenu="메뉴소개" subMenu="음료" mainLink="/menu/drink" linkTo="/menu/drink">
        DRINK MENU
      </MenuTitle>
      <MenuBubble>
        <strong className=" mobile:text-2xl">깊고 부드러운 커피 맛의 비밀</strong>
        <br />
        <strong className=" mobile:text-2xl">행복을 선사하는 다양한 음료</strong>
      </MenuBubble>
      <MenuBanner 
        bannerTitle="카페 지조 가을시즌 신메뉴" 
        title="풍요로운 가을이 만든 달콤함" 
        subTitle="청송 사과 한 잔, 보름달 한 상" 
        description="가을이 키운 달콤한 청송 사과 신메뉴와 가을을 닮은 풍요로운 보름달 신메뉴 출시! 지금 바로 가까운 메가MGC커피에서 만나보세요!"
        image={drinkImage01}
        alt="가을이 키운 달콤한 청송사과 한 잔"
        >
      </MenuBanner>
      <section className="bg-white mx-auto max-w-7xl mt-[6.25rem] mobile:px-5">
        <div className="titleArea text-center">
          <p className="text-jj_24 font-light">카페 지조의 엄선된 메뉴</p>
          <h2 className="text-jj_60 font-black">JIJO MENU</h2>
          <span className="text-jj_14 font-light text-[#1c1c1b] opacity-70">※메뉴 이미지는 연출컷이라 실물과 다를 수 있습니다.</span>
        </div>

        <div className="checkboxArea border border-gray-200 p-[1.875rem] my-10">
          <div className="pb-5 mb-5 border-b border-b-gray-200 flex justify-between items-center">
            <p className="title text-jj_22 leading-tight">분류보기</p>
            {/* <MenuSearchForm /> */}
          </div>
          <Categories collection="beverage" category={category} handleCategory={handleCategory} />
        </div>
        <Products {...rest} />
      </section>
    </div>
  )
}

export default Drink
