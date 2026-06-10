"use client"

import { useState } from "react"
import { Wallet, MessageCircle } from "lucide-react"
import { OfferPicker } from "@/components/offer-picker"

const companies = [
  {
    name: "ПАО Банк ВТБ",
    ogrn: "1027739609391",
    license: "1000",
    address: "191144, г. Санкт-Петербург, Дегтярный переулок, д.11, лит. А",
  },
  {
    name: "ООО Займер",
    ogrn: "1134205019189",
    license: "651303532004088",
    address: "650000, Кемеровская обл., г. Кемерово, пр. Советский, д. 2/7",
  },
  {
    name: "ООО МФК Быстроденьги",
    ogrn: "1087325005899",
    license: "2110573000002",
    address: "123290, г. Москва, Магистральный 1-й тупик, д. 11, стр. 10",
  },
  {
    name: "ООО МКК МАКС.КРЕДИТ",
    ogrn: "1147847358383",
    license: "656503140006267",
    address: "191187, г. Санкт-Петербург, ул. Шпалерная, д. 8/а, пом. 16Н",
  },
  {
    name: "ООО МКК Срочноденьги",
    ogrn: "1137746046943",
    license: "2110552000304",
    address: "603022, г. Н.Новгород, ул. Тимирязева, д.15 к.2, пом.403",
  },
  {
    name: "ООО МКК Центрофинанс Групп",
    ogrn: "1132932001674",
    license: "651303111004012",
    address: "164500, Архангельская область, г. Северодвинск, ул. Карла Маркса, д. 46, офис 500",
  },
  {
    name: "ПАО Совкомбанк",
    ogrn: "1144400000425",
    license: "963",
    address: "156000, Костромская область, г. Кострома, пр. Текстильщиков, д. 46",
  },
  {
    name: "ПАО Альфа-Банк",
    ogrn: "1027700067328",
    license: "1326",
    address: "107078, г. Москва, Каланчевская ул. 27",
  },
]

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0b071e] text-white">
      {/* Cyberpunk mesh-gradient backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 -top-32 size-[28rem] rounded-full bg-fuchsia-600/30 blur-[120px]" />
        <div className="absolute -right-24 top-20 size-[26rem] rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[#0b071e]/40" />
      </div>

      {/* Branding header */}
      <header className="flex items-center justify-center gap-2 px-6 pt-6">
        <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/40">
          <Wallet className="size-4 text-white" />
        </div>
        <span className="text-base font-bold tracking-tight text-white">ФинНавигатор</span>
        <span className="text-sm font-medium text-white/50">| Сервис подбора</span>
      </header>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center px-4 pb-32 pt-14 text-center sm:px-6 lg:px-8">
        <div className="mb-8 flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_-8px_rgba(168,85,247,0.6)] backdrop-blur-md">
          <Wallet className="size-8 text-cyan-300" />
        </div>

        <h1 className="max-w-xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          Сравнение и подбор{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            финансовых продуктов
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/60">
          Сравнение актуальных предложений от крупнейших финансовых институтов России. Найдите
          выгодные тарифы дебетовых и кредитных карт, условия расчетно-кассового обслуживания бизнеса
          и предложения надежных микрофинансовых организаций в одном месте.
        </p>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`mt-10 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-10 py-4 text-lg font-bold text-white shadow-[0_0_30px_-4px_rgba(168,85,247,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_-2px_rgba(34,211,238,0.7)] active:translate-y-0 ${
            open ? "" : "animate-pulse"
          }`}
        >
          Подобрать продукт
        </button>

        <div className="w-full">
          <OfferPicker open={open} />
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="border-t border-white/10 bg-white/[0.02] px-4 pb-40 pt-10 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl space-y-3 text-center text-xs leading-relaxed text-white/40">
            <h2 className="text-sm font-semibold text-white/70">Рейтинг банков</h2>
            <p>
              Это бесплатный информационный сервис, предоставляющий контент и справочную информацию о
              кредитных картах, кредитах, автокредитах, ипотечных и прочих займах и кредитах. Используя
              его вы сможете быстро решить свои финансовые вопросы, затратив минимум своего личного
              времени.
            </p>
            <p>
              Все товарные знаки и логотипы, представленные на этом сайте, являются собственностью
              соответствующих владельцев и взяты из публичных источников. Их появление на этом сайте не
              подразумевает одобрение ими нашего продукта.
            </p>
            <h3 className="pt-2 text-sm font-semibold text-white/70">Отказ от ответственности</h3>
            <p>
              Сервис не является кредитором или ипотечным/кредитным брокером и не предоставляет
              финансовые услуги прямо или косвенно через представителей или агентов. Не осуществляет
              выдачу каких-либо видов кредита. Не несет ответственности за точность информации,
              предоставленной банками по тарифам, кредитным ставкам, переплатам, а также за любую другую
              информацию.
            </p>
          </div>

          <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-white/70">
            Информация о компаниях, представленных на сайте
          </h2>

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c) => (
              <li
                key={c.ogrn}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/40 backdrop-blur-sm"
              >
                <p className="font-semibold text-white/80">{c.name}</p>
                <p className="mt-2">
                  ОГРН {c.ogrn}. Лицензия № {c.license}.
                </p>
                <p className="mt-1">Адрес: {c.address}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-white/40">© Copyright, 2026. Все права защищены.</p>
        </div>
      </footer>

      {/* Sticky Footer */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b071e]/70 p-4 backdrop-blur-xl">
        <a
          href="https://t.me"
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 px-6 py-4 text-center text-sm font-bold leading-snug text-white shadow-[0_0_28px_-6px_rgba(168,85,247,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_rgba(34,211,238,0.7)]"
        >
          <MessageCircle className="size-5 shrink-0" />
          Появились вопросы или нужно уточнить информацию? Напишите нам в Telegram
        </a>
      </div>
    </main>
  )
}
