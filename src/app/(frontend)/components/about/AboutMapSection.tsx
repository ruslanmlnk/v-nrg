'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { DivIcon, Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

import aboutMap from '@public/assets/about/about-map.jpg'
import aboutSalon from '@public/assets/about/about-salon-1.webp'

type LeafletModule = typeof import('leaflet')

type Salon = {
  id: string
  name: string
  city: string
  address: string
  image: StaticImageData
  coordinates: [number, number]
}

const DEFAULT_CENTER: [number, number] = [50.4501, 30.5234]
const DEFAULT_ZOOM = 12

const salons: Salon[] = [
  {
    id: 'salon-1',
    name: 'Beauty Kyiv Center',
    city: 'Київ, Україна',
    address: 'вул. Хрещатик, 25',
    image: aboutSalon,
    coordinates: [50.4477, 30.5226],
  },
  {
    id: 'salon-2',
    name: 'Beauty Kyiv Podil',
    city: 'Київ, Україна',
    address: 'вул. Ярославська, 11',
    image: aboutSalon,
    coordinates: [50.4654, 30.5151],
  },
  {
    id: 'salon-3',
    name: 'Beauty Kyiv Pechersk',
    city: 'Київ, Україна',
    address: 'бул. Лесі Українки, 7Б',
    image: aboutSalon,
    coordinates: [50.429, 30.5384],
  },
]

