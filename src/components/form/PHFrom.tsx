/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<any>;
  children: React.ReactNode;
};

const PHFrom = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};

export default PHFrom;
