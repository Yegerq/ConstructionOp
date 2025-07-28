import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Готовы начать ваш проект?</h2>
        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
          Получите бесплатную консультацию и расчет стоимости аренды опалубки для вашего объекта
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <Phone className="w-5 h-5 mr-2" />
            Позвонить сейчас
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Написать в WhatsApp
          </Button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div>
            <h3 className="font-semibold mb-2">Телефон</h3>
            <p className="text-emerald-100">+380(99) 488-88-88</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Время работы</h3>
            <p className="text-emerald-100">
              Пн-Пт: 8:00-18:00
              <br />
              Сб: 9:00-15:00
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Доставка</h3>
            <p className="text-emerald-100">
              По Харькову и области
              <br />
              24 часа в сутки
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
