export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arwin Arun Swapna",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "White & Case LLP",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of South Florida",
    },
    url: "https://portfolio.arunsar.dev",
    sameAs: [
      "https://github.com/arwin-swapna",
      "https://linkedin.com/in/arwinswapna",
    ],
    email: "arwinswapna@gmail.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arwin Arun Swapna Portfolio",
    url: "https://portfolio.arunsar.dev",
    description:
      "Personal portfolio website of Arwin Arun Swapna, Software Engineer at White & Case LLP",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
