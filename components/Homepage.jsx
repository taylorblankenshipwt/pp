import style from "./index.module.scss";
import Head from "next/head";

export function Homepage() {
  return (
    <>
      <div className={style.container}>
        <Head>
          <title>PARSE PARTY</title>
          <link
            rel="icon"
            href="https://ph-files.imgix.net/e4f20412-0e90-4479-a109-87a913f10da6.png?auto=format&auto=compress&codec=mozjpeg&cs=strip"
          />
          <meta
            name="description"
            content="Shop - Helms, Feets, Chest, Bracers"
          ></meta>
        </Head>

        <main>
          <h1 className="title">Welcome to Parse Party.</h1>

          <p className="description">Get dat loot, ya.</p>

          <a className={style.button} href="/shop">
            Shop
          </a>
          <a className={style.button} href="/help">
            Help
          </a>
        </main>
      </div>
    </>
  );
}
