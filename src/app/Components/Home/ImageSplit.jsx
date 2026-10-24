import Image from "next/image";

export default function ImageSplit({
  eyebrow,
  title,
  body,
  callout,
  img,
  reverse = false,
  dark = false,
}) {
  return (
    <section className={`bz-section bz-split-section${dark ? " dark" : ""}${reverse ? " reverse" : ""}`}>
      <div className="bz-container">
        <div className={`bz-split${reverse ? " reverse" : ""}`}>
          <div className="bz-split-text">
            {eyebrow && <p className="bz-eyebrow">{eyebrow}</p>}
            <h2 className="bz-h2">{title}</h2>
            <p className="bz-lead" style={{ maxWidth: "100%" }}>
              {body}
            </p>
            {callout && (
              <div className="bz-callout">
                <span className="heart">♥</span>
                {callout}
              </div>
            )}
          </div>
          <div className="bz-split-media">
            <Image
              src={img}
              alt=""
              width={640}
              height={480}
              className="bz-split-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
