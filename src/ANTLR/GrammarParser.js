// Generated from Grammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
import GrammarVisitor from './GrammarVisitor.js';

const serializedATN = [4,1,31,101,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,41,8,2,1,2,1,2,1,2,
5,2,46,8,2,10,2,12,2,49,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,58,8,3,1,3,1,
3,1,3,1,3,1,3,1,3,5,3,66,8,3,10,3,12,3,69,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,88,8,4,1,4,1,4,1,4,1,4,1,4,
1,4,5,4,96,8,4,10,4,12,4,99,9,4,1,4,0,3,4,6,8,5,0,2,4,6,8,0,3,1,0,14,15,
1,0,16,17,1,0,19,22,111,0,10,1,0,0,0,2,15,1,0,0,0,4,40,1,0,0,0,6,57,1,0,
0,0,8,87,1,0,0,0,10,11,3,2,1,0,11,12,3,4,2,0,12,13,3,2,1,0,13,14,5,0,0,1,
14,1,1,0,0,0,15,16,5,27,0,0,16,17,3,8,4,0,17,18,5,28,0,0,18,3,1,0,0,0,19,
20,6,2,-1,0,20,21,5,30,0,0,21,22,5,1,0,0,22,41,3,6,3,0,23,41,5,7,0,0,24,
25,5,4,0,0,25,26,3,8,4,0,26,27,5,5,0,0,27,28,3,4,2,0,28,29,5,6,0,0,29,30,
3,4,2,3,30,41,1,0,0,0,31,32,5,2,0,0,32,33,3,8,4,0,33,34,5,3,0,0,34,35,3,
4,2,2,35,41,1,0,0,0,36,37,5,25,0,0,37,38,3,4,2,0,38,39,5,26,0,0,39,41,1,
0,0,0,40,19,1,0,0,0,40,23,1,0,0,0,40,24,1,0,0,0,40,31,1,0,0,0,40,36,1,0,
0,0,41,47,1,0,0,0,42,43,10,4,0,0,43,44,5,24,0,0,44,46,3,4,2,5,45,42,1,0,
0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,5,1,0,0,0,49,47,1,0,0,0,
50,51,6,3,-1,0,51,58,5,29,0,0,52,58,5,30,0,0,53,54,5,25,0,0,54,55,3,6,3,
0,55,56,5,26,0,0,56,58,1,0,0,0,57,50,1,0,0,0,57,52,1,0,0,0,57,53,1,0,0,0,
58,67,1,0,0,0,59,60,10,3,0,0,60,61,7,0,0,0,61,66,3,6,3,4,62,63,10,2,0,0,
63,64,7,1,0,0,64,66,3,6,3,3,65,59,1,0,0,0,65,62,1,0,0,0,66,69,1,0,0,0,67,
65,1,0,0,0,67,68,1,0,0,0,68,7,1,0,0,0,69,67,1,0,0,0,70,71,6,4,-1,0,71,88,
5,12,0,0,72,88,5,13,0,0,73,74,3,6,3,0,74,75,5,18,0,0,75,76,3,6,3,0,76,88,
1,0,0,0,77,78,3,6,3,0,78,79,7,2,0,0,79,80,3,6,3,0,80,88,1,0,0,0,81,82,5,
10,0,0,82,88,3,8,4,4,83,84,5,25,0,0,84,85,3,8,4,0,85,86,5,26,0,0,86,88,1,
0,0,0,87,70,1,0,0,0,87,72,1,0,0,0,87,73,1,0,0,0,87,77,1,0,0,0,87,81,1,0,
0,0,87,83,1,0,0,0,88,97,1,0,0,0,89,90,10,3,0,0,90,91,5,8,0,0,91,96,3,8,4,
4,92,93,10,2,0,0,93,94,5,11,0,0,94,96,3,8,4,3,95,89,1,0,0,0,95,92,1,0,0,
0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,9,1,0,0,0,99,97,1,0,0,0,8,
40,47,57,65,67,87,95,97];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g4";
    static literalNames = [ null, "':='", "'while'", "'do'", "'if'", "'then'", 
                            "'else'", "'skip'", "'and'", "'or'", "'not'", 
                            "'=>'", "'true'", "'false'", "'+'", "'-'", "'*'", 
                            "'/'", "'='", "'>'", "'<'", "'>='", "'<='", 
                            "','", "';'", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, "WHILE", "DO", "IF", "THEN", "ELSE", 
                             "SSKIP", "AND", "OR", "NOT", "IMP", "TRUE", 
                             "FALSE", "PLUS", "MINUS", "MULT", "DIV", "EQ", 
                             "MORETHAN", "LESSTHAN", "MOREEQ", "LESSEQ", 
                             "COMMA", "SEMI", "LPAREN", "RPAREN", "LCURLY", 
                             "RCURLY", "NUMBER", "VAR", "WS" ];
    static ruleNames = [ "program", "condition", "statement", "arithmeticExpr", 
                         "boolExpr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GrammarParser.ruleNames;
        this.literalNames = GrammarParser.literalNames;
        this.symbolicNames = GrammarParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.statement_sempred(localctx, predIndex);
    	case 3:
    	    		return this.arithmeticExpr_sempred(localctx, predIndex);
    	case 4:
    	    		return this.boolExpr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    statement_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arithmeticExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    boolExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GrammarParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.condition();
	        this.state = 11;
	        this.statement(0);
	        this.state = 12;
	        this.condition();
	        this.state = 13;
	        this.match(GrammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GrammarParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.match(GrammarParser.LCURLY);
	        this.state = 16;
	        this.boolExpr(0);
	        this.state = 17;
	        this.match(GrammarParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	statement(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new StatementContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, GrammarParser.RULE_statement, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            localctx = new AssignStatmContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 20;
	            this.match(GrammarParser.VAR);
	            this.state = 21;
	            this.match(GrammarParser.T__0);
	            this.state = 22;
	            this.arithmeticExpr(0);
	            break;
	        case 7:
	            localctx = new SkipStatmContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 23;
	            this.match(GrammarParser.SSKIP);
	            break;
	        case 4:
	            localctx = new IfStatmContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 24;
	            this.match(GrammarParser.IF);
	            this.state = 25;
	            this.boolExpr(0);
	            this.state = 26;
	            this.match(GrammarParser.THEN);
	            this.state = 27;
	            this.statement(0);
	            this.state = 28;
	            this.match(GrammarParser.ELSE);
	            this.state = 29;
	            this.statement(3);
	            break;
	        case 2:
	            localctx = new WhileStatmContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 31;
	            this.match(GrammarParser.WHILE);
	            this.state = 32;
	            this.boolExpr(0);
	            this.state = 33;
	            this.match(GrammarParser.DO);
	            this.state = 34;
	            this.statement(2);
	            break;
	        case 25:
	            localctx = new ParenthesesStatmContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 36;
	            this.match(GrammarParser.LPAREN);
	            this.state = 37;
	            this.statement(0);
	            this.state = 38;
	            this.match(GrammarParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SequenceStatmContext(this, new StatementContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_statement);
	                this.state = 42;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 43;
	                this.match(GrammarParser.SEMI);
	                this.state = 44;
	                this.statement(5); 
	            }
	            this.state = 49;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	arithmeticExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ArithmeticExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, GrammarParser.RULE_arithmeticExpr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 51;
	            this.match(GrammarParser.NUMBER);
	            break;
	        case 30:
	            localctx = new VarExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(GrammarParser.VAR);
	            break;
	        case 25:
	            localctx = new ParenthesesExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(GrammarParser.LPAREN);
	            this.state = 54;
	            this.arithmeticExpr(0);
	            this.state = 55;
	            this.match(GrammarParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 65;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PlusMinusExprContext(this, new ArithmeticExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_arithmeticExpr);
	                    this.state = 59;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 60;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===14 || _la===15)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 61;
	                    this.arithmeticExpr(4);
	                    break;

	                case 2:
	                    localctx = new MultDivExprContext(this, new ArithmeticExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_arithmeticExpr);
	                    this.state = 62;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 63;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 64;
	                    this.arithmeticExpr(3);
	                    break;

	                } 
	            }
	            this.state = 69;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	boolExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new BoolExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, GrammarParser.RULE_boolExpr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new BooleanExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 71;
	            this.match(GrammarParser.TRUE);
	            break;

	        case 2:
	            localctx = new BooleanExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 72;
	            this.match(GrammarParser.FALSE);
	            break;

	        case 3:
	            localctx = new EqualBExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 73;
	            this.arithmeticExpr(0);
	            this.state = 74;
	            this.match(GrammarParser.EQ);
	            this.state = 75;
	            this.arithmeticExpr(0);
	            break;

	        case 4:
	            localctx = new CompareBExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 77;
	            this.arithmeticExpr(0);
	            this.state = 78;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7864320) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 79;
	            this.arithmeticExpr(0);
	            break;

	        case 5:
	            localctx = new NotBExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 81;
	            this.match(GrammarParser.NOT);
	            this.state = 82;
	            this.boolExpr(4);
	            break;

	        case 6:
	            localctx = new ParenthesesBExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 83;
	            this.match(GrammarParser.LPAREN);
	            this.state = 84;
	            this.boolExpr(0);
	            this.state = 85;
	            this.match(GrammarParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 95;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ConjuctionBExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_boolExpr);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 90;
	                    this.match(GrammarParser.AND);
	                    this.state = 91;
	                    this.boolExpr(4);
	                    break;

	                case 2:
	                    localctx = new ImplyBExprContext(this, new BoolExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_boolExpr);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 93;
	                    this.match(GrammarParser.IMP);
	                    this.state = 94;
	                    this.boolExpr(3);
	                    break;

	                } 
	            }
	            this.state = 99;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.WHILE = 2;
