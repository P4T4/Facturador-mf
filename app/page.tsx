"use client";
import Form from "@components/form/form";
import { store } from "@lib/store";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
const Header = dynamic(() => import("@app/header"), { ssr: false });

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Form />
    </Provider>
  );
}
