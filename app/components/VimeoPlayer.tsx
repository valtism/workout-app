import Script from "next/script";

export function VimeoPlayer({ id }: { id: string }) {
  return (
    <div>
      <iframe
        src={`https://player.vimeo.com/video/${id}`}
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </div>
  );
}
