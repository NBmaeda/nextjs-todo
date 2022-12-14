import Image from "next/image";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Image
          src="/images/logo512.png"
          width={48}
          height={48}
          alt=""
          className={styles.logo}
        />
        Todo App
      </h1>
    </header>
  );
};

export default Header;