GrammarParser.DO = 3;
GrammarParser.IF = 4;
GrammarParser.THEN = 5;
GrammarParser.ELSE = 6;
GrammarParser.SSKIP = 7;
GrammarParser.AND = 8;
GrammarParser.OR = 9;
GrammarParser.NOT = 10;
GrammarParser.IMP = 11;
GrammarParser.TRUE = 12;
GrammarParser.FALSE = 13;
GrammarParser.PLUS = 14;
GrammarParser.MINUS = 15;
GrammarParser.MULT = 16;
GrammarParser.DIV = 17;
GrammarParser.EQ = 18;
GrammarParser.MORETHAN = 19;
GrammarParser.LESSTHAN = 20;
GrammarParser.MOREEQ = 21;
GrammarParser.LESSEQ = 22;
GrammarParser.COMMA = 23;
GrammarParser.SEMI = 24;
GrammarParser.LPAREN = 25;
GrammarParser.RPAREN = 26;
GrammarParser.LCURLY = 27;
GrammarParser.RCURLY = 28;
GrammarParser.NUMBER = 29;
GrammarParser.VAR = 30;
GrammarParser.WS = 31;

GrammarParser.RULE_program = 0;
GrammarParser.RULE_condition = 1;
GrammarParser.RULE_statement = 2;
GrammarParser.RULE_arithmeticExpr = 3;
GrammarParser.RULE_boolExpr = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_program;
    }

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	EOF() {
	    return this.getToken(GrammarParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_condition;
    }

	LCURLY() {
	    return this.getToken(GrammarParser.LCURLY, 0);
	};

	boolExpr() {
	    return this.getTypedRuleContext(BoolExprContext,0);
	};

	RCURLY() {
	    return this.getToken(GrammarParser.RCURLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_statement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class WhileStatmContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(GrammarParser.WHILE, 0);
	};

	boolExpr() {
	    return this.getTypedRuleContext(BoolExprContext,0);
	};

	DO() {
	    return this.getToken(GrammarParser.DO, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterWhileStatm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitWhileStatm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitWhileStatm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.WhileStatmContext = WhileStatmContext;

class AssignStatmContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR() {
	    return this.getToken(GrammarParser.VAR, 0);
	};

	arithmeticExpr() {
	    return this.getTypedRuleContext(ArithmeticExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAssignStatm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAssignStatm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAssignStatm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AssignStatmContext = AssignStatmContext;

class IfStatmContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(GrammarParser.IF, 0);
	};

	boolExpr() {
	    return this.getTypedRuleContext(BoolExprContext,0);
	};

	THEN() {
	    return this.getToken(GrammarParser.THEN, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(GrammarParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIfStatm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIfStatm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIfStatm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IfStatmContext = IfStatmContext;

class ParenthesesStatmContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(GrammarParser.LPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	RPAREN() {
	    return this.getToken(GrammarParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterParenthesesStatm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitParenthesesStatm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitParenthesesStatm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ParenthesesStatmContext = ParenthesesStatmContext;

class SequenceStatmContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	SEMI() {
	    return this.getToken(GrammarParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSequenceStatm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSequenceStatm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitSequenceStatm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.SequenceStatmContext = SequenceStatmContext;

class SkipStatmContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SSKIP() {
	    return this.getToken(GrammarParser.SSKIP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSkipStatm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSkipStatm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitSkipStatm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.SkipStatmContext = SkipStatmContext;

class ArithmeticExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_arithmeticExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class VarExprContext extends ArithmeticExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR() {
	    return this.getToken(GrammarParser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterVarExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitVarExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitVarExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.VarExprContext = VarExprContext;

class NumberExprContext extends ArithmeticExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(GrammarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterNumberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitNumberExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitNumberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.NumberExprContext = NumberExprContext;

class PlusMinusExprContext extends ArithmeticExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	arithmeticExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArithmeticExprContext);
	    } else {
	        return this.getTypedRuleContext(ArithmeticExprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(GrammarParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(GrammarParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterPlusMinusExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitPlusMinusExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitPlusMinusExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.PlusMinusExprContext = PlusMinusExprContext;

class MultDivExprContext extends ArithmeticExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	arithmeticExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArithmeticExprContext);
	    } else {
	        return this.getTypedRuleContext(ArithmeticExprContext,i);
	    }
	};

	MULT() {
	    return this.getToken(GrammarParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(GrammarParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterMultDivExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitMultDivExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitMultDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.MultDivExprContext = MultDivExprContext;

class ParenthesesExprContext extends ArithmeticExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(GrammarParser.LPAREN, 0);
	};

	arithmeticExpr() {
	    return this.getTypedRuleContext(ArithmeticExprContext,0);
	};

	RPAREN() {
	    return this.getToken(GrammarParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterParenthesesExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitParenthesesExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitParenthesesExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ParenthesesExprContext = ParenthesesExprContext;

class BoolExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_boolExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EqualBExprContext extends BoolExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmeticExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArithmeticExprContext);
	    } else {
	        return this.getTypedRuleContext(ArithmeticExprContext,i);
	    }
	};

	EQ() {
	    return this.getToken(GrammarParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterEqualBExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitEqualBExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitEqualBExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.EqualBExprContext = EqualBExprContext;

class CompareBExprContext extends BoolExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	arithmeticExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArithmeticExprContext);
	    } else {
	        return this.getTypedRuleContext(ArithmeticExprContext,i);
	    }
	};

	MORETHAN() {
	    return this.getToken(GrammarParser.MORETHAN, 0);
	};

	LESSTHAN() {
	    return this.getToken(GrammarParser.LESSTHAN, 0);
	};

	MOREEQ() {
	    return this.getToken(GrammarParser.MOREEQ, 0);
	};

	LESSEQ() {
	    return this.getToken(GrammarParser.LESSEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCompareBExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCompareBExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitCompareBExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.CompareBExprContext = CompareBExprContext;

class BooleanExprContext extends BoolExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(GrammarParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(GrammarParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterBooleanExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitBooleanExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitBooleanExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.BooleanExprContext = BooleanExprContext;

class ConjuctionBExprContext extends BoolExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	boolExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BoolExprContext);
	    } else {
	        return this.getTypedRuleContext(BoolExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(GrammarParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConjuctionBExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConjuctionBExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConjuctionBExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConjuctionBExprContext = ConjuctionBExprContext;

class ImplyBExprContext extends BoolExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	boolExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BoolExprContext);
	    } else {
	        return this.getTypedRuleContext(BoolExprContext,i);
	    }
	};

	IMP() {
	    return this.getToken(GrammarParser.IMP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterImplyBExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitImplyBExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitImplyBExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ImplyBExprContext = ImplyBExprContext;

class NotBExprContext extends BoolExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(GrammarParser.NOT, 0);
	};

	boolExpr() {
	    return this.getTypedRuleContext(BoolExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterNotBExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitNotBExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitNotBExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.NotBExprContext = NotBExprContext;

class ParenthesesBExprContext extends BoolExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(GrammarParser.LPAREN, 0);
	};

	boolExpr() {
	    return this.getTypedRuleContext(BoolExprContext,0);
	};

	RPAREN() {
	    return this.getToken(GrammarParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterParenthesesBExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitParenthesesBExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitParenthesesBExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ParenthesesBExprContext = ParenthesesBExprContext;


GrammarParser.ProgramContext = ProgramContext; 
GrammarParser.ConditionContext = ConditionContext; 
GrammarParser.StatementContext = StatementContext; 
GrammarParser.ArithmeticExprContext = ArithmeticExprContext; 
GrammarParser.BoolExprContext = BoolExprContext; 
