import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Button
} from 'react-native';
//Importing CSS styles from different file
import CSS from "./CSSLike"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"
export default function WishList() {
    //State
    const [goalList, setGoalList] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    //CLG any state here to track how it changes after any setStateHandlers because its here it really re-set the values
    //Not in the functions
    //We can CLG in functions if we use classBased components
    console.log("Re-rendered GoalList")
    console.log(goalList);

    const addGoalHandler = (item) => {
        let obj = { key: Math.random().toString(), value: item }
        setGoalList((prevState) => [...prevState, obj])

    }
    const deleteGoal = (item) => {
        //One possibility
        // let array = [...goalList]
        // if (array.indexOf(item) != -1) {
        //     array.splice(array.indexOf(item), 1)
        //     setGoalList(array);
        // }
        //One more way of deleting FILTER
        setGoalList((prevState) => {
            return (
                prevState.filter((goal) => goal !== item)
            )
        })
    }

    return (
        <View style={CSS.container}>
            {/* Input */}
            <Button title="add New Goal" onPress={() => setIsAddMode((prevState) => !prevState)} />
            <GoalInput addToList={addGoalHandler} visible={isAddMode} setVisibileMode={setIsAddMode} />
            {/* WishList */}
            <FlatList data={goalList}
                renderItem={itemData => (
                    <GoalItem itemData={itemData.item} deleteHandler={deleteGoal.bind(this, itemData.item)} />
                )} />
        </View>
    );
}


