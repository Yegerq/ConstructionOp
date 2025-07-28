import { Button } from "@/components/ui/button"
import { Phone, Calculator, Truck, RotateCcw } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Оставляете заявку",
      description: "Звоните или оставляете заявку на сайте с описанием задачи",
      icon: Phone,
      color: "emerald",
    },
    {
      number: "02",
      title: "Рассчитываем комплект",
      description: "Наши специалисты подбирают оптимальное количество и тип опалубки",
      icon: Calculator,
      color: "blue",
    },
    {
      number: "03",
      title: "Доставляем на объект",
      description: "Быстрая доставка в течение 24 часов по Харькову и области",
      icon: Truck,
      color: "purple",
    },
    {
      number: "04",
      title: "Возврат и приемка",
      description: "Забираем опалубку после завершения работ и проводим приемку",
      icon: RotateCcw,
      color: "orange",
    },
  ]

  const colorClasses = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
          <p className="text-xl text-gray-600">Простой и понятный процесс от заявки до возврата</p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 via-purple-200 to-orange-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${colorClasses[step.color]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="text-3xl font-bold text-gray-300 mb-2">{step.number}</div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-0.5 h-8 bg-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
            <p className="text-emerald-100 mb-6">Оставьте заявку прямо сейчас и получите расчет в течение часа</p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
