import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TProps = {
  label: string;
  name: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
};

const PHSelect = ({ label, name, options, disabled }: TProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: {error} }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            options={options}
            disabled={disabled}
          />
          {error && <small style={{color: 'red'}}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
