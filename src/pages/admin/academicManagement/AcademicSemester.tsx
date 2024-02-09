import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAcademicSemestersQuery } from "../../../redux/features/Admin/academnicManagement";
import { useState } from "react";

interface DataType {
  key: React.Key;
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

const AcademicSemester = () => {
  const [params, setParams] = useState([]);
  const { data: academicSemester, isFetching } =
    useGetAcademicSemestersQuery(params);

  console.log(academicSemester);

  const tableData = academicSemester?.data?.map(
    ({ _id, name, code, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      code,
      year,
      startMonth,
      endMonth,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Spring",
          value: "Spring",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
    {
      title: "Actions",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log("params", filters, extra);

    if (extra.action === "filter") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const queryParams: any = [];

      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters?.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
