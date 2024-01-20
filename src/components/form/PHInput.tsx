import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPhInput ={
    type: string;
    name: string;
    label: string
}

const PHInput = ({ type, name, label }: TPhInput) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label ? label : null}

      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
