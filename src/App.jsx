


import { useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner/Banner'
import Header from './assets/components/Header/Header'
import Players from './assets/components/Players/Players'
import SelectedPlayer from './assets/components/SelectedPlayer/SelectedPlayer'


function App() {
  const [selectedPlayer,setSelectedPlayer] = useState([]);

  // const {biddingPrice} = player;

  const [activeTab,setActiveTab] = useState(true);

  const [freeCredit, setFreeCredit] = useState(0)
  
  const handleFreeCredit = () =>{
    setFreeCredit(freeCredit + 2555000)
    
  }

  const handleRemove = id =>{

    const updatedSelectedPlayer = selectedPlayer.filter(player =>player.playerId !== id)
    setSelectedPlayer(updatedSelectedPlayer);
  }

  

  const addToSelected = player =>{
    const isExist = selectedPlayer.find(
      previousPlayer =>previousPlayer.playerId === player.playerId
    )



    if(!isExist && selectedPlayer.length < 6 ){
      const newSelectedPlayer =[...selectedPlayer, player] ;
    setSelectedPlayer(newSelectedPlayer)
    }
    else{
      alert('Player  select fail')
    }
    

  }



  return (
    <>
      
      <Header freeCredit={freeCredit} ></Header>
      <Banner handleFreeCredit={handleFreeCredit} ></Banner>
      <div className="flex justify-end text-center mt-20">
            
            
            <div className="flex">
                <button onClick={ () => setActiveTab(true)}  className='font-bold p-2 border rounded-s-xl'> Available</button>
                  <button onClick={() =>setActiveTab(false) } className="p-2 border rounded-e-xl">
                    Selected ({selectedPlayer.length})</button>
            </div>
            </div>
      {
        activeTab ? <Players setActiveTab={setActiveTab} addToSelected={addToSelected}  ></Players> :<SelectedPlayer selectedPlayer={selectedPlayer} handleRemove={handleRemove} ></SelectedPlayer>
      }
      
      
      
    </>
  )
}

export default App;