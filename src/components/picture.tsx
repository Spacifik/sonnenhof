interface PictureProps {
  src: string;
}

const mobileViewport = "(min-width: 450px)";
const tabletViewport = "(min-width: 800px)";

export function Picture({ src }: PictureProps): JSX.Element {
  return (
    <picture className="w-full">
      {/* add different sizes later */}
      <img className="w-full" src={`/desktop/${src}`} alt={src} />
    </picture>
  );
}
