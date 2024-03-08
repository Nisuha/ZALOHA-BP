import GrammarVisitor from "./GrammarVisitor";

export default class MyVisitor extends GrammarVisitor {

    visitTerminal(ctx) {
        return ctx.getText();
    }

    visitAssignStatm(ctx) {
        const variable = ctx.VAR().getText();
        const expression = this.visit(ctx.arithmeticExpr());
        return { type: 'AssignStatement', variable, expression };
    }

    visitSkipStatm(ctx) {
        return { type: 'SkipStatement' };
    }

    visitSequenceStatm(ctx) {
        const firstStatement = this.visit(ctx.statement(0));
        const secondStatement = this.visit(ctx.statement(1));
        return { type: 'SequenceStatement', firstStatement, secondStatement };
    }

    visitIfStatm(ctx) {
        const condition = this.visit(ctx.boolExpr());
        const thenStatement = this.visit(ctx.statement(0));
        const elseStatement = this.visit(ctx.statement(1));
        return { type: 'IfStatement', condition, thenStatement, elseStatement };
    }

    visitWhileStatm(ctx) {
        const condition = this.visit(ctx.boolExpr());
        const loopStatement = this.visit(ctx.statement());
        return { type: 'WhileStatement', condition, loopStatement };
    }

    visitParenthesesStatm(ctx) {
        return this.visit(ctx.statement());
    }

    visitNumberExpr(ctx) {
        return parseInt(ctx.NUMBER().getText());
    }

    visitVarExpr(ctx) {
        return ctx.VAR().getText();
    }

    visitPlusMinusExpr(ctx) {
        const left = this.visit(ctx.arithmeticExpr(0));
        const right = this.visit(ctx.arithmeticExpr(1));
        const operator = ctx.op.text;
        return { type: 'BinaryExpression', operator, left, right };
    }

    visitMultDivExpr(ctx) {
        const left = this.visit(ctx.arithmeticExpr(0));
        const right = this.visit(ctx.arithmeticExpr(1));
        const operator = ctx.op.text;
        return { type: 'BinaryExpression', operator, left, right };
    }

    visitParenthesesExpr(ctx) {
        return this.visit(ctx.arithmeticExpr());
    }

    visitBooleanExpr(ctx) {
        if (ctx.TRUE()) {
            return true;
        } else if (ctx.FALSE()) {
            return false;
        }
    }

    visitEqualBExpr(ctx) {
        const left = this.visit(ctx.arithmeticExpr(0));
        const right = this.visit(ctx.arithmeticExpr(1));
        return { type: 'BinaryExpression', operator: '=', left, right };
    }

    visitCompareBExpr(ctx) {
        const left = this.visit(ctx.arithmeticExpr(0));
        const right = this.visit(ctx.arithmeticExpr(1));
        const operator = ctx.op.text;
        return { type: 'BinaryExpression', operator, left, right };
    }

    visitNotBExpr(ctx) {
        const operand = this.visit(ctx.boolExpr());
        return { type: 'UnaryExpression', operator: 'not', operand };
    }

    visitConjuctionBExpr(ctx) {
        const left = this.visit(ctx.boolExpr(0));
        const right = this.visit(ctx.boolExpr(1));
        return { type: 'BinaryExpression', operator: 'and', left, right };
    }

    visitImplyBExpr(ctx) {
        const left = this.visit(ctx.boolExpr(0));
        const right = this.visit(ctx.boolExpr(1));
        return { type: 'BinaryExpression', operator: '=>', left, right };
    }

    visitParenthesesBExpr(ctx) {
        return this.visit(ctx.boolExpr());
    }
}

