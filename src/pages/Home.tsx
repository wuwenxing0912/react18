import pig from "../assets/images/pig.svg";
import add from "../assets/icons/add.svg";

export const Home: React.FC = () => {
  return (
    <div>
      <div flex justify-center items-center>
        <img src={pig} h-128px w-130px mt-20vh mb-20vh />
      </div>
      <div px-16px>
        <button w="100%" bg="#5C33BE" b-none rounded-8px text-white h-48px>
          开始记账
        </button>
      </div>
      <button
        fixed
        right-16px
        bottom-16px
        bg="#5C33BE"
        w-56px
        h-56px
        b-none
        rounded="50%"
        p-4px
        text-6xl
      >
        <img src={add} max-w="100%" max-h="100%" />
      </button>
    </div>
  );
};
