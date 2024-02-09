import { Button, Col, Flex } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import PHInput from "../../../components/form/PHInput";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/Admin/academnicManagement";
import { TResponse } from "../../../types/global.types";
import { toast } from "sonner";
import { TAcademicFaculty } from "../../../types/academicManagement.types";

const CreateAcademicFaculty = () => {
  const [createAcademicFaculty] = useCreateAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Please wait...')
    const facultyData = {
      name: data?.name,
    };
    try {
      const res = (await createAcademicFaculty(facultyData)) as TResponse<TAcademicFaculty[]>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Faculty Created", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom
          onSubmit={onSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHInput type={"text"} name={"name"} label={"Faculty Name"} />
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
