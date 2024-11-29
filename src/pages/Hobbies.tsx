import { useNavigate } from "react-router-dom";

const Hobbies = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-grow items-center justify-center gap-12 bg-gray-300">
      <div
        onClick={() => navigate("/hobbies/vinyl")}
        
        className="cursor-pointer w-[45%] h-64 bg-green-600 rounded-xl bg-music bg-cover hover:shadow-2xl hover:shadow-gray-600 transition"
      />
      <div className="cursor-pointer  w-[45%] h-64 rounded-xl bg-camping bg-cover hover:shadow-2xl hover:shadow-black transition" />
    </div>
  );
};
export default Hobbies;
