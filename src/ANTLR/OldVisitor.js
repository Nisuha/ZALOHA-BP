import GrammarVisitor from "./GrammarVisitor";

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.
export default class Visitor extends GrammarVisitor {

  // Visit a parse tree produced by GrammarParser#program.
  visitProgram(ctx) {
    return this.visitChildren(ctx).filter((child) => child !== "").join("");
  }

  // Visit a parse tree produced by GrammarParser#prepost.
  visitPrepost(ctx) {
    let children = this.visitChildren(ctx);
    return children ? "{" + children.filter((child) => child !== "").join("") + "}" : "";
  }

  // Visit a parse tree produced by GrammarParser#Priradenie.
  visitPriradenie(ctx) {
    return this.visitChildren(ctx).filter((child) => child !== "").join("");
  }

  // Visit a parse tree produced by GrammarParser#Cyklus.
  visitCyklus(ctx) {
    return this.visitChildren(ctx).filter((child) => child !== "").join("");
  }

  // Visit a parse tree produced by GrammarParser#Podmienka.
  visitPodmienka(ctx) {
    return this.visitChildren(ctx).filter((child) => child !== "").join("");
  }

  // Visit a parse tree produced by GrammarParser#Preskoc.
  visitPreskoc(ctx) {
    return ctx.getText();
  }

  // Visit a parse tree produced by GrammarParser#VnorenePriradenie.
  visitVnorenePriradenie(ctx) {
    return ("(" + this.visitChildren(ctx).filter((child) => child !== "").join("") + ")");
  }

  // Visit a parse tree produced by GrammarParser#assigment.
  visitAssigment(ctx) {
    var id = ctx.ID().getText();
    var exp = this.visitChildren(ctx).filter((child) => child !== "").join("");
    return exp ? id + ":=" + exp : "";
  }

  // Visit a parse tree produced by GrammarParser#PlusMinus.
  visitPlusMinus(ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    return left && right ? left + ctx.op.text + right : "";
  }

  // Visit a parse tree produced by GrammarParser#Cislo.
  visitCislo(ctx) {
    return ctx.getText();
  }

  // Visit a parse tree produced by GrammarParser#Negacia.
  visitNegacia(ctx) {
    var exp = this.visitChildren(ctx).filter((child) => child !== "").join("");
    return exp ? "not" + exp : "";
  }

  // Visit a parse tree produced by GrammarParser#VnorenyVyraz.
  visitVnorenyVyraz(ctx) {
    var exp = this.visitChildren(ctx).filter((child) => child !== "").join("");
    return exp ? "(" + exp + ")" : "";
  }

  // Visit a parse tree produced by GrammarParser#KratDelene.
  visitKratDelene(ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    return left && right ? left + ctx.op.text + right : "";
  }

  // Visit a parse tree produced by GrammarParser#Rovne.
  visitRovne(ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    return left && right ? left + ctx.op.text + right : "";
  }

  // Visit a parse tree produced by GrammarParser#VacsiMensi.
  visitVacsiMensi(ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    return left && right ? left + ctx.op.text + right : "";
  }

  // Visit a parse tree produced by GrammarParser#Premenna.
  visitPremenna(ctx) {
    return ctx.getText();
  }

  // Visit a parse tree produced by GrammarParser#KonjDisj.
  visitKonjDisj(ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    return left && right ? left + " " + ctx.op.text + " " + right : "";
  }

  // Visit a parse tree produced by GrammarParser#Boolean.
  visitBoolean(ctx) {
    return ctx.getText();
  }

  // Visit only prikaz 
  visitPrikaz(ctx) {
    let exp = this.visitChildren(ctx).filter((child) => child !== "").join("");
    return exp ? exp : "";
  }
}
