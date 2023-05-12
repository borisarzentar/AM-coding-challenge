export default function ArrowRight({ color = '#C4C4C4' }) {
  return (
    <svg
      width="11"
      height="17"
      viewBox="0 0 11 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(-180deg)' }}
    >
      <path
        d="M10.4638 2.18875L8.52502 0.25L0.275024 8.5L8.52502 16.75L10.4638 14.8113L4.16627 8.5L10.4638 2.18875Z"
        fill={color}
      />
    </svg>
  );
}
