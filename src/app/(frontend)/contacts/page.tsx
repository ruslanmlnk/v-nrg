import {
  ContactRequestSection,
  ContactsHeroSection,
  ContactsPillsSection,
} from '../components/contacts/ContactsSections'

export default function ContactsPage() {
  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <ContactsHeroSection />
        <ContactsPillsSection />
        <ContactRequestSection />
      </div>
    </div>
  )
}
