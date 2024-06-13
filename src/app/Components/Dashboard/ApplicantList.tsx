"use client";
import { Form, Select, Table, Tag } from "antd";
import { DoubleRightOutlined, EyeOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  rating: string;
  status: string;
  image: string;
  email: string;
}

const dataSource: DataType[] = [
  {
    key: "1",
    name: "Hamza Khalid",
    date: "23 May 2024",
    rating: "3",
    status: "Applied",
    image: "/avatar/1.png",
    email: "hamzakhalid@gmail.com",
  },
  {
    key: "2",
    name: "Guy Hawkins",
    date: "23 May 2024",
    rating: "4",
    status: "Applied",
    image: "/avatar/2.png",
    email: "sara.cruz@example.com",
  },
  {
    key: "3",
    name: "Annette Black",
    date: "23 May 2024",
    rating: "1",
    status: "Applied",
    image: "/avatar/3.png",
    email: "debra.holt@example.com",
  },
  {
    key: "4",
    name: "Eleanor Pena",
    date: "23 May 2024",
    rating: "2",
    status: "Applied",
    image: "/avatar/4.png",
    email: "tim.jennings@example.com",
  },
];

const columns = [
  {
    title: "Applicant Name",
    dataIndex: "name",
    key: "name",
    render: (_: any, record: DataType) => (
      <div className="flex items-center">
        <Image
          width={46}
          height={46}
          src={record.image}
          alt={record.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-medium">{record.name}</p>
          <span className="text-gray-500 text-[14px] text-[#4F4F4F]">
            {record.email}
          </span>
        </div>
      </div>
    ),
  },

  {
    title: "Applied Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      return (
        <Tag className="rounded-lg w-[100px] bg-[#1F7F7E33] text-[#1F7F7E] text-center border-0 font-medium px-4 py-2">
          {status}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, record: any) => (
      <Link className="bg-white px-3 py-2.5 rounded-lg" href={`/`}>
        <EyeOutlined className="text-lg text-[#4F4F4F]" />
      </Link>
    ),
  },
];

const { Option } = Select;

const ApplicantList = () => {
  return (
    <>
      <div className="bg-white border border-[#E8E8E8] rounded-xl shadow p-6 lg:h-full mb-5">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg mb-4">Applicant Detail</h3>

          <Form.Item name="month" className="w-[130px]">
            <Select allowClear placeholder="Select">
              <Option value="jan">January</Option>
              <Option value="feb">Feburary</Option>
            </Select>
          </Form.Item>
        </div>
        <Table dataSource={dataSource} columns={columns} scroll={{ x: 700 }} />

        <p className="text-center text-primary font-medium">
          <Link href="/">
            View All Applicants <DoubleRightOutlined className="ms-1" />
          </Link>
        </p>
      </div>
    </>
  );
};

export default ApplicantList;
