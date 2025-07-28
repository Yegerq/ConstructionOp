import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const pricing = [
    {
      type: "Щитовая опалубка",
      price: "100",
      description: "Идеально для стен и перекрытий",
      features: ["Размеры: 1.2x2.4м", "Вес: 45кг", "Многоразовое использование"],
      popular: false,
    },
    {
      type: "Балочная опалубка",
      price: "120",
      description: "Для сложных конструкций",
      features: ["Высокая прочность", "Точная геометрия", "Быстрый монтаж"],
      popular: true,
    },
    {
      type: "Опалубка для колонн",
      price: "150",
      description: "Специализированное решение",
      features: ["Круглые и квадратные", "Регулируемый диаметр", "Гладкая поверхность"],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Прозрачные тарифы</h2>
          <p className="text-xl text-gray-600 mb-8">Выгодная аренда от 100 грн/м² в сутки без скрытых платежей</p>
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium">Специальные цены при аренде от 7 дней</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.popular ? "border-emerald-500 shadow-lg" : "border-gray-200 hover:border-emerald-300"
              }`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{item.price}</span>
                  <span className="text-gray-600 ml-1">грн/м²</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">за сутки</p>
              </div>

              <ul className="space-y-3 mb-8">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  item.popular
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                    : "bg-gray-900 hover:bg-gray-800"
                } text-white`}
              >
                Заказать сейчас
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Нужна консультация по выбору опалубки?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
          >
            Получить бесплатную консультацию
          </Button>
        </div>
      </div>
    </section>
  )
}
