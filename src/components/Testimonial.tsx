import Image from "next/image"
import { BsFillStarFill, BsPersonCircle } from "react-icons/bs"
import { useRouter } from "next/router"

interface Testimonial {
  name: string
  stars: number
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  image?: {
    url: string
  }
}

interface Props {
  testimonial: Testimonial
}

export function Testimonial({ testimonial }: Props) {
  const { locale } = useRouter()

  function handleStars() {
    const stars: any = []
    for(let i = 0; i < testimonial.stars; i++) {
      stars.push(
        <BsFillStarFill
          key={i}
          className="w-6 h-6 text-yellow-400"
        />
      )
    }
    return stars
  }

  return (
    <div className="w-full bg-white rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {testimonial.image?.url ? (
          <Image
            src={testimonial.image?.url}
            alt={`Foto de perfil do Cliente ${testimonial.name}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-8 h-8"
          />) : (
            <BsPersonCircle className="w-8 h-8 text-gray-900" />
          )
        }
        <p className="font-medium text-gray-900">
          {testimonial.name}
        </p>
      </div>

      <p className="text-justify">
        {locale === "pt" && testimonial.descriptionPt}
        {locale === "en" && testimonial.descriptionEn}
        {locale === "es" && testimonial.descriptionEs}
        {locale === "it" && testimonial.descriptionIt}
      </p>

      <div className="flex gap-2">
        {handleStars()}
      </div>
    </div>
  )
}