import React from "react";
import { Link } from "react-router-dom";
import "./graph.styles.css";
import { RiHomeLine } from "react-icons/ri";
import Graph from "../../components/graph/graph.component";

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
    const { data } = this.state;
    return (
      <div>
        <Link to="/">
          <div className="back">
            <RiHomeLine size={30} />
          </div>
        </Link>
        <Graph data={data} />
      </div>
    );
  }
}

export default GraphPage;
