import Image from "next/image";
const Topsection = () => {
  return (
    <>
      <div className="w-full p-5 lg:px-10">
        <div className="w-full h-[30vh] md:h-[60vh]">
          <img
            alt="hero image"
            className="h-full w-full rounded-lg"
            src="https://fastly.picsum.photos/id/797/536/354.jpg?hmac=n_-3dZZJdk4lSEk9sES6RNCndoYWXQTwPBif0YSZjrQ"
          ></img>
        </div>
        <div className="flex flex-col md:flex-row w-full pt-5 gap-5">
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topsection;
