import type { StaticImageData } from 'next/image'

type IconAssetProps = {
  className?: string
  height: number
  label?: string
  src: StaticImageData | string
  width: number
}

export default function IconAsset({ className = '', height, label, src, width }: IconAssetProps) {
  const iconUrl = typeof src === 'string' ? src : src.src

  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={`inline-block shrink-0 bg-current ${className}`}
      role={label ? 'img' : undefined}
      style={{
        height,
        mask: `url(${iconUrl}) center / contain no-repeat`,
        WebkitMask: `url(${iconUrl}) center / contain no-repeat`,
        width,
      }}
    />
  )
}
