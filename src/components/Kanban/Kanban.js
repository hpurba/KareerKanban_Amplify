import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Card from "./components/Card/Card";
import "@asseinfo/react-kanban/dist/styles.css";
import "./Kanban.css";
import { getCurrentUser } from '../../utils/auth'
import { API } from "aws-amplify";

import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';






// USE THESE FUNCTIONS
// // Updates the board
// await API.graphql(graphqlOperation(updateUserBoard, { input: { username: username, board: JSON.stringify(primaryBoard) } }));
// // Grab the board
// const userBoard = await API.graphql({ query: queries.getUserBoard, variables: { username: username } });
// primaryBoard = JSON.parse(userBoard.data.getUserBoard.board);








// import Button from "@restart/ui/esm/Button";
//import { Card, Tab, Sonnet, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


// const UserBoardDetails = {
//   username: '',
//   board: 'Learn AWS AppSync'

// };

// const newTodo = await API.graphql({ query: mutations.create, variables: {input: UserBoardDetails}});

let username = "";

function Kanban() {
  const username = getCurrentUser().username
  const [board, setBoard] = useState({ columns: [] });
  let userId = null;

  // sets the board on start or refresh
  useEffect(() => {
    let mounted = true;
    getBoardState(username).then((board) => {
      console.log(board);
      if (mounted) {
        setBoard(board);
      }
    });
    return () => (mounted = false);
  }, []);

  function handleBoardChange(board, _) {
    console.log("Changed board");
  }
function UncontrolledBoard() {
    return (
      //kanban library api docs here: https://github.com/asseinfo/react-kanban
      <Board
        // allowed and default functionality
        initialBoard={board}
        allowRemoveCard
        allowAddCard={{ on: "bottom" }}
        allowAddColumn
        allowRenameColumn
        allowRemoveColumn
        allowAddColumn
        //callbacks that can redirect to functions
        onCardDragEnd={handleBoardChange}
        onCardRemove={handleBoardChange}
        onCardNew={handleBoardChange}
        onNewCardConfirm={(newCard) => ({
          id: new Date().getTime(),
          ...newCard,
        })}
        onColumnDragEnd={handleBoardChange}
        onColumnRename={handleBoardChange}
        onColumnRemove={handleBoardChange}
        onColumnNew={handleBoardChange}
        onNewColumnConfirm={(newColumn) => ({
          id: new Date().getTime(),
          ...newColumn,
        })}
        renderCard={(card, { removeCard, dragging }) => (
          <Card
            allowRemoveCard={true}
            removeCard={removeCard}
            dragging={dragging}
            card={card}
          />
        )}
      />
    );
  }

  return (
    <div className="BoardContainer">
      <UncontrolledBoard />
    </div>
  );
}

/*
Used to get the board state at the start of the session (or when the user reloads)
It needs to be a post to send the user email as a JSON body
*/
export async function getBoardState(username) {
  // console.log("Perform get user")
  // const response = await getUser(userEmail)
  // console.log(response)
  // const userId = response.userId
  // const body = {
  //   userId: userId
  // }
  // const data = post("/get_board", body)
  // return data;


  const userBoard = await API.graphql({ query: queries.getUserBoard, variables: { username: username } });
  var primaryBoard = JSON.parse(userBoard.data.getUserBoard.board);
  return primaryBoard;
}


export default Kanban;
