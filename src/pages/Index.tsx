import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'MapPin',
      title: 'Межевание земельных участков',
      description: 'Установление границ земельного участка с выносом межевых знаков на местность',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'FileText',
      title: 'Постановка на кадастр',
      description: 'Подготовка документов и сопровождение процедуры кадастрового учета',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Target',
      title: 'Топографическая съемка',
      description: 'Создание топографических планов для строительного проектирования',
      price: 'от 20 000 ₽'
    },
    {
      icon: 'Building',
      title: 'Исполнительная съемка',
      description: 'Контроль соблюдения проектных решений при строительстве',
      price: 'от 18 000 ₽'
    }
  ];

  const equipment = [
    { name: 'Тахеометры', description: 'Высокоточные электронные тахеометры Leica и Trimble' },
    { name: 'GPS/GNSS приемники', description: 'Спутниковые системы позиционирования для геодезических работ' },
    { name: 'Нивелиры', description: 'Оптические и цифровые нивелиры для высотных измерений' },
    { name: 'Дроны', description: 'Беспилотные летательные аппараты для аэрофотосъемки' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Navigation" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ГеоСервис</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#equipment" className="text-gray-600 hover:text-primary transition-colors">Оборудование</a>
              <a href="#prices" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Заказать услугу</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Точные
                <span className="text-primary block">геодезические</span>
                услуги
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Межевание земельных участков и постановка на кадастр. 
                Работаем с современным оборудованием и гарантируем точность измерений.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/cd93b4ef-1457-4cae-b275-8495ac98a29d.jpg" 
                alt="Геодезическое оборудование"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный комплекс геодезических работ для строительства и землепользования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-0 bg-gray-50/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Современное оборудование</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Используем только проверенные инструменты ведущих мировых производителей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Settings" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Нужна геодезическая экспертиза?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              info@geoservice.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Navigation" size={32} className="text-primary" />
                <h4 className="text-2xl font-bold text-white">ГеоСервис</h4>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Профессиональные геодезические услуги для строительства и землепользования. 
                Гарантируем точность и соблюдение сроков.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Межевание участков</li>
                <li>Кадастровые работы</li>
                <li>Топосъемка</li>
                <li>Исполнительная съемка</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@geoservice.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГеоСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;