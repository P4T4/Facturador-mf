"use client";
import { useAppSelector } from "@lib/store";
import { Products } from "@shared/utils/form-inputs.interface";
import { FunctionComponent, useEffect } from "react";
import { Card, Container, Table } from "react-bootstrap";
import "./factura.css";

interface FacturaComponentProps {}

const FacturaComponent: FunctionComponent<FacturaComponentProps> = () => {
  const factura = useAppSelector((state) => state.factura.factura);
  useEffect(() => {
    console.log(factura);
  }, [factura]);

  const renderProducts = (products: Products[]) =>
    products.map((product, index) => {
      return (
        <tr key={`product${index}`}>
          <td>{index + 1}</td>
          <td>{product.description}</td>
          <td>{product.quantity}</td>
          <td>{product.value}</td>
        </tr>
      );
    });

  const renderTotalAndTaxes = (products: Products[]) => {
    const total = products.reduce((sum, product) => (sum += product.value), 0);
    return (
      <tfoot>
        <tr>
          <td colSpan={2}></td>
          <td className="text-end">IVA:</td>
          <td>0</td>
        </tr>
        <tr>
          <td colSpan={2}></td>
          <td className="text-end">TOTAL:</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    );
  };

  return (
    <Container className="d-flex flex-column">
      <Card>
        <Container className="d-flex flex-column">
          <Container>
            <h2>{factura.company.nameCompany}</h2>
            <h4>NIT: {factura.company.fiscalNumberCompany}</h4>
          </Container>
          <hr />
          <Container>
            <h5>Dirigido a:</h5>
            <h5>{factura.customer.nameCompany}</h5>
            <h6>{factura.customer.fiscalNumberCompany}</h6>
          </Container>
          <hr />
          <Container>
            <Container className="d-flex flex-row flex-wrap justify-content-between">
              <h4>{factura.invoice.title}</h4>
              <h4>{factura.invoice.date}</h4>
            </Container>
            <Table
              striped
              bordered
              hover
              responsive={true}
              className="custom-table"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>{renderProducts(factura.invoice.products)}</tbody>
              {renderTotalAndTaxes(factura.invoice.products)}
            </Table>
          </Container>
        </Container>
      </Card>
    </Container>
  );
};

export default FacturaComponent;
