"use strict";(self.webpackChunkquiz_maker_project=self.webpackChunkquiz_maker_project||[]).push([[592],{757:(h,a,r)=>{r.d(a,{a:()=>i});var u=r(4),s=r(256),c=r(529);let i=(()=>{class t{constructor(e){this.httpClient=e,this.questionPlayed=[]}getQuestions(e,_){return this.httpClient.get(`https://opentdb.com/api.php?amount=5&category=${e}&difficulty=${_}&type=multiple`).pipe((0,u.U)(p=>p.results.map(n=>{const o={question:n,selected:"",answersAll:[n.correct_answer,...n.incorrect_answers]};return o.answersAll.sort((f,y)=>.5-Math.random()),o})))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(c.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);