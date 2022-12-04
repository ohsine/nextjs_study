import Axios from "axios";
import { useState, useEffect } from "react";
import { Header, Divider, Loader } from "semantic-ui-react";

import Head from 'next/head'
import Image from 'next/image'
import ItemList from '../src/component/ItemList'

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getData() {
    Axios.get(API_URL)
    .then(res => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Head>
        <title>Home | 넥스트</title>
        <meta name="description" content="넥스트 홈입니다."/>
      </Head>

      {isLoading && (
        <div style={{padding: "300px 0"}}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}

      {!isLoading && (
        <>
          <Header as="h3" style={{paddingTop: 40}}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />

          <Header as="h3" style={{paddingTop: 40}}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}

    </div>
  )
}
