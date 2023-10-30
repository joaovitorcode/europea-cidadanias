import Image from "next/image"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { RichText } from "@/components/RichText"
import { Thumbnail } from "@/components/Thumbnail"
import { getPostBySlug } from "@/utils/getPostBySlug"
import { getFooter } from '@/utils/getFooter'
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

export default function Post({ data }: any) {
  const { locale } = useRouter()
  const { postPage } = translations[locale as string]

  if (!data) return
  const { post, footer } = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <main className="max-w-3xl mx-auto py-12 px-4 xl:px-0">
          <div className="flex gap-4 flex-wrap items-center">
            <p className="text-sm font-medium py-1 px-3 text-main bg-red-100 rounded-2xl">
              {post.tag}
            </p>
            <p className="text-sm text-gray-900">
              {post.date}
            </p>
            <p className="text-sm text-main font-bold">
              {post.authorName}
            </p>
          </div>
          <h2 className="text-gray-900 font-bold text-2xl mt-6">
            {locale === "pt" && post.titlePt}
            {locale === "en" && post.titleEn}
            {locale === "es" && post.titleEs}
            {locale === "it" && post.titleIt}
          </h2>
          <Image
            src={post.coverPhoto.url}
            alt={`Imagem de capa do artigo ${post.titlePt}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[512px] rounded-2xl object-cover mt-6"
          />
          <article className="prose prose-headings:text-start text-justify prose-base sm:prose-lg md:prose-xl mt-6">
            {locale === "pt" && <RichText content={post.bodyPt.raw} />}
            {locale === "en" && <RichText content={post.bodyEn.raw} />}
            {locale === "es" && <RichText content={post.bodyEs.raw} />}
            {locale === "it" && <RichText content={post.bodyIt.raw} />}
          </article>
          <h3 className="text-4xl font-bold mt-16 mb-12">
            {postPage.recommendedPosts}
          </h3>
          <div className="w-full flex flex-col md:flex-row gap-6">
            {post.related.map((r: any) => (
              <Thumbnail key={r.slug} post={r} />
            ))}
          </div>
        </main>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const { slug = '' } = context.params

  const { post } = await getPostBySlug(slug)
  const { footer } = await getFooter()

  return {
    props: {
      data: JSON.stringify({
        post,
        footer
      }) || null
    }
  }
}