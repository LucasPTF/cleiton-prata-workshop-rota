import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { checkoutUrl, heroVariants, sharedCopy, type HeroVariant } from './content'
import './styles.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
)

const Cross = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m7 7 10 10M17 7 7 17" />
  </svg>
)

function Cta({ label, className = '' }: { label: string; className?: string }) {
  return (
    <a className={`cta ${className}`.trim()} href={checkoutUrl}>
      <span>{label}</span>
      <Arrow />
    </a>
  )
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>
}

function Hero({ hero }: { hero: HeroVariant }) {
  return (
    <header className="hero">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="kicker hero-enter hero-enter-1">{hero.kicker}</p>
          <h1 className="hero-enter hero-enter-2">{hero.title}</h1>
          <p className="hero-description hero-enter hero-enter-3">{hero.description}</p>
          <Cta label={hero.cta} className="hero-enter hero-enter-4" />
        </div>
        <div className="hero-media hero-enter hero-enter-3" data-motion-viewport>
          <div className="hero-frame">
            <img src="/images/cleiton-laboratorio.webp" alt="Cleiton Prata em sua bancada de laboratório" width="1179" height="2096" />
            <div className="hero-scan" aria-hidden="true" />
          </div>
          <div className="hero-object" aria-hidden="true">
            <img src="/images/ceramica-processo.webp" alt="" width="4288" height="2848" />
          </div>
          <div className="hero-badge" aria-hidden="true">
            <span>R</span><span>O</span><span>T</span><span>A</span>
          </div>
        </div>
      </div>
      <div className="identity-band">
        <div className="page-shell identity-grid">
          <strong>{sharedCopy.identity.title}</strong>
          <span>{sharedCopy.identity.details}</span>
          <span>{sharedCopy.identity.meta}</span>
        </div>
      </div>
    </header>
  )
}

