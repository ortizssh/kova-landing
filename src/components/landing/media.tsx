import { IMG, type Content } from "@/lib/kovaContent";
import { rev } from "./util";

export function ImageBand({
  id,
  kicker,
  title,
  height,
}: {
  id: string;
  kicker?: string;
  title?: string;
  height?: number;
}) {
  return (
    <section className="band" {...rev(0)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="band-img"
        src={IMG.u(id, 1800)}
        alt={title || ""}
        loading="lazy"
        style={height ? { height } : undefined}
      />
      <div className="band-cap">
        {kicker && <span className="bk">{kicker}</span>}
        {title && <span className="bt">{title}</span>}
      </div>
    </section>
  );
}

export function GalleryRow({ t }: { t: Content }) {
  const m = t.media;
  const imgs = [IMG.galA, IMG.galB, IMG.galC];
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head" {...rev(0)}>
          <span className="eyebrow">{m.galleryK}</span>
          <h2 className="display">{m.galleryT}</h2>
        </div>
        <div className="gallery">
          {m.gallery.map((g, i) => (
            <figure className="gframe" key={i} {...rev(i * 110)} style={{ ...rev(i * 110).style, margin: 0 }}>
              <div className="gimgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.u(imgs[i], 900)} alt={g.cap} loading="lazy" />
              </div>
              <figcaption className="gmeta">
                <span className="gn">{g.k}</span>
                <span className="gc">{g.cap}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
