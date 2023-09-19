import useViewport from "@/hooks/useViewport";
import DesktopHeader from "./DesktopHeader";
import TabletMobileHeader from "./TabletMobileHeader";
import {useState} from "react";

function Header() {
  // useViewport hook을 사용한 반응형 웹
  const {Desktop, Tablet, Mobile} = useViewport();

  /* 클릭시 로그인모달 렌더링 */
  const [isClickedSignin, setIsClickedSignin] = useState(false);
  const handleClickSignin = () => {
    setIsClickedSignin(!isClickedSignin);
  };

  return (
    <>
      <Desktop>
        <DesktopHeader
          siginInView={isClickedSignin}
          siginViewHandler={handleClickSignin}
          setIsClickedSignin={setIsClickedSignin}
        />
      </Desktop>
      <Tablet>
        <TabletMobileHeader
          siginInView={isClickedSignin}
          siginViewHandler={handleClickSignin}
          setIsClickedSignin={setIsClickedSignin}
        />
      </Tablet>
      <Mobile>
        <TabletMobileHeader
          siginInView={isClickedSignin}
          siginViewHandler={handleClickSignin}
          setIsClickedSignin={setIsClickedSignin}
        />
      </Mobile>
    </>
  );
}

export default Header;
