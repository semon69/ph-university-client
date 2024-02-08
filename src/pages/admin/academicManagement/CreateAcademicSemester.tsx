import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name" />
          <PHSelect />
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
