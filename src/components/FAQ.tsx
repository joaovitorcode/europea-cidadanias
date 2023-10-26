import Image from "next/image"
import { Acordeon } from "@/components/Accordeon"

export function FAQ() {
  return (
    <section className="relative w-full flex justify-center">
      <Image
        src="/bg_02.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-white opacity-90" />
      <div className="relative max-w-5xl w-full my-24 flex flex-col md:flex-row gap-12 px-4 lg:px-0">
        <div className="w-full">
          <h3 className="text-main text-3xl font-bold mb-4">
            Tudo o que você precisa saber sobre a Europea Cidadanias
          </h3>
          <p className="text-main">Ainda tem alguma dúvida?</p>
          <p className="text-main">Fale conosco pelo
            <a
              href="#"
              className="ml-1 underline underline-offset-4"
            >
              WhatsApp
            </a>
          </p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <Acordeon title="Pergunta?" body="Resposta!" />
          <Acordeon title="Pergunta?" body="Resposta!" />
          <Acordeon title="Pergunta?" body="Resposta!" />
          <Acordeon title="Pergunta?" body="Resposta!" />
          <Acordeon title="Pergunta?" body="Resposta!" />
          <Acordeon title="Pergunta?" body="Resposta!" />
        </div>
      </div>
    </section>
  )
}