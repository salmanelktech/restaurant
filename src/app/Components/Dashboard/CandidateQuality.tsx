import Image from "next/image";

const CandidateQuality = () => {
  return (
    <>
      <div className="bg-white border border-[#E8E8E8] rounded-xl shadow p-6 mb-5">
        <h5 className="font-bold text-lg mb-4">Candidate Quality</h5>
        <Image
          className="w-100 m-auto"
          width={450}
          height={250}
          src="/quality.png"
          alt=""
        />
      </div>
    </>
  );
};

export default CandidateQuality;
