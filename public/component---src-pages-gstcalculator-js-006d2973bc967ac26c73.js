"use strict";(self.webpackChunk_nerko_gatsby=self.webpackChunk_nerko_gatsby||[]).push([[886],{3740:function(e,t,a){a.r(t);var l=a(7294),n=a(8426);t.default=()=>{const{0:e,1:t}=(0,l.useState)(!0),{0:a,1:c}=(0,l.useState)(""),{0:s,1:r}=(0,l.useState)(0),{0:m,1:i}=(0,l.useState)(0),{0:o,1:u}=(0,l.useState)(0),{0:E,1:p}=(0,l.useState)(0),{0:v,1:d}=(0,l.useState)(0);(0,l.useEffect)((()=>{N()}),[a,s,e]);const g=e=>{t("inclusive"===e.target.value)},N=()=>{const t=Number(a),l=s/100;if(e){const e=t*l/(1+l),a=t*(1-l)*E/100;i((t-e).toFixed(2)),u(e.toFixed(2)),d(a.toFixed(2))}else{const e=t*(s/100),a=t*E/100;i((t+e).toFixed(2)),u(e.toFixed(2)),d(a.toFixed(2))}};return l.createElement(n.Z,null,l.createElement("section",{className:"gst-box"},l.createElement("div",{className:"gst-container"},l.createElement("div",{className:"left-side"},l.createElement("h3",{className:"gst-heading"},"GST Calculator: Calculate GST Amount"),l.createElement("p",{className:"para1"},"Don't know how to calculate GST?"),l.createElement("p",{className:"para2"},"Get the best GST calculator in India at Vakilsearch. Easy GST calculation in seconds, anytime and anywhere!"),l.createElement("div",{className:"radio-buttons"},l.createElement("label",null,l.createElement("input",{className:"radio-1",type:"radio",value:"inclusive",checked:e,onChange:g}),"GST Inclusive"),l.createElement("label",null,l.createElement("input",{className:"radio-2",type:"radio",value:"exclusive",checked:!e,onChange:g}),"GST Exclusive")),l.createElement("div",{className:"given-input"},l.createElement("label",{htmlFor:"cost-service"},"Cost of Goods/Services"),l.createElement("div",{className:"user-input-rs"},l.createElement("input",{type:"number",value:a,onChange:e=>{c(e.target.value)}}),l.createElement("p",{className:"ruppes-symbol"},"₹"))),l.createElement("div",{className:"given-input"},l.createElement("label",{htmlFor:"gst-rate"},"GST Rate"),l.createElement("div",{className:"user-input-rs"},l.createElement("select",{value:s,onChange:e=>{r(Number(e.target.value))}},l.createElement("option",{value:3},"3%"),l.createElement("option",{value:5},"5%"),l.createElement("option",{value:12},"12%"),l.createElement("option",{value:18},"18%"),l.createElement("option",{value:28},"28%")))),!e&&l.createElement("div",{className:"given-input"},l.createElement("label",{htmlFor:"proft-ratio"},"Profit Ratio"),l.createElement("div",{className:"user-input-rs"},l.createElement("input",{type:"number",value:E,onChange:e=>{p(Number(e.target.value))}}),l.createElement("p",{className:"ruppes-symbol"},"₹")))),l.createElement("div",{className:"right-side"},l.createElement("div",{className:"right-container"},l.createElement("div",{className:"selling-cost"},!e&&l.createElement("p",null,"Total Cost of Selling"),!e&&l.createElement("p",null,"₹",m),e&&l.createElement("p",null,"Total Cost of Selling"),e&&l.createElement("p",null,"₹ ",m)),l.createElement("div",{className:"total-gst"},!e&&l.createElement("p",null,"Total GST"),!e&&l.createElement("p",null,"₹",o),e&&l.createElement("p",null,"Total GST"),e&&l.createElement("p",null,"₹ ",o)),l.createElement("div",{className:"total-profit"},!e&&l.createElement("p",null,"Total Profit"),!e&&l.createElement("p",null,"₹ ",v)))))))}}}]);
//# sourceMappingURL=component---src-pages-gstcalculator-js-006d2973bc967ac26c73.js.map