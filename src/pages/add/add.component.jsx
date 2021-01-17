import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import JSONDATA from "../../data.json";
import Select from "react-select";
import "./add.styles.css";
import { FundContext } from "../../data/data.context";
import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";

const options = JSONDATA;

const AddFund = (props) => {
  //context
  const [funds, addFund] = useContext(FundContext);
  console.log(funds);
  //state for selectted input
  let [selectedOptions, setOptions] = useState({ fundName: "", code: 0 });
  let [selectedOption] = useState();
  const handleChange = (e) => {
    const { label, value } = e;
    setOptions({
      fundName: label,
      code: value,
    });
  };
  const homePage = () => {
    props.history.push("/");
  };
  //formik state
  const formik = useFormik({
    initialValues: {
      amtInvested: null,
      dateOfInvestment: null,
    },
    onSubmit: (values) => {
      values.fundName = selectedOptions.fundName;
      values.code = selectedOptions.code;
      if (
        values.fundName === "" ||
        values.code === 0 ||
        values.amtInvested === null ||
        values.dateOfInvestment === null
      ) {
        return alert("Complete all the inputs");
      }

      addFund((prevFunds) => [
        ...prevFunds,
        {
          id: prevFunds.length + 1,
          fundName: `${values.fundName}`,
          dateOfInvestment: new Date(`${values.dateOfInvestment}`),
          amtInvested: values.amtInvested,
          code: values.code,
        },
      ]);
      alert("New fund was added");
      homePage();
    },
  });
  //react-select-styling
  const customStyles = {
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    control: (provided, state) => ({
      ...provided,
      color: "white",
      alignItems: "center",
      borderStyle: "none",
      borderWidth: "none",
      backgroundColor: "none",
      borderRadius: 15,
      boxShadow: "none",

      
    }),
    container: (provided, state) => ({
      ...provided,
    }),
  };
 

  return (
    <div>
      <Link to="/">
        <div className="back">
          <RiHomeLine size={30} />
        </div>
      </Link>
      <div id="outer-div">
        <h1 id="title">Add Fund</h1>
        <h2 id="fund-title">Select a Fund</h2>
        <form onSubmit={formik.handleSubmit} name="form">
          <Select
            id="selectFund"
            label="Single select"
            value={selectedOption}
            onChange={handleChange}
            options={options}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 15,
              outline: "none",

              colors: {
                ...theme.colors,
                primary25: "#cfcfcf",
                primary: "black",
              },
            })}
          />
          <h2 id="amt-title">Amount Invested</h2>
          <input
            name="amtInvested"
            type="number"
            id="amt-input"
            value={formik.values.amtInvested}
            onChange={formik.handleChange}
          />
          <br />
          <h2 id="date-title">Date of Investement</h2>
          <input
            name="dateOfInvestment"
            type="date"
            id="date-input"
            values={formik.values.dateOfInvestment}
            onChange={formik.handleChange}
          />
          <br />
          <button type="submit" id="submit">
            <span id="btn-text">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFund;
