

export function MediaIconWrapper({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>): JSX.Element {
  return (
    <div
      className={`${className} md:hover:brightness-150 cursor-pointer rounded-full flex text-primary-regular
      text-2xl w-12 h-12 
      xl:text-3xl w-14 h-14
      2xl:text-4xl  w-20 h-16
      `}
    >
      {children}
    </div>
  );
}