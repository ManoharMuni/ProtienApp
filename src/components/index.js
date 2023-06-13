import { Component } from "react";

import "./index.css";

class ProteinApp extends Component {
  state = {
    proteinsList: [],
    nameValue: "",
    caloriesValue: "",
    consumedList: [],
  };

  onChangeName = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeCalories = (event) => {
    this.setState({ caloriesValue: event.target.value });
  };

  storeData = (event) => {
    const { nameValue, caloriesValue, proteinsList } = this.state;
    const date = new Date();
    const time = date.getHours();
    const minutes = date.getMinutes();
    console.log(time);
    console.log(minutes);
    event.preventDefault();

    this.setState({
      proteinsList: [
        ...proteinsList,
        {
          name: nameValue,
          calories: caloriesValue,
          addedTime: time,
          addedMinutes: minutes,
        },
      ],
    });
  };

  onChangeConsume = () => {
    const { proteinsList, consumedList } = this.state;
    // eslint-disable-next-line
    const consumedDate = new Date();
    const consumedHours = consumedDate.getHours();
    const consumedMinutes = consumedDate.getMinutes();
    const consumedItem = proteinsList[0];
    const newProteinsList = proteinsList.filter(
      (eachItem) => eachItem.name !== proteinsList[0].name
    );
    this.setState({
      consumedList: [
        ...consumedList,
        {
          ...consumedItem,
          consumedH: consumedHours,
          consumedM: consumedMinutes,
        },
      ],
      proteinsList: [...newProteinsList],
    });
  };

  render() {
    const { nameValue, caloriesValue, proteinsList, consumedList } = this.state;
    // eslint-disable-next-line
    console.log(proteinsList);
    console.log(consumedList);
    return (
      <>
        <div className="main-container">
          <div className="addItem-container">
            <h1>ADD ITEM</h1>
            <form className="form">
              <label htmlFor="name" className="name-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={nameValue}
                onChange={this.onChangeName}
              />

              <label htmlFor="calories" className="calories-label">
                Calories
              </label>
              <input
                type="number"
                id="calories"
                value={caloriesValue}
                onChange={this.onChangeCalories}
              />
              <button type="button" onClick={this.storeData} className="button">
                ADD
              </button>
            </form>
          </div>
          <div className="fridge-container">
            {proteinsList.map((eachItem) => (
              <div className="item-container">{eachItem.name}</div>
            ))}
          </div>
          <button
            type="button"
            className="button2"
            onClick={this.onChangeConsume}
          >
            Consume
          </button>
        </div>
        <div className="consume-container">
          <table>
            <tr>
              <th>NAME</th>
              <th>CALORIES</th>
              <th>ADDED TIME</th>
              <th>CONSUMED TIME</th>
            </tr>
            {consumedList.map((eachItems) => (
              <tr>
                <td>{eachItems.name}</td>
                <td>{eachItems.calories}</td>
                <td>
                  {eachItems.addedTime} : {eachItems.addedMinutes}
                </td>
                <td>
                  {eachItems.consumedH} : {eachItems.consumedM}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </>
    );
  }
}

export default ProteinApp;
