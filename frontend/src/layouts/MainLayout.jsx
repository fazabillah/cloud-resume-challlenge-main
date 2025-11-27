import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav'

function MainLayout() {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  )
}

export default MainLayout
