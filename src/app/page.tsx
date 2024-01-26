import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-[1080px] mx-auto mt-6 border border-1-#ccc">
        <video src="/media/video01.mp4" controls />
      </div>
    </>
  );
}
