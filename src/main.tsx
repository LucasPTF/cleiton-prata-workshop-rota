import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { checkoutUrl, heroVariants, lotDeadline, sharedCopy, type HeroVariant } from './content'
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

function Cta({ label, copyId, className = '' }: { label: string; copyId: string; className?: string }) {
  return (
    <a className={`cta ${className}`.trim()} href={checkoutUrl}>
      <span data-copy-id={copyId}>{label}</span>
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
          <p data-copy-id="hero-kicker" className="kicker hero-enter hero-enter-1">{hero.kicker}</p>
          <h1 data-copy-id="hero-title" className="hero-enter hero-enter-2">{hero.title}</h1>
          <p data-copy-id="hero-description" className="hero-description hero-enter hero-enter-3">{hero.description}</p>
          <Cta label={hero.cta} copyId="hero-cta" className="hero-enter hero-enter-4" />
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
          <strong data-copy-id="source-3">{sharedCopy.identity.title}</strong>
          <span data-copy-id="source-4">{sharedCopy.identity.details}</span>
          <span data-copy-id="source-5">{sharedCopy.identity.meta}</span>
        </div>
      </div>
    </header>
  )
}

function ProcessStrip() {
  const labels = sharedCopy.process.split(' → ')
  return (
    <section className="process-strip">
      <p data-copy-id="source-9" className="process-copy page-shell">{sharedCopy.process}</p>
      <div className="page-shell process-grid" aria-hidden="true">
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
          <p className="section-index" aria-hidden="true">01</p>
          <h2 data-copy-id="source-11">{sharedCopy.problem.title}</h2>
        </Reveal>
        <Reveal className="body-copy">
          {sharedCopy.problem.paragraphs.map((paragraph, index) => <p data-copy-id={`source-${12 + index}`} key={paragraph}>{paragraph}</p>)}
          <blockquote data-copy-id="source-15">{sharedCopy.problem.principle}</blockquote>
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
          <p className="section-index" aria-hidden="true">02</p>
          <h2 data-copy-id="source-16">{sharedCopy.method.title}</h2>
          <p data-copy-id="source-17">{sharedCopy.method.description}</p>
        </Reveal>
        <div className="route-map reveal" aria-label="ETAPA O QUE VOCÊ VAI DEFINIR">
          {sharedCopy.method.steps.map((step, index) => (
            <article className="route-step" key={step.code}>
              <div className="route-marker" aria-hidden="true">{step.code}</div>
              <h3 data-copy-id={`source-${20 + index * 2}`}>{step.title}</h3>
              <p data-copy-id={`source-${21 + index * 2}`}>{step.text}</p>
            </article>
          ))}
        </div>
        <Reveal className="method-note"><p data-copy-id="source-28">{sharedCopy.method.note}</p></Reveal>
      </div>
    </section>
  )
}

