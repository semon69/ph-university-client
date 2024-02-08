/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<any>;
  children: React.ReactNode;
} & TFormConfig;

const PHFrom = ({ onSubmit, children, resolver }: TFormProps) => {

  const formConfig: TFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHFrom;
