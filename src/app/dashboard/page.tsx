import Link from "next/link";
import { Col, Row } from "antd";
import { Stats } from "../Components/Dashboard/Stats";
import CandidateQuality from "../Components/Dashboard/CandidateQuality";
import ApplicantsPipeline from "../Components/Dashboard/ApplicantsPipeline";
import ActiveJobPost from "../Components/Dashboard/ActiveJobPost";
import ApplicantList from "../Components/Dashboard/ApplicantList";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row text-center sm:justify-between items-center gap-4 mb-6">
        <h3 className="font-semibold text-[24px]">Overview</h3>
        <Link
          href="/my-plans"
          className="bg-primary rounded-lg text-white py-3 px-8"
        >
          Create Job Opening
        </Link>
      </div>
      <Stats />

      <Row gutter={20}>
        <Col xs={24} md={9}>
          <CandidateQuality />
        </Col>
        <Col xs={24} md={15}>
          <ApplicantsPipeline />
        </Col>
      </Row>

      <Row gutter={20}>
        <Col xs={24} lg={16} xl={18}>
          <ApplicantList />
        </Col>
        <Col xs={24} lg={8} xl={6}>
          <ActiveJobPost />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
