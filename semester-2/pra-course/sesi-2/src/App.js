import React, {useState, useEffect} from 'react';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  // kiri -> Getter
  // kanan -> Setter
  let [pacarSaya, setPacarSaya] = useState(1);
  const [jumlahPacar, setJumlahPacar] = useState("");

  useEffect(()=>{
    if(pacarSaya > 1){
      setJumlahPacar("Banyak amat buaya!!")
    } else if(pacarSaya === 1){
      setJumlahPacar("1 doang Setia bngetttt!!!!")
    } else {
      setJumlahPacar("Ngenesssss")
    }
  }, [pacarSaya]);
  if(pacarSaya < 1){
    pacarSaya = 0;
  }
  
  
  return (
    <div>
      <h5>Nama Pacar: {jumlahPacar}</h5>
      <h1>Saya Memiliki {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>tambah pacar</button>
      <button onClick={() => setPacarSaya((prev) => prev === 0 ? 0 : prev - 1)}>putuskan pacar</button>
      
      {/* <Profile /> */}
      {/* <Introduction name="Akhmad Sakhoji Jamaludin" />
      <Introduction name="Diah Ayu Putri Caturningtyas"/> */}
    </div>
  );
}

export default App;
