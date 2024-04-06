"use client";
import { FunctionComponent } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import "@components/form/form.css";
import { Button, Container, Form as FormBootstrap } from "react-bootstrap";
import FormCompany from "@components/form/formCompany/formCompany";
import { FormInputsProps } from "@shared/utils/form-inputs.interface";
import FormInvoice from "@components/form/formInvoice/formInvoice";
import FormCustomer from "@components/form/formCustomer/formCustomer";
import { useRouter } from "next/navigation";
import { Rutas } from "@shared/constants/rutas.enum";
import { useAppDispatch } from "@lib/store";
import { setInvoiceState } from "@lib/invoice";

const Form: FunctionComponent<unknown> = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid, isSubmitted },
    control,
  } = useForm<FormInputsProps>({
    defaultValues: {
      company: {
        nameCompany: "Montacargas Titanic",
        fiscalNumberCompany: 1000000000,
      },
      invoice: {
        products: [],
      },
    },
  });
  const onSubmit: SubmitHandler<FormInputsProps> = (
    params: FormInputsProps
  ) => {
    if (params.invoice.products.length === 0) {
      return;
    }
    dispatch(setInvoiceState(params));
    router.push(Rutas.FACTURA, { scroll: false });
  };
  const onError: SubmitErrorHandler<FormInputsProps> = (errors) => {
    console.log(errors, isValid);
  };

  return (
    <Container>
      <FormBootstrap
        onSubmit={handleSubmit(onSubmit, onError)}
        className="d-flex flex-column flex-wrap gap-3 justify-content-center"
      >
        <FormCompany register={register} errors={errors} />
        <FormCustomer register={register} errors={errors} />
        <FormInvoice
          register={register}
          errors={errors}
          getValues={getValues}
          setValue={setValue}
          control={control}
          isSubmitted={isSubmitted}
        />
        <Container className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Generar Factura
          </Button>
        </Container>
      </FormBootstrap>
    </Container>
  );
};

export default Form;
