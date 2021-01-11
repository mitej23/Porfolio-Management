import React from "react";
import { Formik, Field, Form } from "formik";
import JSONDATA from "../../data.json";
import Select from "react-select";
import "./add.styles.css";

const options = JSONDATA;

class AddFund extends React.Component {
  state = {
    selectedOptions: null,
    amount: 0,
    date: undefined,
  };
  handleChange = (event) => {
    this.setState({ selectedOptions: event });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { selectedOption } = this.state;
    // const { amount } = this.state;
    // const { date } = this.state;
    return (
      <div>
        <div id="outer-div">
          <h1 id="title">Add Fund</h1>
          <h2 id="fund-title">Select a Fund</h2>
          <Formik
            initialValues={{ amount: 0, date: null }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              //alert(JSON.stringify(values, null, 2));
              this.setState(values);
              console.log(this.state);
            }}
          >
            <Form>
              <Select
                id="selectFund"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
              <h2 id="amt-title">Amount Invested</h2>
              <Field name="amount" type="number" id="amt-input" />
              <br />
              <h2 id="date-title">Date of Investement</h2>
              <Field name="date" type="date" id="date-input" />
              <br />
              <button type="submit" id="submit">
                Submit
              </button>
            </Form>
          </Formik>
          {/* <form onSubmit={this.handleSubmit}>
            <h1 id="title">Add Fund</h1>
            <h2 id="fund-title">Select a Fund</h2>
            <Select
              id="selectFund"
              // value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
            <h2 id="amt-title">Amount Invested</h2>
            <input
              id="amt-input"
              type="number"
              name="amount"
              // value={amount}
              onChange={this.handleChange}
            />
            <h2 id="date-title">Date of Investement</h2>
            <input
              type="date"
              id="date-input"
              name="date"
              // value={date}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Add" id="submit" />
          </form> */}
        </div>
      </div>
    );
  }
}

export default AddFund;
