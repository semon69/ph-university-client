import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPhInput = {
  type: string;
  name: string;
  label: string;
  disabled?: boolean
};

const PHInput = ({ type, name, label, disabled }: TPhInput) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} disabled={disabled} />
            {error && <small style={{ color: "red" }}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