function ProcessStrip() {
  const labels = sharedCopy.process.split(' → ')
  return (
    <section className="process-strip">
      <p className="process-copy page-shell">{sharedCopy.process}</p>
      <div className="page-shell process-grid">
        {labels.map((label, index) => (
          <div className="process-step" key={label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{label.replace('Durante a aula: ', '').replace('.', '')}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="section section-light">
      <div className="page-shell editorial-grid">
        <Reveal className="section-heading">
          <p className="section-index">01</p>
          <h2>{sharedCopy.problem.title}</h2>
        </Reveal>
        <Reveal className="body-copy">
          {sharedCopy.problem.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>{sharedCopy.problem.principle}</blockquote>
        </Reveal>
      </div>
    </section>
  )
}

function MethodSection() {
  return (
    <section className="section method-section">
      <div className="page-shell">
        <Reveal className="method-intro">
          <p className="section-index">02</p>
          <h2>{sharedCopy.method.title}</h2>
          <p>{sharedCopy.method.description}</p>
        </Reveal>
        <div className="route-map reveal" aria-label="ETAPA O QUE VOCÊ VAI DEFINIR">
          {sharedCopy.method.steps.map((step) => (
            <article className="route-step" key={step.code}>
              <div className="route-marker" aria-hidden="true">{step.code}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <Reveal className="method-note"><p>{sharedCopy.method.note}</p></Reveal>
      </div>
    </section>
  )
}

function ScheduleSection() {
  return (
    <section className="section section-dark">
      <div className="page-shell">
        <Reveal className="split-title">
          <p className="section-index">03</p>
          <h2>{sharedCopy.schedule.title}</h2>
        </Reveal>
        <div className="schedule-layout">
          <div className="schedule-list">
            {sharedCopy.schedule.blocks.map((block, index) => (
              <Reveal className="schedule-card" key={block.title}>
                <div className="schedule-number">0{index + 1}</div>
                <div>
                  <h3>{block.title}</h3>
                  <ul>
                    {block.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="process-visual">
            <img src="/images/facetas-finalizadas.webp" alt="Facetas em cerâmica finalizadas" width="2272" height="4032" loading="lazy" />
            <div className="process-caption">{sharedCopy.authority.proof}</div>
          </Reveal>
        </div>
        <Reveal className="section-cta"><Cta label={sharedCopy.schedule.cta} /></Reveal>
      </div>
    </section>
  )
}

function FitSection() {
  const groups = [
    { ...sharedCopy.fit, icon: <Check />, style: 'fit-yes' },
    { ...sharedCopy.notFit, icon: <Cross />, style: 'fit-no' },
  ]
  return (
    <section className="section section-light">
      <div className="page-shell fit-grid">
        {groups.map((group) => (
          <Reveal className={`fit-panel ${group.style}`} key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}><span className="list-icon">{group.icon}</span><span>{item}</span></li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function AuthoritySection() {
  return (
    <section className="section authority-section">
      <div className="page-shell authority-grid">
        <Reveal className="authority-media">
          <img src="/images/cleiton-prata.webp" alt="Retrato de Cleiton Prata" width="3024" height="4032" loading="lazy" />
          <span>20</span>
        </Reveal>
        <Reveal className="authority-copy">
          <p className="section-index">04</p>
          <h2>{sharedCopy.authority.title}</h2>
          {sharedCopy.authority.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>{sharedCopy.authority.proof}</blockquote>
        </Reveal>
      </div>
    </section>
  )
}

function OfferSection() {
  return (
    <section className="section offer-section" id="inscricao">
      <div className="page-shell offer-grid">
        <Reveal className="offer-copy">
          <p className="section-index">05</p>
          <h2>{sharedCopy.offer.title}</h2>
          <div className="offer-table">
            {sharedCopy.offer.rows.map(([label, value]) => (
              <div className="offer-row" key={label}>
                <span>{label}</span><strong>{value}</strong>
              </div>
            ))}
          </div>
          <Cta label={sharedCopy.offer.cta} />
          <p className="offer-note">{sharedCopy.offer.note}</p>
        </Reveal>
        <Reveal className="offer-media">
          <img src="/images/coroa-ceramica.webp" alt="Coroa em cerâmica em processo de finalização" width="4288" height="2848" loading="lazy" />
          <div className="offer-price"><small>Investimento</small><strong>R$ 47</strong></div>
        </Reveal>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section faq-section">
      <div className="page-shell faq-grid">
        <Reveal className="faq-heading">
          <p className="section-index">06</p>
          <h2>{sharedCopy.faq.title}</h2>
        </Reveal>
        <div className="faq-list">
          {sharedCopy.faq.items.map(([question, answer]) => (
            <details className="reveal" key={question}>
              <summary><span>{question}</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComplementsSection() {
  return (
    <section className="section complements-section">
      <div className="page-shell">
        <Reveal className="complements-heading">
          <p className="section-index">07</p>
          <h2>{sharedCopy.complements.title}</h2>
          <p>{sharedCopy.complements.description}</p>
        </Reveal>
        <div className="complements-grid">
          {sharedCopy.complements.items.map(([title, text], index) => (
            <Reveal className="complement-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section className="closing-section">
      <div className="closing-image" aria-hidden="true" />
      <div className="page-shell closing-content">
        <Reveal>
          <p className="section-index">08</p>
          <h2>{sharedCopy.closing.title}</h2>
          {sharedCopy.closing.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Cta label={sharedCopy.closing.cta} />
        </Reveal>
      </div>
    </section>
  )
}

function SalesPage({ hero }: { hero: HeroVariant }) {
  return (
    <>
      <Hero hero={hero} />
      <main>
        <ProcessStrip />
        <ProblemSection />
        <MethodSection />
        <ScheduleSection />
        <FitSection />
        <AuthoritySection />
        <OfferSection />
        <FaqSection />
        <ComplementsSection />
        <ClosingSection />
      </main>
      <footer><div className="page-shell">Workshop Seu Próximo Passo na Prótese</div></footer>
    </>
  )
}

function ThankYouPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-visual" aria-hidden="true"><span>R</span><span>O</span><span>T</span><span>A</span></div>
      <div className="thanks-card">
        <p className="kicker">WORKSHOP SEU PRÓXIMO PASSO NA PRÓTESE</p>
        <h1>Inscrição confirmada.</h1>
        <p>Obrigado. Sua inscrição no Workshop Seu Próximo Passo na Prótese foi confirmada.</p>
        <a className="text-link" href="/a1">Voltar para a página do workshop <Arrow /></a>
      </div>
    </main>
  )
}

function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      }),
      { threshold: 0.14 },
    )

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

    const motionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle('motion-visible', entry.isIntersecting)),
      { threshold: 0.08 },
    )
    document.querySelectorAll('[data-motion-viewport]').forEach((element) => motionObserver.observe(element))

    return () => {
      revealObserver.disconnect()
      motionObserver.disconnect()
    }
  }, [])

  const route = window.location.pathname.replace(/^\/+|\/+$/g, '')
  if (route === 'obrigado') return <ThankYouPage />
  const key = route in heroVariants ? (route as keyof typeof heroVariants) : 'a1'
  return <SalesPage hero={heroVariants[key]} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
