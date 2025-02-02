export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arwin Arun Swapna",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Tenex Software Solutions",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of South Florida",
    },
    url: "https://arwinswapna.netlify.app",
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
    url: "https://arwinswapna.netlify.app",
    description:
      "Personal portfolio website of Arwin Arun Swapna, Software Engineer at Tenex Software Solutions",
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
