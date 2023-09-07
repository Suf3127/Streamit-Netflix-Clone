import React ,{useState}from 'react'
import { Homes } from '../components/header/homes/Homes'
import { Upcoming } from '../components/header/Upcoming/Upcoming'
import { latest, recommended, upcome } from '../dummyData'
import { Trending } from '../components/header/trending/Trending'


export const HomePages = () => {
const [item, setitem] = useState(upcome)
const [items, setitems] = useState(latest)
const [rec, setrec] = useState(recommended)
  return (
   <>
   <Homes/>
   <Upcoming items={item} title='Upcoming Movies'/>
   <Upcoming items={items} title='Latest Movies'/>
   <Trending />
   <Upcoming items={rec} title='Recommended Movies'/>
   </>
  )
}
