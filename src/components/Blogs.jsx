import limit from "../../utils/limit";
import Link from "next/link";

const Blogs = (props) => {
  return (
    <div className=" grid  flex justify-center items-center  ">
      {props.blogs.data.map((i, elt) => {
        return (
          <>
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6     ">
              <h2 className="text-xl font-medium mb-4">{i.attributes.title}</h2>
              <p className="text-gray-700 mb-4">
                {limit(i.attributes.body.value, 20)}
              </p>
              <Link
                className="text-blue-600 font-medium mt-2 inline-flex items-center"
                href={`${i.attributes.path.alias}`}
              >
                {" "}
                Read more
              </Link>{" "}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Blogs;
 