import { FormInputsProps } from "@shared/utils/form-inputs.interface";
import { FunctionComponent, useState } from "react";
import { Button, Form as FormBootstrap } from "react-bootstrap";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

interface FormProductsProps {
  getValues: UseFormGetValues<FormInputsProps>;
  setValue: UseFormSetValue<FormInputsProps>;
}

const FormProducts: FunctionComponent<FormProductsProps> = ({
  getValues,
  setValue,
}) => {
  const initFormValues = () => {
    setDescription("");
    setValor("");
    setCantidad(0);
  };
  const handleSaveProduct = () => {
    setValue("invoice.products", [
      ...getValues().invoice.products,
      { description, value: parseInt(valor), quantity: cantidad },
    ]);
    initFormValues();
  };
  const [description, setDescription] = useState("");
  const [valor, setValor] = useState("");
  const [cantidad, setCantidad] = useState(0);
  return (
    <tr>
      <td className="align-middle text-center">
        <Button type="button" onClick={handleSaveProduct}>
          Agregar
        </Button>
      </td>
      <td>
        <FormBootstrap.Group className="mb-3 flex-grow-1">
          <FormBootstrap.Label>
            Descripción
            <FormBootstrap.Control
              type="text"
              placeholder="Descripción nuevo producto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormBootstrap.Label>
        </FormBootstrap.Group>
      </td>
      <td>
        <FormBootstrap.Group className="mb-3 flex-grow-1">
          <FormBootstrap.Label>
            Valor
            <FormBootstrap.Control
              type="text"
              placeholder="Valor nuevo producto"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </FormBootstrap.Label>
        </FormBootstrap.Group>
      </td>
      <td>
        <FormBootstrap.Group className="mb-3 flex-grow-1">
          <FormBootstrap.Label>
            Cantidad
            <FormBootstrap.Control
              type="number"
              placeholder="Cantidad del producto"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </FormBootstrap.Label>
        </FormBootstrap.Group>
      </td>
    </tr>
  );
};

export default FormProducts;
