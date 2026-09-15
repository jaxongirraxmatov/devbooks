import { useEffect, useState } from 'react'

const slides = [
  { title: 'Temuriylar davri\nadabiyoti', from: '#1d3b3f', to: '#12262b' },
  { title: 'Jadid adabiyoti', from: '#3a2f22', to: '#1b1712' },
  { title: 'Sovet davri\nadabiyoti', from: '#32232a', to: '#1a1216' },
  { title: 'Mustaqillik davri\nadabiyoti', from: '#22303a', to: '#12191f' },
]

/** Bosh sahifadagi katta banner — 4 ta slayd, pastida chiziqcha indikatorlar */
export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[active]

  return (
    <section className="container-page pt-8">
      <div
        className="relative h-[340px] overflow-hidden rounded-card transition-colors duration-700"
        style={{ background: `linear-gradient(110deg, ${slide.from}, ${slide.to})` }}
      >
        <Ornaments />

        <div className="relative flex h-full flex-col justify-center px-12">
          <h1 className="max-w-xl whitespace-pre-line font-display text-5xl leading-[1.15] text-gold-strong md:text-6xl">
            {slide.title}
          </h1>

          <div className="mt-8 flex gap-3">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${i + 1}-slayd`}
                className={`h-[3px] w-14 rounded-full transition-colors ${
                  i === active ? 'bg-cream' : 'bg-cream/30 hover:bg-cream/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Bannerdagi sharqona yulduz naqshlari */
function Ornaments() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]"
      viewBox="0 0 1200 340"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2">
        <Star cx={430} cy={60} r={70} />
        <Star cx={640} cy={250} r={95} />
        <Star cx={120} cy={230} r={60} />
        <Star cx={980} cy={120} r={110} />
      </g>
    </svg>
  )
}

function Star({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const points = Array.from({ length: 16 }, (_, i) => {
    const angle = (Math.PI / 8) * i - Math.PI / 2
    const radius = i % 2 === 0 ? r : r * 0.62
    return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`
  }).join(' ')

  return (
    <>
      <polygon points={points} />
      <circle cx={cx} cy={cy} r={r * 0.22} />
    </>
  )
}
