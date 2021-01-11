import React from "react";
import JSONDATA from "../../data.json";
import Select from "react-select";
import "./add.styles.css";

const options = JSONDATA;

class AddFund extends React.Component {
  state = {
    selectedOptions: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <div id="outer-div">
          <p id="title">Add Fund</p>
          <div id="fund">
            <p id="fund-title">Select a Fund</p>
            <Select
              class="selectFund"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
          <div id="amt-invested">
              <p id="amt-title">Amount Invested</p>
              <input placeholder="..." id="amt-input" />
          </div>
        </div>
      </div>
    );
  }
}

// function AddFund() {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div>
//       <input
//         placeholder="Type Fund name.."
//         type="text"
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//           console.log(searchTerm);
//         }}
//       />
//       {JSONDATA.filter((val) => {
//         if (searchTerm.length < 7) {
//           return "";
//         } else if (
//           val.field1.toLowerCase().includes(searchTerm.toLowerCase())
//         ) {
//           return val;
//         }
//       }).map((val, key) => {
//         console.log(val.field1);
//         return (
//           <div className="user" key={key}>
//             <p>
//               {val.field1} its id ={val.field2}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
export default AddFund;
