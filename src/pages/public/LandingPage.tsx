import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  QrCode,
  Smartphone,
  TrendingUp,
  Clock,
  Pizza,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { Button } from "../../components/ui";
import { APP_CONFIG } from "../../config/config";

const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-bg">
      {/* Navegación */}
      <nav className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Pizza className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold text-text">
                {APP_CONFIG.appName}
              </span>
            </Link>

            {/* Navegación de Escritorio */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-text-secondary hover:text-text transition-colors"
              >
                Beneficios
              </a>
              <a
                href="#how-it-works"
                className="text-text-secondary hover:text-text transition-colors"
              >
                Especialidades
              </a>
              <Link
                to="/login"
                className="text-text-secondary hover:text-text transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link to="/register">
                <Button size="sm">Hacer un Pedido</Button>
              </Link>
            </div>

            {/* Botón de menú móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-text"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navegación Móvil */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-border">
              <a
                href="#features"
                className="block py-2 text-text-secondary hover:text-text transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </a>
              <Link
                to="/login"
                className="block py-2 text-text-secondary hover:text-text transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth>Hacer un Pedido</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Sección Hero */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
              El Sabor que Te Enamora 🍕
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Pizzas artesanales elaboradas con los mejores ingredientes y el toque único de Nito's Pizza. ¡Ordena de forma digital y recíbelo directo en tu mesa o domicilio!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Ver el Menú Digital
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Acceso Personal
                </Button>
              </Link>
            </div>

            {/* Estadísticas de Nito's Pizza */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">+10 Años</div>
                <div className="text-sm text-text-secondary">
                  De Tradición y Sabor
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">+30</div>
                <div className="text-sm text-text-secondary">
                  Variedades de Especialidades
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">4.8 ⭐</div>
                <div className="text-sm text-text-secondary">
                  Calificación en Tlacolula
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios de la app */}
      <section id="features" className="py-20 bg-bg-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Una Experiencia de Sabor Totalmente Digital
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Diseñamos nuestra plataforma para que disfrutes de tu comida favorita sin demoras ni filas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: QrCode,
                title: "Pedidos por Código QR",
                description:
                  "Escanea el código QR de tu mesa, explora el menú gráfico e inicia tu orden al instante.",
              },
              {
                icon: Smartphone,
                title: "Diseño para Celulares",
                description:
                  "Una interfaz rápida y hermosa que funciona de maravilla directamente en tu dispositivo.",
              },
              {
                icon: TrendingUp,
                title: "Actualizaciones en Vivo",
                description:
                  "Entérate de inmediato cuando tu pizza esté en el horno y lista para salir.",
              },
              {
                icon: Clock,
                title: "Ahorra Tiempo",
                description:
                  "Sin llamadas confusas ni esperas por el mesero. Tu orden directo a la cocina.",
              },
            ].map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/5 mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
