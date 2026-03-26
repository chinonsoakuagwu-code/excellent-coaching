import "./PriceList.css";

const subjects = [
  { icon: "％", name: "Mathematics", price: "₦15,000", file: "mathematics.docx" },
  { icon: "🧾", name: "Commerce", price: "₦20,000", file: "commerce.docx" },
  { icon: "💬", name: "Languages", price: "₦13,000", file: "languages.docx" },
  { icon: "🔬", name: "Sciences", price: "₦13,000", file: "sciences.docx" },
  { icon: "⚖️", name: "Law", price: "₦11,827", file: "law.docx" },
  { icon: "📖", name: "Literature", price: "₦11,000", file: "literature.docx" },
];

const bundles = [
  {
    tag: "Save 10%",
    tagClass: "tag-accent",
    name: "3 Subjects Bundle",
    description: "3 Subject Access, Daily Classes, Standard Support, PDF Notes",
    btnClass: "btn-outline-green",
  },
  {
    tag: "Best Value",
    tagClass: "tag-primary",
    name: "All Subjects Bundle",
    description: "All Subject Access, Daily Classes, All Material, Full Mock Series, Interview Prep",
    btnClass: "btn-solid-green",
  },
];

function handleDownloadAll() {
  subjects.forEach(({ file }) => {
    const link = document.createElement("a");
    link.href = `/docs/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

export default function PriceList() {
  return (
    <div className="price-page">

      {/* Hero */}
      <div className="price-hero">
        <h1 className="price-heading">Our Price List</h1>
        <div className="price-underline" />
        <p className="price-subheading">
          Quality education at transparent and affordable rates
        </p>
      </div>

      <div className="price-content">

        {/* Subject Prices */}
        <section className="section">
          <h2 className="section-title">Subject Prices</h2>
          <div className="subjects-grid">
            {subjects.map((s) => (
              <a
                key={s.name}
                href={`/docs/${s.file}`}
                download={s.file}
                className="subject-card"
                title={`Download ${s.name} course document`}
              >
                <div className="subject-top">
                  <span className="subject-icon">{s.icon}</span>
                  <span className="subject-name">{s.name}</span>
                  <span className="subject-download-icon">⬇</span>
                </div>
                <div className="subject-price">
                  {s.price} <span className="subject-per">/ term</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Bundle & Save */}
        <section className="section">
          <h2 className="section-title">Bundle &amp; Save</h2>
          <div className="bundles-grid">
            {bundles.map((b) => (
              <div key={b.name} className="bundle-card">
                <div className={`bundle-tag ${b.tagClass}`}>{b.tag}</div>
                <h3 className="bundle-name">{b.name}</h3>
                <p className="bundle-desc">{b.description}</p>
                <button className={`bundle-btn ${b.btnClass}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Download All */}
        <div className="download-row">
          <button className="download-btn" onClick={handleDownloadAll}>
            ⬇ Download Full Price List PDF
          </button>
        </div>

      </div>
    </div>
  );
}
