import GrammarVisitor from "./GrammarVisitor";

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.

export default class StringVisitor extends GrammarVisitor {

    visitTerminal(ctx) {
        var result = ctx.getText();

        if (result == "<EOF>") {
            return;
        }
        
        return ctx.getText() + " ";
    }

    // Visit a parse tree produced by GrammarParser#program.
    visitProgram(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by GrammarParser#condition.
    visitCondition(ctx) {
        return  this.visitChildren(ctx).join('') ;
    }


    // Visit a parse tree produced by GrammarParser#whileStatm.
    visitWhileStatm(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by GrammarParser#assignStatm.
    visitAssignStatm(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by GrammarParser#ifStatm.
    visitIfStatm(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by GrammarParser#parenthesesStatm.
    visitParenthesesStatm(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by GrammarParser#sequenceStatm.
    visitSequenceStatm(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by GrammarParser#skipStatm.
    visitSkipStatm(ctx) {
        return ctx.getText() + " ";
    }


    // Visit a parse tree produced by GrammarParser#varExpr.
    visitVarExpr(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by GrammarParser#numberExpr.
    visitNumberExpr(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by GrammarParser#plusMinusExpr.
    visitPlusMinusExpr(ctx) {
        return  this.visit(ctx.arithmeticExpr(0)) + " " + ctx.op.text + " " + this.visit(ctx.arithmeticExpr(1)) + " " ;
    }


    // Visit a parse tree produced by GrammarParser#multDivExpr.
    visitMultDivExpr(ctx) {
        return this.visit(ctx.arithmeticExpr(0)) + " " + ctx.op.text + " " + this.visit(ctx.arithmeticExpr(1)) + " " ;
    }


    // Visit a parse tree produced by GrammarParser#parenthesesExpr.
    visitParenthesesExpr(ctx) {
        return '( ' + this.visit(ctx.arithmeticExpr()) + " " + ') ';
    }


    // Visit a parse tree produced by GrammarParser#equalBExpr.
    visitEqualBExpr(ctx) {
        return this.visit(ctx.arithmeticExpr(0)) + " " + '= ' + this.visit(ctx.arithmeticExpr(1)) + " " ;
    }


    // Visit a parse tree produced by GrammarParser#compareBExpr.
    visitCompareBExpr(ctx) {
        return this.visit(ctx.arithmeticExpr(0)) + " " + ctx.op.text + " " + this.visit(ctx.arithmeticExpr(1)) + " ";
    }


    // Visit a parse tree produced by GrammarParser#booleanExpr.
    visitBooleanExpr(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by GrammarParser#conjuctionBExpr.
    visitConjuctionBExpr(ctx) {
        return this.visit(ctx.boolExpr(0))  + 'and ' + this.visit(ctx.boolExpr(1)) ;
    }


    // Visit a parse tree produced by GrammarParser#implyBExpr.
    visitImplyBExpr(ctx) {
        return this.visit(ctx.boolExpr(0)) + " " + '=> ' + this.visit(ctx.boolExpr(1)) +" " ;
    }


    // Visit a parse tree produced by GrammarParser#notBExpr.
    visitNotBExpr(ctx) {
        return 'not ' + this.visit(ctx.boolExpr()) + " ";
    }


    // Visit a parse tree produced by GrammarParser#parenthesesBExpr.
    visitParenthesesBExpr(ctx) {
        return '( ' + this.visit(ctx.boolExpr()) + ') ';
    }
}
