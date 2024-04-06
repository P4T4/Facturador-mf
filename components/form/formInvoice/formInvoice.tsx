"use client";
import { FunctionComponent } from "react";
import {
  Button,
  Card,
  Container,
  Form as FormBootstrap,
  Table,
} from "react-bootstrap";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  useWatch,
} from "react-hook-form";
import { FormInputsProps } from "@shared/utils/form-inputs.interface";
import FormProducts from "@components/form/formInvoice/formProducts/formProducts";

import "@components/form/formInvoice/formInvoice.css";

interface FormInvoiceProps {
  register: UseFormRegister<FormInputsProps>;
  errors: FieldErrors<FormInputsProps>;
  getValues: UseFormGetValues<FormInputsProps>;
  setValue: UseFormSetValue<FormInputsProps>;
  control: Control<FormInputsProps, any>;
  isSubmitted: boolean;
}

const FormInvoice: FunctionComponent<FormInvoiceProps> = ({
  register,
  errors,
  getValues,
  setValue,
  control,
  isSubmitted,
}) => {
  const removeProduct = (index: number) => {
    getValues().invoice.products.splice(index, 1);
    setValue("invoice.products", [...getValues().invoice.products]);
  };

  const renderProducts = (valores: any[]) =>
    valores.map(({ description, value, quantity }, index) => (
      <tr key={"product-" + index}>
        <td className="align-middle text-center">
          <Button
            variant="danger"
            type="button"
            onClick={() => removeProduct(index)}
          >
            Quitar
          </Button>
        </td>
        <td>{description}</td>
        <td>{value}</td>
        <td>{quantity}</td>
      </tr>
    ));
  const renderErrorProduct = () => (
    <tr>
      <td colSpan={3}>
        <FormBootstrap.Text className="text-danger">
          Es necesario agregar un producto para generar factura
        </FormBootstrap.Text>
      </td>
    </tr>
  );

  const productsValidation =
    errors.invoice?.products ||
    (getValues().invoice.products.length === 0 && isSubmitted);

  return (
    <Card>
      <Card.Header>Datos de la factura</Card.Header>
      <Card.Body>
        <Container className="d-flex gap-3">
          <FormBootstrap.Group className="mb-3 flex-grow-1">
            <FormBootstrap.Label>
              Título de la factura
              <FormBootstrap.Control
                type="text"
                placeholder="Título de la factura"
                {...register("invoice.title", {
                  required: "Título es obligatorio",
                })}
              />
              {errors.invoice?.title && (
                <FormBootstrap.Text className="text-danger">
                  {errors.invoice.title.message}
                </FormBootstrap.Text>
              )}
            </FormBootstrap.Label>
          </FormBootstrap.Group>

          <FormBootstrap.Group className="mb-3 flex-grow-1">
            <FormBootstrap.Label>
              Fecha de la factura
              <FormBootstrap.Control
                type="date"
                placeholder="Seleccione la fecha del servicio"
                {...register("invoice.date", {
                  required: "Fecha de la factura es obligatorio",
                })}
              />
              {errors.invoice?.date && (
                <FormBootstrap.Text className="text-danger">
                  {errors.invoice.date.message}
                </FormBootstrap.Text>
              )}
            </FormBootstrap.Label>
          </FormBootstrap.Group>
        </Container>
        <Container>
          <Table
            striped
            bordered
            hover
            responsive={true}
            className={productsValidation ? "tabla-error" : ""}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Descripción</th>
                <th>Valor</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {renderProducts(useWatch({ control, name: "invoice.products" }))}
              <FormProducts getValues={getValues} setValue={setValue} />
              {productsValidation && renderErrorProduct()}
            </tbody>
          </Table>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default FormInvoice;
