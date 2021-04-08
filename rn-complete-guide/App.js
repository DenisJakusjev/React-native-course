//This file is only used as ROOT so I can later on hae different projects separetad in folders
//So I dont have to generate 100 different projects and have all files in here for ReactNative GitHub
import React from 'react'
//WishListApp
import WishList from "./WishList/WishList"
//---- flexBox guide
import FlexBoxGuide from "./Components/flexRNdive/flexboxRNguide"
//GuessAnumber
import GuessAnumber from "./GuessANumberApp/GuessNumber"
//MealsApp with navigation
import MealsApp from "./MealsAppNav/index"
const App = () => {
  return (
    <MealsApp/>
  )
}

export default App