function ScheduleSection() {
  return (
    <section className="section section-dark">
      <div className="page-shell">
        <Reveal className="split-title">
          <p className="section-index" aria-hidden="true">03</p>
          <h2 data-copy-id="source-29">{sharedCopy.schedule.title}</h2>
        </Reveal>
        <div className="schedule-layout">
          <div className="schedule-list">
            {sharedCopy.schedule.blocks.map((block, index) => (
              <Reveal className="schedule-card" key={block.title}>
                <div className="schedule-number" aria-hidden="true">0{index + 1}</div>
                <div>
                  <h3 data-copy-id={`schedule-${index}-title`}>{block.title}</h3>
                  <ul>
                    {block.items.map((item, itemIndex) => <li data-copy-id={`schedule-${index}-item-${itemIndex}`} key={item}>{item}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="process-visual">
            <img src="/images/facetas-finalizadas.webp" alt="Facetas em cerâmica finalizadas" width="2272" height="4032" loading="lazy" />
            <div data-copy-id="source-57" className="process-caption">{sharedCopy.authority.proof}</div>
          </Reveal>
        </div>
        <Reveal className="section-cta"><Cta label={sharedCopy.schedule.cta} copyId="source-43" /></Reveal>
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
        {groups.map((group, index) => (
          <Reveal className={`fit-panel ${group.style}`} key={group.title}>
            <h2 data-copy-id={`fit-${index}-title`}>{group.title}</h2>
            <ul>
              {group.items.map((item, itemIndex) => (
                <li key={item}><span className="list-icon">{group.icon}</span><span data-copy-id={`fit-${index}-item-${itemIndex}`}>{item}</span></li>
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
          <span aria-hidden="true">20</span>
        </Reveal>
        <Reveal className="authority-copy">
          <p className="section-index" aria-hidden="true">04</p>
          <h2 data-copy-id="source-54">{sharedCopy.authority.title}</h2>
          {sharedCopy.authority.paragraphs.map((paragraph, index) => <p data-copy-id={`authority-paragraph-${index}`} key={paragraph}>{paragraph}</p>)}
        </Reveal>
      </div>
    </section>
  )
}

function splitCountdown(remainingMs: number) {
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return [days, hours, minutes, seconds]
}

function LotCountdown() {
  const expiry = Date.parse(lotDeadline)
  const [remaining, setRemaining] = useState(() => Math.max(0, expiry - Date.now()))

  useEffect(() => {
    const update = () => setRemaining(Math.max(0, expiry - Date.now()))
    update()
    if (expiry <= Date.now()) return

    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [expiry])

  const values = splitCountdown(remaining)
  const isExpired = remaining <= 0

  return (
    <div className={`countdown ${isExpired ? 'is-expired' : ''}`} role="timer" aria-live="off" aria-atomic="true">
      <div className="countdown-heading">
        <p data-copy-id="deadline-label">{isExpired ? sharedCopy.offer.countdown.expired : sharedCopy.offer.countdown.label}</p>
        <time data-copy-id="deadline-date" dateTime={lotDeadline}>{sharedCopy.offer.countdown.date}</time>
      </div>
      <div className="countdown-grid">
        {sharedCopy.offer.countdown.units.map((unit, index) => (
          <div className="countdown-unit" key={unit}>
            <strong data-copy-dynamic={`timer-${index}`}>{String(values[index]).padStart(2, '0')}</strong>
            <span data-copy-id={`timer-unit-${index}`}>{unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LotComparison() {
  return (
    <div className="lot-grid" aria-label="Lotes">
      {sharedCopy.offer.lots.map(([name, price], index) => (
        <div className={`lot-card ${index === 0 ? 'is-current' : ''}`} key={name} aria-current={index === 0 ? 'true' : undefined}>
          <span data-copy-id={`lot-${index}-name`}>{name}</span>
          <strong data-copy-id={`lot-${index}-price`}>{price}</strong>
        </div>
      ))}
    </div>
  )
}

function OfferSection() {
  return (
    <section className="section offer-section" id="inscricao">
      <Reveal className="offer-timer page-shell">
        <LotCountdown />
      </Reveal>
      <div className="page-shell offer-grid">
        <Reveal className="offer-copy">
          <p className="section-index" aria-hidden="true">05</p>
          <h2 data-copy-id="source-58">{sharedCopy.offer.title}</h2>
          <div className="offer-table">
            {sharedCopy.offer.rows.map(([label, value], index) => (
              <div className="offer-row" key={label}>
                <span data-copy-id={`offer-row-${index}-label`}>{label}</span><strong data-copy-id={`offer-row-${index}-value`}>{value}</strong>
              </div>
            ))}
          </div>
          <Cta label={sharedCopy.offer.cta} copyId="source-73" />
          <p data-copy-id="source-74" className="offer-note">{sharedCopy.offer.note}</p>
        </Reveal>
        <div className="offer-media-stack">
          <Reveal className="offer-media">
            <img src="/images/coroa-ceramica.webp" alt="Coroa em cerâmica em processo de finalização" width="4288" height="2848" loading="lazy" />
            <div className="offer-price"><small data-copy-id="photo-price-label">Investimento</small><strong data-copy-id="photo-price-value">R$ 47</strong></div>
          </Reveal>
          <Reveal className="offer-lots"><LotComparison /></Reveal>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section faq-section">
      <div className="page-shell faq-grid">
        <Reveal className="faq-heading">
          <p className="section-index" aria-hidden="true">06</p>
          <h2 data-copy-id="source-75">{sharedCopy.faq.title}</h2>
        </Reveal>
        <div className="faq-list">
          {sharedCopy.faq.items.map(([question, answer], index) => (
            <details className="reveal" key={question}>
              <summary><span data-copy-id={`faq-${index}-question`}>{question}</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p data-copy-id={`faq-${index}-answer`}>{answer}</p>
            </details>
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
          <p className="section-index" aria-hidden="true">07</p>
          <h2 data-copy-id="source-102">{sharedCopy.closing.title}</h2>
          {sharedCopy.closing.paragraphs.map((paragraph, index) => <p data-copy-id={`source-${103 + index}`} key={paragraph}>{paragraph}</p>)}
          <Cta label={sharedCopy.closing.cta} copyId="source-105" />
        </Reveal>
      </div>
    </section>
  )
}

function SalesPage({ hero }: { hero: HeroVariant }) {
  return (
    <div data-copy-root>
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
        <ClosingSection />
      </main>
      <footer><div data-copy-id="footer-title" className="page-shell">Workshop Seu Próximo Passo na Prótese</div></footer>
    </div>
  )
}

function ThankYouPage() {
  return (
    <main data-copy-root className="thanks-page">
      <div className="thanks-visual" aria-hidden="true"><span>R</span><span>O</span><span>T</span><span>A</span></div>
      <div className="thanks-card">
        <p data-copy-id="thanks-kicker" className="kicker">WORKSHOP SEU PRÓXIMO PASSO NA PRÓTESE</p>
        <h1 data-copy-id="thanks-title">Inscrição confirmada.</h1>
        <p data-copy-id="thanks-message">Obrigado. Sua inscrição no Workshop Seu Próximo Passo na Prótese foi confirmada.</p>
        <a data-copy-id="thanks-return" className="text-link" href="/a1">Voltar para a página do workshop <Arrow /></a>
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
