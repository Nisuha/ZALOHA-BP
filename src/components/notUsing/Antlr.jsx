import antlr4 from "antlr4";
import GrammarLexer from "../../ANTLR/GrammarLexer.js";
import GrammarParser from "../../ANTLR/GrammarParser.js";
import Visitor from "../../ANTLR/Visitor.js";


export default function HandlingAntlr(input){
    var chars = new antlr4.InputStream(input);
    var lexer = new GrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new GrammarParser(tokens);
    parser.buildParseTrees = true;
    var visitor = new Visitor();
    WrongInputCheck(parser);
    return {parser: parser, visitor: visitor, lexer: lexer};
}


function WrongInputCheck(parser){
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
            alert(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
            },
        });
}


export function resetTokenStream(lexer){
    return new antlr4.CommonTokenStream(lexer);
}


export function ParseWholeInput(parser,visitor){
    let tree = parser.program();
    let result = visitor.visit(tree);
    console.log(result);
};


export function ParsePrepost(parser,visitor){
    let tree = parser.prepost();
    let result = visitor.visit(tree);
    console.log(result);
};


export function ParsePrikaz(parser,visitor){
    let tree = parser.prikaz()
    let result = visitor.visit(tree);
    console.log(result);
};
