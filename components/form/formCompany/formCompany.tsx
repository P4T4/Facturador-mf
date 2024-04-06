import { FunctionComponent } from "react";
import { Card, Container, Form as FormBootstrap } from "react-bootstrap";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInputsProps } from "src/app/utils/form-inputs.interface";

interface FormCompanyProps {
  register: UseFormRegister<FormInputsProps>;
  errors: FieldErrors<FormInputsProps>;
}

const FormCompany: FunctionComponent<FormCompanyProps> = ({
  register,
  errors,
}) => {
  return (
    <Card>
      <Card.Header>Datos Empresa Prestadora</Card.Header>
      <Card.Body>
        <Container className="d-flex gap-3">
          <FormBootstrap.Group className="mb-3 flex-grow-1">
            <FormBootstrap.Label>
              Nombre
              <FormBootstrap.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("company.nameCompany", {
                  required: "Nombre es obligatorio",
                })}
              />
              {errors.company?.nameCompany && (
                <FormBootstrap.Text className="text-danger">
                  {errors.company.nameCompany.message}
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
                {...register("company.fiscalNumberCompany", {
                  required: "Nit o razón social es obligatoria",
                })}
              />
              {errors.company?.fiscalNumberCompany && (
                <FormBootstrap.Text className="text-danger">
                  {errors.company.fiscalNumberCompany.message}
                </FormBootstrap.Text>
              )}
            </FormBootstrap.Label>
          </FormBootstrap.Group>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default FormCompany;
