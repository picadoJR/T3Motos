🏍️ MOTOS123

Aplicación web desarrollada con React para la visualización de motocicletas, gestión de usuarios y navegación entre diferentes secciones como artículos, ofertas y compras.

---

 🚀 Tecnologías utilizadas

* React
* Vite
* React Router DOM
* JavaScript (ES6+)
* CSS

---

 📁 Estructura del proyecto

```
MOTOS123/
│── public/
│   └── img/              # Imágenes de motos
│
│── src/
│   ├── assets/           # Recursos estáticos
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── Favorites.jsx
│   │   │   │   ├── Myaccount.jsx
│   │   │   │   └── Mybuys.jsx
│   │   │   ├── hooks/
│   │   │   └── context/
│   │   │       └── ShopContext.jsx
│   │
│   ├── layout/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Content.jsx
│   │   └── hooks/
│   │       ├── ClockExample.jsx
│   │       ├── ColorExample.jsx
│   │       ├── CounterExample.jsx
│   │       ├── FetchExample.jsx
│   │       ├── InputExample.jsx
│   │       ├── ToggleExample.jsx
│   │       ├── useFormValidation.jsx
│   │       ├── UseOnlineStatus.jsx
│   │       ├── UserPersistExample.jsx
│   │       └── WindowWidthExample.jsx
│
│   ├── views/
│   │   ├── Articles.jsx
│   │   ├── Hooks.jsx
│   │   └── Offers.jsx
│
│   ├── shared/           # Recursos compartidos
│   ├── styles/
│   │   ├── app.css
│   │   └── index.css
│
│   ├── App.jsx
│   └── main.jsx
│
│── index.html
│── vite.config.js
│── package.json
```

---

⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/picadoJR/T3.git
```

Ingresa al proyecto:

```bash
cd MOTOS123
```

Instala dependencias:

```bash
npm install
```

---

▶️ Ejecución en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

 🏗️ Build para producción

```bash
npm run build
```

---

🌐 Despliegue

El proyecto puede ser desplegado fácilmente en plataformas como:

* Vercel
  

---

 📌 Funcionalidades principales

* Visualización de catálogo de motos
* Navegación entre páginas (Articles, Hooks, Offers)
* Gestión de usuario (cuenta, favoritos, compras)
* Uso de hooks personalizados
* Context API para manejo de estado global

---

👨‍💻 Autor

Desarrollado por **Reinaldo Picado**
link de vercel
https://t3-motos.vercel.app/

---

 📄 Licencia

Este proyecto es de uso educativo.
