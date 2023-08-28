import React, { useState } from "react";

const CheckBoxEx = () => {
  const [selectLang, setSelectLang] = useState([]);
  const [lang, setLang] = useState({
    java: false,
    python: false,
    javascript: false,
    kotlin: false,
  });
  const checkLang = (e) => {
    const { name, checked } = e.target;
    setLang({ ...lang, [name]: checked });
    if (checked) {
      setSelectLang([...selectLang, name]);
    }
  };
  return (
    <div className="m-3">
      <h4>Checkbox Example</h4>
      <form className="d-flex flex-column">
        <div>
          <input type="checkbox" name="java" onChange={checkLang} />
          <b> &nbsp; Java</b>
        </div>
        <div>
          <input type="checkbox" name="python" onChange={checkLang} />
          <b> &nbsp; Python</b>
        </div>
        <div>
          <input type="checkbox" name="javascript" onChange={checkLang} />
          <b> &nbsp; JavaScript</b>
        </div>
        <div>
          <input type="checkbox" name="kotlin" onChange={checkLang} />
          <b> &nbsp; Kotlin</b>
        </div>
      </form>
      <div>You have selected: {selectLang}</div>
    </div>
  );
};

export default CheckBoxEx;
