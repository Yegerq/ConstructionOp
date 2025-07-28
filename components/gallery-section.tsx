"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: "/placeholder.svg?height=500&width=800",
      title: "Подготовка основания",
      description: "Профессиональная подготовка площадки для установки опалубки",
    },
    {
      src: "/placeholder.svg?height=500&width=800",
      title: "Монтаж конструкции",
      description: "Точная установка щитов согласно проектной документации",
    },
    {
      src: "/placeholder.svg?height=500&width=800",
      title: "Заливка бетона",
      description: "Контроль качества на всех этапах бетонирования",
    },
    {
      src: "/placeholder.svg?height=500&width=800",
      title: "Готовый результат",
      description: "Идеально ровные поверхности после снятия опалубки",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Наша опалубка в работе</h2>
          <p className="text-xl text-gray-600">Посмотрите, как выглядят наши проекты на разных этапах строительства</p>
        </div>

        {/* Main Gallery */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src={images[currentSlide].src || "/placeholder.svg"}
                alt={images[currentSlide].title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{images[currentSlide].title}</h3>
                <p className="text-gray-200">{images[currentSlide].description}</p>
              </div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Button
                  size="lg"
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </Button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center mt-8 space-x-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-emerald-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-gray-600">Завершенных проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">10,000м²</div>
            <div className="text-gray-600">Опалубки в наличии</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">99%</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  )
}
