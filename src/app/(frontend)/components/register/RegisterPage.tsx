import SiteFooter from '../SiteFooter'
import RegisterForm from './RegisterForm'

export default function RegisterPage() {
  return (
    <div className="pt-12">
      <section className="px-6 pb-[72px] pt-10 md:pb-[100px] md:pt-12">
        <div className="mx-auto flex max-w-[1288px] flex-col items-center">
          <div className="flex max-w-[520px] flex-col items-center gap-3 text-center">
            <h1 className="text-[32px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">Реєстрація</h1>
            <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">Заповніть форму для реєстрації</p>
          </div>

          <div className="mt-10 w-full max-w-[494px]">
            <RegisterForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
