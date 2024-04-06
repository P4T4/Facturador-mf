import { Rutas } from "./rutas.enum";

export const STEPS = [
  { label: "Formulario", path: Rutas.INICIO_FORMULARIO },
  { label: "Factura", path: Rutas.FACTURA },
];

const getIndexActiveStep = (pathName: string) => {
  return STEPS.findIndex((step) => step.path === pathName);
};

export const getNewListSteps = (pathName: string) => {
  const indexActive: number = getIndexActiveStep(pathName);
  return STEPS.map((step, index) => ({
    ...step,
    completed: index < indexActive,
    active: index === indexActive,
  }));
};
