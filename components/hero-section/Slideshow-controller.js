const ControllerButton = ({ id, current, onClick }) => {
  return (
    <div
      className={`h-6 w-6 rounded-full border-2 border-light-grey cursor-pointer ${
        current ? "bg-navy" : ""
      }`}
      onClick={(e) => onClick(+e.target.id)}
      id={id}
    ></div>
  );
};

const SlideshowController = ({ currentIndex, selectIndex }) => {
  return (
    <div className="absolute bottom-4 left-[46%] -translate-x-1/2 flex justify-center mt-4 gap-2">
      <ControllerButton
        id="0"
        current={currentIndex === 0}
        onClick={selectIndex}
      />
      <ControllerButton
        id="1"
        current={currentIndex === 1}
        onClick={selectIndex}
      />
      <ControllerButton
        id="2"
        current={currentIndex === 2}
        onClick={selectIndex}
      />
      <ControllerButton
        id="3"
        current={currentIndex === 3}
        onClick={selectIndex}
      />
    </div>
  );
};

export default SlideshowController;
