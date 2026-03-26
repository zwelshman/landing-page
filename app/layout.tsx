import type { Metadata } from 'next'
import Script from 'next/script' // Move imports to the top
import './globals.css'

export const metadata: Metadata = {
  title: 'Health Data Science Consulting | NHS Data Analytics Expert',
  description: 'Specialist consulting for healthcare data science, NHS datasets, clinical coding systems, and population health analytics. Expert in PySpark, Databricks, and secure research environments.',
  keywords: ['health data science', 'NHS analytics', 'clinical coding', 'ICD-10', 'SNOMED CT', 'PySpark', 'Databricks', 'healthcare consulting'],
  authors: [{ name: 'Health Data Science Consulting' }],
  openGraph: {
    title: 'Health Data Science Consulting',
    description: 'Unlock the full potential of your healthcare data with specialist consulting services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {/* The script goes here, inside the body but after the children */}
        <Script 
          src="https://context7.com" 
          data-library="/bhfdsc/standard-pipeline"
          strategy="afterInteractive" 
        />
      </body>
    </html>
  )
}
