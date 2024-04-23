export default function GradientCircle({ icon, alt }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative">
        <div className="opacity-40 rounded-full w-[8rem] h-[8rem] bg-gradient-to-b from-rgba-green-10 to-transparent flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[5rem] h-[5rem] bg-gradient-to-b from-rgba-green-20 to-transparent"></div>
        </div>
        <img
          src={icon}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt={alt}
        />
      </div>
    </div>
  );
}
