webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Header.module.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/Header.module.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Header_menuLink___wCB4 {\\n  color: red;\\n  font-size: 1rem;\\n  line-height: 1.5rem;\\n  font-weight: 500;\\n  --text-opacity: 1;\\n  color: #4a5568;\\n  color: rgba(74, 85, 104, var(--text-opacity));\\n}\\n  .Header_menuLink___wCB4:hover {\\n    --text-opacity: 1;\\n    color: #1a202c;\\n    color: rgba(26, 32, 44, var(--text-opacity));\\n  }\\n  .Header_menuLink___wCB4:focus {\\n    --text-opacity: 1;\\n    color: #1a202c;\\n    color: rgba(26, 32, 44, var(--text-opacity));\\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n    transition-duration: 150ms;\\n  }\\n\\n.Header_cta__2TCKA {\\n  text-align: center;\\n  text-transform: uppercase;\\n  --text-opacity: 1;\\n  color: #fff;\\n  color: rgba(255, 255, 255, var(--text-opacity));\\n  padding: 1.5rem;\\n  --bg-opacity: 1;\\n  background-color: #000;\\n  background-color: rgba(0, 0, 0, var(--bg-opacity));\\n  z-index: 10;\\n  padding: 1.5rem;\\n  font-weight: 700;\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n\\n.Header_hero__n5PN5 {\\n  padding: 3rem;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  overflow: hidden;\\n  margin-top: 1.5rem;\\n  border-radius: 0.375rem;\\n  position: relative;\\n  min-height: 400px;\\n}\\n\\n.Header_hero__n5PN5 h1 {\\n    padding: 1.5rem;\\n    --bg-opacity: 1;\\n    background-color: #000;\\n    background-color: rgba(0, 0, 0, var(--bg-opacity));\\n    --text-opacity: 1;\\n    color: #fff;\\n    color: rgba(255, 255, 255, var(--text-opacity));\\n    font-weight: 500;\\n    z-index: 10;\\n    font-size: 2.25rem;\\n    font-weight: 700;\\n  }\\n\\n.Header_hero__n5PN5 .Header_cta__2TCKA {\\n    margin-top: 1.5rem;\\n  }\\n\\n.Header_heroImage__2Nb9h {\\n  width: 100%;\\n  object-fit: cover;\\n  position: absolute;\\n  z-index: 0;\\n  height: 400px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/bc/Develop/next-ecomm/components/Header.module.css\",\"/Users/bc/Develop/next-ecomm/<no source>\"],\"names\":[],\"mappings\":\"AAAA;EACE,UAAU;ECDZ,eAAA;EAAA,mBAAA;EAAA,gBAAA;EAAA,iBAAA;EAAA,cAAA;EAAA,6CAAA;ADWA;EAPE;ICJF,iBAAA;IAAA,cAAA;IAAA,4CAAA;EDME;EAEA;ICRF,iBAAA;IAAA,cAAA;IAAA,4CAAA;IAAA,wGAAA;IAAA,wDAAA;IAAA,0BAAA;EDUE;;AAGF;ECbA,kBAAA;EAAA,yBAAA;EAAA,iBAAA;EAAA,WAAA;EAAA,+CAAA;EAAA,eAAA;EAAA,eAAA;EAAA,sBAAA;EAAA,kDAAA;EAAA,WAAA;EAAA,eAAA;EAAA,gBAAA;EAAA,qBAAA;EAAA,eAAA;ADeA;;AAEA;ECjBA,aAAA;EAAA,kBAAA;EAAA,aAAA;EAAA,sBAAA;EAAA,uBAAA;EAAA,mBAAA;EAAA,gBAAA;EAAA,kBAAA;EAAA,uBAAA;EAAA,kBAAA;EDmBE,iBAAiB;AASnB;;AAPE;ICrBF,eAAA;IAAA,eAAA;IAAA,sBAAA;IAAA,kDAAA;IAAA,iBAAA;IAAA,WAAA;IAAA,+CAAA;IAAA,gBAAA;IAAA,WAAA;IAAA,kBAAA;IAAA,gBAAA;EDuBE;;AAEA;ICzBF,kBAAA;ED2BE;;AAGF;EC9BA,WAAA;EAAA,iBAAA;EAAA,kBAAA;EAAA,UAAA;EDgCE,aAAa;AACf\",\"file\":\"Header.module.css\",\"sourcesContent\":[\".menuLink {\\n  color: red;\\n  @apply text-base leading-6 font-medium text-gray-700;\\n\\n  &:hover {\\n    @apply text-gray-900;\\n  }\\n\\n  &:focus {\\n    @apply text-gray-900 transition ease-in-out duration-150;\\n  }\\n}\\n\\n.cta {\\n  @apply text-center uppercase text-white p-6 bg-black z-10 p-6 font-bold inline-block cursor-pointer;\\n}\\n\\n.hero {\\n  @apply p-12 relative flex flex-col justify-center items-center overflow-hidden  mt-6 rounded-md relative;\\n  min-height: 400px;\\n\\n  h1 {\\n    @apply p-6 bg-black text-white font-medium z-10 text-4xl font-bold;\\n  }\\n\\n  .cta {\\n    @apply mt-6;\\n  }\\n}\\n\\n.heroImage {\\n  @apply w-full object-cover absolute z-0;\\n  height: 400px;\\n}\\n\",null]}]);\n// Exports\nexports.locals = {\n\t\"menuLink\": \"Header_menuLink___wCB4\",\n\t\"cta\": \"Header_cta__2TCKA\",\n\t\"hero\": \"Header_hero__n5PN5\",\n\t\"heroImage\": \"Header_heroImage__2Nb9h\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzPzQyOWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyw0QkFBNEIsZUFBZSxvQkFBb0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsbUJBQW1CLGtEQUFrRCxHQUFHLG1DQUFtQyx3QkFBd0IscUJBQXFCLG1EQUFtRCxLQUFLLG1DQUFtQyx3QkFBd0IscUJBQXFCLG1EQUFtRCwrR0FBK0csK0RBQStELGlDQUFpQyxLQUFLLHdCQUF3Qix1QkFBdUIsOEJBQThCLHNCQUFzQixnQkFBZ0Isb0RBQW9ELG9CQUFvQixvQkFBb0IsMkJBQTJCLHVEQUF1RCxnQkFBZ0Isb0JBQW9CLHFCQUFxQiwwQkFBMEIsb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQix1QkFBdUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHFCQUFxQix1QkFBdUIsNEJBQTRCLHVCQUF1QixzQkFBc0IsR0FBRyw0QkFBNEIsc0JBQXNCLHNCQUFzQiw2QkFBNkIseURBQXlELHdCQUF3QixrQkFBa0Isc0RBQXNELHVCQUF1QixrQkFBa0IseUJBQXlCLHVCQUF1QixLQUFLLDRDQUE0Qyx5QkFBeUIsS0FBSyw4QkFBOEIsZ0JBQWdCLHNCQUFzQix1QkFBdUIsZUFBZSxrQkFBa0IsR0FBRyxTQUFTLDJKQUEySixVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVywrREFBK0QsZUFBZSx5REFBeUQsZUFBZSwyQkFBMkIsS0FBSyxlQUFlLCtEQUErRCxLQUFLLEdBQUcsVUFBVSx3R0FBd0csR0FBRyxXQUFXLDZHQUE2RyxzQkFBc0IsVUFBVSx5RUFBeUUsS0FBSyxZQUFZLGtCQUFrQixLQUFLLEdBQUcsZ0JBQWdCLDRDQUE0QyxrQkFBa0IsR0FBRyxVQUFVO0FBQ3Q5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkhlYWRlcl9tZW51TGlua19fX3dDQjQge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogIzRhNTU2ODtcXG4gIGNvbG9yOiByZ2JhKDc0LCA4NSwgMTA0LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcXG59XFxuICAuSGVhZGVyX21lbnVMaW5rX19fd0NCNDpob3ZlciB7XFxuICAgIC0tdGV4dC1vcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogIzFhMjAyYztcXG4gICAgY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XFxuICB9XFxuICAuSGVhZGVyX21lbnVMaW5rX19fd0NCNDpmb2N1cyB7XFxuICAgIC0tdGV4dC1vcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogIzFhMjAyYztcXG4gICAgY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxuICB9XFxuXFxuLkhlYWRlcl9jdGFfXzJUQ0tBIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAtLXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICAtLWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1iZy1vcGFjaXR5KSk7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5IZWFkZXJfaGVyb19fbjVQTjUge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxufVxcblxcbi5IZWFkZXJfaGVyb19fbjVQTjUgaDEge1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIC0tYmctb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1iZy1vcGFjaXR5KSk7XFxuICAgIC0tdGV4dC1vcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuLkhlYWRlcl9oZXJvX19uNVBONSAuSGVhZGVyX2N0YV9fMlRDS0Ege1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICB9XFxuXFxuLkhlYWRlcl9oZXJvSW1hZ2VfXzJOYjloIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAwO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2JjL0RldmVsb3AvbmV4dC1lY29tbS9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzXCIsXCIvVXNlcnMvYmMvRGV2ZWxvcC9uZXh0LWVjb21tLzxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQ0RaLGVBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsaUJBQUE7RUFBQSxjQUFBO0VBQUEsNkNBQUE7QURXQTtFQVBFO0lDSkYsaUJBQUE7SUFBQSxjQUFBO0lBQUEsNENBQUE7RURNRTtFQUVBO0lDUkYsaUJBQUE7SUFBQSxjQUFBO0lBQUEsNENBQUE7SUFBQSx3R0FBQTtJQUFBLHdEQUFBO0lBQUEsMEJBQUE7RURVRTs7QUFHRjtFQ2JBLGtCQUFBO0VBQUEseUJBQUE7RUFBQSxpQkFBQTtFQUFBLFdBQUE7RUFBQSwrQ0FBQTtFQUFBLGVBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSxrREFBQTtFQUFBLFdBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxxQkFBQTtFQUFBLGVBQUE7QURlQTs7QUFFQTtFQ2pCQSxhQUFBO0VBQUEsa0JBQUE7RUFBQSxhQUFBO0VBQUEsc0JBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxrQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RURtQkUsaUJBQWlCO0FBU25COztBQVBFO0lDckJGLGVBQUE7SUFBQSxlQUFBO0lBQUEsc0JBQUE7SUFBQSxrREFBQTtJQUFBLGlCQUFBO0lBQUEsV0FBQTtJQUFBLCtDQUFBO0lBQUEsZ0JBQUE7SUFBQSxXQUFBO0lBQUEsa0JBQUE7SUFBQSxnQkFBQTtFRHVCRTs7QUFFQTtJQ3pCRixrQkFBQTtFRDJCRTs7QUFHRjtFQzlCQSxXQUFBO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBLFVBQUE7RURnQ0UsYUFBYTtBQUNmXCIsXCJmaWxlXCI6XCJIZWFkZXIubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVudUxpbmsge1xcbiAgY29sb3I6IHJlZDtcXG4gIEBhcHBseSB0ZXh0LWJhc2UgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDA7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgQGFwcGx5IHRleHQtZ3JheS05MDA7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgQGFwcGx5IHRleHQtZ3JheS05MDAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTA7XFxuICB9XFxufVxcblxcbi5jdGEge1xcbiAgQGFwcGx5IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHAtNiBiZy1ibGFjayB6LTEwIHAtNiBmb250LWJvbGQgaW5saW5lLWJsb2NrIGN1cnNvci1wb2ludGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBAYXBwbHkgcC0xMiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gIG10LTYgcm91bmRlZC1tZCByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcblxcbiAgaDEge1xcbiAgICBAYXBwbHkgcC02IGJnLWJsYWNrIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gei0xMCB0ZXh0LTR4bCBmb250LWJvbGQ7XFxuICB9XFxuXFxuICAuY3RhIHtcXG4gICAgQGFwcGx5IG10LTY7XFxuICB9XFxufVxcblxcbi5oZXJvSW1hZ2Uge1xcbiAgQGFwcGx5IHctZnVsbCBvYmplY3QtY292ZXIgYWJzb2x1dGUgei0wO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXCIsbnVsbF19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtZW51TGlua1wiOiBcIkhlYWRlcl9tZW51TGlua19fX3dDQjRcIixcblx0XCJjdGFcIjogXCJIZWFkZXJfY3RhX18yVENLQVwiLFxuXHRcImhlcm9cIjogXCJIZWFkZXJfaGVyb19fbjVQTjVcIixcblx0XCJoZXJvSW1hZ2VcIjogXCJIZWFkZXJfaGVyb0ltYWdlX18yTmI5aFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Header.module.css\n");

/***/ })

})