import Link from '@/components/mdxcomponents/Link'
import Tag from '@/components/tag'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'
import { createTranslation } from 'app/[locale]/i18n/server'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
  featured?: boolean
}

interface HomeProps {
  posts: Post[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 2

export default async function FeaturedLayout({ posts, params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'home')
  return (
    <>
      <section  className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="relative mx-auto w-full max-w-screen-xl px-4 before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-40 before:w-full before:max-w-md before:-translate-x-1/4 before:translate-y-1/2 before:bg-gradient-to-br before:from-blue-400 before:to-purple-300 before:blur-[100px] after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-20 after:w-full after:max-w-md after:translate-y-1/2 after:bg-gradient-to-br after:from-cyan-300 after:to-sky-200 after:blur-[100px] md:after:translate-x-1/2">
          <div className="relative z-10 flex w-full items-center">
            <div className="min-w-0 flex-1">
              <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              {t('featured')}
              </h1>
              <p className="mb-8 w-full text-lg leading-8 text-zinc-700 md:w-5/6 md:text-xl">
              The New York Times Connections game is a daily word puzzle that challenges players to find hidden connections between seemingly unrelated words. Each puzzle presents a grid of words, and your task is to group them into sets based on their hidden relationships. Perfect for word enthusiasts, this engaging game tests your vocabulary and lateral thinking skills. Dive into the world of Connections and uncover the intriguing links that tie words together!
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#"
                  className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded bg-blue-500 px-6 text-white hover:bg-blue-600 sm:w-auto"
                >
                  <div>Get boilerplate</div>
                </a>
              </div>
            </div>
            <div className="hidden min-w-0 flex-1 md:block">
              <Image
                alt="Astronaut in the air"
                src="/static/images/ConnectionsNYT.png"
                loading="lazy"
                width="520"
                height="424"
                decoding="async"
                data-nimg="1"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
