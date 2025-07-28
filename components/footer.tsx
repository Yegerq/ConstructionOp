import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">МВР</span>
              </div>
              <div>
                <span className="text-xl font-semibold">Аренда опалубки</span>
                <p className="text-gray-400 text-sm">Харьков и область</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Более 10 лет предоставляем качественную опалубку для строительных проектов любой сложности. Быстрая
              доставка, справедливые цены, профессиональная поддержка.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Telegram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <span className="text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">+380(99) 488-88-88</p>
                  <p className="text-gray-400 text-sm">Основной номер</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">info@mvr-opalubka.com</p>
                  <p className="text-gray-400 text-sm">Email для заявок</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">г. Харьков</p>
                  <p className="text-gray-400 text-sm">Доставка по городу и области</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Режим работы</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Пн-Пт: 8:00-18:00</p>
                  <p className="font-medium">Сб: 9:00-15:00</p>
                  <p className="text-gray-400 text-sm">Вс: выходной</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Аренда щитовой опалубки</li>
                <li>• Аренда балочной опалубки</li>
                <li>• Опалубка для колонн</li>
                <li>• Консультации и расчеты</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 МВР. Все права защищены. Лучшая аренда опалубки в Харькове</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
