export function AboutMe() {
  return (
    <div className="w-2/5 flex items-center justify-evenly">
      <div className="w-2/5">
        <img
          src="./assets/SethProfile.png"
          alt="Seth"
          className="object-contain object-center rounded-full"
        />
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-2xl">Hi! I'm Seth.</h2>
        <h2 className="text-2xl">And I'm well rounded.</h2>
      </div>
      <p></p>
    </div>
  );
}
