/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm } from "react-hook-form";

type TFormProps = {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
};

const PHFrom = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHFrom;

