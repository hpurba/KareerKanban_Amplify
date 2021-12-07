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
// import Button from "@restart/ui/esm/Button";
//import { Card, Tab, Sonnet, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


// const UserBoardDetails = {
//   username: '',
//   board: 'Learn AWS AppSync'

// };

// const newTodo = await API.graphql({ query: mutations.create, variables: {input: UserBoardDetails}});


function Kanban() {
  const user = getCurrentUser()
  const [board, setBoard] = useState({ columns: [] });
  let userId = null;

  // sets the board on start or refresh
  useEffect(() => {
    let mounted = true;
    getBoardState(user.email).then((board) => {
      console.log(board);
      if (mounted) {
        setBoard(board);
      }
    });
    return () => (mounted = false);
  }, [user.email]);

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


export async function getUser(userEmail) {
  const body = {
    userEmail: userEmail
  }
  const data = post("/get_user", body)
  return data;
}

/*
Used to get the board state at the start of the session (or when the user reloads)
It needs to be a post to send the user email as a JSON body
*/
export async function getBoardState(userEmail) {
  console.log("Perform get user")
  const response = await getUser(userEmail)
  console.log(response)
  const userId = response.userId
  const body = {
    userId: userId
  }
  const data = post("/get_board", body)
  return data;
}

export async function postMoveCard(userEmail, card, source, dest) {
  const body = {
    userEmail: userEmail,
    card,
    source,
    dest
  }
  post("/move_card", body)
  return;
}

export async function postCreateCard(userEmail, updatedColumn) {
  const body = {
    userEmail: userEmail,
    updatedColumn
  }
  post("/create_card", body)
  return;
}

export async function postDeleteCard(userEmail, column, card) {
  const body = {
    userEmail: userEmail,
    column,
    card
  }
  post("/delete_card", body)
  return;
}

export async function postMoveColumn(userEmail, column, source, dest) {
  const body = {
    userEmail: userEmail,
    column,
    source,
    dest
  }
  post("/move_column", body)
  return;
}

export async function postCreateColumn(userEmail, newColumn) {
  const body = {
    userEmail: userEmail,
    newColumn
  }
  post("/create_column", body)
  return;
}

export async function postDeleteColumn(userEmail, column) {
  const body = {
    userEmail: userEmail,
    column
  }
  post("/delete_column", body)
  return;
}

export async function postRenameColumn(userEmail, column) {
  const body = {
    userEmail: userEmail,
    column
  }
  post("/rename_column", body)
  return;
}

export async function post(endpoint, body) {
  const data = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await data.json();
}

export default Kanban;
