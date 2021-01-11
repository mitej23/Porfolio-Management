import React from "react";

import "./graph.styles.css";

import Graph from "../../components/graph/graph.component";

// for (let i = 0; i < data.dataset.data.length; i++){
//   that.setState.dataPoint.push({
//     x: new Date(data.dataset.data[i][0]),
//     y: data.dataset.data[i][1],
//   });
// }

class GraphPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.location.state.code,
      date: props.location.state.date,
      data: [],
    };
  }

  componentDidMount() {
    const date = this.state.date;
    const formatedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    console.log(formatedDate);
    fetch(
      `https://www.quandl.com/api/v3/datasets/AMFI/${
        this.state.code
      }?start_date=${formatedDate}&end_date=${new Date()}&api_key=xhxgNnj-zqXecxCZWzN5`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.dataset.data });
      });
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        {console.log(this.state)}
        <Graph data={data}/>
      </div>
    );
  }
}

export default GraphPage;
