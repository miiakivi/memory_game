import React from 'react';
import crying from "../../images/crying.png"
import happy from "../../images/happy.png";
import getCurrentCardDeck from "../../helpers/getCurrentCardDeck";

import Message from "./Message";

const images = {
    gameOver: {
        img: crying,
        description: 'sailor moon crying'
    },
    userWon: {
        img: happy,
        description: 'sailor moon winking'
    }
}


function GameEndedMessages(props) {
    let stateObj = props.stateObj;
    if ( stateObj.gameIsOver ) {
        return (
            <Message image={ images.gameOver } header="Game over" stateObj={ stateObj }>
                Unfortunately you clicked the same character twice and LOST!
            </Message>
        )
    } else if ( stateObj.userWon ) {
        return (
            <Message image={ images.userWon } header="✨ Congratulations ✨"
                     stateObj={ stateObj }>
                You got all of the characters without clicking the same character twice.
            </Message>
        )
    } else {
        return <></>
    }
}

export default GameEndedMessages;