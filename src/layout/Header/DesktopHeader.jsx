import JijoCafeLogoTitle from "@/components/JijoCafeLogoTitle";
import LinkList from "@/components/LinkList";
import LogoLinks from "@/components/LogoLinks";
import useAuthStore from "@/store/store";
import debounce from "@/utils/debounce";
import {useState} from "react";
import CartLinkList from "./CartLinkList";
import SignInModal from "@/components/SignInModal";
import toast from "react-hot-toast";
import {kakaoLogout} from "@/utils/kakaoLogout";
import S from "./DesktopHeader.module.css";
import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion";

function DesktopHeader({siginInView, siginViewHandler, setIsClickedSignin}) {
  /* 인증 정보에 따른 로그인 ➡️ 로그아웃으로 변경 */
  const isAuth = useAuthStore((state) => state.isAuth);

  /* 로그인 시 userName || name렌더링 */
  const user = useAuthStore((state) => state.user);

  /* 일반사용자 로그아웃 및 카카오 사용자 로그아웃 */
  const signOut = useAuthStore((state) => state.signOut);
  const handleSignOut = () => {
    toast.success("정상적으로 로그아웃 되었습니다.", {icon: "👋"});
    signOut();
    kakaoLogout();
  };

  /* Framer Motion Animate 상태(마우스 접근/떠남에 따른 서브메뉴리스트 렌더링) */
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const itemVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        <motion.header
          initial={true}
          animate={isOpen ? "open" : "closed"}
          className={S.header}
          onMouseEnter={debounce(handleMouseEnter)}
          onMouseLeave={debounce(handleMouseLeave)}>
          <h2 className={S.h2}>JIJO-cafe Header</h2>
          <nav className={S.nav}>
            <JijoCafeLogoTitle className={S.title} />
            <ul className={S.ul}>
              <div className={S.LinkWrap}>
                <LinkList pageLink="/menu/drink">메뉴 소개</LinkList>
                <motion.div variants={itemVariants}>
                  {isOpen && (
                    <div className={S.subLinkWrap}>
                      <LinkList pageLink="/menu/drink">음료</LinkList>
                      <LinkList pageLink="/menu/food">푸드</LinkList>
                      <LinkList pageLink="/menu/product">상품</LinkList>
                    </div>
                  )}
                </motion.div>
              </div>
              <div className={S.LinkWrap}>
                <LinkList pageLink="/findStore">매장</LinkList>
                <motion.div variants={itemVariants}>
                  {isOpen && (
                    <div className={S.subLinkWrap}>
                      <LinkList pageLink="/findStore">매장찾기</LinkList>
                    </div>
                  )}
                </motion.div>
              </div>
              <div className={S.LinkWrap}>
                <LinkList pageLink="/bbs/notice">지조소식</LinkList>
                <motion.div variants={itemVariants}>
                  {isOpen && (
                    <div className={S.subLinkWrap}>
                      <LinkList pageLink="/bbs/notice">Notice</LinkList>
                      <LinkList pageLink="/bbs/faq">FAQ</LinkList>
                      <LinkList pageLink="/bbs/customer">고객센터</LinkList>
                      <LinkList pageLink="/bbs/event">이벤트</LinkList>
                    </div>
                  )}
                </motion.div>
              </div>
              {isAuth ? (
                <div onClick={handleSignOut} className={S.LinkWrap}>
                  로그아웃
                </div>
              ) : (
                <div onClick={siginViewHandler} className={S.LinkWrap}>
                  로그인
                </div>
              )}
              {siginInView && (
                <SignInModal setIsClickedSignin={setIsClickedSignin} />
              )}
              {!isAuth && (
                <LinkList pageLink="/signUp" className={S.LinkWrap}>
                  회원가입
                </LinkList>
              )}
              {isAuth && user && (
                <li className={S.LinkWrap}>{user.name || user.username}님</li>
              )}
              <div className={S.LinkWrap}>
                <CartLinkList />
              </div>
            </ul>
            <LogoLinks />
          </nav>
        </motion.header>
      </AnimatePresence>
    </>
  );
}

export default DesktopHeader;
