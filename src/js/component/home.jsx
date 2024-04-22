import React, { useState } from "react";


function App(){
	//hook---//
const [newItem, setNewItem] = useState("");
//-- array con toos los items//
const[items, setItems] = useState ([]);

//-- funcion con alerta si no escriben//
function addItem() {
	if (!newItem){
		alert("Enter a item.");
		return;
	}

	//helper function//

	const item = {
		id: Math.floor(Math.random() * 100),
		value: newItem
};

//
setItems(oldList => [...oldList, item]); //old list mas el item nuevo//
setNewItem(""); //new item back to empty string up on array
}

	function deleteItem(id){
		const  newArray = items.filter(item =>item.id !== id);
		setItems(newArray);
		

	}


	return (
		<div className="App text-center">

			<h1> To do List</h1>

		<input
		type = "text"
		placeholder="What to do..."
		value={newItem}
		onChange={e => setNewItem(e.target.value)}
		/>

		<button onClick={() => addItem ()}>Add</button>

		<ul>

			{items.map(item => {

				return(
					<li key={item.id}><strong>
						{item.value}</strong>
					<button onClick={() => deleteItem(item.id)}>
						<i className="fa-solid fa-trash"></i></button>
					
					</li>
				)
			})}
		</ul>
		<div> # of tasks.</div>
		</div>
	);
}

export default App;

