import limit from "../../../../../utils/limit";

const getBlogByAlias = async (blogAlias) => {
  const payload = [
    {
      requestId: "req-1",
      uri: "/en/api/router?path=/en/blogs/" + blogAlias.trim(),
      action: "view",
      headers: {
        "Content-Type": "application/json",
      },
    },
    {
      requestId: "req-2",
      action: "view",
      waitFor: ["req-1"],
      uri: "{{req-1.body@$.jsonapi.individual}}",
      headers: {
        "Content-Type": "application/json",
      },
    },
  ];
  const response = await fetch(
    "http://localhost:8080/subrequests?_format=json",
    {
      body: JSON.stringify(payload),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
      },
    }
  );
  const data = await response.json();
 return JSON.parse(data['req-1'].body).data
  //return JSON.parse(data["req-2#uri{0}"].body).data;
};

export default async (props) => {
  const { blogAlias } = props.params;

   const tattaandfarewell = await getBlogByAlias(blogAlias);
 
  return (
    <>
      {
        <div>
          <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-medium mb-4">{tattaandfarewell.attributes.title}</h2>
              <p className="text-gray-700 mb-4">
              {limit(tattaandfarewell.attributes.body.value, 80)} 
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};
