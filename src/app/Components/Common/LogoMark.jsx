export default function LogoMark({ size = 28, className = "bz-logo-mark" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" fill="#FF4F00" />
      <path d="M16 3L28 10L16 17L4 10L16 3Z" fill="#FF7A3D" />
      <path d="M16 17V29L28 22V10L16 17Z" fill="#E03E00" />
      <path d="M16 17V29L4 22V10L16 17Z" fill="#C43500" />
    </svg>
  );
}
