export interface FormInputsProps {
  company: FormCompany;
  customer: FormCompany;
  invoice: {
    title: string;
    date: string;
    products: Products[];
  };
}

export interface Products {
  description: string;
  value: number;
  quantity: number;
}

export interface FormCompany {
  nameCompany: string;
  fiscalNumberCompany: number;
}
