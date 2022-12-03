import { Header } from "semantic-ui-react";
import Image from "next/image";

import Gnb from "./Gnb"

import styles from "./Top.module.css"

export default function Top() {
    return (
        <div>
            <div className={styles.Top__Wrapper}>
                <div className={styles.Top__Image}>
                    {/* <Image src="/images/burger.png" alt="logo" width={537} height={404}/> */}
                    <img src="/images/burger.png" alt="logo"/>
                </div>
                <Header as="h1">넥스트.JS</Header>
            </div>
                <Gnb />
        </div>
    )
  }
  