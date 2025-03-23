import Image from "next/image"
import Link from "next/link"

export function Logo({ size = "medium", showText = true }) {
  const sizes = {
    small: { logo: 30, container: "h-8" },
    medium: { logo: 50, container: "h-12" },
    large: { logo: 80, container: "h-16" },
  }

  const selectedSize = sizes[size] || sizes.medium

  return (
    <Link href="/" className={`flex items-center gap-3 ${selectedSize.container}`}>
      <Image
        src="/logo.png"
        alt="AL MASAA AL BAYDHA Logo"
        width={selectedSize.logo}
        height={selectedSize.logo}
        className="h-auto w-auto"
      />
      {showText && (
        <div>
          <h1 className={`font-bold ${size === "large" ? "text-2xl" : "text-xl"}`}>AL MASAA AL BAYDHA</h1>
          <p className={`text-accent ${size === "large" ? "text-sm" : "text-xs"}`}>DOCUMENTS TYPING & COPYING</p>
        </div>
      )}
    </Link>
  )
}