export default function AboutMapSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMapReady, setIsMapReady] = useState(false)
  const [activeSalonId, setActiveSalonId] = useState(salons[0].id)
  const [searchQuery, setSearchQuery] = useState('')

  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef<Record<string, LeafletMarker>>({})
  const leafletRef = useRef<LeafletModule | null>(null)

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const visibleSalons = normalizedQuery
    ? salons.filter((salon) =>
        `${salon.name} ${salon.city} ${salon.address}`.toLowerCase().includes(normalizedQuery),
      )
    : salons
  const activeSalon = visibleSalons.find((salon) => salon.id === activeSalonId) ?? visibleSalons[0] ?? null

  useEffect(() => {
    if (!visibleSalons.length) {
      return
    }

    const isActiveVisible = visibleSalons.some((salon) => salon.id === activeSalonId)

    if (!isActiveVisible) {
      setActiveSalonId(visibleSalons[0].id)
    }
  }, [activeSalonId, normalizedQuery, visibleSalons])

  useEffect(() => {
    if (!isOpen || !mapContainerRef.current || mapRef.current) {
      return
    }

    let isCancelled = false

    const initializeMap = async () => {
      const leaflet = await import('leaflet')

      if (isCancelled || !mapContainerRef.current) {
        return
      }

      leafletRef.current = leaflet

      const map = leaflet.map(mapContainerRef.current, {
        attributionControl: true,
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        zoomControl: false,
      })

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        })
        .addTo(map)

      mapRef.current = map
      setIsMapReady(true)

      window.setTimeout(() => {
        map.invalidateSize()
      }, 0)
    }

    void initializeMap()

    return () => {
      isCancelled = true
      setIsMapReady(false)

      Object.values(markersRef.current).forEach((marker) => marker.remove())
      markersRef.current = {}

      mapRef.current?.remove()
      mapRef.current = null
      leafletRef.current = null
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !isMapReady || !mapRef.current || !leafletRef.current) {
      return
    }

    const map = mapRef.current
    const leaflet = leafletRef.current

    Object.values(markersRef.current).forEach((marker) => marker.remove())
    markersRef.current = {}

    if (!visibleSalons.length) {
      map.closePopup()
      map.setView(DEFAULT_CENTER, DEFAULT_ZOOM)
      return
    }

    visibleSalons.forEach((salon) => {
      const isActive = salon.id === activeSalon?.id
      const marker = leaflet.marker(salon.coordinates, {
        icon: createMarkerIcon(leaflet, isActive),
      })

      marker.addTo(map)
      marker.on('click', () => setActiveSalonId(salon.id))
      marker.bindPopup(createPopupMarkup(salon), {
        autoClose: false,
        className: 'about-map-popup',
        closeButton: false,
        closeOnClick: false,
        offset: [0, -40],
      })

      if (isActive) {
        marker.openPopup()
      }

      markersRef.current[salon.id] = marker
    })

    if (activeSalon) {
      map.flyTo(activeSalon.coordinates, DEFAULT_ZOOM, {
        animate: true,
        duration: 0.7,
      })
    }
  }, [activeSalon, isMapReady, isOpen, normalizedQuery, visibleSalons])

  if (!isOpen) {
    return <AboutMapPreview onClick={() => setIsOpen(true)} />
  }

  return (
    <div className="overflow-hidden rounded-[20px] bg-[#F5F8F9] lg:h-[740px]">
      <div className="flex h-full flex-col lg:flex-row">
        <div className="flex shrink-0 flex-col gap-4 bg-[#F5F8F9] p-8 lg:w-[449px]">
          {visibleSalons.length ? (
            visibleSalons.map((salon) => {
              const isActive = salon.id === activeSalon?.id

              return (
                <button
                  key={salon.id}
                  type="button"
                  onClick={() => setActiveSalonId(salon.id)}
                  className={`flex w-full flex-col gap-6 rounded-[20px] bg-white p-8 text-left transition-shadow duration-300 ${
                    isActive
                      ? 'border-2 border-[#4FACF5] shadow-[0_24px_64px_rgba(34,53,74,0.08)]'
                      : 'border-2 border-transparent shadow-[0_12px_32px_rgba(34,53,74,0.05)]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={salon.image}
                      alt={salon.name}
                      className="h-[86px] w-[86px] rounded-[20px] object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="text-[18px] font-medium leading-[145%] text-[#22354A]">
                        {salon.name}
                      </div>
                      <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
                        {salon.city}
                      </div>
                      <div className="text-[16px] font-medium leading-[165%] text-[#B7CAD1]">
                        {salon.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[18px] font-bold leading-[145%] text-[#22354A]">
                      Контакти для зв&apos;язку:
                    </div>
                    <div className="flex items-center gap-2">
                      <CircleLink ariaLabel="Instagram салону">
                        <InstagramIcon />
                      </CircleLink>
                      <CircleLink ariaLabel="Телефон салону">
                        <PhoneIcon />
                      </CircleLink>
                    </div>
                  </div>
                </button>
              )
            })
          ) : (
            <div className="rounded-[20px] bg-white p-8 text-[18px] font-medium leading-[165%] text-[#22354A] shadow-[0_12px_32px_rgba(34,53,74,0.05)]">
              За цим запитом салони не знайдено.
            </div>
          )}
        </div>

        <div className="about-map relative min-h-[520px] flex-1 overflow-hidden">
          <div ref={mapContainerRef} className="h-full min-h-[520px] w-full" />

          <div className="absolute left-4 right-4 top-4 z-[500] flex flex-col gap-3 sm:left-[27px] sm:right-[27px] sm:top-[27px] sm:flex-row sm:items-center sm:justify-between">
            <label className="flex h-[55px] w-full max-w-[400px] items-center gap-4 rounded-[40px] bg-white px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
              <SearchIcon />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Пошук на мапі"
                className="w-full bg-transparent text-[18px] font-medium leading-[145%] text-[#22354A] outline-none placeholder:text-[#22354A]"
              />
            </label>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false)
                setSearchQuery('')
                setActiveSalonId(salons[0].id)
              }}
              className="flex h-[50px] items-center gap-2 self-start rounded-[40px] bg-[#22354A] px-6 text-[16px] font-medium leading-[145%] text-white"
            >
              <span>Закрити мапу</span>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AboutMapPreview({
  href,
  onClick,
}: {
  href?: string
  onClick?: () => void
}) {
  const buttonClassName =
    'rounded-[40px] bg-white px-6 py-3 text-[18px] font-medium leading-[145%] text-[#22354A] shadow-[0_18px_40px_rgba(34,53,74,0.12)] transition-transform duration-300 hover:-translate-y-0.5'

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-[20px]">
      <Image
        src={aboutMap}
        alt="Географія V-NRG"
        fill
        sizes="(min-width: 1024px) 1288px, 100vw"
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-[42px] flex justify-center">
        {href ? (
          <Link href={href} className={buttonClassName}>
            Переглянути на мапі
          </Link>
        ) : (
          <button type="button" onClick={onClick} className={buttonClassName}>
            Переглянути на мапі
          </button>
        )}
      </div>
    </div>
  )
}

function createMarkerIcon(leaflet: LeafletModule, active: boolean): DivIcon {
  const fill = active ? '#4FACF5' : '#22354A'

  return leaflet.divIcon({
    className: 'about-map-pin-icon',
    html: `
      <svg width="40" height="49" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0C8.95431 0 0 8.99066 0 20.081C0 35.1415 20 49 20 49C20 49 40 35.1415 40 20.081C40 8.99066 31.0457 0 20 0Z" fill="${fill}" />
        <circle cx="20" cy="20" r="6" fill="white" />
      </svg>
    `,
    iconAnchor: [20, 49],
    iconSize: [40, 49],
    popupAnchor: [0, -44],
  })
}

function createPopupMarkup(salon: Salon) {
  return `
    <div class="about-map-popup-card">
      <div class="about-map-popup-row">
        <img class="about-map-popup-image" src="${salon.image.src}" alt="${salon.name}" />
        <div class="about-map-popup-copy">
          <div class="about-map-popup-title">${salon.name}</div>
          <div class="about-map-popup-subtitle">${salon.city}</div>
          <div class="about-map-popup-subtitle">${salon.address}</div>
        </div>
      </div>
      <div class="about-map-popup-footer">
        <div class="about-map-popup-label">Контакти для зв'язку:</div>
        <div class="about-map-popup-actions">
          <span class="about-map-popup-action">${instagramMarkup}</span>
          <span class="about-map-popup-action">${phoneMarkup}</span>
        </div>
      </div>
    </div>
  `
}

function CircleLink({
  ariaLabel,
  children,
}: {
  ariaLabel: string
  children: React.ReactNode
}) {
  return (
    <span
      aria-label={ariaLabel}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#4FACF5]"
    >
      {children}
    </span>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
        stroke="#22354A"
        strokeWidth="1.5"
      />
      <path d="M12.75 12.75L15.75 15.75" stroke="#22354A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 4.5L4.5 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.5 4.5L13.5 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.1" y="2.1" width="15.8" height="15.8" rx="4.5" stroke="white" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.2" stroke="white" strokeWidth="1.4" />
      <circle cx="14.4" cy="5.6" r="0.9" fill="white" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.24117 3.83331C6.55945 3.83331 6.85411 4.00692 7.01075 4.28614L8.31757 6.61612C8.47047 6.88867 8.45162 7.22514 8.2693 7.47903L7.12897 9.06736C7.95122 10.7619 9.2381 12.0488 10.9327 12.871L12.521 11.7307C12.7749 11.5484 13.1113 11.5295 13.3839 11.6824L15.7139 12.9892C15.9931 13.1459 16.1667 13.4405 16.1667 13.7588V15.5C16.1667 15.9602 15.7935 16.3333 15.3333 16.3333H14.5C8.8851 16.3333 3.66669 11.1149 3.66669 5.49998V4.66665C3.66669 4.20641 4.03979 3.83331 4.50002 3.83331H6.24117Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const instagramMarkup = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.1" y="2.1" width="15.8" height="15.8" rx="4.5" stroke="white" stroke-width="1.4" />
    <circle cx="10" cy="10" r="3.2" stroke="white" stroke-width="1.4" />
    <circle cx="14.4" cy="5.6" r="0.9" fill="white" />
  </svg>
`

const phoneMarkup = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.24117 3.83331C6.55945 3.83331 6.85411 4.00692 7.01075 4.28614L8.31757 6.61612C8.47047 6.88867 8.45162 7.22514 8.2693 7.47903L7.12897 9.06736C7.95122 10.7619 9.2381 12.0488 10.9327 12.871L12.521 11.7307C12.7749 11.5484 13.1113 11.5295 13.3839 11.6824L15.7139 12.9892C15.9931 13.1459 16.1667 13.4405 16.1667 13.7588V15.5C16.1667 15.9602 15.7935 16.3333 15.3333 16.3333H14.5C8.8851 16.3333 3.66669 11.1149 3.66669 5.49998V4.66665C3.66669 4.20641 4.03979 3.83331 4.50002 3.83331H6.24117Z" stroke="white" stroke-width="1.4" stroke-linejoin="round" />
  </svg>
`
