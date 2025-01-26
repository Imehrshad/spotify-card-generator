import { useRef, useState } from "react";
import Card from "./components/Card";


function App() {
  const [values, setValues] = useState({
    song: "",
    artist: "",
    lyrics: "",
    musicCover: null,
    backgroundColor: "",
    logoColor: "",
  });
  const cardRef = useRef(null);
  const [clickCounter, setClickCounter] = useState(0);

  return (
    <>
      <div className="w-full  bg-black text-white ">
        <div className="w-full h-full flex flex-col items-center justify-start py-5 px-5 gap-2">
          <Card values={values} clickCounter={clickCounter}    cardRef={cardRef}/>
          <div className="w-full h-full bg-zinc-500 rounded-lg flex flex-col items-center justify-start py-5 px-5 gap-3">
            <h1 className="text-xl font-bold">Creating a new card</h1>
            <label htmlFor="card-name" className="text-sm">
              Song
            </label>
            <input
              value={values.song}
              onChange={(e) => setValues({ ...values, song: e.target.value })}
              type="text"
              className="w-full py-1  rounded-lg focus:outline-none border-zinc-800 border-2  px-3 bg-zinc-400"
            />
            <label htmlFor="card-name" className="text-sm">
              Artist
            </label>
            <input
              value={values.artist}
              onChange={(e) => setValues({ ...values, artist: e.target.value })}
              type="text"
              className="w-full py-1  rounded-lg focus:outline-none border-zinc-800 border-2  px-3 bg-zinc-400"
            />
            <label htmlFor="lyrics" className="text-sm">
              Lyrics
            </label>
            <textarea
              id="lyrics"
              name="lyrics"
              style={{ resize: "none" }}
              value={values.lyrics}
              onChange={(e) => setValues({ ...values, lyrics: e.target.value })}
              className="w-full h-24 py-1 rounded-lg focus:outline-none border-zinc-800 border-2 px-3 bg-zinc-400"
            />
            <label htmlFor="card-name" className="text-sm">
              Music cover
            </label>
            <input
              onChange={(e) =>
                setValues({ ...values, musicCover: e.target.files[0] })
              }
              type="file"
              accept="image/*"
              className="w-full py-4 rounded-lg focus:outline-none border-zinc-800 border-2 px-3 bg-zinc-400"
            />
            <label htmlFor="background-color" className="text-sm">
              Background Color
            </label>
            <input
              type="color"
              className="w-1/2 h-10 rounded-lg focus:outline-none border-zinc-800 border-2  px-3 bg-zinc-400"
              value={values.backgroundColor}
              onChange={(e) =>
                setValues({ ...values, backgroundColor: e.target.value })
              }
            />
            <label htmlFor="logo-color" className="text-sm">
              Logo Color
            </label>
            <input
              type="color"
              className="w-1/2 h-10 rounded-lg focus:outline-none border-zinc-800 border-2  px-3 bg-zinc-400"
              value={values.logoColor}
              onChange={(e) =>
                setValues({ ...values, logoColor: e.target.value })
              }
            />
            <button
              className="w-full py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 cursor-pointer"
              onClick={() => setClickCounter((prev) => prev + 1)}
            >
              Download
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
