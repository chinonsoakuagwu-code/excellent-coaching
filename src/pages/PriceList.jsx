import "./PriceList.css";

const subjects = [
  { icon: "％", name: "Mathematics", price: "₦3,000" },
  { icon: "🧾", name: "Commerce", price: "₦3,000" },
  { icon: "💬", name: "Languages", price: "₦3,000" },
  { icon: "🔬", name: "Sciences", price: "₦3,000" },
  { icon: "⚖️", name: "Law", price: "₦2,000" },
  { icon: "📖", name: "Literature", price: "₦2,000" },
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

function PriceList() {
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
              <div key={s.name} className="subject-card">
                <div className="subject-top">
                  <span className="subject-icon">{s.icon}</span>
                  <span className="subject-name">{s.name}</span>
                </div>
                <div className="subject-price">
                  {s.price} <span className="subject-per">/ term</span>
                </div>
              </div>
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

        {/* Download */}
        <div className="download-row">
          <button className="download-btn">⬇ Download Full Price List PDF</button>
        </div>

      </div>
    </div>
  );
}

export default PriceList;