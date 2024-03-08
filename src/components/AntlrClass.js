import antlr4 from "antlr4";
import GrammarLexer from "../ANTLR/GrammarLexer.js";
import GrammarParser from "../ANTLR/GrammarParser.js";
import Visitor from "../ANTLR/MyVisitor.js";
import StringVisitor from "../ANTLR/StringVisitor.js";

var TreeDraw = new Object();
var counter = 0;

export default class Antlr{

    constructor(input){
        this.chars = new antlr4.InputStream(input);
        this.lexer = new GrammarLexer(this.chars);
        this.tokens = new antlr4.CommonTokenStream(this.lexer);
        this.parser = new GrammarParser(this.tokens);
        this.parser.buildParseTrees = true;

        this.visitor = new Visitor();
        this.postcondition = new Object;
        this.precondition = new Object;
        this.program = new Object;

        this.stringVisitor = new StringVisitor();
        this.stringResult = new String;
        this.stringPrecondition = new String;
    }


    wrongInputCheck(){
        this.parser.removeErrorListeners();
        this.parser.addErrorListener({
            syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
                alert(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
                },
            });
    }


    parseWholeInput(){
        this.getStringVisitor();

        this.precondition = this.parseCondition();
        this.program = this.parsePrikaz();
        this.postcondition = this.parseCondition();

        let divide = {prepomienka: this.precondition, program: this.program, postpodmienka: this.postcondition};
        console.log(divide);
        return this.chooseRule(this.program);
        //return result;
    };


    parseCondition(){
        let tree = this.parser.condition();
        let result = this.visitor.visit(tree);
        let obj = result[1];
        return obj;
        //console.log(result);
    };
    
    
    parsePrikaz(){
        let tree = this.parser.statement()
        let result = this.visitor.visit(tree);
        return result;
    };


    getStringVisitor(){
        let tree = this.parser.program();
        this.stringResult = this.stringVisitor.visit(tree);
        this.reset();
        tree = this.parser.condition();
        this.stringPrecondition = this.stringVisitor.visit(tree);
        this.reset();
    }


    reset(){
        this.lexer.reset();
        const newTokens = new antlr4.CommonTokenStream(this.lexer);
        this.parser.setInputStream(newTokens);
    }


    makeWeakestprecondition(prikaz,postcondition){
        let postVar,direction;
        // x = 3
        if( isNaN(postcondition.left)){
            console.log("left =" + postcondition.left)
            postVar = postcondition.left;
            direction = "left";
        }else{ // 3 = x
            console.log("right =" + postcondition.right)
            postVar = postcondition.right;
            direction = "right"
        } //doriesit ked je x = x || x > y atd 

        var expr = this.makeStringFromObject(prikaz.expression);
        if (direction == "left") {
            return "{ " + expr + postcondition.operator +" "+ postcondition.right +" } ";  
        }
        else {
            return "{ " + postcondition.left + " " + postcondition.operator +" "+ expr +" } "; 
        }

    }


    assignRule(){
        //ked bude iba assign tak nič sa nerobí iba čiara
        //zapísať do objektu string a rule 
        let newCondition = this.makeWeakestprecondition(this.program,this.postcondition);

        if (newCondition == this.stringPrecondition) {
            console.log("kokoooooot");
            counter++;
            TreeDraw["string" + counter] = this.stringResult; //ocekovat este ale tu by to malo byt good
            TreeDraw["rule" + counter] = 1;  
            return true;
        }
        return false;
         

    }
    
    skipRule(){
        //ked bude iba skip tak nič sa nerobí iba čiara 
        //zapísať do objektu string a rule 

        //ak sa prepomienka a postpodmienka rovnaju tak skip
        counter++;
        TreeDraw["string" + counter] = this.stringResult; //ocekovat este ale tu by to malo byt good
        TreeDraw["rule" + counter] = 2; 

        return true;
    }

