type IconProps = {
  color?: string;
  title?: string;
};

export const IconPlay = ({ color = "#A445ED", title }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      {title && <title>{title}</title>}
      <g fill={color} fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </svg>
  );
};
