import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "Emon",
      middleName: "Miya",
      lastName: "Smith",
    },
    gender: "male",
    dateOfBirth: "2005-05-15",
    bloodGroup: "A+",

    email: "student2@example12345.com",
    contactNo: "123-456-7890",
    emergencyContactNo: "987-654-3210",
    presentAddress: "123 Main St, City, Country",
    permanentAddress: "456 Park Ave, City, Country",

    guardian: {
      fatherName: "Michael Smith",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Emily Smith",
      motherOccupation: "Doctor",
      motherContactNo: "444-555-6666",
    },

    localGuardian: {
      name: "Jane Doe",
      occupation: "Teacher",
      contactNo: "777-888-9999",
      address: "789 Side St, City, Country",
    },

    admissionSemester: "65c1ea4042b2fe869de1d4fc",
    isDeleted: false,
    academicDepartment: "65c1e7477381d959446856b3",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(data));

    // console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHFrom onSubmit={onSubmit}>
          <Divider>Personal Info</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="" label="Date of birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="bloodGroup" label="Blood Group" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHFrom>
      </Col>
    </Row>
  );
};

export default CreateStudent;
