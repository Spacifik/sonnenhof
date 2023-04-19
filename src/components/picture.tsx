interface PictureProps {
  src: string;
}

const mobileViewport = "(min-width: 450px)";
const tabletViewport = "(min-width: 800px)";

export function Picture({ src }: PictureProps): JSX.Element {
  return (
    <picture>
      <source media={mobileViewport} srcSet={`/mobile/${src}`} />
      <source media={tabletViewport} srcSet={`/tablet/${src}`} />
      <img src={`/desktop/${src}`} alt={src} />
    </picture>
  );
}
