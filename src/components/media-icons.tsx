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
      />
    </MediaIconWrapper>
  );
}

export function TwitterIcon({ className }: IconProps): JSX.Element {
  return (
    <MediaIconWrapper className={className}>
      <a href="https://twitter.com/michelhotels" className="fab fa-twitter" />
    </MediaIconWrapper>
  );
}

export function FacebookIcon({ className }: IconProps): JSX.Element {
  return (
    <MediaIconWrapper className={className}>
      <a
        href="https://www.facebook.com/michelhotel"
        className="fab fa-facebook-f"
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
      />
    </MediaIconWrapper>
  );
}
