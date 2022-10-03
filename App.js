import "./App.css";
import React from "react";
import {Component} from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      id: 0,
      arr: [],
    };
  }

  nameInfo = () => {
    this.setState({
      data: document.getElementById("activity").value,
    });
  };

  onAdd = () => {
    this.state.arr.push({data: this.state.data, id: this.state.id});
    this.setState({
      data: document.getElementById("activity").value,
      id: this.state.id + 1,
    });
    document.getElementById("activity").value = "";
    console.log(this.state.arr);
  };

  handleDelete = (key) => {
    var myList = document.getElementById("myList");
    var items = document.querySelectorAll("#myList li");
    items[key].style.display = "none";
    console.log(items);
  };

  handleUpdate = (key, info, e) => {
    this.setState({
      data: info,
      id: key,
    });
    document.getElementById("activity").value = info;
    document.getElementById("activity").onChange = () =>
      this.setState({
        data: e.target.value,
        id: key,
      });
    var myList = document.getElementById("myList");
    var items = document.querySelectorAll("#myList li");
    items[key].innerHTML =
      this.state.data + "<button>DELETE</button>" + `<button>UPDATE</button>`;
    this.setState({
      data: this.state.data,
      id: key,
    });
  };
  checkboxChange = () => {
    if (this.checked) {
      console.log();
    }
  };
  render() {
    return (
      <div className="app">
        <input
          id="activity"
          type="text"
          placeholder="Enter activity here"
          onChange={this.nameInfo.bind(this)}
          style={{borderRadius: "10PX"}}
          autocomplete="off"
        />
        <button
          onClick={this.onAdd.bind(this)}
          style={{borderRadius: "10PX"}}
          onKe
        >
          Add
        </button>
        <ul id="myList" style={{paddingLeft: "0px"}}>
          {this.state.arr.map((obj) => (
            <li
              key={obj.id}
              id={obj.id}
              style={{
                listStyleType: "none",
                width: "100%",
                display: "flex",
                marginTop: "10px",
                backgroundColor: "darkslategrey",
              }}
            >
              <div
                id="data"
                style={{
                  width: "70%",
                  color: "yellow",
                  textAlign: "start",
                  paddingLeft: "100px",
                  verticalAlign: "center",
                }}
              >
                {obj.data}
              </div>
              <button
                onClick={() => this.handleDelete(obj.id)}
                style={{borderColor: "red", backgroundColor: "red"}}
              >
                DELETE
              </button>
              <div style={{width: "5px"}}></div>
              {/* <button
                onClick={() => this.handleUpdate(obj.id, obj.data)}
                style={{backgroundColor: "yellow", borderColor: "yellow"}}
              >
                Update
              </button> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
