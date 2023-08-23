import { Hero,Search } from '@/component'
import { HomeProps } from '@/types'
import Image from 'next/image'

export default function Home({searchParams}:HomeProps) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Search searchParams={searchParams}/>
    </main>
  )
}
