import Link from "next/link";
import ActiveJobPosts from "../Components/ActiveJobPosts/ActiveJobPosts";

const ActiveJob = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row text-center sm:justify-between items-center gap-4 mb-6">
        <div className="text-start">
          <h3 className="font-semibold text-[20px]">Active Job Posts</h3>
          <p className="text-[14px]">
            Manage all your active job postings across various platforms from
            one place.
          </p>
        </div>
        <Link
          href="/my-plans"
          className="bg-primary rounded-lg text-white py-3 px-8"
        >
          Create Job Opening
        </Link>
      </div>

      <ActiveJobPosts />
    </>
  );
};

export default ActiveJob;
