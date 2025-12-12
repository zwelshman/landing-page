'use client'

import {
  Database,
  Brain,
  Shield,
  Workflow,
  Building2,
  FlaskConical,
  Rocket,
  ChevronDown,
  Code2,
  Server,
  Lock,
  LineChart,
  Heart,
  Microscope,
  Users,
  MapPin,
  GraduationCap,
  Building,
  Mail,
  ArrowRight,
  Sparkles,
  Activity
} from 'lucide-react'

const expertise = [
  {
    icon: Server,
    title: 'Big Data Infrastructure',
    description: 'Deep expertise in PySpark and Databricks optimisation for datasets spanning tens of millions of patient records. I architect scalable pipelines that transform raw administrative data into research-ready assets, reducing query times from hours to minutes.',
    highlights: ['PySpark', 'Databricks', 'Delta Lake', 'Spark SQL']
  },
  {
    icon: Code2,
    title: 'Clinical Coding Mastery',
    description: 'Comprehensive fluency across the full spectrum of clinical coding systems used in UK healthcare. I help teams navigate the complexities of mapping between vocabularies and building accurate clinical phenotypes.',
    highlights: ['ICD-10', 'OPCS-4', 'Read v2', 'SNOMED CT']
  },
  {
    icon: Lock,
    title: 'Secure Research Environments',
    description: 'Practical, hands-on experience working within the UK\'s leading trusted research environments. I understand the unique constraints and opportunities of working with sensitive health data under strict governance frameworks.',
    highlights: ['SAIL Databank', 'NHS SDE', 'OpenSAFELY', 'HIC']
  },
  {
    icon: Workflow,
    title: 'Research Pipeline Automation',
    description: 'Custom tooling for phenotype development, data curation, and end-to-end research pipeline automation. I build reproducible workflows that accelerate time-to-insight while maintaining the highest standards of data quality.',
    highlights: ['Phenotyping', 'Data Curation', 'CI/CD', 'MLOps']
  }
]

const clients = [
  {
    icon: FlaskConical,
    title: 'Academic Research Groups',
    description: 'Technical leadership and hands-on support for cardiovascular, oncology, and population health studies. I help research teams overcome data engineering challenges so they can focus on generating insights that improve patient outcomes.',
    examples: ['Cohort development', 'Linkage studies', 'Multi-source analytics']
  },
  {
    icon: Rocket,
    title: 'Health Tech Startups',
    description: 'Strategic and technical guidance for companies building innovative products on administrative health data. From feasibility assessments to production-ready data pipelines, I help startups navigate the unique challenges of healthcare data.',
    examples: ['Product development', 'Data strategy', 'Technical architecture']
  },
  {
    icon: Building2,
    title: 'NHS Organisations',
    description: 'Supporting NHS trusts and integrated care boards to modernise their analytical capabilities. I help organisations move from reactive reporting to proactive, data-driven decision making that improves operational efficiency and patient care.',
    examples: ['Capacity planning', 'Pathway analysis', 'Outcomes monitoring']
  }
]

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '50M+', label: 'Patient Records Processed' },
  { value: '15+', label: 'Research Publications' },
  { value: '100%', label: 'Project Success Rate' }
]

const credentials = [
  {
    icon: GraduationCap,
    title: 'PhD in Machine Learning',
    subtitle: 'Medical Imaging Applications',
    description: 'Doctoral research applying deep learning to diagnostic imaging challenges'
  },
  {
    icon: Building,
    title: 'NHS Digital',
    subtitle: 'Senior Data Scientist',
    description: 'Worked at the heart of NHS data infrastructure and national datasets'
  },
  {
    icon: Heart,
    title: 'BHF Data Science Centre',
    subtitle: 'Technical Lead',
    description: 'Leading cardiovascular research data science initiatives'
  }
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 grid-overlay pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg animated-gradient flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg">HealthDataSci</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#expertise" className="text-gray-300 hover:text-white transition-colors">Expertise</a>
              <a href="#clients" className="text-gray-300 hover:text-white transition-colors">Clients</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="px-5 py-2 rounded-full animated-gradient font-medium hover:opacity-90 transition-opacity">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Health Data Science as a Service</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Unlock the Full Potential of{' '}
            <span className="gradient-text">Your Healthcare Data</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialist consulting for organisations working with NHS datasets, clinical coding systems, and population health analytics. Transforming complex health data into actionable insights that drive better patient outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full animated-gradient font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 group"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#expertise"
              className="px-8 py-4 rounded-full glass font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 card-hover">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Deep Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Over 8 years of hands-on experience transforming complex healthcare data into research-ready assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl p-8 card-hover group"
              >
                <div className="w-14 h-14 rounded-2xl animated-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section id="clients" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Partnering with organisations across the healthcare ecosystem to unlock the value of their data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl p-8 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <client.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{client.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{client.description}</p>
                  <div className="space-y-2">
                    {client.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by Leading <span className="gradient-text">Research Institutions</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Based in Leeds, I bring a unique combination of academic rigour and practical industry experience to every engagement. My background spans the full spectrum of health data science, from foundational research in machine learning for medical imaging to hands-on work with national NHS datasets.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                I understand the challenges you face because I&apos;ve been there. Whether it&apos;s navigating the complexities of data governance, optimising queries that run for hours, or building phenotypes that accurately capture clinical concepts, I&apos;ve developed battle-tested approaches that I now bring to my consulting work.
              </p>

              <div className="flex items-center gap-4 glass-strong rounded-2xl p-4">
                <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Based in Leeds, UK</div>
                  <div className="text-gray-400 text-sm">Available for remote and on-site engagements nationwide</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="glass-strong rounded-2xl p-6 card-hover flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{credential.title}</h3>
                    <div className="text-primary-400 text-sm mb-1">{credential.subtitle}</div>
                    <p className="text-gray-400">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 animated-gradient opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-20 h-20 rounded-2xl animated-gradient flex items-center justify-center mx-auto mb-8 pulse-glow">
                <Mail className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let&apos;s Start a <span className="gradient-text">Conversation</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re facing a specific technical challenge or looking to explore how data science can transform your organisation, I&apos;d love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@healthdatasci.com"
                  className="px-8 py-4 rounded-full animated-gradient font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 group"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Typical response time: <span className="text-white font-medium">Within 24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">HealthDataSci</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Health Data Science Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
