type IconProps = {
  color?: string;
  title?: string;
};

export const IconArrowDown = ({ color = "#A445ED", title }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
    >
      {title && <title>{title}</title>}
      <path fill="none" stroke={color} strokeWidth="1.5" d="m1 1 6 6 6-6" />
    </svg>
  );
};
