
import React, { useState, createContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StateNav from './StateNav'
import StateLoggin from './StateLoggin';
import StateRegister from './StateRegister';
import StateContext from './Context';
import Profile from './LoggedSites/StateProfile';



// bluee #2568FB     orr #FECD45
const App =()=>{
  const [state, setState] = useState(1)
  
  if(state === 1){
    return(
      <StateContext.Provider value={{state,setState}}>
        <StateLoggin/>
      </StateContext.Provider>)
   }
  
 if(state === 2){
  return(
    <StateContext.Provider value={{state,setState}}>
      <StateRegister/>
    </StateContext.Provider>)
 }
 if (state === 3) {
  return(
  <StateContext.Provider value={{state,setState}}>
    <StateNav/>
  </StateContext.Provider>)
}


}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
