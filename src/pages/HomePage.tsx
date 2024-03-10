import landingImage from '../assets/landing.png'
import appDownloadImage from '../assets/appDownload.png'
import SearchBar, { SearchForm } from '@/components/SearchBar'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    })
  }

  return (
    <div className='flex flex-col gap-12'>
      <div className='md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-green-600'>
          Wanting a constant, reliable and eco-friendly energy supply
        </h1>
        <span className='text-xl'>
          Renewable Energy Products are just a click away
        </span>
        <SearchBar
          placeHolder='Search by City or Town'
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingImage} />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Order Products even faster!
          </span>
          <span>
            Download the Rexex App for faster and seamless product delivery and
            personalised recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
}

export default HomePage
