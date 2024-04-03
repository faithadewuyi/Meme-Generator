import MemesData from "./MemesData"
import {useState} from "react"

const Meme = () => {
  const [memeImage, setMemeImage] = useState("")
  function getMemeImage(){
    const memesArray= MemesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length) 
    setMemeImage(memesArray[randomNumber].url)
  }
  return (
    <>
      <main className="p-4 justify-center items-center">
          <div className=" form flex flex-col gap-4 items-center w-full max-w-md mx-auto font-catamara">
          <div className="flex w-full gap-4 ">
            <label>Top Text
            <input
              type="text"
              placeholder="Top Text"
              className="w-full p-2 border border-solid border-gray pl-1 rounded-md"
            />
            </label >
            <label>Bottom Text
            <input
              type="text"
              placeholder="Bottom Text"
              className="w-full p-2  rounded-md border border-solid border-gray-300 pl-1"
            />
            </label>
          </div>
          <button onClick={getMemeImage()}
          className="px-4 py-2 bg-secblue text-white">Fetch a fresh meme picture 🖼</button>
                
            </div>
            <img src={memeImage} />
        </main>
    </>
  )
}

export default Meme
