import { HashRouter, Routes, Route } from 'react-router-dom'
import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import { Articles } from "./features/views/Articles"
import { Offers } from './features/views/Offers'
import { Myaccount } from "./features/auth/components/Myaccount"
import { Mybuys } from "./features/auth/components/Mybuys"
import { Hooks } from "./features/views/Hooks"
import { Favorites } from './features/auth/components/Favorites'
import { ShopProvider } from "./features/context/ShopContext";

function App() {
  return (
    <ShopProvider>

      <HashRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/mybuys" element={<Mybuys />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        <Footer />

      </HashRouter>

    </ShopProvider>
  )
}

export default App