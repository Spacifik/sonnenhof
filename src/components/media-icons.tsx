import { MediaIconWrapper } from "./media-icon-wrapper";

export function InstagramIcon(): JSX.Element {
  return (
    <MediaIconWrapper>
      <a
        href="https://www.instagram.com/michelhotel/"
        className="fab fa-instagram"
      />
    </MediaIconWrapper>
  );
}

export function TwitterIcon(): JSX.Element {
  return (
    <MediaIconWrapper>
      <a href="https://twitter.com/michelhotels" className="fab fa-twitter" />
    </MediaIconWrapper>
  );
}

export function FacebookIcon(): JSX.Element {
  return (
    <MediaIconWrapper>
      <a
        href="https://www.facebook.com/michelhotel"
        className="fab fa-facebook-f"
      />
    </MediaIconWrapper>
  );
}

export function TikTokIcon(): JSX.Element {
  return (
    <MediaIconWrapper>
      <a
        href="https://www.tiktok.com/@michelhotel"
        className="fab fa-tiktok "
      />
    </MediaIconWrapper>
  );
}
