import React, { useState } from "react";
import "./App.css";

const CustomInput = ({ label, id, value, setValue }) => {
  return (
    <div className="mb-4 flex items-center">
      <label className="text-slate-400 text-sm font-bold mr-2" htmlFor={id}>
        {label}:
      </label>
      <input
        className={`font-bold shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline w-full p-2 ${
          value.length >= 12
            ? "bg-emerald-700 border-green-300"
            : "bg-black border-slate-400"
        }`}
        id={id}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const CustomButtons = ({ btnName1, btnName2, btnFunc1, btnFunc2 }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        className="bg-rose-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        id="btnClearFields"
        onClick={() => btnFunc1()}
      >
        {btnName1}
      </button>
      <button
        className="bg-emerald-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        id="btnCompileKeys"
        onClick={() => btnFunc2()}
      >
        {btnName2}
      </button>
    </div>
  );
};

const Section1 = ({ timedPages, wiki2, setWiki2, wiki3, setWiki3 }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded shadow">
      <h3 className="text-xl text-slate-400 font-semibold mb-4">
        Timed Pages + Wiki Links
      </h3>
      <div className="grid grid-cols-1 divide-y-2">
        {timedPages.map((element) => (
          <p className="block text-slate-400 text-md font-bold mb-2 text-center">
            {element.time}
            {element.pages.map((page) => (
              <p className="block text-slate-400 text-sm text-center">{page}</p>
            ))}
          </p>
        ))}
      </div>
      <CustomInput label="Wiki2" id="wiki2" value={wiki2} setValue={setWiki2} />
      <CustomInput label="Wiki3" id="wiki3" value={wiki3} setValue={setWiki3} />
    </div>
  );
};

const Section2 = ({ fieldValue, setFieldValue, btnFunc1, btnFunc2 }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded shadow">
      <h3 className="text-xl text-slate-400 font-semibold mb-4">
        Check for Codes
      </h3>
      <div className="mb-4">
        <label
          className="block text-slate-400 text-sm font-bold mb-2"
          htmlFor="textField"
        >
          Enter your text here:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 bg-black border-slate-400 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="textField"
          rows="19"
          placeholder="Waiting for input..."
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        ></textarea>
      </div>
      <CustomButtons
        btnName1="Clear Text Field"
        btnName2="Check For Codes"
        btnFunc1={btnFunc1}
        btnFunc2={btnFunc2}
      />
    </div>
  );
};
const Section3 = ({
  key1,
  setKey1,
  key2,
  setKey2,
  key3,
  setKey3,
  key4,
  setKey4,
  key5,
  setKey5,
  key6,
  setKey6,
  key7,
  setKey7,
  key8,
  setKey8,
  btnFunc1,
  btnFunc2,
}) => {
  return (
    <div className="bg-zinc-900 p-6 rounded shadow">
      <h3 className="text-xl text-slate-400 font-semibold mb-4">
        Key Compiler
      </h3>
      <form>
        <CustomInput label="Key1" id="key1" value={key1} setValue={setKey1} />
        <CustomInput label="Key2" id="key2" value={key2} setValue={setKey2} />
        <CustomInput label="Key3" id="key3" value={key3} setValue={setKey3} />
        <CustomInput label="Key4" id="key4" value={key4} setValue={setKey4} />
        <CustomInput label="Key5" id="key5" value={key5} setValue={setKey5} />
        <CustomInput label="Key6" id="key6" value={key6} setValue={setKey6} />
        <CustomInput label="Key7" id="key7" value={key7} setValue={setKey7} />
        <CustomInput label="Key8" id="key8" value={key8} setValue={setKey8} />
        <CustomButtons
          btnName1="Clear Fields"
          btnName2="Compile Keys"
          btnFunc1={btnFunc1}
          btnFunc2={btnFunc2}
        />
      </form>
    </div>
  );
};

