
import {Navigate} from "react-router"
const CHAT_URL = "auth/login"; // Replace with your chat URL

const features = [
  {
    number: "01",
    title: "Instant messaging",
    description:
      "Share your thoughts in real time. Keep conversations flowing without unnecessary complexity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8 11h8M8 8h5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Groups that connect",
    description:
      "Bring friends, teammates, and communities together in one place. Every conversation has a home.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Simple by design",
    description:
      "Enjoy a clean, intuitive experience that keeps the focus on people, not complicated menus.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Less friction",
    text: "Start conversations without fighting a complicated interface.",
  },
  {
    title: "Closer connections",
    text: "Make one-to-one chats and group conversations part of your everyday life.",
  },
  {
    title: "Built for everyday use",
    text: "A straightforward experience that puts your conversations first.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}



function ChatPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[510px]">
      {/* Decorative background */}
      <div className="absolute -inset-5 rounded-[3rem] bg-background/20 blur-2xl" />
      <div className="absolute -right-3 top-10 h-20 w-20 rounded-full bg-accent/20 blur-xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-primary/10">
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium text-slate-400">
            Your conversations
          </span>
          <span className="h-2 w-2 rounded-full bg-secondary" />
        </div>

        <div className="grid min-h-[350px] grid-cols-[125px_1fr] sm:grid-cols-[175px_1fr]">
          {/* Sidebar */}
          <aside className="border-r border-slate-100 bg-slate-50/80 p-3 sm:p-4">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Messages
            </p>

            <div className="mb-3 flex items-center gap-2 rounded-xl bg-primary/5 p-2">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-[10px] font-bold text-white">
                AK
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-primary">
                  Ayesha
                </p>
                <p className="truncate text-[9px] text-slate-400">
                  See you soon!
                </p>
              </div>
            </div>

            {[
              { initials: "BM", name: "Bilal", color: "bg-amber-100 text-amber-800" },
              { initials: "DT", name: "Design team", color: "bg-pink-100 text-pink-700" },
              { initials: "SM", name: "Sara", color: "bg-emerald-100 text-emerald-700" },
            ].map((person) => (
              <div key={person.name} className="mb-3 flex items-center gap-2 p-1">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[9px] font-bold ${person.color}`}>
                  {person.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-medium text-slate-600">
                    {person.name}
                  </p>
                  <p className="truncate text-[9px] text-slate-400">
                    Recent message
                  </p>
                </div>
              </div>
            ))}
          </aside>

          {/* Chat window */}
          <div className="flex min-w-0 flex-col p-3 sm:p-5">
            <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
              <div className="relative">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-xs font-bold text-white">
                  AK
                </span>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary">Ayesha Khan</p>
                <p className="text-[10px] text-emerald-600">Online</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-4 py-5">
              <p className="text-center text-[9px] text-slate-400">
                Today · 9:41 AM
              </p>

              <div className="max-w-[90%] self-start rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2.5">
                <p className="text-[11px] leading-relaxed text-slate-600">
                  Hey! How's your new project going?
                </p>
              </div>

              <div className="max-w-[90%] self-end rounded-2xl rounded-tr-sm bg-primary px-3 py-2.5">
                <p className="text-[11px] leading-relaxed text-white">
                  Really well! It's coming together nicely.
                </p>
              </div>

              <div className="max-w-[90%] self-start rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2.5">
                <p className="text-[11px] leading-relaxed text-slate-600">
                  That's great! Can't wait to see it ✨
                </p>
              </div>

              <div className="max-w-[90%] self-end rounded-2xl rounded-tr-sm bg-secondary px-3 py-2.5">
                <p className="text-[11px] leading-relaxed text-white">
                  I'll share it with you soon!
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 px-3 py-2.5">
              <span className="truncate text-[10px] text-slate-400">
                Write a message...
              </span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-white">
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-left-8 sm:p-4">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-background/20 text-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-bold text-primary">Stay connected</p>
          <p className="mt-0.5 text-[10px] text-slate-500">
            Your people, one place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="home" className="overflow-hidden bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}

      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[450px] w-[450px] rounded-full bg-background/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-3.5 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-background ring-4 ring-background/20" />
              <span className="text-xs font-semibold tracking-wide text-primary">
                A better way to stay connected
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Conversations that bring people{" "}
              <span className="relative inline-block text-secondary">
                closer.
                <span className="absolute -bottom-1 left-0 -z-10 h-2 w-full rounded-full bg-background/40" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Good conversations make all the difference. Connect with
              friends, bring your groups together, and make every message
              count in one simple place.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={CHAT_URL}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                Join the conversation <ArrowIcon />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-primary transition hover:border-secondary hover:bg-secondary/5"
              >
                Explore features
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-secondary">
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Easy to use
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-secondary">
                  <path d="m5 12 4 4L19 6" />
                </svg>
                One-to-one and group chats
              </span>
            </div>
          </div>

          <div className="px-3 py-6 sm:px-8 lg:px-0">
            <ChatPreview />
          </div>
        </div>
      </section>


      {/* Features */}
      <section id="features" className="scroll-mt-20 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Everything in one place
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              All about the conversation.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Stay in touch without the distractions. The essentials you need
              to keep people close and conversations moving.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl ${
                      index === 0
                        ? "bg-secondary/10 text-secondary"
                        : index === 1
                          ? "bg-background/20 text-primary"
                          : "bg-accent/15 text-amber-700"
                    }`}
                  >
                    {feature.icon}
                  </span>
                  <span className="text-sm font-semibold text-slate-300">
                    {feature.number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
                <a
                  href={CHAT_URL}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:text-primary"
                >
                  Get started <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="benefits" className="scroll-mt-20 bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              A fresh approach to messaging
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
              Less noise. More meaningful conversations.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Messaging should feel natural. Connectly focuses on the things
              that matter: reaching people, sharing ideas, and keeping
              conversations organized.
            </p>

            <a
              href={CHAT_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary"
            >
              Try it for yourself <ArrowIcon />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-background/15 blur-xl" />
            <div className="relative rounded-3xl bg-primary p-7 text-white sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-background">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                    <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold">A better chat experience</p>
                  <p className="mt-1 text-xs text-white/60">
                    Designed around real conversations
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary/30 text-background">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/65">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-background" />
              </div>
              <p className="mt-3 text-xs text-white/50">
                Built to keep things simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / final CTA */}
      <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-background/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/90">
              <span className="h-2 w-2 rounded-full bg-background" />
              Your next conversation starts here
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Good conversations start with a hello.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
              Join the conversation, reconnect with your people, and discover
              a simpler way to stay in touch.
            </p>

            <a
              href={CHAT_URL}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-bold text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
            >
              Join Connectly now <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
