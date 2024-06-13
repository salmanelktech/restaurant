"use client";
import { Form, Select } from "antd";
import Image from "next/image";

const { Option } = Select;

const ApplicantsPipeline = () => {
  return (
    <>
      <div className="bg-white border border-[#E8E8E8] rounded-xl shadow p-6 mb-5">
        <div className="flex justify-between items-start">
          <h5 className="font-bold text-lg mb-4">Applicants Pipeline Chart</h5>

          <Form.Item name="month" className="w-[120px]">
            <Select allowClear placeholder="Select">
              <Option value="jan">January</Option>
              <Option value="feb">Feburary</Option>
            </Select>
          </Form.Item>
        </div>

        <Image
          className="w-100 m-auto"
          width={720}
          height={240}
          src="/chart.png"
          alt=""
        />
      </div>
    </>
  );
};

export default ApplicantsPipeline;
