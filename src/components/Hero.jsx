export default function Hero({
  children,
  title = "Title",
  lead = null,
  image = null,
}) {
  return (
    <section className="container py-5 hero">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold text-primary">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
        {image && (
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="hero-image-wrapper">
              <img src={image.src} alt={image.alt} className="hero-image" />
              <div className="hero-overlay"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
