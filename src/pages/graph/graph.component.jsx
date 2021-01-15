import React from "react";
import { Link } from "react-router-dom";
import "./graph.styles.css";
import { RiHomeLine } from "react-icons/ri";
import Graph from "../../components/graph/graph.component";
import GraphStats from "../../components/graph-stats/graph-stats.component";
import { StatsProvider } from "../../components/graph-stats/graph-stats.context";

class GraphPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.location.state.code,
      date: props.location.state.date,
      data: [],
      name: props.location.state.fundname,
      amt: props.location.state.amt,
    };
  }

  componentDidMount() {
    const date = this.state.date;
    const formatedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
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
    //console.log(this.state);
    const { data } = this.state;
    return (
      <div>
        <Link to="/">
          <div className="back">
            <RiHomeLine size={30} />
          </div>
        </Link>
        <StatsProvider>
          <Graph data={data} />
          <GraphStats />
        </StatsProvider>
      </div>
    );
  }
}

export default GraphPage;
