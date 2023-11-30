import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import ThinLine from './components/ThinLine'
import EventCard from './components/EventCard'

export default function Home({}) {
  return (
    <main>
        <h1 className={"text-3xl"}>CRYSTAL BALL</h1>
        <ThinLine />
        <h1 className="text-2xl">EVENT</h1>
        <EventCard />
        {/* Client side navigation below, use this for fast loading */}
        <Link href="/users">Users</Link>
        <ProductCard />
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
        <br></br>
        <a href="/profile">Profile</a>
    </main>
  )
}