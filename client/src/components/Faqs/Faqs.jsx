function Faqs({ faqs }) {
  const {
    id,
    productName,
    faqInformation,
  } = faqs;

  return (
    <div className="faqContainer" key={id}>
      <h2>Faq Information</h2>
      <p>Product Name: {productName}</p>
      <p>Faqs Information: {faqInformation}</p>
    </div>
  );
}

export default Faqs;
