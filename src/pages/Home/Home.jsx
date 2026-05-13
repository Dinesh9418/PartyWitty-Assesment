import heroImg from '../../assets/hero.png'
import FeatureCard from '../../components/card/Card'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import { featureCards } from '../../data/homeData'
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">PartyWitty assessment gh</p>
          <h1>Create delightful event experiences with strong React structure</h1>
          <p>
            Build the layout with composable components, clean CSS sections, and a folder structure that scales.
          </p>
          <div className="home-hero__actions">
            <button className="button button--primary">Get started</button>
            <button className="button button--secondary">View design</button>
          </div>
        </div>
        <div className="home-hero__visual">
          <img src={heroImg} alt="Product hero" />
        </div>
      </section>

      <section className="home-features">
        <SectionHeader
          title="Design structure built for an assessment project"
          subtitle="Keep components small and focused, move page-specific style into page folders, and use data-driven rendering for repeatable UI blocks."
        />
        <div className="feature-grid">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
