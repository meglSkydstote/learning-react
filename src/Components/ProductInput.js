import React from 'react';

function ProductInput(props) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.length <= 0
          ? 'NO DB ENTRIES YET'
          : items.map((item) => (
            <li style={{ padding: '10px' }} key={items.name}>
              <span style={{ color: 'gray' }}> id: </span> {item.id} <br />
              <span style={{ color: 'gray' }}> item: </span>
              {item.name}
            </li>
          ))}
      </ul>
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="add something in the database"
          style={{ width: '200px' }}
        />
        <button onClick={() => this.putItemToDB(this.state.name)}>
          ADD
          </button>
      </div>
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          style={{ width: '200px' }}
          onChange={(e) => this.setState({ idToDelete: e.target.value })}
          placeholder="put id of item to delete here"
        />
        <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
          DELETE
          </button>
      </div>
      {/* <div style={{ padding: '10px' }}>
        <input
          type="text"
          style={{ width: '200px' }}
          onChange={(e) => this.setState({ idToUpdate: e.target.value })}
          placeholder="id of item to update here"
        />
        <input
          type="text"
          style={{ width: '200px' }}
          onChange={(e) => this.setState({ updateToApply: e.target.value })}
          placeholder="put new value of the item here"
        />
        <button
          onClick={() =>
            this.updateDB(this.state.idToUpdate, this.state.updateToApply)
          }
        >
          UPDATE
          </button>
      </div> */}
    </div>
  );
}

export default ProductInput;