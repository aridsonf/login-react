import { IoIosArrowBack } from "react-icons/io";
import { useSlider } from "../../contexts/Slider/SliderContext";

function CloseSliderButton() {
  const { toggleSlider } = useSlider();

  return (
    <div className="absolute left-5 hidden lg:block md:block">
      <button
        className="
          mt-5 ml-4 w-10 h-10 border-white text-white rounded-full
          flex items-center justify-center bg-transparent border 
          border-black p-2.5 cursor-pointer transition-all duration-300 
          dark:border-white hover:border-blue-700 dark:hover:border-blue-700
          text-white hover:text-blue-700 dark:hover:text-blue-700
        "
        onClick={toggleSlider}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
}

export default CloseSliderButton;