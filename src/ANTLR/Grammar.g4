// parser
grammar Grammar;


program: condition statement condition EOF;

condition: LCURLY boolExpr RCURLY;

statement: VAR ':=' arithmeticExpr									# assignStatm
	| SSKIP															# skipStatm
	| statement ';' statement										# sequenceStatm
	| IF boolExpr THEN statement ELSE statement						# ifStatm
	| WHILE boolExpr DO statement									# whileStatm
	| '(' statement ')'												# parenthesesStatm
	;

arithmeticExpr: NUMBER												# numberExpr
	| VAR															# varExpr
	| arithmeticExpr op=( PLUS | MINUS ) arithmeticExpr				# plusMinusExpr
	| arithmeticExpr op=( MULT | DIV ) arithmeticExpr				# multDivExpr
	| '(' arithmeticExpr ')'										# parenthesesExpr
	;

boolExpr: TRUE														# booleanExpr
	| FALSE															# booleanExpr
	| arithmeticExpr '=' arithmeticExpr								# equalBExpr
	| arithmeticExpr op=( '>' | '<' | '>=' | '<=') arithmeticExpr   # compareBExpr
	| NOT boolExpr													# notBExpr
	| boolExpr AND boolExpr											# conjuctionBExpr
	| boolExpr IMP boolExpr 										# implyBExpr			//neviem este uplne co s tym
	| '(' boolExpr ')'												# parenthesesBExpr
	;



// lexer 

WHILE: 'while';
DO: 'do';
IF: 'if';
THEN: 'then';
ELSE: 'else';
SSKIP: 'skip';

AND: 'and';
OR: 'or';
NOT: 'not';
IMP: '=>';

TRUE: 'true';
FALSE: 'false';

PLUS: '+';
MINUS: '-';
MULT: '*';
DIV: '/';
EQ: '=';
MORETHAN: '>';
LESSTHAN: '<';
MOREEQ: '>=';
LESSEQ: '<=';

COMMA: ',';
SEMI: ';';
LPAREN: '(';
RPAREN: ')';
LCURLY: '{';
RCURLY: '}';

NUMBER: ('-')? ('0' | [1-9][0-9]*) ('.' [0-9]+)?;
VAR: [a-zA-Z_][a-zA-Z_0-9]*;
WS: [ \t\n\r\f]+ -> skip;