const ThreeColumns = () => {
  const [wiki2, setWiki2] = useState("");
  const [wiki3, setWiki3] = useState("");
  const [compiledKey, setCompiledKey] = useState("");
  const [inputField, setInputField] = useState("");
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [key3, setKey3] = useState("");
  const [key4, setKey4] = useState("");
  const [key5, setKey5] = useState("");
  const [key6, setKey6] = useState("");
  const [key7, setKey7] = useState("");
  const [key8, setKey8] = useState("");

  const timedPages = [
    { time: "xx:00 to xx:14", pages: ["IAMHERE"] },
    {
      time: "xx:00 to xx:29",
      pages: ["Borrow My Daugther", "Deep Journal", "YOU THERE?"],
    },
    {
      time: "xx:30 to xx:44",
      pages: ["Ave Satan", "Fifty Seven", "Number Station", "Your Data"],
    },

    {
      time: "xx:45 to xx:59",
      pages: ["THANATOS", "Little Friends"],
    },
    { time: "xx:30 to xx:59", pages: ["Brutal Underground"] },
  ];

  const [links, setLinks] = useState([]);
  const [codes, setCodes] = useState([]);

  const clearKeyFields = () => {
    setKey1("");
    setKey2("");
    setKey3("");
    setKey4("");
    setKey5("");
    setKey6("");
    setKey7("");
    setKey8("");
    setCompiledKey("");
  };

  const clearInputField = () => {
    setInputField("");
  };

  const compileKeys = () => {
    if (
      key1.length >= 12 &&
      key2.length >= 12 &&
      key3.length >= 12 &&
      key4.length >= 12 &&
      key5.length >= 12 &&
      key6.length >= 12 &&
      key7.length >= 12 &&
      key8.length >= 12
    ) {
      const foundCodes = [key1, key2, key3, key4, key5, key6, key7, key8];
      const formatedCodes = foundCodes.map((code) =>
        code.trim().replace(/^\d+ - /, "")
      );
      const result = formatedCodes.join("");
      setCompiledKey(result);
      navigator.clipboard.writeText(result);
    }
  };

  const checkForCodes = () => {
    const linkPattern = /http:\/\/[0-9a-fA-F]{32}\.ann/g;
    const foundLinks = inputField.match(linkPattern) || [];

    const codePattern = /([1-8] - [0-9a-fA-F]{12})/g;
    const foundCodes = inputField.match(codePattern) || [];

    setLinks(foundLinks);
    setCodes(foundCodes);

    foundCodes.forEach((element) => {
      switch (element[0]) {
        case "1":
          setKey1(element);
          break;
        case "2":
          setKey2(element);
          break;
        case "3":
          setKey3(element);
          break;
        case "4":
          setKey4(element);
          break;
        case "5":
          setKey5(element);
          break;
        case "6":
          setKey6(element);
          break;
        case "7":
          setKey7(element);
          break;
        case "8":
          setKey8(element);
          break;
        default:
          console.log("no keys found");
          break;
      }
    });
    setWiki2(foundLinks);
    setInputField("");
  };
  return (
    <div className="min-h-screen bg-black flex items-center content-center">
      <div className="container mx-auto px-4">
        <h1 className="block text-white text-bg font-bold mb-2 text-center">
          wttg2-helper
        </h1>
        <h2 className="block text-white text-bg font-bold mb-2 text-center">
          by sadHonk
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <Section1
            timedPages={timedPages}
            wiki2={wiki2}
            setWiki2={setWiki2}
            wiki3={wiki3}
            setWiki3={setWiki3}
          />
          <Section2
            fieldValue={inputField}
            setFieldValue={setInputField}
            btnFunc1={clearInputField}
            btnFunc2={checkForCodes}
          />
          <Section3
            key1={key1}
            setKey1={setKey1}
            key2={key2}
            setKey2={setKey2}
            key3={key3}
            setKey3={setKey3}
            key4={key4}
            setKey4={setKey4}
            key5={key5}
            setKey5={setKey5}
            key6={key6}
            setKey6={setKey6}
            key7={key7}
            setKey7={setKey7}
            key8={key8}
            setKey8={setKey8}
            btnFunc1={clearKeyFields}
            btnFunc2={compileKeys}
          />
        </div>
        <div
          className="block text-white text-bg py-2 mb-2 text-center"
          onClick={() => navigator.clipboard.writeText(compiledKey)}
        >
          {compiledKey ? (
            <div className="bg-zinc-900 text-slate-300 p-2 font-bold rounded shadow">
              Compiled Key:
              <br />
              {compiledKey}
            </div>
          ) : (
            ""
          )}
        </div>
        {/* {codes.map((el) => (
          <div> {el} </div>
        ))}
        {links} */}
      </div>
    </div>
  );
};

function App() {
  return <ThreeColumns />;
}

export default App;
