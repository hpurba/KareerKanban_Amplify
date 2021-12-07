import React, { useState, useEffect } from "react";
import Board from "./components/Board";
// import Card from "./Card";
import "@asseinfo/react-kanban/dist/styles.css";
import "./Kanban.css";
import { getCurrentUser } from '../../utils/auth'
import { API, graphqlOperation } from "aws-amplify";

import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { updateUserBoard } from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
// import Button from "@restart/ui/esm/Button";
import { Card, Button} from 'react-bootstrap';
import { object } from "prop-types";

// Resource for this Kanban implementation used: https://www.npmjs.com/package/@asseinfo/react-kanban


// const UserBoardDetails = {
//   username: '',
//   board: 'Learn AWS AppSync'
// };
// const newTodo = await API.graphql({ query: mutations.create, variables: {input: UserBoardDetails}});


// const userBoard = await API.graphql({ query: queries.getUserBoard, variables: { username: 'hikarupurba' } });
// return userBoard.data.getUserBoard.board;

// This is where the state of the primary board is saved.
let primaryBoard;

// This is the starting board object.
let starterBoard = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 2,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns'
        },
      ]
    }
  ]
}


function Kanban() {
  const user = getCurrentUser();
  // const [board, setBoard] = useState({ columns: [] });
  const [board, setBoard] = useState(starterBoard);
  let userId = null;

  // sets the board on start or refresh
  useEffect(() => {
    let mounted = true;
    getBoardState().then((board) => {
      console.log(board);
      if (mounted) {
        setBoard(board);
      }
    });
    return () => (mounted = false);
  }, [user.email]);

  function handleCardMove(_, card, source, dest) {
    // postMoveCard(user.email, card, source, dest);
    console.log("Moved Card");
    console.log(card);
    console.log(source);
    console.log(dest);
  }

  function handleDeleteCard(_, column, card) {
    // postDeleteCard(user.email, column, card);
    console.log("Deleted Card");
    console.log(column);
    console.log(card);
  }

  function handleMoveColumn(_, column, source, dest) {
    // postMoveColumn(user.email, column, source, dest);
    console.log("Moved Column");
    console.log(column);
    console.log(source);
    console.log(dest);
  }

  function handleDeleteColumn(_, column) {
    // postDeleteColumn(user.email, column);
    console.log("Deleted Column");
    console.log(column);
  }

  function handleRenameColumn(_, column) {
    // postRenameColumn(user.email, column);
    console.log("Renamed Column");
    console.log(column);
  }


  // THIS WILL HANDLE THE CREATION OF A COLUMN
  // HOW TO/EXAMPLE GUIDE
  async function handleCreateColumn(_, column) {
    // postCreateColumn(user.email, column);
    console.log("Created Column");
    console.log(column);

    primaryBoard.columns.push(column);
    console.log(primaryBoard);

    /* update a todo */
    await API.graphql(graphqlOperation(updateUserBoard, { input: { username: user.username, board: JSON.stringify(primaryBoard) }}));
  }

  function handleCreateCard(_, column) {
    // postCreateCard(user.email, column);
    console.log("Created Card");
    console.log(column);
  }

  function UncontrolledBoard() {
    return (
      //kanban library api docs here: https://github.com/asseinfo/react-kanban
      <>
        <div>
          <Card>
            <Card.Body>My Main Board</Card.Body>
          </Card>
          <Card>
            <Button>
              + New Board
            </Button>
          </Card>
        </div>

        <Board
          // allowed and default functionality
          allowRemoveCard
          allowAddCard={{ on: "bottom" }}
          allowAddColumn
          allowRenameColumn
          allowRemoveColumn
          initialBoard={board}

          //callbacks that can redirect to functions
          onCardDragEnd={handleCardMove}
          onCardRemove={handleDeleteCard}
          onCardNew={handleCreateCard}
          onNewCardConfirm={(newCard) => ({
            id: new Date().getTime(),
            ...newCard,
          })}
          onColumnDragEnd={handleMoveColumn}
          onColumnRename={handleRenameColumn}
          onColumnRemove={handleDeleteColumn}
          onColumnNew={handleCreateColumn}
          onNewColumnConfirm={(newColumn) => ({
            id: new Date().getTime(),
            ...newColumn,
          })}
        // renderCard={(card, { removeCard, dragging }) => (
        //   <Card allowRemoveCard={true} removeCard={removeCard} dragging={dragging} card={card} />
        // )}
        />
      </>
    );
  }

  return (
    <div className="BoardContainer">
      <UncontrolledBoard />
    </div>
  );
}

// TODO: If this is not used, delete it!
export async function getUser() {
  // const body = {
  //   userEmail: userEmail
  // }
  // const data = post("/get_user", body)
  // return data;
  return getCurrentUser().username;
}

/*
Used to get the board state at the start of the session (or when the user reloads)
It needs to be a post to send the user email as a JSON body
*/
// export async function getBoardState(userEmail) {
//   console.log("Perform get user")
//   const response = await getUser(userEmail)
//   console.log(response)
//   const userId = response.userId
//   const body = {
//     userId: userId
//   }
//   const data = post("/get_board", body)
//   return data;
// }
export async function getBoardState() {
  // Later this will have to actually fetch the entire board and convert it from a JSON string to an object.
  const userBoard = await API.graphql({ query: queries.getUserBoard, variables: { username: 'hikarupurba' } });
  primaryBoard = JSON.parse(userBoard.data.getUserBoard.board);
  return primaryBoard;

  // console.log("BOARDS");
  // console.log("Fetched Board: " + userBoard.data.getUserBoard.board);
  // console.log("Starter Board: " + starterBoard);
  // console.log("Starter Board: " + JSON.stringify(starterBoard));
  // return starterBoard;
}

export default Kanban;

















// export async function postMoveCard(userEmail, card, source, dest) {
//   const body = {
//     userEmail: userEmail,
//     card,
//     source,
//     dest
//   }
//   post("/move_card", body)
//   return;
// }

// export async function postCreateCard(userEmail, updatedColumn) {
//   const body = {
//     userEmail: userEmail,
//     updatedColumn
//   }
//   post("/create_card", body)
//   return;
// }

// export async function postDeleteCard(userEmail, column, card) {
//   const body = {
//     userEmail: userEmail,
//     column,
//     card
//   }
//   post("/delete_card", body)
//   return;
// }

// export async function postMoveColumn(userEmail, column, source, dest) {
//   const body = {
//     userEmail: userEmail,
//     column,
//     source,
//     dest
//   }
//   post("/move_column", body)
//   return;
// }

// export async function postCreateColumn(userEmail, newColumn) {
//   const body = {
//     userEmail: userEmail,
//     newColumn
//   }
//   post("/create_column", body)
//   return;
// }

// export async function postDeleteColumn(userEmail, column) {
//   const body = {
//     userEmail: userEmail,
//     column
//   }
//   post("/delete_column", body)
//   return;
// }

// export async function postRenameColumn(userEmail, column) {
//   const body = {
//     userEmail: userEmail,
//     column
//   }
//   post("/rename_column", body)
//   return;
// }

// export async function post(endpoint, body) {
//   const data = await fetch(endpoint, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   return await data.json();
// }

