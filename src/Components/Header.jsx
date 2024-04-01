
import troll from '../assets/Troll.png'
const Header = () => {
  return (
    <>
    <header className="bg-terblue flex h-[65px] text-white p-2">
      <img src={troll}
      className="h-full mr-1"
      ></img>
      <h2 className= "text-red-500 text-[1.255rem] mr-auto">Meme Generator</h2>
      <h4 className="text-[0.75rem] font-bold">Get enough Memes</h4>
    </header>
      
    </>
  )
}

export default Header
