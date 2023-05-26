import { MediaIconWrapper } from "./media-icon-wrapper";

interface IconProps {
  className?: string;
}

export function InstagramIcon({ className }: IconProps): JSX.Element {
  return (
    <MediaIconWrapper className={className}>
      <a
        href="https://www.instagram.com/michelhotel/"
        className="fab fa-instagram"
        onClick={(evt) => evt.stopPropagation()}
      />
    </MediaIconWrapper>
  );
}

export function TwitterIcon({ className }: IconProps): JSX.Element {
  return (
    <MediaIconWrapper className={className}>
      <a
        href="https://twitter.com/michelhotels"
        className="fab fa-twitter"
        onClick={(evt) => evt.stopPropagation()}
      />
    </MediaIconWrapper>
  );
}

export function FacebookIcon({ className }: IconProps): JSX.Element {
  return (
    <MediaIconWrapper className={className}>
      <a
        href="https://www.facebook.com/michelhotel"
        className="fab fa-facebook-f"
        onClick={(evt) => evt.stopPropagation()}
      />
    </MediaIconWrapper>
  );
}

export function TikTokIcon({ className }: IconProps): JSX.Element {
  return (
    <MediaIconWrapper className={className}>
      <a
        href="https://www.tiktok.com/@michelhotel"
        className="fab fa-tiktok "
        onClick={(evt) => evt.stopPropagation()}
      />
    </MediaIconWrapper>
  );
}
