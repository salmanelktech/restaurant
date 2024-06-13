import AllApplicantsComponent from "../Components/AllApplicants/AllApplicants";

const AllApplicants = () => {
  return (
    <>
      <div className="mb-6">
        <h3 className="font-semibold text-[20px]">All Applicants Overview</h3>
        <p className="text-[14px] text-gray">
          A comprehensive overview of candidates who have applied for various
          positions
        </p>
      </div>

      <AllApplicantsComponent />
    </>
  );
};

export default AllApplicants;
