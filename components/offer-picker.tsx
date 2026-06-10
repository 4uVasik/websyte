"use client"

import { useState } from "react"
import { Check, Info } from "lucide-react"

type Offer = {
  name: string
  features: string[]
  link: string
  /** CTA label. Defaults to "Оформить". */
  cta?: string
  /** Flexible promo sticker — set on any offer to render a badge. Leave undefined for none. */
  badge?: string
  /** Optional hover/tap explanation shown via an info icon + tooltip. */
  note?: string
}

type Category = {
  id: string
  label: string
  offers: Offer[]
  /** Optional warning banner shown above the offers for this category. */
  note?: string
}

const DEBIT_NOTE =
  "Внимание: Оформляйте только один продукт на выбор — либо Дебетовую карту ВТБ, либо Платёжный стикер ВТБ."

const BUSINESS_NOTE = "Внимание: Регистрация бизнеса доступна только один раз для одного физического лица."
const RKO_NOTE =
  "Внимание: Если вы уже зарегистрировали бизнес через этот банк, отдельно оформлять РКО в нем не требуется — счет откроется автоматически."

const categories: Category[] = [
  {
    id: "debit",
    label: "💳 Дебетовки",
    offers: [
      {
        name: "Дебетовая карта ВТБ",
        features: ["Бесплатное обслуживание", "Повышенный кэшбэк", "Оформление онлайн за 5 минут"],
        link: "https://t.me",
        cta: "Оформить на официальном сайте",
        note: DEBIT_NOTE,
      },
      {
        name: "ВТБ Платёжный стикер",
        features: ["Бесконтактная оплата одним касанием", "Привязка к карте ВТБ", "Оформление онлайн за 5 минут"],
        link: "https://t.me",
        cta: "Оформить на официальном сайте",
        note: DEBIT_NOTE,
      },
    ],
  },
  {
    id: "credit",
    label: "💳 Кредитки",
    offers: [
      {
        name: "Халва — Карта рассрочки · Выдача",
        features: ["0% рассрочка у партнёров", "Бесплатное обслуживание", "Оформление онлайн за 5 минут"],
        link: "https://t.me",
        cta: "Оформить на официальном сайте",
      },
    ],
  },
  {
    id: "business",
    label: "💼 Бизнес и РКО",
    offers: [
      {
        name: "Регистрация ИП",
        features: ["Помощь с документами", "Бесплатная подача", "Сопровождение на всех этапах"],
        link: "https://t.me",
        note: BUSINESS_NOTE,
      },
      {
        name: "РКО в ВТБ",
        features: ["Бесплатное открытие счёта", "Повышенный кэшбэк", "Обслуживание 0 ₽ в первый год"],
        link: "https://t.me",
        note: RKO_NOTE,
      },
      {
        name: "РКО в Альфа-Банке",
        features: ["Бесплатное открытие счёта", "Удобный интернет-банк", "Бонусы для бизнеса"],
        link: "https://t.me",
        note: RKO_NOTE,
      },
    ],
  },
  {
    id: "mfo",
    label: "⚡ МФО",
    offers: [
      {
        name: "Займер",
        features: ["Рассмотрение за 5 минут", "Оформление по паспорту онлайн", "Деньги на карту"],
        link: "https://t.me",
        cta: "Оформить на официальном сайте",
      },
      {
        name: "Макс.Кредит",
        features: ["Рассмотрение за 5 минут", "Оформление по паспорту онлайн", "Без визита в офис"],
        link: "https://t.me",
        cta: "Оформить на официальном сайте",
      },
      {
        name: "СрочноДеньги",
        features: ["Рассмотрение за 5 минут", "Оформление по паспорту онлайн", "Решение круглосуточно"],
        link: "https://t.me",
        cta: "Оформить на официальном сайте",
      },
      {
        name: "Центрофинанс",
        features: ["Рассмотрение за 5 минут", "Оформление по паспорту онлайн", "Несколько способов получения"],
        link: "https://t.me",
        cta: "Оформить на официальном сайте",
      },
    ],
  },
]

function OfferCard({ offer }: { offer: Offer }) {
  const [showNote, setShowNote] = useState(false)

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white/5 p-5 backdrop-blur-md transition-all hover:bg-white/[0.08] ${
        offer.badge
          ? "border-cyan-400/50 shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)]"
          : "border-white/10"
      }`}
    >
      {offer.badge && (
        <span className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-xs font-bold text-white shadow-[0_0_18px_-4px_rgba(168,85,247,0.8)]">
          {offer.badge}
        </span>
      )}

      <div className="flex items-start gap-2">
        <h3 className="text-base font-bold text-white">{offer.name}</h3>
        {offer.note && (
          <span
            className="relative inline-flex"
            onMouseEnter={() => setShowNote(true)}
            onMouseLeave={() => setShowNote(false)}
          >
            <button
              type="button"
              aria-label="Подробнее об условии"
              onClick={() => setShowNote((v) => !v)}
              className="flex size-5 items-center justify-center rounded-full text-amber-300 transition-colors hover:bg-amber-300/10"
            >
              <Info className="size-4" />
            </button>
            {showNote && (
              <span
                role="tooltip"
                className="absolute left-1/2 top-7 z-10 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b071e]/95 px-3 py-2 text-xs font-medium leading-relaxed text-white/80 shadow-lg backdrop-blur-md"
              >
                {offer.note}
              </span>
            )}
          </span>
        )}
      </div>

      {offer.note && (
        <p className="mt-3 flex items-start gap-2 rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-xs leading-relaxed text-amber-200">
          <Info className="mt-0.5 size-3.5 shrink-0" />
          <span>{offer.note}</span>
        </p>
      )}

      <ul className="mb-5 mt-4 flex flex-col gap-2">
        {offer.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm leading-relaxed text-white/60">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan-300" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={offer.link}
        target="_blank"
        rel="noreferrer"
        className="mt-auto flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-4 py-3 text-center text-sm font-bold text-white shadow-[0_0_22px_-6px_rgba(168,85,247,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_-4px_rgba(34,211,238,0.7)]"
      >
        {offer.cta ?? "Оформить"}
      </a>
    </div>
  )
}

export function OfferPicker({ open }: { open: boolean }) {
  const [activeTab, setActiveTab] = useState(categories[0].id)
  const active = categories.find((c) => c.id === activeTab)!

  return (
    <div
      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
        open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="min-h-0">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-8">
          {/* Tabs */}
          <div className="flex w-full flex-wrap justify-center gap-2 pb-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-violet-600 to-cyan-400 text-white shadow-[0_0_20px_-4px_rgba(168,85,247,0.8)]"
                    : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Offers */}
          {active.note && (
            <p className="mb-5 flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-left text-xs font-medium leading-relaxed text-amber-200">
              <Info className="mt-0.5 size-4 shrink-0" />
              <span>{active.note}</span>
            </p>
          )}
          <div className="grid grid-cols-1 gap-5 pt-2 text-left sm:grid-cols-2">
            {active.offers.map((offer) => (
              <OfferCard key={offer.name} offer={offer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