    sequenceRule(firstStatement, secondStatement){
        //ked bude sequence tak sa rozdelí sekvencia na 2 a volá sa na pravú stranu nový výpočet
        //potom sa sem musí vrátiť a volať sa na ľavú
        console.log(firstStatement,secondStatement); 
        let direction;
      
        //porovnat ci je mozne nehradit a nahradit
        if (this.postcondition.left == secondStatement.variable) {
            if (direction == "left") {
                let expr = this.makeStringFromObject(secondStatement.expression)
                let newCondition = this.makeWeakestprecondition(secondStatement,this.postcondition)
                let program = secondStatement.variable +" " + ":= " + expr;

                var novyInputPravo =  newCondition + " " + program + "{ " + this.makeStringFromObject(this.postcondition) + "}";
                console.log("pravo=" + novyInputPravo);

                expr = this.makeStringFromObject(firstStatement.expression);
                program = firstStatement.variable +" " + ":= " + expr;
                let novyInputLavo = "{ " + this.makeStringFromObject(this.precondition) + "} " + program  + newCondition ;
                console.log("lavo= " + novyInputLavo);
                //this.stringResult = {left: novyInputLavo, right:novyInputPravo};
            }
            else {
                //to potom
            }
            
        }

    }

    conditionRule(){
        //ked bude IF tak sa rozdelí sekvencia na 2 a volá sa na pravú stranu nový výpočet
        //potom sa sem musí vrátiť a volať sa na ľavú

    }

    loopRule(){


    }


    makeStringFromObject(expression){
        //idealne opravit aj ked tam bude AND 
        return expression.left + " " + expression.operator +" "+ expression.right + " ";
    }

    chooseRule(program){
        switch (program.type) {
            case "AssignStatement":
                console.log("TY KOKOT ASSIGN");
    //             this.printMehBitch("RL{$1 AS$}");
                break;
            case "SkipStatement":
                break;
            case "SequenceStatement":
                console.log("TY KOKOT SEQUENCE");
                 this.sequenceRule(program.firstStatement, program.secondStatement);
                 return this.printMehBitch("RL{$3 AS$}");
                break;
            case "IfStatement":
                console.log("TY KOKOT IF");
    //             this.printMehBitch("RL{$4 AS$}");
                break;
            case "WhileStatement":
                console.log("TY KOKOT WHILE");
    //             this.printMehBitch("RL{$5 AS$}");
                break;
            default:
                break;
        }
    }

    

    calculateProblem(input){

        this.chars = new antlr4.InputStream(input);
        this.lexer = new GrammarLexer(this.chars);
        this.tokens = new antlr4.CommonTokenStream(this.lexer);
        this.parser = new GrammarParser(this.tokens);
        this.parser.buildParseTrees = true;

        this.visitor = new Visitor();
        this.postcondition = new Object;
        this.precondition = new Object;
        this.program = new Object;

        this.stringVisitor = new StringVisitor();
        this.stringResult = new String;
        this.stringPrecondition = new String;


        let repeat = this.parseWholeInput();

        if (repeat == true || "object" === typeof(repeat)){
            this.calculateProblem(repeat.input1)
            this.calculateProblem(repeat.input2)
        }
        

    }



    printMehBitch(rule){
        let beginString = "\\begin{prooftree}";
        let axiom = "\\AXC{}";
        let coreString;
        let tempString;

        if( rule == "RL{$3 AS$}"){
            tempString = "\\" + rule + "\\UIC{" + this.stringResult + "}\\end{prooftree}" ;
            coreString = tempString;
            console.log("kktttt" + tempString);

        }

        let result = beginString.concat(axiom.concat(tempString));
        console.log("halo" + result)
        return result;


       // return "\\begin{prooftree}\\AxiomC{}\\RightLabel{Hyp$^{1}$}\\UnaryInfC{$P$}\\AXC{$P\to Q$}\\RL{$\to_E$}\\BIC{$Q^2$}\\AXC{$Q\to R$}\\RL{$\to_E$}\\BIC{$R$}\\AXC{$Q$}\\RL{Rit$^2$}\\UIC{$Q$}\\RL{$\wedge_I$}\\BIC{$Q\wedge R$}\\RL{$\to_I$$^1$}\\UIC{$P\to Q\wedge R$}\\end{prooftree}";


    }
    

}