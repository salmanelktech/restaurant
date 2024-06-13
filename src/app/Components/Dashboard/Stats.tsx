import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";

export const Stats = () => {
  const Stats = [
    {
      id: 1,
      title: "Active Jobs Post",
      count: "20",
      img: "/icon/post.svg",
    },
    {
      id: 2,
      title: "Total Applicants",
      count: "320",
      img: "/icon/applicant.svg",
    },
    {
      id: 3,
      title: "Applications Screened by AI",
      count: "420",
      img: "/icon/screened.svg",
    },
  ];

  return (
    <>
      <Row gutter={15} className="justify-center">
        {Stats.map((item) => (
          <Col xs={24} md={12} lg={8} key={item.id}>
            <div className="bg-white rounded-2xl border border-[#E8E8E8] shadow mb-4 p-6">
              <div className="flex items-center">
                <span className="shadow rounded-[50%] flex justify-center items-center w-[60px] h-[60px]">
                  <Image
                    className="object-contain"
                    width={32}
                    height={32}
                    src={item.img}
                    alt="icon"
                  />{" "}
                </span>
                <div className="ms-5">
                  <p className="font-light text-gray mb-2">{item.title}</p>
                  <h3 className="text-2xl font-bold">{item.count}</h3>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};
