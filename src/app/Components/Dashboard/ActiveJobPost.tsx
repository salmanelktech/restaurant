import { DoubleRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const ActiveJobPost = () => {
  const activeJob = [
    {
      id: 1,
      title: "UX UI Designer",
      applied: "143",
      date: "29 May, 2024",
    },
    {
      id: 2,
      title: "UX UI Designer",
      applied: "143",
      date: "29 May, 2024",
    },
    {
      id: 3,
      title: "UX UI Designer",
      applied: "100",
      date: "29 May, 2024",
    },
    {
      id: 4,
      title: "UX UI Designer",
      applied: "182",
      date: "29 May, 2024",
    },
  ];

  return (
    <>
      <div className="bg-white border border-[#E8E8E8] rounded-xl shadow h-full p-6 mb-5">
        <h5 className="font-bold text-lg mb-4">Active Job Post</h5>

        <ul className="h-[450px] overflow-hidden">
          {activeJob.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-[#E8E8E8] shadow mb-4 p-4"
            >
              <h6 className="font-bold mb-2">{item.title}</h6>
              <p className="text-md mb-1">
                Candidates Applied:{" "}
                <strong className="ms-2">{item.applied}</strong>
              </p>
              <p className="text-md text-gray">Date Posted: {item.date}</p>
            </li>
          ))}
        </ul>

        <p className="text-center text-primary font-medium mt-2">
          <Link href="/">
            View All Job Posted <DoubleRightOutlined className="ms-1" />
          </Link>
        </p>
      </div>
    </>
  );
};

export default ActiveJobPost;
