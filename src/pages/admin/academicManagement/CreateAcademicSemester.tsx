import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../components/form/PHFrom";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constant/semester";
import { monthOptions } from "../../../constant/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useCreateAcademicSemestersMutation } from "../../../redux/features/Admin/academnicManagement";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.types";
import { TAcademicSemester } from "../../../types/academicManagement.types";

const currentDate = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentDate + number),
  label: String(currentDate + number),
}));

const CreateAcademicSemester = () => {
  const [createAcademicSemesters] = useCreateAcademicSemestersMutation();
  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait...");

    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    try {
      const res = (await createAcademicSemesters(semesterData)) as TResponse<TAcademicSemester[]>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, {id: toastId});
      } else {
        toast.success("Semester Created", {id: toastId});
      }
    } catch (error) {
      toast.error("SOmething went wrong");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            name={"name"}
            label={"Semester Name"}
            options={semesterOptions}
          />
          <PHSelect name={"year"} label={"Year"} options={yearOptions} />
          <PHSelect
            name={"startMonth"}
            label={"Start Month"}
            options={monthOptions}
          />
          <PHSelect
            name={"endMonth"}
            label={"End Month"}
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
