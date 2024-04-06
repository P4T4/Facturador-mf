import { FunctionComponent } from "react";
import { Card, Container, Form as FormBootstrap } from "react-bootstrap";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInputsProps } from "src/app/utils/form-inputs.interface";

interface FormCustomerProps {
  register: UseFormRegister<FormInputsProps>;
  errors: FieldErrors<FormInputsProps>;
}

const FormCustomer: FunctionComponent<FormCustomerProps> = ({
  register,
  errors,
}) => {
  return (
    <Card>
      <Card.Header>Datos Cliente</Card.Header>
      <Card.Body>
        <Container className="d-flex gap-3">
          <FormBootstrap.Group className="mb-3 flex-grow-1">
            <FormBootstrap.Label>
              Nombre
              <FormBootstrap.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("customer.nameCompany", {
                  required: "Nombre es obligatorio",
                })}
              />
              {errors.customer?.nameCompany && (
                <FormBootstrap.Text className="text-danger">
                  {errors.customer.nameCompany.message}
                </FormBootstrap.Text>
              )}
            </FormBootstrap.Label>
          </FormBootstrap.Group>

          <FormBootstrap.Group className="mb-3 flex-grow-1">
            <FormBootstrap.Label>
              Nit o razón social
              <FormBootstrap.Control
                type="number"
                placeholder="Nit o razón social"
                {...register("customer.fiscalNumberCompany", {
                  required: "Nit o razón social es obligatoria",
                })}
              />
              {errors.customer?.fiscalNumberCompany && (
                <FormBootstrap.Text className="text-danger">
                  {errors.customer.fiscalNumberCompany.message}
                </FormBootstrap.Text>
              )}
            </FormBootstrap.Label>
          </FormBootstrap.Group>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default FormCustomer;
