import { Star, FileText, Shield, Clock, Award, Headphones } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Star,
      title: "Опыт работы более 10 лет",
      description:
        "Уже более 10 лет мы предоставляем опалубку для строительных задач, подбираем оптимальные решения под задачи клиента",
      color: "emerald",
    },
    {
      icon: FileText,
      title: "Официальный договор",
      description:
        "Прозрачно и без скрытых платежей. Фиксируем сроки, цену и обязательства, гарантируем надежность и взаимовыгодное сотрудничество",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description:
        "Вы получаете исправное оборудование и полную поддержку на весь срок аренды. Мы всегда на связи и отвечаем за каждый элемент",
      color: "purple",
    },
  ]

  const stats = [
    { icon: Clock, value: "24ч", label: "Быстрая доставка" },
    { icon: Award, value: "500+", label: "Довольных клиентов" },
    { icon: Headphones, value: "24/7", label: "Поддержка клиентов" },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Почему выбирают именно нас?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем качественную опалубку с полным сервисом и гарантией результата
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const colorClasses = {
              emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
              blue: "bg-blue-50 text-blue-600 border-blue-100",
              purple: "bg-purple-50 text-purple-600 border-purple-100",
            }

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-emerald-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
