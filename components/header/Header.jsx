import style from "./header.module.scss";

export function Header() {
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Smalls_Lighthouse_-_geograph.org.uk_-_1767931.jpg/440px-Smalls_Lighthouse_-_geograph.org.uk_-_1767931.jpg"></img>
          </a>
        </div>
        <div className={style.navBar}>
          <a className={style.link} href="/shop">
            Shop
          </a>
          <a className={style.link} href="/help">
            Help
          </a>
        </div>
      </div>
    </>
  );
}
