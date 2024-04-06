"use client";
import FacturaComponent from "@components/factura/factura";
import { store } from "@lib/store";
import dynamic from "next/dynamic";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
const Header = dynamic(() => import("@app/header"), { ssr: false });

interface InvoiceComponentProps {}

const InvoiceComponent: FunctionComponent<InvoiceComponentProps> = () => {
  return (
    <Provider store={store}>
      <Header />
      <FacturaComponent />
    </Provider>
  );
};

export default InvoiceComponent;
