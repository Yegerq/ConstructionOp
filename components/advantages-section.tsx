import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function AdvantagesSection() {
  const advantages = [
    {
      number: "01",
      title: "Быстрая доставка",
      description: "Привезем опалубку в течение 24 часов после оформления заказа",
      highlight: "24 часа",
    },
    {
      number: "02",
      title: "Состояние «как новое»",
      description: "Тщательно проверяем каждый элемент перед каждой арендой",
      highlight: "100% проверка",
    },
    {
      number: "03",
      title: "Гибкие условия аренды",
      description: "Минимальный срок аренды от 1 дня, максимальный - без ограничений",
      highlight: "От 1 дня",
    },
    {
      number: "04",
      title: "Профессиональный расчет",
      description: "Поможем точно рассчитать необходимое количество щитов для вашего объекта",
      highlight: "Бесплатно",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
          <p className="text-xl text-gray-600">Что делает нас лучшим выбором для аренды опалубки</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Advantages List */}
          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group flex space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {advantage.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {advantage.title}
                    </h3>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      {advantage.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Construction formwork panels"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Quality Badge */}
            <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Качество</p>
                  <p className="text-sm text-gray-500">Гарантировано</p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-blue-100/50 rounded-2xl transform -rotate-2 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-100/30 to-pink-100/30 rounded-2xl transform rotate-1 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
