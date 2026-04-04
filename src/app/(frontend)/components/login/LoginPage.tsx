import SiteFooter from '../SiteFooter'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div className="pt-12">
      <section className="px-6 pb-[72px] pt-10 md:pb-[100px] md:pt-12">
        <div className="mx-auto flex max-w-[1288px] flex-col items-center">
          <div className="flex max-w-[520px] flex-col items-center gap-3 text-center">
            <h1 className="text-[32px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
              Вхід до особистого кабінету
            </h1>
            <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">Введіть свої дані для входу</p>
          </div>

          <div className="mt-10 w-full max-w-[494px]">
            <LoginForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
