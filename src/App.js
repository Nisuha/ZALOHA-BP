import "./App.css";
import Editor from "@monaco-editor/react";
import ColorTheme from "./components/ColorTheme.js";
import group from "./components/group-1.png";
import polygon1 from "./components/Polygon.png";
import React, { useState } from "react";
import Antlr from "./components/AntlrClass.js";
import Button from "./components/Button.jsx";
import Math from "./components/MathJax.jsx"


const editorOptions = {
  autoIndent: "full",
  lineHeight: 25,
  matchBrackets: "always",
};


const examples = {
  example1: "{ k = 5 } k := k + 1 { k = 6 }",
  example2: "{ j = 3 and k = 4} j := j + k { j = 7 and k = 4 }",
  example3: "{ a > 0 } a := a - 1 { a >= 0 }",
  example4:
    "{x = m and y = n} x:=x - y;\n" +
    "y:=x + y;\n" +
    "x:=y - x\n" +
    "{x = n and y = m}",
};

function getRandomExample(examples) {
  const keys = Object.keys(examples);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index];
  const randomExample = examples[key];
  return randomExample;
}



function App() {
  const editorRef = React.useRef(null);
  const [editorText, setEditorText] = useState("Enter Hoare Triple");
  const [contentMath, setContentMath] = useState("");

  function handleEditorValue(editor, monaco) {
    editorRef.current = editor;
  }


  function pasteTextExample() {
    var randomInput = getRandomExample(examples);
    while (randomInput === editorText) randomInput = getRandomExample(examples);
    setEditorText(randomInput);
  }

  function getEditorValue() {
    //alert(editorRef.current.getValue());

    var input = editorRef.current.getValue();
    const myParser = new Antlr(input);
    myParser.wrongInputCheck();
    var parserResult = myParser.parseWholeInput();
    //console.log(parserResult);
    //myParser.reset();
    //myParser.parsePrepost();
    //myParser.parsePrikaz();
    //Kokot(myParser.parseWholeInput());
    setContentMath(parserResult);
  }

  return (
    <div className="App">
      <ColorTheme />

      <div className="frame-6">
        <Button theme="default orange" onClick={getEditorValue}>Visualize<img src={polygon1} className="polygon" alt="" /></Button>
        <Button theme="default" onClick={pasteTextExample}> Paste Example</Button>
        <Button theme="default">Save Result<img src={group} className="save" alt="" />
        </Button>
      </div>

      <Editor
        options={editorOptions}
        height="40vh"
        width="40%"
        theme="vs-dark"
        value={editorText}
        onChange={(value) => setEditorText(value)}
        onMount={handleEditorValue}
      />
      <div>
        <Math content={contentMath}/>
      </div>
      
    </div>
  );
}


export default App;
