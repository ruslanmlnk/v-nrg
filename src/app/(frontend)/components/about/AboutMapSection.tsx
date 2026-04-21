'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { DivIcon, Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

import aboutMap from '@public/assets/about/about-map.jpg'
import aboutSalon from '@public/assets/about/about-salon-1.webp'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import searchIconAsset from '@public/icon/generated/components-about-about-map-section-search.svg'
import closeIconAsset from '@public/icon/generated/components-about-about-map-section-close.svg'
import mapMarkerActiveIconAsset from '@public/icon/generated/about-map-marker-active.svg'
import mapMarkerIconAsset from '@public/icon/generated/about-map-marker.svg'
import instagramIconAsset from '@public/icon/generated/components-about-about-map-section-instagram.svg'
import phoneIconAsset from '@public/icon/generated/components-about-about-map-section-phone.svg'

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
        icon: createMarkerPin(leaflet, isActive),
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
                        <IconAsset src={instagramIconAsset} width={20} height={20} />
                      </CircleLink>
                      <CircleLink ariaLabel="Телефон салону">
                        <IconAsset src={phoneIconAsset} width={20} height={20} />
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
              <IconAsset src={searchIconAsset} width={18} height={18} />
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
              <IconAsset src={closeIconAsset} width={18} height={18} />
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

function createMarkerPin(leaflet: LeafletModule, active: boolean): DivIcon {
  const iconUrl = getAssetUrl(active ? mapMarkerActiveIconAsset : mapMarkerIconAsset)

  return leaflet.divIcon({
    className: 'about-map-pin-icon',
    html: `<img src="${iconUrl}" alt="" width="40" height="49" />`,
    iconAnchor: [20, 49],
    iconSize: [40, 49],
    popupAnchor: [0, -44],
  })
}

function createPopupMarkup(salon: Salon) {
  const instagramIconUrl = getAssetUrl(instagramIconAsset)
  const phoneIconUrl = getAssetUrl(phoneIconAsset)

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
          <span class="about-map-popup-action"><img src="${instagramIconUrl}" alt="" width="20" height="20" /></span>
          <span class="about-map-popup-action"><img src="${phoneIconUrl}" alt="" width="20" height="20" /></span>
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

function getAssetUrl(src: StaticImageData | string) {
  return typeof src === 'string' ? src : src.src
}
