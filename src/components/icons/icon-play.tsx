type IconProps = {
  title?: string;
};

export const IconPlay = ({ title }: IconProps) => {
  return (
    <div className="group inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        className="transition-all duration-300"
      >
        {title && <title>{title}</title>}
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          className="fill-[#E8D0FB] transition-all duration-300 group-hover:fill-customPurple dark:fill-[#2D143F]"
        />
        <path
          d="M29 27v21l21-10.5z"
          className="fill-customPurple transition-all duration-300 group-hover:fill-white"
        />
      </svg>
    </div>
  );
};
