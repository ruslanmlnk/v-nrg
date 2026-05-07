import Image from 'next/image'
import aboutCertificate from '@public/assets/about/about-certificate.jpg'
import SectionHeading from '../shared/SectionHeading'

export function AboutCertificatesSection() {
  return (
    <section className="mt-24 rounded-[48px] bg-[#22354A] py-[100px]">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12 px-6">
        <SectionHeading
          align="center"
          eyebrow="Надійність та підтримка"
          title="Офіційне обладнання з гарантією та сервісом"
          titleClassName="max-w-[700px] text-white"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`certificate-${index}`}
              className="flex justify-center rounded-[20px] bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={aboutCertificate}
                alt={`Сертифікат V-NRG ${index + 1}`}
                className="h-[210px] w-[150px] rounded-[5px] border border-[#D5E0E8] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
