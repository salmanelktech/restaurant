"use client";
import { DatePicker, Form, Select, Table, Tag, Input } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface DataType {
  key: React.Key;
  name: string;
  title: string;
  date: string;
  status: string;
  image: string;
  email: string;
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Hired":
      return { backgroundColor: "#30C77B33", color: "#30C77B" };
    case "Offer Sent":
      return { backgroundColor: "#8A7DDC33", color: "#8A7DDC" };
    case "Applied":
      return { backgroundColor: "#1F7F7E33", color: "#1F7F7E" };
    default:
      return {};
  }
};

const dataSource: DataType[] = [
  {
    key: "1",
    name: "Hamza Khalid",
    title: "Web Designer",
    date: "23 May 2024",
    status: "Hired",
    image: "/avatar/1.png",
    email: "hamzakhalid@gmail.com",
  },
  {
    key: "2",
    name: "Guy Hawkins",
    title: "Medical Assistant",
    date: "23 May 2024",
    status: "Offer Sent",
    image: "/avatar/2.png",
    email: "sara.cruz@example.com",
  },
  {
    key: "3",
    name: "Annette Black",
    title: "President of Sales",
    date: "23 May 2024",
    status: "Applied",
    image: "/avatar/3.png",
    email: "debra.holt@example.com",
  },
  {
    key: "4",
    name: "Eleanor Pena",
    title: "Medical Assistant",
    date: "23 May 2024",
    status: "Applied",
    image: "/avatar/4.png",
    email: "tim.jennings@example.com",
  },

  {
    key: "5",
    name: "Dianne Russell",
    title: "Medical Assistant",
    date: "23 May 2024",
    status: "Applied",
    image: "/avatar/5.png",
    email: "dolores.chambers@example.com",
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
    title: "Job Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Applied On",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      const styles = getStatusStyles(status);
      return (
        <Tag
          className="rounded-lg w-[100px] text-center border-0 font-medium px-4 py-2"
          style={styles}
        >
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

const AllApplicantsComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full items-center gap-4 mb-5">
        <Input
          className="max-w-screen-lg bg-[#F6F7FA]"
          placeholder="Search"
          suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <p className="font-medium">Filters</p>
        <Form.Item name="month" className="w-full md:w-[200px] mb-0">
          <Select allowClear placeholder="Status">
            <Option value="hired">Hired</Option>
            <Option value="offer">Offer Sent</Option>
            <Option value="applied">Applied</Option>
          </Select>
        </Form.Item>
        <Form.Item name="date-picker" className="w-full md:w-[200px] mb-0">
          <DatePicker placeholder="Select Date" />
        </Form.Item>
      </div>

      <Table dataSource={dataSource} columns={columns} scroll={{ x: 700 }} />
    </>
  );
};

export default AllApplicantsComponent;
