import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/logo.png";
import {UilShoppingBag} from "@iconscout/react-unicons"

const Header = () => {
  return (
    <div className={css.header}>
      {/* {logoside} */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>FlyPiz</span>
      </div>

      {/* {menu} */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      {/* {right side} */}
      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="2E2E2E"/>
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
