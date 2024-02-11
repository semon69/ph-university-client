import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAcademicSemestersQuery } from "../../../redux/features/Admin/academnicManagement";
import { Button, Col, Flex } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import PHSelect from "../../../components/form/PHSelect";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { semesterStatusOptions } from "../../../constant/semester";

const SemesterRegistration = () => {
  // const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAcademicSemestersQuery([
    { name: "sort", value: "year" },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // const toastId = toast.loading("Creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    // try {
    //   const res = (await addSemester(semesterData)) as TResponse<any>;
    //   console.log(res);
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success("Semester created", { id: toastId });
    //   }
    // } catch (err) {
    //   toast.error("Something went wrong", { id: toastId });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHFrom onSubmit={onSubmit}>
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <PHSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <PHInput type="text" name="minCredit" label="Min Credit" />
          <PHInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
