var t=Array.from(document.querySelectorAll(".population")).map(function(t){return Number(t.textContent.replace(/,/g,""))}),e=t.reduce(function(t,e){return t+e},0),o=e/t.length;document.querySelector(".total-population").textContent=e.toLocaleString(),document.querySelector(".average-population").textContent=Math.round(o).toLocaleString();
//# sourceMappingURL=index.68ec285d.js.map
