"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uploadthing";
exports.ids = ["vendor-chunks/uploadthing"];
exports.modules = {

/***/ "(ssr)/./node_modules/uploadthing/dist/chunk-5KWT532U.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/uploadthing/dist/chunk-5KWT532U.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   maybeParseResponseXML: () => (/* binding */ maybeParseResponseXML)\n/* harmony export */ });\n// src/internal/s3-error-parser.ts\nvar maybeParseResponseXML = (maybeXml) => {\n  const codeMatch = maybeXml.match(/<Code>(.*?)<\\/Code>/s);\n  const messageMatch = maybeXml.match(/<Message>(.*?)<\\/Message>/s);\n  const code = codeMatch == null ? void 0 : codeMatch[1];\n  const message = messageMatch == null ? void 0 : messageMatch[1];\n  if (!code || !message)\n    return null;\n  return { code: s3CodeToUploadThingCode[code] ?? DEFAULT_ERROR_CODE, message };\n};\nvar DEFAULT_ERROR_CODE = \"UPLOAD_FAILED\";\nvar s3CodeToUploadThingCode = {\n  AccessDenied: \"FORBIDDEN\",\n  // 403 Forbidden\n  EntityTooSmall: \"TOO_SMALL\",\n  // 400 Bad Request\n  EntityTooLarge: \"TOO_LARGE\",\n  // 400 Bad Request\n  ExpiredToken: \"FORBIDDEN\",\n  // 400 Bad Request\n  IncorrectNumberOfFilesInPostRequest: \"TOO_MANY_FILES\",\n  // 400 Bad Request\n  InternalError: \"INTERNAL_SERVER_ERROR\",\n  // 500 Internal Server Error\n  KeyTooLongError: \"KEY_TOO_LONG\",\n  // 400 Bad Request\n  MaxMessageLengthExceeded: \"TOO_LARGE\"\n  // 400 Bad Request\n};\n\n\n//# sourceMappingURL=chunk-5KWT532U.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXBsb2FkdGhpbmcvZGlzdC9jaHVuay01S1dUNTMyVS5tanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbXVuaXR5Ly4vbm9kZV9tb2R1bGVzL3VwbG9hZHRoaW5nL2Rpc3QvY2h1bmstNUtXVDUzMlUubWpzP2ZmYmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2ludGVybmFsL3MzLWVycm9yLXBhcnNlci50c1xudmFyIG1heWJlUGFyc2VSZXNwb25zZVhNTCA9IChtYXliZVhtbCkgPT4ge1xuICBjb25zdCBjb2RlTWF0Y2ggPSBtYXliZVhtbC5tYXRjaCgvPENvZGU+KC4qPyk8XFwvQ29kZT4vcyk7XG4gIGNvbnN0IG1lc3NhZ2VNYXRjaCA9IG1heWJlWG1sLm1hdGNoKC88TWVzc2FnZT4oLio/KTxcXC9NZXNzYWdlPi9zKTtcbiAgY29uc3QgY29kZSA9IGNvZGVNYXRjaCA9PSBudWxsID8gdm9pZCAwIDogY29kZU1hdGNoWzFdO1xuICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZU1hdGNoID09IG51bGwgPyB2b2lkIDAgOiBtZXNzYWdlTWF0Y2hbMV07XG4gIGlmICghY29kZSB8fCAhbWVzc2FnZSlcbiAgICByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHsgY29kZTogczNDb2RlVG9VcGxvYWRUaGluZ0NvZGVbY29kZV0gPz8gREVGQVVMVF9FUlJPUl9DT0RFLCBtZXNzYWdlIH07XG59O1xudmFyIERFRkFVTFRfRVJST1JfQ09ERSA9IFwiVVBMT0FEX0ZBSUxFRFwiO1xudmFyIHMzQ29kZVRvVXBsb2FkVGhpbmdDb2RlID0ge1xuICBBY2Nlc3NEZW5pZWQ6IFwiRk9SQklEREVOXCIsXG4gIC8vIDQwMyBGb3JiaWRkZW5cbiAgRW50aXR5VG9vU21hbGw6IFwiVE9PX1NNQUxMXCIsXG4gIC8vIDQwMCBCYWQgUmVxdWVzdFxuICBFbnRpdHlUb29MYXJnZTogXCJUT09fTEFSR0VcIixcbiAgLy8gNDAwIEJhZCBSZXF1ZXN0XG4gIEV4cGlyZWRUb2tlbjogXCJGT1JCSURERU5cIixcbiAgLy8gNDAwIEJhZCBSZXF1ZXN0XG4gIEluY29ycmVjdE51bWJlck9mRmlsZXNJblBvc3RSZXF1ZXN0OiBcIlRPT19NQU5ZX0ZJTEVTXCIsXG4gIC8vIDQwMCBCYWQgUmVxdWVzdFxuICBJbnRlcm5hbEVycm9yOiBcIklOVEVSTkFMX1NFUlZFUl9FUlJPUlwiLFxuICAvLyA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gIEtleVRvb0xvbmdFcnJvcjogXCJLRVlfVE9PX0xPTkdcIixcbiAgLy8gNDAwIEJhZCBSZXF1ZXN0XG4gIE1heE1lc3NhZ2VMZW5ndGhFeGNlZWRlZDogXCJUT09fTEFSR0VcIlxuICAvLyA0MDAgQmFkIFJlcXVlc3Rcbn07XG5cbmV4cG9ydCB7XG4gIG1heWJlUGFyc2VSZXNwb25zZVhNTFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNodW5rLTVLV1Q1MzJVLm1qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uploadthing/dist/chunk-5KWT532U.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/uploadthing/dist/chunk-T2XS27LC.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/uploadthing/dist/chunk-T2XS27LC.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __commonJS: () => (/* binding */ __commonJS),\n/* harmony export */   __require: () => (/* binding */ __require),\n/* harmony export */   __toESM: () => (/* binding */ __toESM)\n/* harmony export */ });\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __require = /* @__PURE__ */ ((x) => typeof require !== \"undefined\" ? require : typeof Proxy !== \"undefined\" ? new Proxy(x, {\n  get: (a, b) => (typeof require !== \"undefined\" ? require : a)[b]\n}) : x)(function(x) {\n  if (typeof require !== \"undefined\")\n    return require.apply(this, arguments);\n  throw new Error('Dynamic require of \"' + x + '\" is not supported');\n});\nvar __commonJS = (cb, mod) => function __require2() {\n  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\n\n\n//# sourceMappingURL=chunk-T2XS27LC.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXBsb2FkdGhpbmcvZGlzdC9jaHVuay1UMlhTMjdMQy5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyREFBMkQsYUFBYTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7O0FBTUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbW11bml0eS8uL25vZGVfbW9kdWxlcy91cGxvYWR0aGluZy9kaXN0L2NodW5rLVQyWFMyN0xDLm1qcz9iNTdjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19yZXF1aXJlID0gLyogQF9fUFVSRV9fICovICgoeCkgPT4gdHlwZW9mIHJlcXVpcmUgIT09IFwidW5kZWZpbmVkXCIgPyByZXF1aXJlIDogdHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiID8gbmV3IFByb3h5KHgsIHtcbiAgZ2V0OiAoYSwgYikgPT4gKHR5cGVvZiByZXF1aXJlICE9PSBcInVuZGVmaW5lZFwiID8gcmVxdWlyZSA6IGEpW2JdXG59KSA6IHgpKGZ1bmN0aW9uKHgpIHtcbiAgaWYgKHR5cGVvZiByZXF1aXJlICE9PSBcInVuZGVmaW5lZFwiKVxuICAgIHJldHVybiByZXF1aXJlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHRocm93IG5ldyBFcnJvcignRHluYW1pYyByZXF1aXJlIG9mIFwiJyArIHggKyAnXCIgaXMgbm90IHN1cHBvcnRlZCcpO1xufSk7XG52YXIgX19jb21tb25KUyA9IChjYiwgbW9kKSA9PiBmdW5jdGlvbiBfX3JlcXVpcmUyKCkge1xuICByZXR1cm4gbW9kIHx8ICgwLCBjYltfX2dldE93blByb3BOYW1lcyhjYilbMF1dKSgobW9kID0geyBleHBvcnRzOiB7fSB9KS5leHBvcnRzLCBtb2QpLCBtb2QuZXhwb3J0cztcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xuXG5leHBvcnQge1xuICBfX3JlcXVpcmUsXG4gIF9fY29tbW9uSlMsXG4gIF9fdG9FU01cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaHVuay1UMlhTMjdMQy5tanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uploadthing/dist/chunk-T2XS27LC.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/uploadthing/dist/client.mjs":
/*!**************************************************!*\
  !*** ./node_modules/uploadthing/dist/client.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DANGEROUS__uploadFiles: () => (/* binding */ DANGEROUS__uploadFiles),\n/* harmony export */   INTERNAL_doFormatting: () => (/* binding */ INTERNAL_doFormatting),\n/* harmony export */   allowedContentTextLabelGenerator: () => (/* binding */ allowedContentTextLabelGenerator),\n/* harmony export */   capitalizeStart: () => (/* binding */ capitalizeStart),\n/* harmony export */   classNames: () => (/* binding */ classNames),\n/* harmony export */   contentFieldToContent: () => (/* binding */ contentFieldToContent),\n/* harmony export */   genUploader: () => (/* binding */ genUploader),\n/* harmony export */   generateClientDropzoneAccept: () => (/* binding */ generateClientDropzoneAccept),\n/* harmony export */   generateMimeTypes: () => (/* binding */ generateMimeTypes),\n/* harmony export */   generatePermittedFileTypes: () => (/* binding */ generatePermittedFileTypes),\n/* harmony export */   styleFieldToClassName: () => (/* binding */ styleFieldToClassName),\n/* harmony export */   styleFieldToCssObject: () => (/* binding */ styleFieldToCssObject)\n/* harmony export */ });\n/* harmony import */ var _chunk_5KWT532U_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-5KWT532U.mjs */ \"(ssr)/./node_modules/uploadthing/dist/chunk-5KWT532U.mjs\");\n/* harmony import */ var _chunk_T2XS27LC_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-T2XS27LC.mjs */ \"(ssr)/./node_modules/uploadthing/dist/chunk-T2XS27LC.mjs\");\n/* harmony import */ var _uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uploadthing/shared */ \"(ssr)/./node_modules/@uploadthing/shared/dist/index.mjs\");\n\n\n\n// src/client.ts\n\n\n// src/internal/component-theming.ts\n\nvar generatePermittedFileTypes = (config) => {\n  const fileTypes = config ? (0,_uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.objectKeys)(config) : [];\n  const maxFileCount = config ? Object.values(config).map((v) => v.maxFileCount) : [];\n  return { fileTypes, multiple: maxFileCount.some((v) => v && v > 1) };\n};\nvar capitalizeStart = (str) => {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n};\nvar INTERNAL_doFormatting = (config) => {\n  if (!config)\n    return \"\";\n  const allowedTypes = (0,_uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.objectKeys)(config);\n  const formattedTypes = allowedTypes.map((f) => f === \"blob\" ? \"file\" : f);\n  if (formattedTypes.length > 1) {\n    const lastType = formattedTypes.pop();\n    return `${formattedTypes.join(\"s, \")} and ${lastType}s`;\n  }\n  const key = allowedTypes[0];\n  const formattedKey = formattedTypes[0];\n  const { maxFileSize, maxFileCount } = config[key];\n  if (maxFileCount && maxFileCount > 1) {\n    return `${formattedKey}s up to ${maxFileSize}, max ${maxFileCount}`;\n  } else {\n    return `${formattedKey} (${maxFileSize})`;\n  }\n};\nvar allowedContentTextLabelGenerator = (config) => {\n  return capitalizeStart(INTERNAL_doFormatting(config));\n};\nvar styleFieldToClassName = (styleField, args) => {\n  if (typeof styleField === \"string\")\n    return styleField;\n  if (typeof styleField === \"function\") {\n    const result = styleField(args);\n    if (typeof result === \"string\")\n      return result;\n  }\n  return \"\";\n};\nvar styleFieldToCssObject = (styleField, args) => {\n  if (typeof styleField === \"object\")\n    return styleField;\n  if (typeof styleField === \"function\") {\n    const result = styleField(args);\n    if (typeof result === \"object\")\n      return result;\n  }\n  return {};\n};\nvar contentFieldToContent = (contentField, arg) => {\n  if (!contentField)\n    return null;\n  if (typeof contentField !== \"function\")\n    return contentField;\n  if (typeof contentField === \"function\") {\n    const result = contentField(arg);\n    return result;\n  }\n};\n\n// src/client.ts\nfunction fetchWithProgress(url, opts = {}, onProgress, onUploadBegin) {\n  return new Promise((res, rej) => {\n    const xhr = new XMLHttpRequest();\n    xhr.open(opts.method ?? \"get\", url);\n    opts.headers && Object.keys(opts.headers).forEach(\n      (h) => opts.headers && xhr.setRequestHeader(h, opts.headers.get(h) ?? \"\")\n    );\n    xhr.onload = (e) => {\n      res(e.target);\n    };\n    xhr.onerror = rej;\n    if (xhr.upload && onProgress)\n      xhr.upload.onprogress = onProgress;\n    if (xhr.upload && onUploadBegin)\n      xhr.upload.onloadstart = onUploadBegin;\n    xhr.send(opts.body);\n  });\n}\nvar createAPIRequestUrl = (config) => {\n  const url = new URL(\n    config.url ?? `${window.location.origin}/api/uploadthing`\n  );\n  const queryParams = new URLSearchParams(url.search);\n  queryParams.set(\"actionType\", config.actionType);\n  queryParams.set(\"slug\", config.slug);\n  url.search = queryParams.toString();\n  return url.toString();\n};\nvar DANGEROUS__uploadFiles = async (opts, config) => {\n  const s3ConnectionRes = await fetch(\n    createAPIRequestUrl({\n      url: config == null ? void 0 : config.url,\n      slug: String(opts.endpoint),\n      actionType: \"upload\"\n    }),\n    {\n      method: \"POST\",\n      body: JSON.stringify({\n        files: opts.files.map((f) => f.name),\n        input: opts.input\n      }),\n      // Express requires Content-Type to be explicitly set to parse body properly\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }\n  ).then(async (res) => {\n    if (!res.ok) {\n      const error = await _uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.UploadThingError.fromResponse(res);\n      throw error;\n    }\n    const jsonOrError = await (0,_uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.safeParseJSON)(res);\n    if (jsonOrError instanceof Error) {\n      throw new _uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.UploadThingError({\n        code: \"BAD_REQUEST\",\n        message: jsonOrError.message,\n        cause: res\n      });\n    }\n    return jsonOrError;\n  });\n  if (!s3ConnectionRes || !Array.isArray(s3ConnectionRes)) {\n    throw new _uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.UploadThingError({\n      code: \"BAD_REQUEST\",\n      message: \"No URL. How did you even get here?\",\n      cause: s3ConnectionRes\n    });\n  }\n  const fileUploadPromises = s3ConnectionRes.map(async (presigned) => {\n    const file = opts.files.find((f) => f.name === presigned.name);\n    if (!file) {\n      console.error(\"No file found for presigned URL\", presigned);\n      throw new _uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.UploadThingError({\n        code: \"NOT_FOUND\",\n        message: \"No file found for presigned URL\",\n        cause: `Expected file with name ${presigned.name} but got '${opts.files.join(\",\")}'`\n      });\n    }\n    const { url, fields } = presigned.presignedUrl;\n    const formData = new FormData();\n    if (presigned.fileType === file.type.split(\"/\")[0] || presigned.fileType === file.type) {\n      formData.append(\"Content-Type\", file.type);\n    } else if (presigned.fileType === \"blob\") {\n      formData.append(\"Content-Type\", \"application/octet-stream\");\n    } else if (presigned.fileType === \"pdf\") {\n      formData.append(\"Content-Type\", \"application/pdf\");\n    }\n    Object.entries({ ...fields, file }).forEach(([key, value]) => {\n      formData.append(key, value);\n    });\n    const upload = await fetchWithProgress(\n      url,\n      {\n        method: \"POST\",\n        body: formData,\n        headers: new Headers({\n          Accept: \"application/xml\"\n        })\n      },\n      (progressEvent) => {\n        var _a;\n        return (_a = opts.onUploadProgress) == null ? void 0 : _a.call(opts, {\n          file: file.name,\n          progress: progressEvent.loaded / progressEvent.total * 100\n        });\n      },\n      () => {\n        var _a;\n        (_a = opts.onUploadBegin) == null ? void 0 : _a.call(opts, {\n          file: file.name\n        });\n      }\n    );\n    if (upload.status > 299 || upload.status < 200) {\n      await fetch(\n        createAPIRequestUrl({\n          url: config == null ? void 0 : config.url,\n          slug: String(opts.endpoint),\n          actionType: \"failure\"\n        }),\n        {\n          method: \"POST\",\n          body: JSON.stringify({\n            fileKey: fields.key\n          })\n        }\n      );\n      const parsed = (0,_chunk_5KWT532U_mjs__WEBPACK_IMPORTED_MODULE_0__.maybeParseResponseXML)(upload.responseText);\n      if (parsed == null ? void 0 : parsed.message) {\n        throw new _uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.UploadThingError({\n          code: parsed.code,\n          message: parsed.message\n        });\n      } else {\n        throw new _uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.UploadThingError({\n          code: \"UPLOAD_FAILED\",\n          message: `Failed to upload file ${file.name} to S3`,\n          cause: upload.responseText\n        });\n      }\n    }\n    const genUrl = \"https://utfs.io/f/\" + encodeURIComponent(fields.key);\n    await (0,_uploadthing_shared__WEBPACK_IMPORTED_MODULE_2__.pollForFileData)(presigned.key);\n    const ret = {\n      fileName: file.name,\n      name: file.name,\n      fileSize: file.size,\n      size: file.size,\n      fileKey: presigned.key,\n      key: presigned.key,\n      fileUrl: genUrl,\n      url: genUrl\n    };\n    return ret;\n  });\n  return Promise.all(fileUploadPromises);\n};\nvar genUploader = () => {\n  return DANGEROUS__uploadFiles;\n};\nvar classNames = (...classes) => {\n  return classes.filter(Boolean).join(\" \");\n};\nvar generateMimeTypes = (fileTypes) => {\n  const accepted = fileTypes.map((type) => {\n    if (type === \"blob\")\n      return \"blob\";\n    if (type === \"pdf\")\n      return \"application/pdf\";\n    if (type.includes(\"/\"))\n      return type;\n    else\n      return `${type}/*`;\n  });\n  if (accepted.includes(\"blob\")) {\n    return void 0;\n  }\n  return accepted;\n};\nvar generateClientDropzoneAccept = (fileTypes) => {\n  const mimeTypes = generateMimeTypes(fileTypes);\n  if (!mimeTypes)\n    return void 0;\n  return Object.fromEntries(mimeTypes.map((type) => [type, []]));\n};\n\n//# sourceMappingURL=client.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXBsb2FkdGhpbmcvZGlzdC9jbGllbnQubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNBOztBQUU5QjtBQUs2Qjs7QUFFN0I7QUFDaUQ7QUFDakQ7QUFDQSw2QkFBNkIsK0RBQVU7QUFDdkM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0RBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0QkFBNEIsTUFBTSxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNEJBQTRCO0FBQ3RDO0FBQ0EsY0FBYyxhQUFhLFVBQVUsWUFBWSxRQUFRLGFBQWE7QUFDdEUsSUFBSTtBQUNKLGNBQWMsY0FBYyxHQUFHLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFnQjtBQUMxQztBQUNBO0FBQ0EsOEJBQThCLGtFQUFhO0FBQzNDO0FBQ0EsZ0JBQWdCLGlFQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGNBQWMsaUVBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFnQjtBQUNoQztBQUNBO0FBQ0EsMENBQTBDLGdCQUFnQixXQUFXLHFCQUFxQjtBQUMxRixPQUFPO0FBQ1A7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxxQkFBcUIsMEVBQXFCO0FBQzFDO0FBQ0Esa0JBQWtCLGlFQUFnQjtBQUNsQztBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUixrQkFBa0IsaUVBQWdCO0FBQ2xDO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvRUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tdW5pdHkvLi9ub2RlX21vZHVsZXMvdXBsb2FkdGhpbmcvZGlzdC9jbGllbnQubWpzP2Q2OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgbWF5YmVQYXJzZVJlc3BvbnNlWE1MXG59IGZyb20gXCIuL2NodW5rLTVLV1Q1MzJVLm1qc1wiO1xuaW1wb3J0IFwiLi9jaHVuay1UMlhTMjdMQy5tanNcIjtcblxuLy8gc3JjL2NsaWVudC50c1xuaW1wb3J0IHtcbiAgcG9sbEZvckZpbGVEYXRhLFxuICBzYWZlUGFyc2VKU09OLFxuICBVcGxvYWRUaGluZ0Vycm9yXG59IGZyb20gXCJAdXBsb2FkdGhpbmcvc2hhcmVkXCI7XG5cbi8vIHNyYy9pbnRlcm5hbC9jb21wb25lbnQtdGhlbWluZy50c1xuaW1wb3J0IHsgb2JqZWN0S2V5cyB9IGZyb20gXCJAdXBsb2FkdGhpbmcvc2hhcmVkXCI7XG52YXIgZ2VuZXJhdGVQZXJtaXR0ZWRGaWxlVHlwZXMgPSAoY29uZmlnKSA9PiB7XG4gIGNvbnN0IGZpbGVUeXBlcyA9IGNvbmZpZyA/IG9iamVjdEtleXMoY29uZmlnKSA6IFtdO1xuICBjb25zdCBtYXhGaWxlQ291bnQgPSBjb25maWcgPyBPYmplY3QudmFsdWVzKGNvbmZpZykubWFwKCh2KSA9PiB2Lm1heEZpbGVDb3VudCkgOiBbXTtcbiAgcmV0dXJuIHsgZmlsZVR5cGVzLCBtdWx0aXBsZTogbWF4RmlsZUNvdW50LnNvbWUoKHYpID0+IHYgJiYgdiA+IDEpIH07XG59O1xudmFyIGNhcGl0YWxpemVTdGFydCA9IChzdHIpID0+IHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG52YXIgSU5URVJOQUxfZG9Gb3JtYXR0aW5nID0gKGNvbmZpZykgPT4ge1xuICBpZiAoIWNvbmZpZylcbiAgICByZXR1cm4gXCJcIjtcbiAgY29uc3QgYWxsb3dlZFR5cGVzID0gb2JqZWN0S2V5cyhjb25maWcpO1xuICBjb25zdCBmb3JtYXR0ZWRUeXBlcyA9IGFsbG93ZWRUeXBlcy5tYXAoKGYpID0+IGYgPT09IFwiYmxvYlwiID8gXCJmaWxlXCIgOiBmKTtcbiAgaWYgKGZvcm1hdHRlZFR5cGVzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBsYXN0VHlwZSA9IGZvcm1hdHRlZFR5cGVzLnBvcCgpO1xuICAgIHJldHVybiBgJHtmb3JtYXR0ZWRUeXBlcy5qb2luKFwicywgXCIpfSBhbmQgJHtsYXN0VHlwZX1zYDtcbiAgfVxuICBjb25zdCBrZXkgPSBhbGxvd2VkVHlwZXNbMF07XG4gIGNvbnN0IGZvcm1hdHRlZEtleSA9IGZvcm1hdHRlZFR5cGVzWzBdO1xuICBjb25zdCB7IG1heEZpbGVTaXplLCBtYXhGaWxlQ291bnQgfSA9IGNvbmZpZ1trZXldO1xuICBpZiAobWF4RmlsZUNvdW50ICYmIG1heEZpbGVDb3VudCA+IDEpIHtcbiAgICByZXR1cm4gYCR7Zm9ybWF0dGVkS2V5fXMgdXAgdG8gJHttYXhGaWxlU2l6ZX0sIG1heCAke21heEZpbGVDb3VudH1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtmb3JtYXR0ZWRLZXl9ICgke21heEZpbGVTaXplfSlgO1xuICB9XG59O1xudmFyIGFsbG93ZWRDb250ZW50VGV4dExhYmVsR2VuZXJhdG9yID0gKGNvbmZpZykgPT4ge1xuICByZXR1cm4gY2FwaXRhbGl6ZVN0YXJ0KElOVEVSTkFMX2RvRm9ybWF0dGluZyhjb25maWcpKTtcbn07XG52YXIgc3R5bGVGaWVsZFRvQ2xhc3NOYW1lID0gKHN0eWxlRmllbGQsIGFyZ3MpID0+IHtcbiAgaWYgKHR5cGVvZiBzdHlsZUZpZWxkID09PSBcInN0cmluZ1wiKVxuICAgIHJldHVybiBzdHlsZUZpZWxkO1xuICBpZiAodHlwZW9mIHN0eWxlRmllbGQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN0eWxlRmllbGQoYXJncyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcbnZhciBzdHlsZUZpZWxkVG9Dc3NPYmplY3QgPSAoc3R5bGVGaWVsZCwgYXJncykgPT4ge1xuICBpZiAodHlwZW9mIHN0eWxlRmllbGQgPT09IFwib2JqZWN0XCIpXG4gICAgcmV0dXJuIHN0eWxlRmllbGQ7XG4gIGlmICh0eXBlb2Ygc3R5bGVGaWVsZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3R5bGVGaWVsZChhcmdzKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIilcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHt9O1xufTtcbnZhciBjb250ZW50RmllbGRUb0NvbnRlbnQgPSAoY29udGVudEZpZWxkLCBhcmcpID0+IHtcbiAgaWYgKCFjb250ZW50RmllbGQpXG4gICAgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgY29udGVudEZpZWxkICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIGNvbnRlbnRGaWVsZDtcbiAgaWYgKHR5cGVvZiBjb250ZW50RmllbGQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRlbnRGaWVsZChhcmcpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbi8vIHNyYy9jbGllbnQudHNcbmZ1bmN0aW9uIGZldGNoV2l0aFByb2dyZXNzKHVybCwgb3B0cyA9IHt9LCBvblByb2dyZXNzLCBvblVwbG9hZEJlZ2luKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbihvcHRzLm1ldGhvZCA/PyBcImdldFwiLCB1cmwpO1xuICAgIG9wdHMuaGVhZGVycyAmJiBPYmplY3Qua2V5cyhvcHRzLmhlYWRlcnMpLmZvckVhY2goXG4gICAgICAoaCkgPT4gb3B0cy5oZWFkZXJzICYmIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGgsIG9wdHMuaGVhZGVycy5nZXQoaCkgPz8gXCJcIilcbiAgICApO1xuICAgIHhoci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgcmVzKGUudGFyZ2V0KTtcbiAgICB9O1xuICAgIHhoci5vbmVycm9yID0gcmVqO1xuICAgIGlmICh4aHIudXBsb2FkICYmIG9uUHJvZ3Jlc3MpXG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzO1xuICAgIGlmICh4aHIudXBsb2FkICYmIG9uVXBsb2FkQmVnaW4pXG4gICAgICB4aHIudXBsb2FkLm9ubG9hZHN0YXJ0ID0gb25VcGxvYWRCZWdpbjtcbiAgICB4aHIuc2VuZChvcHRzLmJvZHkpO1xuICB9KTtcbn1cbnZhciBjcmVhdGVBUElSZXF1ZXN0VXJsID0gKGNvbmZpZykgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKFxuICAgIGNvbmZpZy51cmwgPz8gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL3VwbG9hZHRoaW5nYFxuICApO1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnNlYXJjaCk7XG4gIHF1ZXJ5UGFyYW1zLnNldChcImFjdGlvblR5cGVcIiwgY29uZmlnLmFjdGlvblR5cGUpO1xuICBxdWVyeVBhcmFtcy5zZXQoXCJzbHVnXCIsIGNvbmZpZy5zbHVnKTtcbiAgdXJsLnNlYXJjaCA9IHF1ZXJ5UGFyYW1zLnRvU3RyaW5nKCk7XG4gIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbn07XG52YXIgREFOR0VST1VTX191cGxvYWRGaWxlcyA9IGFzeW5jIChvcHRzLCBjb25maWcpID0+IHtcbiAgY29uc3QgczNDb25uZWN0aW9uUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgY3JlYXRlQVBJUmVxdWVzdFVybCh7XG4gICAgICB1cmw6IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLnVybCxcbiAgICAgIHNsdWc6IFN0cmluZyhvcHRzLmVuZHBvaW50KSxcbiAgICAgIGFjdGlvblR5cGU6IFwidXBsb2FkXCJcbiAgICB9KSxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBmaWxlczogb3B0cy5maWxlcy5tYXAoKGYpID0+IGYubmFtZSksXG4gICAgICAgIGlucHV0OiBvcHRzLmlucHV0XG4gICAgICB9KSxcbiAgICAgIC8vIEV4cHJlc3MgcmVxdWlyZXMgQ29udGVudC1UeXBlIHRvIGJlIGV4cGxpY2l0bHkgc2V0IHRvIHBhcnNlIGJvZHkgcHJvcGVybHlcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH1cbiAgICB9XG4gICkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgVXBsb2FkVGhpbmdFcnJvci5mcm9tUmVzcG9uc2UocmVzKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBjb25zdCBqc29uT3JFcnJvciA9IGF3YWl0IHNhZmVQYXJzZUpTT04ocmVzKTtcbiAgICBpZiAoanNvbk9yRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVwbG9hZFRoaW5nRXJyb3Ioe1xuICAgICAgICBjb2RlOiBcIkJBRF9SRVFVRVNUXCIsXG4gICAgICAgIG1lc3NhZ2U6IGpzb25PckVycm9yLm1lc3NhZ2UsXG4gICAgICAgIGNhdXNlOiByZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ganNvbk9yRXJyb3I7XG4gIH0pO1xuICBpZiAoIXMzQ29ubmVjdGlvblJlcyB8fCAhQXJyYXkuaXNBcnJheShzM0Nvbm5lY3Rpb25SZXMpKSB7XG4gICAgdGhyb3cgbmV3IFVwbG9hZFRoaW5nRXJyb3Ioe1xuICAgICAgY29kZTogXCJCQURfUkVRVUVTVFwiLFxuICAgICAgbWVzc2FnZTogXCJObyBVUkwuIEhvdyBkaWQgeW91IGV2ZW4gZ2V0IGhlcmU/XCIsXG4gICAgICBjYXVzZTogczNDb25uZWN0aW9uUmVzXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgZmlsZVVwbG9hZFByb21pc2VzID0gczNDb25uZWN0aW9uUmVzLm1hcChhc3luYyAocHJlc2lnbmVkKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IG9wdHMuZmlsZXMuZmluZCgoZikgPT4gZi5uYW1lID09PSBwcmVzaWduZWQubmFtZSk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTm8gZmlsZSBmb3VuZCBmb3IgcHJlc2lnbmVkIFVSTFwiLCBwcmVzaWduZWQpO1xuICAgICAgdGhyb3cgbmV3IFVwbG9hZFRoaW5nRXJyb3Ioe1xuICAgICAgICBjb2RlOiBcIk5PVF9GT1VORFwiLFxuICAgICAgICBtZXNzYWdlOiBcIk5vIGZpbGUgZm91bmQgZm9yIHByZXNpZ25lZCBVUkxcIixcbiAgICAgICAgY2F1c2U6IGBFeHBlY3RlZCBmaWxlIHdpdGggbmFtZSAke3ByZXNpZ25lZC5uYW1lfSBidXQgZ290ICcke29wdHMuZmlsZXMuam9pbihcIixcIil9J2BcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCB7IHVybCwgZmllbGRzIH0gPSBwcmVzaWduZWQucHJlc2lnbmVkVXJsO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKHByZXNpZ25lZC5maWxlVHlwZSA9PT0gZmlsZS50eXBlLnNwbGl0KFwiL1wiKVswXSB8fCBwcmVzaWduZWQuZmlsZVR5cGUgPT09IGZpbGUudHlwZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIGZpbGUudHlwZSk7XG4gICAgfSBlbHNlIGlmIChwcmVzaWduZWQuZmlsZVR5cGUgPT09IFwiYmxvYlwiKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIik7XG4gICAgfSBlbHNlIGlmIChwcmVzaWduZWQuZmlsZVR5cGUgPT09IFwicGRmXCIpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3BkZlwiKTtcbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXMoeyAuLi5maWVsZHMsIGZpbGUgfSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdXBsb2FkID0gYXdhaXQgZmV0Y2hXaXRoUHJvZ3Jlc3MoXG4gICAgICB1cmwsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3htbFwiXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgKHByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gb3B0cy5vblVwbG9hZFByb2dyZXNzKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRzLCB7XG4gICAgICAgICAgZmlsZTogZmlsZS5uYW1lLFxuICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc0V2ZW50LmxvYWRlZCAvIHByb2dyZXNzRXZlbnQudG90YWwgKiAxMDBcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IG9wdHMub25VcGxvYWRCZWdpbikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwob3B0cywge1xuICAgICAgICAgIGZpbGU6IGZpbGUubmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICAgIGlmICh1cGxvYWQuc3RhdHVzID4gMjk5IHx8IHVwbG9hZC5zdGF0dXMgPCAyMDApIHtcbiAgICAgIGF3YWl0IGZldGNoKFxuICAgICAgICBjcmVhdGVBUElSZXF1ZXN0VXJsKHtcbiAgICAgICAgICB1cmw6IGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLnVybCxcbiAgICAgICAgICBzbHVnOiBTdHJpbmcob3B0cy5lbmRwb2ludCksXG4gICAgICAgICAgYWN0aW9uVHlwZTogXCJmYWlsdXJlXCJcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGZpbGVLZXk6IGZpZWxkcy5rZXlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgcGFyc2VkID0gbWF5YmVQYXJzZVJlc3BvbnNlWE1MKHVwbG9hZC5yZXNwb25zZVRleHQpO1xuICAgICAgaWYgKHBhcnNlZCA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVwbG9hZFRoaW5nRXJyb3Ioe1xuICAgICAgICAgIGNvZGU6IHBhcnNlZC5jb2RlLFxuICAgICAgICAgIG1lc3NhZ2U6IHBhcnNlZC5tZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFVwbG9hZFRoaW5nRXJyb3Ioe1xuICAgICAgICAgIGNvZGU6IFwiVVBMT0FEX0ZBSUxFRFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gdXBsb2FkIGZpbGUgJHtmaWxlLm5hbWV9IHRvIFMzYCxcbiAgICAgICAgICBjYXVzZTogdXBsb2FkLnJlc3BvbnNlVGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2VuVXJsID0gXCJodHRwczovL3V0ZnMuaW8vZi9cIiArIGVuY29kZVVSSUNvbXBvbmVudChmaWVsZHMua2V5KTtcbiAgICBhd2FpdCBwb2xsRm9yRmlsZURhdGEocHJlc2lnbmVkLmtleSk7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICBmaWxlS2V5OiBwcmVzaWduZWQua2V5LFxuICAgICAga2V5OiBwcmVzaWduZWQua2V5LFxuICAgICAgZmlsZVVybDogZ2VuVXJsLFxuICAgICAgdXJsOiBnZW5VcmxcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZmlsZVVwbG9hZFByb21pc2VzKTtcbn07XG52YXIgZ2VuVXBsb2FkZXIgPSAoKSA9PiB7XG4gIHJldHVybiBEQU5HRVJPVVNfX3VwbG9hZEZpbGVzO1xufTtcbnZhciBjbGFzc05hbWVzID0gKC4uLmNsYXNzZXMpID0+IHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xufTtcbnZhciBnZW5lcmF0ZU1pbWVUeXBlcyA9IChmaWxlVHlwZXMpID0+IHtcbiAgY29uc3QgYWNjZXB0ZWQgPSBmaWxlVHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGUgPT09IFwiYmxvYlwiKVxuICAgICAgcmV0dXJuIFwiYmxvYlwiO1xuICAgIGlmICh0eXBlID09PSBcInBkZlwiKVxuICAgICAgcmV0dXJuIFwiYXBwbGljYXRpb24vcGRmXCI7XG4gICAgaWYgKHR5cGUuaW5jbHVkZXMoXCIvXCIpKVxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGAke3R5cGV9LypgO1xuICB9KTtcbiAgaWYgKGFjY2VwdGVkLmluY2x1ZGVzKFwiYmxvYlwiKSkge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgcmV0dXJuIGFjY2VwdGVkO1xufTtcbnZhciBnZW5lcmF0ZUNsaWVudERyb3B6b25lQWNjZXB0ID0gKGZpbGVUeXBlcykgPT4ge1xuICBjb25zdCBtaW1lVHlwZXMgPSBnZW5lcmF0ZU1pbWVUeXBlcyhmaWxlVHlwZXMpO1xuICBpZiAoIW1pbWVUeXBlcylcbiAgICByZXR1cm4gdm9pZCAwO1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKG1pbWVUeXBlcy5tYXAoKHR5cGUpID0+IFt0eXBlLCBbXV0pKTtcbn07XG5leHBvcnQge1xuICBEQU5HRVJPVVNfX3VwbG9hZEZpbGVzLFxuICBJTlRFUk5BTF9kb0Zvcm1hdHRpbmcsXG4gIGFsbG93ZWRDb250ZW50VGV4dExhYmVsR2VuZXJhdG9yLFxuICBjYXBpdGFsaXplU3RhcnQsXG4gIGNsYXNzTmFtZXMsXG4gIGNvbnRlbnRGaWVsZFRvQ29udGVudCxcbiAgZ2VuVXBsb2FkZXIsXG4gIGdlbmVyYXRlQ2xpZW50RHJvcHpvbmVBY2NlcHQsXG4gIGdlbmVyYXRlTWltZVR5cGVzLFxuICBnZW5lcmF0ZVBlcm1pdHRlZEZpbGVUeXBlcyxcbiAgc3R5bGVGaWVsZFRvQ2xhc3NOYW1lLFxuICBzdHlsZUZpZWxkVG9Dc3NPYmplY3Rcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uploadthing/dist/client.mjs\n");

/***/ })

};
;