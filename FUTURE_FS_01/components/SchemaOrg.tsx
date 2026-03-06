export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Avadh Kalathiya',
    url: 'https://avadhkalathiya.dev',
    email: 'avadhkalathiya219@gmail.com',
    telephone: '+91 9023477456',
    jobTitle: 'Full Stack Developer &amp; Computer Engineering Student',
    sameAs: [
      'https://www.linkedin.com/in/avadhkalathiya-506154276',
      'https://github.com/avadhkalathiya',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'Python',
      'Java',
      'Data Structures & Algorithms',
      'Full Stack Development',
      'API Integration',
      'Generative AI',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Future Interns',
      },
      {
        '@type': 'Organization',
        name: 'BioTechTrek',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
