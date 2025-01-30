import { Html } from "@react-three/drei";
function Loader() {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 bg-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
}

export default Loader;
