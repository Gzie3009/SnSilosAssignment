import Topsection from '../components/Home/topsection/topsection'
import { Metadata } from 'next'
import CategorySection from "../components/Home/categories"
export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage for ecommerce website',
}

export default function Home() {
  return (
    <div className='bg-white'>
      <Topsection/>  
      <CategorySection/>
    </div>
  )
}
