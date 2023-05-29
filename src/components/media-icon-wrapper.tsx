export function MediaIconWrapper({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>): JSX.Element {
  return (
    <div
      className={`${className} cursor-pointer rounded-full flex text-primary-500 hover:text-primary-200
      text-2xl w-12 h-12 
      xl:text-3xl
      2xl:text-4xl 
      `}
    >
      {children}
    </div>
  );
}
