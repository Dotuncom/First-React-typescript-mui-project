
const ImageCard = ({imageUrl}:{imageUrl:string}) => {
  return (
    <div className='relative max-w-70 h-120 group rounded-2xl border-2 overflow-hidden border-gray-400/50 transform hover:-translate-y-5 '>
      <div className='absolute inset-0 group-hover:bg-black/30'></div>
        <img
         src={imageUrl} alt="app image"
         className='h-full w-full bg-cover bg-center' />
    </div>
  )
}

export default ImageCard