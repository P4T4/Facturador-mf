"use client";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Stepper } from "react-form-stepper";
import { useAppDispatch, useAppSelector } from "@lib/store";
import { getNewListSteps } from "@shared/constants/steps.const";
import { setStepsState } from "@lib/steps";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const setStateSecondStep = () => {
    const newListSteps = getNewListSteps(pathname);
    dispatch(setStepsState(newListSteps));
  };
  useEffect(setStateSecondStep, [dispatch, pathname]);
  const steps = useAppSelector((state) => state.steps.steps);

  return (
    <Container>
      <Stepper steps={steps} />
    </Container>
  );
};

export default Header;
