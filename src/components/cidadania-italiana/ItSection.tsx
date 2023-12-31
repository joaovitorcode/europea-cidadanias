import { useRouter } from "next/router"
import { Acordeon } from "@/components/cidadania-italiana/Accordeon"

interface Faq {
  type: string
  questionPt: string
  questionEn: string
  questionEs: string
  questionIt: string
  answerPt: string
  answerEn: string
  answerEs: string
  answerIt: string
}

interface Citizenship {
  citizenship: {
    ancor: string
    type: string
    labelPt: string
    labelEn: string
    labelEs: string
    labelIt: string
    headingPt: string
    headingEn: string
    headingEs: string
    headingIt: string
    descriptionPt: string
    descriptionEn: string
    descriptionEs: string
    descriptionIt: string
    image: {
      url: string
    }
  }

  faqs: Faq[]
}

export function ItSection({ citizenship, faqs }: Citizenship) {
  const { locale } = useRouter()

  return (
    <section className="flex flex-col gap-12 py-12">
      <div
        id={citizenship.ancor}
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: `url('${citizenship.image.url}')` }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          {locale === "pt" && citizenship.labelPt}
          {locale === "en" && citizenship.labelEn}
          {locale === "es" && citizenship.labelEs}
          {locale === "it" && citizenship.labelIt}
          <div className="text-main uppercase underline underline-offset-8">
            {locale === "pt" && citizenship.headingPt}
            {locale === "en" && citizenship.headingEn}
            {locale === "es" && citizenship.headingEs}
            {locale === "it" && citizenship.headingIt}
          </div>
        </h2>
        {locale === "pt" && citizenship.descriptionPt.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
        {locale === "en" && citizenship.descriptionEn.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
        {locale === "es" && citizenship.descriptionEs.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
        {locale === "it" && citizenship.descriptionIt.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
        <div className="flex flex-col gap-4">
          {faqs
            .filter((faq: Faq) => faq.type === citizenship.headingPt)
            .map((faq: Faq) => ( 
              <Acordeon
                key={faq.questionPt}
                accordeon={{
                  questionPt: faq.questionPt,
                  questionEn: faq.questionEn,
                  questionEs: faq.questionEs,
                  questionIt: faq.questionIt,
                  answerPt: faq.answerPt,
                  answerEn: faq.answerEn,
                  answerEs: faq.answerEs,
                  answerIt: faq.answerIt,
                }}
              />
          ))}
        </div>
      </div>
    </section>
  )
}