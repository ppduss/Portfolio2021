import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import media from '../media';


const SVG = styled.svg`
  position: absolute; 
  top: 0; 
  left: 0; 
  z-index: -2;
  width: 100%;
  /* opacity: 0.9; */
`;

const TopSVG = () => (
  <SVG class="w-full text-skill-3 opacity-75 m-2" viewBox="460.5 460.5 79 79" width="300" fill="currentColor" >
    
    <path class="dome-path" d="m504.7 500.2-5.5-3.4v-.1h.1zm-5.4 3.8c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l5.4-3.8h.1v.1z" opacity=".106">
    </path>
    <path class="dome-path" d="m493.1 500.7s0-.1 0 0l6.1-3.9h.1v.1z" opacity=".106"></path>
    <path class="dome-path" d="m499.3 504c-.1 0-.1 0 0 0l-6.2-3.3v-.1h.1l6.1 3.4c0-.1 0 0 0 0zm-.1-7.1c0-.1 0-.1 0 0l5.4-3.4h.1v.1z" opacity=".106"></path>
    
    <path class="dome-path" d="m505.9 506.5-6.7-2.5v-.1h.1l6.6 2.6c0-.1.1-.1 0 0z" opacity=".106"></path>
    
    <path class="dome-path" d="m505.9 506.5-1.3-6.3v-.1h.1zm-6.7-9.6s0-.1 0 0v-7.1 7.1c.1-.1.1 0 0 0z" opacity=".106"></path>
    <path class="dome-path" d="m504.7 500.2s-.1 0 0 0c-.1 0-.1 0 0 0l4.6-3.4h.1v.1zm-11.3 7.7c-.1 0-.1 0 0 0l5.8-4h.1v.1z" opacity=".106"></path>
    <path class="dome-path" d="m500.1 510.8s-.1 0 0 0l-.9-6.8v-.1h.1zm4.6-17.2-5.5-3.7v-.1h.1l5.4 3.8c0-.1 0-.1 0 0z" opacity=".106"></path>
    <path class="dome-path" d="m493.1 493.1c-.1 0 0 0 0 0l6.1-3.4h.1v.1zm7 17.7s-.1 0 0 0c-.1 0-.1-.1 0 0l5.8-4.4h.1v.1z" opacity=".106"></path>
    <path class="dome-path" d="m505.9 506.5s0-.1 0 0l4.9-4.1h.1v.1z" opacity=".106"></path>
    <path class="dome-path" d="m510.9 502.5c-.1 0-.1 0 0 0l-1.6-5.5v-.1h.1l1.5 5.6c0-.1 0 0 0 0zm-23.9 2.2c-.1 0-.1 0 0 0l6.1-4.1h.1v.1zm17.7-11.1c-.1 0-.1-.1 0 0l1.2-6.1h.1v.1l-1.3 6c0-.1 0 0 0 0z" opacity=".106"></path>
    <path class="dome-path" d="m509.3 497c-.1 0-.1-.1 0 0l1.6-5.4h.1v.1zm-15.9 10.9-6.5-3.2v-.1h.1l6.4 3.3s.1 0 0 0zm13.7 5.5s-.1 0 0 0l-1.2-6.9v-.1h.1z" opacity=".106"></path>
    <path class="dome-path" d="m512.4 508.8-6.5-2.3v-.1h.1l6.4 2.4c0-.1 0-.1 0 0zm2.3-11.7-5.5-.2 5.5.2c.1-.1.1 0 0 0 .1 0 .1 0 0 0zm-15.4-7.3c-.1 0-.1 0 0 0l-5.9-3.7v-.1h.1l5.8 3.8c0-.1 0 0 0 0zm7.8 23.6-7-2.6v-.1h.1l6.9 2.7c0-.1 0-.1 0 0z" opacity=".106"></path>
    <path class="dome-path" d="m512.4 508.8s-.1-.1 0 0l-1.6-6.3v-.1h.1l1.5 6.4c0-.1 0 0 0 0z" opacity=".106"></path>
    <path class="dome-path" d="m493.9 514.9-.6-7v-.1h.1l.5 7.1c.1 0 .1 0 0 0zm-.8-21.8-6.2-3.7v-.1h.1l6.1 3.8s.1 0 0 0z" opacity=".11"></path>
    <path class="dome-path" d="m510.9 491.6-5-4.1v-.1h.1l4.9 4.2c0-.1.1 0 0 0z" opacity=".106"></path>
    <path class="dome-path" d="m493.9 514.9s0-.1 0 0l6.1-4.2h.1v.1zm5.4-25.1c-.1 0-.1 0 0 0l.8-6.6h.1v.1zm17.5 13.4-6-.7v-.1h.1l5.9.8c.1-.1.1-.1 0 0 .1-.1.1 0 0 0zm-9.7 10.2c-.1-.1-.1-.1 0 0l5.3-4.7h.1v.1zm-20.5-16.3.2-7.6-.2 7.6c.1 0 .1 0 0 0z" opacity=".11"></path>
    <path class="dome-path" d="m505.9 487.5-5.9-4.2v-.1h.1l5.8 4.3c.1-.1.1-.1 0 0zm-18.2 24.1-.8-6.9v-.1h.1l.7 7c.1 0 .1 0 0 0z" opacity=".11"></path>
    <path class="dome-path" d="m486.9 489.5s0-.1 0 0l6.4-3.5h.1v.1z" opacity=".111"></path>
    <path class="dome-path" d="m493.9 514.9-6.2-3.3v-.1h.1l6.1 3.4c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".117"></path>
    <path class="dome-path" d="m510.9 491.6s-.1 0 0 0c-.1-.1 0-.1 0 0l6-.4h.1v.1z" opacity=".114"></path>
    <path class="dome-path" d="m510.9 491.6s-.1 0 0 0l1.5-6.1h.1v.1z" opacity=".118"></path>
    <path class="dome-path" d="m501 517.9c-.1 0-.1-.1 0 0l6.1-4.6h.1v.1z" opacity=".114"></path>
    <path class="dome-path" d="m514.7 497.1 2.1-5.9h.1v.1l-2.2 5.8c.1 0 .1 0 0 0z" opacity=".118"></path>
    <path class="dome-path" d="m486.6 497.1-6-3.6v-.1h.1l5.9 3.7c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".122"></path>
    <path class="dome-path" d="m520.7 497.4-5.9-.3v-.1l5.9.4c0-.1 0-.1 0 0z" opacity=".123"></path>
    <path class="dome-path" d="m518.6 509.9-6.2-1.2v-.1h.1l6.1 1.3c0-.1.1 0 0 0zm-18.5-26.6s-.1 0 0 0c-.1-.1-.1-.1 0 0l7.1-2.4h.1v.1zm-6.7 2.8c-.1 0-.1 0 0 0l.5-6.6h.1v.1zm-5.7 25.5-6.3-3.2v-.1h.1l6.2 3.3c.1-.1.1 0 0 0zm29.2-20.3-4.5-5.7v-.1h.1z" opacity=".126"></path>
    <path class="dome-path" d="m486.9 489.5.7-6.7h.1v.1zm29.9 13.7c0-.1 0-.1 0 0l3.8-5.8h.1v.1l-3.9 5.7c.1 0 .1 0 0 0z" opacity=".127"></path>
    <path class="dome-path" d="m500.1 483.3-6.2-3.8v-.1h.1l6.1 3.9c0-.1 0-.1 0 0z" opacity=".129"></path>
    <path class="dome-path" d="m494.8 521.7c-.1 0-.1 0 0 0l-.9-6.8v-.1h.1l.8 6.9c0-.1 0 0 0 0zm17.7-36.1c-.1 0-.1 0 0 0l-5.3-4.6v-.1h.1l5.2 4.7c0-.1 0 0 0 0zm-31.8 15.6s-.1-.1 0 0l-.1-7.7.1 7.7c0-.1 0 0 0 0zm27.3 18.9-7.1-2.2v-.1h.1l7 2.3c.1-.1.1 0 0 0 .1 0 .1 0 0 0zm-25.2-5.4c0-.1 0-.1 0 0l4.9-3.1h.1v.1z" opacity=".133"></path>
    <path class="dome-path" d="m486.9 489.5-5.5-3.1v-.1h.1l5.4 3.2c.1-.1.1 0 0 0z" opacity=".135"></path>
    <path class="dome-path" d="m513.6 515.3c-.1 0-.1 0 0 0l5-5.5h.1v.1z" opacity=".137"></path>
    <path class="dome-path" d="m487.6 482.9c0-.1 0-.1 0 0l6.2-3.5h.1v.1l-6.3 3.4c.1 0 .1 0 0 0zm20.4 37.2 5.5-4.9h.1v.1l-5.6 4.8c.1 0 .1 0 0 0z" opacity=".141"></path>
    <path class="dome-path" d="m482.8 514.7s0-.1 0 0l-1.4-6.2v-.1h.1l1.3 6.3c.1-.1 0 0 0 0zm29.7-29.1c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l6.2-.7h.1v.1zm-31.8 7.9c-.1 0-.1 0 0 0l.7-7.2h.1v.1zm26.4-12.5-6.2-4.3v-.1h.1l6.1 4.4c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".145"></path>
    <path class="dome-path" d="m475.9 504.9s-.1 0 0 0c-.1 0-.1 0 0 0l4.8-3.9h.1v.1zm12.3 13.4-5.4-3.6v-.1h.1l5.3 3.7c.1-.1.1-.1 0 0zm34.9-14.5s-.1 0 0 0l-2.4-6.5v-.1h.1z" opacity=".149"></path>
    <path class="dome-path" d="m480.7 501.2-5.3-3.5v-.1h.1l5.2 3.6c0-.1 0-.1 0 0z" opacity=".15"></path>
    <path class="dome-path" d="m507.1 481c0-.1 0-.1 0 0l6.6-1.6h.1v.1z" opacity=".153"></path>
    <path class="dome-path" d="m475.4 497.6s-.1 0 0 0c-.1 0-.1 0 0 0l5.3-4.2h.1v.1zm45.3-.2c-.1 0-.1 0 0 0l2.4-6.1h.1v.1z" opacity=".154"></path>
    <path class="dome-path" d="m501.9 524.3c-.1 0-.1 0 0 0l6.2-4.3h.1v.1z" opacity=".157"></path>
    <path class="dome-path" d="m477.2 511.5s-.1 0 0 0c-.1 0-.1 0 0 0l4.3-3.2h.1v.1z" opacity=".158"></path>
    <path class="dome-path" d="m514.3 521.4-.8-6.1v-.1h.1zm-33.6-27.9c-.1 0-.1 0 0 0l-4.9-3.1v-.1h.1l4.8 3.2c0-.1 0 0 0 0z" opacity=".161"></path>
    <path class="dome-path" d="m519.7 516.7s-.1 0 0 0l-1.1-6.8v-.1h.1z" opacity=".164"></path>
    <path class="dome-path" d="m487.6 482.9-5-2.5v-.1h.1l4.9 2.6c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".165"></path>
    <path class="dome-path" d="m487.6 482.9.4-6.2h.1v.1l-.5 6.1c.1 0 .1 0 0 0z" opacity=".165"></path>
    <path class="dome-path" d="m514.3 521.4-6.3-1.3v-.1h.1l6.2 1.4c0-.1.1 0 0 0z" opacity=".166"></path>
    <path class="dome-path" d="m518.7 485-5-5.5v-.1c0-.1 0 0 .1 0l4.9 5.6c.1-.1.1 0 0 0zm-35.2 35.7c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l4.7-2.5h.1v.1z" opacity=".169"></path>
    <path class="dome-path" d="m481.4 486.4s-.1-.1 0 0l1.2-6h.1v.1z" opacity=".172"></path>
    <path class="dome-path" d="m489.2 524.4s-.1-.1 0 0c-.1-.1-.1-.1 0 0l5.6-2.8h.1v.1z" opacity=".169"></path>
    <path class="dome-path" d="m501 476.7c-.1-.1 0-.1 0 0l7.1-1.9h.1v.1z" opacity=".172"></path>
    <path class="dome-path" d="m478.9 517c0-.1 0-.1 0 0l3.9-2.4h.1v.1zm44.2-13.2c-.1 0-.1 0 0 0l3.4-6.1h.1v.1zm-45.9 7.7s-.1 0 0 0l-1.3-6.6v-.1h.1z" opacity=".176"></path>
    <path class="dome-path" d="m475.4 497.6c-.1 0-.1 0 0 0l.4-7.3h.1v.1z" opacity=".18"></path>
    <path class="dome-path" d="m481.4 486.4-4.4-2.4v-.1h.1l4.3 2.5c0-.1.1-.1 0 0z" opacity=".184"></path>
    <path class="dome-path" d="m514.3 521.4 5.4-4.8h.1v.1z" opacity=".185"></path>
    <path class="dome-path" d="m508.7 525.9-6.8-1.6v-.1c0-.1 0 0 .1 0l6.7 1.7c0-.1 0-.1 0 0z" opacity=".184"></path>
    <path class="dome-path" d="m482.7 480.4s-.1 0 0 0c-.1 0-.1 0 0 0l5.4-3.8h.1v.1z" opacity=".188"></path>
    <path class="dome-path" d="m478.9 517-1.8-5.5v-.1h.1l1.7 5.6c.1-.1.1 0 0 0z" opacity=".189"></path>
    <path class="dome-path" d="m528.8 504.4-5.7-.6v-.1h.1l5.6.7c0-.1 0-.1 0 0z" opacity=".196"></path>
    <path class="dome-path" d="m489.2 524.4-5.7-3.7v-.1h.1l5.6 3.8c0-.1 0-.1 0 0 0-.1 0 0 0 0zm19.5 1.5c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l5.6-4.6h.1v.1z" opacity=".193"></path>
    <path class="dome-path" d="m518.7 485 1.1-6.2h.1v.1z" opacity=".196"></path>
    <path class="dome-path" d="m475.8 490.4s-.1 0 0 0l1.2-6.5h.1v.1zm.1 14.5-5-3v-.1h.1z" opacity=".2"></path>
    <path class="dome-path" d="m472.2 509.4c-.1-.1-.1-.1 0 0l3.7-4.5h.1v.1z" opacity=".204"></path>
    <path class="dome-path" d="m495.8 527.4-6.6-3.1v-.1h.1l6.5 3.2c0-.1 0 0 0 0z" opacity=".2"></path>
    <path class="dome-path" d="m502.6 529.4-.8-5.1v-.1h.1l.7 5.2c.1 0 .1 0 0 0zm11.1-49.9.7-5.5h.1v.1z" opacity=".204"></path>
    <path class="dome-path" d="m477.2 511.5-5-2.2v-.1h.1l4.9 2.3c0-.1 0 0 0 0zm51.7-19.8-5.7-.4v-.1h.1l5.6.5c0-.1 0-.1 0 0z" opacity=".208"></path>
    <path class="dome-path" d="m508.1 474.8-6.3-3.9v-.1h.1l6.2 4c.1 0 .1 0 0 0z" opacity=".211"></path>
    <path class="dome-path" d="m470.9 494.1c-.1 0-.1-.1 0 0l4.9-3.8h.1v.1zm57.9 10.3s-.1 0 0 0l-2.4-6.6v-.1h.1z" opacity=".212"></path>
    <path class="dome-path" d="m494.7 473.4s0-.1 0 0c0-.1 0-.1 0 0l7.2-2.5h.1v.1z" opacity=".216"></path>
    <path class="dome-path" d="m508.1 474.8 6.3-.8h.1v.1z" opacity=".215"></path>
    <path class="dome-path" d="m482.7 480.4-4-1.7v-.1h.1zm42.1 30.4s-.1 0 0 0c-.1 0-.1 0 0 0l4-6.5h.1v.1z" opacity=".216"></path>
    <path class="dome-path" d="m488.1 476.7-4.8-1.8v-.1h.1l4.7 1.9c0-.1.1 0 0 0z" opacity=".22"></path>
    <path class="dome-path" d="m514.5 526.5s-.1-.1 0 0l-.2-5.1.2 5.1c0-.1 0 0 0 0z" opacity=".217"></path>
    <path class="dome-path" d="m519.9 522.6-.3-6 .3 6c.1 0 .1 0 0 0z" opacity=".219"></path>
    <path class="dome-path" d="m525.4 517.5-5.7-.8v-.1h.1l5.6.9c0-.1 0-.1 0 0 0-.1 0 0 0 0zm-46.5-.5-4.7-1.4v-.1h.1l4.6 1.5c.1-.1.1-.1 0 0zm4.4 8.6s-.1 0 0 0l.1-5zm19.3 3.8-6.8-2v-.1h.1l6.7 2.1c.1-.1.1 0 0 0z" opacity=".224"></path>
    <path class="dome-path" d="m514.5 526.5-5.8-.6v-.1h.1l5.7.7c0-.1 0-.1 0 0 0-.1 0 0 0 0zm-36.4-5.1s0-.1 0 0l.7-4.5h.1v.1l-.8 4.4c.1 0 .1 0 0 0zm16.6-48-5.7-2.1v-.1h.1l5.6 2.2c0-.1.1-.1 0 0 0-.1 0 0 0 0zm-17.7 10.6s0-.1 0 0l1.7-5.3h.1v.1l-1.8 5.2c.1 0 .1 0 0 0zm47.9.9-5.1-6.1v-.1h.1l5 6.2c.1 0 .1 0 0 0z" opacity=".227"></path>
    <path class="dome-path" d="m508.1 474.8.6-5.1h.1v.1l-.7 5c.1 0 .1 0 0 0zm17.3 42.7s-.1-.1 0 0l-.7-6.7v-.1h.1l.6 6.8c0-.1 0 0 0 0z" opacity=".231"></path>
    <path class="dome-path" d="m489.8 529.5c-.1 0-.1-.1 0 0l-.6-5.1v-.1h.1l.5 5.2c0-.1 0-.1 0 0z" opacity=".232"></path>
    <path class="dome-path" d="m531.4 498.3-4.9-.5v-.1h.1l4.8.6c0-.1 0-.1 0 0 0-.1 0 0 0 0zm-11.5-19.4c-.1 0-.1-.1 0 0l-5.4-4.8v-.1h.1l5.3 4.9c0-.1 0-.1 0 0 0-.1 0 0 0 0z" opacity=".231"></path>
    <path class="dome-path" d="m472 486.8s0-.1 0 0l5-2.9h.1v.1l-5.1 2.8c.1 0 .1 0 0 0z" opacity=".235"></path>
    <path class="dome-path" d="m489.8 529.5c-.1 0-.1-.1 0 0-.1-.1-.1-.1 0 0l6-2.1h.1v.1zm19.1.8-.3-4.4v-.1h.1l.2 4.5c.1 0 .1 0 0 0z" opacity=".239"></path>
    <path class="dome-path" d="m474.2 515.6-2.1-6.3v-.1h.1l2 6.4c.1 0 .1 0 0 0zm55.8-4.4-5.2-.4v-.1h.1z" opacity=".243"></path>
    <path class="dome-path" d="m478.7 478.8c0-.1 0-.1 0 0l4.5-3.9h.1v.1z" opacity=".247"></path>
    <path class="dome-path" d="m514.5 526.5s-.1 0 0 0c-.1-.1-.1-.1 0 0l5.4-3.9h.1v.1zm-12.6-55.5s-.1-.1 0 0c-.1-.1 0-.1 0 0l6.9-1.2h.1v.1zm-31 23.1s-.1 0 0 0l1.1-7.4h.1v.1zm26.1 38.1-1.3-4.8v-.1h.1z" opacity=".251"></path>
    <path class="dome-path" d="m483.3 474.9s-.1 0 0 0c-.1 0-.1 0 0 0l5.7-3.7h.1v.1z" opacity=".255"></path>
    <path class="dome-path" d="m528.8 504.4c-.1 0-.1 0 0 0l2.6-6.2h.1v.1z" opacity=".251"></path>
    <path class="dome-path" d="m483.3 525.6-5.2-4.3v-.1h.1zm25.6 4.7-6.3-.9v-.1h.1l6.2 1c.1-.1.1-.1 0 0zm22.5-32-2.6-6.6v-.1h.1l2.5 6.7c0-.1 0 0 0 0z" opacity=".259"></path>
    <path class="dome-path" d="m489.8 529.5c-.1 0-.1 0 0 0l-6.5-3.8v-.1h.1l6.4 3.9c0-.1 0-.1 0 0 0-.1 0 0 0 0zm7.2 2.7s0-.1 0 0l5.6-2.9h.1v.1z" opacity=".267"></path>
    <path class="dome-path" d="m474 480.7s0-.1 0 0l4.7-2h.1v.1zm45.9-1.8c-.1-.1-.1-.1 0 0l.3-5.2h.1v.1l-.4 5.1c0-.1 0 0 0 0zm5 6 .6-5.9h.1v.1z" opacity=".271"></path>
    <path class="dome-path" d="m467.5 506.5c-.1 0-.1-.1 0 0l3.4-4.6h.1v.1z" opacity=".273"></path>
    <path class="dome-path" d="m501.9 471s-.1-.1 0 0l.7-4.3h.1v.1l-.8 4.2c0-.1 0 0 0 0z" opacity=".275"></path>
    <path class="dome-path" d="m530.2 485.6-5.3-.6v-.1h.1l5.2.7c0-.1 0-.1 0 0 0-.1 0 0 0 0z" opacity=".278"></path>
    <path class="dome-path" d="m514.5 474.1c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l5.7-.5h.1v.1z" opacity=".275"></path>
    <path class="dome-path" d="m469.5 513.5c-.1 0-.1 0 0 0l2.7-4.3h.1v.1zm63.7-8.7-4.4-.4v-.1h.1l4.3.5c.1-.1.1-.1 0 0 .1-.1 0 0 0 0zm-61.2-18 1.9-6.1h.1v.1l-2 6c.1 0 .1 0 0 0z" opacity=".278"></path>
    <path class="dome-path" d="m514.5 474.1c-.1 0-.1 0 0 0l.2-4.3h.1v.1z" opacity=".282"></path>
    <path class="dome-path" d="m497 532.2-7.3-2.8v-.1h.1l7.2 2.9c.1-.1.1 0 0 0zm31.9-40.5c-.1 0-.1 0 0 0l1.3-6.2h.1v.1zm-54.7 23.9-4.7-2.1v-.1h.1l4.6 2.2c.1-.1.1 0 0 0zm29.9 17.9-1.6-4.1v-.1h.1l1.5 4.2c.1 0 .1 0 0 0z" opacity=".286"></path>
    <path class="dome-path" d="m514.2 530.2.2-3.8h.1v.1l-.3 3.7c.1 0 .1 0 0 0z" opacity=".287"></path>
    <path class="dome-path" d="m473.2 520.1c-.1 0-.1 0 0 0l1-4.5h.1v.1z" opacity=".29"></path>
    <path class="dome-path" d="m470.9 494.1-3.6-3.6v-.1h.1l3.5 3.7c.1-.1.1 0 0 0z" opacity=".286"></path>
    <path class="dome-path" d="m483.3 474.9s-.1 0 0 0l-.2-4.2v-.1h.1zm36.2 52.4s-.1-.1 0 0l.4-4.7h.1v.1z" opacity=".29"></path>
    <path class="dome-path" d="m478.1 521.4-5-1.3v-.1h.1l4.9 1.4c.1-.1.1-.1 0 0 .1 0 .1 0 0 0zm10.9-50.1-6-.5v-.1h.1l5.9.6c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".294"></path>
    <path class="dome-path" d="m533.3 492.4-4.5-.7v-.1h.1l4.4.8c0-.1.1-.1 0 0z" opacity=".295"></path>
    <path class="dome-path" d="m508.8 469.8-6.1-3.1v-.1h.1z" opacity=".298"></path>
    <path class="dome-path" d="m477.9 525.9.2-4.6h.1v.1z" opacity=".302"></path>
    <path class="dome-path" d="m514.7 469.8h-5.9 5.9c0-.1 0 0 0 0z" opacity=".298"></path>
    <path class="dome-path" d="m525 523c-.1 0-.1 0 0 0l.4-5.6h.1v.1zm-16.1 7.3c0-.1 0-.1 0 0l5.3-.2zm-13.2-61.9c0-.1 0-.1 0 0l6.9-1.8h.1v.1z" opacity=".302"></path>
    <path class="dome-path" d="m483.7 530.3-.5-4.8v-.1h.1l.4 4.9c.1 0 .1 0 0 0zm5.3-59 .5-4.3h.1v.1l-.6 4.2c.1 0 .1 0 0 0zm15.1 62.2 4.8-3.3h.1v.1l-4.9 3.2c.1 0 .1 0 0 0z" opacity=".306"></path>
    <path class="dome-path" d="m530 511.2s-.1 0 0 0l3.2-6.6h.1v.1z" opacity=".31"></path>
    <path class="dome-path" d="m483.7 530.3 6-1h.1v.1zm41.9-51.3-5.5-5.4v-.1h.1l5.4 5.5c.1 0 .1 0 0 0z" opacity=".314"></path>
    <path class="dome-path" d="m495.7 468.4-6.1-1.3v-.1h.1l6 1.4c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".319"></path>
    <path class="dome-path" d="m508.8 469.8c-.1 0-.1 0 0 0l.2-3.6h.1v.1z" opacity=".322"></path>
    <path class="dome-path" d="m469.5 513.5s-.1 0 0 0l-2.1-7.1v-.1h.1zm50.7-39.8s-.1 0 0 0l-5.5-3.9v-.1h.1l5.4 4c0-.1 0-.1 0 0z" opacity=".318"></path>
    <path class="dome-path" d="m490.9 533.9c-.1 0-.1 0 0 0l-1.1-4.5v-.1h.1z" opacity=".326"></path>
    <path class="dome-path" d="m535 498.8-3.6-.5v-.1h.1l3.5.6c0-.1 0-.1 0 0z" opacity=".324"></path>
    <path class="dome-path" d="m477.9 475 5.1-4.4h.1v.1zm36.3 55.2s0-.1 0 0l5.2-3h.1v.1z" opacity=".326"></path>
    <path class="dome-path" d="m469.3 483.6s-.1 0 0 0c-.1 0-.1-.1 0 0l4.7-3h.1v.1zm-2.6 14.9c-.1 0-.1 0 0 0l.6-8h.1v.1z" opacity=".329"></path>
    <path class="dome-path" d="m519.5 527.3c-.1-.1-.1-.1 0 0l5.4-4.4h.1v.1z" opacity=".333"></path>
    <path class="dome-path" d="m477.9 525.9-4.8-5.8v-.1h.1l4.7 5.9c.1-.1.1 0 0 0zm17.8-57.5s0-.1 0 0l1.2-3.9h.1v.1l-1.3 3.8c.1 0 .1 0 0 0z" opacity=".337"></path>
    <path class="dome-path" d="m490.9 533.9c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l6.1-1.8h.1v.1z" opacity=".338"></path>
    <path class="dome-path" d="m474 480.7-1.2-3.7v-.1h.1z" opacity=".342"></path>
    <path class="dome-path" d="m530 511.2 3.8-.1z" opacity=".341"></path>
    <path class="dome-path" d="m502.7 466.7c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l6.4-.5h.1v.1z" opacity=".345"></path>
    <path class="dome-path" d="m483.7 530.3-5.9-4.5v-.1h.1l5.8 4.6c.1 0 .1 0 0 0z" opacity=".349"></path>
    <path class="dome-path" d="m533.2 504.8s0-.1 0 0l1.7-6h.1v.1z" opacity=".352"></path>
    <path class="dome-path" d="m467.4 490.6c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l1.9-7h.1v.1zm57.6 32.4c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l4.9-5.6h.1v.1z" opacity=".349"></path>
    <path class="dome-path" d="m472.9 477.1c-.1-.1 0-.1 0 0l5-2.1h.1v.1z" opacity=".354"></path>
    <path class="dome-path" d="m498.5 536c-.1 0-.1 0 0 0l-1.5-3.8v-.1h.1l1.4 3.9c0-.1 0 0 0 0zm4.2-69.3s-.1 0 0 0l-5.7-2.2v-.1h.1l5.6 2.3c0-.1 0-.1 0 0zm7.7 66.9h-6.3 6.3c0-.1 0-.1 0 0z" opacity=".357"></path>
    <path class="dome-path" d="m535 498.8s-.1 0 0 0l-1.7-6.4v-.1h.1z" opacity=".36"></path>
    <path class="dome-path" d="m525.6 479-.4-4.8v-.1h.1zm-5.4-5.3c-.1 0-.1 0 0 0l-.5-3.9v-.1h.1z" opacity=".361"></path>
    <path class="dome-path" d="m465.4 510.7 2-4.3h.1v.1z" opacity=".367"></path>
    <path class="dome-path" d="m490.9 533.9s-.1 0 0 0l-7.1-3.6v-.1h.1l7 3.7c0-.1 0 0 0 0zm26.1-2.2-2.8-1.5v-.1h.1l2.7 1.6c.1-.1.1 0 0 0z" opacity=".369"></path>
    <path class="dome-path" d="m477.9 475-.3-3.7v-.1h.1z" opacity=".37"></path>
    <path class="dome-path" d="m514.7 469.8c-.1 0-.1 0 0 0l-.3-3v-.1h.1z" opacity=".373"></path>
    <path class="dome-path" d="m469.5 513.5-4.1-2.8v-.1h.1z" opacity=".369"></path>
    <path class="dome-path" d="m463.8 503.1 2.8-4.7h.1v.1zm4.6 14.8c0-.1 0-.1 0 0l1-4.4h.1v.1l-1.1 4.3c.1-.1 0 0 0 0zm21.2-50.9s0-.1 0 0l7.3-2.6h.1v.1zm8.9 69c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l5.7-2.5h.1v.1z" opacity=".373"></path>
    <path class="dome-path" d="m533.9 486.7-3.8-1.2v-.1h.1l3.7 1.3c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".38"></path>
    <path class="dome-path" d="m466.7 498.5c-.1 0-.1 0 0 0l-2.9-3.5v-.1h.1z" opacity=".377"></path>
    <path class="dome-path" d="m522.9 528.2-3.4-.9v-.1h.1l3.3 1c0-.1 0-.1 0 0z" opacity=".378"></path>
    <path class="dome-path" d="m473 524.6c-.1 0-.1-.1 0 0l.1-4.5-.1 4.5c0-.1 0 0 0 0zm63.1-19.7-2.9-.2v-.1h.1l2.8.3c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".38"></path>
    <path class="dome-path" d="m522.9 528.2c-.1 0-.1 0 0 0l2-5.3h.1v.1z" opacity=".384"></path>
    <path class="dome-path" d="m477.9 525.9-4.9-1.3v-.1h.1l4.8 1.4c0-.1.1-.1 0 0z" opacity=".388"></path>
    <path class="dome-path" d="m514.4 466.9-5.4-.6v-.1h.1l5.3.7c.1-.1.1-.1 0 0 .1-.1.1 0 0 0z" opacity=".392"></path>
    <path class="dome-path" d="m528.6 523.1-3.7-.1 3.7.1c0-.1.1 0 0 0zm-61.2-32.5c-.1 0-.1 0 0 0l-2.2-3.1v-.1h.1l2.1 3.2c0-.1 0-.1 0 0z" opacity=".396"></path>
    <path class="dome-path" d="m536.2 493.3-2.9-.9v-.1h.1l2.8 1c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".399"></path>
    <path class="dome-path" d="m509.1 466.3c-.1 0-.1 0 0 0l-4.9-2.7v-.1h.1l4.8 2.8c0-.1 0-.1 0 0z" opacity=".404"></path>
    <path class="dome-path" d="m528.6 523.1 1.3-5.7h.1v.1zm-63.4-35.7 4-3.9h.1v.1zm60-13.1-5.5-4.4v-.1h.1l5.4 4.5c.1 0 .1 0 0 0z" opacity=".408"></path>
    <path class="dome-path" d="m519.8 469.9c-.1 0-.1 0 0 0l-5.3-3v-.1h.1l5.2 3.1c0-.1 0-.1 0 0z" opacity=".416"></path>
    <path class="dome-path" d="m530.2 480.1-5-5.8v-.1h.1z" opacity=".412"></path>
    <path class="dome-path" d="m497 464.5c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l7.2-1h.1v.1zm36.8 46.7s-.1 0 0 0c-.1 0-.1 0 0 0l2.3-6.3h.1v.1z" opacity=".416"></path>
    <path class="dome-path" d="m505.6 536.4c-.1 0-.1 0 0 0l4.8-2.9h.1v.1z" opacity=".42"></path>
    <path class="dome-path" d="m517 531.7s0-.1 0 0l5.8-3.6h.1v.1z" opacity=".421"></path>
    <path class="dome-path" d="m469.3 483.6s-.1 0 0 0l-1.2-3.3v-.1h.1zm-.9 34.3s0-.1 0 0l-3.1-7.2v-.1h.1l3 7.3c.1-.1.1-.1 0 0zm61.5-.4c0-.1 0-.1 0 0l3.5-.8h.1v.1z" opacity=".42"></path>
    <path class="dome-path" d="m463.8 503.1-.1-8.1z" opacity=".431"></path>
    <path class="dome-path" d="m468.2 480.3c-.1 0-.1 0 0 0l4.7-3.3h.1v.1zm44.7 54.9-2.5-1.6v-.1h.1l2.4 1.7c0-.1.1-.1 0 0 0-.1 0 0 0 0zm-35.3-63.8s0-.1 0 0l5.8-4.5h.1v.1zm28 65-7.1-.5v-.1h.1l7 .6c0-.1 0 0 0 0z" opacity=".435"></path>
    <path class="dome-path" d="m533.4 516.8s-.1-.1 0 0l.3-5.6h.1v.1l-.4 5.5c0-.1 0 0 0 0z" opacity=".439"></path>
    <path class="dome-path" d="m536.2 493.3-2.3-6.6v-.1h.1l2.2 6.7c.1 0 .1 0 0 0zm-72.4 1.7c-.1 0-.1 0 0 0l1.4-7.6h.1v.1z" opacity=".443"></path>
    <path class="dome-path" d="m514.4 466.9-3.9-2.8v-.1h.1l3.8 2.9c.1-.1.1-.1 0 0 .1-.1.1 0 0 0zm-1.5 68.3s0-.1 0 0c-.1-.1-.1-.1 0 0l4.1-3.5h.1v.1l-4.2 3.4c0-.1 0 0 0 0z" opacity=".451"></path>
    <path class="dome-path" d="m536.1 504.9 1-5.7h.1v.1l-1.1 5.6c.1 0 .1 0 0 0z" opacity=".454"></path>
    <path class="dome-path" d="m533.8 511.2c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l2.8-1.4h.1v.1z" opacity=".455"></path>
    <path class="dome-path" d="m497 464.5s-.1 0 0 0c-.1 0-.1 0 0 0l1.4-2.7h.1v.1z" opacity=".459"></path>
    <path class="dome-path" d="m510.6 464-6.4-.4v-.1h.1l6.3.5c0-.1 0 0 0 0z" opacity=".463"></path>
    <path class="dome-path" d="m537.2 499.3-1-6v-.1h.1z" opacity=".462"></path>
    <path class="dome-path" d="m525.2 474.3-2.1-4.4v-.1h.1l2 4.5c.1 0 .1 0 0 0z" opacity=".459"></path>
    <path class="dome-path" d="m523.2 470-3.4-.1 3.4.1c0-.1 0-.1 0 0 0-.1 0 0 0 0zm-38.2 64.1c-.1 0-.1 0 0 0l-6.5-4.2v-.1h.1l6.4 4.3c0-.1 0 0 0 0z" opacity=".463"></path>
    <path class="dome-path" d="m472.7 473.7c-.1 0-.1 0 0 0l4.9-2.4h.1v.1z" opacity=".466"></path>
    <path class="dome-path" d="m528.9 475.3-3.7-1v-.1h.1l3.6 1.1c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".467"></path>
    <path class="dome-path" d="m530.2 480.1s-.1 0 0 0l-1.3-4.8v-.1h.1zm-10.4 52.3-2.8-.7v-.1h.1l2.7.8c0-.1.1 0 0 0z" opacity=".471"></path>
    <path class="dome-path" d="m465.4 510.7-2.8-3.4v-.1h.1l2.7 3.5c.1 0 .1 0 0 0zm68.3-28.7s-.1 0 0 0l-3.5-1.9v-.1h.1zm2.9 27.9s-.1 0 0 0l-.5-5v-.1h.1l.4 5.1c0-.1 0 0 0 0z" opacity=".474"></path>
    <path class="dome-path" d="m462.6 507.3s-.1 0 0 0l1.2-4.3h.1v.1zm57.2 25.1c-.1 0-.1 0 0 0l3-4.3h.1v.1z" opacity=".478"></path>
    <path class="dome-path" d="m468.4 517.9-3.7-3.3v-.1h.1l3.6 3.4c.1-.1.1-.1 0 0zm-4.6-14.8-2.1-3.5v-.1h.1l2 3.6c.1 0 .1 0 0 0z" opacity=".482"></path>
    <path class="dome-path" d="m477.6 471.4.5-3h.1v.1l-.6 2.9c.1 0 .1 0 0 0zm56.3 15.3-.3-4.7v-.1h.1l.2 4.8c.1 0 .1 0 0 0zm-65.3 35.2-.2-4.1v-.1h.1zm-6.8-22.3c-.1 0-.1 0 0 0l2-4.7h.1v.1z" opacity=".486"></path>
    <path class="dome-path" d="m536.8 489.3c-.1 0-.1 0 0 0l-2.8-2.6v-.1h.1l2.7 2.7c0-.1 0-.1 0 0z" opacity=".49"></path>
    <path class="dome-path" d="m492.4 537-7.5-2.9v-.1h.1l7.4 3c.1-.1.1-.1 0 0zm-28.6-42c-.1 0-.1 0 0 0l-1.3-3.1v-.1h.1zm4.4-14.7c-.1 0-.1 0 0 0l4.5-6.7h.1v.1z" opacity=".494"></path>
    <path class="dome-path" d="m478.2 468.5c-.1-.1 0-.1 0 0l5.3-1.5h.1v.1zm21.8 69.7c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l5.6-1.8h.1v.1z" opacity=".498"></path>
    <path class="dome-path" d="m536.2 493.3.5-4.1h.1v.1l-.6 4c.1 0 .1 0 0 0z" opacity=".501"></path>
    <path class="dome-path" d="m533.4 516.8c0-.1-.1-.1 0 0l3.1-7h.1v.1l-3.2 6.9c0-.1 0 0 0 0z" opacity=".498"></path>
    <path class="dome-path" d="m504.2 463.6s0-.1 0 0l1.4-1.8h.1v.1z" opacity=".502"></path>
    <path class="dome-path" d="m525.9 528.2s0-.1 0 0l2.7-5.1h.1v.1zm-63.4-36.3s-.1 0 0 0c-.1 0-.1 0 0 0l2.7-4.5h.1v.1zm28.2-28.2c0-.1 0-.1 0 0l7.7-1.8h.1v.1zm-12.2 66.2-4.5-1.7v-.1h.1l4.4 1.8s.1 0 0 0z" opacity=".506"></path>
    <path class="dome-path" d="m538.2 503.4c-.1 0-.1 0 0 0l-1-4.1v-.1h.1l.9 4.2c0-.1 0 0 0 0z" opacity=".512"></path>
    <path class="dome-path" d="m523.2 470-5.9-3.7v-.1h.1l5.8 3.8c0-.1 0-.1 0 0zm-43.2 62.9-1.5-3v-.1h.1z" opacity=".514"></path>
    <path class="dome-path" d="m507.6 537.8-2.1-1.3v-.1h.1l2 1.4c0-.1 0-.1 0 0 0-.1 0 0 0 0z" opacity=".518"></path>
    <path class="dome-path" d="m537.2 499.3 1-3.3h.1v.1z" opacity=".52"></path>
    <path class="dome-path" d="m528.9 475.3-5.8-5.4v-.1h.1l5.7 5.5c.1 0 .1 0 0 0z" opacity=".518"></path>
    <path class="dome-path" d="m510.6 464-4.9-2.2v-.1h.1zm-10.6 74.2-7.6-1.2v-.1h.1l7.5 1.3c0-.1 0-.1 0 0zm-15-4.1c-.1 0-.1 0 0 0l-5-1.2v-.1h.1l4.9 1.3c0-.1 0 0 0 0z" opacity=".525"></path>
    <path class="dome-path" d="m484.7 464.5c0-.1 0-.1 0 0l6-.9h.1v.1zm46.8 57.8c0-.1-.1-.1 0 0l1.9-5.6h.1v.1l-2 5.5c0-.1 0 0 0 0z" opacity=".533"></path>
    <path class="dome-path" d="m464.7 514.6-2.2-7.3v-.1h.1l2.1 7.4c.1 0 .1 0 0 0z" opacity=".535"></path>
    <path class="dome-path" d="m536.6 509.9s-.1-.1 0 0l1.5-6.6h.1v.1z" opacity=".533"></path>
    <path class="dome-path" d="m510.6 464c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l2.5-.6h.1v.1zm9.2 68.4c-.1 0-.1-.1 0 0l6.1-4.3h.1v.1z" opacity=".541"></path>
    <path class="dome-path" d="m498.4 461.9s0-.1 0 0l7.2-.1zm35 54.9s0-.1 0 0c-.1-.1 0-.1 0 0l2.2-1.6h.1v.1z" opacity=".549"></path>
    <path class="dome-path" d="m490.7 463.7c0-.1 0-.1 0 0l1.5-1.9h.1v.1z" opacity=".553"></path>
    <path class="dome-path" d="m517.3 466.3-4.2-2.8v-.1h.1l4.1 2.9c0-.1 0-.1 0 0z" opacity=".555"></path>
    <path class="dome-path" d="m538.2 496.1-1.5-6.8v-.1h.1l1.4 6.9c.1-.1.1 0 0 0z" opacity=".557"></path>
    <path class="dome-path" d="m535.7 515.2c-.1 0-.1 0 0 0l.9-5.4h.1v.1zm-73.2-23.3c-.1 0-.1 0 0 0l2-7.2h.1v.1zm57.6-25.2-2.8-.4v-.1h.1l2.7.5c0-.1 0-.1 0 0zm-40.1 66.2-6-4.7v-.1h.1l5.9 4.8c0-.1 0 0 0 0zm14.2 5.5-1.8-1.4v-.1h.1l1.7 1.5c.1-.1.1-.1 0 0z" opacity=".569"></path>
    <path class="dome-path" d="m498.4 461.9-6.1-.1 6.1.1c.1-.1.1 0 0 0 .1 0 .1 0 0 0zm16.9 73.7c0-.1 0-.1 0 0l4.5-3.3h.1v.1z" opacity=".573"></path>
    <path class="dome-path" d="m526.3 471.3c-.1 0-.1 0 0 0l-3.1-1.3v-.1h.1l3 1.4c0-.1 0-.1 0 0zm-53.6 2.4c-.1 0-.1 0 0 0l.9-2.5h.1v.1z" opacity=".577"></path>
    <path class="dome-path" d="m528.9 475.3-2.7-4.1v-.1h.1l2.6 4.2c.1 0 .1 0 0 0zm7.7 34.6c-.1-.1-.1-.1 0 0l1.4-1.9h.1v.1z" opacity=".58"></path>
    <path class="dome-path" d="m462.6 507.3-1.4-3.5v-.1h.1z" opacity=".582"></path>
    <path class="dome-path" d="m531.8 477.6-2.9-2.3v-.1h.1l2.8 2.4c.1-.1.1-.1 0 0zm-70.5 26.2s-.1 0 0 0l.4-4.3h.1v.1zm25.5 32.6-6.8-3.5v-.1h.1l6.7 3.6c.1-.1.1-.1 0 0z" opacity=".588"></path>
    <path class="dome-path" d="m519.8 532.4c-.1 0 0-.1 0 0l2.3-.6h.1v.1z" opacity=".592"></path>
    <path class="dome-path" d="m461.8 499.6c-.1 0-.1 0 0 0l-.6-3.2v-.1h.1zm2.9 15-2.2-3.9v-.1h.1l2.1 4c.1 0 .1 0 0 0zm9-43.3c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l4.5-2.9h.1v.1z" opacity=".596"></path>
    <path class="dome-path" d="m535.9 485-2.3-2.9v-.1h.1l2.2 3c.1-.1 0-.1 0 0zm-28.3 52.8s0-.1 0 0c-.1-.1 0-.1 0 0l7.7-2.3h.1v.1zm30.4-29.7.1-4.8z" opacity=".6"></path>
    <path class="dome-path" d="m461.2 496.5c0-.1 0-.1 0 0l1.2-4.6h.1v.1l-1.3 4.5c.1-.1 0 0 0 0z" opacity=".604"></path>
    <path class="dome-path" d="m484.7 464.5c0-.1 0-.1 0 0l7.6-2.7h.1v.1z" opacity=".6"></path>
    <path class="dome-path" d="m465.6 518.2-.9-3.6v-.1h.1z" opacity=".604"></path>
    <path class="dome-path" d="m531.5 522.3c-.1-.1-.1-.1 0 0l4.1-7.1h.1v.1l-4.2 7c0-.1 0 0 0 0z" opacity=".6"></path>
    <path class="dome-path" d="m522.1 531.9 3.8-3.8h.1v.1z" opacity=".604"></path>
    <path class="dome-path" d="m538.2 503.4s-.1 0 0 0c-.1 0-.1-.1 0 0l.7-3.2h.1v.1z" opacity=".607"></path>
    <path class="dome-path" d="m478.2 468.5c-.1-.1-.1-.1 0 0l1.5-1.8h.1v.1z" opacity=".61"></path>
    <path class="dome-path" d="m501.5 538.8-1.6-.6v-.1h.1l1.5.7c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".608"></path>
    <path class="dome-path" d="m520.1 466.7-7-3.2v-.1h.1l6.9 3.3c0-.1.1 0 0 0z" opacity=".611"></path>
    <path class="dome-path" d="m538.9 500.2s-.1 0 0 0l-.7-4.2v-.1h.1z" opacity=".616"></path>
    <path class="dome-path" d="m538.2 496.1s0-.1 0 0l-.1-3.7.1 3.7c.1-.1 0 0 0 0zm-64.2 32.2-3.7-3.1v-.1h.1l3.6 3.2c0-.1 0-.1 0 0z" opacity=".62"></path>
    <path class="dome-path" d="m479.7 466.7c-.1 0-.1-.1 0 0l5-2.3h.1v.1z" opacity=".625"></path>
    <path class="dome-path" d="m505.7 461.9c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l2.1-.2z" opacity=".627"></path>
    <path class="dome-path" d="m468.3 477.5c-.1 0-.1 0 0 0l5.3-6.3h.1v.1zm58-6.2c-.1 0-.1 0 0 0l-6.2-4.6v-.1h.1l6.1 4.7c0-.1 0-.1 0 0zm-44.1 63.2-2.2-1.6v-.1h.1zm53.5-19.3c-.1 0-.1 0 0 0l2.3-7.2h.1v.1z" opacity=".631"></path>
    <path class="dome-path" d="m492.3 461.9s-.1 0 0 0c-.1-.1 0-.1 0 0l7.7-1h.1v.1z" opacity=".638"></path>
    <path class="dome-path" d="m513.1 463.5-5.4-1.7v-.1h.1l5.3 1.8c.1 0 .1 0 0 0zm-50.5 47.3-1.4-7v-.1h.1l1.3 7.1c0-.1 0 0 0 0zm69.2-33.2-5.6-6.3v-.1h.1l5.5 6.4c.1-.1.1 0 0 0z" opacity=".643"></path>
    <path class="dome-path" d="m484.7 464.5c0-.1 0-.1 0 0l1.9-1.1h.1v.1zm2.1 71.9-4.7-1.9v-.1h.1l4.6 2c0-.1.1-.1 0 0z" opacity=".647"></path>
    <path class="dome-path" d="m464.5 484.7c-.1 0-.1 0 0 0l.8-2.3h.1v.1zm67 37.6c-.1-.1-.1-.1 0 0l1.5-2.1h.1v.1l-1.6 2c0-.1 0 0 0 0zm-30 16.5-7.3-.4v-.1h.1l7.2.5c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".651"></path>
    <path class="dome-path" d="m465.6 518.2-3-7.4v-.1h.1l2.9 7.5c0-.1 0 0 0 0zm8.1-46.9c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l6-4.7h.1v.1zm15.3 65.8-2.2-.8v-.1h.1z" opacity=".659"></path>
    <path class="dome-path" d="m538.9 500.2s-.1 0 0 0l-.8-7.9v-.1h.1zm-77.7-3.7c0-.1 0-.1 0 0l1.1-6.8h.1v.1l-1.2 6.7c.1-.1 0 0 0 0z" opacity=".667"></path>
    <path class="dome-path" d="m538.1 492.4-2.3-7.4v-.1h.1l2.2 7.5c.1-.1.1 0 0 0 .1 0 .1 0 0 0zm-51.5-28.9s-.1 0 0 0c-.1-.1-.1-.1 0 0l5.7-1.7h.1v.1z" opacity=".667"></path>
    <path class="dome-path" d="m522.1 531.9 5.9-5.2h.1v.1z" opacity=".671"></path>
    <path class="dome-path" d="m520.1 466.7-4.6-2.3v-.1h.1l4.5 2.4c0-.1.1 0 0 0z" opacity=".673"></path>
    <path class="dome-path" d="m494.2 538.4-5.3-1.2v-.1h.1l5.2 1.3c.1-.1.1-.1 0 0z" opacity=".674"></path>
    <path class="dome-path" d="m468.3 477.5c-.1 0-.1 0 0 0l1.6-2h.1v.1z" opacity=".678"></path>
    <path class="dome-path" d="m535.7 515.2c-.1 0-.1 0 0 0l.6-2.3h.1v.1zm-43.4-53.3s-.1 0 0 0c-.1-.1 0-.1 0 0l1.8-.2h.1v.1z" opacity=".682"></path>
    <path class="dome-path" d="m522.4 468.5-2.4-1.8v-.1h.1l2.3 1.9c.1 0 .1 0 0 0z" opacity=".685"></path>
    <path class="dome-path" d="m482.2 534.5-6-3.8v-.1h.1l5.9 3.9c0-.1 0 0 0 0z" opacity=".686"></path>
    <path class="dome-path" d="m461.2 500.6-.1-4.2.1 4.2c.1 0 .1 0 0 0z" opacity=".689"></path>
    <path class="dome-path" d="m536.3 513 1.7-5h.1v.1zm-42.1 25.4c0-.1 0-.1 0 0l1.3-.3h.1v.1z" opacity=".694"></path>
    <path class="dome-path" d="m462.6 510.8s0-.1 0 0l-.6-4v-.1h.1l.5 4.1c0-.1 0 0 0 0z" opacity=".702"></path>
    <path class="dome-path" d="m494.1 461.8s0-.1 0 0c0-.1 0-.1 0 0l5.8-.8h.1v.1z" opacity=".7"></path>
    <path class="dome-path" d="m528 526.9c0-.1 0-.1 0 0l4.9-6.7h.1v.1z" opacity=".706"></path>
    <path class="dome-path" d="m538 508.1v-3z" opacity=".702"></path>
    <path class="dome-path" d="m515.6 464.4-7.9-2.6v-.1h.1zm16.2 13.2-3.5-3.6v-.1h.1l3.4 3.7c.1-.1.1 0 0 0zm-58.1-6.3c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l2.1-1.3h.1v.1z" opacity=".706"></path>
    <path class="dome-path" d="m464.2 513.9s-.1 0 0 0l-1.6-3.1v-.1h.1l1.5 3.2c0-.1 0-.1 0 0z" opacity=".71"></path>
    <path class="dome-path" d="m465.6 518.2-1.5-4.4v-.1h.1l1.4 4.5c0-.1 0 0 0 0z" opacity=".714"></path>
    <path class="dome-path" d="m538.9 500.2s-.1 0 0 0l-.8-3.7v-.1h.1z" opacity=".718"></path>
    <path class="dome-path" d="m501.5 538.8-6-.7v-.1c0-.1 0 0 .1 0l5.9.8c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".716"></path>
    <path class="dome-path" d="m536.5 488.5-.7-3.6v-.1h.1zm-34.9-26.7-1.6-.7v-.1h.1l1.5.8c0-.1 0-.1 0 0 0-.1 0 0 0 0z" opacity=".718"></path>
    <path class="dome-path" d="m538.1 496.6v-4.3 4.3c.1 0 .1 0 0 0zm-76.2-1.9s-.1-.1 0 0l.5-5h.1v.1zm6.1 26.2-2.4-2.7v-.1h.1z" opacity=".722"></path>
    <path class="dome-path" d="m538.1 492.4-1.7-3.9v-.1h.1l1.6 4c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".722"></path>
    <path class="dome-path" d="m479.7 466.7s-.1 0 0 0c-.1 0 0-.1 0 0l2.2-.5h.1v.1z" opacity=".726"></path>
    <path class="dome-path" d="m465.3 482.5s0-.1 0 0l4.6-6.9h.1v.1z" opacity=".729"></path>
    <path class="dome-path" d="m533 520.3c-.1 0-.1-.1 0 0l3.3-7.3h.1v.1zm-59.8 6.8-2.9-2v-.1h.1l2.8 2.1c0-.1 0 0 0 0z" opacity=".733"></path>
    <path class="dome-path" d="m523.6 530.1c-.1-.1-.1-.1 0 0l4.4-3.3h.1v.1z" opacity=".729"></path>
    <path class="dome-path" d="m522.4 468.5-6.9-4.1v-.1h.1l6.8 4.2c.1 0 .1 0 0 0z" opacity=".733"></path>
    <path class="dome-path" d="m509.6 537.5c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l7.6-3.2h.1v.1z" opacity=".731"></path>
    <path class="dome-path" d="m484.6 535-2.5-.4v-.1h.1l2.4.5c.1-.1.1-.1 0 0 .1-.1.1 0 0 0zm-5.6-3.2-2.9-1.1v-.1h.1l2.8 1.2c0-.1 0 0 0 0z" opacity=".733"></path>
    <path class="dome-path" d="m462 506.9s0-.1 0 0l-.8-6.3v-.1h.1l.7 6.4c.1-.1 0 0 0 0z" opacity=".737"></path>
    <path class="dome-path" d="m507.7 461.8-6.2-.1 6.2.1c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".733"></path>
    <path class="dome-path" d="m495.5 538.1-6.5-1v-.1h.1l6.4 1.1c0-.1.1 0 0 0zm6 .7s0-.1 0 0l1.6-1.2h.1v.1z" opacity=".737"></path>
    <path class="dome-path" d="m462.4 489.7 1.5-1.9h.1v.1z" opacity=".741"></path>
    <path class="dome-path" d="m461.2 500.6.6-6h.1v.1l-.7 5.9c.1 0 .1 0 0 0zm20.7-34.3c-.1-.1-.1-.1 0 0l4.7-2.9h.1v.1z" opacity=".745"></path>
    <path class="dome-path" d="m489 537.1-4.4-2.2v-.1h.1z" opacity=".749"></path>
    <path class="dome-path" d="m528 526.9s0-.1 0 0l.8-2.6h.1v.1l-.9 2.5c.1 0 .1 0 0 0z" opacity=".745"></path>
    <path class="dome-path" d="m464.2 513.9s-.1 0 0 0l-2.2-7v-.1h.1l2.1 7.1c0-.1 0 0 0 0z" opacity=".757"></path>
    <path class="dome-path" d="m470 475.6c-.1 0-.1 0 0 0l5.8-5.6h.1v.1z" opacity=".753"></path>
    <path class="dome-path" d="m464 487.9c-.1 0-.1 0 0 0l1.3-5.5h.1v.1zm39.2 49.8c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l6.4-.3z" opacity=".757"></path>
    <path class="dome-path" d="m494.1 461.8s0-.1 0 0c0-.1 0-.1 0 0l7.4-.1zm23.1 72.6s0-.1 0 0l6.3-4.4h.1v.1zm-28.4-70.5-2.2-.4v-.1h.1l2.1.5c0-.1.1-.1 0 0z" opacity=".761"></path>
    <path class="dome-path" d="m533.3 481-5-7v-.1h.1z" opacity=".769"></path>
    <path class="dome-path" d="m515.6 464.4-5.8-.9v-.1h.1l5.7 1c0-.1 0 0 0 0z" opacity=".766"></path>
    <path class="dome-path" d="m462.4 501.2-1.2-.6v-.1h.1l1.1.7c0-.1.1-.1 0 0z" opacity=".771"></path>
    <path class="dome-path" d="m465.3 482.5s0-.1 0 0l2.4-1.5h.1v.1z" opacity=".772"></path>
    <path class="dome-path" d="m533 520.3s-.1-.1 0 0v-2.8 2.8c0-.1 0 0 0 0z" opacity=".773"></path>
    <path class="dome-path" d="m475.8 470.1s0-.1 0 0l6-3.9h.1v.1z" opacity=".772"></path>
    <path class="dome-path" d="m509.6 537.5s-.1 0 0 0c-.1 0-.1 0 0 0l1.5-2.1h.1v.1z" opacity=".773"></path>
    <path class="dome-path" d="m488.8 463.9c-.1 0 0-.1 0 0l5.3-2.2h.1v.1z" opacity=".776"></path>
    <path class="dome-path" d="m461.9 494.7s-.1-.1 0 0l2-6.8h.1v.1z" opacity=".78"></path>
    <path class="dome-path" d="m473.2 527.1-5.2-6.2v-.1h.1l5.1 6.3c0-.1 0 0 0 0z" opacity=".784"></path>
    <path class="dome-path" d="m484.6 535-5.7-3.2v-.1h.1l5.6 3.3c.1-.1.1-.1 0 0 .1-.1.1 0 0 0z" opacity=".78"></path>
    <path class="dome-path" d="m479 531.8-5.8-4.7v-.1h.1l5.7 4.8c0-.1 0 0 0 0z" opacity=".784"></path>
    <path class="dome-path" d="m467.7 481s-.1 0 0 0l2.2-5.5h.1v.1z" opacity=".788"></path>
    <path class="dome-path" d="m522.4 468.5-5-1.4v-.1h.1l4.9 1.5c.1 0 .1 0 0 0z" opacity=".789"></path>
    <path class="dome-path" d="m495.5 538.1-5.3-2v-.1h.1l5.2 2.1s.1 0 0 0z" opacity=".792"></path>
    <path class="dome-path" d="m511.2 535.5c-.1 0-.1-.1 0 0-.1-.1-.1-.1 0 0l6.1-1.1h.1v.1z" opacity=".793"></path>
    <path class="dome-path" d="m463.8 508.1-1.9-1.2v-.1h.1l1.8 1.3c.1-.1.1-.1 0 0 .1 0 .1 0 0 0zm6.2-32.5s-.1 0 0 0c-.1 0-.1 0 0 0l2.9-.8h.1v.1z" opacity=".796"></path>
    <path class="dome-path" d="m495.4 463.4-1.3-1.7v-.1h.1l1.2 1.8c.1 0 .1 0 0 0z" opacity=".8"></path>
    <path class="dome-path" d="m490.2 536.1-5.6-1.2v-.1h.1l5.5 1.3c0-.1.1 0 0 0zm27-1.7 1.1-2.8h.1v.1zm11.2-60.4-4.5-2.3v-.1h.1zm-55.5.9c-.1 0-.1 0 0 0l2.9-4.9h.1v.1z" opacity=".804"></path>
    <path class="dome-path" d="m461.9 494.7c0-.1 0-.1 0 0l1.8-.1zm16.8-24.5h-2.9s0-.1 0 0h2.9c0-.1 0-.1 0 0 0-.1 0 0 0 0zm59.4 34.9s-.1 0 0 0l-1.8-3.6v-.1h.1z" opacity=".812"></path>
    <path class="dome-path" d="m467 515.6-2.9-1.8v-.1h.1l2.8 1.9c.1 0 .1 0 0 0zm61.9 8.7c-.1 0-.1 0 0 0l4.1-6.9h.1v.1zm-10.5 7.4c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l5.2-1.7h.1v.1zm14.9-50.7-4.1-3.1v-.1h.1l4 3.2c0-.1 0 0 0 0z" opacity=".816"></path>
    <path class="dome-path" d="m533.2 485.1v-4.1 4.1c.1 0 .1 0 0 0zm-9.6 45c-.1 0-.1-.1 0 0l.5-3h.1v.1zm14.5-33.5-2.7-3.8v-.1h.1l2.6 3.9c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".82"></path>
    <path class="dome-path" d="m517.5 467.1-7.8-3.6v-.1h.1l7.7 3.7c0-.1 0-.1 0 0z" opacity=".824"></path>
    <path class="dome-path" d="m535.5 492.8c0-.1 0-.1 0 0l.9-4.3h.1v.1l-1 4.2c.1-.1.1 0 0 0z" opacity=".823"></path>
    <path class="dome-path" d="m471.9 522.8-3.9-1.9v-.1h.1l3.8 2c0-.1.1 0 0 0zm7.1 9s-.1 0 0 0l-1.2-3.2v-.1h.1z" opacity=".827"></path>
    <path class="dome-path" d="m473.2 527.1s-.1 0 0 0l-1.3-4.3v-.1h.1z" opacity=".831"></path>
    <path class="dome-path" d="m463.8 508.1-1.5-7v-.1h.1l1.4 7.1c.1 0 .1 0 0 0z" opacity=".828"></path>
    <path class="dome-path" d="m488.8 463.9c-.1-.1 0-.1 0 0l6.6-.6h.1v.1zm14.4 73.8-6.2-1.5v-.1c0-.1 0 0 .1 0l6.1 1.6c0-.1 0-.1 0 0z" opacity=".831"></path>
    <path class="dome-path" d="m524.1 527.1c-.1 0-.1 0 0 0l4.8-2.9h.1v.1zm-39.7-60.2c-.1 0 0-.1 0 0l4.4-3.1h.1v.1z" opacity=".835"></path>
    <path class="dome-path" d="m467.7 481c-.1 0-.1 0 0 0l5.1-6.2h.1v.1zm65.3 36.5 2.3-7.5h.1v.1z" opacity=".839"></path>
    <path class="dome-path" d="m462.4 501.2s-.1-.1 0 0l1.3-6.6h.1v.1z" opacity=".836"></path>
    <path class="dome-path" d="m523.9 471.8-6.4-4.7v-.1h.1l6.3 4.8c0-.1.1-.1 0 0z" opacity=".84"></path>
    <path class="dome-path" d="m497 536.2-6.8-.1 6.8.1c.1-.1.1 0 0 0 .1 0 .1 0 0 0zm14.2-.7c-.1 0-.1-.1 0 0-.1-.1-.1-.1 0 0l7.2-3.9h.1v.1zm-47.2-47.6c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l2.8-.6h.1v.1zm64.9 36.4s-.1 0 0 0l-.3-3.3v-.1h.1z" opacity=".847"></path>
    <path class="dome-path" d="m467 515.6-3.2-7.6v-.1h.1l3.1 7.7c.1 0 .1 0 0 0z" opacity=".855"></path>
    <path class="dome-path" d="m472.9 474.9c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l5.8-4.8h.1v.1z" opacity=".851"></path>
    <path class="dome-path" d="m535.4 510.1s-.1 0 0 0l.9-8.7h.1v.1zm-6.8 11c-.1 0-.1 0 0 0l4.4-3.7h.1v.1zm-49.9-50.9s0-.1 0 0c-.1-.1-.1-.1 0 0l5.7-3.3h.1v.1l-5.8 3.2c0-.1 0 0 0 0z" opacity=".859"></path>
    <path class="dome-path" d="m518.4 531.7c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l5.7-4.6h.1v.1z" opacity=".863"></path>
    <path class="dome-path" d="m465.1 501.8-2.7-.6v-.1h.1l2.6.7c0-.1 0-.1 0 0z" opacity=".859"></path>
    <path class="dome-path" d="m483.9 532.8-6.1-4.1v-.1h.1l6 4.2c.1-.1.1-.1 0 0 .1 0 .1 0 0 0zm51.6-40s0-.1 0 0l-2.3-7.7v-.1h.1l2.2 7.8c.1-.1.1-.1 0 0zm-45.3 43.3-.1-2.8z" opacity=".867"></path>
    <path class="dome-path" d="m471.9 522.8-4.9-7.2v-.1h.1zm39.4-55.7c0-.1 0-.1 0 0l6.2-.1z" opacity=".871"></path>
    <path class="dome-path" d="m490 466.3c0-.1 0-.1 0 0l5.4-3h.1v.1z" opacity=".878"></path>
    <path class="dome-path" d="m511.2 535.5c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l1-3.6h.1v.1l-1.1 3.5c0-.1 0 0 0 0zm7.4-64.3-1.2-4.2v-.1h.1z" opacity=".876"></path>
    <path class="dome-path" d="m497 536.2 7.6-1.5h.1v.1zm-12.6-69.3c0-.1 0-.1 0 0l5.6-.7h.1v.1zm-12.8 13.5 1.2-5.5h.1v.1l-1.3 5.4c.1 0 .1 0 0 0zm59.5 34.2s0-.1 0 0l4.2-4.6h.1v.1zm-7.2-42.8-5.3-.5v-.1c0-.1 0 0 .1 0l5.2.6c0-.1 0-.1 0 0z" opacity=".882"></path>
    <path class="dome-path" d="m490.2 533.4-6.3-.6v-.1h.1l6.2.7c0-.1 0-.1 0 0z" opacity=".883"></path>
    <path class="dome-path" d="m524.4 476c-.1 0-.1 0 0 0l-.5-4.2v-.1h.1l.4 4.3c0-.1 0 0 0 0z" opacity=".882"></path>
    <path class="dome-path" d="m497 536.2-6.9-2.9v-.1h.1l6.8 3c.1 0 .1 0 0 0z" opacity=".886"></path>
    <path class="dome-path" d="m529.2 477.9-4.8-2v-.1h.1z" opacity=".888"></path>
    <path class="dome-path" d="m477.6 474.5s-.1 0 0 0l1.1-4.4h.1v.1z" opacity=".89"></path>
    <path class="dome-path" d="m518.4 531.7c-.1 0-.1 0 0 0l.3-3.7h.1v.1zm10.4-49.4.3-4.5h.1v.1l-.4 4.4c.1 0 .1 0 0 0zm-45.1-12.1.6-3.4h.1c.1 0 0 0 0 .1z" opacity=".894"></path>
    <path class="dome-path" d="m533.2 485.1-4.4-2.7v-.1h.1l4.3 2.8c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".898"></path>
    <path class="dome-path" d="m467 515.6.5-6.5h.1v.1z" opacity=".896"></path>
    <path class="dome-path" d="m511.3 467.1-8.1-2.7v-.1h.1l8 2.8c.1-.1.1-.1 0 0zm12.8 60s-.1 0 0 0l-.3-3.5v-.1h.1zm-40.2 5.7s0-.1 0 0l-.3-3.8v-.1h.1l.2 3.9c.1-.1.1 0 0 0z" opacity=".898"></path>
    <path class="dome-path" d="m528.6 521.1s-.1 0 0 0l2.5-6.6h.1v.1z" opacity=".902"></path>
    <path class="dome-path" d="m467.4 494.9-3.7-.2v-.1h.1l3.6.3c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".898"></path>
    <path class="dome-path" d="m531.3 489.3s-.1 0 0 0l1.9-4.3h.1v.1z" opacity=".902"></path>
    <path class="dome-path" d="m497 536.2.7-3.6h.1v.1l-.8 3.5c.1 0 .1 0 0 0z" opacity=".906"></path>
    <path class="dome-path" d="m504.7 534.9c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l7.5-3h.1v.1z" opacity=".907"></path>
    <path class="dome-path" d="m497 466.7s-.1 0 0 0c-.1 0-.1 0 0 0l6.2-2.4h.1v.1z" opacity=".91"></path>
    <path class="dome-path" d="m518.6 471.2-7.3-4.1v-.1h.1l7.2 4.2c.1 0 .1 0 0 0z" opacity=".914"></path>
    <path class="dome-path" d="m467.5 509.2-2.5-7.4v-.1h.1l2.4 7.5c.1-.1.1 0 0 0z" opacity=".915"></path>
    <path class="dome-path" d="m467.4 494.9-.7-7.5v-.1h.1l.6 7.6c.1 0 .1 0 0 0zm29.6-28.2-6.9-.5v-.1h.1l6.8.6c0-.1 0 0 0 0z" opacity=".918"></path>
    <path class="dome-path" d="m524.4 476s-.1 0 0 0l-5.8-4.7v-.1h.1l5.7 4.8c0-.1 0-.1 0 0z" opacity=".919"></path>
    <path class="dome-path" d="m471.6 480.4s0-.1 0 0l5.9-6h.1v.1zm33.1 54.5-6.9-2.2v-.1h.1l6.8 2.3c0-.1 0-.1 0 0 0-.1 0 0 0 0zm-39.6-33.1c-.1 0-.1 0 0 0l2.3-7h.1v.1z" opacity=".922"></path>
    <path class="dome-path" d="m512.2 531.9s-.1 0 0 0c-.1 0-.1 0 0 0l6.5-4h.1v.1z" opacity=".923"></path>
    <path class="dome-path" d="m531.1 514.6 1.5-8.1h.1v.1zm-53.5-40.1c-.1-.1-.1-.1 0 0l6.1-4.4h.1v.1z" opacity=".925"></path>
    <path class="dome-path" d="m518.7 528c-.1-.1-.1-.1 0 0l5.1-4.4h.1v.1zm-47.1-40.5h-4.8 4.8c0-.1.1-.1 0 0z" opacity=".929"></path>
    <path class="dome-path" d="m531.3 489.3-2.5-7v-.1h.1z" opacity=".933"></path>
    <path class="dome-path" d="m490 470.3-.1-4 .1 4c.1 0 .1 0 0 0z" opacity=".929"></path>
    <path class="dome-path" d="m504.7 534.9c-.1 0-.1-.1 0 0l1.3-4.6h.1v.1l-1.4 4.5c0-.1 0 0 0 0zm-32.9-18-4.3-7.7v-.1h.1l4.2 7.8c.1-.1 0 0 0 0z" opacity=".933"></path>
    <path class="dome-path" d="m526.1 518.1s-.1 0 0 0c-.1-.1-.1-.1 0 0l5-3.6h.1v.1z" opacity=".937"></path>
    <path class="dome-path" d="m532.7 506.5s-.1 0 0 0v-8.9s0-.1 0 0zm-49 22.5c-.1 0-.1 0 0 0l-6.2-5.3v-.1h.1z" opacity=".938"></path>
    <path class="dome-path" d="m469.6 502.4-4.5-.6v-.1h.1l4.4.7c0-.1 0-.1 0 0zm42.7-30.5-1.1-4.9v-.1h.1l1 5c.1 0 .1 0 0 0z" opacity=".937"></path>
    <path class="dome-path" d="m471.6 487.5v-7.1zm52.2 36.2s0-.1 0 0l2.2-5.7h.1v.1z" opacity=".941"></path>
    <path class="dome-path" d="m512.2 531.9-6.2-1.6v-.1h.1z" opacity=".942"></path>
    <path class="dome-path" d="m524 480.4.3-4.5h.1v.1l-.4 4.4c.1 0 .1 0 0 0z" opacity=".941"></path>
    <path class="dome-path" d="m490 470.3-6.3-.1 6.3.1c.1-.1.1-.1 0 0 .1 0 .1 0 0 0z" opacity=".945"></path>
    <path class="dome-path" d="m512.3 471.9 6.3-.8h.1v.1z" opacity=".943"></path>
    <path class="dome-path" d="m504.7 468.6-7.8-1.9v-.1h.1l7.7 2c.1 0 .1 0 0 0zm14.2 7.5-.4-4.9v-.1h.1zm9.9 6.2-4.8-1.9v-.1h.1l4.7 2c.1 0 .1 0 0 0zm2.3 32.3-3.4-3.7v-.1h.1l3.3 3.8c.1-.1.1 0 0 0zm-53.8-34-5.6-.2v-.1h.1l5.5.3c0-.1 0 0 0 0z" opacity=".945"></path>
    <path class="dome-path" d="m477.3 480.6c-.1 0-.1 0 0 0l.3-6.2h.1v.1z" opacity=".949"></path>
    <path class="dome-path" d="m483.5 475.2-5.9-.7v-.1h.1l5.8.8c0-.1 0-.1 0 0z" opacity=".949"></path>
    <path class="dome-path" d="m483.5 475.2c-.1 0-.1 0 0 0l.2-5h.1v.1zm35.2 52.8-5.1-1.3v-.1h.1l5 1.4c0-.1.1-.1 0 0zm5.1-4.3-4-1.3v-.1c0-.1 0 0 .1 0l3.9 1.4c.1-.1.1-.1 0 0zm-40.1 5.3c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l6.9-.4z" opacity=".953"></path>
    <path class="dome-path" d="m497.8 532.7c-.1-.1 0-.1 0 0l8.2-2.4h.1v.1zm-28.2-30.3c-.1 0-.1 0 0 0l-2.2-7.5v-.1h.1zm58.2 8.5c-.1 0-.1-.1 0 0l4.9-4.5h.1v.1z" opacity=".957"></path>
    <path class="dome-path" d="m497.8 532.7-7.2-3.9v-.1h.1l7.1 4c0-.1.1-.1 0 0z" opacity=".96"></path>
    <path class="dome-path" d="m531.3 489.3-5.1-2.7v-.1h.1l5 2.8c0-.1.1 0 0 0z" opacity=".958"></path>
    <path class="dome-path" d="m483.7 529c-.1 0-.1 0 0 0l.3-5.5h.1v.1z" opacity=".96"></path>
    <path class="dome-path" d="m497.8 471.6c-.1 0-.1 0 0 0l-.8-4.9v-.1h.1z" opacity=".961"></path>
    <path class="dome-path" d="m471.8 516.9s-.1-.1 0 0l1.3-7h.1v.1zm60.9-19.2-4.9-3.5v-.1h.1l4.8 3.6c.1-.1.1-.1 0 0 .1 0 .1 0 0 0zm-6.6 20.4c-.1 0-.1 0 0 0l1.7-7.2h.1v.1zm-48.6 5.7s-.1-.1 0 0c-.1-.1 0-.1 0 0l6.6-.3z" opacity=".965"></path>
    <path class="dome-path" d="m477.5 523.8s-.1-.1 0 0l.6-6.5h.1v.1zm41.4-47.7-6.6-4.2v-.1h.1l6.5 4.3c.1-.1.1 0 0 0z" opacity=".969"></path>
    <path class="dome-path" d="m506 530.3c-.1 0-.1-.1 0 0l7.6-3.8h.1v.1z" opacity=".973"></path>
    <path class="dome-path" d="m471.6 487.5s0-.1 0 0l5.6-6.9h.1v.1z" opacity=".969"></path>
    <path class="dome-path" d="m526.3 486.6c-.1 0-.1 0 0 0l-2.3-6.2v-.1h.1l2.2 6.3c0-.1 0 0 0 0zm-28.5-15s-.1 0 0 0c-.1 0-.1 0 0 0l6.9-3.1h.1v.1z" opacity=".973"></path>
    <path class="dome-path" d="m513.6 526.6 6.2-4.4h.1v.1zm-36.3-46s-.1 0 0 0c-.1 0-.1 0 0 0l6.2-5.5h.1v.1zm48.8 37.5-4.4-2.3v-.1h.1l4.3 2.4c0-.1 0-.1 0 0zm-20-43.6c-.1 0-.1 0 0 0l-1.4-5.9v-.1h.1l1.3 6c0-.1 0 0 0 0z" opacity=".977"></path>
    <path class="dome-path" d="m506 530.3-7.2-3.3v-.1h.1l7.1 3.4c0-.1 0 0 0 0z" opacity=".98"></path>
    <path class="dome-path" d="m527.9 494.1s-.1 0 0 0l-1.7-7.6v-.1h.1zm-58.3 8.3c-.1 0-.1 0 0 0l3.4-7.1h.1c.1 0 0 0 0 .1z" opacity=".984"></path>
    <path class="dome-path" d="m520 482.7s0-.1 0 0l4-2.4h.1v.1zm-29.5-6.5s-.1 0 0 0l-.5-6v-.1h.1z" opacity=".98"></path>
    <path class="dome-path" d="m506.1 474.5c-.1 0-.1 0 0 0-.1-.1-.1-.1 0 0l6.3-2.6h.1v.1z" opacity=".984"></path>
    <path class="dome-path" d="m528.5 502.6c-.1 0-.1 0 0 0l-.6-8.5v-.1h.1zm-8.6 19.8s-.1 0 0 0c-.1 0-.1-.1 0 0l1.8-6.6h.1v.1z" opacity=".988"></path>
    <path class="dome-path" d="m513.8 478.4c-.1 0-.1 0 0 0-.1 0-.1-.1 0 0l5.1-2.4h.1v.1z" opacity=".984"></path>
    <path class="dome-path" d="m484 523.6-5.9-6.3v-.1h.1l5.8 6.4c.1-.1.1 0 0 0 .1 0 .1 0 0 0z" opacity=".992"></path>
    <path class="dome-path" d="m490.5 476.2-7-1v-.1c0-.1 0 0 .1 0l6.9 1.1c0-.1 0 0 0 0zm23.1 50.4-6.5-2.7v-.1h.1l6.4 2.8c.1 0 .1 0 0 0zm6.3-4.2s-.1 0 0 0l-5.4-2.4v-.1h.1l5.3 2.5c0-.1 0-.1 0 0zm-41.9-34.2-.8-7.6v-.1h.1l.7 7.7c.1-.1.1 0 0 0z" opacity=".988"></path>
    <path class="dome-path" d="m506.1 474.5-8.3-2.8v-.1h.1l8.2 2.9c0-.1 0-.1 0 0z" opacity=".992"></path>
    <path class="dome-path" d="m527.8 510.9-5-3.4v-.1h.1l4.9 3.5c0-.1 0 0 0 0zm-43.9-29.1s-.1 0 0 0l-.5-6.6v-.1h.1zm37.9 8.1c-.1-.1-.1-.1 0 0l4.4-3.4h.1v.1z" opacity=".988"></path>
    <path class="dome-path" d="m473.1 509.9 2.4-7h.1v.1zm49.7-2.4s-.1 0 0 0c-.1 0-.1 0 0 0l5.7-5h.1v.1zm5.1-13.4-6.1-4.3v-.1h.1z" opacity=".992"></path>
    <path class="dome-path" d="m473 495.4s0-.1 0 0l5-7.3h.1v.1zm25.8 31.6s-.1 0 0 0c-.1 0-.1 0 0 0l8.3-3.2h.1v.1z" opacity=".996"></path>
    <path class="dome-path" d="m528.5 502.6s-.1 0 0 0l-5.7-4.1v-.1h.1l5.6 4.2c0-.1 0 0 0 0z" opacity=".992"></path>
    <path class="dome-path" d="m475.6 502.9c-.1 0-.1 0 0 0l-2.6-7.6v-.1h.1z" opacity=".996"></path>
    <path class="dome-path" d="m520 482.7-6.3-4.3v-.1h.1l6.2 4.4c.1-.1.1 0 0 0 .1 0 .1 0 0 0z"></path>
    <path class="dome-path" d="m522.8 498.5c0-.1 0-.1 0 0l5-4.4h.1v.1zm-42.9 11.7-6.8-.2 6.8.2c0-.1 0-.1 0 0 0-.1 0 0 0 0z" opacity=".992"></path>
    <path class="dome-path" d="m513.8 478.4s-.1 0 0 0l-7.7-3.9v-.1h.1l7.6 4c0-.1 0 0 0 0z"></path>
    <path class="dome-path" d="m484 523.6 1.1-6.7h.1v.1l-1.2 6.6c.1 0 .1 0 0 0z" opacity=".992"></path>
    <path class="dome-path" d="m521.7 515.8c-.1 0-.1-.1 0 0l1.1-8.3h.1v.1z"></path>
    <path class="dome-path" d="m478.2 517.3s-.1 0 0 0c-.1-.1 0-.1 0 0l7-.5h.1v.1z" opacity=".996"></path>
    <path class="dome-path" d="m478.2 517.3c-.1 0-.1 0 0 0l1.7-7.2h.1v.1z" opacity=".996"></path>
    <path class="dome-path" d="m498.8 478.6c-.1 0-.1-.1 0 0l-1-7v-.1h.1l.9 7.1c0-.1 0 0 0 0z" opacity=".992"></path>
    <path class="dome-path" d="m521.8 489.9s-.1 0 0 0l-1.8-7.2v-.1h.1l1.7 7.3c0-.1 0 0 0 0zm-37.9-8.1c-.1-.1-.1-.1 0 0l6.6-5.6h.1v.1zm23.2 42.1 7.3-4h.1v.1zm14.6-8.1c-.1 0-.1 0 0 0l-6.1-3.4v-.1h.1l6 3.5c0-.1 0-.1 0 0z"></path>
    <path class="dome-path" d="m514.6 486c-.1-.1-.1-.1 0 0l5.4-3.4h.1v.1zm8.2 21.5c-.1 0-.1 0 0 0v-9.1zm-31.3 14.8-6.4-5.4v-.1h.1l6.3 5.5c0-.1.1 0 0 0zm15.7-40.3s-.1 0 0 0l-1.2-7.6v-.1h.1z"></path>
    <path class="dome-path" d="m507.2 482c-.1 0-.1-.1 0 0l6.5-3.7h.1v.1zm-31.6 20.9s-.1 0 0 0c-.1 0-.1 0 0 0l4.2-6.9h.1v.1zm38.9 17.1c-.1 0-.1 0 0 0l1.1-7.6h.1v.1zm-23.1-36.2-1-7.6v-.1h.1l.9 7.7c.1 0 .1 0 0 0zm.1 38.5c-.1 0 0-.1 0 0l8.3-2.6h.1v.1zm-6.4-33-7-1.2v-.1h.1z"></path>
    <path class="dome-path" d="m514.5 520-6.6-3.5v-.1h.1l6.5 3.6c0-.1 0 0 0 0zm-32.3-16.7-6.7-.4v-.1h.1l6.6.5c.1-.1.1-.1 0 0 .1 0 .1 0 0 0zm9.2-19.5-7.5-2v-.1h.1l7.4 2.1c.1-.1.1-.1 0 0zm24.2 10.3 6.1-4.4h.1v.1l-6.2 4.3c.1 0 .1 0 0 0zm-24.1 28.2s-.1 0 0 0l1.2-7.4h.1v.1zm-11.6-12.1c0-.1-.1-.1 0 0l2.3-6.9h.1v.1l-2.4 6.8c0-.1 0 0 0 0zm27.3-28.2-8.4-3.5v-.1h.1l8.3 3.6c0-.1 0 0 0 0zm-22 34.9c-.1 0-.1 0 0 0l1.6-7h.1v.1z"></path>
    <path class="dome-path" d="m479.9 510.2s0-.1 0 0c0-.1 0-.1 0 0l6.9-.3zm34.7-24.2-7.4-4v-.1h.1l7.3 4.1c0-.1 0-.1 0 0zm-32.4 17.3-2.4-7.3v-.1h.1l2.3 7.4c.1 0 .1 0 0 0zm17.6 16.5 8-3.4h.1v.1z"></path>
    <path class="dome-path" d="m515.6 494.1-1.1-8.2v-.1h.1l1 8.3c.1 0 .1 0 0 0zm0 18.3s-.1 0 0 0l.4-9.1h.1v.1zm-30.5-23.1s-.1 0 0 0c-.1 0-.1 0 0 0l6.3-5.6h.1v.1zm1.7 7.6-6.9-.8v-.1h.1l6.8.9c0-.1 0-.1 0 0 0-.1 0 0 0 0z"></path>
    <path class="dome-path" d="m507.9 490.2 6.6-4.3h.1v.1l-6.7 4.2c.1 0 .1 0 0 0zm-8.1 29.6 1-7.7h.1v.1l-1.1 7.6c.1 0 .1 0 0 0zm-7-4.9-6-5v-.1h.1zm-6-18c-.1 0-.1 0 0 0l-1.7-7.6v-.1h.1l1.6 7.7c0-.1 0 0 0 0z"></path>
    <path class="dome-path" d="m507.9 516.5-7.1-4.3v-.1h.1l7 4.4c0-.1 0 0 0 0z"></path>
    <path class="dome-path" d="m507.9 516.5s-.1 0 0 0l.4-8.4h.1v.1zm-19.2-13-6.4-.2 6.4.2c0-.1 0 0 0 0zm4.1-11.5c-.1 0-.1 0 0 0l-7.7-2.6v-.1h.1l7.6 2.7c0-.1 0-.1 0 0 0-.1 0 0 0 0zm22.8 2.1-7.7-3.9v-.1h.1l7.6 4c.1 0 .1 0 0 0zm-22.8 20.8s-.1 0 0 0c-.1 0-.1-.1 0 0l8-2.8h.1v.1z"></path>
    <path class="dome-path" d="m492.8 514.9s-.1 0 0 0l1.4-7.3h.1v.1zm15.5-15.9c0-.1 0-.1 0 0l7.3-4.9h.1v.1zm-19.6 4.5c-.1 0-.1 0 0 0l-1.9-6.7v-.1h.1z"></path>
    <path class="dome-path" d="m486.8 496.9s-.1 0 0 0c-.1-.1-.1-.1 0 0l6-5h.1v.1zm14 15.3s0-.1 0 0l7.4-4.1h.1v.1z"></path>
    <path class="dome-path" d="m500.8 512.2-6.6-4.5v-.1h.1l6.5 4.6c.1-.1.1 0 0 0 .1 0 .1 0 0 0z"></path>
    <path class="dome-path" d="m494.2 507.7-5.6-4.2v-.1h.1l5.5 4.3c.1-.1.1 0 0 0zm14.1-8.7-.4-8.8v-.1h.1l.3 8.9c.1 0 .1 0 0 0zm-7.5-4s0-.1 0 0l-1.1-8.2v-.1h.1l1 8.3c.1-.1.1 0 0 0z"></path>
    <path class="dome-path" d="m500.8 495c0-.1 0-.1 0 0l7.1-4.8h.1v.1l-7.2 4.7c.1 0 .1 0 0 0zm-12.1 8.5s-.1 0 0 0c-.1 0-.1 0 0 0l5.5-4.1h.1v.1z"></path>
    <path class="dome-path" d="m494.2 499.6s0-.1 0 0l-1.5-7.6v-.1h.1l1.4 7.7c.1-.1.1-.1 0 0zm0 8.1s0-.1 0 0l6.6-4.1h.1v.1zm14.1-8.7-7.5-4v-.1h.1l7.4 4.1c.1-.1.1-.1 0 0z"></path>
    <path class="dome-path" d="m494.2 499.6s0-.1 0 0c0-.1 0-.1 0 0l6.6-4.7h.1v.1z"></path>
    <path class="dome-path" d="m500.9 503.7s-.1 0 0 0l-6.7-4.1v-.1h.1l6.6 4.2c0-.1 0-.1 0 0z"></path>
    <path class="dome-path" d="m500.9 503.7c-.1 0-.1 0 0 0l-.1-8.8z"></path><circle class="dome-circle" cx="499.2" cy="496.8" opacity=".106" r=".4"></circle><circle class="dome-circle" cx="499.3" cy="504" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="504.7" cy="500.2" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="493.1" cy="500.7" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="504.7" cy="493.5" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="505.9" cy="506.5" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="493.1" cy="493.1" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="509.3" cy="496.9" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="499.3" cy="489.8" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="493.4" cy="507.9" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="500.1" cy="510.8" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="510.9" cy="502.4" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="486.6" cy="497" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="510.9" cy="491.5" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="505.9" cy="487.4" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="487" cy="504.7" opacity=".106" r=".4"></circle>
    <circle class="dome-circle" cx="514.7" cy="497.1" opacity=".11" r=".4"></circle>
    <circle class="dome-circle" cx="507.1" cy="513.3" opacity=".11" r=".4"></circle>
    <circle class="dome-circle" cx="512.4" cy="508.7" opacity=".11" r=".4"></circle>
    <circle class="dome-circle" cx="493.4" cy="486.1" opacity=".11" r=".4"></circle>
    <circle class="dome-circle" cx="493.9" cy="514.9" opacity=".118" r=".4"></circle>
    <circle class="dome-circle" cx="500.1" cy="483.2" opacity=".118" r=".4"></circle>
    <circle class="dome-circle" cx="486.9" cy="489.5" opacity=".115" r=".4"></circle>
    <circle class="dome-circle" cx="487.7" cy="511.6" opacity=".117" r=".4"></circle>
    <circle class="dome-circle" cx="516.8" cy="503.1" opacity=".118" r=".4"></circle>
    <circle class="dome-circle" cx="501" cy="517.8" opacity=".122" r=".4"></circle>
    <circle class="dome-circle" cx="516.9" cy="491.3" opacity=".126" r=".4"></circle>
    <circle class="dome-circle" cx="512.5" cy="485.6" opacity=".129" r=".4"></circle>
    <circle class="dome-circle" cx="480.7" cy="501.1" opacity=".129" r=".4"></circle>
    <circle class="dome-circle" cx="507.1" cy="480.9" opacity=".137" r=".4"></circle>
    <circle class="dome-circle" cx="481.5" cy="508.4" opacity=".137" r=".4"></circle>
    <circle class="dome-circle" cx="480.7" cy="493.5" opacity=".137" r=".4"></circle>
    <circle class="dome-circle" cx="513.6" cy="515.3" opacity=".137" r=".4"></circle>
    <circle class="dome-circle" cx="520.7" cy="497.3" opacity=".138" r=".4"></circle>
    <circle class="dome-circle" cx="487.6" cy="482.8" opacity=".141" r=".4"></circle>
    <circle class="dome-circle" cx="518.6" cy="509.9" opacity=".141" r=".4"></circle>
    <circle class="dome-circle" cx="493.9" cy="479.5" opacity=".141" r=".4"></circle>
    <circle class="dome-circle" cx="508" cy="520.1" opacity=".147" r=".4"></circle>
    <circle class="dome-circle" cx="488.2" cy="518.2" opacity=".145" r=".4"></circle>
    <circle class="dome-circle" cx="494.8" cy="521.6" opacity=".149" r=".4"></circle>
    <circle class="dome-circle" cx="482.8" cy="514.6" opacity=".153" r=".4"></circle>
    <circle class="dome-circle" cx="481.4" cy="486.3" opacity=".157" r=".4"></circle>
    <circle class="dome-circle" cx="501" cy="476.6" opacity=".157" r=".4"></circle>
    <circle class="dome-circle" cx="523.1" cy="503.8" opacity=".16" r=".4"></circle>
    <circle class="dome-circle" cx="518.7" cy="484.9" opacity=".165" r=".4"></circle>
    <circle class="dome-circle" cx="501.9" cy="524.3" opacity=".169" r=".4"></circle>
    <circle class="dome-circle" cx="513.7" cy="479.5" opacity=".172" r=".4"></circle>
    <circle class="dome-circle" cx="475.9" cy="504.9" opacity=".172" r=".4"></circle>
    <circle class="dome-circle" cx="475.4" cy="497.6" opacity=".174" r=".4"></circle>
    <circle class="dome-circle" cx="523.1" cy="491.3" opacity=".172" r=".4"></circle>
    <circle class="dome-circle" cx="477.2" cy="511.5" opacity=".182" r=".4"></circle>
    <circle class="dome-circle" cx="514.3" cy="521.4" opacity=".185" r=".4"></circle>
    <circle class="dome-circle" cx="519.7" cy="516.7" opacity=".188" r=".4"></circle>
    <circle class="dome-circle" cx="475.8" cy="490.4" opacity=".188" r=".4"></circle>
    <circle class="dome-circle" cx="482.7" cy="480.4" opacity=".188" r=".4"></circle>
    <circle class="dome-circle" cx="488.1" cy="476.7" opacity=".188" r=".4"></circle>
    <circle class="dome-circle" cx="508.1" cy="474.8" opacity=".192" r=".4"></circle>
    <circle class="dome-circle" cx="483.5" cy="520.7" opacity=".193" r=".4"></circle>
    <circle class="dome-circle" cx="526.5" cy="497.7" opacity=".192" r=".4"></circle>
    <circle class="dome-circle" cx="489.2" cy="524.3" opacity=".193" r=".4"></circle>
    <circle class="dome-circle" cx="524.8" cy="510.8" opacity=".2" r=".4"></circle>
    <circle class="dome-circle" cx="478.9" cy="516.9" opacity=".2" r=".4"></circle>
    <circle class="dome-circle" cx="494.7" cy="473.3" opacity=".2" r=".4"></circle>
    <circle class="dome-circle" cx="508.7" cy="525.9" opacity=".204" r=".4"></circle>
    <circle class="dome-circle" cx="495.8" cy="527.4" opacity=".208" r=".4"></circle>
    <circle class="dome-circle" cx="477" cy="483.9" opacity=".212" r=".4"></circle>
    <circle class="dome-circle" cx="519.9" cy="478.8" opacity=".227" r=".4"></circle>
    <circle class="dome-circle" cx="501.9" cy="470.9" opacity=".231" r=".4"></circle>
    <circle class="dome-circle" cx="471" cy="501.9" opacity=".231" r=".4"></circle>
    <circle class="dome-circle" cx="524.9" cy="484.9" opacity=".231" r=".4"></circle>
    <circle class="dome-circle" cx="528.8" cy="504.4" opacity=".231" r=".4"></circle>
    <circle class="dome-circle" cx="472.2" cy="509.3" opacity=".235" r=".4"></circle>
    <circle class="dome-circle" cx="502.6" cy="529.4" opacity=".239" r=".4"></circle>
    <circle class="dome-circle" cx="514.5" cy="474" opacity=".239" r=".4"></circle>
    <circle class="dome-circle" cx="470.9" cy="494.1" opacity=".239" r=".4"></circle>
    <circle class="dome-circle" cx="478.7" cy="478.7" opacity=".247" r=".4"></circle>
    <circle class="dome-circle" cx="528.9" cy="491.7" opacity=".247" r=".4"></circle>
    <circle class="dome-circle" cx="483.3" cy="474.9" opacity=".251" r=".4"></circle>
    <circle class="dome-circle" cx="474.2" cy="515.6" opacity=".251" r=".4"></circle>
    <circle class="dome-circle" cx="514.5" cy="526.4" opacity=".251" r=".4"></circle>
    <circle class="dome-circle" cx="519.9" cy="522.6" opacity=".251" r=".4"></circle>
    <circle class="dome-circle" cx="478.1" cy="521.3" opacity=".259" r=".4"></circle>
    <circle class="dome-circle" cx="483.3" cy="525.6" opacity=".259" r=".4"></circle>
    <circle class="dome-circle" cx="489" cy="471.2" opacity=".259" r=".4"></circle>
    <circle class="dome-circle" cx="472" cy="486.8" opacity=".263" r=".4"></circle>
    <circle class="dome-circle" cx="525.4" cy="517.4" opacity=".263" r=".4"></circle>
    <circle class="dome-circle" cx="489.8" cy="529.4" opacity=".275" r=".4"></circle>
    <circle class="dome-circle" cx="508.8" cy="469.8" opacity=".275" r=".4"></circle>
    <circle class="dome-circle" cx="531.4" cy="498.2" opacity=".275" r=".4"></circle>
    <circle class="dome-circle" cx="508.9" cy="530.2" opacity=".278" r=".4"></circle>
    <circle class="dome-circle" cx="495.7" cy="468.3" opacity=".283" r=".4"></circle>
    <circle class="dome-circle" cx="530" cy="511.2" opacity=".29" r=".4"></circle>
    <circle class="dome-circle" cx="474" cy="480.7" opacity=".295" r=".4"></circle>
    <circle class="dome-circle" cx="497" cy="532.2" opacity=".298" r=".4"></circle>
    <circle class="dome-circle" cx="525.6" cy="479" opacity=".314" r=".4"></circle>
    <circle class="dome-circle" cx="520.2" cy="473.6" opacity=".314" r=".4"></circle>
    <circle class="dome-circle" cx="467.5" cy="506.5" opacity=".317" r=".4"></circle>
    <circle class="dome-circle" cx="477.9" cy="475" opacity=".319" r=".4"></circle>
    <circle class="dome-circle" cx="466.7" cy="498.5" opacity=".322" r=".4"></circle>
    <circle class="dome-circle" cx="502.7" cy="466.6" opacity=".322" r=".4"></circle>
    <circle class="dome-circle" cx="469.5" cy="513.5" opacity=".322" r=".4"></circle>
    <circle class="dome-circle" cx="530.2" cy="485.5" opacity=".326" r=".4"></circle>
    <circle class="dome-circle" cx="514.2" cy="530.2" opacity=".326" r=".4"></circle>
    <circle class="dome-circle" cx="514.7" cy="469.8" opacity=".326" r=".4"></circle>
    <circle class="dome-circle" cx="473.2" cy="520.1" opacity=".329" r=".4"></circle>
    <circle class="dome-circle" cx="519.5" cy="527.2" opacity=".329" r=".4"></circle>
    <circle class="dome-circle" cx="533.2" cy="504.7" opacity=".329" r=".4"></circle>
    <circle class="dome-circle" cx="483.1" cy="470.7" opacity=".333" r=".4"></circle>
    <circle class="dome-circle" cx="504.1" cy="533.5" opacity=".333" r=".4"></circle>
    <circle class="dome-circle" cx="467.4" cy="490.5" opacity=".337" r=".4"></circle>
    <circle class="dome-circle" cx="525" cy="523" opacity=".341" r=".4"></circle>
    <circle class="dome-circle" cx="477.9" cy="525.8" opacity=".345" r=".4"></circle>
    <circle class="dome-circle" cx="533.3" cy="492.4" opacity=".345" r=".4"></circle>
    <circle class="dome-circle" cx="483.7" cy="530.3" opacity=".357" r=".4"></circle>
    <circle class="dome-circle" cx="489.6" cy="467" opacity=".357" r=".4"></circle>
    <circle class="dome-circle" cx="529.9" cy="517.4" opacity=".361" r=".4"></circle>
    <circle class="dome-circle" cx="469.3" cy="483.6" opacity=".365" r=".4"></circle>
    <circle class="dome-circle" cx="509.1" cy="466.2" opacity=".369" r=".4"></circle>
    <circle class="dome-circle" cx="535" cy="498.7" opacity=".375" r=".4"></circle>
    <circle class="dome-circle" cx="490.9" cy="533.9" opacity=".381" r=".4"></circle>
    <circle class="dome-circle" cx="510.4" cy="533.5" opacity=".384" r=".4"></circle>
    <circle class="dome-circle" cx="472.9" cy="477" opacity=".392" r=".4"></circle>
    <circle class="dome-circle" cx="497" cy="464.5" opacity=".392" r=".4"></circle>
    <circle class="dome-circle" cx="533.8" cy="511.2" opacity=".396" r=".4"></circle>
    <circle class="dome-circle" cx="525.2" cy="474.3" opacity=".408" r=".4"></circle>
    <circle class="dome-circle" cx="519.8" cy="469.8" opacity=".412" r=".4"></circle>
    <circle class="dome-circle" cx="517" cy="531.7" opacity=".416" r=".4"></circle>
    <circle class="dome-circle" cx="498.5" cy="535.9" opacity=".416" r=".4"></circle>
    <circle class="dome-circle" cx="514.4" cy="466.8" opacity=".42" r=".4"></circle>
    <circle class="dome-circle" cx="530.2" cy="480.1" opacity=".416" r=".4"></circle>
    <circle class="dome-circle" cx="465.4" cy="510.7" opacity=".42" r=".4"></circle>
    <circle class="dome-circle" cx="477.6" cy="471.4" opacity=".423" r=".4"></circle>
    <circle class="dome-circle" cx="468.4" cy="517.8" opacity=".423" r=".4"></circle>
    <circle class="dome-circle" cx="463.8" cy="503.1" opacity=".427" r=".4"></circle>
    <circle class="dome-circle" cx="522.9" cy="528.2" opacity=".429" r=".4"></circle>
    <circle class="dome-circle" cx="533.9" cy="486.7" opacity=".435" r=".4"></circle>
    <circle class="dome-circle" cx="536.1" cy="504.9" opacity=".435" r=".4"></circle>
    <circle class="dome-circle" cx="473" cy="524.5" opacity=".435" r=".4"></circle>
    <circle class="dome-circle" cx="463.8" cy="495" opacity=".435" r=".4"></circle>
    <circle class="dome-circle" cx="504.2" cy="463.6" opacity=".439" r=".4"></circle>
    <circle class="dome-circle" cx="483.5" cy="467" opacity=".449" r=".4"></circle>
    <circle class="dome-circle" cx="536.2" cy="493.3" opacity=".454" r=".4"></circle>
    <circle class="dome-circle" cx="528.6" cy="523.1" opacity=".455" r=".4"></circle>
    <circle class="dome-circle" cx="478.5" cy="529.9" opacity=".451" r=".4"></circle>
    <circle class="dome-circle" cx="465.2" cy="487.4" opacity=".455" r=".4"></circle>
    <circle class="dome-circle" cx="505.6" cy="536.4" opacity=".455" r=".4"></circle>
    <circle class="dome-circle" cx="537.2" cy="499.2" opacity=".473" r=".4"></circle>
    <circle class="dome-circle" cx="485" cy="534.1" opacity=".478" r=".4"></circle>
    <circle class="dome-circle" cx="468.2" cy="480.3" opacity=".478" r=".4"></circle>
    <circle class="dome-circle" cx="533.4" cy="516.7" opacity=".482" r=".4"></circle>
    <circle class="dome-circle" cx="490.7" cy="463.6" opacity=".486" r=".4"></circle>
    <circle class="dome-circle" cx="510.6" cy="464" opacity=".486" r=".4"></circle>
    <circle class="dome-circle" cx="512.9" cy="535.1" opacity=".49" r=".4"></circle>
    <circle class="dome-circle" cx="492.4" cy="536.9" opacity=".51" r=".4"></circle>
    <circle class="dome-circle" cx="472.7" cy="473.7" opacity=".51" r=".4"></circle>
    <circle class="dome-circle" cx="517.3" cy="466.2" opacity=".514" r=".4"></circle>
    <circle class="dome-circle" cx="523.2" cy="469.9" opacity=".514" r=".4"></circle>
    <circle class="dome-circle" cx="536.6" cy="509.8" opacity=".518" r=".4"></circle>
    <circle class="dome-circle" cx="528.9" cy="475.3" opacity=".525" r=".4"></circle>
    <circle class="dome-circle" cx="498.4" cy="461.9" opacity=".529" r=".4"></circle>
    <circle class="dome-circle" cx="519.8" cy="532.4" opacity=".529" r=".4"></circle>
    <circle class="dome-circle" cx="462.6" cy="507.3" opacity=".531" r=".4"></circle>
    <circle class="dome-circle" cx="533.7" cy="482" opacity=".537" r=".4"></circle>
    <circle class="dome-circle" cx="464.7" cy="514.6" opacity=".541" r=".4"></circle>
    <circle class="dome-circle" cx="461.8" cy="499.6" opacity=".541" r=".4"></circle>
    <circle class="dome-circle" cx="500" cy="538.1" opacity=".545" r=".4"></circle>
    <circle class="dome-circle" cx="478.2" cy="468.4" opacity=".549" r=".4"></circle>
    <circle class="dome-circle" cx="468.6" cy="521.9" opacity=".549" r=".4"></circle>
    <circle class="dome-circle" cx="536.8" cy="489.2" opacity=".549" r=".4"></circle>
    <circle class="dome-circle" cx="538.2" cy="503.3" opacity=".552" r=".4"></circle>
    <circle class="dome-circle" cx="462.5" cy="491.9" opacity=".557" r=".4"></circle>
    <circle class="dome-circle" cx="525.9" cy="528.1" opacity=".557" r=".4"></circle>
    <circle class="dome-circle" cx="474" cy="528.2" opacity=".565" r=".4"></circle>
    <circle class="dome-circle" cx="538.2" cy="496" opacity=".569" r=".4"></circle>
    <circle class="dome-circle" cx="505.7" cy="461.8" opacity=".569" r=".4"></circle>
    <circle class="dome-circle" cx="480" cy="532.9" opacity=".577" r=".4"></circle>
    <circle class="dome-circle" cx="507.6" cy="537.7" opacity=".58" r=".4"></circle>
    <circle class="dome-circle" cx="484.7" cy="464.4" opacity=".58" r=".4"></circle>
    <circle class="dome-circle" cx="464.5" cy="484.7" opacity=".584" r=".4"></circle>
    <circle class="dome-circle" cx="531.5" cy="522.2" opacity=".584" r=".4"></circle>
    <circle class="dome-circle" cx="513.1" cy="463.5" opacity=".598" r=".4"></circle>
    <circle class="dome-circle" cx="486.8" cy="536.3" opacity=".604" r=".4"></circle>
    <circle class="dome-circle" cx="468.3" cy="477.5" opacity=".616" r=".4"></circle>
    <circle class="dome-circle" cx="535.7" cy="515.2" opacity=".62" r=".4"></circle>
    <circle class="dome-circle" cx="515.3" cy="535.5" opacity=".62" r=".4"></circle>
    <circle class="dome-circle" cx="492.3" cy="461.8" opacity=".62" r=".4"></circle>
    <circle class="dome-circle" cx="520.1" cy="466.7" opacity=".626" r=".4"></circle>
    <circle class="dome-circle" cx="494.2" cy="538.3" opacity=".631" r=".6"></circle>
    <circle class="dome-circle" cx="461.3" cy="503.8" opacity=".635" r=".5"></circle>
    <circle class="dome-circle" cx="526.3" cy="471.2" opacity=".639" r=".5"></circle>
    <circle class="dome-circle" cx="473.7" cy="471.2" opacity=".647" r=".5"></circle>
    <circle class="dome-circle" cx="538" cy="508" opacity=".647" r=".5"></circle>
    <circle class="dome-circle" cx="461.2" cy="496.4" opacity=".651" r=".5"></circle>
    <circle class="dome-circle" cx="462.6" cy="510.7" opacity=".655" r=".5"></circle>
    <circle class="dome-circle" cx="531.8" cy="477.5" opacity=".651" r=".5"></circle>
    <circle class="dome-circle" cx="522.1" cy="531.9" opacity=".655" r=".5"></circle>
    <circle class="dome-circle" cx="500" cy="461" opacity=".657" r=".5"></circle>
    <circle class="dome-circle" cx="538.9" cy="500.2" opacity=".663" r=".5"></circle>
    <circle class="dome-circle" cx="535.9" cy="484.9" opacity=".663" r=".5"></circle>
    <circle class="dome-circle" cx="465.6" cy="518.1" opacity=".667" r=".5"></circle>
    <circle class="dome-circle" cx="538.1" cy="492.3" opacity=".671" r=".5"></circle>
    <circle class="dome-circle" cx="479.7" cy="466.7" opacity=".672" r=".5"></circle>
    <circle class="dome-circle" cx="501.5" cy="538.8" opacity=".674" r=".5"></circle>
    <circle class="dome-circle" cx="470.3" cy="525.1" opacity=".678" r=".5"></circle>
    <circle class="dome-circle" cx="462.4" cy="489.7" opacity=".682" r=".5"></circle>
    <circle class="dome-circle" cx="476.1" cy="530.6" opacity=".686" r=".5"></circle>
    <circle class="dome-circle" cx="482.2" cy="534.5" opacity=".69" r=".5"></circle>
    <circle class="dome-circle" cx="528" cy="526.8" opacity=".69" r=".5"></circle>
    <circle class="dome-circle" cx="507.7" cy="461.8" opacity=".69" r=".5"></circle>
    <circle class="dome-circle" cx="486.6" cy="463.4" opacity=".714" r=".5"></circle>
    <circle class="dome-circle" cx="489" cy="537.1" opacity=".718" r=".5"></circle>
    <circle class="dome-circle" cx="509.6" cy="537.5" opacity=".714" r=".5"></circle>
    <circle class="dome-circle" cx="465.3" cy="482.4" opacity=".718" r=".5"></circle>
    <circle class="dome-circle" cx="533" cy="520.2" opacity=".722" r=".5"></circle>
    <circle class="dome-circle" cx="515.6" cy="464.4" opacity=".722" r=".5"></circle>
    <circle class="dome-circle" cx="461.2" cy="500.6" opacity=".728" r=".5"></circle>
    <circle class="dome-circle" cx="494.1" cy="461.7" opacity=".745" r=".5"></circle>
    <circle class="dome-circle" cx="536.3" cy="512.9" opacity=".745" r=".5"></circle>
    <circle class="dome-circle" cx="522.4" cy="468.5" opacity=".746" r=".5"></circle>
    <circle class="dome-circle" cx="470" cy="475.6" opacity=".745" r=".5"></circle>
    <circle class="dome-circle" cx="462" cy="506.8" opacity=".749" r=".5"></circle>
    <circle class="dome-circle" cx="517.2" cy="534.4" opacity=".751" r=".5"></circle>
    <circle class="dome-circle" cx="495.5" cy="538.1" opacity=".759" r=".5"></circle>
    <circle class="dome-circle" cx="538.1" cy="505.1" opacity=".761" r=".5"></circle>
    <circle class="dome-circle" cx="528.4" cy="474" opacity=".765" r=".5"></circle>
    <circle class="dome-circle" cx="461.9" cy="494.6" opacity=".765" r=".5"></circle>
    <circle class="dome-circle" cx="464.2" cy="513.8" opacity=".765" r=".5"></circle>
    <circle class="dome-circle" cx="475.8" cy="470.1" opacity=".765" r=".5"></circle>
    <circle class="dome-circle" cx="538.1" cy="496.5" opacity=".772" r=".5"></circle>
    <circle class="dome-circle" cx="533.3" cy="481" opacity=".772" r=".5"></circle>
    <circle class="dome-circle" cx="523.6" cy="530" opacity=".772" r=".5"></circle>
    <circle class="dome-circle" cx="536.5" cy="488.5" opacity=".776" r=".5"></circle>
    <circle class="dome-circle" cx="468" cy="520.9" opacity=".78" r=".5"></circle>
    <circle class="dome-circle" cx="484.6" cy="534.9" opacity=".78" r=".5"></circle>
    <circle class="dome-circle" cx="501.6" cy="461.7" opacity=".78" r=".5"></circle>
    <circle class="dome-circle" cx="481.9" cy="466.2" opacity=".78" r=".5"></circle>
    <circle class="dome-circle" cx="479" cy="531.8" opacity=".784" r=".5"></circle>
    <circle class="dome-circle" cx="473.2" cy="527.1" opacity=".788" r=".5"></circle>
    <circle class="dome-circle" cx="464" cy="487.9" opacity=".8" r=".5"></circle>
    <circle class="dome-circle" cx="503.2" cy="537.7" opacity=".8" r=".5"></circle>
    <circle class="dome-circle" cx="528.9" cy="524.3" opacity=".804" r=".5"></circle>
    <circle class="dome-circle" cx="488.8" cy="463.9" opacity=".812" r=".5"></circle>
    <circle class="dome-circle" cx="509.7" cy="463.5" opacity=".813" r=".5"></circle>
    <circle class="dome-circle" cx="462.4" cy="501.1" opacity=".816" r=".5"></circle>
    <circle class="dome-circle" cx="490.2" cy="536.1" opacity=".827" r=".5"></circle>
    <circle class="dome-circle" cx="533" cy="517.5" opacity=".828" r=".5"></circle>
    <circle class="dome-circle" cx="467.7" cy="481" opacity=".831" r=".5"></circle>
    <circle class="dome-circle" cx="511.2" cy="535.4" opacity=".836" r=".5"></circle>
    <circle class="dome-circle" cx="517.5" cy="467" opacity=".836" r=".5"></circle>
    <circle class="dome-circle" cx="463.8" cy="508" opacity=".843" r=".5"></circle>
    <circle class="dome-circle" cx="523.9" cy="471.7" opacity=".847" r=".5"></circle>
    <circle class="dome-circle" cx="472.9" cy="474.9" opacity=".847" r=".5"></circle>
    <circle class="dome-circle" cx="535.4" cy="510.1" opacity=".851" r=".5"></circle>
    <circle class="dome-circle" cx="495.4" cy="463.4" opacity=".855" r=".5"></circle>
    <circle class="dome-circle" cx="518.4" cy="531.6" opacity=".859" r=".5"></circle>
    <circle class="dome-circle" cx="463.7" cy="494.6" opacity=".859" r=".5"></circle>
    <circle class="dome-circle" cx="478.7" cy="470.1" opacity=".859" r=".5"></circle>
    <circle class="dome-circle" cx="529.2" cy="477.9" opacity=".859" r=".5"></circle>
    <circle class="dome-circle" cx="483.9" cy="532.7" opacity=".862" r=".5"></circle>
    <circle class="dome-circle" cx="484.4" cy="466.8" opacity=".862" r=".5"></circle>
    <circle class="dome-circle" cx="467" cy="515.6" opacity=".867" r=".5"></circle>
    <circle class="dome-circle" cx="533.2" cy="485" opacity=".867" r=".5"></circle>
    <circle class="dome-circle" cx="497" cy="536.2" opacity=".867" r=".5"></circle>
    <circle class="dome-circle" cx="536.4" cy="501.4" opacity=".867" r=".5"></circle>
    <circle class="dome-circle" cx="524.1" cy="527.1" opacity=".867" r=".5"></circle>
    <circle class="dome-circle" cx="535.5" cy="492.7" opacity=".87" r=".5"></circle>
    <circle class="dome-circle" cx="477.9" cy="528.6" opacity=".874" r=".5"></circle>
    <circle class="dome-circle" cx="471.9" cy="522.8" opacity=".875" r=".5"></circle>
    <circle class="dome-circle" cx="503.2" cy="464.3" opacity=".886" r=".5"></circle>
    <circle class="dome-circle" cx="528.6" cy="521.1" opacity=".89" r=".5"></circle>
    <circle class="dome-circle" cx="466.8" cy="487.4" opacity=".894" r=".5"></circle>
    <circle class="dome-circle" cx="504.7" cy="534.8" opacity=".898" r=".5"></circle>
    <circle class="dome-circle" cx="490" cy="466.2" opacity=".902" r=".5"></circle>
    <circle class="dome-circle" cx="465.1" cy="501.7" opacity=".906" r=".5"></circle>
    <circle class="dome-circle" cx="490.2" cy="533.3" opacity=".907" r=".5"></circle>
    <circle class="dome-circle" cx="511.3" cy="467.1" opacity=".91" r=".5"></circle>
    <circle class="dome-circle" cx="471.6" cy="480.3" opacity=".918" r=".5"></circle>
    <circle class="dome-circle" cx="531.1" cy="514.5" opacity=".918" r=".5"></circle>
    <circle class="dome-circle" cx="512.2" cy="531.9" opacity=".919" r=".5"></circle>
    <circle class="dome-circle" cx="518.6" cy="471.2" opacity=".919" r=".5"></circle>
    <circle class="dome-circle" cx="524.4" cy="475.9" opacity=".919" r=".5"></circle>
    <circle class="dome-circle" cx="477.6" cy="474.4" opacity=".925" r=".5"></circle>
    <circle class="dome-circle" cx="483.7" cy="470.2" opacity=".929" r=".5"></circle>
    <circle class="dome-circle" cx="528.8" cy="482.3" opacity=".929" r=".5"></circle>
    <circle class="dome-circle" cx="518.7" cy="527.9" opacity=".929" r=".5"></circle>
    <circle class="dome-circle" cx="467.5" cy="509.1" opacity=".927" r=".5"></circle>
    <circle class="dome-circle" cx="523.8" cy="523.6" opacity=".929" r=".5"></circle>
    <circle class="dome-circle" cx="532.7" cy="506.4" opacity=".937" r=".5"></circle>
    <circle class="dome-circle" cx="483.7" cy="529" opacity=".934" r=".5"></circle>
    <circle class="dome-circle" cx="497" cy="466.7" opacity=".934" r=".5"></circle>
    <circle class="dome-circle" cx="531.3" cy="489.3" opacity=".938" r=".5"></circle>
    <circle class="dome-circle" cx="467.4" cy="494.8" opacity=".941" r=".5"></circle>
    <circle class="dome-circle" cx="471.8" cy="516.8" opacity=".941" r=".5"></circle>
    <circle class="dome-circle" cx="532.7" cy="497.6" opacity=".942" r=".5"></circle>
    <circle class="dome-circle" cx="497.8" cy="532.6" opacity=".945" r=".5"></circle>
    <circle class="dome-circle" cx="477.5" cy="523.7" opacity=".945" r=".5"></circle>
    <circle class="dome-circle" cx="526.1" cy="518" opacity=".956" r=".5"></circle>
    <circle class="dome-circle" cx="504.7" cy="468.6" opacity=".957" r=".5"></circle>
    <circle class="dome-circle" cx="490" cy="470.2" opacity=".961" r=".5"></circle>
    <circle class="dome-circle" cx="506" cy="530.3" opacity=".969" r=".5"></circle>
    <circle class="dome-circle" cx="524" cy="480.4" opacity=".965" r=".5"></circle>
    <circle class="dome-circle" cx="471.6" cy="487.4" opacity=".965" r=".5"></circle>
    <circle class="dome-circle" cx="512.3" cy="471.9" opacity=".969" r=".5"></circle>
    <circle class="dome-circle" cx="469.6" cy="502.4" opacity=".973" r=".5"></circle>
    <circle class="dome-circle" cx="518.9" cy="476.1" opacity=".973" r=".5"></circle>
    <circle class="dome-circle" cx="490.6" cy="528.7" opacity=".975" r=".5"></circle>
    <circle class="dome-circle" cx="513.6" cy="526.6" opacity=".977" r=".5"></circle>
    <circle class="dome-circle" cx="519.9" cy="522.3" opacity=".977" r=".5"></circle>
    <circle class="dome-circle" cx="527.8" cy="510.9" opacity=".977" r=".5"></circle>
    <circle class="dome-circle" cx="477.3" cy="480.6" opacity=".977" r=".5"></circle>
    <circle class="dome-circle" cx="483.5" cy="475.1" opacity=".977" r=".5"></circle>
    <circle class="dome-circle" cx="526.3" cy="486.5" opacity=".98" r=".5"></circle>
    <circle class="dome-circle" cx="473.1" cy="509.9" opacity=".988" r=".5"></circle>
    <circle class="dome-circle" cx="528.5" cy="502.6" opacity=".988" r=".5"></circle>
    <circle class="dome-circle" cx="527.9" cy="494.1" opacity=".988" r=".5"></circle>
    <circle class="dome-circle" cx="484" cy="523.5" opacity=".988" r=".5"></circle>
    <circle class="dome-circle" cx="497.8" cy="471.6" opacity=".988" r=".5"></circle>
    <circle class="dome-circle" cx="478.2" cy="517.3" opacity=".996" r=".5"></circle>
    <circle class="dome-circle" cx="473" cy="495.3" opacity=".996" r=".5"></circle>
    <circle class="dome-circle" cx="498.8" cy="527" opacity=".996" r=".5"></circle>
    <circle class="dome-circle" cx="521.7" cy="515.7" r=".6"></circle>
    <circle class="dome-circle" cx="520" cy="482.7" r=".6"></circle>
    <circle class="dome-circle" cx="506.1" cy="474.4" r=".6"></circle>
    <circle class="dome-circle" cx="513.8" cy="478.4" r=".6"></circle>
    <circle class="dome-circle" cx="490.5" cy="476.2" r=".6"></circle>
    <circle class="dome-circle" cx="507.1" cy="523.9" r=".6"></circle>
    <circle class="dome-circle" cx="478" cy="488.1" r=".6"></circle>
    <circle class="dome-circle" cx="514.5" cy="520" r=".6"></circle>
    <circle class="dome-circle" cx="475.6" cy="502.9" r=".6"></circle>
    <circle class="dome-circle" cx="483.9" cy="481.7" r=".6"></circle>
    <circle class="dome-circle" cx="522.8" cy="507.5" r=".6"></circle>
    <circle class="dome-circle" cx="521.8" cy="489.8" r=".6"></circle>
    <circle class="dome-circle" cx="491.5" cy="522.3" r=".6"></circle>
    <circle class="dome-circle" cx="522.8" cy="498.4" r=".6"></circle>
    <circle class="dome-circle" cx="485.2" cy="516.9" r=".6"></circle>
    <circle class="dome-circle" cx="479.9" cy="510.1" r=".6"></circle>
    <circle class="dome-circle" cx="498.8" cy="478.5" r=".6"></circle>
    <circle class="dome-circle" cx="479.8" cy="496" r=".6"></circle>
    <circle class="dome-circle" cx="514.6" cy="485.9" r=".6"></circle>
    <circle class="dome-circle" cx="515.6" cy="512.4" r=".6"></circle>
    <circle class="dome-circle" cx="499.8" cy="519.8" r=".6"></circle>
    <circle class="dome-circle" cx="507.2" cy="482" r=".6"></circle>
    <circle class="dome-circle" cx="507.9" cy="516.5" r=".6"></circle>
    <circle class="dome-circle" cx="485.1" cy="489.3" r=".6"></circle>
    <circle class="dome-circle" cx="491.4" cy="483.8" r=".6"></circle>
    <circle class="dome-circle" cx="482.2" cy="503.3" r=".6"></circle>
    <circle class="dome-circle" cx="515.6" cy="494.1" r=".6"></circle>
    <circle class="dome-circle" cx="492.8" cy="514.9" r=".6"></circle>
    <circle class="dome-circle" cx="486.8" cy="509.9" r=".6"></circle>
    <circle class="dome-circle" cx="516" cy="503.3" r=".6"></circle>
    <circle class="dome-circle" cx="486.8" cy="496.8" r=".6"></circle>
    <circle class="dome-circle" cx="499.8" cy="486.7" r=".6"></circle>
    <circle class="dome-circle" cx="507.9" cy="490.2" r=".6"></circle>
    <circle class="dome-circle" cx="500.8" cy="512.2" r=".6"></circle>
    <circle class="dome-circle" cx="488.7" cy="503.5" r=".6"></circle>
    <circle class="dome-circle" cx="508.3" cy="508.1" r=".6"></circle>
    <circle class="dome-circle" cx="492.8" cy="491.9" r=".6"></circle>
    <circle class="dome-circle" cx="494.2" cy="507.7" r=".6"></circle>
    <circle class="dome-circle" cx="508.3" cy="498.9" r=".6"></circle>
    <circle class="dome-circle" cx="494.2" cy="499.5" r=".6"></circle>
    <circle class="dome-circle" cx="500.8" cy="494.9" r=".6"></circle>
    <circle class="dome-circle" cx="500.9" cy="503.6" r=".6"></circle></SVG>
);

export default TopSVG;



