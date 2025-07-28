import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Олег Ткаченко",
      role: "Прораб строительной компании",
      company: "СтройМастер",
      text: "Арендовал опалубку для строительства частного дома. Всё привезли вовремя, качество отличное. Очень удобно, что помогли рассчитать количество щитов и дали рекомендации по монтажу. Обязательно обращусь снова!",
      rating: 5,
      project: "Частный дом 200м²",
    },
    {
      name: "Анна Петрова",
      role: "Главный инженер",
      company: "БудИнвест",
      text: "Сотрудничаем уже третий год. Всегда качественная опалубка, быстрая доставка и адекватные цены. Особенно нравится, что можно арендовать на любой срок - от нескольких дней до месяцев.",
      rating: 5,
      project: "ЖК Солнечный",
    },
    {
      name: "Дмитрий Иванов",
      role: "Индивидуальный застройщик",
      company: "Собственник",
      text: "Строил гараж своими силами. Ребята не только предоставили опалубку, но и проконсультировали по всем вопросам. Цены справедливые, оборудование в отличном состоянии. Рекомендую!",
      rating: 5,
      project: "Гараж 50м²",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600">Более 500 довольных клиентов доверяют нам свои проекты</p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">из 5 на основе 127 отзывов</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              {/* Project Info */}
              <div className="bg-emerald-50 p-3 rounded-lg mb-6">
                <p className="text-sm text-emerald-700 font-medium">Проект: {testimonial.project}</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4 border-2 border-gray-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-emerald-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Нам доверяют</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {["СтройМастер", "БудИнвест", "ДомСтрой", "МегаБуд"].map((company, index) => (
                <div key={index} className="text-lg font-semibold text-gray-600">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
