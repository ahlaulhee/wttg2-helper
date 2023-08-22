import React, { useState } from "react";

function App() {
  const [keys, setKeys] = useState({
    wiki2: "",
    key1: "",
    key2: "",
    key3: "",
    key4: "",
    key5: "",
    key6: "",
    key7: "",
    key8: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setKeys((prevKeys) => ({
      ...prevKeys,
      [name]: value,
    }));
  };

  const checkForKeys = (e) => {
    const content = e.target.value;

    const pattern1 = /http:\/\/[a-z0-9]{32}\.ann/gi;
    const pattern2 = /[1-8] - [a-z0-9]{12}/gi;

    let matches1 = Array.from(content.matchAll(pattern1));
    let matches2 = Array.from(content.matchAll(pattern2));

    if (matches1[0]) {
      setKeys((prevKeys) => ({ ...prevKeys, wiki2: matches1[0] }));
    }

    matches2.forEach((match) => {
      const keyNumber = match[0][0];
      console.log(match[0]);
      console.log(match[0].substring(4));
      setKeys((prevKeys) => ({
        ...prevKeys,
        ["key" + keyNumber]: match[0].substring(4),
      }));
    });

    return;
  };

  const compileKeys = () => {
    const values = Object.values(keys);

    values.shift();

    const concatenatedKeys = values.join("");

    navigator.clipboard
      .writeText(concatenatedKeys)
      .then(() => {
        console.log("Keys copied to clipboard successfully");
      })
      .catch((err) => {
        console.error("Failed to copy keys to clipboard: ", err);
      });
  };

  const clearKeys = () => {
    setKeys({
      wiki2: "",
      key1: "",
      key2: "",
      key3: "",
      key4: "",
      key5: "",
      key6: "",
      key7: "",
      key8: "",
    });
  };

  return (
    <div className="bg-background font-sans h-screen text-center">
      <div className="flex flex-col">
        <h1 className="text-xl p-2 text-foreground">WTTG2 Helper</h1>
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
            ${
              keys.wiki2.length >= 32
                ? "text-custom-black bg-custom-green"
                : "text-custom-white bg-custom-gray"
            }`}
          name="wiki2"
          id="wiki2"
          onChange={handleInputChange}
          value={keys.wiki2}
          placeholder="Wiki 2"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
          ${
            keys.key1.length >= 12
              ? "text-custom-black bg-custom-green"
              : "text-custom-white bg-custom-gray"
          }`}
          name="key1"
          id="key1"
          onChange={handleInputChange}
          value={keys.key1}
          placeholder="Key 1"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
                    ${
                      keys.key2.length >= 12
                        ? "text-custom-black bg-custom-green"
                        : "text-custom-white bg-custom-gray"
                    }`}
          name="key2"
          id="key2"
          onChange={handleInputChange}
          value={keys.key2}
          placeholder="Key 2"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
                    ${
                      keys.key3.length >= 12
                        ? "text-custom-black bg-custom-green"
                        : "text-custom-white bg-custom-gray"
                    }`}
          name="key3"
          id="key3"
          onChange={handleInputChange}
          value={keys.key3}
          placeholder="Key 3"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
                    ${
                      keys.key4.length >= 12
                        ? "text-custom-black bg-custom-green"
                        : "text-custom-white bg-custom-gray"
                    }`}
          name="key4"
          id="key4"
          onChange={handleInputChange}
          value={keys.key4}
          placeholder="Key 4"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
          ${
            keys.key5.length >= 12
              ? "text-custom-black bg-custom-green"
              : "text-custom-white bg-custom-gray"
          }`}
          name="key5"
          id="key5"
          onChange={handleInputChange}
          value={keys.key5}
          placeholder="Key 5"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
          ${
            keys.key6.length >= 12
              ? "text-custom-black bg-custom-green"
              : "text-custom-white bg-custom-gray"
          }`}
          name="key6"
          id="key6"
          onChange={handleInputChange}
          value={keys.key6}
          placeholder="Key 6"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
          ${
            keys.key7.length >= 12
              ? "text-custom-black bg-custom-green"
              : "text-custom-white bg-custom-gray"
          }`}
          name="key7"
          id="key7"
          onChange={handleInputChange}
          value={keys.key7}
          placeholder="Key 7"
        />
        <input
          className={`placeholder-custom-white border-custom-white font-bold text-center border-2 rounded-lg my-2 mx-16 p-2 
          ${
            keys.key8.length >= 12
              ? "text-custom-black bg-custom-green"
              : "text-custom-white bg-custom-gray"
          }`}
          name="key8"
          id="key8"
          onChange={handleInputChange}
          value={keys.key8}
          placeholder="Key 8"
        />
        <div className="flex">
          <button
            className="bg-custom-green w-full text-custom-black border-2 border-custom-green rounded-lg ml-8 mr-2 my-2 p-2 hover:bg-custom-light-green duration-300"
            onClick={compileKeys}
          >
            Compile Keys
          </button>
          <button
            className="bg-custom-red w-full text-custom-black border-2 border-custom-red rounded-lg mr-8 ml-2 my-2 p-2 hover:bg-custom-light-red duration-300"
            onClick={clearKeys}
          >
            Clear Keys
          </button>
        </div>
        <textarea
          className="bg-background border-2 border-custom-white rounded-lg h-[10rem] mx-8"
          onChange={checkForKeys}
          value=""
        />
      </div>
    </div>
  );
}

export default App;
