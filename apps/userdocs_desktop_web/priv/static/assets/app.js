(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/phoenix/priv/static/phoenix.js
  var require_phoenix = __commonJS({
    "node_modules/phoenix/priv/static/phoenix.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.Phoenix = t() : e.Phoenix = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function n(i) {
            if (t[i])
              return t[i].exports;
            var o = t[i] = { i, l: false, exports: {} };
            return e[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, i) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: i });
          }, n.r = function(e2) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
              return e2;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
              for (var o in e2)
                n.d(i, o, function(t3) {
                  return e2[t3];
                }.bind(null, o));
            return i;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 0);
        }([function(e, t, n) {
          (function(t2) {
            e.exports = t2.Phoenix = n(2);
          }).call(this, n(1));
        }, function(e, t) {
          var n;
          n = function() {
            return this;
          }();
          try {
            n = n || new Function("return this")();
          } catch (e2) {
            typeof window == "object" && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          "use strict";
          function i(e2) {
            return function(e3) {
              if (Array.isArray(e3))
                return a(e3);
            }(e2) || function(e3) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
                return Array.from(e3);
            }(e2) || s(e2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function o(e2) {
            return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          function r(e2, t2) {
            return function(e3) {
              if (Array.isArray(e3))
                return e3;
            }(e2) || function(e3, t3) {
              if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
                return;
              var n2 = [], i2 = true, o2 = false, r2 = void 0;
              try {
                for (var s2, a2 = e3[Symbol.iterator](); !(i2 = (s2 = a2.next()).done) && (n2.push(s2.value), !t3 || n2.length !== t3); i2 = true)
                  ;
              } catch (e4) {
                o2 = true, r2 = e4;
              } finally {
                try {
                  i2 || a2.return == null || a2.return();
                } finally {
                  if (o2)
                    throw r2;
                }
              }
              return n2;
            }(e2, t2) || s(e2, t2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function s(e2, t2) {
            if (e2) {
              if (typeof e2 == "string")
                return a(e2, t2);
              var n2 = Object.prototype.toString.call(e2).slice(8, -1);
              return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(n2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? a(e2, t2) : void 0;
            }
          }
          function a(e2, t2) {
            (t2 == null || t2 > e2.length) && (t2 = e2.length);
            for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++)
              i2[n2] = e2[n2];
            return i2;
          }
          function c(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          function h(e2, t2, n2) {
            return t2 && u(e2.prototype, t2), n2 && u(e2, n2), e2;
          }
          n.r(t), n.d(t, "Channel", function() {
            return O;
          }), n.d(t, "Serializer", function() {
            return _;
          }), n.d(t, "Socket", function() {
            return H;
          }), n.d(t, "LongPoll", function() {
            return U;
          }), n.d(t, "Ajax", function() {
            return D;
          }), n.d(t, "Presence", function() {
            return M;
          });
          var l = typeof self != "undefined" ? self : null, f = typeof window != "undefined" ? window : null, d = l || f || void 0, p = 0, v = 1, y = 2, m = 3, g = "closed", k = "errored", b = "joined", j = "joining", T = "leaving", C = "phx_close", R = "phx_error", E = "phx_join", w = "phx_reply", S = "phx_leave", A = "longpoll", L = "websocket", x = function(e2) {
            if (typeof e2 == "function")
              return e2;
            return function() {
              return e2;
            };
          }, P = function() {
            function e2(t2, n2, i2, o2) {
              c(this, e2), this.channel = t2, this.event = n2, this.payload = i2 || function() {
                return {};
              }, this.receivedResp = null, this.timeout = o2, this.timeoutTimer = null, this.recHooks = [], this.sent = false;
            }
            return h(e2, [{ key: "resend", value: function(e3) {
              this.timeout = e3, this.reset(), this.send();
            } }, { key: "send", value: function() {
              this.hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload(), ref: this.ref, join_ref: this.channel.joinRef() }));
            } }, { key: "receive", value: function(e3, t2) {
              return this.hasReceived(e3) && t2(this.receivedResp.response), this.recHooks.push({ status: e3, callback: t2 }), this;
            } }, { key: "reset", value: function() {
              this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = false;
            } }, { key: "matchReceive", value: function(e3) {
              var t2 = e3.status, n2 = e3.response;
              e3.ref;
              this.recHooks.filter(function(e4) {
                return e4.status === t2;
              }).forEach(function(e4) {
                return e4.callback(n2);
              });
            } }, { key: "cancelRefEvent", value: function() {
              this.refEvent && this.channel.off(this.refEvent);
            } }, { key: "cancelTimeout", value: function() {
              clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
            } }, { key: "startTimeout", value: function() {
              var e3 = this;
              this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function(t2) {
                e3.cancelRefEvent(), e3.cancelTimeout(), e3.receivedResp = t2, e3.matchReceive(t2);
              }), this.timeoutTimer = setTimeout(function() {
                e3.trigger("timeout", {});
              }, this.timeout);
            } }, { key: "hasReceived", value: function(e3) {
              return this.receivedResp && this.receivedResp.status === e3;
            } }, { key: "trigger", value: function(e3, t2) {
              this.channel.trigger(this.refEvent, { status: e3, response: t2 });
            } }]), e2;
          }(), O = function() {
            function e2(t2, n2, i2) {
              var o2 = this;
              c(this, e2), this.state = g, this.topic = t2, this.params = x(n2 || {}), this.socket = i2, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = false, this.joinPush = new P(this, E, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new N(function() {
                o2.socket.isConnected() && o2.rejoin();
              }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function() {
                return o2.rejoinTimer.reset();
              })), this.stateChangeRefs.push(this.socket.onOpen(function() {
                o2.rejoinTimer.reset(), o2.isErrored() && o2.rejoin();
              })), this.joinPush.receive("ok", function() {
                o2.state = b, o2.rejoinTimer.reset(), o2.pushBuffer.forEach(function(e3) {
                  return e3.send();
                }), o2.pushBuffer = [];
              }), this.joinPush.receive("error", function() {
                o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.onClose(function() {
                o2.rejoinTimer.reset(), o2.socket.hasLogger() && o2.socket.log("channel", "close ".concat(o2.topic, " ").concat(o2.joinRef())), o2.state = g, o2.socket.remove(o2);
              }), this.onError(function(e3) {
                o2.socket.hasLogger() && o2.socket.log("channel", "error ".concat(o2.topic), e3), o2.isJoining() && o2.joinPush.reset(), o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.joinPush.receive("timeout", function() {
                o2.socket.hasLogger() && o2.socket.log("channel", "timeout ".concat(o2.topic, " (").concat(o2.joinRef(), ")"), o2.joinPush.timeout), new P(o2, S, x({}), o2.timeout).send(), o2.state = k, o2.joinPush.reset(), o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
              }), this.on(w, function(e3, t3) {
                o2.trigger(o2.replyEventName(t3), e3);
              });
            }
            return h(e2, [{ key: "join", value: function() {
              var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
              if (this.joinedOnce)
                throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
              return this.timeout = e3, this.joinedOnce = true, this.rejoin(), this.joinPush;
            } }, { key: "onClose", value: function(e3) {
              this.on(C, e3);
            } }, { key: "onError", value: function(e3) {
              return this.on(R, function(t2) {
                return e3(t2);
              });
            } }, { key: "on", value: function(e3, t2) {
              var n2 = this.bindingRef++;
              return this.bindings.push({ event: e3, ref: n2, callback: t2 }), n2;
            } }, { key: "off", value: function(e3, t2) {
              this.bindings = this.bindings.filter(function(n2) {
                return !(n2.event === e3 && (t2 === void 0 || t2 === n2.ref));
              });
            } }, { key: "canPush", value: function() {
              return this.socket.isConnected() && this.isJoined();
            } }, { key: "push", value: function(e3, t2) {
              var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.timeout;
              if (t2 = t2 || {}, !this.joinedOnce)
                throw new Error("tried to push '".concat(e3, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
              var i2 = new P(this, e3, function() {
                return t2;
              }, n2);
              return this.canPush() ? i2.send() : (i2.startTimeout(), this.pushBuffer.push(i2)), i2;
            } }, { key: "leave", value: function() {
              var e3 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
              this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = T;
              var n2 = function() {
                e3.socket.hasLogger() && e3.socket.log("channel", "leave ".concat(e3.topic)), e3.trigger(C, "leave");
              }, i2 = new P(this, S, x({}), t2);
              return i2.receive("ok", function() {
                return n2();
              }).receive("timeout", function() {
                return n2();
              }), i2.send(), this.canPush() || i2.trigger("ok", {}), i2;
            } }, { key: "onMessage", value: function(e3, t2, n2) {
              return t2;
            } }, { key: "isMember", value: function(e3, t2, n2, i2) {
              return this.topic === e3 && (!i2 || i2 === this.joinRef() || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: e3, event: t2, payload: n2, joinRef: i2 }), false));
            } }, { key: "joinRef", value: function() {
              return this.joinPush.ref;
            } }, { key: "rejoin", value: function() {
              var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
              this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e3));
            } }, { key: "trigger", value: function(e3, t2, n2, i2) {
              var o2 = this.onMessage(e3, t2, n2, i2);
              if (t2 && !o2)
                throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
              for (var r2 = this.bindings.filter(function(t3) {
                return t3.event === e3;
              }), s2 = 0; s2 < r2.length; s2++) {
                r2[s2].callback(o2, n2, i2 || this.joinRef());
              }
            } }, { key: "replyEventName", value: function(e3) {
              return "chan_reply_".concat(e3);
            } }, { key: "isClosed", value: function() {
              return this.state === g;
            } }, { key: "isErrored", value: function() {
              return this.state === k;
            } }, { key: "isJoined", value: function() {
              return this.state === b;
            } }, { key: "isJoining", value: function() {
              return this.state === j;
            } }, { key: "isLeaving", value: function() {
              return this.state === T;
            } }]), e2;
          }(), _ = { HEADER_LENGTH: 1, META_LENGTH: 4, KINDS: { push: 0, reply: 1, broadcast: 2 }, encode: function(e2, t2) {
            if (e2.payload.constructor === ArrayBuffer)
              return t2(this.binaryEncode(e2));
            var n2 = [e2.join_ref, e2.ref, e2.topic, e2.event, e2.payload];
            return t2(JSON.stringify(n2));
          }, decode: function(e2, t2) {
            if (e2.constructor === ArrayBuffer)
              return t2(this.binaryDecode(e2));
            var n2 = r(JSON.parse(e2), 5);
            return t2({ join_ref: n2[0], ref: n2[1], topic: n2[2], event: n2[3], payload: n2[4] });
          }, binaryEncode: function(e2) {
            var t2 = e2.join_ref, n2 = e2.ref, i2 = e2.event, o2 = e2.topic, r2 = e2.payload, s2 = this.META_LENGTH + t2.length + n2.length + o2.length + i2.length, a2 = new ArrayBuffer(this.HEADER_LENGTH + s2), c2 = new DataView(a2), u2 = 0;
            c2.setUint8(u2++, this.KINDS.push), c2.setUint8(u2++, t2.length), c2.setUint8(u2++, n2.length), c2.setUint8(u2++, o2.length), c2.setUint8(u2++, i2.length), Array.from(t2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            }), Array.from(n2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            }), Array.from(o2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            }), Array.from(i2, function(e3) {
              return c2.setUint8(u2++, e3.charCodeAt(0));
            });
            var h2 = new Uint8Array(a2.byteLength + r2.byteLength);
            return h2.set(new Uint8Array(a2), 0), h2.set(new Uint8Array(r2), a2.byteLength), h2.buffer;
          }, binaryDecode: function(e2) {
            var t2 = new DataView(e2), n2 = t2.getUint8(0), i2 = new TextDecoder();
            switch (n2) {
              case this.KINDS.push:
                return this.decodePush(e2, t2, i2);
              case this.KINDS.reply:
                return this.decodeReply(e2, t2, i2);
              case this.KINDS.broadcast:
                return this.decodeBroadcast(e2, t2, i2);
            }
          }, decodePush: function(e2, t2, n2) {
            var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = t2.getUint8(3), s2 = this.HEADER_LENGTH + this.META_LENGTH - 1, a2 = n2.decode(e2.slice(s2, s2 + i2));
            s2 += i2;
            var c2 = n2.decode(e2.slice(s2, s2 + o2));
            s2 += o2;
            var u2 = n2.decode(e2.slice(s2, s2 + r2));
            return s2 += r2, { join_ref: a2, ref: null, topic: c2, event: u2, payload: e2.slice(s2, e2.byteLength) };
          }, decodeReply: function(e2, t2, n2) {
            var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = t2.getUint8(3), s2 = t2.getUint8(4), a2 = this.HEADER_LENGTH + this.META_LENGTH, c2 = n2.decode(e2.slice(a2, a2 + i2));
            a2 += i2;
            var u2 = n2.decode(e2.slice(a2, a2 + o2));
            a2 += o2;
            var h2 = n2.decode(e2.slice(a2, a2 + r2));
            a2 += r2;
            var l2 = n2.decode(e2.slice(a2, a2 + s2));
            a2 += s2;
            var f2 = e2.slice(a2, e2.byteLength);
            return { join_ref: c2, ref: u2, topic: h2, event: w, payload: { status: l2, response: f2 } };
          }, decodeBroadcast: function(e2, t2, n2) {
            var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = this.HEADER_LENGTH + 2, s2 = n2.decode(e2.slice(r2, r2 + i2));
            r2 += i2;
            var a2 = n2.decode(e2.slice(r2, r2 + o2));
            return r2 += o2, { join_ref: null, ref: null, topic: s2, event: a2, payload: e2.slice(r2, e2.byteLength) };
          } }, H = function() {
            function e2(t2) {
              var n2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              c(this, e2), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i2.timeout || 1e4, this.transport = i2.transport || d.WebSocket || U, this.defaultEncoder = _.encode.bind(_), this.defaultDecoder = _.decode.bind(_), this.closeWasClean = false, this.unloaded = false, this.binaryType = i2.binaryType || "arraybuffer", this.transport !== U ? (this.encode = i2.encode || this.defaultEncoder, this.decode = i2.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("beforeunload", function(e3) {
                n2.conn && (n2.unloaded = true, n2.abnormalClose("unloaded"));
              }), this.heartbeatIntervalMs = i2.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function(e3) {
                return i2.rejoinAfterMs ? i2.rejoinAfterMs(e3) : [1e3, 2e3, 5e3][e3 - 1] || 1e4;
              }, this.reconnectAfterMs = function(e3) {
                return n2.unloaded ? 100 : i2.reconnectAfterMs ? i2.reconnectAfterMs(e3) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e3 - 1] || 5e3;
              }, this.logger = i2.logger || null, this.longpollerTimeout = i2.longpollerTimeout || 2e4, this.params = x(i2.params || {}), this.endPoint = "".concat(t2, "/").concat(L), this.vsn = i2.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new N(function() {
                n2.teardown(function() {
                  return n2.connect();
                });
              }, this.reconnectAfterMs);
            }
            return h(e2, [{ key: "protocol", value: function() {
              return location.protocol.match(/^https/) ? "wss" : "ws";
            } }, { key: "endPointURL", value: function() {
              var e3 = D.appendParams(D.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
              return e3.charAt(0) !== "/" ? e3 : e3.charAt(1) === "/" ? "".concat(this.protocol(), ":").concat(e3) : "".concat(this.protocol(), "://").concat(location.host).concat(e3);
            } }, { key: "disconnect", value: function(e3, t2, n2) {
              this.closeWasClean = true, this.reconnectTimer.reset(), this.teardown(e3, t2, n2);
            } }, { key: "connect", value: function(e3) {
              var t2 = this;
              e3 && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = x(e3)), this.conn || (this.closeWasClean = false, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() {
                return t2.onConnOpen();
              }, this.conn.onerror = function(e4) {
                return t2.onConnError(e4);
              }, this.conn.onmessage = function(e4) {
                return t2.onConnMessage(e4);
              }, this.conn.onclose = function(e4) {
                return t2.onConnClose(e4);
              });
            } }, { key: "log", value: function(e3, t2, n2) {
              this.logger(e3, t2, n2);
            } }, { key: "hasLogger", value: function() {
              return this.logger !== null;
            } }, { key: "onOpen", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.open.push([t2, e3]), t2;
            } }, { key: "onClose", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.close.push([t2, e3]), t2;
            } }, { key: "onError", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.error.push([t2, e3]), t2;
            } }, { key: "onMessage", value: function(e3) {
              var t2 = this.makeRef();
              return this.stateChangeCallbacks.message.push([t2, e3]), t2;
            } }, { key: "onConnOpen", value: function() {
              this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = false, this.closeWasClean = false, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function(e3) {
                return (0, r(e3, 2)[1])();
              });
            } }, { key: "heartbeatTimeout", value: function() {
              this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), this.abnormalClose("heartbeat timeout"));
            } }, { key: "resetHeartbeat", value: function() {
              var e3 = this;
              this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearTimeout(this.heartbeatTimer), setTimeout(function() {
                return e3.sendHeartbeat();
              }, this.heartbeatIntervalMs));
            } }, { key: "teardown", value: function(e3, t2, n2) {
              var i2 = this;
              if (!this.conn)
                return e3 && e3();
              this.waitForBufferDone(function() {
                i2.conn && (t2 ? i2.conn.close(t2, n2 || "") : i2.conn.close()), i2.waitForSocketClosed(function() {
                  i2.conn && (i2.conn.onclose = function() {
                  }, i2.conn = null), e3 && e3();
                });
              });
            } }, { key: "waitForBufferDone", value: function(e3) {
              var t2 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
              n2 !== 5 && this.conn && this.conn.bufferedAmount ? setTimeout(function() {
                t2.waitForBufferDone(e3, n2 + 1);
              }, 150 * n2) : e3();
            } }, { key: "waitForSocketClosed", value: function(e3) {
              var t2 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
              n2 !== 5 && this.conn && this.conn.readyState !== m ? setTimeout(function() {
                t2.waitForSocketClosed(e3, n2 + 1);
              }, 150 * n2) : e3();
            } }, { key: "onConnClose", value: function(e3) {
              this.hasLogger() && this.log("transport", "close", e3), this.triggerChanError(), clearTimeout(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function(t2) {
                return (0, r(t2, 2)[1])(e3);
              });
            } }, { key: "onConnError", value: function(e3) {
              this.hasLogger() && this.log("transport", e3), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function(t2) {
                return (0, r(t2, 2)[1])(e3);
              });
            } }, { key: "triggerChanError", value: function() {
              this.channels.forEach(function(e3) {
                e3.isErrored() || e3.isLeaving() || e3.isClosed() || e3.trigger(R);
              });
            } }, { key: "connectionState", value: function() {
              switch (this.conn && this.conn.readyState) {
                case p:
                  return "connecting";
                case v:
                  return "open";
                case y:
                  return "closing";
                default:
                  return "closed";
              }
            } }, { key: "isConnected", value: function() {
              return this.connectionState() === "open";
            } }, { key: "remove", value: function(e3) {
              this.off(e3.stateChangeRefs), this.channels = this.channels.filter(function(t2) {
                return t2.joinRef() !== e3.joinRef();
              });
            } }, { key: "off", value: function(e3) {
              for (var t2 in this.stateChangeCallbacks)
                this.stateChangeCallbacks[t2] = this.stateChangeCallbacks[t2].filter(function(t3) {
                  var n2 = r(t3, 1)[0];
                  return e3.indexOf(n2) === -1;
                });
            } }, { key: "channel", value: function(e3) {
              var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = new O(e3, t2, this);
              return this.channels.push(n2), n2;
            } }, { key: "push", value: function(e3) {
              var t2 = this;
              if (this.hasLogger()) {
                var n2 = e3.topic, i2 = e3.event, o2 = e3.payload, r2 = e3.ref, s2 = e3.join_ref;
                this.log("push", "".concat(n2, " ").concat(i2, " (").concat(s2, ", ").concat(r2, ")"), o2);
              }
              this.isConnected() ? this.encode(e3, function(e4) {
                return t2.conn.send(e4);
              }) : this.sendBuffer.push(function() {
                return t2.encode(e3, function(e4) {
                  return t2.conn.send(e4);
                });
              });
            } }, { key: "makeRef", value: function() {
              var e3 = this.ref + 1;
              return e3 === this.ref ? this.ref = 0 : this.ref = e3, this.ref.toString();
            } }, { key: "sendHeartbeat", value: function() {
              var e3 = this;
              this.pendingHeartbeatRef && !this.isConnected() || (this.pendingHeartbeatRef = this.makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef }), this.heartbeatTimer = setTimeout(function() {
                return e3.heartbeatTimeout();
              }, this.heartbeatIntervalMs));
            } }, { key: "abnormalClose", value: function(e3) {
              this.closeWasClean = false, this.isConnected() && this.conn.close(1e3, e3);
            } }, { key: "flushSendBuffer", value: function() {
              this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function(e3) {
                return e3();
              }), this.sendBuffer = []);
            } }, { key: "onConnMessage", value: function(e3) {
              var t2 = this;
              this.decode(e3.data, function(e4) {
                var n2 = e4.topic, i2 = e4.event, o2 = e4.payload, s2 = e4.ref, a2 = e4.join_ref;
                s2 && s2 === t2.pendingHeartbeatRef && (clearTimeout(t2.heartbeatTimer), t2.pendingHeartbeatRef = null, setTimeout(function() {
                  return t2.sendHeartbeat();
                }, t2.heartbeatIntervalMs)), t2.hasLogger() && t2.log("receive", "".concat(o2.status || "", " ").concat(n2, " ").concat(i2, " ").concat(s2 && "(" + s2 + ")" || ""), o2);
                for (var c2 = 0; c2 < t2.channels.length; c2++) {
                  var u2 = t2.channels[c2];
                  u2.isMember(n2, i2, o2, a2) && u2.trigger(i2, o2, s2, a2);
                }
                for (var h2 = 0; h2 < t2.stateChangeCallbacks.message.length; h2++) {
                  (0, r(t2.stateChangeCallbacks.message[h2], 2)[1])(e4);
                }
              });
            } }, { key: "leaveOpenTopic", value: function(e3) {
              var t2 = this.channels.find(function(t3) {
                return t3.topic === e3 && (t3.isJoined() || t3.isJoining());
              });
              t2 && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e3, '"')), t2.leave());
            } }]), e2;
          }(), U = function() {
            function e2(t2) {
              c(this, e2), this.endPoint = null, this.token = null, this.skipHeartbeat = true, this.onopen = function() {
              }, this.onerror = function() {
              }, this.onmessage = function() {
              }, this.onclose = function() {
              }, this.pollEndpoint = this.normalizeEndpoint(t2), this.readyState = p, this.poll();
            }
            return h(e2, [{ key: "normalizeEndpoint", value: function(e3) {
              return e3.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + L), "$1/" + A);
            } }, { key: "endpointURL", value: function() {
              return D.appendParams(this.pollEndpoint, { token: this.token });
            } }, { key: "closeAndRetry", value: function() {
              this.close(), this.readyState = p;
            } }, { key: "ontimeout", value: function() {
              this.onerror("timeout"), this.closeAndRetry();
            } }, { key: "poll", value: function() {
              var e3 = this;
              this.readyState !== v && this.readyState !== p || D.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function(t2) {
                if (t2) {
                  var n2 = t2.status, i2 = t2.token, o2 = t2.messages;
                  e3.token = i2;
                } else
                  n2 = 0;
                switch (n2) {
                  case 200:
                    o2.forEach(function(t3) {
                      setTimeout(function() {
                        e3.onmessage({ data: t3 });
                      }, 0);
                    }), e3.poll();
                    break;
                  case 204:
                    e3.poll();
                    break;
                  case 410:
                    e3.readyState = v, e3.onopen(), e3.poll();
                    break;
                  case 403:
                    e3.onerror(), e3.close();
                    break;
                  case 0:
                  case 500:
                    e3.onerror(), e3.closeAndRetry();
                    break;
                  default:
                    throw new Error("unhandled poll status ".concat(n2));
                }
              });
            } }, { key: "send", value: function(e3) {
              var t2 = this;
              D.request("POST", this.endpointURL(), "application/json", e3, this.timeout, this.onerror.bind(this, "timeout"), function(e4) {
                e4 && e4.status === 200 || (t2.onerror(e4 && e4.status), t2.closeAndRetry());
              });
            } }, { key: "close", value: function(e3, t2) {
              this.readyState = m, this.onclose();
            } }]), e2;
          }(), D = function() {
            function e2() {
              c(this, e2);
            }
            return h(e2, null, [{ key: "request", value: function(e3, t2, n2, i2, o2, r2, s2) {
              if (d.XDomainRequest) {
                var a2 = new XDomainRequest();
                this.xdomainRequest(a2, e3, t2, i2, o2, r2, s2);
              } else {
                var c2 = new d.XMLHttpRequest();
                this.xhrRequest(c2, e3, t2, n2, i2, o2, r2, s2);
              }
            } }, { key: "xdomainRequest", value: function(e3, t2, n2, i2, o2, r2, s2) {
              var a2 = this;
              e3.timeout = o2, e3.open(t2, n2), e3.onload = function() {
                var t3 = a2.parseJSON(e3.responseText);
                s2 && s2(t3);
              }, r2 && (e3.ontimeout = r2), e3.onprogress = function() {
              }, e3.send(i2);
            } }, { key: "xhrRequest", value: function(e3, t2, n2, i2, o2, r2, s2, a2) {
              var c2 = this;
              e3.open(t2, n2, true), e3.timeout = r2, e3.setRequestHeader("Content-Type", i2), e3.onerror = function() {
                a2 && a2(null);
              }, e3.onreadystatechange = function() {
                if (e3.readyState === c2.states.complete && a2) {
                  var t3 = c2.parseJSON(e3.responseText);
                  a2(t3);
                }
              }, s2 && (e3.ontimeout = s2), e3.send(o2);
            } }, { key: "parseJSON", value: function(e3) {
              if (!e3 || e3 === "")
                return null;
              try {
                return JSON.parse(e3);
              } catch (t2) {
                return console && console.log("failed to parse JSON response", e3), null;
              }
            } }, { key: "serialize", value: function(e3, t2) {
              var n2 = [];
              for (var i2 in e3)
                if (e3.hasOwnProperty(i2)) {
                  var r2 = t2 ? "".concat(t2, "[").concat(i2, "]") : i2, s2 = e3[i2];
                  o(s2) === "object" ? n2.push(this.serialize(s2, r2)) : n2.push(encodeURIComponent(r2) + "=" + encodeURIComponent(s2));
                }
              return n2.join("&");
            } }, { key: "appendParams", value: function(e3, t2) {
              if (Object.keys(t2).length === 0)
                return e3;
              var n2 = e3.match(/\?/) ? "&" : "?";
              return "".concat(e3).concat(n2).concat(this.serialize(t2));
            } }]), e2;
          }();
          D.states = { complete: 4 };
          var M = function() {
            function e2(t2) {
              var n2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              c(this, e2);
              var o2 = i2.events || { state: "presence_state", diff: "presence_diff" };
              this.state = {}, this.pendingDiffs = [], this.channel = t2, this.joinRef = null, this.caller = { onJoin: function() {
              }, onLeave: function() {
              }, onSync: function() {
              } }, this.channel.on(o2.state, function(t3) {
                var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
                n2.joinRef = n2.channel.joinRef(), n2.state = e2.syncState(n2.state, t3, o3, r2), n2.pendingDiffs.forEach(function(t4) {
                  n2.state = e2.syncDiff(n2.state, t4, o3, r2);
                }), n2.pendingDiffs = [], s2();
              }), this.channel.on(o2.diff, function(t3) {
                var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
                n2.inPendingSyncState() ? n2.pendingDiffs.push(t3) : (n2.state = e2.syncDiff(n2.state, t3, o3, r2), s2());
              });
            }
            return h(e2, [{ key: "onJoin", value: function(e3) {
              this.caller.onJoin = e3;
            } }, { key: "onLeave", value: function(e3) {
              this.caller.onLeave = e3;
            } }, { key: "onSync", value: function(e3) {
              this.caller.onSync = e3;
            } }, { key: "list", value: function(t2) {
              return e2.list(this.state, t2);
            } }, { key: "inPendingSyncState", value: function() {
              return !this.joinRef || this.joinRef !== this.channel.joinRef();
            } }], [{ key: "syncState", value: function(e3, t2, n2, i2) {
              var o2 = this, r2 = this.clone(e3), s2 = {}, a2 = {};
              return this.map(r2, function(e4, n3) {
                t2[e4] || (a2[e4] = n3);
              }), this.map(t2, function(e4, t3) {
                var n3 = r2[e4];
                if (n3) {
                  var i3 = t3.metas.map(function(e5) {
                    return e5.phx_ref;
                  }), c2 = n3.metas.map(function(e5) {
                    return e5.phx_ref;
                  }), u2 = t3.metas.filter(function(e5) {
                    return c2.indexOf(e5.phx_ref) < 0;
                  }), h2 = n3.metas.filter(function(e5) {
                    return i3.indexOf(e5.phx_ref) < 0;
                  });
                  u2.length > 0 && (s2[e4] = t3, s2[e4].metas = u2), h2.length > 0 && (a2[e4] = o2.clone(n3), a2[e4].metas = h2);
                } else
                  s2[e4] = t3;
              }), this.syncDiff(r2, { joins: s2, leaves: a2 }, n2, i2);
            } }, { key: "syncDiff", value: function(e3, t2, n2, o2) {
              var r2 = t2.joins, s2 = t2.leaves, a2 = this.clone(e3);
              return n2 || (n2 = function() {
              }), o2 || (o2 = function() {
              }), this.map(r2, function(e4, t3) {
                var o3 = a2[e4];
                if (a2[e4] = t3, o3) {
                  var r3, s3 = a2[e4].metas.map(function(e5) {
                    return e5.phx_ref;
                  }), c2 = o3.metas.filter(function(e5) {
                    return s3.indexOf(e5.phx_ref) < 0;
                  });
                  (r3 = a2[e4].metas).unshift.apply(r3, i(c2));
                }
                n2(e4, o3, t3);
              }), this.map(s2, function(e4, t3) {
                var n3 = a2[e4];
                if (n3) {
                  var i2 = t3.metas.map(function(e5) {
                    return e5.phx_ref;
                  });
                  n3.metas = n3.metas.filter(function(e5) {
                    return i2.indexOf(e5.phx_ref) < 0;
                  }), o2(e4, n3, t3), n3.metas.length === 0 && delete a2[e4];
                }
              }), a2;
            } }, { key: "list", value: function(e3, t2) {
              return t2 || (t2 = function(e4, t3) {
                return t3;
              }), this.map(e3, function(e4, n2) {
                return t2(e4, n2);
              });
            } }, { key: "map", value: function(e3, t2) {
              return Object.getOwnPropertyNames(e3).map(function(n2) {
                return t2(n2, e3[n2]);
              });
            } }, { key: "clone", value: function(e3) {
              return JSON.parse(JSON.stringify(e3));
            } }]), e2;
          }(), N = function() {
            function e2(t2, n2) {
              c(this, e2), this.callback = t2, this.timerCalc = n2, this.timer = null, this.tries = 0;
            }
            return h(e2, [{ key: "reset", value: function() {
              this.tries = 0, clearTimeout(this.timer);
            } }, { key: "scheduleTimeout", value: function() {
              var e3 = this;
              clearTimeout(this.timer), this.timer = setTimeout(function() {
                e3.tries = e3.tries + 1, e3.callback();
              }, this.timerCalc(this.tries + 1));
            } }]), e2;
          }();
        }]);
      });
    }
  });

  // node_modules/phoenix_live_view/priv/static/phoenix_live_view.js
  var require_phoenix_live_view = __commonJS({
    "node_modules/phoenix_live_view/priv/static/phoenix_live_view.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.phoenix_live_view = t() : e.phoenix_live_view = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function n(i) {
            if (t[i])
              return t[i].exports;
            var r = t[i] = { i, l: false, exports: {} };
            return e[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, i) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { configurable: false, enumerable: true, get: i });
          }, n.r = function(e2) {
            Object.defineProperty(e2, "__esModule", { value: true });
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 2);
        }([function(e, t, n) {
          "use strict";
          n.r(t);
          var i, r = 11;
          var o = "http://www.w3.org/1999/xhtml", a = typeof document == "undefined" ? void 0 : document, u = !!a && "content" in a.createElement("template"), s = !!a && a.createRange && "createContextualFragment" in a.createRange();
          function c(e2) {
            return e2 = e2.trim(), u ? function(e3) {
              var t2 = a.createElement("template");
              return t2.innerHTML = e3, t2.content.childNodes[0];
            }(e2) : s ? function(e3) {
              return i || (i = a.createRange()).selectNode(a.body), i.createContextualFragment(e3).childNodes[0];
            }(e2) : function(e3) {
              var t2 = a.createElement("body");
              return t2.innerHTML = e3, t2.childNodes[0];
            }(e2);
          }
          function l(e2, t2) {
            var n2, i2, r2 = e2.nodeName, o2 = t2.nodeName;
            return r2 === o2 || (n2 = r2.charCodeAt(0), i2 = o2.charCodeAt(0), n2 <= 90 && i2 >= 97 ? r2 === o2.toUpperCase() : i2 <= 90 && n2 >= 97 && o2 === r2.toUpperCase());
          }
          function d(e2, t2, n2) {
            e2[n2] !== t2[n2] && (e2[n2] = t2[n2], e2[n2] ? e2.setAttribute(n2, "") : e2.removeAttribute(n2));
          }
          var h = { OPTION: function(e2, t2) {
            var n2 = e2.parentNode;
            if (n2) {
              var i2 = n2.nodeName.toUpperCase();
              i2 === "OPTGROUP" && (i2 = (n2 = n2.parentNode) && n2.nodeName.toUpperCase()), i2 !== "SELECT" || n2.hasAttribute("multiple") || (e2.hasAttribute("selected") && !t2.selected && (e2.setAttribute("selected", "selected"), e2.removeAttribute("selected")), n2.selectedIndex = -1);
            }
            d(e2, t2, "selected");
          }, INPUT: function(e2, t2) {
            d(e2, t2, "checked"), d(e2, t2, "disabled"), e2.value !== t2.value && (e2.value = t2.value), t2.hasAttribute("value") || e2.removeAttribute("value");
          }, TEXTAREA: function(e2, t2) {
            var n2 = t2.value;
            e2.value !== n2 && (e2.value = n2);
            var i2 = e2.firstChild;
            if (i2) {
              var r2 = i2.nodeValue;
              if (r2 == n2 || !n2 && r2 == e2.placeholder)
                return;
              i2.nodeValue = n2;
            }
          }, SELECT: function(e2, t2) {
            if (!t2.hasAttribute("multiple")) {
              for (var n2, i2, r2 = -1, o2 = 0, a2 = e2.firstChild; a2; )
                if ((i2 = a2.nodeName && a2.nodeName.toUpperCase()) === "OPTGROUP")
                  a2 = (n2 = a2).firstChild;
                else {
                  if (i2 === "OPTION") {
                    if (a2.hasAttribute("selected")) {
                      r2 = o2;
                      break;
                    }
                    o2++;
                  }
                  !(a2 = a2.nextSibling) && n2 && (a2 = n2.nextSibling, n2 = null);
                }
              e2.selectedIndex = r2;
            }
          } }, f = 1, v = 11, p = 3, g = 8;
          function m() {
          }
          function y(e2) {
            if (e2)
              return e2.getAttribute && e2.getAttribute("id") || e2.id;
          }
          var k = function(e2) {
            return function(t2, n2, i2) {
              if (i2 || (i2 = {}), typeof n2 == "string")
                if (t2.nodeName === "#document" || t2.nodeName === "HTML" || t2.nodeName === "BODY") {
                  var r2 = n2;
                  (n2 = a.createElement("html")).innerHTML = r2;
                } else
                  n2 = c(n2);
              var u2 = i2.getNodeKey || y, s2 = i2.onBeforeNodeAdded || m, d2 = i2.onNodeAdded || m, k2 = i2.onBeforeElUpdated || m, b2 = i2.onElUpdated || m, w2 = i2.onBeforeNodeDiscarded || m, E2 = i2.onNodeDiscarded || m, S2 = i2.onBeforeElChildrenUpdated || m, A2 = i2.childrenOnly === true, x2 = Object.create(null), C2 = [];
              function P2(e3) {
                C2.push(e3);
              }
              function L2(e3, t3, n3) {
                w2(e3) !== false && (t3 && t3.removeChild(e3), E2(e3), function e4(t4, n4) {
                  if (t4.nodeType === f)
                    for (var i3 = t4.firstChild; i3; ) {
                      var r3 = void 0;
                      n4 && (r3 = u2(i3)) ? P2(r3) : (E2(i3), i3.firstChild && e4(i3, n4)), i3 = i3.nextSibling;
                    }
                }(e3, n3));
              }
              function I2(e3) {
                d2(e3);
                for (var t3 = e3.firstChild; t3; ) {
                  var n3 = t3.nextSibling, i3 = u2(t3);
                  if (i3) {
                    var r3 = x2[i3];
                    r3 && l(t3, r3) ? (t3.parentNode.replaceChild(r3, t3), T2(r3, t3)) : I2(t3);
                  } else
                    I2(t3);
                  t3 = n3;
                }
              }
              function T2(t3, n3, i3) {
                var r3 = u2(n3);
                if (r3 && delete x2[r3], !i3) {
                  if (k2(t3, n3) === false)
                    return;
                  if (e2(t3, n3), b2(t3), S2(t3, n3) === false)
                    return;
                }
                t3.nodeName !== "TEXTAREA" ? function(e3, t4) {
                  var n4, i4, r4, o2, c2, d3 = t4.firstChild, v2 = e3.firstChild;
                  e:
                    for (; d3; ) {
                      for (o2 = d3.nextSibling, n4 = u2(d3); v2; ) {
                        if (r4 = v2.nextSibling, d3.isSameNode && d3.isSameNode(v2)) {
                          d3 = o2, v2 = r4;
                          continue e;
                        }
                        i4 = u2(v2);
                        var m2 = v2.nodeType, y2 = void 0;
                        if (m2 === d3.nodeType && (m2 === f ? (n4 ? n4 !== i4 && ((c2 = x2[n4]) ? r4 === c2 ? y2 = false : (e3.insertBefore(c2, v2), i4 ? P2(i4) : L2(v2, e3, true), v2 = c2) : y2 = false) : i4 && (y2 = false), (y2 = y2 !== false && l(v2, d3)) && T2(v2, d3)) : m2 !== p && m2 != g || (y2 = true, v2.nodeValue !== d3.nodeValue && (v2.nodeValue = d3.nodeValue))), y2) {
                          d3 = o2, v2 = r4;
                          continue e;
                        }
                        i4 ? P2(i4) : L2(v2, e3, true), v2 = r4;
                      }
                      if (n4 && (c2 = x2[n4]) && l(c2, d3))
                        e3.appendChild(c2), T2(c2, d3);
                      else {
                        var k3 = s2(d3);
                        k3 !== false && (k3 && (d3 = k3), d3.actualize && (d3 = d3.actualize(e3.ownerDocument || a)), e3.appendChild(d3), I2(d3));
                      }
                      d3 = o2, v2 = r4;
                    }
                  !function(e4, t5, n5) {
                    for (; t5; ) {
                      var i5 = t5.nextSibling;
                      (n5 = u2(t5)) ? P2(n5) : L2(t5, e4, true), t5 = i5;
                    }
                  }(e3, v2, i4);
                  var b3 = h[e3.nodeName];
                  b3 && b3(e3, t4);
                }(t3, n3) : h.TEXTAREA(t3, n3);
              }
              !function e3(t3) {
                if (t3.nodeType === f || t3.nodeType === v)
                  for (var n3 = t3.firstChild; n3; ) {
                    var i3 = u2(n3);
                    i3 && (x2[i3] = n3), e3(n3), n3 = n3.nextSibling;
                  }
              }(t2);
              var D2 = t2, _2 = D2.nodeType, N2 = n2.nodeType;
              if (!A2) {
                if (_2 === f)
                  N2 === f ? l(t2, n2) || (E2(t2), D2 = function(e3, t3) {
                    for (var n3 = e3.firstChild; n3; ) {
                      var i3 = n3.nextSibling;
                      t3.appendChild(n3), n3 = i3;
                    }
                    return t3;
                  }(t2, function(e3, t3) {
                    return t3 && t3 !== o ? a.createElementNS(t3, e3) : a.createElement(e3);
                  }(n2.nodeName, n2.namespaceURI))) : D2 = n2;
                else if (_2 === p || _2 === g) {
                  if (N2 === _2)
                    return D2.nodeValue !== n2.nodeValue && (D2.nodeValue = n2.nodeValue), D2;
                  D2 = n2;
                }
              }
              if (D2 === n2)
                E2(t2);
              else {
                if (n2.isSameNode && n2.isSameNode(D2))
                  return;
                if (T2(D2, n2, A2), C2)
                  for (var R2 = 0, O2 = C2.length; R2 < O2; R2++) {
                    var j2 = x2[C2[R2]];
                    j2 && L2(j2, j2.parentNode, false);
                  }
              }
              return !A2 && D2 !== t2 && t2.parentNode && (D2.actualize && (D2 = D2.actualize(t2.ownerDocument || a)), t2.parentNode.replaceChild(D2, t2)), D2;
            };
          }(function(e2, t2) {
            var n2, i2, o2, a2, u2 = t2.attributes;
            if (t2.nodeType !== r && e2.nodeType !== r) {
              for (var s2 = u2.length - 1; s2 >= 0; s2--)
                i2 = (n2 = u2[s2]).name, o2 = n2.namespaceURI, a2 = n2.value, o2 ? (i2 = n2.localName || i2, e2.getAttributeNS(o2, i2) !== a2 && (n2.prefix === "xmlns" && (i2 = n2.name), e2.setAttributeNS(o2, i2, a2))) : e2.getAttribute(i2) !== a2 && e2.setAttribute(i2, a2);
              for (var c2 = e2.attributes, l2 = c2.length - 1; l2 >= 0; l2--)
                i2 = (n2 = c2[l2]).name, (o2 = n2.namespaceURI) ? (i2 = n2.localName || i2, t2.hasAttributeNS(o2, i2) || e2.removeAttributeNS(o2, i2)) : t2.hasAttribute(i2) || e2.removeAttribute(i2);
            }
          });
          function b(e2) {
            return L(e2) || E(e2) || I(e2) || P();
          }
          function w(e2) {
            return function(e3) {
              if (Array.isArray(e3))
                return T(e3);
            }(e2) || E(e2) || I(e2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function E(e2) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(e2))
              return Array.from(e2);
          }
          function S(e2, t2) {
            var n2 = Object.keys(e2);
            if (Object.getOwnPropertySymbols) {
              var i2 = Object.getOwnPropertySymbols(e2);
              t2 && (i2 = i2.filter(function(t3) {
                return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
              })), n2.push.apply(n2, i2);
            }
            return n2;
          }
          function A(e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var n2 = arguments[t2] != null ? arguments[t2] : {};
              t2 % 2 ? S(Object(n2), true).forEach(function(t3) {
                x(e2, t3, n2[t3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : S(Object(n2)).forEach(function(t3) {
                Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
              });
            }
            return e2;
          }
          function x(e2, t2, n2) {
            return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
          }
          function C(e2, t2) {
            return L(e2) || function(e3, t3) {
              if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
                return;
              var n2 = [], i2 = true, r2 = false, o2 = void 0;
              try {
                for (var a2, u2 = e3[Symbol.iterator](); !(i2 = (a2 = u2.next()).done) && (n2.push(a2.value), !t3 || n2.length !== t3); i2 = true)
                  ;
              } catch (e4) {
                r2 = true, o2 = e4;
              } finally {
                try {
                  i2 || u2.return == null || u2.return();
                } finally {
                  if (r2)
                    throw o2;
                }
              }
              return n2;
            }(e2, t2) || I(e2, t2) || P();
          }
          function P() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function L(e2) {
            if (Array.isArray(e2))
              return e2;
          }
          function I(e2, t2) {
            if (e2) {
              if (typeof e2 == "string")
                return T(e2, t2);
              var n2 = Object.prototype.toString.call(e2).slice(8, -1);
              return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? T(e2, t2) : void 0;
            }
          }
          function T(e2, t2) {
            (t2 == null || t2 > e2.length) && (t2 = e2.length);
            for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++)
              i2[n2] = e2[n2];
            return i2;
          }
          function D(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          function _(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          function N(e2, t2, n2) {
            return t2 && _(e2.prototype, t2), n2 && _(e2, n2), e2;
          }
          function R(e2) {
            "@babel/helpers - typeof";
            return (R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          n.d(t, "debug", function() {
            return X;
          }), n.d(t, "Rendered", function() {
            return se;
          }), n.d(t, "LiveSocket", function() {
            return ce;
          }), n.d(t, "Browser", function() {
            return le;
          }), n.d(t, "DOM", function() {
            return de;
          }), n.d(t, "View", function() {
            return ve;
          });
          var O = [1e3, 3e3], j = "data-phx-view", H = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"], M = "data-phx-component", F = "data-phx-ref", U = "data-phx-upload-ref", B = "[".concat(j, "]"), J = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"], V = ["checkbox", "radio"], W = 1, q = "phx-", z = { debounce: 300, throttle: 300 }, K = function(e2, t2) {
            return console.error && console.error(e2, t2);
          };
          var X = function(e2, t2, n2, i2) {
            e2.liveSocket.isDebugEnabled() && console.log("".concat(e2.id, " ").concat(t2, ": ").concat(n2, " - "), i2);
          }, $ = function(e2) {
            return typeof e2 == "function" ? e2 : function() {
              return e2;
            };
          }, G = function(e2) {
            return JSON.parse(JSON.stringify(e2));
          }, Y = function(e2, t2, n2) {
            do {
              if (e2.matches("[".concat(t2, "]")))
                return e2;
              e2 = e2.parentElement || e2.parentNode;
            } while (e2 !== null && e2.nodeType === 1 && !(n2 && n2.isSameNode(e2) || e2.matches(B)));
            return null;
          }, Q = function(e2) {
            return e2 !== null && R(e2) === "object" && !(e2 instanceof Array);
          }, Z = function(e2) {
            for (var t2 in e2)
              return false;
            return true;
          }, ee = function(e2, t2) {
            return e2 && t2(e2);
          }, te = function() {
            function e2(t2, n2, i2) {
              D(this, e2), this.ref = re.genFileRef(n2), this.fileEl = t2, this.file = n2, this.view = i2, this.meta = null, this._isCancelled = false, this._isDone = false, this._progress = 0, this._lastProgressSent = -1, this._onDone = function() {
              };
            }
            return N(e2, null, [{ key: "isActive", value: function(e3, t2) {
              var n2 = t2._phxRef === void 0, i2 = e3.getAttribute("data-phx-active-refs").split(",").indexOf(re.genFileRef(t2)) >= 0;
              return t2.size > 0 && (n2 || i2);
            } }, { key: "isPreflighted", value: function(e3, t2) {
              var n2 = e3.getAttribute("data-phx-preflighted-refs").split(",").indexOf(re.genFileRef(t2)) >= 0;
              return n2 && this.isActive(e3, t2);
            } }]), N(e2, [{ key: "metadata", value: function() {
              return this.meta;
            } }, { key: "progress", value: function(e3) {
              var t2 = this;
              this._progress = Math.floor(e3), this._progress > this._lastProgressSent && (this._progress >= 100 ? (this._progress = 100, this._lastProgressSent = 100, this._isDone = true, this.view.pushFileProgress(this.fileEl, this.ref, 100, function() {
                re.untrackFile(t2.fileEl, t2.file), t2._onDone();
              })) : (this._lastProgressSent = this._progress, this.view.pushFileProgress(this.fileEl, this.ref, this._progress)));
            } }, { key: "cancel", value: function() {
              this._isCancelled = true, this._isDone = true, this._onDone();
            } }, { key: "isDone", value: function() {
              return this._isDone;
            } }, { key: "error", value: function() {
              var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "failed";
              re.clearFiles(this.fileEl), this.view.pushFileProgress(this.fileEl, this.ref, { error: e3 });
            } }, { key: "onDone", value: function(e3) {
              this._onDone = e3;
            } }, { key: "toPreflightPayload", value: function() {
              return { last_modified: this.file.lastModified, name: this.file.name, size: this.file.size, type: this.file.type, ref: this.ref };
            } }, { key: "uploader", value: function(e3) {
              if (this.meta.uploader) {
                var t2 = e3[this.meta.uploader] || K("no uploader configured for ".concat(this.meta.uploader));
                return { name: this.meta.uploader, callback: t2 };
              }
              return { name: "channel", callback: oe };
            } }, { key: "zipPostFlight", value: function(e3) {
              this.meta = e3.entries[this.ref], this.meta || K("no preflight upload response returned with ref ".concat(this.ref), { input: this.fileEl, response: e3 });
            } }]), e2;
          }(), ne = { LiveFileUpload: { preflightedRefs: function() {
            return this.el.getAttribute("data-phx-preflighted-refs");
          }, mounted: function() {
            this.preflightedWas = this.preflightedRefs();
          }, updated: function() {
            var e2 = this.preflightedRefs();
            this.preflightedWas !== e2 && (this.preflightedWas = e2, e2 === "" && this.__view.cancelSubmit(this.el.form));
          } } };
          ne.LiveImgPreview = { mounted: function() {
            var e2 = this;
            this.ref = this.el.getAttribute("data-phx-entry-ref"), this.inputEl = document.getElementById(this.el.getAttribute(U)), re.getEntryDataURL(this.inputEl, this.ref, function(t2) {
              return e2.el.src = t2;
            });
          } };
          var ie = 0, re = function() {
            function e2(t2, n2, i2) {
              D(this, e2), this.view = n2, this.onComplete = i2, this._entries = Array.from(e2.filesAwaitingPreflight(t2) || []).map(function(e3) {
                return new te(t2, e3, n2);
              }), this.numEntriesInProgress = this._entries.length;
            }
            return N(e2, null, [{ key: "genFileRef", value: function(e3) {
              var t2 = e3._phxRef;
              return t2 !== void 0 ? t2 : (e3._phxRef = (ie++).toString(), e3._phxRef);
            } }, { key: "getEntryDataURL", value: function(e3, t2, n2) {
              var i2 = this, r2 = this.activeFiles(e3).find(function(e4) {
                return i2.genFileRef(e4) === t2;
              }), o2 = new FileReader();
              o2.onload = function(e4) {
                return n2(e4.target.result);
              }, o2.readAsDataURL(r2);
            } }, { key: "hasUploadsInProgress", value: function(e3) {
              var t2 = 0;
              return de.findUploadInputs(e3).forEach(function(e4) {
                e4.getAttribute("data-phx-preflighted-refs") !== e4.getAttribute("data-phx-done-refs") && t2++;
              }), t2 > 0;
            } }, { key: "serializeUploads", value: function(e3) {
              var t2 = this, n2 = {};
              return this.activeFiles(e3, "serialize").forEach(function(i2) {
                var r2 = { path: e3.name }, o2 = e3.getAttribute(U);
                n2[o2] = n2[o2] || [], r2.ref = t2.genFileRef(i2), r2.name = i2.name, r2.type = i2.type, r2.size = i2.size, n2[o2].push(r2);
              }), n2;
            } }, { key: "clearFiles", value: function(e3) {
              e3.value = null, e3.removeAttribute(U), de.putPrivate(e3, "files", []);
            } }, { key: "untrackFile", value: function(e3, t2) {
              de.putPrivate(e3, "files", de.private(e3, "files").filter(function(e4) {
                return !Object.is(e4, t2);
              }));
            } }, { key: "trackFiles", value: function(e3, t2) {
              var n2 = this;
              if (e3.getAttribute("multiple") !== null) {
                var i2 = t2.filter(function(t3) {
                  return !n2.activeFiles(e3).find(function(e4) {
                    return Object.is(e4, t3);
                  });
                });
                de.putPrivate(e3, "files", this.activeFiles(e3).concat(i2)), e3.value = null;
              } else
                de.putPrivate(e3, "files", t2);
            } }, { key: "activeFileInputs", value: function(e3) {
              var t2 = this, n2 = de.findUploadInputs(e3);
              return Array.from(n2).filter(function(e4) {
                return e4.files && t2.activeFiles(e4).length > 0;
              });
            } }, { key: "activeFiles", value: function(e3) {
              return (de.private(e3, "files") || []).filter(function(t2) {
                return te.isActive(e3, t2);
              });
            } }, { key: "inputsAwaitingPreflight", value: function(e3) {
              var t2 = this, n2 = de.findUploadInputs(e3);
              return Array.from(n2).filter(function(e4) {
                return t2.filesAwaitingPreflight(e4).length > 0;
              });
            } }, { key: "filesAwaitingPreflight", value: function(e3) {
              return this.activeFiles(e3).filter(function(t2) {
                return !te.isPreflighted(e3, t2);
              });
            } }]), N(e2, [{ key: "entries", value: function() {
              return this._entries;
            } }, { key: "initAdapterUpload", value: function(e3, t2, n2) {
              var i2 = this;
              this._entries = this._entries.map(function(t3) {
                return t3.zipPostFlight(e3), t3.onDone(function() {
                  i2.numEntriesInProgress--, i2.numEntriesInProgress === 0 && i2.onComplete();
                }), t3;
              });
              var r2 = this._entries.reduce(function(e4, t3) {
                var i3 = t3.uploader(n2.uploaders), r3 = i3.name, o3 = i3.callback;
                return e4[r3] = e4[r3] || { callback: o3, entries: [] }, e4[r3].entries.push(t3), e4;
              }, {});
              for (var o2 in r2) {
                var a2 = r2[o2];
                (0, a2.callback)(a2.entries, t2, e3, n2);
              }
            } }]), e2;
          }(), oe = function(e2, t2, n2, i2) {
            e2.forEach(function(e3) {
              new ae(e3, n2.config.chunk_size, i2).upload();
            });
          }, ae = function() {
            function e2(t2, n2, i2) {
              D(this, e2), this.liveSocket = i2, this.entry = t2, this.offset = 0, this.chunkSize = n2, this.chunkTimer = null, this.uploadChannel = i2.channel("lvu:".concat(t2.ref), { token: t2.metadata() });
            }
            return N(e2, [{ key: "error", value: function(e3) {
              clearTimeout(this.chunkTimer), this.uploadChannel.leave(), this.entry.error(e3);
            } }, { key: "upload", value: function() {
              var e3 = this;
              this.uploadChannel.onError(function(t2) {
                return e3.error(t2);
              }), this.uploadChannel.join().receive("ok", function(t2) {
                return e3.readNextChunk();
              }).receive("error", function(t2) {
                return e3.error(t2);
              });
            } }, { key: "isDone", value: function() {
              return this.offset >= this.entry.file.size;
            } }, { key: "readNextChunk", value: function() {
              var e3 = this, t2 = new window.FileReader(), n2 = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
              t2.onload = function(t3) {
                if (t3.target.error !== null)
                  return K("Read error: " + t3.target.error);
                e3.offset += t3.target.result.byteLength, e3.pushChunk(t3.target.result);
              }, t2.readAsArrayBuffer(n2);
            } }, { key: "pushChunk", value: function(e3) {
              var t2 = this;
              this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", e3).receive("ok", function() {
                t2.entry.progress(t2.offset / t2.entry.file.size * 100), t2.isDone() || (t2.chunkTimer = setTimeout(function() {
                  return t2.readNextChunk();
                }, t2.liveSocket.getLatencySim() || 0));
              });
            } }]), e2;
          }(), ue = function(e2) {
            var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = new FormData(e2), i2 = [];
            n2.forEach(function(e3, t3, n3) {
              e3 instanceof File && i2.push(t3);
            }), i2.forEach(function(e3) {
              return n2.delete(e3);
            });
            var r2, o2 = new URLSearchParams(), a2 = function(e3) {
              if (typeof Symbol == "undefined" || e3[Symbol.iterator] == null) {
                if (Array.isArray(e3) || (e3 = I(e3))) {
                  var t3 = 0, n3 = function() {
                  };
                  return { s: n3, n: function() {
                    return t3 >= e3.length ? { done: true } : { done: false, value: e3[t3++] };
                  }, e: function(e4) {
                    throw e4;
                  }, f: n3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i3, r3, o3 = true, a3 = false;
              return { s: function() {
                i3 = e3[Symbol.iterator]();
              }, n: function() {
                var e4 = i3.next();
                return o3 = e4.done, e4;
              }, e: function(e4) {
                a3 = true, r3 = e4;
              }, f: function() {
                try {
                  o3 || i3.return == null || i3.return();
                } finally {
                  if (a3)
                    throw r3;
                }
              } };
            }(n2.entries());
            try {
              for (a2.s(); !(r2 = a2.n()).done; ) {
                var u2 = C(r2.value, 2), s2 = u2[0], c2 = u2[1];
                o2.append(s2, c2);
              }
            } catch (e3) {
              a2.e(e3);
            } finally {
              a2.f();
            }
            for (var l2 in t2)
              o2.append(l2, t2[l2]);
            return o2.toString();
          }, se = function() {
            function e2(t2, n2) {
              D(this, e2), this.viewId = t2, this.rendered = {}, this.mergeDiff(n2);
            }
            return N(e2, null, [{ key: "extract", value: function(e3) {
              var t2 = e3.r, n2 = e3.e, i2 = e3.t;
              return delete e3.r, delete e3.e, delete e3.t, { diff: e3, title: i2, reply: t2 || null, events: n2 || [] };
            } }]), N(e2, [{ key: "parentViewId", value: function() {
              return this.viewId;
            } }, { key: "toString", value: function(e3) {
              return this.recursiveToString(this.rendered, this.rendered.c, e3);
            } }, { key: "recursiveToString", value: function(e3) {
              var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e3.c, n2 = arguments.length > 2 ? arguments[2] : void 0, i2 = { buffer: "", components: t2, onlyCids: n2 = n2 ? new Set(n2) : null };
              return this.toOutputBuffer(e3, i2), i2.buffer;
            } }, { key: "componentCIDs", value: function(e3) {
              return Object.keys(e3.c || {}).map(function(e4) {
                return parseInt(e4);
              });
            } }, { key: "isComponentOnlyDiff", value: function(e3) {
              return !!e3.c && Object.keys(e3).length === 1;
            } }, { key: "getComponent", value: function(e3, t2) {
              return e3.c[t2];
            } }, { key: "mergeDiff", value: function(e3) {
              var t2 = e3.c, n2 = {};
              if (delete e3.c, this.rendered = this.mutableMerge(this.rendered, e3), this.rendered.c = this.rendered.c || {}, t2) {
                var i2 = this.rendered.c;
                for (var r2 in t2)
                  t2[r2] = this.cachedFindComponent(r2, t2[r2], i2, t2, n2);
                for (var o2 in t2)
                  i2[o2] = t2[o2];
                e3.c = t2;
              }
            } }, { key: "cachedFindComponent", value: function(e3, t2, n2, i2, r2) {
              if (r2[e3])
                return r2[e3];
              var o2, a2, u2, s2 = t2.s;
              return typeof s2 == "number" ? (a2 = (u2 = s2 > 0 ? this.cachedFindComponent(s2, i2[s2], n2, i2, r2) : n2[-s2]).s, (o2 = this.cloneMerge(u2, t2)).s = a2) : o2 = t2.s !== void 0 ? t2 : this.cloneMerge(n2[e3] || {}, t2), r2[e3] = o2, o2;
            } }, { key: "mutableMerge", value: function(e3, t2) {
              return t2.s !== void 0 ? t2 : (this.doMutableMerge(e3, t2), e3);
            } }, { key: "doMutableMerge", value: function(e3, t2) {
              for (var n2 in t2) {
                var i2 = t2[n2], r2 = e3[n2];
                Q(i2) && i2.s === void 0 && Q(r2) ? this.doMutableMerge(r2, i2) : e3[n2] = i2;
              }
            } }, { key: "cloneMerge", value: function(e3, t2) {
              var n2 = A(A({}, e3), t2);
              for (var i2 in n2) {
                var r2 = t2[i2], o2 = e3[i2];
                Q(r2) && r2.s === void 0 && Q(o2) && (n2[i2] = this.cloneMerge(o2, r2));
              }
              return n2;
            } }, { key: "componentToString", value: function(e3) {
              return this.recursiveCIDToString(this.rendered.c, e3);
            } }, { key: "pruneCIDs", value: function(e3) {
              var t2 = this;
              e3.forEach(function(e4) {
                return delete t2.rendered.c[e4];
              });
            } }, { key: "get", value: function() {
              return this.rendered;
            } }, { key: "isNewFingerprint", value: function() {
              return !!(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).s;
            } }, { key: "toOutputBuffer", value: function(e3, t2) {
              if (e3.d)
                return this.comprehensionToBuffer(e3, t2);
              var n2 = e3.s;
              t2.buffer += n2[0];
              for (var i2 = 1; i2 < n2.length; i2++)
                this.dynamicToBuffer(e3[i2 - 1], t2), t2.buffer += n2[i2];
            } }, { key: "comprehensionToBuffer", value: function(e3, t2) {
              for (var n2 = e3.d, i2 = e3.s, r2 = 0; r2 < n2.length; r2++) {
                var o2 = n2[r2];
                t2.buffer += i2[0];
                for (var a2 = 1; a2 < i2.length; a2++)
                  this.dynamicToBuffer(o2[a2 - 1], t2), t2.buffer += i2[a2];
              }
            } }, { key: "dynamicToBuffer", value: function(e3, t2) {
              typeof e3 == "number" ? t2.buffer += this.recursiveCIDToString(t2.components, e3, t2.onlyCids) : Q(e3) ? this.toOutputBuffer(e3, t2) : t2.buffer += e3;
            } }, { key: "recursiveCIDToString", value: function(e3, t2, n2) {
              var i2 = this, r2 = e3[t2] || K("no component for CID ".concat(t2), e3), o2 = document.createElement("template");
              o2.innerHTML = this.recursiveToString(r2, e3, n2);
              var a2 = o2.content, u2 = n2 && !n2.has(t2), s2 = C(Array.from(a2.childNodes).reduce(function(e4, n3, r3) {
                var a3 = C(e4, 2), s3 = a3[0], c3 = a3[1];
                return n3.nodeType === Node.ELEMENT_NODE ? n3.getAttribute(M) ? [s3, true] : (n3.setAttribute(M, t2), n3.id || (n3.id = "".concat(i2.parentViewId(), "-").concat(t2, "-").concat(r3)), u2 && (n3.setAttribute("data-phx-skip", ""), n3.innerHTML = ""), [true, c3]) : n3.nodeValue.trim() !== "" ? (K("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(n3.nodeValue.trim(), '"\n\n') + "within:\n", o2.innerHTML.trim()), n3.replaceWith(i2.createSpan(n3.nodeValue, t2)), [true, c3]) : (n3.remove(), [s3, c3]);
              }, [false, false]), 2), c2 = s2[0], l2 = s2[1];
              return c2 || l2 ? !c2 && l2 ? (K("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", o2.innerHTML.trim()), o2.innerHTML) : o2.innerHTML : (K("expected at least one HTML element tag inside a component, but the component is empty:\n", o2.innerHTML.trim()), this.createSpan("", t2).outerHTML);
            } }, { key: "createSpan", value: function(e3, t2) {
              var n2 = document.createElement("span");
              return n2.innerText = e3, n2.setAttribute(M, t2), n2;
            } }]), e2;
          }(), ce = function() {
            function e2(t2, n2) {
              var i2 = this, r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              if (D(this, e2), this.unloaded = false, !n2 || n2.constructor.name === "Object")
                throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
              this.socket = new n2(t2, r2), this.bindingPrefix = r2.bindingPrefix || q, this.opts = r2, this.params = $(r2.params || {}), this.viewLogger = r2.viewLogger, this.metadataCallbacks = r2.metadata || {}, this.defaults = Object.assign(G(z), r2.defaults || {}), this.activeElement = null, this.prevActive = null, this.silenced = false, this.main = null, this.linkRef = 1, this.roots = {}, this.href = window.location.href, this.pendingLink = null, this.currentLocation = G(window.location), this.hooks = r2.hooks || {}, this.uploaders = r2.uploaders || {}, this.loaderTimeout = r2.loaderTimeout || W, this.localStorage = r2.localStorage || window.localStorage, this.sessionStorage = r2.sessionStorage || window.sessionStorage, this.boundTopLevelEvents = false, this.domCallbacks = Object.assign({ onNodeAdded: $(), onBeforeElUpdated: $() }, r2.dom || {}), window.addEventListener("pagehide", function(e3) {
                i2.unloaded = true;
              }), this.socket.onOpen(function() {
                i2.isUnloaded() && window.location.reload();
              });
            }
            return N(e2, [{ key: "isProfileEnabled", value: function() {
              return this.sessionStorage.getItem("phx:live-socket:profiling") === "true";
            } }, { key: "isDebugEnabled", value: function() {
              return this.sessionStorage.getItem("phx:live-socket:debug") === "true";
            } }, { key: "enableDebug", value: function() {
              this.sessionStorage.setItem("phx:live-socket:debug", "true");
            } }, { key: "enableProfiling", value: function() {
              this.sessionStorage.setItem("phx:live-socket:profiling", "true");
            } }, { key: "disableDebug", value: function() {
              this.sessionStorage.removeItem("phx:live-socket:debug");
            } }, { key: "disableProfiling", value: function() {
              this.sessionStorage.removeItem("phx:live-socket:profiling");
            } }, { key: "enableLatencySim", value: function(e3) {
              this.enableDebug(), console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"), this.sessionStorage.setItem("phx:live-socket:latency-sim", e3);
            } }, { key: "disableLatencySim", value: function() {
              this.sessionStorage.removeItem("phx:live-socket:latency-sim");
            } }, { key: "getLatencySim", value: function() {
              var e3 = this.sessionStorage.getItem("phx:live-socket:latency-sim");
              return e3 ? parseInt(e3) : null;
            } }, { key: "getSocket", value: function() {
              return this.socket;
            } }, { key: "connect", value: function() {
              var e3 = this, t2 = function() {
                e3.joinRootViews() && (e3.bindTopLevelEvents(), e3.socket.connect());
              };
              ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t2() : document.addEventListener("DOMContentLoaded", function() {
                return t2();
              });
            } }, { key: "disconnect", value: function(e3) {
              this.socket.disconnect(e3);
            } }, { key: "triggerDOM", value: function(e3, t2) {
              var n2;
              (n2 = this.domCallbacks)[e3].apply(n2, w(t2));
            } }, { key: "time", value: function(e3, t2) {
              if (!this.isProfileEnabled() || !console.time)
                return t2();
              console.time(e3);
              var n2 = t2();
              return console.timeEnd(e3), n2;
            } }, { key: "log", value: function(e3, t2, n2) {
              if (this.viewLogger) {
                var i2 = C(n2(), 2), r2 = i2[0], o2 = i2[1];
                this.viewLogger(e3, t2, r2, o2);
              } else if (this.isDebugEnabled()) {
                var a2 = C(n2(), 2), u2 = a2[0], s2 = a2[1];
                X(e3, t2, u2, s2);
              }
            } }, { key: "onChannel", value: function(e3, t2, n2) {
              var i2 = this;
              e3.on(t2, function(e4) {
                var t3 = i2.getLatencySim();
                t3 ? (console.log("simulating ".concat(t3, "ms of latency from server to client")), setTimeout(function() {
                  return n2(e4);
                }, t3)) : n2(e4);
              });
            } }, { key: "wrapPush", value: function(e3, t2, n2) {
              var i2 = this, r2 = this.getLatencySim(), o2 = e3.joinCount;
              if (!r2)
                return t2.timeout ? n2().receive("timeout", function() {
                  e3.joinCount === o2 && i2.reloadWithJitter(e3, function() {
                    i2.log(e3, "timeout", function() {
                      return ["received timeout while communicating with server. Falling back to hard refresh for recovery"];
                    });
                  });
                }) : n2();
              console.log("simulating ".concat(r2, "ms of latency from client to server"));
              var a2 = { receives: [], receive: function(e4, t3) {
                this.receives.push([e4, t3]);
              } };
              return setTimeout(function() {
                a2.receives.reduce(function(e4, t3) {
                  var n3 = C(t3, 2), i3 = n3[0], r3 = n3[1];
                  return e4.receive(i3, r3);
                }, n2());
              }, r2), a2;
            } }, { key: "reloadWithJitter", value: function(e3, t2) {
              var n2 = this;
              e3.destroy(), this.disconnect();
              var i2 = O[0], r2 = O[1], o2 = Math.floor(Math.random() * (r2 - i2 + 1)) + i2, a2 = le.updateLocal(this.localStorage, e3.name(), "consecutive-reloads", 0, function(e4) {
                return e4 + 1;
              });
              t2 ? t2() : this.log(e3, "join", function() {
                return ["encountered ".concat(a2, " consecutive reloads")];
              }), a2 > 10 && (this.log(e3, "join", function() {
                return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")];
              }), o2 = 3e4), setTimeout(function() {
                n2.hasPendingLink() ? window.location = n2.pendingLink : window.location.reload();
              }, o2);
            } }, { key: "getHookCallbacks", value: function(e3) {
              return e3 && e3.startsWith("Phoenix.") ? ne[e3.split(".")[1]] : this.hooks[e3];
            } }, { key: "isUnloaded", value: function() {
              return this.unloaded;
            } }, { key: "isConnected", value: function() {
              return this.socket.isConnected();
            } }, { key: "getBindingPrefix", value: function() {
              return this.bindingPrefix;
            } }, { key: "binding", value: function(e3) {
              return "".concat(this.getBindingPrefix()).concat(e3);
            } }, { key: "channel", value: function(e3, t2) {
              return this.socket.channel(e3, t2);
            } }, { key: "joinRootViews", value: function() {
              var e3 = this, t2 = false;
              return de.all(document, "".concat(B, ":not([").concat("data-phx-parent-id", "])"), function(n2) {
                if (!e3.getRootById(n2.id)) {
                  var i2 = e3.joinRootView(n2, e3.getHref());
                  e3.root = e3.root || i2, n2.getAttribute("data-phx-main") && (e3.main = i2);
                }
                t2 = true;
              }), t2;
            } }, { key: "redirect", value: function(e3, t2) {
              this.disconnect(), le.redirect(e3, t2);
            } }, { key: "replaceMain", value: function(e3, t2) {
              var n2 = this, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : this.setPendingLink(e3), o2 = this.main.el;
              this.main.showLoader(this.loaderTimeout), this.main.destroy(), le.fetchPage(e3, function(a2, u2) {
                if (a2 !== 200)
                  return n2.redirect(e3);
                var s2 = document.createElement("template");
                s2.innerHTML = u2;
                var c2 = s2.content.childNodes[0];
                if (!c2 || !n2.isPhxView(c2))
                  return n2.redirect(e3);
                n2.joinRootView(c2, e3, t2, function(e4, t3) {
                  t3 === 1 && (n2.commitPendingLink(r2) ? (o2.replaceWith(e4.el), n2.main = e4, i2 && i2()) : e4.destroy());
                });
              });
            } }, { key: "isPhxView", value: function(e3) {
              return e3.getAttribute && e3.getAttribute(j) !== null;
            } }, { key: "joinRootView", value: function(e3, t2, n2, i2) {
              var r2 = new ve(e3, this, null, t2, n2);
              return this.roots[r2.id] = r2, r2.join(i2), r2;
            } }, { key: "owner", value: function(e3, t2) {
              var n2 = this, i2 = ee(e3.closest(B), function(e4) {
                return n2.getViewByEl(e4);
              });
              i2 && t2(i2);
            } }, { key: "withinOwners", value: function(e3, t2) {
              var n2 = this;
              this.owner(e3, function(i2) {
                var r2 = e3.getAttribute(n2.binding("target"));
                r2 === null ? t2(i2, e3) : i2.withinTargets(r2, t2);
              });
            } }, { key: "getViewByEl", value: function(e3) {
              var t2 = e3.getAttribute("data-phx-root-id");
              return ee(this.getRootById(t2), function(t3) {
                return t3.getDescendentByEl(e3);
              });
            } }, { key: "getRootById", value: function(e3) {
              return this.roots[e3];
            } }, { key: "destroyAllViews", value: function() {
              for (var e3 in this.roots)
                this.roots[e3].destroy(), delete this.roots[e3];
            } }, { key: "destroyViewByEl", value: function(e3) {
              var t2 = this.getRootById(e3.getAttribute("data-phx-root-id"));
              t2 && t2.destroyDescendent(e3.id);
            } }, { key: "setActiveElement", value: function(e3) {
              var t2 = this;
              if (this.activeElement !== e3) {
                this.activeElement = e3;
                var n2 = function() {
                  e3 === t2.activeElement && (t2.activeElement = null), e3.removeEventListener("mouseup", t2), e3.removeEventListener("touchend", t2);
                };
                e3.addEventListener("mouseup", n2), e3.addEventListener("touchend", n2);
              }
            } }, { key: "getActiveElement", value: function() {
              return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body;
            } }, { key: "dropActiveElement", value: function(e3) {
              this.prevActive && e3.ownsElement(this.prevActive) && (this.prevActive = null);
            } }, { key: "restorePreviouslyActiveFocus", value: function() {
              this.prevActive && this.prevActive !== document.body && this.prevActive.focus();
            } }, { key: "blurActiveElement", value: function() {
              this.prevActive = this.getActiveElement(), this.prevActive !== document.body && this.prevActive.blur();
            } }, { key: "bindTopLevelEvents", value: function() {
              var e3 = this;
              this.boundTopLevelEvents || (this.boundTopLevelEvents = true, document.body.addEventListener("click", function() {
              }), window.addEventListener("pageshow", function(t2) {
                t2.persisted && (e3.getSocket().disconnect(), e3.withPageLoading({ to: window.location.href, kind: "redirect" }), window.location.reload());
              }, true), this.bindClicks(), this.bindNav(), this.bindForms(), this.bind({ keyup: "keyup", keydown: "keydown" }, function(t2, n2, i2, r2, o2, a2, u2) {
                var s2 = r2.getAttribute(e3.binding("key")), c2 = t2.key && t2.key.toLowerCase();
                s2 && s2.toLowerCase() !== c2 || i2.pushKey(r2, o2, n2, a2, A({ key: t2.key }, e3.eventMeta(n2, t2, r2)));
              }), this.bind({ blur: "focusout", focus: "focusin" }, function(t2, n2, i2, r2, o2, a2, u2) {
                u2 || i2.pushEvent(n2, r2, o2, a2, e3.eventMeta(n2, t2, r2));
              }), this.bind({ blur: "blur", focus: "focus" }, function(t2, n2, i2, r2, o2, a2, u2) {
                u2 && !u2 !== "window" && i2.pushEvent(n2, r2, o2, a2, e3.eventMeta(n2, t2, r2));
              }), window.addEventListener("dragover", function(e4) {
                return e4.preventDefault();
              }), window.addEventListener("drop", function(t2) {
                t2.preventDefault();
                var n2 = ee(Y(t2.target, e3.binding("drop-target")), function(t3) {
                  return t3.getAttribute(e3.binding("drop-target"));
                }), i2 = n2 && document.getElementById(n2), r2 = Array.from(t2.dataTransfer.files || []);
                i2 && !i2.disabled && r2.length !== 0 && i2.files instanceof FileList && (re.trackFiles(i2, r2), i2.dispatchEvent(new Event("input", { bubbles: true })));
              }));
            } }, { key: "eventMeta", value: function(e3, t2, n2) {
              var i2 = this.metadataCallbacks[e3];
              return i2 ? i2(t2, n2) : {};
            } }, { key: "setPendingLink", value: function(e3) {
              return this.linkRef++, this.pendingLink = e3, this.linkRef;
            } }, { key: "commitPendingLink", value: function(e3) {
              return this.linkRef === e3 && (this.href = this.pendingLink, this.pendingLink = null, true);
            } }, { key: "getHref", value: function() {
              return this.href;
            } }, { key: "hasPendingLink", value: function() {
              return !!this.pendingLink;
            } }, { key: "bind", value: function(e3, t2) {
              var n2 = this, i2 = function(i3) {
                var r3 = e3[i3];
                n2.on(r3, function(e4) {
                  var r4 = n2.binding(i3), o2 = n2.binding("window-".concat(i3)), a2 = e4.target.getAttribute && e4.target.getAttribute(r4);
                  a2 ? n2.debounce(e4.target, e4, function() {
                    n2.withinOwners(e4.target, function(n3, r5) {
                      t2(e4, i3, n3, e4.target, r5, a2, null);
                    });
                  }) : de.all(document, "[".concat(o2, "]"), function(r5) {
                    var a3 = r5.getAttribute(o2);
                    n2.debounce(r5, e4, function() {
                      n2.withinOwners(r5, function(n3, o3) {
                        t2(e4, i3, n3, r5, o3, a3, "window");
                      });
                    });
                  });
                });
              };
              for (var r2 in e3)
                i2(r2);
            } }, { key: "bindClicks", value: function() {
              this.bindClick("click", "click", false), this.bindClick("mousedown", "capture-click", true);
            } }, { key: "bindClick", value: function(e3, t2, n2) {
              var i2 = this, r2 = this.binding(t2);
              window.addEventListener(e3, function(e4) {
                if (i2.isConnected()) {
                  var t3 = null, o2 = (t3 = n2 ? e4.target.matches("[".concat(r2, "]")) ? e4.target : e4.target.querySelector("[".concat(r2, "]")) : Y(e4.target, r2)) && t3.getAttribute(r2);
                  o2 && (t3.getAttribute("href") === "#" && e4.preventDefault(), i2.debounce(t3, e4, function() {
                    i2.withinOwners(t3, function(n3, r3) {
                      n3.pushEvent("click", t3, r3, o2, i2.eventMeta("click", e4, t3));
                    });
                  }));
                }
              }, n2);
            } }, { key: "bindNav", value: function() {
              var e3 = this;
              if (le.canPushState()) {
                history.scrollRestoration && (history.scrollRestoration = "manual");
                var t2 = null;
                window.addEventListener("scroll", function(e4) {
                  clearTimeout(t2), t2 = setTimeout(function() {
                    le.updateCurrentState(function(e5) {
                      return Object.assign(e5, { scroll: window.scrollY });
                    });
                  }, 100);
                }), window.addEventListener("popstate", function(t3) {
                  if (e3.registerNewLocation(window.location)) {
                    var n2 = t3.state || {}, i2 = n2.type, r2 = n2.id, o2 = n2.root, a2 = n2.scroll, u2 = window.location.href;
                    e3.main.isConnected() && i2 === "patch" && r2 === e3.main.id ? e3.main.pushLinkPatch(u2, null) : e3.replaceMain(u2, null, function() {
                      o2 && e3.replaceRootHistory(), typeof a2 == "number" && setTimeout(function() {
                        window.scrollTo(0, a2);
                      }, 0);
                    });
                  }
                }, false), window.addEventListener("click", function(t3) {
                  var n2 = Y(t3.target, "data-phx-link"), i2 = n2 && n2.getAttribute("data-phx-link"), r2 = t3.metaKey || t3.ctrlKey || t3.button === 1;
                  if (i2 && e3.isConnected() && e3.main && !r2) {
                    var o2 = n2.href, a2 = n2.getAttribute("data-phx-link-state");
                    if (t3.preventDefault(), e3.pendingLink !== o2)
                      if (i2 === "patch")
                        e3.pushHistoryPatch(o2, a2, n2);
                      else {
                        if (i2 !== "redirect")
                          throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i2));
                        e3.historyRedirect(o2, a2);
                      }
                  }
                }, false);
              }
            } }, { key: "withPageLoading", value: function(e3, t2) {
              de.dispatchEvent(window, "phx:page-loading-start", e3);
              var n2 = function() {
                return de.dispatchEvent(window, "phx:page-loading-stop", e3);
              };
              return t2 ? t2(n2) : n2;
            } }, { key: "pushHistoryPatch", value: function(e3, t2, n2) {
              var i2 = this;
              this.withPageLoading({ to: e3, kind: "patch" }, function(r2) {
                i2.main.pushLinkPatch(e3, n2, function(n3) {
                  i2.historyPatch(e3, t2, n3), r2();
                });
              });
            } }, { key: "historyPatch", value: function(e3, t2) {
              var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.setPendingLink(e3);
              this.commitPendingLink(n2) && (le.pushState(t2, { type: "patch", id: this.main.id }, e3), this.registerNewLocation(window.location));
            } }, { key: "historyRedirect", value: function(e3, t2, n2) {
              var i2 = this, r2 = window.scrollY;
              this.withPageLoading({ to: e3, kind: "redirect" }, function(o2) {
                i2.replaceMain(e3, n2, function() {
                  le.pushState(t2, { type: "redirect", id: i2.main.id, scroll: r2 }, e3), i2.registerNewLocation(window.location), o2();
                });
              });
            } }, { key: "replaceRootHistory", value: function() {
              le.pushState("replace", { root: true, type: "patch", id: this.main.id });
            } }, { key: "registerNewLocation", value: function(e3) {
              var t2 = this.currentLocation;
              return t2.pathname + t2.search !== e3.pathname + e3.search && (this.currentLocation = G(e3), true);
            } }, { key: "bindForms", value: function() {
              var e3 = this, t2 = 0;
              this.on("submit", function(t3) {
                var n3 = t3.target.getAttribute(e3.binding("submit"));
                n3 && (t3.preventDefault(), t3.target.disabled = true, e3.withinOwners(t3.target, function(e4, i3) {
                  return e4.submitForm(t3.target, i3, n3);
                }));
              }, false);
              for (var n2 = function() {
                var n3 = r2[i2];
                e3.on(n3, function(i3) {
                  var r3 = i3.target, o2 = r3.form && r3.form.getAttribute(e3.binding("change"));
                  if (o2 && (r3.type !== "number" || !r3.validity || !r3.validity.badInput)) {
                    var a2 = t2;
                    t2++;
                    var u2 = de.private(r3, "prev-iteration") || {}, s2 = u2.at, c2 = u2.type;
                    s2 === a2 - 1 && n3 !== c2 || (de.putPrivate(r3, "prev-iteration", { at: a2, type: n3 }), e3.debounce(r3, i3, function() {
                      e3.withinOwners(r3.form, function(t3, n4) {
                        de.putPrivate(r3, "phx-has-focused", true), de.isTextualInput(r3) || e3.setActiveElement(r3), t3.pushInput(r3, n4, o2, i3.target);
                      });
                    }));
                  }
                }, false);
              }, i2 = 0, r2 = ["change", "input"]; i2 < r2.length; i2++)
                n2();
            } }, { key: "debounce", value: function(e3, t2, n2) {
              var i2 = this.binding("debounce"), r2 = this.binding("throttle"), o2 = this.defaults.debounce.toString(), a2 = this.defaults.throttle.toString();
              de.debounce(e3, t2, i2, o2, r2, a2, n2);
            } }, { key: "silenceEvents", value: function(e3) {
              this.silenced = true, e3(), this.silenced = false;
            } }, { key: "on", value: function(e3, t2) {
              var n2 = this;
              window.addEventListener(e3, function(e4) {
                n2.silenced || t2(e4);
              });
            } }]), e2;
          }(), le = { canPushState: function() {
            return history.pushState !== void 0;
          }, dropLocal: function(e2, t2, n2) {
            return e2.removeItem(this.localKey(t2, n2));
          }, updateLocal: function(e2, t2, n2, i2, r2) {
            var o2 = this.getLocal(e2, t2, n2), a2 = this.localKey(t2, n2), u2 = o2 === null ? i2 : r2(o2);
            return e2.setItem(a2, JSON.stringify(u2)), u2;
          }, getLocal: function(e2, t2, n2) {
            return JSON.parse(e2.getItem(this.localKey(t2, n2)));
          }, fetchPage: function(e2, t2) {
            var n2 = new XMLHttpRequest();
            n2.open("GET", e2, true), n2.timeout = 3e4, n2.setRequestHeader("content-type", "text/html"), n2.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"), n2.setRequestHeader("x-requested-with", "live-link"), n2.onerror = function() {
              return t2(400);
            }, n2.ontimeout = function() {
              return t2(504);
            }, n2.onreadystatechange = function() {
              if (n2.readyState === 4) {
                var i2 = new URL(e2), r2 = i2.pathname + i2.search, o2 = ee(n2.getResponseHeader("x-response-url") || n2.responseURL, function(e3) {
                  return new URL(e3);
                }), a2 = o2 ? o2.pathname + o2.search : null;
                return n2.getResponseHeader("x-requested-with") !== "live-link" ? t2(400) : o2 === null || a2 != r2 ? t2(302) : n2.status !== 200 ? t2(n2.status) : void t2(200, n2.responseText);
              }
            }, n2.send();
          }, updateCurrentState: function(e2) {
            this.canPushState() && history.replaceState(e2(history.state || {}), "", window.location.href);
          }, pushState: function(e2, t2, n2) {
            if (this.canPushState()) {
              if (n2 !== window.location.href) {
                if (t2.type == "redirect" && t2.scroll) {
                  var i2 = history.state || {};
                  i2.scroll = t2.scroll, history.replaceState(i2, "", window.location.href);
                }
                delete t2.scroll, history[e2 + "State"](t2, "", n2 || null);
                var r2 = this.getHashTargetEl(window.location.hash);
                r2 ? r2.scrollIntoView() : t2.type === "redirect" && window.scroll(0, 0);
              }
            } else
              this.redirect(n2);
          }, setCookie: function(e2, t2) {
            document.cookie = "".concat(e2, "=").concat(t2);
          }, getCookie: function(e2) {
            return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e2, "s*=s*([^;]*).*$)|^.*$")), "$1");
          }, redirect: function(e2, t2) {
            t2 && le.setCookie("__phoenix_flash__", t2 + "; max-age=60000; path=/"), window.location = e2;
          }, localKey: function(e2, t2) {
            return "".concat(e2, "-").concat(t2);
          }, getHashTargetEl: function(e2) {
            var t2 = e2.toString().substring(1);
            if (t2 !== "")
              return document.getElementById(t2) || document.querySelector('a[name="'.concat(t2, '"]'));
          } }, de = { byId: function(e2) {
            return document.getElementById(e2) || K("no id found for ".concat(e2));
          }, removeClass: function(e2, t2) {
            e2.classList.remove(t2), e2.classList.length === 0 && e2.removeAttribute("class");
          }, all: function(e2, t2, n2) {
            var i2 = Array.from(e2.querySelectorAll(t2));
            return n2 ? i2.forEach(n2) : i2;
          }, childNodeLength: function(e2) {
            var t2 = document.createElement("template");
            return t2.innerHTML = e2, t2.content.childElementCount;
          }, isUploadInput: function(e2) {
            return e2.type === "file" && e2.getAttribute(U) !== null;
          }, findUploadInputs: function(e2) {
            return this.all(e2, 'input[type="file"]['.concat(U, "]"));
          }, findComponentNodeList: function(e2, t2) {
            return this.filterWithinSameLiveView(this.all(e2, "[".concat(M, '="').concat(t2, '"]')), e2);
          }, isPhxDestroyed: function(e2) {
            return !(!e2.id || !de.private(e2, "destroyed"));
          }, markPhxChildDestroyed: function(e2) {
            e2.setAttribute("data-phx-session", ""), this.putPrivate(e2, "destroyed", true);
          }, findPhxChildrenInFragment: function(e2, t2) {
            var n2 = document.createElement("template");
            return n2.innerHTML = e2, this.findPhxChildren(n2.content, t2);
          }, isIgnored: function(e2, t2) {
            return (e2.getAttribute(t2) || e2.getAttribute("data-phx-update")) === "ignore";
          }, isPhxUpdate: function(e2, t2, n2) {
            return e2.getAttribute && n2.indexOf(e2.getAttribute(t2)) >= 0;
          }, findPhxChildren: function(e2, t2) {
            return this.all(e2, "".concat(B, "[").concat("data-phx-parent-id", '="').concat(t2, '"]'));
          }, findParentCIDs: function(e2, t2) {
            var n2 = this, i2 = new Set(t2);
            return t2.reduce(function(t3, i3) {
              var r2 = "[".concat(M, '="').concat(i3, '"] [').concat(M, "]");
              return n2.filterWithinSameLiveView(n2.all(e2, r2), e2).map(function(e3) {
                return parseInt(e3.getAttribute(M));
              }).forEach(function(e3) {
                return t3.delete(e3);
              }), t3;
            }, i2);
          }, filterWithinSameLiveView: function(e2, t2) {
            var n2 = this;
            return t2.querySelector(B) ? e2.filter(function(e3) {
              return n2.withinSameLiveView(e3, t2);
            }) : e2;
          }, withinSameLiveView: function(e2, t2) {
            for (; e2 = e2.parentNode; ) {
              if (e2.isSameNode(t2))
                return true;
              if (e2.getAttribute(j))
                return false;
            }
          }, private: function(e2, t2) {
            return e2.phxPrivate && e2.phxPrivate[t2];
          }, deletePrivate: function(e2, t2) {
            e2.phxPrivate && delete e2.phxPrivate[t2];
          }, putPrivate: function(e2, t2, n2) {
            e2.phxPrivate || (e2.phxPrivate = {}), e2.phxPrivate[t2] = n2;
          }, copyPrivates: function(e2, t2) {
            t2.phxPrivate && (e2.phxPrivate = G(t2.phxPrivate));
          }, putTitle: function(e2) {
            var t2 = document.querySelector("title").dataset, n2 = t2.prefix, i2 = t2.suffix;
            document.title = "".concat(n2 || "").concat(e2).concat(i2 || "");
          }, debounce: function(e2, t2, n2, i2, r2, o2, a2) {
            var u2 = this, s2 = e2.getAttribute(n2), c2 = e2.getAttribute(r2);
            s2 === "" && (s2 = i2), c2 === "" && (c2 = o2);
            var l2 = s2 || c2;
            switch (l2) {
              case null:
                return a2();
              case "blur":
                return void (this.once(e2, "debounce-blur") && e2.addEventListener("blur", function() {
                  return a2();
                }));
              default:
                var d2 = parseInt(l2), h2 = this.incCycle(e2, "debounce-trigger", function() {
                  return c2 ? u2.deletePrivate(e2, "throttled") : a2();
                });
                if (isNaN(d2))
                  return K("invalid throttle/debounce value: ".concat(l2));
                if (c2) {
                  var f2 = false;
                  if (t2.type === "keydown") {
                    var v2 = this.private(e2, "debounce-prev-key");
                    this.putPrivate(e2, "debounce-prev-key", t2.key), f2 = v2 !== t2.key;
                  }
                  if (!f2 && this.private(e2, "throttled"))
                    return false;
                  a2(), this.putPrivate(e2, "throttled", true), setTimeout(function() {
                    return u2.triggerCycle(e2, "debounce-trigger");
                  }, d2);
                } else
                  setTimeout(function() {
                    return u2.triggerCycle(e2, "debounce-trigger", h2);
                  }, d2);
                var p2 = e2.form;
                p2 && this.once(p2, "bind-debounce") && p2.addEventListener("submit", function(e3) {
                  Array.from(new FormData(p2).entries(), function(e4) {
                    var t3 = C(e4, 2), n3 = t3[0], i3 = (t3[1], p2.querySelector('[name="'.concat(n3, '"]')));
                    u2.incCycle(i3, "debounce-trigger"), u2.deletePrivate(i3, "throttled");
                  });
                }), this.once(e2, "bind-debounce") && e2.addEventListener("blur", function(t3) {
                  return u2.triggerCycle(e2, "debounce-trigger");
                });
            }
          }, triggerCycle: function(e2, t2, n2) {
            var i2 = C(this.private(e2, t2), 2), r2 = i2[0], o2 = i2[1];
            n2 || (n2 = r2), n2 === r2 && (this.incCycle(e2, t2), o2());
          }, once: function(e2, t2) {
            return this.private(e2, t2) !== true && (this.putPrivate(e2, t2, true), true);
          }, incCycle: function(e2, t2) {
            var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
            }, i2 = C(this.private(e2, t2) || [0, n2], 2), r2 = i2[0];
            i2[1];
            return r2++, this.putPrivate(e2, t2, [r2, n2]), r2;
          }, discardError: function(e2, t2, n2) {
            var i2 = t2.getAttribute && t2.getAttribute(n2), r2 = i2 && e2.querySelector('[id="'.concat(i2, '"], [name="').concat(i2, '"]'));
            r2 && (this.private(r2, "phx-has-focused") || this.private(r2.form, "phx-has-submitted") || t2.classList.add("phx-no-feedback"));
          }, showError: function(e2, t2) {
            var n2 = this;
            (e2.id || e2.name) && this.all(e2.form, "[".concat(t2, '="').concat(e2.id, '"], [').concat(t2, '="').concat(e2.name, '"]'), function(e3) {
              n2.removeClass(e3, "phx-no-feedback");
            });
          }, isPhxChild: function(e2) {
            return e2.getAttribute && e2.getAttribute("data-phx-parent-id");
          }, dispatchEvent: function(e2, t2) {
            var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = new CustomEvent(t2, { bubbles: true, cancelable: true, detail: n2 });
            e2.dispatchEvent(i2);
          }, cloneNode: function(e2, t2) {
            if (t2 === void 0)
              return e2.cloneNode(true);
            var n2 = e2.cloneNode(false);
            return n2.innerHTML = t2, n2;
          }, mergeAttrs: function(e2, t2) {
            for (var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = n2.exclude || [], r2 = n2.isIgnored, o2 = t2.attributes, a2 = o2.length - 1; a2 >= 0; a2--) {
              var u2 = o2[a2].name;
              i2.indexOf(u2) < 0 && e2.setAttribute(u2, t2.getAttribute(u2));
            }
            for (var s2 = e2.attributes, c2 = s2.length - 1; c2 >= 0; c2--) {
              var l2 = s2[c2].name;
              r2 ? l2.startsWith("data-") && !t2.hasAttribute(l2) && e2.removeAttribute(l2) : t2.hasAttribute(l2) || e2.removeAttribute(l2);
            }
          }, mergeFocusedInput: function(e2, t2) {
            e2 instanceof HTMLSelectElement || de.mergeAttrs(e2, t2, { except: ["value"] }), t2.readOnly ? e2.setAttribute("readonly", true) : e2.removeAttribute("readonly");
          }, hasSelectionRange: function(e2) {
            return e2.setSelectionRange && (e2.type === "text" || e2.type === "textarea");
          }, restoreFocus: function(e2, t2, n2) {
            if (de.isTextualInput(e2)) {
              var i2 = e2.matches(":focus");
              e2.readOnly && e2.blur(), i2 || e2.focus(), this.hasSelectionRange(e2) && e2.setSelectionRange(t2, n2);
            }
          }, isFormInput: function(e2) {
            return /^(?:input|select|textarea)$/i.test(e2.tagName) && e2.type !== "button";
          }, syncAttrsToProps: function(e2) {
            e2 instanceof HTMLInputElement && V.indexOf(e2.type.toLocaleLowerCase()) >= 0 && (e2.checked = e2.getAttribute("checked") !== null);
          }, isTextualInput: function(e2) {
            return J.indexOf(e2.type) >= 0;
          }, isNowTriggerFormExternal: function(e2, t2) {
            return e2.getAttribute && e2.getAttribute(t2) !== null;
          }, syncPendingRef: function(e2, t2, n2) {
            var i2 = e2.getAttribute(F);
            return i2 === null || (de.isFormInput(e2) || e2.getAttribute(n2) !== null ? (de.isUploadInput(e2) && de.mergeAttrs(e2, t2, { isIgnored: true }), de.putPrivate(e2, F, t2), false) : (H.forEach(function(n3) {
              e2.classList.contains(n3) && t2.classList.add(n3);
            }), t2.setAttribute(F, i2), true));
          }, cleanChildNodes: function(e2, t2) {
            if (de.isPhxUpdate(e2, t2, ["append", "prepend"])) {
              var n2 = [];
              e2.childNodes.forEach(function(e3) {
                e3.id || (e3.nodeType === Node.TEXT_NODE && e3.nodeValue.trim() === "" || K("only HTML element tags with an id are allowed inside containers with phx-update.\n\n" + 'removing illegal node: "'.concat((e3.outerHTML || e3.nodeValue).trim(), '"\n\n')), n2.push(e3));
              }), n2.forEach(function(e3) {
                return e3.remove();
              });
            }
          } }, he = function() {
            function e2(t2, n2, i2) {
              D(this, e2);
              var r2 = new Set(), o2 = new Set(w(n2.children).map(function(e3) {
                return e3.id;
              })), a2 = [];
              Array.from(t2.children).forEach(function(e3) {
                if (e3.id && (r2.add(e3.id), o2.has(e3.id))) {
                  var t3 = e3.previousElementSibling && e3.previousElementSibling.id;
                  a2.push({ elementId: e3.id, previousElementId: t3 });
                }
              }), this.containerId = n2.id, this.updateType = i2, this.elementsToModify = a2, this.elementIdsToAdd = w(o2).filter(function(e3) {
                return !r2.has(e3);
              });
            }
            return N(e2, [{ key: "perform", value: function() {
              var e3 = de.byId(this.containerId);
              this.elementsToModify.forEach(function(t2) {
                t2.previousElementId ? ee(document.getElementById(t2.previousElementId), function(e4) {
                  ee(document.getElementById(t2.elementId), function(t3) {
                    t3.previousElementSibling && t3.previousElementSibling.id == e4.id || e4.insertAdjacentElement("afterend", t3);
                  });
                }) : ee(document.getElementById(t2.elementId), function(t3) {
                  t3.previousElementSibling == null || e3.insertAdjacentElement("afterbegin", t3);
                });
              }), this.updateType == "prepend" && this.elementIdsToAdd.reverse().forEach(function(t2) {
                ee(document.getElementById(t2), function(t3) {
                  return e3.insertAdjacentElement("afterbegin", t3);
                });
              });
            } }]), e2;
          }(), fe = function() {
            function e2(t2, n2, i2, r2, o2) {
              D(this, e2), this.view = t2, this.liveSocket = t2.liveSocket, this.container = n2, this.id = i2, this.rootID = t2.root.id, this.html = r2, this.targetCID = o2, this.cidPatch = typeof this.targetCID == "number", this.callbacks = { beforeadded: [], beforeupdated: [], beforephxChildAdded: [], afteradded: [], afterupdated: [], afterdiscarded: [], afterphxChildAdded: [] };
            }
            return N(e2, null, [{ key: "patchEl", value: function(e3, t2, n2) {
              k(e3, t2, { childrenOnly: false, onBeforeElUpdated: function(e4, t3) {
                if (n2 && n2.isSameNode(e4) && de.isFormInput(e4))
                  return de.mergeFocusedInput(e4, t3), false;
              } });
            } }]), N(e2, [{ key: "before", value: function(e3, t2) {
              this.callbacks["before".concat(e3)].push(t2);
            } }, { key: "after", value: function(e3, t2) {
              this.callbacks["after".concat(e3)].push(t2);
            } }, { key: "trackBefore", value: function(e3) {
              for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
                n2[i2 - 1] = arguments[i2];
              this.callbacks["before".concat(e3)].forEach(function(e4) {
                return e4.apply(void 0, n2);
              });
            } }, { key: "trackAfter", value: function(e3) {
              for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
                n2[i2 - 1] = arguments[i2];
              this.callbacks["after".concat(e3)].forEach(function(e4) {
                return e4.apply(void 0, n2);
              });
            } }, { key: "markPrunableContentForRemoval", value: function() {
              de.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", function(e3) {
                e3.setAttribute("data-phx-remove", "");
              });
            } }, { key: "perform", value: function() {
              var e3 = this, t2 = this.view, n2 = this.liveSocket, i2 = this.container, r2 = this.html, o2 = this.isCIDPatch() ? this.targetCIDContainer(r2) : i2;
              if (!this.isCIDPatch() || o2) {
                var a2 = n2.getActiveElement(), u2 = a2 && de.hasSelectionRange(a2) ? a2 : {}, s2 = u2.selectionStart, c2 = u2.selectionEnd, l2 = n2.binding("update"), d2 = n2.binding("feedback-for"), h2 = n2.binding("disable-with"), f2 = n2.binding("trigger-action"), v2 = [], p2 = [], g2 = [], m2 = null, y2 = n2.time("premorph container prep", function() {
                  return e3.buildDiffHTML(i2, r2, l2, o2);
                });
                return this.trackBefore("added", i2), this.trackBefore("updated", i2, i2), n2.time("morphdom", function() {
                  k(o2, y2, { childrenOnly: o2.getAttribute(M) === null, getNodeKey: function(e4) {
                    return de.isPhxDestroyed(e4) ? null : e4.id;
                  }, onBeforeNodeAdded: function(t3) {
                    return de.discardError(o2, t3, d2), e3.trackBefore("added", t3), t3;
                  }, onNodeAdded: function(n3) {
                    de.isNowTriggerFormExternal(n3, f2) && (m2 = n3), de.isPhxChild(n3) && t2.ownsElement(n3) && e3.trackAfter("phxChildAdded", n3), v2.push(n3);
                  }, onNodeDiscarded: function(t3) {
                    de.isPhxChild(t3) && n2.destroyViewByEl(t3), e3.trackAfter("discarded", t3);
                  }, onBeforeNodeDiscarded: function(t3) {
                    return !(!t3.getAttribute || t3.getAttribute("data-phx-remove") === null) || (t3.parentNode === null || !de.isPhxUpdate(t3.parentNode, l2, ["append", "prepend"]) || !t3.id) && !e3.skipCIDSibling(t3);
                  }, onElUpdated: function(e4) {
                    de.isNowTriggerFormExternal(e4, f2) && (m2 = e4), p2.push(e4);
                  }, onBeforeElUpdated: function(t3, n3) {
                    if (de.cleanChildNodes(n3, l2), e3.skipCIDSibling(n3))
                      return false;
                    if (de.isIgnored(t3, l2))
                      return e3.trackBefore("updated", t3, n3), de.mergeAttrs(t3, n3, { isIgnored: true }), p2.push(t3), false;
                    if (t3.type === "number" && t3.validity && t3.validity.badInput)
                      return false;
                    if (!de.syncPendingRef(t3, n3, h2))
                      return de.isUploadInput(t3) && (e3.trackBefore("updated", t3, n3), p2.push(t3)), false;
                    if (de.isPhxChild(n3)) {
                      var i3 = t3.getAttribute("data-phx-session");
                      return de.mergeAttrs(t3, n3, { exclude: ["data-phx-static"] }), i3 !== "" && t3.setAttribute("data-phx-session", i3), t3.setAttribute("data-phx-root-id", e3.rootID), false;
                    }
                    return de.copyPrivates(n3, t3), de.discardError(o2, n3, d2), a2 && t3.isSameNode(a2) && de.isFormInput(t3) && !e3.forceFocusedSelectUpdate(t3, n3) ? (e3.trackBefore("updated", t3, n3), de.mergeFocusedInput(t3, n3), de.syncAttrsToProps(t3), p2.push(t3), false) : (de.isPhxUpdate(n3, l2, ["append", "prepend"]) && g2.push(new he(t3, n3, n3.getAttribute(l2))), de.syncAttrsToProps(n3), e3.trackBefore("updated", t3, n3), true);
                  } });
                }), n2.isDebugEnabled() && function() {
                  for (var e4 = new Set(), t3 = document.querySelectorAll("*[id]"), n3 = 0, i3 = t3.length; n3 < i3; n3++)
                    e4.has(t3[n3].id) ? console.error("Multiple IDs detected: ".concat(t3[n3].id, ". Ensure unique element ids.")) : e4.add(t3[n3].id);
                }(), g2.length > 0 && n2.time("post-morph append/prepend restoration", function() {
                  g2.forEach(function(e4) {
                    return e4.perform();
                  });
                }), n2.silenceEvents(function() {
                  return de.restoreFocus(a2, s2, c2);
                }), de.dispatchEvent(document, "phx:update"), v2.forEach(function(t3) {
                  return e3.trackAfter("added", t3);
                }), p2.forEach(function(t3) {
                  return e3.trackAfter("updated", t3);
                }), m2 && (n2.disconnect(), m2.submit()), true;
              }
            } }, { key: "forceFocusedSelectUpdate", value: function(e3, t2) {
              var n2 = ["select", "select-one", "select-multiple"].find(function(t3) {
                return t3 === e3.type;
              });
              return e3.multiple === true || n2 && e3.innerHTML != t2.innerHTML;
            } }, { key: "isCIDPatch", value: function() {
              return this.cidPatch;
            } }, { key: "skipCIDSibling", value: function(e3) {
              return e3.nodeType === Node.ELEMENT_NODE && e3.getAttribute("data-phx-skip") !== null;
            } }, { key: "targetCIDContainer", value: function(e3) {
              if (this.isCIDPatch()) {
                var t2 = b(de.findComponentNodeList(this.container, this.targetCID)), n2 = t2[0];
                return t2.slice(1).length === 0 && de.childNodeLength(e3) === 1 ? n2 : n2 && n2.parentNode;
              }
            } }, { key: "buildDiffHTML", value: function(e3, t2, n2, i2) {
              var r2 = this, o2 = this.isCIDPatch(), a2 = o2 && i2.getAttribute(M) === this.targetCID.toString();
              if (!o2 || a2)
                return t2;
              var u2 = null, s2 = document.createElement("template");
              u2 = de.cloneNode(i2);
              var c2 = b(de.findComponentNodeList(u2, this.targetCID)), l2 = c2[0], d2 = c2.slice(1);
              return s2.innerHTML = t2, d2.forEach(function(e4) {
                return e4.remove();
              }), Array.from(u2.childNodes).forEach(function(e4) {
                e4.id && e4.nodeType === Node.ELEMENT_NODE && e4.getAttribute(M) !== r2.targetCID.toString() && (e4.setAttribute("data-phx-skip", ""), e4.innerHTML = "");
              }), Array.from(s2.content.childNodes).forEach(function(e4) {
                return u2.insertBefore(e4, l2);
              }), l2.remove(), u2.outerHTML;
            } }]), e2;
          }(), ve = function() {
            function e2(t2, n2, i2, r2, o2) {
              var a2 = this;
              D(this, e2), this.liveSocket = n2, this.flash = o2, this.parent = i2, this.root = i2 ? i2.root : this, this.el = t2, this.id = this.el.id, this.view = this.el.getAttribute(j), this.ref = 0, this.childJoins = 0, this.loaderTimer = null, this.pendingDiffs = [], this.pruningCIDs = [], this.href = r2, this.joinCount = this.parent ? this.parent.joinCount - 1 : 0, this.joinPending = true, this.destroyed = false, this.joinCallback = function() {
              }, this.stopCallback = function() {
              }, this.pendingJoinOps = this.parent ? null : [], this.viewHooks = {}, this.uploaders = {}, this.formSubmits = [], this.children = this.parent ? null : {}, this.root.children[this.id] = {}, this.channel = this.liveSocket.channel("lv:".concat(this.id), function() {
                return { url: a2.href, params: a2.connectParams(), session: a2.getSession(), static: a2.getStatic(), flash: a2.flash };
              }), this.showLoader(this.liveSocket.loaderTimeout), this.bindChannel();
            }
            return N(e2, [{ key: "isMain", value: function() {
              return this.liveSocket.main === this;
            } }, { key: "connectParams", value: function() {
              var e3 = this.liveSocket.params(this.view), t2 = de.all(document, "[".concat(this.binding("track-static"), "]")).map(function(e4) {
                return e4.src || e4.href;
              }).filter(function(e4) {
                return typeof e4 == "string";
              });
              return t2.length > 0 && (e3._track_static = t2), e3._mounts = this.joinCount, e3;
            } }, { key: "name", value: function() {
              return this.view;
            } }, { key: "isConnected", value: function() {
              return this.channel.canPush();
            } }, { key: "getSession", value: function() {
              return this.el.getAttribute("data-phx-session");
            } }, { key: "getStatic", value: function() {
              var e3 = this.el.getAttribute("data-phx-static");
              return e3 === "" ? null : e3;
            } }, { key: "destroy", value: function() {
              var e3 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
              };
              this.destroyAllChildren(), this.destroyed = true, delete this.root.children[this.id], this.parent && delete this.root.children[this.parent.id][this.id], clearTimeout(this.loaderTimer);
              var n2 = function() {
                for (var n3 in t2(), e3.viewHooks)
                  e3.destroyHook(e3.viewHooks[n3]);
              };
              de.markPhxChildDestroyed(this.el), this.log("destroyed", function() {
                return ["the child has been removed from the parent"];
              }), this.channel.leave().receive("ok", n2).receive("error", n2).receive("timeout", n2);
            } }, { key: "setContainerClasses", value: function() {
              var e3;
              this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"), (e3 = this.el.classList).add.apply(e3, arguments);
            } }, { key: "isLoading", value: function() {
              return this.el.classList.contains("phx-disconnected");
            } }, { key: "showLoader", value: function(e3) {
              var t2 = this;
              if (clearTimeout(this.loaderTimer), e3)
                this.loaderTimer = setTimeout(function() {
                  return t2.showLoader();
                }, e3);
              else {
                for (var n2 in this.viewHooks)
                  this.viewHooks[n2].__disconnected();
                this.setContainerClasses("phx-disconnected");
              }
            } }, { key: "hideLoader", value: function() {
              clearTimeout(this.loaderTimer), this.setContainerClasses("phx-connected");
            } }, { key: "triggerReconnected", value: function() {
              for (var e3 in this.viewHooks)
                this.viewHooks[e3].__reconnected();
            } }, { key: "log", value: function(e3, t2) {
              this.liveSocket.log(this, e3, t2);
            } }, { key: "withinTargets", value: function(e3, t2) {
              var n2 = this;
              if (e3 instanceof HTMLElement)
                return this.liveSocket.owner(e3, function(n3) {
                  return t2(n3, e3);
                });
              if (/^(0|[1-9]\d*)$/.test(e3)) {
                var i2 = de.findComponentNodeList(this.el, e3);
                i2.length === 0 ? K("no component found matching phx-target of ".concat(e3)) : t2(this, i2[0]);
              } else {
                var r2 = Array.from(document.querySelectorAll(e3));
                r2.length === 0 && K('nothing found matching the phx-target selector "'.concat(e3, '"')), r2.forEach(function(e4) {
                  return n2.liveSocket.owner(e4, function(n3) {
                    return t2(n3, e4);
                  });
                });
              }
            } }, { key: "applyDiff", value: function(e3, t2, n2) {
              this.log(e3, function() {
                return ["", G(t2)];
              });
              var i2 = se.extract(t2), r2 = i2.diff, o2 = i2.reply, a2 = i2.events, u2 = i2.title;
              return u2 && de.putTitle(u2), n2({ diff: r2, reply: o2, events: a2 }), o2;
            } }, { key: "onJoin", value: function(e3) {
              var t2 = this, n2 = e3.rendered;
              this.childJoins = 0, this.joinPending = true, this.flash = null, le.dropLocal(this.liveSocket.localStorage, this.name(), "consecutive-reloads"), this.applyDiff("mount", n2, function(n3) {
                var i2 = n3.diff, r2 = n3.events;
                t2.rendered = new se(t2.id, i2);
                var o2 = t2.renderContainer(null, "join");
                t2.dropPendingRefs();
                var a2 = t2.formsForRecovery(o2);
                t2.joinCount++, a2.length > 0 ? a2.forEach(function(e4, n4) {
                  t2.pushFormRecovery(e4, function(e5) {
                    n4 === a2.length - 1 && t2.onJoinComplete(e5, o2, r2);
                  });
                }) : t2.onJoinComplete(e3, o2, r2);
              });
            } }, { key: "dropPendingRefs", value: function() {
              de.all(this.el, "[".concat(F, "]"), function(e3) {
                return e3.removeAttribute(F);
              });
            } }, { key: "onJoinComplete", value: function(e3, t2, n2) {
              var i2 = this, r2 = e3.live_patch;
              if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending())
                return this.applyJoinPatch(r2, t2, n2);
              de.findPhxChildrenInFragment(t2, this.id).filter(function(e4) {
                var t3 = e4.id && i2.el.querySelector("#".concat(e4.id)), n3 = t3 && t3.getAttribute("data-phx-static");
                return n3 && e4.setAttribute("data-phx-static", n3), i2.joinChild(e4);
              }).length === 0 ? this.parent ? (this.root.pendingJoinOps.push([this, function() {
                return i2.applyJoinPatch(r2, t2, n2);
              }]), this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(), this.applyJoinPatch(r2, t2, n2)) : this.root.pendingJoinOps.push([this, function() {
                return i2.applyJoinPatch(r2, t2, n2);
              }]);
            } }, { key: "attachTrueDocEl", value: function() {
              this.el = de.byId(this.id), this.el.setAttribute("data-phx-root-id", this.root.id);
            } }, { key: "dispatchEvents", value: function(e3) {
              e3.forEach(function(e4) {
                var t2 = C(e4, 2), n2 = t2[0], i2 = t2[1];
                window.dispatchEvent(new CustomEvent("phx:hook:".concat(n2), { detail: i2 }));
              });
            } }, { key: "applyJoinPatch", value: function(e3, t2, n2) {
              var i2 = this;
              this.attachTrueDocEl();
              var r2 = new fe(this, this.el, this.id, t2, null);
              if (r2.markPrunableContentForRemoval(), this.performPatch(r2, false), this.joinNewChildren(), de.all(this.el, "[".concat(this.binding("hook"), "], [data-phx-").concat("hook", "]"), function(e4) {
                var t3 = i2.addHook(e4);
                t3 && t3.__mounted();
              }), this.joinPending = false, this.dispatchEvents(n2), this.applyPendingUpdates(), e3) {
                var o2 = e3.kind, a2 = e3.to;
                this.liveSocket.historyPatch(a2, o2);
              }
              this.hideLoader(), this.joinCount > 1 && this.triggerReconnected(), this.stopCallback();
            } }, { key: "triggerBeforeUpdateHook", value: function(e3, t2) {
              this.liveSocket.triggerDOM("onBeforeElUpdated", [e3, t2]);
              var n2 = this.getHook(e3), i2 = n2 && de.isIgnored(e3, this.binding("update"));
              if (n2 && !e3.isEqualNode(t2) && (!i2 || !function(e4, t3) {
                return JSON.stringify(e4) === JSON.stringify(t3);
              }(e3.dataset, t2.dataset)))
                return n2.__beforeUpdate(), n2;
            } }, { key: "performPatch", value: function(e3, t2) {
              var n2 = this, i2 = [], r2 = false, o2 = new Set();
              return e3.after("added", function(e4) {
                n2.liveSocket.triggerDOM("onNodeAdded", [e4]);
                var t3 = n2.addHook(e4);
                t3 && t3.__mounted();
              }), e3.after("phxChildAdded", function(e4) {
                return r2 = true;
              }), e3.before("updated", function(e4, t3) {
                n2.triggerBeforeUpdateHook(e4, t3) && o2.add(e4.id);
              }), e3.after("updated", function(e4) {
                o2.has(e4.id) && n2.getHook(e4).__updated();
              }), e3.after("discarded", function(e4) {
                var t3 = n2.componentID(e4);
                typeof t3 == "number" && i2.indexOf(t3) === -1 && i2.push(t3);
                var r3 = n2.getHook(e4);
                r3 && n2.destroyHook(r3);
              }), e3.perform(), t2 && this.maybePushComponentsDestroyed(i2), r2;
            } }, { key: "joinNewChildren", value: function() {
              var e3 = this;
              de.findPhxChildren(this.el, this.id).forEach(function(t2) {
                return e3.joinChild(t2);
              });
            } }, { key: "getChildById", value: function(e3) {
              return this.root.children[this.id][e3];
            } }, { key: "getDescendentByEl", value: function(e3) {
              return e3.id === this.id ? this : this.children[e3.getAttribute("data-phx-parent-id")][e3.id];
            } }, { key: "destroyDescendent", value: function(e3) {
              for (var t2 in this.root.children)
                for (var n2 in this.root.children[t2])
                  if (n2 === e3)
                    return this.root.children[t2][n2].destroy();
            } }, { key: "joinChild", value: function(t2) {
              if (!this.getChildById(t2.id)) {
                var n2 = new e2(t2, this.liveSocket, this);
                return this.root.children[this.id][n2.id] = n2, n2.join(), this.childJoins++, true;
              }
            } }, { key: "isJoinPending", value: function() {
              return this.joinPending;
            } }, { key: "ackJoin", value: function(e3) {
              this.childJoins--, this.childJoins === 0 && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete());
            } }, { key: "onAllChildJoinsComplete", value: function() {
              this.joinCallback(), this.pendingJoinOps.forEach(function(e3) {
                var t2 = C(e3, 2), n2 = t2[0], i2 = t2[1];
                n2.isDestroyed() || i2();
              }), this.pendingJoinOps = [];
            } }, { key: "update", value: function(e3, t2) {
              var n2 = this;
              if (this.isJoinPending() || this.liveSocket.hasPendingLink())
                return this.pendingDiffs.push({ diff: e3, events: t2 });
              this.rendered.mergeDiff(e3);
              var i2 = false;
              this.rendered.isComponentOnlyDiff(e3) ? this.liveSocket.time("component patch complete", function() {
                de.findParentCIDs(n2.el, n2.rendered.componentCIDs(e3)).forEach(function(t3) {
                  n2.componentPatch(n2.rendered.getComponent(e3, t3), t3) && (i2 = true);
                });
              }) : Z(e3) || this.liveSocket.time("full patch complete", function() {
                var t3 = n2.renderContainer(e3, "update"), r2 = new fe(n2, n2.el, n2.id, t3, null);
                i2 = n2.performPatch(r2, true);
              }), this.dispatchEvents(t2), i2 && this.joinNewChildren();
            } }, { key: "renderContainer", value: function(e3, t2) {
              var n2 = this;
              return this.liveSocket.time("toString diff (".concat(t2, ")"), function() {
                var t3 = n2.el.tagName, i2 = e3 ? n2.rendered.componentCIDs(e3).concat(n2.pruningCIDs) : null, r2 = n2.rendered.toString(i2);
                return "<".concat(t3, ">").concat(r2, "</").concat(t3, ">");
              });
            } }, { key: "componentPatch", value: function(e3, t2) {
              if (Z(e3))
                return false;
              var n2 = this.rendered.componentToString(t2), i2 = new fe(this, this.el, this.id, n2, t2);
              return this.performPatch(i2, true);
            } }, { key: "getHook", value: function(e3) {
              return this.viewHooks[ge.elementID(e3)];
            } }, { key: "addHook", value: function(e3) {
              if (!ge.elementID(e3) && e3.getAttribute) {
                var t2 = e3.getAttribute("data-phx-".concat("hook")) || e3.getAttribute(this.binding("hook"));
                if (!t2 || this.ownsElement(e3)) {
                  var n2 = this.liveSocket.getHookCallbacks(t2);
                  if (n2) {
                    e3.id || K('no DOM ID for hook "'.concat(t2, '". Hooks require a unique ID on each element.'), e3);
                    var i2 = new ge(this, e3, n2);
                    return this.viewHooks[ge.elementID(i2.el)] = i2, i2;
                  }
                  t2 !== null && K('unknown hook found for "'.concat(t2, '"'), e3);
                }
              }
            } }, { key: "destroyHook", value: function(e3) {
              e3.__destroyed(), e3.__cleanup__(), delete this.viewHooks[ge.elementID(e3.el)];
            } }, { key: "applyPendingUpdates", value: function() {
              var e3 = this;
              this.pendingDiffs.forEach(function(t2) {
                var n2 = t2.diff, i2 = t2.events;
                return e3.update(n2, i2);
              }), this.pendingDiffs = [];
            } }, { key: "onChannel", value: function(e3, t2) {
              var n2 = this;
              this.liveSocket.onChannel(this.channel, e3, function(e4) {
                n2.isJoinPending() ? n2.root.pendingJoinOps.push([n2, function() {
                  return t2(e4);
                }]) : t2(e4);
              });
            } }, { key: "bindChannel", value: function() {
              var e3 = this;
              this.liveSocket.onChannel(this.channel, "diff", function(t2) {
                e3.applyDiff("update", t2, function(t3) {
                  var n2 = t3.diff, i2 = t3.events;
                  return e3.update(n2, i2);
                });
              }), this.onChannel("redirect", function(t2) {
                var n2 = t2.to, i2 = t2.flash;
                return e3.onRedirect({ to: n2, flash: i2 });
              }), this.onChannel("live_patch", function(t2) {
                return e3.onLivePatch(t2);
              }), this.onChannel("live_redirect", function(t2) {
                return e3.onLiveRedirect(t2);
              }), this.channel.onError(function(t2) {
                return e3.onError(t2);
              }), this.channel.onClose(function(t2) {
                return e3.onClose(t2);
              });
            } }, { key: "destroyAllChildren", value: function() {
              for (var e3 in this.root.children[this.id])
                this.getChildById(e3).destroy();
            } }, { key: "onLiveRedirect", value: function(e3) {
              var t2 = e3.to, n2 = e3.kind, i2 = e3.flash, r2 = this.expandURL(t2);
              this.liveSocket.historyRedirect(r2, n2, i2);
            } }, { key: "onLivePatch", value: function(e3) {
              var t2 = e3.to, n2 = e3.kind;
              this.href = this.expandURL(t2), this.liveSocket.historyPatch(t2, n2);
            } }, { key: "expandURL", value: function(e3) {
              return e3.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e3) : e3;
            } }, { key: "onRedirect", value: function(e3) {
              var t2 = e3.to, n2 = e3.flash;
              this.liveSocket.redirect(t2, n2);
            } }, { key: "isDestroyed", value: function() {
              return this.destroyed;
            } }, { key: "join", value: function(e3) {
              var t2 = this;
              this.parent || (this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" })), this.joinCallback = function() {
                return e3 && e3(t2, t2.joinCount);
              }, this.liveSocket.wrapPush(this, { timeout: false }, function() {
                return t2.channel.join().receive("ok", function(e4) {
                  return t2.onJoin(e4);
                }).receive("error", function(e4) {
                  return t2.onJoinError(e4);
                }).receive("timeout", function() {
                  return t2.onJoinError({ reason: "timeout" });
                });
              });
            } }, { key: "onJoinError", value: function(e3) {
              return (e3.redirect || e3.live_redirect) && (this.joinPending = false, this.channel.leave()), e3.redirect ? this.onRedirect(e3.redirect) : e3.live_redirect ? this.onLiveRedirect(e3.live_redirect) : (this.log("error", function() {
                return ["unable to join", e3];
              }), this.liveSocket.reloadWithJitter(this));
            } }, { key: "onClose", value: function(e3) {
              if (!this.isDestroyed()) {
                if (this.isJoinPending() && document.visibilityState !== "hidden" || this.liveSocket.hasPendingLink() && e3 !== "leave")
                  return this.liveSocket.reloadWithJitter(this);
                this.destroyAllChildren(), this.liveSocket.dropActiveElement(this), document.activeElement && document.activeElement.blur(), this.liveSocket.isUnloaded() && this.showLoader(200);
              }
            } }, { key: "onError", value: function(e3) {
              this.onClose(e3), this.log("error", function() {
                return ["view crashed", e3];
              }), this.liveSocket.isUnloaded() || this.displayError();
            } }, { key: "displayError", value: function() {
              this.isMain() && de.dispatchEvent(window, "phx:page-loading-start", { to: this.href, kind: "error" }), this.showLoader(), this.setContainerClasses("phx-disconnected", "phx-error");
            } }, { key: "pushWithReply", value: function(e3, t2, n2) {
              var i2 = this, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              };
              if (this.isConnected()) {
                var o2 = C(e3 ? e3() : [null, []], 2), a2 = o2[0], u2 = C(o2[1], 1)[0], s2 = function() {
                };
                return u2 && u2.getAttribute(this.binding("page-loading")) !== null && (s2 = this.liveSocket.withPageLoading({ kind: "element", target: u2 })), typeof n2.cid != "number" && delete n2.cid, this.liveSocket.wrapPush(this, { timeout: true }, function() {
                  return i2.channel.push(t2, n2, 3e4).receive("ok", function(e4) {
                    var t3 = null;
                    a2 !== null && i2.undoRefs(a2), e4.diff && (t3 = i2.applyDiff("update", e4.diff, function(e5) {
                      var t4 = e5.diff, n3 = e5.events;
                      i2.update(t4, n3);
                    })), e4.redirect && i2.onRedirect(e4.redirect), e4.live_patch && i2.onLivePatch(e4.live_patch), e4.live_redirect && i2.onLiveRedirect(e4.live_redirect), s2(), r2(e4, t3);
                  });
                });
              }
            } }, { key: "undoRefs", value: function(e3) {
              var t2 = this;
              de.all(this.el, "[".concat(F, '="').concat(e3, '"]'), function(e4) {
                e4.removeAttribute(F), e4.getAttribute("data-phx-readonly") !== null && (e4.readOnly = false, e4.removeAttribute("data-phx-readonly")), e4.getAttribute("data-phx-disabled") !== null && (e4.disabled = false, e4.removeAttribute("data-phx-disabled")), H.forEach(function(t3) {
                  return de.removeClass(e4, t3);
                });
                var n2 = e4.getAttribute("data-phx-disable-with-restore");
                n2 !== null && (e4.innerText = n2, e4.removeAttribute("data-phx-disable-with-restore"));
                var i2 = de.private(e4, F);
                if (i2) {
                  var r2 = t2.triggerBeforeUpdateHook(e4, i2);
                  fe.patchEl(e4, i2, t2.liveSocket.getActiveElement()), r2 && r2.__updated(), de.deletePrivate(e4, F);
                }
              });
            } }, { key: "putRef", value: function(e3, t2) {
              var n2 = this.ref++, i2 = this.binding("disable-with");
              return e3.forEach(function(e4) {
                e4.classList.add("phx-".concat(t2, "-loading")), e4.setAttribute(F, n2);
                var r2 = e4.getAttribute(i2);
                r2 !== null && (e4.getAttribute("data-phx-disable-with-restore") || e4.setAttribute("data-phx-disable-with-restore", e4.innerText), e4.innerText = r2);
              }), [n2, e3];
            } }, { key: "componentID", value: function(e3) {
              var t2 = e3.getAttribute && e3.getAttribute(M);
              return t2 ? parseInt(t2) : null;
            } }, { key: "targetComponentID", value: function(e3, t2) {
              return e3.getAttribute(this.binding("target")) ? this.closestComponentID(t2) : null;
            } }, { key: "closestComponentID", value: function(e3) {
              var t2 = this;
              return e3 ? ee(e3.closest("[".concat(M, "]")), function(e4) {
                return t2.ownsElement(e4) && t2.componentID(e4);
              }) : null;
            } }, { key: "pushHookEvent", value: function(e3, t2, n2, i2) {
              if (!this.isConnected())
                return this.log("hook", function() {
                  return ["unable to push hook event. LiveView not connected", t2, n2];
                }), false;
              var r2 = C(this.putRef([], "hook"), 2), o2 = r2[0], a2 = r2[1];
              return this.pushWithReply(function() {
                return [o2, a2];
              }, "event", { type: "hook", event: t2, value: n2, cid: this.closestComponentID(e3) }, function(e4, t3) {
                return i2(t3, o2);
              }), o2;
            } }, { key: "extractMeta", value: function(e3, t2) {
              for (var n2 = this.binding("value-"), i2 = 0; i2 < e3.attributes.length; i2++) {
                var r2 = e3.attributes[i2].name;
                r2.startsWith(n2) && (t2[r2.replace(n2, "")] = e3.getAttribute(r2));
              }
              return e3.value !== void 0 && (t2.value = e3.value, e3.tagName === "INPUT" && V.indexOf(e3.type) >= 0 && !e3.checked && delete t2.value), t2;
            } }, { key: "pushEvent", value: function(e3, t2, n2, i2, r2) {
              var o2 = this;
              this.pushWithReply(function() {
                return o2.putRef([t2], e3);
              }, "event", { type: e3, event: i2, value: this.extractMeta(t2, r2), cid: this.targetComponentID(t2, n2) });
            } }, { key: "pushKey", value: function(e3, t2, n2, i2, r2) {
              var o2 = this;
              this.pushWithReply(function() {
                return o2.putRef([e3], n2);
              }, "event", { type: n2, event: i2, value: this.extractMeta(e3, r2), cid: this.targetComponentID(e3, t2) });
            } }, { key: "pushFileProgress", value: function(e3, t2, n2) {
              var i2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              };
              this.liveSocket.withinOwners(e3.form, function(r2, o2) {
                r2.pushWithReply(null, "progress", { event: e3.getAttribute(r2.binding("progress")), ref: e3.getAttribute(U), entry_ref: t2, progress: n2, cid: r2.targetComponentID(e3.form, o2) }, i2);
              });
            } }, { key: "pushInput", value: function(e3, t2, n2, i2, r2) {
              var o2 = this, a2 = this.targetComponentID(e3.form, t2), u2 = function() {
                return o2.putRef([e3, e3.form], "change");
              }, s2 = ue(e3.form, { _target: i2.name });
              e3.files && e3.files.length > 0 && re.trackFiles(e3, Array.from(e3.files));
              var c2 = { type: "form", event: n2, value: s2, uploads: re.serializeUploads(e3), cid: a2 };
              this.pushWithReply(u2, "event", c2, function(n3) {
                if (de.showError(e3, o2.liveSocket.binding("feedback-for")), de.isUploadInput(e3) && e3.getAttribute("data-phx-auto-upload") !== null) {
                  if (re.filesAwaitingPreflight(e3).length > 0) {
                    var i3 = C(u2(), 2), s3 = i3[0];
                    i3[1];
                    o2.uploadFiles(e3.form, t2, s3, a2, function(t3) {
                      r2 && r2(n3), o2.triggerAwaitingSubmit(e3.form);
                    });
                  }
                } else
                  r2 && r2(n3);
              });
            } }, { key: "triggerAwaitingSubmit", value: function(e3) {
              var t2 = this.getScheduledSubmit(e3);
              if (t2) {
                var n2 = C(t2, 3), i2 = (n2[0], n2[1], n2[2]);
                this.cancelSubmit(e3), i2();
              }
            } }, { key: "getScheduledSubmit", value: function(e3) {
              return this.formSubmits.find(function(t2) {
                var n2 = C(t2, 2), i2 = n2[0];
                n2[1];
                return i2.isSameNode(e3);
              });
            } }, { key: "scheduleSubmit", value: function(e3, t2, n2) {
              if (this.getScheduledSubmit(e3))
                return true;
              this.formSubmits.push([e3, t2, n2]);
            } }, { key: "cancelSubmit", value: function(e3) {
              var t2 = this;
              this.formSubmits = this.formSubmits.filter(function(n2) {
                var i2 = C(n2, 3), r2 = i2[0], o2 = i2[1];
                i2[2];
                return !r2.isSameNode(e3) || (t2.undoRefs(o2), false);
              });
            } }, { key: "pushFormSubmit", value: function(e3, t2, n2, i2) {
              var r2 = this, o2 = function(e4) {
                return !(Y(e4, "".concat(r2.binding("update"), "=ignore"), e4.form) || Y(e4, "data-phx-update=ignore", e4.form));
              }, a2 = function(e4) {
                return e4.hasAttribute(r2.binding("disable-with"));
              }, u2 = function(e4) {
                return e4.tagName == "BUTTON";
              }, s2 = function(e4) {
                return ["INPUT", "TEXTAREA", "SELECT"].includes(e4.tagName);
              }, c2 = function() {
                var t3 = Array.from(e3.elements), n3 = t3.filter(a2), i3 = t3.filter(u2).filter(o2), c3 = t3.filter(s2).filter(o2);
                return i3.forEach(function(e4) {
                  e4.setAttribute("data-phx-disabled", e4.disabled), e4.disabled = true;
                }), c3.forEach(function(e4) {
                  e4.setAttribute("data-phx-readonly", e4.readOnly), e4.readOnly = true, e4.files && (e4.setAttribute("data-phx-disabled", e4.disabled), e4.disabled = true);
                }), e3.setAttribute(r2.binding("page-loading"), ""), r2.putRef([e3].concat(n3).concat(i3).concat(c3), "submit");
              }, l2 = this.targetComponentID(e3, t2);
              if (re.hasUploadsInProgress(e3)) {
                var d2 = C(c2(), 2), h2 = d2[0];
                d2[1];
                return this.scheduleSubmit(e3, h2, function() {
                  return r2.pushFormSubmit(e3, t2, n2, i2);
                });
              }
              if (re.inputsAwaitingPreflight(e3).length > 0) {
                var f2 = C(c2(), 2), v2 = f2[0], p2 = f2[1], g2 = function() {
                  return [v2, p2];
                };
                this.uploadFiles(e3, t2, v2, l2, function(t3) {
                  var o3 = ue(e3, {});
                  r2.pushWithReply(g2, "event", { type: "form", event: n2, value: o3, cid: l2 }, i2);
                });
              } else {
                var m2 = ue(e3);
                this.pushWithReply(c2, "event", { type: "form", event: n2, value: m2, cid: l2 }, i2);
              }
            } }, { key: "uploadFiles", value: function(e3, t2, n2, i2, r2) {
              var o2 = this, a2 = this.joinCount;
              re.activeFileInputs(e3).forEach(function(e4) {
                var i3 = new re(e4, o2, r2);
                o2.uploaders[e4] = i3;
                var u2 = i3.entries().map(function(e5) {
                  return e5.toPreflightPayload();
                }), s2 = { ref: e4.getAttribute(U), entries: u2, cid: o2.targetComponentID(e4.form, t2) };
                o2.log("upload", function() {
                  return ["sending preflight request", s2];
                }), o2.pushWithReply(null, "allow_upload", s2, function(e5) {
                  if (o2.log("upload", function() {
                    return ["got preflight response", e5];
                  }), e5.error) {
                    o2.undoRefs(n2);
                    var t3 = C(e5.error, 2), r3 = t3[0], u3 = t3[1];
                    o2.log("upload", function() {
                      return ["error for entry ".concat(r3), u3];
                    });
                  } else {
                    i3.initAdapterUpload(e5, function(e6) {
                      o2.channel.onError(function() {
                        o2.joinCount === a2 && e6();
                      });
                    }, o2.liveSocket);
                  }
                });
              });
            } }, { key: "pushFormRecovery", value: function(e3, t2) {
              var n2 = this;
              this.liveSocket.withinOwners(e3, function(i2, r2) {
                var o2 = e3.elements[0], a2 = e3.getAttribute(n2.binding("auto-recover")) || e3.getAttribute(n2.binding("change"));
                i2.pushInput(o2, r2, a2, o2, t2);
              });
            } }, { key: "pushLinkPatch", value: function(e3, t2, n2) {
              var i2 = this, r2 = this.liveSocket.setPendingLink(e3), o2 = t2 ? function() {
                return i2.putRef([t2], "click");
              } : null;
              this.pushWithReply(o2, "link", { url: e3 }, function(t3) {
                t3.link_redirect ? i2.liveSocket.replaceMain(e3, null, n2, r2) : (i2.liveSocket.commitPendingLink(r2) && (i2.href = e3), i2.applyPendingUpdates(), n2 && n2(r2));
              }).receive("timeout", function() {
                return i2.liveSocket.redirect(window.location.href);
              });
            } }, { key: "formsForRecovery", value: function(e3) {
              var t2 = this;
              if (this.joinCount === 0)
                return [];
              var n2 = this.binding("change"), i2 = document.createElement("template");
              return i2.innerHTML = e3, de.all(this.el, "form[".concat(n2, "]")).filter(function(e4) {
                return t2.ownsElement(e4);
              }).filter(function(e4) {
                return e4.elements.length > 0;
              }).filter(function(e4) {
                return e4.getAttribute(t2.binding("auto-recover")) !== "ignore";
              }).filter(function(e4) {
                return i2.content.querySelector("form[".concat(n2, '="').concat(e4.getAttribute(n2), '"]'));
              });
            } }, { key: "maybePushComponentsDestroyed", value: function(e3) {
              var t2, n2 = this, i2 = e3.filter(function(e4) {
                return de.findComponentNodeList(n2.el, e4).length === 0;
              });
              i2.length > 0 && ((t2 = this.pruningCIDs).push.apply(t2, w(i2)), this.pushWithReply(null, "cids_will_destroy", { cids: i2 }, function() {
                n2.pruningCIDs = n2.pruningCIDs.filter(function(e5) {
                  return i2.indexOf(e5) !== -1;
                });
                var e4 = i2.filter(function(e5) {
                  return de.findComponentNodeList(n2.el, e5).length === 0;
                });
                e4.length > 0 && n2.pushWithReply(null, "cids_destroyed", { cids: e4 }, function(e5) {
                  n2.rendered.pruneCIDs(e5.cids);
                });
              }));
            } }, { key: "ownsElement", value: function(e3) {
              return e3.getAttribute("data-phx-parent-id") === this.id || ee(e3.closest(B), function(e4) {
                return e4.id;
              }) === this.id;
            } }, { key: "submitForm", value: function(e3, t2, n2) {
              var i2 = this;
              de.putPrivate(e3, "phx-has-submitted", true), this.liveSocket.blurActiveElement(this), this.pushFormSubmit(e3, t2, n2, function() {
                i2.liveSocket.restorePreviouslyActiveFocus();
              });
            } }, { key: "binding", value: function(e3) {
              return this.liveSocket.binding(e3);
            } }]), e2;
          }(), pe = 1, ge = function() {
            function e2(t2, n2, i2) {
              for (var r2 in D(this, e2), this.__view = t2, this.__liveSocket = t2.liveSocket, this.__callbacks = i2, this.__listeners = new Set(), this.__isDisconnected = false, this.el = n2, this.viewName = t2.name(), this.el.phxHookId = this.constructor.makeID(), this.__callbacks)
                this[r2] = this.__callbacks[r2];
            }
            return N(e2, null, [{ key: "makeID", value: function() {
              return pe++;
            } }, { key: "elementID", value: function(e3) {
              return e3.phxHookId;
            } }]), N(e2, [{ key: "__mounted", value: function() {
              this.mounted && this.mounted();
            } }, { key: "__updated", value: function() {
              this.updated && this.updated();
            } }, { key: "__beforeUpdate", value: function() {
              this.beforeUpdate && this.beforeUpdate();
            } }, { key: "__destroyed", value: function() {
              this.destroyed && this.destroyed();
            } }, { key: "__reconnected", value: function() {
              this.__isDisconnected && (this.__isDisconnected = false, this.reconnected && this.reconnected());
            } }, { key: "__disconnected", value: function() {
              this.__isDisconnected = true, this.disconnected && this.disconnected();
            } }, { key: "pushEvent", value: function(e3) {
              var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
              };
              return this.__view.pushHookEvent(null, e3, t2, n2);
            } }, { key: "pushEventTo", value: function(e3, t2) {
              var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
              };
              return this.__view.withinTargets(e3, function(e4, r2) {
                return e4.pushHookEvent(r2, t2, n2, i2);
              });
            } }, { key: "handleEvent", value: function(e3, t2) {
              var n2 = function(n3, i2) {
                return i2 ? e3 : t2(n3.detail);
              };
              return window.addEventListener("phx:hook:".concat(e3), n2), this.__listeners.add(n2), n2;
            } }, { key: "removeHandleEvent", value: function(e3) {
              var t2 = e3(null, true);
              window.removeEventListener("phx:hook:".concat(t2), e3), this.__listeners.delete(e3);
            } }, { key: "__cleanup__", value: function() {
              var e3 = this;
              this.__listeners.forEach(function(t2) {
                return e3.removeHandleEvent(t2);
              });
            } }]), e2;
          }();
          t.default = ce;
        }, function(e, t) {
          var n;
          n = function() {
            return this;
          }();
          try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (e2) {
            typeof window == "object" && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          (function(t2) {
            t2.Phoenix || (t2.Phoenix = {}), e.exports = t2.Phoenix.LiveView = n(0);
          }).call(this, n(1));
        }]);
      });
    }
  });

  // vendor/topbar.js
  var require_topbar = __commonJS({
    "vendor/topbar.js"(exports, module) {
      (function(window2, document2) {
        "use strict";
        (function() {
          var lastTime = 0;
          var vendors = ["ms", "moz", "webkit", "o"];
          for (var x = 0; x < vendors.length && !window2.requestAnimationFrame; ++x) {
            window2.requestAnimationFrame = window2[vendors[x] + "RequestAnimationFrame"];
            window2.cancelAnimationFrame = window2[vendors[x] + "CancelAnimationFrame"] || window2[vendors[x] + "CancelRequestAnimationFrame"];
          }
          if (!window2.requestAnimationFrame)
            window2.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window2.setTimeout(function() {
                callback(currTime + timeToCall);
              }, timeToCall);
              lastTime = currTime + timeToCall;
              return id;
            };
          if (!window2.cancelAnimationFrame)
            window2.cancelAnimationFrame = function(id) {
              clearTimeout(id);
            };
        })();
        var canvas, progressTimerId, fadeTimerId, currentProgress, showing, addEvent = function(elem, type, handler3) {
          if (elem.addEventListener)
            elem.addEventListener(type, handler3, false);
          else if (elem.attachEvent)
            elem.attachEvent("on" + type, handler3);
          else
            elem["on" + type] = handler3;
        }, options = {
          autoRun: true,
          barThickness: 3,
          barColors: {
            0: "rgba(26,  188, 156, .9)",
            ".25": "rgba(52,  152, 219, .9)",
            ".50": "rgba(241, 196, 15,  .9)",
            ".75": "rgba(230, 126, 34,  .9)",
            "1.0": "rgba(211, 84,  0,   .9)"
          },
          shadowBlur: 10,
          shadowColor: "rgba(0,   0,   0,   .6)",
          className: null
        }, repaint = function() {
          canvas.width = window2.innerWidth;
          canvas.height = options.barThickness * 5;
          var ctx = canvas.getContext("2d");
          ctx.shadowBlur = options.shadowBlur;
          ctx.shadowColor = options.shadowColor;
          var lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          for (var stop in options.barColors)
            lineGradient.addColorStop(stop, options.barColors[stop]);
          ctx.lineWidth = options.barThickness;
          ctx.beginPath();
          ctx.moveTo(0, options.barThickness / 2);
          ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness / 2);
          ctx.strokeStyle = lineGradient;
          ctx.stroke();
        }, createCanvas = function() {
          canvas = document2.createElement("canvas");
          var style = canvas.style;
          style.position = "fixed";
          style.top = style.left = style.right = style.margin = style.padding = 0;
          style.zIndex = 100001;
          style.display = "none";
          if (options.className)
            canvas.classList.add(options.className);
          document2.body.appendChild(canvas);
          addEvent(window2, "resize", repaint);
        }, topbar2 = {
          config: function(opts) {
            for (var key in opts)
              if (options.hasOwnProperty(key))
                options[key] = opts[key];
          },
          show: function() {
            if (showing)
              return;
            showing = true;
            if (fadeTimerId !== null)
              window2.cancelAnimationFrame(fadeTimerId);
            if (!canvas)
              createCanvas();
            canvas.style.opacity = 1;
            canvas.style.display = "block";
            topbar2.progress(0);
            if (options.autoRun) {
              (function loop2() {
                progressTimerId = window2.requestAnimationFrame(loop2);
                topbar2.progress("+" + 0.05 * Math.pow(1 - Math.sqrt(currentProgress), 2));
              })();
            }
          },
          progress: function(to) {
            if (typeof to === "undefined")
              return currentProgress;
            if (typeof to === "string") {
              to = (to.indexOf("+") >= 0 || to.indexOf("-") >= 0 ? currentProgress : 0) + parseFloat(to);
            }
            currentProgress = to > 1 ? 1 : to;
            repaint();
            return currentProgress;
          },
          hide: function() {
            if (!showing)
              return;
            showing = false;
            if (progressTimerId != null) {
              window2.cancelAnimationFrame(progressTimerId);
              progressTimerId = null;
            }
            (function loop2() {
              if (topbar2.progress("+.1") >= 1) {
                canvas.style.opacity -= 0.05;
                if (canvas.style.opacity <= 0.05) {
                  canvas.style.display = "none";
                  fadeTimerId = null;
                  return;
                }
              }
              fadeTimerId = window2.requestAnimationFrame(loop2);
            })();
          }
        };
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = topbar2;
        } else if (typeof define === "function" && define.amd) {
          define(function() {
            return topbar2;
          });
        } else {
          this.topbar = topbar2;
        }
      }).call(exports, window, document);
    }
  });

  // node_modules/phoenix_html/priv/static/phoenix_html.js
  "use strict";
  (function() {
    var PolyfillEvent = eventConstructor();
    function eventConstructor() {
      if (typeof window.CustomEvent === "function")
        return window.CustomEvent;
      function CustomEvent2(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: void 0 };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }
      CustomEvent2.prototype = window.Event.prototype;
      return CustomEvent2;
    }
    function buildHiddenInput(name, value) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      return input;
    }
    function handleClick(element) {
      var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), target = element.getAttribute("target");
      form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
      form.action = to;
      form.style.display = "hidden";
      if (target)
        form.target = target;
      form.appendChild(csrf);
      form.appendChild(method);
      document.body.appendChild(form);
      form.submit();
    }
    window.addEventListener("click", function(e) {
      var element = e.target;
      while (element && element.getAttribute) {
        var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
          "bubbles": true,
          "cancelable": true
        });
        if (!element.dispatchEvent(phoenixLinkEvent)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return false;
        }
        if (element.getAttribute("data-method")) {
          handleClick(element);
          e.preventDefault();
          return false;
        } else {
          element = element.parentNode;
        }
      }
    }, false);
    window.addEventListener("phoenix.link.click", function(e) {
      var message = e.target.getAttribute("data-confirm");
      if (message && !window.confirm(message)) {
        e.preventDefault();
      }
    }, false);
  })();

  // node_modules/alpinejs/dist/module.esm.js
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
  var __commonJS2 = (callback, module) => () => {
    if (!module) {
      module = { exports: {} };
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames2(module))
        if (!__hasOwnProp2.call(target, key) && key !== "default")
          __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc2(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule2 = (module) => {
    return __exportStar(__markAsModule2(__defProp2(module != null ? __create2(__getProtoOf2(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var require_shared_cjs = __commonJS2((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeMap(str, expectsLowerCase) {
      const map = Object.create(null);
      const list = str.split(",");
      for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
    }
    var PatchFlagNames = {
      [1]: `TEXT`,
      [2]: `CLASS`,
      [4]: `STYLE`,
      [8]: `PROPS`,
      [16]: `FULL_PROPS`,
      [32]: `HYDRATE_EVENTS`,
      [64]: `STABLE_FRAGMENT`,
      [128]: `KEYED_FRAGMENT`,
      [256]: `UNKEYED_FRAGMENT`,
      [512]: `NEED_PATCH`,
      [1024]: `DYNAMIC_SLOTS`,
      [2048]: `DEV_ROOT_FRAGMENT`,
      [-1]: `HOISTED`,
      [-2]: `BAIL`
    };
    var slotFlagsText = {
      [1]: "STABLE",
      [2]: "DYNAMIC",
      [3]: "FORWARDED"
    };
    var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
    var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
    var range = 2;
    function generateCodeFrame(source, start2 = 0, end = source.length) {
      const lines = source.split(/\r?\n/);
      let count = 0;
      const res = [];
      for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start2) {
          for (let j = i - range; j <= i + range || end > count; j++) {
            if (j < 0 || j >= lines.length)
              continue;
            const line = j + 1;
            res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
            const lineLength = lines[j].length;
            if (j === i) {
              const pad = start2 - (count - lineLength) + 1;
              const length = Math.max(1, end > count ? lineLength - pad : end - start2);
              res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
            } else if (j > i) {
              if (end > count) {
                const length = Math.max(Math.min(end - count, lineLength), 1);
                res.push(`   |  ` + "^".repeat(length));
              }
              count += lineLength + 1;
            }
          }
          break;
        }
      }
      return res.join("\n");
    }
    var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
    var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    var attrValidationCache = {};
    function isSSRSafeAttrName(name) {
      if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
      }
      const isUnsafe = unsafeAttrCharRE.test(name);
      if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
      }
      return attrValidationCache[name] = !isUnsafe;
    }
    var propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
    var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
    function normalizeStyle(value) {
      if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key];
            }
          }
        }
        return res;
      } else if (isObject(value)) {
        return value;
      }
    }
    var listDelimiterRE = /;(?![^(]*\))/g;
    var propertyDelimiterRE = /:(.+)/;
    function parseStringStyle(cssText) {
      const ret = {};
      cssText.split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }
    function stringifyStyle(styles) {
      let ret = "";
      if (!styles) {
        return ret;
      }
      for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
          ret += `${normalizedKey}:${value};`;
        }
      }
      return ret;
    }
    function normalizeClass(value) {
      let res = "";
      if (isString(value)) {
        res = value;
      } else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject(value)) {
        for (const name in value) {
          if (value[name]) {
            res += name + " ";
          }
        }
      }
      return res.trim();
    }
    var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
    var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
    var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
    var escapeRE = /["'&<>]/;
    function escapeHtml(string) {
      const str = "" + string;
      const match = escapeRE.exec(str);
      if (!match) {
        return str;
      }
      let html = "";
      let escaped;
      let index;
      let lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escaped = "&quot;";
            break;
          case 38:
            escaped = "&amp;";
            break;
          case 39:
            escaped = "&#39;";
            break;
          case 60:
            escaped = "&lt;";
            break;
          case 62:
            escaped = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
    function escapeHtmlComment(src) {
      return src.replace(commentStripRE, "");
    }
    function looseCompareArrays(a, b) {
      if (a.length !== b.length)
        return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
      }
      return equal;
    }
    function looseEqual(a, b) {
      if (a === b)
        return true;
      let aValidType = isDate(a);
      let bValidType = isDate(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }
      aValidType = isArray(a);
      bValidType = isArray(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
      }
      aValidType = isObject(a);
      bValidType = isObject(b);
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
          return false;
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key);
          const bHasKey = b.hasOwnProperty(key);
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
            return false;
          }
        }
      }
      return String(a) === String(b);
    }
    function looseIndexOf(arr, val) {
      return arr.findIndex((item) => looseEqual(item, val));
    }
    var toDisplayString = (val) => {
      return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
    };
    var replacer = (_key, val) => {
      if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
            entries[`${key} =>`] = val2;
            return entries;
          }, {})
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()]
        };
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    var babelParserDefaultPlugins = [
      "bigInt",
      "optionalChaining",
      "nullishCoalescingOperator"
    ];
    var EMPTY_OBJ = Object.freeze({});
    var EMPTY_ARR = Object.freeze([]);
    var NOOP = () => {
    };
    var NO = () => false;
    var onRE = /^on[^a-z]/;
    var isOn = (key) => onRE.test(key);
    var isModelListener = (key) => key.startsWith("onUpdate:");
    var extend = Object.assign;
    var remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasOwn = (val, key) => hasOwnProperty.call(val, key);
    var isArray = Array.isArray;
    var isMap = (val) => toTypeString(val) === "[object Map]";
    var isSet = (val) => toTypeString(val) === "[object Set]";
    var isDate = (val) => val instanceof Date;
    var isFunction = (val) => typeof val === "function";
    var isString = (val) => typeof val === "string";
    var isSymbol = (val) => typeof val === "symbol";
    var isObject = (val) => val !== null && typeof val === "object";
    var isPromise = (val) => {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch);
    };
    var objectToString = Object.prototype.toString;
    var toTypeString = (value) => objectToString.call(value);
    var toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    var isPlainObject = (val) => toTypeString(val) === "[object Object]";
    var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    var cacheStringFunction = (fn) => {
      const cache = Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    var camelizeRE = /-(\w)/g;
    var camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
    });
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
    var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
    var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
    var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
    var invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };
    var def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
      });
    };
    var toNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    var _globalThis;
    var getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    exports.EMPTY_ARR = EMPTY_ARR;
    exports.EMPTY_OBJ = EMPTY_OBJ;
    exports.NO = NO;
    exports.NOOP = NOOP;
    exports.PatchFlagNames = PatchFlagNames;
    exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
    exports.camelize = camelize;
    exports.capitalize = capitalize;
    exports.def = def;
    exports.escapeHtml = escapeHtml;
    exports.escapeHtmlComment = escapeHtmlComment;
    exports.extend = extend;
    exports.generateCodeFrame = generateCodeFrame;
    exports.getGlobalThis = getGlobalThis;
    exports.hasChanged = hasChanged;
    exports.hasOwn = hasOwn;
    exports.hyphenate = hyphenate;
    exports.invokeArrayFns = invokeArrayFns;
    exports.isArray = isArray;
    exports.isBooleanAttr = isBooleanAttr2;
    exports.isDate = isDate;
    exports.isFunction = isFunction;
    exports.isGloballyWhitelisted = isGloballyWhitelisted;
    exports.isHTMLTag = isHTMLTag;
    exports.isIntegerKey = isIntegerKey;
    exports.isKnownAttr = isKnownAttr;
    exports.isMap = isMap;
    exports.isModelListener = isModelListener;
    exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
    exports.isObject = isObject;
    exports.isOn = isOn;
    exports.isPlainObject = isPlainObject;
    exports.isPromise = isPromise;
    exports.isReservedProp = isReservedProp;
    exports.isSSRSafeAttrName = isSSRSafeAttrName;
    exports.isSVGTag = isSVGTag;
    exports.isSet = isSet;
    exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
    exports.isString = isString;
    exports.isSymbol = isSymbol;
    exports.isVoidTag = isVoidTag;
    exports.looseEqual = looseEqual;
    exports.looseIndexOf = looseIndexOf;
    exports.makeMap = makeMap;
    exports.normalizeClass = normalizeClass;
    exports.normalizeStyle = normalizeStyle;
    exports.objectToString = objectToString;
    exports.parseStringStyle = parseStringStyle;
    exports.propsToAttrMap = propsToAttrMap;
    exports.remove = remove;
    exports.slotFlagsText = slotFlagsText;
    exports.stringifyStyle = stringifyStyle;
    exports.toDisplayString = toDisplayString;
    exports.toHandlerKey = toHandlerKey;
    exports.toNumber = toNumber;
    exports.toRawType = toRawType;
    exports.toTypeString = toTypeString;
  });
  var require_shared = __commonJS2((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_shared_cjs();
    }
  });
  var require_reactivity_cjs = __commonJS2((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shared = require_shared();
    var targetMap = new WeakMap();
    var effectStack = [];
    var activeEffect;
    var ITERATE_KEY = Symbol("iterate");
    var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
    function isEffect(fn) {
      return fn && fn._isEffect === true;
    }
    function effect3(fn, options = shared.EMPTY_OBJ) {
      if (isEffect(fn)) {
        fn = fn.raw;
      }
      const effect4 = createReactiveEffect(fn, options);
      if (!options.lazy) {
        effect4();
      }
      return effect4;
    }
    function stop2(effect4) {
      if (effect4.active) {
        cleanup(effect4);
        if (effect4.options.onStop) {
          effect4.options.onStop();
        }
        effect4.active = false;
      }
    }
    var uid = 0;
    function createReactiveEffect(fn, options) {
      const effect4 = function reactiveEffect() {
        if (!effect4.active) {
          return fn();
        }
        if (!effectStack.includes(effect4)) {
          cleanup(effect4);
          try {
            enableTracking();
            effectStack.push(effect4);
            activeEffect = effect4;
            return fn();
          } finally {
            effectStack.pop();
            resetTracking();
            activeEffect = effectStack[effectStack.length - 1];
          }
        }
      };
      effect4.id = uid++;
      effect4.allowRecurse = !!options.allowRecurse;
      effect4._isEffect = true;
      effect4.active = true;
      effect4.raw = fn;
      effect4.deps = [];
      effect4.options = options;
      return effect4;
    }
    function cleanup(effect4) {
      const { deps } = effect4;
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].delete(effect4);
        }
        deps.length = 0;
      }
    }
    var shouldTrack = true;
    var trackStack = [];
    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }
    function enableTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = true;
    }
    function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }
    function track(target, type, key) {
      if (!shouldTrack || activeEffect === void 0) {
        return;
      }
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = new Set());
      }
      if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) {
          activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
          });
        }
      }
    }
    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        return;
      }
      const effects = new Set();
      const add2 = (effectsToAdd) => {
        if (effectsToAdd) {
          effectsToAdd.forEach((effect4) => {
            if (effect4 !== activeEffect || effect4.allowRecurse) {
              effects.add(effect4);
            }
          });
        }
      };
      if (type === "clear") {
        depsMap.forEach(add2);
      } else if (key === "length" && shared.isArray(target)) {
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || key2 >= newValue) {
            add2(dep);
          }
        });
      } else {
        if (key !== void 0) {
          add2(depsMap.get(key));
        }
        switch (type) {
          case "add":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (shared.isIntegerKey(key)) {
              add2(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (shared.isMap(target)) {
              add2(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
      const run = (effect4) => {
        if (effect4.options.onTrigger) {
          effect4.options.onTrigger({
            effect: effect4,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
          });
        }
        if (effect4.options.scheduler) {
          effect4.options.scheduler(effect4);
        } else {
          effect4();
        }
      };
      effects.forEach(run);
    }
    var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
    var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
    var get2 = /* @__PURE__ */ createGetter();
    var shallowGet = /* @__PURE__ */ createGetter(false, true);
    var readonlyGet = /* @__PURE__ */ createGetter(true);
    var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
    var arrayInstrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      const method = Array.prototype[key];
      arrayInstrumentations[key] = function(...args) {
        const arr = toRaw2(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = method.apply(arr, args);
        if (res === -1 || res === false) {
          return method.apply(arr, args.map(toRaw2));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      const method = Array.prototype[key];
      arrayInstrumentations[key] = function(...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
      };
    });
    function createGetter(isReadonly2 = false, shallow = false) {
      return function get3(target, key, receiver) {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
          return target;
        }
        const targetIsArray = shared.isArray(target);
        if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key);
        }
        if (shallow) {
          return res;
        }
        if (isRef(res)) {
          const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
          return shouldUnwrap ? res.value : res;
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive3(res);
        }
        return res;
      };
    }
    var set2 = /* @__PURE__ */ createSetter();
    var shallowSet = /* @__PURE__ */ createSetter(true);
    function createSetter(shallow = false) {
      return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
          value = toRaw2(value);
          oldValue = toRaw2(oldValue);
          if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          }
        }
        const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw2(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
        }
        return result;
      };
    }
    function deleteProperty(target, key) {
      const hadKey = shared.hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    function has(target, key) {
      const result = Reflect.has(target, key);
      if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    function ownKeys(target) {
      track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
      return Reflect.ownKeys(target);
    }
    var mutableHandlers = {
      get: get2,
      set: set2,
      deleteProperty,
      has,
      ownKeys
    };
    var readonlyHandlers = {
      get: readonlyGet,
      set(target, key) {
        {
          console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
      },
      deleteProperty(target, key) {
        {
          console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
      }
    };
    var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
      get: shallowGet,
      set: shallowSet
    });
    var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
      get: shallowReadonlyGet
    });
    var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
    var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
    var toShallow = (value) => value;
    var getProto = (v) => Reflect.getPrototypeOf(v);
    function get$1(target, key, isReadonly2 = false, isShallow = false) {
      target = target["__v_raw"];
      const rawTarget = toRaw2(target);
      const rawKey = toRaw2(key);
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "get", key);
      }
      !isReadonly2 && track(rawTarget, "get", rawKey);
      const { has: has2 } = getProto(rawTarget);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    }
    function has$1(key, isReadonly2 = false) {
      const target = this["__v_raw"];
      const rawTarget = toRaw2(target);
      const rawKey = toRaw2(key);
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "has", key);
      }
      !isReadonly2 && track(rawTarget, "has", rawKey);
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    }
    function size(target, isReadonly2 = false) {
      target = target["__v_raw"];
      !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    }
    function add(value) {
      value = toRaw2(value);
      const target = toRaw2(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }
      return this;
    }
    function set$1(key, value) {
      value = toRaw2(value);
      const target = toRaw2(this);
      const { has: has2, get: get3 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }
      const oldValue = get3.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (shared.hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
      return this;
    }
    function deleteEntry(key) {
      const target = toRaw2(this);
      const { has: has2, get: get3 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }
      const oldValue = get3 ? get3.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    function clear() {
      const target = toRaw2(this);
      const hadItems = target.size !== 0;
      const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
      }
      return result;
    }
    function createForEach(isReadonly2, isShallow) {
      return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw2(target);
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      };
    }
    function createIterableMethod(method, isReadonly2, isShallow) {
      return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw2(target);
        const targetIsMap = shared.isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
          next() {
            const { value, done } = innerIterator.next();
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          },
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function createReadonlyMethod(type) {
      return function(...args) {
        {
          const key = args[0] ? `on key "${args[0]}" ` : ``;
          console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
        }
        return type === "delete" ? false : this;
      };
    }
    var mutableInstrumentations = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    var shallowInstrumentations = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    var readonlyInstrumentations = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    var shallowReadonlyInstrumentations = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations[method] = createIterableMethod(method, true, false);
      shallowInstrumentations[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
      return (target, key, receiver) => {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }
        return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
      };
    }
    var mutableCollectionHandlers = {
      get: createInstrumentationGetter(false, false)
    };
    var shallowCollectionHandlers = {
      get: createInstrumentationGetter(false, true)
    };
    var readonlyCollectionHandlers = {
      get: createInstrumentationGetter(true, false)
    };
    var shallowReadonlyCollectionHandlers = {
      get: createInstrumentationGetter(true, true)
    };
    function checkIdentityKeys(target, has2, key) {
      const rawKey = toRaw2(key);
      if (rawKey !== key && has2.call(target, rawKey)) {
        const type = shared.toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
      }
    }
    var reactiveMap = new WeakMap();
    var shallowReactiveMap = new WeakMap();
    var readonlyMap = new WeakMap();
    var shallowReadonlyMap = new WeakMap();
    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function getTargetType(value) {
      return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
    }
    function reactive3(target) {
      if (target && target["__v_isReadonly"]) {
        return target;
      }
      return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
    }
    function shallowReactive(target) {
      return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
    }
    function readonly(target) {
      return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
    }
    function shallowReadonly(target) {
      return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!shared.isObject(target)) {
        {
          console.warn(`value cannot be made reactive: ${String(target)}`);
        }
        return target;
      }
      if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
      proxyMap.set(target, proxy);
      return proxy;
    }
    function isReactive2(value) {
      if (isReadonly(value)) {
        return isReactive2(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }
    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }
    function isProxy(value) {
      return isReactive2(value) || isReadonly(value);
    }
    function toRaw2(observed) {
      return observed && toRaw2(observed["__v_raw"]) || observed;
    }
    function markRaw(value) {
      shared.def(value, "__v_skip", true);
      return value;
    }
    var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
    function isRef(r) {
      return Boolean(r && r.__v_isRef === true);
    }
    function ref(value) {
      return createRef(value);
    }
    function shallowRef(value) {
      return createRef(value, true);
    }
    var RefImpl = class {
      constructor(_rawValue, _shallow = false) {
        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
      }
      get value() {
        track(toRaw2(this), "get", "value");
        return this._value;
      }
      set value(newVal) {
        if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
          this._rawValue = newVal;
          this._value = this._shallow ? newVal : convert(newVal);
          trigger(toRaw2(this), "set", "value", newVal);
        }
      }
    };
    function createRef(rawValue, shallow = false) {
      if (isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    function triggerRef(ref2) {
      trigger(toRaw2(ref2), "set", "value", ref2.value);
    }
    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }
    var shallowUnwrapHandlers = {
      get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    var CustomRefImpl = class {
      constructor(factory) {
        this.__v_isRef = true;
        const { get: get3, set: set3 } = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
        this._get = get3;
        this._set = set3;
      }
      get value() {
        return this._get();
      }
      set value(newVal) {
        this._set(newVal);
      }
    };
    function customRef(factory) {
      return new CustomRefImpl(factory);
    }
    function toRefs(object) {
      if (!isProxy(object)) {
        console.warn(`toRefs() expects a reactive object but received a plain one.`);
      }
      const ret = shared.isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = toRef(object, key);
      }
      return ret;
    }
    var ObjectRefImpl = class {
      constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
      }
      get value() {
        return this._object[this._key];
      }
      set value(newVal) {
        this._object[this._key] = newVal;
      }
    };
    function toRef(object, key) {
      return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
    }
    var ComputedRefImpl = class {
      constructor(getter, _setter, isReadonly2) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect3(getter, {
          lazy: true,
          scheduler: () => {
            if (!this._dirty) {
              this._dirty = true;
              trigger(toRaw2(this), "set", "value");
            }
          }
        });
        this["__v_isReadonly"] = isReadonly2;
      }
      get value() {
        const self2 = toRaw2(this);
        if (self2._dirty) {
          self2._value = this.effect();
          self2._dirty = false;
        }
        track(self2, "get", "value");
        return self2._value;
      }
      set value(newValue) {
        this._setter(newValue);
      }
    };
    function computed(getterOrOptions) {
      let getter;
      let setter;
      if (shared.isFunction(getterOrOptions)) {
        getter = getterOrOptions;
        setter = () => {
          console.warn("Write operation failed: computed value is readonly");
        };
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
    }
    exports.ITERATE_KEY = ITERATE_KEY;
    exports.computed = computed;
    exports.customRef = customRef;
    exports.effect = effect3;
    exports.enableTracking = enableTracking;
    exports.isProxy = isProxy;
    exports.isReactive = isReactive2;
    exports.isReadonly = isReadonly;
    exports.isRef = isRef;
    exports.markRaw = markRaw;
    exports.pauseTracking = pauseTracking;
    exports.proxyRefs = proxyRefs;
    exports.reactive = reactive3;
    exports.readonly = readonly;
    exports.ref = ref;
    exports.resetTracking = resetTracking;
    exports.shallowReactive = shallowReactive;
    exports.shallowReadonly = shallowReadonly;
    exports.shallowRef = shallowRef;
    exports.stop = stop2;
    exports.toRaw = toRaw2;
    exports.toRef = toRef;
    exports.toRefs = toRefs;
    exports.track = track;
    exports.trigger = trigger;
    exports.triggerRef = triggerRef;
    exports.unref = unref;
  });
  var require_reactivity = __commonJS2((exports, module) => {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_reactivity_cjs();
    }
  });
  var flushPending = false;
  var flushing = false;
  var queue = [];
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
    }
    queue.length = 0;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
    };
    return [wrappedEffect, () => {
      cleanup();
    }];
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(callback) {
    onElRemoveds.push(callback);
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = new Map();
    let removedAttributes = new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add();
        } else if (el.hasAttribute(name)) {
          remove();
          add();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      onElAddeds.forEach((i) => i(node));
    }
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function refreshScope(element, scope) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope).forEach(([key, value]) => {
      existingScope[key] = value;
    });
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
      ownKeys: () => {
        return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
      },
      has: (target, name) => {
        return objects.some((obj) => obj.hasOwnProperty(name));
      },
      get: (target, name) => {
        return (objects.find((obj) => {
          if (obj.hasOwnProperty(name)) {
            let descriptor = Object.getOwnPropertyDescriptor(obj, name);
            if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
              return true;
            }
            if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
              let getter = descriptor.get;
              let setter = descriptor.set;
              let property = descriptor;
              getter = getter && getter.bind(thisProxy);
              setter = setter && setter.bind(thisProxy);
              if (getter)
                getter._x_alreadyBound = true;
              if (setter)
                setter._x_alreadyBound = true;
              Object.defineProperty(obj, name, __spreadProps(__spreadValues({}, property), {
                get: getter,
                set: setter
              }));
            }
            return true;
          }
          return false;
        }) || {})[name];
      },
      set: (target, name, value) => {
        let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }
        return true;
      }
    });
    return thisProxy;
  }
  function initInterceptors(data2) {
    let isObject = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(obj).forEach(([key, value]) => {
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, { Alpine: alpine_default, interceptor });
        },
        enumerable: false
      });
    });
    return obj;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }
    let evaluator = generateEvaluatorFromString(dataStack, expression);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(function() {
      return __async(this, null, function* () {
      });
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)/.test(expression) ? `(() => { ${expression} })()` : expression;
    let func = new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression) {
    let func = generateFunctionFromString(expression);
    return (receiver = () => {
    }, { scope = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope, ...dataStack]);
      let promise = func(func, completeScope);
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params);
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params);
        });
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope, params) {
    if (typeof value === "function") {
      let result = value.apply(scope, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope, params));
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      console.warn(`Alpine Expression Error: ${e.message}

Expression: "${expression}"

`, el);
      throw e;
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }
  function directives(el, attributes, originalAttributeOverride) {
    let transformedAttributeMap = {};
    let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler3 = directiveHandlers[directive2.type] || noop;
    let cleanups = [];
    let cleanup = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    onAttributeRemoved(el, directive2.original, doCleanup);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler3.inline && handler3.inline(el, directive2, utilities);
      handler3 = handler3.bind(handler3, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = doCleanup;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "bind",
    "init",
    "for",
    "model",
    "transition",
    "show",
    "if",
    DEFAULT,
    "element"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback) {
    tickStack.push(callback);
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  function start() {
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => nextTick(() => destroyTree(el)));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    if (!el)
      return;
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => el.matches(selector)))
      return el;
    if (!el.parentElement)
      return;
    return closestRoot(el.parentElement, includeInitSelectors);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  function initTree(el, walker = walk) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => cleanupAttributes(el));
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      el.style.setProperty(kebabCase(key), value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache);
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (!expression) {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      enter: (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      leave: (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    let clickAwayCompatibleShow = () => {
      document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
    };
    if (value) {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        queueMicrotask(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function plugin(callback) {
    callback(alpine_default);
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
  }
  function getStores() {
    return stores;
  }
  var isCloning = false;
  function skipDuringClone(callback) {
    return (...args) => isCloning || callback(...args);
  }
  function clone(oldEl, newEl) {
    newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.4.2",
    flushAndStopDeferringMutations,
    disableEffectScheduling,
    setReactivityEngine,
    addRootSelector,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    data
  };
  var alpine_default = Alpine;
  var import_reactivity9 = __toModule2(require_reactivity());
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el) => (key, callback) => {
    let evaluate2 = evaluateLater(el, key);
    let firstTime = true;
    let oldValue;
    effect(() => evaluate2((value) => {
      let div = document.createElement("div");
      div.dataset.throwAway = value;
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
  });
  magic("store", getStores);
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  magic("el", (el) => el);
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded"].includes(name);
  }
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("prevent"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("self"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.target === el && next(e);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, (next, e) => {
        if (el.contains(e.target))
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        next(e);
      });
    }
    handler3 = wrapHandler(handler3, (next, e) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }
      next(e);
    });
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = throttle(handler3, wait);
    }
    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
      });
    }
    listenerTarget.addEventListener(event, handler3, options);
    return () => {
      listenerTarget.removeEventListener(event, handler3, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup }) => {
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = on(el, event, modifiers, (e) => {
      evaluateAssignment(() => {
      }, { scope: {
        $event: e,
        rightSideOfExpression: assigmentFunction
      } });
    });
    cleanup(() => removeListener());
    el._x_forceModelUpdate = () => {
      evaluate2((value) => {
        if (value === void 0 && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el, "value", value));
        delete window.fromModel;
      });
    };
    effect3(() => {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate();
    });
  });
  function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    return (event, currentValue) => {
      return mutateDom(() => {
        if (event instanceof CustomEvent && event.detail !== void 0) {
          return event.detail || event.target.value;
        } else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate(el, expression, {}, false);
    }
    return evaluate(el, expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        el.innerHTML = value;
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value)
      return applyBindingsObject(el, expression, original, effect3);
    if (value === "key")
      return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && expression.match(/\./))
        result = "";
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  });
  function applyBindingsObject(el, expression, original, effect3) {
    let getBindings = evaluateLater(el, expression);
    let cleanupRunners = [];
    effect3(() => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
      getBindings((bindings) => {
        let attributes = Object.entries(bindings).map(([name, value]) => ({ name, value }));
        attributesOnly(attributes).forEach(({ name, value }, index) => {
          attributes[index] = {
            name: `x-bind:${name}`,
            value: `"${value}"`
          };
        });
        directives(el, attributes, original).map((handle) => {
          cleanupRunners.push(handle.runCleanups);
          handle();
        });
      });
    });
  }
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", skipDuringClone((el, { expression }, { cleanup }) => {
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup(() => {
      undo();
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    });
  }));
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let hide = () => mutateDom(() => {
      el.style.display = "none";
      el._x_isShown = false;
    });
    let show = () => mutateDom(() => {
      if (el.style.length === 1 && el.style.display === "none") {
        el.removeAttribute("style");
      } else {
        el.style.removeProperty("display");
      }
      el._x_isShown = true;
    });
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: __spreadValues({ index: key }, scope) });
          scopes.push(scope);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => keys.push(value), { scope: __spreadValues({ index: i }, scope) });
          scopes.push(scope);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          marker.before(elInSpot);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        let scope = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope), templateEl);
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler2() {
  }
  handler2.inline = (el, { expression }, { cleanup }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup(() => delete root._x_refs[expression]);
  };
  directive("ref", handler2);
  directive("if", (el, { expression }, { effect: effect3, cleanup }) => {
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup(() => el._x_undoIf && el._x_undoIf());
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { $event: e }, params: [e] });
    });
    cleanup(() => removeListener());
  }));
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: import_reactivity9.reactive, effect: import_reactivity9.effect, release: import_reactivity9.stop, raw: import_reactivity9.toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // js/app.js
  var import_phoenix = __toModule(require_phoenix());
  var import_phoenix_live_view = __toModule(require_phoenix_live_view());
  var import_topbar = __toModule(require_topbar());
  window.Alpine = module_default;
  module_default.start();
  var Hooks = {};
  Hooks.MaintainAttrs = {
    attrs() {
      return this.el.getAttribute("data-attrs").split(", ");
    },
    beforeUpdate() {
      this.prevAttrs = this.attrs().map((name) => [name, this.el.getAttribute(name)]);
    },
    updated() {
      this.prevAttrs.forEach(([name, val]) => this.el.setAttribute(name, val));
    }
  };
  var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var liveSocket = new import_phoenix_live_view.LiveSocket("/live", import_phoenix.Socket, {
    params: { _csrf_token: csrfToken },
    hooks: Hooks,
    dom: {
      onBeforeElUpdated(from, to) {
        if (from._x_dataStack) {
          window.Alpine.clone(from, to);
        }
      }
    }
  });
  import_topbar.default.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
  window.addEventListener("phx:page-loading-start", (info) => import_topbar.default.show());
  window.addEventListener("phx:page-loading-stop", (info) => import_topbar.default.hide());
  liveSocket.connect();
  window.liveSocket = liveSocket;
})();
/**
 * @license MIT
 * topbar 1.0.0, 2021-01-06
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9waG9lbml4L3ByaXYvc3RhdGljL3Bob2VuaXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9waG9lbml4X2xpdmVfdmlldy9wcml2L3N0YXRpYy9waG9lbml4X2xpdmVfdmlldy5qcyIsICIuLi8uLi8uLi9hc3NldHMvdmVuZG9yL3RvcGJhci5qcyIsICIuLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3Bob2VuaXhfaHRtbC9wcml2L3N0YXRpYy9waG9lbml4X2h0bWwuanMiLCAiLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9hbHBpbmVqcy9kaXN0L21vZHVsZS5lc20uanMiLCAiLi4vLi4vLi4vYXNzZXRzL2pzL2FwcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5QaG9lbml4PXQoKTplLlBob2VuaXg9dCgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKGkpe2lmKHRbaV0pcmV0dXJuIHRbaV0uZXhwb3J0czt2YXIgbz10W2ldPXtpOmksbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtpXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LGkpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDppfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIoaSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKGksbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gaX0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXtlLmV4cG9ydHM9dC5QaG9lbml4PW4oMil9KS5jYWxsKHRoaXMsbigxKSl9LGZ1bmN0aW9uKGUsdCl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGEoZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8cyhlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBvKGUpe3JldHVybihvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiByKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSkpcmV0dXJuO3ZhciBuPVtdLGk9ITAsbz0hMSxyPXZvaWQgMDt0cnl7Zm9yKHZhciBzLGE9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShpPShzPWEubmV4dCgpKS5kb25lKSYmKG4ucHVzaChzLnZhbHVlKSwhdHx8bi5sZW5ndGghPT10KTtpPSEwKTt9Y2F0Y2goZSl7bz0hMCxyPWV9ZmluYWxseXt0cnl7aXx8bnVsbD09YS5yZXR1cm58fGEucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IHJ9fXJldHVybiBufShlLHQpfHxzKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBzKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGEoZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20obik6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP2EoZSx0KTp2b2lkIDB9fWZ1bmN0aW9uIGEoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxpPW5ldyBBcnJheSh0KTtuPHQ7bisrKWlbbl09ZVtuXTtyZXR1cm4gaX1mdW5jdGlvbiBjKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiB1KGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkua2V5LGkpfX1mdW5jdGlvbiBoKGUsdCxuKXtyZXR1cm4gdCYmdShlLnByb3RvdHlwZSx0KSxuJiZ1KGUsbiksZX1uLnIodCksbi5kKHQsXCJDaGFubmVsXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE99KSksbi5kKHQsXCJTZXJpYWxpemVyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIF99KSksbi5kKHQsXCJTb2NrZXRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gSH0pKSxuLmQodCxcIkxvbmdQb2xsXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFV9KSksbi5kKHQsXCJBamF4XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIER9KSksbi5kKHQsXCJQcmVzZW5jZVwiLChmdW5jdGlvbigpe3JldHVybiBNfSkpO3ZhciBsPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6bnVsbCxmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Om51bGwsZD1sfHxmfHx2b2lkIDAscD0wLHY9MSx5PTIsbT0zLGc9XCJjbG9zZWRcIixrPVwiZXJyb3JlZFwiLGI9XCJqb2luZWRcIixqPVwiam9pbmluZ1wiLFQ9XCJsZWF2aW5nXCIsQz1cInBoeF9jbG9zZVwiLFI9XCJwaHhfZXJyb3JcIixFPVwicGh4X2pvaW5cIix3PVwicGh4X3JlcGx5XCIsUz1cInBoeF9sZWF2ZVwiLEE9XCJsb25ncG9sbFwiLEw9XCJ3ZWJzb2NrZXRcIix4PWZ1bmN0aW9uKGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpcmV0dXJuIGU7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGV9fSxQPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4saSxvKXtjKHRoaXMsZSksdGhpcy5jaGFubmVsPXQsdGhpcy5ldmVudD1uLHRoaXMucGF5bG9hZD1pfHxmdW5jdGlvbigpe3JldHVybnt9fSx0aGlzLnJlY2VpdmVkUmVzcD1udWxsLHRoaXMudGltZW91dD1vLHRoaXMudGltZW91dFRpbWVyPW51bGwsdGhpcy5yZWNIb29rcz1bXSx0aGlzLnNlbnQ9ITF9cmV0dXJuIGgoZSxbe2tleTpcInJlc2VuZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMudGltZW91dD1lLHRoaXMucmVzZXQoKSx0aGlzLnNlbmQoKX19LHtrZXk6XCJzZW5kXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmhhc1JlY2VpdmVkKFwidGltZW91dFwiKXx8KHRoaXMuc3RhcnRUaW1lb3V0KCksdGhpcy5zZW50PSEwLHRoaXMuY2hhbm5lbC5zb2NrZXQucHVzaCh7dG9waWM6dGhpcy5jaGFubmVsLnRvcGljLGV2ZW50OnRoaXMuZXZlbnQscGF5bG9hZDp0aGlzLnBheWxvYWQoKSxyZWY6dGhpcy5yZWYsam9pbl9yZWY6dGhpcy5jaGFubmVsLmpvaW5SZWYoKX0pKX19LHtrZXk6XCJyZWNlaXZlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5oYXNSZWNlaXZlZChlKSYmdCh0aGlzLnJlY2VpdmVkUmVzcC5yZXNwb25zZSksdGhpcy5yZWNIb29rcy5wdXNoKHtzdGF0dXM6ZSxjYWxsYmFjazp0fSksdGhpc319LHtrZXk6XCJyZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jYW5jZWxSZWZFdmVudCgpLHRoaXMucmVmPW51bGwsdGhpcy5yZWZFdmVudD1udWxsLHRoaXMucmVjZWl2ZWRSZXNwPW51bGwsdGhpcy5zZW50PSExfX0se2tleTpcIm1hdGNoUmVjZWl2ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RhdHVzLG49ZS5yZXNwb25zZTtlLnJlZjt0aGlzLnJlY0hvb2tzLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3RhdHVzPT09dH0pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jYWxsYmFjayhuKX0pKX19LHtrZXk6XCJjYW5jZWxSZWZFdmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZWZFdmVudCYmdGhpcy5jaGFubmVsLm9mZih0aGlzLnJlZkV2ZW50KX19LHtrZXk6XCJjYW5jZWxUaW1lb3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0VGltZXIpLHRoaXMudGltZW91dFRpbWVyPW51bGx9fSx7a2V5Olwic3RhcnRUaW1lb3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMudGltZW91dFRpbWVyJiZ0aGlzLmNhbmNlbFRpbWVvdXQoKSx0aGlzLnJlZj10aGlzLmNoYW5uZWwuc29ja2V0Lm1ha2VSZWYoKSx0aGlzLnJlZkV2ZW50PXRoaXMuY2hhbm5lbC5yZXBseUV2ZW50TmFtZSh0aGlzLnJlZiksdGhpcy5jaGFubmVsLm9uKHRoaXMucmVmRXZlbnQsKGZ1bmN0aW9uKHQpe2UuY2FuY2VsUmVmRXZlbnQoKSxlLmNhbmNlbFRpbWVvdXQoKSxlLnJlY2VpdmVkUmVzcD10LGUubWF0Y2hSZWNlaXZlKHQpfSkpLHRoaXMudGltZW91dFRpbWVyPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS50cmlnZ2VyKFwidGltZW91dFwiLHt9KX0pLHRoaXMudGltZW91dCl9fSx7a2V5OlwiaGFzUmVjZWl2ZWRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZWNlaXZlZFJlc3AmJnRoaXMucmVjZWl2ZWRSZXNwLnN0YXR1cz09PWV9fSx7a2V5OlwidHJpZ2dlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5jaGFubmVsLnRyaWdnZXIodGhpcy5yZWZFdmVudCx7c3RhdHVzOmUscmVzcG9uc2U6dH0pfX1dKSxlfSgpLE89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixpKXt2YXIgbz10aGlzO2ModGhpcyxlKSx0aGlzLnN0YXRlPWcsdGhpcy50b3BpYz10LHRoaXMucGFyYW1zPXgobnx8e30pLHRoaXMuc29ja2V0PWksdGhpcy5iaW5kaW5ncz1bXSx0aGlzLmJpbmRpbmdSZWY9MCx0aGlzLnRpbWVvdXQ9dGhpcy5zb2NrZXQudGltZW91dCx0aGlzLmpvaW5lZE9uY2U9ITEsdGhpcy5qb2luUHVzaD1uZXcgUCh0aGlzLEUsdGhpcy5wYXJhbXMsdGhpcy50aW1lb3V0KSx0aGlzLnB1c2hCdWZmZXI9W10sdGhpcy5zdGF0ZUNoYW5nZVJlZnM9W10sdGhpcy5yZWpvaW5UaW1lcj1uZXcgTigoZnVuY3Rpb24oKXtvLnNvY2tldC5pc0Nvbm5lY3RlZCgpJiZvLnJlam9pbigpfSksdGhpcy5zb2NrZXQucmVqb2luQWZ0ZXJNcyksdGhpcy5zdGF0ZUNoYW5nZVJlZnMucHVzaCh0aGlzLnNvY2tldC5vbkVycm9yKChmdW5jdGlvbigpe3JldHVybiBvLnJlam9pblRpbWVyLnJlc2V0KCl9KSkpLHRoaXMuc3RhdGVDaGFuZ2VSZWZzLnB1c2godGhpcy5zb2NrZXQub25PcGVuKChmdW5jdGlvbigpe28ucmVqb2luVGltZXIucmVzZXQoKSxvLmlzRXJyb3JlZCgpJiZvLnJlam9pbigpfSkpKSx0aGlzLmpvaW5QdXNoLnJlY2VpdmUoXCJva1wiLChmdW5jdGlvbigpe28uc3RhdGU9YixvLnJlam9pblRpbWVyLnJlc2V0KCksby5wdXNoQnVmZmVyLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNlbmQoKX0pKSxvLnB1c2hCdWZmZXI9W119KSksdGhpcy5qb2luUHVzaC5yZWNlaXZlKFwiZXJyb3JcIiwoZnVuY3Rpb24oKXtvLnN0YXRlPWssby5zb2NrZXQuaXNDb25uZWN0ZWQoKSYmby5yZWpvaW5UaW1lci5zY2hlZHVsZVRpbWVvdXQoKX0pKSx0aGlzLm9uQ2xvc2UoKGZ1bmN0aW9uKCl7by5yZWpvaW5UaW1lci5yZXNldCgpLG8uc29ja2V0Lmhhc0xvZ2dlcigpJiZvLnNvY2tldC5sb2coXCJjaGFubmVsXCIsXCJjbG9zZSBcIi5jb25jYXQoby50b3BpYyxcIiBcIikuY29uY2F0KG8uam9pblJlZigpKSksby5zdGF0ZT1nLG8uc29ja2V0LnJlbW92ZShvKX0pKSx0aGlzLm9uRXJyb3IoKGZ1bmN0aW9uKGUpe28uc29ja2V0Lmhhc0xvZ2dlcigpJiZvLnNvY2tldC5sb2coXCJjaGFubmVsXCIsXCJlcnJvciBcIi5jb25jYXQoby50b3BpYyksZSksby5pc0pvaW5pbmcoKSYmby5qb2luUHVzaC5yZXNldCgpLG8uc3RhdGU9ayxvLnNvY2tldC5pc0Nvbm5lY3RlZCgpJiZvLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpfSkpLHRoaXMuam9pblB1c2gucmVjZWl2ZShcInRpbWVvdXRcIiwoZnVuY3Rpb24oKXtvLnNvY2tldC5oYXNMb2dnZXIoKSYmby5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLFwidGltZW91dCBcIi5jb25jYXQoby50b3BpYyxcIiAoXCIpLmNvbmNhdChvLmpvaW5SZWYoKSxcIilcIiksby5qb2luUHVzaC50aW1lb3V0KSxuZXcgUChvLFMseCh7fSksby50aW1lb3V0KS5zZW5kKCksby5zdGF0ZT1rLG8uam9pblB1c2gucmVzZXQoKSxvLnNvY2tldC5pc0Nvbm5lY3RlZCgpJiZvLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpfSkpLHRoaXMub24odywoZnVuY3Rpb24oZSx0KXtvLnRyaWdnZXIoby5yZXBseUV2ZW50TmFtZSh0KSxlKX0pKX1yZXR1cm4gaChlLFt7a2V5Olwiam9pblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMudGltZW91dDtpZih0aGlzLmpvaW5lZE9uY2UpdGhyb3cgbmV3IEVycm9yKFwidHJpZWQgdG8gam9pbiBtdWx0aXBsZSB0aW1lcy4gJ2pvaW4nIGNhbiBvbmx5IGJlIGNhbGxlZCBhIHNpbmdsZSB0aW1lIHBlciBjaGFubmVsIGluc3RhbmNlXCIpO3JldHVybiB0aGlzLnRpbWVvdXQ9ZSx0aGlzLmpvaW5lZE9uY2U9ITAsdGhpcy5yZWpvaW4oKSx0aGlzLmpvaW5QdXNofX0se2tleTpcIm9uQ2xvc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLm9uKEMsZSl9fSx7a2V5Olwib25FcnJvclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKFIsKGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfSkpfX0se2tleTpcIm9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmJpbmRpbmdSZWYrKztyZXR1cm4gdGhpcy5iaW5kaW5ncy5wdXNoKHtldmVudDplLHJlZjpuLGNhbGxiYWNrOnR9KSxufX0se2tleTpcIm9mZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5iaW5kaW5ncz10aGlzLmJpbmRpbmdzLmZpbHRlcigoZnVuY3Rpb24obil7cmV0dXJuIShuLmV2ZW50PT09ZSYmKHZvaWQgMD09PXR8fHQ9PT1uLnJlZikpfSkpfX0se2tleTpcImNhblB1c2hcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpJiZ0aGlzLmlzSm9pbmVkKCl9fSx7a2V5OlwicHVzaFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnRoaXMudGltZW91dDtpZih0PXR8fHt9LCF0aGlzLmpvaW5lZE9uY2UpdGhyb3cgbmV3IEVycm9yKFwidHJpZWQgdG8gcHVzaCAnXCIuY29uY2F0KGUsXCInIHRvICdcIikuY29uY2F0KHRoaXMudG9waWMsXCInIGJlZm9yZSBqb2luaW5nLiBVc2UgY2hhbm5lbC5qb2luKCkgYmVmb3JlIHB1c2hpbmcgZXZlbnRzXCIpKTt2YXIgaT1uZXcgUCh0aGlzLGUsKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KSxuKTtyZXR1cm4gdGhpcy5jYW5QdXNoKCk/aS5zZW5kKCk6KGkuc3RhcnRUaW1lb3V0KCksdGhpcy5wdXNoQnVmZmVyLnB1c2goaSkpLGl9fSx7a2V5OlwibGVhdmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy50aW1lb3V0O3RoaXMucmVqb2luVGltZXIucmVzZXQoKSx0aGlzLmpvaW5QdXNoLmNhbmNlbFRpbWVvdXQoKSx0aGlzLnN0YXRlPVQ7dmFyIG49ZnVuY3Rpb24oKXtlLnNvY2tldC5oYXNMb2dnZXIoKSYmZS5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLFwibGVhdmUgXCIuY29uY2F0KGUudG9waWMpKSxlLnRyaWdnZXIoQyxcImxlYXZlXCIpfSxpPW5ldyBQKHRoaXMsUyx4KHt9KSx0KTtyZXR1cm4gaS5yZWNlaXZlKFwib2tcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbigpfSkpLnJlY2VpdmUoXCJ0aW1lb3V0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG4oKX0pKSxpLnNlbmQoKSx0aGlzLmNhblB1c2goKXx8aS50cmlnZ2VyKFwib2tcIix7fSksaX19LHtrZXk6XCJvbk1lc3NhZ2VcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHR9fSx7a2V5OlwiaXNNZW1iZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpKXtyZXR1cm4gdGhpcy50b3BpYz09PWUmJighaXx8aT09PXRoaXMuam9pblJlZigpfHwodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkmJnRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIixcImRyb3BwaW5nIG91dGRhdGVkIG1lc3NhZ2VcIix7dG9waWM6ZSxldmVudDp0LHBheWxvYWQ6bixqb2luUmVmOml9KSwhMSkpfX0se2tleTpcImpvaW5SZWZcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmpvaW5QdXNoLnJlZn19LHtrZXk6XCJyZWpvaW5cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp0aGlzLnRpbWVvdXQ7dGhpcy5pc0xlYXZpbmcoKXx8KHRoaXMuc29ja2V0LmxlYXZlT3BlblRvcGljKHRoaXMudG9waWMpLHRoaXMuc3RhdGU9aix0aGlzLmpvaW5QdXNoLnJlc2VuZChlKSl9fSx7a2V5OlwidHJpZ2dlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvPXRoaXMub25NZXNzYWdlKGUsdCxuLGkpO2lmKHQmJiFvKXRocm93IG5ldyBFcnJvcihcImNoYW5uZWwgb25NZXNzYWdlIGNhbGxiYWNrcyBtdXN0IHJldHVybiB0aGUgcGF5bG9hZCwgbW9kaWZpZWQgb3IgdW5tb2RpZmllZFwiKTtmb3IodmFyIHI9dGhpcy5iaW5kaW5ncy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmV2ZW50PT09ZX0pKSxzPTA7czxyLmxlbmd0aDtzKyspe3Jbc10uY2FsbGJhY2sobyxuLGl8fHRoaXMuam9pblJlZigpKX19fSx7a2V5OlwicmVwbHlFdmVudE5hbWVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm5cImNoYW5fcmVwbHlfXCIuY29uY2F0KGUpfX0se2tleTpcImlzQ2xvc2VkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGF0ZT09PWd9fSx7a2V5OlwiaXNFcnJvcmVkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGF0ZT09PWt9fSx7a2V5OlwiaXNKb2luZWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlPT09Yn19LHtrZXk6XCJpc0pvaW5pbmdcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlPT09an19LHtrZXk6XCJpc0xlYXZpbmdcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlPT09VH19XSksZX0oKSxfPXtIRUFERVJfTEVOR1RIOjEsTUVUQV9MRU5HVEg6NCxLSU5EUzp7cHVzaDowLHJlcGx5OjEsYnJvYWRjYXN0OjJ9LGVuY29kZTpmdW5jdGlvbihlLHQpe2lmKGUucGF5bG9hZC5jb25zdHJ1Y3Rvcj09PUFycmF5QnVmZmVyKXJldHVybiB0KHRoaXMuYmluYXJ5RW5jb2RlKGUpKTt2YXIgbj1bZS5qb2luX3JlZixlLnJlZixlLnRvcGljLGUuZXZlbnQsZS5wYXlsb2FkXTtyZXR1cm4gdChKU09OLnN0cmluZ2lmeShuKSl9LGRlY29kZTpmdW5jdGlvbihlLHQpe2lmKGUuY29uc3RydWN0b3I9PT1BcnJheUJ1ZmZlcilyZXR1cm4gdCh0aGlzLmJpbmFyeURlY29kZShlKSk7dmFyIG49cihKU09OLnBhcnNlKGUpLDUpO3JldHVybiB0KHtqb2luX3JlZjpuWzBdLHJlZjpuWzFdLHRvcGljOm5bMl0sZXZlbnQ6blszXSxwYXlsb2FkOm5bNF19KX0sYmluYXJ5RW5jb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuam9pbl9yZWYsbj1lLnJlZixpPWUuZXZlbnQsbz1lLnRvcGljLHI9ZS5wYXlsb2FkLHM9dGhpcy5NRVRBX0xFTkdUSCt0Lmxlbmd0aCtuLmxlbmd0aCtvLmxlbmd0aCtpLmxlbmd0aCxhPW5ldyBBcnJheUJ1ZmZlcih0aGlzLkhFQURFUl9MRU5HVEgrcyksYz1uZXcgRGF0YVZpZXcoYSksdT0wO2Muc2V0VWludDgodSsrLHRoaXMuS0lORFMucHVzaCksYy5zZXRVaW50OCh1KyssdC5sZW5ndGgpLGMuc2V0VWludDgodSsrLG4ubGVuZ3RoKSxjLnNldFVpbnQ4KHUrKyxvLmxlbmd0aCksYy5zZXRVaW50OCh1KyssaS5sZW5ndGgpLEFycmF5LmZyb20odCwoZnVuY3Rpb24oZSl7cmV0dXJuIGMuc2V0VWludDgodSsrLGUuY2hhckNvZGVBdCgwKSl9KSksQXJyYXkuZnJvbShuLChmdW5jdGlvbihlKXtyZXR1cm4gYy5zZXRVaW50OCh1KyssZS5jaGFyQ29kZUF0KDApKX0pKSxBcnJheS5mcm9tKG8sKGZ1bmN0aW9uKGUpe3JldHVybiBjLnNldFVpbnQ4KHUrKyxlLmNoYXJDb2RlQXQoMCkpfSkpLEFycmF5LmZyb20oaSwoZnVuY3Rpb24oZSl7cmV0dXJuIGMuc2V0VWludDgodSsrLGUuY2hhckNvZGVBdCgwKSl9KSk7dmFyIGg9bmV3IFVpbnQ4QXJyYXkoYS5ieXRlTGVuZ3RoK3IuYnl0ZUxlbmd0aCk7cmV0dXJuIGguc2V0KG5ldyBVaW50OEFycmF5KGEpLDApLGguc2V0KG5ldyBVaW50OEFycmF5KHIpLGEuYnl0ZUxlbmd0aCksaC5idWZmZXJ9LGJpbmFyeURlY29kZTpmdW5jdGlvbihlKXt2YXIgdD1uZXcgRGF0YVZpZXcoZSksbj10LmdldFVpbnQ4KDApLGk9bmV3IFRleHREZWNvZGVyO3N3aXRjaChuKXtjYXNlIHRoaXMuS0lORFMucHVzaDpyZXR1cm4gdGhpcy5kZWNvZGVQdXNoKGUsdCxpKTtjYXNlIHRoaXMuS0lORFMucmVwbHk6cmV0dXJuIHRoaXMuZGVjb2RlUmVwbHkoZSx0LGkpO2Nhc2UgdGhpcy5LSU5EUy5icm9hZGNhc3Q6cmV0dXJuIHRoaXMuZGVjb2RlQnJvYWRjYXN0KGUsdCxpKX19LGRlY29kZVB1c2g6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXQuZ2V0VWludDgoMSksbz10LmdldFVpbnQ4KDIpLHI9dC5nZXRVaW50OCgzKSxzPXRoaXMuSEVBREVSX0xFTkdUSCt0aGlzLk1FVEFfTEVOR1RILTEsYT1uLmRlY29kZShlLnNsaWNlKHMscytpKSk7cys9aTt2YXIgYz1uLmRlY29kZShlLnNsaWNlKHMscytvKSk7cys9bzt2YXIgdT1uLmRlY29kZShlLnNsaWNlKHMscytyKSk7cmV0dXJuIHMrPXIse2pvaW5fcmVmOmEscmVmOm51bGwsdG9waWM6YyxldmVudDp1LHBheWxvYWQ6ZS5zbGljZShzLGUuYnl0ZUxlbmd0aCl9fSxkZWNvZGVSZXBseTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dC5nZXRVaW50OCgxKSxvPXQuZ2V0VWludDgoMikscj10LmdldFVpbnQ4KDMpLHM9dC5nZXRVaW50OCg0KSxhPXRoaXMuSEVBREVSX0xFTkdUSCt0aGlzLk1FVEFfTEVOR1RILGM9bi5kZWNvZGUoZS5zbGljZShhLGEraSkpO2ErPWk7dmFyIHU9bi5kZWNvZGUoZS5zbGljZShhLGErbykpO2ErPW87dmFyIGg9bi5kZWNvZGUoZS5zbGljZShhLGErcikpO2ErPXI7dmFyIGw9bi5kZWNvZGUoZS5zbGljZShhLGErcykpO2ErPXM7dmFyIGY9ZS5zbGljZShhLGUuYnl0ZUxlbmd0aCk7cmV0dXJue2pvaW5fcmVmOmMscmVmOnUsdG9waWM6aCxldmVudDp3LHBheWxvYWQ6e3N0YXR1czpsLHJlc3BvbnNlOmZ9fX0sZGVjb2RlQnJvYWRjYXN0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10LmdldFVpbnQ4KDEpLG89dC5nZXRVaW50OCgyKSxyPXRoaXMuSEVBREVSX0xFTkdUSCsyLHM9bi5kZWNvZGUoZS5zbGljZShyLHIraSkpO3IrPWk7dmFyIGE9bi5kZWNvZGUoZS5zbGljZShyLHIrbykpO3JldHVybiByKz1vLHtqb2luX3JlZjpudWxsLHJlZjpudWxsLHRvcGljOnMsZXZlbnQ6YSxwYXlsb2FkOmUuc2xpY2UocixlLmJ5dGVMZW5ndGgpfX19LEg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBuPXRoaXMsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307Yyh0aGlzLGUpLHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3M9e29wZW46W10sY2xvc2U6W10sZXJyb3I6W10sbWVzc2FnZTpbXX0sdGhpcy5jaGFubmVscz1bXSx0aGlzLnNlbmRCdWZmZXI9W10sdGhpcy5yZWY9MCx0aGlzLnRpbWVvdXQ9aS50aW1lb3V0fHwxZTQsdGhpcy50cmFuc3BvcnQ9aS50cmFuc3BvcnR8fGQuV2ViU29ja2V0fHxVLHRoaXMuZGVmYXVsdEVuY29kZXI9Xy5lbmNvZGUuYmluZChfKSx0aGlzLmRlZmF1bHREZWNvZGVyPV8uZGVjb2RlLmJpbmQoXyksdGhpcy5jbG9zZVdhc0NsZWFuPSExLHRoaXMudW5sb2FkZWQ9ITEsdGhpcy5iaW5hcnlUeXBlPWkuYmluYXJ5VHlwZXx8XCJhcnJheWJ1ZmZlclwiLHRoaXMudHJhbnNwb3J0IT09VT8odGhpcy5lbmNvZGU9aS5lbmNvZGV8fHRoaXMuZGVmYXVsdEVuY29kZXIsdGhpcy5kZWNvZGU9aS5kZWNvZGV8fHRoaXMuZGVmYXVsdERlY29kZXIpOih0aGlzLmVuY29kZT10aGlzLmRlZmF1bHRFbmNvZGVyLHRoaXMuZGVjb2RlPXRoaXMuZGVmYXVsdERlY29kZXIpLGYmJmYuYWRkRXZlbnRMaXN0ZW5lciYmZi5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsKGZ1bmN0aW9uKGUpe24uY29ubiYmKG4udW5sb2FkZWQ9ITAsbi5hYm5vcm1hbENsb3NlKFwidW5sb2FkZWRcIikpfSkpLHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcz1pLmhlYXJ0YmVhdEludGVydmFsTXN8fDNlNCx0aGlzLnJlam9pbkFmdGVyTXM9ZnVuY3Rpb24oZSl7cmV0dXJuIGkucmVqb2luQWZ0ZXJNcz9pLnJlam9pbkFmdGVyTXMoZSk6WzFlMywyZTMsNWUzXVtlLTFdfHwxZTR9LHRoaXMucmVjb25uZWN0QWZ0ZXJNcz1mdW5jdGlvbihlKXtyZXR1cm4gbi51bmxvYWRlZD8xMDA6aS5yZWNvbm5lY3RBZnRlck1zP2kucmVjb25uZWN0QWZ0ZXJNcyhlKTpbMTAsNTAsMTAwLDE1MCwyMDAsMjUwLDUwMCwxZTMsMmUzXVtlLTFdfHw1ZTN9LHRoaXMubG9nZ2VyPWkubG9nZ2VyfHxudWxsLHRoaXMubG9uZ3BvbGxlclRpbWVvdXQ9aS5sb25ncG9sbGVyVGltZW91dHx8MmU0LHRoaXMucGFyYW1zPXgoaS5wYXJhbXN8fHt9KSx0aGlzLmVuZFBvaW50PVwiXCIuY29uY2F0KHQsXCIvXCIpLmNvbmNhdChMKSx0aGlzLnZzbj1pLnZzbnx8XCIyLjAuMFwiLHRoaXMuaGVhcnRiZWF0VGltZXI9bnVsbCx0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWY9bnVsbCx0aGlzLnJlY29ubmVjdFRpbWVyPW5ldyBOKChmdW5jdGlvbigpe24udGVhcmRvd24oKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY29ubmVjdCgpfSkpfSksdGhpcy5yZWNvbm5lY3RBZnRlck1zKX1yZXR1cm4gaChlLFt7a2V5OlwicHJvdG9jb2xcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBsb2NhdGlvbi5wcm90b2NvbC5tYXRjaCgvXmh0dHBzLyk/XCJ3c3NcIjpcIndzXCJ9fSx7a2V5OlwiZW5kUG9pbnRVUkxcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPUQuYXBwZW5kUGFyYW1zKEQuYXBwZW5kUGFyYW1zKHRoaXMuZW5kUG9pbnQsdGhpcy5wYXJhbXMoKSkse3Zzbjp0aGlzLnZzbn0pO3JldHVyblwiL1wiIT09ZS5jaGFyQXQoMCk/ZTpcIi9cIj09PWUuY2hhckF0KDEpP1wiXCIuY29uY2F0KHRoaXMucHJvdG9jb2woKSxcIjpcIikuY29uY2F0KGUpOlwiXCIuY29uY2F0KHRoaXMucHJvdG9jb2woKSxcIjovL1wiKS5jb25jYXQobG9jYXRpb24uaG9zdCkuY29uY2F0KGUpfX0se2tleTpcImRpc2Nvbm5lY3RcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dGhpcy5jbG9zZVdhc0NsZWFuPSEwLHRoaXMucmVjb25uZWN0VGltZXIucmVzZXQoKSx0aGlzLnRlYXJkb3duKGUsdCxuKX19LHtrZXk6XCJjb25uZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlJiYoY29uc29sZSYmY29uc29sZS5sb2coXCJwYXNzaW5nIHBhcmFtcyB0byBjb25uZWN0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgcGFzcyA6cGFyYW1zIHRvIHRoZSBTb2NrZXQgY29uc3RydWN0b3JcIiksdGhpcy5wYXJhbXM9eChlKSksdGhpcy5jb25ufHwodGhpcy5jbG9zZVdhc0NsZWFuPSExLHRoaXMuY29ubj1uZXcgdGhpcy50cmFuc3BvcnQodGhpcy5lbmRQb2ludFVSTCgpKSx0aGlzLmNvbm4uYmluYXJ5VHlwZT10aGlzLmJpbmFyeVR5cGUsdGhpcy5jb25uLnRpbWVvdXQ9dGhpcy5sb25ncG9sbGVyVGltZW91dCx0aGlzLmNvbm4ub25vcGVuPWZ1bmN0aW9uKCl7cmV0dXJuIHQub25Db25uT3BlbigpfSx0aGlzLmNvbm4ub25lcnJvcj1mdW5jdGlvbihlKXtyZXR1cm4gdC5vbkNvbm5FcnJvcihlKX0sdGhpcy5jb25uLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtyZXR1cm4gdC5vbkNvbm5NZXNzYWdlKGUpfSx0aGlzLmNvbm4ub25jbG9zZT1mdW5jdGlvbihlKXtyZXR1cm4gdC5vbkNvbm5DbG9zZShlKX0pfX0se2tleTpcImxvZ1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt0aGlzLmxvZ2dlcihlLHQsbil9fSx7a2V5OlwiaGFzTG9nZ2VyXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMubG9nZ2VyfX0se2tleTpcIm9uT3BlblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubWFrZVJlZigpO3JldHVybiB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLm9wZW4ucHVzaChbdCxlXSksdH19LHtrZXk6XCJvbkNsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5tYWtlUmVmKCk7cmV0dXJuIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuY2xvc2UucHVzaChbdCxlXSksdH19LHtrZXk6XCJvbkVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5tYWtlUmVmKCk7cmV0dXJuIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuZXJyb3IucHVzaChbdCxlXSksdH19LHtrZXk6XCJvbk1lc3NhZ2VcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm1ha2VSZWYoKTtyZXR1cm4gdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlLnB1c2goW3QsZV0pLHR9fSx7a2V5Olwib25Db25uT3BlblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5oYXNMb2dnZXIoKSYmdGhpcy5sb2coXCJ0cmFuc3BvcnRcIixcImNvbm5lY3RlZCB0byBcIi5jb25jYXQodGhpcy5lbmRQb2ludFVSTCgpKSksdGhpcy51bmxvYWRlZD0hMSx0aGlzLmNsb3NlV2FzQ2xlYW49ITEsdGhpcy5mbHVzaFNlbmRCdWZmZXIoKSx0aGlzLnJlY29ubmVjdFRpbWVyLnJlc2V0KCksdGhpcy5yZXNldEhlYXJ0YmVhdCgpLHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Mub3Blbi5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4oMCxyKGUsMilbMV0pKCl9KSl9fSx7a2V5OlwiaGVhcnRiZWF0VGltZW91dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmJiYodGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmPW51bGwsdGhpcy5oYXNMb2dnZXIoKSYmdGhpcy5sb2coXCJ0cmFuc3BvcnRcIixcImhlYXJ0YmVhdCB0aW1lb3V0LiBBdHRlbXB0aW5nIHRvIHJlLWVzdGFibGlzaCBjb25uZWN0aW9uXCIpLHRoaXMuYWJub3JtYWxDbG9zZShcImhlYXJ0YmVhdCB0aW1lb3V0XCIpKX19LHtrZXk6XCJyZXNldEhlYXJ0YmVhdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmNvbm4mJnRoaXMuY29ubi5za2lwSGVhcnRiZWF0fHwodGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmPW51bGwsY2xlYXJUaW1lb3V0KHRoaXMuaGVhcnRiZWF0VGltZXIpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIGUuc2VuZEhlYXJ0YmVhdCgpfSksdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zKSl9fSx7a2V5OlwidGVhcmRvd25cIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcztpZighdGhpcy5jb25uKXJldHVybiBlJiZlKCk7dGhpcy53YWl0Rm9yQnVmZmVyRG9uZSgoZnVuY3Rpb24oKXtpLmNvbm4mJih0P2kuY29ubi5jbG9zZSh0LG58fFwiXCIpOmkuY29ubi5jbG9zZSgpKSxpLndhaXRGb3JTb2NrZXRDbG9zZWQoKGZ1bmN0aW9uKCl7aS5jb25uJiYoaS5jb25uLm9uY2xvc2U9ZnVuY3Rpb24oKXt9LGkuY29ubj1udWxsKSxlJiZlKCl9KSl9KSl9fSx7a2V5Olwid2FpdEZvckJ1ZmZlckRvbmVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjE7NSE9PW4mJnRoaXMuY29ubiYmdGhpcy5jb25uLmJ1ZmZlcmVkQW1vdW50P3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC53YWl0Rm9yQnVmZmVyRG9uZShlLG4rMSl9KSwxNTAqbik6ZSgpfX0se2tleTpcIndhaXRGb3JTb2NrZXRDbG9zZWRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjE7NSE9PW4mJnRoaXMuY29ubiYmdGhpcy5jb25uLnJlYWR5U3RhdGUhPT1tP3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC53YWl0Rm9yU29ja2V0Q2xvc2VkKGUsbisxKX0pLDE1MCpuKTplKCl9fSx7a2V5Olwib25Db25uQ2xvc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmhhc0xvZ2dlcigpJiZ0aGlzLmxvZyhcInRyYW5zcG9ydFwiLFwiY2xvc2VcIixlKSx0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKSxjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lciksdGhpcy5jbG9zZVdhc0NsZWFufHx0aGlzLnJlY29ubmVjdFRpbWVyLnNjaGVkdWxlVGltZW91dCgpLHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuY2xvc2UuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuKDAscih0LDIpWzFdKShlKX0pKX19LHtrZXk6XCJvbkNvbm5FcnJvclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuaGFzTG9nZ2VyKCkmJnRoaXMubG9nKFwidHJhbnNwb3J0XCIsZSksdGhpcy50cmlnZ2VyQ2hhbkVycm9yKCksdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5lcnJvci5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4oMCxyKHQsMilbMV0pKGUpfSkpfX0se2tleTpcInRyaWdnZXJDaGFuRXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuY2hhbm5lbHMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5pc0Vycm9yZWQoKXx8ZS5pc0xlYXZpbmcoKXx8ZS5pc0Nsb3NlZCgpfHxlLnRyaWdnZXIoUil9KSl9fSx7a2V5OlwiY29ubmVjdGlvblN0YXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXtzd2l0Y2godGhpcy5jb25uJiZ0aGlzLmNvbm4ucmVhZHlTdGF0ZSl7Y2FzZSBwOnJldHVyblwiY29ubmVjdGluZ1wiO2Nhc2UgdjpyZXR1cm5cIm9wZW5cIjtjYXNlIHk6cmV0dXJuXCJjbG9zaW5nXCI7ZGVmYXVsdDpyZXR1cm5cImNsb3NlZFwifX19LHtrZXk6XCJpc0Nvbm5lY3RlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJvcGVuXCI9PT10aGlzLmNvbm5lY3Rpb25TdGF0ZSgpfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMub2ZmKGUuc3RhdGVDaGFuZ2VSZWZzKSx0aGlzLmNoYW5uZWxzPXRoaXMuY2hhbm5lbHMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5qb2luUmVmKCkhPT1lLmpvaW5SZWYoKX0pKX19LHtrZXk6XCJvZmZcIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcyl0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzW3RdPXRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3NbdF0uZmlsdGVyKChmdW5jdGlvbih0KXt2YXIgbj1yKHQsMSlbMF07cmV0dXJuLTE9PT1lLmluZGV4T2Yobil9KSl9fSx7a2V5OlwiY2hhbm5lbFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxuPW5ldyBPKGUsdCx0aGlzKTtyZXR1cm4gdGhpcy5jaGFubmVscy5wdXNoKG4pLG59fSx7a2V5OlwicHVzaFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYodGhpcy5oYXNMb2dnZXIoKSl7dmFyIG49ZS50b3BpYyxpPWUuZXZlbnQsbz1lLnBheWxvYWQscj1lLnJlZixzPWUuam9pbl9yZWY7dGhpcy5sb2coXCJwdXNoXCIsXCJcIi5jb25jYXQobixcIiBcIikuY29uY2F0KGksXCIgKFwiKS5jb25jYXQocyxcIiwgXCIpLmNvbmNhdChyLFwiKVwiKSxvKX10aGlzLmlzQ29ubmVjdGVkKCk/dGhpcy5lbmNvZGUoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIHQuY29ubi5zZW5kKGUpfSkpOnRoaXMuc2VuZEJ1ZmZlci5wdXNoKChmdW5jdGlvbigpe3JldHVybiB0LmVuY29kZShlLChmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25uLnNlbmQoZSl9KSl9KSl9fSx7a2V5OlwibWFrZVJlZlwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5yZWYrMTtyZXR1cm4gZT09PXRoaXMucmVmP3RoaXMucmVmPTA6dGhpcy5yZWY9ZSx0aGlzLnJlZi50b1N0cmluZygpfX0se2tleTpcInNlbmRIZWFydGJlYXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmJiYhdGhpcy5pc0Nvbm5lY3RlZCgpfHwodGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmPXRoaXMubWFrZVJlZigpLHRoaXMucHVzaCh7dG9waWM6XCJwaG9lbml4XCIsZXZlbnQ6XCJoZWFydGJlYXRcIixwYXlsb2FkOnt9LHJlZjp0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWZ9KSx0aGlzLmhlYXJ0YmVhdFRpbWVyPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIGUuaGVhcnRiZWF0VGltZW91dCgpfSksdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zKSl9fSx7a2V5OlwiYWJub3JtYWxDbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY2xvc2VXYXNDbGVhbj0hMSx0aGlzLmlzQ29ubmVjdGVkKCkmJnRoaXMuY29ubi5jbG9zZSgxZTMsZSl9fSx7a2V5OlwiZmx1c2hTZW5kQnVmZmVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmlzQ29ubmVjdGVkKCkmJnRoaXMuc2VuZEJ1ZmZlci5sZW5ndGg+MCYmKHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZSgpfSkpLHRoaXMuc2VuZEJ1ZmZlcj1bXSl9fSx7a2V5Olwib25Db25uTWVzc2FnZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dGhpcy5kZWNvZGUoZS5kYXRhLChmdW5jdGlvbihlKXt2YXIgbj1lLnRvcGljLGk9ZS5ldmVudCxvPWUucGF5bG9hZCxzPWUucmVmLGE9ZS5qb2luX3JlZjtzJiZzPT09dC5wZW5kaW5nSGVhcnRiZWF0UmVmJiYoY2xlYXJUaW1lb3V0KHQuaGVhcnRiZWF0VGltZXIpLHQucGVuZGluZ0hlYXJ0YmVhdFJlZj1udWxsLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIHQuc2VuZEhlYXJ0YmVhdCgpfSksdC5oZWFydGJlYXRJbnRlcnZhbE1zKSksdC5oYXNMb2dnZXIoKSYmdC5sb2coXCJyZWNlaXZlXCIsXCJcIi5jb25jYXQoby5zdGF0dXN8fFwiXCIsXCIgXCIpLmNvbmNhdChuLFwiIFwiKS5jb25jYXQoaSxcIiBcIikuY29uY2F0KHMmJlwiKFwiK3MrXCIpXCJ8fFwiXCIpLG8pO2Zvcih2YXIgYz0wO2M8dC5jaGFubmVscy5sZW5ndGg7YysrKXt2YXIgdT10LmNoYW5uZWxzW2NdO3UuaXNNZW1iZXIobixpLG8sYSkmJnUudHJpZ2dlcihpLG8scyxhKX1mb3IodmFyIGg9MDtoPHQuc3RhdGVDaGFuZ2VDYWxsYmFja3MubWVzc2FnZS5sZW5ndGg7aCsrKXsoMCxyKHQuc3RhdGVDaGFuZ2VDYWxsYmFja3MubWVzc2FnZVtoXSwyKVsxXSkoZSl9fSkpfX0se2tleTpcImxlYXZlT3BlblRvcGljXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jaGFubmVscy5maW5kKChmdW5jdGlvbih0KXtyZXR1cm4gdC50b3BpYz09PWUmJih0LmlzSm9pbmVkKCl8fHQuaXNKb2luaW5nKCkpfSkpO3QmJih0aGlzLmhhc0xvZ2dlcigpJiZ0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCdsZWF2aW5nIGR1cGxpY2F0ZSB0b3BpYyBcIicuY29uY2F0KGUsJ1wiJykpLHQubGVhdmUoKSl9fV0pLGV9KCksVT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7Yyh0aGlzLGUpLHRoaXMuZW5kUG9pbnQ9bnVsbCx0aGlzLnRva2VuPW51bGwsdGhpcy5za2lwSGVhcnRiZWF0PSEwLHRoaXMub25vcGVuPWZ1bmN0aW9uKCl7fSx0aGlzLm9uZXJyb3I9ZnVuY3Rpb24oKXt9LHRoaXMub25tZXNzYWdlPWZ1bmN0aW9uKCl7fSx0aGlzLm9uY2xvc2U9ZnVuY3Rpb24oKXt9LHRoaXMucG9sbEVuZHBvaW50PXRoaXMubm9ybWFsaXplRW5kcG9pbnQodCksdGhpcy5yZWFkeVN0YXRlPXAsdGhpcy5wb2xsKCl9cmV0dXJuIGgoZSxbe2tleTpcIm5vcm1hbGl6ZUVuZHBvaW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShcIndzOi8vXCIsXCJodHRwOi8vXCIpLnJlcGxhY2UoXCJ3c3M6Ly9cIixcImh0dHBzOi8vXCIpLnJlcGxhY2UobmV3IFJlZ0V4cChcIiguKikvXCIrTCksXCIkMS9cIitBKX19LHtrZXk6XCJlbmRwb2ludFVSTFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIEQuYXBwZW5kUGFyYW1zKHRoaXMucG9sbEVuZHBvaW50LHt0b2tlbjp0aGlzLnRva2VufSl9fSx7a2V5OlwiY2xvc2VBbmRSZXRyeVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jbG9zZSgpLHRoaXMucmVhZHlTdGF0ZT1wfX0se2tleTpcIm9udGltZW91dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5vbmVycm9yKFwidGltZW91dFwiKSx0aGlzLmNsb3NlQW5kUmV0cnkoKX19LHtrZXk6XCJwb2xsXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucmVhZHlTdGF0ZSE9PXYmJnRoaXMucmVhZHlTdGF0ZSE9PXB8fEQucmVxdWVzdChcIkdFVFwiLHRoaXMuZW5kcG9pbnRVUkwoKSxcImFwcGxpY2F0aW9uL2pzb25cIixudWxsLHRoaXMudGltZW91dCx0aGlzLm9udGltZW91dC5iaW5kKHRoaXMpLChmdW5jdGlvbih0KXtpZih0KXt2YXIgbj10LnN0YXR1cyxpPXQudG9rZW4sbz10Lm1lc3NhZ2VzO2UudG9rZW49aX1lbHNlIG49MDtzd2l0Y2gobil7Y2FzZSAyMDA6by5mb3JFYWNoKChmdW5jdGlvbih0KXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe2Uub25tZXNzYWdlKHtkYXRhOnR9KX0pLDApfSkpLGUucG9sbCgpO2JyZWFrO2Nhc2UgMjA0OmUucG9sbCgpO2JyZWFrO2Nhc2UgNDEwOmUucmVhZHlTdGF0ZT12LGUub25vcGVuKCksZS5wb2xsKCk7YnJlYWs7Y2FzZSA0MDM6ZS5vbmVycm9yKCksZS5jbG9zZSgpO2JyZWFrO2Nhc2UgMDpjYXNlIDUwMDplLm9uZXJyb3IoKSxlLmNsb3NlQW5kUmV0cnkoKTticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcInVuaGFuZGxlZCBwb2xsIHN0YXR1cyBcIi5jb25jYXQobikpfX0pKX19LHtrZXk6XCJzZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztELnJlcXVlc3QoXCJQT1NUXCIsdGhpcy5lbmRwb2ludFVSTCgpLFwiYXBwbGljYXRpb24vanNvblwiLGUsdGhpcy50aW1lb3V0LHRoaXMub25lcnJvci5iaW5kKHRoaXMsXCJ0aW1lb3V0XCIpLChmdW5jdGlvbihlKXtlJiYyMDA9PT1lLnN0YXR1c3x8KHQub25lcnJvcihlJiZlLnN0YXR1cyksdC5jbG9zZUFuZFJldHJ5KCkpfSkpfX0se2tleTpcImNsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLnJlYWR5U3RhdGU9bSx0aGlzLm9uY2xvc2UoKX19XSksZX0oKSxEPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2ModGhpcyxlKX1yZXR1cm4gaChlLG51bGwsW3trZXk6XCJyZXF1ZXN0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSxvLHIscyl7aWYoZC5YRG9tYWluUmVxdWVzdCl7dmFyIGE9bmV3IFhEb21haW5SZXF1ZXN0O3RoaXMueGRvbWFpblJlcXVlc3QoYSxlLHQsaSxvLHIscyl9ZWxzZXt2YXIgYz1uZXcgZC5YTUxIdHRwUmVxdWVzdDt0aGlzLnhoclJlcXVlc3QoYyxlLHQsbixpLG8scixzKX19fSx7a2V5OlwieGRvbWFpblJlcXVlc3RcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpLG8scixzKXt2YXIgYT10aGlzO2UudGltZW91dD1vLGUub3Blbih0LG4pLGUub25sb2FkPWZ1bmN0aW9uKCl7dmFyIHQ9YS5wYXJzZUpTT04oZS5yZXNwb25zZVRleHQpO3MmJnModCl9LHImJihlLm9udGltZW91dD1yKSxlLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt9LGUuc2VuZChpKX19LHtrZXk6XCJ4aHJSZXF1ZXN0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSxvLHIscyxhKXt2YXIgYz10aGlzO2Uub3Blbih0LG4sITApLGUudGltZW91dD1yLGUuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGkpLGUub25lcnJvcj1mdW5jdGlvbigpe2EmJmEobnVsbCl9LGUub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoZS5yZWFkeVN0YXRlPT09Yy5zdGF0ZXMuY29tcGxldGUmJmEpe3ZhciB0PWMucGFyc2VKU09OKGUucmVzcG9uc2VUZXh0KTthKHQpfX0scyYmKGUub250aW1lb3V0PXMpLGUuc2VuZChvKX19LHtrZXk6XCJwYXJzZUpTT05cIix2YWx1ZTpmdW5jdGlvbihlKXtpZighZXx8XCJcIj09PWUpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybiBjb25zb2xlJiZjb25zb2xlLmxvZyhcImZhaWxlZCB0byBwYXJzZSBKU09OIHJlc3BvbnNlXCIsZSksbnVsbH19fSx7a2V5Olwic2VyaWFsaXplXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1bXTtmb3IodmFyIGkgaW4gZSlpZihlLmhhc093blByb3BlcnR5KGkpKXt2YXIgcj10P1wiXCIuY29uY2F0KHQsXCJbXCIpLmNvbmNhdChpLFwiXVwiKTppLHM9ZVtpXTtcIm9iamVjdFwiPT09byhzKT9uLnB1c2godGhpcy5zZXJpYWxpemUocyxyKSk6bi5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChyKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQocykpfXJldHVybiBuLmpvaW4oXCImXCIpfX0se2tleTpcImFwcGVuZFBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoMD09PU9iamVjdC5rZXlzKHQpLmxlbmd0aClyZXR1cm4gZTt2YXIgbj1lLm1hdGNoKC9cXD8vKT9cIiZcIjpcIj9cIjtyZXR1cm5cIlwiLmNvbmNhdChlKS5jb25jYXQobikuY29uY2F0KHRoaXMuc2VyaWFsaXplKHQpKX19XSksZX0oKTtELnN0YXRlcz17Y29tcGxldGU6NH07dmFyIE09ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBuPXRoaXMsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307Yyh0aGlzLGUpO3ZhciBvPWkuZXZlbnRzfHx7c3RhdGU6XCJwcmVzZW5jZV9zdGF0ZVwiLGRpZmY6XCJwcmVzZW5jZV9kaWZmXCJ9O3RoaXMuc3RhdGU9e30sdGhpcy5wZW5kaW5nRGlmZnM9W10sdGhpcy5jaGFubmVsPXQsdGhpcy5qb2luUmVmPW51bGwsdGhpcy5jYWxsZXI9e29uSm9pbjpmdW5jdGlvbigpe30sb25MZWF2ZTpmdW5jdGlvbigpe30sb25TeW5jOmZ1bmN0aW9uKCl7fX0sdGhpcy5jaGFubmVsLm9uKG8uc3RhdGUsKGZ1bmN0aW9uKHQpe3ZhciBpPW4uY2FsbGVyLG89aS5vbkpvaW4scj1pLm9uTGVhdmUscz1pLm9uU3luYztuLmpvaW5SZWY9bi5jaGFubmVsLmpvaW5SZWYoKSxuLnN0YXRlPWUuc3luY1N0YXRlKG4uc3RhdGUsdCxvLHIpLG4ucGVuZGluZ0RpZmZzLmZvckVhY2goKGZ1bmN0aW9uKHQpe24uc3RhdGU9ZS5zeW5jRGlmZihuLnN0YXRlLHQsbyxyKX0pKSxuLnBlbmRpbmdEaWZmcz1bXSxzKCl9KSksdGhpcy5jaGFubmVsLm9uKG8uZGlmZiwoZnVuY3Rpb24odCl7dmFyIGk9bi5jYWxsZXIsbz1pLm9uSm9pbixyPWkub25MZWF2ZSxzPWkub25TeW5jO24uaW5QZW5kaW5nU3luY1N0YXRlKCk/bi5wZW5kaW5nRGlmZnMucHVzaCh0KToobi5zdGF0ZT1lLnN5bmNEaWZmKG4uc3RhdGUsdCxvLHIpLHMoKSl9KSl9cmV0dXJuIGgoZSxbe2tleTpcIm9uSm9pblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY2FsbGVyLm9uSm9pbj1lfX0se2tleTpcIm9uTGVhdmVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNhbGxlci5vbkxlYXZlPWV9fSx7a2V5Olwib25TeW5jXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jYWxsZXIub25TeW5jPWV9fSx7a2V5OlwibGlzdFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBlLmxpc3QodGhpcy5zdGF0ZSx0KX19LHtrZXk6XCJpblBlbmRpbmdTeW5jU3RhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiF0aGlzLmpvaW5SZWZ8fHRoaXMuam9pblJlZiE9PXRoaXMuY2hhbm5lbC5qb2luUmVmKCl9fV0sW3trZXk6XCJzeW5jU3RhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpKXt2YXIgbz10aGlzLHI9dGhpcy5jbG9uZShlKSxzPXt9LGE9e307cmV0dXJuIHRoaXMubWFwKHIsKGZ1bmN0aW9uKGUsbil7dFtlXXx8KGFbZV09bil9KSksdGhpcy5tYXAodCwoZnVuY3Rpb24oZSx0KXt2YXIgbj1yW2VdO2lmKG4pe3ZhciBpPXQubWV0YXMubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5waHhfcmVmfSkpLGM9bi5tZXRhcy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBoeF9yZWZ9KSksdT10Lm1ldGFzLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGMuaW5kZXhPZihlLnBoeF9yZWYpPDB9KSksaD1uLm1ldGFzLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGkuaW5kZXhPZihlLnBoeF9yZWYpPDB9KSk7dS5sZW5ndGg+MCYmKHNbZV09dCxzW2VdLm1ldGFzPXUpLGgubGVuZ3RoPjAmJihhW2VdPW8uY2xvbmUobiksYVtlXS5tZXRhcz1oKX1lbHNlIHNbZV09dH0pKSx0aGlzLnN5bmNEaWZmKHIse2pvaW5zOnMsbGVhdmVzOmF9LG4saSl9fSx7a2V5Olwic3luY0RpZmZcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixvKXt2YXIgcj10LmpvaW5zLHM9dC5sZWF2ZXMsYT10aGlzLmNsb25lKGUpO3JldHVybiBufHwobj1mdW5jdGlvbigpe30pLG98fChvPWZ1bmN0aW9uKCl7fSksdGhpcy5tYXAociwoZnVuY3Rpb24oZSx0KXt2YXIgbz1hW2VdO2lmKGFbZV09dCxvKXt2YXIgcixzPWFbZV0ubWV0YXMubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5waHhfcmVmfSkpLGM9by5tZXRhcy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBzLmluZGV4T2YoZS5waHhfcmVmKTwwfSkpOyhyPWFbZV0ubWV0YXMpLnVuc2hpZnQuYXBwbHkocixpKGMpKX1uKGUsbyx0KX0pKSx0aGlzLm1hcChzLChmdW5jdGlvbihlLHQpe3ZhciBuPWFbZV07aWYobil7dmFyIGk9dC5tZXRhcy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBoeF9yZWZ9KSk7bi5tZXRhcz1uLm1ldGFzLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGkuaW5kZXhPZihlLnBoeF9yZWYpPDB9KSksbyhlLG4sdCksMD09PW4ubWV0YXMubGVuZ3RoJiZkZWxldGUgYVtlXX19KSksYX19LHtrZXk6XCJsaXN0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHx8KHQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdH0pLHRoaXMubWFwKGUsKGZ1bmN0aW9uKGUsbil7cmV0dXJuIHQoZSxuKX0pKX19LHtrZXk6XCJtYXBcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiB0KG4sZVtuXSl9KSl9fSx7a2V5OlwiY2xvbmVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSl9fV0pLGV9KCksTj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXtjKHRoaXMsZSksdGhpcy5jYWxsYmFjaz10LHRoaXMudGltZXJDYWxjPW4sdGhpcy50aW1lcj1udWxsLHRoaXMudHJpZXM9MH1yZXR1cm4gaChlLFt7a2V5OlwicmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMudHJpZXM9MCxjbGVhclRpbWVvdXQodGhpcy50aW1lcil9fSx7a2V5Olwic2NoZWR1bGVUaW1lb3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2NsZWFyVGltZW91dCh0aGlzLnRpbWVyKSx0aGlzLnRpbWVyPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS50cmllcz1lLnRyaWVzKzEsZS5jYWxsYmFjaygpfSksdGhpcy50aW1lckNhbGModGhpcy50cmllcysxKSl9fV0pLGV9KCl9XSl9KSk7IiwgIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMucGhvZW5peF9saXZlX3ZpZXc9dCgpOmUucGhvZW5peF9saXZlX3ZpZXc9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4oaSl7aWYodFtpXSlyZXR1cm4gdFtpXS5leHBvcnRzO3ZhciByPXRbaV09e2k6aSxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW2ldLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLG4pLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQsaSl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDppfSl9LG4ucj1mdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTIpfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KTt2YXIgaSxyPTExO3ZhciBvPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLGE9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50P3ZvaWQgMDpkb2N1bWVudCx1PSEhYSYmXCJjb250ZW50XCJpbiBhLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxzPSEhYSYmYS5jcmVhdGVSYW5nZSYmXCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnRcImluIGEuY3JlYXRlUmFuZ2UoKTtmdW5jdGlvbiBjKGUpe3JldHVybiBlPWUudHJpbSgpLHU/ZnVuY3Rpb24oZSl7dmFyIHQ9YS5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7cmV0dXJuIHQuaW5uZXJIVE1MPWUsdC5jb250ZW50LmNoaWxkTm9kZXNbMF19KGUpOnM/ZnVuY3Rpb24oZSl7cmV0dXJuIGl8fChpPWEuY3JlYXRlUmFuZ2UoKSkuc2VsZWN0Tm9kZShhLmJvZHkpLGkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGUpLmNoaWxkTm9kZXNbMF19KGUpOmZ1bmN0aW9uKGUpe3ZhciB0PWEuY3JlYXRlRWxlbWVudChcImJvZHlcIik7cmV0dXJuIHQuaW5uZXJIVE1MPWUsdC5jaGlsZE5vZGVzWzBdfShlKX1mdW5jdGlvbiBsKGUsdCl7dmFyIG4saSxyPWUubm9kZU5hbWUsbz10Lm5vZGVOYW1lO3JldHVybiByPT09b3x8KG49ci5jaGFyQ29kZUF0KDApLGk9by5jaGFyQ29kZUF0KDApLG48PTkwJiZpPj05Nz9yPT09by50b1VwcGVyQ2FzZSgpOmk8PTkwJiZuPj05NyYmbz09PXIudG9VcHBlckNhc2UoKSl9ZnVuY3Rpb24gZChlLHQsbil7ZVtuXSE9PXRbbl0mJihlW25dPXRbbl0sZVtuXT9lLnNldEF0dHJpYnV0ZShuLFwiXCIpOmUucmVtb3ZlQXR0cmlidXRlKG4pKX12YXIgaD17T1BUSU9OOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5wYXJlbnROb2RlO2lmKG4pe3ZhciBpPW4ubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcIk9QVEdST1VQXCI9PT1pJiYoaT0obj1uLnBhcmVudE5vZGUpJiZuLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpLFwiU0VMRUNUXCIhPT1pfHxuLmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpfHwoZS5oYXNBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSYmIXQuc2VsZWN0ZWQmJihlLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKSxlLnJlbW92ZUF0dHJpYnV0ZShcInNlbGVjdGVkXCIpKSxuLnNlbGVjdGVkSW5kZXg9LTEpfWQoZSx0LFwic2VsZWN0ZWRcIil9LElOUFVUOmZ1bmN0aW9uKGUsdCl7ZChlLHQsXCJjaGVja2VkXCIpLGQoZSx0LFwiZGlzYWJsZWRcIiksZS52YWx1ZSE9PXQudmFsdWUmJihlLnZhbHVlPXQudmFsdWUpLHQuaGFzQXR0cmlidXRlKFwidmFsdWVcIil8fGUucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIil9LFRFWFRBUkVBOmZ1bmN0aW9uKGUsdCl7dmFyIG49dC52YWx1ZTtlLnZhbHVlIT09biYmKGUudmFsdWU9bik7dmFyIGk9ZS5maXJzdENoaWxkO2lmKGkpe3ZhciByPWkubm9kZVZhbHVlO2lmKHI9PW58fCFuJiZyPT1lLnBsYWNlaG9sZGVyKXJldHVybjtpLm5vZGVWYWx1ZT1ufX0sU0VMRUNUOmZ1bmN0aW9uKGUsdCl7aWYoIXQuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIikpe2Zvcih2YXIgbixpLHI9LTEsbz0wLGE9ZS5maXJzdENoaWxkO2E7KWlmKFwiT1BUR1JPVVBcIj09PShpPWEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9VcHBlckNhc2UoKSkpYT0obj1hKS5maXJzdENoaWxkO2Vsc2V7aWYoXCJPUFRJT05cIj09PWkpe2lmKGEuaGFzQXR0cmlidXRlKFwic2VsZWN0ZWRcIikpe3I9bzticmVha31vKyt9IShhPWEubmV4dFNpYmxpbmcpJiZuJiYoYT1uLm5leHRTaWJsaW5nLG49bnVsbCl9ZS5zZWxlY3RlZEluZGV4PXJ9fX0sZj0xLHY9MTEscD0zLGc9ODtmdW5jdGlvbiBtKCl7fWZ1bmN0aW9uIHkoZSl7aWYoZSlyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiaWRcIil8fGUuaWR9dmFyIGs9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbixpKXtpZihpfHwoaT17fSksXCJzdHJpbmdcIj09dHlwZW9mIG4paWYoXCIjZG9jdW1lbnRcIj09PXQubm9kZU5hbWV8fFwiSFRNTFwiPT09dC5ub2RlTmFtZXx8XCJCT0RZXCI9PT10Lm5vZGVOYW1lKXt2YXIgcj1uOyhuPWEuY3JlYXRlRWxlbWVudChcImh0bWxcIikpLmlubmVySFRNTD1yfWVsc2Ugbj1jKG4pO3ZhciB1PWkuZ2V0Tm9kZUtleXx8eSxzPWkub25CZWZvcmVOb2RlQWRkZWR8fG0sZD1pLm9uTm9kZUFkZGVkfHxtLGs9aS5vbkJlZm9yZUVsVXBkYXRlZHx8bSxiPWkub25FbFVwZGF0ZWR8fG0sdz1pLm9uQmVmb3JlTm9kZURpc2NhcmRlZHx8bSxFPWkub25Ob2RlRGlzY2FyZGVkfHxtLFM9aS5vbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkfHxtLEE9ITA9PT1pLmNoaWxkcmVuT25seSx4PU9iamVjdC5jcmVhdGUobnVsbCksQz1bXTtmdW5jdGlvbiBQKGUpe0MucHVzaChlKX1mdW5jdGlvbiBMKGUsdCxuKXshMSE9PXcoZSkmJih0JiZ0LnJlbW92ZUNoaWxkKGUpLEUoZSksZnVuY3Rpb24gZSh0LG4pe2lmKHQubm9kZVR5cGU9PT1mKWZvcih2YXIgaT10LmZpcnN0Q2hpbGQ7aTspe3ZhciByPXZvaWQgMDtuJiYocj11KGkpKT9QKHIpOihFKGkpLGkuZmlyc3RDaGlsZCYmZShpLG4pKSxpPWkubmV4dFNpYmxpbmd9fShlLG4pKX1mdW5jdGlvbiBJKGUpe2QoZSk7Zm9yKHZhciB0PWUuZmlyc3RDaGlsZDt0Oyl7dmFyIG49dC5uZXh0U2libGluZyxpPXUodCk7aWYoaSl7dmFyIHI9eFtpXTtyJiZsKHQscik/KHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocix0KSxUKHIsdCkpOkkodCl9ZWxzZSBJKHQpO3Q9bn19ZnVuY3Rpb24gVCh0LG4saSl7dmFyIHI9dShuKTtpZihyJiZkZWxldGUgeFtyXSwhaSl7aWYoITE9PT1rKHQsbikpcmV0dXJuO2lmKGUodCxuKSxiKHQpLCExPT09Uyh0LG4pKXJldHVybn1cIlRFWFRBUkVBXCIhPT10Lm5vZGVOYW1lP2Z1bmN0aW9uKGUsdCl7dmFyIG4saSxyLG8sYyxkPXQuZmlyc3RDaGlsZCx2PWUuZmlyc3RDaGlsZDtlOmZvcig7ZDspe2ZvcihvPWQubmV4dFNpYmxpbmcsbj11KGQpO3Y7KXtpZihyPXYubmV4dFNpYmxpbmcsZC5pc1NhbWVOb2RlJiZkLmlzU2FtZU5vZGUodikpe2Q9byx2PXI7Y29udGludWUgZX1pPXUodik7dmFyIG09di5ub2RlVHlwZSx5PXZvaWQgMDtpZihtPT09ZC5ub2RlVHlwZSYmKG09PT1mPyhuP24hPT1pJiYoKGM9eFtuXSk/cj09PWM/eT0hMTooZS5pbnNlcnRCZWZvcmUoYyx2KSxpP1AoaSk6TCh2LGUsITApLHY9Yyk6eT0hMSk6aSYmKHk9ITEpLCh5PSExIT09eSYmbCh2LGQpKSYmVCh2LGQpKTptIT09cCYmbSE9Z3x8KHk9ITAsdi5ub2RlVmFsdWUhPT1kLm5vZGVWYWx1ZSYmKHYubm9kZVZhbHVlPWQubm9kZVZhbHVlKSkpLHkpe2Q9byx2PXI7Y29udGludWUgZX1pP1AoaSk6TCh2LGUsITApLHY9cn1pZihuJiYoYz14W25dKSYmbChjLGQpKWUuYXBwZW5kQ2hpbGQoYyksVChjLGQpO2Vsc2V7dmFyIGs9cyhkKTshMSE9PWsmJihrJiYoZD1rKSxkLmFjdHVhbGl6ZSYmKGQ9ZC5hY3R1YWxpemUoZS5vd25lckRvY3VtZW50fHxhKSksZS5hcHBlbmRDaGlsZChkKSxJKGQpKX1kPW8sdj1yfSFmdW5jdGlvbihlLHQsbil7Zm9yKDt0Oyl7dmFyIGk9dC5uZXh0U2libGluZzsobj11KHQpKT9QKG4pOkwodCxlLCEwKSx0PWl9fShlLHYsaSk7dmFyIGI9aFtlLm5vZGVOYW1lXTtiJiZiKGUsdCl9KHQsbik6aC5URVhUQVJFQSh0LG4pfSFmdW5jdGlvbiBlKHQpe2lmKHQubm9kZVR5cGU9PT1mfHx0Lm5vZGVUeXBlPT09dilmb3IodmFyIG49dC5maXJzdENoaWxkO247KXt2YXIgaT11KG4pO2kmJih4W2ldPW4pLGUobiksbj1uLm5leHRTaWJsaW5nfX0odCk7dmFyIEQ9dCxfPUQubm9kZVR5cGUsTj1uLm5vZGVUeXBlO2lmKCFBKWlmKF89PT1mKU49PT1mP2wodCxuKXx8KEUodCksRD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1lLmZpcnN0Q2hpbGQ7bjspe3ZhciBpPW4ubmV4dFNpYmxpbmc7dC5hcHBlbmRDaGlsZChuKSxuPWl9cmV0dXJuIHR9KHQsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCYmdCE9PW8/YS5jcmVhdGVFbGVtZW50TlModCxlKTphLmNyZWF0ZUVsZW1lbnQoZSl9KG4ubm9kZU5hbWUsbi5uYW1lc3BhY2VVUkkpKSk6RD1uO2Vsc2UgaWYoXz09PXB8fF89PT1nKXtpZihOPT09XylyZXR1cm4gRC5ub2RlVmFsdWUhPT1uLm5vZGVWYWx1ZSYmKEQubm9kZVZhbHVlPW4ubm9kZVZhbHVlKSxEO0Q9bn1pZihEPT09bilFKHQpO2Vsc2V7aWYobi5pc1NhbWVOb2RlJiZuLmlzU2FtZU5vZGUoRCkpcmV0dXJuO2lmKFQoRCxuLEEpLEMpZm9yKHZhciBSPTAsTz1DLmxlbmd0aDtSPE87UisrKXt2YXIgaj14W0NbUl1dO2omJkwoaixqLnBhcmVudE5vZGUsITEpfX1yZXR1cm4hQSYmRCE9PXQmJnQucGFyZW50Tm9kZSYmKEQuYWN0dWFsaXplJiYoRD1ELmFjdHVhbGl6ZSh0Lm93bmVyRG9jdW1lbnR8fGEpKSx0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKEQsdCkpLER9fShmdW5jdGlvbihlLHQpe3ZhciBuLGksbyxhLHU9dC5hdHRyaWJ1dGVzO2lmKHQubm9kZVR5cGUhPT1yJiZlLm5vZGVUeXBlIT09cil7Zm9yKHZhciBzPXUubGVuZ3RoLTE7cz49MDtzLS0paT0obj11W3NdKS5uYW1lLG89bi5uYW1lc3BhY2VVUkksYT1uLnZhbHVlLG8/KGk9bi5sb2NhbE5hbWV8fGksZS5nZXRBdHRyaWJ1dGVOUyhvLGkpIT09YSYmKFwieG1sbnNcIj09PW4ucHJlZml4JiYoaT1uLm5hbWUpLGUuc2V0QXR0cmlidXRlTlMobyxpLGEpKSk6ZS5nZXRBdHRyaWJ1dGUoaSkhPT1hJiZlLnNldEF0dHJpYnV0ZShpLGEpO2Zvcih2YXIgYz1lLmF0dHJpYnV0ZXMsbD1jLmxlbmd0aC0xO2w+PTA7bC0tKWk9KG49Y1tsXSkubmFtZSwobz1uLm5hbWVzcGFjZVVSSSk/KGk9bi5sb2NhbE5hbWV8fGksdC5oYXNBdHRyaWJ1dGVOUyhvLGkpfHxlLnJlbW92ZUF0dHJpYnV0ZU5TKG8saSkpOnQuaGFzQXR0cmlidXRlKGkpfHxlLnJlbW92ZUF0dHJpYnV0ZShpKX19KTtmdW5jdGlvbiBiKGUpe3JldHVybiBMKGUpfHxFKGUpfHxJKGUpfHxQKCl9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gVChlKX0oZSl8fEUoZSl8fEkoZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gRShlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXJldHVybiBBcnJheS5mcm9tKGUpfWZ1bmN0aW9uIFMoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihpPWkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSxuLnB1c2guYXBwbHkobixpKX1yZXR1cm4gbn1mdW5jdGlvbiBBKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP1MoT2JqZWN0KG4pLCEwKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3goZSx0LG5bdF0pfSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSk6UyhPYmplY3QobikpLmZvckVhY2goZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sdCkpfSl9cmV0dXJuIGV9ZnVuY3Rpb24geChlLHQsbil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1uLGV9ZnVuY3Rpb24gQyhlLHQpe3JldHVybiBMKGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSkpcmV0dXJuO3ZhciBuPVtdLGk9ITAscj0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHU9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShpPShhPXUubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhdHx8bi5sZW5ndGghPT10KTtpPSEwKTt9Y2F0Y2goZSl7cj0hMCxvPWV9ZmluYWxseXt0cnl7aXx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihyKXRocm93IG99fXJldHVybiBufShlLHQpfHxJKGUsdCl8fFAoKX1mdW5jdGlvbiBQKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX1mdW5jdGlvbiBMKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9ZnVuY3Rpb24gSShlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBUKGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9UKGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBUKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciBuPTAsaT1uZXcgQXJyYXkodCk7bjx0O24rKylpW25dPWVbbl07cmV0dXJuIGl9ZnVuY3Rpb24gRChlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gXyhlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO2kuZW51bWVyYWJsZT1pLmVudW1lcmFibGV8fCExLGkuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGkmJihpLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLmtleSxpKX19ZnVuY3Rpb24gTihlLHQsbil7cmV0dXJuIHQmJl8oZS5wcm90b3R5cGUsdCksbiYmXyhlLG4pLGV9ZnVuY3Rpb24gUihlKXtcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7cmV0dXJuKFI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfW4uZCh0LFwiZGVidWdcIixmdW5jdGlvbigpe3JldHVybiBYfSksbi5kKHQsXCJSZW5kZXJlZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHNlfSksbi5kKHQsXCJMaXZlU29ja2V0XCIsZnVuY3Rpb24oKXtyZXR1cm4gY2V9KSxuLmQodCxcIkJyb3dzZXJcIixmdW5jdGlvbigpe3JldHVybiBsZX0pLG4uZCh0LFwiRE9NXCIsZnVuY3Rpb24oKXtyZXR1cm4gZGV9KSxuLmQodCxcIlZpZXdcIixmdW5jdGlvbigpe3JldHVybiB2ZX0pO3ZhciBPPVsxZTMsM2UzXSxqPVwiZGF0YS1waHgtdmlld1wiLEg9W1wicGh4LWNsaWNrLWxvYWRpbmdcIixcInBoeC1jaGFuZ2UtbG9hZGluZ1wiLFwicGh4LXN1Ym1pdC1sb2FkaW5nXCIsXCJwaHgta2V5ZG93bi1sb2FkaW5nXCIsXCJwaHgta2V5dXAtbG9hZGluZ1wiLFwicGh4LWJsdXItbG9hZGluZ1wiLFwicGh4LWZvY3VzLWxvYWRpbmdcIl0sTT1cImRhdGEtcGh4LWNvbXBvbmVudFwiLEY9XCJkYXRhLXBoeC1yZWZcIixVPVwiZGF0YS1waHgtdXBsb2FkLXJlZlwiLEI9XCJbXCIuY29uY2F0KGosXCJdXCIpLEo9W1widGV4dFwiLFwidGV4dGFyZWFcIixcIm51bWJlclwiLFwiZW1haWxcIixcInBhc3N3b3JkXCIsXCJzZWFyY2hcIixcInRlbFwiLFwidXJsXCIsXCJkYXRlXCIsXCJ0aW1lXCJdLFY9W1wiY2hlY2tib3hcIixcInJhZGlvXCJdLFc9MSxxPVwicGh4LVwiLHo9e2RlYm91bmNlOjMwMCx0aHJvdHRsZTozMDB9LEs9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gY29uc29sZS5lcnJvciYmY29uc29sZS5lcnJvcihlLHQpfTt2YXIgWD1mdW5jdGlvbihlLHQsbixpKXtlLmxpdmVTb2NrZXQuaXNEZWJ1Z0VuYWJsZWQoKSYmY29uc29sZS5sb2coXCJcIi5jb25jYXQoZS5pZCxcIiBcIikuY29uY2F0KHQsXCI6IFwiKS5jb25jYXQobixcIiAtIFwiKSxpKX0sJD1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24oKXtyZXR1cm4gZX19LEc9ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpfSxZPWZ1bmN0aW9uKGUsdCxuKXtkb3tpZihlLm1hdGNoZXMoXCJbXCIuY29uY2F0KHQsXCJdXCIpKSlyZXR1cm4gZTtlPWUucGFyZW50RWxlbWVudHx8ZS5wYXJlbnROb2RlfXdoaWxlKG51bGwhPT1lJiYxPT09ZS5ub2RlVHlwZSYmIShuJiZuLmlzU2FtZU5vZGUoZSl8fGUubWF0Y2hlcyhCKSkpO3JldHVybiBudWxsfSxRPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT09ZSYmXCJvYmplY3RcIj09PVIoZSkmJiEoZSBpbnN0YW5jZW9mIEFycmF5KX0sWj1mdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdChlKX0sdGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixpKXtEKHRoaXMsZSksdGhpcy5yZWY9cmUuZ2VuRmlsZVJlZihuKSx0aGlzLmZpbGVFbD10LHRoaXMuZmlsZT1uLHRoaXMudmlldz1pLHRoaXMubWV0YT1udWxsLHRoaXMuX2lzQ2FuY2VsbGVkPSExLHRoaXMuX2lzRG9uZT0hMSx0aGlzLl9wcm9ncmVzcz0wLHRoaXMuX2xhc3RQcm9ncmVzc1NlbnQ9LTEsdGhpcy5fb25Eb25lPWZ1bmN0aW9uKCl7fX1yZXR1cm4gTihlLG51bGwsW3trZXk6XCJpc0FjdGl2ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dm9pZCAwPT09dC5fcGh4UmVmLGk9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1hY3RpdmUtcmVmc1wiKS5zcGxpdChcIixcIikuaW5kZXhPZihyZS5nZW5GaWxlUmVmKHQpKT49MDtyZXR1cm4gdC5zaXplPjAmJihufHxpKX19LHtrZXk6XCJpc1ByZWZsaWdodGVkXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXByZWZsaWdodGVkLXJlZnNcIikuc3BsaXQoXCIsXCIpLmluZGV4T2YocmUuZ2VuRmlsZVJlZih0KSk+PTA7cmV0dXJuIG4mJnRoaXMuaXNBY3RpdmUoZSx0KX19XSksTihlLFt7a2V5OlwibWV0YWRhdGFcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1ldGF9fSx7a2V5OlwicHJvZ3Jlc3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMuX3Byb2dyZXNzPU1hdGguZmxvb3IoZSksdGhpcy5fcHJvZ3Jlc3M+dGhpcy5fbGFzdFByb2dyZXNzU2VudCYmKHRoaXMuX3Byb2dyZXNzPj0xMDA/KHRoaXMuX3Byb2dyZXNzPTEwMCx0aGlzLl9sYXN0UHJvZ3Jlc3NTZW50PTEwMCx0aGlzLl9pc0RvbmU9ITAsdGhpcy52aWV3LnB1c2hGaWxlUHJvZ3Jlc3ModGhpcy5maWxlRWwsdGhpcy5yZWYsMTAwLGZ1bmN0aW9uKCl7cmUudW50cmFja0ZpbGUodC5maWxlRWwsdC5maWxlKSx0Ll9vbkRvbmUoKX0pKToodGhpcy5fbGFzdFByb2dyZXNzU2VudD10aGlzLl9wcm9ncmVzcyx0aGlzLnZpZXcucHVzaEZpbGVQcm9ncmVzcyh0aGlzLmZpbGVFbCx0aGlzLnJlZix0aGlzLl9wcm9ncmVzcykpKX19LHtrZXk6XCJjYW5jZWxcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2lzQ2FuY2VsbGVkPSEwLHRoaXMuX2lzRG9uZT0hMCx0aGlzLl9vbkRvbmUoKX19LHtrZXk6XCJpc0RvbmVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9pc0RvbmV9fSx7a2V5OlwiZXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImZhaWxlZFwiO3JlLmNsZWFyRmlsZXModGhpcy5maWxlRWwpLHRoaXMudmlldy5wdXNoRmlsZVByb2dyZXNzKHRoaXMuZmlsZUVsLHRoaXMucmVmLHtlcnJvcjplfSl9fSx7a2V5Olwib25Eb25lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fb25Eb25lPWV9fSx7a2V5OlwidG9QcmVmbGlnaHRQYXlsb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm57bGFzdF9tb2RpZmllZDp0aGlzLmZpbGUubGFzdE1vZGlmaWVkLG5hbWU6dGhpcy5maWxlLm5hbWUsc2l6ZTp0aGlzLmZpbGUuc2l6ZSx0eXBlOnRoaXMuZmlsZS50eXBlLHJlZjp0aGlzLnJlZn19fSx7a2V5OlwidXBsb2FkZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLm1ldGEudXBsb2FkZXIpe3ZhciB0PWVbdGhpcy5tZXRhLnVwbG9hZGVyXXx8SyhcIm5vIHVwbG9hZGVyIGNvbmZpZ3VyZWQgZm9yIFwiLmNvbmNhdCh0aGlzLm1ldGEudXBsb2FkZXIpKTtyZXR1cm57bmFtZTp0aGlzLm1ldGEudXBsb2FkZXIsY2FsbGJhY2s6dH19cmV0dXJue25hbWU6XCJjaGFubmVsXCIsY2FsbGJhY2s6b2V9fX0se2tleTpcInppcFBvc3RGbGlnaHRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLm1ldGE9ZS5lbnRyaWVzW3RoaXMucmVmXSx0aGlzLm1ldGF8fEsoXCJubyBwcmVmbGlnaHQgdXBsb2FkIHJlc3BvbnNlIHJldHVybmVkIHdpdGggcmVmIFwiLmNvbmNhdCh0aGlzLnJlZikse2lucHV0OnRoaXMuZmlsZUVsLHJlc3BvbnNlOmV9KX19XSksZX0oKSxuZT17TGl2ZUZpbGVVcGxvYWQ6e3ByZWZsaWdodGVkUmVmczpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXByZWZsaWdodGVkLXJlZnNcIil9LG1vdW50ZWQ6ZnVuY3Rpb24oKXt0aGlzLnByZWZsaWdodGVkV2FzPXRoaXMucHJlZmxpZ2h0ZWRSZWZzKCl9LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByZWZsaWdodGVkUmVmcygpO3RoaXMucHJlZmxpZ2h0ZWRXYXMhPT1lJiYodGhpcy5wcmVmbGlnaHRlZFdhcz1lLFwiXCI9PT1lJiZ0aGlzLl9fdmlldy5jYW5jZWxTdWJtaXQodGhpcy5lbC5mb3JtKSl9fX07bmUuTGl2ZUltZ1ByZXZpZXc9e21vdW50ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucmVmPXRoaXMuZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtZW50cnktcmVmXCIpLHRoaXMuaW5wdXRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsLmdldEF0dHJpYnV0ZShVKSkscmUuZ2V0RW50cnlEYXRhVVJMKHRoaXMuaW5wdXRFbCx0aGlzLnJlZixmdW5jdGlvbih0KXtyZXR1cm4gZS5lbC5zcmM9dH0pfX07dmFyIGllPTAscmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixpKXtEKHRoaXMsZSksdGhpcy52aWV3PW4sdGhpcy5vbkNvbXBsZXRlPWksdGhpcy5fZW50cmllcz1BcnJheS5mcm9tKGUuZmlsZXNBd2FpdGluZ1ByZWZsaWdodCh0KXx8W10pLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IHRlKHQsZSxuKX0pLHRoaXMubnVtRW50cmllc0luUHJvZ3Jlc3M9dGhpcy5fZW50cmllcy5sZW5ndGh9cmV0dXJuIE4oZSxudWxsLFt7a2V5OlwiZ2VuRmlsZVJlZlwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuX3BoeFJlZjtyZXR1cm4gdm9pZCAwIT09dD90OihlLl9waHhSZWY9KGllKyspLnRvU3RyaW5nKCksZS5fcGh4UmVmKX19LHtrZXk6XCJnZXRFbnRyeURhdGFVUkxcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPXRoaXMuYWN0aXZlRmlsZXMoZSkuZmluZChmdW5jdGlvbihlKXtyZXR1cm4gaS5nZW5GaWxlUmVmKGUpPT09dH0pLG89bmV3IEZpbGVSZWFkZXI7by5vbmxvYWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG4oZS50YXJnZXQucmVzdWx0KX0sby5yZWFkQXNEYXRhVVJMKHIpfX0se2tleTpcImhhc1VwbG9hZHNJblByb2dyZXNzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9MDtyZXR1cm4gZGUuZmluZFVwbG9hZElucHV0cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcHJlZmxpZ2h0ZWQtcmVmc1wiKSE9PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtZG9uZS1yZWZzXCIpJiZ0Kyt9KSx0PjB9fSx7a2V5Olwic2VyaWFsaXplVXBsb2Fkc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj17fTtyZXR1cm4gdGhpcy5hY3RpdmVGaWxlcyhlLFwic2VyaWFsaXplXCIpLmZvckVhY2goZnVuY3Rpb24oaSl7dmFyIHI9e3BhdGg6ZS5uYW1lfSxvPWUuZ2V0QXR0cmlidXRlKFUpO25bb109bltvXXx8W10sci5yZWY9dC5nZW5GaWxlUmVmKGkpLHIubmFtZT1pLm5hbWUsci50eXBlPWkudHlwZSxyLnNpemU9aS5zaXplLG5bb10ucHVzaChyKX0pLG59fSx7a2V5OlwiY2xlYXJGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2UudmFsdWU9bnVsbCxlLnJlbW92ZUF0dHJpYnV0ZShVKSxkZS5wdXRQcml2YXRlKGUsXCJmaWxlc1wiLFtdKX19LHtrZXk6XCJ1bnRyYWNrRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7ZGUucHV0UHJpdmF0ZShlLFwiZmlsZXNcIixkZS5wcml2YXRlKGUsXCJmaWxlc1wiKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIU9iamVjdC5pcyhlLHQpfSkpfX0se2tleTpcInRyYWNrRmlsZXNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYobnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIikpe3ZhciBpPXQuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiFuLmFjdGl2ZUZpbGVzKGUpLmZpbmQoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5pcyhlLHQpfSl9KTtkZS5wdXRQcml2YXRlKGUsXCJmaWxlc1wiLHRoaXMuYWN0aXZlRmlsZXMoZSkuY29uY2F0KGkpKSxlLnZhbHVlPW51bGx9ZWxzZSBkZS5wdXRQcml2YXRlKGUsXCJmaWxlc1wiLHQpfX0se2tleTpcImFjdGl2ZUZpbGVJbnB1dHNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49ZGUuZmluZFVwbG9hZElucHV0cyhlKTtyZXR1cm4gQXJyYXkuZnJvbShuKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZmlsZXMmJnQuYWN0aXZlRmlsZXMoZSkubGVuZ3RoPjB9KX19LHtrZXk6XCJhY3RpdmVGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybihkZS5wcml2YXRlKGUsXCJmaWxlc1wiKXx8W10pLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdGUuaXNBY3RpdmUoZSx0KX0pfX0se2tleTpcImlucHV0c0F3YWl0aW5nUHJlZmxpZ2h0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPWRlLmZpbmRVcGxvYWRJbnB1dHMoZSk7cmV0dXJuIEFycmF5LmZyb20obikuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiB0LmZpbGVzQXdhaXRpbmdQcmVmbGlnaHQoZSkubGVuZ3RoPjB9KX19LHtrZXk6XCJmaWxlc0F3YWl0aW5nUHJlZmxpZ2h0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWN0aXZlRmlsZXMoZSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0ZS5pc1ByZWZsaWdodGVkKGUsdCl9KX19XSksTihlLFt7a2V5OlwiZW50cmllc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2VudHJpZXN9fSx7a2V5OlwiaW5pdEFkYXB0ZXJVcGxvYWRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpczt0aGlzLl9lbnRyaWVzPXRoaXMuX2VudHJpZXMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnppcFBvc3RGbGlnaHQoZSksdC5vbkRvbmUoZnVuY3Rpb24oKXtpLm51bUVudHJpZXNJblByb2dyZXNzLS0sMD09PWkubnVtRW50cmllc0luUHJvZ3Jlc3MmJmkub25Db21wbGV0ZSgpfSksdH0pO3ZhciByPXRoaXMuX2VudHJpZXMucmVkdWNlKGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC51cGxvYWRlcihuLnVwbG9hZGVycykscj1pLm5hbWUsbz1pLmNhbGxiYWNrO3JldHVybiBlW3JdPWVbcl18fHtjYWxsYmFjazpvLGVudHJpZXM6W119LGVbcl0uZW50cmllcy5wdXNoKHQpLGV9LHt9KTtmb3IodmFyIG8gaW4gcil7dmFyIGE9cltvXTsoMCxhLmNhbGxiYWNrKShhLmVudHJpZXMsdCxlLG4pfX19XSksZX0oKSxvZT1mdW5jdGlvbihlLHQsbixpKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7bmV3IGFlKGUsbi5jb25maWcuY2h1bmtfc2l6ZSxpKS51cGxvYWQoKX0pfSxhZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLGkpe0QodGhpcyxlKSx0aGlzLmxpdmVTb2NrZXQ9aSx0aGlzLmVudHJ5PXQsdGhpcy5vZmZzZXQ9MCx0aGlzLmNodW5rU2l6ZT1uLHRoaXMuY2h1bmtUaW1lcj1udWxsLHRoaXMudXBsb2FkQ2hhbm5lbD1pLmNoYW5uZWwoXCJsdnU6XCIuY29uY2F0KHQucmVmKSx7dG9rZW46dC5tZXRhZGF0YSgpfSl9cmV0dXJuIE4oZSxbe2tleTpcImVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KHRoaXMuY2h1bmtUaW1lciksdGhpcy51cGxvYWRDaGFubmVsLmxlYXZlKCksdGhpcy5lbnRyeS5lcnJvcihlKX19LHtrZXk6XCJ1cGxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy51cGxvYWRDaGFubmVsLm9uRXJyb3IoZnVuY3Rpb24odCl7cmV0dXJuIGUuZXJyb3IodCl9KSx0aGlzLnVwbG9hZENoYW5uZWwuam9pbigpLnJlY2VpdmUoXCJva1wiLGZ1bmN0aW9uKHQpe3JldHVybiBlLnJlYWROZXh0Q2h1bmsoKX0pLnJlY2VpdmUoXCJlcnJvclwiLGZ1bmN0aW9uKHQpe3JldHVybiBlLmVycm9yKHQpfSl9fSx7a2V5OlwiaXNEb25lXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vZmZzZXQ+PXRoaXMuZW50cnkuZmlsZS5zaXplfX0se2tleTpcInJlYWROZXh0Q2h1bmtcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1uZXcgd2luZG93LkZpbGVSZWFkZXIsbj10aGlzLmVudHJ5LmZpbGUuc2xpY2UodGhpcy5vZmZzZXQsdGhpcy5jaHVua1NpemUrdGhpcy5vZmZzZXQpO3Qub25sb2FkPWZ1bmN0aW9uKHQpe2lmKG51bGwhPT10LnRhcmdldC5lcnJvcilyZXR1cm4gSyhcIlJlYWQgZXJyb3I6IFwiK3QudGFyZ2V0LmVycm9yKTtlLm9mZnNldCs9dC50YXJnZXQucmVzdWx0LmJ5dGVMZW5ndGgsZS5wdXNoQ2h1bmsodC50YXJnZXQucmVzdWx0KX0sdC5yZWFkQXNBcnJheUJ1ZmZlcihuKX19LHtrZXk6XCJwdXNoQ2h1bmtcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMudXBsb2FkQ2hhbm5lbC5pc0pvaW5lZCgpJiZ0aGlzLnVwbG9hZENoYW5uZWwucHVzaChcImNodW5rXCIsZSkucmVjZWl2ZShcIm9rXCIsZnVuY3Rpb24oKXt0LmVudHJ5LnByb2dyZXNzKHQub2Zmc2V0L3QuZW50cnkuZmlsZS5zaXplKjEwMCksdC5pc0RvbmUoKXx8KHQuY2h1bmtUaW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQucmVhZE5leHRDaHVuaygpfSx0LmxpdmVTb2NrZXQuZ2V0TGF0ZW5jeVNpbSgpfHwwKSl9KX19XSksZX0oKSx1ZT1mdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj1uZXcgRm9ybURhdGEoZSksaT1bXTtuLmZvckVhY2goZnVuY3Rpb24oZSx0LG4pe2UgaW5zdGFuY2VvZiBGaWxlJiZpLnB1c2godCl9KSxpLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIG4uZGVsZXRlKGUpfSk7dmFyIHIsbz1uZXcgVVJMU2VhcmNoUGFyYW1zLGE9ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8bnVsbD09ZVtTeW1ib2wuaXRlcmF0b3JdKXtpZihBcnJheS5pc0FycmF5KGUpfHwoZT1JKGUpKSl7dmFyIHQ9MCxuPWZ1bmN0aW9uKCl7fTtyZXR1cm57czpuLG46ZnVuY3Rpb24oKXtyZXR1cm4gdD49ZS5sZW5ndGg/e2RvbmU6ITB9Ontkb25lOiExLHZhbHVlOmVbdCsrXX19LGU6ZnVuY3Rpb24oZSl7dGhyb3cgZX0sZjpufX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9dmFyIGkscixvPSEwLGE9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWVbU3ltYm9sLml0ZXJhdG9yXSgpfSxuOmZ1bmN0aW9uKCl7dmFyIGU9aS5uZXh0KCk7cmV0dXJuIG89ZS5kb25lLGV9LGU6ZnVuY3Rpb24oZSl7YT0hMCxyPWV9LGY6ZnVuY3Rpb24oKXt0cnl7b3x8bnVsbD09aS5yZXR1cm58fGkucmV0dXJuKCl9ZmluYWxseXtpZihhKXRocm93IHJ9fX19KG4uZW50cmllcygpKTt0cnl7Zm9yKGEucygpOyEocj1hLm4oKSkuZG9uZTspe3ZhciB1PUMoci52YWx1ZSwyKSxzPXVbMF0sYz11WzFdO28uYXBwZW5kKHMsYyl9fWNhdGNoKGUpe2EuZShlKX1maW5hbGx5e2EuZigpfWZvcih2YXIgbCBpbiB0KW8uYXBwZW5kKGwsdFtsXSk7cmV0dXJuIG8udG9TdHJpbmcoKX0sc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbil7RCh0aGlzLGUpLHRoaXMudmlld0lkPXQsdGhpcy5yZW5kZXJlZD17fSx0aGlzLm1lcmdlRGlmZihuKX1yZXR1cm4gTihlLG51bGwsW3trZXk6XCJleHRyYWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yLG49ZS5lLGk9ZS50O3JldHVybiBkZWxldGUgZS5yLGRlbGV0ZSBlLmUsZGVsZXRlIGUudCx7ZGlmZjplLHRpdGxlOmkscmVwbHk6dHx8bnVsbCxldmVudHM6bnx8W119fX1dKSxOKGUsW3trZXk6XCJwYXJlbnRWaWV3SWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXdJZH19LHtrZXk6XCJ0b1N0cmluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlY3Vyc2l2ZVRvU3RyaW5nKHRoaXMucmVuZGVyZWQsdGhpcy5yZW5kZXJlZC5jLGUpfX0se2tleTpcInJlY3Vyc2l2ZVRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOmUuYyxuPWFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwLGk9e2J1ZmZlcjpcIlwiLGNvbXBvbmVudHM6dCxvbmx5Q2lkczpuPW4/bmV3IFNldChuKTpudWxsfTtyZXR1cm4gdGhpcy50b091dHB1dEJ1ZmZlcihlLGkpLGkuYnVmZmVyfX0se2tleTpcImNvbXBvbmVudENJRHNcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmtleXMoZS5jfHx7fSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUludChlKX0pfX0se2tleTpcImlzQ29tcG9uZW50T25seURpZmZcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4hIWUuYyYmMT09PU9iamVjdC5rZXlzKGUpLmxlbmd0aH19LHtrZXk6XCJnZXRDb21wb25lbnRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLmNbdF19fSx7a2V5OlwibWVyZ2VEaWZmXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jLG49e307aWYoZGVsZXRlIGUuYyx0aGlzLnJlbmRlcmVkPXRoaXMubXV0YWJsZU1lcmdlKHRoaXMucmVuZGVyZWQsZSksdGhpcy5yZW5kZXJlZC5jPXRoaXMucmVuZGVyZWQuY3x8e30sdCl7dmFyIGk9dGhpcy5yZW5kZXJlZC5jO2Zvcih2YXIgciBpbiB0KXRbcl09dGhpcy5jYWNoZWRGaW5kQ29tcG9uZW50KHIsdFtyXSxpLHQsbik7Zm9yKHZhciBvIGluIHQpaVtvXT10W29dO2UuYz10fX19LHtrZXk6XCJjYWNoZWRGaW5kQ29tcG9uZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSxyKXtpZihyW2VdKXJldHVybiByW2VdO3ZhciBvLGEsdSxzPXQucztyZXR1cm5cIm51bWJlclwiPT10eXBlb2Ygcz8oYT0odT1zPjA/dGhpcy5jYWNoZWRGaW5kQ29tcG9uZW50KHMsaVtzXSxuLGkscik6blstc10pLnMsKG89dGhpcy5jbG9uZU1lcmdlKHUsdCkpLnM9YSk6bz12b2lkIDAhPT10LnM/dDp0aGlzLmNsb25lTWVyZ2UobltlXXx8e30sdCkscltlXT1vLG99fSx7a2V5OlwibXV0YWJsZU1lcmdlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwIT09dC5zP3Q6KHRoaXMuZG9NdXRhYmxlTWVyZ2UoZSx0KSxlKX19LHtrZXk6XCJkb011dGFibGVNZXJnZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIHQpe3ZhciBpPXRbbl0scj1lW25dO1EoaSkmJnZvaWQgMD09PWkucyYmUShyKT90aGlzLmRvTXV0YWJsZU1lcmdlKHIsaSk6ZVtuXT1pfX19LHtrZXk6XCJjbG9uZU1lcmdlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1BKEEoe30sZSksdCk7Zm9yKHZhciBpIGluIG4pe3ZhciByPXRbaV0sbz1lW2ldO1EocikmJnZvaWQgMD09PXIucyYmUShvKSYmKG5baV09dGhpcy5jbG9uZU1lcmdlKG8scikpfXJldHVybiBufX0se2tleTpcImNvbXBvbmVudFRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVjdXJzaXZlQ0lEVG9TdHJpbmcodGhpcy5yZW5kZXJlZC5jLGUpfX0se2tleTpcInBydW5lQ0lEc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBkZWxldGUgdC5yZW5kZXJlZC5jW2VdfSl9fSx7a2V5OlwiZ2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZW5kZXJlZH19LHtrZXk6XCJpc05ld0ZpbmdlcnByaW50XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4hIShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30pLnN9fSx7a2V5OlwidG9PdXRwdXRCdWZmZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGUuZClyZXR1cm4gdGhpcy5jb21wcmVoZW5zaW9uVG9CdWZmZXIoZSx0KTt2YXIgbj1lLnM7dC5idWZmZXIrPW5bMF07Zm9yKHZhciBpPTE7aTxuLmxlbmd0aDtpKyspdGhpcy5keW5hbWljVG9CdWZmZXIoZVtpLTFdLHQpLHQuYnVmZmVyKz1uW2ldfX0se2tleTpcImNvbXByZWhlbnNpb25Ub0J1ZmZlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPWUuZCxpPWUucyxyPTA7cjxuLmxlbmd0aDtyKyspe3ZhciBvPW5bcl07dC5idWZmZXIrPWlbMF07Zm9yKHZhciBhPTE7YTxpLmxlbmd0aDthKyspdGhpcy5keW5hbWljVG9CdWZmZXIob1thLTFdLHQpLHQuYnVmZmVyKz1pW2FdfX19LHtrZXk6XCJkeW5hbWljVG9CdWZmZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQpe1wibnVtYmVyXCI9PXR5cGVvZiBlP3QuYnVmZmVyKz10aGlzLnJlY3Vyc2l2ZUNJRFRvU3RyaW5nKHQuY29tcG9uZW50cyxlLHQub25seUNpZHMpOlEoZSk/dGhpcy50b091dHB1dEJ1ZmZlcihlLHQpOnQuYnVmZmVyKz1lfX0se2tleTpcInJlY3Vyc2l2ZUNJRFRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXMscj1lW3RdfHxLKFwibm8gY29tcG9uZW50IGZvciBDSUQgXCIuY29uY2F0KHQpLGUpLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO28uaW5uZXJIVE1MPXRoaXMucmVjdXJzaXZlVG9TdHJpbmcocixlLG4pO3ZhciBhPW8uY29udGVudCx1PW4mJiFuLmhhcyh0KSxzPUMoQXJyYXkuZnJvbShhLmNoaWxkTm9kZXMpLnJlZHVjZShmdW5jdGlvbihlLG4scil7dmFyIGE9QyhlLDIpLHM9YVswXSxjPWFbMV07cmV0dXJuIG4ubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERT9uLmdldEF0dHJpYnV0ZShNKT9bcywhMF06KG4uc2V0QXR0cmlidXRlKE0sdCksbi5pZHx8KG4uaWQ9XCJcIi5jb25jYXQoaS5wYXJlbnRWaWV3SWQoKSxcIi1cIikuY29uY2F0KHQsXCItXCIpLmNvbmNhdChyKSksdSYmKG4uc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc2tpcFwiLFwiXCIpLG4uaW5uZXJIVE1MPVwiXCIpLFshMCxjXSk6XCJcIiE9PW4ubm9kZVZhbHVlLnRyaW0oKT8oSyhcIm9ubHkgSFRNTCBlbGVtZW50IHRhZ3MgYXJlIGFsbG93ZWQgYXQgdGhlIHJvb3Qgb2YgY29tcG9uZW50cy5cXG5cXG5cIisnZ290OiBcIicuY29uY2F0KG4ubm9kZVZhbHVlLnRyaW0oKSwnXCJcXG5cXG4nKStcIndpdGhpbjpcXG5cIixvLmlubmVySFRNTC50cmltKCkpLG4ucmVwbGFjZVdpdGgoaS5jcmVhdGVTcGFuKG4ubm9kZVZhbHVlLHQpKSxbITAsY10pOihuLnJlbW92ZSgpLFtzLGNdKX0sWyExLCExXSksMiksYz1zWzBdLGw9c1sxXTtyZXR1cm4gY3x8bD8hYyYmbD8oSyhcImV4cGVjdGVkIGF0IGxlYXN0IG9uZSBIVE1MIGVsZW1lbnQgdGFnIGRpcmVjdGx5IGluc2lkZSBhIGNvbXBvbmVudCwgYnV0IG9ubHkgc3ViY29tcG9uZW50cyB3ZXJlIGZvdW5kLiBBIGNvbXBvbmVudCBtdXN0IHJlbmRlciBhdCBsZWFzdCBvbmUgSFRNTCB0YWcgZGlyZWN0bHkgaW5zaWRlIGl0c2VsZi5cIixvLmlubmVySFRNTC50cmltKCkpLG8uaW5uZXJIVE1MKTpvLmlubmVySFRNTDooSyhcImV4cGVjdGVkIGF0IGxlYXN0IG9uZSBIVE1MIGVsZW1lbnQgdGFnIGluc2lkZSBhIGNvbXBvbmVudCwgYnV0IHRoZSBjb21wb25lbnQgaXMgZW1wdHk6XFxuXCIsby5pbm5lckhUTUwudHJpbSgpKSx0aGlzLmNyZWF0ZVNwYW4oXCJcIix0KS5vdXRlckhUTUwpfX0se2tleTpcImNyZWF0ZVNwYW5cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBuLmlubmVyVGV4dD1lLG4uc2V0QXR0cmlidXRlKE0sdCksbn19XSksZX0oKSxjZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXt2YXIgaT10aGlzLHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9O2lmKEQodGhpcyxlKSx0aGlzLnVubG9hZGVkPSExLCFufHxcIk9iamVjdFwiPT09bi5jb25zdHJ1Y3Rvci5uYW1lKXRocm93IG5ldyBFcnJvcignXFxuICAgICAgYSBwaG9lbml4IFNvY2tldCBtdXN0IGJlIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gdGhlIExpdmVTb2NrZXQgY29uc3RydWN0b3IuIEZvciBleGFtcGxlOlxcblxcbiAgICAgICAgICBpbXBvcnQge1NvY2tldH0gZnJvbSBcInBob2VuaXhcIlxcbiAgICAgICAgICBpbXBvcnQge0xpdmVTb2NrZXR9IGZyb20gXCJwaG9lbml4X2xpdmVfdmlld1wiXFxuICAgICAgICAgIGxldCBsaXZlU29ja2V0ID0gbmV3IExpdmVTb2NrZXQoXCIvbGl2ZVwiLCBTb2NrZXQsIHsuLi59KVxcbiAgICAgICcpO3RoaXMuc29ja2V0PW5ldyBuKHQsciksdGhpcy5iaW5kaW5nUHJlZml4PXIuYmluZGluZ1ByZWZpeHx8cSx0aGlzLm9wdHM9cix0aGlzLnBhcmFtcz0kKHIucGFyYW1zfHx7fSksdGhpcy52aWV3TG9nZ2VyPXIudmlld0xvZ2dlcix0aGlzLm1ldGFkYXRhQ2FsbGJhY2tzPXIubWV0YWRhdGF8fHt9LHRoaXMuZGVmYXVsdHM9T2JqZWN0LmFzc2lnbihHKHopLHIuZGVmYXVsdHN8fHt9KSx0aGlzLmFjdGl2ZUVsZW1lbnQ9bnVsbCx0aGlzLnByZXZBY3RpdmU9bnVsbCx0aGlzLnNpbGVuY2VkPSExLHRoaXMubWFpbj1udWxsLHRoaXMubGlua1JlZj0xLHRoaXMucm9vdHM9e30sdGhpcy5ocmVmPXdpbmRvdy5sb2NhdGlvbi5ocmVmLHRoaXMucGVuZGluZ0xpbms9bnVsbCx0aGlzLmN1cnJlbnRMb2NhdGlvbj1HKHdpbmRvdy5sb2NhdGlvbiksdGhpcy5ob29rcz1yLmhvb2tzfHx7fSx0aGlzLnVwbG9hZGVycz1yLnVwbG9hZGVyc3x8e30sdGhpcy5sb2FkZXJUaW1lb3V0PXIubG9hZGVyVGltZW91dHx8Vyx0aGlzLmxvY2FsU3RvcmFnZT1yLmxvY2FsU3RvcmFnZXx8d2luZG93LmxvY2FsU3RvcmFnZSx0aGlzLnNlc3Npb25TdG9yYWdlPXIuc2Vzc2lvblN0b3JhZ2V8fHdpbmRvdy5zZXNzaW9uU3RvcmFnZSx0aGlzLmJvdW5kVG9wTGV2ZWxFdmVudHM9ITEsdGhpcy5kb21DYWxsYmFja3M9T2JqZWN0LmFzc2lnbih7b25Ob2RlQWRkZWQ6JCgpLG9uQmVmb3JlRWxVcGRhdGVkOiQoKX0sci5kb218fHt9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsZnVuY3Rpb24oZSl7aS51bmxvYWRlZD0hMH0pLHRoaXMuc29ja2V0Lm9uT3BlbihmdW5jdGlvbigpe2kuaXNVbmxvYWRlZCgpJiZ3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9KX1yZXR1cm4gTihlLFt7a2V5OlwiaXNQcm9maWxlRW5hYmxlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJ0cnVlXCI9PT10aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwaHg6bGl2ZS1zb2NrZXQ6cHJvZmlsaW5nXCIpfX0se2tleTpcImlzRGVidWdFbmFibGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInRydWVcIj09PXRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInBoeDpsaXZlLXNvY2tldDpkZWJ1Z1wiKX19LHtrZXk6XCJlbmFibGVEZWJ1Z1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicGh4OmxpdmUtc29ja2V0OmRlYnVnXCIsXCJ0cnVlXCIpfX0se2tleTpcImVuYWJsZVByb2ZpbGluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicGh4OmxpdmUtc29ja2V0OnByb2ZpbGluZ1wiLFwidHJ1ZVwiKX19LHtrZXk6XCJkaXNhYmxlRGVidWdcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInBoeDpsaXZlLXNvY2tldDpkZWJ1Z1wiKX19LHtrZXk6XCJkaXNhYmxlUHJvZmlsaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJwaHg6bGl2ZS1zb2NrZXQ6cHJvZmlsaW5nXCIpfX0se2tleTpcImVuYWJsZUxhdGVuY3lTaW1cIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmVuYWJsZURlYnVnKCksY29uc29sZS5sb2coXCJsYXRlbmN5IHNpbXVsYXRvciBlbmFibGVkIGZvciB0aGUgZHVyYXRpb24gb2YgdGhpcyBicm93c2VyIHNlc3Npb24uIENhbGwgZGlzYWJsZUxhdGVuY3lTaW0oKSB0byBkaXNhYmxlXCIpLHRoaXMuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInBoeDpsaXZlLXNvY2tldDpsYXRlbmN5LXNpbVwiLGUpfX0se2tleTpcImRpc2FibGVMYXRlbmN5U2ltXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJwaHg6bGl2ZS1zb2NrZXQ6bGF0ZW5jeS1zaW1cIil9fSx7a2V5OlwiZ2V0TGF0ZW5jeVNpbVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicGh4OmxpdmUtc29ja2V0OmxhdGVuY3ktc2ltXCIpO3JldHVybiBlP3BhcnNlSW50KGUpOm51bGx9fSx7a2V5OlwiZ2V0U29ja2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zb2NrZXR9fSx7a2V5OlwiY29ubmVjdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWZ1bmN0aW9uKCl7ZS5qb2luUm9vdFZpZXdzKCkmJihlLmJpbmRUb3BMZXZlbEV2ZW50cygpLGUuc29ja2V0LmNvbm5lY3QoKSl9O1tcImNvbXBsZXRlXCIsXCJsb2FkZWRcIixcImludGVyYWN0aXZlXCJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSk+PTA/dCgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtyZXR1cm4gdCgpfSl9fSx7a2V5OlwiZGlzY29ubmVjdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc29ja2V0LmRpc2Nvbm5lY3QoZSl9fSx7a2V5OlwidHJpZ2dlckRPTVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG47KG49dGhpcy5kb21DYWxsYmFja3MpW2VdLmFwcGx5KG4sdyh0KSl9fSx7a2V5OlwidGltZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoIXRoaXMuaXNQcm9maWxlRW5hYmxlZCgpfHwhY29uc29sZS50aW1lKXJldHVybiB0KCk7Y29uc29sZS50aW1lKGUpO3ZhciBuPXQoKTtyZXR1cm4gY29uc29sZS50aW1lRW5kKGUpLG59fSx7a2V5OlwibG9nXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe2lmKHRoaXMudmlld0xvZ2dlcil7dmFyIGk9QyhuKCksMikscj1pWzBdLG89aVsxXTt0aGlzLnZpZXdMb2dnZXIoZSx0LHIsbyl9ZWxzZSBpZih0aGlzLmlzRGVidWdFbmFibGVkKCkpe3ZhciBhPUMobigpLDIpLHU9YVswXSxzPWFbMV07WChlLHQsdSxzKX19fSx7a2V5Olwib25DaGFubmVsXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7ZS5vbih0LGZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0TGF0ZW5jeVNpbSgpO3Q/KGNvbnNvbGUubG9nKFwic2ltdWxhdGluZyBcIi5jb25jYXQodCxcIm1zIG9mIGxhdGVuY3kgZnJvbSBzZXJ2ZXIgdG8gY2xpZW50XCIpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIG4oZSl9LHQpKTpuKGUpfSl9fSx7a2V5Olwid3JhcFB1c2hcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPXRoaXMuZ2V0TGF0ZW5jeVNpbSgpLG89ZS5qb2luQ291bnQ7aWYoIXIpcmV0dXJuIHQudGltZW91dD9uKCkucmVjZWl2ZShcInRpbWVvdXRcIixmdW5jdGlvbigpe2Uuam9pbkNvdW50PT09byYmaS5yZWxvYWRXaXRoSml0dGVyKGUsZnVuY3Rpb24oKXtpLmxvZyhlLFwidGltZW91dFwiLGZ1bmN0aW9uKCl7cmV0dXJuW1wicmVjZWl2ZWQgdGltZW91dCB3aGlsZSBjb21tdW5pY2F0aW5nIHdpdGggc2VydmVyLiBGYWxsaW5nIGJhY2sgdG8gaGFyZCByZWZyZXNoIGZvciByZWNvdmVyeVwiXX0pfSl9KTpuKCk7Y29uc29sZS5sb2coXCJzaW11bGF0aW5nIFwiLmNvbmNhdChyLFwibXMgb2YgbGF0ZW5jeSBmcm9tIGNsaWVudCB0byBzZXJ2ZXJcIikpO3ZhciBhPXtyZWNlaXZlczpbXSxyZWNlaXZlOmZ1bmN0aW9uKGUsdCl7dGhpcy5yZWNlaXZlcy5wdXNoKFtlLHRdKX19O3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5yZWNlaXZlcy5yZWR1Y2UoZnVuY3Rpb24oZSx0KXt2YXIgbj1DKHQsMiksaT1uWzBdLHI9blsxXTtyZXR1cm4gZS5yZWNlaXZlKGkscil9LG4oKSl9LHIpLGF9fSx7a2V5OlwicmVsb2FkV2l0aEppdHRlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztlLmRlc3Ryb3koKSx0aGlzLmRpc2Nvbm5lY3QoKTt2YXIgaT1PWzBdLHI9T1sxXSxvPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooci1pKzEpKStpLGE9bGUudXBkYXRlTG9jYWwodGhpcy5sb2NhbFN0b3JhZ2UsZS5uYW1lKCksXCJjb25zZWN1dGl2ZS1yZWxvYWRzXCIsMCxmdW5jdGlvbihlKXtyZXR1cm4gZSsxfSk7dD90KCk6dGhpcy5sb2coZSxcImpvaW5cIixmdW5jdGlvbigpe3JldHVybltcImVuY291bnRlcmVkIFwiLmNvbmNhdChhLFwiIGNvbnNlY3V0aXZlIHJlbG9hZHNcIildfSksYT4xMCYmKHRoaXMubG9nKGUsXCJqb2luXCIsZnVuY3Rpb24oKXtyZXR1cm5bXCJleGNlZWRlZCBcIi5jb25jYXQoMTAsXCIgY29uc2VjdXRpdmUgcmVsb2Fkcy4gRW50ZXJpbmcgZmFpbHNhZmUgbW9kZVwiKV19KSxvPTNlNCksc2V0VGltZW91dChmdW5jdGlvbigpe24uaGFzUGVuZGluZ0xpbmsoKT93aW5kb3cubG9jYXRpb249bi5wZW5kaW5nTGluazp3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9LG8pfX0se2tleTpcImdldEhvb2tDYWxsYmFja3NcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5zdGFydHNXaXRoKFwiUGhvZW5peC5cIik/bmVbZS5zcGxpdChcIi5cIilbMV1dOnRoaXMuaG9va3NbZV19fSx7a2V5OlwiaXNVbmxvYWRlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudW5sb2FkZWR9fSx7a2V5OlwiaXNDb25uZWN0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpfX0se2tleTpcImdldEJpbmRpbmdQcmVmaXhcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmJpbmRpbmdQcmVmaXh9fSx7a2V5OlwiYmluZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVyblwiXCIuY29uY2F0KHRoaXMuZ2V0QmluZGluZ1ByZWZpeCgpKS5jb25jYXQoZSl9fSx7a2V5OlwiY2hhbm5lbFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuc29ja2V0LmNoYW5uZWwoZSx0KX19LHtrZXk6XCJqb2luUm9vdFZpZXdzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ITE7cmV0dXJuIGRlLmFsbChkb2N1bWVudCxcIlwiLmNvbmNhdChCLFwiOm5vdChbXCIpLmNvbmNhdChcImRhdGEtcGh4LXBhcmVudC1pZFwiLFwiXSlcIiksZnVuY3Rpb24obil7aWYoIWUuZ2V0Um9vdEJ5SWQobi5pZCkpe3ZhciBpPWUuam9pblJvb3RWaWV3KG4sZS5nZXRIcmVmKCkpO2Uucm9vdD1lLnJvb3R8fGksbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1tYWluXCIpJiYoZS5tYWluPWkpfXQ9ITB9KSx0fX0se2tleTpcInJlZGlyZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmRpc2Nvbm5lY3QoKSxsZS5yZWRpcmVjdChlLHQpfX0se2tleTpcInJlcGxhY2VNYWluXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwscj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106dGhpcy5zZXRQZW5kaW5nTGluayhlKSxvPXRoaXMubWFpbi5lbDt0aGlzLm1haW4uc2hvd0xvYWRlcih0aGlzLmxvYWRlclRpbWVvdXQpLHRoaXMubWFpbi5kZXN0cm95KCksbGUuZmV0Y2hQYWdlKGUsZnVuY3Rpb24oYSx1KXtpZigyMDAhPT1hKXJldHVybiBuLnJlZGlyZWN0KGUpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtzLmlubmVySFRNTD11O3ZhciBjPXMuY29udGVudC5jaGlsZE5vZGVzWzBdO2lmKCFjfHwhbi5pc1BoeFZpZXcoYykpcmV0dXJuIG4ucmVkaXJlY3QoZSk7bi5qb2luUm9vdFZpZXcoYyxlLHQsZnVuY3Rpb24oZSx0KXsxPT09dCYmKG4uY29tbWl0UGVuZGluZ0xpbmsocik/KG8ucmVwbGFjZVdpdGgoZS5lbCksbi5tYWluPWUsaSYmaSgpKTplLmRlc3Ryb3koKSl9KX0pfX0se2tleTpcImlzUGh4Vmlld1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmbnVsbCE9PWUuZ2V0QXR0cmlidXRlKGopfX0se2tleTpcImpvaW5Sb290Vmlld1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByPW5ldyB2ZShlLHRoaXMsbnVsbCx0LG4pO3JldHVybiB0aGlzLnJvb3RzW3IuaWRdPXIsci5qb2luKGkpLHJ9fSx7a2V5Olwib3duZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsaT1lZShlLmNsb3Nlc3QoQiksZnVuY3Rpb24oZSl7cmV0dXJuIG4uZ2V0Vmlld0J5RWwoZSl9KTtpJiZ0KGkpfX0se2tleTpcIndpdGhpbk93bmVyc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczt0aGlzLm93bmVyKGUsZnVuY3Rpb24oaSl7dmFyIHI9ZS5nZXRBdHRyaWJ1dGUobi5iaW5kaW5nKFwidGFyZ2V0XCIpKTtudWxsPT09cj90KGksZSk6aS53aXRoaW5UYXJnZXRzKHIsdCl9KX19LHtrZXk6XCJnZXRWaWV3QnlFbFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcm9vdC1pZFwiKTtyZXR1cm4gZWUodGhpcy5nZXRSb290QnlJZCh0KSxmdW5jdGlvbih0KXtyZXR1cm4gdC5nZXREZXNjZW5kZW50QnlFbChlKX0pfX0se2tleTpcImdldFJvb3RCeUlkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucm9vdHNbZV19fSx7a2V5OlwiZGVzdHJveUFsbFZpZXdzXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy5yb290cyl0aGlzLnJvb3RzW2VdLmRlc3Ryb3koKSxkZWxldGUgdGhpcy5yb290c1tlXX19LHtrZXk6XCJkZXN0cm95Vmlld0J5RWxcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmdldFJvb3RCeUlkKGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcm9vdC1pZFwiKSk7dCYmdC5kZXN0cm95RGVzY2VuZGVudChlLmlkKX19LHtrZXk6XCJzZXRBY3RpdmVFbGVtZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZih0aGlzLmFjdGl2ZUVsZW1lbnQhPT1lKXt0aGlzLmFjdGl2ZUVsZW1lbnQ9ZTt2YXIgbj1mdW5jdGlvbigpe2U9PT10LmFjdGl2ZUVsZW1lbnQmJih0LmFjdGl2ZUVsZW1lbnQ9bnVsbCksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHQpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdCl9O2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixuKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLG4pfX19LHtrZXk6XCJnZXRBY3RpdmVFbGVtZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PWRvY3VtZW50LmJvZHk/dGhpcy5hY3RpdmVFbGVtZW50fHxkb2N1bWVudC5hY3RpdmVFbGVtZW50OmRvY3VtZW50LmFjdGl2ZUVsZW1lbnR8fGRvY3VtZW50LmJvZHl9fSx7a2V5OlwiZHJvcEFjdGl2ZUVsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnByZXZBY3RpdmUmJmUub3duc0VsZW1lbnQodGhpcy5wcmV2QWN0aXZlKSYmKHRoaXMucHJldkFjdGl2ZT1udWxsKX19LHtrZXk6XCJyZXN0b3JlUHJldmlvdXNseUFjdGl2ZUZvY3VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnByZXZBY3RpdmUmJnRoaXMucHJldkFjdGl2ZSE9PWRvY3VtZW50LmJvZHkmJnRoaXMucHJldkFjdGl2ZS5mb2N1cygpfX0se2tleTpcImJsdXJBY3RpdmVFbGVtZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnByZXZBY3RpdmU9dGhpcy5nZXRBY3RpdmVFbGVtZW50KCksdGhpcy5wcmV2QWN0aXZlIT09ZG9jdW1lbnQuYm9keSYmdGhpcy5wcmV2QWN0aXZlLmJsdXIoKX19LHtrZXk6XCJiaW5kVG9wTGV2ZWxFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5ib3VuZFRvcExldmVsRXZlbnRzfHwodGhpcy5ib3VuZFRvcExldmVsRXZlbnRzPSEwLGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXt9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsZnVuY3Rpb24odCl7dC5wZXJzaXN0ZWQmJihlLmdldFNvY2tldCgpLmRpc2Nvbm5lY3QoKSxlLndpdGhQYWdlTG9hZGluZyh7dG86d2luZG93LmxvY2F0aW9uLmhyZWYsa2luZDpcInJlZGlyZWN0XCJ9KSx3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpfSwhMCksdGhpcy5iaW5kQ2xpY2tzKCksdGhpcy5iaW5kTmF2KCksdGhpcy5iaW5kRm9ybXMoKSx0aGlzLmJpbmQoe2tleXVwOlwia2V5dXBcIixrZXlkb3duOlwia2V5ZG93blwifSxmdW5jdGlvbih0LG4saSxyLG8sYSx1KXt2YXIgcz1yLmdldEF0dHJpYnV0ZShlLmJpbmRpbmcoXCJrZXlcIikpLGM9dC5rZXkmJnQua2V5LnRvTG93ZXJDYXNlKCk7cyYmcy50b0xvd2VyQ2FzZSgpIT09Y3x8aS5wdXNoS2V5KHIsbyxuLGEsQSh7a2V5OnQua2V5fSxlLmV2ZW50TWV0YShuLHQscikpKX0pLHRoaXMuYmluZCh7Ymx1cjpcImZvY3Vzb3V0XCIsZm9jdXM6XCJmb2N1c2luXCJ9LGZ1bmN0aW9uKHQsbixpLHIsbyxhLHUpe3V8fGkucHVzaEV2ZW50KG4scixvLGEsZS5ldmVudE1ldGEobix0LHIpKX0pLHRoaXMuYmluZCh7Ymx1cjpcImJsdXJcIixmb2N1czpcImZvY3VzXCJ9LGZ1bmN0aW9uKHQsbixpLHIsbyxhLHUpe3UmJlwid2luZG93XCIhPT0hdSYmaS5wdXNoRXZlbnQobixyLG8sYSxlLmV2ZW50TWV0YShuLHQscikpfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLGZ1bmN0aW9uKGUpe3JldHVybiBlLnByZXZlbnREZWZhdWx0KCl9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIG49ZWUoWSh0LnRhcmdldCxlLmJpbmRpbmcoXCJkcm9wLXRhcmdldFwiKSksZnVuY3Rpb24odCl7cmV0dXJuIHQuZ2V0QXR0cmlidXRlKGUuYmluZGluZyhcImRyb3AtdGFyZ2V0XCIpKX0pLGk9biYmZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobikscj1BcnJheS5mcm9tKHQuZGF0YVRyYW5zZmVyLmZpbGVzfHxbXSk7aSYmIWkuZGlzYWJsZWQmJjAhPT1yLmxlbmd0aCYmaS5maWxlcyBpbnN0YW5jZW9mIEZpbGVMaXN0JiYocmUudHJhY2tGaWxlcyhpLHIpLGkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpKX0pKX19LHtrZXk6XCJldmVudE1ldGFcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcy5tZXRhZGF0YUNhbGxiYWNrc1tlXTtyZXR1cm4gaT9pKHQsbik6e319fSx7a2V5Olwic2V0UGVuZGluZ0xpbmtcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saW5rUmVmKyssdGhpcy5wZW5kaW5nTGluaz1lLHRoaXMubGlua1JlZn19LHtrZXk6XCJjb21taXRQZW5kaW5nTGlua1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmxpbmtSZWY9PT1lJiYodGhpcy5ocmVmPXRoaXMucGVuZGluZ0xpbmssdGhpcy5wZW5kaW5nTGluaz1udWxsLCEwKX19LHtrZXk6XCJnZXRIcmVmXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ocmVmfX0se2tleTpcImhhc1BlbmRpbmdMaW5rXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMucGVuZGluZ0xpbmt9fSx7a2V5OlwiYmluZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxpPWZ1bmN0aW9uKGkpe3ZhciByPWVbaV07bi5vbihyLGZ1bmN0aW9uKGUpe3ZhciByPW4uYmluZGluZyhpKSxvPW4uYmluZGluZyhcIndpbmRvdy1cIi5jb25jYXQoaSkpLGE9ZS50YXJnZXQuZ2V0QXR0cmlidXRlJiZlLnRhcmdldC5nZXRBdHRyaWJ1dGUocik7YT9uLmRlYm91bmNlKGUudGFyZ2V0LGUsZnVuY3Rpb24oKXtuLndpdGhpbk93bmVycyhlLnRhcmdldCxmdW5jdGlvbihuLHIpe3QoZSxpLG4sZS50YXJnZXQscixhLG51bGwpfSl9KTpkZS5hbGwoZG9jdW1lbnQsXCJbXCIuY29uY2F0KG8sXCJdXCIpLGZ1bmN0aW9uKHIpe3ZhciBhPXIuZ2V0QXR0cmlidXRlKG8pO24uZGVib3VuY2UocixlLGZ1bmN0aW9uKCl7bi53aXRoaW5Pd25lcnMocixmdW5jdGlvbihuLG8pe3QoZSxpLG4scixvLGEsXCJ3aW5kb3dcIil9KX0pfSl9KX07Zm9yKHZhciByIGluIGUpaShyKX19LHtrZXk6XCJiaW5kQ2xpY2tzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmJpbmRDbGljayhcImNsaWNrXCIsXCJjbGlja1wiLCExKSx0aGlzLmJpbmRDbGljayhcIm1vdXNlZG93blwiLFwiY2FwdHVyZS1jbGlja1wiLCEwKX19LHtrZXk6XCJiaW5kQ2xpY2tcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPXRoaXMuYmluZGluZyh0KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLGZ1bmN0aW9uKGUpe2lmKGkuaXNDb25uZWN0ZWQoKSl7dmFyIHQ9bnVsbCxvPSh0PW4/ZS50YXJnZXQubWF0Y2hlcyhcIltcIi5jb25jYXQocixcIl1cIikpP2UudGFyZ2V0OmUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJbXCIuY29uY2F0KHIsXCJdXCIpKTpZKGUudGFyZ2V0LHIpKSYmdC5nZXRBdHRyaWJ1dGUocik7byYmKFwiI1wiPT09dC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpJiZlLnByZXZlbnREZWZhdWx0KCksaS5kZWJvdW5jZSh0LGUsZnVuY3Rpb24oKXtpLndpdGhpbk93bmVycyh0LGZ1bmN0aW9uKG4scil7bi5wdXNoRXZlbnQoXCJjbGlja1wiLHQscixvLGkuZXZlbnRNZXRhKFwiY2xpY2tcIixlLHQpKX0pfSkpfX0sbil9fSx7a2V5OlwiYmluZE5hdlwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZihsZS5jYW5QdXNoU3RhdGUoKSl7aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiYmKGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249XCJtYW51YWxcIik7dmFyIHQ9bnVsbDt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dCh0KSx0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZS51cGRhdGVDdXJyZW50U3RhdGUoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5hc3NpZ24oZSx7c2Nyb2xsOndpbmRvdy5zY3JvbGxZfSl9KX0sMTAwKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixmdW5jdGlvbih0KXtpZihlLnJlZ2lzdGVyTmV3TG9jYXRpb24od2luZG93LmxvY2F0aW9uKSl7dmFyIG49dC5zdGF0ZXx8e30saT1uLnR5cGUscj1uLmlkLG89bi5yb290LGE9bi5zY3JvbGwsdT13aW5kb3cubG9jYXRpb24uaHJlZjtlLm1haW4uaXNDb25uZWN0ZWQoKSYmXCJwYXRjaFwiPT09aSYmcj09PWUubWFpbi5pZD9lLm1haW4ucHVzaExpbmtQYXRjaCh1LG51bGwpOmUucmVwbGFjZU1haW4odSxudWxsLGZ1bmN0aW9uKCl7byYmZS5yZXBsYWNlUm9vdEhpc3RvcnkoKSxcIm51bWJlclwiPT10eXBlb2YgYSYmc2V0VGltZW91dChmdW5jdGlvbigpe3dpbmRvdy5zY3JvbGxUbygwLGEpfSwwKX0pfX0sITEpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbih0KXt2YXIgbj1ZKHQudGFyZ2V0LFwiZGF0YS1waHgtbGlua1wiKSxpPW4mJm4uZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtbGlua1wiKSxyPXQubWV0YUtleXx8dC5jdHJsS2V5fHwxPT09dC5idXR0b247aWYoaSYmZS5pc0Nvbm5lY3RlZCgpJiZlLm1haW4mJiFyKXt2YXIgbz1uLmhyZWYsYT1uLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LWxpbmstc3RhdGVcIik7aWYodC5wcmV2ZW50RGVmYXVsdCgpLGUucGVuZGluZ0xpbmshPT1vKWlmKFwicGF0Y2hcIj09PWkpZS5wdXNoSGlzdG9yeVBhdGNoKG8sYSxuKTtlbHNle2lmKFwicmVkaXJlY3RcIiE9PWkpdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgXCIuY29uY2F0KFwiZGF0YS1waHgtbGlua1wiLCcgdG8gYmUgXCJwYXRjaFwiIG9yIFwicmVkaXJlY3RcIiwgZ290OiAnKS5jb25jYXQoaSkpO2UuaGlzdG9yeVJlZGlyZWN0KG8sYSl9fX0sITEpfX19LHtrZXk6XCJ3aXRoUGFnZUxvYWRpbmdcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2RlLmRpc3BhdGNoRXZlbnQod2luZG93LFwicGh4OnBhZ2UtbG9hZGluZy1zdGFydFwiLGUpO3ZhciBuPWZ1bmN0aW9uKCl7cmV0dXJuIGRlLmRpc3BhdGNoRXZlbnQod2luZG93LFwicGh4OnBhZ2UtbG9hZGluZy1zdG9wXCIsZSl9O3JldHVybiB0P3Qobik6bn19LHtrZXk6XCJwdXNoSGlzdG9yeVBhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7dGhpcy53aXRoUGFnZUxvYWRpbmcoe3RvOmUsa2luZDpcInBhdGNoXCJ9LGZ1bmN0aW9uKHIpe2kubWFpbi5wdXNoTGlua1BhdGNoKGUsbixmdW5jdGlvbihuKXtpLmhpc3RvcnlQYXRjaChlLHQsbikscigpfSl9KX19LHtrZXk6XCJoaXN0b3J5UGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp0aGlzLnNldFBlbmRpbmdMaW5rKGUpO3RoaXMuY29tbWl0UGVuZGluZ0xpbmsobikmJihsZS5wdXNoU3RhdGUodCx7dHlwZTpcInBhdGNoXCIsaWQ6dGhpcy5tYWluLmlkfSxlKSx0aGlzLnJlZ2lzdGVyTmV3TG9jYXRpb24od2luZG93LmxvY2F0aW9uKSl9fSx7a2V5OlwiaGlzdG9yeVJlZGlyZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXMscj13aW5kb3cuc2Nyb2xsWTt0aGlzLndpdGhQYWdlTG9hZGluZyh7dG86ZSxraW5kOlwicmVkaXJlY3RcIn0sZnVuY3Rpb24obyl7aS5yZXBsYWNlTWFpbihlLG4sZnVuY3Rpb24oKXtsZS5wdXNoU3RhdGUodCx7dHlwZTpcInJlZGlyZWN0XCIsaWQ6aS5tYWluLmlkLHNjcm9sbDpyfSxlKSxpLnJlZ2lzdGVyTmV3TG9jYXRpb24od2luZG93LmxvY2F0aW9uKSxvKCl9KX0pfX0se2tleTpcInJlcGxhY2VSb290SGlzdG9yeVwiLHZhbHVlOmZ1bmN0aW9uKCl7bGUucHVzaFN0YXRlKFwicmVwbGFjZVwiLHtyb290OiEwLHR5cGU6XCJwYXRjaFwiLGlkOnRoaXMubWFpbi5pZH0pfX0se2tleTpcInJlZ2lzdGVyTmV3TG9jYXRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmN1cnJlbnRMb2NhdGlvbjtyZXR1cm4gdC5wYXRobmFtZSt0LnNlYXJjaCE9PWUucGF0aG5hbWUrZS5zZWFyY2gmJih0aGlzLmN1cnJlbnRMb2NhdGlvbj1HKGUpLCEwKX19LHtrZXk6XCJiaW5kRm9ybXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD0wO3RoaXMub24oXCJzdWJtaXRcIixmdW5jdGlvbih0KXt2YXIgbj10LnRhcmdldC5nZXRBdHRyaWJ1dGUoZS5iaW5kaW5nKFwic3VibWl0XCIpKTtuJiYodC5wcmV2ZW50RGVmYXVsdCgpLHQudGFyZ2V0LmRpc2FibGVkPSEwLGUud2l0aGluT3duZXJzKHQudGFyZ2V0LGZ1bmN0aW9uKGUsaSl7cmV0dXJuIGUuc3VibWl0Rm9ybSh0LnRhcmdldCxpLG4pfSkpfSwhMSk7Zm9yKHZhciBuPWZ1bmN0aW9uKCl7dmFyIG49cltpXTtlLm9uKG4sZnVuY3Rpb24oaSl7dmFyIHI9aS50YXJnZXQsbz1yLmZvcm0mJnIuZm9ybS5nZXRBdHRyaWJ1dGUoZS5iaW5kaW5nKFwiY2hhbmdlXCIpKTtpZihvJiYoXCJudW1iZXJcIiE9PXIudHlwZXx8IXIudmFsaWRpdHl8fCFyLnZhbGlkaXR5LmJhZElucHV0KSl7dmFyIGE9dDt0Kys7dmFyIHU9ZGUucHJpdmF0ZShyLFwicHJldi1pdGVyYXRpb25cIil8fHt9LHM9dS5hdCxjPXUudHlwZTtzPT09YS0xJiZuIT09Y3x8KGRlLnB1dFByaXZhdGUocixcInByZXYtaXRlcmF0aW9uXCIse2F0OmEsdHlwZTpufSksZS5kZWJvdW5jZShyLGksZnVuY3Rpb24oKXtlLndpdGhpbk93bmVycyhyLmZvcm0sZnVuY3Rpb24odCxuKXtkZS5wdXRQcml2YXRlKHIsXCJwaHgtaGFzLWZvY3VzZWRcIiwhMCksZGUuaXNUZXh0dWFsSW5wdXQocil8fGUuc2V0QWN0aXZlRWxlbWVudChyKSx0LnB1c2hJbnB1dChyLG4sbyxpLnRhcmdldCl9KX0pKX19LCExKX0saT0wLHI9W1wiY2hhbmdlXCIsXCJpbnB1dFwiXTtpPHIubGVuZ3RoO2krKyluKCl9fSx7a2V5OlwiZGVib3VuY2VcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcy5iaW5kaW5nKFwiZGVib3VuY2VcIikscj10aGlzLmJpbmRpbmcoXCJ0aHJvdHRsZVwiKSxvPXRoaXMuZGVmYXVsdHMuZGVib3VuY2UudG9TdHJpbmcoKSxhPXRoaXMuZGVmYXVsdHMudGhyb3R0bGUudG9TdHJpbmcoKTtkZS5kZWJvdW5jZShlLHQsaSxvLHIsYSxuKX19LHtrZXk6XCJzaWxlbmNlRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zaWxlbmNlZD0hMCxlKCksdGhpcy5zaWxlbmNlZD0hMX19LHtrZXk6XCJvblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLGZ1bmN0aW9uKGUpe24uc2lsZW5jZWR8fHQoZSl9KX19XSksZX0oKSxsZT17Y2FuUHVzaFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PWhpc3RvcnkucHVzaFN0YXRlfSxkcm9wTG9jYWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbEtleSh0LG4pKX0sdXBkYXRlTG9jYWw6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbz10aGlzLmdldExvY2FsKGUsdCxuKSxhPXRoaXMubG9jYWxLZXkodCxuKSx1PW51bGw9PT1vP2k6cihvKTtyZXR1cm4gZS5zZXRJdGVtKGEsSlNPTi5zdHJpbmdpZnkodSkpLHV9LGdldExvY2FsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gSlNPTi5wYXJzZShlLmdldEl0ZW0odGhpcy5sb2NhbEtleSh0LG4pKSl9LGZldGNoUGFnZTpmdW5jdGlvbihlLHQpe3ZhciBuPW5ldyBYTUxIdHRwUmVxdWVzdDtuLm9wZW4oXCJHRVRcIixlLCEwKSxuLnRpbWVvdXQ9M2U0LG4uc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLFwidGV4dC9odG1sXCIpLG4uc2V0UmVxdWVzdEhlYWRlcihcImNhY2hlLWNvbnRyb2xcIixcIm1heC1hZ2U9MCwgbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUsIHBvc3QtY2hlY2s9MCwgcHJlLWNoZWNrPTBcIiksbi5zZXRSZXF1ZXN0SGVhZGVyKFwieC1yZXF1ZXN0ZWQtd2l0aFwiLFwibGl2ZS1saW5rXCIpLG4ub25lcnJvcj1mdW5jdGlvbigpe3JldHVybiB0KDQwMCl9LG4ub250aW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIHQoNTA0KX0sbi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZig0PT09bi5yZWFkeVN0YXRlKXt2YXIgaT1uZXcgVVJMKGUpLHI9aS5wYXRobmFtZStpLnNlYXJjaCxvPWVlKG4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJ4LXJlc3BvbnNlLXVybFwiKXx8bi5yZXNwb25zZVVSTCxmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVSTChlKX0pLGE9bz9vLnBhdGhuYW1lK28uc2VhcmNoOm51bGw7cmV0dXJuXCJsaXZlLWxpbmtcIiE9PW4uZ2V0UmVzcG9uc2VIZWFkZXIoXCJ4LXJlcXVlc3RlZC13aXRoXCIpP3QoNDAwKTpudWxsPT09b3x8YSE9cj90KDMwMik6MjAwIT09bi5zdGF0dXM/dChuLnN0YXR1cyk6dm9pZCB0KDIwMCxuLnJlc3BvbnNlVGV4dCl9fSxuLnNlbmQoKX0sdXBkYXRlQ3VycmVudFN0YXRlOmZ1bmN0aW9uKGUpe3RoaXMuY2FuUHVzaFN0YXRlKCkmJmhpc3RvcnkucmVwbGFjZVN0YXRlKGUoaGlzdG9yeS5zdGF0ZXx8e30pLFwiXCIsd2luZG93LmxvY2F0aW9uLmhyZWYpfSxwdXNoU3RhdGU6ZnVuY3Rpb24oZSx0LG4pe2lmKHRoaXMuY2FuUHVzaFN0YXRlKCkpe2lmKG4hPT13aW5kb3cubG9jYXRpb24uaHJlZil7aWYoXCJyZWRpcmVjdFwiPT10LnR5cGUmJnQuc2Nyb2xsKXt2YXIgaT1oaXN0b3J5LnN0YXRlfHx7fTtpLnNjcm9sbD10LnNjcm9sbCxoaXN0b3J5LnJlcGxhY2VTdGF0ZShpLFwiXCIsd2luZG93LmxvY2F0aW9uLmhyZWYpfWRlbGV0ZSB0LnNjcm9sbCxoaXN0b3J5W2UrXCJTdGF0ZVwiXSh0LFwiXCIsbnx8bnVsbCk7dmFyIHI9dGhpcy5nZXRIYXNoVGFyZ2V0RWwod2luZG93LmxvY2F0aW9uLmhhc2gpO3I/ci5zY3JvbGxJbnRvVmlldygpOlwicmVkaXJlY3RcIj09PXQudHlwZSYmd2luZG93LnNjcm9sbCgwLDApfX1lbHNlIHRoaXMucmVkaXJlY3Qobil9LHNldENvb2tpZTpmdW5jdGlvbihlLHQpe2RvY3VtZW50LmNvb2tpZT1cIlwiLmNvbmNhdChlLFwiPVwiKS5jb25jYXQodCl9LGdldENvb2tpZTpmdW5jdGlvbihlKXtyZXR1cm4gZG9jdW1lbnQuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChcIig/Oig/Ol58Lio7cyopXCIuY29uY2F0KGUsXCJzKj1zKihbXjtdKikuKiQpfF4uKiRcIikpLFwiJDFcIil9LHJlZGlyZWN0OmZ1bmN0aW9uKGUsdCl7dCYmbGUuc2V0Q29va2llKFwiX19waG9lbml4X2ZsYXNoX19cIix0K1wiOyBtYXgtYWdlPTYwMDAwOyBwYXRoPS9cIiksd2luZG93LmxvY2F0aW9uPWV9LGxvY2FsS2V5OmZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJcIi5jb25jYXQoZSxcIi1cIikuY29uY2F0KHQpfSxnZXRIYXNoVGFyZ2V0RWw6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50b1N0cmluZygpLnN1YnN0cmluZygxKTtpZihcIlwiIT09dClyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCl8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbbmFtZT1cIicuY29uY2F0KHQsJ1wiXScpKX19LGRlPXtieUlkOmZ1bmN0aW9uKGUpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKXx8SyhcIm5vIGlkIGZvdW5kIGZvciBcIi5jb25jYXQoZSkpfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0LnJlbW92ZSh0KSwwPT09ZS5jbGFzc0xpc3QubGVuZ3RoJiZlLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpfSxhbGw6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHQpKTtyZXR1cm4gbj9pLmZvckVhY2gobik6aX0sY2hpbGROb2RlTGVuZ3RoOmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtyZXR1cm4gdC5pbm5lckhUTUw9ZSx0LmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnR9LGlzVXBsb2FkSW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJmaWxlXCI9PT1lLnR5cGUmJm51bGwhPT1lLmdldEF0dHJpYnV0ZShVKX0sZmluZFVwbG9hZElucHV0czpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hbGwoZSwnaW5wdXRbdHlwZT1cImZpbGVcIl1bJy5jb25jYXQoVSxcIl1cIikpfSxmaW5kQ29tcG9uZW50Tm9kZUxpc3Q6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5maWx0ZXJXaXRoaW5TYW1lTGl2ZVZpZXcodGhpcy5hbGwoZSxcIltcIi5jb25jYXQoTSwnPVwiJykuY29uY2F0KHQsJ1wiXScpKSxlKX0saXNQaHhEZXN0cm95ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuISghZS5pZHx8IWRlLnByaXZhdGUoZSxcImRlc3Ryb3llZFwiKSl9LG1hcmtQaHhDaGlsZERlc3Ryb3llZDpmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImRhdGEtcGh4LXNlc3Npb25cIixcIlwiKSx0aGlzLnB1dFByaXZhdGUoZSxcImRlc3Ryb3llZFwiLCEwKX0sZmluZFBoeENoaWxkcmVuSW5GcmFnbWVudDpmdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtyZXR1cm4gbi5pbm5lckhUTUw9ZSx0aGlzLmZpbmRQaHhDaGlsZHJlbihuLmNvbnRlbnQsdCl9LGlzSWdub3JlZDpmdW5jdGlvbihlLHQpe3JldHVyblwiaWdub3JlXCI9PT0oZS5nZXRBdHRyaWJ1dGUodCl8fGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtdXBkYXRlXCIpKX0saXNQaHhVcGRhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmbi5pbmRleE9mKGUuZ2V0QXR0cmlidXRlKHQpKT49MH0sZmluZFBoeENoaWxkcmVuOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuYWxsKGUsXCJcIi5jb25jYXQoQixcIltcIikuY29uY2F0KFwiZGF0YS1waHgtcGFyZW50LWlkXCIsJz1cIicpLmNvbmNhdCh0LCdcIl0nKSl9LGZpbmRQYXJlbnRDSURzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxpPW5ldyBTZXQodCk7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKHQsaSl7dmFyIHI9XCJbXCIuY29uY2F0KE0sJz1cIicpLmNvbmNhdChpLCdcIl0gWycpLmNvbmNhdChNLFwiXVwiKTtyZXR1cm4gbi5maWx0ZXJXaXRoaW5TYW1lTGl2ZVZpZXcobi5hbGwoZSxyKSxlKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKE0pKX0pLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQuZGVsZXRlKGUpfSksdH0saSl9LGZpbHRlcldpdGhpblNhbWVMaXZlVmlldzpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7cmV0dXJuIHQucXVlcnlTZWxlY3RvcihCKT9lLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gbi53aXRoaW5TYW1lTGl2ZVZpZXcoZSx0KX0pOmV9LHdpdGhpblNhbWVMaXZlVmlldzpmdW5jdGlvbihlLHQpe2Zvcig7ZT1lLnBhcmVudE5vZGU7KXtpZihlLmlzU2FtZU5vZGUodCkpcmV0dXJuITA7aWYoZS5nZXRBdHRyaWJ1dGUoaikpcmV0dXJuITF9fSxwcml2YXRlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUucGh4UHJpdmF0ZSYmZS5waHhQcml2YXRlW3RdfSxkZWxldGVQcml2YXRlOmZ1bmN0aW9uKGUsdCl7ZS5waHhQcml2YXRlJiZkZWxldGUgZS5waHhQcml2YXRlW3RdfSxwdXRQcml2YXRlOmZ1bmN0aW9uKGUsdCxuKXtlLnBoeFByaXZhdGV8fChlLnBoeFByaXZhdGU9e30pLGUucGh4UHJpdmF0ZVt0XT1ufSxjb3B5UHJpdmF0ZXM6ZnVuY3Rpb24oZSx0KXt0LnBoeFByaXZhdGUmJihlLnBoeFByaXZhdGU9Ryh0LnBoeFByaXZhdGUpKX0scHV0VGl0bGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpLmRhdGFzZXQsbj10LnByZWZpeCxpPXQuc3VmZml4O2RvY3VtZW50LnRpdGxlPVwiXCIuY29uY2F0KG58fFwiXCIpLmNvbmNhdChlKS5jb25jYXQoaXx8XCJcIil9LGRlYm91bmNlOmZ1bmN0aW9uKGUsdCxuLGkscixvLGEpe3ZhciB1PXRoaXMscz1lLmdldEF0dHJpYnV0ZShuKSxjPWUuZ2V0QXR0cmlidXRlKHIpO1wiXCI9PT1zJiYocz1pKSxcIlwiPT09YyYmKGM9byk7dmFyIGw9c3x8Yztzd2l0Y2gobCl7Y2FzZSBudWxsOnJldHVybiBhKCk7Y2FzZVwiYmx1clwiOnJldHVybiB2b2lkKHRoaXMub25jZShlLFwiZGVib3VuY2UtYmx1clwiKSYmZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLGZ1bmN0aW9uKCl7cmV0dXJuIGEoKX0pKTtkZWZhdWx0OnZhciBkPXBhcnNlSW50KGwpLGg9dGhpcy5pbmNDeWNsZShlLFwiZGVib3VuY2UtdHJpZ2dlclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGM/dS5kZWxldGVQcml2YXRlKGUsXCJ0aHJvdHRsZWRcIik6YSgpfSk7aWYoaXNOYU4oZCkpcmV0dXJuIEsoXCJpbnZhbGlkIHRocm90dGxlL2RlYm91bmNlIHZhbHVlOiBcIi5jb25jYXQobCkpO2lmKGMpe3ZhciBmPSExO2lmKFwia2V5ZG93blwiPT09dC50eXBlKXt2YXIgdj10aGlzLnByaXZhdGUoZSxcImRlYm91bmNlLXByZXYta2V5XCIpO3RoaXMucHV0UHJpdmF0ZShlLFwiZGVib3VuY2UtcHJldi1rZXlcIix0LmtleSksZj12IT09dC5rZXl9aWYoIWYmJnRoaXMucHJpdmF0ZShlLFwidGhyb3R0bGVkXCIpKXJldHVybiExO2EoKSx0aGlzLnB1dFByaXZhdGUoZSxcInRocm90dGxlZFwiLCEwKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHUudHJpZ2dlckN5Y2xlKGUsXCJkZWJvdW5jZS10cmlnZ2VyXCIpfSxkKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdS50cmlnZ2VyQ3ljbGUoZSxcImRlYm91bmNlLXRyaWdnZXJcIixoKX0sZCk7dmFyIHA9ZS5mb3JtO3AmJnRoaXMub25jZShwLFwiYmluZC1kZWJvdW5jZVwiKSYmcC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsZnVuY3Rpb24oZSl7QXJyYXkuZnJvbShuZXcgRm9ybURhdGEocCkuZW50cmllcygpLGZ1bmN0aW9uKGUpe3ZhciB0PUMoZSwyKSxuPXRbMF0saT0odFsxXSxwLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiJy5jb25jYXQobiwnXCJdJykpKTt1LmluY0N5Y2xlKGksXCJkZWJvdW5jZS10cmlnZ2VyXCIpLHUuZGVsZXRlUHJpdmF0ZShpLFwidGhyb3R0bGVkXCIpfSl9KSx0aGlzLm9uY2UoZSxcImJpbmQtZGVib3VuY2VcIikmJmUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixmdW5jdGlvbih0KXtyZXR1cm4gdS50cmlnZ2VyQ3ljbGUoZSxcImRlYm91bmNlLXRyaWdnZXJcIil9KX19LHRyaWdnZXJDeWNsZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9Qyh0aGlzLnByaXZhdGUoZSx0KSwyKSxyPWlbMF0sbz1pWzFdO258fChuPXIpLG49PT1yJiYodGhpcy5pbmNDeWNsZShlLHQpLG8oKSl9LG9uY2U6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMCE9PXRoaXMucHJpdmF0ZShlLHQpJiYodGhpcy5wdXRQcml2YXRlKGUsdCwhMCksITApfSxpbmNDeWNsZTpmdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpmdW5jdGlvbigpe30saT1DKHRoaXMucHJpdmF0ZShlLHQpfHxbMCxuXSwyKSxyPWlbMF07aVsxXTtyZXR1cm4gcisrLHRoaXMucHV0UHJpdmF0ZShlLHQsW3Isbl0pLHJ9LGRpc2NhcmRFcnJvcjpmdW5jdGlvbihlLHQsbil7dmFyIGk9dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKG4pLHI9aSYmZS5xdWVyeVNlbGVjdG9yKCdbaWQ9XCInLmNvbmNhdChpLCdcIl0sIFtuYW1lPVwiJykuY29uY2F0KGksJ1wiXScpKTtyJiYodGhpcy5wcml2YXRlKHIsXCJwaHgtaGFzLWZvY3VzZWRcIil8fHRoaXMucHJpdmF0ZShyLmZvcm0sXCJwaHgtaGFzLXN1Ym1pdHRlZFwiKXx8dC5jbGFzc0xpc3QuYWRkKFwicGh4LW5vLWZlZWRiYWNrXCIpKX0sc2hvd0Vycm9yOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczsoZS5pZHx8ZS5uYW1lKSYmdGhpcy5hbGwoZS5mb3JtLFwiW1wiLmNvbmNhdCh0LCc9XCInKS5jb25jYXQoZS5pZCwnXCJdLCBbJykuY29uY2F0KHQsJz1cIicpLmNvbmNhdChlLm5hbWUsJ1wiXScpLGZ1bmN0aW9uKGUpe24ucmVtb3ZlQ2xhc3MoZSxcInBoeC1uby1mZWVkYmFja1wiKX0pfSxpc1BoeENoaWxkOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1wYXJlbnQtaWRcIil9LGRpc3BhdGNoRXZlbnQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e30saT1uZXcgQ3VzdG9tRXZlbnQodCx7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGRldGFpbDpufSk7ZS5kaXNwYXRjaEV2ZW50KGkpfSxjbG9uZU5vZGU6ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT10KXJldHVybiBlLmNsb25lTm9kZSghMCk7dmFyIG49ZS5jbG9uZU5vZGUoITEpO3JldHVybiBuLmlubmVySFRNTD10LG59LG1lcmdlQXR0cnM6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9LGk9bi5leGNsdWRlfHxbXSxyPW4uaXNJZ25vcmVkLG89dC5hdHRyaWJ1dGVzLGE9by5sZW5ndGgtMTthPj0wO2EtLSl7dmFyIHU9b1thXS5uYW1lO2kuaW5kZXhPZih1KTwwJiZlLnNldEF0dHJpYnV0ZSh1LHQuZ2V0QXR0cmlidXRlKHUpKX1mb3IodmFyIHM9ZS5hdHRyaWJ1dGVzLGM9cy5sZW5ndGgtMTtjPj0wO2MtLSl7dmFyIGw9c1tjXS5uYW1lO3I/bC5zdGFydHNXaXRoKFwiZGF0YS1cIikmJiF0Lmhhc0F0dHJpYnV0ZShsKSYmZS5yZW1vdmVBdHRyaWJ1dGUobCk6dC5oYXNBdHRyaWJ1dGUobCl8fGUucmVtb3ZlQXR0cmlidXRlKGwpfX0sbWVyZ2VGb2N1c2VkSW5wdXQ6ZnVuY3Rpb24oZSx0KXtlIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnR8fGRlLm1lcmdlQXR0cnMoZSx0LHtleGNlcHQ6W1widmFsdWVcIl19KSx0LnJlYWRPbmx5P2Uuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwhMCk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKX0saGFzU2VsZWN0aW9uUmFuZ2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2V0U2VsZWN0aW9uUmFuZ2UmJihcInRleHRcIj09PWUudHlwZXx8XCJ0ZXh0YXJlYVwiPT09ZS50eXBlKX0scmVzdG9yZUZvY3VzOmZ1bmN0aW9uKGUsdCxuKXtpZihkZS5pc1RleHR1YWxJbnB1dChlKSl7dmFyIGk9ZS5tYXRjaGVzKFwiOmZvY3VzXCIpO2UucmVhZE9ubHkmJmUuYmx1cigpLGl8fGUuZm9jdXMoKSx0aGlzLmhhc1NlbGVjdGlvblJhbmdlKGUpJiZlLnNldFNlbGVjdGlvblJhbmdlKHQsbil9fSxpc0Zvcm1JbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdChlLnRhZ05hbWUpJiZcImJ1dHRvblwiIT09ZS50eXBlfSxzeW5jQXR0cnNUb1Byb3BzOmZ1bmN0aW9uKGUpe2UgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZWLmluZGV4T2YoZS50eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkpPj0wJiYoZS5jaGVja2VkPW51bGwhPT1lLmdldEF0dHJpYnV0ZShcImNoZWNrZWRcIikpfSxpc1RleHR1YWxJbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gSi5pbmRleE9mKGUudHlwZSk+PTB9LGlzTm93VHJpZ2dlckZvcm1FeHRlcm5hbDpmdW5jdGlvbihlLHQpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmbnVsbCE9PWUuZ2V0QXR0cmlidXRlKHQpfSxzeW5jUGVuZGluZ1JlZjpmdW5jdGlvbihlLHQsbil7dmFyIGk9ZS5nZXRBdHRyaWJ1dGUoRik7cmV0dXJuIG51bGw9PT1pfHwoZGUuaXNGb3JtSW5wdXQoZSl8fG51bGwhPT1lLmdldEF0dHJpYnV0ZShuKT8oZGUuaXNVcGxvYWRJbnB1dChlKSYmZGUubWVyZ2VBdHRycyhlLHQse2lzSWdub3JlZDohMH0pLGRlLnB1dFByaXZhdGUoZSxGLHQpLCExKTooSC5mb3JFYWNoKGZ1bmN0aW9uKG4pe2UuY2xhc3NMaXN0LmNvbnRhaW5zKG4pJiZ0LmNsYXNzTGlzdC5hZGQobil9KSx0LnNldEF0dHJpYnV0ZShGLGkpLCEwKSl9LGNsZWFuQ2hpbGROb2RlczpmdW5jdGlvbihlLHQpe2lmKGRlLmlzUGh4VXBkYXRlKGUsdCxbXCJhcHBlbmRcIixcInByZXBlbmRcIl0pKXt2YXIgbj1bXTtlLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlKXtlLmlkfHwoZS5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFJiZcIlwiPT09ZS5ub2RlVmFsdWUudHJpbSgpfHxLKFwib25seSBIVE1MIGVsZW1lbnQgdGFncyB3aXRoIGFuIGlkIGFyZSBhbGxvd2VkIGluc2lkZSBjb250YWluZXJzIHdpdGggcGh4LXVwZGF0ZS5cXG5cXG5cIisncmVtb3ZpbmcgaWxsZWdhbCBub2RlOiBcIicuY29uY2F0KChlLm91dGVySFRNTHx8ZS5ub2RlVmFsdWUpLnRyaW0oKSwnXCJcXG5cXG4nKSksbi5wdXNoKGUpKX0pLG4uZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZW1vdmUoKX0pfX19LGhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4saSl7RCh0aGlzLGUpO3ZhciByPW5ldyBTZXQsbz1uZXcgU2V0KHcobi5jaGlsZHJlbikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlkfSkpLGE9W107QXJyYXkuZnJvbSh0LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUuaWQmJihyLmFkZChlLmlkKSxvLmhhcyhlLmlkKSkpe3ZhciB0PWUucHJldmlvdXNFbGVtZW50U2libGluZyYmZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkO2EucHVzaCh7ZWxlbWVudElkOmUuaWQscHJldmlvdXNFbGVtZW50SWQ6dH0pfX0pLHRoaXMuY29udGFpbmVySWQ9bi5pZCx0aGlzLnVwZGF0ZVR5cGU9aSx0aGlzLmVsZW1lbnRzVG9Nb2RpZnk9YSx0aGlzLmVsZW1lbnRJZHNUb0FkZD13KG8pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hci5oYXMoZSl9KX1yZXR1cm4gTihlLFt7a2V5OlwicGVyZm9ybVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9ZGUuYnlJZCh0aGlzLmNvbnRhaW5lcklkKTt0aGlzLmVsZW1lbnRzVG9Nb2RpZnkuZm9yRWFjaChmdW5jdGlvbih0KXt0LnByZXZpb3VzRWxlbWVudElkP2VlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQucHJldmlvdXNFbGVtZW50SWQpLGZ1bmN0aW9uKGUpe2VlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQuZWxlbWVudElkKSxmdW5jdGlvbih0KXt0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcmJnQucHJldmlvdXNFbGVtZW50U2libGluZy5pZD09ZS5pZHx8ZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLHQpfSl9KTplZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0LmVsZW1lbnRJZCksZnVuY3Rpb24odCl7bnVsbD09dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfHxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIix0KX0pfSksXCJwcmVwZW5kXCI9PXRoaXMudXBkYXRlVHlwZSYmdGhpcy5lbGVtZW50SWRzVG9BZGQucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24odCl7ZWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCksZnVuY3Rpb24odCl7cmV0dXJuIGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLHQpfSl9KX19XSksZX0oKSxmZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLGkscixvKXtEKHRoaXMsZSksdGhpcy52aWV3PXQsdGhpcy5saXZlU29ja2V0PXQubGl2ZVNvY2tldCx0aGlzLmNvbnRhaW5lcj1uLHRoaXMuaWQ9aSx0aGlzLnJvb3RJRD10LnJvb3QuaWQsdGhpcy5odG1sPXIsdGhpcy50YXJnZXRDSUQ9byx0aGlzLmNpZFBhdGNoPVwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLnRhcmdldENJRCx0aGlzLmNhbGxiYWNrcz17YmVmb3JlYWRkZWQ6W10sYmVmb3JldXBkYXRlZDpbXSxiZWZvcmVwaHhDaGlsZEFkZGVkOltdLGFmdGVyYWRkZWQ6W10sYWZ0ZXJ1cGRhdGVkOltdLGFmdGVyZGlzY2FyZGVkOltdLGFmdGVycGh4Q2hpbGRBZGRlZDpbXX19cmV0dXJuIE4oZSxudWxsLFt7a2V5OlwicGF0Y2hFbFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXtrKGUsdCx7Y2hpbGRyZW5Pbmx5OiExLG9uQmVmb3JlRWxVcGRhdGVkOmZ1bmN0aW9uKGUsdCl7aWYobiYmbi5pc1NhbWVOb2RlKGUpJiZkZS5pc0Zvcm1JbnB1dChlKSlyZXR1cm4gZGUubWVyZ2VGb2N1c2VkSW5wdXQoZSx0KSwhMX19KX19XSksTihlLFt7a2V5OlwiYmVmb3JlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmNhbGxiYWNrc1tcImJlZm9yZVwiLmNvbmNhdChlKV0ucHVzaCh0KX19LHtrZXk6XCJhZnRlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5jYWxsYmFja3NbXCJhZnRlclwiLmNvbmNhdChlKV0ucHVzaCh0KX19LHtrZXk6XCJ0cmFja0JlZm9yZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksaT0xO2k8dDtpKyspbltpLTFdPWFyZ3VtZW50c1tpXTt0aGlzLmNhbGxiYWNrc1tcImJlZm9yZVwiLmNvbmNhdChlKV0uZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBseSh2b2lkIDAsbil9KX19LHtrZXk6XCJ0cmFja0FmdGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxpPTE7aTx0O2krKyluW2ktMV09YXJndW1lbnRzW2ldO3RoaXMuY2FsbGJhY2tzW1wiYWZ0ZXJcIi5jb25jYXQoZSldLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwbHkodm9pZCAwLG4pfSl9fSx7a2V5OlwibWFya1BydW5hYmxlQ29udGVudEZvclJlbW92YWxcIix2YWx1ZTpmdW5jdGlvbigpe2RlLmFsbCh0aGlzLmNvbnRhaW5lcixcIltwaHgtdXBkYXRlPWFwcGVuZF0gPiAqLCBbcGh4LXVwZGF0ZT1wcmVwZW5kXSA+ICpcIixmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImRhdGEtcGh4LXJlbW92ZVwiLFwiXCIpfSl9fSx7a2V5OlwicGVyZm9ybVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMudmlldyxuPXRoaXMubGl2ZVNvY2tldCxpPXRoaXMuY29udGFpbmVyLHI9dGhpcy5odG1sLG89dGhpcy5pc0NJRFBhdGNoKCk/dGhpcy50YXJnZXRDSURDb250YWluZXIocik6aTtpZighdGhpcy5pc0NJRFBhdGNoKCl8fG8pe3ZhciBhPW4uZ2V0QWN0aXZlRWxlbWVudCgpLHU9YSYmZGUuaGFzU2VsZWN0aW9uUmFuZ2UoYSk/YTp7fSxzPXUuc2VsZWN0aW9uU3RhcnQsYz11LnNlbGVjdGlvbkVuZCxsPW4uYmluZGluZyhcInVwZGF0ZVwiKSxkPW4uYmluZGluZyhcImZlZWRiYWNrLWZvclwiKSxoPW4uYmluZGluZyhcImRpc2FibGUtd2l0aFwiKSxmPW4uYmluZGluZyhcInRyaWdnZXItYWN0aW9uXCIpLHY9W10scD1bXSxnPVtdLG09bnVsbCx5PW4udGltZShcInByZW1vcnBoIGNvbnRhaW5lciBwcmVwXCIsZnVuY3Rpb24oKXtyZXR1cm4gZS5idWlsZERpZmZIVE1MKGkscixsLG8pfSk7cmV0dXJuIHRoaXMudHJhY2tCZWZvcmUoXCJhZGRlZFwiLGkpLHRoaXMudHJhY2tCZWZvcmUoXCJ1cGRhdGVkXCIsaSxpKSxuLnRpbWUoXCJtb3JwaGRvbVwiLGZ1bmN0aW9uKCl7ayhvLHkse2NoaWxkcmVuT25seTpudWxsPT09by5nZXRBdHRyaWJ1dGUoTSksZ2V0Tm9kZUtleTpmdW5jdGlvbihlKXtyZXR1cm4gZGUuaXNQaHhEZXN0cm95ZWQoZSk/bnVsbDplLmlkfSxvbkJlZm9yZU5vZGVBZGRlZDpmdW5jdGlvbih0KXtyZXR1cm4gZGUuZGlzY2FyZEVycm9yKG8sdCxkKSxlLnRyYWNrQmVmb3JlKFwiYWRkZWRcIix0KSx0fSxvbk5vZGVBZGRlZDpmdW5jdGlvbihuKXtkZS5pc05vd1RyaWdnZXJGb3JtRXh0ZXJuYWwobixmKSYmKG09biksZGUuaXNQaHhDaGlsZChuKSYmdC5vd25zRWxlbWVudChuKSYmZS50cmFja0FmdGVyKFwicGh4Q2hpbGRBZGRlZFwiLG4pLHYucHVzaChuKX0sb25Ob2RlRGlzY2FyZGVkOmZ1bmN0aW9uKHQpe2RlLmlzUGh4Q2hpbGQodCkmJm4uZGVzdHJveVZpZXdCeUVsKHQpLGUudHJhY2tBZnRlcihcImRpc2NhcmRlZFwiLHQpfSxvbkJlZm9yZU5vZGVEaXNjYXJkZWQ6ZnVuY3Rpb24odCl7cmV0dXJuISghdC5nZXRBdHRyaWJ1dGV8fG51bGw9PT10LmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXJlbW92ZVwiKSl8fChudWxsPT09dC5wYXJlbnROb2RlfHwhZGUuaXNQaHhVcGRhdGUodC5wYXJlbnROb2RlLGwsW1wiYXBwZW5kXCIsXCJwcmVwZW5kXCJdKXx8IXQuaWQpJiYhZS5za2lwQ0lEU2libGluZyh0KX0sb25FbFVwZGF0ZWQ6ZnVuY3Rpb24oZSl7ZGUuaXNOb3dUcmlnZ2VyRm9ybUV4dGVybmFsKGUsZikmJihtPWUpLHAucHVzaChlKX0sb25CZWZvcmVFbFVwZGF0ZWQ6ZnVuY3Rpb24odCxuKXtpZihkZS5jbGVhbkNoaWxkTm9kZXMobixsKSxlLnNraXBDSURTaWJsaW5nKG4pKXJldHVybiExO2lmKGRlLmlzSWdub3JlZCh0LGwpKXJldHVybiBlLnRyYWNrQmVmb3JlKFwidXBkYXRlZFwiLHQsbiksZGUubWVyZ2VBdHRycyh0LG4se2lzSWdub3JlZDohMH0pLHAucHVzaCh0KSwhMTtpZihcIm51bWJlclwiPT09dC50eXBlJiZ0LnZhbGlkaXR5JiZ0LnZhbGlkaXR5LmJhZElucHV0KXJldHVybiExO2lmKCFkZS5zeW5jUGVuZGluZ1JlZih0LG4saCkpcmV0dXJuIGRlLmlzVXBsb2FkSW5wdXQodCkmJihlLnRyYWNrQmVmb3JlKFwidXBkYXRlZFwiLHQsbikscC5wdXNoKHQpKSwhMTtpZihkZS5pc1BoeENoaWxkKG4pKXt2YXIgaT10LmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXNlc3Npb25cIik7cmV0dXJuIGRlLm1lcmdlQXR0cnModCxuLHtleGNsdWRlOltcImRhdGEtcGh4LXN0YXRpY1wiXX0pLFwiXCIhPT1pJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtcGh4LXNlc3Npb25cIixpKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtcGh4LXJvb3QtaWRcIixlLnJvb3RJRCksITF9cmV0dXJuIGRlLmNvcHlQcml2YXRlcyhuLHQpLGRlLmRpc2NhcmRFcnJvcihvLG4sZCksYSYmdC5pc1NhbWVOb2RlKGEpJiZkZS5pc0Zvcm1JbnB1dCh0KSYmIWUuZm9yY2VGb2N1c2VkU2VsZWN0VXBkYXRlKHQsbik/KGUudHJhY2tCZWZvcmUoXCJ1cGRhdGVkXCIsdCxuKSxkZS5tZXJnZUZvY3VzZWRJbnB1dCh0LG4pLGRlLnN5bmNBdHRyc1RvUHJvcHModCkscC5wdXNoKHQpLCExKTooZGUuaXNQaHhVcGRhdGUobixsLFtcImFwcGVuZFwiLFwicHJlcGVuZFwiXSkmJmcucHVzaChuZXcgaGUodCxuLG4uZ2V0QXR0cmlidXRlKGwpKSksZGUuc3luY0F0dHJzVG9Qcm9wcyhuKSxlLnRyYWNrQmVmb3JlKFwidXBkYXRlZFwiLHQsbiksITApfX0pfSksbi5pc0RlYnVnRW5hYmxlZCgpJiZmdW5jdGlvbigpe2Zvcih2YXIgZT1uZXcgU2V0LHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipbaWRdXCIpLG49MCxpPXQubGVuZ3RoO248aTtuKyspZS5oYXModFtuXS5pZCk/Y29uc29sZS5lcnJvcihcIk11bHRpcGxlIElEcyBkZXRlY3RlZDogXCIuY29uY2F0KHRbbl0uaWQsXCIuIEVuc3VyZSB1bmlxdWUgZWxlbWVudCBpZHMuXCIpKTplLmFkZCh0W25dLmlkKX0oKSxnLmxlbmd0aD4wJiZuLnRpbWUoXCJwb3N0LW1vcnBoIGFwcGVuZC9wcmVwZW5kIHJlc3RvcmF0aW9uXCIsZnVuY3Rpb24oKXtnLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUucGVyZm9ybSgpfSl9KSxuLnNpbGVuY2VFdmVudHMoZnVuY3Rpb24oKXtyZXR1cm4gZGUucmVzdG9yZUZvY3VzKGEscyxjKX0pLGRlLmRpc3BhdGNoRXZlbnQoZG9jdW1lbnQsXCJwaHg6dXBkYXRlXCIpLHYuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS50cmFja0FmdGVyKFwiYWRkZWRcIix0KX0pLHAuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS50cmFja0FmdGVyKFwidXBkYXRlZFwiLHQpfSksbSYmKG4uZGlzY29ubmVjdCgpLG0uc3VibWl0KCkpLCEwfX19LHtrZXk6XCJmb3JjZUZvY3VzZWRTZWxlY3RVcGRhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPVtcInNlbGVjdFwiLFwic2VsZWN0LW9uZVwiLFwic2VsZWN0LW11bHRpcGxlXCJdLmZpbmQoZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1lLnR5cGV9KTtyZXR1cm4hMD09PWUubXVsdGlwbGV8fG4mJmUuaW5uZXJIVE1MIT10LmlubmVySFRNTH19LHtrZXk6XCJpc0NJRFBhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaWRQYXRjaH19LHtrZXk6XCJza2lwQ0lEU2libGluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJm51bGwhPT1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXNraXBcIil9fSx7a2V5OlwidGFyZ2V0Q0lEQ29udGFpbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5pc0NJRFBhdGNoKCkpe3ZhciB0PWIoZGUuZmluZENvbXBvbmVudE5vZGVMaXN0KHRoaXMuY29udGFpbmVyLHRoaXMudGFyZ2V0Q0lEKSksbj10WzBdO3JldHVybiAwPT09dC5zbGljZSgxKS5sZW5ndGgmJjE9PT1kZS5jaGlsZE5vZGVMZW5ndGgoZSk/bjpuJiZuLnBhcmVudE5vZGV9fX0se2tleTpcImJ1aWxkRGlmZkhUTUxcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpKXt2YXIgcj10aGlzLG89dGhpcy5pc0NJRFBhdGNoKCksYT1vJiZpLmdldEF0dHJpYnV0ZShNKT09PXRoaXMudGFyZ2V0Q0lELnRvU3RyaW5nKCk7aWYoIW98fGEpcmV0dXJuIHQ7dmFyIHU9bnVsbCxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTt1PWRlLmNsb25lTm9kZShpKTt2YXIgYz1iKGRlLmZpbmRDb21wb25lbnROb2RlTGlzdCh1LHRoaXMudGFyZ2V0Q0lEKSksbD1jWzBdLGQ9Yy5zbGljZSgxKTtyZXR1cm4gcy5pbm5lckhUTUw9dCxkLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVtb3ZlKCl9KSxBcnJheS5mcm9tKHUuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbihlKXtlLmlkJiZlLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJmUuZ2V0QXR0cmlidXRlKE0pIT09ci50YXJnZXRDSUQudG9TdHJpbmcoKSYmKGUuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc2tpcFwiLFwiXCIpLGUuaW5uZXJIVE1MPVwiXCIpfSksQXJyYXkuZnJvbShzLmNvbnRlbnQuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdS5pbnNlcnRCZWZvcmUoZSxsKX0pLGwucmVtb3ZlKCksdS5vdXRlckhUTUx9fV0pLGV9KCksdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixpLHIsbyl7dmFyIGE9dGhpcztEKHRoaXMsZSksdGhpcy5saXZlU29ja2V0PW4sdGhpcy5mbGFzaD1vLHRoaXMucGFyZW50PWksdGhpcy5yb290PWk/aS5yb290OnRoaXMsdGhpcy5lbD10LHRoaXMuaWQ9dGhpcy5lbC5pZCx0aGlzLnZpZXc9dGhpcy5lbC5nZXRBdHRyaWJ1dGUoaiksdGhpcy5yZWY9MCx0aGlzLmNoaWxkSm9pbnM9MCx0aGlzLmxvYWRlclRpbWVyPW51bGwsdGhpcy5wZW5kaW5nRGlmZnM9W10sdGhpcy5wcnVuaW5nQ0lEcz1bXSx0aGlzLmhyZWY9cix0aGlzLmpvaW5Db3VudD10aGlzLnBhcmVudD90aGlzLnBhcmVudC5qb2luQ291bnQtMTowLHRoaXMuam9pblBlbmRpbmc9ITAsdGhpcy5kZXN0cm95ZWQ9ITEsdGhpcy5qb2luQ2FsbGJhY2s9ZnVuY3Rpb24oKXt9LHRoaXMuc3RvcENhbGxiYWNrPWZ1bmN0aW9uKCl7fSx0aGlzLnBlbmRpbmdKb2luT3BzPXRoaXMucGFyZW50P251bGw6W10sdGhpcy52aWV3SG9va3M9e30sdGhpcy51cGxvYWRlcnM9e30sdGhpcy5mb3JtU3VibWl0cz1bXSx0aGlzLmNoaWxkcmVuPXRoaXMucGFyZW50P251bGw6e30sdGhpcy5yb290LmNoaWxkcmVuW3RoaXMuaWRdPXt9LHRoaXMuY2hhbm5lbD10aGlzLmxpdmVTb2NrZXQuY2hhbm5lbChcImx2OlwiLmNvbmNhdCh0aGlzLmlkKSxmdW5jdGlvbigpe3JldHVybnt1cmw6YS5ocmVmLHBhcmFtczphLmNvbm5lY3RQYXJhbXMoKSxzZXNzaW9uOmEuZ2V0U2Vzc2lvbigpLHN0YXRpYzphLmdldFN0YXRpYygpLGZsYXNoOmEuZmxhc2h9fSksdGhpcy5zaG93TG9hZGVyKHRoaXMubGl2ZVNvY2tldC5sb2FkZXJUaW1lb3V0KSx0aGlzLmJpbmRDaGFubmVsKCl9cmV0dXJuIE4oZSxbe2tleTpcImlzTWFpblwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGl2ZVNvY2tldC5tYWluPT09dGhpc319LHtrZXk6XCJjb25uZWN0UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpdmVTb2NrZXQucGFyYW1zKHRoaXMudmlldyksdD1kZS5hbGwoZG9jdW1lbnQsXCJbXCIuY29uY2F0KHRoaXMuYmluZGluZyhcInRyYWNrLXN0YXRpY1wiKSxcIl1cIikpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5zcmN8fGUuaHJlZn0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZX0pO3JldHVybiB0Lmxlbmd0aD4wJiYoZS5fdHJhY2tfc3RhdGljPXQpLGUuX21vdW50cz10aGlzLmpvaW5Db3VudCxlfX0se2tleTpcIm5hbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXd9fSx7a2V5OlwiaXNDb25uZWN0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYW5uZWwuY2FuUHVzaCgpfX0se2tleTpcImdldFNlc3Npb25cIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXNlc3Npb25cIil9fSx7a2V5OlwiZ2V0U3RhdGljXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmVsLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXN0YXRpY1wiKTtyZXR1cm5cIlwiPT09ZT9udWxsOmV9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpmdW5jdGlvbigpe307dGhpcy5kZXN0cm95QWxsQ2hpbGRyZW4oKSx0aGlzLmRlc3Ryb3llZD0hMCxkZWxldGUgdGhpcy5yb290LmNoaWxkcmVuW3RoaXMuaWRdLHRoaXMucGFyZW50JiZkZWxldGUgdGhpcy5yb290LmNoaWxkcmVuW3RoaXMucGFyZW50LmlkXVt0aGlzLmlkXSxjbGVhclRpbWVvdXQodGhpcy5sb2FkZXJUaW1lcik7dmFyIG49ZnVuY3Rpb24oKXtmb3IodmFyIG4gaW4gdCgpLGUudmlld0hvb2tzKWUuZGVzdHJveUhvb2soZS52aWV3SG9va3Nbbl0pfTtkZS5tYXJrUGh4Q2hpbGREZXN0cm95ZWQodGhpcy5lbCksdGhpcy5sb2coXCJkZXN0cm95ZWRcIixmdW5jdGlvbigpe3JldHVybltcInRoZSBjaGlsZCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHBhcmVudFwiXX0pLHRoaXMuY2hhbm5lbC5sZWF2ZSgpLnJlY2VpdmUoXCJva1wiLG4pLnJlY2VpdmUoXCJlcnJvclwiLG4pLnJlY2VpdmUoXCJ0aW1lb3V0XCIsbil9fSx7a2V5Olwic2V0Q29udGFpbmVyQ2xhc3Nlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU7dGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwicGh4LWNvbm5lY3RlZFwiLFwicGh4LWRpc2Nvbm5lY3RlZFwiLFwicGh4LWVycm9yXCIpLChlPXRoaXMuZWwuY2xhc3NMaXN0KS5hZGQuYXBwbHkoZSxhcmd1bWVudHMpfX0se2tleTpcImlzTG9hZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGh4LWRpc2Nvbm5lY3RlZFwiKX19LHtrZXk6XCJzaG93TG9hZGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZihjbGVhclRpbWVvdXQodGhpcy5sb2FkZXJUaW1lciksZSl0aGlzLmxvYWRlclRpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdC5zaG93TG9hZGVyKCl9LGUpO2Vsc2V7Zm9yKHZhciBuIGluIHRoaXMudmlld0hvb2tzKXRoaXMudmlld0hvb2tzW25dLl9fZGlzY29ubmVjdGVkKCk7dGhpcy5zZXRDb250YWluZXJDbGFzc2VzKFwicGh4LWRpc2Nvbm5lY3RlZFwiKX19fSx7a2V5OlwiaGlkZUxvYWRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMubG9hZGVyVGltZXIpLHRoaXMuc2V0Q29udGFpbmVyQ2xhc3NlcyhcInBoeC1jb25uZWN0ZWRcIil9fSx7a2V5OlwidHJpZ2dlclJlY29ubmVjdGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy52aWV3SG9va3MpdGhpcy52aWV3SG9va3NbZV0uX19yZWNvbm5lY3RlZCgpfX0se2tleTpcImxvZ1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5saXZlU29ja2V0LmxvZyh0aGlzLGUsdCl9fSx7a2V5Olwid2l0aGluVGFyZ2V0c1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZihlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpcmV0dXJuIHRoaXMubGl2ZVNvY2tldC5vd25lcihlLGZ1bmN0aW9uKG4pe3JldHVybiB0KG4sZSl9KTtpZigvXigwfFsxLTldXFxkKikkLy50ZXN0KGUpKXt2YXIgaT1kZS5maW5kQ29tcG9uZW50Tm9kZUxpc3QodGhpcy5lbCxlKTswPT09aS5sZW5ndGg/SyhcIm5vIGNvbXBvbmVudCBmb3VuZCBtYXRjaGluZyBwaHgtdGFyZ2V0IG9mIFwiLmNvbmNhdChlKSk6dCh0aGlzLGlbMF0pfWVsc2V7dmFyIHI9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpKTswPT09ci5sZW5ndGgmJksoJ25vdGhpbmcgZm91bmQgbWF0Y2hpbmcgdGhlIHBoeC10YXJnZXQgc2VsZWN0b3IgXCInLmNvbmNhdChlLCdcIicpKSxyLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIG4ubGl2ZVNvY2tldC5vd25lcihlLGZ1bmN0aW9uKG4pe3JldHVybiB0KG4sZSl9KX0pfX19LHtrZXk6XCJhcHBseURpZmZcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dGhpcy5sb2coZSxmdW5jdGlvbigpe3JldHVybltcIlwiLEcodCldfSk7dmFyIGk9c2UuZXh0cmFjdCh0KSxyPWkuZGlmZixvPWkucmVwbHksYT1pLmV2ZW50cyx1PWkudGl0bGU7cmV0dXJuIHUmJmRlLnB1dFRpdGxlKHUpLG4oe2RpZmY6cixyZXBseTpvLGV2ZW50czphfSksb319LHtrZXk6XCJvbkpvaW5cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49ZS5yZW5kZXJlZDt0aGlzLmNoaWxkSm9pbnM9MCx0aGlzLmpvaW5QZW5kaW5nPSEwLHRoaXMuZmxhc2g9bnVsbCxsZS5kcm9wTG9jYWwodGhpcy5saXZlU29ja2V0LmxvY2FsU3RvcmFnZSx0aGlzLm5hbWUoKSxcImNvbnNlY3V0aXZlLXJlbG9hZHNcIiksdGhpcy5hcHBseURpZmYoXCJtb3VudFwiLG4sZnVuY3Rpb24obil7dmFyIGk9bi5kaWZmLHI9bi5ldmVudHM7dC5yZW5kZXJlZD1uZXcgc2UodC5pZCxpKTt2YXIgbz10LnJlbmRlckNvbnRhaW5lcihudWxsLFwiam9pblwiKTt0LmRyb3BQZW5kaW5nUmVmcygpO3ZhciBhPXQuZm9ybXNGb3JSZWNvdmVyeShvKTt0LmpvaW5Db3VudCsrLGEubGVuZ3RoPjA/YS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7dC5wdXNoRm9ybVJlY292ZXJ5KGUsZnVuY3Rpb24oZSl7bj09PWEubGVuZ3RoLTEmJnQub25Kb2luQ29tcGxldGUoZSxvLHIpfSl9KTp0Lm9uSm9pbkNvbXBsZXRlKGUsbyxyKX0pfX0se2tleTpcImRyb3BQZW5kaW5nUmVmc1wiLHZhbHVlOmZ1bmN0aW9uKCl7ZGUuYWxsKHRoaXMuZWwsXCJbXCIuY29uY2F0KEYsXCJdXCIpLGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlbW92ZUF0dHJpYnV0ZShGKX0pfX0se2tleTpcIm9uSm9pbkNvbXBsZXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXMscj1lLmxpdmVfcGF0Y2g7aWYodGhpcy5qb2luQ291bnQ+MXx8dGhpcy5wYXJlbnQmJiF0aGlzLnBhcmVudC5pc0pvaW5QZW5kaW5nKCkpcmV0dXJuIHRoaXMuYXBwbHlKb2luUGF0Y2gocix0LG4pOzA9PT1kZS5maW5kUGh4Q2hpbGRyZW5JbkZyYWdtZW50KHQsdGhpcy5pZCkuZmlsdGVyKGZ1bmN0aW9uKGUpe3ZhciB0PWUuaWQmJmkuZWwucXVlcnlTZWxlY3RvcihcIiNcIi5jb25jYXQoZS5pZCkpLG49dCYmdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1zdGF0aWNcIik7cmV0dXJuIG4mJmUuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc3RhdGljXCIsbiksaS5qb2luQ2hpbGQoZSl9KS5sZW5ndGg/dGhpcy5wYXJlbnQ/KHRoaXMucm9vdC5wZW5kaW5nSm9pbk9wcy5wdXNoKFt0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGkuYXBwbHlKb2luUGF0Y2gocix0LG4pfV0pLHRoaXMucGFyZW50LmFja0pvaW4odGhpcykpOih0aGlzLm9uQWxsQ2hpbGRKb2luc0NvbXBsZXRlKCksdGhpcy5hcHBseUpvaW5QYXRjaChyLHQsbikpOnRoaXMucm9vdC5wZW5kaW5nSm9pbk9wcy5wdXNoKFt0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGkuYXBwbHlKb2luUGF0Y2gocix0LG4pfV0pfX0se2tleTpcImF0dGFjaFRydWVEb2NFbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbD1kZS5ieUlkKHRoaXMuaWQpLHRoaXMuZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcm9vdC1pZFwiLHRoaXMucm9vdC5pZCl9fSx7a2V5OlwiZGlzcGF0Y2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbihlKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9QyhlLDIpLG49dFswXSxpPXRbMV07d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGh4Omhvb2s6XCIuY29uY2F0KG4pLHtkZXRhaWw6aX0pKX0pfX0se2tleTpcImFwcGx5Sm9pblBhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7dGhpcy5hdHRhY2hUcnVlRG9jRWwoKTt2YXIgcj1uZXcgZmUodGhpcyx0aGlzLmVsLHRoaXMuaWQsdCxudWxsKTtpZihyLm1hcmtQcnVuYWJsZUNvbnRlbnRGb3JSZW1vdmFsKCksdGhpcy5wZXJmb3JtUGF0Y2gociwhMSksdGhpcy5qb2luTmV3Q2hpbGRyZW4oKSxkZS5hbGwodGhpcy5lbCxcIltcIi5jb25jYXQodGhpcy5iaW5kaW5nKFwiaG9va1wiKSxcIl0sIFtkYXRhLXBoeC1cIikuY29uY2F0KFwiaG9va1wiLFwiXVwiKSxmdW5jdGlvbihlKXt2YXIgdD1pLmFkZEhvb2soZSk7dCYmdC5fX21vdW50ZWQoKX0pLHRoaXMuam9pblBlbmRpbmc9ITEsdGhpcy5kaXNwYXRjaEV2ZW50cyhuKSx0aGlzLmFwcGx5UGVuZGluZ1VwZGF0ZXMoKSxlKXt2YXIgbz1lLmtpbmQsYT1lLnRvO3RoaXMubGl2ZVNvY2tldC5oaXN0b3J5UGF0Y2goYSxvKX10aGlzLmhpZGVMb2FkZXIoKSx0aGlzLmpvaW5Db3VudD4xJiZ0aGlzLnRyaWdnZXJSZWNvbm5lY3RlZCgpLHRoaXMuc3RvcENhbGxiYWNrKCl9fSx7a2V5OlwidHJpZ2dlckJlZm9yZVVwZGF0ZUhvb2tcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMubGl2ZVNvY2tldC50cmlnZ2VyRE9NKFwib25CZWZvcmVFbFVwZGF0ZWRcIixbZSx0XSk7dmFyIG49dGhpcy5nZXRIb29rKGUpLGk9biYmZGUuaXNJZ25vcmVkKGUsdGhpcy5iaW5kaW5nKFwidXBkYXRlXCIpKTtpZihuJiYhZS5pc0VxdWFsTm9kZSh0KSYmKCFpfHwhZnVuY3Rpb24oZSx0KXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSk9PT1KU09OLnN0cmluZ2lmeSh0KX0oZS5kYXRhc2V0LHQuZGF0YXNldCkpKXJldHVybiBuLl9fYmVmb3JlVXBkYXRlKCksbn19LHtrZXk6XCJwZXJmb3JtUGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsaT1bXSxyPSExLG89bmV3IFNldDtyZXR1cm4gZS5hZnRlcihcImFkZGVkXCIsZnVuY3Rpb24oZSl7bi5saXZlU29ja2V0LnRyaWdnZXJET00oXCJvbk5vZGVBZGRlZFwiLFtlXSk7dmFyIHQ9bi5hZGRIb29rKGUpO3QmJnQuX19tb3VudGVkKCl9KSxlLmFmdGVyKFwicGh4Q2hpbGRBZGRlZFwiLGZ1bmN0aW9uKGUpe3JldHVybiByPSEwfSksZS5iZWZvcmUoXCJ1cGRhdGVkXCIsZnVuY3Rpb24oZSx0KXtuLnRyaWdnZXJCZWZvcmVVcGRhdGVIb29rKGUsdCkmJm8uYWRkKGUuaWQpfSksZS5hZnRlcihcInVwZGF0ZWRcIixmdW5jdGlvbihlKXtvLmhhcyhlLmlkKSYmbi5nZXRIb29rKGUpLl9fdXBkYXRlZCgpfSksZS5hZnRlcihcImRpc2NhcmRlZFwiLGZ1bmN0aW9uKGUpe3ZhciB0PW4uY29tcG9uZW50SUQoZSk7XCJudW1iZXJcIj09dHlwZW9mIHQmJi0xPT09aS5pbmRleE9mKHQpJiZpLnB1c2godCk7dmFyIHI9bi5nZXRIb29rKGUpO3ImJm4uZGVzdHJveUhvb2socil9KSxlLnBlcmZvcm0oKSx0JiZ0aGlzLm1heWJlUHVzaENvbXBvbmVudHNEZXN0cm95ZWQoaSkscn19LHtrZXk6XCJqb2luTmV3Q2hpbGRyZW5cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZGUuZmluZFBoeENoaWxkcmVuKHRoaXMuZWwsdGhpcy5pZCkuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS5qb2luQ2hpbGQodCl9KX19LHtrZXk6XCJnZXRDaGlsZEJ5SWRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yb290LmNoaWxkcmVuW3RoaXMuaWRdW2VdfX0se2tleTpcImdldERlc2NlbmRlbnRCeUVsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWQ9PT10aGlzLmlkP3RoaXM6dGhpcy5jaGlsZHJlbltlLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXBhcmVudC1pZFwiKV1bZS5pZF19fSx7a2V5OlwiZGVzdHJveURlc2NlbmRlbnRcIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gdGhpcy5yb290LmNoaWxkcmVuKWZvcih2YXIgbiBpbiB0aGlzLnJvb3QuY2hpbGRyZW5bdF0paWYobj09PWUpcmV0dXJuIHRoaXMucm9vdC5jaGlsZHJlblt0XVtuXS5kZXN0cm95KCl9fSx7a2V5Olwiam9pbkNoaWxkXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoIXRoaXMuZ2V0Q2hpbGRCeUlkKHQuaWQpKXt2YXIgbj1uZXcgZSh0LHRoaXMubGl2ZVNvY2tldCx0aGlzKTtyZXR1cm4gdGhpcy5yb290LmNoaWxkcmVuW3RoaXMuaWRdW24uaWRdPW4sbi5qb2luKCksdGhpcy5jaGlsZEpvaW5zKyssITB9fX0se2tleTpcImlzSm9pblBlbmRpbmdcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmpvaW5QZW5kaW5nfX0se2tleTpcImFja0pvaW5cIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNoaWxkSm9pbnMtLSwwPT09dGhpcy5jaGlsZEpvaW5zJiYodGhpcy5wYXJlbnQ/dGhpcy5wYXJlbnQuYWNrSm9pbih0aGlzKTp0aGlzLm9uQWxsQ2hpbGRKb2luc0NvbXBsZXRlKCkpfX0se2tleTpcIm9uQWxsQ2hpbGRKb2luc0NvbXBsZXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmpvaW5DYWxsYmFjaygpLHRoaXMucGVuZGluZ0pvaW5PcHMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1DKGUsMiksbj10WzBdLGk9dFsxXTtuLmlzRGVzdHJveWVkKCl8fGkoKX0pLHRoaXMucGVuZGluZ0pvaW5PcHM9W119fSx7a2V5OlwidXBkYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKHRoaXMuaXNKb2luUGVuZGluZygpfHx0aGlzLmxpdmVTb2NrZXQuaGFzUGVuZGluZ0xpbmsoKSlyZXR1cm4gdGhpcy5wZW5kaW5nRGlmZnMucHVzaCh7ZGlmZjplLGV2ZW50czp0fSk7dGhpcy5yZW5kZXJlZC5tZXJnZURpZmYoZSk7dmFyIGk9ITE7dGhpcy5yZW5kZXJlZC5pc0NvbXBvbmVudE9ubHlEaWZmKGUpP3RoaXMubGl2ZVNvY2tldC50aW1lKFwiY29tcG9uZW50IHBhdGNoIGNvbXBsZXRlXCIsZnVuY3Rpb24oKXtkZS5maW5kUGFyZW50Q0lEcyhuLmVsLG4ucmVuZGVyZWQuY29tcG9uZW50Q0lEcyhlKSkuZm9yRWFjaChmdW5jdGlvbih0KXtuLmNvbXBvbmVudFBhdGNoKG4ucmVuZGVyZWQuZ2V0Q29tcG9uZW50KGUsdCksdCkmJihpPSEwKX0pfSk6WihlKXx8dGhpcy5saXZlU29ja2V0LnRpbWUoXCJmdWxsIHBhdGNoIGNvbXBsZXRlXCIsZnVuY3Rpb24oKXt2YXIgdD1uLnJlbmRlckNvbnRhaW5lcihlLFwidXBkYXRlXCIpLHI9bmV3IGZlKG4sbi5lbCxuLmlkLHQsbnVsbCk7aT1uLnBlcmZvcm1QYXRjaChyLCEwKX0pLHRoaXMuZGlzcGF0Y2hFdmVudHModCksaSYmdGhpcy5qb2luTmV3Q2hpbGRyZW4oKX19LHtrZXk6XCJyZW5kZXJDb250YWluZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7cmV0dXJuIHRoaXMubGl2ZVNvY2tldC50aW1lKFwidG9TdHJpbmcgZGlmZiAoXCIuY29uY2F0KHQsXCIpXCIpLGZ1bmN0aW9uKCl7dmFyIHQ9bi5lbC50YWdOYW1lLGk9ZT9uLnJlbmRlcmVkLmNvbXBvbmVudENJRHMoZSkuY29uY2F0KG4ucHJ1bmluZ0NJRHMpOm51bGwscj1uLnJlbmRlcmVkLnRvU3RyaW5nKGkpO3JldHVyblwiPFwiLmNvbmNhdCh0LFwiPlwiKS5jb25jYXQocixcIjwvXCIpLmNvbmNhdCh0LFwiPlwiKX0pfX0se2tleTpcImNvbXBvbmVudFBhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihaKGUpKXJldHVybiExO3ZhciBuPXRoaXMucmVuZGVyZWQuY29tcG9uZW50VG9TdHJpbmcodCksaT1uZXcgZmUodGhpcyx0aGlzLmVsLHRoaXMuaWQsbix0KTtyZXR1cm4gdGhpcy5wZXJmb3JtUGF0Y2goaSwhMCl9fSx7a2V5OlwiZ2V0SG9va1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnZpZXdIb29rc1tnZS5lbGVtZW50SUQoZSldfX0se2tleTpcImFkZEhvb2tcIix2YWx1ZTpmdW5jdGlvbihlKXtpZighZ2UuZWxlbWVudElEKGUpJiZlLmdldEF0dHJpYnV0ZSl7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1cIi5jb25jYXQoXCJob29rXCIpKXx8ZS5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFwiaG9va1wiKSk7aWYoIXR8fHRoaXMub3duc0VsZW1lbnQoZSkpe3ZhciBuPXRoaXMubGl2ZVNvY2tldC5nZXRIb29rQ2FsbGJhY2tzKHQpO2lmKG4pe2UuaWR8fEsoJ25vIERPTSBJRCBmb3IgaG9vayBcIicuY29uY2F0KHQsJ1wiLiBIb29rcyByZXF1aXJlIGEgdW5pcXVlIElEIG9uIGVhY2ggZWxlbWVudC4nKSxlKTt2YXIgaT1uZXcgZ2UodGhpcyxlLG4pO3JldHVybiB0aGlzLnZpZXdIb29rc1tnZS5lbGVtZW50SUQoaS5lbCldPWksaX1udWxsIT09dCYmSygndW5rbm93biBob29rIGZvdW5kIGZvciBcIicuY29uY2F0KHQsJ1wiJyksZSl9fX19LHtrZXk6XCJkZXN0cm95SG9va1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2UuX19kZXN0cm95ZWQoKSxlLl9fY2xlYW51cF9fKCksZGVsZXRlIHRoaXMudmlld0hvb2tzW2dlLmVsZW1lbnRJRChlLmVsKV19fSx7a2V5OlwiYXBwbHlQZW5kaW5nVXBkYXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnBlbmRpbmdEaWZmcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBuPXQuZGlmZixpPXQuZXZlbnRzO3JldHVybiBlLnVwZGF0ZShuLGkpfSksdGhpcy5wZW5kaW5nRGlmZnM9W119fSx7a2V5Olwib25DaGFubmVsXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3RoaXMubGl2ZVNvY2tldC5vbkNoYW5uZWwodGhpcy5jaGFubmVsLGUsZnVuY3Rpb24oZSl7bi5pc0pvaW5QZW5kaW5nKCk/bi5yb290LnBlbmRpbmdKb2luT3BzLnB1c2goW24sZnVuY3Rpb24oKXtyZXR1cm4gdChlKX1dKTp0KGUpfSl9fSx7a2V5OlwiYmluZENoYW5uZWxcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5saXZlU29ja2V0Lm9uQ2hhbm5lbCh0aGlzLmNoYW5uZWwsXCJkaWZmXCIsZnVuY3Rpb24odCl7ZS5hcHBseURpZmYoXCJ1cGRhdGVcIix0LGZ1bmN0aW9uKHQpe3ZhciBuPXQuZGlmZixpPXQuZXZlbnRzO3JldHVybiBlLnVwZGF0ZShuLGkpfSl9KSx0aGlzLm9uQ2hhbm5lbChcInJlZGlyZWN0XCIsZnVuY3Rpb24odCl7dmFyIG49dC50byxpPXQuZmxhc2g7cmV0dXJuIGUub25SZWRpcmVjdCh7dG86bixmbGFzaDppfSl9KSx0aGlzLm9uQ2hhbm5lbChcImxpdmVfcGF0Y2hcIixmdW5jdGlvbih0KXtyZXR1cm4gZS5vbkxpdmVQYXRjaCh0KX0pLHRoaXMub25DaGFubmVsKFwibGl2ZV9yZWRpcmVjdFwiLGZ1bmN0aW9uKHQpe3JldHVybiBlLm9uTGl2ZVJlZGlyZWN0KHQpfSksdGhpcy5jaGFubmVsLm9uRXJyb3IoZnVuY3Rpb24odCl7cmV0dXJuIGUub25FcnJvcih0KX0pLHRoaXMuY2hhbm5lbC5vbkNsb3NlKGZ1bmN0aW9uKHQpe3JldHVybiBlLm9uQ2xvc2UodCl9KX19LHtrZXk6XCJkZXN0cm95QWxsQ2hpbGRyZW5cIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZSBpbiB0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5pZF0pdGhpcy5nZXRDaGlsZEJ5SWQoZSkuZGVzdHJveSgpfX0se2tleTpcIm9uTGl2ZVJlZGlyZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50byxuPWUua2luZCxpPWUuZmxhc2gscj10aGlzLmV4cGFuZFVSTCh0KTt0aGlzLmxpdmVTb2NrZXQuaGlzdG9yeVJlZGlyZWN0KHIsbixpKX19LHtrZXk6XCJvbkxpdmVQYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUudG8sbj1lLmtpbmQ7dGhpcy5ocmVmPXRoaXMuZXhwYW5kVVJMKHQpLHRoaXMubGl2ZVNvY2tldC5oaXN0b3J5UGF0Y2godCxuKX19LHtrZXk6XCJleHBhbmRVUkxcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5zdGFydHNXaXRoKFwiL1wiKT9cIlwiLmNvbmNhdCh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXCIvL1wiKS5jb25jYXQod2luZG93LmxvY2F0aW9uLmhvc3QpLmNvbmNhdChlKTplfX0se2tleTpcIm9uUmVkaXJlY3RcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnRvLG49ZS5mbGFzaDt0aGlzLmxpdmVTb2NrZXQucmVkaXJlY3QodCxuKX19LHtrZXk6XCJpc0Rlc3Ryb3llZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGVzdHJveWVkfX0se2tleTpcImpvaW5cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMucGFyZW50fHwodGhpcy5zdG9wQ2FsbGJhY2s9dGhpcy5saXZlU29ja2V0LndpdGhQYWdlTG9hZGluZyh7dG86dGhpcy5ocmVmLGtpbmQ6XCJpbml0aWFsXCJ9KSksdGhpcy5qb2luQ2FsbGJhY2s9ZnVuY3Rpb24oKXtyZXR1cm4gZSYmZSh0LHQuam9pbkNvdW50KX0sdGhpcy5saXZlU29ja2V0LndyYXBQdXNoKHRoaXMse3RpbWVvdXQ6ITF9LGZ1bmN0aW9uKCl7cmV0dXJuIHQuY2hhbm5lbC5qb2luKCkucmVjZWl2ZShcIm9rXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHQub25Kb2luKGUpfSkucmVjZWl2ZShcImVycm9yXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHQub25Kb2luRXJyb3IoZSl9KS5yZWNlaXZlKFwidGltZW91dFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHQub25Kb2luRXJyb3Ioe3JlYXNvbjpcInRpbWVvdXRcIn0pfSl9KX19LHtrZXk6XCJvbkpvaW5FcnJvclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybihlLnJlZGlyZWN0fHxlLmxpdmVfcmVkaXJlY3QpJiYodGhpcy5qb2luUGVuZGluZz0hMSx0aGlzLmNoYW5uZWwubGVhdmUoKSksZS5yZWRpcmVjdD90aGlzLm9uUmVkaXJlY3QoZS5yZWRpcmVjdCk6ZS5saXZlX3JlZGlyZWN0P3RoaXMub25MaXZlUmVkaXJlY3QoZS5saXZlX3JlZGlyZWN0KToodGhpcy5sb2coXCJlcnJvclwiLGZ1bmN0aW9uKCl7cmV0dXJuW1widW5hYmxlIHRvIGpvaW5cIixlXX0pLHRoaXMubGl2ZVNvY2tldC5yZWxvYWRXaXRoSml0dGVyKHRoaXMpKX19LHtrZXk6XCJvbkNsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoIXRoaXMuaXNEZXN0cm95ZWQoKSl7aWYodGhpcy5pc0pvaW5QZW5kaW5nKCkmJlwiaGlkZGVuXCIhPT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGV8fHRoaXMubGl2ZVNvY2tldC5oYXNQZW5kaW5nTGluaygpJiZcImxlYXZlXCIhPT1lKXJldHVybiB0aGlzLmxpdmVTb2NrZXQucmVsb2FkV2l0aEppdHRlcih0aGlzKTt0aGlzLmRlc3Ryb3lBbGxDaGlsZHJlbigpLHRoaXMubGl2ZVNvY2tldC5kcm9wQWN0aXZlRWxlbWVudCh0aGlzKSxkb2N1bWVudC5hY3RpdmVFbGVtZW50JiZkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKSx0aGlzLmxpdmVTb2NrZXQuaXNVbmxvYWRlZCgpJiZ0aGlzLnNob3dMb2FkZXIoMjAwKX19fSx7a2V5Olwib25FcnJvclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMub25DbG9zZShlKSx0aGlzLmxvZyhcImVycm9yXCIsZnVuY3Rpb24oKXtyZXR1cm5bXCJ2aWV3IGNyYXNoZWRcIixlXX0pLHRoaXMubGl2ZVNvY2tldC5pc1VubG9hZGVkKCl8fHRoaXMuZGlzcGxheUVycm9yKCl9fSx7a2V5OlwiZGlzcGxheUVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmlzTWFpbigpJiZkZS5kaXNwYXRjaEV2ZW50KHdpbmRvdyxcInBoeDpwYWdlLWxvYWRpbmctc3RhcnRcIix7dG86dGhpcy5ocmVmLGtpbmQ6XCJlcnJvclwifSksdGhpcy5zaG93TG9hZGVyKCksdGhpcy5zZXRDb250YWluZXJDbGFzc2VzKFwicGh4LWRpc2Nvbm5lY3RlZFwiLFwicGh4LWVycm9yXCIpfX0se2tleTpcInB1c2hXaXRoUmVwbHlcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpmdW5jdGlvbigpe307aWYodGhpcy5pc0Nvbm5lY3RlZCgpKXt2YXIgbz1DKGU/ZSgpOltudWxsLFtdXSwyKSxhPW9bMF0sdT1DKG9bMV0sMSlbMF0scz1mdW5jdGlvbigpe307cmV0dXJuIHUmJm51bGwhPT11LmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoXCJwYWdlLWxvYWRpbmdcIikpJiYocz10aGlzLmxpdmVTb2NrZXQud2l0aFBhZ2VMb2FkaW5nKHtraW5kOlwiZWxlbWVudFwiLHRhcmdldDp1fSkpLFwibnVtYmVyXCIhPXR5cGVvZiBuLmNpZCYmZGVsZXRlIG4uY2lkLHRoaXMubGl2ZVNvY2tldC53cmFwUHVzaCh0aGlzLHt0aW1lb3V0OiEwfSxmdW5jdGlvbigpe3JldHVybiBpLmNoYW5uZWwucHVzaCh0LG4sM2U0KS5yZWNlaXZlKFwib2tcIixmdW5jdGlvbihlKXt2YXIgdD1udWxsO251bGwhPT1hJiZpLnVuZG9SZWZzKGEpLGUuZGlmZiYmKHQ9aS5hcHBseURpZmYoXCJ1cGRhdGVcIixlLmRpZmYsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kaWZmLG49ZS5ldmVudHM7aS51cGRhdGUodCxuKX0pKSxlLnJlZGlyZWN0JiZpLm9uUmVkaXJlY3QoZS5yZWRpcmVjdCksZS5saXZlX3BhdGNoJiZpLm9uTGl2ZVBhdGNoKGUubGl2ZV9wYXRjaCksZS5saXZlX3JlZGlyZWN0JiZpLm9uTGl2ZVJlZGlyZWN0KGUubGl2ZV9yZWRpcmVjdCkscygpLHIoZSx0KX0pfSl9fX0se2tleTpcInVuZG9SZWZzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztkZS5hbGwodGhpcy5lbCxcIltcIi5jb25jYXQoRiwnPVwiJykuY29uY2F0KGUsJ1wiXScpLGZ1bmN0aW9uKGUpe2UucmVtb3ZlQXR0cmlidXRlKEYpLG51bGwhPT1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXJlYWRvbmx5XCIpJiYoZS5yZWFkT25seT0hMSxlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcGh4LXJlYWRvbmx5XCIpKSxudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kaXNhYmxlZFwiKSYmKGUuZGlzYWJsZWQ9ITEsZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kaXNhYmxlZFwiKSksSC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBkZS5yZW1vdmVDbGFzcyhlLHQpfSk7dmFyIG49ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kaXNhYmxlLXdpdGgtcmVzdG9yZVwiKTtudWxsIT09biYmKGUuaW5uZXJUZXh0PW4sZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kaXNhYmxlLXdpdGgtcmVzdG9yZVwiKSk7dmFyIGk9ZGUucHJpdmF0ZShlLEYpO2lmKGkpe3ZhciByPXQudHJpZ2dlckJlZm9yZVVwZGF0ZUhvb2soZSxpKTtmZS5wYXRjaEVsKGUsaSx0LmxpdmVTb2NrZXQuZ2V0QWN0aXZlRWxlbWVudCgpKSxyJiZyLl9fdXBkYXRlZCgpLGRlLmRlbGV0ZVByaXZhdGUoZSxGKX19KX19LHtrZXk6XCJwdXRSZWZcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMucmVmKyssaT10aGlzLmJpbmRpbmcoXCJkaXNhYmxlLXdpdGhcIik7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXtlLmNsYXNzTGlzdC5hZGQoXCJwaHgtXCIuY29uY2F0KHQsXCItbG9hZGluZ1wiKSksZS5zZXRBdHRyaWJ1dGUoRixuKTt2YXIgcj1lLmdldEF0dHJpYnV0ZShpKTtudWxsIT09ciYmKGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtZGlzYWJsZS13aXRoLXJlc3RvcmVcIil8fGUuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtZGlzYWJsZS13aXRoLXJlc3RvcmVcIixlLmlubmVyVGV4dCksZS5pbm5lclRleHQ9cil9KSxbbixlXX19LHtrZXk6XCJjb21wb25lbnRJRFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShNKTtyZXR1cm4gdD9wYXJzZUludCh0KTpudWxsfX0se2tleTpcInRhcmdldENvbXBvbmVudElEXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFwidGFyZ2V0XCIpKT90aGlzLmNsb3Nlc3RDb21wb25lbnRJRCh0KTpudWxsfX0se2tleTpcImNsb3Nlc3RDb21wb25lbnRJRFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7cmV0dXJuIGU/ZWUoZS5jbG9zZXN0KFwiW1wiLmNvbmNhdChNLFwiXVwiKSksZnVuY3Rpb24oZSl7cmV0dXJuIHQub3duc0VsZW1lbnQoZSkmJnQuY29tcG9uZW50SUQoZSl9KTpudWxsfX0se2tleTpcInB1c2hIb29rRXZlbnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpKXtpZighdGhpcy5pc0Nvbm5lY3RlZCgpKXJldHVybiB0aGlzLmxvZyhcImhvb2tcIixmdW5jdGlvbigpe3JldHVybltcInVuYWJsZSB0byBwdXNoIGhvb2sgZXZlbnQuIExpdmVWaWV3IG5vdCBjb25uZWN0ZWRcIix0LG5dfSksITE7dmFyIHI9Qyh0aGlzLnB1dFJlZihbXSxcImhvb2tcIiksMiksbz1yWzBdLGE9clsxXTtyZXR1cm4gdGhpcy5wdXNoV2l0aFJlcGx5KGZ1bmN0aW9uKCl7cmV0dXJuW28sYV19LFwiZXZlbnRcIix7dHlwZTpcImhvb2tcIixldmVudDp0LHZhbHVlOm4sY2lkOnRoaXMuY2xvc2VzdENvbXBvbmVudElEKGUpfSxmdW5jdGlvbihlLHQpe3JldHVybiBpKHQsbyl9KSxvfX0se2tleTpcImV4dHJhY3RNZXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dGhpcy5iaW5kaW5nKFwidmFsdWUtXCIpLGk9MDtpPGUuYXR0cmlidXRlcy5sZW5ndGg7aSsrKXt2YXIgcj1lLmF0dHJpYnV0ZXNbaV0ubmFtZTtyLnN0YXJ0c1dpdGgobikmJih0W3IucmVwbGFjZShuLFwiXCIpXT1lLmdldEF0dHJpYnV0ZShyKSl9cmV0dXJuIHZvaWQgMCE9PWUudmFsdWUmJih0LnZhbHVlPWUudmFsdWUsXCJJTlBVVFwiPT09ZS50YWdOYW1lJiZWLmluZGV4T2YoZS50eXBlKT49MCYmIWUuY2hlY2tlZCYmZGVsZXRlIHQudmFsdWUpLHR9fSx7a2V5OlwicHVzaEV2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbz10aGlzO3RoaXMucHVzaFdpdGhSZXBseShmdW5jdGlvbigpe3JldHVybiBvLnB1dFJlZihbdF0sZSl9LFwiZXZlbnRcIix7dHlwZTplLGV2ZW50OmksdmFsdWU6dGhpcy5leHRyYWN0TWV0YSh0LHIpLGNpZDp0aGlzLnRhcmdldENvbXBvbmVudElEKHQsbil9KX19LHtrZXk6XCJwdXNoS2V5XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbz10aGlzO3RoaXMucHVzaFdpdGhSZXBseShmdW5jdGlvbigpe3JldHVybiBvLnB1dFJlZihbZV0sbil9LFwiZXZlbnRcIix7dHlwZTpuLGV2ZW50OmksdmFsdWU6dGhpcy5leHRyYWN0TWV0YShlLHIpLGNpZDp0aGlzLnRhcmdldENvbXBvbmVudElEKGUsdCl9KX19LHtrZXk6XCJwdXNoRmlsZVByb2dyZXNzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpmdW5jdGlvbigpe307dGhpcy5saXZlU29ja2V0LndpdGhpbk93bmVycyhlLmZvcm0sZnVuY3Rpb24ocixvKXtyLnB1c2hXaXRoUmVwbHkobnVsbCxcInByb2dyZXNzXCIse2V2ZW50OmUuZ2V0QXR0cmlidXRlKHIuYmluZGluZyhcInByb2dyZXNzXCIpKSxyZWY6ZS5nZXRBdHRyaWJ1dGUoVSksZW50cnlfcmVmOnQscHJvZ3Jlc3M6bixjaWQ6ci50YXJnZXRDb21wb25lbnRJRChlLmZvcm0sbyl9LGkpfSl9fSx7a2V5OlwicHVzaElucHV0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbz10aGlzLGE9dGhpcy50YXJnZXRDb21wb25lbnRJRChlLmZvcm0sdCksdT1mdW5jdGlvbigpe3JldHVybiBvLnB1dFJlZihbZSxlLmZvcm1dLFwiY2hhbmdlXCIpfSxzPXVlKGUuZm9ybSx7X3RhcmdldDppLm5hbWV9KTtlLmZpbGVzJiZlLmZpbGVzLmxlbmd0aD4wJiZyZS50cmFja0ZpbGVzKGUsQXJyYXkuZnJvbShlLmZpbGVzKSk7dmFyIGM9e3R5cGU6XCJmb3JtXCIsZXZlbnQ6bix2YWx1ZTpzLHVwbG9hZHM6cmUuc2VyaWFsaXplVXBsb2FkcyhlKSxjaWQ6YX07dGhpcy5wdXNoV2l0aFJlcGx5KHUsXCJldmVudFwiLGMsZnVuY3Rpb24obil7aWYoZGUuc2hvd0Vycm9yKGUsby5saXZlU29ja2V0LmJpbmRpbmcoXCJmZWVkYmFjay1mb3JcIikpLGRlLmlzVXBsb2FkSW5wdXQoZSkmJm51bGwhPT1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LWF1dG8tdXBsb2FkXCIpKXtpZihyZS5maWxlc0F3YWl0aW5nUHJlZmxpZ2h0KGUpLmxlbmd0aD4wKXt2YXIgaT1DKHUoKSwyKSxzPWlbMF07aVsxXTtvLnVwbG9hZEZpbGVzKGUuZm9ybSx0LHMsYSxmdW5jdGlvbih0KXtyJiZyKG4pLG8udHJpZ2dlckF3YWl0aW5nU3VibWl0KGUuZm9ybSl9KX19ZWxzZSByJiZyKG4pfSl9fSx7a2V5OlwidHJpZ2dlckF3YWl0aW5nU3VibWl0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5nZXRTY2hlZHVsZWRTdWJtaXQoZSk7aWYodCl7dmFyIG49Qyh0LDMpLGk9KG5bMF0sblsxXSxuWzJdKTt0aGlzLmNhbmNlbFN1Ym1pdChlKSxpKCl9fX0se2tleTpcImdldFNjaGVkdWxlZFN1Ym1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmZvcm1TdWJtaXRzLmZpbmQoZnVuY3Rpb24odCl7dmFyIG49Qyh0LDIpLGk9blswXTtuWzFdO3JldHVybiBpLmlzU2FtZU5vZGUoZSl9KX19LHtrZXk6XCJzY2hlZHVsZVN1Ym1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXtpZih0aGlzLmdldFNjaGVkdWxlZFN1Ym1pdChlKSlyZXR1cm4hMDt0aGlzLmZvcm1TdWJtaXRzLnB1c2goW2UsdCxuXSl9fSx7a2V5OlwiY2FuY2VsU3VibWl0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0aGlzLmZvcm1TdWJtaXRzPXRoaXMuZm9ybVN1Ym1pdHMuZmlsdGVyKGZ1bmN0aW9uKG4pe3ZhciBpPUMobiwzKSxyPWlbMF0sbz1pWzFdO2lbMl07cmV0dXJuIXIuaXNTYW1lTm9kZShlKXx8KHQudW5kb1JlZnMobyksITEpfSl9fSx7a2V5OlwicHVzaEZvcm1TdWJtaXRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpKXt2YXIgcj10aGlzLG89ZnVuY3Rpb24oZSl7cmV0dXJuIShZKGUsXCJcIi5jb25jYXQoci5iaW5kaW5nKFwidXBkYXRlXCIpLFwiPWlnbm9yZVwiKSxlLmZvcm0pfHxZKGUsXCJkYXRhLXBoeC11cGRhdGU9aWdub3JlXCIsZS5mb3JtKSl9LGE9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuaGFzQXR0cmlidXRlKHIuYmluZGluZyhcImRpc2FibGUtd2l0aFwiKSl9LHU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJCVVRUT05cIj09ZS50YWdOYW1lfSxzPWZ1bmN0aW9uKGUpe3JldHVybltcIklOUFVUXCIsXCJURVhUQVJFQVwiLFwiU0VMRUNUXCJdLmluY2x1ZGVzKGUudGFnTmFtZSl9LGM9ZnVuY3Rpb24oKXt2YXIgdD1BcnJheS5mcm9tKGUuZWxlbWVudHMpLG49dC5maWx0ZXIoYSksaT10LmZpbHRlcih1KS5maWx0ZXIobyksYz10LmZpbHRlcihzKS5maWx0ZXIobyk7cmV0dXJuIGkuZm9yRWFjaChmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImRhdGEtcGh4LWRpc2FibGVkXCIsZS5kaXNhYmxlZCksZS5kaXNhYmxlZD0hMH0pLGMuZm9yRWFjaChmdW5jdGlvbihlKXtlLnNldEF0dHJpYnV0ZShcImRhdGEtcGh4LXJlYWRvbmx5XCIsZS5yZWFkT25seSksZS5yZWFkT25seT0hMCxlLmZpbGVzJiYoZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kaXNhYmxlZFwiLGUuZGlzYWJsZWQpLGUuZGlzYWJsZWQ9ITApfSksZS5zZXRBdHRyaWJ1dGUoci5iaW5kaW5nKFwicGFnZS1sb2FkaW5nXCIpLFwiXCIpLHIucHV0UmVmKFtlXS5jb25jYXQobikuY29uY2F0KGkpLmNvbmNhdChjKSxcInN1Ym1pdFwiKX0sbD10aGlzLnRhcmdldENvbXBvbmVudElEKGUsdCk7aWYocmUuaGFzVXBsb2Fkc0luUHJvZ3Jlc3MoZSkpe3ZhciBkPUMoYygpLDIpLGg9ZFswXTtkWzFdO3JldHVybiB0aGlzLnNjaGVkdWxlU3VibWl0KGUsaCxmdW5jdGlvbigpe3JldHVybiByLnB1c2hGb3JtU3VibWl0KGUsdCxuLGkpfSl9aWYocmUuaW5wdXRzQXdhaXRpbmdQcmVmbGlnaHQoZSkubGVuZ3RoPjApe3ZhciBmPUMoYygpLDIpLHY9ZlswXSxwPWZbMV0sZz1mdW5jdGlvbigpe3JldHVyblt2LHBdfTt0aGlzLnVwbG9hZEZpbGVzKGUsdCx2LGwsZnVuY3Rpb24odCl7dmFyIG89dWUoZSx7fSk7ci5wdXNoV2l0aFJlcGx5KGcsXCJldmVudFwiLHt0eXBlOlwiZm9ybVwiLGV2ZW50Om4sdmFsdWU6byxjaWQ6bH0saSl9KX1lbHNle3ZhciBtPXVlKGUpO3RoaXMucHVzaFdpdGhSZXBseShjLFwiZXZlbnRcIix7dHlwZTpcImZvcm1cIixldmVudDpuLHZhbHVlOm0sY2lkOmx9LGkpfX19LHtrZXk6XCJ1cGxvYWRGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkscil7dmFyIG89dGhpcyxhPXRoaXMuam9pbkNvdW50O3JlLmFjdGl2ZUZpbGVJbnB1dHMoZSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgaT1uZXcgcmUoZSxvLHIpO28udXBsb2FkZXJzW2VdPWk7dmFyIHU9aS5lbnRyaWVzKCkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRvUHJlZmxpZ2h0UGF5bG9hZCgpfSkscz17cmVmOmUuZ2V0QXR0cmlidXRlKFUpLGVudHJpZXM6dSxjaWQ6by50YXJnZXRDb21wb25lbnRJRChlLmZvcm0sdCl9O28ubG9nKFwidXBsb2FkXCIsZnVuY3Rpb24oKXtyZXR1cm5bXCJzZW5kaW5nIHByZWZsaWdodCByZXF1ZXN0XCIsc119KSxvLnB1c2hXaXRoUmVwbHkobnVsbCxcImFsbG93X3VwbG9hZFwiLHMsZnVuY3Rpb24oZSl7aWYoby5sb2coXCJ1cGxvYWRcIixmdW5jdGlvbigpe3JldHVybltcImdvdCBwcmVmbGlnaHQgcmVzcG9uc2VcIixlXX0pLGUuZXJyb3Ipe28udW5kb1JlZnMobik7dmFyIHQ9QyhlLmVycm9yLDIpLHI9dFswXSx1PXRbMV07by5sb2coXCJ1cGxvYWRcIixmdW5jdGlvbigpe3JldHVybltcImVycm9yIGZvciBlbnRyeSBcIi5jb25jYXQociksdV19KX1lbHNle2kuaW5pdEFkYXB0ZXJVcGxvYWQoZSxmdW5jdGlvbihlKXtvLmNoYW5uZWwub25FcnJvcihmdW5jdGlvbigpe28uam9pbkNvdW50PT09YSYmZSgpfSl9LG8ubGl2ZVNvY2tldCl9fSl9KX19LHtrZXk6XCJwdXNoRm9ybVJlY292ZXJ5XCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3RoaXMubGl2ZVNvY2tldC53aXRoaW5Pd25lcnMoZSxmdW5jdGlvbihpLHIpe3ZhciBvPWUuZWxlbWVudHNbMF0sYT1lLmdldEF0dHJpYnV0ZShuLmJpbmRpbmcoXCJhdXRvLXJlY292ZXJcIikpfHxlLmdldEF0dHJpYnV0ZShuLmJpbmRpbmcoXCJjaGFuZ2VcIikpO2kucHVzaElucHV0KG8scixhLG8sdCl9KX19LHtrZXk6XCJwdXNoTGlua1BhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXMscj10aGlzLmxpdmVTb2NrZXQuc2V0UGVuZGluZ0xpbmsoZSksbz10P2Z1bmN0aW9uKCl7cmV0dXJuIGkucHV0UmVmKFt0XSxcImNsaWNrXCIpfTpudWxsO3RoaXMucHVzaFdpdGhSZXBseShvLFwibGlua1wiLHt1cmw6ZX0sZnVuY3Rpb24odCl7dC5saW5rX3JlZGlyZWN0P2kubGl2ZVNvY2tldC5yZXBsYWNlTWFpbihlLG51bGwsbixyKTooaS5saXZlU29ja2V0LmNvbW1pdFBlbmRpbmdMaW5rKHIpJiYoaS5ocmVmPWUpLGkuYXBwbHlQZW5kaW5nVXBkYXRlcygpLG4mJm4ocikpfSkucmVjZWl2ZShcInRpbWVvdXRcIixmdW5jdGlvbigpe3JldHVybiBpLmxpdmVTb2NrZXQucmVkaXJlY3Qod2luZG93LmxvY2F0aW9uLmhyZWYpfSl9fSx7a2V5OlwiZm9ybXNGb3JSZWNvdmVyeVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoMD09PXRoaXMuam9pbkNvdW50KXJldHVybltdO3ZhciBuPXRoaXMuYmluZGluZyhcImNoYW5nZVwiKSxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtyZXR1cm4gaS5pbm5lckhUTUw9ZSxkZS5hbGwodGhpcy5lbCxcImZvcm1bXCIuY29uY2F0KG4sXCJdXCIpKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIHQub3duc0VsZW1lbnQoZSl9KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZWxlbWVudHMubGVuZ3RoPjB9KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuXCJpZ25vcmVcIiE9PWUuZ2V0QXR0cmlidXRlKHQuYmluZGluZyhcImF1dG8tcmVjb3ZlclwiKSl9KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGkuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVtcIi5jb25jYXQobiwnPVwiJykuY29uY2F0KGUuZ2V0QXR0cmlidXRlKG4pLCdcIl0nKSl9KX19LHtrZXk6XCJtYXliZVB1c2hDb21wb25lbnRzRGVzdHJveWVkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQsbj10aGlzLGk9ZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIDA9PT1kZS5maW5kQ29tcG9uZW50Tm9kZUxpc3Qobi5lbCxlKS5sZW5ndGh9KTtpLmxlbmd0aD4wJiYoKHQ9dGhpcy5wcnVuaW5nQ0lEcykucHVzaC5hcHBseSh0LHcoaSkpLHRoaXMucHVzaFdpdGhSZXBseShudWxsLFwiY2lkc193aWxsX2Rlc3Ryb3lcIix7Y2lkczppfSxmdW5jdGlvbigpe24ucHJ1bmluZ0NJRHM9bi5wcnVuaW5nQ0lEcy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT1pLmluZGV4T2YoZSl9KTt2YXIgZT1pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gMD09PWRlLmZpbmRDb21wb25lbnROb2RlTGlzdChuLmVsLGUpLmxlbmd0aH0pO2UubGVuZ3RoPjAmJm4ucHVzaFdpdGhSZXBseShudWxsLFwiY2lkc19kZXN0cm95ZWRcIix7Y2lkczplfSxmdW5jdGlvbihlKXtuLnJlbmRlcmVkLnBydW5lQ0lEcyhlLmNpZHMpfSl9KSl9fSx7a2V5Olwib3duc0VsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1wYXJlbnQtaWRcIik9PT10aGlzLmlkfHxlZShlLmNsb3Nlc3QoQiksZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWR9KT09PXRoaXMuaWR9fSx7a2V5Olwic3VibWl0Rm9ybVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO2RlLnB1dFByaXZhdGUoZSxcInBoeC1oYXMtc3VibWl0dGVkXCIsITApLHRoaXMubGl2ZVNvY2tldC5ibHVyQWN0aXZlRWxlbWVudCh0aGlzKSx0aGlzLnB1c2hGb3JtU3VibWl0KGUsdCxuLGZ1bmN0aW9uKCl7aS5saXZlU29ja2V0LnJlc3RvcmVQcmV2aW91c2x5QWN0aXZlRm9jdXMoKX0pfX0se2tleTpcImJpbmRpbmdcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saXZlU29ja2V0LmJpbmRpbmcoZSl9fV0pLGV9KCkscGU9MSxnZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLGkpe2Zvcih2YXIgciBpbiBEKHRoaXMsZSksdGhpcy5fX3ZpZXc9dCx0aGlzLl9fbGl2ZVNvY2tldD10LmxpdmVTb2NrZXQsdGhpcy5fX2NhbGxiYWNrcz1pLHRoaXMuX19saXN0ZW5lcnM9bmV3IFNldCx0aGlzLl9faXNEaXNjb25uZWN0ZWQ9ITEsdGhpcy5lbD1uLHRoaXMudmlld05hbWU9dC5uYW1lKCksdGhpcy5lbC5waHhIb29rSWQ9dGhpcy5jb25zdHJ1Y3Rvci5tYWtlSUQoKSx0aGlzLl9fY2FsbGJhY2tzKXRoaXNbcl09dGhpcy5fX2NhbGxiYWNrc1tyXX1yZXR1cm4gTihlLG51bGwsW3trZXk6XCJtYWtlSURcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBwZSsrfX0se2tleTpcImVsZW1lbnRJRFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBoeEhvb2tJZH19XSksTihlLFt7a2V5OlwiX19tb3VudGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm1vdW50ZWQmJnRoaXMubW91bnRlZCgpfX0se2tleTpcIl9fdXBkYXRlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVkJiZ0aGlzLnVwZGF0ZWQoKX19LHtrZXk6XCJfX2JlZm9yZVVwZGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5iZWZvcmVVcGRhdGUmJnRoaXMuYmVmb3JlVXBkYXRlKCl9fSx7a2V5OlwiX19kZXN0cm95ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZGVzdHJveWVkJiZ0aGlzLmRlc3Ryb3llZCgpfX0se2tleTpcIl9fcmVjb25uZWN0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX19pc0Rpc2Nvbm5lY3RlZCYmKHRoaXMuX19pc0Rpc2Nvbm5lY3RlZD0hMSx0aGlzLnJlY29ubmVjdGVkJiZ0aGlzLnJlY29ubmVjdGVkKCkpfX0se2tleTpcIl9fZGlzY29ubmVjdGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9faXNEaXNjb25uZWN0ZWQ9ITAsdGhpcy5kaXNjb25uZWN0ZWQmJnRoaXMuZGlzY29ubmVjdGVkKCl9fSx7a2V5OlwicHVzaEV2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOmZ1bmN0aW9uKCl7fTtyZXR1cm4gdGhpcy5fX3ZpZXcucHVzaEhvb2tFdmVudChudWxsLGUsdCxuKX19LHtrZXk6XCJwdXNoRXZlbnRUb1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9LGk9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOmZ1bmN0aW9uKCl7fTtyZXR1cm4gdGhpcy5fX3ZpZXcud2l0aGluVGFyZ2V0cyhlLGZ1bmN0aW9uKGUscil7cmV0dXJuIGUucHVzaEhvb2tFdmVudChyLHQsbixpKX0pfX0se2tleTpcImhhbmRsZUV2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihuLGkpe3JldHVybiBpP2U6dChuLmRldGFpbCl9O3JldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBoeDpob29rOlwiLmNvbmNhdChlKSxuKSx0aGlzLl9fbGlzdGVuZXJzLmFkZChuKSxufX0se2tleTpcInJlbW92ZUhhbmRsZUV2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZShudWxsLCEwKTt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBoeDpob29rOlwiLmNvbmNhdCh0KSxlKSx0aGlzLl9fbGlzdGVuZXJzLmRlbGV0ZShlKX19LHtrZXk6XCJfX2NsZWFudXBfX1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLl9fbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUucmVtb3ZlSGFuZGxlRXZlbnQodCl9KX19XSksZX0oKTt0LmRlZmF1bHQ9Y2V9LGZ1bmN0aW9uKGUsdCl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKXx8KDAsZXZhbCkoXCJ0aGlzXCIpfWNhdGNoKGUpe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJihuPXdpbmRvdyl9ZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24odCl7dC5QaG9lbml4fHwodC5QaG9lbml4PXt9KSxlLmV4cG9ydHM9dC5QaG9lbml4LkxpdmVWaWV3PW4oMCl9KS5jYWxsKHRoaXMsbigxKSl9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBob2VuaXhfbGl2ZV92aWV3LmpzLm1hcCIsICIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogdG9wYmFyIDEuMC4wLCAyMDIxLTAxLTA2XG4gKiBodHRwOi8vYnV1bmd1eWVuLmdpdGh1Yi5pby90b3BiYXJcbiAqIENvcHlyaWdodCAoYykgMjAyMSBCdXUgTmd1eWVuXG4gKi9cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MVxuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbXCJtc1wiLCBcIm1velwiLCBcIndlYmtpdFwiLCBcIm9cIl07XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgfTtcbiAgfSkoKTtcblxuICB2YXIgY2FudmFzLFxuICAgIHByb2dyZXNzVGltZXJJZCxcbiAgICBmYWRlVGltZXJJZCxcbiAgICBjdXJyZW50UHJvZ3Jlc3MsXG4gICAgc2hvd2luZyxcbiAgICBhZGRFdmVudCA9IGZ1bmN0aW9uIChlbGVtLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICBpZiAoZWxlbS5hZGRFdmVudExpc3RlbmVyKSBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgZWxzZSBpZiAoZWxlbS5hdHRhY2hFdmVudCkgZWxlbS5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgICAgIGVsc2UgZWxlbVtcIm9uXCIgKyB0eXBlXSA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICBvcHRpb25zID0ge1xuICAgICAgYXV0b1J1bjogdHJ1ZSxcbiAgICAgIGJhclRoaWNrbmVzczogMyxcbiAgICAgIGJhckNvbG9yczoge1xuICAgICAgICAwOiBcInJnYmEoMjYsICAxODgsIDE1NiwgLjkpXCIsXG4gICAgICAgIFwiLjI1XCI6IFwicmdiYSg1MiwgIDE1MiwgMjE5LCAuOSlcIixcbiAgICAgICAgXCIuNTBcIjogXCJyZ2JhKDI0MSwgMTk2LCAxNSwgIC45KVwiLFxuICAgICAgICBcIi43NVwiOiBcInJnYmEoMjMwLCAxMjYsIDM0LCAgLjkpXCIsXG4gICAgICAgIFwiMS4wXCI6IFwicmdiYSgyMTEsIDg0LCAgMCwgICAuOSlcIixcbiAgICAgIH0sXG4gICAgICBzaGFkb3dCbHVyOiAxMCxcbiAgICAgIHNoYWRvd0NvbG9yOiBcInJnYmEoMCwgICAwLCAgIDAsICAgLjYpXCIsXG4gICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgfSxcbiAgICByZXBhaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5iYXJUaGlja25lc3MgKiA1OyAvLyBuZWVkIHNwYWNlIGZvciBzaGFkb3dcblxuICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHguc2hhZG93Qmx1ciA9IG9wdGlvbnMuc2hhZG93Qmx1cjtcbiAgICAgIGN0eC5zaGFkb3dDb2xvciA9IG9wdGlvbnMuc2hhZG93Q29sb3I7XG5cbiAgICAgIHZhciBsaW5lR3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcbiAgICAgIGZvciAodmFyIHN0b3AgaW4gb3B0aW9ucy5iYXJDb2xvcnMpXG4gICAgICAgIGxpbmVHcmFkaWVudC5hZGRDb2xvclN0b3Aoc3RvcCwgb3B0aW9ucy5iYXJDb2xvcnNbc3RvcF0pO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IG9wdGlvbnMuYmFyVGhpY2tuZXNzO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbygwLCBvcHRpb25zLmJhclRoaWNrbmVzcyAvIDIpO1xuICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgTWF0aC5jZWlsKGN1cnJlbnRQcm9ncmVzcyAqIGNhbnZhcy53aWR0aCksXG4gICAgICAgIG9wdGlvbnMuYmFyVGhpY2tuZXNzIC8gMlxuICAgICAgKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpbmVHcmFkaWVudDtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9LFxuICAgIGNyZWF0ZUNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICB2YXIgc3R5bGUgPSBjYW52YXMuc3R5bGU7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIHN0eWxlLnRvcCA9IHN0eWxlLmxlZnQgPSBzdHlsZS5yaWdodCA9IHN0eWxlLm1hcmdpbiA9IHN0eWxlLnBhZGRpbmcgPSAwO1xuICAgICAgc3R5bGUuekluZGV4ID0gMTAwMDAxO1xuICAgICAgc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NOYW1lKSBjYW52YXMuY2xhc3NMaXN0LmFkZChvcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICBhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHJlcGFpbnQpO1xuICAgIH0sXG4gICAgdG9wYmFyID0ge1xuICAgICAgY29uZmlnOiBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0cylcbiAgICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG4gICAgICB9LFxuICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvd2luZykgcmV0dXJuO1xuICAgICAgICBzaG93aW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZhZGVUaW1lcklkICE9PSBudWxsKSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoZmFkZVRpbWVySWQpO1xuICAgICAgICBpZiAoIWNhbnZhcykgY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHRvcGJhci5wcm9ncmVzcygwKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b1J1bikge1xuICAgICAgICAgIChmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3NUaW1lcklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIHRvcGJhci5wcm9ncmVzcyhcbiAgICAgICAgICAgICAgXCIrXCIgKyAwLjA1ICogTWF0aC5wb3coMSAtIE1hdGguc3FydChjdXJyZW50UHJvZ3Jlc3MpLCAyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh0bykge1xuICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3VycmVudFByb2dyZXNzO1xuICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgdG8gPVxuICAgICAgICAgICAgKHRvLmluZGV4T2YoXCIrXCIpID49IDAgfHwgdG8uaW5kZXhPZihcIi1cIikgPj0gMFxuICAgICAgICAgICAgICA/IGN1cnJlbnRQcm9ncmVzc1xuICAgICAgICAgICAgICA6IDApICsgcGFyc2VGbG9hdCh0byk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFByb2dyZXNzID0gdG8gPiAxID8gMSA6IHRvO1xuICAgICAgICByZXBhaW50KCk7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvZ3Jlc3M7XG4gICAgICB9LFxuICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXNob3dpbmcpIHJldHVybjtcbiAgICAgICAgc2hvd2luZyA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvZ3Jlc3NUaW1lcklkICE9IG51bGwpIHtcbiAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocHJvZ3Jlc3NUaW1lcklkKTtcbiAgICAgICAgICBwcm9ncmVzc1RpbWVySWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIChmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICAgIGlmICh0b3BiYXIucHJvZ3Jlc3MoXCIrLjFcIikgPj0gMSkge1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLm9wYWNpdHkgLT0gMC4wNTtcbiAgICAgICAgICAgIGlmIChjYW52YXMuc3R5bGUub3BhY2l0eSA8PSAwLjA1KSB7XG4gICAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgIGZhZGVUaW1lcklkID0gbnVsbDtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmYWRlVGltZXJJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB0b3BiYXI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRvcGJhcjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnRvcGJhciA9IHRvcGJhcjtcbiAgfVxufS5jYWxsKHRoaXMsIHdpbmRvdywgZG9jdW1lbnQpKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgUG9seWZpbGxFdmVudCA9IGV2ZW50Q29uc3RydWN0b3IoKTtcblxuICBmdW5jdGlvbiBldmVudENvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG4gICAgLy8gSUU8PTkgU3VwcG9ydFxuICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7YnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZH07XG4gICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcbiAgICByZXR1cm4gQ3VzdG9tRXZlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEhpZGRlbklucHV0KG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZWxlbWVudCkge1xuICAgIHZhciB0byA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10b1wiKSxcbiAgICAgICAgbWV0aG9kID0gYnVpbGRIaWRkZW5JbnB1dChcIl9tZXRob2RcIiwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1ldGhvZFwiKSksXG4gICAgICAgIGNzcmYgPSBidWlsZEhpZGRlbklucHV0KFwiX2NzcmZfdG9rZW5cIiwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNzcmZcIikpLFxuICAgICAgICBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gICAgICAgIHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpO1xuXG4gICAgZm9ybS5tZXRob2QgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1ldGhvZFwiKSA9PT0gXCJnZXRcIikgPyBcImdldFwiIDogXCJwb3N0XCI7XG4gICAgZm9ybS5hY3Rpb24gPSB0bztcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImhpZGRlblwiO1xuXG4gICAgaWYgKHRhcmdldCkgZm9ybS50YXJnZXQgPSB0YXJnZXQ7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNzcmYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWV0aG9kKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm0uc3VibWl0KCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuXG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUpIHtcbiAgICAgIHZhciBwaG9lbml4TGlua0V2ZW50ID0gbmV3IFBvbHlmaWxsRXZlbnQoJ3Bob2VuaXgubGluay5jbGljaycsIHtcbiAgICAgICAgXCJidWJibGVzXCI6IHRydWUsIFwiY2FuY2VsYWJsZVwiOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFlbGVtZW50LmRpc3BhdGNoRXZlbnQocGhvZW5peExpbmtFdmVudCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpKSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGVsZW1lbnQpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9LCBmYWxzZSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bob2VuaXgubGluay5jbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbmZpcm1cIik7XG4gICAgaWYobWVzc2FnZSAmJiAhd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sIGZhbHNlKTtcbn0pKCk7XG4iLCAidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX21hcmtBc01vZHVsZSA9ICh0YXJnZXQpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbnZhciBfX2NvbW1vbkpTID0gKGNhbGxiYWNrLCBtb2R1bGUpID0+ICgpID0+IHtcbiAgaWYgKCFtb2R1bGUpIHtcbiAgICBtb2R1bGUgPSB7ZXhwb3J0czoge319O1xuICAgIGNhbGxiYWNrKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUpO1xuICB9XG4gIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn07XG52YXIgX19leHBvcnRTdGFyID0gKHRhcmdldCwgbW9kdWxlLCBkZXNjKSA9PiB7XG4gIGlmIChtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMobW9kdWxlKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodGFyZ2V0LCBrZXkpICYmIGtleSAhPT0gXCJkZWZhdWx0XCIpXG4gICAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwge2dldDogKCkgPT4gbW9kdWxlW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MobW9kdWxlLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGV9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX3RvTW9kdWxlID0gKG1vZHVsZSkgPT4ge1xuICByZXR1cm4gX19leHBvcnRTdGFyKF9fbWFya0FzTW9kdWxlKF9fZGVmUHJvcChtb2R1bGUgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2R1bGUpKSA6IHt9LCBcImRlZmF1bHRcIiwgbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlICYmIFwiZGVmYXVsdFwiIGluIG1vZHVsZSA/IHtnZXQ6ICgpID0+IG1vZHVsZS5kZWZhdWx0LCBlbnVtZXJhYmxlOiB0cnVlfSA6IHt2YWx1ZTogbW9kdWxlLCBlbnVtZXJhYmxlOiB0cnVlfSkpLCBtb2R1bGUpO1xufTtcblxuLy8gbm9kZV9tb2R1bGVzL0B2dWUvc2hhcmVkL2Rpc3Qvc2hhcmVkLmNqcy5qc1xudmFyIHJlcXVpcmVfc2hhcmVkX2NqcyA9IF9fY29tbW9uSlMoKGV4cG9ydHMpID0+IHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiB0cnVlfSk7XG4gIGZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKSB7XG4gICAgY29uc3QgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBjb25zdCBsaXN0ID0gc3RyLnNwbGl0KFwiLFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1hcFtsaXN0W2ldXSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBleHBlY3RzTG93ZXJDYXNlID8gKHZhbCkgPT4gISFtYXBbdmFsLnRvTG93ZXJDYXNlKCldIDogKHZhbCkgPT4gISFtYXBbdmFsXTtcbiAgfVxuICB2YXIgUGF0Y2hGbGFnTmFtZXMgPSB7XG4gICAgWzFdOiBgVEVYVGAsXG4gICAgWzJdOiBgQ0xBU1NgLFxuICAgIFs0XTogYFNUWUxFYCxcbiAgICBbOF06IGBQUk9QU2AsXG4gICAgWzE2XTogYEZVTExfUFJPUFNgLFxuICAgIFszMl06IGBIWURSQVRFX0VWRU5UU2AsXG4gICAgWzY0XTogYFNUQUJMRV9GUkFHTUVOVGAsXG4gICAgWzEyOF06IGBLRVlFRF9GUkFHTUVOVGAsXG4gICAgWzI1Nl06IGBVTktFWUVEX0ZSQUdNRU5UYCxcbiAgICBbNTEyXTogYE5FRURfUEFUQ0hgLFxuICAgIFsxMDI0XTogYERZTkFNSUNfU0xPVFNgLFxuICAgIFsyMDQ4XTogYERFVl9ST09UX0ZSQUdNRU5UYCxcbiAgICBbLTFdOiBgSE9JU1RFRGAsXG4gICAgWy0yXTogYEJBSUxgXG4gIH07XG4gIHZhciBzbG90RmxhZ3NUZXh0ID0ge1xuICAgIFsxXTogXCJTVEFCTEVcIixcbiAgICBbMl06IFwiRFlOQU1JQ1wiLFxuICAgIFszXTogXCJGT1JXQVJERURcIlxuICB9O1xuICB2YXIgR0xPQkFMU19XSElURV9MSVNURUQgPSBcIkluZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4scGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLEJpZ0ludFwiO1xuICB2YXIgaXNHbG9iYWxseVdoaXRlbGlzdGVkID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoR0xPQkFMU19XSElURV9MSVNURUQpO1xuICB2YXIgcmFuZ2UgPSAyO1xuICBmdW5jdGlvbiBnZW5lcmF0ZUNvZGVGcmFtZShzb3VyY2UsIHN0YXJ0MiA9IDAsIGVuZCA9IHNvdXJjZS5sZW5ndGgpIHtcbiAgICBjb25zdCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyP1xcbi8pO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY291bnQgKz0gbGluZXNbaV0ubGVuZ3RoICsgMTtcbiAgICAgIGlmIChjb3VudCA+PSBzdGFydDIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgLSByYW5nZTsgaiA8PSBpICsgcmFuZ2UgfHwgZW5kID4gY291bnQ7IGorKykge1xuICAgICAgICAgIGlmIChqIDwgMCB8fCBqID49IGxpbmVzLmxlbmd0aClcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIGNvbnN0IGxpbmUgPSBqICsgMTtcbiAgICAgICAgICByZXMucHVzaChgJHtsaW5lfSR7XCIgXCIucmVwZWF0KE1hdGgubWF4KDMgLSBTdHJpbmcobGluZSkubGVuZ3RoLCAwKSl9fCAgJHtsaW5lc1tqXX1gKTtcbiAgICAgICAgICBjb25zdCBsaW5lTGVuZ3RoID0gbGluZXNbal0ubGVuZ3RoO1xuICAgICAgICAgIGlmIChqID09PSBpKSB7XG4gICAgICAgICAgICBjb25zdCBwYWQgPSBzdGFydDIgLSAoY291bnQgLSBsaW5lTGVuZ3RoKSArIDE7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heCgxLCBlbmQgPiBjb3VudCA/IGxpbmVMZW5ndGggLSBwYWQgOiBlbmQgLSBzdGFydDIpO1xuICAgICAgICAgICAgcmVzLnB1c2goYCAgIHwgIGAgKyBcIiBcIi5yZXBlYXQocGFkKSArIFwiXlwiLnJlcGVhdChsZW5ndGgpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPiBpKSB7XG4gICAgICAgICAgICBpZiAoZW5kID4gY291bnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5taW4oZW5kIC0gY291bnQsIGxpbmVMZW5ndGgpLCAxKTtcbiAgICAgICAgICAgICAgcmVzLnB1c2goYCAgIHwgIGAgKyBcIl5cIi5yZXBlYXQobGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCArPSBsaW5lTGVuZ3RoICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXMuam9pbihcIlxcblwiKTtcbiAgfVxuICB2YXIgc3BlY2lhbEJvb2xlYW5BdHRycyA9IGBpdGVtc2NvcGUsYWxsb3dmdWxsc2NyZWVuLGZvcm1ub3ZhbGlkYXRlLGlzbWFwLG5vbW9kdWxlLG5vdmFsaWRhdGUscmVhZG9ubHlgO1xuICB2YXIgaXNTcGVjaWFsQm9vbGVhbkF0dHIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChzcGVjaWFsQm9vbGVhbkF0dHJzKTtcbiAgdmFyIGlzQm9vbGVhbkF0dHIyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoc3BlY2lhbEJvb2xlYW5BdHRycyArIGAsYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNvbnRyb2xzLGRlZmF1bHQsZGVmZXIsZGlzYWJsZWQsaGlkZGVuLGxvb3Asb3BlbixyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3MsY2hlY2tlZCxtdXRlZCxtdWx0aXBsZSxzZWxlY3RlZGApO1xuICB2YXIgdW5zYWZlQXR0ckNoYXJSRSA9IC9bPi89XCInXFx1MDAwOVxcdTAwMGFcXHUwMDBjXFx1MDAyMF0vO1xuICB2YXIgYXR0clZhbGlkYXRpb25DYWNoZSA9IHt9O1xuICBmdW5jdGlvbiBpc1NTUlNhZmVBdHRyTmFtZShuYW1lKSB7XG4gICAgaWYgKGF0dHJWYWxpZGF0aW9uQ2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiBhdHRyVmFsaWRhdGlvbkNhY2hlW25hbWVdO1xuICAgIH1cbiAgICBjb25zdCBpc1Vuc2FmZSA9IHVuc2FmZUF0dHJDaGFyUkUudGVzdChuYW1lKTtcbiAgICBpZiAoaXNVbnNhZmUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHVuc2FmZSBhdHRyaWJ1dGUgbmFtZTogJHtuYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gYXR0clZhbGlkYXRpb25DYWNoZVtuYW1lXSA9ICFpc1Vuc2FmZTtcbiAgfVxuICB2YXIgcHJvcHNUb0F0dHJNYXAgPSB7XG4gICAgYWNjZXB0Q2hhcnNldDogXCJhY2NlcHQtY2hhcnNldFwiLFxuICAgIGNsYXNzTmFtZTogXCJjbGFzc1wiLFxuICAgIGh0bWxGb3I6IFwiZm9yXCIsXG4gICAgaHR0cEVxdWl2OiBcImh0dHAtZXF1aXZcIlxuICB9O1xuICB2YXIgaXNOb1VuaXROdW1lcmljU3R5bGVQcm9wID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoYGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsYm9yZGVyLWltYWdlLW91dHNldCxib3JkZXItaW1hZ2Utc2xpY2UsYm9yZGVyLWltYWdlLXdpZHRoLGJveC1mbGV4LGJveC1mbGV4LWdyb3VwLGJveC1vcmRpbmFsLWdyb3VwLGNvbHVtbi1jb3VudCxjb2x1bW5zLGZsZXgsZmxleC1ncm93LGZsZXgtcG9zaXRpdmUsZmxleC1zaHJpbmssZmxleC1uZWdhdGl2ZSxmbGV4LW9yZGVyLGdyaWQtcm93LGdyaWQtcm93LWVuZCxncmlkLXJvdy1zcGFuLGdyaWQtcm93LXN0YXJ0LGdyaWQtY29sdW1uLGdyaWQtY29sdW1uLWVuZCxncmlkLWNvbHVtbi1zcGFuLGdyaWQtY29sdW1uLXN0YXJ0LGZvbnQtd2VpZ2h0LGxpbmUtY2xhbXAsbGluZS1oZWlnaHQsb3BhY2l0eSxvcmRlcixvcnBoYW5zLHRhYi1zaXplLHdpZG93cyx6LWluZGV4LHpvb20sZmlsbC1vcGFjaXR5LGZsb29kLW9wYWNpdHksc3RvcC1vcGFjaXR5LHN0cm9rZS1kYXNoYXJyYXksc3Ryb2tlLWRhc2hvZmZzZXQsc3Ryb2tlLW1pdGVybGltaXQsc3Ryb2tlLW9wYWNpdHksc3Ryb2tlLXdpZHRoYCk7XG4gIHZhciBpc0tub3duQXR0ciA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKGBhY2NlcHQsYWNjZXB0LWNoYXJzZXQsYWNjZXNza2V5LGFjdGlvbixhbGlnbixhbGxvdyxhbHQsYXN5bmMsYXV0b2NhcGl0YWxpemUsYXV0b2NvbXBsZXRlLGF1dG9mb2N1cyxhdXRvcGxheSxiYWNrZ3JvdW5kLGJnY29sb3IsYm9yZGVyLGJ1ZmZlcmVkLGNhcHR1cmUsY2hhbGxlbmdlLGNoYXJzZXQsY2hlY2tlZCxjaXRlLGNsYXNzLGNvZGUsY29kZWJhc2UsY29sb3IsY29scyxjb2xzcGFuLGNvbnRlbnQsY29udGVudGVkaXRhYmxlLGNvbnRleHRtZW51LGNvbnRyb2xzLGNvb3Jkcyxjcm9zc29yaWdpbixjc3AsZGF0YSxkYXRldGltZSxkZWNvZGluZyxkZWZhdWx0LGRlZmVyLGRpcixkaXJuYW1lLGRpc2FibGVkLGRvd25sb2FkLGRyYWdnYWJsZSxkcm9wem9uZSxlbmN0eXBlLGVudGVya2V5aGludCxmb3IsZm9ybSxmb3JtYWN0aW9uLGZvcm1lbmN0eXBlLGZvcm1tZXRob2QsZm9ybW5vdmFsaWRhdGUsZm9ybXRhcmdldCxoZWFkZXJzLGhlaWdodCxoaWRkZW4saGlnaCxocmVmLGhyZWZsYW5nLGh0dHAtZXF1aXYsaWNvbixpZCxpbXBvcnRhbmNlLGludGVncml0eSxpc21hcCxpdGVtcHJvcCxrZXl0eXBlLGtpbmQsbGFiZWwsbGFuZyxsYW5ndWFnZSxsb2FkaW5nLGxpc3QsbG9vcCxsb3csbWFuaWZlc3QsbWF4LG1heGxlbmd0aCxtaW5sZW5ndGgsbWVkaWEsbWluLG11bHRpcGxlLG11dGVkLG5hbWUsbm92YWxpZGF0ZSxvcGVuLG9wdGltdW0scGF0dGVybixwaW5nLHBsYWNlaG9sZGVyLHBvc3RlcixwcmVsb2FkLHJhZGlvZ3JvdXAscmVhZG9ubHkscmVmZXJyZXJwb2xpY3kscmVsLHJlcXVpcmVkLHJldmVyc2VkLHJvd3Mscm93c3BhbixzYW5kYm94LHNjb3BlLHNjb3BlZCxzZWxlY3RlZCxzaGFwZSxzaXplLHNpemVzLHNsb3Qsc3BhbixzcGVsbGNoZWNrLHNyYyxzcmNkb2Msc3JjbGFuZyxzcmNzZXQsc3RhcnQsc3RlcCxzdHlsZSxzdW1tYXJ5LHRhYmluZGV4LHRhcmdldCx0aXRsZSx0cmFuc2xhdGUsdHlwZSx1c2VtYXAsdmFsdWUsd2lkdGgsd3JhcGApO1xuICBmdW5jdGlvbiBub3JtYWxpemVTdHlsZSh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uc3QgcmVzID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVN0eWxlKGlzU3RyaW5nKGl0ZW0pID8gcGFyc2VTdHJpbmdTdHlsZShpdGVtKSA6IGl0ZW0pO1xuICAgICAgICBpZiAobm9ybWFsaXplZCkge1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5vcm1hbGl6ZWQpIHtcbiAgICAgICAgICAgIHJlc1trZXldID0gbm9ybWFsaXplZFtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuICB2YXIgbGlzdERlbGltaXRlclJFID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyUkUgPSAvOiguKykvO1xuICBmdW5jdGlvbiBwYXJzZVN0cmluZ1N0eWxlKGNzc1RleHQpIHtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjc3NUZXh0LnNwbGl0KGxpc3REZWxpbWl0ZXJSRSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlclJFKTtcbiAgICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJldFt0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgZnVuY3Rpb24gc3RyaW5naWZ5U3R5bGUoc3R5bGVzKSB7XG4gICAgbGV0IHJldCA9IFwiXCI7XG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRLZXkgPSBrZXkuc3RhcnRzV2l0aChgLS1gKSA/IGtleSA6IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgaXNOb1VuaXROdW1lcmljU3R5bGVQcm9wKG5vcm1hbGl6ZWRLZXkpKSB7XG4gICAgICAgIHJldCArPSBgJHtub3JtYWxpemVkS2V5fToke3ZhbHVlfTtgO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUNsYXNzKHZhbHVlKSB7XG4gICAgbGV0IHJlcyA9IFwiXCI7XG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmVzID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplQ2xhc3ModmFsdWVbaV0pO1xuICAgICAgICBpZiAobm9ybWFsaXplZCkge1xuICAgICAgICAgIHJlcyArPSBub3JtYWxpemVkICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgZm9yIChjb25zdCBuYW1lIGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZVtuYW1lXSkge1xuICAgICAgICAgIHJlcyArPSBuYW1lICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcy50cmltKCk7XG4gIH1cbiAgdmFyIEhUTUxfVEFHUyA9IFwiaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLGRpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLGEsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSxzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbyxlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucyxjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0cixidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLG91dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsZGV0YWlscyxkaWFsb2csbWVudSxzdW1tYXJ5LHRlbXBsYXRlLGJsb2NrcXVvdGUsaWZyYW1lLHRmb290XCI7XG4gIHZhciBTVkdfVEFHUyA9IFwic3ZnLGFuaW1hdGUsYW5pbWF0ZU1vdGlvbixhbmltYXRlVHJhbnNmb3JtLGNpcmNsZSxjbGlwUGF0aCxjb2xvci1wcm9maWxlLGRlZnMsZGVzYyxkaXNjYXJkLGVsbGlwc2UsZmVCbGVuZCxmZUNvbG9yTWF0cml4LGZlQ29tcG9uZW50VHJhbnNmZXIsZmVDb21wb3NpdGUsZmVDb252b2x2ZU1hdHJpeCxmZURpZmZ1c2VMaWdodGluZyxmZURpc3BsYWNlbWVudE1hcCxmZURpc3RhbmNlTGlnaHQsZmVEcm9wU2hhZG93LGZlRmxvb2QsZmVGdW5jQSxmZUZ1bmNCLGZlRnVuY0csZmVGdW5jUixmZUdhdXNzaWFuQmx1cixmZUltYWdlLGZlTWVyZ2UsZmVNZXJnZU5vZGUsZmVNb3JwaG9sb2d5LGZlT2Zmc2V0LGZlUG9pbnRMaWdodCxmZVNwZWN1bGFyTGlnaHRpbmcsZmVTcG90TGlnaHQsZmVUaWxlLGZlVHVyYnVsZW5jZSxmaWx0ZXIsZm9yZWlnbk9iamVjdCxnLGhhdGNoLGhhdGNocGF0aCxpbWFnZSxsaW5lLGxpbmVhckdyYWRpZW50LG1hcmtlcixtYXNrLG1lc2gsbWVzaGdyYWRpZW50LG1lc2hwYXRjaCxtZXNocm93LG1ldGFkYXRhLG1wYXRoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJhZGlhbEdyYWRpZW50LHJlY3Qsc2V0LHNvbGlkY29sb3Isc3RvcCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dFBhdGgsdGl0bGUsdHNwYW4sdW5rbm93bix1c2Usdmlld1wiO1xuICB2YXIgVk9JRF9UQUdTID0gXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGhyLGltZyxpbnB1dCxsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiO1xuICB2YXIgaXNIVE1MVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoSFRNTF9UQUdTKTtcbiAgdmFyIGlzU1ZHVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoU1ZHX1RBR1MpO1xuICB2YXIgaXNWb2lkVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoVk9JRF9UQUdTKTtcbiAgdmFyIGVzY2FwZVJFID0gL1tcIicmPD5dLztcbiAgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgICBjb25zdCBzdHIgPSBcIlwiICsgc3RyaW5nO1xuICAgIGNvbnN0IG1hdGNoID0gZXNjYXBlUkUuZXhlYyhzdHIpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIGxldCBodG1sID0gXCJcIjtcbiAgICBsZXQgZXNjYXBlZDtcbiAgICBsZXQgaW5kZXg7XG4gICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgZm9yIChpbmRleCA9IG1hdGNoLmluZGV4OyBpbmRleCA8IHN0ci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgZXNjYXBlZCA9IFwiJnF1b3Q7XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgZXNjYXBlZCA9IFwiJmFtcDtcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBlc2NhcGVkID0gXCImIzM5O1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgIGVzY2FwZWQgPSBcIiZsdDtcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICBlc2NhcGVkID0gXCImZ3Q7XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICBodG1sICs9IHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCk7XG4gICAgICB9XG4gICAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgICBodG1sICs9IGVzY2FwZWQ7XG4gICAgfVxuICAgIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4ID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCkgOiBodG1sO1xuICB9XG4gIHZhciBjb21tZW50U3RyaXBSRSA9IC9eLT8+fDwhLS18LS0+fC0tIT58PCEtJC9nO1xuICBmdW5jdGlvbiBlc2NhcGVIdG1sQ29tbWVudChzcmMpIHtcbiAgICByZXR1cm4gc3JjLnJlcGxhY2UoY29tbWVudFN0cmlwUkUsIFwiXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGxvb3NlQ29tcGFyZUFycmF5cyhhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBsZXQgZXF1YWwgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBlcXVhbCAmJiBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgZXF1YWwgPSBsb29zZUVxdWFsKGFbaV0sIGJbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cbiAgZnVuY3Rpb24gbG9vc2VFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBsZXQgYVZhbGlkVHlwZSA9IGlzRGF0ZShhKTtcbiAgICBsZXQgYlZhbGlkVHlwZSA9IGlzRGF0ZShiKTtcbiAgICBpZiAoYVZhbGlkVHlwZSB8fCBiVmFsaWRUeXBlKSB7XG4gICAgICByZXR1cm4gYVZhbGlkVHlwZSAmJiBiVmFsaWRUeXBlID8gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpIDogZmFsc2U7XG4gICAgfVxuICAgIGFWYWxpZFR5cGUgPSBpc0FycmF5KGEpO1xuICAgIGJWYWxpZFR5cGUgPSBpc0FycmF5KGIpO1xuICAgIGlmIChhVmFsaWRUeXBlIHx8IGJWYWxpZFR5cGUpIHtcbiAgICAgIHJldHVybiBhVmFsaWRUeXBlICYmIGJWYWxpZFR5cGUgPyBsb29zZUNvbXBhcmVBcnJheXMoYSwgYikgOiBmYWxzZTtcbiAgICB9XG4gICAgYVZhbGlkVHlwZSA9IGlzT2JqZWN0KGEpO1xuICAgIGJWYWxpZFR5cGUgPSBpc09iamVjdChiKTtcbiAgICBpZiAoYVZhbGlkVHlwZSB8fCBiVmFsaWRUeXBlKSB7XG4gICAgICBpZiAoIWFWYWxpZFR5cGUgfHwgIWJWYWxpZFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgYUtleXNDb3VudCA9IE9iamVjdC5rZXlzKGEpLmxlbmd0aDtcbiAgICAgIGNvbnN0IGJLZXlzQ291bnQgPSBPYmplY3Qua2V5cyhiKS5sZW5ndGg7XG4gICAgICBpZiAoYUtleXNDb3VudCAhPT0gYktleXNDb3VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBhKSB7XG4gICAgICAgIGNvbnN0IGFIYXNLZXkgPSBhLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICAgIGNvbnN0IGJIYXNLZXkgPSBiLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICAgIGlmIChhSGFzS2V5ICYmICFiSGFzS2V5IHx8ICFhSGFzS2V5ICYmIGJIYXNLZXkgfHwgIWxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbiAgfVxuICBmdW5jdGlvbiBsb29zZUluZGV4T2YoYXJyLCB2YWwpIHtcbiAgICByZXR1cm4gYXJyLmZpbmRJbmRleCgoaXRlbSkgPT4gbG9vc2VFcXVhbChpdGVtLCB2YWwpKTtcbiAgfVxuICB2YXIgdG9EaXNwbGF5U3RyaW5nID0gKHZhbCkgPT4ge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCA/IFwiXCIgOiBpc09iamVjdCh2YWwpID8gSlNPTi5zdHJpbmdpZnkodmFsLCByZXBsYWNlciwgMikgOiBTdHJpbmcodmFsKTtcbiAgfTtcbiAgdmFyIHJlcGxhY2VyID0gKF9rZXksIHZhbCkgPT4ge1xuICAgIGlmIChpc01hcCh2YWwpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbYE1hcCgke3ZhbC5zaXplfSlgXTogWy4uLnZhbC5lbnRyaWVzKCldLnJlZHVjZSgoZW50cmllcywgW2tleSwgdmFsMl0pID0+IHtcbiAgICAgICAgICBlbnRyaWVzW2Ake2tleX0gPT5gXSA9IHZhbDI7XG4gICAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgICAgIH0sIHt9KVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzU2V0KHZhbCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgU2V0KCR7dmFsLnNpemV9KWBdOiBbLi4udmFsLnZhbHVlcygpXVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkgJiYgIWlzQXJyYXkodmFsKSAmJiAhaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHZhbCk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH07XG4gIHZhciBiYWJlbFBhcnNlckRlZmF1bHRQbHVnaW5zID0gW1xuICAgIFwiYmlnSW50XCIsXG4gICAgXCJvcHRpb25hbENoYWluaW5nXCIsXG4gICAgXCJudWxsaXNoQ29hbGVzY2luZ09wZXJhdG9yXCJcbiAgXTtcbiAgdmFyIEVNUFRZX09CSiA9IE9iamVjdC5mcmVlemUoe30pO1xuICB2YXIgRU1QVFlfQVJSID0gT2JqZWN0LmZyZWV6ZShbXSk7XG4gIHZhciBOT09QID0gKCkgPT4ge1xuICB9O1xuICB2YXIgTk8gPSAoKSA9PiBmYWxzZTtcbiAgdmFyIG9uUkUgPSAvXm9uW15hLXpdLztcbiAgdmFyIGlzT24gPSAoa2V5KSA9PiBvblJFLnRlc3Qoa2V5KTtcbiAgdmFyIGlzTW9kZWxMaXN0ZW5lciA9IChrZXkpID0+IGtleS5zdGFydHNXaXRoKFwib25VcGRhdGU6XCIpO1xuICB2YXIgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcbiAgdmFyIHJlbW92ZSA9IChhcnIsIGVsKSA9PiB7XG4gICAgY29uc3QgaSA9IGFyci5pbmRleE9mKGVsKTtcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGhhc093biA9ICh2YWwsIGtleSkgPT4gaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSk7XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgdmFyIGlzTWFwID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBNYXBdXCI7XG4gIHZhciBpc1NldCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgU2V0XVwiO1xuICB2YXIgaXNEYXRlID0gKHZhbCkgPT4gdmFsIGluc3RhbmNlb2YgRGF0ZTtcbiAgdmFyIGlzRnVuY3Rpb24gPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCI7XG4gIHZhciBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG4gIHZhciBpc1N5bWJvbCA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3ltYm9sXCI7XG4gIHZhciBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiO1xuICB2YXIgaXNQcm9taXNlID0gKHZhbCkgPT4ge1xuICAgIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnRoZW4pICYmIGlzRnVuY3Rpb24odmFsLmNhdGNoKTtcbiAgfTtcbiAgdmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIHRvVHlwZVN0cmluZyA9ICh2YWx1ZSkgPT4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIHZhciB0b1Jhd1R5cGUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdG9UeXBlU3RyaW5nKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gIH07XG4gIHZhciBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG4gIHZhciBpc0ludGVnZXJLZXkgPSAoa2V5KSA9PiBpc1N0cmluZyhrZXkpICYmIGtleSAhPT0gXCJOYU5cIiAmJiBrZXlbMF0gIT09IFwiLVwiICYmIFwiXCIgKyBwYXJzZUludChrZXksIDEwKSA9PT0ga2V5O1xuICB2YXIgaXNSZXNlcnZlZFByb3AgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcIixrZXkscmVmLG9uVm5vZGVCZWZvcmVNb3VudCxvblZub2RlTW91bnRlZCxvblZub2RlQmVmb3JlVXBkYXRlLG9uVm5vZGVVcGRhdGVkLG9uVm5vZGVCZWZvcmVVbm1vdW50LG9uVm5vZGVVbm1vdW50ZWRcIik7XG4gIHZhciBjYWNoZVN0cmluZ0Z1bmN0aW9uID0gKGZuKSA9PiB7XG4gICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiAoc3RyKSA9PiB7XG4gICAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgIH07XG4gIH07XG4gIHZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xuICB2YXIgY2FtZWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKTtcbiAgfSk7XG4gIHZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG4gIHZhciBoeXBoZW5hdGUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgdmFyIGNhcGl0YWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKSk7XG4gIHZhciB0b0hhbmRsZXJLZXkgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ciA/IGBvbiR7Y2FwaXRhbGl6ZShzdHIpfWAgOiBgYCk7XG4gIHZhciBoYXNDaGFuZ2VkID0gKHZhbHVlLCBvbGRWYWx1ZSkgPT4gdmFsdWUgIT09IG9sZFZhbHVlICYmICh2YWx1ZSA9PT0gdmFsdWUgfHwgb2xkVmFsdWUgPT09IG9sZFZhbHVlKTtcbiAgdmFyIGludm9rZUFycmF5Rm5zID0gKGZucywgYXJnKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZuc1tpXShhcmcpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGRlZiA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWVcbiAgICB9KTtcbiAgfTtcbiAgdmFyIHRvTnVtYmVyID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogbjtcbiAgfTtcbiAgdmFyIF9nbG9iYWxUaGlzO1xuICB2YXIgZ2V0R2xvYmFsVGhpcyA9ICgpID0+IHtcbiAgICByZXR1cm4gX2dsb2JhbFRoaXMgfHwgKF9nbG9iYWxUaGlzID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gIH07XG4gIGV4cG9ydHMuRU1QVFlfQVJSID0gRU1QVFlfQVJSO1xuICBleHBvcnRzLkVNUFRZX09CSiA9IEVNUFRZX09CSjtcbiAgZXhwb3J0cy5OTyA9IE5PO1xuICBleHBvcnRzLk5PT1AgPSBOT09QO1xuICBleHBvcnRzLlBhdGNoRmxhZ05hbWVzID0gUGF0Y2hGbGFnTmFtZXM7XG4gIGV4cG9ydHMuYmFiZWxQYXJzZXJEZWZhdWx0UGx1Z2lucyA9IGJhYmVsUGFyc2VyRGVmYXVsdFBsdWdpbnM7XG4gIGV4cG9ydHMuY2FtZWxpemUgPSBjYW1lbGl6ZTtcbiAgZXhwb3J0cy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbiAgZXhwb3J0cy5kZWYgPSBkZWY7XG4gIGV4cG9ydHMuZXNjYXBlSHRtbCA9IGVzY2FwZUh0bWw7XG4gIGV4cG9ydHMuZXNjYXBlSHRtbENvbW1lbnQgPSBlc2NhcGVIdG1sQ29tbWVudDtcbiAgZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG4gIGV4cG9ydHMuZ2VuZXJhdGVDb2RlRnJhbWUgPSBnZW5lcmF0ZUNvZGVGcmFtZTtcbiAgZXhwb3J0cy5nZXRHbG9iYWxUaGlzID0gZ2V0R2xvYmFsVGhpcztcbiAgZXhwb3J0cy5oYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZDtcbiAgZXhwb3J0cy5oYXNPd24gPSBoYXNPd247XG4gIGV4cG9ydHMuaHlwaGVuYXRlID0gaHlwaGVuYXRlO1xuICBleHBvcnRzLmludm9rZUFycmF5Rm5zID0gaW52b2tlQXJyYXlGbnM7XG4gIGV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG4gIGV4cG9ydHMuaXNCb29sZWFuQXR0ciA9IGlzQm9vbGVhbkF0dHIyO1xuICBleHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcbiAgZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbiAgZXhwb3J0cy5pc0dsb2JhbGx5V2hpdGVsaXN0ZWQgPSBpc0dsb2JhbGx5V2hpdGVsaXN0ZWQ7XG4gIGV4cG9ydHMuaXNIVE1MVGFnID0gaXNIVE1MVGFnO1xuICBleHBvcnRzLmlzSW50ZWdlcktleSA9IGlzSW50ZWdlcktleTtcbiAgZXhwb3J0cy5pc0tub3duQXR0ciA9IGlzS25vd25BdHRyO1xuICBleHBvcnRzLmlzTWFwID0gaXNNYXA7XG4gIGV4cG9ydHMuaXNNb2RlbExpc3RlbmVyID0gaXNNb2RlbExpc3RlbmVyO1xuICBleHBvcnRzLmlzTm9Vbml0TnVtZXJpY1N0eWxlUHJvcCA9IGlzTm9Vbml0TnVtZXJpY1N0eWxlUHJvcDtcbiAgZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuICBleHBvcnRzLmlzT24gPSBpc09uO1xuICBleHBvcnRzLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0O1xuICBleHBvcnRzLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbiAgZXhwb3J0cy5pc1Jlc2VydmVkUHJvcCA9IGlzUmVzZXJ2ZWRQcm9wO1xuICBleHBvcnRzLmlzU1NSU2FmZUF0dHJOYW1lID0gaXNTU1JTYWZlQXR0ck5hbWU7XG4gIGV4cG9ydHMuaXNTVkdUYWcgPSBpc1NWR1RhZztcbiAgZXhwb3J0cy5pc1NldCA9IGlzU2V0O1xuICBleHBvcnRzLmlzU3BlY2lhbEJvb2xlYW5BdHRyID0gaXNTcGVjaWFsQm9vbGVhbkF0dHI7XG4gIGV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcbiAgZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuICBleHBvcnRzLmlzVm9pZFRhZyA9IGlzVm9pZFRhZztcbiAgZXhwb3J0cy5sb29zZUVxdWFsID0gbG9vc2VFcXVhbDtcbiAgZXhwb3J0cy5sb29zZUluZGV4T2YgPSBsb29zZUluZGV4T2Y7XG4gIGV4cG9ydHMubWFrZU1hcCA9IG1ha2VNYXA7XG4gIGV4cG9ydHMubm9ybWFsaXplQ2xhc3MgPSBub3JtYWxpemVDbGFzcztcbiAgZXhwb3J0cy5ub3JtYWxpemVTdHlsZSA9IG5vcm1hbGl6ZVN0eWxlO1xuICBleHBvcnRzLm9iamVjdFRvU3RyaW5nID0gb2JqZWN0VG9TdHJpbmc7XG4gIGV4cG9ydHMucGFyc2VTdHJpbmdTdHlsZSA9IHBhcnNlU3RyaW5nU3R5bGU7XG4gIGV4cG9ydHMucHJvcHNUb0F0dHJNYXAgPSBwcm9wc1RvQXR0ck1hcDtcbiAgZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4gIGV4cG9ydHMuc2xvdEZsYWdzVGV4dCA9IHNsb3RGbGFnc1RleHQ7XG4gIGV4cG9ydHMuc3RyaW5naWZ5U3R5bGUgPSBzdHJpbmdpZnlTdHlsZTtcbiAgZXhwb3J0cy50b0Rpc3BsYXlTdHJpbmcgPSB0b0Rpc3BsYXlTdHJpbmc7XG4gIGV4cG9ydHMudG9IYW5kbGVyS2V5ID0gdG9IYW5kbGVyS2V5O1xuICBleHBvcnRzLnRvTnVtYmVyID0gdG9OdW1iZXI7XG4gIGV4cG9ydHMudG9SYXdUeXBlID0gdG9SYXdUeXBlO1xuICBleHBvcnRzLnRvVHlwZVN0cmluZyA9IHRvVHlwZVN0cmluZztcbn0pO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9zaGFyZWQvaW5kZXguanNcbnZhciByZXF1aXJlX3NoYXJlZCA9IF9fY29tbW9uSlMoKGV4cG9ydHMsIG1vZHVsZSkgPT4ge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKGZhbHNlKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZV9zaGFyZWRfY2pzKCk7XG4gIH1cbn0pO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9yZWFjdGl2aXR5L2Rpc3QvcmVhY3Rpdml0eS5janMuanNcbnZhciByZXF1aXJlX3JlYWN0aXZpdHlfY2pzID0gX19jb21tb25KUygoZXhwb3J0cykgPT4ge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbiAgdmFyIHNoYXJlZCA9IHJlcXVpcmVfc2hhcmVkKCk7XG4gIHZhciB0YXJnZXRNYXAgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgZWZmZWN0U3RhY2sgPSBbXTtcbiAgdmFyIGFjdGl2ZUVmZmVjdDtcbiAgdmFyIElURVJBVEVfS0VZID0gU3ltYm9sKFwiaXRlcmF0ZVwiKTtcbiAgdmFyIE1BUF9LRVlfSVRFUkFURV9LRVkgPSBTeW1ib2woXCJNYXAga2V5IGl0ZXJhdGVcIik7XG4gIGZ1bmN0aW9uIGlzRWZmZWN0KGZuKSB7XG4gICAgcmV0dXJuIGZuICYmIGZuLl9pc0VmZmVjdCA9PT0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBlZmZlY3QzKGZuLCBvcHRpb25zID0gc2hhcmVkLkVNUFRZX09CSikge1xuICAgIGlmIChpc0VmZmVjdChmbikpIHtcbiAgICAgIGZuID0gZm4ucmF3O1xuICAgIH1cbiAgICBjb25zdCBlZmZlY3Q0ID0gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5sYXp5KSB7XG4gICAgICBlZmZlY3Q0KCk7XG4gICAgfVxuICAgIHJldHVybiBlZmZlY3Q0O1xuICB9XG4gIGZ1bmN0aW9uIHN0b3AyKGVmZmVjdDQpIHtcbiAgICBpZiAoZWZmZWN0NC5hY3RpdmUpIHtcbiAgICAgIGNsZWFudXAoZWZmZWN0NCk7XG4gICAgICBpZiAoZWZmZWN0NC5vcHRpb25zLm9uU3RvcCkge1xuICAgICAgICBlZmZlY3Q0Lm9wdGlvbnMub25TdG9wKCk7XG4gICAgICB9XG4gICAgICBlZmZlY3Q0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgdWlkID0gMDtcbiAgZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBlZmZlY3Q0ID0gZnVuY3Rpb24gcmVhY3RpdmVFZmZlY3QoKSB7XG4gICAgICBpZiAoIWVmZmVjdDQuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfVxuICAgICAgaWYgKCFlZmZlY3RTdGFjay5pbmNsdWRlcyhlZmZlY3Q0KSkge1xuICAgICAgICBjbGVhbnVwKGVmZmVjdDQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVuYWJsZVRyYWNraW5nKCk7XG4gICAgICAgICAgZWZmZWN0U3RhY2sucHVzaChlZmZlY3Q0KTtcbiAgICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3Q0O1xuICAgICAgICAgIHJldHVybiBmbigpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGVmZmVjdFN0YWNrLnBvcCgpO1xuICAgICAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3RTdGFja1tlZmZlY3RTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZWZmZWN0NC5pZCA9IHVpZCsrO1xuICAgIGVmZmVjdDQuYWxsb3dSZWN1cnNlID0gISFvcHRpb25zLmFsbG93UmVjdXJzZTtcbiAgICBlZmZlY3Q0Ll9pc0VmZmVjdCA9IHRydWU7XG4gICAgZWZmZWN0NC5hY3RpdmUgPSB0cnVlO1xuICAgIGVmZmVjdDQucmF3ID0gZm47XG4gICAgZWZmZWN0NC5kZXBzID0gW107XG4gICAgZWZmZWN0NC5vcHRpb25zID0gb3B0aW9ucztcbiAgICByZXR1cm4gZWZmZWN0NDtcbiAgfVxuICBmdW5jdGlvbiBjbGVhbnVwKGVmZmVjdDQpIHtcbiAgICBjb25zdCB7ZGVwc30gPSBlZmZlY3Q0O1xuICAgIGlmIChkZXBzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRlcHNbaV0uZGVsZXRlKGVmZmVjdDQpO1xuICAgICAgfVxuICAgICAgZGVwcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfVxuICB2YXIgc2hvdWxkVHJhY2sgPSB0cnVlO1xuICB2YXIgdHJhY2tTdGFjayA9IFtdO1xuICBmdW5jdGlvbiBwYXVzZVRyYWNraW5nKCkge1xuICAgIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gICAgc2hvdWxkVHJhY2sgPSBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVUcmFja2luZygpIHtcbiAgICB0cmFja1N0YWNrLnB1c2goc2hvdWxkVHJhY2spO1xuICAgIHNob3VsZFRyYWNrID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyYWNraW5nKCkge1xuICAgIGNvbnN0IGxhc3QgPSB0cmFja1N0YWNrLnBvcCgpO1xuICAgIHNob3VsZFRyYWNrID0gbGFzdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IGxhc3Q7XG4gIH1cbiAgZnVuY3Rpb24gdHJhY2sodGFyZ2V0LCB0eXBlLCBrZXkpIHtcbiAgICBpZiAoIXNob3VsZFRyYWNrIHx8IGFjdGl2ZUVmZmVjdCA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpO1xuICAgIGlmICghZGVwc01hcCkge1xuICAgICAgdGFyZ2V0TWFwLnNldCh0YXJnZXQsIGRlcHNNYXAgPSBuZXcgTWFwKCkpO1xuICAgIH1cbiAgICBsZXQgZGVwID0gZGVwc01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIWRlcCkge1xuICAgICAgZGVwc01hcC5zZXQoa2V5LCBkZXAgPSBuZXcgU2V0KCkpO1xuICAgIH1cbiAgICBpZiAoIWRlcC5oYXMoYWN0aXZlRWZmZWN0KSkge1xuICAgICAgZGVwLmFkZChhY3RpdmVFZmZlY3QpO1xuICAgICAgYWN0aXZlRWZmZWN0LmRlcHMucHVzaChkZXApO1xuICAgICAgaWYgKGFjdGl2ZUVmZmVjdC5vcHRpb25zLm9uVHJhY2spIHtcbiAgICAgICAgYWN0aXZlRWZmZWN0Lm9wdGlvbnMub25UcmFjayh7XG4gICAgICAgICAgZWZmZWN0OiBhY3RpdmVFZmZlY3QsXG4gICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAga2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cmlnZ2VyKHRhcmdldCwgdHlwZSwga2V5LCBuZXdWYWx1ZSwgb2xkVmFsdWUsIG9sZFRhcmdldCkge1xuICAgIGNvbnN0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gICAgaWYgKCFkZXBzTWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVmZmVjdHMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgYWRkMiA9IChlZmZlY3RzVG9BZGQpID0+IHtcbiAgICAgIGlmIChlZmZlY3RzVG9BZGQpIHtcbiAgICAgICAgZWZmZWN0c1RvQWRkLmZvckVhY2goKGVmZmVjdDQpID0+IHtcbiAgICAgICAgICBpZiAoZWZmZWN0NCAhPT0gYWN0aXZlRWZmZWN0IHx8IGVmZmVjdDQuYWxsb3dSZWN1cnNlKSB7XG4gICAgICAgICAgICBlZmZlY3RzLmFkZChlZmZlY3Q0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHR5cGUgPT09IFwiY2xlYXJcIikge1xuICAgICAgZGVwc01hcC5mb3JFYWNoKGFkZDIpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImxlbmd0aFwiICYmIHNoYXJlZC5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgIGRlcHNNYXAuZm9yRWFjaCgoZGVwLCBrZXkyKSA9PiB7XG4gICAgICAgIGlmIChrZXkyID09PSBcImxlbmd0aFwiIHx8IGtleTIgPj0gbmV3VmFsdWUpIHtcbiAgICAgICAgICBhZGQyKGRlcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5ICE9PSB2b2lkIDApIHtcbiAgICAgICAgYWRkMihkZXBzTWFwLmdldChrZXkpKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgICAgaWYgKCFzaGFyZWQuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICBpZiAoc2hhcmVkLmlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzaGFyZWQuaXNJbnRlZ2VyS2V5KGtleSkpIHtcbiAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoXCJsZW5ndGhcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgIGlmICghc2hhcmVkLmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgICAgaWYgKHNoYXJlZC5pc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICAgIGlmIChzaGFyZWQuaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcnVuID0gKGVmZmVjdDQpID0+IHtcbiAgICAgIGlmIChlZmZlY3Q0Lm9wdGlvbnMub25UcmlnZ2VyKSB7XG4gICAgICAgIGVmZmVjdDQub3B0aW9ucy5vblRyaWdnZXIoe1xuICAgICAgICAgIGVmZmVjdDogZWZmZWN0NCxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgICAgb2xkVmFsdWUsXG4gICAgICAgICAgb2xkVGFyZ2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGVmZmVjdDQub3B0aW9ucy5zY2hlZHVsZXIpIHtcbiAgICAgICAgZWZmZWN0NC5vcHRpb25zLnNjaGVkdWxlcihlZmZlY3Q0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVmZmVjdDQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGVmZmVjdHMuZm9yRWFjaChydW4pO1xuICB9XG4gIHZhciBpc05vblRyYWNrYWJsZUtleXMgPSAvKiBAX19QVVJFX18gKi8gc2hhcmVkLm1ha2VNYXAoYF9fcHJvdG9fXyxfX3ZfaXNSZWYsX19pc1Z1ZWApO1xuICB2YXIgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbCkubWFwKChrZXkpID0+IFN5bWJvbFtrZXldKS5maWx0ZXIoc2hhcmVkLmlzU3ltYm9sKSk7XG4gIHZhciBnZXQyID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcigpO1xuICB2YXIgc2hhbGxvd0dldCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVHZXR0ZXIoZmFsc2UsIHRydWUpO1xuICB2YXIgcmVhZG9ubHlHZXQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKHRydWUpO1xuICB2YXIgc2hhbGxvd1JlYWRvbmx5R2V0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcih0cnVlLCB0cnVlKTtcbiAgdmFyIGFycmF5SW5zdHJ1bWVudGF0aW9ucyA9IHt9O1xuICBbXCJpbmNsdWRlc1wiLCBcImluZGV4T2ZcIiwgXCJsYXN0SW5kZXhPZlwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcbiAgICBhcnJheUluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IHRvUmF3Mih0aGlzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdHJhY2soYXJyLCBcImdldFwiLCBpICsgXCJcIik7XG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBtZXRob2QuYXBwbHkoYXJyLCBhcmdzKTtcbiAgICAgIGlmIChyZXMgPT09IC0xIHx8IHJlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZC5hcHBseShhcnIsIGFyZ3MubWFwKHRvUmF3MikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgW1wicHVzaFwiLCBcInBvcFwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiLCBcInNwbGljZVwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcbiAgICBhcnJheUluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICAgIGNvbnN0IHJlcyA9IG1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUdldHRlcihpc1JlYWRvbmx5MiA9IGZhbHNlLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZ2V0Myh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgICByZXR1cm4gIWlzUmVhZG9ubHkyO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgICByZXR1cm4gaXNSZWFkb25seTI7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfcmF3XCIgJiYgcmVjZWl2ZXIgPT09IChpc1JlYWRvbmx5MiA/IHNoYWxsb3cgPyBzaGFsbG93UmVhZG9ubHlNYXAgOiByZWFkb25seU1hcCA6IHNoYWxsb3cgPyBzaGFsbG93UmVhY3RpdmVNYXAgOiByZWFjdGl2ZU1hcCkuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldElzQXJyYXkgPSBzaGFyZWQuaXNBcnJheSh0YXJnZXQpO1xuICAgICAgaWYgKCFpc1JlYWRvbmx5MiAmJiB0YXJnZXRJc0FycmF5ICYmIHNoYXJlZC5oYXNPd24oYXJyYXlJbnN0cnVtZW50YXRpb25zLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChhcnJheUluc3RydW1lbnRhdGlvbnMsIGtleSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgICAgIGlmIChzaGFyZWQuaXNTeW1ib2woa2V5KSA/IGJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpIDogaXNOb25UcmFja2FibGVLZXlzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIGlmICghaXNSZWFkb25seTIpIHtcbiAgICAgICAgdHJhY2sodGFyZ2V0LCBcImdldFwiLCBrZXkpO1xuICAgICAgfVxuICAgICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIGlmIChpc1JlZihyZXMpKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFVud3JhcCA9ICF0YXJnZXRJc0FycmF5IHx8ICFzaGFyZWQuaXNJbnRlZ2VyS2V5KGtleSk7XG4gICAgICAgIHJldHVybiBzaG91bGRVbndyYXAgPyByZXMudmFsdWUgOiByZXM7XG4gICAgICB9XG4gICAgICBpZiAoc2hhcmVkLmlzT2JqZWN0KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIGlzUmVhZG9ubHkyID8gcmVhZG9ubHkocmVzKSA6IHJlYWN0aXZlMyhyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9XG4gIHZhciBzZXQyID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNldHRlcigpO1xuICB2YXIgc2hhbGxvd1NldCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZXR0ZXIodHJ1ZSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZVNldHRlcihzaGFsbG93ID0gZmFsc2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gc2V0Myh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICBsZXQgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICAgIGlmICghc2hhbGxvdykge1xuICAgICAgICB2YWx1ZSA9IHRvUmF3Mih2YWx1ZSk7XG4gICAgICAgIG9sZFZhbHVlID0gdG9SYXcyKG9sZFZhbHVlKTtcbiAgICAgICAgaWYgKCFzaGFyZWQuaXNBcnJheSh0YXJnZXQpICYmIGlzUmVmKG9sZFZhbHVlKSAmJiAhaXNSZWYodmFsdWUpKSB7XG4gICAgICAgICAgb2xkVmFsdWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgaGFkS2V5ID0gc2hhcmVkLmlzQXJyYXkodGFyZ2V0KSAmJiBzaGFyZWQuaXNJbnRlZ2VyS2V5KGtleSkgPyBOdW1iZXIoa2V5KSA8IHRhcmdldC5sZW5ndGggOiBzaGFyZWQuaGFzT3duKHRhcmdldCwga2V5KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgaWYgKHRhcmdldCA9PT0gdG9SYXcyKHJlY2VpdmVyKSkge1xuICAgICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGFyZWQuaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgY29uc3QgaGFkS2V5ID0gc2hhcmVkLmhhc093bih0YXJnZXQsIGtleSk7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gaGFzKHRhcmdldCwga2V5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5oYXModGFyZ2V0LCBrZXkpO1xuICAgIGlmICghc2hhcmVkLmlzU3ltYm9sKGtleSkgfHwgIWJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpKSB7XG4gICAgICB0cmFjayh0YXJnZXQsIFwiaGFzXCIsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQpIHtcbiAgICB0cmFjayh0YXJnZXQsIFwiaXRlcmF0ZVwiLCBzaGFyZWQuaXNBcnJheSh0YXJnZXQpID8gXCJsZW5ndGhcIiA6IElURVJBVEVfS0VZKTtcbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG4gIH1cbiAgdmFyIG11dGFibGVIYW5kbGVycyA9IHtcbiAgICBnZXQ6IGdldDIsXG4gICAgc2V0OiBzZXQyLFxuICAgIGRlbGV0ZVByb3BlcnR5LFxuICAgIGhhcyxcbiAgICBvd25LZXlzXG4gIH07XG4gIHZhciByZWFkb25seUhhbmRsZXJzID0ge1xuICAgIGdldDogcmVhZG9ubHlHZXQsXG4gICAgc2V0KHRhcmdldCwga2V5KSB7XG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUud2FybihgU2V0IG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRhcmdldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRGVsZXRlIG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRhcmdldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIHZhciBzaGFsbG93UmVhY3RpdmVIYW5kbGVycyA9IHNoYXJlZC5leHRlbmQoe30sIG11dGFibGVIYW5kbGVycywge1xuICAgIGdldDogc2hhbGxvd0dldCxcbiAgICBzZXQ6IHNoYWxsb3dTZXRcbiAgfSk7XG4gIHZhciBzaGFsbG93UmVhZG9ubHlIYW5kbGVycyA9IHNoYXJlZC5leHRlbmQoe30sIHJlYWRvbmx5SGFuZGxlcnMsIHtcbiAgICBnZXQ6IHNoYWxsb3dSZWFkb25seUdldFxuICB9KTtcbiAgdmFyIHRvUmVhY3RpdmUgPSAodmFsdWUpID0+IHNoYXJlZC5pc09iamVjdCh2YWx1ZSkgPyByZWFjdGl2ZTModmFsdWUpIDogdmFsdWU7XG4gIHZhciB0b1JlYWRvbmx5ID0gKHZhbHVlKSA9PiBzaGFyZWQuaXNPYmplY3QodmFsdWUpID8gcmVhZG9ubHkodmFsdWUpIDogdmFsdWU7XG4gIHZhciB0b1NoYWxsb3cgPSAodmFsdWUpID0+IHZhbHVlO1xuICB2YXIgZ2V0UHJvdG8gPSAodikgPT4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih2KTtcbiAgZnVuY3Rpb24gZ2V0JDEodGFyZ2V0LCBrZXksIGlzUmVhZG9ubHkyID0gZmFsc2UsIGlzU2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0W1wiX192X3Jhd1wiXTtcbiAgICBjb25zdCByYXdUYXJnZXQgPSB0b1JhdzIodGFyZ2V0KTtcbiAgICBjb25zdCByYXdLZXkgPSB0b1JhdzIoa2V5KTtcbiAgICBpZiAoa2V5ICE9PSByYXdLZXkpIHtcbiAgICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgfVxuICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIHJhd0tleSk7XG4gICAgY29uc3Qge2hhczogaGFzMn0gPSBnZXRQcm90byhyYXdUYXJnZXQpO1xuICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5MiA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCBrZXkpKSB7XG4gICAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KGtleSkpO1xuICAgIH0gZWxzZSBpZiAoaGFzMi5jYWxsKHJhd1RhcmdldCwgcmF3S2V5KSkge1xuICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChyYXdLZXkpKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gcmF3VGFyZ2V0KSB7XG4gICAgICB0YXJnZXQuZ2V0KGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhcyQxKGtleSwgaXNSZWFkb25seTIgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXCJfX3ZfcmF3XCJdO1xuICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3Mih0YXJnZXQpO1xuICAgIGNvbnN0IHJhd0tleSA9IHRvUmF3MihrZXkpO1xuICAgIGlmIChrZXkgIT09IHJhd0tleSkge1xuICAgICAgIWlzUmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgICB9XG4gICAgIWlzUmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwgcmF3S2V5KTtcbiAgICByZXR1cm4ga2V5ID09PSByYXdLZXkgPyB0YXJnZXQuaGFzKGtleSkgOiB0YXJnZXQuaGFzKGtleSkgfHwgdGFyZ2V0LmhhcyhyYXdLZXkpO1xuICB9XG4gIGZ1bmN0aW9uIHNpemUodGFyZ2V0LCBpc1JlYWRvbmx5MiA9IGZhbHNlKSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0W1wiX192X3Jhd1wiXTtcbiAgICAhaXNSZWFkb25seTIgJiYgdHJhY2sodG9SYXcyKHRhcmdldCksIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgXCJzaXplXCIsIHRhcmdldCk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSB0b1JhdzIodmFsdWUpO1xuICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3Mih0aGlzKTtcbiAgICBjb25zdCBwcm90byA9IGdldFByb3RvKHRhcmdldCk7XG4gICAgY29uc3QgaGFkS2V5ID0gcHJvdG8uaGFzLmNhbGwodGFyZ2V0LCB2YWx1ZSk7XG4gICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgIHRhcmdldC5hZGQodmFsdWUpO1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIHZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIHNldCQxKGtleSwgdmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRvUmF3Mih2YWx1ZSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcyKHRoaXMpO1xuICAgIGNvbnN0IHtoYXM6IGhhczIsIGdldDogZ2V0M30gPSBnZXRQcm90byh0YXJnZXQpO1xuICAgIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgIGlmICghaGFkS2V5KSB7XG4gICAgICBrZXkgPSB0b1JhdzIoa2V5KTtcbiAgICAgIGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KTtcbiAgICB9XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgIHRhcmdldC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCBrZXksIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNoYXJlZC5oYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgIHRyaWdnZXIodGFyZ2V0LCBcInNldFwiLCBrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZUVudHJ5KGtleSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3Mih0aGlzKTtcbiAgICBjb25zdCB7aGFzOiBoYXMyLCBnZXQ6IGdldDN9ID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgICBsZXQgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgICBpZiAoIWhhZEtleSkge1xuICAgICAga2V5ID0gdG9SYXcyKGtleSk7XG4gICAgICBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZFZhbHVlID0gZ2V0MyA/IGdldDMuY2FsbCh0YXJnZXQsIGtleSkgOiB2b2lkIDA7XG4gICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmRlbGV0ZShrZXkpO1xuICAgIGlmIChoYWRLZXkpIHtcbiAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImRlbGV0ZVwiLCBrZXksIHZvaWQgMCwgb2xkVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3Mih0aGlzKTtcbiAgICBjb25zdCBoYWRJdGVtcyA9IHRhcmdldC5zaXplICE9PSAwO1xuICAgIGNvbnN0IG9sZFRhcmdldCA9IHNoYXJlZC5pc01hcCh0YXJnZXQpID8gbmV3IE1hcCh0YXJnZXQpIDogbmV3IFNldCh0YXJnZXQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRhcmdldC5jbGVhcigpO1xuICAgIGlmIChoYWRJdGVtcykge1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiY2xlYXJcIiwgdm9pZCAwLCB2b2lkIDAsIG9sZFRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlRm9yRWFjaChpc1JlYWRvbmx5MiwgaXNTaGFsbG93KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVkID0gdGhpcztcbiAgICAgIGNvbnN0IHRhcmdldCA9IG9ic2VydmVkW1wiX192X3Jhd1wiXTtcbiAgICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3Mih0YXJnZXQpO1xuICAgICAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkyID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgICAhaXNSZWFkb25seTIgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgSVRFUkFURV9LRVkpO1xuICAgICAgcmV0dXJuIHRhcmdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHdyYXAodmFsdWUpLCB3cmFwKGtleSksIG9ic2VydmVkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBpc1JlYWRvbmx5MiwgaXNTaGFsbG93KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXCJfX3ZfcmF3XCJdO1xuICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcyKHRhcmdldCk7XG4gICAgICBjb25zdCB0YXJnZXRJc01hcCA9IHNoYXJlZC5pc01hcChyYXdUYXJnZXQpO1xuICAgICAgY29uc3QgaXNQYWlyID0gbWV0aG9kID09PSBcImVudHJpZXNcIiB8fCBtZXRob2QgPT09IFN5bWJvbC5pdGVyYXRvciAmJiB0YXJnZXRJc01hcDtcbiAgICAgIGNvbnN0IGlzS2V5T25seSA9IG1ldGhvZCA9PT0gXCJrZXlzXCIgJiYgdGFyZ2V0SXNNYXA7XG4gICAgICBjb25zdCBpbm5lckl0ZXJhdG9yID0gdGFyZ2V0W21ldGhvZF0oLi4uYXJncyk7XG4gICAgICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seTIgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaXRlcmF0ZVwiLCBpc0tleU9ubHkgPyBNQVBfS0VZX0lURVJBVEVfS0VZIDogSVRFUkFURV9LRVkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICBjb25zdCB7dmFsdWUsIGRvbmV9ID0gaW5uZXJJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgcmV0dXJuIGRvbmUgPyB7dmFsdWUsIGRvbmV9IDoge1xuICAgICAgICAgICAgdmFsdWU6IGlzUGFpciA/IFt3cmFwKHZhbHVlWzBdKSwgd3JhcCh2YWx1ZVsxXSldIDogd3JhcCh2YWx1ZSksXG4gICAgICAgICAgICBkb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVSZWFkb25seU1ldGhvZCh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYXJnc1swXSA/IGBvbiBrZXkgXCIke2FyZ3NbMF19XCIgYCA6IGBgO1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hhcmVkLmNhcGl0YWxpemUodHlwZSl9IG9wZXJhdGlvbiAke2tleX1mYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0b1JhdzIodGhpcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZGVsZXRlXCIgPyBmYWxzZSA6IHRoaXM7XG4gICAgfTtcbiAgfVxuICB2YXIgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgIH0sXG4gICAgaGFzOiBoYXMkMSxcbiAgICBhZGQsXG4gICAgc2V0OiBzZXQkMSxcbiAgICBkZWxldGU6IGRlbGV0ZUVudHJ5LFxuICAgIGNsZWFyLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2goZmFsc2UsIGZhbHNlKVxuICB9O1xuICB2YXIgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzKTtcbiAgICB9LFxuICAgIGhhczogaGFzJDEsXG4gICAgYWRkLFxuICAgIHNldDogc2V0JDEsXG4gICAgZGVsZXRlOiBkZWxldGVFbnRyeSxcbiAgICBjbGVhcixcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCB0cnVlKVxuICB9O1xuICB2YXIgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBoYXMkMS5jYWxsKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBhZGQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFwiYWRkXCIpLFxuICAgIHNldDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJzZXRcIiksXG4gICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImRlbGV0ZVwiKSxcbiAgICBjbGVhcjogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJjbGVhclwiKSxcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKHRydWUsIGZhbHNlKVxuICB9O1xuICB2YXIgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCB0cnVlLCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gaGFzJDEuY2FsbCh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgYWRkOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImFkZFwiKSxcbiAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFwic2V0XCIpLFxuICAgIGRlbGV0ZTogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJkZWxldGVcIiksXG4gICAgY2xlYXI6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFwiY2xlYXJcIiksXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaCh0cnVlLCB0cnVlKVxuICB9O1xuICB2YXIgaXRlcmF0b3JNZXRob2RzID0gW1wia2V5c1wiLCBcInZhbHVlc1wiLCBcImVudHJpZXNcIiwgU3ltYm9sLml0ZXJhdG9yXTtcbiAgaXRlcmF0b3JNZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgIG11dGFibGVJbnN0cnVtZW50YXRpb25zW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGZhbHNlLCBmYWxzZSk7XG4gICAgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIHRydWUsIGZhbHNlKTtcbiAgICBzaGFsbG93SW5zdHJ1bWVudGF0aW9uc1ttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBmYWxzZSwgdHJ1ZSk7XG4gICAgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uc1ttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCB0cnVlLCB0cnVlKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihpc1JlYWRvbmx5Miwgc2hhbGxvdykge1xuICAgIGNvbnN0IGluc3RydW1lbnRhdGlvbnMgPSBzaGFsbG93ID8gaXNSZWFkb25seTIgPyBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIDogc2hhbGxvd0luc3RydW1lbnRhdGlvbnMgOiBpc1JlYWRvbmx5MiA/IHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IG11dGFibGVJbnN0cnVtZW50YXRpb25zO1xuICAgIHJldHVybiAodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHtcbiAgICAgICAgcmV0dXJuICFpc1JlYWRvbmx5MjtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgICAgcmV0dXJuIGlzUmVhZG9ubHkyO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVmbGVjdC5nZXQoc2hhcmVkLmhhc093bihpbnN0cnVtZW50YXRpb25zLCBrZXkpICYmIGtleSBpbiB0YXJnZXQgPyBpbnN0cnVtZW50YXRpb25zIDogdGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgICB9O1xuICB9XG4gIHZhciBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICAgIGdldDogY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGZhbHNlLCBmYWxzZSlcbiAgfTtcbiAgdmFyIHNoYWxsb3dDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gICAgZ2V0OiBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoZmFsc2UsIHRydWUpXG4gIH07XG4gIHZhciByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgICBnZXQ6IGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcih0cnVlLCBmYWxzZSlcbiAgfTtcbiAgdmFyIHNoYWxsb3dSZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgICBnZXQ6IGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcih0cnVlLCB0cnVlKVxuICB9O1xuICBmdW5jdGlvbiBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSkge1xuICAgIGNvbnN0IHJhd0tleSA9IHRvUmF3MihrZXkpO1xuICAgIGlmIChyYXdLZXkgIT09IGtleSAmJiBoYXMyLmNhbGwodGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2hhcmVkLnRvUmF3VHlwZSh0YXJnZXQpO1xuICAgICAgY29uc29sZS53YXJuKGBSZWFjdGl2ZSAke3R5cGV9IGNvbnRhaW5zIGJvdGggdGhlIHJhdyBhbmQgcmVhY3RpdmUgdmVyc2lvbnMgb2YgdGhlIHNhbWUgb2JqZWN0JHt0eXBlID09PSBgTWFwYCA/IGAgYXMga2V5c2AgOiBgYH0sIHdoaWNoIGNhbiBsZWFkIHRvIGluY29uc2lzdGVuY2llcy4gQXZvaWQgZGlmZmVyZW50aWF0aW5nIGJldHdlZW4gdGhlIHJhdyBhbmQgcmVhY3RpdmUgdmVyc2lvbnMgb2YgYW4gb2JqZWN0IGFuZCBvbmx5IHVzZSB0aGUgcmVhY3RpdmUgdmVyc2lvbiBpZiBwb3NzaWJsZS5gKTtcbiAgICB9XG4gIH1cbiAgdmFyIHJlYWN0aXZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHNoYWxsb3dSZWFjdGl2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciByZWFkb25seU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBzaGFsbG93UmVhZG9ubHlNYXAgPSBuZXcgV2Vha01hcCgpO1xuICBmdW5jdGlvbiB0YXJnZXRUeXBlTWFwKHJhd1R5cGUpIHtcbiAgICBzd2l0Y2ggKHJhd1R5cGUpIHtcbiAgICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIGNhc2UgXCJNYXBcIjpcbiAgICAgIGNhc2UgXCJTZXRcIjpcbiAgICAgIGNhc2UgXCJXZWFrTWFwXCI6XG4gICAgICBjYXNlIFwiV2Vha1NldFwiOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRUYXJnZXRUeXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlW1wiX192X3NraXBcIl0gfHwgIU9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpID8gMCA6IHRhcmdldFR5cGVNYXAoc2hhcmVkLnRvUmF3VHlwZSh2YWx1ZSkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlYWN0aXZlMyh0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldFtcIl9fdl9pc1JlYWRvbmx5XCJdKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCBmYWxzZSwgbXV0YWJsZUhhbmRsZXJzLCBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzLCByZWFjdGl2ZU1hcCk7XG4gIH1cbiAgZnVuY3Rpb24gc2hhbGxvd1JlYWN0aXZlKHRhcmdldCkge1xuICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGZhbHNlLCBzaGFsbG93UmVhY3RpdmVIYW5kbGVycywgc2hhbGxvd0NvbGxlY3Rpb25IYW5kbGVycywgc2hhbGxvd1JlYWN0aXZlTWFwKTtcbiAgfVxuICBmdW5jdGlvbiByZWFkb25seSh0YXJnZXQpIHtcbiAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCB0cnVlLCByZWFkb25seUhhbmRsZXJzLCByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycywgcmVhZG9ubHlNYXApO1xuICB9XG4gIGZ1bmN0aW9uIHNoYWxsb3dSZWFkb25seSh0YXJnZXQpIHtcbiAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCB0cnVlLCBzaGFsbG93UmVhZG9ubHlIYW5kbGVycywgc2hhbGxvd1JlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzLCBzaGFsbG93UmVhZG9ubHlNYXApO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgaXNSZWFkb25seTIsIGJhc2VIYW5kbGVycywgY29sbGVjdGlvbkhhbmRsZXJzLCBwcm94eU1hcCkge1xuICAgIGlmICghc2hhcmVkLmlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS53YXJuKGB2YWx1ZSBjYW5ub3QgYmUgbWFkZSByZWFjdGl2ZTogJHtTdHJpbmcodGFyZ2V0KX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGlmICh0YXJnZXRbXCJfX3ZfcmF3XCJdICYmICEoaXNSZWFkb25seTIgJiYgdGFyZ2V0W1wiX192X2lzUmVhY3RpdmVcIl0pKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICBjb25zdCBleGlzdGluZ1Byb3h5ID0gcHJveHlNYXAuZ2V0KHRhcmdldCk7XG4gICAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICAgIHJldHVybiBleGlzdGluZ1Byb3h5O1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRUeXBlID0gZ2V0VGFyZ2V0VHlwZSh0YXJnZXQpO1xuICAgIGlmICh0YXJnZXRUeXBlID09PSAwKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsIHRhcmdldFR5cGUgPT09IDIgPyBjb2xsZWN0aW9uSGFuZGxlcnMgOiBiYXNlSGFuZGxlcnMpO1xuICAgIHByb3h5TWFwLnNldCh0YXJnZXQsIHByb3h5KTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH1cbiAgZnVuY3Rpb24gaXNSZWFjdGl2ZTIodmFsdWUpIHtcbiAgICBpZiAoaXNSZWFkb25seSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBpc1JlYWN0aXZlMih2YWx1ZVtcIl9fdl9yYXdcIl0pO1xuICAgIH1cbiAgICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWVbXCJfX3ZfaXNSZWFjdGl2ZVwiXSk7XG4gIH1cbiAgZnVuY3Rpb24gaXNSZWFkb25seSh2YWx1ZSkge1xuICAgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZVtcIl9fdl9pc1JlYWRvbmx5XCJdKTtcbiAgfVxuICBmdW5jdGlvbiBpc1Byb3h5KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUmVhY3RpdmUyKHZhbHVlKSB8fCBpc1JlYWRvbmx5KHZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiB0b1JhdzIob2JzZXJ2ZWQpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZWQgJiYgdG9SYXcyKG9ic2VydmVkW1wiX192X3Jhd1wiXSkgfHwgb2JzZXJ2ZWQ7XG4gIH1cbiAgZnVuY3Rpb24gbWFya1Jhdyh2YWx1ZSkge1xuICAgIHNoYXJlZC5kZWYodmFsdWUsIFwiX192X3NraXBcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBjb252ZXJ0ID0gKHZhbCkgPT4gc2hhcmVkLmlzT2JqZWN0KHZhbCkgPyByZWFjdGl2ZTModmFsKSA6IHZhbDtcbiAgZnVuY3Rpb24gaXNSZWYocikge1xuICAgIHJldHVybiBCb29sZWFuKHIgJiYgci5fX3ZfaXNSZWYgPT09IHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlZih2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVSZWYodmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIHNoYWxsb3dSZWYodmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlUmVmKHZhbHVlLCB0cnVlKTtcbiAgfVxuICB2YXIgUmVmSW1wbCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihfcmF3VmFsdWUsIF9zaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3Jhd1ZhbHVlID0gX3Jhd1ZhbHVlO1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IF9zaGFsbG93O1xuICAgICAgdGhpcy5fX3ZfaXNSZWYgPSB0cnVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSBfc2hhbGxvdyA/IF9yYXdWYWx1ZSA6IGNvbnZlcnQoX3Jhd1ZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgdHJhY2sodG9SYXcyKHRoaXMpLCBcImdldFwiLCBcInZhbHVlXCIpO1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUobmV3VmFsKSB7XG4gICAgICBpZiAoc2hhcmVkLmhhc0NoYW5nZWQodG9SYXcyKG5ld1ZhbCksIHRoaXMuX3Jhd1ZhbHVlKSkge1xuICAgICAgICB0aGlzLl9yYXdWYWx1ZSA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9zaGFsbG93ID8gbmV3VmFsIDogY29udmVydChuZXdWYWwpO1xuICAgICAgICB0cmlnZ2VyKHRvUmF3Mih0aGlzKSwgXCJzZXRcIiwgXCJ2YWx1ZVwiLCBuZXdWYWwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlUmVmKHJhd1ZhbHVlLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICBpZiAoaXNSZWYocmF3VmFsdWUpKSB7XG4gICAgICByZXR1cm4gcmF3VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVmSW1wbChyYXdWYWx1ZSwgc2hhbGxvdyk7XG4gIH1cbiAgZnVuY3Rpb24gdHJpZ2dlclJlZihyZWYyKSB7XG4gICAgdHJpZ2dlcih0b1JhdzIocmVmMiksIFwic2V0XCIsIFwidmFsdWVcIiwgcmVmMi52YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gdW5yZWYocmVmMikge1xuICAgIHJldHVybiBpc1JlZihyZWYyKSA/IHJlZjIudmFsdWUgOiByZWYyO1xuICB9XG4gIHZhciBzaGFsbG93VW53cmFwSGFuZGxlcnMgPSB7XG4gICAgZ2V0OiAodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSA9PiB1bnJlZihSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpKSxcbiAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgICAgaWYgKGlzUmVmKG9sZFZhbHVlKSAmJiAhaXNSZWYodmFsdWUpKSB7XG4gICAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gcHJveHlSZWZzKG9iamVjdFdpdGhSZWZzKSB7XG4gICAgcmV0dXJuIGlzUmVhY3RpdmUyKG9iamVjdFdpdGhSZWZzKSA/IG9iamVjdFdpdGhSZWZzIDogbmV3IFByb3h5KG9iamVjdFdpdGhSZWZzLCBzaGFsbG93VW53cmFwSGFuZGxlcnMpO1xuICB9XG4gIHZhciBDdXN0b21SZWZJbXBsID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGZhY3RvcnkpIHtcbiAgICAgIHRoaXMuX192X2lzUmVmID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHtnZXQ6IGdldDMsIHNldDogc2V0M30gPSBmYWN0b3J5KCgpID0+IHRyYWNrKHRoaXMsIFwiZ2V0XCIsIFwidmFsdWVcIiksICgpID0+IHRyaWdnZXIodGhpcywgXCJzZXRcIiwgXCJ2YWx1ZVwiKSk7XG4gICAgICB0aGlzLl9nZXQgPSBnZXQzO1xuICAgICAgdGhpcy5fc2V0ID0gc2V0MztcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldCgpO1xuICAgIH1cbiAgICBzZXQgdmFsdWUobmV3VmFsKSB7XG4gICAgICB0aGlzLl9zZXQobmV3VmFsKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGN1c3RvbVJlZihmYWN0b3J5KSB7XG4gICAgcmV0dXJuIG5ldyBDdXN0b21SZWZJbXBsKGZhY3RvcnkpO1xuICB9XG4gIGZ1bmN0aW9uIHRvUmVmcyhvYmplY3QpIHtcbiAgICBpZiAoIWlzUHJveHkob2JqZWN0KSkge1xuICAgICAgY29uc29sZS53YXJuKGB0b1JlZnMoKSBleHBlY3RzIGEgcmVhY3RpdmUgb2JqZWN0IGJ1dCByZWNlaXZlZCBhIHBsYWluIG9uZS5gKTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gc2hhcmVkLmlzQXJyYXkob2JqZWN0KSA/IG5ldyBBcnJheShvYmplY3QubGVuZ3RoKSA6IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgcmV0W2tleV0gPSB0b1JlZihvYmplY3QsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgdmFyIE9iamVjdFJlZkltcGwgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoX29iamVjdCwgX2tleSkge1xuICAgICAgdGhpcy5fb2JqZWN0ID0gX29iamVjdDtcbiAgICAgIHRoaXMuX2tleSA9IF9rZXk7XG4gICAgICB0aGlzLl9fdl9pc1JlZiA9IHRydWU7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RbdGhpcy5fa2V5XTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fb2JqZWN0W3RoaXMuX2tleV0gPSBuZXdWYWw7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiB0b1JlZihvYmplY3QsIGtleSkge1xuICAgIHJldHVybiBpc1JlZihvYmplY3Rba2V5XSkgPyBvYmplY3Rba2V5XSA6IG5ldyBPYmplY3RSZWZJbXBsKG9iamVjdCwga2V5KTtcbiAgfVxuICB2YXIgQ29tcHV0ZWRSZWZJbXBsID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGdldHRlciwgX3NldHRlciwgaXNSZWFkb25seTIpIHtcbiAgICAgIHRoaXMuX3NldHRlciA9IF9zZXR0ZXI7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICB0aGlzLl9fdl9pc1JlZiA9IHRydWU7XG4gICAgICB0aGlzLmVmZmVjdCA9IGVmZmVjdDMoZ2V0dGVyLCB7XG4gICAgICAgIGxhenk6IHRydWUsXG4gICAgICAgIHNjaGVkdWxlcjogKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyaWdnZXIodG9SYXcyKHRoaXMpLCBcInNldFwiLCBcInZhbHVlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzW1wiX192X2lzUmVhZG9ubHlcIl0gPSBpc1JlYWRvbmx5MjtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgY29uc3Qgc2VsZjIgPSB0b1JhdzIodGhpcyk7XG4gICAgICBpZiAoc2VsZjIuX2RpcnR5KSB7XG4gICAgICAgIHNlbGYyLl92YWx1ZSA9IHRoaXMuZWZmZWN0KCk7XG4gICAgICAgIHNlbGYyLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdHJhY2soc2VsZjIsIFwiZ2V0XCIsIFwidmFsdWVcIik7XG4gICAgICByZXR1cm4gc2VsZjIuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuX3NldHRlcihuZXdWYWx1ZSk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBjb21wdXRlZChnZXR0ZXJPck9wdGlvbnMpIHtcbiAgICBsZXQgZ2V0dGVyO1xuICAgIGxldCBzZXR0ZXI7XG4gICAgaWYgKHNoYXJlZC5pc0Z1bmN0aW9uKGdldHRlck9yT3B0aW9ucykpIHtcbiAgICAgIGdldHRlciA9IGdldHRlck9yT3B0aW9ucztcbiAgICAgIHNldHRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiV3JpdGUgb3BlcmF0aW9uIGZhaWxlZDogY29tcHV0ZWQgdmFsdWUgaXMgcmVhZG9ubHlcIik7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXR0ZXIgPSBnZXR0ZXJPck9wdGlvbnMuZ2V0O1xuICAgICAgc2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zLnNldDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb21wdXRlZFJlZkltcGwoZ2V0dGVyLCBzZXR0ZXIsIHNoYXJlZC5pc0Z1bmN0aW9uKGdldHRlck9yT3B0aW9ucykgfHwgIWdldHRlck9yT3B0aW9ucy5zZXQpO1xuICB9XG4gIGV4cG9ydHMuSVRFUkFURV9LRVkgPSBJVEVSQVRFX0tFWTtcbiAgZXhwb3J0cy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICBleHBvcnRzLmN1c3RvbVJlZiA9IGN1c3RvbVJlZjtcbiAgZXhwb3J0cy5lZmZlY3QgPSBlZmZlY3QzO1xuICBleHBvcnRzLmVuYWJsZVRyYWNraW5nID0gZW5hYmxlVHJhY2tpbmc7XG4gIGV4cG9ydHMuaXNQcm94eSA9IGlzUHJveHk7XG4gIGV4cG9ydHMuaXNSZWFjdGl2ZSA9IGlzUmVhY3RpdmUyO1xuICBleHBvcnRzLmlzUmVhZG9ubHkgPSBpc1JlYWRvbmx5O1xuICBleHBvcnRzLmlzUmVmID0gaXNSZWY7XG4gIGV4cG9ydHMubWFya1JhdyA9IG1hcmtSYXc7XG4gIGV4cG9ydHMucGF1c2VUcmFja2luZyA9IHBhdXNlVHJhY2tpbmc7XG4gIGV4cG9ydHMucHJveHlSZWZzID0gcHJveHlSZWZzO1xuICBleHBvcnRzLnJlYWN0aXZlID0gcmVhY3RpdmUzO1xuICBleHBvcnRzLnJlYWRvbmx5ID0gcmVhZG9ubHk7XG4gIGV4cG9ydHMucmVmID0gcmVmO1xuICBleHBvcnRzLnJlc2V0VHJhY2tpbmcgPSByZXNldFRyYWNraW5nO1xuICBleHBvcnRzLnNoYWxsb3dSZWFjdGl2ZSA9IHNoYWxsb3dSZWFjdGl2ZTtcbiAgZXhwb3J0cy5zaGFsbG93UmVhZG9ubHkgPSBzaGFsbG93UmVhZG9ubHk7XG4gIGV4cG9ydHMuc2hhbGxvd1JlZiA9IHNoYWxsb3dSZWY7XG4gIGV4cG9ydHMuc3RvcCA9IHN0b3AyO1xuICBleHBvcnRzLnRvUmF3ID0gdG9SYXcyO1xuICBleHBvcnRzLnRvUmVmID0gdG9SZWY7XG4gIGV4cG9ydHMudG9SZWZzID0gdG9SZWZzO1xuICBleHBvcnRzLnRyYWNrID0gdHJhY2s7XG4gIGV4cG9ydHMudHJpZ2dlciA9IHRyaWdnZXI7XG4gIGV4cG9ydHMudHJpZ2dlclJlZiA9IHRyaWdnZXJSZWY7XG4gIGV4cG9ydHMudW5yZWYgPSB1bnJlZjtcbn0pO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9yZWFjdGl2aXR5L2luZGV4LmpzXG52YXIgcmVxdWlyZV9yZWFjdGl2aXR5ID0gX19jb21tb25KUygoZXhwb3J0cywgbW9kdWxlKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoZmFsc2UpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlX3JlYWN0aXZpdHlfY2pzKCk7XG4gIH1cbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc2NoZWR1bGVyLmpzXG52YXIgZmx1c2hQZW5kaW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBxdWV1ZSA9IFtdO1xuZnVuY3Rpb24gc2NoZWR1bGVyKGNhbGxiYWNrKSB7XG4gIHF1ZXVlSm9iKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlSm9iKGpvYikge1xuICBpZiAoIXF1ZXVlLmluY2x1ZGVzKGpvYikpXG4gICAgcXVldWUucHVzaChqb2IpO1xuICBxdWV1ZUZsdXNoKCk7XG59XG5mdW5jdGlvbiBxdWV1ZUZsdXNoKCkge1xuICBpZiAoIWZsdXNoaW5nICYmICFmbHVzaFBlbmRpbmcpIHtcbiAgICBmbHVzaFBlbmRpbmcgPSB0cnVlO1xuICAgIHF1ZXVlTWljcm90YXNrKGZsdXNoSm9icyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZsdXNoSm9icygpIHtcbiAgZmx1c2hQZW5kaW5nID0gZmFsc2U7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldKCk7XG4gIH1cbiAgcXVldWUubGVuZ3RoID0gMDtcbiAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3JlYWN0aXZpdHkuanNcbnZhciByZWFjdGl2ZTtcbnZhciBlZmZlY3Q7XG52YXIgcmVsZWFzZTtcbnZhciByYXc7XG52YXIgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcoY2FsbGJhY2spIHtcbiAgc2hvdWxkU2NoZWR1bGUgPSBmYWxzZTtcbiAgY2FsbGJhY2soKTtcbiAgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xufVxuZnVuY3Rpb24gc2V0UmVhY3Rpdml0eUVuZ2luZShlbmdpbmUpIHtcbiAgcmVhY3RpdmUgPSBlbmdpbmUucmVhY3RpdmU7XG4gIHJlbGVhc2UgPSBlbmdpbmUucmVsZWFzZTtcbiAgZWZmZWN0ID0gKGNhbGxiYWNrKSA9PiBlbmdpbmUuZWZmZWN0KGNhbGxiYWNrLCB7c2NoZWR1bGVyOiAodGFzaykgPT4ge1xuICAgIGlmIChzaG91bGRTY2hlZHVsZSkge1xuICAgICAgc2NoZWR1bGVyKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrKCk7XG4gICAgfVxuICB9fSk7XG4gIHJhdyA9IGVuZ2luZS5yYXc7XG59XG5mdW5jdGlvbiBvdmVycmlkZUVmZmVjdChvdmVycmlkZSkge1xuICBlZmZlY3QgPSBvdmVycmlkZTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCb3VuZEVmZmVjdChlbCkge1xuICBsZXQgY2xlYW51cCA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IHdyYXBwZWRFZmZlY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZWZmZWN0UmVmZXJlbmNlID0gZWZmZWN0KGNhbGxiYWNrKTtcbiAgICBpZiAoIWVsLl94X2VmZmVjdHMpIHtcbiAgICAgIGVsLl94X2VmZmVjdHMgPSBuZXcgU2V0KCk7XG4gICAgICBlbC5feF9ydW5FZmZlY3RzID0gKCkgPT4ge1xuICAgICAgICBlbC5feF9lZmZlY3RzLmZvckVhY2goKGkpID0+IGkoKSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbC5feF9lZmZlY3RzLmFkZChlZmZlY3RSZWZlcmVuY2UpO1xuICAgIGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICBpZiAoZWZmZWN0UmVmZXJlbmNlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGVsLl94X2VmZmVjdHMuZGVsZXRlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgICByZWxlYXNlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIFt3cmFwcGVkRWZmZWN0LCAoKSA9PiB7XG4gICAgY2xlYW51cCgpO1xuICB9XTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL211dGF0aW9uLmpzXG52YXIgb25BdHRyaWJ1dGVBZGRlZHMgPSBbXTtcbnZhciBvbkVsUmVtb3ZlZHMgPSBbXTtcbnZhciBvbkVsQWRkZWRzID0gW107XG5mdW5jdGlvbiBvbkVsQWRkZWQoY2FsbGJhY2spIHtcbiAgb25FbEFkZGVkcy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG9uRWxSZW1vdmVkKGNhbGxiYWNrKSB7XG4gIG9uRWxSZW1vdmVkcy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlc0FkZGVkKGNhbGxiYWNrKSB7XG4gIG9uQXR0cmlidXRlQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBuYW1lLCBjYWxsYmFjaykge1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzID0ge307XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0pXG4gICAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0gPSBbXTtcbiAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbGVhbnVwQXR0cmlidXRlcyhlbCwgbmFtZXMpIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICByZXR1cm47XG4gIE9iamVjdC5lbnRyaWVzKGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKG5hbWVzID09PSB2b2lkIDAgfHwgbmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGkpID0+IGkoKSk7XG4gICAgICBkZWxldGUgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV07XG4gICAgfVxuICB9KTtcbn1cbnZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9uTXV0YXRlKTtcbnZhciBjdXJyZW50bHlPYnNlcnZpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCkge1xuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7c3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZX0pO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gc3RvcE9ic2VydmluZ011dGF0aW9ucygpIHtcbiAgZmx1c2hPYnNlcnZlcigpO1xuICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xufVxudmFyIHJlY29yZFF1ZXVlID0gW107XG52YXIgd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSA9IGZhbHNlO1xuZnVuY3Rpb24gZmx1c2hPYnNlcnZlcigpIHtcbiAgcmVjb3JkUXVldWUgPSByZWNvcmRRdWV1ZS5jb25jYXQob2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIGlmIChyZWNvcmRRdWV1ZS5sZW5ndGggJiYgIXdpbGxQcm9jZXNzUmVjb3JkUXVldWUpIHtcbiAgICB3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlID0gdHJ1ZTtcbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICBwcm9jZXNzUmVjb3JkUXVldWUoKTtcbiAgICAgIHdpbGxQcm9jZXNzUmVjb3JkUXVldWUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc1JlY29yZFF1ZXVlKCkge1xuICBvbk11dGF0ZShyZWNvcmRRdWV1ZSk7XG4gIHJlY29yZFF1ZXVlLmxlbmd0aCA9IDA7XG59XG5mdW5jdGlvbiBtdXRhdGVEb20oY2FsbGJhY2spIHtcbiAgaWYgKCFjdXJyZW50bHlPYnNlcnZpbmcpXG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG52YXIgaXNDb2xsZWN0aW5nID0gZmFsc2U7XG52YXIgZGVmZXJyZWRNdXRhdGlvbnMgPSBbXTtcbmZ1bmN0aW9uIGRlZmVyTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZmx1c2hBbmRTdG9wRGVmZXJyaW5nTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbiAgb25NdXRhdGUoZGVmZXJyZWRNdXRhdGlvbnMpO1xuICBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xufVxuZnVuY3Rpb24gb25NdXRhdGUobXV0YXRpb25zKSB7XG4gIGlmIChpc0NvbGxlY3RpbmcpIHtcbiAgICBkZWZlcnJlZE11dGF0aW9ucyA9IGRlZmVycmVkTXV0YXRpb25zLmNvbmNhdChtdXRhdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYWRkZWROb2RlcyA9IFtdO1xuICBsZXQgcmVtb3ZlZE5vZGVzID0gW107XG4gIGxldCBhZGRlZEF0dHJpYnV0ZXMgPSBuZXcgTWFwKCk7XG4gIGxldCByZW1vdmVkQXR0cmlidXRlcyA9IG5ldyBNYXAoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobXV0YXRpb25zW2ldLnRhcmdldC5feF9pZ25vcmVNdXRhdGlvbk9ic2VydmVyKVxuICAgICAgY29udGludWU7XG4gICAgaWYgKG11dGF0aW9uc1tpXS50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAxICYmIGFkZGVkTm9kZXMucHVzaChub2RlKSk7XG4gICAgICBtdXRhdGlvbnNbaV0ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgcmVtb3ZlZE5vZGVzLnB1c2gobm9kZSkpO1xuICAgIH1cbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICBsZXQgZWwgPSBtdXRhdGlvbnNbaV0udGFyZ2V0O1xuICAgICAgbGV0IG5hbWUgPSBtdXRhdGlvbnNbaV0uYXR0cmlidXRlTmFtZTtcbiAgICAgIGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uc1tpXS5vbGRWYWx1ZTtcbiAgICAgIGxldCBhZGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKHtuYW1lLCB2YWx1ZTogZWwuZ2V0QXR0cmlidXRlKG5hbWUpfSk7XG4gICAgICB9O1xuICAgICAgbGV0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFyZW1vdmVkQXR0cmlidXRlcy5oYXMoZWwpKVxuICAgICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICByZW1vdmVkQXR0cmlidXRlcy5nZXQoZWwpLnB1c2gobmFtZSk7XG4gICAgICB9O1xuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShuYW1lKSAmJiBvbGRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBhZGQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBhZGQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW1vdmVkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRycywgZWwpID0+IHtcbiAgICBjbGVhbnVwQXR0cmlidXRlcyhlbCwgYXR0cnMpO1xuICB9KTtcbiAgYWRkZWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJzLCBlbCkgPT4ge1xuICAgIG9uQXR0cmlidXRlQWRkZWRzLmZvckVhY2goKGkpID0+IGkoZWwsIGF0dHJzKSk7XG4gIH0pO1xuICBmb3IgKGxldCBub2RlIG9mIGFkZGVkTm9kZXMpIHtcbiAgICBpZiAocmVtb3ZlZE5vZGVzLmluY2x1ZGVzKG5vZGUpKVxuICAgICAgY29udGludWU7XG4gICAgb25FbEFkZGVkcy5mb3JFYWNoKChpKSA9PiBpKG5vZGUpKTtcbiAgfVxuICBmb3IgKGxldCBub2RlIG9mIHJlbW92ZWROb2Rlcykge1xuICAgIGlmIChhZGRlZE5vZGVzLmluY2x1ZGVzKG5vZGUpKVxuICAgICAgY29udGludWU7XG4gICAgb25FbFJlbW92ZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICB9XG4gIGFkZGVkTm9kZXMgPSBudWxsO1xuICByZW1vdmVkTm9kZXMgPSBudWxsO1xuICBhZGRlZEF0dHJpYnV0ZXMgPSBudWxsO1xuICByZW1vdmVkQXR0cmlidXRlcyA9IG51bGw7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zY29wZS5qc1xuZnVuY3Rpb24gYWRkU2NvcGVUb05vZGUobm9kZSwgZGF0YTIsIHJlZmVyZW5jZU5vZGUpIHtcbiAgbm9kZS5feF9kYXRhU3RhY2sgPSBbZGF0YTIsIC4uLmNsb3Nlc3REYXRhU3RhY2socmVmZXJlbmNlTm9kZSB8fCBub2RlKV07XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbm9kZS5feF9kYXRhU3RhY2sgPSBub2RlLl94X2RhdGFTdGFjay5maWx0ZXIoKGkpID0+IGkgIT09IGRhdGEyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlZnJlc2hTY29wZShlbGVtZW50LCBzY29wZSkge1xuICBsZXQgZXhpc3RpbmdTY29wZSA9IGVsZW1lbnQuX3hfZGF0YVN0YWNrWzBdO1xuICBPYmplY3QuZW50cmllcyhzY29wZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgZXhpc3RpbmdTY29wZVtrZXldID0gdmFsdWU7XG4gIH0pO1xufVxuZnVuY3Rpb24gY2xvc2VzdERhdGFTdGFjayhub2RlKSB7XG4gIGlmIChub2RlLl94X2RhdGFTdGFjaylcbiAgICByZXR1cm4gbm9kZS5feF9kYXRhU3RhY2s7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5ob3N0KTtcbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gY2xvc2VzdERhdGFTdGFjayhub2RlLnBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm94aWVzKG9iamVjdHMpIHtcbiAgbGV0IHRoaXNQcm94eSA9IG5ldyBQcm94eSh7fSwge1xuICAgIG93bktleXM6ICgpID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQob2JqZWN0cy5mbGF0TWFwKChpKSA9PiBPYmplY3Qua2V5cyhpKSkpKTtcbiAgICB9LFxuICAgIGhhczogKHRhcmdldCwgbmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIG9iamVjdHMuc29tZSgob2JqKSA9PiBvYmouaGFzT3duUHJvcGVydHkobmFtZSkpO1xuICAgIH0sXG4gICAgZ2V0OiAodGFyZ2V0LCBuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gKG9iamVjdHMuZmluZCgob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBuYW1lKTtcbiAgICAgICAgICBpZiAoZGVzY3JpcHRvci5nZXQgJiYgZGVzY3JpcHRvci5nZXQuX3hfYWxyZWFkeUJvdW5kIHx8IGRlc2NyaXB0b3Iuc2V0ICYmIGRlc2NyaXB0b3Iuc2V0Ll94X2FscmVhZHlCb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoZGVzY3JpcHRvci5nZXQgfHwgZGVzY3JpcHRvci5zZXQpICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZSkge1xuICAgICAgICAgICAgbGV0IGdldHRlciA9IGRlc2NyaXB0b3IuZ2V0O1xuICAgICAgICAgICAgbGV0IHNldHRlciA9IGRlc2NyaXB0b3Iuc2V0O1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgIGdldHRlciA9IGdldHRlciAmJiBnZXR0ZXIuYmluZCh0aGlzUHJveHkpO1xuICAgICAgICAgICAgc2V0dGVyID0gc2V0dGVyICYmIHNldHRlci5iaW5kKHRoaXNQcm94eSk7XG4gICAgICAgICAgICBpZiAoZ2V0dGVyKVxuICAgICAgICAgICAgICBnZXR0ZXIuX3hfYWxyZWFkeUJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzZXR0ZXIpXG4gICAgICAgICAgICAgIHNldHRlci5feF9hbHJlYWR5Qm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgICAgICAgICAgICAuLi5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgZ2V0OiBnZXR0ZXIsXG4gICAgICAgICAgICAgIHNldDogc2V0dGVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgfHwge30pW25hbWVdO1xuICAgIH0sXG4gICAgc2V0OiAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IGNsb3Nlc3RPYmplY3RXaXRoS2V5ID0gb2JqZWN0cy5maW5kKChvYmopID0+IG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSk7XG4gICAgICBpZiAoY2xvc2VzdE9iamVjdFdpdGhLZXkpIHtcbiAgICAgICAgY2xvc2VzdE9iamVjdFdpdGhLZXlbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHNbb2JqZWN0cy5sZW5ndGggLSAxXVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRoaXNQcm94eTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2ludGVyY2VwdG9yLmpzXG5mdW5jdGlvbiBpbml0SW50ZXJjZXB0b3JzKGRhdGEyKSB7XG4gIGxldCBpc09iamVjdCA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwgIT09IG51bGw7XG4gIGxldCByZWN1cnNlID0gKG9iaiwgYmFzZVBhdGggPSBcIlwiKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGxldCBwYXRoID0gYmFzZVBhdGggPT09IFwiXCIgPyBrZXkgOiBgJHtiYXNlUGF0aH0uJHtrZXl9YDtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuX3hfaW50ZXJjZXB0b3IpIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZS5pbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSAhPT0gb2JqICYmICEodmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgIHJlY3Vyc2UodmFsdWUsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiByZWN1cnNlKGRhdGEyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdG9yKGNhbGxiYWNrLCBtdXRhdGVPYmogPSAoKSA9PiB7XG59KSB7XG4gIGxldCBvYmogPSB7XG4gICAgaW5pdGlhbFZhbHVlOiB2b2lkIDAsXG4gICAgX3hfaW50ZXJjZXB0b3I6IHRydWUsXG4gICAgaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5pbml0aWFsVmFsdWUsICgpID0+IGdldChkYXRhMiwgcGF0aCksICh2YWx1ZSkgPT4gc2V0KGRhdGEyLCBwYXRoLCB2YWx1ZSksIHBhdGgsIGtleSk7XG4gICAgfVxuICB9O1xuICBtdXRhdGVPYmoob2JqKTtcbiAgcmV0dXJuIChpbml0aWFsVmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIGluaXRpYWxWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBpbml0aWFsVmFsdWUgIT09IG51bGwgJiYgaW5pdGlhbFZhbHVlLl94X2ludGVyY2VwdG9yKSB7XG4gICAgICBsZXQgaW5pdGlhbGl6ZSA9IG9iai5pbml0aWFsaXplLmJpbmQob2JqKTtcbiAgICAgIG9iai5pbml0aWFsaXplID0gKGRhdGEyLCBwYXRoLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGlubmVyVmFsdWUgPSBpbml0aWFsVmFsdWUuaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgICAgb2JqLmluaXRpYWxWYWx1ZSA9IGlubmVyVmFsdWU7XG4gICAgICAgIHJldHVybiBpbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguc3BsaXQoXCIuXCIpLnJlZHVjZSgoY2FycnksIHNlZ21lbnQpID0+IGNhcnJ5W3NlZ21lbnRdLCBvYmopO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiKVxuICAgIHBhdGggPSBwYXRoLnNwbGl0KFwiLlwiKTtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKVxuICAgIG9ialtwYXRoWzBdXSA9IHZhbHVlO1xuICBlbHNlIGlmIChwYXRoLmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBlcnJvcjtcbiAgZWxzZSB7XG4gICAgaWYgKG9ialtwYXRoWzBdXSlcbiAgICAgIHJldHVybiBzZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgZWxzZSB7XG4gICAgICBvYmpbcGF0aFswXV0gPSB7fTtcbiAgICAgIHJldHVybiBzZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MuanNcbnZhciBtYWdpY3MgPSB7fTtcbmZ1bmN0aW9uIG1hZ2ljKG5hbWUsIGNhbGxiYWNrKSB7XG4gIG1hZ2ljc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0TWFnaWNzKG9iaiwgZWwpIHtcbiAgT2JqZWN0LmVudHJpZXMobWFnaWNzKS5mb3JFYWNoKChbbmFtZSwgY2FsbGJhY2tdKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgYCQke25hbWV9YCwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZWwsIHtBbHBpbmU6IGFscGluZV9kZWZhdWx0LCBpbnRlcmNlcHRvcn0pO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZXZhbHVhdG9yLmpzXG5mdW5jdGlvbiBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwgZXh0cmFzID0ge30pIHtcbiAgbGV0IHJlc3VsdDtcbiAgZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikoKHZhbHVlKSA9PiByZXN1bHQgPSB2YWx1ZSwgZXh0cmFzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlTGF0ZXIoLi4uYXJncykge1xuICByZXR1cm4gdGhlRXZhbHVhdG9yRnVuY3Rpb24oLi4uYXJncyk7XG59XG52YXIgdGhlRXZhbHVhdG9yRnVuY3Rpb24gPSBub3JtYWxFdmFsdWF0b3I7XG5mdW5jdGlvbiBzZXRFdmFsdWF0b3IobmV3RXZhbHVhdG9yKSB7XG4gIHRoZUV2YWx1YXRvckZ1bmN0aW9uID0gbmV3RXZhbHVhdG9yO1xufVxuZnVuY3Rpb24gbm9ybWFsRXZhbHVhdG9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGxldCBvdmVycmlkZGVuTWFnaWNzID0ge307XG4gIGluamVjdE1hZ2ljcyhvdmVycmlkZGVuTWFnaWNzLCBlbCk7XG4gIGxldCBkYXRhU3RhY2sgPSBbb3ZlcnJpZGRlbk1hZ2ljcywgLi4uY2xvc2VzdERhdGFTdGFjayhlbCldO1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGV4cHJlc3Npb24pO1xuICB9XG4gIGxldCBldmFsdWF0b3IgPSBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uKTtcbiAgcmV0dXJuIHRyeUNhdGNoLmJpbmQobnVsbCwgZWwsIGV4cHJlc3Npb24sIGV2YWx1YXRvcik7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGZ1bmMpIHtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwge3Njb3BlID0ge30sIHBhcmFtcyA9IFtdfSA9IHt9KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGZ1bmMuYXBwbHkobWVyZ2VQcm94aWVzKFtzY29wZSwgLi4uZGF0YVN0YWNrXSksIHBhcmFtcyk7XG4gICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgcmVzdWx0KTtcbiAgfTtcbn1cbnZhciBldmFsdWF0b3JNZW1vID0ge307XG5mdW5jdGlvbiBnZW5lcmF0ZUZ1bmN0aW9uRnJvbVN0cmluZyhleHByZXNzaW9uKSB7XG4gIGlmIChldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dKSB7XG4gICAgcmV0dXJuIGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl07XG4gIH1cbiAgbGV0IEFzeW5jRnVuY3Rpb24gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24oKSB7XG4gIH0pLmNvbnN0cnVjdG9yO1xuICBsZXQgcmlnaHRTaWRlU2FmZUV4cHJlc3Npb24gPSAvXltcXG5cXHNdKmlmLipcXCguKlxcKS8udGVzdChleHByZXNzaW9uKSB8fCAvXihsZXR8Y29uc3QpLy50ZXN0KGV4cHJlc3Npb24pID8gYCgoKSA9PiB7ICR7ZXhwcmVzc2lvbn0gfSkoKWAgOiBleHByZXNzaW9uO1xuICBsZXQgZnVuYyA9IG5ldyBBc3luY0Z1bmN0aW9uKFtcIl9fc2VsZlwiLCBcInNjb3BlXCJdLCBgd2l0aCAoc2NvcGUpIHsgX19zZWxmLnJlc3VsdCA9ICR7cmlnaHRTaWRlU2FmZUV4cHJlc3Npb259IH07IF9fc2VsZi5maW5pc2hlZCA9IHRydWU7IHJldHVybiBfX3NlbGYucmVzdWx0O2ApO1xuICBldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dID0gZnVuYztcbiAgcmV0dXJuIGZ1bmM7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uKSB7XG4gIGxldCBmdW5jID0gZ2VuZXJhdGVGdW5jdGlvbkZyb21TdHJpbmcoZXhwcmVzc2lvbik7XG4gIHJldHVybiAocmVjZWl2ZXIgPSAoKSA9PiB7XG4gIH0sIHtzY29wZSA9IHt9LCBwYXJhbXMgPSBbXX0gPSB7fSkgPT4ge1xuICAgIGZ1bmMucmVzdWx0ID0gdm9pZCAwO1xuICAgIGZ1bmMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgY29tcGxldGVTY29wZSA9IG1lcmdlUHJveGllcyhbc2NvcGUsIC4uLmRhdGFTdGFja10pO1xuICAgIGxldCBwcm9taXNlID0gZnVuYyhmdW5jLCBjb21wbGV0ZVNjb3BlKTtcbiAgICBpZiAoZnVuYy5maW5pc2hlZCkge1xuICAgICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgZnVuYy5yZXN1bHQsIGNvbXBsZXRlU2NvcGUsIHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHZhbHVlLCBzY29wZSwgcGFyYW1zKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxldCByZXN1bHQgPSB2YWx1ZS5hcHBseShzY29wZSwgcGFyYW1zKTtcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcmVzdWx0LnRoZW4oKGkpID0+IHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIGksIHNjb3BlLCBwYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjZWl2ZXIocmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVjZWl2ZXIodmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiB0cnlDYXRjaChlbCwgZXhwcmVzc2lvbiwgY2FsbGJhY2ssIC4uLmFyZ3MpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gY2FsbGJhY2soLi4uYXJncyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oYEFscGluZSBFeHByZXNzaW9uIEVycm9yOiAke2UubWVzc2FnZX1cblxuRXhwcmVzc2lvbjogXCIke2V4cHJlc3Npb259XCJcblxuYCwgZWwpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMuanNcbnZhciBwcmVmaXhBc1N0cmluZyA9IFwieC1cIjtcbmZ1bmN0aW9uIHByZWZpeChzdWJqZWN0ID0gXCJcIikge1xuICByZXR1cm4gcHJlZml4QXNTdHJpbmcgKyBzdWJqZWN0O1xufVxuZnVuY3Rpb24gc2V0UHJlZml4KG5ld1ByZWZpeCkge1xuICBwcmVmaXhBc1N0cmluZyA9IG5ld1ByZWZpeDtcbn1cbnZhciBkaXJlY3RpdmVIYW5kbGVycyA9IHt9O1xuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNhbGxiYWNrKSB7XG4gIGRpcmVjdGl2ZUhhbmRsZXJzW25hbWVdID0gY2FsbGJhY2s7XG59XG5mdW5jdGlvbiBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIGxldCB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCA9IHt9O1xuICBsZXQgZGlyZWN0aXZlczIgPSBBcnJheS5mcm9tKGF0dHJpYnV0ZXMpLm1hcCh0b1RyYW5zZm9ybWVkQXR0cmlidXRlcygobmV3TmFtZSwgb2xkTmFtZSkgPT4gdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXBbbmV3TmFtZV0gPSBvbGROYW1lKSkuZmlsdGVyKG91dE5vbkFscGluZUF0dHJpYnV0ZXMpLm1hcCh0b1BhcnNlZERpcmVjdGl2ZXModHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpKS5zb3J0KGJ5UHJpb3JpdHkpO1xuICByZXR1cm4gZGlyZWN0aXZlczIubWFwKChkaXJlY3RpdmUyKSA9PiB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNPbmx5KGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oYXR0cmlidXRlcykubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKCkpLmZpbHRlcigoYXR0cikgPT4gIW91dE5vbkFscGluZUF0dHJpYnV0ZXMoYXR0cikpO1xufVxudmFyIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSBmYWxzZTtcbnZhciBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzID0gbmV3IE1hcCgpO1xudmFyIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBTeW1ib2woKTtcbmZ1bmN0aW9uIGRlZmVySGFuZGxpbmdEaXJlY3RpdmVzKGNhbGxiYWNrKSB7XG4gIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSB0cnVlO1xuICBsZXQga2V5ID0gU3ltYm9sKCk7XG4gIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBrZXk7XG4gIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3Muc2V0KGtleSwgW10pO1xuICBsZXQgZmx1c2hIYW5kbGVycyA9ICgpID0+IHtcbiAgICB3aGlsZSAoZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoa2V5KS5sZW5ndGgpXG4gICAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChrZXkpLnNoaWZ0KCkoKTtcbiAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmRlbGV0ZShrZXkpO1xuICB9O1xuICBsZXQgc3RvcERlZmVycmluZyA9ICgpID0+IHtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID0gZmFsc2U7XG4gICAgZmx1c2hIYW5kbGVycygpO1xuICB9O1xuICBjYWxsYmFjayhmbHVzaEhhbmRsZXJzKTtcbiAgc3RvcERlZmVycmluZygpO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlSGFuZGxlcihlbCwgZGlyZWN0aXZlMikge1xuICBsZXQgbm9vcCA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IGhhbmRsZXIzID0gZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlMi50eXBlXSB8fCBub29wO1xuICBsZXQgY2xlYW51cHMgPSBbXTtcbiAgbGV0IGNsZWFudXAgPSAoY2FsbGJhY2spID0+IGNsZWFudXBzLnB1c2goY2FsbGJhY2spO1xuICBsZXQgW2VmZmVjdDMsIGNsZWFudXBFZmZlY3RdID0gZWxlbWVudEJvdW5kRWZmZWN0KGVsKTtcbiAgY2xlYW51cHMucHVzaChjbGVhbnVwRWZmZWN0KTtcbiAgbGV0IHV0aWxpdGllcyA9IHtcbiAgICBBbHBpbmU6IGFscGluZV9kZWZhdWx0LFxuICAgIGVmZmVjdDogZWZmZWN0MyxcbiAgICBjbGVhbnVwLFxuICAgIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIuYmluZChldmFsdWF0ZUxhdGVyLCBlbCksXG4gICAgZXZhbHVhdGU6IGV2YWx1YXRlLmJpbmQoZXZhbHVhdGUsIGVsKVxuICB9O1xuICBsZXQgZG9DbGVhbnVwID0gKCkgPT4gY2xlYW51cHMuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBkaXJlY3RpdmUyLm9yaWdpbmFsLCBkb0NsZWFudXApO1xuICBsZXQgZnVsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2lnbm9yZSB8fCBlbC5feF9pZ25vcmVTZWxmKVxuICAgICAgcmV0dXJuO1xuICAgIGhhbmRsZXIzLmlubGluZSAmJiBoYW5kbGVyMy5pbmxpbmUoZWwsIGRpcmVjdGl2ZTIsIHV0aWxpdGllcyk7XG4gICAgaGFuZGxlcjMgPSBoYW5kbGVyMy5iaW5kKGhhbmRsZXIzLCBlbCwgZGlyZWN0aXZlMiwgdXRpbGl0aWVzKTtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID8gZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoY3VycmVudEhhbmRsZXJTdGFja0tleSkucHVzaChoYW5kbGVyMykgOiBoYW5kbGVyMygpO1xuICB9O1xuICBmdWxsSGFuZGxlci5ydW5DbGVhbnVwcyA9IGRvQ2xlYW51cDtcbiAgcmV0dXJuIGZ1bGxIYW5kbGVyO1xufVxudmFyIHN0YXJ0aW5nV2l0aCA9IChzdWJqZWN0LCByZXBsYWNlbWVudCkgPT4gKHtuYW1lLCB2YWx1ZX0pID0+IHtcbiAgaWYgKG5hbWUuc3RhcnRzV2l0aChzdWJqZWN0KSlcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKHN1YmplY3QsIHJlcGxhY2VtZW50KTtcbiAgcmV0dXJuIHtuYW1lLCB2YWx1ZX07XG59O1xudmFyIGludG8gPSAoaSkgPT4gaTtcbmZ1bmN0aW9uIHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKHtuYW1lLCB2YWx1ZX0pID0+IHtcbiAgICBsZXQge25hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZX0gPSBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucmVkdWNlKChjYXJyeSwgdHJhbnNmb3JtKSA9PiB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGNhcnJ5KTtcbiAgICB9LCB7bmFtZSwgdmFsdWV9KTtcbiAgICBpZiAobmV3TmFtZSAhPT0gbmFtZSlcbiAgICAgIGNhbGxiYWNrKG5ld05hbWUsIG5hbWUpO1xuICAgIHJldHVybiB7bmFtZTogbmV3TmFtZSwgdmFsdWU6IG5ld1ZhbHVlfTtcbiAgfTtcbn1cbnZhciBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMgPSBbXTtcbmZ1bmN0aW9uIG1hcEF0dHJpYnV0ZXMoY2FsbGJhY2spIHtcbiAgYXR0cmlidXRlVHJhbnNmb3JtZXJzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb3V0Tm9uQWxwaW5lQXR0cmlidXRlcyh7bmFtZX0pIHtcbiAgcmV0dXJuIGFscGluZUF0dHJpYnV0ZVJlZ2V4KCkudGVzdChuYW1lKTtcbn1cbnZhciBhbHBpbmVBdHRyaWJ1dGVSZWdleCA9ICgpID0+IG5ldyBSZWdFeHAoYF4ke3ByZWZpeEFzU3RyaW5nfShbXjpeLl0rKVxcXFxiYCk7XG5mdW5jdGlvbiB0b1BhcnNlZERpcmVjdGl2ZXModHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpIHtcbiAgcmV0dXJuICh7bmFtZSwgdmFsdWV9KSA9PiB7XG4gICAgbGV0IHR5cGVNYXRjaCA9IG5hbWUubWF0Y2goYWxwaW5lQXR0cmlidXRlUmVnZXgoKSk7XG4gICAgbGV0IHZhbHVlTWF0Y2ggPSBuYW1lLm1hdGNoKC86KFthLXpBLVowLTlcXC06XSspLyk7XG4gICAgbGV0IG1vZGlmaWVycyA9IG5hbWUubWF0Y2goL1xcLlteLlxcXV0rKD89W15cXF1dKiQpL2cpIHx8IFtdO1xuICAgIGxldCBvcmlnaW5hbCA9IG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUgfHwgdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXBbbmFtZV0gfHwgbmFtZTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZU1hdGNoID8gdHlwZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgIHZhbHVlOiB2YWx1ZU1hdGNoID8gdmFsdWVNYXRjaFsxXSA6IG51bGwsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVycy5tYXAoKGkpID0+IGkucmVwbGFjZShcIi5cIiwgXCJcIikpLFxuICAgICAgZXhwcmVzc2lvbjogdmFsdWUsXG4gICAgICBvcmlnaW5hbFxuICAgIH07XG4gIH07XG59XG52YXIgREVGQVVMVCA9IFwiREVGQVVMVFwiO1xudmFyIGRpcmVjdGl2ZU9yZGVyID0gW1xuICBcImlnbm9yZVwiLFxuICBcInJlZlwiLFxuICBcImRhdGFcIixcbiAgXCJiaW5kXCIsXG4gIFwiaW5pdFwiLFxuICBcImZvclwiLFxuICBcIm1vZGVsXCIsXG4gIFwidHJhbnNpdGlvblwiLFxuICBcInNob3dcIixcbiAgXCJpZlwiLFxuICBERUZBVUxULFxuICBcImVsZW1lbnRcIlxuXTtcbmZ1bmN0aW9uIGJ5UHJpb3JpdHkoYSwgYikge1xuICBsZXQgdHlwZUEgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGEudHlwZSkgPT09IC0xID8gREVGQVVMVCA6IGEudHlwZTtcbiAgbGV0IHR5cGVCID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihiLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBiLnR5cGU7XG4gIHJldHVybiBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVBKSAtIGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YodHlwZUIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZGlzcGF0Y2guanNcbmZ1bmN0aW9uIGRpc3BhdGNoKGVsLCBuYW1lLCBkZXRhaWwgPSB7fSkge1xuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgZGV0YWlsLFxuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY29tcG9zZWQ6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZVxuICB9KSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9uZXh0VGljay5qc1xudmFyIHRpY2tTdGFjayA9IFtdO1xudmFyIGlzSG9sZGluZyA9IGZhbHNlO1xuZnVuY3Rpb24gbmV4dFRpY2soY2FsbGJhY2spIHtcbiAgdGlja1N0YWNrLnB1c2goY2FsbGJhY2spO1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgaXNIb2xkaW5nIHx8IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbGVhc2VOZXh0VGlja3MoKSB7XG4gIGlzSG9sZGluZyA9IGZhbHNlO1xuICB3aGlsZSAodGlja1N0YWNrLmxlbmd0aClcbiAgICB0aWNrU3RhY2suc2hpZnQoKSgpO1xufVxuZnVuY3Rpb24gaG9sZE5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gdHJ1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhbGsuanNcbmZ1bmN0aW9uIHdhbGsoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIGVsIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZvckVhY2goKGVsMikgPT4gd2FsayhlbDIsIGNhbGxiYWNrKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBza2lwID0gZmFsc2U7XG4gIGNhbGxiYWNrKGVsLCAoKSA9PiBza2lwID0gdHJ1ZSk7XG4gIGlmIChza2lwKVxuICAgIHJldHVybjtcbiAgbGV0IG5vZGUgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICB3YWxrKG5vZGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy93YXJuLmpzXG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKGBBbHBpbmUgV2FybmluZzogJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbGlmZWN5Y2xlLmpzXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKCFkb2N1bWVudC5ib2R5KVxuICAgIHdhcm4oXCJVbmFibGUgdG8gaW5pdGlhbGl6ZS4gVHJ5aW5nIHRvIGxvYWQgQWxwaW5lIGJlZm9yZSBgPGJvZHk+YCBpcyBhdmFpbGFibGUuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBgZGVmZXJgIGluIEFscGluZSdzIGA8c2NyaXB0PmAgdGFnP1wiKTtcbiAgZGlzcGF0Y2goZG9jdW1lbnQsIFwiYWxwaW5lOmluaXRcIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXppbmdcIik7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIG9uRWxBZGRlZCgoZWwpID0+IGluaXRUcmVlKGVsLCB3YWxrKSk7XG4gIG9uRWxSZW1vdmVkKChlbCkgPT4gbmV4dFRpY2soKCkgPT4gZGVzdHJveVRyZWUoZWwpKSk7XG4gIG9uQXR0cmlidXRlc0FkZGVkKChlbCwgYXR0cnMpID0+IHtcbiAgICBkaXJlY3RpdmVzKGVsLCBhdHRycykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gIH0pO1xuICBsZXQgb3V0TmVzdGVkQ29tcG9uZW50cyA9IChlbCkgPT4gIWNsb3Nlc3RSb290KGVsLnBhcmVudEVsZW1lbnQsIHRydWUpO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWxsU2VsZWN0b3JzKCkpKS5maWx0ZXIob3V0TmVzdGVkQ29tcG9uZW50cykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpbml0VHJlZShlbCk7XG4gIH0pO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6ZWRcIik7XG59XG52YXIgcm9vdFNlbGVjdG9yQ2FsbGJhY2tzID0gW107XG52YXIgaW5pdFNlbGVjdG9yQ2FsbGJhY2tzID0gW107XG5mdW5jdGlvbiByb290U2VsZWN0b3JzKCkge1xuICByZXR1cm4gcm9vdFNlbGVjdG9yQ2FsbGJhY2tzLm1hcCgoZm4pID0+IGZuKCkpO1xufVxuZnVuY3Rpb24gYWxsU2VsZWN0b3JzKCkge1xuICByZXR1cm4gcm9vdFNlbGVjdG9yQ2FsbGJhY2tzLmNvbmNhdChpbml0U2VsZWN0b3JDYWxsYmFja3MpLm1hcCgoZm4pID0+IGZuKCkpO1xufVxuZnVuY3Rpb24gYWRkUm9vdFNlbGVjdG9yKHNlbGVjdG9yQ2FsbGJhY2spIHtcbiAgcm9vdFNlbGVjdG9yQ2FsbGJhY2tzLnB1c2goc2VsZWN0b3JDYWxsYmFjayk7XG59XG5mdW5jdGlvbiBhZGRJbml0U2VsZWN0b3Ioc2VsZWN0b3JDYWxsYmFjaykge1xuICBpbml0U2VsZWN0b3JDYWxsYmFja3MucHVzaChzZWxlY3RvckNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3RSb290KGVsLCBpbmNsdWRlSW5pdFNlbGVjdG9ycyA9IGZhbHNlKSB7XG4gIGlmICghZWwpXG4gICAgcmV0dXJuO1xuICBjb25zdCBzZWxlY3RvcnMgPSBpbmNsdWRlSW5pdFNlbGVjdG9ycyA/IGFsbFNlbGVjdG9ycygpIDogcm9vdFNlbGVjdG9ycygpO1xuICBpZiAoc2VsZWN0b3JzLnNvbWUoKHNlbGVjdG9yKSA9PiBlbC5tYXRjaGVzKHNlbGVjdG9yKSkpXG4gICAgcmV0dXJuIGVsO1xuICBpZiAoIWVsLnBhcmVudEVsZW1lbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gY2xvc2VzdFJvb3QoZWwucGFyZW50RWxlbWVudCwgaW5jbHVkZUluaXRTZWxlY3RvcnMpO1xufVxuZnVuY3Rpb24gaXNSb290KGVsKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JzKCkuc29tZSgoc2VsZWN0b3IpID0+IGVsLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbmZ1bmN0aW9uIGluaXRUcmVlKGVsLCB3YWxrZXIgPSB3YWxrKSB7XG4gIGRlZmVySGFuZGxpbmdEaXJlY3RpdmVzKCgpID0+IHtcbiAgICB3YWxrZXIoZWwsIChlbDIsIHNraXApID0+IHtcbiAgICAgIGRpcmVjdGl2ZXMoZWwyLCBlbDIuYXR0cmlidXRlcykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gICAgICBlbDIuX3hfaWdub3JlICYmIHNraXAoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkZXN0cm95VHJlZShyb290KSB7XG4gIHdhbGsocm9vdCwgKGVsKSA9PiBjbGVhbnVwQXR0cmlidXRlcyhlbCkpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvY2xhc3Nlcy5qc1xuZnVuY3Rpb24gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZS5qb2luKFwiIFwiKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3NlcyhlbCwgdmFsdWUoKSk7XG4gIH1cbiAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgY2xhc3NTdHJpbmcpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nMikgPT4gY2xhc3NTdHJpbmcyLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBtaXNzaW5nQ2xhc3NlcyA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKChpKSA9PiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyA9IChjbGFzc2VzKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICB9O1xuICB9O1xuICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nID09PSB0cnVlID8gY2xhc3NTdHJpbmcgPSBcIlwiIDogY2xhc3NTdHJpbmcgfHwgXCJcIjtcbiAgcmV0dXJuIGFkZENsYXNzZXNBbmRSZXR1cm5VbmRvKG1pc3NpbmdDbGFzc2VzKGNsYXNzU3RyaW5nKSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgY2xhc3NPYmplY3QpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nKSA9PiBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yQWRkID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+IGJvb2wgPyBzcGxpdChjbGFzc1N0cmluZykgOiBmYWxzZSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yUmVtb3ZlID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+ICFib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGFkZGVkID0gW107XG4gIGxldCByZW1vdmVkID0gW107XG4gIGZvclJlbW92ZS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpKTtcbiAgICAgIHJlbW92ZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICBmb3JBZGQuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgYWRkZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LmFkZChpKSk7XG4gICAgYWRkZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShpKSk7XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9zdHlsZXMuanNcbmZ1bmN0aW9uIHNldFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHNldFN0eWxlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlc0Zyb21PYmplY3QoZWwsIHZhbHVlKSB7XG4gIGxldCBwcmV2aW91c1N0eWxlcyA9IHt9O1xuICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsdWUyXSkgPT4ge1xuICAgIHByZXZpb3VzU3R5bGVzW2tleV0gPSBlbC5zdHlsZVtrZXldO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGtlYmFiQ2FzZShrZXkpLCB2YWx1ZTIpO1xuICB9KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGVsLnN0eWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBzZXRTdHlsZXMoZWwsIHByZXZpb3VzU3R5bGVzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKSB7XG4gIGxldCBjYWNoZSA9IGVsLmdldEF0dHJpYnV0ZShcInN0eWxlXCIsIHZhbHVlKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGNhY2hlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZShzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uY2UuanNcbmZ1bmN0aW9uIG9uY2UoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRyYW5zaXRpb24uanNcbmRpcmVjdGl2ZShcInRyYW5zaXRpb25cIiwgKGVsLCB7dmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbn0sIHtldmFsdWF0ZTogZXZhbHVhdGUyfSkgPT4ge1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIilcbiAgICBleHByZXNzaW9uID0gZXZhbHVhdGUyKGV4cHJlc3Npb24pO1xuICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgZXhwcmVzc2lvbiwgdmFsdWUpO1xuICB9XG59KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tQ2xhc3NTdHJpbmcoZWwsIGNsYXNzU3RyaW5nLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldENsYXNzZXMsIFwiXCIpO1xuICBsZXQgZGlyZWN0aXZlU3RvcmFnZU1hcCA9IHtcbiAgICBlbnRlcjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItc3RhcnRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJlbnRlci1lbmRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0gY2xhc3NlcztcbiAgICB9LFxuICAgIGxlYXZlOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5kdXJpbmcgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJsZWF2ZS1zdGFydFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5zdGFydCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlLWVuZFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5lbmQgPSBjbGFzc2VzO1xuICAgIH1cbiAgfTtcbiAgZGlyZWN0aXZlU3RvcmFnZU1hcFtzdGFnZV0oY2xhc3NTdHJpbmcpO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21IZWxwZXIoZWwsIG1vZGlmaWVycywgc3RhZ2UpIHtcbiAgcmVnaXN0ZXJUcmFuc2l0aW9uT2JqZWN0KGVsLCBzZXRTdHlsZXMpO1xuICBsZXQgZG9lc250U3BlY2lmeSA9ICFtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0XCIpICYmICFzdGFnZTtcbiAgbGV0IHRyYW5zaXRpb25pbmdJbiA9IGRvZXNudFNwZWNpZnkgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgfHwgW1wiZW50ZXJcIl0uaW5jbHVkZXMoc3RhZ2UpO1xuICBsZXQgdHJhbnNpdGlvbmluZ091dCA9IGRvZXNudFNwZWNpZnkgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0XCIpIHx8IFtcImxlYXZlXCJdLmluY2x1ZGVzKHN0YWdlKTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpICYmICFkb2VzbnRTcGVjaWZ5KSB7XG4gICAgbW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSwgaW5kZXgpID0+IGluZGV4IDwgbW9kaWZpZXJzLmluZGV4T2YoXCJvdXRcIikpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgJiYgIWRvZXNudFNwZWNpZnkpIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpLCBpbmRleCkgPT4gaW5kZXggPiBtb2RpZmllcnMuaW5kZXhPZihcIm91dFwiKSk7XG4gIH1cbiAgbGV0IHdhbnRzQWxsID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcIm9wYWNpdHlcIikgJiYgIW1vZGlmaWVycy5pbmNsdWRlcyhcInNjYWxlXCIpO1xuICBsZXQgd2FudHNPcGFjaXR5ID0gd2FudHNBbGwgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3BhY2l0eVwiKTtcbiAgbGV0IHdhbnRzU2NhbGUgPSB3YW50c0FsbCB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJzY2FsZVwiKTtcbiAgbGV0IG9wYWNpdHlWYWx1ZSA9IHdhbnRzT3BhY2l0eSA/IDAgOiAxO1xuICBsZXQgc2NhbGVWYWx1ZSA9IHdhbnRzU2NhbGUgPyBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJzY2FsZVwiLCA5NSkgLyAxMDAgOiAxO1xuICBsZXQgZGVsYXkgPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkZWxheVwiLCAwKTtcbiAgbGV0IG9yaWdpbiA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcIm9yaWdpblwiLCBcImNlbnRlclwiKTtcbiAgbGV0IHByb3BlcnR5ID0gXCJvcGFjaXR5LCB0cmFuc2Zvcm1cIjtcbiAgbGV0IGR1cmF0aW9uSW4gPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkdXJhdGlvblwiLCAxNTApIC8gMWUzO1xuICBsZXQgZHVyYXRpb25PdXQgPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkdXJhdGlvblwiLCA3NSkgLyAxZTM7XG4gIGxldCBlYXNpbmcgPSBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpYDtcbiAgaWYgKHRyYW5zaXRpb25pbmdJbikge1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0ge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBvcmlnaW4sXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IGRlbGF5LFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7ZHVyYXRpb25Jbn1zYCxcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZWFzaW5nXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0ID0ge1xuICAgICAgb3BhY2l0eTogb3BhY2l0eVZhbHVlLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZVZhbHVlfSlgXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCA9IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgICB9O1xuICB9XG4gIGlmICh0cmFuc2l0aW9uaW5nT3V0KSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5kdXJpbmcgPSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogZGVsYXksXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbk91dH1zYCxcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZWFzaW5nXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLnN0YXJ0ID0ge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5lbmQgPSB7XG4gICAgICBvcGFjaXR5OiBvcGFjaXR5VmFsdWUsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlVmFsdWV9KWBcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUgPSB7fSkge1xuICBpZiAoIWVsLl94X3RyYW5zaXRpb24pXG4gICAgZWwuX3hfdHJhbnNpdGlvbiA9IHtcbiAgICAgIGVudGVyOiB7ZHVyaW5nOiBkZWZhdWx0VmFsdWUsIHN0YXJ0OiBkZWZhdWx0VmFsdWUsIGVuZDogZGVmYXVsdFZhbHVlfSxcbiAgICAgIGxlYXZlOiB7ZHVyaW5nOiBkZWZhdWx0VmFsdWUsIHN0YXJ0OiBkZWZhdWx0VmFsdWUsIGVuZDogZGVmYXVsdFZhbHVlfSxcbiAgICAgIGluKGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwge1xuICAgICAgICAgIGR1cmluZzogdGhpcy5lbnRlci5kdXJpbmcsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMuZW50ZXIuc3RhcnQsXG4gICAgICAgICAgZW5kOiB0aGlzLmVudGVyLmVuZFxuICAgICAgICB9LCBiZWZvcmUsIGFmdGVyKTtcbiAgICAgIH0sXG4gICAgICBvdXQoYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmxlYXZlLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5sZWF2ZS5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMubGVhdmUuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfVxuICAgIH07XG59XG53aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSkge1xuICBsZXQgY2xpY2tBd2F5Q29tcGF0aWJsZVNob3cgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIiA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShzaG93KSA6IHNldFRpbWVvdXQoc2hvdyk7XG4gIH07XG4gIGlmICh2YWx1ZSkge1xuICAgIGVsLl94X3RyYW5zaXRpb24gPyBlbC5feF90cmFuc2l0aW9uLmluKHNob3cpIDogY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZWwuX3hfaGlkZVByb21pc2UgPSBlbC5feF90cmFuc2l0aW9uID8gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLl94X3RyYW5zaXRpb24ub3V0KCgpID0+IHtcbiAgICB9LCAoKSA9PiByZXNvbHZlKGhpZGUpKTtcbiAgICBlbC5feF90cmFuc2l0aW9uaW5nLmJlZm9yZUNhbmNlbCgoKSA9PiByZWplY3Qoe2lzRnJvbUNhbmNlbGxlZFRyYW5zaXRpb246IHRydWV9KSk7XG4gIH0pIDogUHJvbWlzZS5yZXNvbHZlKGhpZGUpO1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgbGV0IGNsb3Nlc3QgPSBjbG9zZXN0SGlkZShlbCk7XG4gICAgaWYgKGNsb3Nlc3QpIHtcbiAgICAgIGlmICghY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4pXG4gICAgICAgIGNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuID0gW107XG4gICAgICBjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbi5wdXNoKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICBsZXQgaGlkZUFmdGVyQ2hpbGRyZW4gPSAoZWwyKSA9PiB7XG4gICAgICAgICAgbGV0IGNhcnJ5ID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZWwyLl94X2hpZGVQcm9taXNlLFxuICAgICAgICAgICAgLi4uKGVsMi5feF9oaWRlQ2hpbGRyZW4gfHwgW10pLm1hcChoaWRlQWZ0ZXJDaGlsZHJlbilcbiAgICAgICAgICBdKS50aGVuKChbaV0pID0+IGkoKSk7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlUHJvbWlzZTtcbiAgICAgICAgICBkZWxldGUgZWwyLl94X2hpZGVDaGlsZHJlbjtcbiAgICAgICAgICByZXR1cm4gY2Fycnk7XG4gICAgICAgIH07XG4gICAgICAgIGhpZGVBZnRlckNoaWxkcmVuKGVsKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGlmICghZS5pc0Zyb21DYW5jZWxsZWRUcmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcbmZ1bmN0aW9uIGNsb3Nlc3RIaWRlKGVsKSB7XG4gIGxldCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICBpZiAoIXBhcmVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBwYXJlbnQuX3hfaGlkZVByb21pc2UgPyBwYXJlbnQgOiBjbG9zZXN0SGlkZShwYXJlbnQpO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtkdXJpbmcsIHN0YXJ0OiBzdGFydDIsIGVuZH0gPSB7fSwgYmVmb3JlID0gKCkgPT4ge1xufSwgYWZ0ZXIgPSAoKSA9PiB7XG59KSB7XG4gIGlmIChlbC5feF90cmFuc2l0aW9uaW5nKVxuICAgIGVsLl94X3RyYW5zaXRpb25pbmcuY2FuY2VsKCk7XG4gIGlmIChPYmplY3Qua2V5cyhkdXJpbmcpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhzdGFydDIpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhlbmQpLmxlbmd0aCA9PT0gMCkge1xuICAgIGJlZm9yZSgpO1xuICAgIGFmdGVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB1bmRvU3RhcnQsIHVuZG9EdXJpbmcsIHVuZG9FbmQ7XG4gIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICB1bmRvU3RhcnQgPSBzZXRGdW5jdGlvbihlbCwgc3RhcnQyKTtcbiAgICB9LFxuICAgIGR1cmluZygpIHtcbiAgICAgIHVuZG9EdXJpbmcgPSBzZXRGdW5jdGlvbihlbCwgZHVyaW5nKTtcbiAgICB9LFxuICAgIGJlZm9yZSxcbiAgICBlbmQoKSB7XG4gICAgICB1bmRvU3RhcnQoKTtcbiAgICAgIHVuZG9FbmQgPSBzZXRGdW5jdGlvbihlbCwgZW5kKTtcbiAgICB9LFxuICAgIGFmdGVyLFxuICAgIGNsZWFudXAoKSB7XG4gICAgICB1bmRvRHVyaW5nKCk7XG4gICAgICB1bmRvRW5kKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCBzdGFnZXMpIHtcbiAgbGV0IGludGVycnVwdGVkLCByZWFjaGVkQmVmb3JlLCByZWFjaGVkRW5kO1xuICBsZXQgZmluaXNoID0gb25jZSgoKSA9PiB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGludGVycnVwdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghcmVhY2hlZEJlZm9yZSlcbiAgICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgICAgaWYgKCFyZWFjaGVkRW5kKSB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgfVxuICAgICAgc3RhZ2VzLmFmdGVyKCk7XG4gICAgICBpZiAoZWwuaXNDb25uZWN0ZWQpXG4gICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICBkZWxldGUgZWwuX3hfdHJhbnNpdGlvbmluZztcbiAgICB9KTtcbiAgfSk7XG4gIGVsLl94X3RyYW5zaXRpb25pbmcgPSB7XG4gICAgYmVmb3JlQ2FuY2VsczogW10sXG4gICAgYmVmb3JlQ2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmJlZm9yZUNhbmNlbHMucHVzaChjYWxsYmFjayk7XG4gICAgfSxcbiAgICBjYW5jZWw6IG9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICB3aGlsZSAodGhpcy5iZWZvcmVDYW5jZWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmJlZm9yZUNhbmNlbHMuc2hpZnQoKSgpO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSksXG4gICAgZmluaXNoXG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgc3RhZ2VzLnN0YXJ0KCk7XG4gICAgc3RhZ2VzLmR1cmluZygpO1xuICB9KTtcbiAgaG9sZE5leHRUaWNrcygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpbnRlcnJ1cHRlZClcbiAgICAgIHJldHVybjtcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBsZXQgZGVsYXkgPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkRlbGF5LnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBpZiAoZHVyYXRpb24gPT09IDApXG4gICAgICBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIHN0YWdlcy5iZWZvcmUoKTtcbiAgICB9KTtcbiAgICByZWFjaGVkQmVmb3JlID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICAgIHNldFRpbWVvdXQoZWwuX3hfdHJhbnNpdGlvbmluZy5maW5pc2gsIGR1cmF0aW9uICsgZGVsYXkpO1xuICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJzY2FsZVwiKSB7XG4gICAgaWYgKGlzTmFOKHJhd1ZhbHVlKSlcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuICBpZiAoa2V5ID09PSBcImR1cmF0aW9uXCIpIHtcbiAgICBsZXQgbWF0Y2ggPSByYXdWYWx1ZS5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgIGlmIChtYXRjaClcbiAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICBpZiAoa2V5ID09PSBcIm9yaWdpblwiKSB7XG4gICAgaWYgKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdKSkge1xuICAgICAgcmV0dXJuIFtyYXdWYWx1ZSwgbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXV0uam9pbihcIiBcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2RlYm91bmNlLmpzXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3Rocm90dGxlLmpzXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xuICBsZXQgaW5UaHJvdHRsZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5UaHJvdHRsZSA9IGZhbHNlLCBsaW1pdCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvcGx1Z2luLmpzXG5mdW5jdGlvbiBwbHVnaW4oY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soYWxwaW5lX2RlZmF1bHQpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc3RvcmUuanNcbnZhciBzdG9yZXMgPSB7fTtcbnZhciBpc1JlYWN0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiBzdG9yZShuYW1lLCB2YWx1ZSkge1xuICBpZiAoIWlzUmVhY3RpdmUpIHtcbiAgICBzdG9yZXMgPSByZWFjdGl2ZShzdG9yZXMpO1xuICAgIGlzUmVhY3RpdmUgPSB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHN0b3Jlc1tuYW1lXTtcbiAgfVxuICBzdG9yZXNbbmFtZV0gPSB2YWx1ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImluaXRcIikgJiYgdHlwZW9mIHZhbHVlLmluaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHN0b3Jlc1tuYW1lXS5pbml0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFN0b3JlcygpIHtcbiAgcmV0dXJuIHN0b3Jlcztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2Nsb25lLmpzXG52YXIgaXNDbG9uaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBza2lwRHVyaW5nQ2xvbmUoY2FsbGJhY2spIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiBpc0Nsb25pbmcgfHwgY2FsbGJhY2soLi4uYXJncyk7XG59XG5mdW5jdGlvbiBjbG9uZShvbGRFbCwgbmV3RWwpIHtcbiAgbmV3RWwuX3hfZGF0YVN0YWNrID0gb2xkRWwuX3hfZGF0YVN0YWNrO1xuICBpc0Nsb25pbmcgPSB0cnVlO1xuICBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKCgpID0+IHtcbiAgICBjbG9uZVRyZWUobmV3RWwpO1xuICB9KTtcbiAgaXNDbG9uaW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiBjbG9uZVRyZWUoZWwpIHtcbiAgbGV0IGhhc1J1blRocm91Z2hGaXJzdEVsID0gZmFsc2U7XG4gIGxldCBzaGFsbG93V2Fsa2VyID0gKGVsMiwgY2FsbGJhY2spID0+IHtcbiAgICB3YWxrKGVsMiwgKGVsMywgc2tpcCkgPT4ge1xuICAgICAgaWYgKGhhc1J1blRocm91Z2hGaXJzdEVsICYmIGlzUm9vdChlbDMpKVxuICAgICAgICByZXR1cm4gc2tpcCgpO1xuICAgICAgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZWwzLCBza2lwKTtcbiAgICB9KTtcbiAgfTtcbiAgaW5pdFRyZWUoZWwsIHNoYWxsb3dXYWxrZXIpO1xufVxuZnVuY3Rpb24gZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cyhjYWxsYmFjaykge1xuICBsZXQgY2FjaGUgPSBlZmZlY3Q7XG4gIG92ZXJyaWRlRWZmZWN0KChjYWxsYmFjazIsIGVsKSA9PiB7XG4gICAgbGV0IHN0b3JlZEVmZmVjdCA9IGNhY2hlKGNhbGxiYWNrMik7XG4gICAgcmVsZWFzZShzdG9yZWRFZmZlY3QpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgfSk7XG4gIGNhbGxiYWNrKCk7XG4gIG92ZXJyaWRlRWZmZWN0KGNhY2hlKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RhdGFzLmpzXG52YXIgZGF0YXMgPSB7fTtcbmZ1bmN0aW9uIGRhdGEobmFtZSwgY2FsbGJhY2spIHtcbiAgZGF0YXNbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGluamVjdERhdGFQcm92aWRlcnMob2JqLCBjb250ZXh0KSB7XG4gIE9iamVjdC5lbnRyaWVzKGRhdGFzKS5mb3JFYWNoKChbbmFtZSwgY2FsbGJhY2tdKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYmluZChjb250ZXh0KSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2FscGluZS5qc1xudmFyIEFscGluZSA9IHtcbiAgZ2V0IHJlYWN0aXZlKCkge1xuICAgIHJldHVybiByZWFjdGl2ZTtcbiAgfSxcbiAgZ2V0IHJlbGVhc2UoKSB7XG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH0sXG4gIGdldCBlZmZlY3QoKSB7XG4gICAgcmV0dXJuIGVmZmVjdDtcbiAgfSxcbiAgZ2V0IHJhdygpIHtcbiAgICByZXR1cm4gcmF3O1xuICB9LFxuICB2ZXJzaW9uOiBcIjMuNC4yXCIsXG4gIGZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucyxcbiAgZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcsXG4gIHNldFJlYWN0aXZpdHlFbmdpbmUsXG4gIGFkZFJvb3RTZWxlY3RvcixcbiAgZGVmZXJNdXRhdGlvbnMsXG4gIG1hcEF0dHJpYnV0ZXMsXG4gIGV2YWx1YXRlTGF0ZXIsXG4gIHNldEV2YWx1YXRvcixcbiAgY2xvc2VzdFJvb3QsXG4gIGludGVyY2VwdG9yLFxuICB0cmFuc2l0aW9uLFxuICBzZXRTdHlsZXMsXG4gIG11dGF0ZURvbSxcbiAgZGlyZWN0aXZlLFxuICB0aHJvdHRsZSxcbiAgZGVib3VuY2UsXG4gIGV2YWx1YXRlLFxuICBpbml0VHJlZSxcbiAgbmV4dFRpY2ssXG4gIHByZWZpeDogc2V0UHJlZml4LFxuICBwbHVnaW4sXG4gIG1hZ2ljLFxuICBzdG9yZSxcbiAgc3RhcnQsXG4gIGNsb25lLFxuICBkYXRhXG59O1xudmFyIGFscGluZV9kZWZhdWx0ID0gQWxwaW5lO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaW5kZXguanNcbnZhciBpbXBvcnRfcmVhY3Rpdml0eTkgPSBfX3RvTW9kdWxlKHJlcXVpcmVfcmVhY3Rpdml0eSgpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kbmV4dFRpY2suanNcbm1hZ2ljKFwibmV4dFRpY2tcIiwgKCkgPT4gbmV4dFRpY2spO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRkaXNwYXRjaC5qc1xubWFnaWMoXCJkaXNwYXRjaFwiLCAoZWwpID0+IGRpc3BhdGNoLmJpbmQoZGlzcGF0Y2gsIGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHdhdGNoLmpzXG5tYWdpYyhcIndhdGNoXCIsIChlbCkgPT4gKGtleSwgY2FsbGJhY2spID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGtleSk7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBsZXQgb2xkVmFsdWU7XG4gIGVmZmVjdCgoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmRhdGFzZXQudGhyb3dBd2F5ID0gdmFsdWU7XG4gICAgaWYgKCFmaXJzdFRpbWUpIHtcbiAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgfSkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHN0b3JlLmpzXG5tYWdpYyhcInN0b3JlXCIsIGdldFN0b3Jlcyk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHJvb3QuanNcbm1hZ2ljKFwicm9vdFwiLCAoZWwpID0+IGNsb3Nlc3RSb290KGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHJlZnMuanNcbm1hZ2ljKFwicmVmc1wiLCAoZWwpID0+IHtcbiAgaWYgKGVsLl94X3JlZnNfcHJveHkpXG4gICAgcmV0dXJuIGVsLl94X3JlZnNfcHJveHk7XG4gIGVsLl94X3JlZnNfcHJveHkgPSBtZXJnZVByb3hpZXMoZ2V0QXJyYXlPZlJlZk9iamVjdChlbCkpO1xuICByZXR1cm4gZWwuX3hfcmVmc19wcm94eTtcbn0pO1xuZnVuY3Rpb24gZ2V0QXJyYXlPZlJlZk9iamVjdChlbCkge1xuICBsZXQgcmVmT2JqZWN0cyA9IFtdO1xuICBsZXQgY3VycmVudEVsID0gZWw7XG4gIHdoaWxlIChjdXJyZW50RWwpIHtcbiAgICBpZiAoY3VycmVudEVsLl94X3JlZnMpXG4gICAgICByZWZPYmplY3RzLnB1c2goY3VycmVudEVsLl94X3JlZnMpO1xuICAgIGN1cnJlbnRFbCA9IGN1cnJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiByZWZPYmplY3RzO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRlbC5qc1xubWFnaWMoXCJlbFwiLCAoZWwpID0+IGVsKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZ25vcmUuanNcbnZhciBoYW5kbGVyID0gKCkgPT4ge1xufTtcbmhhbmRsZXIuaW5saW5lID0gKGVsLCB7bW9kaWZpZXJzfSwge2NsZWFudXB9KSA9PiB7XG4gIG1vZGlmaWVycy5pbmNsdWRlcyhcInNlbGZcIikgPyBlbC5feF9pZ25vcmVTZWxmID0gdHJ1ZSA6IGVsLl94X2lnbm9yZSA9IHRydWU7XG4gIGNsZWFudXAoKCkgPT4ge1xuICAgIG1vZGlmaWVycy5pbmNsdWRlcyhcInNlbGZcIikgPyBkZWxldGUgZWwuX3hfaWdub3JlU2VsZiA6IGRlbGV0ZSBlbC5feF9pZ25vcmU7XG4gIH0pO1xufTtcbmRpcmVjdGl2ZShcImlnbm9yZVwiLCBoYW5kbGVyKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1lZmZlY3QuanNcbmRpcmVjdGl2ZShcImVmZmVjdFwiLCAoZWwsIHtleHByZXNzaW9ufSwge2VmZmVjdDogZWZmZWN0M30pID0+IGVmZmVjdDMoZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2JpbmQuanNcbmZ1bmN0aW9uIGJpbmQoZWwsIG5hbWUsIHZhbHVlLCBtb2RpZmllcnMgPSBbXSkge1xuICBpZiAoIWVsLl94X2JpbmRpbmdzKVxuICAgIGVsLl94X2JpbmRpbmdzID0gcmVhY3RpdmUoe30pO1xuICBlbC5feF9iaW5kaW5nc1tuYW1lXSA9IHZhbHVlO1xuICBuYW1lID0gbW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FtZWxcIikgPyBjYW1lbENhc2UobmFtZSkgOiBuYW1lO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIGJpbmRJbnB1dFZhbHVlKGVsLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3R5bGVcIjpcbiAgICAgIGJpbmRTdHlsZXMoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjbGFzc1wiOlxuICAgICAgYmluZENsYXNzZXMoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBiaW5kQXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuZnVuY3Rpb24gYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKSB7XG4gIGlmIChlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBpZiAoZWwuYXR0cmlidXRlcy52YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAod2luZG93LmZyb21Nb2RlbCkge1xuICAgICAgZWwuY2hlY2tlZCA9IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKGVsLnZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiAmJiAhW251bGwsIHZvaWQgMF0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBlbC5jaGVja2VkID0gdmFsdWUuc29tZSgodmFsKSA9PiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWwsIGVsLnZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gISF2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZWwudGFnTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuICAgIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbC52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gYmluZENsYXNzZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChlbC5feF91bmRvQWRkZWRDbGFzc2VzKVxuICAgIGVsLl94X3VuZG9BZGRlZENsYXNzZXMoKTtcbiAgZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcyA9IHNldENsYXNzZXMoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRTdHlsZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChlbC5feF91bmRvQWRkZWRTdHlsZXMpXG4gICAgZWwuX3hfdW5kb0FkZGVkU3R5bGVzKCk7XG4gIGVsLl94X3VuZG9BZGRlZFN0eWxlcyA9IHNldFN0eWxlcyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKFtudWxsLCB2b2lkIDAsIGZhbHNlXS5pbmNsdWRlcyh2YWx1ZSkgJiYgYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpXG4gICAgICB2YWx1ZSA9IG5hbWU7XG4gICAgc2V0SWZDaGFuZ2VkKGVsLCBuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldElmQ2hhbmdlZChlbCwgYXR0ck5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpICE9IHZhbHVlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpIHtcbiAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUyKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlMiArIFwiXCI7XG4gIH0pO1xuICBBcnJheS5mcm9tKGVsLm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFxcdykvZywgKG1hdGNoLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUodmFsdWVBLCB2YWx1ZUIpIHtcbiAgcmV0dXJuIHZhbHVlQSA9PSB2YWx1ZUI7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW5BdHRyKGF0dHJOYW1lKSB7XG4gIGNvbnN0IGJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcImNoZWNrZWRcIixcbiAgICBcInJlcXVpcmVkXCIsXG4gICAgXCJyZWFkb25seVwiLFxuICAgIFwiaGlkZGVuXCIsXG4gICAgXCJvcGVuXCIsXG4gICAgXCJzZWxlY3RlZFwiLFxuICAgIFwiYXV0b2ZvY3VzXCIsXG4gICAgXCJpdGVtc2NvcGVcIixcbiAgICBcIm11bHRpcGxlXCIsXG4gICAgXCJub3ZhbGlkYXRlXCIsXG4gICAgXCJhbGxvd2Z1bGxzY3JlZW5cIixcbiAgICBcImFsbG93cGF5bWVudHJlcXVlc3RcIixcbiAgICBcImZvcm1ub3ZhbGlkYXRlXCIsXG4gICAgXCJhdXRvcGxheVwiLFxuICAgIFwiY29udHJvbHNcIixcbiAgICBcImxvb3BcIixcbiAgICBcIm11dGVkXCIsXG4gICAgXCJwbGF5c2lubGluZVwiLFxuICAgIFwiZGVmYXVsdFwiLFxuICAgIFwiaXNtYXBcIixcbiAgICBcInJldmVyc2VkXCIsXG4gICAgXCJhc3luY1wiLFxuICAgIFwiZGVmZXJcIixcbiAgICBcIm5vbW9kdWxlXCJcbiAgXTtcbiAgcmV0dXJuIGJvb2xlYW5BdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJOYW1lKTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZVNob3VsZG50QmVQcmVzZXJ2ZWRJZkZhbHN5KG5hbWUpIHtcbiAgcmV0dXJuICFbXCJhcmlhLXByZXNzZWRcIiwgXCJhcmlhLWNoZWNrZWRcIiwgXCJhcmlhLWV4cGFuZGVkXCJdLmluY2x1ZGVzKG5hbWUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvb24uanNcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgbW9kaWZpZXJzLCBjYWxsYmFjaykge1xuICBsZXQgbGlzdGVuZXJUYXJnZXQgPSBlbDtcbiAgbGV0IGhhbmRsZXIzID0gKGUpID0+IGNhbGxiYWNrKGUpO1xuICBsZXQgb3B0aW9ucyA9IHt9O1xuICBsZXQgd3JhcEhhbmRsZXIgPSAoY2FsbGJhY2syLCB3cmFwcGVyKSA9PiAoZSkgPT4gd3JhcHBlcihjYWxsYmFjazIsIGUpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG90XCIpKVxuICAgIGV2ZW50ID0gZG90U3ludGF4KGV2ZW50KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImNhbWVsXCIpKVxuICAgIGV2ZW50ID0gY2FtZWxDYXNlMihldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwYXNzaXZlXCIpKVxuICAgIG9wdGlvbnMucGFzc2l2ZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYXB0dXJlXCIpKVxuICAgIG9wdGlvbnMuY2FwdHVyZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ3aW5kb3dcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSB3aW5kb3c7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJkb2N1bWVudFwiKSlcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicHJldmVudFwiKSlcbiAgICBoYW5kbGVyMyA9IHdyYXBIYW5kbGVyKGhhbmRsZXIzLCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInN0b3BcIikpXG4gICAgaGFuZGxlcjMgPSB3cmFwSGFuZGxlcihoYW5kbGVyMywgKG5leHQsIGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSlcbiAgICBoYW5kbGVyMyA9IHdyYXBIYW5kbGVyKGhhbmRsZXIzLCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS50YXJnZXQgPT09IGVsICYmIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJhd2F5XCIpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dHNpZGVcIikpIHtcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICAgIGhhbmRsZXIzID0gd3JhcEhhbmRsZXIoaGFuZGxlcjMsIChuZXh0LCBlKSA9PiB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZWwub2Zmc2V0V2lkdGggPCAxICYmIGVsLm9mZnNldEhlaWdodCA8IDEpXG4gICAgICAgIHJldHVybjtcbiAgICAgIG5leHQoZSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlcjMgPSB3cmFwSGFuZGxlcihoYW5kbGVyMywgKG5leHQsIGUpID0+IHtcbiAgICBpZiAoaXNLZXlFdmVudChldmVudCkpIHtcbiAgICAgIGlmIChpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBuZXh0KGUpO1xuICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXIzID0gZGVib3VuY2UoaGFuZGxlcjMsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBuZXh0TW9kaWZpZXIgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKSArIDFdIHx8IFwiaW52YWxpZC13YWl0XCI7XG4gICAgbGV0IHdhaXQgPSBpc051bWVyaWMobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pID8gTnVtYmVyKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA6IDI1MDtcbiAgICBoYW5kbGVyMyA9IHRocm90dGxlKGhhbmRsZXIzLCB3YWl0KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib25jZVwiKSkge1xuICAgIGhhbmRsZXIzID0gd3JhcEhhbmRsZXIoaGFuZGxlcjMsIChuZXh0LCBlKSA9PiB7XG4gICAgICBuZXh0KGUpO1xuICAgICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjMsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG4gIGxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIzLCBvcHRpb25zKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyMywgb3B0aW9ucyk7XG4gIH07XG59XG5mdW5jdGlvbiBkb3RTeW50YXgoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8tL2csIFwiLlwiKTtcbn1cbmZ1bmN0aW9uIGNhbWVsQ2FzZTIoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBpc051bWVyaWMoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuZnVuY3Rpb24ga2ViYWJDYXNlMihzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikucmVwbGFjZSgvW19cXHNdLywgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBpc0tleUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBbXCJrZXlkb3duXCIsIFwia2V5dXBcIl0uaW5jbHVkZXMoZXZlbnQpO1xufVxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdGb3JBU3BlY2lmaWNLZXlUaGF0SGFzbnRCZWVuUHJlc3NlZChlLCBtb2RpZmllcnMpIHtcbiAgbGV0IGtleU1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGkpID0+IHtcbiAgICByZXR1cm4gIVtcIndpbmRvd1wiLCBcImRvY3VtZW50XCIsIFwicHJldmVudFwiLCBcInN0b3BcIiwgXCJvbmNlXCJdLmluY2x1ZGVzKGkpO1xuICB9KTtcbiAgaWYgKGtleU1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IGRlYm91bmNlSW5kZXggPSBrZXlNb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpO1xuICAgIGtleU1vZGlmaWVycy5zcGxpY2UoZGVib3VuY2VJbmRleCwgaXNOdW1lcmljKChrZXlNb2RpZmllcnNbZGVib3VuY2VJbmRleCArIDFdIHx8IFwiaW52YWxpZC13YWl0XCIpLnNwbGl0KFwibXNcIilbMF0pID8gMiA6IDEpO1xuICB9XG4gIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGtleU1vZGlmaWVycy5sZW5ndGggPT09IDEgJiYga2V5VG9Nb2RpZmllcnMoZS5rZXkpLmluY2x1ZGVzKGtleU1vZGlmaWVyc1swXSkpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzeXN0ZW1LZXlNb2RpZmllcnMgPSBbXCJjdHJsXCIsIFwic2hpZnRcIiwgXCJhbHRcIiwgXCJtZXRhXCIsIFwiY21kXCIsIFwic3VwZXJcIl07XG4gIGNvbnN0IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzID0gc3lzdGVtS2V5TW9kaWZpZXJzLmZpbHRlcigobW9kaWZpZXIpID0+IGtleU1vZGlmaWVycy5pbmNsdWRlcyhtb2RpZmllcikpO1xuICBrZXlNb2RpZmllcnMgPSBrZXlNb2RpZmllcnMuZmlsdGVyKChpKSA9PiAhc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMuaW5jbHVkZXMoaSkpO1xuICBpZiAoc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGFjdGl2ZWx5UHJlc3NlZEtleU1vZGlmaWVycyA9IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmZpbHRlcigobW9kaWZpZXIpID0+IHtcbiAgICAgIGlmIChtb2RpZmllciA9PT0gXCJjbWRcIiB8fCBtb2RpZmllciA9PT0gXCJzdXBlclwiKVxuICAgICAgICBtb2RpZmllciA9IFwibWV0YVwiO1xuICAgICAgcmV0dXJuIGVbYCR7bW9kaWZpZXJ9S2V5YF07XG4gICAgfSk7XG4gICAgaWYgKGFjdGl2ZWx5UHJlc3NlZEtleU1vZGlmaWVycy5sZW5ndGggPT09IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgaWYgKGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24ga2V5VG9Nb2RpZmllcnMoa2V5KSB7XG4gIGlmICgha2V5KVxuICAgIHJldHVybiBbXTtcbiAga2V5ID0ga2ViYWJDYXNlMihrZXkpO1xuICBsZXQgbW9kaWZpZXJUb0tleU1hcCA9IHtcbiAgICBjdHJsOiBcImNvbnRyb2xcIixcbiAgICBzbGFzaDogXCIvXCIsXG4gICAgc3BhY2U6IFwiLVwiLFxuICAgIHNwYWNlYmFyOiBcIi1cIixcbiAgICBjbWQ6IFwibWV0YVwiLFxuICAgIGVzYzogXCJlc2NhcGVcIixcbiAgICB1cDogXCJhcnJvdy11cFwiLFxuICAgIGRvd246IFwiYXJyb3ctZG93blwiLFxuICAgIGxlZnQ6IFwiYXJyb3ctbGVmdFwiLFxuICAgIHJpZ2h0OiBcImFycm93LXJpZ2h0XCIsXG4gICAgcGVyaW9kOiBcIi5cIixcbiAgICBlcXVhbDogXCI9XCJcbiAgfTtcbiAgbW9kaWZpZXJUb0tleU1hcFtrZXldID0ga2V5O1xuICByZXR1cm4gT2JqZWN0LmtleXMobW9kaWZpZXJUb0tleU1hcCkubWFwKChtb2RpZmllcikgPT4ge1xuICAgIGlmIChtb2RpZmllclRvS2V5TWFwW21vZGlmaWVyXSA9PT0ga2V5KVxuICAgICAgcmV0dXJuIG1vZGlmaWVyO1xuICB9KS5maWx0ZXIoKG1vZGlmaWVyKSA9PiBtb2RpZmllcik7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtbW9kZWwuanNcbmRpcmVjdGl2ZShcIm1vZGVsXCIsIChlbCwge21vZGlmaWVycywgZXhwcmVzc2lvbn0sIHtlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgbGV0IGFzc2lnbm1lbnRFeHByZXNzaW9uID0gYCR7ZXhwcmVzc2lvbn0gPSByaWdodFNpZGVPZkV4cHJlc3Npb24oJGV2ZW50LCAke2V4cHJlc3Npb259KWA7XG4gIGxldCBldmFsdWF0ZUFzc2lnbm1lbnQgPSBldmFsdWF0ZUxhdGVyKGVsLCBhc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gIHZhciBldmVudCA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiB8fCBbXCJjaGVja2JveFwiLCBcInJhZGlvXCJdLmluY2x1ZGVzKGVsLnR5cGUpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImxhenlcIikgPyBcImNoYW5nZVwiIDogXCJpbnB1dFwiO1xuICBsZXQgYXNzaWdtZW50RnVuY3Rpb24gPSBnZW5lcmF0ZUFzc2lnbm1lbnRGdW5jdGlvbihlbCwgbW9kaWZpZXJzLCBleHByZXNzaW9uKTtcbiAgbGV0IHJlbW92ZUxpc3RlbmVyID0gb24oZWwsIGV2ZW50LCBtb2RpZmllcnMsIChlKSA9PiB7XG4gICAgZXZhbHVhdGVBc3NpZ25tZW50KCgpID0+IHtcbiAgICB9LCB7c2NvcGU6IHtcbiAgICAgICRldmVudDogZSxcbiAgICAgIHJpZ2h0U2lkZU9mRXhwcmVzc2lvbjogYXNzaWdtZW50RnVuY3Rpb25cbiAgICB9fSk7XG4gIH0pO1xuICBjbGVhbnVwKCgpID0+IHJlbW92ZUxpc3RlbmVyKCkpO1xuICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlID0gKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwICYmIGV4cHJlc3Npb24ubWF0Y2goL1xcLi8pKVxuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB3aW5kb3cuZnJvbU1vZGVsID0gdHJ1ZTtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiBiaW5kKGVsLCBcInZhbHVlXCIsIHZhbHVlKSk7XG4gICAgICBkZWxldGUgd2luZG93LmZyb21Nb2RlbDtcbiAgICB9KTtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInVuaW50cnVzaXZlXCIpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaXNTYW1lTm9kZShlbCkpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfZm9yY2VNb2RlbFVwZGF0ZSgpO1xuICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2VuZXJhdGVBc3NpZ25tZW50RnVuY3Rpb24oZWwsIG1vZGlmaWVycywgZXhwcmVzc2lvbikge1xuICBpZiAoZWwudHlwZSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKFwibmFtZVwiKSlcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBleHByZXNzaW9uKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKGV2ZW50LCBjdXJyZW50VmFsdWUpID0+IHtcbiAgICByZXR1cm4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50ICYmIGV2ZW50LmRldGFpbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBldmVudC5kZXRhaWwgfHwgZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChlbC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSA/IHNhZmVQYXJzZU51bWJlcihldmVudC50YXJnZXQudmFsdWUpIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZCA/IGN1cnJlbnRWYWx1ZS5jb25jYXQoW25ld1ZhbHVlXSkgOiBjdXJyZW50VmFsdWUuZmlsdGVyKChlbDIpID0+ICFjaGVja2VkQXR0ckxvb3NlQ29tcGFyZTIoZWwyLCBuZXdWYWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIgJiYgZWwubXVsdGlwbGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSA/IEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSk7XG4gICAgICAgIH0pIDogQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHJhd1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpID8gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKSA6IG1vZGlmaWVycy5pbmNsdWRlcyhcInRyaW1cIikgPyByYXdWYWx1ZS50cmltKCkgOiByYXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSkge1xuICBsZXQgbnVtYmVyID0gcmF3VmFsdWUgPyBwYXJzZUZsb2F0KHJhd1ZhbHVlKSA6IG51bGw7XG4gIHJldHVybiBpc051bWVyaWMyKG51bWJlcikgPyBudW1iZXIgOiByYXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlMih2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzIoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWNsb2FrLmpzXG5kaXJlY3RpdmUoXCJjbG9ha1wiLCAoZWwpID0+IHF1ZXVlTWljcm90YXNrKCgpID0+IG11dGF0ZURvbSgoKSA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUocHJlZml4KFwiY2xvYWtcIikpKSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWluaXQuanNcbmFkZEluaXRTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiaW5pdFwiKX1dYCk7XG5kaXJlY3RpdmUoXCJpbml0XCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHtleHByZXNzaW9ufSkgPT4ge1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uLnRyaW0oKSAmJiBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwge30sIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIHt9LCBmYWxzZSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdGV4dC5qc1xuZGlyZWN0aXZlKFwidGV4dFwiLCAoZWwsIHtleHByZXNzaW9ufSwge2VmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjJ9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWh0bWwuanNcbmRpcmVjdGl2ZShcImh0bWxcIiwgKGVsLCB7ZXhwcmVzc2lvbn0sIHtlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWJpbmQuanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiOlwiLCBpbnRvKHByZWZpeChcImJpbmQ6XCIpKSkpO1xuZGlyZWN0aXZlKFwiYmluZFwiLCAoZWwsIHt2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uLCBvcmlnaW5hbH0sIHtlZmZlY3Q6IGVmZmVjdDN9KSA9PiB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIGV4cHJlc3Npb24sIG9yaWdpbmFsLCBlZmZlY3QzKTtcbiAgaWYgKHZhbHVlID09PSBcImtleVwiKVxuICAgIHJldHVybiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0ID09PSB2b2lkIDAgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpXG4gICAgICByZXN1bHQgPSBcIlwiO1xuICAgIG11dGF0ZURvbSgoKSA9PiBiaW5kKGVsLCB2YWx1ZSwgcmVzdWx0LCBtb2RpZmllcnMpKTtcbiAgfSkpO1xufSk7XG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBleHByZXNzaW9uLCBvcmlnaW5hbCwgZWZmZWN0Mykge1xuICBsZXQgZ2V0QmluZGluZ3MgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgbGV0IGNsZWFudXBSdW5uZXJzID0gW107XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICAgIGdldEJpbmRpbmdzKChiaW5kaW5ncykgPT4ge1xuICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBPYmplY3QuZW50cmllcyhiaW5kaW5ncykubWFwKChbbmFtZSwgdmFsdWVdKSA9PiAoe25hbWUsIHZhbHVlfSkpO1xuICAgICAgYXR0cmlidXRlc09ubHkoYXR0cmlidXRlcykuZm9yRWFjaCgoe25hbWUsIHZhbHVlfSwgaW5kZXgpID0+IHtcbiAgICAgICAgYXR0cmlidXRlc1tpbmRleF0gPSB7XG4gICAgICAgICAgbmFtZTogYHgtYmluZDoke25hbWV9YCxcbiAgICAgICAgICB2YWx1ZTogYFwiJHt2YWx1ZX1cImBcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgZGlyZWN0aXZlcyhlbCwgYXR0cmlidXRlcywgb3JpZ2luYWwpLm1hcCgoaGFuZGxlKSA9PiB7XG4gICAgICAgIGNsZWFudXBSdW5uZXJzLnB1c2goaGFuZGxlLnJ1bkNsZWFudXBzKTtcbiAgICAgICAgaGFuZGxlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pIHtcbiAgZWwuX3hfa2V5RXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtZGF0YS5qc1xuYWRkUm9vdFNlbGVjdG9yKCgpID0+IGBbJHtwcmVmaXgoXCJkYXRhXCIpfV1gKTtcbmRpcmVjdGl2ZShcImRhdGFcIiwgc2tpcER1cmluZ0Nsb25lKChlbCwge2V4cHJlc3Npb259LCB7Y2xlYW51cH0pID0+IHtcbiAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24gPT09IFwiXCIgPyBcInt9XCIgOiBleHByZXNzaW9uO1xuICBsZXQgbWFnaWNDb250ZXh0ID0ge307XG4gIGluamVjdE1hZ2ljcyhtYWdpY0NvbnRleHQsIGVsKTtcbiAgbGV0IGRhdGFQcm92aWRlckNvbnRleHQgPSB7fTtcbiAgaW5qZWN0RGF0YVByb3ZpZGVycyhkYXRhUHJvdmlkZXJDb250ZXh0LCBtYWdpY0NvbnRleHQpO1xuICBsZXQgZGF0YTIgPSBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwge3Njb3BlOiBkYXRhUHJvdmlkZXJDb250ZXh0fSk7XG4gIGluamVjdE1hZ2ljcyhkYXRhMiwgZWwpO1xuICBsZXQgcmVhY3RpdmVEYXRhID0gcmVhY3RpdmUoZGF0YTIpO1xuICBpbml0SW50ZXJjZXB0b3JzKHJlYWN0aXZlRGF0YSk7XG4gIGxldCB1bmRvID0gYWRkU2NvcGVUb05vZGUoZWwsIHJlYWN0aXZlRGF0YSk7XG4gIHJlYWN0aXZlRGF0YVtcImluaXRcIl0gJiYgZXZhbHVhdGUoZWwsIHJlYWN0aXZlRGF0YVtcImluaXRcIl0pO1xuICBjbGVhbnVwKCgpID0+IHtcbiAgICB1bmRvKCk7XG4gICAgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSk7XG4gIH0pO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXNob3cuanNcbmRpcmVjdGl2ZShcInNob3dcIiwgKGVsLCB7bW9kaWZpZXJzLCBleHByZXNzaW9ufSwge2VmZmVjdDogZWZmZWN0M30pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBsZXQgaGlkZSA9ICgpID0+IG11dGF0ZURvbSgoKSA9PiB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsLl94X2lzU2hvd24gPSBmYWxzZTtcbiAgfSk7XG4gIGxldCBzaG93ID0gKCkgPT4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAxICYmIGVsLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgIH1cbiAgICBlbC5feF9pc1Nob3duID0gdHJ1ZTtcbiAgfSk7XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IHNldFRpbWVvdXQoc2hvdyk7XG4gIGxldCB0b2dnbGUgPSBvbmNlKCh2YWx1ZSkgPT4gdmFsdWUgPyBzaG93KCkgOiBoaWRlKCksICh2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZWwuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBpZiAoIWZpcnN0VGltZSAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImltbWVkaWF0ZVwiKSlcbiAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICB0b2dnbGUodmFsdWUpO1xuICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWZvci5qc1xuZGlyZWN0aXZlKFwiZm9yXCIsIChlbCwge2V4cHJlc3Npb259LCB7ZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwfSkgPT4ge1xuICBsZXQgaXRlcmF0b3JOYW1lcyA9IHBhcnNlRm9yRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlSXRlbXMgPSBldmFsdWF0ZUxhdGVyKGVsLCBpdGVyYXRvck5hbWVzLml0ZW1zKTtcbiAgbGV0IGV2YWx1YXRlS2V5ID0gZXZhbHVhdGVMYXRlcihlbCwgZWwuX3hfa2V5RXhwcmVzc2lvbiB8fCBcImluZGV4XCIpO1xuICBlbC5feF9wcmV2S2V5cyA9IFtdO1xuICBlbC5feF9sb29rdXAgPSB7fTtcbiAgZWZmZWN0MygoKSA9PiBsb29wKGVsLCBpdGVyYXRvck5hbWVzLCBldmFsdWF0ZUl0ZW1zLCBldmFsdWF0ZUtleSkpO1xuICBjbGVhbnVwKCgpID0+IHtcbiAgICBPYmplY3QudmFsdWVzKGVsLl94X2xvb2t1cCkuZm9yRWFjaCgoZWwyKSA9PiBlbDIucmVtb3ZlKCkpO1xuICAgIGRlbGV0ZSBlbC5feF9wcmV2S2V5cztcbiAgICBkZWxldGUgZWwuX3hfbG9va3VwO1xuICB9KTtcbn0pO1xuZnVuY3Rpb24gbG9vcChlbCwgaXRlcmF0b3JOYW1lcywgZXZhbHVhdGVJdGVtcywgZXZhbHVhdGVLZXkpIHtcbiAgbGV0IGlzT2JqZWN0ID0gKGkpID0+IHR5cGVvZiBpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGkpO1xuICBsZXQgdGVtcGxhdGVFbCA9IGVsO1xuICBldmFsdWF0ZUl0ZW1zKChpdGVtcykgPT4ge1xuICAgIGlmIChpc051bWVyaWMzKGl0ZW1zKSAmJiBpdGVtcyA+PSAwKSB7XG4gICAgICBpdGVtcyA9IEFycmF5LmZyb20oQXJyYXkoaXRlbXMpLmtleXMoKSwgKGkpID0+IGkgKyAxKTtcbiAgICB9XG4gICAgaWYgKGl0ZW1zID09PSB2b2lkIDApXG4gICAgICBpdGVtcyA9IFtdO1xuICAgIGxldCBsb29rdXAgPSBlbC5feF9sb29rdXA7XG4gICAgbGV0IHByZXZLZXlzID0gZWwuX3hfcHJldktleXM7XG4gICAgbGV0IHNjb3BlcyA9IFtdO1xuICAgIGxldCBrZXlzID0gW107XG4gICAgaWYgKGlzT2JqZWN0KGl0ZW1zKSkge1xuICAgICAgaXRlbXMgPSBPYmplY3QuZW50cmllcyhpdGVtcykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgbGV0IHNjb3BlID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgdmFsdWUsIGtleSwgaXRlbXMpO1xuICAgICAgICBldmFsdWF0ZUtleSgodmFsdWUyKSA9PiBrZXlzLnB1c2godmFsdWUyKSwge3Njb3BlOiB7aW5kZXg6IGtleSwgLi4uc2NvcGV9fSk7XG4gICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzY29wZSA9IGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW1zW2ldLCBpLCBpdGVtcyk7XG4gICAgICAgIGV2YWx1YXRlS2V5KCh2YWx1ZSkgPT4ga2V5cy5wdXNoKHZhbHVlKSwge3Njb3BlOiB7aW5kZXg6IGksIC4uLnNjb3BlfX0pO1xuICAgICAgICBzY29wZXMucHVzaChzY29wZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBhZGRzID0gW107XG4gICAgbGV0IG1vdmVzID0gW107XG4gICAgbGV0IHJlbW92ZXMgPSBbXTtcbiAgICBsZXQgc2FtZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gcHJldktleXNbaV07XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgICAgICByZW1vdmVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcHJldktleXMgPSBwcmV2S2V5cy5maWx0ZXIoKGtleSkgPT4gIXJlbW92ZXMuaW5jbHVkZXMoa2V5KSk7XG4gICAgbGV0IGxhc3RLZXkgPSBcInRlbXBsYXRlXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCBwcmV2SW5kZXggPSBwcmV2S2V5cy5pbmRleE9mKGtleSk7XG4gICAgICBpZiAocHJldkluZGV4ID09PSAtMSkge1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UoaSwgMCwga2V5KTtcbiAgICAgICAgYWRkcy5wdXNoKFtsYXN0S2V5LCBpXSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZJbmRleCAhPT0gaSkge1xuICAgICAgICBsZXQga2V5SW5TcG90ID0gcHJldktleXMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICBsZXQga2V5Rm9yU3BvdCA9IHByZXZLZXlzLnNwbGljZShwcmV2SW5kZXggLSAxLCAxKVswXTtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKGksIDAsIGtleUZvclNwb3QpO1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UocHJldkluZGV4LCAwLCBrZXlJblNwb3QpO1xuICAgICAgICBtb3Zlcy5wdXNoKFtrZXlJblNwb3QsIGtleUZvclNwb3RdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNhbWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICAgIGxhc3RLZXkgPSBrZXk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHJlbW92ZXNbaV07XG4gICAgICBsb29rdXBba2V5XS5yZW1vdmUoKTtcbiAgICAgIGxvb2t1cFtrZXldID0gbnVsbDtcbiAgICAgIGRlbGV0ZSBsb29rdXBba2V5XTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IFtrZXlJblNwb3QsIGtleUZvclNwb3RdID0gbW92ZXNbaV07XG4gICAgICBsZXQgZWxJblNwb3QgPSBsb29rdXBba2V5SW5TcG90XTtcbiAgICAgIGxldCBlbEZvclNwb3QgPSBsb29rdXBba2V5Rm9yU3BvdF07XG4gICAgICBsZXQgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsRm9yU3BvdC5hZnRlcihtYXJrZXIpO1xuICAgICAgICBlbEluU3BvdC5hZnRlcihlbEZvclNwb3QpO1xuICAgICAgICBtYXJrZXIuYmVmb3JlKGVsSW5TcG90KTtcbiAgICAgICAgbWFya2VyLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgICByZWZyZXNoU2NvcGUoZWxGb3JTcG90LCBzY29wZXNba2V5cy5pbmRleE9mKGtleUZvclNwb3QpXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IFtsYXN0S2V5MiwgaW5kZXhdID0gYWRkc1tpXTtcbiAgICAgIGxldCBsYXN0RWwgPSBsYXN0S2V5MiA9PT0gXCJ0ZW1wbGF0ZVwiID8gdGVtcGxhdGVFbCA6IGxvb2t1cFtsYXN0S2V5Ml07XG4gICAgICBsZXQgc2NvcGUgPSBzY29wZXNbaW5kZXhdO1xuICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgbGV0IGNsb25lMiA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVFbC5jb250ZW50LCB0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwgcmVhY3RpdmUoc2NvcGUpLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGxhc3RFbC5hZnRlcihjbG9uZTIpO1xuICAgICAgICBpbml0VHJlZShjbG9uZTIpO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB3YXJuKFwieC1mb3Iga2V5IGNhbm5vdCBiZSBhbiBvYmplY3QsIGl0IG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gaW50ZWdlclwiLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIH1cbiAgICAgIGxvb2t1cFtrZXldID0gY2xvbmUyO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZWZyZXNoU2NvcGUobG9va3VwW3NhbWVzW2ldXSwgc2NvcGVzW2tleXMuaW5kZXhPZihzYW1lc1tpXSldKTtcbiAgICB9XG4gICAgdGVtcGxhdGVFbC5feF9wcmV2S2V5cyA9IGtleXM7XG4gIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgbGV0IGZvckl0ZXJhdG9yUkUgPSAvLChbXixcXH1cXF1dKikoPzosKFteLFxcfVxcXV0qKSk/JC87XG4gIGxldCBzdHJpcFBhcmVuc1JFID0gL15cXHMqXFwofFxcKVxccyokL2c7XG4gIGxldCBmb3JBbGlhc1JFID0gLyhbXFxzXFxTXSo/KVxccysoPzppbnxvZilcXHMrKFtcXHNcXFNdKikvO1xuICBsZXQgaW5NYXRjaCA9IGV4cHJlc3Npb24ubWF0Y2goZm9yQWxpYXNSRSk7XG4gIGlmICghaW5NYXRjaClcbiAgICByZXR1cm47XG4gIGxldCByZXMgPSB7fTtcbiAgcmVzLml0ZW1zID0gaW5NYXRjaFsyXS50cmltKCk7XG4gIGxldCBpdGVtID0gaW5NYXRjaFsxXS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsIFwiXCIpLnRyaW0oKTtcbiAgbGV0IGl0ZXJhdG9yTWF0Y2ggPSBpdGVtLm1hdGNoKGZvckl0ZXJhdG9yUkUpO1xuICBpZiAoaXRlcmF0b3JNYXRjaCkge1xuICAgIHJlcy5pdGVtID0gaXRlbS5yZXBsYWNlKGZvckl0ZXJhdG9yUkUsIFwiXCIpLnRyaW0oKTtcbiAgICByZXMuaW5kZXggPSBpdGVyYXRvck1hdGNoWzFdLnRyaW0oKTtcbiAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xuICAgICAgcmVzLmNvbGxlY3Rpb24gPSBpdGVyYXRvck1hdGNoWzJdLnRyaW0oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCBpdGVtLCBpbmRleCwgaXRlbXMpIHtcbiAgbGV0IHNjb3BlVmFyaWFibGVzID0ge307XG4gIGlmICgvXlxcWy4qXFxdJC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmIEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIltcIiwgXCJcIikucmVwbGFjZShcIl1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtpXTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICgvXlxcey4qXFx9JC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IG5hbWVzID0gaXRlcmF0b3JOYW1lcy5pdGVtLnJlcGxhY2UoXCJ7XCIsIFwiXCIpLnJlcGxhY2UoXCJ9XCIsIFwiXCIpLnNwbGl0KFwiLFwiKS5tYXAoKGkpID0+IGkudHJpbSgpKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBzY29wZVZhcmlhYmxlc1tuYW1lXSA9IGl0ZW1bbmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pdGVtXSA9IGl0ZW07XG4gIH1cbiAgaWYgKGl0ZXJhdG9yTmFtZXMuaW5kZXgpXG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pbmRleF0gPSBpbmRleDtcbiAgaWYgKGl0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbilcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb25dID0gaXRlbXM7XG4gIHJldHVybiBzY29wZVZhcmlhYmxlcztcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzMoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXJlZi5qc1xuZnVuY3Rpb24gaGFuZGxlcjIoKSB7XG59XG5oYW5kbGVyMi5pbmxpbmUgPSAoZWwsIHtleHByZXNzaW9ufSwge2NsZWFudXB9KSA9PiB7XG4gIGxldCByb290ID0gY2xvc2VzdFJvb3QoZWwpO1xuICBpZiAoIXJvb3QuX3hfcmVmcylcbiAgICByb290Ll94X3JlZnMgPSB7fTtcbiAgcm9vdC5feF9yZWZzW2V4cHJlc3Npb25dID0gZWw7XG4gIGNsZWFudXAoKCkgPT4gZGVsZXRlIHJvb3QuX3hfcmVmc1tleHByZXNzaW9uXSk7XG59O1xuZGlyZWN0aXZlKFwicmVmXCIsIGhhbmRsZXIyKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZi5qc1xuZGlyZWN0aXZlKFwiaWZcIiwgKGVsLCB7ZXhwcmVzc2lvbn0sIHtlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2N1cnJlbnRJZkVsKVxuICAgICAgcmV0dXJuIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGVsLmFmdGVyKGNsb25lMik7XG4gICAgICBpbml0VHJlZShjbG9uZTIpO1xuICAgIH0pO1xuICAgIGVsLl94X2N1cnJlbnRJZkVsID0gY2xvbmUyO1xuICAgIGVsLl94X3VuZG9JZiA9ICgpID0+IHtcbiAgICAgIGNsb25lMi5yZW1vdmUoKTtcbiAgICAgIGRlbGV0ZSBlbC5feF9jdXJyZW50SWZFbDtcbiAgICB9O1xuICAgIHJldHVybiBjbG9uZTI7XG4gIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGlmICghZWwuX3hfdW5kb0lmKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X3VuZG9JZigpO1xuICAgIGRlbGV0ZSBlbC5feF91bmRvSWY7XG4gIH07XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlID8gc2hvdygpIDogaGlkZSgpO1xuICB9KSk7XG4gIGNsZWFudXAoKCkgPT4gZWwuX3hfdW5kb0lmICYmIGVsLl94X3VuZG9JZigpKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LW9uLmpzXG5tYXBBdHRyaWJ1dGVzKHN0YXJ0aW5nV2l0aChcIkBcIiwgaW50byhwcmVmaXgoXCJvbjpcIikpKSk7XG5kaXJlY3RpdmUoXCJvblwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7dmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbn0sIHtjbGVhbnVwfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXhwcmVzc2lvbiA/IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pIDogKCkgPT4ge1xuICB9O1xuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBvbihlbCwgdmFsdWUsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBldmFsdWF0ZTIoKCkgPT4ge1xuICAgIH0sIHtzY29wZTogeyRldmVudDogZX0sIHBhcmFtczogW2VdfSk7XG4gIH0pO1xuICBjbGVhbnVwKCgpID0+IHJlbW92ZUxpc3RlbmVyKCkpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaW5kZXguanNcbmFscGluZV9kZWZhdWx0LnNldEV2YWx1YXRvcihub3JtYWxFdmFsdWF0b3IpO1xuYWxwaW5lX2RlZmF1bHQuc2V0UmVhY3Rpdml0eUVuZ2luZSh7cmVhY3RpdmU6IGltcG9ydF9yZWFjdGl2aXR5OS5yZWFjdGl2ZSwgZWZmZWN0OiBpbXBvcnRfcmVhY3Rpdml0eTkuZWZmZWN0LCByZWxlYXNlOiBpbXBvcnRfcmVhY3Rpdml0eTkuc3RvcCwgcmF3OiBpbXBvcnRfcmVhY3Rpdml0eTkudG9SYXd9KTtcbnZhciBzcmNfZGVmYXVsdCA9IGFscGluZV9kZWZhdWx0O1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9idWlsZHMvbW9kdWxlLmpzXG52YXIgbW9kdWxlX2RlZmF1bHQgPSBzcmNfZGVmYXVsdDtcbmV4cG9ydCB7XG4gIG1vZHVsZV9kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4iLCAiLy8gV2UgaW1wb3J0IHRoZSBDU1Mgd2hpY2ggaXMgZXh0cmFjdGVkIHRvIGl0cyBvd24gZmlsZSBieSBlc2J1aWxkLlxuLy8gUmVtb3ZlIHRoaXMgbGluZSBpZiB5b3UgYWRkIGEgeW91ciBvd24gQ1NTIGJ1aWxkIHBpcGVsaW5lIChlLmcgcG9zdGNzcykuXG4vLyBpbXBvcnQgXCIuLi9jc3MvYXBwLmNzc1wiXG5cbi8vIElmIHlvdSB3YW50IHRvIHVzZSBQaG9lbml4IGNoYW5uZWxzLCBydW4gYG1peCBoZWxwIHBoeC5nZW4uY2hhbm5lbGBcbi8vIHRvIGdldCBzdGFydGVkIGFuZCB0aGVuIHVuY29tbWVudCB0aGUgbGluZSBiZWxvdy5cbi8vIGltcG9ydCBcIi4vdXNlcl9zb2NrZXQuanNcIlxuXG4vLyBZb3UgY2FuIGluY2x1ZGUgZGVwZW5kZW5jaWVzIGluIHR3byB3YXlzLlxuLy9cbi8vIFRoZSBzaW1wbGVzdCBvcHRpb24gaXMgdG8gcHV0IHRoZW0gaW4gYXNzZXRzL3ZlbmRvciBhbmRcbi8vIGltcG9ydCB0aGVtIHVzaW5nIHJlbGF0aXZlIHBhdGhzOlxuLy9cbi8vICAgICBpbXBvcnQgXCIuL3ZlbmRvci9zb21lLXBhY2thZ2UuanNcIlxuLy9cbi8vIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gYG5wbSBpbnN0YWxsIHNvbWUtcGFja2FnZWAgYW5kIGltcG9ydFxuLy8gdGhlbSB1c2luZyBhIHBhdGggc3RhcnRpbmcgd2l0aCB0aGUgcGFja2FnZSBuYW1lOlxuLy9cbi8vICAgICBpbXBvcnQgXCJzb21lLXBhY2thZ2VcIlxuLy9cblxuLy8gSW5jbHVkZSBwaG9lbml4X2h0bWwgdG8gaGFuZGxlIG1ldGhvZD1QVVQvREVMRVRFIGluIGZvcm1zIGFuZCBidXR0b25zLlxuaW1wb3J0IFwicGhvZW5peF9odG1sXCJcbmltcG9ydCBBbHBpbmUgZnJvbSBcImFscGluZWpzXCI7XG53aW5kb3cuQWxwaW5lID0gQWxwaW5lO1xuQWxwaW5lLnN0YXJ0KCk7XG5cbi8vIEVzdGFibGlzaCBQaG9lbml4IFNvY2tldCBhbmQgTGl2ZVZpZXcgY29uZmlndXJhdGlvbi5cbmltcG9ydCB7U29ja2V0fSBmcm9tIFwicGhvZW5peFwiXG5pbXBvcnQge0xpdmVTb2NrZXR9IGZyb20gXCJwaG9lbml4X2xpdmVfdmlld1wiXG5pbXBvcnQgdG9wYmFyIGZyb20gXCIuLi92ZW5kb3IvdG9wYmFyXCJcblxubGV0IEhvb2tzID0ge31cbkhvb2tzLk1haW50YWluQXR0cnMgPSB7XG4gIGF0dHJzKCl7IHJldHVybiB0aGlzLmVsLmdldEF0dHJpYnV0ZShcImRhdGEtYXR0cnNcIikuc3BsaXQoXCIsIFwiKSB9LFxuICBiZWZvcmVVcGRhdGUoKXsgdGhpcy5wcmV2QXR0cnMgPSB0aGlzLmF0dHJzKCkubWFwKG5hbWUgPT4gW25hbWUsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKG5hbWUpXSkgfSxcbiAgdXBkYXRlZCgpeyB0aGlzLnByZXZBdHRycy5mb3JFYWNoKChbbmFtZSwgdmFsXSkgPT4gdGhpcy5lbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsKSkgfVxufVxuXG5sZXQgY3NyZlRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT0nY3NyZi10b2tlbiddXCIpLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIilcbmxldCBsaXZlU29ja2V0ID0gbmV3IExpdmVTb2NrZXQoXCIvbGl2ZVwiLCBTb2NrZXQsIHtcbiAgcGFyYW1zOiB7X2NzcmZfdG9rZW46IGNzcmZUb2tlbn0sXG4gIGhvb2tzOiBIb29rcyxcbiAgZG9tOiB7XG4gICAgb25CZWZvcmVFbFVwZGF0ZWQoZnJvbSwgdG8pIHtcbiAgICAgIGlmIChmcm9tLl94X2RhdGFTdGFjaykge1xuICAgICAgICB3aW5kb3cuQWxwaW5lLmNsb25lKGZyb20sIHRvKTtcbiAgICAgIH1cbiAgICB9LFxuICB9XG59KVxuXG4vLyBTaG93IHByb2dyZXNzIGJhciBvbiBsaXZlIG5hdmlnYXRpb24gYW5kIGZvcm0gc3VibWl0c1xudG9wYmFyLmNvbmZpZyh7YmFyQ29sb3JzOiB7MDogXCIjMjlkXCJ9LCBzaGFkb3dDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC4zKVwifSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGh4OnBhZ2UtbG9hZGluZy1zdGFydFwiLCBpbmZvID0+IHRvcGJhci5zaG93KCkpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBoeDpwYWdlLWxvYWRpbmctc3RvcFwiLCBpbmZvID0+IHRvcGJhci5oaWRlKCkpXG5cbi8vIGNvbm5lY3QgaWYgdGhlcmUgYXJlIGFueSBMaXZlVmlld3Mgb24gdGhlIHBhZ2VcbmxpdmVTb2NrZXQuY29ubmVjdCgpXG5cbi8vIGV4cG9zZSBsaXZlU29ja2V0IG9uIHdpbmRvdyBmb3Igd2ViIGNvbnNvbGUgZGVidWcgbG9ncyBhbmQgbGF0ZW5jeSBzaW11bGF0aW9uOlxuLy8gPj4gbGl2ZVNvY2tldC5lbmFibGVEZWJ1ZygpXG4vLyA+PiBsaXZlU29ja2V0LmVuYWJsZUxhdGVuY3lTaW0oMTAwMCkgIC8vIGVuYWJsZWQgZm9yIGR1cmF0aW9uIG9mIGJyb3dzZXIgc2Vzc2lvblxuLy8gPj4gbGl2ZVNvY2tldC5kaXNhYmxlTGF0ZW5jeVNpbSgpXG53aW5kb3cubGl2ZVNvY2tldCA9IGxpdmVTb2Nr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cUJBQU8sR0FBRSxLQUFLLGFBQWE7QUFBSSxnQkFBSSxLQUFFLENBQUMsR0FBRSxVQUFTLEdBQUUsS0FBSSxHQUFFLE9BQU0sR0FBRSxPQUFNLEdBQUU7QUFBUyxtQkFBTyxHQUFFLEtBQUssVUFBVTtBQUFBLGFBQUssUUFBTyxTQUFTLElBQUUsSUFBRTtBQUFDLGdCQUFHLEdBQUUsZ0JBQWM7QUFBWSxxQkFBTyxHQUFFLEtBQUssYUFBYTtBQUFJLGdCQUFJLEtBQUUsRUFBRSxLQUFLLE1BQU0sS0FBRztBQUFHLG1CQUFPLEdBQUUsRUFBQyxVQUFTLEdBQUUsSUFBRyxLQUFJLEdBQUUsSUFBRyxPQUFNLEdBQUUsSUFBRyxPQUFNLEdBQUUsSUFBRyxTQUFRLEdBQUU7QUFBQSxhQUFNLGNBQWEsU0FBUyxJQUFFO0FBQUMsZ0JBQUksS0FBRSxHQUFFLFVBQVMsS0FBRSxHQUFFLEtBQUksS0FBRSxHQUFFLE9BQU0sS0FBRSxHQUFFLE9BQU0sS0FBRSxHQUFFLFNBQVEsS0FBRSxLQUFLLGNBQVksR0FBRSxTQUFPLEdBQUUsU0FBTyxHQUFFLFNBQU8sR0FBRSxRQUFPLEtBQUUsSUFBSSxZQUFZLEtBQUssZ0JBQWMsS0FBRyxLQUFFLElBQUksU0FBUyxLQUFHLEtBQUU7QUFBRSxlQUFFLFNBQVMsTUFBSSxLQUFLLE1BQU0sT0FBTSxHQUFFLFNBQVMsTUFBSSxHQUFFLFNBQVEsR0FBRSxTQUFTLE1BQUksR0FBRSxTQUFRLEdBQUUsU0FBUyxNQUFJLEdBQUUsU0FBUSxHQUFFLFNBQVMsTUFBSSxHQUFFLFNBQVEsTUFBTSxLQUFLLElBQUcsU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxTQUFTLE1BQUksR0FBRSxXQUFXO0FBQUEsZ0JBQU8sTUFBTSxLQUFLLElBQUcsU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxTQUFTLE1BQUksR0FBRSxXQUFXO0FBQUEsZ0JBQU8sTUFBTSxLQUFLLElBQUcsU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxTQUFTLE1BQUksR0FBRSxXQUFXO0FBQUEsZ0JBQU8sTUFBTSxLQUFL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
