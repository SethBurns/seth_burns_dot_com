export function Scuba() {
  return (
    <div className="flex flex-col w-full h-full -z-20 justify-center">
      <video
        src="./assets/WolfEelBackground.mp4"
        className="brightness-75 -z-10 bg-center object-cover w-screen h-screen fixed top-0 left-0"
        autoPlay
        loop
        muted
      />
      <h1 className="text-center text-white">This Page is a work in Progress</h1>
    </div>
  );
}
