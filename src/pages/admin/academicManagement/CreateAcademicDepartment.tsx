import { Button, Col, Flex } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TResponse } from "../../../types/global.types";
import { TAcademicDepartment } from "../../../types/academicManagement.types";
import { useCreateAcademicDepartmentMutation, useGetAcademicFacultiesQuery } from "../../../redux/features/Admin/academnicManagement";
import { toast } from "sonner";
import { academicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import PHSelect from "../../../components/form/PHSelect";


const CreateAcademicDepartment = () => {
  const [createAcademicDepartment] = useCreateAcademicDepartmentMutation();
const {data: academicFaculties} = useGetAcademicFacultiesQuery(undefined)

  const facultyOptions = academicFaculties?.data?.map((item) => ({
    value: item?._id,
    label: item?.name
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait...");
    const departmentData = {
      name: data?.name,
      academicFaculty: data?.academicFaculty
    };

    try {
      const res = (await createAcademicDepartment(departmentData)) as TResponse<
        TAcademicDepartment[]
      >;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Department Created", { id: toastId });
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
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHInput type={"text"} name={"name"} label={"Faculty Name"} />
          <PHSelect
            name={"academicFaculty"}
            label={"Academic Faculty"}
            options={facultyOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
