import { Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import SearchLabel from './SearchLabel'
import SideNav from './SideNav'
import TopNav from './TopNav'
import BottomBar from './BottomBar'
import OffersSlider from './OffersSlider'
import Loader from './Loader'
import Categories from './Categories'

const PageLayout = ({
  setSideNav,
  handleSearch,
  searchQuery,
  setSearchQuery,
  isSubmitted,
  filteredItems,
  searchValue,
  close,
  sideNav,
  swiper,
  setModalOn,
  storeData,
  mainColor,
  offers,
  loading,
  setOfferModal,
  setSingleItem,
  data,
  value,
  setValue,
}) => {
  return (
    <div className='hide-scrollbar'>
      <div className='sticky top-0 z-20'>
        <TopNav
          setSideNav={setSideNav}
          storeData={storeData}
          mainColor={mainColor}
        />
        <SearchBar
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      {loading ? (
        <Loader />
      ) : offers?.length ? (
        <OffersSlider
          offers={offers}
          setOfferModal={setOfferModal}
          setSingleItem={setSingleItem}
        />
      ) : null}
      <Categories data={data} value={value} setValue={setValue} />
      {isSubmitted && (
        <SearchLabel
          filteredItems={filteredItems}
          searchValue={searchValue}
          close={close}
        />
      )}
      <BottomBar setModalOn={setModalOn} />
      <SideNav
        sideNav={sideNav}
        setSideNav={setSideNav}
        swiper={swiper}
        storeData={storeData}
      />
      <Outlet />
    </div>
  )
}

export default PageLayout
