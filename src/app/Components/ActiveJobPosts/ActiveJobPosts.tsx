"use client";
import { DatePicker, Form, Input, Select, Table, Tag } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

interface DataType {
  key: React.Key;
  title: string;
  department: string;
  date: string;
  status: string;
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Open":
      return { backgroundColor: "#30C77B33", color: "#30C77B" };
    case "Closed":
      return { backgroundColor: "#DC2A2A33", color: "#DC2A2A" };
    case "Drafts":
      return { backgroundColor: "#82828233", color: "#828282" };
    default:
      return {};
  }
};

const dataSource: DataType[] = [
  {
    key: "1",
    title: "Project Manager",
    department: "Project Management",
    date: "23 May 2024",
    status: "Open",
  },
  {
    key: "2",
    title: "Project Manager",
    department: "Project Management",
    date: "03 May 2024",
    status: "Closed",
  },
  {
    key: "3",
    title: "Project Manager",
    department: "Project Management",
    date: "03 May 2024",
    status: "Drafts",
  },
  {
    key: "4",
    title: "Project Manager",
    department: "Project Management",
    date: "23 May 2024",
    status: "Open",
  },
  {
    key: "5",
    title: "Project Manager",
    department: "Project Management",
    date: "03 May 2024",
    status: "Closed",
  },
  {
    key: "6",
    title: "Project Manager",
    department: "Project Management",
    date: "23 May 2024",
    status: "Open",
  },
];

const columns = [
  {
    title: "Job Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Date Posted",
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

const ActiveJobPosts: React.FC = () => {
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
          <Select allowClear placeholder="Job Status">
            <Option value="open">Open</Option>
            <Option value="closed">Closed</Option>
            <Option value="draft">Draft</Option>
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

export default ActiveJobPosts;
