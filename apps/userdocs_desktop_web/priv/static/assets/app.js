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

  // ../../../deps/phoenix/priv/static/phoenix.js
  var require_phoenix = __commonJS({
    "../../../deps/phoenix/priv/static/phoenix.js"(exports, module) {
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

  // ../../../deps/phoenix_live_view/priv/static/phoenix_live_view.js
  var require_phoenix_live_view = __commonJS({
    "../../../deps/phoenix_live_view/priv/static/phoenix_live_view.js"(exports, module) {
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

  // ../../../deps/phoenix_html/priv/static/phoenix_html.js
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

  // node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var hasPassiveEvents = false;
  if (typeof window !== "undefined") {
    passiveTestOptions = {
      get passive() {
        hasPassiveEvents = true;
        return void 0;
      }
    };
    window.addEventListener("testPassive", null, passiveTestOptions);
    window.removeEventListener("testPassive", null, passiveTestOptions);
  }
  var passiveTestOptions;
  var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  var locks = [];
  var documentListenerAdded = false;
  var initialClientY = -1;
  var previousBodyOverflowSetting = void 0;
  var previousBodyPaddingRight = void 0;
  var allowTouchMove = function allowTouchMove2(el) {
    return locks.some(function(lock) {
      if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
        return true;
      }
      return false;
    });
  };
  var preventDefault = function preventDefault2(rawEvent) {
    var e = rawEvent || window.event;
    if (allowTouchMove(e.target)) {
      return true;
    }
    if (e.touches.length > 1)
      return true;
    if (e.preventDefault)
      e.preventDefault();
    return false;
  };
  var setOverflowHidden = function setOverflowHidden2(options) {
    if (previousBodyPaddingRight === void 0) {
      var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
      var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
      if (_reserveScrollBarGap && scrollBarGap > 0) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = scrollBarGap + "px";
      }
    }
    if (previousBodyOverflowSetting === void 0) {
      previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
  };
  var restoreOverflowSetting = function restoreOverflowSetting2() {
    if (previousBodyPaddingRight !== void 0) {
      document.body.style.paddingRight = previousBodyPaddingRight;
      previousBodyPaddingRight = void 0;
    }
    if (previousBodyOverflowSetting !== void 0) {
      document.body.style.overflow = previousBodyOverflowSetting;
      previousBodyOverflowSetting = void 0;
    }
  };
  var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
    return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
  };
  var handleScroll = function handleScroll2(event, targetElement) {
    var clientY = event.targetTouches[0].clientY - initialClientY;
    if (allowTouchMove(event.target)) {
      return false;
    }
    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
      return preventDefault(event);
    }
    if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
      return preventDefault(event);
    }
    event.stopPropagation();
    return true;
  };
  var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
    if (!targetElement) {
      console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
      return;
    }
    if (locks.some(function(lock2) {
      return lock2.targetElement === targetElement;
    })) {
      return;
    }
    var lock = {
      targetElement,
      options: options || {}
    };
    locks = [].concat(_toConsumableArray(locks), [lock]);
    if (isIosDevice) {
      targetElement.ontouchstart = function(event) {
        if (event.targetTouches.length === 1) {
          initialClientY = event.targetTouches[0].clientY;
        }
      };
      targetElement.ontouchmove = function(event) {
        if (event.targetTouches.length === 1) {
          handleScroll(event, targetElement);
        }
      };
      if (!documentListenerAdded) {
        document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
        documentListenerAdded = true;
      }
    } else {
      setOverflowHidden(options);
    }
  };
  var enableBodyScroll = function enableBodyScroll2(targetElement) {
    if (!targetElement) {
      console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
      return;
    }
    locks = locks.filter(function(lock) {
      return lock.targetElement !== targetElement;
    });
    if (isIosDevice) {
      targetElement.ontouchstart = null;
      targetElement.ontouchmove = null;
      if (documentListenerAdded && locks.length === 0) {
        document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
        documentListenerAdded = false;
      }
    } else if (!locks.length) {
      restoreOverflowSetting();
    }
  };

  // node_modules/image-compare-viewer/src/scripts/index.js
  var ImageCompare = class {
    constructor(el, settings = {}) {
      const defaults = {
        controlColor: "#FFFFFF",
        controlShadow: true,
        addCircle: false,
        addCircleBlur: true,
        showLabels: false,
        labelOptions: {
          before: "Before",
          after: "After",
          onHover: false
        },
        smoothing: true,
        smoothingAmount: 100,
        hoverStart: false,
        verticalMode: false,
        startingPoint: 50,
        fluidMode: false
      };
      this.settings = Object.assign(defaults, settings);
      this.safariAgent = navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1;
      this.el = el;
      this.images = {};
      this.wrapper = null;
      this.control = null;
      this.arrowContainer = null;
      this.arrowAnimator = [];
      this.active = false;
      this.slideWidth = 50;
      this.lineWidth = 2;
      this.arrowCoordinates = {
        circle: [5, 3],
        standard: [8, 0]
      };
    }
    mount() {
      if (this.safariAgent) {
        this.settings.smoothing = false;
      }
      this._shapeContainer();
      this._getImages();
      this._buildControl();
      this._events();
    }
    _events() {
      let bodyStyles = `

    `;
      this.el.addEventListener("mousedown", (ev) => {
        this._activate(true);
        document.body.classList.add("icv__body");
        disableBodyScroll(this.el, { reserveScrollBarGap: true });
        this._slideCompare(ev);
      });
      this.el.addEventListener("mousemove", (ev) => this.active && this._slideCompare(ev));
      this.el.addEventListener("mouseup", () => this._activate(false));
      document.body.addEventListener("mouseup", () => {
        document.body.classList.remove("icv__body");
        enableBodyScroll(this.el);
        this._activate(false);
      });
      this.control.addEventListener("touchstart", (e) => {
        this._activate(true);
        document.body.classList.add("icv__body");
        disableBodyScroll(this.el, { reserveScrollBarGap: true });
      });
      this.el.addEventListener("touchmove", (ev) => {
        this.active && this._slideCompare(ev);
      });
      this.el.addEventListener("touchend", () => {
        this._activate(false);
        document.body.classList.remove("icv__body");
        enableBodyScroll(this.el);
      });
      this.el.addEventListener("mouseenter", () => {
        this.settings.hoverStart && this._activate(true);
        let coord = this.settings.addCircle ? this.arrowCoordinates.circle : this.arrowCoordinates.standard;
        this.arrowAnimator.forEach((anim, i) => {
          anim.style.cssText = `
        ${this.settings.verticalMode ? `transform: translateY(${coord[1] * (i === 0 ? 1 : -1)}px);` : `transform: translateX(${coord[1] * (i === 0 ? 1 : -1)}px);`}
        `;
        });
      });
      this.el.addEventListener("mouseleave", () => {
        let coord = this.settings.addCircle ? this.arrowCoordinates.circle : this.arrowCoordinates.standard;
        this.arrowAnimator.forEach((anim, i) => {
          anim.style.cssText = `
        ${this.settings.verticalMode ? `transform: translateY(${i === 0 ? `${coord[0]}px` : `-${coord[0]}px`});` : `transform: translateX(${i === 0 ? `${coord[0]}px` : `-${coord[0]}px`});`}
        `;
        });
      });
    }
    _slideCompare(ev) {
      let bounds = this.el.getBoundingClientRect();
      let x = ev.touches !== void 0 ? ev.touches[0].clientX - bounds.left : ev.clientX - bounds.left;
      let y = ev.touches !== void 0 ? ev.touches[0].clientY - bounds.top : ev.clientY - bounds.top;
      let position = this.settings.verticalMode ? y / bounds.height * 100 : x / bounds.width * 100;
      if (position >= 0 && position <= 100) {
        this.settings.verticalMode ? this.control.style.top = `calc(${position}% - ${this.slideWidth / 2}px)` : this.control.style.left = `calc(${position}% - ${this.slideWidth / 2}px)`;
        if (this.settings.fluidMode) {
          this.settings.verticalMode ? this.wrapper.style.clipPath = `inset(0 0 ${100 - position}% 0)` : this.wrapper.style.clipPath = `inset(0 0 0 ${position}%)`;
        } else {
          this.settings.verticalMode ? this.wrapper.style.height = `calc(${position}%)` : this.wrapper.style.width = `calc(${100 - position}%)`;
        }
      }
    }
    _activate(state) {
      this.active = state;
    }
    _shapeContainer() {
      let imposter = document.createElement("div");
      let label_l = document.createElement("span");
      let label_r = document.createElement("span");
      label_l.classList.add("icv__label", "icv__label-before", "keep");
      label_r.classList.add("icv__label", "icv__label-after", "keep");
      if (this.settings.labelOptions.onHover) {
        label_l.classList.add("on-hover");
        label_r.classList.add("on-hover");
      }
      if (this.settings.verticalMode) {
        label_l.classList.add("vertical");
        label_r.classList.add("vertical");
      }
      label_l.innerHTML = this.settings.labelOptions.before || "Before";
      label_r.innerHTML = this.settings.labelOptions.after || "After";
      if (this.settings.showLabels) {
        this.el.appendChild(label_l);
        this.el.appendChild(label_r);
      }
      this.el.classList.add(`icv`, this.settings.verticalMode ? `icv__icv--vertical` : `icv__icv--horizontal`, this.settings.fluidMode ? `icv__is--fluid` : `standard`);
      imposter.classList.add("icv__imposter");
      this.el.appendChild(imposter);
    }
    _buildControl() {
      let control = document.createElement("div");
      let uiLine = document.createElement("div");
      let arrows = document.createElement("div");
      let circle = document.createElement("div");
      const arrowSize = "20";
      arrows.classList.add("icv__theme-wrapper");
      for (var idx = 0; idx <= 1; idx++) {
        let animator = document.createElement(`div`);
        let arrow = `<svg
      height="15"
      width="15"
       style="
       transform: 
       scale(${this.settings.addCircle ? 0.7 : 1.5})  
       rotateZ(${idx === 0 ? this.settings.verticalMode ? `-90deg` : `180deg` : this.settings.verticalMode ? `90deg` : `0deg`}); height: ${arrowSize}px; width: ${arrowSize}px;
       
       ${this.settings.controlShadow ? `
       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));
       filter: drop-shadow( 0px ${idx === 0 ? "-3px" : "3px"} 5px rgba(0, 0, 0, .33));
       ` : ``}
       "
       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">
       <path ${this.settings.addCircle ? `fill="transparent"` : `fill="${this.settings.controlColor}"`}
       stroke="${this.settings.controlColor}"
       stroke-linecap="round"
       stroke-width="${this.settings.addCircle ? 3 : 0}"
       d="M4.5 1.9L10 7.65l-5.5 5.4"
       />
     </svg>`;
        animator.innerHTML += arrow;
        this.arrowAnimator.push(animator);
        arrows.appendChild(animator);
      }
      let coord = this.settings.addCircle ? this.arrowCoordinates.circle : this.arrowCoordinates.standard;
      this.arrowAnimator.forEach((anim, i) => {
        anim.classList.add("icv__arrow-wrapper");
        anim.style.cssText = `
      ${this.settings.verticalMode ? `transform: translateY(${i === 0 ? `${coord[0]}px` : `-${coord[0]}px`});` : `transform: translateX(${i === 0 ? `${coord[0]}px` : `-${coord[0]}px`});`}
      `;
      });
      control.classList.add("icv__control");
      control.style.cssText = `
    ${this.settings.verticalMode ? `height` : `width `}: ${this.slideWidth}px;
    ${this.settings.verticalMode ? `top` : `left `}: calc(${this.settings.startingPoint}% - ${this.slideWidth / 2}px);
    ${"ontouchstart" in document.documentElement ? `` : this.settings.smoothing ? `transition: ${this.settings.smoothingAmount}ms ease-out;` : ``}
    `;
      uiLine.classList.add("icv__control-line");
      uiLine.style.cssText = `
      ${this.settings.verticalMode ? `height` : `width `}: ${this.lineWidth}px;
      background: ${this.settings.controlColor};
        ${this.settings.controlShadow ? `box-shadow: 0px 0px 15px rgba(0,0,0,0.33);` : ``}
    `;
      let uiLine2 = uiLine.cloneNode(true);
      circle.classList.add("icv__circle");
      circle.style.cssText = `

      ${this.settings.addCircleBlur && `-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)`};
      
      border: ${this.lineWidth}px solid ${this.settings.controlColor};
      ${this.settings.controlShadow && `box-shadow: 0px 0px 15px rgba(0,0,0,0.33)`};
    `;
      control.appendChild(uiLine);
      this.settings.addCircle && control.appendChild(circle);
      control.appendChild(arrows);
      control.appendChild(uiLine2);
      this.arrowContainer = arrows;
      this.control = control;
      this.el.appendChild(control);
    }
    _getImages() {
      let children = this.el.querySelectorAll("img, .keep");
      this.el.innerHTML = "";
      children.forEach((img) => {
        this.el.appendChild(img);
      });
      let childrenImages = [...children].filter((element) => element.nodeName.toLowerCase() === "img");
      this.settings.verticalMode && childrenImages.reverse();
      for (let idx = 0; idx <= 1; idx++) {
        let child = childrenImages[idx];
        child.classList.add("icv__img");
        child.classList.add(idx === 0 ? `icv__img-a` : `icv__img-b`);
        if (idx === 1) {
          let wrapper = document.createElement("div");
          let afterUrl = childrenImages[1].src;
          wrapper.classList.add("icv__wrapper");
          wrapper.style.cssText = `
            width: ${100 - this.settings.startingPoint}%; 
            height: ${this.settings.startingPoint}%;

            ${"ontouchstart" in document.documentElement ? `` : this.settings.smoothing ? `transition: ${this.settings.smoothingAmount}ms ease-out;` : ``}
            ${this.settings.fluidMode && `background-image: url(${afterUrl}); clip-path: inset(${this.settings.verticalMode ? ` 0 0 ${100 - this.settings.startingPoint}% 0` : `0 0 0 ${this.settings.startingPoint}%`})`}
        `;
          wrapper.appendChild(child);
          this.wrapper = wrapper;
          this.el.appendChild(this.wrapper);
        }
      }
      if (this.settings.fluidMode) {
        let url = childrenImages[0].src;
        let fluidWrapper = document.createElement("div");
        fluidWrapper.classList.add("icv__fluidwrapper");
        fluidWrapper.style.cssText = `
 
        background-image: url(${url});
        
      `;
        this.el.appendChild(fluidWrapper);
      }
    }
  };
  var scripts_default = ImageCompare;

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
  Hooks.ImageComparison = {
    mounted() {
      const element = document.getElementById("image-compare");
      window.viewer = new scripts_default(element).mount();
    }
  };
  Hooks.dragDropReorder = {
    mounted() {
      this.el.addEventListener("drop", (e) => {
        e.preventDefault();
        this.pushEvent("reorder_end", { "step-id": e.target.id });
      });
      this.el.addEventListener("dragenter", (e) => {
        console.log("dragenter");
        e.dataTransfer.dropEffect = "move";
        e.preventDefault();
        console.log(e.target);
        if (e.target.id) {
          const element = document.getElementById(e.target.id);
          var order = element.getAttribute("order");
          var stepId = element.getAttribute("step-id");
          console.log(order);
          console.log(stepId);
          this.pushEvent("reorder_dragenter", { "order": order, "step-id": stepId });
        }
      });
      this.el.addEventListener("dragstart", (e) => {
        e.dataTransfer.dropEffect = "move";
        const element = document.getElementById(e.target.id);
        var id = element.getAttribute("step-id");
        this.pushEvent("reorder_start", { "id": id });
      });
      this.el.addEventListener("dragend", (e) => {
        this.pushEvent("reorder_dragend");
      });
    }
  };
  Hooks.marginFields = {
    mounted() {
      this.el.addEventListener("input", (e) => {
        updateValue("margin-top-input", this.el.value);
        updateValue("margin-bottom-input", this.el.value);
        updateValue("margin-left-input", this.el.value);
        updateValue("margin-right-input", this.el.value);
      });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vZGVwcy9waG9lbml4L3ByaXYvc3RhdGljL3Bob2VuaXguanMiLCAiLi4vLi4vLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9wcml2L3N0YXRpYy9waG9lbml4X2xpdmVfdmlldy5qcyIsICIuLi8uLi8uLi9hc3NldHMvdmVuZG9yL3RvcGJhci5qcyIsICIuLi8uLi8uLi8uLi8uLi9kZXBzL3Bob2VuaXhfaHRtbC9wcml2L3N0YXRpYy9waG9lbml4X2h0bWwuanMiLCAiLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9hbHBpbmVqcy9kaXN0L21vZHVsZS5lc20uanMiLCAiLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9ib2R5LXNjcm9sbC1sb2NrL2xpYi9ib2R5U2Nyb2xsTG9jay5lc20uanMiLCAiLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9pbWFnZS1jb21wYXJlLXZpZXdlci9zcmMvc2NyaXB0cy9pbmRleC5qcyIsICIuLi8uLi8uLi9hc3NldHMvanMvYXBwLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlBob2VuaXg9dCgpOmUuUGhvZW5peD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4oaSl7aWYodFtpXSlyZXR1cm4gdFtpXS5leHBvcnRzO3ZhciBvPXRbaV09e2k6aSxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW2ldLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQsaSl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Oml9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihpKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQoaSxvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiBpfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MCl9KFtmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpe2UuZXhwb3J0cz10LlBob2VuaXg9bigyKX0pLmNhbGwodGhpcyxuKDEpKX0sZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gYShlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxzKGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIG8oZSl7cmV0dXJuKG89XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIHIoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKSlyZXR1cm47dmFyIG49W10saT0hMCxvPSExLHI9dm9pZCAwO3RyeXtmb3IodmFyIHMsYT1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKGk9KHM9YS5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKHMudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO2k9ITApO31jYXRjaChlKXtvPSEwLHI9ZX1maW5hbGx5e3RyeXtpfHxudWxsPT1hLnJldHVybnx8YS5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgcn19cmV0dXJuIG59KGUsdCl8fHMoZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHMoZSx0KXtpZihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gYShlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4/QXJyYXkuZnJvbShuKTpcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qobik/YShlLHQpOnZvaWQgMH19ZnVuY3Rpb24gYShlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLGk9bmV3IEFycmF5KHQpO248dDtuKyspaVtuXT1lW25dO3JldHVybiBpfWZ1bmN0aW9uIGMoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIHUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtpLmVudW1lcmFibGU9aS5lbnVtZXJhYmxlfHwhMSxpLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBpJiYoaS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaS5rZXksaSl9fWZ1bmN0aW9uIGgoZSx0LG4pe3JldHVybiB0JiZ1KGUucHJvdG90eXBlLHQpLG4mJnUoZSxuKSxlfW4ucih0KSxuLmQodCxcIkNoYW5uZWxcIiwoZnVuY3Rpb24oKXtyZXR1cm4gT30pKSxuLmQodCxcIlNlcmlhbGl6ZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gX30pKSxuLmQodCxcIlNvY2tldFwiLChmdW5jdGlvbigpe3JldHVybiBIfSkpLG4uZCh0LFwiTG9uZ1BvbGxcIiwoZnVuY3Rpb24oKXtyZXR1cm4gVX0pKSxuLmQodCxcIkFqYXhcIiwoZnVuY3Rpb24oKXtyZXR1cm4gRH0pKSxuLmQodCxcIlByZXNlbmNlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE19KSk7dmFyIGw9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpudWxsLGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6bnVsbCxkPWx8fGZ8fHZvaWQgMCxwPTAsdj0xLHk9MixtPTMsZz1cImNsb3NlZFwiLGs9XCJlcnJvcmVkXCIsYj1cImpvaW5lZFwiLGo9XCJqb2luaW5nXCIsVD1cImxlYXZpbmdcIixDPVwicGh4X2Nsb3NlXCIsUj1cInBoeF9lcnJvclwiLEU9XCJwaHhfam9pblwiLHc9XCJwaHhfcmVwbHlcIixTPVwicGh4X2xlYXZlXCIsQT1cImxvbmdwb2xsXCIsTD1cIndlYnNvY2tldFwiLHg9ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4gZTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZX19LFA9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixpLG8pe2ModGhpcyxlKSx0aGlzLmNoYW5uZWw9dCx0aGlzLmV2ZW50PW4sdGhpcy5wYXlsb2FkPWl8fGZ1bmN0aW9uKCl7cmV0dXJue319LHRoaXMucmVjZWl2ZWRSZXNwPW51bGwsdGhpcy50aW1lb3V0PW8sdGhpcy50aW1lb3V0VGltZXI9bnVsbCx0aGlzLnJlY0hvb2tzPVtdLHRoaXMuc2VudD0hMX1yZXR1cm4gaChlLFt7a2V5OlwicmVzZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy50aW1lb3V0PWUsdGhpcy5yZXNldCgpLHRoaXMuc2VuZCgpfX0se2tleTpcInNlbmRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaGFzUmVjZWl2ZWQoXCJ0aW1lb3V0XCIpfHwodGhpcy5zdGFydFRpbWVvdXQoKSx0aGlzLnNlbnQ9ITAsdGhpcy5jaGFubmVsLnNvY2tldC5wdXNoKHt0b3BpYzp0aGlzLmNoYW5uZWwudG9waWMsZXZlbnQ6dGhpcy5ldmVudCxwYXlsb2FkOnRoaXMucGF5bG9hZCgpLHJlZjp0aGlzLnJlZixqb2luX3JlZjp0aGlzLmNoYW5uZWwuam9pblJlZigpfSkpfX0se2tleTpcInJlY2VpdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmhhc1JlY2VpdmVkKGUpJiZ0KHRoaXMucmVjZWl2ZWRSZXNwLnJlc3BvbnNlKSx0aGlzLnJlY0hvb2tzLnB1c2goe3N0YXR1czplLGNhbGxiYWNrOnR9KSx0aGlzfX0se2tleTpcInJlc2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmNhbmNlbFJlZkV2ZW50KCksdGhpcy5yZWY9bnVsbCx0aGlzLnJlZkV2ZW50PW51bGwsdGhpcy5yZWNlaXZlZFJlc3A9bnVsbCx0aGlzLnNlbnQ9ITF9fSx7a2V5OlwibWF0Y2hSZWNlaXZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGF0dXMsbj1lLnJlc3BvbnNlO2UucmVmO3RoaXMucmVjSG9va3MuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zdGF0dXM9PT10fSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNhbGxiYWNrKG4pfSkpfX0se2tleTpcImNhbmNlbFJlZkV2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlZkV2ZW50JiZ0aGlzLmNoYW5uZWwub2ZmKHRoaXMucmVmRXZlbnQpfX0se2tleTpcImNhbmNlbFRpbWVvdXRcIix2YWx1ZTpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRUaW1lciksdGhpcy50aW1lb3V0VGltZXI9bnVsbH19LHtrZXk6XCJzdGFydFRpbWVvdXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy50aW1lb3V0VGltZXImJnRoaXMuY2FuY2VsVGltZW91dCgpLHRoaXMucmVmPXRoaXMuY2hhbm5lbC5zb2NrZXQubWFrZVJlZigpLHRoaXMucmVmRXZlbnQ9dGhpcy5jaGFubmVsLnJlcGx5RXZlbnROYW1lKHRoaXMucmVmKSx0aGlzLmNoYW5uZWwub24odGhpcy5yZWZFdmVudCwoZnVuY3Rpb24odCl7ZS5jYW5jZWxSZWZFdmVudCgpLGUuY2FuY2VsVGltZW91dCgpLGUucmVjZWl2ZWRSZXNwPXQsZS5tYXRjaFJlY2VpdmUodCl9KSksdGhpcy50aW1lb3V0VGltZXI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLnRyaWdnZXIoXCJ0aW1lb3V0XCIse30pfSksdGhpcy50aW1lb3V0KX19LHtrZXk6XCJoYXNSZWNlaXZlZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlY2VpdmVkUmVzcCYmdGhpcy5yZWNlaXZlZFJlc3Auc3RhdHVzPT09ZX19LHtrZXk6XCJ0cmlnZ2VyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmNoYW5uZWwudHJpZ2dlcih0aGlzLnJlZkV2ZW50LHtzdGF0dXM6ZSxyZXNwb25zZTp0fSl9fV0pLGV9KCksTz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLGkpe3ZhciBvPXRoaXM7Yyh0aGlzLGUpLHRoaXMuc3RhdGU9Zyx0aGlzLnRvcGljPXQsdGhpcy5wYXJhbXM9eChufHx7fSksdGhpcy5zb2NrZXQ9aSx0aGlzLmJpbmRpbmdzPVtdLHRoaXMuYmluZGluZ1JlZj0wLHRoaXMudGltZW91dD10aGlzLnNvY2tldC50aW1lb3V0LHRoaXMuam9pbmVkT25jZT0hMSx0aGlzLmpvaW5QdXNoPW5ldyBQKHRoaXMsRSx0aGlzLnBhcmFtcyx0aGlzLnRpbWVvdXQpLHRoaXMucHVzaEJ1ZmZlcj1bXSx0aGlzLnN0YXRlQ2hhbmdlUmVmcz1bXSx0aGlzLnJlam9pblRpbWVyPW5ldyBOKChmdW5jdGlvbigpe28uc29ja2V0LmlzQ29ubmVjdGVkKCkmJm8ucmVqb2luKCl9KSx0aGlzLnNvY2tldC5yZWpvaW5BZnRlck1zKSx0aGlzLnN0YXRlQ2hhbmdlUmVmcy5wdXNoKHRoaXMuc29ja2V0Lm9uRXJyb3IoKGZ1bmN0aW9uKCl7cmV0dXJuIG8ucmVqb2luVGltZXIucmVzZXQoKX0pKSksdGhpcy5zdGF0ZUNoYW5nZVJlZnMucHVzaCh0aGlzLnNvY2tldC5vbk9wZW4oKGZ1bmN0aW9uKCl7by5yZWpvaW5UaW1lci5yZXNldCgpLG8uaXNFcnJvcmVkKCkmJm8ucmVqb2luKCl9KSkpLHRoaXMuam9pblB1c2gucmVjZWl2ZShcIm9rXCIsKGZ1bmN0aW9uKCl7by5zdGF0ZT1iLG8ucmVqb2luVGltZXIucmVzZXQoKSxvLnB1c2hCdWZmZXIuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2VuZCgpfSkpLG8ucHVzaEJ1ZmZlcj1bXX0pKSx0aGlzLmpvaW5QdXNoLnJlY2VpdmUoXCJlcnJvclwiLChmdW5jdGlvbigpe28uc3RhdGU9ayxvLnNvY2tldC5pc0Nvbm5lY3RlZCgpJiZvLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpfSkpLHRoaXMub25DbG9zZSgoZnVuY3Rpb24oKXtvLnJlam9pblRpbWVyLnJlc2V0KCksby5zb2NrZXQuaGFzTG9nZ2VyKCkmJm8uc29ja2V0LmxvZyhcImNoYW5uZWxcIixcImNsb3NlIFwiLmNvbmNhdChvLnRvcGljLFwiIFwiKS5jb25jYXQoby5qb2luUmVmKCkpKSxvLnN0YXRlPWcsby5zb2NrZXQucmVtb3ZlKG8pfSkpLHRoaXMub25FcnJvcigoZnVuY3Rpb24oZSl7by5zb2NrZXQuaGFzTG9nZ2VyKCkmJm8uc29ja2V0LmxvZyhcImNoYW5uZWxcIixcImVycm9yIFwiLmNvbmNhdChvLnRvcGljKSxlKSxvLmlzSm9pbmluZygpJiZvLmpvaW5QdXNoLnJlc2V0KCksby5zdGF0ZT1rLG8uc29ja2V0LmlzQ29ubmVjdGVkKCkmJm8ucmVqb2luVGltZXIuc2NoZWR1bGVUaW1lb3V0KCl9KSksdGhpcy5qb2luUHVzaC5yZWNlaXZlKFwidGltZW91dFwiLChmdW5jdGlvbigpe28uc29ja2V0Lmhhc0xvZ2dlcigpJiZvLnNvY2tldC5sb2coXCJjaGFubmVsXCIsXCJ0aW1lb3V0IFwiLmNvbmNhdChvLnRvcGljLFwiIChcIikuY29uY2F0KG8uam9pblJlZigpLFwiKVwiKSxvLmpvaW5QdXNoLnRpbWVvdXQpLG5ldyBQKG8sUyx4KHt9KSxvLnRpbWVvdXQpLnNlbmQoKSxvLnN0YXRlPWssby5qb2luUHVzaC5yZXNldCgpLG8uc29ja2V0LmlzQ29ubmVjdGVkKCkmJm8ucmVqb2luVGltZXIuc2NoZWR1bGVUaW1lb3V0KCl9KSksdGhpcy5vbih3LChmdW5jdGlvbihlLHQpe28udHJpZ2dlcihvLnJlcGx5RXZlbnROYW1lKHQpLGUpfSkpfXJldHVybiBoKGUsW3trZXk6XCJqb2luXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy50aW1lb3V0O2lmKHRoaXMuam9pbmVkT25jZSl0aHJvdyBuZXcgRXJyb3IoXCJ0cmllZCB0byBqb2luIG11bHRpcGxlIHRpbWVzLiAnam9pbicgY2FuIG9ubHkgYmUgY2FsbGVkIGEgc2luZ2xlIHRpbWUgcGVyIGNoYW5uZWwgaW5zdGFuY2VcIik7cmV0dXJuIHRoaXMudGltZW91dD1lLHRoaXMuam9pbmVkT25jZT0hMCx0aGlzLnJlam9pbigpLHRoaXMuam9pblB1c2h9fSx7a2V5Olwib25DbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMub24oQyxlKX19LHtrZXk6XCJvbkVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24oUiwoZnVuY3Rpb24odCl7cmV0dXJuIGUodCl9KSl9fSx7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuYmluZGluZ1JlZisrO3JldHVybiB0aGlzLmJpbmRpbmdzLnB1c2goe2V2ZW50OmUscmVmOm4sY2FsbGJhY2s6dH0pLG59fSx7a2V5Olwib2ZmXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmJpbmRpbmdzPXRoaXMuYmluZGluZ3MuZmlsdGVyKChmdW5jdGlvbihuKXtyZXR1cm4hKG4uZXZlbnQ9PT1lJiYodm9pZCAwPT09dHx8dD09PW4ucmVmKSl9KSl9fSx7a2V5OlwiY2FuUHVzaFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkmJnRoaXMuaXNKb2luZWQoKX19LHtrZXk6XCJwdXNoXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06dGhpcy50aW1lb3V0O2lmKHQ9dHx8e30sIXRoaXMuam9pbmVkT25jZSl0aHJvdyBuZXcgRXJyb3IoXCJ0cmllZCB0byBwdXNoICdcIi5jb25jYXQoZSxcIicgdG8gJ1wiKS5jb25jYXQodGhpcy50b3BpYyxcIicgYmVmb3JlIGpvaW5pbmcuIFVzZSBjaGFubmVsLmpvaW4oKSBiZWZvcmUgcHVzaGluZyBldmVudHNcIikpO3ZhciBpPW5ldyBQKHRoaXMsZSwoZnVuY3Rpb24oKXtyZXR1cm4gdH0pLG4pO3JldHVybiB0aGlzLmNhblB1c2goKT9pLnNlbmQoKTooaS5zdGFydFRpbWVvdXQoKSx0aGlzLnB1c2hCdWZmZXIucHVzaChpKSksaX19LHtrZXk6XCJsZWF2ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp0aGlzLnRpbWVvdXQ7dGhpcy5yZWpvaW5UaW1lci5yZXNldCgpLHRoaXMuam9pblB1c2guY2FuY2VsVGltZW91dCgpLHRoaXMuc3RhdGU9VDt2YXIgbj1mdW5jdGlvbigpe2Uuc29ja2V0Lmhhc0xvZ2dlcigpJiZlLnNvY2tldC5sb2coXCJjaGFubmVsXCIsXCJsZWF2ZSBcIi5jb25jYXQoZS50b3BpYykpLGUudHJpZ2dlcihDLFwibGVhdmVcIil9LGk9bmV3IFAodGhpcyxTLHgoe30pLHQpO3JldHVybiBpLnJlY2VpdmUoXCJva1wiLChmdW5jdGlvbigpe3JldHVybiBuKCl9KSkucmVjZWl2ZShcInRpbWVvdXRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbigpfSkpLGkuc2VuZCgpLHRoaXMuY2FuUHVzaCgpfHxpLnRyaWdnZXIoXCJva1wiLHt9KSxpfX0se2tleTpcIm9uTWVzc2FnZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdH19LHtrZXk6XCJpc01lbWJlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkpe3JldHVybiB0aGlzLnRvcGljPT09ZSYmKCFpfHxpPT09dGhpcy5qb2luUmVmKCl8fCh0aGlzLnNvY2tldC5oYXNMb2dnZXIoKSYmdGhpcy5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLFwiZHJvcHBpbmcgb3V0ZGF0ZWQgbWVzc2FnZVwiLHt0b3BpYzplLGV2ZW50OnQscGF5bG9hZDpuLGpvaW5SZWY6aX0pLCExKSl9fSx7a2V5Olwiam9pblJlZlwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuam9pblB1c2gucmVmfX0se2tleTpcInJlam9pblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMudGltZW91dDt0aGlzLmlzTGVhdmluZygpfHwodGhpcy5zb2NrZXQubGVhdmVPcGVuVG9waWModGhpcy50b3BpYyksdGhpcy5zdGF0ZT1qLHRoaXMuam9pblB1c2gucmVzZW5kKGUpKX19LHtrZXk6XCJ0cmlnZ2VyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSl7dmFyIG89dGhpcy5vbk1lc3NhZ2UoZSx0LG4saSk7aWYodCYmIW8pdGhyb3cgbmV3IEVycm9yKFwiY2hhbm5lbCBvbk1lc3NhZ2UgY2FsbGJhY2tzIG11c3QgcmV0dXJuIHRoZSBwYXlsb2FkLCBtb2RpZmllZCBvciB1bm1vZGlmaWVkXCIpO2Zvcih2YXIgcj10aGlzLmJpbmRpbmdzLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQuZXZlbnQ9PT1lfSkpLHM9MDtzPHIubGVuZ3RoO3MrKyl7cltzXS5jYWxsYmFjayhvLG4saXx8dGhpcy5qb2luUmVmKCkpfX19LHtrZXk6XCJyZXBseUV2ZW50TmFtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVyblwiY2hhbl9yZXBseV9cIi5jb25jYXQoZSl9fSx7a2V5OlwiaXNDbG9zZWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlPT09Z319LHtrZXk6XCJpc0Vycm9yZWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlPT09a319LHtrZXk6XCJpc0pvaW5lZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhdGU9PT1ifX0se2tleTpcImlzSm9pbmluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhdGU9PT1qfX0se2tleTpcImlzTGVhdmluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhdGU9PT1UfX1dKSxlfSgpLF89e0hFQURFUl9MRU5HVEg6MSxNRVRBX0xFTkdUSDo0LEtJTkRTOntwdXNoOjAscmVwbHk6MSxicm9hZGNhc3Q6Mn0sZW5jb2RlOmZ1bmN0aW9uKGUsdCl7aWYoZS5wYXlsb2FkLmNvbnN0cnVjdG9yPT09QXJyYXlCdWZmZXIpcmV0dXJuIHQodGhpcy5iaW5hcnlFbmNvZGUoZSkpO3ZhciBuPVtlLmpvaW5fcmVmLGUucmVmLGUudG9waWMsZS5ldmVudCxlLnBheWxvYWRdO3JldHVybiB0KEpTT04uc3RyaW5naWZ5KG4pKX0sZGVjb2RlOmZ1bmN0aW9uKGUsdCl7aWYoZS5jb25zdHJ1Y3Rvcj09PUFycmF5QnVmZmVyKXJldHVybiB0KHRoaXMuYmluYXJ5RGVjb2RlKGUpKTt2YXIgbj1yKEpTT04ucGFyc2UoZSksNSk7cmV0dXJuIHQoe2pvaW5fcmVmOm5bMF0scmVmOm5bMV0sdG9waWM6blsyXSxldmVudDpuWzNdLHBheWxvYWQ6bls0XX0pfSxiaW5hcnlFbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5qb2luX3JlZixuPWUucmVmLGk9ZS5ldmVudCxvPWUudG9waWMscj1lLnBheWxvYWQscz10aGlzLk1FVEFfTEVOR1RIK3QubGVuZ3RoK24ubGVuZ3RoK28ubGVuZ3RoK2kubGVuZ3RoLGE9bmV3IEFycmF5QnVmZmVyKHRoaXMuSEVBREVSX0xFTkdUSCtzKSxjPW5ldyBEYXRhVmlldyhhKSx1PTA7Yy5zZXRVaW50OCh1KyssdGhpcy5LSU5EUy5wdXNoKSxjLnNldFVpbnQ4KHUrKyx0Lmxlbmd0aCksYy5zZXRVaW50OCh1Kyssbi5sZW5ndGgpLGMuc2V0VWludDgodSsrLG8ubGVuZ3RoKSxjLnNldFVpbnQ4KHUrKyxpLmxlbmd0aCksQXJyYXkuZnJvbSh0LChmdW5jdGlvbihlKXtyZXR1cm4gYy5zZXRVaW50OCh1KyssZS5jaGFyQ29kZUF0KDApKX0pKSxBcnJheS5mcm9tKG4sKGZ1bmN0aW9uKGUpe3JldHVybiBjLnNldFVpbnQ4KHUrKyxlLmNoYXJDb2RlQXQoMCkpfSkpLEFycmF5LmZyb20obywoZnVuY3Rpb24oZSl7cmV0dXJuIGMuc2V0VWludDgodSsrLGUuY2hhckNvZGVBdCgwKSl9KSksQXJyYXkuZnJvbShpLChmdW5jdGlvbihlKXtyZXR1cm4gYy5zZXRVaW50OCh1KyssZS5jaGFyQ29kZUF0KDApKX0pKTt2YXIgaD1uZXcgVWludDhBcnJheShhLmJ5dGVMZW5ndGgrci5ieXRlTGVuZ3RoKTtyZXR1cm4gaC5zZXQobmV3IFVpbnQ4QXJyYXkoYSksMCksaC5zZXQobmV3IFVpbnQ4QXJyYXkociksYS5ieXRlTGVuZ3RoKSxoLmJ1ZmZlcn0sYmluYXJ5RGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBEYXRhVmlldyhlKSxuPXQuZ2V0VWludDgoMCksaT1uZXcgVGV4dERlY29kZXI7c3dpdGNoKG4pe2Nhc2UgdGhpcy5LSU5EUy5wdXNoOnJldHVybiB0aGlzLmRlY29kZVB1c2goZSx0LGkpO2Nhc2UgdGhpcy5LSU5EUy5yZXBseTpyZXR1cm4gdGhpcy5kZWNvZGVSZXBseShlLHQsaSk7Y2FzZSB0aGlzLktJTkRTLmJyb2FkY2FzdDpyZXR1cm4gdGhpcy5kZWNvZGVCcm9hZGNhc3QoZSx0LGkpfX0sZGVjb2RlUHVzaDpmdW5jdGlvbihlLHQsbil7dmFyIGk9dC5nZXRVaW50OCgxKSxvPXQuZ2V0VWludDgoMikscj10LmdldFVpbnQ4KDMpLHM9dGhpcy5IRUFERVJfTEVOR1RIK3RoaXMuTUVUQV9MRU5HVEgtMSxhPW4uZGVjb2RlKGUuc2xpY2UocyxzK2kpKTtzKz1pO3ZhciBjPW4uZGVjb2RlKGUuc2xpY2UocyxzK28pKTtzKz1vO3ZhciB1PW4uZGVjb2RlKGUuc2xpY2UocyxzK3IpKTtyZXR1cm4gcys9cix7am9pbl9yZWY6YSxyZWY6bnVsbCx0b3BpYzpjLGV2ZW50OnUscGF5bG9hZDplLnNsaWNlKHMsZS5ieXRlTGVuZ3RoKX19LGRlY29kZVJlcGx5OmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10LmdldFVpbnQ4KDEpLG89dC5nZXRVaW50OCgyKSxyPXQuZ2V0VWludDgoMykscz10LmdldFVpbnQ4KDQpLGE9dGhpcy5IRUFERVJfTEVOR1RIK3RoaXMuTUVUQV9MRU5HVEgsYz1uLmRlY29kZShlLnNsaWNlKGEsYStpKSk7YSs9aTt2YXIgdT1uLmRlY29kZShlLnNsaWNlKGEsYStvKSk7YSs9bzt2YXIgaD1uLmRlY29kZShlLnNsaWNlKGEsYStyKSk7YSs9cjt2YXIgbD1uLmRlY29kZShlLnNsaWNlKGEsYStzKSk7YSs9czt2YXIgZj1lLnNsaWNlKGEsZS5ieXRlTGVuZ3RoKTtyZXR1cm57am9pbl9yZWY6YyxyZWY6dSx0b3BpYzpoLGV2ZW50OncscGF5bG9hZDp7c3RhdHVzOmwscmVzcG9uc2U6Zn19fSxkZWNvZGVCcm9hZGNhc3Q6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXQuZ2V0VWludDgoMSksbz10LmdldFVpbnQ4KDIpLHI9dGhpcy5IRUFERVJfTEVOR1RIKzIscz1uLmRlY29kZShlLnNsaWNlKHIscitpKSk7cis9aTt2YXIgYT1uLmRlY29kZShlLnNsaWNlKHIscitvKSk7cmV0dXJuIHIrPW8se2pvaW5fcmVmOm51bGwscmVmOm51bGwsdG9waWM6cyxldmVudDphLHBheWxvYWQ6ZS5zbGljZShyLGUuYnl0ZUxlbmd0aCl9fX0sSD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIG49dGhpcyxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtjKHRoaXMsZSksdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcz17b3BlbjpbXSxjbG9zZTpbXSxlcnJvcjpbXSxtZXNzYWdlOltdfSx0aGlzLmNoYW5uZWxzPVtdLHRoaXMuc2VuZEJ1ZmZlcj1bXSx0aGlzLnJlZj0wLHRoaXMudGltZW91dD1pLnRpbWVvdXR8fDFlNCx0aGlzLnRyYW5zcG9ydD1pLnRyYW5zcG9ydHx8ZC5XZWJTb2NrZXR8fFUsdGhpcy5kZWZhdWx0RW5jb2Rlcj1fLmVuY29kZS5iaW5kKF8pLHRoaXMuZGVmYXVsdERlY29kZXI9Xy5kZWNvZGUuYmluZChfKSx0aGlzLmNsb3NlV2FzQ2xlYW49ITEsdGhpcy51bmxvYWRlZD0hMSx0aGlzLmJpbmFyeVR5cGU9aS5iaW5hcnlUeXBlfHxcImFycmF5YnVmZmVyXCIsdGhpcy50cmFuc3BvcnQhPT1VPyh0aGlzLmVuY29kZT1pLmVuY29kZXx8dGhpcy5kZWZhdWx0RW5jb2Rlcix0aGlzLmRlY29kZT1pLmRlY29kZXx8dGhpcy5kZWZhdWx0RGVjb2Rlcik6KHRoaXMuZW5jb2RlPXRoaXMuZGVmYXVsdEVuY29kZXIsdGhpcy5kZWNvZGU9dGhpcy5kZWZhdWx0RGVjb2RlciksZiYmZi5hZGRFdmVudExpc3RlbmVyJiZmLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwoZnVuY3Rpb24oZSl7bi5jb25uJiYobi51bmxvYWRlZD0hMCxuLmFibm9ybWFsQ2xvc2UoXCJ1bmxvYWRlZFwiKSl9KSksdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zPWkuaGVhcnRiZWF0SW50ZXJ2YWxNc3x8M2U0LHRoaXMucmVqb2luQWZ0ZXJNcz1mdW5jdGlvbihlKXtyZXR1cm4gaS5yZWpvaW5BZnRlck1zP2kucmVqb2luQWZ0ZXJNcyhlKTpbMWUzLDJlMyw1ZTNdW2UtMV18fDFlNH0sdGhpcy5yZWNvbm5lY3RBZnRlck1zPWZ1bmN0aW9uKGUpe3JldHVybiBuLnVubG9hZGVkPzEwMDppLnJlY29ubmVjdEFmdGVyTXM/aS5yZWNvbm5lY3RBZnRlck1zKGUpOlsxMCw1MCwxMDAsMTUwLDIwMCwyNTAsNTAwLDFlMywyZTNdW2UtMV18fDVlM30sdGhpcy5sb2dnZXI9aS5sb2dnZXJ8fG51bGwsdGhpcy5sb25ncG9sbGVyVGltZW91dD1pLmxvbmdwb2xsZXJUaW1lb3V0fHwyZTQsdGhpcy5wYXJhbXM9eChpLnBhcmFtc3x8e30pLHRoaXMuZW5kUG9pbnQ9XCJcIi5jb25jYXQodCxcIi9cIikuY29uY2F0KEwpLHRoaXMudnNuPWkudnNufHxcIjIuMC4wXCIsdGhpcy5oZWFydGJlYXRUaW1lcj1udWxsLHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZj1udWxsLHRoaXMucmVjb25uZWN0VGltZXI9bmV3IE4oKGZ1bmN0aW9uKCl7bi50ZWFyZG93bigoZnVuY3Rpb24oKXtyZXR1cm4gbi5jb25uZWN0KCl9KSl9KSx0aGlzLnJlY29ubmVjdEFmdGVyTXMpfXJldHVybiBoKGUsW3trZXk6XCJwcm90b2NvbFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGxvY2F0aW9uLnByb3RvY29sLm1hdGNoKC9eaHR0cHMvKT9cIndzc1wiOlwid3NcIn19LHtrZXk6XCJlbmRQb2ludFVSTFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9RC5hcHBlbmRQYXJhbXMoRC5hcHBlbmRQYXJhbXModGhpcy5lbmRQb2ludCx0aGlzLnBhcmFtcygpKSx7dnNuOnRoaXMudnNufSk7cmV0dXJuXCIvXCIhPT1lLmNoYXJBdCgwKT9lOlwiL1wiPT09ZS5jaGFyQXQoMSk/XCJcIi5jb25jYXQodGhpcy5wcm90b2NvbCgpLFwiOlwiKS5jb25jYXQoZSk6XCJcIi5jb25jYXQodGhpcy5wcm90b2NvbCgpLFwiOi8vXCIpLmNvbmNhdChsb2NhdGlvbi5ob3N0KS5jb25jYXQoZSl9fSx7a2V5OlwiZGlzY29ubmVjdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt0aGlzLmNsb3NlV2FzQ2xlYW49ITAsdGhpcy5yZWNvbm5lY3RUaW1lci5yZXNldCgpLHRoaXMudGVhcmRvd24oZSx0LG4pfX0se2tleTpcImNvbm5lY3RcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2UmJihjb25zb2xlJiZjb25zb2xlLmxvZyhcInBhc3NpbmcgcGFyYW1zIHRvIGNvbm5lY3QgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCBwYXNzIDpwYXJhbXMgdG8gdGhlIFNvY2tldCBjb25zdHJ1Y3RvclwiKSx0aGlzLnBhcmFtcz14KGUpKSx0aGlzLmNvbm58fCh0aGlzLmNsb3NlV2FzQ2xlYW49ITEsdGhpcy5jb25uPW5ldyB0aGlzLnRyYW5zcG9ydCh0aGlzLmVuZFBvaW50VVJMKCkpLHRoaXMuY29ubi5iaW5hcnlUeXBlPXRoaXMuYmluYXJ5VHlwZSx0aGlzLmNvbm4udGltZW91dD10aGlzLmxvbmdwb2xsZXJUaW1lb3V0LHRoaXMuY29ubi5vbm9wZW49ZnVuY3Rpb24oKXtyZXR1cm4gdC5vbkNvbm5PcGVuKCl9LHRoaXMuY29ubi5vbmVycm9yPWZ1bmN0aW9uKGUpe3JldHVybiB0Lm9uQ29ubkVycm9yKGUpfSx0aGlzLmNvbm4ub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3JldHVybiB0Lm9uQ29ubk1lc3NhZ2UoZSl9LHRoaXMuY29ubi5vbmNsb3NlPWZ1bmN0aW9uKGUpe3JldHVybiB0Lm9uQ29ubkNsb3NlKGUpfSl9fSx7a2V5OlwibG9nXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3RoaXMubG9nZ2VyKGUsdCxuKX19LHtrZXk6XCJoYXNMb2dnZXJcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBudWxsIT09dGhpcy5sb2dnZXJ9fSx7a2V5Olwib25PcGVuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5tYWtlUmVmKCk7cmV0dXJuIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Mub3Blbi5wdXNoKFt0LGVdKSx0fX0se2tleTpcIm9uQ2xvc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm1ha2VSZWYoKTtyZXR1cm4gdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5jbG9zZS5wdXNoKFt0LGVdKSx0fX0se2tleTpcIm9uRXJyb3JcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLm1ha2VSZWYoKTtyZXR1cm4gdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5lcnJvci5wdXNoKFt0LGVdKSx0fX0se2tleTpcIm9uTWVzc2FnZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubWFrZVJlZigpO3JldHVybiB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLm1lc3NhZ2UucHVzaChbdCxlXSksdH19LHtrZXk6XCJvbkNvbm5PcGVuXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmhhc0xvZ2dlcigpJiZ0aGlzLmxvZyhcInRyYW5zcG9ydFwiLFwiY29ubmVjdGVkIHRvIFwiLmNvbmNhdCh0aGlzLmVuZFBvaW50VVJMKCkpKSx0aGlzLnVubG9hZGVkPSExLHRoaXMuY2xvc2VXYXNDbGVhbj0hMSx0aGlzLmZsdXNoU2VuZEJ1ZmZlcigpLHRoaXMucmVjb25uZWN0VGltZXIucmVzZXQoKSx0aGlzLnJlc2V0SGVhcnRiZWF0KCksdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5vcGVuLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybigwLHIoZSwyKVsxXSkoKX0pKX19LHtrZXk6XCJoZWFydGJlYXRUaW1lb3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYmJih0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWY9bnVsbCx0aGlzLmhhc0xvZ2dlcigpJiZ0aGlzLmxvZyhcInRyYW5zcG9ydFwiLFwiaGVhcnRiZWF0IHRpbWVvdXQuIEF0dGVtcHRpbmcgdG8gcmUtZXN0YWJsaXNoIGNvbm5lY3Rpb25cIiksdGhpcy5hYm5vcm1hbENsb3NlKFwiaGVhcnRiZWF0IHRpbWVvdXRcIikpfX0se2tleTpcInJlc2V0SGVhcnRiZWF0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuY29ubiYmdGhpcy5jb25uLnNraXBIZWFydGJlYXR8fCh0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWY9bnVsbCxjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lciksc2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gZS5zZW5kSGVhcnRiZWF0KCl9KSx0aGlzLmhlYXJ0YmVhdEludGVydmFsTXMpKX19LHtrZXk6XCJ0ZWFyZG93blwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO2lmKCF0aGlzLmNvbm4pcmV0dXJuIGUmJmUoKTt0aGlzLndhaXRGb3JCdWZmZXJEb25lKChmdW5jdGlvbigpe2kuY29ubiYmKHQ/aS5jb25uLmNsb3NlKHQsbnx8XCJcIik6aS5jb25uLmNsb3NlKCkpLGkud2FpdEZvclNvY2tldENsb3NlZCgoZnVuY3Rpb24oKXtpLmNvbm4mJihpLmNvbm4ub25jbG9zZT1mdW5jdGlvbigpe30saS5jb25uPW51bGwpLGUmJmUoKX0pKX0pKX19LHtrZXk6XCJ3YWl0Rm9yQnVmZmVyRG9uZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MTs1IT09biYmdGhpcy5jb25uJiZ0aGlzLmNvbm4uYnVmZmVyZWRBbW91bnQ/c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0LndhaXRGb3JCdWZmZXJEb25lKGUsbisxKX0pLDE1MCpuKTplKCl9fSx7a2V5Olwid2FpdEZvclNvY2tldENsb3NlZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MTs1IT09biYmdGhpcy5jb25uJiZ0aGlzLmNvbm4ucmVhZHlTdGF0ZSE9PW0/c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0LndhaXRGb3JTb2NrZXRDbG9zZWQoZSxuKzEpfSksMTUwKm4pOmUoKX19LHtrZXk6XCJvbkNvbm5DbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuaGFzTG9nZ2VyKCkmJnRoaXMubG9nKFwidHJhbnNwb3J0XCIsXCJjbG9zZVwiLGUpLHRoaXMudHJpZ2dlckNoYW5FcnJvcigpLGNsZWFyVGltZW91dCh0aGlzLmhlYXJ0YmVhdFRpbWVyKSx0aGlzLmNsb3NlV2FzQ2xlYW58fHRoaXMucmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCksdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5jbG9zZS5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4oMCxyKHQsMilbMV0pKGUpfSkpfX0se2tleTpcIm9uQ29ubkVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5oYXNMb2dnZXIoKSYmdGhpcy5sb2coXCJ0cmFuc3BvcnRcIixlKSx0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKSx0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmVycm9yLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybigwLHIodCwyKVsxXSkoZSl9KSl9fSx7a2V5OlwidHJpZ2dlckNoYW5FcnJvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jaGFubmVscy5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmlzRXJyb3JlZCgpfHxlLmlzTGVhdmluZygpfHxlLmlzQ2xvc2VkKCl8fGUudHJpZ2dlcihSKX0pKX19LHtrZXk6XCJjb25uZWN0aW9uU3RhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3N3aXRjaCh0aGlzLmNvbm4mJnRoaXMuY29ubi5yZWFkeVN0YXRlKXtjYXNlIHA6cmV0dXJuXCJjb25uZWN0aW5nXCI7Y2FzZSB2OnJldHVyblwib3BlblwiO2Nhc2UgeTpyZXR1cm5cImNsb3NpbmdcIjtkZWZhdWx0OnJldHVyblwiY2xvc2VkXCJ9fX0se2tleTpcImlzQ29ubmVjdGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cIm9wZW5cIj09PXRoaXMuY29ubmVjdGlvblN0YXRlKCl9fSx7a2V5OlwicmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5vZmYoZS5zdGF0ZUNoYW5nZVJlZnMpLHRoaXMuY2hhbm5lbHM9dGhpcy5jaGFubmVscy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmpvaW5SZWYoKSE9PWUuam9pblJlZigpfSkpfX0se2tleTpcIm9mZlwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzKXRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3NbdF09dGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrc1t0XS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3ZhciBuPXIodCwxKVswXTtyZXR1cm4tMT09PWUuaW5kZXhPZihuKX0pKX19LHtrZXk6XCJjaGFubmVsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49bmV3IE8oZSx0LHRoaXMpO3JldHVybiB0aGlzLmNoYW5uZWxzLnB1c2gobiksbn19LHtrZXk6XCJwdXNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZih0aGlzLmhhc0xvZ2dlcigpKXt2YXIgbj1lLnRvcGljLGk9ZS5ldmVudCxvPWUucGF5bG9hZCxyPWUucmVmLHM9ZS5qb2luX3JlZjt0aGlzLmxvZyhcInB1c2hcIixcIlwiLmNvbmNhdChuLFwiIFwiKS5jb25jYXQoaSxcIiAoXCIpLmNvbmNhdChzLFwiLCBcIikuY29uY2F0KHIsXCIpXCIpLG8pfXRoaXMuaXNDb25uZWN0ZWQoKT90aGlzLmVuY29kZShlLChmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25uLnNlbmQoZSl9KSk6dGhpcy5zZW5kQnVmZmVyLnB1c2goKGZ1bmN0aW9uKCl7cmV0dXJuIHQuZW5jb2RlKGUsKGZ1bmN0aW9uKGUpe3JldHVybiB0LmNvbm4uc2VuZChlKX0pKX0pKX19LHtrZXk6XCJtYWtlUmVmXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnJlZisxO3JldHVybiBlPT09dGhpcy5yZWY/dGhpcy5yZWY9MDp0aGlzLnJlZj1lLHRoaXMucmVmLnRvU3RyaW5nKCl9fSx7a2V5Olwic2VuZEhlYXJ0YmVhdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYmJiF0aGlzLmlzQ29ubmVjdGVkKCl8fCh0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWY9dGhpcy5tYWtlUmVmKCksdGhpcy5wdXNoKHt0b3BpYzpcInBob2VuaXhcIixldmVudDpcImhlYXJ0YmVhdFwiLHBheWxvYWQ6e30scmVmOnRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZn0pLHRoaXMuaGVhcnRiZWF0VGltZXI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gZS5oZWFydGJlYXRUaW1lb3V0KCl9KSx0aGlzLmhlYXJ0YmVhdEludGVydmFsTXMpKX19LHtrZXk6XCJhYm5vcm1hbENsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jbG9zZVdhc0NsZWFuPSExLHRoaXMuaXNDb25uZWN0ZWQoKSYmdGhpcy5jb25uLmNsb3NlKDFlMyxlKX19LHtrZXk6XCJmbHVzaFNlbmRCdWZmZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNDb25uZWN0ZWQoKSYmdGhpcy5zZW5kQnVmZmVyLmxlbmd0aD4wJiYodGhpcy5zZW5kQnVmZmVyLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlKCl9KSksdGhpcy5zZW5kQnVmZmVyPVtdKX19LHtrZXk6XCJvbkNvbm5NZXNzYWdlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0aGlzLmRlY29kZShlLmRhdGEsKGZ1bmN0aW9uKGUpe3ZhciBuPWUudG9waWMsaT1lLmV2ZW50LG89ZS5wYXlsb2FkLHM9ZS5yZWYsYT1lLmpvaW5fcmVmO3MmJnM9PT10LnBlbmRpbmdIZWFydGJlYXRSZWYmJihjbGVhclRpbWVvdXQodC5oZWFydGJlYXRUaW1lciksdC5wZW5kaW5nSGVhcnRiZWF0UmVmPW51bGwsc2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gdC5zZW5kSGVhcnRiZWF0KCl9KSx0LmhlYXJ0YmVhdEludGVydmFsTXMpKSx0Lmhhc0xvZ2dlcigpJiZ0LmxvZyhcInJlY2VpdmVcIixcIlwiLmNvbmNhdChvLnN0YXR1c3x8XCJcIixcIiBcIikuY29uY2F0KG4sXCIgXCIpLmNvbmNhdChpLFwiIFwiKS5jb25jYXQocyYmXCIoXCIrcytcIilcInx8XCJcIiksbyk7Zm9yKHZhciBjPTA7Yzx0LmNoYW5uZWxzLmxlbmd0aDtjKyspe3ZhciB1PXQuY2hhbm5lbHNbY107dS5pc01lbWJlcihuLGksbyxhKSYmdS50cmlnZ2VyKGksbyxzLGEpfWZvcih2YXIgaD0wO2g8dC5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlLmxlbmd0aDtoKyspeygwLHIodC5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlW2hdLDIpWzFdKShlKX19KSl9fSx7a2V5OlwibGVhdmVPcGVuVG9waWNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNoYW5uZWxzLmZpbmQoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRvcGljPT09ZSYmKHQuaXNKb2luZWQoKXx8dC5pc0pvaW5pbmcoKSl9KSk7dCYmKHRoaXMuaGFzTG9nZ2VyKCkmJnRoaXMubG9nKFwidHJhbnNwb3J0XCIsJ2xlYXZpbmcgZHVwbGljYXRlIHRvcGljIFwiJy5jb25jYXQoZSwnXCInKSksdC5sZWF2ZSgpKX19XSksZX0oKSxVPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtjKHRoaXMsZSksdGhpcy5lbmRQb2ludD1udWxsLHRoaXMudG9rZW49bnVsbCx0aGlzLnNraXBIZWFydGJlYXQ9ITAsdGhpcy5vbm9wZW49ZnVuY3Rpb24oKXt9LHRoaXMub25lcnJvcj1mdW5jdGlvbigpe30sdGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXt9LHRoaXMub25jbG9zZT1mdW5jdGlvbigpe30sdGhpcy5wb2xsRW5kcG9pbnQ9dGhpcy5ub3JtYWxpemVFbmRwb2ludCh0KSx0aGlzLnJlYWR5U3RhdGU9cCx0aGlzLnBvbGwoKX1yZXR1cm4gaChlLFt7a2V5Olwibm9ybWFsaXplRW5kcG9pbnRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKFwid3M6Ly9cIixcImh0dHA6Ly9cIikucmVwbGFjZShcIndzczovL1wiLFwiaHR0cHM6Ly9cIikucmVwbGFjZShuZXcgUmVnRXhwKFwiKC4qKS9cIitMKSxcIiQxL1wiK0EpfX0se2tleTpcImVuZHBvaW50VVJMXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gRC5hcHBlbmRQYXJhbXModGhpcy5wb2xsRW5kcG9pbnQse3Rva2VuOnRoaXMudG9rZW59KX19LHtrZXk6XCJjbG9zZUFuZFJldHJ5XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlKCksdGhpcy5yZWFkeVN0YXRlPXB9fSx7a2V5Olwib250aW1lb3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm9uZXJyb3IoXCJ0aW1lb3V0XCIpLHRoaXMuY2xvc2VBbmRSZXRyeSgpfX0se2tleTpcInBvbGxcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5yZWFkeVN0YXRlIT09diYmdGhpcy5yZWFkeVN0YXRlIT09cHx8RC5yZXF1ZXN0KFwiR0VUXCIsdGhpcy5lbmRwb2ludFVSTCgpLFwiYXBwbGljYXRpb24vanNvblwiLG51bGwsdGhpcy50aW1lb3V0LHRoaXMub250aW1lb3V0LmJpbmQodGhpcyksKGZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBuPXQuc3RhdHVzLGk9dC50b2tlbixvPXQubWVzc2FnZXM7ZS50b2tlbj1pfWVsc2Ugbj0wO3N3aXRjaChuKXtjYXNlIDIwMDpvLmZvckVhY2goKGZ1bmN0aW9uKHQpe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5vbm1lc3NhZ2Uoe2RhdGE6dH0pfSksMCl9KSksZS5wb2xsKCk7YnJlYWs7Y2FzZSAyMDQ6ZS5wb2xsKCk7YnJlYWs7Y2FzZSA0MTA6ZS5yZWFkeVN0YXRlPXYsZS5vbm9wZW4oKSxlLnBvbGwoKTticmVhaztjYXNlIDQwMzplLm9uZXJyb3IoKSxlLmNsb3NlKCk7YnJlYWs7Y2FzZSAwOmNhc2UgNTAwOmUub25lcnJvcigpLGUuY2xvc2VBbmRSZXRyeSgpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwidW5oYW5kbGVkIHBvbGwgc3RhdHVzIFwiLmNvbmNhdChuKSl9fSkpfX0se2tleTpcInNlbmRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO0QucmVxdWVzdChcIlBPU1RcIix0aGlzLmVuZHBvaW50VVJMKCksXCJhcHBsaWNhdGlvbi9qc29uXCIsZSx0aGlzLnRpbWVvdXQsdGhpcy5vbmVycm9yLmJpbmQodGhpcyxcInRpbWVvdXRcIiksKGZ1bmN0aW9uKGUpe2UmJjIwMD09PWUuc3RhdHVzfHwodC5vbmVycm9yKGUmJmUuc3RhdHVzKSx0LmNsb3NlQW5kUmV0cnkoKSl9KSl9fSx7a2V5OlwiY2xvc2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMucmVhZHlTdGF0ZT1tLHRoaXMub25jbG9zZSgpfX1dKSxlfSgpLEQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7Yyh0aGlzLGUpfXJldHVybiBoKGUsbnVsbCxbe2tleTpcInJlcXVlc3RcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpLG8scixzKXtpZihkLlhEb21haW5SZXF1ZXN0KXt2YXIgYT1uZXcgWERvbWFpblJlcXVlc3Q7dGhpcy54ZG9tYWluUmVxdWVzdChhLGUsdCxpLG8scixzKX1lbHNle3ZhciBjPW5ldyBkLlhNTEh0dHBSZXF1ZXN0O3RoaXMueGhyUmVxdWVzdChjLGUsdCxuLGksbyxyLHMpfX19LHtrZXk6XCJ4ZG9tYWluUmVxdWVzdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGksbyxyLHMpe3ZhciBhPXRoaXM7ZS50aW1lb3V0PW8sZS5vcGVuKHQsbiksZS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgdD1hLnBhcnNlSlNPTihlLnJlc3BvbnNlVGV4dCk7cyYmcyh0KX0sciYmKGUub250aW1lb3V0PXIpLGUub25wcm9ncmVzcz1mdW5jdGlvbigpe30sZS5zZW5kKGkpfX0se2tleTpcInhoclJlcXVlc3RcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpLG8scixzLGEpe3ZhciBjPXRoaXM7ZS5vcGVuKHQsbiwhMCksZS50aW1lb3V0PXIsZS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsaSksZS5vbmVycm9yPWZ1bmN0aW9uKCl7YSYmYShudWxsKX0sZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihlLnJlYWR5U3RhdGU9PT1jLnN0YXRlcy5jb21wbGV0ZSYmYSl7dmFyIHQ9Yy5wYXJzZUpTT04oZS5yZXNwb25zZVRleHQpO2EodCl9fSxzJiYoZS5vbnRpbWVvdXQ9cyksZS5zZW5kKG8pfX0se2tleTpcInBhcnNlSlNPTlwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKCFlfHxcIlwiPT09ZSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZSl9Y2F0Y2godCl7cmV0dXJuIGNvbnNvbGUmJmNvbnNvbGUubG9nKFwiZmFpbGVkIHRvIHBhcnNlIEpTT04gcmVzcG9uc2VcIixlKSxudWxsfX19LHtrZXk6XCJzZXJpYWxpemVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPVtdO2Zvcih2YXIgaSBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkoaSkpe3ZhciByPXQ/XCJcIi5jb25jYXQodCxcIltcIikuY29uY2F0KGksXCJdXCIpOmkscz1lW2ldO1wib2JqZWN0XCI9PT1vKHMpP24ucHVzaCh0aGlzLnNlcmlhbGl6ZShzLHIpKTpuLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHIpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChzKSl9cmV0dXJuIG4uam9pbihcIiZcIil9fSx7a2V5OlwiYXBwZW5kUGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZigwPT09T2JqZWN0LmtleXModCkubGVuZ3RoKXJldHVybiBlO3ZhciBuPWUubWF0Y2goL1xcPy8pP1wiJlwiOlwiP1wiO3JldHVyblwiXCIuY29uY2F0KGUpLmNvbmNhdChuKS5jb25jYXQodGhpcy5zZXJpYWxpemUodCkpfX1dKSxlfSgpO0Quc3RhdGVzPXtjb21wbGV0ZTo0fTt2YXIgTT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIG49dGhpcyxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtjKHRoaXMsZSk7dmFyIG89aS5ldmVudHN8fHtzdGF0ZTpcInByZXNlbmNlX3N0YXRlXCIsZGlmZjpcInByZXNlbmNlX2RpZmZcIn07dGhpcy5zdGF0ZT17fSx0aGlzLnBlbmRpbmdEaWZmcz1bXSx0aGlzLmNoYW5uZWw9dCx0aGlzLmpvaW5SZWY9bnVsbCx0aGlzLmNhbGxlcj17b25Kb2luOmZ1bmN0aW9uKCl7fSxvbkxlYXZlOmZ1bmN0aW9uKCl7fSxvblN5bmM6ZnVuY3Rpb24oKXt9fSx0aGlzLmNoYW5uZWwub24oby5zdGF0ZSwoZnVuY3Rpb24odCl7dmFyIGk9bi5jYWxsZXIsbz1pLm9uSm9pbixyPWkub25MZWF2ZSxzPWkub25TeW5jO24uam9pblJlZj1uLmNoYW5uZWwuam9pblJlZigpLG4uc3RhdGU9ZS5zeW5jU3RhdGUobi5zdGF0ZSx0LG8sciksbi5wZW5kaW5nRGlmZnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7bi5zdGF0ZT1lLnN5bmNEaWZmKG4uc3RhdGUsdCxvLHIpfSkpLG4ucGVuZGluZ0RpZmZzPVtdLHMoKX0pKSx0aGlzLmNoYW5uZWwub24oby5kaWZmLChmdW5jdGlvbih0KXt2YXIgaT1uLmNhbGxlcixvPWkub25Kb2luLHI9aS5vbkxlYXZlLHM9aS5vblN5bmM7bi5pblBlbmRpbmdTeW5jU3RhdGUoKT9uLnBlbmRpbmdEaWZmcy5wdXNoKHQpOihuLnN0YXRlPWUuc3luY0RpZmYobi5zdGF0ZSx0LG8scikscygpKX0pKX1yZXR1cm4gaChlLFt7a2V5Olwib25Kb2luXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jYWxsZXIub25Kb2luPWV9fSx7a2V5Olwib25MZWF2ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY2FsbGVyLm9uTGVhdmU9ZX19LHtrZXk6XCJvblN5bmNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNhbGxlci5vblN5bmM9ZX19LHtrZXk6XCJsaXN0XCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUubGlzdCh0aGlzLnN0YXRlLHQpfX0se2tleTpcImluUGVuZGluZ1N5bmNTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuam9pblJlZnx8dGhpcy5qb2luUmVmIT09dGhpcy5jaGFubmVsLmpvaW5SZWYoKX19XSxbe2tleTpcInN5bmNTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvPXRoaXMscj10aGlzLmNsb25lKGUpLHM9e30sYT17fTtyZXR1cm4gdGhpcy5tYXAociwoZnVuY3Rpb24oZSxuKXt0W2VdfHwoYVtlXT1uKX0pKSx0aGlzLm1hcCh0LChmdW5jdGlvbihlLHQpe3ZhciBuPXJbZV07aWYobil7dmFyIGk9dC5tZXRhcy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBoeF9yZWZ9KSksYz1uLm1ldGFzLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGh4X3JlZn0pKSx1PXQubWV0YXMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gYy5pbmRleE9mKGUucGh4X3JlZik8MH0pKSxoPW4ubWV0YXMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gaS5pbmRleE9mKGUucGh4X3JlZik8MH0pKTt1Lmxlbmd0aD4wJiYoc1tlXT10LHNbZV0ubWV0YXM9dSksaC5sZW5ndGg+MCYmKGFbZV09by5jbG9uZShuKSxhW2VdLm1ldGFzPWgpfWVsc2Ugc1tlXT10fSkpLHRoaXMuc3luY0RpZmYocix7am9pbnM6cyxsZWF2ZXM6YX0sbixpKX19LHtrZXk6XCJzeW5jRGlmZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLG8pe3ZhciByPXQuam9pbnMscz10LmxlYXZlcyxhPXRoaXMuY2xvbmUoZSk7cmV0dXJuIG58fChuPWZ1bmN0aW9uKCl7fSksb3x8KG89ZnVuY3Rpb24oKXt9KSx0aGlzLm1hcChyLChmdW5jdGlvbihlLHQpe3ZhciBvPWFbZV07aWYoYVtlXT10LG8pe3ZhciByLHM9YVtlXS5tZXRhcy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBoeF9yZWZ9KSksYz1vLm1ldGFzLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIHMuaW5kZXhPZihlLnBoeF9yZWYpPDB9KSk7KHI9YVtlXS5tZXRhcykudW5zaGlmdC5hcHBseShyLGkoYykpfW4oZSxvLHQpfSkpLHRoaXMubWFwKHMsKGZ1bmN0aW9uKGUsdCl7dmFyIG49YVtlXTtpZihuKXt2YXIgaT10Lm1ldGFzLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGh4X3JlZn0pKTtuLm1ldGFzPW4ubWV0YXMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gaS5pbmRleE9mKGUucGh4X3JlZik8MH0pKSxvKGUsbix0KSwwPT09bi5tZXRhcy5sZW5ndGgmJmRlbGV0ZSBhW2VdfX0pKSxhfX0se2tleTpcImxpc3RcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0fHwodD1mdW5jdGlvbihlLHQpe3JldHVybiB0fSksdGhpcy5tYXAoZSwoZnVuY3Rpb24oZSxuKXtyZXR1cm4gdChlLG4pfSkpfX0se2tleTpcIm1hcFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIHQobixlW25dKX0pKX19LHtrZXk6XCJjbG9uZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKX19XSksZX0oKSxOPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe2ModGhpcyxlKSx0aGlzLmNhbGxiYWNrPXQsdGhpcy50aW1lckNhbGM9bix0aGlzLnRpbWVyPW51bGwsdGhpcy50cmllcz0wfXJldHVybiBoKGUsW3trZXk6XCJyZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy50cmllcz0wLGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKX19LHtrZXk6XCJzY2hlZHVsZVRpbWVvdXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpLHRoaXMudGltZXI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLnRyaWVzPWUudHJpZXMrMSxlLmNhbGxiYWNrKCl9KSx0aGlzLnRpbWVyQ2FsYyh0aGlzLnRyaWVzKzEpKX19XSksZX0oKX1dKX0pKTsiLCAiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5waG9lbml4X2xpdmVfdmlldz10KCk6ZS5waG9lbml4X2xpdmVfdmlldz10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihpKXtpZih0W2ldKXJldHVybiB0W2ldLmV4cG9ydHM7dmFyIHI9dFtpXT17aTppLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbaV0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxpKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Oml9KX0sbi5yPWZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9Mil9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKHQpO3ZhciBpLHI9MTE7dmFyIG89XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsYT1cInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQ/dm9pZCAwOmRvY3VtZW50LHU9ISFhJiZcImNvbnRlbnRcImluIGEuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLHM9ISFhJiZhLmNyZWF0ZVJhbmdlJiZcImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudFwiaW4gYS5jcmVhdGVSYW5nZSgpO2Z1bmN0aW9uIGMoZSl7cmV0dXJuIGU9ZS50cmltKCksdT9mdW5jdGlvbihlKXt2YXIgdD1hLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtyZXR1cm4gdC5pbm5lckhUTUw9ZSx0LmNvbnRlbnQuY2hpbGROb2Rlc1swXX0oZSk6cz9mdW5jdGlvbihlKXtyZXR1cm4gaXx8KGk9YS5jcmVhdGVSYW5nZSgpKS5zZWxlY3ROb2RlKGEuYm9keSksaS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZSkuY2hpbGROb2Rlc1swXX0oZSk6ZnVuY3Rpb24oZSl7dmFyIHQ9YS5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtyZXR1cm4gdC5pbm5lckhUTUw9ZSx0LmNoaWxkTm9kZXNbMF19KGUpfWZ1bmN0aW9uIGwoZSx0KXt2YXIgbixpLHI9ZS5ub2RlTmFtZSxvPXQubm9kZU5hbWU7cmV0dXJuIHI9PT1vfHwobj1yLmNoYXJDb2RlQXQoMCksaT1vLmNoYXJDb2RlQXQoMCksbjw9OTAmJmk+PTk3P3I9PT1vLnRvVXBwZXJDYXNlKCk6aTw9OTAmJm4+PTk3JiZvPT09ci50b1VwcGVyQ2FzZSgpKX1mdW5jdGlvbiBkKGUsdCxuKXtlW25dIT09dFtuXSYmKGVbbl09dFtuXSxlW25dP2Uuc2V0QXR0cmlidXRlKG4sXCJcIik6ZS5yZW1vdmVBdHRyaWJ1dGUobikpfXZhciBoPXtPUFRJT046ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnBhcmVudE5vZGU7aWYobil7dmFyIGk9bi5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1wiT1BUR1JPVVBcIj09PWkmJihpPShuPW4ucGFyZW50Tm9kZSkmJm4ubm9kZU5hbWUudG9VcHBlckNhc2UoKSksXCJTRUxFQ1RcIiE9PWl8fG4uaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIil8fChlLmhhc0F0dHJpYnV0ZShcInNlbGVjdGVkXCIpJiYhdC5zZWxlY3RlZCYmKGUuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpLGUucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIikpLG4uc2VsZWN0ZWRJbmRleD0tMSl9ZChlLHQsXCJzZWxlY3RlZFwiKX0sSU5QVVQ6ZnVuY3Rpb24oZSx0KXtkKGUsdCxcImNoZWNrZWRcIiksZChlLHQsXCJkaXNhYmxlZFwiKSxlLnZhbHVlIT09dC52YWx1ZSYmKGUudmFsdWU9dC52YWx1ZSksdC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKXx8ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0sVEVYVEFSRUE6ZnVuY3Rpb24oZSx0KXt2YXIgbj10LnZhbHVlO2UudmFsdWUhPT1uJiYoZS52YWx1ZT1uKTt2YXIgaT1lLmZpcnN0Q2hpbGQ7aWYoaSl7dmFyIHI9aS5ub2RlVmFsdWU7aWYocj09bnx8IW4mJnI9PWUucGxhY2Vob2xkZXIpcmV0dXJuO2kubm9kZVZhbHVlPW59fSxTRUxFQ1Q6ZnVuY3Rpb24oZSx0KXtpZighdC5oYXNBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKSl7Zm9yKHZhciBuLGkscj0tMSxvPTAsYT1lLmZpcnN0Q2hpbGQ7YTspaWYoXCJPUFRHUk9VUFwiPT09KGk9YS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSlhPShuPWEpLmZpcnN0Q2hpbGQ7ZWxzZXtpZihcIk9QVElPTlwiPT09aSl7aWYoYS5oYXNBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSl7cj1vO2JyZWFrfW8rK30hKGE9YS5uZXh0U2libGluZykmJm4mJihhPW4ubmV4dFNpYmxpbmcsbj1udWxsKX1lLnNlbGVjdGVkSW5kZXg9cn19fSxmPTEsdj0xMSxwPTMsZz04O2Z1bmN0aW9uIG0oKXt9ZnVuY3Rpb24geShlKXtpZihlKXJldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8ZS5pZH12YXIgaz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxuLGkpe2lmKGl8fChpPXt9KSxcInN0cmluZ1wiPT10eXBlb2YgbilpZihcIiNkb2N1bWVudFwiPT09dC5ub2RlTmFtZXx8XCJIVE1MXCI9PT10Lm5vZGVOYW1lfHxcIkJPRFlcIj09PXQubm9kZU5hbWUpe3ZhciByPW47KG49YS5jcmVhdGVFbGVtZW50KFwiaHRtbFwiKSkuaW5uZXJIVE1MPXJ9ZWxzZSBuPWMobik7dmFyIHU9aS5nZXROb2RlS2V5fHx5LHM9aS5vbkJlZm9yZU5vZGVBZGRlZHx8bSxkPWkub25Ob2RlQWRkZWR8fG0saz1pLm9uQmVmb3JlRWxVcGRhdGVkfHxtLGI9aS5vbkVsVXBkYXRlZHx8bSx3PWkub25CZWZvcmVOb2RlRGlzY2FyZGVkfHxtLEU9aS5vbk5vZGVEaXNjYXJkZWR8fG0sUz1pLm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWR8fG0sQT0hMD09PWkuY2hpbGRyZW5Pbmx5LHg9T2JqZWN0LmNyZWF0ZShudWxsKSxDPVtdO2Z1bmN0aW9uIFAoZSl7Qy5wdXNoKGUpfWZ1bmN0aW9uIEwoZSx0LG4peyExIT09dyhlKSYmKHQmJnQucmVtb3ZlQ2hpbGQoZSksRShlKSxmdW5jdGlvbiBlKHQsbil7aWYodC5ub2RlVHlwZT09PWYpZm9yKHZhciBpPXQuZmlyc3RDaGlsZDtpOyl7dmFyIHI9dm9pZCAwO24mJihyPXUoaSkpP1Aocik6KEUoaSksaS5maXJzdENoaWxkJiZlKGksbikpLGk9aS5uZXh0U2libGluZ319KGUsbikpfWZ1bmN0aW9uIEkoZSl7ZChlKTtmb3IodmFyIHQ9ZS5maXJzdENoaWxkO3Q7KXt2YXIgbj10Lm5leHRTaWJsaW5nLGk9dSh0KTtpZihpKXt2YXIgcj14W2ldO3ImJmwodCxyKT8odC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyLHQpLFQocix0KSk6SSh0KX1lbHNlIEkodCk7dD1ufX1mdW5jdGlvbiBUKHQsbixpKXt2YXIgcj11KG4pO2lmKHImJmRlbGV0ZSB4W3JdLCFpKXtpZighMT09PWsodCxuKSlyZXR1cm47aWYoZSh0LG4pLGIodCksITE9PT1TKHQsbikpcmV0dXJufVwiVEVYVEFSRUFcIiE9PXQubm9kZU5hbWU/ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHIsbyxjLGQ9dC5maXJzdENoaWxkLHY9ZS5maXJzdENoaWxkO2U6Zm9yKDtkOyl7Zm9yKG89ZC5uZXh0U2libGluZyxuPXUoZCk7djspe2lmKHI9di5uZXh0U2libGluZyxkLmlzU2FtZU5vZGUmJmQuaXNTYW1lTm9kZSh2KSl7ZD1vLHY9cjtjb250aW51ZSBlfWk9dSh2KTt2YXIgbT12Lm5vZGVUeXBlLHk9dm9pZCAwO2lmKG09PT1kLm5vZGVUeXBlJiYobT09PWY/KG4/biE9PWkmJigoYz14W25dKT9yPT09Yz95PSExOihlLmluc2VydEJlZm9yZShjLHYpLGk/UChpKTpMKHYsZSwhMCksdj1jKTp5PSExKTppJiYoeT0hMSksKHk9ITEhPT15JiZsKHYsZCkpJiZUKHYsZCkpOm0hPT1wJiZtIT1nfHwoeT0hMCx2Lm5vZGVWYWx1ZSE9PWQubm9kZVZhbHVlJiYodi5ub2RlVmFsdWU9ZC5ub2RlVmFsdWUpKSkseSl7ZD1vLHY9cjtjb250aW51ZSBlfWk/UChpKTpMKHYsZSwhMCksdj1yfWlmKG4mJihjPXhbbl0pJiZsKGMsZCkpZS5hcHBlbmRDaGlsZChjKSxUKGMsZCk7ZWxzZXt2YXIgaz1zKGQpOyExIT09ayYmKGsmJihkPWspLGQuYWN0dWFsaXplJiYoZD1kLmFjdHVhbGl6ZShlLm93bmVyRG9jdW1lbnR8fGEpKSxlLmFwcGVuZENoaWxkKGQpLEkoZCkpfWQ9byx2PXJ9IWZ1bmN0aW9uKGUsdCxuKXtmb3IoO3Q7KXt2YXIgaT10Lm5leHRTaWJsaW5nOyhuPXUodCkpP1Aobik6TCh0LGUsITApLHQ9aX19KGUsdixpKTt2YXIgYj1oW2Uubm9kZU5hbWVdO2ImJmIoZSx0KX0odCxuKTpoLlRFWFRBUkVBKHQsbil9IWZ1bmN0aW9uIGUodCl7aWYodC5ub2RlVHlwZT09PWZ8fHQubm9kZVR5cGU9PT12KWZvcih2YXIgbj10LmZpcnN0Q2hpbGQ7bjspe3ZhciBpPXUobik7aSYmKHhbaV09biksZShuKSxuPW4ubmV4dFNpYmxpbmd9fSh0KTt2YXIgRD10LF89RC5ub2RlVHlwZSxOPW4ubm9kZVR5cGU7aWYoIUEpaWYoXz09PWYpTj09PWY/bCh0LG4pfHwoRSh0KSxEPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPWUuZmlyc3RDaGlsZDtuOyl7dmFyIGk9bi5uZXh0U2libGluZzt0LmFwcGVuZENoaWxkKG4pLG49aX1yZXR1cm4gdH0odCxmdW5jdGlvbihlLHQpe3JldHVybiB0JiZ0IT09bz9hLmNyZWF0ZUVsZW1lbnROUyh0LGUpOmEuY3JlYXRlRWxlbWVudChlKX0obi5ub2RlTmFtZSxuLm5hbWVzcGFjZVVSSSkpKTpEPW47ZWxzZSBpZihfPT09cHx8Xz09PWcpe2lmKE49PT1fKXJldHVybiBELm5vZGVWYWx1ZSE9PW4ubm9kZVZhbHVlJiYoRC5ub2RlVmFsdWU9bi5ub2RlVmFsdWUpLEQ7RD1ufWlmKEQ9PT1uKUUodCk7ZWxzZXtpZihuLmlzU2FtZU5vZGUmJm4uaXNTYW1lTm9kZShEKSlyZXR1cm47aWYoVChELG4sQSksQylmb3IodmFyIFI9MCxPPUMubGVuZ3RoO1I8TztSKyspe3ZhciBqPXhbQ1tSXV07aiYmTChqLGoucGFyZW50Tm9kZSwhMSl9fXJldHVybiFBJiZEIT09dCYmdC5wYXJlbnROb2RlJiYoRC5hY3R1YWxpemUmJihEPUQuYWN0dWFsaXplKHQub3duZXJEb2N1bWVudHx8YSkpLHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoRCx0KSksRH19KGZ1bmN0aW9uKGUsdCl7dmFyIG4saSxvLGEsdT10LmF0dHJpYnV0ZXM7aWYodC5ub2RlVHlwZSE9PXImJmUubm9kZVR5cGUhPT1yKXtmb3IodmFyIHM9dS5sZW5ndGgtMTtzPj0wO3MtLSlpPShuPXVbc10pLm5hbWUsbz1uLm5hbWVzcGFjZVVSSSxhPW4udmFsdWUsbz8oaT1uLmxvY2FsTmFtZXx8aSxlLmdldEF0dHJpYnV0ZU5TKG8saSkhPT1hJiYoXCJ4bWxuc1wiPT09bi5wcmVmaXgmJihpPW4ubmFtZSksZS5zZXRBdHRyaWJ1dGVOUyhvLGksYSkpKTplLmdldEF0dHJpYnV0ZShpKSE9PWEmJmUuc2V0QXR0cmlidXRlKGksYSk7Zm9yKHZhciBjPWUuYXR0cmlidXRlcyxsPWMubGVuZ3RoLTE7bD49MDtsLS0paT0obj1jW2xdKS5uYW1lLChvPW4ubmFtZXNwYWNlVVJJKT8oaT1uLmxvY2FsTmFtZXx8aSx0Lmhhc0F0dHJpYnV0ZU5TKG8saSl8fGUucmVtb3ZlQXR0cmlidXRlTlMobyxpKSk6dC5oYXNBdHRyaWJ1dGUoaSl8fGUucmVtb3ZlQXR0cmlidXRlKGkpfX0pO2Z1bmN0aW9uIGIoZSl7cmV0dXJuIEwoZSl8fEUoZSl8fEkoZSl8fFAoKX1mdW5jdGlvbiB3KGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBUKGUpfShlKXx8RShlKXx8SShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBFKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpcmV0dXJuIEFycmF5LmZyb20oZSl9ZnVuY3Rpb24gUyhlLHQpe3ZhciBuPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKGk9aS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpLG4ucHVzaC5hcHBseShuLGkpfXJldHVybiBufWZ1bmN0aW9uIEEoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/UyhPYmplY3QobiksITApLmZvckVhY2goZnVuY3Rpb24odCl7eChlLHQsblt0XSl9KTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG4pKTpTKE9iamVjdChuKSkuZm9yRWFjaChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobix0KSl9KX1yZXR1cm4gZX1mdW5jdGlvbiB4KGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1mdW5jdGlvbiBDKGUsdCl7cmV0dXJuIEwoZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKSlyZXR1cm47dmFyIG49W10saT0hMCxyPSExLG89dm9pZCAwO3RyeXtmb3IodmFyIGEsdT1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKGk9KGE9dS5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO2k9ITApO31jYXRjaChlKXtyPSEwLG89ZX1maW5hbGx5e3RyeXtpfHxudWxsPT11LnJldHVybnx8dS5yZXR1cm4oKX1maW5hbGx5e2lmKHIpdGhyb3cgb319cmV0dXJuIG59KGUsdCl8fEkoZSx0KXx8UCgpfWZ1bmN0aW9uIFAoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfWZ1bmN0aW9uIEwoZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX1mdW5jdGlvbiBJKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIFQoZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP1QoZSx0KTp2b2lkIDB9fWZ1bmN0aW9uIFQoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxpPW5ldyBBcnJheSh0KTtuPHQ7bisrKWlbbl09ZVtuXTtyZXR1cm4gaX1mdW5jdGlvbiBEKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBfKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkua2V5LGkpfX1mdW5jdGlvbiBOKGUsdCxuKXtyZXR1cm4gdCYmXyhlLnByb3RvdHlwZSx0KSxuJiZfKGUsbiksZX1mdW5jdGlvbiBSKGUpe1wiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtyZXR1cm4oUj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9bi5kKHQsXCJkZWJ1Z1wiLGZ1bmN0aW9uKCl7cmV0dXJuIFh9KSxuLmQodCxcIlJlbmRlcmVkXCIsZnVuY3Rpb24oKXtyZXR1cm4gc2V9KSxuLmQodCxcIkxpdmVTb2NrZXRcIixmdW5jdGlvbigpe3JldHVybiBjZX0pLG4uZCh0LFwiQnJvd3NlclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGxlfSksbi5kKHQsXCJET01cIixmdW5jdGlvbigpe3JldHVybiBkZX0pLG4uZCh0LFwiVmlld1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHZlfSk7dmFyIE89WzFlMywzZTNdLGo9XCJkYXRhLXBoeC12aWV3XCIsSD1bXCJwaHgtY2xpY2stbG9hZGluZ1wiLFwicGh4LWNoYW5nZS1sb2FkaW5nXCIsXCJwaHgtc3VibWl0LWxvYWRpbmdcIixcInBoeC1rZXlkb3duLWxvYWRpbmdcIixcInBoeC1rZXl1cC1sb2FkaW5nXCIsXCJwaHgtYmx1ci1sb2FkaW5nXCIsXCJwaHgtZm9jdXMtbG9hZGluZ1wiXSxNPVwiZGF0YS1waHgtY29tcG9uZW50XCIsRj1cImRhdGEtcGh4LXJlZlwiLFU9XCJkYXRhLXBoeC11cGxvYWQtcmVmXCIsQj1cIltcIi5jb25jYXQoaixcIl1cIiksSj1bXCJ0ZXh0XCIsXCJ0ZXh0YXJlYVwiLFwibnVtYmVyXCIsXCJlbWFpbFwiLFwicGFzc3dvcmRcIixcInNlYXJjaFwiLFwidGVsXCIsXCJ1cmxcIixcImRhdGVcIixcInRpbWVcIl0sVj1bXCJjaGVja2JveFwiLFwicmFkaW9cIl0sVz0xLHE9XCJwaHgtXCIsej17ZGVib3VuY2U6MzAwLHRocm90dGxlOjMwMH0sSz1mdW5jdGlvbihlLHQpe3JldHVybiBjb25zb2xlLmVycm9yJiZjb25zb2xlLmVycm9yKGUsdCl9O3ZhciBYPWZ1bmN0aW9uKGUsdCxuLGkpe2UubGl2ZVNvY2tldC5pc0RlYnVnRW5hYmxlZCgpJiZjb25zb2xlLmxvZyhcIlwiLmNvbmNhdChlLmlkLFwiIFwiKS5jb25jYXQodCxcIjogXCIpLmNvbmNhdChuLFwiIC0gXCIpLGkpfSwkPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpmdW5jdGlvbigpe3JldHVybiBlfX0sRz1mdW5jdGlvbihlKXtyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSl9LFk9ZnVuY3Rpb24oZSx0LG4pe2Rve2lmKGUubWF0Y2hlcyhcIltcIi5jb25jYXQodCxcIl1cIikpKXJldHVybiBlO2U9ZS5wYXJlbnRFbGVtZW50fHxlLnBhcmVudE5vZGV9d2hpbGUobnVsbCE9PWUmJjE9PT1lLm5vZGVUeXBlJiYhKG4mJm4uaXNTYW1lTm9kZShlKXx8ZS5tYXRjaGVzKEIpKSk7cmV0dXJuIG51bGx9LFE9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPT1lJiZcIm9iamVjdFwiPT09UihlKSYmIShlIGluc3RhbmNlb2YgQXJyYXkpfSxaPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKXJldHVybiExO3JldHVybiEwfSxlZT1mdW5jdGlvbihlLHQpe3JldHVybiBlJiZ0KGUpfSx0ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLGkpe0QodGhpcyxlKSx0aGlzLnJlZj1yZS5nZW5GaWxlUmVmKG4pLHRoaXMuZmlsZUVsPXQsdGhpcy5maWxlPW4sdGhpcy52aWV3PWksdGhpcy5tZXRhPW51bGwsdGhpcy5faXNDYW5jZWxsZWQ9ITEsdGhpcy5faXNEb25lPSExLHRoaXMuX3Byb2dyZXNzPTAsdGhpcy5fbGFzdFByb2dyZXNzU2VudD0tMSx0aGlzLl9vbkRvbmU9ZnVuY3Rpb24oKXt9fXJldHVybiBOKGUsbnVsbCxbe2tleTpcImlzQWN0aXZlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj12b2lkIDA9PT10Ll9waHhSZWYsaT1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LWFjdGl2ZS1yZWZzXCIpLnNwbGl0KFwiLFwiKS5pbmRleE9mKHJlLmdlbkZpbGVSZWYodCkpPj0wO3JldHVybiB0LnNpemU+MCYmKG58fGkpfX0se2tleTpcImlzUHJlZmxpZ2h0ZWRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcHJlZmxpZ2h0ZWQtcmVmc1wiKS5zcGxpdChcIixcIikuaW5kZXhPZihyZS5nZW5GaWxlUmVmKHQpKT49MDtyZXR1cm4gbiYmdGhpcy5pc0FjdGl2ZShlLHQpfX1dKSxOKGUsW3trZXk6XCJtZXRhZGF0YVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWV0YX19LHtrZXk6XCJwcm9ncmVzc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dGhpcy5fcHJvZ3Jlc3M9TWF0aC5mbG9vcihlKSx0aGlzLl9wcm9ncmVzcz50aGlzLl9sYXN0UHJvZ3Jlc3NTZW50JiYodGhpcy5fcHJvZ3Jlc3M+PTEwMD8odGhpcy5fcHJvZ3Jlc3M9MTAwLHRoaXMuX2xhc3RQcm9ncmVzc1NlbnQ9MTAwLHRoaXMuX2lzRG9uZT0hMCx0aGlzLnZpZXcucHVzaEZpbGVQcm9ncmVzcyh0aGlzLmZpbGVFbCx0aGlzLnJlZiwxMDAsZnVuY3Rpb24oKXtyZS51bnRyYWNrRmlsZSh0LmZpbGVFbCx0LmZpbGUpLHQuX29uRG9uZSgpfSkpOih0aGlzLl9sYXN0UHJvZ3Jlc3NTZW50PXRoaXMuX3Byb2dyZXNzLHRoaXMudmlldy5wdXNoRmlsZVByb2dyZXNzKHRoaXMuZmlsZUVsLHRoaXMucmVmLHRoaXMuX3Byb2dyZXNzKSkpfX0se2tleTpcImNhbmNlbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5faXNDYW5jZWxsZWQ9ITAsdGhpcy5faXNEb25lPSEwLHRoaXMuX29uRG9uZSgpfX0se2tleTpcImlzRG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lzRG9uZX19LHtrZXk6XCJlcnJvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZmFpbGVkXCI7cmUuY2xlYXJGaWxlcyh0aGlzLmZpbGVFbCksdGhpcy52aWV3LnB1c2hGaWxlUHJvZ3Jlc3ModGhpcy5maWxlRWwsdGhpcy5yZWYse2Vycm9yOmV9KX19LHtrZXk6XCJvbkRvbmVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLl9vbkRvbmU9ZX19LHtrZXk6XCJ0b1ByZWZsaWdodFBheWxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntsYXN0X21vZGlmaWVkOnRoaXMuZmlsZS5sYXN0TW9kaWZpZWQsbmFtZTp0aGlzLmZpbGUubmFtZSxzaXplOnRoaXMuZmlsZS5zaXplLHR5cGU6dGhpcy5maWxlLnR5cGUscmVmOnRoaXMucmVmfX19LHtrZXk6XCJ1cGxvYWRlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMubWV0YS51cGxvYWRlcil7dmFyIHQ9ZVt0aGlzLm1ldGEudXBsb2FkZXJdfHxLKFwibm8gdXBsb2FkZXIgY29uZmlndXJlZCBmb3IgXCIuY29uY2F0KHRoaXMubWV0YS51cGxvYWRlcikpO3JldHVybntuYW1lOnRoaXMubWV0YS51cGxvYWRlcixjYWxsYmFjazp0fX1yZXR1cm57bmFtZTpcImNoYW5uZWxcIixjYWxsYmFjazpvZX19fSx7a2V5OlwiemlwUG9zdEZsaWdodFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMubWV0YT1lLmVudHJpZXNbdGhpcy5yZWZdLHRoaXMubWV0YXx8SyhcIm5vIHByZWZsaWdodCB1cGxvYWQgcmVzcG9uc2UgcmV0dXJuZWQgd2l0aCByZWYgXCIuY29uY2F0KHRoaXMucmVmKSx7aW5wdXQ6dGhpcy5maWxlRWwscmVzcG9uc2U6ZX0pfX1dKSxlfSgpLG5lPXtMaXZlRmlsZVVwbG9hZDp7cHJlZmxpZ2h0ZWRSZWZzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcHJlZmxpZ2h0ZWQtcmVmc1wiKX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMucHJlZmxpZ2h0ZWRXYXM9dGhpcy5wcmVmbGlnaHRlZFJlZnMoKX0sdXBkYXRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJlZmxpZ2h0ZWRSZWZzKCk7dGhpcy5wcmVmbGlnaHRlZFdhcyE9PWUmJih0aGlzLnByZWZsaWdodGVkV2FzPWUsXCJcIj09PWUmJnRoaXMuX192aWV3LmNhbmNlbFN1Ym1pdCh0aGlzLmVsLmZvcm0pKX19fTtuZS5MaXZlSW1nUHJldmlldz17bW91bnRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5yZWY9dGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1lbnRyeS1yZWZcIiksdGhpcy5pbnB1dEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWwuZ2V0QXR0cmlidXRlKFUpKSxyZS5nZXRFbnRyeURhdGFVUkwodGhpcy5pbnB1dEVsLHRoaXMucmVmLGZ1bmN0aW9uKHQpe3JldHVybiBlLmVsLnNyYz10fSl9fTt2YXIgaWU9MCxyZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLGkpe0QodGhpcyxlKSx0aGlzLnZpZXc9bix0aGlzLm9uQ29tcGxldGU9aSx0aGlzLl9lbnRyaWVzPUFycmF5LmZyb20oZS5maWxlc0F3YWl0aW5nUHJlZmxpZ2h0KHQpfHxbXSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgdGUodCxlLG4pfSksdGhpcy5udW1FbnRyaWVzSW5Qcm9ncmVzcz10aGlzLl9lbnRyaWVzLmxlbmd0aH1yZXR1cm4gTihlLG51bGwsW3trZXk6XCJnZW5GaWxlUmVmXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5fcGh4UmVmO3JldHVybiB2b2lkIDAhPT10P3Q6KGUuX3BoeFJlZj0oaWUrKykudG9TdHJpbmcoKSxlLl9waHhSZWYpfX0se2tleTpcImdldEVudHJ5RGF0YVVSTFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLHI9dGhpcy5hY3RpdmVGaWxlcyhlKS5maW5kKGZ1bmN0aW9uKGUpe3JldHVybiBpLmdlbkZpbGVSZWYoZSk9PT10fSksbz1uZXcgRmlsZVJlYWRlcjtvLm9ubG9hZD1mdW5jdGlvbihlKXtyZXR1cm4gbihlLnRhcmdldC5yZXN1bHQpfSxvLnJlYWRBc0RhdGFVUkwocil9fSx7a2V5OlwiaGFzVXBsb2Fkc0luUHJvZ3Jlc3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD0wO3JldHVybiBkZS5maW5kVXBsb2FkSW5wdXRzKGUpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1wcmVmbGlnaHRlZC1yZWZzXCIpIT09ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kb25lLXJlZnNcIikmJnQrK30pLHQ+MH19LHtrZXk6XCJzZXJpYWxpemVVcGxvYWRzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXt9O3JldHVybiB0aGlzLmFjdGl2ZUZpbGVzKGUsXCJzZXJpYWxpemVcIikuZm9yRWFjaChmdW5jdGlvbihpKXt2YXIgcj17cGF0aDplLm5hbWV9LG89ZS5nZXRBdHRyaWJ1dGUoVSk7bltvXT1uW29dfHxbXSxyLnJlZj10LmdlbkZpbGVSZWYoaSksci5uYW1lPWkubmFtZSxyLnR5cGU9aS50eXBlLHIuc2l6ZT1pLnNpemUsbltvXS5wdXNoKHIpfSksbn19LHtrZXk6XCJjbGVhckZpbGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS52YWx1ZT1udWxsLGUucmVtb3ZlQXR0cmlidXRlKFUpLGRlLnB1dFByaXZhdGUoZSxcImZpbGVzXCIsW10pfX0se2tleTpcInVudHJhY2tGaWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtkZS5wdXRQcml2YXRlKGUsXCJmaWxlc1wiLGRlLnByaXZhdGUoZSxcImZpbGVzXCIpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hT2JqZWN0LmlzKGUsdCl9KSl9fSx7a2V5OlwidHJhY2tGaWxlc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZihudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKSl7dmFyIGk9dC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIW4uYWN0aXZlRmlsZXMoZSkuZmluZChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmlzKGUsdCl9KX0pO2RlLnB1dFByaXZhdGUoZSxcImZpbGVzXCIsdGhpcy5hY3RpdmVGaWxlcyhlKS5jb25jYXQoaSkpLGUudmFsdWU9bnVsbH1lbHNlIGRlLnB1dFByaXZhdGUoZSxcImZpbGVzXCIsdCl9fSx7a2V5OlwiYWN0aXZlRmlsZUlucHV0c1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj1kZS5maW5kVXBsb2FkSW5wdXRzKGUpO3JldHVybiBBcnJheS5mcm9tKG4pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5maWxlcyYmdC5hY3RpdmVGaWxlcyhlKS5sZW5ndGg+MH0pfX0se2tleTpcImFjdGl2ZUZpbGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuKGRlLnByaXZhdGUoZSxcImZpbGVzXCIpfHxbXSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0ZS5pc0FjdGl2ZShlLHQpfSl9fSx7a2V5OlwiaW5wdXRzQXdhaXRpbmdQcmVmbGlnaHRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49ZGUuZmluZFVwbG9hZElucHV0cyhlKTtyZXR1cm4gQXJyYXkuZnJvbShuKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIHQuZmlsZXNBd2FpdGluZ1ByZWZsaWdodChlKS5sZW5ndGg+MH0pfX0se2tleTpcImZpbGVzQXdhaXRpbmdQcmVmbGlnaHRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hY3RpdmVGaWxlcyhlKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIXRlLmlzUHJlZmxpZ2h0ZWQoZSx0KX0pfX1dKSxOKGUsW3trZXk6XCJlbnRyaWVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZW50cmllc319LHtrZXk6XCJpbml0QWRhcHRlclVwbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO3RoaXMuX2VudHJpZXM9dGhpcy5fZW50cmllcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQuemlwUG9zdEZsaWdodChlKSx0Lm9uRG9uZShmdW5jdGlvbigpe2kubnVtRW50cmllc0luUHJvZ3Jlc3MtLSwwPT09aS5udW1FbnRyaWVzSW5Qcm9ncmVzcyYmaS5vbkNvbXBsZXRlKCl9KSx0fSk7dmFyIHI9dGhpcy5fZW50cmllcy5yZWR1Y2UoZnVuY3Rpb24oZSx0KXt2YXIgaT10LnVwbG9hZGVyKG4udXBsb2FkZXJzKSxyPWkubmFtZSxvPWkuY2FsbGJhY2s7cmV0dXJuIGVbcl09ZVtyXXx8e2NhbGxiYWNrOm8sZW50cmllczpbXX0sZVtyXS5lbnRyaWVzLnB1c2godCksZX0se30pO2Zvcih2YXIgbyBpbiByKXt2YXIgYT1yW29dOygwLGEuY2FsbGJhY2spKGEuZW50cmllcyx0LGUsbil9fX1dKSxlfSgpLG9lPWZ1bmN0aW9uKGUsdCxuLGkpe2UuZm9yRWFjaChmdW5jdGlvbihlKXtuZXcgYWUoZSxuLmNvbmZpZy5jaHVua19zaXplLGkpLnVwbG9hZCgpfSl9LGFlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4saSl7RCh0aGlzLGUpLHRoaXMubGl2ZVNvY2tldD1pLHRoaXMuZW50cnk9dCx0aGlzLm9mZnNldD0wLHRoaXMuY2h1bmtTaXplPW4sdGhpcy5jaHVua1RpbWVyPW51bGwsdGhpcy51cGxvYWRDaGFubmVsPWkuY2hhbm5lbChcImx2dTpcIi5jb25jYXQodC5yZWYpLHt0b2tlbjp0Lm1ldGFkYXRhKCl9KX1yZXR1cm4gTihlLFt7a2V5OlwiZXJyb3JcIix2YWx1ZTpmdW5jdGlvbihlKXtjbGVhclRpbWVvdXQodGhpcy5jaHVua1RpbWVyKSx0aGlzLnVwbG9hZENoYW5uZWwubGVhdmUoKSx0aGlzLmVudHJ5LmVycm9yKGUpfX0se2tleTpcInVwbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnVwbG9hZENoYW5uZWwub25FcnJvcihmdW5jdGlvbih0KXtyZXR1cm4gZS5lcnJvcih0KX0pLHRoaXMudXBsb2FkQ2hhbm5lbC5qb2luKCkucmVjZWl2ZShcIm9rXCIsZnVuY3Rpb24odCl7cmV0dXJuIGUucmVhZE5leHRDaHVuaygpfSkucmVjZWl2ZShcImVycm9yXCIsZnVuY3Rpb24odCl7cmV0dXJuIGUuZXJyb3IodCl9KX19LHtrZXk6XCJpc0RvbmVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9mZnNldD49dGhpcy5lbnRyeS5maWxlLnNpemV9fSx7a2V5OlwicmVhZE5leHRDaHVua1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PW5ldyB3aW5kb3cuRmlsZVJlYWRlcixuPXRoaXMuZW50cnkuZmlsZS5zbGljZSh0aGlzLm9mZnNldCx0aGlzLmNodW5rU2l6ZSt0aGlzLm9mZnNldCk7dC5vbmxvYWQ9ZnVuY3Rpb24odCl7aWYobnVsbCE9PXQudGFyZ2V0LmVycm9yKXJldHVybiBLKFwiUmVhZCBlcnJvcjogXCIrdC50YXJnZXQuZXJyb3IpO2Uub2Zmc2V0Kz10LnRhcmdldC5yZXN1bHQuYnl0ZUxlbmd0aCxlLnB1c2hDaHVuayh0LnRhcmdldC5yZXN1bHQpfSx0LnJlYWRBc0FycmF5QnVmZmVyKG4pfX0se2tleTpcInB1c2hDaHVua1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dGhpcy51cGxvYWRDaGFubmVsLmlzSm9pbmVkKCkmJnRoaXMudXBsb2FkQ2hhbm5lbC5wdXNoKFwiY2h1bmtcIixlKS5yZWNlaXZlKFwib2tcIixmdW5jdGlvbigpe3QuZW50cnkucHJvZ3Jlc3ModC5vZmZzZXQvdC5lbnRyeS5maWxlLnNpemUqMTAwKSx0LmlzRG9uZSgpfHwodC5jaHVua1RpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdC5yZWFkTmV4dENodW5rKCl9LHQubGl2ZVNvY2tldC5nZXRMYXRlbmN5U2ltKCl8fDApKX0pfX1dKSxlfSgpLHVlPWZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxuPW5ldyBGb3JtRGF0YShlKSxpPVtdO24uZm9yRWFjaChmdW5jdGlvbihlLHQsbil7ZSBpbnN0YW5jZW9mIEZpbGUmJmkucHVzaCh0KX0pLGkuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gbi5kZWxldGUoZSl9KTt2YXIgcixvPW5ldyBVUkxTZWFyY2hQYXJhbXMsYT1mdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHxudWxsPT1lW1N5bWJvbC5pdGVyYXRvcl0pe2lmKEFycmF5LmlzQXJyYXkoZSl8fChlPUkoZSkpKXt2YXIgdD0wLG49ZnVuY3Rpb24oKXt9O3JldHVybntzOm4sbjpmdW5jdGlvbigpe3JldHVybiB0Pj1lLmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6ZVt0KytdfX0sZTpmdW5jdGlvbihlKXt0aHJvdyBlfSxmOm59fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgaSxyLG89ITAsYT0hMTtyZXR1cm57czpmdW5jdGlvbigpe2k9ZVtTeW1ib2wuaXRlcmF0b3JdKCl9LG46ZnVuY3Rpb24oKXt2YXIgZT1pLm5leHQoKTtyZXR1cm4gbz1lLmRvbmUsZX0sZTpmdW5jdGlvbihlKXthPSEwLHI9ZX0sZjpmdW5jdGlvbigpe3RyeXtvfHxudWxsPT1pLnJldHVybnx8aS5yZXR1cm4oKX1maW5hbGx5e2lmKGEpdGhyb3cgcn19fX0obi5lbnRyaWVzKCkpO3RyeXtmb3IoYS5zKCk7IShyPWEubigpKS5kb25lOyl7dmFyIHU9QyhyLnZhbHVlLDIpLHM9dVswXSxjPXVbMV07by5hcHBlbmQocyxjKX19Y2F0Y2goZSl7YS5lKGUpfWZpbmFsbHl7YS5mKCl9Zm9yKHZhciBsIGluIHQpby5hcHBlbmQobCx0W2xdKTtyZXR1cm4gby50b1N0cmluZygpfSxzZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXtEKHRoaXMsZSksdGhpcy52aWV3SWQ9dCx0aGlzLnJlbmRlcmVkPXt9LHRoaXMubWVyZ2VEaWZmKG4pfXJldHVybiBOKGUsbnVsbCxbe2tleTpcImV4dHJhY3RcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnIsbj1lLmUsaT1lLnQ7cmV0dXJuIGRlbGV0ZSBlLnIsZGVsZXRlIGUuZSxkZWxldGUgZS50LHtkaWZmOmUsdGl0bGU6aSxyZXBseTp0fHxudWxsLGV2ZW50czpufHxbXX19fV0pLE4oZSxbe2tleTpcInBhcmVudFZpZXdJZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlld0lkfX0se2tleTpcInRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVjdXJzaXZlVG9TdHJpbmcodGhpcy5yZW5kZXJlZCx0aGlzLnJlbmRlcmVkLmMsZSl9fSx7a2V5OlwicmVjdXJzaXZlVG9TdHJpbmdcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06ZS5jLG49YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDAsaT17YnVmZmVyOlwiXCIsY29tcG9uZW50czp0LG9ubHlDaWRzOm49bj9uZXcgU2V0KG4pOm51bGx9O3JldHVybiB0aGlzLnRvT3V0cHV0QnVmZmVyKGUsaSksaS5idWZmZXJ9fSx7a2V5OlwiY29tcG9uZW50Q0lEc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3Qua2V5cyhlLmN8fHt9KS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlSW50KGUpfSl9fSx7a2V5OlwiaXNDb21wb25lbnRPbmx5RGlmZlwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiEhZS5jJiYxPT09T2JqZWN0LmtleXMoZSkubGVuZ3RofX0se2tleTpcImdldENvbXBvbmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuY1t0XX19LHtrZXk6XCJtZXJnZURpZmZcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmMsbj17fTtpZihkZWxldGUgZS5jLHRoaXMucmVuZGVyZWQ9dGhpcy5tdXRhYmxlTWVyZ2UodGhpcy5yZW5kZXJlZCxlKSx0aGlzLnJlbmRlcmVkLmM9dGhpcy5yZW5kZXJlZC5jfHx7fSx0KXt2YXIgaT10aGlzLnJlbmRlcmVkLmM7Zm9yKHZhciByIGluIHQpdFtyXT10aGlzLmNhY2hlZEZpbmRDb21wb25lbnQocix0W3JdLGksdCxuKTtmb3IodmFyIG8gaW4gdClpW29dPXRbb107ZS5jPXR9fX0se2tleTpcImNhY2hlZEZpbmRDb21wb25lbnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpLHIpe2lmKHJbZV0pcmV0dXJuIHJbZV07dmFyIG8sYSx1LHM9dC5zO3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBzPyhhPSh1PXM+MD90aGlzLmNhY2hlZEZpbmRDb21wb25lbnQocyxpW3NdLG4saSxyKTpuWy1zXSkucywobz10aGlzLmNsb25lTWVyZ2UodSx0KSkucz1hKTpvPXZvaWQgMCE9PXQucz90OnRoaXMuY2xvbmVNZXJnZShuW2VdfHx7fSx0KSxyW2VdPW8sb319LHtrZXk6XCJtdXRhYmxlTWVyZ2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDAhPT10LnM/dDoodGhpcy5kb011dGFibGVNZXJnZShlLHQpLGUpfX0se2tleTpcImRvTXV0YWJsZU1lcmdlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCl7dmFyIGk9dFtuXSxyPWVbbl07UShpKSYmdm9pZCAwPT09aS5zJiZRKHIpP3RoaXMuZG9NdXRhYmxlTWVyZ2UocixpKTplW25dPWl9fX0se2tleTpcImNsb25lTWVyZ2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPUEoQSh7fSxlKSx0KTtmb3IodmFyIGkgaW4gbil7dmFyIHI9dFtpXSxvPWVbaV07UShyKSYmdm9pZCAwPT09ci5zJiZRKG8pJiYobltpXT10aGlzLmNsb25lTWVyZ2UobyxyKSl9cmV0dXJuIG59fSx7a2V5OlwiY29tcG9uZW50VG9TdHJpbmdcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZWN1cnNpdmVDSURUb1N0cmluZyh0aGlzLnJlbmRlcmVkLmMsZSl9fSx7a2V5OlwicHJ1bmVDSURzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGRlbGV0ZSB0LnJlbmRlcmVkLmNbZV19KX19LHtrZXk6XCJnZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlbmRlcmVkfX0se2tleTpcImlzTmV3RmluZ2VycHJpbnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiEhKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSkuc319LHtrZXk6XCJ0b091dHB1dEJ1ZmZlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZS5kKXJldHVybiB0aGlzLmNvbXByZWhlbnNpb25Ub0J1ZmZlcihlLHQpO3ZhciBuPWUuczt0LmJ1ZmZlcis9blswXTtmb3IodmFyIGk9MTtpPG4ubGVuZ3RoO2krKyl0aGlzLmR5bmFtaWNUb0J1ZmZlcihlW2ktMV0sdCksdC5idWZmZXIrPW5baV19fSx7a2V5OlwiY29tcHJlaGVuc2lvblRvQnVmZmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49ZS5kLGk9ZS5zLHI9MDtyPG4ubGVuZ3RoO3IrKyl7dmFyIG89bltyXTt0LmJ1ZmZlcis9aVswXTtmb3IodmFyIGE9MTthPGkubGVuZ3RoO2ErKyl0aGlzLmR5bmFtaWNUb0J1ZmZlcihvW2EtMV0sdCksdC5idWZmZXIrPWlbYV19fX0se2tleTpcImR5bmFtaWNUb0J1ZmZlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7XCJudW1iZXJcIj09dHlwZW9mIGU/dC5idWZmZXIrPXRoaXMucmVjdXJzaXZlQ0lEVG9TdHJpbmcodC5jb21wb25lbnRzLGUsdC5vbmx5Q2lkcyk6UShlKT90aGlzLnRvT3V0cHV0QnVmZmVyKGUsdCk6dC5idWZmZXIrPWV9fSx7a2V5OlwicmVjdXJzaXZlQ0lEVG9TdHJpbmdcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPWVbdF18fEsoXCJubyBjb21wb25lbnQgZm9yIENJRCBcIi5jb25jYXQodCksZSksbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7by5pbm5lckhUTUw9dGhpcy5yZWN1cnNpdmVUb1N0cmluZyhyLGUsbik7dmFyIGE9by5jb250ZW50LHU9biYmIW4uaGFzKHQpLHM9QyhBcnJheS5mcm9tKGEuY2hpbGROb2RlcykucmVkdWNlKGZ1bmN0aW9uKGUsbixyKXt2YXIgYT1DKGUsMikscz1hWzBdLGM9YVsxXTtyZXR1cm4gbi5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFP24uZ2V0QXR0cmlidXRlKE0pP1tzLCEwXToobi5zZXRBdHRyaWJ1dGUoTSx0KSxuLmlkfHwobi5pZD1cIlwiLmNvbmNhdChpLnBhcmVudFZpZXdJZCgpLFwiLVwiKS5jb25jYXQodCxcIi1cIikuY29uY2F0KHIpKSx1JiYobi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1za2lwXCIsXCJcIiksbi5pbm5lckhUTUw9XCJcIiksWyEwLGNdKTpcIlwiIT09bi5ub2RlVmFsdWUudHJpbSgpPyhLKFwib25seSBIVE1MIGVsZW1lbnQgdGFncyBhcmUgYWxsb3dlZCBhdCB0aGUgcm9vdCBvZiBjb21wb25lbnRzLlxcblxcblwiKydnb3Q6IFwiJy5jb25jYXQobi5ub2RlVmFsdWUudHJpbSgpLCdcIlxcblxcbicpK1wid2l0aGluOlxcblwiLG8uaW5uZXJIVE1MLnRyaW0oKSksbi5yZXBsYWNlV2l0aChpLmNyZWF0ZVNwYW4obi5ub2RlVmFsdWUsdCkpLFshMCxjXSk6KG4ucmVtb3ZlKCksW3MsY10pfSxbITEsITFdKSwyKSxjPXNbMF0sbD1zWzFdO3JldHVybiBjfHxsPyFjJiZsPyhLKFwiZXhwZWN0ZWQgYXQgbGVhc3Qgb25lIEhUTUwgZWxlbWVudCB0YWcgZGlyZWN0bHkgaW5zaWRlIGEgY29tcG9uZW50LCBidXQgb25seSBzdWJjb21wb25lbnRzIHdlcmUgZm91bmQuIEEgY29tcG9uZW50IG11c3QgcmVuZGVyIGF0IGxlYXN0IG9uZSBIVE1MIHRhZyBkaXJlY3RseSBpbnNpZGUgaXRzZWxmLlwiLG8uaW5uZXJIVE1MLnRyaW0oKSksby5pbm5lckhUTUwpOm8uaW5uZXJIVE1MOihLKFwiZXhwZWN0ZWQgYXQgbGVhc3Qgb25lIEhUTUwgZWxlbWVudCB0YWcgaW5zaWRlIGEgY29tcG9uZW50LCBidXQgdGhlIGNvbXBvbmVudCBpcyBlbXB0eTpcXG5cIixvLmlubmVySFRNTC50cmltKCkpLHRoaXMuY3JlYXRlU3BhbihcIlwiLHQpLm91dGVySFRNTCl9fSx7a2V5OlwiY3JlYXRlU3BhblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIG4uaW5uZXJUZXh0PWUsbi5zZXRBdHRyaWJ1dGUoTSx0KSxufX1dKSxlfSgpLGNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe3ZhciBpPXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e307aWYoRCh0aGlzLGUpLHRoaXMudW5sb2FkZWQ9ITEsIW58fFwiT2JqZWN0XCI9PT1uLmNvbnN0cnVjdG9yLm5hbWUpdGhyb3cgbmV3IEVycm9yKCdcXG4gICAgICBhIHBob2VuaXggU29ja2V0IG11c3QgYmUgcHJvdmlkZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byB0aGUgTGl2ZVNvY2tldCBjb25zdHJ1Y3Rvci4gRm9yIGV4YW1wbGU6XFxuXFxuICAgICAgICAgIGltcG9ydCB7U29ja2V0fSBmcm9tIFwicGhvZW5peFwiXFxuICAgICAgICAgIGltcG9ydCB7TGl2ZVNvY2tldH0gZnJvbSBcInBob2VuaXhfbGl2ZV92aWV3XCJcXG4gICAgICAgICAgbGV0IGxpdmVTb2NrZXQgPSBuZXcgTGl2ZVNvY2tldChcIi9saXZlXCIsIFNvY2tldCwgey4uLn0pXFxuICAgICAgJyk7dGhpcy5zb2NrZXQ9bmV3IG4odCxyKSx0aGlzLmJpbmRpbmdQcmVmaXg9ci5iaW5kaW5nUHJlZml4fHxxLHRoaXMub3B0cz1yLHRoaXMucGFyYW1zPSQoci5wYXJhbXN8fHt9KSx0aGlzLnZpZXdMb2dnZXI9ci52aWV3TG9nZ2VyLHRoaXMubWV0YWRhdGFDYWxsYmFja3M9ci5tZXRhZGF0YXx8e30sdGhpcy5kZWZhdWx0cz1PYmplY3QuYXNzaWduKEcoeiksci5kZWZhdWx0c3x8e30pLHRoaXMuYWN0aXZlRWxlbWVudD1udWxsLHRoaXMucHJldkFjdGl2ZT1udWxsLHRoaXMuc2lsZW5jZWQ9ITEsdGhpcy5tYWluPW51bGwsdGhpcy5saW5rUmVmPTEsdGhpcy5yb290cz17fSx0aGlzLmhyZWY9d2luZG93LmxvY2F0aW9uLmhyZWYsdGhpcy5wZW5kaW5nTGluaz1udWxsLHRoaXMuY3VycmVudExvY2F0aW9uPUcod2luZG93LmxvY2F0aW9uKSx0aGlzLmhvb2tzPXIuaG9va3N8fHt9LHRoaXMudXBsb2FkZXJzPXIudXBsb2FkZXJzfHx7fSx0aGlzLmxvYWRlclRpbWVvdXQ9ci5sb2FkZXJUaW1lb3V0fHxXLHRoaXMubG9jYWxTdG9yYWdlPXIubG9jYWxTdG9yYWdlfHx3aW5kb3cubG9jYWxTdG9yYWdlLHRoaXMuc2Vzc2lvblN0b3JhZ2U9ci5zZXNzaW9uU3RvcmFnZXx8d2luZG93LnNlc3Npb25TdG9yYWdlLHRoaXMuYm91bmRUb3BMZXZlbEV2ZW50cz0hMSx0aGlzLmRvbUNhbGxiYWNrcz1PYmplY3QuYXNzaWduKHtvbk5vZGVBZGRlZDokKCksb25CZWZvcmVFbFVwZGF0ZWQ6JCgpfSxyLmRvbXx8e30pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIixmdW5jdGlvbihlKXtpLnVubG9hZGVkPSEwfSksdGhpcy5zb2NrZXQub25PcGVuKGZ1bmN0aW9uKCl7aS5pc1VubG9hZGVkKCkmJndpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0pfXJldHVybiBOKGUsW3trZXk6XCJpc1Byb2ZpbGVFbmFibGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInRydWVcIj09PXRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInBoeDpsaXZlLXNvY2tldDpwcm9maWxpbmdcIil9fSx7a2V5OlwiaXNEZWJ1Z0VuYWJsZWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwidHJ1ZVwiPT09dGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicGh4OmxpdmUtc29ja2V0OmRlYnVnXCIpfX0se2tleTpcImVuYWJsZURlYnVnXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJwaHg6bGl2ZS1zb2NrZXQ6ZGVidWdcIixcInRydWVcIil9fSx7a2V5OlwiZW5hYmxlUHJvZmlsaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJwaHg6bGl2ZS1zb2NrZXQ6cHJvZmlsaW5nXCIsXCJ0cnVlXCIpfX0se2tleTpcImRpc2FibGVEZWJ1Z1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwicGh4OmxpdmUtc29ja2V0OmRlYnVnXCIpfX0se2tleTpcImRpc2FibGVQcm9maWxpbmdcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInBoeDpsaXZlLXNvY2tldDpwcm9maWxpbmdcIil9fSx7a2V5OlwiZW5hYmxlTGF0ZW5jeVNpbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuZW5hYmxlRGVidWcoKSxjb25zb2xlLmxvZyhcImxhdGVuY3kgc2ltdWxhdG9yIGVuYWJsZWQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGlzIGJyb3dzZXIgc2Vzc2lvbi4gQ2FsbCBkaXNhYmxlTGF0ZW5jeVNpbSgpIHRvIGRpc2FibGVcIiksdGhpcy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicGh4OmxpdmUtc29ja2V0OmxhdGVuY3ktc2ltXCIsZSl9fSx7a2V5OlwiZGlzYWJsZUxhdGVuY3lTaW1cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInBoeDpsaXZlLXNvY2tldDpsYXRlbmN5LXNpbVwiKX19LHtrZXk6XCJnZXRMYXRlbmN5U2ltXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwaHg6bGl2ZS1zb2NrZXQ6bGF0ZW5jeS1zaW1cIik7cmV0dXJuIGU/cGFyc2VJbnQoZSk6bnVsbH19LHtrZXk6XCJnZXRTb2NrZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNvY2tldH19LHtrZXk6XCJjb25uZWN0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZnVuY3Rpb24oKXtlLmpvaW5Sb290Vmlld3MoKSYmKGUuYmluZFRvcExldmVsRXZlbnRzKCksZS5zb2NrZXQuY29ubmVjdCgpKX07W1wiY29tcGxldGVcIixcImxvYWRlZFwiLFwiaW50ZXJhY3RpdmVcIl0uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKT49MD90KCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe3JldHVybiB0KCl9KX19LHtrZXk6XCJkaXNjb25uZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zb2NrZXQuZGlzY29ubmVjdChlKX19LHtrZXk6XCJ0cmlnZ2VyRE9NXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbjsobj10aGlzLmRvbUNhbGxiYWNrcylbZV0uYXBwbHkobix3KHQpKX19LHtrZXk6XCJ0aW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighdGhpcy5pc1Byb2ZpbGVFbmFibGVkKCl8fCFjb25zb2xlLnRpbWUpcmV0dXJuIHQoKTtjb25zb2xlLnRpbWUoZSk7dmFyIG49dCgpO3JldHVybiBjb25zb2xlLnRpbWVFbmQoZSksbn19LHtrZXk6XCJsb2dcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7aWYodGhpcy52aWV3TG9nZ2VyKXt2YXIgaT1DKG4oKSwyKSxyPWlbMF0sbz1pWzFdO3RoaXMudmlld0xvZ2dlcihlLHQscixvKX1lbHNlIGlmKHRoaXMuaXNEZWJ1Z0VuYWJsZWQoKSl7dmFyIGE9QyhuKCksMiksdT1hWzBdLHM9YVsxXTtYKGUsdCx1LHMpfX19LHtrZXk6XCJvbkNoYW5uZWxcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcztlLm9uKHQsZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRMYXRlbmN5U2ltKCk7dD8oY29uc29sZS5sb2coXCJzaW11bGF0aW5nIFwiLmNvbmNhdCh0LFwibXMgb2YgbGF0ZW5jeSBmcm9tIHNlcnZlciB0byBjbGllbnRcIikpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gbihlKX0sdCkpOm4oZSl9KX19LHtrZXk6XCJ3cmFwUHVzaFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLHI9dGhpcy5nZXRMYXRlbmN5U2ltKCksbz1lLmpvaW5Db3VudDtpZighcilyZXR1cm4gdC50aW1lb3V0P24oKS5yZWNlaXZlKFwidGltZW91dFwiLGZ1bmN0aW9uKCl7ZS5qb2luQ291bnQ9PT1vJiZpLnJlbG9hZFdpdGhKaXR0ZXIoZSxmdW5jdGlvbigpe2kubG9nKGUsXCJ0aW1lb3V0XCIsZnVuY3Rpb24oKXtyZXR1cm5bXCJyZWNlaXZlZCB0aW1lb3V0IHdoaWxlIGNvbW11bmljYXRpbmcgd2l0aCBzZXJ2ZXIuIEZhbGxpbmcgYmFjayB0byBoYXJkIHJlZnJlc2ggZm9yIHJlY292ZXJ5XCJdfSl9KX0pOm4oKTtjb25zb2xlLmxvZyhcInNpbXVsYXRpbmcgXCIuY29uY2F0KHIsXCJtcyBvZiBsYXRlbmN5IGZyb20gY2xpZW50IHRvIHNlcnZlclwiKSk7dmFyIGE9e3JlY2VpdmVzOltdLHJlY2VpdmU6ZnVuY3Rpb24oZSx0KXt0aGlzLnJlY2VpdmVzLnB1c2goW2UsdF0pfX07cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthLnJlY2VpdmVzLnJlZHVjZShmdW5jdGlvbihlLHQpe3ZhciBuPUModCwyKSxpPW5bMF0scj1uWzFdO3JldHVybiBlLnJlY2VpdmUoaSxyKX0sbigpKX0sciksYX19LHtrZXk6XCJyZWxvYWRXaXRoSml0dGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2UuZGVzdHJveSgpLHRoaXMuZGlzY29ubmVjdCgpO3ZhciBpPU9bMF0scj1PWzFdLG89TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihyLWkrMSkpK2ksYT1sZS51cGRhdGVMb2NhbCh0aGlzLmxvY2FsU3RvcmFnZSxlLm5hbWUoKSxcImNvbnNlY3V0aXZlLXJlbG9hZHNcIiwwLGZ1bmN0aW9uKGUpe3JldHVybiBlKzF9KTt0P3QoKTp0aGlzLmxvZyhlLFwiam9pblwiLGZ1bmN0aW9uKCl7cmV0dXJuW1wiZW5jb3VudGVyZWQgXCIuY29uY2F0KGEsXCIgY29uc2VjdXRpdmUgcmVsb2Fkc1wiKV19KSxhPjEwJiYodGhpcy5sb2coZSxcImpvaW5cIixmdW5jdGlvbigpe3JldHVybltcImV4Y2VlZGVkIFwiLmNvbmNhdCgxMCxcIiBjb25zZWN1dGl2ZSByZWxvYWRzLiBFbnRlcmluZyBmYWlsc2FmZSBtb2RlXCIpXX0pLG89M2U0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5oYXNQZW5kaW5nTGluaygpP3dpbmRvdy5sb2NhdGlvbj1uLnBlbmRpbmdMaW5rOndpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0sbyl9fSx7a2V5OlwiZ2V0SG9va0NhbGxiYWNrc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLnN0YXJ0c1dpdGgoXCJQaG9lbml4LlwiKT9uZVtlLnNwbGl0KFwiLlwiKVsxXV06dGhpcy5ob29rc1tlXX19LHtrZXk6XCJpc1VubG9hZGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51bmxvYWRlZH19LHtrZXk6XCJpc0Nvbm5lY3RlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCl9fSx7a2V5OlwiZ2V0QmluZGluZ1ByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYmluZGluZ1ByZWZpeH19LHtrZXk6XCJiaW5kaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJcIi5jb25jYXQodGhpcy5nZXRCaW5kaW5nUHJlZml4KCkpLmNvbmNhdChlKX19LHtrZXk6XCJjaGFubmVsXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5zb2NrZXQuY2hhbm5lbChlLHQpfX0se2tleTpcImpvaW5Sb290Vmlld3NcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD0hMTtyZXR1cm4gZGUuYWxsKGRvY3VtZW50LFwiXCIuY29uY2F0KEIsXCI6bm90KFtcIikuY29uY2F0KFwiZGF0YS1waHgtcGFyZW50LWlkXCIsXCJdKVwiKSxmdW5jdGlvbihuKXtpZighZS5nZXRSb290QnlJZChuLmlkKSl7dmFyIGk9ZS5qb2luUm9vdFZpZXcobixlLmdldEhyZWYoKSk7ZS5yb290PWUucm9vdHx8aSxuLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LW1haW5cIikmJihlLm1haW49aSl9dD0hMH0pLHR9fSx7a2V5OlwicmVkaXJlY3RcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuZGlzY29ubmVjdCgpLGxlLnJlZGlyZWN0KGUsdCl9fSx7a2V5OlwicmVwbGFjZU1haW5cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCxyPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTp0aGlzLnNldFBlbmRpbmdMaW5rKGUpLG89dGhpcy5tYWluLmVsO3RoaXMubWFpbi5zaG93TG9hZGVyKHRoaXMubG9hZGVyVGltZW91dCksdGhpcy5tYWluLmRlc3Ryb3koKSxsZS5mZXRjaFBhZ2UoZSxmdW5jdGlvbihhLHUpe2lmKDIwMCE9PWEpcmV0dXJuIG4ucmVkaXJlY3QoZSk7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3MuaW5uZXJIVE1MPXU7dmFyIGM9cy5jb250ZW50LmNoaWxkTm9kZXNbMF07aWYoIWN8fCFuLmlzUGh4VmlldyhjKSlyZXR1cm4gbi5yZWRpcmVjdChlKTtuLmpvaW5Sb290VmlldyhjLGUsdCxmdW5jdGlvbihlLHQpezE9PT10JiYobi5jb21taXRQZW5kaW5nTGluayhyKT8oby5yZXBsYWNlV2l0aChlLmVsKSxuLm1haW49ZSxpJiZpKCkpOmUuZGVzdHJveSgpKX0pfSl9fSx7a2V5OlwiaXNQaHhWaWV3XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZudWxsIT09ZS5nZXRBdHRyaWJ1dGUoail9fSx7a2V5Olwiam9pblJvb3RWaWV3XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSl7dmFyIHI9bmV3IHZlKGUsdGhpcyxudWxsLHQsbik7cmV0dXJuIHRoaXMucm9vdHNbci5pZF09cixyLmpvaW4oaSkscn19LHtrZXk6XCJvd25lclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxpPWVlKGUuY2xvc2VzdChCKSxmdW5jdGlvbihlKXtyZXR1cm4gbi5nZXRWaWV3QnlFbChlKX0pO2kmJnQoaSl9fSx7a2V5Olwid2l0aGluT3duZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3RoaXMub3duZXIoZSxmdW5jdGlvbihpKXt2YXIgcj1lLmdldEF0dHJpYnV0ZShuLmJpbmRpbmcoXCJ0YXJnZXRcIikpO251bGw9PT1yP3QoaSxlKTppLndpdGhpblRhcmdldHMocix0KX0pfX0se2tleTpcImdldFZpZXdCeUVsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1yb290LWlkXCIpO3JldHVybiBlZSh0aGlzLmdldFJvb3RCeUlkKHQpLGZ1bmN0aW9uKHQpe3JldHVybiB0LmdldERlc2NlbmRlbnRCeUVsKGUpfSl9fSx7a2V5OlwiZ2V0Um9vdEJ5SWRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yb290c1tlXX19LHtrZXk6XCJkZXN0cm95QWxsVmlld3NcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZSBpbiB0aGlzLnJvb3RzKXRoaXMucm9vdHNbZV0uZGVzdHJveSgpLGRlbGV0ZSB0aGlzLnJvb3RzW2VdfX0se2tleTpcImRlc3Ryb3lWaWV3QnlFbFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZ2V0Um9vdEJ5SWQoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1yb290LWlkXCIpKTt0JiZ0LmRlc3Ryb3lEZXNjZW5kZW50KGUuaWQpfX0se2tleTpcInNldEFjdGl2ZUVsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKHRoaXMuYWN0aXZlRWxlbWVudCE9PWUpe3RoaXMuYWN0aXZlRWxlbWVudD1lO3ZhciBuPWZ1bmN0aW9uKCl7ZT09PXQuYWN0aXZlRWxlbWVudCYmKHQuYWN0aXZlRWxlbWVudD1udWxsKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdCksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0KX07ZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLG4pLGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsbil9fX0se2tleTpcImdldEFjdGl2ZUVsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09ZG9jdW1lbnQuYm9keT90aGlzLmFjdGl2ZUVsZW1lbnR8fGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ6ZG9jdW1lbnQuYWN0aXZlRWxlbWVudHx8ZG9jdW1lbnQuYm9keX19LHtrZXk6XCJkcm9wQWN0aXZlRWxlbWVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucHJldkFjdGl2ZSYmZS5vd25zRWxlbWVudCh0aGlzLnByZXZBY3RpdmUpJiYodGhpcy5wcmV2QWN0aXZlPW51bGwpfX0se2tleTpcInJlc3RvcmVQcmV2aW91c2x5QWN0aXZlRm9jdXNcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucHJldkFjdGl2ZSYmdGhpcy5wcmV2QWN0aXZlIT09ZG9jdW1lbnQuYm9keSYmdGhpcy5wcmV2QWN0aXZlLmZvY3VzKCl9fSx7a2V5OlwiYmx1ckFjdGl2ZUVsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucHJldkFjdGl2ZT10aGlzLmdldEFjdGl2ZUVsZW1lbnQoKSx0aGlzLnByZXZBY3RpdmUhPT1kb2N1bWVudC5ib2R5JiZ0aGlzLnByZXZBY3RpdmUuYmx1cigpfX0se2tleTpcImJpbmRUb3BMZXZlbEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmJvdW5kVG9wTGV2ZWxFdmVudHN8fCh0aGlzLmJvdW5kVG9wTGV2ZWxFdmVudHM9ITAsZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe30pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIixmdW5jdGlvbih0KXt0LnBlcnNpc3RlZCYmKGUuZ2V0U29ja2V0KCkuZGlzY29ubmVjdCgpLGUud2l0aFBhZ2VMb2FkaW5nKHt0bzp3aW5kb3cubG9jYXRpb24uaHJlZixraW5kOlwicmVkaXJlY3RcIn0pLHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSl9LCEwKSx0aGlzLmJpbmRDbGlja3MoKSx0aGlzLmJpbmROYXYoKSx0aGlzLmJpbmRGb3JtcygpLHRoaXMuYmluZCh7a2V5dXA6XCJrZXl1cFwiLGtleWRvd246XCJrZXlkb3duXCJ9LGZ1bmN0aW9uKHQsbixpLHIsbyxhLHUpe3ZhciBzPXIuZ2V0QXR0cmlidXRlKGUuYmluZGluZyhcImtleVwiKSksYz10LmtleSYmdC5rZXkudG9Mb3dlckNhc2UoKTtzJiZzLnRvTG93ZXJDYXNlKCkhPT1jfHxpLnB1c2hLZXkocixvLG4sYSxBKHtrZXk6dC5rZXl9LGUuZXZlbnRNZXRhKG4sdCxyKSkpfSksdGhpcy5iaW5kKHtibHVyOlwiZm9jdXNvdXRcIixmb2N1czpcImZvY3VzaW5cIn0sZnVuY3Rpb24odCxuLGkscixvLGEsdSl7dXx8aS5wdXNoRXZlbnQobixyLG8sYSxlLmV2ZW50TWV0YShuLHQscikpfSksdGhpcy5iaW5kKHtibHVyOlwiYmx1clwiLGZvY3VzOlwiZm9jdXNcIn0sZnVuY3Rpb24odCxuLGkscixvLGEsdSl7dSYmXCJ3aW5kb3dcIiE9PSF1JiZpLnB1c2hFdmVudChuLHIsbyxhLGUuZXZlbnRNZXRhKG4sdCxyKSl9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGUucHJldmVudERlZmF1bHQoKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKTt2YXIgbj1lZShZKHQudGFyZ2V0LGUuYmluZGluZyhcImRyb3AtdGFyZ2V0XCIpKSxmdW5jdGlvbih0KXtyZXR1cm4gdC5nZXRBdHRyaWJ1dGUoZS5iaW5kaW5nKFwiZHJvcC10YXJnZXRcIikpfSksaT1uJiZkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuKSxyPUFycmF5LmZyb20odC5kYXRhVHJhbnNmZXIuZmlsZXN8fFtdKTtpJiYhaS5kaXNhYmxlZCYmMCE9PXIubGVuZ3RoJiZpLmZpbGVzIGluc3RhbmNlb2YgRmlsZUxpc3QmJihyZS50cmFja0ZpbGVzKGksciksaS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSkpfSkpfX0se2tleTpcImV2ZW50TWV0YVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLm1ldGFkYXRhQ2FsbGJhY2tzW2VdO3JldHVybiBpP2kodCxuKTp7fX19LHtrZXk6XCJzZXRQZW5kaW5nTGlua1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmxpbmtSZWYrKyx0aGlzLnBlbmRpbmdMaW5rPWUsdGhpcy5saW5rUmVmfX0se2tleTpcImNvbW1pdFBlbmRpbmdMaW5rXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGlua1JlZj09PWUmJih0aGlzLmhyZWY9dGhpcy5wZW5kaW5nTGluayx0aGlzLnBlbmRpbmdMaW5rPW51bGwsITApfX0se2tleTpcImdldEhyZWZcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhyZWZ9fSx7a2V5OlwiaGFzUGVuZGluZ0xpbmtcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiEhdGhpcy5wZW5kaW5nTGlua319LHtrZXk6XCJiaW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLGk9ZnVuY3Rpb24oaSl7dmFyIHI9ZVtpXTtuLm9uKHIsZnVuY3Rpb24oZSl7dmFyIHI9bi5iaW5kaW5nKGkpLG89bi5iaW5kaW5nKFwid2luZG93LVwiLmNvbmNhdChpKSksYT1lLnRhcmdldC5nZXRBdHRyaWJ1dGUmJmUudGFyZ2V0LmdldEF0dHJpYnV0ZShyKTthP24uZGVib3VuY2UoZS50YXJnZXQsZSxmdW5jdGlvbigpe24ud2l0aGluT3duZXJzKGUudGFyZ2V0LGZ1bmN0aW9uKG4scil7dChlLGksbixlLnRhcmdldCxyLGEsbnVsbCl9KX0pOmRlLmFsbChkb2N1bWVudCxcIltcIi5jb25jYXQobyxcIl1cIiksZnVuY3Rpb24ocil7dmFyIGE9ci5nZXRBdHRyaWJ1dGUobyk7bi5kZWJvdW5jZShyLGUsZnVuY3Rpb24oKXtuLndpdGhpbk93bmVycyhyLGZ1bmN0aW9uKG4sbyl7dChlLGksbixyLG8sYSxcIndpbmRvd1wiKX0pfSl9KX0pfTtmb3IodmFyIHIgaW4gZSlpKHIpfX0se2tleTpcImJpbmRDbGlja3NcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuYmluZENsaWNrKFwiY2xpY2tcIixcImNsaWNrXCIsITEpLHRoaXMuYmluZENsaWNrKFwibW91c2Vkb3duXCIsXCJjYXB0dXJlLWNsaWNrXCIsITApfX0se2tleTpcImJpbmRDbGlja1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLHI9dGhpcy5iaW5kaW5nKHQpO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKGUsZnVuY3Rpb24oZSl7aWYoaS5pc0Nvbm5lY3RlZCgpKXt2YXIgdD1udWxsLG89KHQ9bj9lLnRhcmdldC5tYXRjaGVzKFwiW1wiLmNvbmNhdChyLFwiXVwiKSk/ZS50YXJnZXQ6ZS50YXJnZXQucXVlcnlTZWxlY3RvcihcIltcIi5jb25jYXQocixcIl1cIikpOlkoZS50YXJnZXQscikpJiZ0LmdldEF0dHJpYnV0ZShyKTtvJiYoXCIjXCI9PT10LmdldEF0dHJpYnV0ZShcImhyZWZcIikmJmUucHJldmVudERlZmF1bHQoKSxpLmRlYm91bmNlKHQsZSxmdW5jdGlvbigpe2kud2l0aGluT3duZXJzKHQsZnVuY3Rpb24obixyKXtuLnB1c2hFdmVudChcImNsaWNrXCIsdCxyLG8saS5ldmVudE1ldGEoXCJjbGlja1wiLGUsdCkpfSl9KSl9fSxuKX19LHtrZXk6XCJiaW5kTmF2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKGxlLmNhblB1c2hTdGF0ZSgpKXtoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uJiYoaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj1cIm1hbnVhbFwiKTt2YXIgdD1udWxsO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KHQpLHQ9c2V0VGltZW91dChmdW5jdGlvbigpe2xlLnVwZGF0ZUN1cnJlbnRTdGF0ZShmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihlLHtzY3JvbGw6d2luZG93LnNjcm9sbFl9KX0pfSwxMDApfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLGZ1bmN0aW9uKHQpe2lmKGUucmVnaXN0ZXJOZXdMb2NhdGlvbih3aW5kb3cubG9jYXRpb24pKXt2YXIgbj10LnN0YXRlfHx7fSxpPW4udHlwZSxyPW4uaWQsbz1uLnJvb3QsYT1uLnNjcm9sbCx1PXdpbmRvdy5sb2NhdGlvbi5ocmVmO2UubWFpbi5pc0Nvbm5lY3RlZCgpJiZcInBhdGNoXCI9PT1pJiZyPT09ZS5tYWluLmlkP2UubWFpbi5wdXNoTGlua1BhdGNoKHUsbnVsbCk6ZS5yZXBsYWNlTWFpbih1LG51bGwsZnVuY3Rpb24oKXtvJiZlLnJlcGxhY2VSb290SGlzdG9yeSgpLFwibnVtYmVyXCI9PXR5cGVvZiBhJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7d2luZG93LnNjcm9sbFRvKDAsYSl9LDApfSl9fSwhMSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3ZhciBuPVkodC50YXJnZXQsXCJkYXRhLXBoeC1saW5rXCIpLGk9biYmbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1saW5rXCIpLHI9dC5tZXRhS2V5fHx0LmN0cmxLZXl8fDE9PT10LmJ1dHRvbjtpZihpJiZlLmlzQ29ubmVjdGVkKCkmJmUubWFpbiYmIXIpe3ZhciBvPW4uaHJlZixhPW4uZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtbGluay1zdGF0ZVwiKTtpZih0LnByZXZlbnREZWZhdWx0KCksZS5wZW5kaW5nTGluayE9PW8paWYoXCJwYXRjaFwiPT09aSllLnB1c2hIaXN0b3J5UGF0Y2gobyxhLG4pO2Vsc2V7aWYoXCJyZWRpcmVjdFwiIT09aSl0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBcIi5jb25jYXQoXCJkYXRhLXBoeC1saW5rXCIsJyB0byBiZSBcInBhdGNoXCIgb3IgXCJyZWRpcmVjdFwiLCBnb3Q6ICcpLmNvbmNhdChpKSk7ZS5oaXN0b3J5UmVkaXJlY3QobyxhKX19fSwhMSl9fX0se2tleTpcIndpdGhQYWdlTG9hZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7ZGUuZGlzcGF0Y2hFdmVudCh3aW5kb3csXCJwaHg6cGFnZS1sb2FkaW5nLXN0YXJ0XCIsZSk7dmFyIG49ZnVuY3Rpb24oKXtyZXR1cm4gZGUuZGlzcGF0Y2hFdmVudCh3aW5kb3csXCJwaHg6cGFnZS1sb2FkaW5nLXN0b3BcIixlKX07cmV0dXJuIHQ/dChuKTpufX0se2tleTpcInB1c2hIaXN0b3J5UGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpczt0aGlzLndpdGhQYWdlTG9hZGluZyh7dG86ZSxraW5kOlwicGF0Y2hcIn0sZnVuY3Rpb24ocil7aS5tYWluLnB1c2hMaW5rUGF0Y2goZSxuLGZ1bmN0aW9uKG4pe2kuaGlzdG9yeVBhdGNoKGUsdCxuKSxyKCl9KX0pfX0se2tleTpcImhpc3RvcnlQYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnRoaXMuc2V0UGVuZGluZ0xpbmsoZSk7dGhpcy5jb21taXRQZW5kaW5nTGluayhuKSYmKGxlLnB1c2hTdGF0ZSh0LHt0eXBlOlwicGF0Y2hcIixpZDp0aGlzLm1haW4uaWR9LGUpLHRoaXMucmVnaXN0ZXJOZXdMb2NhdGlvbih3aW5kb3cubG9jYXRpb24pKX19LHtrZXk6XCJoaXN0b3J5UmVkaXJlY3RcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPXdpbmRvdy5zY3JvbGxZO3RoaXMud2l0aFBhZ2VMb2FkaW5nKHt0bzplLGtpbmQ6XCJyZWRpcmVjdFwifSxmdW5jdGlvbihvKXtpLnJlcGxhY2VNYWluKGUsbixmdW5jdGlvbigpe2xlLnB1c2hTdGF0ZSh0LHt0eXBlOlwicmVkaXJlY3RcIixpZDppLm1haW4uaWQsc2Nyb2xsOnJ9LGUpLGkucmVnaXN0ZXJOZXdMb2NhdGlvbih3aW5kb3cubG9jYXRpb24pLG8oKX0pfSl9fSx7a2V5OlwicmVwbGFjZVJvb3RIaXN0b3J5XCIsdmFsdWU6ZnVuY3Rpb24oKXtsZS5wdXNoU3RhdGUoXCJyZXBsYWNlXCIse3Jvb3Q6ITAsdHlwZTpcInBhdGNoXCIsaWQ6dGhpcy5tYWluLmlkfSl9fSx7a2V5OlwicmVnaXN0ZXJOZXdMb2NhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY3VycmVudExvY2F0aW9uO3JldHVybiB0LnBhdGhuYW1lK3Quc2VhcmNoIT09ZS5wYXRobmFtZStlLnNlYXJjaCYmKHRoaXMuY3VycmVudExvY2F0aW9uPUcoZSksITApfX0se2tleTpcImJpbmRGb3Jtc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PTA7dGhpcy5vbihcInN1Ym1pdFwiLGZ1bmN0aW9uKHQpe3ZhciBuPXQudGFyZ2V0LmdldEF0dHJpYnV0ZShlLmJpbmRpbmcoXCJzdWJtaXRcIikpO24mJih0LnByZXZlbnREZWZhdWx0KCksdC50YXJnZXQuZGlzYWJsZWQ9ITAsZS53aXRoaW5Pd25lcnModC50YXJnZXQsZnVuY3Rpb24oZSxpKXtyZXR1cm4gZS5zdWJtaXRGb3JtKHQudGFyZ2V0LGksbil9KSl9LCExKTtmb3IodmFyIG49ZnVuY3Rpb24oKXt2YXIgbj1yW2ldO2Uub24obixmdW5jdGlvbihpKXt2YXIgcj1pLnRhcmdldCxvPXIuZm9ybSYmci5mb3JtLmdldEF0dHJpYnV0ZShlLmJpbmRpbmcoXCJjaGFuZ2VcIikpO2lmKG8mJihcIm51bWJlclwiIT09ci50eXBlfHwhci52YWxpZGl0eXx8IXIudmFsaWRpdHkuYmFkSW5wdXQpKXt2YXIgYT10O3QrKzt2YXIgdT1kZS5wcml2YXRlKHIsXCJwcmV2LWl0ZXJhdGlvblwiKXx8e30scz11LmF0LGM9dS50eXBlO3M9PT1hLTEmJm4hPT1jfHwoZGUucHV0UHJpdmF0ZShyLFwicHJldi1pdGVyYXRpb25cIix7YXQ6YSx0eXBlOm59KSxlLmRlYm91bmNlKHIsaSxmdW5jdGlvbigpe2Uud2l0aGluT3duZXJzKHIuZm9ybSxmdW5jdGlvbih0LG4pe2RlLnB1dFByaXZhdGUocixcInBoeC1oYXMtZm9jdXNlZFwiLCEwKSxkZS5pc1RleHR1YWxJbnB1dChyKXx8ZS5zZXRBY3RpdmVFbGVtZW50KHIpLHQucHVzaElucHV0KHIsbixvLGkudGFyZ2V0KX0pfSkpfX0sITEpfSxpPTAscj1bXCJjaGFuZ2VcIixcImlucHV0XCJdO2k8ci5sZW5ndGg7aSsrKW4oKX19LHtrZXk6XCJkZWJvdW5jZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLmJpbmRpbmcoXCJkZWJvdW5jZVwiKSxyPXRoaXMuYmluZGluZyhcInRocm90dGxlXCIpLG89dGhpcy5kZWZhdWx0cy5kZWJvdW5jZS50b1N0cmluZygpLGE9dGhpcy5kZWZhdWx0cy50aHJvdHRsZS50b1N0cmluZygpO2RlLmRlYm91bmNlKGUsdCxpLG8scixhLG4pfX0se2tleTpcInNpbGVuY2VFdmVudHNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNpbGVuY2VkPSEwLGUoKSx0aGlzLnNpbGVuY2VkPSExfX0se2tleTpcIm9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKGUsZnVuY3Rpb24oZSl7bi5zaWxlbmNlZHx8dChlKX0pfX1dKSxlfSgpLGxlPXtjYW5QdXNoU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09aGlzdG9yeS5wdXNoU3RhdGV9LGRyb3BMb2NhbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGUucmVtb3ZlSXRlbSh0aGlzLmxvY2FsS2V5KHQsbikpfSx1cGRhdGVMb2NhbDpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBvPXRoaXMuZ2V0TG9jYWwoZSx0LG4pLGE9dGhpcy5sb2NhbEtleSh0LG4pLHU9bnVsbD09PW8/aTpyKG8pO3JldHVybiBlLnNldEl0ZW0oYSxKU09OLnN0cmluZ2lmeSh1KSksdX0sZ2V0TG9jYWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBKU09OLnBhcnNlKGUuZ2V0SXRlbSh0aGlzLmxvY2FsS2V5KHQsbikpKX0sZmV0Y2hQYWdlOmZ1bmN0aW9uKGUsdCl7dmFyIG49bmV3IFhNTEh0dHBSZXF1ZXN0O24ub3BlbihcIkdFVFwiLGUsITApLG4udGltZW91dD0zZTQsbi5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsXCJ0ZXh0L2h0bWxcIiksbi5zZXRSZXF1ZXN0SGVhZGVyKFwiY2FjaGUtY29udHJvbFwiLFwibWF4LWFnZT0wLCBuby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZSwgcG9zdC1jaGVjaz0wLCBwcmUtY2hlY2s9MFwiKSxuLnNldFJlcXVlc3RIZWFkZXIoXCJ4LXJlcXVlc3RlZC13aXRoXCIsXCJsaXZlLWxpbmtcIiksbi5vbmVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHQoNDAwKX0sbi5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdCg1MDQpfSxuLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKDQ9PT1uLnJlYWR5U3RhdGUpe3ZhciBpPW5ldyBVUkwoZSkscj1pLnBhdGhuYW1lK2kuc2VhcmNoLG89ZWUobi5nZXRSZXNwb25zZUhlYWRlcihcIngtcmVzcG9uc2UtdXJsXCIpfHxuLnJlc3BvbnNlVVJMLGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVVJMKGUpfSksYT1vP28ucGF0aG5hbWUrby5zZWFyY2g6bnVsbDtyZXR1cm5cImxpdmUtbGlua1wiIT09bi5nZXRSZXNwb25zZUhlYWRlcihcIngtcmVxdWVzdGVkLXdpdGhcIik/dCg0MDApOm51bGw9PT1vfHxhIT1yP3QoMzAyKToyMDAhPT1uLnN0YXR1cz90KG4uc3RhdHVzKTp2b2lkIHQoMjAwLG4ucmVzcG9uc2VUZXh0KX19LG4uc2VuZCgpfSx1cGRhdGVDdXJyZW50U3RhdGU6ZnVuY3Rpb24oZSl7dGhpcy5jYW5QdXNoU3RhdGUoKSYmaGlzdG9yeS5yZXBsYWNlU3RhdGUoZShoaXN0b3J5LnN0YXRlfHx7fSksXCJcIix3aW5kb3cubG9jYXRpb24uaHJlZil9LHB1c2hTdGF0ZTpmdW5jdGlvbihlLHQsbil7aWYodGhpcy5jYW5QdXNoU3RhdGUoKSl7aWYobiE9PXdpbmRvdy5sb2NhdGlvbi5ocmVmKXtpZihcInJlZGlyZWN0XCI9PXQudHlwZSYmdC5zY3JvbGwpe3ZhciBpPWhpc3Rvcnkuc3RhdGV8fHt9O2kuc2Nyb2xsPXQuc2Nyb2xsLGhpc3RvcnkucmVwbGFjZVN0YXRlKGksXCJcIix3aW5kb3cubG9jYXRpb24uaHJlZil9ZGVsZXRlIHQuc2Nyb2xsLGhpc3RvcnlbZStcIlN0YXRlXCJdKHQsXCJcIixufHxudWxsKTt2YXIgcj10aGlzLmdldEhhc2hUYXJnZXRFbCh3aW5kb3cubG9jYXRpb24uaGFzaCk7cj9yLnNjcm9sbEludG9WaWV3KCk6XCJyZWRpcmVjdFwiPT09dC50eXBlJiZ3aW5kb3cuc2Nyb2xsKDAsMCl9fWVsc2UgdGhpcy5yZWRpcmVjdChuKX0sc2V0Q29va2llOmZ1bmN0aW9uKGUsdCl7ZG9jdW1lbnQuY29va2llPVwiXCIuY29uY2F0KGUsXCI9XCIpLmNvbmNhdCh0KX0sZ2V0Q29va2llOmZ1bmN0aW9uKGUpe3JldHVybiBkb2N1bWVudC5jb29raWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86KD86XnwuKjtzKilcIi5jb25jYXQoZSxcInMqPXMqKFteO10qKS4qJCl8Xi4qJFwiKSksXCIkMVwiKX0scmVkaXJlY3Q6ZnVuY3Rpb24oZSx0KXt0JiZsZS5zZXRDb29raWUoXCJfX3Bob2VuaXhfZmxhc2hfX1wiLHQrXCI7IG1heC1hZ2U9NjAwMDA7IHBhdGg9L1wiKSx3aW5kb3cubG9jYXRpb249ZX0sbG9jYWxLZXk6ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIlwiLmNvbmNhdChlLFwiLVwiKS5jb25jYXQodCl9LGdldEhhc2hUYXJnZXRFbDpmdW5jdGlvbihlKXt2YXIgdD1lLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDEpO2lmKFwiXCIhPT10KXJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtuYW1lPVwiJy5jb25jYXQodCwnXCJdJykpfX0sZGU9e2J5SWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpfHxLKFwibm8gaWQgZm91bmQgZm9yIFwiLmNvbmNhdChlKSl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3QucmVtb3ZlKHQpLDA9PT1lLmNsYXNzTGlzdC5sZW5ndGgmJmUucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIil9LGFsbDpmdW5jdGlvbihlLHQsbil7dmFyIGk9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwodCkpO3JldHVybiBuP2kuZm9yRWFjaChuKTppfSxjaGlsZE5vZGVMZW5ndGg6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3JldHVybiB0LmlubmVySFRNTD1lLHQuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0saXNVcGxvYWRJbnB1dDpmdW5jdGlvbihlKXtyZXR1cm5cImZpbGVcIj09PWUudHlwZSYmbnVsbCE9PWUuZ2V0QXR0cmlidXRlKFUpfSxmaW5kVXBsb2FkSW5wdXRzOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFsbChlLCdpbnB1dFt0eXBlPVwiZmlsZVwiXVsnLmNvbmNhdChVLFwiXVwiKSl9LGZpbmRDb21wb25lbnROb2RlTGlzdDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmZpbHRlcldpdGhpblNhbWVMaXZlVmlldyh0aGlzLmFsbChlLFwiW1wiLmNvbmNhdChNLCc9XCInKS5jb25jYXQodCwnXCJdJykpLGUpfSxpc1BoeERlc3Ryb3llZDpmdW5jdGlvbihlKXtyZXR1cm4hKCFlLmlkfHwhZGUucHJpdmF0ZShlLFwiZGVzdHJveWVkXCIpKX0sbWFya1BoeENoaWxkRGVzdHJveWVkOmZ1bmN0aW9uKGUpe2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc2Vzc2lvblwiLFwiXCIpLHRoaXMucHV0UHJpdmF0ZShlLFwiZGVzdHJveWVkXCIsITApfSxmaW5kUGh4Q2hpbGRyZW5JbkZyYWdtZW50OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3JldHVybiBuLmlubmVySFRNTD1lLHRoaXMuZmluZFBoeENoaWxkcmVuKG4uY29udGVudCx0KX0saXNJZ25vcmVkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJpZ25vcmVcIj09PShlLmdldEF0dHJpYnV0ZSh0KXx8ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC11cGRhdGVcIikpfSxpc1BoeFVwZGF0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZuLmluZGV4T2YoZS5nZXRBdHRyaWJ1dGUodCkpPj0wfSxmaW5kUGh4Q2hpbGRyZW46ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5hbGwoZSxcIlwiLmNvbmNhdChCLFwiW1wiKS5jb25jYXQoXCJkYXRhLXBoeC1wYXJlbnQtaWRcIiwnPVwiJykuY29uY2F0KHQsJ1wiXScpKX0sZmluZFBhcmVudENJRHM6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLGk9bmV3IFNldCh0KTtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxpKXt2YXIgcj1cIltcIi5jb25jYXQoTSwnPVwiJykuY29uY2F0KGksJ1wiXSBbJykuY29uY2F0KE0sXCJdXCIpO3JldHVybiBuLmZpbHRlcldpdGhpblNhbWVMaXZlVmlldyhuLmFsbChlLHIpLGUpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gcGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoTSkpfSkuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdC5kZWxldGUoZSl9KSx0fSxpKX0sZmlsdGVyV2l0aGluU2FtZUxpdmVWaWV3OmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKEIpP2UuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBuLndpdGhpblNhbWVMaXZlVmlldyhlLHQpfSk6ZX0sd2l0aGluU2FtZUxpdmVWaWV3OmZ1bmN0aW9uKGUsdCl7Zm9yKDtlPWUucGFyZW50Tm9kZTspe2lmKGUuaXNTYW1lTm9kZSh0KSlyZXR1cm4hMDtpZihlLmdldEF0dHJpYnV0ZShqKSlyZXR1cm4hMX19LHByaXZhdGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5waHhQcml2YXRlJiZlLnBoeFByaXZhdGVbdF19LGRlbGV0ZVByaXZhdGU6ZnVuY3Rpb24oZSx0KXtlLnBoeFByaXZhdGUmJmRlbGV0ZSBlLnBoeFByaXZhdGVbdF19LHB1dFByaXZhdGU6ZnVuY3Rpb24oZSx0LG4pe2UucGh4UHJpdmF0ZXx8KGUucGh4UHJpdmF0ZT17fSksZS5waHhQcml2YXRlW3RdPW59LGNvcHlQcml2YXRlczpmdW5jdGlvbihlLHQpe3QucGh4UHJpdmF0ZSYmKGUucGh4UHJpdmF0ZT1HKHQucGh4UHJpdmF0ZSkpfSxwdXRUaXRsZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIikuZGF0YXNldCxuPXQucHJlZml4LGk9dC5zdWZmaXg7ZG9jdW1lbnQudGl0bGU9XCJcIi5jb25jYXQobnx8XCJcIikuY29uY2F0KGUpLmNvbmNhdChpfHxcIlwiKX0sZGVib3VuY2U6ZnVuY3Rpb24oZSx0LG4saSxyLG8sYSl7dmFyIHU9dGhpcyxzPWUuZ2V0QXR0cmlidXRlKG4pLGM9ZS5nZXRBdHRyaWJ1dGUocik7XCJcIj09PXMmJihzPWkpLFwiXCI9PT1jJiYoYz1vKTt2YXIgbD1zfHxjO3N3aXRjaChsKXtjYXNlIG51bGw6cmV0dXJuIGEoKTtjYXNlXCJibHVyXCI6cmV0dXJuIHZvaWQodGhpcy5vbmNlKGUsXCJkZWJvdW5jZS1ibHVyXCIpJiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsZnVuY3Rpb24oKXtyZXR1cm4gYSgpfSkpO2RlZmF1bHQ6dmFyIGQ9cGFyc2VJbnQobCksaD10aGlzLmluY0N5Y2xlKGUsXCJkZWJvdW5jZS10cmlnZ2VyXCIsZnVuY3Rpb24oKXtyZXR1cm4gYz91LmRlbGV0ZVByaXZhdGUoZSxcInRocm90dGxlZFwiKTphKCl9KTtpZihpc05hTihkKSlyZXR1cm4gSyhcImludmFsaWQgdGhyb3R0bGUvZGVib3VuY2UgdmFsdWU6IFwiLmNvbmNhdChsKSk7aWYoYyl7dmFyIGY9ITE7aWYoXCJrZXlkb3duXCI9PT10LnR5cGUpe3ZhciB2PXRoaXMucHJpdmF0ZShlLFwiZGVib3VuY2UtcHJldi1rZXlcIik7dGhpcy5wdXRQcml2YXRlKGUsXCJkZWJvdW5jZS1wcmV2LWtleVwiLHQua2V5KSxmPXYhPT10LmtleX1pZighZiYmdGhpcy5wcml2YXRlKGUsXCJ0aHJvdHRsZWRcIikpcmV0dXJuITE7YSgpLHRoaXMucHV0UHJpdmF0ZShlLFwidGhyb3R0bGVkXCIsITApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdS50cmlnZ2VyQ3ljbGUoZSxcImRlYm91bmNlLXRyaWdnZXJcIil9LGQpfWVsc2Ugc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiB1LnRyaWdnZXJDeWNsZShlLFwiZGVib3VuY2UtdHJpZ2dlclwiLGgpfSxkKTt2YXIgcD1lLmZvcm07cCYmdGhpcy5vbmNlKHAsXCJiaW5kLWRlYm91bmNlXCIpJiZwLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixmdW5jdGlvbihlKXtBcnJheS5mcm9tKG5ldyBGb3JtRGF0YShwKS5lbnRyaWVzKCksZnVuY3Rpb24oZSl7dmFyIHQ9QyhlLDIpLG49dFswXSxpPSh0WzFdLHAucXVlcnlTZWxlY3RvcignW25hbWU9XCInLmNvbmNhdChuLCdcIl0nKSkpO3UuaW5jQ3ljbGUoaSxcImRlYm91bmNlLXRyaWdnZXJcIiksdS5kZWxldGVQcml2YXRlKGksXCJ0aHJvdHRsZWRcIil9KX0pLHRoaXMub25jZShlLFwiYmluZC1kZWJvdW5jZVwiKSYmZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLGZ1bmN0aW9uKHQpe3JldHVybiB1LnRyaWdnZXJDeWNsZShlLFwiZGVib3VuY2UtdHJpZ2dlclwiKX0pfX0sdHJpZ2dlckN5Y2xlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1DKHRoaXMucHJpdmF0ZShlLHQpLDIpLHI9aVswXSxvPWlbMV07bnx8KG49ciksbj09PXImJih0aGlzLmluY0N5Y2xlKGUsdCksbygpKX0sb25jZTpmdW5jdGlvbihlLHQpe3JldHVybiEwIT09dGhpcy5wcml2YXRlKGUsdCkmJih0aGlzLnB1dFByaXZhdGUoZSx0LCEwKSwhMCl9LGluY0N5Y2xlOmZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOmZ1bmN0aW9uKCl7fSxpPUModGhpcy5wcml2YXRlKGUsdCl8fFswLG5dLDIpLHI9aVswXTtpWzFdO3JldHVybiByKyssdGhpcy5wdXRQcml2YXRlKGUsdCxbcixuXSkscn0sZGlzY2FyZEVycm9yOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUobikscj1pJiZlLnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cIicuY29uY2F0KGksJ1wiXSwgW25hbWU9XCInKS5jb25jYXQoaSwnXCJdJykpO3ImJih0aGlzLnByaXZhdGUocixcInBoeC1oYXMtZm9jdXNlZFwiKXx8dGhpcy5wcml2YXRlKHIuZm9ybSxcInBoeC1oYXMtc3VibWl0dGVkXCIpfHx0LmNsYXNzTGlzdC5hZGQoXCJwaHgtbm8tZmVlZGJhY2tcIikpfSxzaG93RXJyb3I6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzOyhlLmlkfHxlLm5hbWUpJiZ0aGlzLmFsbChlLmZvcm0sXCJbXCIuY29uY2F0KHQsJz1cIicpLmNvbmNhdChlLmlkLCdcIl0sIFsnKS5jb25jYXQodCwnPVwiJykuY29uY2F0KGUubmFtZSwnXCJdJyksZnVuY3Rpb24oZSl7bi5yZW1vdmVDbGFzcyhlLFwicGh4LW5vLWZlZWRiYWNrXCIpfSl9LGlzUGh4Q2hpbGQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXBhcmVudC1pZFwiKX0sZGlzcGF0Y2hFdmVudDpmdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fSxpPW5ldyBDdXN0b21FdmVudCh0LHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsZGV0YWlsOm59KTtlLmRpc3BhdGNoRXZlbnQoaSl9LGNsb25lTm9kZTpmdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQpcmV0dXJuIGUuY2xvbmVOb2RlKCEwKTt2YXIgbj1lLmNsb25lTm9kZSghMSk7cmV0dXJuIG4uaW5uZXJIVE1MPXQsbn0sbWVyZ2VBdHRyczpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e30saT1uLmV4Y2x1ZGV8fFtdLHI9bi5pc0lnbm9yZWQsbz10LmF0dHJpYnV0ZXMsYT1vLmxlbmd0aC0xO2E+PTA7YS0tKXt2YXIgdT1vW2FdLm5hbWU7aS5pbmRleE9mKHUpPDAmJmUuc2V0QXR0cmlidXRlKHUsdC5nZXRBdHRyaWJ1dGUodSkpfWZvcih2YXIgcz1lLmF0dHJpYnV0ZXMsYz1zLmxlbmd0aC0xO2M+PTA7Yy0tKXt2YXIgbD1zW2NdLm5hbWU7cj9sLnN0YXJ0c1dpdGgoXCJkYXRhLVwiKSYmIXQuaGFzQXR0cmlidXRlKGwpJiZlLnJlbW92ZUF0dHJpYnV0ZShsKTp0Lmhhc0F0dHJpYnV0ZShsKXx8ZS5yZW1vdmVBdHRyaWJ1dGUobCl9fSxtZXJnZUZvY3VzZWRJbnB1dDpmdW5jdGlvbihlLHQpe2UgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudHx8ZGUubWVyZ2VBdHRycyhlLHQse2V4Y2VwdDpbXCJ2YWx1ZVwiXX0pLHQucmVhZE9ubHk/ZS5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCEwKTplLnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpfSxoYXNTZWxlY3Rpb25SYW5nZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5zZXRTZWxlY3Rpb25SYW5nZSYmKFwidGV4dFwiPT09ZS50eXBlfHxcInRleHRhcmVhXCI9PT1lLnR5cGUpfSxyZXN0b3JlRm9jdXM6ZnVuY3Rpb24oZSx0LG4pe2lmKGRlLmlzVGV4dHVhbElucHV0KGUpKXt2YXIgaT1lLm1hdGNoZXMoXCI6Zm9jdXNcIik7ZS5yZWFkT25seSYmZS5ibHVyKCksaXx8ZS5mb2N1cygpLHRoaXMuaGFzU2VsZWN0aW9uUmFuZ2UoZSkmJmUuc2V0U2VsZWN0aW9uUmFuZ2UodCxuKX19LGlzRm9ybUlucHV0OmZ1bmN0aW9uKGUpe3JldHVybi9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KGUudGFnTmFtZSkmJlwiYnV0dG9uXCIhPT1lLnR5cGV9LHN5bmNBdHRyc1RvUHJvcHM6ZnVuY3Rpb24oZSl7ZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlYuaW5kZXhPZihlLnR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSk+PTAmJihlLmNoZWNrZWQ9bnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiKSl9LGlzVGV4dHVhbElucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBKLmluZGV4T2YoZS50eXBlKT49MH0saXNOb3dUcmlnZ2VyRm9ybUV4dGVybmFsOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZudWxsIT09ZS5nZXRBdHRyaWJ1dGUodCl9LHN5bmNQZW5kaW5nUmVmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1lLmdldEF0dHJpYnV0ZShGKTtyZXR1cm4gbnVsbD09PWl8fChkZS5pc0Zvcm1JbnB1dChlKXx8bnVsbCE9PWUuZ2V0QXR0cmlidXRlKG4pPyhkZS5pc1VwbG9hZElucHV0KGUpJiZkZS5tZXJnZUF0dHJzKGUsdCx7aXNJZ25vcmVkOiEwfSksZGUucHV0UHJpdmF0ZShlLEYsdCksITEpOihILmZvckVhY2goZnVuY3Rpb24obil7ZS5jbGFzc0xpc3QuY29udGFpbnMobikmJnQuY2xhc3NMaXN0LmFkZChuKX0pLHQuc2V0QXR0cmlidXRlKEYsaSksITApKX0sY2xlYW5DaGlsZE5vZGVzOmZ1bmN0aW9uKGUsdCl7aWYoZGUuaXNQaHhVcGRhdGUoZSx0LFtcImFwcGVuZFwiLFwicHJlcGVuZFwiXSkpe3ZhciBuPVtdO2UuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuaWR8fChlLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUmJlwiXCI9PT1lLm5vZGVWYWx1ZS50cmltKCl8fEsoXCJvbmx5IEhUTUwgZWxlbWVudCB0YWdzIHdpdGggYW4gaWQgYXJlIGFsbG93ZWQgaW5zaWRlIGNvbnRhaW5lcnMgd2l0aCBwaHgtdXBkYXRlLlxcblxcblwiKydyZW1vdmluZyBpbGxlZ2FsIG5vZGU6IFwiJy5jb25jYXQoKGUub3V0ZXJIVE1MfHxlLm5vZGVWYWx1ZSkudHJpbSgpLCdcIlxcblxcbicpKSxuLnB1c2goZSkpfSksbi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlbW92ZSgpfSl9fX0saGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixpKXtEKHRoaXMsZSk7dmFyIHI9bmV3IFNldCxvPW5ldyBTZXQodyhuLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWR9KSksYT1bXTtBcnJheS5mcm9tKHQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZS5pZCYmKHIuYWRkKGUuaWQpLG8uaGFzKGUuaWQpKSl7dmFyIHQ9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nJiZlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQ7YS5wdXNoKHtlbGVtZW50SWQ6ZS5pZCxwcmV2aW91c0VsZW1lbnRJZDp0fSl9fSksdGhpcy5jb250YWluZXJJZD1uLmlkLHRoaXMudXBkYXRlVHlwZT1pLHRoaXMuZWxlbWVudHNUb01vZGlmeT1hLHRoaXMuZWxlbWVudElkc1RvQWRkPXcobykuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiFyLmhhcyhlKX0pfXJldHVybiBOKGUsW3trZXk6XCJwZXJmb3JtXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1kZS5ieUlkKHRoaXMuY29udGFpbmVySWQpO3RoaXMuZWxlbWVudHNUb01vZGlmeS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QucHJldmlvdXNFbGVtZW50SWQ/ZWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodC5wcmV2aW91c0VsZW1lbnRJZCksZnVuY3Rpb24oZSl7ZWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodC5lbGVtZW50SWQpLGZ1bmN0aW9uKHQpe3QucHJldmlvdXNFbGVtZW50U2libGluZyYmdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkPT1lLmlkfHxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsdCl9KX0pOmVlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQuZWxlbWVudElkKSxmdW5jdGlvbih0KXtudWxsPT10LnByZXZpb3VzRWxlbWVudFNpYmxpbmd8fGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLHQpfSl9KSxcInByZXBlbmRcIj09dGhpcy51cGRhdGVUeXBlJiZ0aGlzLmVsZW1lbnRJZHNUb0FkZC5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbih0KXtlZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSxmdW5jdGlvbih0KXtyZXR1cm4gZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsdCl9KX0pfX1dKSxlfSgpLGZlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4saSxyLG8pe0QodGhpcyxlKSx0aGlzLnZpZXc9dCx0aGlzLmxpdmVTb2NrZXQ9dC5saXZlU29ja2V0LHRoaXMuY29udGFpbmVyPW4sdGhpcy5pZD1pLHRoaXMucm9vdElEPXQucm9vdC5pZCx0aGlzLmh0bWw9cix0aGlzLnRhcmdldENJRD1vLHRoaXMuY2lkUGF0Y2g9XCJudW1iZXJcIj09dHlwZW9mIHRoaXMudGFyZ2V0Q0lELHRoaXMuY2FsbGJhY2tzPXtiZWZvcmVhZGRlZDpbXSxiZWZvcmV1cGRhdGVkOltdLGJlZm9yZXBoeENoaWxkQWRkZWQ6W10sYWZ0ZXJhZGRlZDpbXSxhZnRlcnVwZGF0ZWQ6W10sYWZ0ZXJkaXNjYXJkZWQ6W10sYWZ0ZXJwaHhDaGlsZEFkZGVkOltdfX1yZXR1cm4gTihlLG51bGwsW3trZXk6XCJwYXRjaEVsXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe2soZSx0LHtjaGlsZHJlbk9ubHk6ITEsb25CZWZvcmVFbFVwZGF0ZWQ6ZnVuY3Rpb24oZSx0KXtpZihuJiZuLmlzU2FtZU5vZGUoZSkmJmRlLmlzRm9ybUlucHV0KGUpKXJldHVybiBkZS5tZXJnZUZvY3VzZWRJbnB1dChlLHQpLCExfX0pfX1dKSxOKGUsW3trZXk6XCJiZWZvcmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuY2FsbGJhY2tzW1wiYmVmb3JlXCIuY29uY2F0KGUpXS5wdXNoKHQpfX0se2tleTpcImFmdGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmNhbGxiYWNrc1tcImFmdGVyXCIuY29uY2F0KGUpXS5wdXNoKHQpfX0se2tleTpcInRyYWNrQmVmb3JlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxpPTE7aTx0O2krKyluW2ktMV09YXJndW1lbnRzW2ldO3RoaXMuY2FsbGJhY2tzW1wiYmVmb3JlXCIuY29uY2F0KGUpXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGx5KHZvaWQgMCxuKX0pfX0se2tleTpcInRyYWNrQWZ0ZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLGk9MTtpPHQ7aSsrKW5baS0xXT1hcmd1bWVudHNbaV07dGhpcy5jYWxsYmFja3NbXCJhZnRlclwiLmNvbmNhdChlKV0uZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBseSh2b2lkIDAsbil9KX19LHtrZXk6XCJtYXJrUHJ1bmFibGVDb250ZW50Rm9yUmVtb3ZhbFwiLHZhbHVlOmZ1bmN0aW9uKCl7ZGUuYWxsKHRoaXMuY29udGFpbmVyLFwiW3BoeC11cGRhdGU9YXBwZW5kXSA+ICosIFtwaHgtdXBkYXRlPXByZXBlbmRdID4gKlwiLGZ1bmN0aW9uKGUpe2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcmVtb3ZlXCIsXCJcIil9KX19LHtrZXk6XCJwZXJmb3JtXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy52aWV3LG49dGhpcy5saXZlU29ja2V0LGk9dGhpcy5jb250YWluZXIscj10aGlzLmh0bWwsbz10aGlzLmlzQ0lEUGF0Y2goKT90aGlzLnRhcmdldENJRENvbnRhaW5lcihyKTppO2lmKCF0aGlzLmlzQ0lEUGF0Y2goKXx8byl7dmFyIGE9bi5nZXRBY3RpdmVFbGVtZW50KCksdT1hJiZkZS5oYXNTZWxlY3Rpb25SYW5nZShhKT9hOnt9LHM9dS5zZWxlY3Rpb25TdGFydCxjPXUuc2VsZWN0aW9uRW5kLGw9bi5iaW5kaW5nKFwidXBkYXRlXCIpLGQ9bi5iaW5kaW5nKFwiZmVlZGJhY2stZm9yXCIpLGg9bi5iaW5kaW5nKFwiZGlzYWJsZS13aXRoXCIpLGY9bi5iaW5kaW5nKFwidHJpZ2dlci1hY3Rpb25cIiksdj1bXSxwPVtdLGc9W10sbT1udWxsLHk9bi50aW1lKFwicHJlbW9ycGggY29udGFpbmVyIHByZXBcIixmdW5jdGlvbigpe3JldHVybiBlLmJ1aWxkRGlmZkhUTUwoaSxyLGwsbyl9KTtyZXR1cm4gdGhpcy50cmFja0JlZm9yZShcImFkZGVkXCIsaSksdGhpcy50cmFja0JlZm9yZShcInVwZGF0ZWRcIixpLGkpLG4udGltZShcIm1vcnBoZG9tXCIsZnVuY3Rpb24oKXtrKG8seSx7Y2hpbGRyZW5Pbmx5Om51bGw9PT1vLmdldEF0dHJpYnV0ZShNKSxnZXROb2RlS2V5OmZ1bmN0aW9uKGUpe3JldHVybiBkZS5pc1BoeERlc3Ryb3llZChlKT9udWxsOmUuaWR9LG9uQmVmb3JlTm9kZUFkZGVkOmZ1bmN0aW9uKHQpe3JldHVybiBkZS5kaXNjYXJkRXJyb3Iobyx0LGQpLGUudHJhY2tCZWZvcmUoXCJhZGRlZFwiLHQpLHR9LG9uTm9kZUFkZGVkOmZ1bmN0aW9uKG4pe2RlLmlzTm93VHJpZ2dlckZvcm1FeHRlcm5hbChuLGYpJiYobT1uKSxkZS5pc1BoeENoaWxkKG4pJiZ0Lm93bnNFbGVtZW50KG4pJiZlLnRyYWNrQWZ0ZXIoXCJwaHhDaGlsZEFkZGVkXCIsbiksdi5wdXNoKG4pfSxvbk5vZGVEaXNjYXJkZWQ6ZnVuY3Rpb24odCl7ZGUuaXNQaHhDaGlsZCh0KSYmbi5kZXN0cm95Vmlld0J5RWwodCksZS50cmFja0FmdGVyKFwiZGlzY2FyZGVkXCIsdCl9LG9uQmVmb3JlTm9kZURpc2NhcmRlZDpmdW5jdGlvbih0KXtyZXR1cm4hKCF0LmdldEF0dHJpYnV0ZXx8bnVsbD09PXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcmVtb3ZlXCIpKXx8KG51bGw9PT10LnBhcmVudE5vZGV8fCFkZS5pc1BoeFVwZGF0ZSh0LnBhcmVudE5vZGUsbCxbXCJhcHBlbmRcIixcInByZXBlbmRcIl0pfHwhdC5pZCkmJiFlLnNraXBDSURTaWJsaW5nKHQpfSxvbkVsVXBkYXRlZDpmdW5jdGlvbihlKXtkZS5pc05vd1RyaWdnZXJGb3JtRXh0ZXJuYWwoZSxmKSYmKG09ZSkscC5wdXNoKGUpfSxvbkJlZm9yZUVsVXBkYXRlZDpmdW5jdGlvbih0LG4pe2lmKGRlLmNsZWFuQ2hpbGROb2RlcyhuLGwpLGUuc2tpcENJRFNpYmxpbmcobikpcmV0dXJuITE7aWYoZGUuaXNJZ25vcmVkKHQsbCkpcmV0dXJuIGUudHJhY2tCZWZvcmUoXCJ1cGRhdGVkXCIsdCxuKSxkZS5tZXJnZUF0dHJzKHQsbix7aXNJZ25vcmVkOiEwfSkscC5wdXNoKHQpLCExO2lmKFwibnVtYmVyXCI9PT10LnR5cGUmJnQudmFsaWRpdHkmJnQudmFsaWRpdHkuYmFkSW5wdXQpcmV0dXJuITE7aWYoIWRlLnN5bmNQZW5kaW5nUmVmKHQsbixoKSlyZXR1cm4gZGUuaXNVcGxvYWRJbnB1dCh0KSYmKGUudHJhY2tCZWZvcmUoXCJ1cGRhdGVkXCIsdCxuKSxwLnB1c2godCkpLCExO2lmKGRlLmlzUGh4Q2hpbGQobikpe3ZhciBpPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc2Vzc2lvblwiKTtyZXR1cm4gZGUubWVyZ2VBdHRycyh0LG4se2V4Y2x1ZGU6W1wiZGF0YS1waHgtc3RhdGljXCJdfSksXCJcIiE9PWkmJnQuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc2Vzc2lvblwiLGkpLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcm9vdC1pZFwiLGUucm9vdElEKSwhMX1yZXR1cm4gZGUuY29weVByaXZhdGVzKG4sdCksZGUuZGlzY2FyZEVycm9yKG8sbixkKSxhJiZ0LmlzU2FtZU5vZGUoYSkmJmRlLmlzRm9ybUlucHV0KHQpJiYhZS5mb3JjZUZvY3VzZWRTZWxlY3RVcGRhdGUodCxuKT8oZS50cmFja0JlZm9yZShcInVwZGF0ZWRcIix0LG4pLGRlLm1lcmdlRm9jdXNlZElucHV0KHQsbiksZGUuc3luY0F0dHJzVG9Qcm9wcyh0KSxwLnB1c2godCksITEpOihkZS5pc1BoeFVwZGF0ZShuLGwsW1wiYXBwZW5kXCIsXCJwcmVwZW5kXCJdKSYmZy5wdXNoKG5ldyBoZSh0LG4sbi5nZXRBdHRyaWJ1dGUobCkpKSxkZS5zeW5jQXR0cnNUb1Byb3BzKG4pLGUudHJhY2tCZWZvcmUoXCJ1cGRhdGVkXCIsdCxuKSwhMCl9fSl9KSxuLmlzRGVidWdFbmFibGVkKCkmJmZ1bmN0aW9uKCl7Zm9yKHZhciBlPW5ldyBTZXQsdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKltpZF1cIiksbj0wLGk9dC5sZW5ndGg7bjxpO24rKyllLmhhcyh0W25dLmlkKT9jb25zb2xlLmVycm9yKFwiTXVsdGlwbGUgSURzIGRldGVjdGVkOiBcIi5jb25jYXQodFtuXS5pZCxcIi4gRW5zdXJlIHVuaXF1ZSBlbGVtZW50IGlkcy5cIikpOmUuYWRkKHRbbl0uaWQpfSgpLGcubGVuZ3RoPjAmJm4udGltZShcInBvc3QtbW9ycGggYXBwZW5kL3ByZXBlbmQgcmVzdG9yYXRpb25cIixmdW5jdGlvbigpe2cuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5wZXJmb3JtKCl9KX0pLG4uc2lsZW5jZUV2ZW50cyhmdW5jdGlvbigpe3JldHVybiBkZS5yZXN0b3JlRm9jdXMoYSxzLGMpfSksZGUuZGlzcGF0Y2hFdmVudChkb2N1bWVudCxcInBoeDp1cGRhdGVcIiksdi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRyYWNrQWZ0ZXIoXCJhZGRlZFwiLHQpfSkscC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRyYWNrQWZ0ZXIoXCJ1cGRhdGVkXCIsdCl9KSxtJiYobi5kaXNjb25uZWN0KCksbS5zdWJtaXQoKSksITB9fX0se2tleTpcImZvcmNlRm9jdXNlZFNlbGVjdFVwZGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49W1wic2VsZWN0XCIsXCJzZWxlY3Qtb25lXCIsXCJzZWxlY3QtbXVsdGlwbGVcIl0uZmluZChmdW5jdGlvbih0KXtyZXR1cm4gdD09PWUudHlwZX0pO3JldHVybiEwPT09ZS5tdWx0aXBsZXx8biYmZS5pbm5lckhUTUwhPXQuaW5uZXJIVE1MfX0se2tleTpcImlzQ0lEUGF0Y2hcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNpZFBhdGNofX0se2tleTpcInNraXBDSURTaWJsaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmbnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc2tpcFwiKX19LHtrZXk6XCJ0YXJnZXRDSURDb250YWluZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLmlzQ0lEUGF0Y2goKSl7dmFyIHQ9YihkZS5maW5kQ29tcG9uZW50Tm9kZUxpc3QodGhpcy5jb250YWluZXIsdGhpcy50YXJnZXRDSUQpKSxuPXRbMF07cmV0dXJuIDA9PT10LnNsaWNlKDEpLmxlbmd0aCYmMT09PWRlLmNoaWxkTm9kZUxlbmd0aChlKT9uOm4mJm4ucGFyZW50Tm9kZX19fSx7a2V5OlwiYnVpbGREaWZmSFRNTFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByPXRoaXMsbz10aGlzLmlzQ0lEUGF0Y2goKSxhPW8mJmkuZ2V0QXR0cmlidXRlKE0pPT09dGhpcy50YXJnZXRDSUQudG9TdHJpbmcoKTtpZighb3x8YSlyZXR1cm4gdDt2YXIgdT1udWxsLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3U9ZGUuY2xvbmVOb2RlKGkpO3ZhciBjPWIoZGUuZmluZENvbXBvbmVudE5vZGVMaXN0KHUsdGhpcy50YXJnZXRDSUQpKSxsPWNbMF0sZD1jLnNsaWNlKDEpO3JldHVybiBzLmlubmVySFRNTD10LGQuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZW1vdmUoKX0pLEFycmF5LmZyb20odS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuaWQmJmUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmZS5nZXRBdHRyaWJ1dGUoTSkhPT1yLnRhcmdldENJRC50b1N0cmluZygpJiYoZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1za2lwXCIsXCJcIiksZS5pbm5lckhUTUw9XCJcIil9KSxBcnJheS5mcm9tKHMuY29udGVudC5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB1Lmluc2VydEJlZm9yZShlLGwpfSksbC5yZW1vdmUoKSx1Lm91dGVySFRNTH19XSksZX0oKSx2ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLGkscixvKXt2YXIgYT10aGlzO0QodGhpcyxlKSx0aGlzLmxpdmVTb2NrZXQ9bix0aGlzLmZsYXNoPW8sdGhpcy5wYXJlbnQ9aSx0aGlzLnJvb3Q9aT9pLnJvb3Q6dGhpcyx0aGlzLmVsPXQsdGhpcy5pZD10aGlzLmVsLmlkLHRoaXMudmlldz10aGlzLmVsLmdldEF0dHJpYnV0ZShqKSx0aGlzLnJlZj0wLHRoaXMuY2hpbGRKb2lucz0wLHRoaXMubG9hZGVyVGltZXI9bnVsbCx0aGlzLnBlbmRpbmdEaWZmcz1bXSx0aGlzLnBydW5pbmdDSURzPVtdLHRoaXMuaHJlZj1yLHRoaXMuam9pbkNvdW50PXRoaXMucGFyZW50P3RoaXMucGFyZW50LmpvaW5Db3VudC0xOjAsdGhpcy5qb2luUGVuZGluZz0hMCx0aGlzLmRlc3Ryb3llZD0hMSx0aGlzLmpvaW5DYWxsYmFjaz1mdW5jdGlvbigpe30sdGhpcy5zdG9wQ2FsbGJhY2s9ZnVuY3Rpb24oKXt9LHRoaXMucGVuZGluZ0pvaW5PcHM9dGhpcy5wYXJlbnQ/bnVsbDpbXSx0aGlzLnZpZXdIb29rcz17fSx0aGlzLnVwbG9hZGVycz17fSx0aGlzLmZvcm1TdWJtaXRzPVtdLHRoaXMuY2hpbGRyZW49dGhpcy5wYXJlbnQ/bnVsbDp7fSx0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5pZF09e30sdGhpcy5jaGFubmVsPXRoaXMubGl2ZVNvY2tldC5jaGFubmVsKFwibHY6XCIuY29uY2F0KHRoaXMuaWQpLGZ1bmN0aW9uKCl7cmV0dXJue3VybDphLmhyZWYscGFyYW1zOmEuY29ubmVjdFBhcmFtcygpLHNlc3Npb246YS5nZXRTZXNzaW9uKCksc3RhdGljOmEuZ2V0U3RhdGljKCksZmxhc2g6YS5mbGFzaH19KSx0aGlzLnNob3dMb2FkZXIodGhpcy5saXZlU29ja2V0LmxvYWRlclRpbWVvdXQpLHRoaXMuYmluZENoYW5uZWwoKX1yZXR1cm4gTihlLFt7a2V5OlwiaXNNYWluXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5saXZlU29ja2V0Lm1haW49PT10aGlzfX0se2tleTpcImNvbm5lY3RQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMubGl2ZVNvY2tldC5wYXJhbXModGhpcy52aWV3KSx0PWRlLmFsbChkb2N1bWVudCxcIltcIi5jb25jYXQodGhpcy5iaW5kaW5nKFwidHJhY2stc3RhdGljXCIpLFwiXVwiKSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNyY3x8ZS5ocmVmfSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfSk7cmV0dXJuIHQubGVuZ3RoPjAmJihlLl90cmFja19zdGF0aWM9dCksZS5fbW91bnRzPXRoaXMuam9pbkNvdW50LGV9fSx7a2V5OlwibmFtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlld319LHtrZXk6XCJpc0Nvbm5lY3RlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhbm5lbC5jYW5QdXNoKCl9fSx7a2V5OlwiZ2V0U2Vzc2lvblwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc2Vzc2lvblwiKX19LHtrZXk6XCJnZXRTdGF0aWNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtc3RhdGljXCIpO3JldHVyblwiXCI9PT1lP251bGw6ZX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOmZ1bmN0aW9uKCl7fTt0aGlzLmRlc3Ryb3lBbGxDaGlsZHJlbigpLHRoaXMuZGVzdHJveWVkPSEwLGRlbGV0ZSB0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5pZF0sdGhpcy5wYXJlbnQmJmRlbGV0ZSB0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5wYXJlbnQuaWRdW3RoaXMuaWRdLGNsZWFyVGltZW91dCh0aGlzLmxvYWRlclRpbWVyKTt2YXIgbj1mdW5jdGlvbigpe2Zvcih2YXIgbiBpbiB0KCksZS52aWV3SG9va3MpZS5kZXN0cm95SG9vayhlLnZpZXdIb29rc1tuXSl9O2RlLm1hcmtQaHhDaGlsZERlc3Ryb3llZCh0aGlzLmVsKSx0aGlzLmxvZyhcImRlc3Ryb3llZFwiLGZ1bmN0aW9uKCl7cmV0dXJuW1widGhlIGNoaWxkIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50XCJdfSksdGhpcy5jaGFubmVsLmxlYXZlKCkucmVjZWl2ZShcIm9rXCIsbikucmVjZWl2ZShcImVycm9yXCIsbikucmVjZWl2ZShcInRpbWVvdXRcIixuKX19LHtrZXk6XCJzZXRDb250YWluZXJDbGFzc2VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZTt0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJwaHgtY29ubmVjdGVkXCIsXCJwaHgtZGlzY29ubmVjdGVkXCIsXCJwaHgtZXJyb3JcIiksKGU9dGhpcy5lbC5jbGFzc0xpc3QpLmFkZC5hcHBseShlLGFyZ3VtZW50cyl9fSx7a2V5OlwiaXNMb2FkaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJwaHgtZGlzY29ubmVjdGVkXCIpfX0se2tleTpcInNob3dMb2FkZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKGNsZWFyVGltZW91dCh0aGlzLmxvYWRlclRpbWVyKSxlKXRoaXMubG9hZGVyVGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiB0LnNob3dMb2FkZXIoKX0sZSk7ZWxzZXtmb3IodmFyIG4gaW4gdGhpcy52aWV3SG9va3MpdGhpcy52aWV3SG9va3Nbbl0uX19kaXNjb25uZWN0ZWQoKTt0aGlzLnNldENvbnRhaW5lckNsYXNzZXMoXCJwaHgtZGlzY29ubmVjdGVkXCIpfX19LHtrZXk6XCJoaWRlTG9hZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5sb2FkZXJUaW1lciksdGhpcy5zZXRDb250YWluZXJDbGFzc2VzKFwicGh4LWNvbm5lY3RlZFwiKX19LHtrZXk6XCJ0cmlnZ2VyUmVjb25uZWN0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZSBpbiB0aGlzLnZpZXdIb29rcyl0aGlzLnZpZXdIb29rc1tlXS5fX3JlY29ubmVjdGVkKCl9fSx7a2V5OlwibG9nXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmxpdmVTb2NrZXQubG9nKHRoaXMsZSx0KX19LHtrZXk6XCJ3aXRoaW5UYXJnZXRzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClyZXR1cm4gdGhpcy5saXZlU29ja2V0Lm93bmVyKGUsZnVuY3Rpb24obil7cmV0dXJuIHQobixlKX0pO2lmKC9eKDB8WzEtOV1cXGQqKSQvLnRlc3QoZSkpe3ZhciBpPWRlLmZpbmRDb21wb25lbnROb2RlTGlzdCh0aGlzLmVsLGUpOzA9PT1pLmxlbmd0aD9LKFwibm8gY29tcG9uZW50IGZvdW5kIG1hdGNoaW5nIHBoeC10YXJnZXQgb2YgXCIuY29uY2F0KGUpKTp0KHRoaXMsaVswXSl9ZWxzZXt2YXIgcj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSkpOzA9PT1yLmxlbmd0aCYmSygnbm90aGluZyBmb3VuZCBtYXRjaGluZyB0aGUgcGh4LXRhcmdldCBzZWxlY3RvciBcIicuY29uY2F0KGUsJ1wiJykpLHIuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gbi5saXZlU29ja2V0Lm93bmVyKGUsZnVuY3Rpb24obil7cmV0dXJuIHQobixlKX0pfSl9fX0se2tleTpcImFwcGx5RGlmZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt0aGlzLmxvZyhlLGZ1bmN0aW9uKCl7cmV0dXJuW1wiXCIsRyh0KV19KTt2YXIgaT1zZS5leHRyYWN0KHQpLHI9aS5kaWZmLG89aS5yZXBseSxhPWkuZXZlbnRzLHU9aS50aXRsZTtyZXR1cm4gdSYmZGUucHV0VGl0bGUodSksbih7ZGlmZjpyLHJlcGx5Om8sZXZlbnRzOmF9KSxvfX0se2tleTpcIm9uSm9pblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj1lLnJlbmRlcmVkO3RoaXMuY2hpbGRKb2lucz0wLHRoaXMuam9pblBlbmRpbmc9ITAsdGhpcy5mbGFzaD1udWxsLGxlLmRyb3BMb2NhbCh0aGlzLmxpdmVTb2NrZXQubG9jYWxTdG9yYWdlLHRoaXMubmFtZSgpLFwiY29uc2VjdXRpdmUtcmVsb2Fkc1wiKSx0aGlzLmFwcGx5RGlmZihcIm1vdW50XCIsbixmdW5jdGlvbihuKXt2YXIgaT1uLmRpZmYscj1uLmV2ZW50czt0LnJlbmRlcmVkPW5ldyBzZSh0LmlkLGkpO3ZhciBvPXQucmVuZGVyQ29udGFpbmVyKG51bGwsXCJqb2luXCIpO3QuZHJvcFBlbmRpbmdSZWZzKCk7dmFyIGE9dC5mb3Jtc0ZvclJlY292ZXJ5KG8pO3Quam9pbkNvdW50KyssYS5sZW5ndGg+MD9hLmZvckVhY2goZnVuY3Rpb24oZSxuKXt0LnB1c2hGb3JtUmVjb3ZlcnkoZSxmdW5jdGlvbihlKXtuPT09YS5sZW5ndGgtMSYmdC5vbkpvaW5Db21wbGV0ZShlLG8scil9KX0pOnQub25Kb2luQ29tcGxldGUoZSxvLHIpfSl9fSx7a2V5OlwiZHJvcFBlbmRpbmdSZWZzXCIsdmFsdWU6ZnVuY3Rpb24oKXtkZS5hbGwodGhpcy5lbCxcIltcIi5jb25jYXQoRixcIl1cIiksZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVtb3ZlQXR0cmlidXRlKEYpfSl9fSx7a2V5Olwib25Kb2luQ29tcGxldGVcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPWUubGl2ZV9wYXRjaDtpZih0aGlzLmpvaW5Db3VudD4xfHx0aGlzLnBhcmVudCYmIXRoaXMucGFyZW50LmlzSm9pblBlbmRpbmcoKSlyZXR1cm4gdGhpcy5hcHBseUpvaW5QYXRjaChyLHQsbik7MD09PWRlLmZpbmRQaHhDaGlsZHJlbkluRnJhZ21lbnQodCx0aGlzLmlkKS5maWx0ZXIoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pZCYmaS5lbC5xdWVyeVNlbGVjdG9yKFwiI1wiLmNvbmNhdChlLmlkKSksbj10JiZ0LmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXN0YXRpY1wiKTtyZXR1cm4gbiYmZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1zdGF0aWNcIixuKSxpLmpvaW5DaGlsZChlKX0pLmxlbmd0aD90aGlzLnBhcmVudD8odGhpcy5yb290LnBlbmRpbmdKb2luT3BzLnB1c2goW3RoaXMsZnVuY3Rpb24oKXtyZXR1cm4gaS5hcHBseUpvaW5QYXRjaChyLHQsbil9XSksdGhpcy5wYXJlbnQuYWNrSm9pbih0aGlzKSk6KHRoaXMub25BbGxDaGlsZEpvaW5zQ29tcGxldGUoKSx0aGlzLmFwcGx5Sm9pblBhdGNoKHIsdCxuKSk6dGhpcy5yb290LnBlbmRpbmdKb2luT3BzLnB1c2goW3RoaXMsZnVuY3Rpb24oKXtyZXR1cm4gaS5hcHBseUpvaW5QYXRjaChyLHQsbil9XSl9fSx7a2V5OlwiYXR0YWNoVHJ1ZURvY0VsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsPWRlLmJ5SWQodGhpcy5pZCksdGhpcy5lbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1yb290LWlkXCIsdGhpcy5yb290LmlkKX19LHtrZXk6XCJkaXNwYXRjaEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2UuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1DKGUsMiksbj10WzBdLGk9dFsxXTt3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwaHg6aG9vazpcIi5jb25jYXQobikse2RldGFpbDppfSkpfSl9fSx7a2V5OlwiYXBwbHlKb2luUGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpczt0aGlzLmF0dGFjaFRydWVEb2NFbCgpO3ZhciByPW5ldyBmZSh0aGlzLHRoaXMuZWwsdGhpcy5pZCx0LG51bGwpO2lmKHIubWFya1BydW5hYmxlQ29udGVudEZvclJlbW92YWwoKSx0aGlzLnBlcmZvcm1QYXRjaChyLCExKSx0aGlzLmpvaW5OZXdDaGlsZHJlbigpLGRlLmFsbCh0aGlzLmVsLFwiW1wiLmNvbmNhdCh0aGlzLmJpbmRpbmcoXCJob29rXCIpLFwiXSwgW2RhdGEtcGh4LVwiKS5jb25jYXQoXCJob29rXCIsXCJdXCIpLGZ1bmN0aW9uKGUpe3ZhciB0PWkuYWRkSG9vayhlKTt0JiZ0Ll9fbW91bnRlZCgpfSksdGhpcy5qb2luUGVuZGluZz0hMSx0aGlzLmRpc3BhdGNoRXZlbnRzKG4pLHRoaXMuYXBwbHlQZW5kaW5nVXBkYXRlcygpLGUpe3ZhciBvPWUua2luZCxhPWUudG87dGhpcy5saXZlU29ja2V0Lmhpc3RvcnlQYXRjaChhLG8pfXRoaXMuaGlkZUxvYWRlcigpLHRoaXMuam9pbkNvdW50PjEmJnRoaXMudHJpZ2dlclJlY29ubmVjdGVkKCksdGhpcy5zdG9wQ2FsbGJhY2soKX19LHtrZXk6XCJ0cmlnZ2VyQmVmb3JlVXBkYXRlSG9va1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5saXZlU29ja2V0LnRyaWdnZXJET00oXCJvbkJlZm9yZUVsVXBkYXRlZFwiLFtlLHRdKTt2YXIgbj10aGlzLmdldEhvb2soZSksaT1uJiZkZS5pc0lnbm9yZWQoZSx0aGlzLmJpbmRpbmcoXCJ1cGRhdGVcIikpO2lmKG4mJiFlLmlzRXF1YWxOb2RlKHQpJiYoIWl8fCFmdW5jdGlvbihlLHQpe3JldHVybiBKU09OLnN0cmluZ2lmeShlKT09PUpTT04uc3RyaW5naWZ5KHQpfShlLmRhdGFzZXQsdC5kYXRhc2V0KSkpcmV0dXJuIG4uX19iZWZvcmVVcGRhdGUoKSxufX0se2tleTpcInBlcmZvcm1QYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxpPVtdLHI9ITEsbz1uZXcgU2V0O3JldHVybiBlLmFmdGVyKFwiYWRkZWRcIixmdW5jdGlvbihlKXtuLmxpdmVTb2NrZXQudHJpZ2dlckRPTShcIm9uTm9kZUFkZGVkXCIsW2VdKTt2YXIgdD1uLmFkZEhvb2soZSk7dCYmdC5fX21vdW50ZWQoKX0pLGUuYWZ0ZXIoXCJwaHhDaGlsZEFkZGVkXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHI9ITB9KSxlLmJlZm9yZShcInVwZGF0ZWRcIixmdW5jdGlvbihlLHQpe24udHJpZ2dlckJlZm9yZVVwZGF0ZUhvb2soZSx0KSYmby5hZGQoZS5pZCl9KSxlLmFmdGVyKFwidXBkYXRlZFwiLGZ1bmN0aW9uKGUpe28uaGFzKGUuaWQpJiZuLmdldEhvb2soZSkuX191cGRhdGVkKCl9KSxlLmFmdGVyKFwiZGlzY2FyZGVkXCIsZnVuY3Rpb24oZSl7dmFyIHQ9bi5jb21wb25lbnRJRChlKTtcIm51bWJlclwiPT10eXBlb2YgdCYmLTE9PT1pLmluZGV4T2YodCkmJmkucHVzaCh0KTt2YXIgcj1uLmdldEhvb2soZSk7ciYmbi5kZXN0cm95SG9vayhyKX0pLGUucGVyZm9ybSgpLHQmJnRoaXMubWF5YmVQdXNoQ29tcG9uZW50c0Rlc3Ryb3llZChpKSxyfX0se2tleTpcImpvaW5OZXdDaGlsZHJlblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztkZS5maW5kUGh4Q2hpbGRyZW4odGhpcy5lbCx0aGlzLmlkKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmpvaW5DaGlsZCh0KX0pfX0se2tleTpcImdldENoaWxkQnlJZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5pZF1bZV19fSx7a2V5OlwiZ2V0RGVzY2VuZGVudEJ5RWxcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5pZD09PXRoaXMuaWQ/dGhpczp0aGlzLmNoaWxkcmVuW2UuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcGFyZW50LWlkXCIpXVtlLmlkXX19LHtrZXk6XCJkZXN0cm95RGVzY2VuZGVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiB0aGlzLnJvb3QuY2hpbGRyZW4pZm9yKHZhciBuIGluIHRoaXMucm9vdC5jaGlsZHJlblt0XSlpZihuPT09ZSlyZXR1cm4gdGhpcy5yb290LmNoaWxkcmVuW3RdW25dLmRlc3Ryb3koKX19LHtrZXk6XCJqb2luQ2hpbGRcIix2YWx1ZTpmdW5jdGlvbih0KXtpZighdGhpcy5nZXRDaGlsZEJ5SWQodC5pZCkpe3ZhciBuPW5ldyBlKHQsdGhpcy5saXZlU29ja2V0LHRoaXMpO3JldHVybiB0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5pZF1bbi5pZF09bixuLmpvaW4oKSx0aGlzLmNoaWxkSm9pbnMrKywhMH19fSx7a2V5OlwiaXNKb2luUGVuZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuam9pblBlbmRpbmd9fSx7a2V5OlwiYWNrSm9pblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY2hpbGRKb2lucy0tLDA9PT10aGlzLmNoaWxkSm9pbnMmJih0aGlzLnBhcmVudD90aGlzLnBhcmVudC5hY2tKb2luKHRoaXMpOnRoaXMub25BbGxDaGlsZEpvaW5zQ29tcGxldGUoKSl9fSx7a2V5Olwib25BbGxDaGlsZEpvaW5zQ29tcGxldGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuam9pbkNhbGxiYWNrKCksdGhpcy5wZW5kaW5nSm9pbk9wcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PUMoZSwyKSxuPXRbMF0saT10WzFdO24uaXNEZXN0cm95ZWQoKXx8aSgpfSksdGhpcy5wZW5kaW5nSm9pbk9wcz1bXX19LHtrZXk6XCJ1cGRhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYodGhpcy5pc0pvaW5QZW5kaW5nKCl8fHRoaXMubGl2ZVNvY2tldC5oYXNQZW5kaW5nTGluaygpKXJldHVybiB0aGlzLnBlbmRpbmdEaWZmcy5wdXNoKHtkaWZmOmUsZXZlbnRzOnR9KTt0aGlzLnJlbmRlcmVkLm1lcmdlRGlmZihlKTt2YXIgaT0hMTt0aGlzLnJlbmRlcmVkLmlzQ29tcG9uZW50T25seURpZmYoZSk/dGhpcy5saXZlU29ja2V0LnRpbWUoXCJjb21wb25lbnQgcGF0Y2ggY29tcGxldGVcIixmdW5jdGlvbigpe2RlLmZpbmRQYXJlbnRDSURzKG4uZWwsbi5yZW5kZXJlZC5jb21wb25lbnRDSURzKGUpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe24uY29tcG9uZW50UGF0Y2gobi5yZW5kZXJlZC5nZXRDb21wb25lbnQoZSx0KSx0KSYmKGk9ITApfSl9KTpaKGUpfHx0aGlzLmxpdmVTb2NrZXQudGltZShcImZ1bGwgcGF0Y2ggY29tcGxldGVcIixmdW5jdGlvbigpe3ZhciB0PW4ucmVuZGVyQ29udGFpbmVyKGUsXCJ1cGRhdGVcIikscj1uZXcgZmUobixuLmVsLG4uaWQsdCxudWxsKTtpPW4ucGVyZm9ybVBhdGNoKHIsITApfSksdGhpcy5kaXNwYXRjaEV2ZW50cyh0KSxpJiZ0aGlzLmpvaW5OZXdDaGlsZHJlbigpfX0se2tleTpcInJlbmRlckNvbnRhaW5lclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gdGhpcy5saXZlU29ja2V0LnRpbWUoXCJ0b1N0cmluZyBkaWZmIChcIi5jb25jYXQodCxcIilcIiksZnVuY3Rpb24oKXt2YXIgdD1uLmVsLnRhZ05hbWUsaT1lP24ucmVuZGVyZWQuY29tcG9uZW50Q0lEcyhlKS5jb25jYXQobi5wcnVuaW5nQ0lEcyk6bnVsbCxyPW4ucmVuZGVyZWQudG9TdHJpbmcoaSk7cmV0dXJuXCI8XCIuY29uY2F0KHQsXCI+XCIpLmNvbmNhdChyLFwiPC9cIikuY29uY2F0KHQsXCI+XCIpfSl9fSx7a2V5OlwiY29tcG9uZW50UGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKFooZSkpcmV0dXJuITE7dmFyIG49dGhpcy5yZW5kZXJlZC5jb21wb25lbnRUb1N0cmluZyh0KSxpPW5ldyBmZSh0aGlzLHRoaXMuZWwsdGhpcy5pZCxuLHQpO3JldHVybiB0aGlzLnBlcmZvcm1QYXRjaChpLCEwKX19LHtrZXk6XCJnZXRIb29rXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudmlld0hvb2tzW2dlLmVsZW1lbnRJRChlKV19fSx7a2V5OlwiYWRkSG9va1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKCFnZS5lbGVtZW50SUQoZSkmJmUuZ2V0QXR0cmlidXRlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LVwiLmNvbmNhdChcImhvb2tcIikpfHxlLmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoXCJob29rXCIpKTtpZighdHx8dGhpcy5vd25zRWxlbWVudChlKSl7dmFyIG49dGhpcy5saXZlU29ja2V0LmdldEhvb2tDYWxsYmFja3ModCk7aWYobil7ZS5pZHx8Sygnbm8gRE9NIElEIGZvciBob29rIFwiJy5jb25jYXQodCwnXCIuIEhvb2tzIHJlcXVpcmUgYSB1bmlxdWUgSUQgb24gZWFjaCBlbGVtZW50LicpLGUpO3ZhciBpPW5ldyBnZSh0aGlzLGUsbik7cmV0dXJuIHRoaXMudmlld0hvb2tzW2dlLmVsZW1lbnRJRChpLmVsKV09aSxpfW51bGwhPT10JiZLKCd1bmtub3duIGhvb2sgZm91bmQgZm9yIFwiJy5jb25jYXQodCwnXCInKSxlKX19fX0se2tleTpcImRlc3Ryb3lIb29rXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5fX2Rlc3Ryb3llZCgpLGUuX19jbGVhbnVwX18oKSxkZWxldGUgdGhpcy52aWV3SG9va3NbZ2UuZWxlbWVudElEKGUuZWwpXX19LHtrZXk6XCJhcHBseVBlbmRpbmdVcGRhdGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucGVuZGluZ0RpZmZzLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG49dC5kaWZmLGk9dC5ldmVudHM7cmV0dXJuIGUudXBkYXRlKG4saSl9KSx0aGlzLnBlbmRpbmdEaWZmcz1bXX19LHtrZXk6XCJvbkNoYW5uZWxcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7dGhpcy5saXZlU29ja2V0Lm9uQ2hhbm5lbCh0aGlzLmNoYW5uZWwsZSxmdW5jdGlvbihlKXtuLmlzSm9pblBlbmRpbmcoKT9uLnJvb3QucGVuZGluZ0pvaW5PcHMucHVzaChbbixmdW5jdGlvbigpe3JldHVybiB0KGUpfV0pOnQoZSl9KX19LHtrZXk6XCJiaW5kQ2hhbm5lbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmxpdmVTb2NrZXQub25DaGFubmVsKHRoaXMuY2hhbm5lbCxcImRpZmZcIixmdW5jdGlvbih0KXtlLmFwcGx5RGlmZihcInVwZGF0ZVwiLHQsZnVuY3Rpb24odCl7dmFyIG49dC5kaWZmLGk9dC5ldmVudHM7cmV0dXJuIGUudXBkYXRlKG4saSl9KX0pLHRoaXMub25DaGFubmVsKFwicmVkaXJlY3RcIixmdW5jdGlvbih0KXt2YXIgbj10LnRvLGk9dC5mbGFzaDtyZXR1cm4gZS5vblJlZGlyZWN0KHt0bzpuLGZsYXNoOml9KX0pLHRoaXMub25DaGFubmVsKFwibGl2ZV9wYXRjaFwiLGZ1bmN0aW9uKHQpe3JldHVybiBlLm9uTGl2ZVBhdGNoKHQpfSksdGhpcy5vbkNoYW5uZWwoXCJsaXZlX3JlZGlyZWN0XCIsZnVuY3Rpb24odCl7cmV0dXJuIGUub25MaXZlUmVkaXJlY3QodCl9KSx0aGlzLmNoYW5uZWwub25FcnJvcihmdW5jdGlvbih0KXtyZXR1cm4gZS5vbkVycm9yKHQpfSksdGhpcy5jaGFubmVsLm9uQ2xvc2UoZnVuY3Rpb24odCl7cmV0dXJuIGUub25DbG9zZSh0KX0pfX0se2tleTpcImRlc3Ryb3lBbGxDaGlsZHJlblwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIHRoaXMucm9vdC5jaGlsZHJlblt0aGlzLmlkXSl0aGlzLmdldENoaWxkQnlJZChlKS5kZXN0cm95KCl9fSx7a2V5Olwib25MaXZlUmVkaXJlY3RcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnRvLG49ZS5raW5kLGk9ZS5mbGFzaCxyPXRoaXMuZXhwYW5kVVJMKHQpO3RoaXMubGl2ZVNvY2tldC5oaXN0b3J5UmVkaXJlY3QocixuLGkpfX0se2tleTpcIm9uTGl2ZVBhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50byxuPWUua2luZDt0aGlzLmhyZWY9dGhpcy5leHBhbmRVUkwodCksdGhpcy5saXZlU29ja2V0Lmhpc3RvcnlQYXRjaCh0LG4pfX0se2tleTpcImV4cGFuZFVSTFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnN0YXJ0c1dpdGgoXCIvXCIpP1wiXCIuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcIi8vXCIpLmNvbmNhdCh3aW5kb3cubG9jYXRpb24uaG9zdCkuY29uY2F0KGUpOmV9fSx7a2V5Olwib25SZWRpcmVjdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUudG8sbj1lLmZsYXNoO3RoaXMubGl2ZVNvY2tldC5yZWRpcmVjdCh0LG4pfX0se2tleTpcImlzRGVzdHJveWVkXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZXN0cm95ZWR9fSx7a2V5Olwiam9pblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dGhpcy5wYXJlbnR8fCh0aGlzLnN0b3BDYWxsYmFjaz10aGlzLmxpdmVTb2NrZXQud2l0aFBhZ2VMb2FkaW5nKHt0bzp0aGlzLmhyZWYsa2luZDpcImluaXRpYWxcIn0pKSx0aGlzLmpvaW5DYWxsYmFjaz1mdW5jdGlvbigpe3JldHVybiBlJiZlKHQsdC5qb2luQ291bnQpfSx0aGlzLmxpdmVTb2NrZXQud3JhcFB1c2godGhpcyx7dGltZW91dDohMX0sZnVuY3Rpb24oKXtyZXR1cm4gdC5jaGFubmVsLmpvaW4oKS5yZWNlaXZlKFwib2tcIixmdW5jdGlvbihlKXtyZXR1cm4gdC5vbkpvaW4oZSl9KS5yZWNlaXZlKFwiZXJyb3JcIixmdW5jdGlvbihlKXtyZXR1cm4gdC5vbkpvaW5FcnJvcihlKX0pLnJlY2VpdmUoXCJ0aW1lb3V0XCIsZnVuY3Rpb24oKXtyZXR1cm4gdC5vbkpvaW5FcnJvcih7cmVhc29uOlwidGltZW91dFwifSl9KX0pfX0se2tleTpcIm9uSm9pbkVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuKGUucmVkaXJlY3R8fGUubGl2ZV9yZWRpcmVjdCkmJih0aGlzLmpvaW5QZW5kaW5nPSExLHRoaXMuY2hhbm5lbC5sZWF2ZSgpKSxlLnJlZGlyZWN0P3RoaXMub25SZWRpcmVjdChlLnJlZGlyZWN0KTplLmxpdmVfcmVkaXJlY3Q/dGhpcy5vbkxpdmVSZWRpcmVjdChlLmxpdmVfcmVkaXJlY3QpOih0aGlzLmxvZyhcImVycm9yXCIsZnVuY3Rpb24oKXtyZXR1cm5bXCJ1bmFibGUgdG8gam9pblwiLGVdfSksdGhpcy5saXZlU29ja2V0LnJlbG9hZFdpdGhKaXR0ZXIodGhpcykpfX0se2tleTpcIm9uQ2xvc2VcIix2YWx1ZTpmdW5jdGlvbihlKXtpZighdGhpcy5pc0Rlc3Ryb3llZCgpKXtpZih0aGlzLmlzSm9pblBlbmRpbmcoKSYmXCJoaWRkZW5cIiE9PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZXx8dGhpcy5saXZlU29ja2V0Lmhhc1BlbmRpbmdMaW5rKCkmJlwibGVhdmVcIiE9PWUpcmV0dXJuIHRoaXMubGl2ZVNvY2tldC5yZWxvYWRXaXRoSml0dGVyKHRoaXMpO3RoaXMuZGVzdHJveUFsbENoaWxkcmVuKCksdGhpcy5saXZlU29ja2V0LmRyb3BBY3RpdmVFbGVtZW50KHRoaXMpLGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpLHRoaXMubGl2ZVNvY2tldC5pc1VubG9hZGVkKCkmJnRoaXMuc2hvd0xvYWRlcigyMDApfX19LHtrZXk6XCJvbkVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5vbkNsb3NlKGUpLHRoaXMubG9nKFwiZXJyb3JcIixmdW5jdGlvbigpe3JldHVybltcInZpZXcgY3Jhc2hlZFwiLGVdfSksdGhpcy5saXZlU29ja2V0LmlzVW5sb2FkZWQoKXx8dGhpcy5kaXNwbGF5RXJyb3IoKX19LHtrZXk6XCJkaXNwbGF5RXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNNYWluKCkmJmRlLmRpc3BhdGNoRXZlbnQod2luZG93LFwicGh4OnBhZ2UtbG9hZGluZy1zdGFydFwiLHt0bzp0aGlzLmhyZWYsa2luZDpcImVycm9yXCJ9KSx0aGlzLnNob3dMb2FkZXIoKSx0aGlzLnNldENvbnRhaW5lckNsYXNzZXMoXCJwaHgtZGlzY29ubmVjdGVkXCIsXCJwaHgtZXJyb3JcIil9fSx7a2V5OlwicHVzaFdpdGhSZXBseVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOmZ1bmN0aW9uKCl7fTtpZih0aGlzLmlzQ29ubmVjdGVkKCkpe3ZhciBvPUMoZT9lKCk6W251bGwsW11dLDIpLGE9b1swXSx1PUMob1sxXSwxKVswXSxzPWZ1bmN0aW9uKCl7fTtyZXR1cm4gdSYmbnVsbCE9PXUuZ2V0QXR0cmlidXRlKHRoaXMuYmluZGluZyhcInBhZ2UtbG9hZGluZ1wiKSkmJihzPXRoaXMubGl2ZVNvY2tldC53aXRoUGFnZUxvYWRpbmcoe2tpbmQ6XCJlbGVtZW50XCIsdGFyZ2V0OnV9KSksXCJudW1iZXJcIiE9dHlwZW9mIG4uY2lkJiZkZWxldGUgbi5jaWQsdGhpcy5saXZlU29ja2V0LndyYXBQdXNoKHRoaXMse3RpbWVvdXQ6ITB9LGZ1bmN0aW9uKCl7cmV0dXJuIGkuY2hhbm5lbC5wdXNoKHQsbiwzZTQpLnJlY2VpdmUoXCJva1wiLGZ1bmN0aW9uKGUpe3ZhciB0PW51bGw7bnVsbCE9PWEmJmkudW5kb1JlZnMoYSksZS5kaWZmJiYodD1pLmFwcGx5RGlmZihcInVwZGF0ZVwiLGUuZGlmZixmdW5jdGlvbihlKXt2YXIgdD1lLmRpZmYsbj1lLmV2ZW50cztpLnVwZGF0ZSh0LG4pfSkpLGUucmVkaXJlY3QmJmkub25SZWRpcmVjdChlLnJlZGlyZWN0KSxlLmxpdmVfcGF0Y2gmJmkub25MaXZlUGF0Y2goZS5saXZlX3BhdGNoKSxlLmxpdmVfcmVkaXJlY3QmJmkub25MaXZlUmVkaXJlY3QoZS5saXZlX3JlZGlyZWN0KSxzKCkscihlLHQpfSl9KX19fSx7a2V5OlwidW5kb1JlZnNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2RlLmFsbCh0aGlzLmVsLFwiW1wiLmNvbmNhdChGLCc9XCInKS5jb25jYXQoZSwnXCJdJyksZnVuY3Rpb24oZSl7ZS5yZW1vdmVBdHRyaWJ1dGUoRiksbnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcmVhZG9ubHlcIikmJihlLnJlYWRPbmx5PSExLGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1waHgtcmVhZG9ubHlcIikpLG51bGwhPT1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LWRpc2FibGVkXCIpJiYoZS5kaXNhYmxlZD0hMSxlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcGh4LWRpc2FibGVkXCIpKSxILmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGRlLnJlbW92ZUNsYXNzKGUsdCl9KTt2YXIgbj1lLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LWRpc2FibGUtd2l0aC1yZXN0b3JlXCIpO251bGwhPT1uJiYoZS5pbm5lclRleHQ9bixlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcGh4LWRpc2FibGUtd2l0aC1yZXN0b3JlXCIpKTt2YXIgaT1kZS5wcml2YXRlKGUsRik7aWYoaSl7dmFyIHI9dC50cmlnZ2VyQmVmb3JlVXBkYXRlSG9vayhlLGkpO2ZlLnBhdGNoRWwoZSxpLHQubGl2ZVNvY2tldC5nZXRBY3RpdmVFbGVtZW50KCkpLHImJnIuX191cGRhdGVkKCksZGUuZGVsZXRlUHJpdmF0ZShlLEYpfX0pfX0se2tleTpcInB1dFJlZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5yZWYrKyxpPXRoaXMuYmluZGluZyhcImRpc2FibGUtd2l0aFwiKTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuY2xhc3NMaXN0LmFkZChcInBoeC1cIi5jb25jYXQodCxcIi1sb2FkaW5nXCIpKSxlLnNldEF0dHJpYnV0ZShGLG4pO3ZhciByPWUuZ2V0QXR0cmlidXRlKGkpO251bGwhPT1yJiYoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kaXNhYmxlLXdpdGgtcmVzdG9yZVwiKXx8ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1kaXNhYmxlLXdpdGgtcmVzdG9yZVwiLGUuaW5uZXJUZXh0KSxlLmlubmVyVGV4dD1yKX0pLFtuLGVdfX0se2tleTpcImNvbXBvbmVudElEXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKE0pO3JldHVybiB0P3BhcnNlSW50KHQpOm51bGx9fSx7a2V5OlwidGFyZ2V0Q29tcG9uZW50SURcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoXCJ0YXJnZXRcIikpP3RoaXMuY2xvc2VzdENvbXBvbmVudElEKHQpOm51bGx9fSx7a2V5OlwiY2xvc2VzdENvbXBvbmVudElEXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gZT9lZShlLmNsb3Nlc3QoXCJbXCIuY29uY2F0KE0sXCJdXCIpKSxmdW5jdGlvbihlKXtyZXR1cm4gdC5vd25zRWxlbWVudChlKSYmdC5jb21wb25lbnRJRChlKX0pOm51bGx9fSx7a2V5OlwicHVzaEhvb2tFdmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkpe2lmKCF0aGlzLmlzQ29ubmVjdGVkKCkpcmV0dXJuIHRoaXMubG9nKFwiaG9va1wiLGZ1bmN0aW9uKCl7cmV0dXJuW1widW5hYmxlIHRvIHB1c2ggaG9vayBldmVudC4gTGl2ZVZpZXcgbm90IGNvbm5lY3RlZFwiLHQsbl19KSwhMTt2YXIgcj1DKHRoaXMucHV0UmVmKFtdLFwiaG9va1wiKSwyKSxvPXJbMF0sYT1yWzFdO3JldHVybiB0aGlzLnB1c2hXaXRoUmVwbHkoZnVuY3Rpb24oKXtyZXR1cm5bbyxhXX0sXCJldmVudFwiLHt0eXBlOlwiaG9va1wiLGV2ZW50OnQsdmFsdWU6bixjaWQ6dGhpcy5jbG9zZXN0Q29tcG9uZW50SUQoZSl9LGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGkodCxvKX0pLG99fSx7a2V5OlwiZXh0cmFjdE1ldGFcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10aGlzLmJpbmRpbmcoXCJ2YWx1ZS1cIiksaT0wO2k8ZS5hdHRyaWJ1dGVzLmxlbmd0aDtpKyspe3ZhciByPWUuYXR0cmlidXRlc1tpXS5uYW1lO3Iuc3RhcnRzV2l0aChuKSYmKHRbci5yZXBsYWNlKG4sXCJcIildPWUuZ2V0QXR0cmlidXRlKHIpKX1yZXR1cm4gdm9pZCAwIT09ZS52YWx1ZSYmKHQudmFsdWU9ZS52YWx1ZSxcIklOUFVUXCI9PT1lLnRhZ05hbWUmJlYuaW5kZXhPZihlLnR5cGUpPj0wJiYhZS5jaGVja2VkJiZkZWxldGUgdC52YWx1ZSksdH19LHtrZXk6XCJwdXNoRXZlbnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBvPXRoaXM7dGhpcy5wdXNoV2l0aFJlcGx5KGZ1bmN0aW9uKCl7cmV0dXJuIG8ucHV0UmVmKFt0XSxlKX0sXCJldmVudFwiLHt0eXBlOmUsZXZlbnQ6aSx2YWx1ZTp0aGlzLmV4dHJhY3RNZXRhKHQsciksY2lkOnRoaXMudGFyZ2V0Q29tcG9uZW50SUQodCxuKX0pfX0se2tleTpcInB1c2hLZXlcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBvPXRoaXM7dGhpcy5wdXNoV2l0aFJlcGx5KGZ1bmN0aW9uKCl7cmV0dXJuIG8ucHV0UmVmKFtlXSxuKX0sXCJldmVudFwiLHt0eXBlOm4sZXZlbnQ6aSx2YWx1ZTp0aGlzLmV4dHJhY3RNZXRhKGUsciksY2lkOnRoaXMudGFyZ2V0Q29tcG9uZW50SUQoZSx0KX0pfX0se2tleTpcInB1c2hGaWxlUHJvZ3Jlc3NcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOmZ1bmN0aW9uKCl7fTt0aGlzLmxpdmVTb2NrZXQud2l0aGluT3duZXJzKGUuZm9ybSxmdW5jdGlvbihyLG8pe3IucHVzaFdpdGhSZXBseShudWxsLFwicHJvZ3Jlc3NcIix7ZXZlbnQ6ZS5nZXRBdHRyaWJ1dGUoci5iaW5kaW5nKFwicHJvZ3Jlc3NcIikpLHJlZjplLmdldEF0dHJpYnV0ZShVKSxlbnRyeV9yZWY6dCxwcm9ncmVzczpuLGNpZDpyLnRhcmdldENvbXBvbmVudElEKGUuZm9ybSxvKX0saSl9KX19LHtrZXk6XCJwdXNoSW5wdXRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBvPXRoaXMsYT10aGlzLnRhcmdldENvbXBvbmVudElEKGUuZm9ybSx0KSx1PWZ1bmN0aW9uKCl7cmV0dXJuIG8ucHV0UmVmKFtlLGUuZm9ybV0sXCJjaGFuZ2VcIil9LHM9dWUoZS5mb3JtLHtfdGFyZ2V0OmkubmFtZX0pO2UuZmlsZXMmJmUuZmlsZXMubGVuZ3RoPjAmJnJlLnRyYWNrRmlsZXMoZSxBcnJheS5mcm9tKGUuZmlsZXMpKTt2YXIgYz17dHlwZTpcImZvcm1cIixldmVudDpuLHZhbHVlOnMsdXBsb2FkczpyZS5zZXJpYWxpemVVcGxvYWRzKGUpLGNpZDphfTt0aGlzLnB1c2hXaXRoUmVwbHkodSxcImV2ZW50XCIsYyxmdW5jdGlvbihuKXtpZihkZS5zaG93RXJyb3IoZSxvLmxpdmVTb2NrZXQuYmluZGluZyhcImZlZWRiYWNrLWZvclwiKSksZGUuaXNVcGxvYWRJbnB1dChlKSYmbnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtYXV0by11cGxvYWRcIikpe2lmKHJlLmZpbGVzQXdhaXRpbmdQcmVmbGlnaHQoZSkubGVuZ3RoPjApe3ZhciBpPUModSgpLDIpLHM9aVswXTtpWzFdO28udXBsb2FkRmlsZXMoZS5mb3JtLHQscyxhLGZ1bmN0aW9uKHQpe3ImJnIobiksby50cmlnZ2VyQXdhaXRpbmdTdWJtaXQoZS5mb3JtKX0pfX1lbHNlIHImJnIobil9KX19LHtrZXk6XCJ0cmlnZ2VyQXdhaXRpbmdTdWJtaXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmdldFNjaGVkdWxlZFN1Ym1pdChlKTtpZih0KXt2YXIgbj1DKHQsMyksaT0oblswXSxuWzFdLG5bMl0pO3RoaXMuY2FuY2VsU3VibWl0KGUpLGkoKX19fSx7a2V5OlwiZ2V0U2NoZWR1bGVkU3VibWl0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZm9ybVN1Ym1pdHMuZmluZChmdW5jdGlvbih0KXt2YXIgbj1DKHQsMiksaT1uWzBdO25bMV07cmV0dXJuIGkuaXNTYW1lTm9kZShlKX0pfX0se2tleTpcInNjaGVkdWxlU3VibWl0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe2lmKHRoaXMuZ2V0U2NoZWR1bGVkU3VibWl0KGUpKXJldHVybiEwO3RoaXMuZm9ybVN1Ym1pdHMucHVzaChbZSx0LG5dKX19LHtrZXk6XCJjYW5jZWxTdWJtaXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMuZm9ybVN1Ym1pdHM9dGhpcy5mb3JtU3VibWl0cy5maWx0ZXIoZnVuY3Rpb24obil7dmFyIGk9QyhuLDMpLHI9aVswXSxvPWlbMV07aVsyXTtyZXR1cm4hci5pc1NhbWVOb2RlKGUpfHwodC51bmRvUmVmcyhvKSwhMSl9KX19LHtrZXk6XCJwdXNoRm9ybVN1Ym1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByPXRoaXMsbz1mdW5jdGlvbihlKXtyZXR1cm4hKFkoZSxcIlwiLmNvbmNhdChyLmJpbmRpbmcoXCJ1cGRhdGVcIiksXCI9aWdub3JlXCIpLGUuZm9ybSl8fFkoZSxcImRhdGEtcGh4LXVwZGF0ZT1pZ25vcmVcIixlLmZvcm0pKX0sYT1mdW5jdGlvbihlKXtyZXR1cm4gZS5oYXNBdHRyaWJ1dGUoci5iaW5kaW5nKFwiZGlzYWJsZS13aXRoXCIpKX0sdT1mdW5jdGlvbihlKXtyZXR1cm5cIkJVVFRPTlwiPT1lLnRhZ05hbWV9LHM9ZnVuY3Rpb24oZSl7cmV0dXJuW1wiSU5QVVRcIixcIlRFWFRBUkVBXCIsXCJTRUxFQ1RcIl0uaW5jbHVkZXMoZS50YWdOYW1lKX0sYz1mdW5jdGlvbigpe3ZhciB0PUFycmF5LmZyb20oZS5lbGVtZW50cyksbj10LmZpbHRlcihhKSxpPXQuZmlsdGVyKHUpLmZpbHRlcihvKSxjPXQuZmlsdGVyKHMpLmZpbHRlcihvKTtyZXR1cm4gaS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtZGlzYWJsZWRcIixlLmRpc2FibGVkKSxlLmRpc2FibGVkPSEwfSksYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtcmVhZG9ubHlcIixlLnJlYWRPbmx5KSxlLnJlYWRPbmx5PSEwLGUuZmlsZXMmJihlLnNldEF0dHJpYnV0ZShcImRhdGEtcGh4LWRpc2FibGVkXCIsZS5kaXNhYmxlZCksZS5kaXNhYmxlZD0hMCl9KSxlLnNldEF0dHJpYnV0ZShyLmJpbmRpbmcoXCJwYWdlLWxvYWRpbmdcIiksXCJcIiksci5wdXRSZWYoW2VdLmNvbmNhdChuKS5jb25jYXQoaSkuY29uY2F0KGMpLFwic3VibWl0XCIpfSxsPXRoaXMudGFyZ2V0Q29tcG9uZW50SUQoZSx0KTtpZihyZS5oYXNVcGxvYWRzSW5Qcm9ncmVzcyhlKSl7dmFyIGQ9QyhjKCksMiksaD1kWzBdO2RbMV07cmV0dXJuIHRoaXMuc2NoZWR1bGVTdWJtaXQoZSxoLGZ1bmN0aW9uKCl7cmV0dXJuIHIucHVzaEZvcm1TdWJtaXQoZSx0LG4saSl9KX1pZihyZS5pbnB1dHNBd2FpdGluZ1ByZWZsaWdodChlKS5sZW5ndGg+MCl7dmFyIGY9QyhjKCksMiksdj1mWzBdLHA9ZlsxXSxnPWZ1bmN0aW9uKCl7cmV0dXJuW3YscF19O3RoaXMudXBsb2FkRmlsZXMoZSx0LHYsbCxmdW5jdGlvbih0KXt2YXIgbz11ZShlLHt9KTtyLnB1c2hXaXRoUmVwbHkoZyxcImV2ZW50XCIse3R5cGU6XCJmb3JtXCIsZXZlbnQ6bix2YWx1ZTpvLGNpZDpsfSxpKX0pfWVsc2V7dmFyIG09dWUoZSk7dGhpcy5wdXNoV2l0aFJlcGx5KGMsXCJldmVudFwiLHt0eXBlOlwiZm9ybVwiLGV2ZW50Om4sdmFsdWU6bSxjaWQ6bH0saSl9fX0se2tleTpcInVwbG9hZEZpbGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbz10aGlzLGE9dGhpcy5qb2luQ291bnQ7cmUuYWN0aXZlRmlsZUlucHV0cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBpPW5ldyByZShlLG8scik7by51cGxvYWRlcnNbZV09aTt2YXIgdT1pLmVudHJpZXMoKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9QcmVmbGlnaHRQYXlsb2FkKCl9KSxzPXtyZWY6ZS5nZXRBdHRyaWJ1dGUoVSksZW50cmllczp1LGNpZDpvLnRhcmdldENvbXBvbmVudElEKGUuZm9ybSx0KX07by5sb2coXCJ1cGxvYWRcIixmdW5jdGlvbigpe3JldHVybltcInNlbmRpbmcgcHJlZmxpZ2h0IHJlcXVlc3RcIixzXX0pLG8ucHVzaFdpdGhSZXBseShudWxsLFwiYWxsb3dfdXBsb2FkXCIscyxmdW5jdGlvbihlKXtpZihvLmxvZyhcInVwbG9hZFwiLGZ1bmN0aW9uKCl7cmV0dXJuW1wiZ290IHByZWZsaWdodCByZXNwb25zZVwiLGVdfSksZS5lcnJvcil7by51bmRvUmVmcyhuKTt2YXIgdD1DKGUuZXJyb3IsMikscj10WzBdLHU9dFsxXTtvLmxvZyhcInVwbG9hZFwiLGZ1bmN0aW9uKCl7cmV0dXJuW1wiZXJyb3IgZm9yIGVudHJ5IFwiLmNvbmNhdChyKSx1XX0pfWVsc2V7aS5pbml0QWRhcHRlclVwbG9hZChlLGZ1bmN0aW9uKGUpe28uY2hhbm5lbC5vbkVycm9yKGZ1bmN0aW9uKCl7by5qb2luQ291bnQ9PT1hJiZlKCl9KX0sby5saXZlU29ja2V0KX19KX0pfX0se2tleTpcInB1c2hGb3JtUmVjb3ZlcnlcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7dGhpcy5saXZlU29ja2V0LndpdGhpbk93bmVycyhlLGZ1bmN0aW9uKGkscil7dmFyIG89ZS5lbGVtZW50c1swXSxhPWUuZ2V0QXR0cmlidXRlKG4uYmluZGluZyhcImF1dG8tcmVjb3ZlclwiKSl8fGUuZ2V0QXR0cmlidXRlKG4uYmluZGluZyhcImNoYW5nZVwiKSk7aS5wdXNoSW5wdXQobyxyLGEsbyx0KX0pfX0se2tleTpcInB1c2hMaW5rUGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyxyPXRoaXMubGl2ZVNvY2tldC5zZXRQZW5kaW5nTGluayhlKSxvPXQ/ZnVuY3Rpb24oKXtyZXR1cm4gaS5wdXRSZWYoW3RdLFwiY2xpY2tcIil9Om51bGw7dGhpcy5wdXNoV2l0aFJlcGx5KG8sXCJsaW5rXCIse3VybDplfSxmdW5jdGlvbih0KXt0LmxpbmtfcmVkaXJlY3Q/aS5saXZlU29ja2V0LnJlcGxhY2VNYWluKGUsbnVsbCxuLHIpOihpLmxpdmVTb2NrZXQuY29tbWl0UGVuZGluZ0xpbmsocikmJihpLmhyZWY9ZSksaS5hcHBseVBlbmRpbmdVcGRhdGVzKCksbiYmbihyKSl9KS5yZWNlaXZlKFwidGltZW91dFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGkubGl2ZVNvY2tldC5yZWRpcmVjdCh3aW5kb3cubG9jYXRpb24uaHJlZil9KX19LHtrZXk6XCJmb3Jtc0ZvclJlY292ZXJ5XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZigwPT09dGhpcy5qb2luQ291bnQpcmV0dXJuW107dmFyIG49dGhpcy5iaW5kaW5nKFwiY2hhbmdlXCIpLGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3JldHVybiBpLmlubmVySFRNTD1lLGRlLmFsbCh0aGlzLmVsLFwiZm9ybVtcIi5jb25jYXQobixcIl1cIikpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gdC5vd25zRWxlbWVudChlKX0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5lbGVtZW50cy5sZW5ndGg+MH0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm5cImlnbm9yZVwiIT09ZS5nZXRBdHRyaWJ1dGUodC5iaW5kaW5nKFwiYXV0by1yZWNvdmVyXCIpKX0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gaS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtW1wiLmNvbmNhdChuLCc9XCInKS5jb25jYXQoZS5nZXRBdHRyaWJ1dGUobiksJ1wiXScpKX0pfX0se2tleTpcIm1heWJlUHVzaENvbXBvbmVudHNEZXN0cm95ZWRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdCxuPXRoaXMsaT1lLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gMD09PWRlLmZpbmRDb21wb25lbnROb2RlTGlzdChuLmVsLGUpLmxlbmd0aH0pO2kubGVuZ3RoPjAmJigodD10aGlzLnBydW5pbmdDSURzKS5wdXNoLmFwcGx5KHQsdyhpKSksdGhpcy5wdXNoV2l0aFJlcGx5KG51bGwsXCJjaWRzX3dpbGxfZGVzdHJveVwiLHtjaWRzOml9LGZ1bmN0aW9uKCl7bi5wcnVuaW5nQ0lEcz1uLnBydW5pbmdDSURzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4tMSE9PWkuaW5kZXhPZihlKX0pO3ZhciBlPWkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiAwPT09ZGUuZmluZENvbXBvbmVudE5vZGVMaXN0KG4uZWwsZSkubGVuZ3RofSk7ZS5sZW5ndGg+MCYmbi5wdXNoV2l0aFJlcGx5KG51bGwsXCJjaWRzX2Rlc3Ryb3llZFwiLHtjaWRzOmV9LGZ1bmN0aW9uKGUpe24ucmVuZGVyZWQucHJ1bmVDSURzKGUuY2lkcyl9KX0pKX19LHtrZXk6XCJvd25zRWxlbWVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImRhdGEtcGh4LXBhcmVudC1pZFwiKT09PXRoaXMuaWR8fGVlKGUuY2xvc2VzdChCKSxmdW5jdGlvbihlKXtyZXR1cm4gZS5pZH0pPT09dGhpcy5pZH19LHtrZXk6XCJzdWJtaXRGb3JtXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7ZGUucHV0UHJpdmF0ZShlLFwicGh4LWhhcy1zdWJtaXR0ZWRcIiwhMCksdGhpcy5saXZlU29ja2V0LmJsdXJBY3RpdmVFbGVtZW50KHRoaXMpLHRoaXMucHVzaEZvcm1TdWJtaXQoZSx0LG4sZnVuY3Rpb24oKXtpLmxpdmVTb2NrZXQucmVzdG9yZVByZXZpb3VzbHlBY3RpdmVGb2N1cygpfSl9fSx7a2V5OlwiYmluZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmxpdmVTb2NrZXQuYmluZGluZyhlKX19XSksZX0oKSxwZT0xLGdlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4saSl7Zm9yKHZhciByIGluIEQodGhpcyxlKSx0aGlzLl9fdmlldz10LHRoaXMuX19saXZlU29ja2V0PXQubGl2ZVNvY2tldCx0aGlzLl9fY2FsbGJhY2tzPWksdGhpcy5fX2xpc3RlbmVycz1uZXcgU2V0LHRoaXMuX19pc0Rpc2Nvbm5lY3RlZD0hMSx0aGlzLmVsPW4sdGhpcy52aWV3TmFtZT10Lm5hbWUoKSx0aGlzLmVsLnBoeEhvb2tJZD10aGlzLmNvbnN0cnVjdG9yLm1ha2VJRCgpLHRoaXMuX19jYWxsYmFja3MpdGhpc1tyXT10aGlzLl9fY2FsbGJhY2tzW3JdfXJldHVybiBOKGUsbnVsbCxbe2tleTpcIm1ha2VJRFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHBlKyt9fSx7a2V5OlwiZWxlbWVudElEXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGh4SG9va0lkfX1dKSxOKGUsW3trZXk6XCJfX21vdW50ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubW91bnRlZCYmdGhpcy5tb3VudGVkKCl9fSx7a2V5OlwiX191cGRhdGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZWQmJnRoaXMudXBkYXRlZCgpfX0se2tleTpcIl9fYmVmb3JlVXBkYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmJlZm9yZVVwZGF0ZSYmdGhpcy5iZWZvcmVVcGRhdGUoKX19LHtrZXk6XCJfX2Rlc3Ryb3llZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kZXN0cm95ZWQmJnRoaXMuZGVzdHJveWVkKCl9fSx7a2V5OlwiX19yZWNvbm5lY3RlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fX2lzRGlzY29ubmVjdGVkJiYodGhpcy5fX2lzRGlzY29ubmVjdGVkPSExLHRoaXMucmVjb25uZWN0ZWQmJnRoaXMucmVjb25uZWN0ZWQoKSl9fSx7a2V5OlwiX19kaXNjb25uZWN0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX19pc0Rpc2Nvbm5lY3RlZD0hMCx0aGlzLmRpc2Nvbm5lY3RlZCYmdGhpcy5kaXNjb25uZWN0ZWQoKX19LHtrZXk6XCJwdXNoRXZlbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ZnVuY3Rpb24oKXt9O3JldHVybiB0aGlzLl9fdmlldy5wdXNoSG9va0V2ZW50KG51bGwsZSx0LG4pfX0se2tleTpcInB1c2hFdmVudFRvXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e30saT1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106ZnVuY3Rpb24oKXt9O3JldHVybiB0aGlzLl9fdmlldy53aXRoaW5UYXJnZXRzKGUsZnVuY3Rpb24oZSxyKXtyZXR1cm4gZS5wdXNoSG9va0V2ZW50KHIsdCxuLGkpfSl9fSx7a2V5OlwiaGFuZGxlRXZlbnRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKG4saSl7cmV0dXJuIGk/ZTp0KG4uZGV0YWlsKX07cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGh4Omhvb2s6XCIuY29uY2F0KGUpLG4pLHRoaXMuX19saXN0ZW5lcnMuYWRkKG4pLG59fSx7a2V5OlwicmVtb3ZlSGFuZGxlRXZlbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lKG51bGwsITApO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGh4Omhvb2s6XCIuY29uY2F0KHQpLGUpLHRoaXMuX19saXN0ZW5lcnMuZGVsZXRlKGUpfX0se2tleTpcIl9fY2xlYW51cF9fXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuX19saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS5yZW1vdmVIYW5kbGVFdmVudCh0KX0pfX1dKSxlfSgpO3QuZGVmYXVsdD1jZX0sZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXt0LlBob2VuaXh8fCh0LlBob2VuaXg9e30pLGUuZXhwb3J0cz10LlBob2VuaXguTGl2ZVZpZXc9bigwKX0pLmNhbGwodGhpcyxuKDEpKX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGhvZW5peF9saXZlX3ZpZXcuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiB0b3BiYXIgMS4wLjAsIDIwMjEtMDEtMDZcbiAqIGh0dHA6Ly9idXVuZ3V5ZW4uZ2l0aHViLmlvL3RvcGJhclxuICogQ29weXJpZ2h0IChjKSAyMDIxIEJ1dSBOZ3V5ZW5cbiAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFtcIm1zXCIsIFwibW96XCIsIFwid2Via2l0XCIsIFwib1wiXTtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gICAgfVxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9O1xuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICB9O1xuICB9KSgpO1xuXG4gIHZhciBjYW52YXMsXG4gICAgcHJvZ3Jlc3NUaW1lcklkLFxuICAgIGZhZGVUaW1lcklkLFxuICAgIGN1cnJlbnRQcm9ncmVzcyxcbiAgICBzaG93aW5nLFxuICAgIGFkZEV2ZW50ID0gZnVuY3Rpb24gKGVsZW0sIHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIpIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICBlbHNlIGlmIChlbGVtLmF0dGFjaEV2ZW50KSBlbGVtLmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xuICAgICAgZWxzZSBlbGVtW1wib25cIiArIHR5cGVdID0gaGFuZGxlcjtcbiAgICB9LFxuICAgIG9wdGlvbnMgPSB7XG4gICAgICBhdXRvUnVuOiB0cnVlLFxuICAgICAgYmFyVGhpY2tuZXNzOiAzLFxuICAgICAgYmFyQ29sb3JzOiB7XG4gICAgICAgIDA6IFwicmdiYSgyNiwgIDE4OCwgMTU2LCAuOSlcIixcbiAgICAgICAgXCIuMjVcIjogXCJyZ2JhKDUyLCAgMTUyLCAyMTksIC45KVwiLFxuICAgICAgICBcIi41MFwiOiBcInJnYmEoMjQxLCAxOTYsIDE1LCAgLjkpXCIsXG4gICAgICAgIFwiLjc1XCI6IFwicmdiYSgyMzAsIDEyNiwgMzQsICAuOSlcIixcbiAgICAgICAgXCIxLjBcIjogXCJyZ2JhKDIxMSwgODQsICAwLCAgIC45KVwiLFxuICAgICAgfSxcbiAgICAgIHNoYWRvd0JsdXI6IDEwLFxuICAgICAgc2hhZG93Q29sb3I6IFwicmdiYSgwLCAgIDAsICAgMCwgICAuNilcIixcbiAgICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICB9LFxuICAgIHJlcGFpbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmJhclRoaWNrbmVzcyAqIDU7IC8vIG5lZWQgc3BhY2UgZm9yIHNoYWRvd1xuXG4gICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eC5zaGFkb3dCbHVyID0gb3B0aW9ucy5zaGFkb3dCbHVyO1xuICAgICAgY3R4LnNoYWRvd0NvbG9yID0gb3B0aW9ucy5zaGFkb3dDb2xvcjtcblxuICAgICAgdmFyIGxpbmVHcmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xuICAgICAgZm9yICh2YXIgc3RvcCBpbiBvcHRpb25zLmJhckNvbG9ycylcbiAgICAgICAgbGluZUdyYWRpZW50LmFkZENvbG9yU3RvcChzdG9wLCBvcHRpb25zLmJhckNvbG9yc1tzdG9wXSk7XG4gICAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5iYXJUaGlja25lc3M7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKDAsIG9wdGlvbnMuYmFyVGhpY2tuZXNzIC8gMik7XG4gICAgICBjdHgubGluZVRvKFxuICAgICAgICBNYXRoLmNlaWwoY3VycmVudFByb2dyZXNzICogY2FudmFzLndpZHRoKSxcbiAgICAgICAgb3B0aW9ucy5iYXJUaGlja25lc3MgLyAyXG4gICAgICApO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGluZUdyYWRpZW50O1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH0sXG4gICAgY3JlYXRlQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIHZhciBzdHlsZSA9IGNhbnZhcy5zdHlsZTtcbiAgICAgIHN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgc3R5bGUudG9wID0gc3R5bGUubGVmdCA9IHN0eWxlLnJpZ2h0ID0gc3R5bGUubWFyZ2luID0gc3R5bGUucGFkZGluZyA9IDA7XG4gICAgICBzdHlsZS56SW5kZXggPSAxMDAwMDE7XG4gICAgICBzdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBpZiAob3B0aW9ucy5jbGFzc05hbWUpIGNhbnZhcy5jbGFzc0xpc3QuYWRkKG9wdGlvbnMuY2xhc3NOYW1lKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgcmVwYWludCk7XG4gICAgfSxcbiAgICB0b3BiYXIgPSB7XG4gICAgICBjb25maWc6IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRzKVxuICAgICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIG9wdGlvbnNba2V5XSA9IG9wdHNba2V5XTtcbiAgICAgIH0sXG4gICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaG93aW5nKSByZXR1cm47XG4gICAgICAgIHNob3dpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoZmFkZVRpbWVySWQgIT09IG51bGwpIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShmYWRlVGltZXJJZCk7XG4gICAgICAgIGlmICghY2FudmFzKSBjcmVhdGVDYW52YXMoKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgdG9wYmFyLnByb2dyZXNzKDApO1xuICAgICAgICBpZiAob3B0aW9ucy5hdXRvUnVuKSB7XG4gICAgICAgICAgKGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgICAgICBwcm9ncmVzc1RpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgdG9wYmFyLnByb2dyZXNzKFxuICAgICAgICAgICAgICBcIitcIiArIDAuMDUgKiBNYXRoLnBvdygxIC0gTWF0aC5zcXJ0KGN1cnJlbnRQcm9ncmVzcyksIDIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9ncmVzczogZnVuY3Rpb24gKHRvKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBjdXJyZW50UHJvZ3Jlc3M7XG4gICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICB0byA9XG4gICAgICAgICAgICAodG8uaW5kZXhPZihcIitcIikgPj0gMCB8fCB0by5pbmRleE9mKFwiLVwiKSA+PSAwXG4gICAgICAgICAgICAgID8gY3VycmVudFByb2dyZXNzXG4gICAgICAgICAgICAgIDogMCkgKyBwYXJzZUZsb2F0KHRvKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSB0byA+IDEgPyAxIDogdG87XG4gICAgICAgIHJlcGFpbnQoKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9ncmVzcztcbiAgICAgIH0sXG4gICAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc2hvd2luZykgcmV0dXJuO1xuICAgICAgICBzaG93aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9ncmVzc1RpbWVySWQgIT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShwcm9ncmVzc1RpbWVySWQpO1xuICAgICAgICAgIHByb2dyZXNzVGltZXJJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgKGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgICAgaWYgKHRvcGJhci5wcm9ncmVzcyhcIisuMVwiKSA+PSAxKSB7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUub3BhY2l0eSAtPSAwLjA1O1xuICAgICAgICAgICAgaWYgKGNhbnZhcy5zdHlsZS5vcGFjaXR5IDw9IDAuMDUpIHtcbiAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgZmFkZVRpbWVySWQgPSBudWxsO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZhZGVUaW1lcklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH0sXG4gICAgfTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHRvcGJhcjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdG9wYmFyO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMudG9wYmFyID0gdG9wYmFyO1xuICB9XG59LmNhbGwodGhpcywgd2luZG93LCBkb2N1bWVudCkpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBQb2x5ZmlsbEV2ZW50ID0gZXZlbnRDb25zdHJ1Y3RvcigpO1xuXG4gIGZ1bmN0aW9uIGV2ZW50Q29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHdpbmRvdy5DdXN0b21FdmVudDtcbiAgICAvLyBJRTw9OSBTdXBwb3J0XG4gICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHtidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkfTtcbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH1cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuICAgIHJldHVybiBDdXN0b21FdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkSGlkZGVuSW5wdXQobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlbGVtZW50KSB7XG4gICAgdmFyIHRvID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvXCIpLFxuICAgICAgICBtZXRob2QgPSBidWlsZEhpZGRlbklucHV0KFwiX21ldGhvZFwiLCBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpKSxcbiAgICAgICAgY3NyZiA9IGJ1aWxkSGlkZGVuSW5wdXQoXCJfY3NyZl90b2tlblwiLCBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY3NyZlwiKSksXG4gICAgICAgIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgICAgICAgdGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIik7XG5cbiAgICBmb3JtLm1ldGhvZCA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpID09PSBcImdldFwiKSA/IFwiZ2V0XCIgOiBcInBvc3RcIjtcbiAgICBmb3JtLmFjdGlvbiA9IHRvO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiaGlkZGVuXCI7XG5cbiAgICBpZiAodGFyZ2V0KSBmb3JtLnRhcmdldCA9IHRhcmdldDtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3NyZik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXRob2QpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5zdWJtaXQoKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG5cbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSkge1xuICAgICAgdmFyIHBob2VuaXhMaW5rRXZlbnQgPSBuZXcgUG9seWZpbGxFdmVudCgncGhvZW5peC5saW5rLmNsaWNrJywge1xuICAgICAgICBcImJ1YmJsZXNcIjogdHJ1ZSwgXCJjYW5jZWxhYmxlXCI6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWVsZW1lbnQuZGlzcGF0Y2hFdmVudChwaG9lbml4TGlua0V2ZW50KSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZXRob2RcIikpIHtcbiAgICAgICAgaGFuZGxlQ2xpY2soZWxlbWVudCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIGZhbHNlKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGhvZW5peC5saW5rLmNsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29uZmlybVwiKTtcbiAgICBpZihtZXNzYWdlICYmICF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xufSkoKTtcbiIsICJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xudmFyIF9fY29tbW9uSlMgPSAoY2FsbGJhY2ssIG1vZHVsZSkgPT4gKCkgPT4ge1xuICBpZiAoIW1vZHVsZSkge1xuICAgIG1vZHVsZSA9IHtleHBvcnRzOiB7fX07XG4gICAgY2FsbGJhY2sobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSk7XG4gIH1cbiAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGFyZ2V0LCBtb2R1bGUsIGRlc2MpID0+IHtcbiAgaWYgKG1vZHVsZSAmJiB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBtb2R1bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhtb2R1bGUpKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0YXJnZXQsIGtleSkgJiYga2V5ICE9PSBcImRlZmF1bHRcIilcbiAgICAgICAgX19kZWZQcm9wKHRhcmdldCwga2V5LCB7Z2V0OiAoKSA9PiBtb2R1bGVba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhtb2R1bGUsIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZX0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fdG9Nb2R1bGUgPSAobW9kdWxlKSA9PiB7XG4gIHJldHVybiBfX2V4cG9ydFN0YXIoX19tYXJrQXNNb2R1bGUoX19kZWZQcm9wKG1vZHVsZSAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZHVsZSkpIDoge30sIFwiZGVmYXVsdFwiLCBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgJiYgXCJkZWZhdWx0XCIgaW4gbW9kdWxlID8ge2dldDogKCkgPT4gbW9kdWxlLmRlZmF1bHQsIGVudW1lcmFibGU6IHRydWV9IDoge3ZhbHVlOiBtb2R1bGUsIGVudW1lcmFibGU6IHRydWV9KSksIG1vZHVsZSk7XG59O1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9zaGFyZWQvZGlzdC9zaGFyZWQuY2pzLmpzXG52YXIgcmVxdWlyZV9zaGFyZWRfY2pzID0gX19jb21tb25KUygoZXhwb3J0cykgPT4ge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbiAgZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpIHtcbiAgICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGNvbnN0IGxpc3QgPSBzdHIuc3BsaXQoXCIsXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgPyAodmFsKSA9PiAhIW1hcFt2YWwudG9Mb3dlckNhc2UoKV0gOiAodmFsKSA9PiAhIW1hcFt2YWxdO1xuICB9XG4gIHZhciBQYXRjaEZsYWdOYW1lcyA9IHtcbiAgICBbMV06IGBURVhUYCxcbiAgICBbMl06IGBDTEFTU2AsXG4gICAgWzRdOiBgU1RZTEVgLFxuICAgIFs4XTogYFBST1BTYCxcbiAgICBbMTZdOiBgRlVMTF9QUk9QU2AsXG4gICAgWzMyXTogYEhZRFJBVEVfRVZFTlRTYCxcbiAgICBbNjRdOiBgU1RBQkxFX0ZSQUdNRU5UYCxcbiAgICBbMTI4XTogYEtFWUVEX0ZSQUdNRU5UYCxcbiAgICBbMjU2XTogYFVOS0VZRURfRlJBR01FTlRgLFxuICAgIFs1MTJdOiBgTkVFRF9QQVRDSGAsXG4gICAgWzEwMjRdOiBgRFlOQU1JQ19TTE9UU2AsXG4gICAgWzIwNDhdOiBgREVWX1JPT1RfRlJBR01FTlRgLFxuICAgIFstMV06IGBIT0lTVEVEYCxcbiAgICBbLTJdOiBgQkFJTGBcbiAgfTtcbiAgdmFyIHNsb3RGbGFnc1RleHQgPSB7XG4gICAgWzFdOiBcIlNUQUJMRVwiLFxuICAgIFsyXTogXCJEWU5BTUlDXCIsXG4gICAgWzNdOiBcIkZPUldBUkRFRFwiXG4gIH07XG4gIHZhciBHTE9CQUxTX1dISVRFX0xJU1RFRCA9IFwiSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTixwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCxNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsQmlnSW50XCI7XG4gIHZhciBpc0dsb2JhbGx5V2hpdGVsaXN0ZWQgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChHTE9CQUxTX1dISVRFX0xJU1RFRCk7XG4gIHZhciByYW5nZSA9IDI7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ29kZUZyYW1lKHNvdXJjZSwgc3RhcnQyID0gMCwgZW5kID0gc291cmNlLmxlbmd0aCkge1xuICAgIGNvbnN0IGxpbmVzID0gc291cmNlLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3VudCArPSBsaW5lc1tpXS5sZW5ndGggKyAxO1xuICAgICAgaWYgKGNvdW50ID49IHN0YXJ0Mikge1xuICAgICAgICBmb3IgKGxldCBqID0gaSAtIHJhbmdlOyBqIDw9IGkgKyByYW5nZSB8fCBlbmQgPiBjb3VudDsgaisrKSB7XG4gICAgICAgICAgaWYgKGogPCAwIHx8IGogPj0gbGluZXMubGVuZ3RoKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgY29uc3QgbGluZSA9IGogKyAxO1xuICAgICAgICAgIHJlcy5wdXNoKGAke2xpbmV9JHtcIiBcIi5yZXBlYXQoTWF0aC5tYXgoMyAtIFN0cmluZyhsaW5lKS5sZW5ndGgsIDApKX18ICAke2xpbmVzW2pdfWApO1xuICAgICAgICAgIGNvbnN0IGxpbmVMZW5ndGggPSBsaW5lc1tqXS5sZW5ndGg7XG4gICAgICAgICAgaWYgKGogPT09IGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZCA9IHN0YXJ0MiAtIChjb3VudCAtIGxpbmVMZW5ndGgpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KDEsIGVuZCA+IGNvdW50ID8gbGluZUxlbmd0aCAtIHBhZCA6IGVuZCAtIHN0YXJ0Mik7XG4gICAgICAgICAgICByZXMucHVzaChgICAgfCAgYCArIFwiIFwiLnJlcGVhdChwYWQpICsgXCJeXCIucmVwZWF0KGxlbmd0aCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaiA+IGkpIHtcbiAgICAgICAgICAgIGlmIChlbmQgPiBjb3VudCkge1xuICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChNYXRoLm1pbihlbmQgLSBjb3VudCwgbGluZUxlbmd0aCksIDEpO1xuICAgICAgICAgICAgICByZXMucHVzaChgICAgfCAgYCArIFwiXlwiLnJlcGVhdChsZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50ICs9IGxpbmVMZW5ndGggKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHZhciBzcGVjaWFsQm9vbGVhbkF0dHJzID0gYGl0ZW1zY29wZSxhbGxvd2Z1bGxzY3JlZW4sZm9ybW5vdmFsaWRhdGUsaXNtYXAsbm9tb2R1bGUsbm92YWxpZGF0ZSxyZWFkb25seWA7XG4gIHZhciBpc1NwZWNpYWxCb29sZWFuQXR0ciA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKHNwZWNpYWxCb29sZWFuQXR0cnMpO1xuICB2YXIgaXNCb29sZWFuQXR0cjIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChzcGVjaWFsQm9vbGVhbkF0dHJzICsgYCxhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY29udHJvbHMsZGVmYXVsdCxkZWZlcixkaXNhYmxlZCxoaWRkZW4sbG9vcCxvcGVuLHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxjaGVja2VkLG11dGVkLG11bHRpcGxlLHNlbGVjdGVkYCk7XG4gIHZhciB1bnNhZmVBdHRyQ2hhclJFID0gL1s+Lz1cIidcXHUwMDA5XFx1MDAwYVxcdTAwMGNcXHUwMDIwXS87XG4gIHZhciBhdHRyVmFsaWRhdGlvbkNhY2hlID0ge307XG4gIGZ1bmN0aW9uIGlzU1NSU2FmZUF0dHJOYW1lKG5hbWUpIHtcbiAgICBpZiAoYXR0clZhbGlkYXRpb25DYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIGF0dHJWYWxpZGF0aW9uQ2FjaGVbbmFtZV07XG4gICAgfVxuICAgIGNvbnN0IGlzVW5zYWZlID0gdW5zYWZlQXR0ckNoYXJSRS50ZXN0KG5hbWUpO1xuICAgIGlmIChpc1Vuc2FmZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgdW5zYWZlIGF0dHJpYnV0ZSBuYW1lOiAke25hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBhdHRyVmFsaWRhdGlvbkNhY2hlW25hbWVdID0gIWlzVW5zYWZlO1xuICB9XG4gIHZhciBwcm9wc1RvQXR0ck1hcCA9IHtcbiAgICBhY2NlcHRDaGFyc2V0OiBcImFjY2VwdC1jaGFyc2V0XCIsXG4gICAgY2xhc3NOYW1lOiBcImNsYXNzXCIsXG4gICAgaHRtbEZvcjogXCJmb3JcIixcbiAgICBodHRwRXF1aXY6IFwiaHR0cC1lcXVpdlwiXG4gIH07XG4gIHZhciBpc05vVW5pdE51bWVyaWNTdHlsZVByb3AgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxib3JkZXItaW1hZ2Utb3V0c2V0LGJvcmRlci1pbWFnZS1zbGljZSxib3JkZXItaW1hZ2Utd2lkdGgsYm94LWZsZXgsYm94LWZsZXgtZ3JvdXAsYm94LW9yZGluYWwtZ3JvdXAsY29sdW1uLWNvdW50LGNvbHVtbnMsZmxleCxmbGV4LWdyb3csZmxleC1wb3NpdGl2ZSxmbGV4LXNocmluayxmbGV4LW5lZ2F0aXZlLGZsZXgtb3JkZXIsZ3JpZC1yb3csZ3JpZC1yb3ctZW5kLGdyaWQtcm93LXNwYW4sZ3JpZC1yb3ctc3RhcnQsZ3JpZC1jb2x1bW4sZ3JpZC1jb2x1bW4tZW5kLGdyaWQtY29sdW1uLXNwYW4sZ3JpZC1jb2x1bW4tc3RhcnQsZm9udC13ZWlnaHQsbGluZS1jbGFtcCxsaW5lLWhlaWdodCxvcGFjaXR5LG9yZGVyLG9ycGhhbnMsdGFiLXNpemUsd2lkb3dzLHotaW5kZXgsem9vbSxmaWxsLW9wYWNpdHksZmxvb2Qtb3BhY2l0eSxzdG9wLW9wYWNpdHksc3Ryb2tlLWRhc2hhcnJheSxzdHJva2UtZGFzaG9mZnNldCxzdHJva2UtbWl0ZXJsaW1pdCxzdHJva2Utb3BhY2l0eSxzdHJva2Utd2lkdGhgKTtcbiAgdmFyIGlzS25vd25BdHRyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoYGFjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsbG93LGFsdCxhc3luYyxhdXRvY2FwaXRhbGl6ZSxhdXRvY29tcGxldGUsYXV0b2ZvY3VzLGF1dG9wbGF5LGJhY2tncm91bmQsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2FwdHVyZSxjaGFsbGVuZ2UsY2hhcnNldCxjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGNyb3Nzb3JpZ2luLGNzcCxkYXRhLGRhdGV0aW1lLGRlY29kaW5nLGRlZmF1bHQsZGVmZXIsZGlyLGRpcm5hbWUsZGlzYWJsZWQsZG93bmxvYWQsZHJhZ2dhYmxlLGRyb3B6b25lLGVuY3R5cGUsZW50ZXJrZXloaW50LGZvcixmb3JtLGZvcm1hY3Rpb24sZm9ybWVuY3R5cGUsZm9ybW1ldGhvZCxmb3Jtbm92YWxpZGF0ZSxmb3JtdGFyZ2V0LGhlYWRlcnMsaGVpZ2h0LGhpZGRlbixoaWdoLGhyZWYsaHJlZmxhbmcsaHR0cC1lcXVpdixpY29uLGlkLGltcG9ydGFuY2UsaW50ZWdyaXR5LGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxvYWRpbmcsbGlzdCxsb29wLGxvdyxtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1pbmxlbmd0aCxtZWRpYSxtaW4sbXVsdGlwbGUsbXV0ZWQsbmFtZSxub3ZhbGlkYXRlLG9wZW4sb3B0aW11bSxwYXR0ZXJuLHBpbmcscGxhY2Vob2xkZXIscG9zdGVyLHByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWZlcnJlcnBvbGljeSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsc2NvcGUsc2NvcGVkLHNlbGVjdGVkLHNoYXBlLHNpemUsc2l6ZXMsc2xvdCxzcGFuLHNwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsdGFyZ2V0LHRpdGxlLHRyYW5zbGF0ZSx0eXBlLHVzZW1hcCx2YWx1ZSx3aWR0aCx3cmFwYCk7XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjb25zdCByZXMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3R5bGUoaXNTdHJpbmcoaXRlbSkgPyBwYXJzZVN0cmluZ1N0eWxlKGl0ZW0pIDogaXRlbSk7XG4gICAgICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbm9ybWFsaXplZCkge1xuICAgICAgICAgICAgcmVzW2tleV0gPSBub3JtYWxpemVkW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG4gIHZhciBsaXN0RGVsaW1pdGVyUkUgPSAvOyg/IVteKF0qXFwpKS9nO1xuICB2YXIgcHJvcGVydHlEZWxpbWl0ZXJSRSA9IC86KC4rKS87XG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nU3R5bGUoY3NzVGV4dCkge1xuICAgIGNvbnN0IHJldCA9IHt9O1xuICAgIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlclJFKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBjb25zdCB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyUkUpO1xuICAgICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmV0W3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBmdW5jdGlvbiBzdHJpbmdpZnlTdHlsZShzdHlsZXMpIHtcbiAgICBsZXQgcmV0ID0gXCJcIjtcbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEtleSA9IGtleS5zdGFydHNXaXRoKGAtLWApID8ga2V5IDogaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAoaXNTdHJpbmcodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05vVW5pdE51bWVyaWNTdHlsZVByb3Aobm9ybWFsaXplZEtleSkpIHtcbiAgICAgICAgcmV0ICs9IGAke25vcm1hbGl6ZWRLZXl9OiR7dmFsdWV9O2A7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgZnVuY3Rpb24gbm9ybWFsaXplQ2xhc3ModmFsdWUpIHtcbiAgICBsZXQgcmVzID0gXCJcIjtcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICByZXMgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVDbGFzcyh2YWx1ZVtpXSk7XG4gICAgICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICAgICAgcmVzICs9IG5vcm1hbGl6ZWQgKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlW25hbWVdKSB7XG4gICAgICAgICAgcmVzICs9IG5hbWUgKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnRyaW0oKTtcbiAgfVxuICB2YXIgSFRNTF9UQUdTID0gXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LHMsc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLGVtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLGNhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLGJ1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSxkZXRhaWxzLGRpYWxvZyxtZW51LHN1bW1hcnksdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3RcIjtcbiAgdmFyIFNWR19UQUdTID0gXCJzdmcsYW5pbWF0ZSxhbmltYXRlTW90aW9uLGFuaW1hdGVUcmFuc2Zvcm0sY2lyY2xlLGNsaXBQYXRoLGNvbG9yLXByb2ZpbGUsZGVmcyxkZXNjLGRpc2NhcmQsZWxsaXBzZSxmZUJsZW5kLGZlQ29sb3JNYXRyaXgsZmVDb21wb25lbnRUcmFuc2ZlcixmZUNvbXBvc2l0ZSxmZUNvbnZvbHZlTWF0cml4LGZlRGlmZnVzZUxpZ2h0aW5nLGZlRGlzcGxhY2VtZW50TWFwLGZlRGlzdGFuY2VMaWdodCxmZURyb3BTaGFkb3csZmVGbG9vZCxmZUZ1bmNBLGZlRnVuY0IsZmVGdW5jRyxmZUZ1bmNSLGZlR2F1c3NpYW5CbHVyLGZlSW1hZ2UsZmVNZXJnZSxmZU1lcmdlTm9kZSxmZU1vcnBob2xvZ3ksZmVPZmZzZXQsZmVQb2ludExpZ2h0LGZlU3BlY3VsYXJMaWdodGluZyxmZVNwb3RMaWdodCxmZVRpbGUsZmVUdXJidWxlbmNlLGZpbHRlcixmb3JlaWduT2JqZWN0LGcsaGF0Y2gsaGF0Y2hwYXRoLGltYWdlLGxpbmUsbGluZWFyR3JhZGllbnQsbWFya2VyLG1hc2ssbWVzaCxtZXNoZ3JhZGllbnQsbWVzaHBhdGNoLG1lc2hyb3csbWV0YWRhdGEsbXBhdGgscGF0aCxwYXR0ZXJuLHBvbHlnb24scG9seWxpbmUscmFkaWFsR3JhZGllbnQscmVjdCxzZXQsc29saWRjb2xvcixzdG9wLHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0UGF0aCx0aXRsZSx0c3Bhbix1bmtub3duLHVzZSx2aWV3XCI7XG4gIHZhciBWT0lEX1RBR1MgPSBcImFyZWEsYmFzZSxicixjb2wsZW1iZWQsaHIsaW1nLGlucHV0LGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyXCI7XG4gIHZhciBpc0hUTUxUYWcgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChIVE1MX1RBR1MpO1xuICB2YXIgaXNTVkdUYWcgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChTVkdfVEFHUyk7XG4gIHZhciBpc1ZvaWRUYWcgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChWT0lEX1RBR1MpO1xuICB2YXIgZXNjYXBlUkUgPSAvW1wiJyY8Pl0vO1xuICBmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZykge1xuICAgIGNvbnN0IHN0ciA9IFwiXCIgKyBzdHJpbmc7XG4gICAgY29uc3QgbWF0Y2ggPSBlc2NhcGVSRS5leGVjKHN0cik7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgIGxldCBlc2NhcGVkO1xuICAgIGxldCBpbmRleDtcbiAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBlc2NhcGVkID0gXCImcXVvdDtcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBlc2NhcGVkID0gXCImYW1wO1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGVzY2FwZWQgPSBcIiYjMzk7XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgZXNjYXBlZCA9IFwiJmx0O1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgIGVzY2FwZWQgPSBcIiZndDtcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIGh0bWwgKz0gZXNjYXBlZDtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gaW5kZXggPyBodG1sICsgc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KSA6IGh0bWw7XG4gIH1cbiAgdmFyIGNvbW1lbnRTdHJpcFJFID0gL14tPz58PCEtLXwtLT58LS0hPnw8IS0kL2c7XG4gIGZ1bmN0aW9uIGVzY2FwZUh0bWxDb21tZW50KHNyYykge1xuICAgIHJldHVybiBzcmMucmVwbGFjZShjb21tZW50U3RyaXBSRSwgXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gbG9vc2VDb21wYXJlQXJyYXlzKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBlcXVhbCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGVxdWFsICYmIGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlcXVhbCA9IGxvb3NlRXF1YWwoYVtpXSwgYltpXSk7XG4gICAgfVxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuICBmdW5jdGlvbiBsb29zZUVxdWFsKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGxldCBhVmFsaWRUeXBlID0gaXNEYXRlKGEpO1xuICAgIGxldCBiVmFsaWRUeXBlID0gaXNEYXRlKGIpO1xuICAgIGlmIChhVmFsaWRUeXBlIHx8IGJWYWxpZFR5cGUpIHtcbiAgICAgIHJldHVybiBhVmFsaWRUeXBlICYmIGJWYWxpZFR5cGUgPyBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCkgOiBmYWxzZTtcbiAgICB9XG4gICAgYVZhbGlkVHlwZSA9IGlzQXJyYXkoYSk7XG4gICAgYlZhbGlkVHlwZSA9IGlzQXJyYXkoYik7XG4gICAgaWYgKGFWYWxpZFR5cGUgfHwgYlZhbGlkVHlwZSkge1xuICAgICAgcmV0dXJuIGFWYWxpZFR5cGUgJiYgYlZhbGlkVHlwZSA/IGxvb3NlQ29tcGFyZUFycmF5cyhhLCBiKSA6IGZhbHNlO1xuICAgIH1cbiAgICBhVmFsaWRUeXBlID0gaXNPYmplY3QoYSk7XG4gICAgYlZhbGlkVHlwZSA9IGlzT2JqZWN0KGIpO1xuICAgIGlmIChhVmFsaWRUeXBlIHx8IGJWYWxpZFR5cGUpIHtcbiAgICAgIGlmICghYVZhbGlkVHlwZSB8fCAhYlZhbGlkVHlwZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBhS2V5c0NvdW50ID0gT2JqZWN0LmtleXMoYSkubGVuZ3RoO1xuICAgICAgY29uc3QgYktleXNDb3VudCA9IE9iamVjdC5rZXlzKGIpLmxlbmd0aDtcbiAgICAgIGlmIChhS2V5c0NvdW50ICE9PSBiS2V5c0NvdW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGEpIHtcbiAgICAgICAgY29uc3QgYUhhc0tleSA9IGEuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgICAgY29uc3QgYkhhc0tleSA9IGIuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgICAgaWYgKGFIYXNLZXkgJiYgIWJIYXNLZXkgfHwgIWFIYXNLZXkgJiYgYkhhc0tleSB8fCAhbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpO1xuICB9XG4gIGZ1bmN0aW9uIGxvb3NlSW5kZXhPZihhcnIsIHZhbCkge1xuICAgIHJldHVybiBhcnIuZmluZEluZGV4KChpdGVtKSA9PiBsb29zZUVxdWFsKGl0ZW0sIHZhbCkpO1xuICB9XG4gIHZhciB0b0Rpc3BsYXlTdHJpbmcgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIHZhbCA9PSBudWxsID8gXCJcIiA6IGlzT2JqZWN0KHZhbCkgPyBKU09OLnN0cmluZ2lmeSh2YWwsIHJlcGxhY2VyLCAyKSA6IFN0cmluZyh2YWwpO1xuICB9O1xuICB2YXIgcmVwbGFjZXIgPSAoX2tleSwgdmFsKSA9PiB7XG4gICAgaWYgKGlzTWFwKHZhbCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgTWFwKCR7dmFsLnNpemV9KWBdOiBbLi4udmFsLmVudHJpZXMoKV0ucmVkdWNlKChlbnRyaWVzLCBba2V5LCB2YWwyXSkgPT4ge1xuICAgICAgICAgIGVudHJpZXNbYCR7a2V5fSA9PmBdID0gdmFsMjtcbiAgICAgICAgICByZXR1cm4gZW50cmllcztcbiAgICAgICAgfSwge30pXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNTZXQodmFsKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2BTZXQoJHt2YWwuc2l6ZX0pYF06IFsuLi52YWwudmFsdWVzKCldXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSAmJiAhaXNBcnJheSh2YWwpICYmICFpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJldHVybiBTdHJpbmcodmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbiAgdmFyIGJhYmVsUGFyc2VyRGVmYXVsdFBsdWdpbnMgPSBbXG4gICAgXCJiaWdJbnRcIixcbiAgICBcIm9wdGlvbmFsQ2hhaW5pbmdcIixcbiAgICBcIm51bGxpc2hDb2FsZXNjaW5nT3BlcmF0b3JcIlxuICBdO1xuICB2YXIgRU1QVFlfT0JKID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gIHZhciBFTVBUWV9BUlIgPSBPYmplY3QuZnJlZXplKFtdKTtcbiAgdmFyIE5PT1AgPSAoKSA9PiB7XG4gIH07XG4gIHZhciBOTyA9ICgpID0+IGZhbHNlO1xuICB2YXIgb25SRSA9IC9eb25bXmEtel0vO1xuICB2YXIgaXNPbiA9IChrZXkpID0+IG9uUkUudGVzdChrZXkpO1xuICB2YXIgaXNNb2RlbExpc3RlbmVyID0gKGtleSkgPT4ga2V5LnN0YXJ0c1dpdGgoXCJvblVwZGF0ZTpcIik7XG4gIHZhciBleHRlbmQgPSBPYmplY3QuYXNzaWduO1xuICB2YXIgcmVtb3ZlID0gKGFyciwgZWwpID0+IHtcbiAgICBjb25zdCBpID0gYXJyLmluZGV4T2YoZWwpO1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9O1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICB2YXIgaXNNYXAgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IE1hcF1cIjtcbiAgdmFyIGlzU2V0ID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBTZXRdXCI7XG4gIHZhciBpc0RhdGUgPSAodmFsKSA9PiB2YWwgaW5zdGFuY2VvZiBEYXRlO1xuICB2YXIgaXNGdW5jdGlvbiA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIjtcbiAgdmFyIGlzU3RyaW5nID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbiAgdmFyIGlzU3ltYm9sID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcbiAgdmFyIGlzT2JqZWN0ID0gKHZhbCkgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCI7XG4gIHZhciBpc1Byb21pc2UgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwudGhlbikgJiYgaXNGdW5jdGlvbih2YWwuY2F0Y2gpO1xuICB9O1xuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgdG9UeXBlU3RyaW5nID0gKHZhbHVlKSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgdmFyIHRvUmF3VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB0b1R5cGVTdHJpbmcodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgfTtcbiAgdmFyIGlzUGxhaW5PYmplY3QgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgdmFyIGlzSW50ZWdlcktleSA9IChrZXkpID0+IGlzU3RyaW5nKGtleSkgJiYga2V5ICE9PSBcIk5hTlwiICYmIGtleVswXSAhPT0gXCItXCIgJiYgXCJcIiArIHBhcnNlSW50KGtleSwgMTApID09PSBrZXk7XG4gIHZhciBpc1Jlc2VydmVkUHJvcCA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKFwiLGtleSxyZWYsb25Wbm9kZUJlZm9yZU1vdW50LG9uVm5vZGVNb3VudGVkLG9uVm5vZGVCZWZvcmVVcGRhdGUsb25Wbm9kZVVwZGF0ZWQsb25Wbm9kZUJlZm9yZVVubW91bnQsb25Wbm9kZVVubW91bnRlZFwiKTtcbiAgdmFyIGNhY2hlU3RyaW5nRnVuY3Rpb24gPSAoZm4pID0+IHtcbiAgICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIChzdHIpID0+IHtcbiAgICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbiAgfTtcbiAgdmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG4gIHZhciBjYW1lbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpO1xuICB9KTtcbiAgdmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbiAgdmFyIGh5cGhlbmF0ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuICB2YXIgY2FwaXRhbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpKTtcbiAgdmFyIHRvSGFuZGxlcktleSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyID8gYG9uJHtjYXBpdGFsaXplKHN0cil9YCA6IGBgKTtcbiAgdmFyIGhhc0NoYW5nZWQgPSAodmFsdWUsIG9sZFZhbHVlKSA9PiB2YWx1ZSAhPT0gb2xkVmFsdWUgJiYgKHZhbHVlID09PSB2YWx1ZSB8fCBvbGRWYWx1ZSA9PT0gb2xkVmFsdWUpO1xuICB2YXIgaW52b2tlQXJyYXlGbnMgPSAoZm5zLCBhcmcpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgZm5zW2ldKGFyZyk7XG4gICAgfVxuICB9O1xuICB2YXIgZGVmID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZVxuICAgIH0pO1xuICB9O1xuICB2YXIgdG9OdW1iZXIgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuO1xuICB9O1xuICB2YXIgX2dsb2JhbFRoaXM7XG4gIHZhciBnZXRHbG9iYWxUaGlzID0gKCkgPT4ge1xuICAgIHJldHVybiBfZ2xvYmFsVGhpcyB8fCAoX2dsb2JhbFRoaXMgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgfTtcbiAgZXhwb3J0cy5FTVBUWV9BUlIgPSBFTVBUWV9BUlI7XG4gIGV4cG9ydHMuRU1QVFlfT0JKID0gRU1QVFlfT0JKO1xuICBleHBvcnRzLk5PID0gTk87XG4gIGV4cG9ydHMuTk9PUCA9IE5PT1A7XG4gIGV4cG9ydHMuUGF0Y2hGbGFnTmFtZXMgPSBQYXRjaEZsYWdOYW1lcztcbiAgZXhwb3J0cy5iYWJlbFBhcnNlckRlZmF1bHRQbHVnaW5zID0gYmFiZWxQYXJzZXJEZWZhdWx0UGx1Z2lucztcbiAgZXhwb3J0cy5jYW1lbGl6ZSA9IGNhbWVsaXplO1xuICBleHBvcnRzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuICBleHBvcnRzLmRlZiA9IGRlZjtcbiAgZXhwb3J0cy5lc2NhcGVIdG1sID0gZXNjYXBlSHRtbDtcbiAgZXhwb3J0cy5lc2NhcGVIdG1sQ29tbWVudCA9IGVzY2FwZUh0bWxDb21tZW50O1xuICBleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbiAgZXhwb3J0cy5nZW5lcmF0ZUNvZGVGcmFtZSA9IGdlbmVyYXRlQ29kZUZyYW1lO1xuICBleHBvcnRzLmdldEdsb2JhbFRoaXMgPSBnZXRHbG9iYWxUaGlzO1xuICBleHBvcnRzLmhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkO1xuICBleHBvcnRzLmhhc093biA9IGhhc093bjtcbiAgZXhwb3J0cy5oeXBoZW5hdGUgPSBoeXBoZW5hdGU7XG4gIGV4cG9ydHMuaW52b2tlQXJyYXlGbnMgPSBpbnZva2VBcnJheUZucztcbiAgZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbiAgZXhwb3J0cy5pc0Jvb2xlYW5BdHRyID0gaXNCb29sZWFuQXR0cjI7XG4gIGV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuICBleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuICBleHBvcnRzLmlzR2xvYmFsbHlXaGl0ZWxpc3RlZCA9IGlzR2xvYmFsbHlXaGl0ZWxpc3RlZDtcbiAgZXhwb3J0cy5pc0hUTUxUYWcgPSBpc0hUTUxUYWc7XG4gIGV4cG9ydHMuaXNJbnRlZ2VyS2V5ID0gaXNJbnRlZ2VyS2V5O1xuICBleHBvcnRzLmlzS25vd25BdHRyID0gaXNLbm93bkF0dHI7XG4gIGV4cG9ydHMuaXNNYXAgPSBpc01hcDtcbiAgZXhwb3J0cy5pc01vZGVsTGlzdGVuZXIgPSBpc01vZGVsTGlzdGVuZXI7XG4gIGV4cG9ydHMuaXNOb1VuaXROdW1lcmljU3R5bGVQcm9wID0gaXNOb1VuaXROdW1lcmljU3R5bGVQcm9wO1xuICBleHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG4gIGV4cG9ydHMuaXNPbiA9IGlzT247XG4gIGV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3Q7XG4gIGV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuICBleHBvcnRzLmlzUmVzZXJ2ZWRQcm9wID0gaXNSZXNlcnZlZFByb3A7XG4gIGV4cG9ydHMuaXNTU1JTYWZlQXR0ck5hbWUgPSBpc1NTUlNhZmVBdHRyTmFtZTtcbiAgZXhwb3J0cy5pc1NWR1RhZyA9IGlzU1ZHVGFnO1xuICBleHBvcnRzLmlzU2V0ID0gaXNTZXQ7XG4gIGV4cG9ydHMuaXNTcGVjaWFsQm9vbGVhbkF0dHIgPSBpc1NwZWNpYWxCb29sZWFuQXR0cjtcbiAgZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuICBleHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG4gIGV4cG9ydHMuaXNWb2lkVGFnID0gaXNWb2lkVGFnO1xuICBleHBvcnRzLmxvb3NlRXF1YWwgPSBsb29zZUVxdWFsO1xuICBleHBvcnRzLmxvb3NlSW5kZXhPZiA9IGxvb3NlSW5kZXhPZjtcbiAgZXhwb3J0cy5tYWtlTWFwID0gbWFrZU1hcDtcbiAgZXhwb3J0cy5ub3JtYWxpemVDbGFzcyA9IG5vcm1hbGl6ZUNsYXNzO1xuICBleHBvcnRzLm5vcm1hbGl6ZVN0eWxlID0gbm9ybWFsaXplU3R5bGU7XG4gIGV4cG9ydHMub2JqZWN0VG9TdHJpbmcgPSBvYmplY3RUb1N0cmluZztcbiAgZXhwb3J0cy5wYXJzZVN0cmluZ1N0eWxlID0gcGFyc2VTdHJpbmdTdHlsZTtcbiAgZXhwb3J0cy5wcm9wc1RvQXR0ck1hcCA9IHByb3BzVG9BdHRyTWFwO1xuICBleHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbiAgZXhwb3J0cy5zbG90RmxhZ3NUZXh0ID0gc2xvdEZsYWdzVGV4dDtcbiAgZXhwb3J0cy5zdHJpbmdpZnlTdHlsZSA9IHN0cmluZ2lmeVN0eWxlO1xuICBleHBvcnRzLnRvRGlzcGxheVN0cmluZyA9IHRvRGlzcGxheVN0cmluZztcbiAgZXhwb3J0cy50b0hhbmRsZXJLZXkgPSB0b0hhbmRsZXJLZXk7XG4gIGV4cG9ydHMudG9OdW1iZXIgPSB0b051bWJlcjtcbiAgZXhwb3J0cy50b1Jhd1R5cGUgPSB0b1Jhd1R5cGU7XG4gIGV4cG9ydHMudG9UeXBlU3RyaW5nID0gdG9UeXBlU3RyaW5nO1xufSk7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3NoYXJlZC9pbmRleC5qc1xudmFyIHJlcXVpcmVfc2hhcmVkID0gX19jb21tb25KUygoZXhwb3J0cywgbW9kdWxlKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoZmFsc2UpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlX3NoYXJlZF9janMoKTtcbiAgfVxufSk7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3JlYWN0aXZpdHkvZGlzdC9yZWFjdGl2aXR5LmNqcy5qc1xudmFyIHJlcXVpcmVfcmVhY3Rpdml0eV9janMgPSBfX2NvbW1vbkpTKChleHBvcnRzKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xuICB2YXIgc2hhcmVkID0gcmVxdWlyZV9zaGFyZWQoKTtcbiAgdmFyIHRhcmdldE1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBlZmZlY3RTdGFjayA9IFtdO1xuICB2YXIgYWN0aXZlRWZmZWN0O1xuICB2YXIgSVRFUkFURV9LRVkgPSBTeW1ib2woXCJpdGVyYXRlXCIpO1xuICB2YXIgTUFQX0tFWV9JVEVSQVRFX0tFWSA9IFN5bWJvbChcIk1hcCBrZXkgaXRlcmF0ZVwiKTtcbiAgZnVuY3Rpb24gaXNFZmZlY3QoZm4pIHtcbiAgICByZXR1cm4gZm4gJiYgZm4uX2lzRWZmZWN0ID09PSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGVmZmVjdDMoZm4sIG9wdGlvbnMgPSBzaGFyZWQuRU1QVFlfT0JKKSB7XG4gICAgaWYgKGlzRWZmZWN0KGZuKSkge1xuICAgICAgZm4gPSBmbi5yYXc7XG4gICAgfVxuICAgIGNvbnN0IGVmZmVjdDQgPSBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLmxhenkpIHtcbiAgICAgIGVmZmVjdDQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVmZmVjdDQ7XG4gIH1cbiAgZnVuY3Rpb24gc3RvcDIoZWZmZWN0NCkge1xuICAgIGlmIChlZmZlY3Q0LmFjdGl2ZSkge1xuICAgICAgY2xlYW51cChlZmZlY3Q0KTtcbiAgICAgIGlmIChlZmZlY3Q0Lm9wdGlvbnMub25TdG9wKSB7XG4gICAgICAgIGVmZmVjdDQub3B0aW9ucy5vblN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGVmZmVjdDQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciB1aWQgPSAwO1xuICBmdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IGVmZmVjdDQgPSBmdW5jdGlvbiByZWFjdGl2ZUVmZmVjdCgpIHtcbiAgICAgIGlmICghZWZmZWN0NC5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9XG4gICAgICBpZiAoIWVmZmVjdFN0YWNrLmluY2x1ZGVzKGVmZmVjdDQpKSB7XG4gICAgICAgIGNsZWFudXAoZWZmZWN0NCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZW5hYmxlVHJhY2tpbmcoKTtcbiAgICAgICAgICBlZmZlY3RTdGFjay5wdXNoKGVmZmVjdDQpO1xuICAgICAgICAgIGFjdGl2ZUVmZmVjdCA9IGVmZmVjdDQ7XG4gICAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgZWZmZWN0U3RhY2sucG9wKCk7XG4gICAgICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgICAgIGFjdGl2ZUVmZmVjdCA9IGVmZmVjdFN0YWNrW2VmZmVjdFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBlZmZlY3Q0LmlkID0gdWlkKys7XG4gICAgZWZmZWN0NC5hbGxvd1JlY3Vyc2UgPSAhIW9wdGlvbnMuYWxsb3dSZWN1cnNlO1xuICAgIGVmZmVjdDQuX2lzRWZmZWN0ID0gdHJ1ZTtcbiAgICBlZmZlY3Q0LmFjdGl2ZSA9IHRydWU7XG4gICAgZWZmZWN0NC5yYXcgPSBmbjtcbiAgICBlZmZlY3Q0LmRlcHMgPSBbXTtcbiAgICBlZmZlY3Q0Lm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiBlZmZlY3Q0O1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFudXAoZWZmZWN0NCkge1xuICAgIGNvbnN0IHtkZXBzfSA9IGVmZmVjdDQ7XG4gICAgaWYgKGRlcHMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVwc1tpXS5kZWxldGUoZWZmZWN0NCk7XG4gICAgICB9XG4gICAgICBkZXBzLmxlbmd0aCA9IDA7XG4gICAgfVxuICB9XG4gIHZhciBzaG91bGRUcmFjayA9IHRydWU7XG4gIHZhciB0cmFja1N0YWNrID0gW107XG4gIGZ1bmN0aW9uIHBhdXNlVHJhY2tpbmcoKSB7XG4gICAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgICBzaG91bGRUcmFjayA9IGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIGVuYWJsZVRyYWNraW5nKCkge1xuICAgIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gICAgc2hvdWxkVHJhY2sgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJhY2tpbmcoKSB7XG4gICAgY29uc3QgbGFzdCA9IHRyYWNrU3RhY2sucG9wKCk7XG4gICAgc2hvdWxkVHJhY2sgPSBsYXN0ID09PSB2b2lkIDAgPyB0cnVlIDogbGFzdDtcbiAgfVxuICBmdW5jdGlvbiB0cmFjayh0YXJnZXQsIHR5cGUsIGtleSkge1xuICAgIGlmICghc2hvdWxkVHJhY2sgfHwgYWN0aXZlRWZmZWN0ID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gICAgaWYgKCFkZXBzTWFwKSB7XG4gICAgICB0YXJnZXRNYXAuc2V0KHRhcmdldCwgZGVwc01hcCA9IG5ldyBNYXAoKSk7XG4gICAgfVxuICAgIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkpO1xuICAgIGlmICghZGVwKSB7XG4gICAgICBkZXBzTWFwLnNldChrZXksIGRlcCA9IG5ldyBTZXQoKSk7XG4gICAgfVxuICAgIGlmICghZGVwLmhhcyhhY3RpdmVFZmZlY3QpKSB7XG4gICAgICBkZXAuYWRkKGFjdGl2ZUVmZmVjdCk7XG4gICAgICBhY3RpdmVFZmZlY3QuZGVwcy5wdXNoKGRlcCk7XG4gICAgICBpZiAoYWN0aXZlRWZmZWN0Lm9wdGlvbnMub25UcmFjaykge1xuICAgICAgICBhY3RpdmVFZmZlY3Qub3B0aW9ucy5vblRyYWNrKHtcbiAgICAgICAgICBlZmZlY3Q6IGFjdGl2ZUVmZmVjdCxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBrZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyaWdnZXIodGFyZ2V0LCB0eXBlLCBrZXksIG5ld1ZhbHVlLCBvbGRWYWx1ZSwgb2xkVGFyZ2V0KSB7XG4gICAgY29uc3QgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KTtcbiAgICBpZiAoIWRlcHNNYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWZmZWN0cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBhZGQyID0gKGVmZmVjdHNUb0FkZCkgPT4ge1xuICAgICAgaWYgKGVmZmVjdHNUb0FkZCkge1xuICAgICAgICBlZmZlY3RzVG9BZGQuZm9yRWFjaCgoZWZmZWN0NCkgPT4ge1xuICAgICAgICAgIGlmIChlZmZlY3Q0ICE9PSBhY3RpdmVFZmZlY3QgfHwgZWZmZWN0NC5hbGxvd1JlY3Vyc2UpIHtcbiAgICAgICAgICAgIGVmZmVjdHMuYWRkKGVmZmVjdDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodHlwZSA9PT0gXCJjbGVhclwiKSB7XG4gICAgICBkZXBzTWFwLmZvckVhY2goYWRkMik7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwibGVuZ3RoXCIgJiYgc2hhcmVkLmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgZGVwc01hcC5mb3JFYWNoKChkZXAsIGtleTIpID0+IHtcbiAgICAgICAgaWYgKGtleTIgPT09IFwibGVuZ3RoXCIgfHwga2V5MiA+PSBuZXdWYWx1ZSkge1xuICAgICAgICAgIGFkZDIoZGVwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkgIT09IHZvaWQgMCkge1xuICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KGtleSkpO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICBpZiAoIXNoYXJlZC5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICAgIGlmIChzaGFyZWQuaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KE1BUF9LRVlfSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHNoYXJlZC5pc0ludGVnZXJLZXkoa2V5KSkge1xuICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChcImxlbmd0aFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgICAgaWYgKCFzaGFyZWQuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICBpZiAoc2hhcmVkLmlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2V0XCI6XG4gICAgICAgICAgaWYgKHNoYXJlZC5pc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBydW4gPSAoZWZmZWN0NCkgPT4ge1xuICAgICAgaWYgKGVmZmVjdDQub3B0aW9ucy5vblRyaWdnZXIpIHtcbiAgICAgICAgZWZmZWN0NC5vcHRpb25zLm9uVHJpZ2dlcih7XG4gICAgICAgICAgZWZmZWN0OiBlZmZlY3Q0LFxuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICBvbGRWYWx1ZSxcbiAgICAgICAgICBvbGRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZWZmZWN0NC5vcHRpb25zLnNjaGVkdWxlcikge1xuICAgICAgICBlZmZlY3Q0Lm9wdGlvbnMuc2NoZWR1bGVyKGVmZmVjdDQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWZmZWN0NCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgZWZmZWN0cy5mb3JFYWNoKHJ1bik7XG4gIH1cbiAgdmFyIGlzTm9uVHJhY2thYmxlS2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBzaGFyZWQubWFrZU1hcChgX19wcm90b19fLF9fdl9pc1JlZixfX2lzVnVlYCk7XG4gIHZhciBidWlsdEluU3ltYm9scyA9IG5ldyBTZXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoU3ltYm9sKS5tYXAoKGtleSkgPT4gU3ltYm9sW2tleV0pLmZpbHRlcihzaGFyZWQuaXNTeW1ib2wpKTtcbiAgdmFyIGdldDIgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKCk7XG4gIHZhciBzaGFsbG93R2V0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcihmYWxzZSwgdHJ1ZSk7XG4gIHZhciByZWFkb25seUdldCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVHZXR0ZXIodHJ1ZSk7XG4gIHZhciBzaGFsbG93UmVhZG9ubHlHZXQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKHRydWUsIHRydWUpO1xuICB2YXIgYXJyYXlJbnN0cnVtZW50YXRpb25zID0ge307XG4gIFtcImluY2x1ZGVzXCIsIFwiaW5kZXhPZlwiLCBcImxhc3RJbmRleE9mXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuICAgIGFycmF5SW5zdHJ1bWVudGF0aW9uc1trZXldID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgY29uc3QgYXJyID0gdG9SYXcyKHRoaXMpO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0cmFjayhhcnIsIFwiZ2V0XCIsIGkgKyBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IG1ldGhvZC5hcHBseShhcnIsIGFyZ3MpO1xuICAgICAgaWYgKHJlcyA9PT0gLTEgfHwgcmVzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KGFyciwgYXJncy5tYXAodG9SYXcyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBbXCJwdXNoXCIsIFwicG9wXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCIsIFwic3BsaWNlXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuICAgIGFycmF5SW5zdHJ1bWVudGF0aW9uc1trZXldID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgcGF1c2VUcmFja2luZygpO1xuICAgICAgY29uc3QgcmVzID0gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9KTtcbiAgZnVuY3Rpb24gY3JlYXRlR2V0dGVyKGlzUmVhZG9ubHkyID0gZmFsc2UsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBnZXQzKHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICAgIHJldHVybiAhaXNSZWFkb25seTI7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFkb25seVwiKSB7XG4gICAgICAgIHJldHVybiBpc1JlYWRvbmx5MjtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9yYXdcIiAmJiByZWNlaXZlciA9PT0gKGlzUmVhZG9ubHkyID8gc2hhbGxvdyA/IHNoYWxsb3dSZWFkb25seU1hcCA6IHJlYWRvbmx5TWFwIDogc2hhbGxvdyA/IHNoYWxsb3dSZWFjdGl2ZU1hcCA6IHJlYWN0aXZlTWFwKS5nZXQodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0SXNBcnJheSA9IHNoYXJlZC5pc0FycmF5KHRhcmdldCk7XG4gICAgICBpZiAoIWlzUmVhZG9ubHkyICYmIHRhcmdldElzQXJyYXkgJiYgc2hhcmVkLmhhc093bihhcnJheUluc3RydW1lbnRhdGlvbnMsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5LCByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICAgICAgaWYgKHNoYXJlZC5pc1N5bWJvbChrZXkpID8gYnVpbHRJblN5bWJvbHMuaGFzKGtleSkgOiBpc05vblRyYWNrYWJsZUtleXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgICAgaWYgKCFpc1JlYWRvbmx5Mikge1xuICAgICAgICB0cmFjayh0YXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgICB9XG4gICAgICBpZiAoc2hhbGxvdykge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgICAgaWYgKGlzUmVmKHJlcykpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkVW53cmFwID0gIXRhcmdldElzQXJyYXkgfHwgIXNoYXJlZC5pc0ludGVnZXJLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHNob3VsZFVud3JhcCA/IHJlcy52YWx1ZSA6IHJlcztcbiAgICAgIH1cbiAgICAgIGlmIChzaGFyZWQuaXNPYmplY3QocmVzKSkge1xuICAgICAgICByZXR1cm4gaXNSZWFkb25seTIgPyByZWFkb25seShyZXMpIDogcmVhY3RpdmUzKHJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gIH1cbiAgdmFyIHNldDIgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2V0dGVyKCk7XG4gIHZhciBzaGFsbG93U2V0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNldHRlcih0cnVlKTtcbiAgZnVuY3Rpb24gY3JlYXRlU2V0dGVyKHNoYWxsb3cgPSBmYWxzZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBzZXQzKHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIGxldCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgICAgaWYgKCFzaGFsbG93KSB7XG4gICAgICAgIHZhbHVlID0gdG9SYXcyKHZhbHVlKTtcbiAgICAgICAgb2xkVmFsdWUgPSB0b1JhdzIob2xkVmFsdWUpO1xuICAgICAgICBpZiAoIXNoYXJlZC5pc0FycmF5KHRhcmdldCkgJiYgaXNSZWYob2xkVmFsdWUpICYmICFpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICBvbGRWYWx1ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBoYWRLZXkgPSBzaGFyZWQuaXNBcnJheSh0YXJnZXQpICYmIHNoYXJlZC5pc0ludGVnZXJLZXkoa2V5KSA/IE51bWJlcihrZXkpIDwgdGFyZ2V0Lmxlbmd0aCA6IHNoYXJlZC5oYXNPd24odGFyZ2V0LCBrZXkpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgICBpZiAodGFyZ2V0ID09PSB0b1JhdzIocmVjZWl2ZXIpKSB7XG4gICAgICAgIGlmICghaGFkS2V5KSB7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHNoYXJlZC5oYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJzZXRcIiwga2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgICBjb25zdCBoYWRLZXkgPSBzaGFyZWQuaGFzT3duKHRhcmdldCwga2V5KTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICAgIGlmIChyZXN1bHQgJiYgaGFkS2V5KSB7XG4gICAgICB0cmlnZ2VyKHRhcmdldCwgXCJkZWxldGVcIiwga2V5LCB2b2lkIDAsIG9sZFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBoYXModGFyZ2V0LCBrZXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSk7XG4gICAgaWYgKCFzaGFyZWQuaXNTeW1ib2woa2V5KSB8fCAhYnVpbHRJblN5bWJvbHMuaGFzKGtleSkpIHtcbiAgICAgIHRyYWNrKHRhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBvd25LZXlzKHRhcmdldCkge1xuICAgIHRyYWNrKHRhcmdldCwgXCJpdGVyYXRlXCIsIHNoYXJlZC5pc0FycmF5KHRhcmdldCkgPyBcImxlbmd0aFwiIDogSVRFUkFURV9LRVkpO1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbiAgfVxuICB2YXIgbXV0YWJsZUhhbmRsZXJzID0ge1xuICAgIGdldDogZ2V0MixcbiAgICBzZXQ6IHNldDIsXG4gICAgZGVsZXRlUHJvcGVydHksXG4gICAgaGFzLFxuICAgIG93bktleXNcbiAgfTtcbiAgdmFyIHJlYWRvbmx5SGFuZGxlcnMgPSB7XG4gICAgZ2V0OiByZWFkb25seUdldCxcbiAgICBzZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBTZXQgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEZWxldGUgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgdmFyIHNoYWxsb3dSZWFjdGl2ZUhhbmRsZXJzID0gc2hhcmVkLmV4dGVuZCh7fSwgbXV0YWJsZUhhbmRsZXJzLCB7XG4gICAgZ2V0OiBzaGFsbG93R2V0LFxuICAgIHNldDogc2hhbGxvd1NldFxuICB9KTtcbiAgdmFyIHNoYWxsb3dSZWFkb25seUhhbmRsZXJzID0gc2hhcmVkLmV4dGVuZCh7fSwgcmVhZG9ubHlIYW5kbGVycywge1xuICAgIGdldDogc2hhbGxvd1JlYWRvbmx5R2V0XG4gIH0pO1xuICB2YXIgdG9SZWFjdGl2ZSA9ICh2YWx1ZSkgPT4gc2hhcmVkLmlzT2JqZWN0KHZhbHVlKSA/IHJlYWN0aXZlMyh2YWx1ZSkgOiB2YWx1ZTtcbiAgdmFyIHRvUmVhZG9ubHkgPSAodmFsdWUpID0+IHNoYXJlZC5pc09iamVjdCh2YWx1ZSkgPyByZWFkb25seSh2YWx1ZSkgOiB2YWx1ZTtcbiAgdmFyIHRvU2hhbGxvdyA9ICh2YWx1ZSkgPT4gdmFsdWU7XG4gIHZhciBnZXRQcm90byA9ICh2KSA9PiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHYpO1xuICBmdW5jdGlvbiBnZXQkMSh0YXJnZXQsIGtleSwgaXNSZWFkb25seTIgPSBmYWxzZSwgaXNTaGFsbG93ID0gZmFsc2UpIHtcbiAgICB0YXJnZXQgPSB0YXJnZXRbXCJfX3ZfcmF3XCJdO1xuICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3Mih0YXJnZXQpO1xuICAgIGNvbnN0IHJhd0tleSA9IHRvUmF3MihrZXkpO1xuICAgIGlmIChrZXkgIT09IHJhd0tleSkge1xuICAgICAgIWlzUmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgICB9XG4gICAgIWlzUmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwgcmF3S2V5KTtcbiAgICBjb25zdCB7aGFzOiBoYXMyfSA9IGdldFByb3RvKHJhd1RhcmdldCk7XG4gICAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkyID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgaWYgKGhhczIuY2FsbChyYXdUYXJnZXQsIGtleSkpIHtcbiAgICAgIHJldHVybiB3cmFwKHRhcmdldC5nZXQoa2V5KSk7XG4gICAgfSBlbHNlIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KHJhd0tleSkpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSByYXdUYXJnZXQpIHtcbiAgICAgIHRhcmdldC5nZXQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFzJDEoa2V5LCBpc1JlYWRvbmx5MiA9IGZhbHNlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcIl9fdl9yYXdcIl07XG4gICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcyKHRhcmdldCk7XG4gICAgY29uc3QgcmF3S2V5ID0gdG9SYXcyKGtleSk7XG4gICAgaWYgKGtleSAhPT0gcmF3S2V5KSB7XG4gICAgICAhaXNSZWFkb25seTIgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCBrZXkpO1xuICAgIH1cbiAgICAhaXNSZWFkb25seTIgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCByYXdLZXkpO1xuICAgIHJldHVybiBrZXkgPT09IHJhd0tleSA/IHRhcmdldC5oYXMoa2V5KSA6IHRhcmdldC5oYXMoa2V5KSB8fCB0YXJnZXQuaGFzKHJhd0tleSk7XG4gIH1cbiAgZnVuY3Rpb24gc2l6ZSh0YXJnZXQsIGlzUmVhZG9ubHkyID0gZmFsc2UpIHtcbiAgICB0YXJnZXQgPSB0YXJnZXRbXCJfX3ZfcmF3XCJdO1xuICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayh0b1JhdzIodGFyZ2V0KSwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBcInNpemVcIiwgdGFyZ2V0KTtcbiAgfVxuICBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRvUmF3Mih2YWx1ZSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcyKHRoaXMpO1xuICAgIGNvbnN0IHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgICBjb25zdCBoYWRLZXkgPSBwcm90by5oYXMuY2FsbCh0YXJnZXQsIHZhbHVlKTtcbiAgICBpZiAoIWhhZEtleSkge1xuICAgICAgdGFyZ2V0LmFkZCh2YWx1ZSk7XG4gICAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwgdmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gc2V0JDEoa2V5LCB2YWx1ZSkge1xuICAgIHZhbHVlID0gdG9SYXcyKHZhbHVlKTtcbiAgICBjb25zdCB0YXJnZXQgPSB0b1JhdzIodGhpcyk7XG4gICAgY29uc3Qge2hhczogaGFzMiwgZ2V0OiBnZXQzfSA9IGdldFByb3RvKHRhcmdldCk7XG4gICAgbGV0IGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgIGtleSA9IHRvUmF3MihrZXkpO1xuICAgICAgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpO1xuICAgIH1cbiAgICBjb25zdCBvbGRWYWx1ZSA9IGdldDMuY2FsbCh0YXJnZXQsIGtleSk7XG4gICAgdGFyZ2V0LnNldChrZXksIHZhbHVlKTtcbiAgICBpZiAoIWhhZEtleSkge1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc2hhcmVkLmhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlRW50cnkoa2V5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcyKHRoaXMpO1xuICAgIGNvbnN0IHtoYXM6IGhhczIsIGdldDogZ2V0M30gPSBnZXRQcm90byh0YXJnZXQpO1xuICAgIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgIGlmICghaGFkS2V5KSB7XG4gICAgICBrZXkgPSB0b1JhdzIoa2V5KTtcbiAgICAgIGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KTtcbiAgICB9XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzID8gZ2V0My5jYWxsKHRhcmdldCwga2V5KSA6IHZvaWQgMDtcbiAgICBjb25zdCByZXN1bHQgPSB0YXJnZXQuZGVsZXRlKGtleSk7XG4gICAgaWYgKGhhZEtleSkge1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcyKHRoaXMpO1xuICAgIGNvbnN0IGhhZEl0ZW1zID0gdGFyZ2V0LnNpemUgIT09IDA7XG4gICAgY29uc3Qgb2xkVGFyZ2V0ID0gc2hhcmVkLmlzTWFwKHRhcmdldCkgPyBuZXcgTWFwKHRhcmdldCkgOiBuZXcgU2V0KHRhcmdldCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmNsZWFyKCk7XG4gICAgaWYgKGhhZEl0ZW1zKSB7XG4gICAgICB0cmlnZ2VyKHRhcmdldCwgXCJjbGVhclwiLCB2b2lkIDAsIHZvaWQgMCwgb2xkVGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVGb3JFYWNoKGlzUmVhZG9ubHkyLCBpc1NoYWxsb3cpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgY29uc3Qgb2JzZXJ2ZWQgPSB0aGlzO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gb2JzZXJ2ZWRbXCJfX3ZfcmF3XCJdO1xuICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcyKHRhcmdldCk7XG4gICAgICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seTIgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gICAgICByZXR1cm4gdGFyZ2V0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgd3JhcCh2YWx1ZSksIHdyYXAoa2V5KSwgb2JzZXJ2ZWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGlzUmVhZG9ubHkyLCBpc1NoYWxsb3cpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcIl9fdl9yYXdcIl07XG4gICAgICBjb25zdCByYXdUYXJnZXQgPSB0b1JhdzIodGFyZ2V0KTtcbiAgICAgIGNvbnN0IHRhcmdldElzTWFwID0gc2hhcmVkLmlzTWFwKHJhd1RhcmdldCk7XG4gICAgICBjb25zdCBpc1BhaXIgPSBtZXRob2QgPT09IFwiZW50cmllc1wiIHx8IG1ldGhvZCA9PT0gU3ltYm9sLml0ZXJhdG9yICYmIHRhcmdldElzTWFwO1xuICAgICAgY29uc3QgaXNLZXlPbmx5ID0gbWV0aG9kID09PSBcImtleXNcIiAmJiB0YXJnZXRJc01hcDtcbiAgICAgIGNvbnN0IGlubmVySXRlcmF0b3IgPSB0YXJnZXRbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5MiA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICAgIWlzUmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJpdGVyYXRlXCIsIGlzS2V5T25seSA/IE1BUF9LRVlfSVRFUkFURV9LRVkgOiBJVEVSQVRFX0tFWSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgIGNvbnN0IHt2YWx1ZSwgZG9uZX0gPSBpbm5lckl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICByZXR1cm4gZG9uZSA/IHt2YWx1ZSwgZG9uZX0gOiB7XG4gICAgICAgICAgICB2YWx1ZTogaXNQYWlyID8gW3dyYXAodmFsdWVbMF0pLCB3cmFwKHZhbHVlWzFdKV0gOiB3cmFwKHZhbHVlKSxcbiAgICAgICAgICAgIGRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVJlYWRvbmx5TWV0aG9kKHR5cGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAge1xuICAgICAgICBjb25zdCBrZXkgPSBhcmdzWzBdID8gYG9uIGtleSBcIiR7YXJnc1swXX1cIiBgIDogYGA7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtzaGFyZWQuY2FwaXRhbGl6ZSh0eXBlKX0gb3BlcmF0aW9uICR7a2V5fWZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRvUmF3Mih0aGlzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZSA9PT0gXCJkZWxldGVcIiA/IGZhbHNlIDogdGhpcztcbiAgICB9O1xuICB9XG4gIHZhciBtdXRhYmxlSW5zdHJ1bWVudGF0aW9ucyA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5KTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcyk7XG4gICAgfSxcbiAgICBoYXM6IGhhcyQxLFxuICAgIGFkZCxcbiAgICBzZXQ6IHNldCQxLFxuICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgY2xlYXIsXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaChmYWxzZSwgZmFsc2UpXG4gIH07XG4gIHZhciBzaGFsbG93SW5zdHJ1bWVudGF0aW9ucyA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgIH0sXG4gICAgaGFzOiBoYXMkMSxcbiAgICBhZGQsXG4gICAgc2V0OiBzZXQkMSxcbiAgICBkZWxldGU6IGRlbGV0ZUVudHJ5LFxuICAgIGNsZWFyLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2goZmFsc2UsIHRydWUpXG4gIH07XG4gIHZhciByZWFkb25seUluc3RydW1lbnRhdGlvbnMgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGhhcyQxLmNhbGwodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJhZGRcIiksXG4gICAgc2V0OiBjcmVhdGVSZWFkb25seU1ldGhvZChcInNldFwiKSxcbiAgICBkZWxldGU6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFwiZGVsZXRlXCIpLFxuICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImNsZWFyXCIpLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2godHJ1ZSwgZmFsc2UpXG4gIH07XG4gIHZhciBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIHRydWUsIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBoYXMkMS5jYWxsKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBhZGQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFwiYWRkXCIpLFxuICAgIHNldDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJzZXRcIiksXG4gICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImRlbGV0ZVwiKSxcbiAgICBjbGVhcjogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJjbGVhclwiKSxcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKHRydWUsIHRydWUpXG4gIH07XG4gIHZhciBpdGVyYXRvck1ldGhvZHMgPSBbXCJrZXlzXCIsIFwidmFsdWVzXCIsIFwiZW50cmllc1wiLCBTeW1ib2wuaXRlcmF0b3JdO1xuICBpdGVyYXRvck1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgbXV0YWJsZUluc3RydW1lbnRhdGlvbnNbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcbiAgICByZWFkb25seUluc3RydW1lbnRhdGlvbnNbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgZmFsc2UpO1xuICAgIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGZhbHNlLCB0cnVlKTtcbiAgICBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIHRydWUsIHRydWUpO1xuICB9KTtcbiAgZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGlzUmVhZG9ubHkyLCBzaGFsbG93KSB7XG4gICAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHNoYWxsb3cgPyBpc1JlYWRvbmx5MiA/IHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMgOiBzaGFsbG93SW5zdHJ1bWVudGF0aW9ucyA6IGlzUmVhZG9ubHkyID8gcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIDogbXV0YWJsZUluc3RydW1lbnRhdGlvbnM7XG4gICAgcmV0dXJuICh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgICByZXR1cm4gIWlzUmVhZG9ubHkyO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgICByZXR1cm4gaXNSZWFkb25seTI7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfcmF3XCIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWZsZWN0LmdldChzaGFyZWQuaGFzT3duKGluc3RydW1lbnRhdGlvbnMsIGtleSkgJiYga2V5IGluIHRhcmdldCA/IGluc3RydW1lbnRhdGlvbnMgOiB0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICAgIH07XG4gIH1cbiAgdmFyIG11dGFibGVDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gICAgZ2V0OiBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoZmFsc2UsIGZhbHNlKVxuICB9O1xuICB2YXIgc2hhbGxvd0NvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgICBnZXQ6IGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihmYWxzZSwgdHJ1ZSlcbiAgfTtcbiAgdmFyIHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICAgIGdldDogY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKHRydWUsIGZhbHNlKVxuICB9O1xuICB2YXIgc2hhbGxvd1JlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICAgIGdldDogY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKHRydWUsIHRydWUpXG4gIH07XG4gIGZ1bmN0aW9uIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KSB7XG4gICAgY29uc3QgcmF3S2V5ID0gdG9SYXcyKGtleSk7XG4gICAgaWYgKHJhd0tleSAhPT0ga2V5ICYmIGhhczIuY2FsbCh0YXJnZXQsIHJhd0tleSkpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzaGFyZWQudG9SYXdUeXBlKHRhcmdldCk7XG4gICAgICBjb25zb2xlLndhcm4oYFJlYWN0aXZlICR7dHlwZX0gY29udGFpbnMgYm90aCB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBvYmplY3Qke3R5cGUgPT09IGBNYXBgID8gYCBhcyBrZXlzYCA6IGBgfSwgd2hpY2ggY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW5jaWVzLiBBdm9pZCBkaWZmZXJlbnRpYXRpbmcgYmV0d2VlbiB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiBhbiBvYmplY3QgYW5kIG9ubHkgdXNlIHRoZSByZWFjdGl2ZSB2ZXJzaW9uIGlmIHBvc3NpYmxlLmApO1xuICAgIH1cbiAgfVxuICB2YXIgcmVhY3RpdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgc2hhbGxvd1JlYWN0aXZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHJlYWRvbmx5TWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHNoYWxsb3dSZWFkb25seU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIGZ1bmN0aW9uIHRhcmdldFR5cGVNYXAocmF3VHlwZSkge1xuICAgIHN3aXRjaCAocmF3VHlwZSkge1xuICAgICAgY2FzZSBcIk9iamVjdFwiOlxuICAgICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBcIk1hcFwiOlxuICAgICAgY2FzZSBcIlNldFwiOlxuICAgICAgY2FzZSBcIldlYWtNYXBcIjpcbiAgICAgIGNhc2UgXCJXZWFrU2V0XCI6XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldFRhcmdldFR5cGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVbXCJfX3Zfc2tpcFwiXSB8fCAhT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgPyAwIDogdGFyZ2V0VHlwZU1hcChzaGFyZWQudG9SYXdUeXBlKHZhbHVlKSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVhY3RpdmUzKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0W1wiX192X2lzUmVhZG9ubHlcIl0pIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGZhbHNlLCBtdXRhYmxlSGFuZGxlcnMsIG11dGFibGVDb2xsZWN0aW9uSGFuZGxlcnMsIHJlYWN0aXZlTWFwKTtcbiAgfVxuICBmdW5jdGlvbiBzaGFsbG93UmVhY3RpdmUodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgZmFsc2UsIHNoYWxsb3dSZWFjdGl2ZUhhbmRsZXJzLCBzaGFsbG93Q29sbGVjdGlvbkhhbmRsZXJzLCBzaGFsbG93UmVhY3RpdmVNYXApO1xuICB9XG4gIGZ1bmN0aW9uIHJlYWRvbmx5KHRhcmdldCkge1xuICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIHRydWUsIHJlYWRvbmx5SGFuZGxlcnMsIHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzLCByZWFkb25seU1hcCk7XG4gIH1cbiAgZnVuY3Rpb24gc2hhbGxvd1JlYWRvbmx5KHRhcmdldCkge1xuICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIHRydWUsIHNoYWxsb3dSZWFkb25seUhhbmRsZXJzLCBzaGFsbG93UmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMsIHNoYWxsb3dSZWFkb25seU1hcCk7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCBpc1JlYWRvbmx5MiwgYmFzZUhhbmRsZXJzLCBjb2xsZWN0aW9uSGFuZGxlcnMsIHByb3h5TWFwKSB7XG4gICAgaWYgKCFzaGFyZWQuaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAge1xuICAgICAgICBjb25zb2xlLndhcm4oYHZhbHVlIGNhbm5vdCBiZSBtYWRlIHJlYWN0aXZlOiAke1N0cmluZyh0YXJnZXQpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgaWYgKHRhcmdldFtcIl9fdl9yYXdcIl0gJiYgIShpc1JlYWRvbmx5MiAmJiB0YXJnZXRbXCJfX3ZfaXNSZWFjdGl2ZVwiXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbnN0IGV4aXN0aW5nUHJveHkgPSBwcm94eU1hcC5nZXQodGFyZ2V0KTtcbiAgICBpZiAoZXhpc3RpbmdQcm94eSkge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nUHJveHk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFR5cGUgPSBnZXRUYXJnZXRUeXBlKHRhcmdldCk7XG4gICAgaWYgKHRhcmdldFR5cGUgPT09IDApIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgdGFyZ2V0VHlwZSA9PT0gMiA/IGNvbGxlY3Rpb25IYW5kbGVycyA6IGJhc2VIYW5kbGVycyk7XG4gICAgcHJveHlNYXAuc2V0KHRhcmdldCwgcHJveHkpO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuICBmdW5jdGlvbiBpc1JlYWN0aXZlMih2YWx1ZSkge1xuICAgIGlmIChpc1JlYWRvbmx5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGlzUmVhY3RpdmUyKHZhbHVlW1wiX192X3Jhd1wiXSk7XG4gICAgfVxuICAgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZVtcIl9fdl9pc1JlYWN0aXZlXCJdKTtcbiAgfVxuICBmdW5jdGlvbiBpc1JlYWRvbmx5KHZhbHVlKSB7XG4gICAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlW1wiX192X2lzUmVhZG9ubHlcIl0pO1xuICB9XG4gIGZ1bmN0aW9uIGlzUHJveHkodmFsdWUpIHtcbiAgICByZXR1cm4gaXNSZWFjdGl2ZTIodmFsdWUpIHx8IGlzUmVhZG9ubHkodmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIHRvUmF3MihvYnNlcnZlZCkge1xuICAgIHJldHVybiBvYnNlcnZlZCAmJiB0b1JhdzIob2JzZXJ2ZWRbXCJfX3ZfcmF3XCJdKSB8fCBvYnNlcnZlZDtcbiAgfVxuICBmdW5jdGlvbiBtYXJrUmF3KHZhbHVlKSB7XG4gICAgc2hhcmVkLmRlZih2YWx1ZSwgXCJfX3Zfc2tpcFwiLCB0cnVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGNvbnZlcnQgPSAodmFsKSA9PiBzaGFyZWQuaXNPYmplY3QodmFsKSA/IHJlYWN0aXZlMyh2YWwpIDogdmFsO1xuICBmdW5jdGlvbiBpc1JlZihyKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4ociAmJiByLl9fdl9pc1JlZiA9PT0gdHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVmKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJlZih2YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gc2hhbGxvd1JlZih2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVSZWYodmFsdWUsIHRydWUpO1xuICB9XG4gIHZhciBSZWZJbXBsID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKF9yYXdWYWx1ZSwgX3NoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgdGhpcy5fcmF3VmFsdWUgPSBfcmF3VmFsdWU7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gX3NoYWxsb3c7XG4gICAgICB0aGlzLl9fdl9pc1JlZiA9IHRydWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IF9zaGFsbG93ID8gX3Jhd1ZhbHVlIDogY29udmVydChfcmF3VmFsdWUpO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICB0cmFjayh0b1JhdzIodGhpcyksIFwiZ2V0XCIsIFwidmFsdWVcIik7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICAgIGlmIChzaGFyZWQuaGFzQ2hhbmdlZCh0b1JhdzIobmV3VmFsKSwgdGhpcy5fcmF3VmFsdWUpKSB7XG4gICAgICAgIHRoaXMuX3Jhd1ZhbHVlID0gbmV3VmFsO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3NoYWxsb3cgPyBuZXdWYWwgOiBjb252ZXJ0KG5ld1ZhbCk7XG4gICAgICAgIHRyaWdnZXIodG9SYXcyKHRoaXMpLCBcInNldFwiLCBcInZhbHVlXCIsIG5ld1ZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBjcmVhdGVSZWYocmF3VmFsdWUsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgIGlmIChpc1JlZihyYXdWYWx1ZSkpIHtcbiAgICAgIHJldHVybiByYXdWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWZJbXBsKHJhd1ZhbHVlLCBzaGFsbG93KTtcbiAgfVxuICBmdW5jdGlvbiB0cmlnZ2VyUmVmKHJlZjIpIHtcbiAgICB0cmlnZ2VyKHRvUmF3MihyZWYyKSwgXCJzZXRcIiwgXCJ2YWx1ZVwiLCByZWYyLnZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiB1bnJlZihyZWYyKSB7XG4gICAgcmV0dXJuIGlzUmVmKHJlZjIpID8gcmVmMi52YWx1ZSA6IHJlZjI7XG4gIH1cbiAgdmFyIHNoYWxsb3dVbndyYXBIYW5kbGVycyA9IHtcbiAgICBnZXQ6ICh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpID0+IHVucmVmKFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcikpLFxuICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICBpZiAoaXNSZWYob2xkVmFsdWUpICYmICFpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgb2xkVmFsdWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBwcm94eVJlZnMob2JqZWN0V2l0aFJlZnMpIHtcbiAgICByZXR1cm4gaXNSZWFjdGl2ZTIob2JqZWN0V2l0aFJlZnMpID8gb2JqZWN0V2l0aFJlZnMgOiBuZXcgUHJveHkob2JqZWN0V2l0aFJlZnMsIHNoYWxsb3dVbndyYXBIYW5kbGVycyk7XG4gIH1cbiAgdmFyIEN1c3RvbVJlZkltcGwgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZmFjdG9yeSkge1xuICAgICAgdGhpcy5fX3ZfaXNSZWYgPSB0cnVlO1xuICAgICAgY29uc3Qge2dldDogZ2V0Mywgc2V0OiBzZXQzfSA9IGZhY3RvcnkoKCkgPT4gdHJhY2sodGhpcywgXCJnZXRcIiwgXCJ2YWx1ZVwiKSwgKCkgPT4gdHJpZ2dlcih0aGlzLCBcInNldFwiLCBcInZhbHVlXCIpKTtcbiAgICAgIHRoaXMuX2dldCA9IGdldDM7XG4gICAgICB0aGlzLl9zZXQgPSBzZXQzO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0KCk7XG4gICAgfVxuICAgIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICAgIHRoaXMuX3NldChuZXdWYWwpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gY3VzdG9tUmVmKGZhY3RvcnkpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbVJlZkltcGwoZmFjdG9yeSk7XG4gIH1cbiAgZnVuY3Rpb24gdG9SZWZzKG9iamVjdCkge1xuICAgIGlmICghaXNQcm94eShvYmplY3QpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYHRvUmVmcygpIGV4cGVjdHMgYSByZWFjdGl2ZSBvYmplY3QgYnV0IHJlY2VpdmVkIGEgcGxhaW4gb25lLmApO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSBzaGFyZWQuaXNBcnJheShvYmplY3QpID8gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpIDoge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICByZXRba2V5XSA9IHRvUmVmKG9iamVjdCwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICB2YXIgT2JqZWN0UmVmSW1wbCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihfb2JqZWN0LCBfa2V5KSB7XG4gICAgICB0aGlzLl9vYmplY3QgPSBfb2JqZWN0O1xuICAgICAgdGhpcy5fa2V5ID0gX2tleTtcbiAgICAgIHRoaXMuX192X2lzUmVmID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdFt0aGlzLl9rZXldO1xuICAgIH1cbiAgICBzZXQgdmFsdWUobmV3VmFsKSB7XG4gICAgICB0aGlzLl9vYmplY3RbdGhpcy5fa2V5XSA9IG5ld1ZhbDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIHRvUmVmKG9iamVjdCwga2V5KSB7XG4gICAgcmV0dXJuIGlzUmVmKG9iamVjdFtrZXldKSA/IG9iamVjdFtrZXldIDogbmV3IE9iamVjdFJlZkltcGwob2JqZWN0LCBrZXkpO1xuICB9XG4gIHZhciBDb21wdXRlZFJlZkltcGwgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZ2V0dGVyLCBfc2V0dGVyLCBpc1JlYWRvbmx5Mikge1xuICAgICAgdGhpcy5fc2V0dGVyID0gX3NldHRlcjtcbiAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuX192X2lzUmVmID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWZmZWN0ID0gZWZmZWN0MyhnZXR0ZXIsIHtcbiAgICAgICAgbGF6eTogdHJ1ZSxcbiAgICAgICAgc2NoZWR1bGVyOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9kaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdHJpZ2dlcih0b1JhdzIodGhpcyksIFwic2V0XCIsIFwidmFsdWVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXNbXCJfX3ZfaXNSZWFkb25seVwiXSA9IGlzUmVhZG9ubHkyO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICBjb25zdCBzZWxmMiA9IHRvUmF3Mih0aGlzKTtcbiAgICAgIGlmIChzZWxmMi5fZGlydHkpIHtcbiAgICAgICAgc2VsZjIuX3ZhbHVlID0gdGhpcy5lZmZlY3QoKTtcbiAgICAgICAgc2VsZjIuX2RpcnR5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0cmFjayhzZWxmMiwgXCJnZXRcIiwgXCJ2YWx1ZVwiKTtcbiAgICAgIHJldHVybiBzZWxmMi5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZShuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fc2V0dGVyKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGNvbXB1dGVkKGdldHRlck9yT3B0aW9ucykge1xuICAgIGxldCBnZXR0ZXI7XG4gICAgbGV0IHNldHRlcjtcbiAgICBpZiAoc2hhcmVkLmlzRnVuY3Rpb24oZ2V0dGVyT3JPcHRpb25zKSkge1xuICAgICAgZ2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zO1xuICAgICAgc2V0dGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJXcml0ZSBvcGVyYXRpb24gZmFpbGVkOiBjb21wdXRlZCB2YWx1ZSBpcyByZWFkb25seVwiKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldHRlciA9IGdldHRlck9yT3B0aW9ucy5nZXQ7XG4gICAgICBzZXR0ZXIgPSBnZXR0ZXJPck9wdGlvbnMuc2V0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbXB1dGVkUmVmSW1wbChnZXR0ZXIsIHNldHRlciwgc2hhcmVkLmlzRnVuY3Rpb24oZ2V0dGVyT3JPcHRpb25zKSB8fCAhZ2V0dGVyT3JPcHRpb25zLnNldCk7XG4gIH1cbiAgZXhwb3J0cy5JVEVSQVRFX0tFWSA9IElURVJBVEVfS0VZO1xuICBleHBvcnRzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gIGV4cG9ydHMuY3VzdG9tUmVmID0gY3VzdG9tUmVmO1xuICBleHBvcnRzLmVmZmVjdCA9IGVmZmVjdDM7XG4gIGV4cG9ydHMuZW5hYmxlVHJhY2tpbmcgPSBlbmFibGVUcmFja2luZztcbiAgZXhwb3J0cy5pc1Byb3h5ID0gaXNQcm94eTtcbiAgZXhwb3J0cy5pc1JlYWN0aXZlID0gaXNSZWFjdGl2ZTI7XG4gIGV4cG9ydHMuaXNSZWFkb25seSA9IGlzUmVhZG9ubHk7XG4gIGV4cG9ydHMuaXNSZWYgPSBpc1JlZjtcbiAgZXhwb3J0cy5tYXJrUmF3ID0gbWFya1JhdztcbiAgZXhwb3J0cy5wYXVzZVRyYWNraW5nID0gcGF1c2VUcmFja2luZztcbiAgZXhwb3J0cy5wcm94eVJlZnMgPSBwcm94eVJlZnM7XG4gIGV4cG9ydHMucmVhY3RpdmUgPSByZWFjdGl2ZTM7XG4gIGV4cG9ydHMucmVhZG9ubHkgPSByZWFkb25seTtcbiAgZXhwb3J0cy5yZWYgPSByZWY7XG4gIGV4cG9ydHMucmVzZXRUcmFja2luZyA9IHJlc2V0VHJhY2tpbmc7XG4gIGV4cG9ydHMuc2hhbGxvd1JlYWN0aXZlID0gc2hhbGxvd1JlYWN0aXZlO1xuICBleHBvcnRzLnNoYWxsb3dSZWFkb25seSA9IHNoYWxsb3dSZWFkb25seTtcbiAgZXhwb3J0cy5zaGFsbG93UmVmID0gc2hhbGxvd1JlZjtcbiAgZXhwb3J0cy5zdG9wID0gc3RvcDI7XG4gIGV4cG9ydHMudG9SYXcgPSB0b1JhdzI7XG4gIGV4cG9ydHMudG9SZWYgPSB0b1JlZjtcbiAgZXhwb3J0cy50b1JlZnMgPSB0b1JlZnM7XG4gIGV4cG9ydHMudHJhY2sgPSB0cmFjaztcbiAgZXhwb3J0cy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgZXhwb3J0cy50cmlnZ2VyUmVmID0gdHJpZ2dlclJlZjtcbiAgZXhwb3J0cy51bnJlZiA9IHVucmVmO1xufSk7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3JlYWN0aXZpdHkvaW5kZXguanNcbnZhciByZXF1aXJlX3JlYWN0aXZpdHkgPSBfX2NvbW1vbkpTKChleHBvcnRzLCBtb2R1bGUpID0+IHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmIChmYWxzZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmVfcmVhY3Rpdml0eV9janMoKTtcbiAgfVxufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zY2hlZHVsZXIuanNcbnZhciBmbHVzaFBlbmRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIHF1ZXVlID0gW107XG5mdW5jdGlvbiBzY2hlZHVsZXIoY2FsbGJhY2spIHtcbiAgcXVldWVKb2IoY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gcXVldWVKb2Ioam9iKSB7XG4gIGlmICghcXVldWUuaW5jbHVkZXMoam9iKSlcbiAgICBxdWV1ZS5wdXNoKGpvYik7XG4gIHF1ZXVlRmx1c2goKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlRmx1c2goKSB7XG4gIGlmICghZmx1c2hpbmcgJiYgIWZsdXNoUGVuZGluZykge1xuICAgIGZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgcXVldWVNaWNyb3Rhc2soZmx1c2hKb2JzKTtcbiAgfVxufVxuZnVuY3Rpb24gZmx1c2hKb2JzKCkge1xuICBmbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0oKTtcbiAgfVxuICBxdWV1ZS5sZW5ndGggPSAwO1xuICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvcmVhY3Rpdml0eS5qc1xudmFyIHJlYWN0aXZlO1xudmFyIGVmZmVjdDtcbnZhciByZWxlYXNlO1xudmFyIHJhdztcbnZhciBzaG91bGRTY2hlZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlRWZmZWN0U2NoZWR1bGluZyhjYWxsYmFjaykge1xuICBzaG91bGRTY2hlZHVsZSA9IGZhbHNlO1xuICBjYWxsYmFjaygpO1xuICBzaG91bGRTY2hlZHVsZSA9IHRydWU7XG59XG5mdW5jdGlvbiBzZXRSZWFjdGl2aXR5RW5naW5lKGVuZ2luZSkge1xuICByZWFjdGl2ZSA9IGVuZ2luZS5yZWFjdGl2ZTtcbiAgcmVsZWFzZSA9IGVuZ2luZS5yZWxlYXNlO1xuICBlZmZlY3QgPSAoY2FsbGJhY2spID0+IGVuZ2luZS5lZmZlY3QoY2FsbGJhY2ssIHtzY2hlZHVsZXI6ICh0YXNrKSA9PiB7XG4gICAgaWYgKHNob3VsZFNjaGVkdWxlKSB7XG4gICAgICBzY2hlZHVsZXIodGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2soKTtcbiAgICB9XG4gIH19KTtcbiAgcmF3ID0gZW5naW5lLnJhdztcbn1cbmZ1bmN0aW9uIG92ZXJyaWRlRWZmZWN0KG92ZXJyaWRlKSB7XG4gIGVmZmVjdCA9IG92ZXJyaWRlO1xufVxuZnVuY3Rpb24gZWxlbWVudEJvdW5kRWZmZWN0KGVsKSB7XG4gIGxldCBjbGVhbnVwID0gKCkgPT4ge1xuICB9O1xuICBsZXQgd3JhcHBlZEVmZmVjdCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGxldCBlZmZlY3RSZWZlcmVuY2UgPSBlZmZlY3QoY2FsbGJhY2spO1xuICAgIGlmICghZWwuX3hfZWZmZWN0cykge1xuICAgICAgZWwuX3hfZWZmZWN0cyA9IG5ldyBTZXQoKTtcbiAgICAgIGVsLl94X3J1bkVmZmVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGVsLl94X2VmZmVjdHMuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsLl94X2VmZmVjdHMuYWRkKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIGlmIChlZmZlY3RSZWZlcmVuY2UgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZWwuX3hfZWZmZWN0cy5kZWxldGUoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICAgIHJlbGVhc2UoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gW3dyYXBwZWRFZmZlY3QsICgpID0+IHtcbiAgICBjbGVhbnVwKCk7XG4gIH1dO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbXV0YXRpb24uanNcbnZhciBvbkF0dHJpYnV0ZUFkZGVkcyA9IFtdO1xudmFyIG9uRWxSZW1vdmVkcyA9IFtdO1xudmFyIG9uRWxBZGRlZHMgPSBbXTtcbmZ1bmN0aW9uIG9uRWxBZGRlZChjYWxsYmFjaykge1xuICBvbkVsQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25FbFJlbW92ZWQoY2FsbGJhY2spIHtcbiAgb25FbFJlbW92ZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25BdHRyaWJ1dGVzQWRkZWQoY2FsbGJhY2spIHtcbiAgb25BdHRyaWJ1dGVBZGRlZHMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvbkF0dHJpYnV0ZVJlbW92ZWQoZWwsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpXG4gICAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMgPSB7fTtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXSlcbiAgICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXSA9IFtdO1xuICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGNsZWFudXBBdHRyaWJ1dGVzKGVsLCBuYW1lcykge1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKVxuICAgIHJldHVybjtcbiAgT2JqZWN0LmVudHJpZXMoZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpLmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICBpZiAobmFtZXMgPT09IHZvaWQgMCB8fCBuYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgICAgIGRlbGV0ZSBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufVxudmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGUpO1xudmFyIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlfSk7XG4gIGN1cnJlbnRseU9ic2VydmluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zKCkge1xuICBmbHVzaE9ic2VydmVyKCk7XG4gIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgY3VycmVudGx5T2JzZXJ2aW5nID0gZmFsc2U7XG59XG52YXIgcmVjb3JkUXVldWUgPSBbXTtcbnZhciB3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlID0gZmFsc2U7XG5mdW5jdGlvbiBmbHVzaE9ic2VydmVyKCkge1xuICByZWNvcmRRdWV1ZSA9IHJlY29yZFF1ZXVlLmNvbmNhdChvYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgaWYgKHJlY29yZFF1ZXVlLmxlbmd0aCAmJiAhd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSkge1xuICAgIHdpbGxQcm9jZXNzUmVjb3JkUXVldWUgPSB0cnVlO1xuICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgIHByb2Nlc3NSZWNvcmRRdWV1ZSgpO1xuICAgICAgd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzUmVjb3JkUXVldWUoKSB7XG4gIG9uTXV0YXRlKHJlY29yZFF1ZXVlKTtcbiAgcmVjb3JkUXVldWUubGVuZ3RoID0gMDtcbn1cbmZ1bmN0aW9uIG11dGF0ZURvbShjYWxsYmFjaykge1xuICBpZiAoIWN1cnJlbnRseU9ic2VydmluZylcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgc3RvcE9ic2VydmluZ011dGF0aW9ucygpO1xuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbnZhciBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xuZnVuY3Rpb24gZGVmZXJNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IGZhbHNlO1xuICBvbk11dGF0ZShkZWZlcnJlZE11dGF0aW9ucyk7XG4gIGRlZmVycmVkTXV0YXRpb25zID0gW107XG59XG5mdW5jdGlvbiBvbk11dGF0ZShtdXRhdGlvbnMpIHtcbiAgaWYgKGlzQ29sbGVjdGluZykge1xuICAgIGRlZmVycmVkTXV0YXRpb25zID0gZGVmZXJyZWRNdXRhdGlvbnMuY29uY2F0KG11dGF0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBhZGRlZE5vZGVzID0gW107XG4gIGxldCByZW1vdmVkTm9kZXMgPSBbXTtcbiAgbGV0IGFkZGVkQXR0cmlidXRlcyA9IG5ldyBNYXAoKTtcbiAgbGV0IHJlbW92ZWRBdHRyaWJ1dGVzID0gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtdXRhdGlvbnNbaV0udGFyZ2V0Ll94X2lnbm9yZU11dGF0aW9uT2JzZXJ2ZXIpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgIG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgYWRkZWROb2Rlcy5wdXNoKG5vZGUpKTtcbiAgICAgIG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiByZW1vdmVkTm9kZXMucHVzaChub2RlKSk7XG4gICAgfVxuICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgIGxldCBlbCA9IG11dGF0aW9uc1tpXS50YXJnZXQ7XG4gICAgICBsZXQgbmFtZSA9IG11dGF0aW9uc1tpXS5hdHRyaWJ1dGVOYW1lO1xuICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb25zW2ldLm9sZFZhbHVlO1xuICAgICAgbGV0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFhZGRlZEF0dHJpYnV0ZXMuaGFzKGVsKSlcbiAgICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIGFkZGVkQXR0cmlidXRlcy5nZXQoZWwpLnB1c2goe25hbWUsIHZhbHVlOiBlbC5nZXRBdHRyaWJ1dGUobmFtZSl9KTtcbiAgICAgIH07XG4gICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlbW92ZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaChuYW1lKTtcbiAgICAgIH07XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpICYmIG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGFkZCgpO1xuICAgICAgfSBlbHNlIGlmIChlbC5oYXNBdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIGFkZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbW92ZWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJzLCBlbCkgPT4ge1xuICAgIGNsZWFudXBBdHRyaWJ1dGVzKGVsLCBhdHRycyk7XG4gIH0pO1xuICBhZGRlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgb25BdHRyaWJ1dGVBZGRlZHMuZm9yRWFjaCgoaSkgPT4gaShlbCwgYXR0cnMpKTtcbiAgfSk7XG4gIGZvciAobGV0IG5vZGUgb2YgYWRkZWROb2Rlcykge1xuICAgIGlmIChyZW1vdmVkTm9kZXMuaW5jbHVkZXMobm9kZSkpXG4gICAgICBjb250aW51ZTtcbiAgICBvbkVsQWRkZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICB9XG4gIGZvciAobGV0IG5vZGUgb2YgcmVtb3ZlZE5vZGVzKSB7XG4gICAgaWYgKGFkZGVkTm9kZXMuaW5jbHVkZXMobm9kZSkpXG4gICAgICBjb250aW51ZTtcbiAgICBvbkVsUmVtb3ZlZHMuZm9yRWFjaCgoaSkgPT4gaShub2RlKSk7XG4gIH1cbiAgYWRkZWROb2RlcyA9IG51bGw7XG4gIHJlbW92ZWROb2RlcyA9IG51bGw7XG4gIGFkZGVkQXR0cmlidXRlcyA9IG51bGw7XG4gIHJlbW92ZWRBdHRyaWJ1dGVzID0gbnVsbDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3Njb3BlLmpzXG5mdW5jdGlvbiBhZGRTY29wZVRvTm9kZShub2RlLCBkYXRhMiwgcmVmZXJlbmNlTm9kZSkge1xuICBub2RlLl94X2RhdGFTdGFjayA9IFtkYXRhMiwgLi4uY2xvc2VzdERhdGFTdGFjayhyZWZlcmVuY2VOb2RlIHx8IG5vZGUpXTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBub2RlLl94X2RhdGFTdGFjayA9IG5vZGUuX3hfZGF0YVN0YWNrLmZpbHRlcigoaSkgPT4gaSAhPT0gZGF0YTIpO1xuICB9O1xufVxuZnVuY3Rpb24gcmVmcmVzaFNjb3BlKGVsZW1lbnQsIHNjb3BlKSB7XG4gIGxldCBleGlzdGluZ1Njb3BlID0gZWxlbWVudC5feF9kYXRhU3RhY2tbMF07XG4gIE9iamVjdC5lbnRyaWVzKHNjb3BlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBleGlzdGluZ1Njb3BlW2tleV0gPSB2YWx1ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjbG9zZXN0RGF0YVN0YWNrKG5vZGUpIHtcbiAgaWYgKG5vZGUuX3hfZGF0YVN0YWNrKVxuICAgIHJldHVybiBub2RlLl94X2RhdGFTdGFjaztcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gY2xvc2VzdERhdGFTdGFjayhub2RlLmhvc3QpO1xuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBjbG9zZXN0RGF0YVN0YWNrKG5vZGUucGFyZW50Tm9kZSk7XG59XG5mdW5jdGlvbiBtZXJnZVByb3hpZXMob2JqZWN0cykge1xuICBsZXQgdGhpc1Byb3h5ID0gbmV3IFByb3h5KHt9LCB7XG4gICAgb3duS2V5czogKCkgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChvYmplY3RzLmZsYXRNYXAoKGkpID0+IE9iamVjdC5rZXlzKGkpKSkpO1xuICAgIH0sXG4gICAgaGFzOiAodGFyZ2V0LCBuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gb2JqZWN0cy5zb21lKChvYmopID0+IG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSk7XG4gICAgfSxcbiAgICBnZXQ6ICh0YXJnZXQsIG5hbWUpID0+IHtcbiAgICAgIHJldHVybiAob2JqZWN0cy5maW5kKChvYmopID0+IHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIG5hbWUpO1xuICAgICAgICAgIGlmIChkZXNjcmlwdG9yLmdldCAmJiBkZXNjcmlwdG9yLmdldC5feF9hbHJlYWR5Qm91bmQgfHwgZGVzY3JpcHRvci5zZXQgJiYgZGVzY3JpcHRvci5zZXQuX3hfYWxyZWFkeUJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKChkZXNjcmlwdG9yLmdldCB8fCBkZXNjcmlwdG9yLnNldCkgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgICBsZXQgZ2V0dGVyID0gZGVzY3JpcHRvci5nZXQ7XG4gICAgICAgICAgICBsZXQgc2V0dGVyID0gZGVzY3JpcHRvci5zZXQ7XG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBkZXNjcmlwdG9yO1xuICAgICAgICAgICAgZ2V0dGVyID0gZ2V0dGVyICYmIGdldHRlci5iaW5kKHRoaXNQcm94eSk7XG4gICAgICAgICAgICBzZXR0ZXIgPSBzZXR0ZXIgJiYgc2V0dGVyLmJpbmQodGhpc1Byb3h5KTtcbiAgICAgICAgICAgIGlmIChnZXR0ZXIpXG4gICAgICAgICAgICAgIGdldHRlci5feF9hbHJlYWR5Qm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHNldHRlcilcbiAgICAgICAgICAgICAgc2V0dGVyLl94X2FscmVhZHlCb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICAgICAgICAgIC4uLnByb3BlcnR5LFxuICAgICAgICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgICAgICAgc2V0OiBzZXR0ZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSB8fCB7fSlbbmFtZV07XG4gICAgfSxcbiAgICBzZXQ6ICh0YXJnZXQsIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgY2xvc2VzdE9iamVjdFdpdGhLZXkgPSBvYmplY3RzLmZpbmQoKG9iaikgPT4gb2JqLmhhc093blByb3BlcnR5KG5hbWUpKTtcbiAgICAgIGlmIChjbG9zZXN0T2JqZWN0V2l0aEtleSkge1xuICAgICAgICBjbG9zZXN0T2JqZWN0V2l0aEtleVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0c1tvYmplY3RzLmxlbmd0aCAtIDFdW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGhpc1Byb3h5O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaW50ZXJjZXB0b3IuanNcbmZ1bmN0aW9uIGluaXRJbnRlcmNlcHRvcnMoZGF0YTIpIHtcbiAgbGV0IGlzT2JqZWN0ID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbCAhPT0gbnVsbDtcbiAgbGV0IHJlY3Vyc2UgPSAob2JqLCBiYXNlUGF0aCA9IFwiXCIpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgbGV0IHBhdGggPSBiYXNlUGF0aCA9PT0gXCJcIiA/IGtleSA6IGAke2Jhc2VQYXRofS4ke2tleX1gO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHZhbHVlICE9PSBvYmogJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmVjdXJzZSh2YWx1ZSwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHJlY3Vyc2UoZGF0YTIpO1xufVxuZnVuY3Rpb24gaW50ZXJjZXB0b3IoY2FsbGJhY2ssIG11dGF0ZU9iaiA9ICgpID0+IHtcbn0pIHtcbiAgbGV0IG9iaiA9IHtcbiAgICBpbml0aWFsVmFsdWU6IHZvaWQgMCxcbiAgICBfeF9pbnRlcmNlcHRvcjogdHJ1ZSxcbiAgICBpbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0aGlzLmluaXRpYWxWYWx1ZSwgKCkgPT4gZ2V0KGRhdGEyLCBwYXRoKSwgKHZhbHVlKSA9PiBzZXQoZGF0YTIsIHBhdGgsIHZhbHVlKSwgcGF0aCwga2V5KTtcbiAgICB9XG4gIH07XG4gIG11dGF0ZU9iaihvYmopO1xuICByZXR1cm4gKGluaXRpYWxWYWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5pdGlhbFZhbHVlID09PSBcIm9iamVjdFwiICYmIGluaXRpYWxWYWx1ZSAhPT0gbnVsbCAmJiBpbml0aWFsVmFsdWUuX3hfaW50ZXJjZXB0b3IpIHtcbiAgICAgIGxldCBpbml0aWFsaXplID0gb2JqLmluaXRpYWxpemUuYmluZChvYmopO1xuICAgICAgb2JqLmluaXRpYWxpemUgPSAoZGF0YTIsIHBhdGgsIGtleSkgPT4ge1xuICAgICAgICBsZXQgaW5uZXJWYWx1ZSA9IGluaXRpYWxWYWx1ZS5pbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgICBvYmouaW5pdGlhbFZhbHVlID0gaW5uZXJWYWx1ZTtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICByZXR1cm4gcGF0aC5zcGxpdChcIi5cIikucmVkdWNlKChjYXJyeSwgc2VnbWVudCkgPT4gY2Fycnlbc2VnbWVudF0sIG9iaik7XG59XG5mdW5jdGlvbiBzZXQob2JqLCBwYXRoLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpXG4gICAgcGF0aCA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDEpXG4gICAgb2JqW3BhdGhbMF1dID0gdmFsdWU7XG4gIGVsc2UgaWYgKHBhdGgubGVuZ3RoID09PSAwKVxuICAgIHRocm93IGVycm9yO1xuICBlbHNlIHtcbiAgICBpZiAob2JqW3BhdGhbMF1dKVxuICAgICAgcmV0dXJuIHNldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSksIHZhbHVlKTtcbiAgICBlbHNlIHtcbiAgICAgIG9ialtwYXRoWzBdXSA9IHt9O1xuICAgICAgcmV0dXJuIHNldChvYmpbcGF0aFswXV0sIHBhdGguc2xpY2UoMSksIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy5qc1xudmFyIG1hZ2ljcyA9IHt9O1xuZnVuY3Rpb24gbWFnaWMobmFtZSwgY2FsbGJhY2spIHtcbiAgbWFnaWNzW25hbWVdID0gY2FsbGJhY2s7XG59XG5mdW5jdGlvbiBpbmplY3RNYWdpY3Mob2JqLCBlbCkge1xuICBPYmplY3QuZW50cmllcyhtYWdpY3MpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBgJCR7bmFtZX1gLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlbCwge0FscGluZTogYWxwaW5lX2RlZmF1bHQsIGludGVyY2VwdG9yfSk7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9ldmFsdWF0b3IuanNcbmZ1bmN0aW9uIGV2YWx1YXRlKGVsLCBleHByZXNzaW9uLCBleHRyYXMgPSB7fSkge1xuICBsZXQgcmVzdWx0O1xuICBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSgodmFsdWUpID0+IHJlc3VsdCA9IHZhbHVlLCBleHRyYXMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZXZhbHVhdGVMYXRlciguLi5hcmdzKSB7XG4gIHJldHVybiB0aGVFdmFsdWF0b3JGdW5jdGlvbiguLi5hcmdzKTtcbn1cbnZhciB0aGVFdmFsdWF0b3JGdW5jdGlvbiA9IG5vcm1hbEV2YWx1YXRvcjtcbmZ1bmN0aW9uIHNldEV2YWx1YXRvcihuZXdFdmFsdWF0b3IpIHtcbiAgdGhlRXZhbHVhdG9yRnVuY3Rpb24gPSBuZXdFdmFsdWF0b3I7XG59XG5mdW5jdGlvbiBub3JtYWxFdmFsdWF0b3IoZWwsIGV4cHJlc3Npb24pIHtcbiAgbGV0IG92ZXJyaWRkZW5NYWdpY3MgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKG92ZXJyaWRkZW5NYWdpY3MsIGVsKTtcbiAgbGV0IGRhdGFTdGFjayA9IFtvdmVycmlkZGVuTWFnaWNzLCAuLi5jbG9zZXN0RGF0YVN0YWNrKGVsKV07XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZXhwcmVzc2lvbik7XG4gIH1cbiAgbGV0IGV2YWx1YXRvciA9IGdlbmVyYXRlRXZhbHVhdG9yRnJvbVN0cmluZyhkYXRhU3RhY2ssIGV4cHJlc3Npb24pO1xuICByZXR1cm4gdHJ5Q2F0Y2guYmluZChudWxsLCBlbCwgZXhwcmVzc2lvbiwgZXZhbHVhdG9yKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZnVuYykge1xuICByZXR1cm4gKHJlY2VpdmVyID0gKCkgPT4ge1xuICB9LCB7c2NvcGUgPSB7fSwgcGFyYW1zID0gW119ID0ge30pID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gZnVuYy5hcHBseShtZXJnZVByb3hpZXMoW3Njb3BlLCAuLi5kYXRhU3RhY2tdKSwgcGFyYW1zKTtcbiAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCByZXN1bHQpO1xuICB9O1xufVxudmFyIGV2YWx1YXRvck1lbW8gPSB7fTtcbmZ1bmN0aW9uIGdlbmVyYXRlRnVuY3Rpb25Gcm9tU3RyaW5nKGV4cHJlc3Npb24pIHtcbiAgaWYgKGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0pIHtcbiAgICByZXR1cm4gZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXTtcbiAgfVxuICBsZXQgQXN5bmNGdW5jdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpIHtcbiAgfSkuY29uc3RydWN0b3I7XG4gIGxldCByaWdodFNpZGVTYWZlRXhwcmVzc2lvbiA9IC9eW1xcblxcc10qaWYuKlxcKC4qXFwpLy50ZXN0KGV4cHJlc3Npb24pIHx8IC9eKGxldHxjb25zdCkvLnRlc3QoZXhwcmVzc2lvbikgPyBgKCgpID0+IHsgJHtleHByZXNzaW9ufSB9KSgpYCA6IGV4cHJlc3Npb247XG4gIGxldCBmdW5jID0gbmV3IEFzeW5jRnVuY3Rpb24oW1wiX19zZWxmXCIsIFwic2NvcGVcIl0sIGB3aXRoIChzY29wZSkgeyBfX3NlbGYucmVzdWx0ID0gJHtyaWdodFNpZGVTYWZlRXhwcmVzc2lvbn0gfTsgX19zZWxmLmZpbmlzaGVkID0gdHJ1ZTsgcmV0dXJuIF9fc2VsZi5yZXN1bHQ7YCk7XG4gIGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0gPSBmdW5jO1xuICByZXR1cm4gZnVuYztcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbVN0cmluZyhkYXRhU3RhY2ssIGV4cHJlc3Npb24pIHtcbiAgbGV0IGZ1bmMgPSBnZW5lcmF0ZUZ1bmN0aW9uRnJvbVN0cmluZyhleHByZXNzaW9uKTtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwge3Njb3BlID0ge30sIHBhcmFtcyA9IFtdfSA9IHt9KSA9PiB7XG4gICAgZnVuYy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgZnVuYy5maW5pc2hlZCA9IGZhbHNlO1xuICAgIGxldCBjb21wbGV0ZVNjb3BlID0gbWVyZ2VQcm94aWVzKFtzY29wZSwgLi4uZGF0YVN0YWNrXSk7XG4gICAgbGV0IHByb21pc2UgPSBmdW5jKGZ1bmMsIGNvbXBsZXRlU2NvcGUpO1xuICAgIGlmIChmdW5jLmZpbmlzaGVkKSB7XG4gICAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCBmdW5jLnJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgcmVzdWx0LCBjb21wbGV0ZVNjb3BlLCBwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgdmFsdWUsIHNjb3BlLCBwYXJhbXMpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlLmFwcGx5KHNjb3BlLCBwYXJhbXMpO1xuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXN1bHQudGhlbigoaSkgPT4gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgaSwgc2NvcGUsIHBhcmFtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlaXZlcihyZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZWNlaXZlcih2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyeUNhdGNoKGVsLCBleHByZXNzaW9uLCBjYWxsYmFjaywgLi4uYXJncykge1xuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihgQWxwaW5lIEV4cHJlc3Npb24gRXJyb3I6ICR7ZS5tZXNzYWdlfVxuXG5FeHByZXNzaW9uOiBcIiR7ZXhwcmVzc2lvbn1cIlxuXG5gLCBlbCk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy5qc1xudmFyIHByZWZpeEFzU3RyaW5nID0gXCJ4LVwiO1xuZnVuY3Rpb24gcHJlZml4KHN1YmplY3QgPSBcIlwiKSB7XG4gIHJldHVybiBwcmVmaXhBc1N0cmluZyArIHN1YmplY3Q7XG59XG5mdW5jdGlvbiBzZXRQcmVmaXgobmV3UHJlZml4KSB7XG4gIHByZWZpeEFzU3RyaW5nID0gbmV3UHJlZml4O1xufVxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge307XG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY2FsbGJhY2spIHtcbiAgZGlyZWN0aXZlSGFuZGxlcnNbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGRpcmVjdGl2ZXMoZWwsIGF0dHJpYnV0ZXMsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpIHtcbiAgbGV0IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwID0ge307XG4gIGxldCBkaXJlY3RpdmVzMiA9IEFycmF5LmZyb20oYXR0cmlidXRlcykubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKChuZXdOYW1lLCBvbGROYW1lKSA9PiB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcFtuZXdOYW1lXSA9IG9sZE5hbWUpKS5maWx0ZXIob3V0Tm9uQWxwaW5lQXR0cmlidXRlcykubWFwKHRvUGFyc2VkRGlyZWN0aXZlcyh0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCwgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkpLnNvcnQoYnlQcmlvcml0eSk7XG4gIHJldHVybiBkaXJlY3RpdmVzMi5tYXAoKGRpcmVjdGl2ZTIpID0+IHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlSGFuZGxlcihlbCwgZGlyZWN0aXZlMik7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlc09ubHkoYXR0cmlidXRlcykge1xuICByZXR1cm4gQXJyYXkuZnJvbShhdHRyaWJ1dGVzKS5tYXAodG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoKSkuZmlsdGVyKChhdHRyKSA9PiAhb3V0Tm9uQWxwaW5lQXR0cmlidXRlcyhhdHRyKSk7XG59XG52YXIgaXNEZWZlcnJpbmdIYW5kbGVycyA9IGZhbHNlO1xudmFyIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MgPSBuZXcgTWFwKCk7XG52YXIgY3VycmVudEhhbmRsZXJTdGFja0tleSA9IFN5bWJvbCgpO1xuZnVuY3Rpb24gZGVmZXJIYW5kbGluZ0RpcmVjdGl2ZXMoY2FsbGJhY2spIHtcbiAgaXNEZWZlcnJpbmdIYW5kbGVycyA9IHRydWU7XG4gIGxldCBrZXkgPSBTeW1ib2woKTtcbiAgY3VycmVudEhhbmRsZXJTdGFja0tleSA9IGtleTtcbiAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5zZXQoa2V5LCBbXSk7XG4gIGxldCBmbHVzaEhhbmRsZXJzID0gKCkgPT4ge1xuICAgIHdoaWxlIChkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChrZXkpLmxlbmd0aClcbiAgICAgIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGtleSkuc2hpZnQoKSgpO1xuICAgIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZGVsZXRlKGtleSk7XG4gIH07XG4gIGxldCBzdG9wRGVmZXJyaW5nID0gKCkgPT4ge1xuICAgIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSBmYWxzZTtcbiAgICBmbHVzaEhhbmRsZXJzKCk7XG4gIH07XG4gIGNhbGxiYWNrKGZsdXNoSGFuZGxlcnMpO1xuICBzdG9wRGVmZXJyaW5nKCk7XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVIYW5kbGVyKGVsLCBkaXJlY3RpdmUyKSB7XG4gIGxldCBub29wID0gKCkgPT4ge1xuICB9O1xuICBsZXQgaGFuZGxlcjMgPSBkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmUyLnR5cGVdIHx8IG5vb3A7XG4gIGxldCBjbGVhbnVwcyA9IFtdO1xuICBsZXQgY2xlYW51cCA9IChjYWxsYmFjaykgPT4gY2xlYW51cHMucHVzaChjYWxsYmFjayk7XG4gIGxldCBbZWZmZWN0MywgY2xlYW51cEVmZmVjdF0gPSBlbGVtZW50Qm91bmRFZmZlY3QoZWwpO1xuICBjbGVhbnVwcy5wdXNoKGNsZWFudXBFZmZlY3QpO1xuICBsZXQgdXRpbGl0aWVzID0ge1xuICAgIEFscGluZTogYWxwaW5lX2RlZmF1bHQsXG4gICAgZWZmZWN0OiBlZmZlY3QzLFxuICAgIGNsZWFudXAsXG4gICAgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlci5iaW5kKGV2YWx1YXRlTGF0ZXIsIGVsKSxcbiAgICBldmFsdWF0ZTogZXZhbHVhdGUuYmluZChldmFsdWF0ZSwgZWwpXG4gIH07XG4gIGxldCBkb0NsZWFudXAgPSAoKSA9PiBjbGVhbnVwcy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICBvbkF0dHJpYnV0ZVJlbW92ZWQoZWwsIGRpcmVjdGl2ZTIub3JpZ2luYWwsIGRvQ2xlYW51cCk7XG4gIGxldCBmdWxsSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoZWwuX3hfaWdub3JlIHx8IGVsLl94X2lnbm9yZVNlbGYpXG4gICAgICByZXR1cm47XG4gICAgaGFuZGxlcjMuaW5saW5lICYmIGhhbmRsZXIzLmlubGluZShlbCwgZGlyZWN0aXZlMiwgdXRpbGl0aWVzKTtcbiAgICBoYW5kbGVyMyA9IGhhbmRsZXIzLmJpbmQoaGFuZGxlcjMsIGVsLCBkaXJlY3RpdmUyLCB1dGlsaXRpZXMpO1xuICAgIGlzRGVmZXJyaW5nSGFuZGxlcnMgPyBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChjdXJyZW50SGFuZGxlclN0YWNrS2V5KS5wdXNoKGhhbmRsZXIzKSA6IGhhbmRsZXIzKCk7XG4gIH07XG4gIGZ1bGxIYW5kbGVyLnJ1bkNsZWFudXBzID0gZG9DbGVhbnVwO1xuICByZXR1cm4gZnVsbEhhbmRsZXI7XG59XG52YXIgc3RhcnRpbmdXaXRoID0gKHN1YmplY3QsIHJlcGxhY2VtZW50KSA9PiAoe25hbWUsIHZhbHVlfSkgPT4ge1xuICBpZiAobmFtZS5zdGFydHNXaXRoKHN1YmplY3QpKVxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2Uoc3ViamVjdCwgcmVwbGFjZW1lbnQpO1xuICByZXR1cm4ge25hbWUsIHZhbHVlfTtcbn07XG52YXIgaW50byA9IChpKSA9PiBpO1xuZnVuY3Rpb24gdG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoY2FsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIHJldHVybiAoe25hbWUsIHZhbHVlfSkgPT4ge1xuICAgIGxldCB7bmFtZTogbmV3TmFtZSwgdmFsdWU6IG5ld1ZhbHVlfSA9IGF0dHJpYnV0ZVRyYW5zZm9ybWVycy5yZWR1Y2UoKGNhcnJ5LCB0cmFuc2Zvcm0pID0+IHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oY2FycnkpO1xuICAgIH0sIHtuYW1lLCB2YWx1ZX0pO1xuICAgIGlmIChuZXdOYW1lICE9PSBuYW1lKVxuICAgICAgY2FsbGJhY2sobmV3TmFtZSwgbmFtZSk7XG4gICAgcmV0dXJuIHtuYW1lOiBuZXdOYW1lLCB2YWx1ZTogbmV3VmFsdWV9O1xuICB9O1xufVxudmFyIGF0dHJpYnV0ZVRyYW5zZm9ybWVycyA9IFtdO1xuZnVuY3Rpb24gbWFwQXR0cmlidXRlcyhjYWxsYmFjaykge1xuICBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvdXROb25BbHBpbmVBdHRyaWJ1dGVzKHtuYW1lfSkge1xuICByZXR1cm4gYWxwaW5lQXR0cmlidXRlUmVnZXgoKS50ZXN0KG5hbWUpO1xufVxudmFyIGFscGluZUF0dHJpYnV0ZVJlZ2V4ID0gKCkgPT4gbmV3IFJlZ0V4cChgXiR7cHJlZml4QXNTdHJpbmd9KFteOl4uXSspXFxcXGJgKTtcbmZ1bmN0aW9uIHRvUGFyc2VkRGlyZWN0aXZlcyh0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCwgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkge1xuICByZXR1cm4gKHtuYW1lLCB2YWx1ZX0pID0+IHtcbiAgICBsZXQgdHlwZU1hdGNoID0gbmFtZS5tYXRjaChhbHBpbmVBdHRyaWJ1dGVSZWdleCgpKTtcbiAgICBsZXQgdmFsdWVNYXRjaCA9IG5hbWUubWF0Y2goLzooW2EtekEtWjAtOVxcLTpdKykvKTtcbiAgICBsZXQgbW9kaWZpZXJzID0gbmFtZS5tYXRjaCgvXFwuW14uXFxdXSsoPz1bXlxcXV0qJCkvZykgfHwgW107XG4gICAgbGV0IG9yaWdpbmFsID0gb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSB8fCB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcFtuYW1lXSB8fCBuYW1lO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0eXBlTWF0Y2ggPyB0eXBlTWF0Y2hbMV0gOiBudWxsLFxuICAgICAgdmFsdWU6IHZhbHVlTWF0Y2ggPyB2YWx1ZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLm1hcCgoaSkgPT4gaS5yZXBsYWNlKFwiLlwiLCBcIlwiKSksXG4gICAgICBleHByZXNzaW9uOiB2YWx1ZSxcbiAgICAgIG9yaWdpbmFsXG4gICAgfTtcbiAgfTtcbn1cbnZhciBERUZBVUxUID0gXCJERUZBVUxUXCI7XG52YXIgZGlyZWN0aXZlT3JkZXIgPSBbXG4gIFwiaWdub3JlXCIsXG4gIFwicmVmXCIsXG4gIFwiZGF0YVwiLFxuICBcImJpbmRcIixcbiAgXCJpbml0XCIsXG4gIFwiZm9yXCIsXG4gIFwibW9kZWxcIixcbiAgXCJ0cmFuc2l0aW9uXCIsXG4gIFwic2hvd1wiLFxuICBcImlmXCIsXG4gIERFRkFVTFQsXG4gIFwiZWxlbWVudFwiXG5dO1xuZnVuY3Rpb24gYnlQcmlvcml0eShhLCBiKSB7XG4gIGxldCB0eXBlQSA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYS50eXBlKSA9PT0gLTEgPyBERUZBVUxUIDogYS50eXBlO1xuICBsZXQgdHlwZUIgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGIudHlwZSkgPT09IC0xID8gREVGQVVMVCA6IGIudHlwZTtcbiAgcmV0dXJuIGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YodHlwZUEpIC0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZih0eXBlQik7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9kaXNwYXRjaC5qc1xuZnVuY3Rpb24gZGlzcGF0Y2goZWwsIG5hbWUsIGRldGFpbCA9IHt9KSB7XG4gIGVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICBkZXRhaWwsXG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlXG4gIH0pKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL25leHRUaWNrLmpzXG52YXIgdGlja1N0YWNrID0gW107XG52YXIgaXNIb2xkaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaykge1xuICB0aWNrU3RhY2sucHVzaChjYWxsYmFjayk7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpc0hvbGRpbmcgfHwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWxlYXNlTmV4dFRpY2tzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVsZWFzZU5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gZmFsc2U7XG4gIHdoaWxlICh0aWNrU3RhY2subGVuZ3RoKVxuICAgIHRpY2tTdGFjay5zaGlmdCgpKCk7XG59XG5mdW5jdGlvbiBob2xkTmV4dFRpY2tzKCkge1xuICBpc0hvbGRpbmcgPSB0cnVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvd2Fsay5qc1xuZnVuY3Rpb24gd2FsayhlbCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgZWwgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgQXJyYXkuZnJvbShlbC5jaGlsZHJlbikuZm9yRWFjaCgoZWwyKSA9PiB3YWxrKGVsMiwgY2FsbGJhY2spKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNraXAgPSBmYWxzZTtcbiAgY2FsbGJhY2soZWwsICgpID0+IHNraXAgPSB0cnVlKTtcbiAgaWYgKHNraXApXG4gICAgcmV0dXJuO1xuICBsZXQgbm9kZSA9IGVsLmZpcnN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAobm9kZSkge1xuICAgIHdhbGsobm9kZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICBub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhcm4uanNcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oYEFscGluZSBXYXJuaW5nOiAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9saWZlY3ljbGUuanNcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAoIWRvY3VtZW50LmJvZHkpXG4gICAgd2FybihcIlVuYWJsZSB0byBpbml0aWFsaXplLiBUcnlpbmcgdG8gbG9hZCBBbHBpbmUgYmVmb3JlIGA8Ym9keT5gIGlzIGF2YWlsYWJsZS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGBkZWZlcmAgaW4gQWxwaW5lJ3MgYDxzY3JpcHQ+YCB0YWc/XCIpO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdFwiKTtcbiAgZGlzcGF0Y2goZG9jdW1lbnQsIFwiYWxwaW5lOmluaXRpYWxpemluZ1wiKTtcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgb25FbEFkZGVkKChlbCkgPT4gaW5pdFRyZWUoZWwsIHdhbGspKTtcbiAgb25FbFJlbW92ZWQoKGVsKSA9PiBuZXh0VGljaygoKSA9PiBkZXN0cm95VHJlZShlbCkpKTtcbiAgb25BdHRyaWJ1dGVzQWRkZWQoKGVsLCBhdHRycykgPT4ge1xuICAgIGRpcmVjdGl2ZXMoZWwsIGF0dHJzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgfSk7XG4gIGxldCBvdXROZXN0ZWRDb21wb25lbnRzID0gKGVsKSA9PiAhY2xvc2VzdFJvb3QoZWwucGFyZW50RWxlbWVudCwgdHJ1ZSk7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhbGxTZWxlY3RvcnMoKSkpLmZpbHRlcihvdXROZXN0ZWRDb21wb25lbnRzKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGluaXRUcmVlKGVsKTtcbiAgfSk7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXplZFwiKTtcbn1cbnZhciByb290U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbnZhciBpbml0U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbmZ1bmN0aW9uIHJvb3RTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhbGxTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MuY29uY2F0KGluaXRTZWxlY3RvckNhbGxiYWNrcykubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhZGRSb290U2VsZWN0b3Ioc2VsZWN0b3JDYWxsYmFjaykge1xuICByb290U2VsZWN0b3JDYWxsYmFja3MucHVzaChzZWxlY3RvckNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFkZEluaXRTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIGluaXRTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xvc2VzdFJvb3QoZWwsIGluY2x1ZGVJbml0U2VsZWN0b3JzID0gZmFsc2UpIHtcbiAgaWYgKCFlbClcbiAgICByZXR1cm47XG4gIGNvbnN0IHNlbGVjdG9ycyA9IGluY2x1ZGVJbml0U2VsZWN0b3JzID8gYWxsU2VsZWN0b3JzKCkgOiByb290U2VsZWN0b3JzKCk7XG4gIGlmIChzZWxlY3RvcnMuc29tZSgoc2VsZWN0b3IpID0+IGVsLm1hdGNoZXMoc2VsZWN0b3IpKSlcbiAgICByZXR1cm4gZWw7XG4gIGlmICghZWwucGFyZW50RWxlbWVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBjbG9zZXN0Um9vdChlbC5wYXJlbnRFbGVtZW50LCBpbmNsdWRlSW5pdFNlbGVjdG9ycyk7XG59XG5mdW5jdGlvbiBpc1Jvb3QoZWwpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvcnMoKS5zb21lKChzZWxlY3RvcikgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gaW5pdFRyZWUoZWwsIHdhbGtlciA9IHdhbGspIHtcbiAgZGVmZXJIYW5kbGluZ0RpcmVjdGl2ZXMoKCkgPT4ge1xuICAgIHdhbGtlcihlbCwgKGVsMiwgc2tpcCkgPT4ge1xuICAgICAgZGlyZWN0aXZlcyhlbDIsIGVsMi5hdHRyaWJ1dGVzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgICAgIGVsMi5feF9pZ25vcmUgJiYgc2tpcCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lUcmVlKHJvb3QpIHtcbiAgd2Fsayhyb290LCAoZWwpID0+IGNsZWFudXBBdHRyaWJ1dGVzKGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9jbGFzc2VzLmpzXG5mdW5jdGlvbiBzZXRDbGFzc2VzKGVsLCB2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIHZhbHVlLmpvaW4oXCIgXCIpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3Nlc0Zyb21PYmplY3QoZWwsIHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBzZXRDbGFzc2VzKGVsLCB2YWx1ZSgpKTtcbiAgfVxuICByZXR1cm4gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCBjbGFzc1N0cmluZykge1xuICBsZXQgc3BsaXQgPSAoY2xhc3NTdHJpbmcyKSA9PiBjbGFzc1N0cmluZzIuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IG1pc3NpbmdDbGFzc2VzID0gKGNsYXNzU3RyaW5nMikgPT4gY2xhc3NTdHJpbmcyLnNwbGl0KFwiIFwiKS5maWx0ZXIoKGkpID0+ICFlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGFkZENsYXNzZXNBbmRSZXR1cm5VbmRvID0gKGNsYXNzZXMpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXMpO1xuICAgIH07XG4gIH07XG4gIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgPT09IHRydWUgPyBjbGFzc1N0cmluZyA9IFwiXCIgOiBjbGFzc1N0cmluZyB8fCBcIlwiO1xuICByZXR1cm4gYWRkQ2xhc3Nlc0FuZFJldHVyblVuZG8obWlzc2luZ0NsYXNzZXMoY2xhc3NTdHJpbmcpKTtcbn1cbmZ1bmN0aW9uIHNldENsYXNzZXNGcm9tT2JqZWN0KGVsLCBjbGFzc09iamVjdCkge1xuICBsZXQgc3BsaXQgPSAoY2xhc3NTdHJpbmcpID0+IGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBmb3JBZGQgPSBPYmplY3QuZW50cmllcyhjbGFzc09iamVjdCkuZmxhdE1hcCgoW2NsYXNzU3RyaW5nLCBib29sXSkgPT4gYm9vbCA/IHNwbGl0KGNsYXNzU3RyaW5nKSA6IGZhbHNlKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBmb3JSZW1vdmUgPSBPYmplY3QuZW50cmllcyhjbGFzc09iamVjdCkuZmxhdE1hcCgoW2NsYXNzU3RyaW5nLCBib29sXSkgPT4gIWJvb2wgPyBzcGxpdChjbGFzc1N0cmluZykgOiBmYWxzZSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgYWRkZWQgPSBbXTtcbiAgbGV0IHJlbW92ZWQgPSBbXTtcbiAgZm9yUmVtb3ZlLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGkpO1xuICAgICAgcmVtb3ZlZC5wdXNoKGkpO1xuICAgIH1cbiAgfSk7XG4gIGZvckFkZC5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICBhZGRlZC5wdXNoKGkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVtb3ZlZC5mb3JFYWNoKChpKSA9PiBlbC5jbGFzc0xpc3QuYWRkKGkpKTtcbiAgICBhZGRlZC5mb3JFYWNoKChpKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKGkpKTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3N0eWxlcy5qc1xuZnVuY3Rpb24gc2V0U3R5bGVzKGVsLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNldFN0eWxlc0Zyb21PYmplY3QoZWwsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gc2V0U3R5bGVzRnJvbVN0cmluZyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0U3R5bGVzRnJvbU9iamVjdChlbCwgdmFsdWUpIHtcbiAgbGV0IHByZXZpb3VzU3R5bGVzID0ge307XG4gIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWx1ZTJdKSA9PiB7XG4gICAgcHJldmlvdXNTdHlsZXNba2V5XSA9IGVsLnN0eWxlW2tleV07XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoa2ViYWJDYXNlKGtleSksIHZhbHVlMik7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHNldFN0eWxlcyhlbCwgcHJldmlvdXNTdHlsZXMpO1xuICB9O1xufVxuZnVuY3Rpb24gc2V0U3R5bGVzRnJvbVN0cmluZyhlbCwgdmFsdWUpIHtcbiAgbGV0IGNhY2hlID0gZWwuZ2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgY2FjaGUpO1xuICB9O1xufVxuZnVuY3Rpb24ga2ViYWJDYXNlKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvb25jZS5qc1xuZnVuY3Rpb24gb25jZShjYWxsYmFjaywgZmFsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmFsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdHJhbnNpdGlvbi5qc1xuZGlyZWN0aXZlKFwidHJhbnNpdGlvblwiLCAoZWwsIHt2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9ufSwge2V2YWx1YXRlOiBldmFsdWF0ZTJ9KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiKVxuICAgIGV4cHJlc3Npb24gPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIGlmICghZXhwcmVzc2lvbikge1xuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tSGVscGVyKGVsLCBtb2RpZmllcnMsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUNsYXNzU3RyaW5nKGVsLCBleHByZXNzaW9uLCB2YWx1ZSk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgY2xhc3NTdHJpbmcsIHN0YWdlKSB7XG4gIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0Q2xhc3NlcywgXCJcIik7XG4gIGxldCBkaXJlY3RpdmVTdG9yYWdlTWFwID0ge1xuICAgIGVudGVyOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJlbnRlci1zdGFydFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImVudGVyLWVuZFwiOiAoY2xhc3NlcykgPT4ge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgbGVhdmU6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IGNsYXNzZXM7XG4gICAgfVxuICB9O1xuICBkaXJlY3RpdmVTdG9yYWdlTWFwW3N0YWdlXShjbGFzc1N0cmluZyk7XG59XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldFN0eWxlcyk7XG4gIGxldCBkb2VzbnRTcGVjaWZ5ID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgJiYgIXN0YWdlO1xuICBsZXQgdHJhbnNpdGlvbmluZ0luID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSB8fCBbXCJlbnRlclwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGxldCB0cmFuc2l0aW9uaW5nT3V0ID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgfHwgW1wibGVhdmVcIl0uaW5jbHVkZXMoc3RhZ2UpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIWRvZXNudFNwZWNpZnkpIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpLCBpbmRleCkgPT4gaW5kZXggPCBtb2RpZmllcnMuaW5kZXhPZihcIm91dFwiKSk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA+IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBsZXQgd2FudHNBbGwgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwib3BhY2l0eVwiKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCB3YW50c09wYWNpdHkgPSB3YW50c0FsbCB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpO1xuICBsZXQgd2FudHNTY2FsZSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcInNjYWxlXCIpO1xuICBsZXQgb3BhY2l0eVZhbHVlID0gd2FudHNPcGFjaXR5ID8gMCA6IDE7XG4gIGxldCBzY2FsZVZhbHVlID0gd2FudHNTY2FsZSA/IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcInNjYWxlXCIsIDk1KSAvIDEwMCA6IDE7XG4gIGxldCBkZWxheSA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImRlbGF5XCIsIDApO1xuICBsZXQgb3JpZ2luID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwib3JpZ2luXCIsIFwiY2VudGVyXCIpO1xuICBsZXQgcHJvcGVydHkgPSBcIm9wYWNpdHksIHRyYW5zZm9ybVwiO1xuICBsZXQgZHVyYXRpb25JbiA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDE1MCkgLyAxZTM7XG4gIGxldCBkdXJhdGlvbk91dCA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDc1KSAvIDFlMztcbiAgbGV0IGVhc2luZyA9IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgO1xuICBpZiAodHJhbnNpdGlvbmluZ0luKSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcgPSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogZGVsYXksXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbklufXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiBvcGFjaXR5VmFsdWUsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlVmFsdWV9KWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0ge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgIH07XG4gIH1cbiAgaWYgKHRyYW5zaXRpb25pbmdPdXQpIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBkZWxheSxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uT3V0fXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0RnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSA9IHt9KSB7XG4gIGlmICghZWwuX3hfdHJhbnNpdGlvbilcbiAgICBlbC5feF90cmFuc2l0aW9uID0ge1xuICAgICAgZW50ZXI6IHtkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWV9LFxuICAgICAgbGVhdmU6IHtkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWV9LFxuICAgICAgaW4oYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmVudGVyLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5lbnRlci5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMuZW50ZXIuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfSxcbiAgICAgIG91dChiZWZvcmUgPSAoKSA9PiB7XG4gICAgICB9LCBhZnRlciA9ICgpID0+IHtcbiAgICAgIH0pIHtcbiAgICAgICAgdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtcbiAgICAgICAgICBkdXJpbmc6IHRoaXMubGVhdmUuZHVyaW5nLFxuICAgICAgICAgIHN0YXJ0OiB0aGlzLmxlYXZlLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5sZWF2ZS5lbmRcbiAgICAgICAgfSwgYmVmb3JlLCBhZnRlcik7XG4gICAgICB9XG4gICAgfTtcbn1cbndpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zID0gZnVuY3Rpb24oZWwsIHZhbHVlLCBzaG93LCBoaWRlKSB7XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNob3cpIDogc2V0VGltZW91dChzaG93KTtcbiAgfTtcbiAgaWYgKHZhbHVlKSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbiA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIHJldHVybjtcbiAgfVxuICBlbC5feF9oaWRlUHJvbWlzZSA9IGVsLl94X3RyYW5zaXRpb24gPyBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5vdXQoKCkgPT4ge1xuICAgIH0sICgpID0+IHJlc29sdmUoaGlkZSkpO1xuICAgIGVsLl94X3RyYW5zaXRpb25pbmcuYmVmb3JlQ2FuY2VsKCgpID0+IHJlamVjdCh7aXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbjogdHJ1ZX0pKTtcbiAgfSkgOiBQcm9taXNlLnJlc29sdmUoaGlkZSk7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBsZXQgY2xvc2VzdCA9IGNsb3Nlc3RIaWRlKGVsKTtcbiAgICBpZiAoY2xvc2VzdCkge1xuICAgICAgaWYgKCFjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbilcbiAgICAgICAgY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4gPSBbXTtcbiAgICAgIGNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuLnB1c2goZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIGxldCBoaWRlQWZ0ZXJDaGlsZHJlbiA9IChlbDIpID0+IHtcbiAgICAgICAgICBsZXQgY2FycnkgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbDIuX3hfaGlkZVByb21pc2UsXG4gICAgICAgICAgICAuLi4oZWwyLl94X2hpZGVDaGlsZHJlbiB8fCBbXSkubWFwKGhpZGVBZnRlckNoaWxkcmVuKVxuICAgICAgICAgIF0pLnRoZW4oKFtpXSkgPT4gaSgpKTtcbiAgICAgICAgICBkZWxldGUgZWwyLl94X2hpZGVQcm9taXNlO1xuICAgICAgICAgIGRlbGV0ZSBlbDIuX3hfaGlkZUNoaWxkcmVuO1xuICAgICAgICAgIHJldHVybiBjYXJyeTtcbiAgICAgICAgfTtcbiAgICAgICAgaGlkZUFmdGVyQ2hpbGRyZW4oZWwpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFlLmlzRnJvbUNhbmNlbGxlZFRyYW5zaXRpb24pXG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuZnVuY3Rpb24gY2xvc2VzdEhpZGUoZWwpIHtcbiAgbGV0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gIGlmICghcGFyZW50KVxuICAgIHJldHVybjtcbiAgcmV0dXJuIHBhcmVudC5feF9oaWRlUHJvbWlzZSA/IHBhcmVudCA6IGNsb3Nlc3RIaWRlKHBhcmVudCk7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwge2R1cmluZywgc3RhcnQ6IHN0YXJ0MiwgZW5kfSA9IHt9LCBiZWZvcmUgPSAoKSA9PiB7XG59LCBhZnRlciA9ICgpID0+IHtcbn0pIHtcbiAgaWYgKGVsLl94X3RyYW5zaXRpb25pbmcpXG4gICAgZWwuX3hfdHJhbnNpdGlvbmluZy5jYW5jZWwoKTtcbiAgaWYgKE9iamVjdC5rZXlzKGR1cmluZykubGVuZ3RoID09PSAwICYmIE9iamVjdC5rZXlzKHN0YXJ0MikubGVuZ3RoID09PSAwICYmIE9iamVjdC5rZXlzKGVuZCkubGVuZ3RoID09PSAwKSB7XG4gICAgYmVmb3JlKCk7XG4gICAgYWZ0ZXIoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHVuZG9TdGFydCwgdW5kb0R1cmluZywgdW5kb0VuZDtcbiAgcGVyZm9ybVRyYW5zaXRpb24oZWwsIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIHVuZG9TdGFydCA9IHNldEZ1bmN0aW9uKGVsLCBzdGFydDIpO1xuICAgIH0sXG4gICAgZHVyaW5nKCkge1xuICAgICAgdW5kb0R1cmluZyA9IHNldEZ1bmN0aW9uKGVsLCBkdXJpbmcpO1xuICAgIH0sXG4gICAgYmVmb3JlLFxuICAgIGVuZCgpIHtcbiAgICAgIHVuZG9TdGFydCgpO1xuICAgICAgdW5kb0VuZCA9IHNldEZ1bmN0aW9uKGVsLCBlbmQpO1xuICAgIH0sXG4gICAgYWZ0ZXIsXG4gICAgY2xlYW51cCgpIHtcbiAgICAgIHVuZG9EdXJpbmcoKTtcbiAgICAgIHVuZG9FbmQoKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcGVyZm9ybVRyYW5zaXRpb24oZWwsIHN0YWdlcykge1xuICBsZXQgaW50ZXJydXB0ZWQsIHJlYWNoZWRCZWZvcmUsIHJlYWNoZWRFbmQ7XG4gIGxldCBmaW5pc2ggPSBvbmNlKCgpID0+IHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaW50ZXJydXB0ZWQgPSB0cnVlO1xuICAgICAgaWYgKCFyZWFjaGVkQmVmb3JlKVxuICAgICAgICBzdGFnZXMuYmVmb3JlKCk7XG4gICAgICBpZiAoIXJlYWNoZWRFbmQpIHtcbiAgICAgICAgc3RhZ2VzLmVuZCgpO1xuICAgICAgICByZWxlYXNlTmV4dFRpY2tzKCk7XG4gICAgICB9XG4gICAgICBzdGFnZXMuYWZ0ZXIoKTtcbiAgICAgIGlmIChlbC5pc0Nvbm5lY3RlZClcbiAgICAgICAgc3RhZ2VzLmNsZWFudXAoKTtcbiAgICAgIGRlbGV0ZSBlbC5feF90cmFuc2l0aW9uaW5nO1xuICAgIH0pO1xuICB9KTtcbiAgZWwuX3hfdHJhbnNpdGlvbmluZyA9IHtcbiAgICBiZWZvcmVDYW5jZWxzOiBbXSxcbiAgICBiZWZvcmVDYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuYmVmb3JlQ2FuY2Vscy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGNhbmNlbDogb25jZShmdW5jdGlvbigpIHtcbiAgICAgIHdoaWxlICh0aGlzLmJlZm9yZUNhbmNlbHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYmVmb3JlQ2FuY2Vscy5zaGlmdCgpKCk7XG4gICAgICB9XG4gICAgICA7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KSxcbiAgICBmaW5pc2hcbiAgfTtcbiAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICBzdGFnZXMuc3RhcnQoKTtcbiAgICBzdGFnZXMuZHVyaW5nKCk7XG4gIH0pO1xuICBob2xkTmV4dFRpY2tzKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGxldCBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZSgvLC4qLywgXCJcIikucmVwbGFjZShcInNcIiwgXCJcIikpICogMWUzO1xuICAgIGxldCBkZWxheSA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRGVsYXkucmVwbGFjZSgvLC4qLywgXCJcIikucmVwbGFjZShcInNcIiwgXCJcIikpICogMWUzO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gMClcbiAgICAgIGR1cmF0aW9uID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgIH0pO1xuICAgIHJlYWNoZWRCZWZvcmUgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoaW50ZXJydXB0ZWQpXG4gICAgICAgIHJldHVybjtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgIH0pO1xuICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgc2V0VGltZW91dChlbC5feF90cmFuc2l0aW9uaW5nLmZpbmlzaCwgZHVyYXRpb24gKyBkZWxheSk7XG4gICAgICByZWFjaGVkRW5kID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywga2V5LCBmYWxsYmFjaykge1xuICBpZiAobW9kaWZpZXJzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICBjb25zdCByYXdWYWx1ZSA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMV07XG4gIGlmICghcmF3VmFsdWUpXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICBpZiAoa2V5ID09PSBcInNjYWxlXCIpIHtcbiAgICBpZiAoaXNOYU4ocmF3VmFsdWUpKVxuICAgICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG4gIGlmIChrZXkgPT09IFwiZHVyYXRpb25cIikge1xuICAgIGxldCBtYXRjaCA9IHJhd1ZhbHVlLm1hdGNoKC8oWzAtOV0rKW1zLyk7XG4gICAgaWYgKG1hdGNoKVxuICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9XG4gIGlmIChrZXkgPT09IFwib3JpZ2luXCIpIHtcbiAgICBpZiAoW1widG9wXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMl0pKSB7XG4gICAgICByZXR1cm4gW3Jhd1ZhbHVlLCBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdXS5qb2luKFwiIFwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhd1ZhbHVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZGVib3VuY2UuanNcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgdmFyIHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvdGhyb3R0bGUuanNcbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XG4gIGxldCBpblRocm90dGxlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmICghaW5UaHJvdHRsZSkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBpblRocm90dGxlID0gZmFsc2UsIGxpbWl0KTtcbiAgICB9XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9wbHVnaW4uanNcbmZ1bmN0aW9uIHBsdWdpbihjYWxsYmFjaykge1xuICBjYWxsYmFjayhhbHBpbmVfZGVmYXVsdCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zdG9yZS5qc1xudmFyIHN0b3JlcyA9IHt9O1xudmFyIGlzUmVhY3RpdmUgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0b3JlKG5hbWUsIHZhbHVlKSB7XG4gIGlmICghaXNSZWFjdGl2ZSkge1xuICAgIHN0b3JlcyA9IHJlYWN0aXZlKHN0b3Jlcyk7XG4gICAgaXNSZWFjdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gc3RvcmVzW25hbWVdO1xuICB9XG4gIHN0b3Jlc1tuYW1lXSA9IHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmhhc093blByb3BlcnR5KFwiaW5pdFwiKSAmJiB0eXBlb2YgdmFsdWUuaW5pdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgc3RvcmVzW25hbWVdLmluaXQoKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0U3RvcmVzKCkge1xuICByZXR1cm4gc3RvcmVzO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvY2xvbmUuanNcbnZhciBpc0Nsb25pbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHNraXBEdXJpbmdDbG9uZShjYWxsYmFjaykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyB8fCBjYWxsYmFjayguLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIGNsb25lKG9sZEVsLCBuZXdFbCkge1xuICBuZXdFbC5feF9kYXRhU3RhY2sgPSBvbGRFbC5feF9kYXRhU3RhY2s7XG4gIGlzQ2xvbmluZyA9IHRydWU7XG4gIGRvbnRSZWdpc3RlclJlYWN0aXZlU2lkZUVmZmVjdHMoKCkgPT4ge1xuICAgIGNsb25lVHJlZShuZXdFbCk7XG4gIH0pO1xuICBpc0Nsb25pbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsb25lVHJlZShlbCkge1xuICBsZXQgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSBmYWxzZTtcbiAgbGV0IHNoYWxsb3dXYWxrZXIgPSAoZWwyLCBjYWxsYmFjaykgPT4ge1xuICAgIHdhbGsoZWwyLCAoZWwzLCBza2lwKSA9PiB7XG4gICAgICBpZiAoaGFzUnVuVGhyb3VnaEZpcnN0RWwgJiYgaXNSb290KGVsMykpXG4gICAgICAgIHJldHVybiBza2lwKCk7XG4gICAgICBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlbDMsIHNraXApO1xuICAgIH0pO1xuICB9O1xuICBpbml0VHJlZShlbCwgc2hhbGxvd1dhbGtlcik7XG59XG5mdW5jdGlvbiBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IGVmZmVjdDtcbiAgb3ZlcnJpZGVFZmZlY3QoKGNhbGxiYWNrMiwgZWwpID0+IHtcbiAgICBsZXQgc3RvcmVkRWZmZWN0ID0gY2FjaGUoY2FsbGJhY2syKTtcbiAgICByZWxlYXNlKHN0b3JlZEVmZmVjdCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9KTtcbiAgY2FsbGJhY2soKTtcbiAgb3ZlcnJpZGVFZmZlY3QoY2FjaGUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGF0YXMuanNcbnZhciBkYXRhcyA9IHt9O1xuZnVuY3Rpb24gZGF0YShuYW1lLCBjYWxsYmFjaykge1xuICBkYXRhc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0RGF0YVByb3ZpZGVycyhvYmosIGNvbnRleHQpIHtcbiAgT2JqZWN0LmVudHJpZXMoZGF0YXMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5iaW5kKGNvbnRleHQpKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYWxwaW5lLmpzXG52YXIgQWxwaW5lID0ge1xuICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlO1xuICB9LFxuICBnZXQgcmVsZWFzZSgpIHtcbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfSxcbiAgZ2V0IGVmZmVjdCgpIHtcbiAgICByZXR1cm4gZWZmZWN0O1xuICB9LFxuICBnZXQgcmF3KCkge1xuICAgIHJldHVybiByYXc7XG4gIH0sXG4gIHZlcnNpb246IFwiMy40LjJcIixcbiAgZmx1c2hBbmRTdG9wRGVmZXJyaW5nTXV0YXRpb25zLFxuICBkaXNhYmxlRWZmZWN0U2NoZWR1bGluZyxcbiAgc2V0UmVhY3Rpdml0eUVuZ2luZSxcbiAgYWRkUm9vdFNlbGVjdG9yLFxuICBkZWZlck11dGF0aW9ucyxcbiAgbWFwQXR0cmlidXRlcyxcbiAgZXZhbHVhdGVMYXRlcixcbiAgc2V0RXZhbHVhdG9yLFxuICBjbG9zZXN0Um9vdCxcbiAgaW50ZXJjZXB0b3IsXG4gIHRyYW5zaXRpb24sXG4gIHNldFN0eWxlcyxcbiAgbXV0YXRlRG9tLFxuICBkaXJlY3RpdmUsXG4gIHRocm90dGxlLFxuICBkZWJvdW5jZSxcbiAgZXZhbHVhdGUsXG4gIGluaXRUcmVlLFxuICBuZXh0VGljayxcbiAgcHJlZml4OiBzZXRQcmVmaXgsXG4gIHBsdWdpbixcbiAgbWFnaWMsXG4gIHN0b3JlLFxuICBzdGFydCxcbiAgY2xvbmUsXG4gIGRhdGFcbn07XG52YXIgYWxwaW5lX2RlZmF1bHQgPSBBbHBpbmU7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbmRleC5qc1xudmFyIGltcG9ydF9yZWFjdGl2aXR5OSA9IF9fdG9Nb2R1bGUocmVxdWlyZV9yZWFjdGl2aXR5KCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRuZXh0VGljay5qc1xubWFnaWMoXCJuZXh0VGlja1wiLCAoKSA9PiBuZXh0VGljayk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGRpc3BhdGNoLmpzXG5tYWdpYyhcImRpc3BhdGNoXCIsIChlbCkgPT4gZGlzcGF0Y2guYmluZChkaXNwYXRjaCwgZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kd2F0Y2guanNcbm1hZ2ljKFwid2F0Y2hcIiwgKGVsKSA9PiAoa2V5LCBjYWxsYmFjaykgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwga2V5KTtcbiAgbGV0IGZpcnN0VGltZSA9IHRydWU7XG4gIGxldCBvbGRWYWx1ZTtcbiAgZWZmZWN0KCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuZGF0YXNldC50aHJvd0F3YXkgPSB2YWx1ZTtcbiAgICBpZiAoIWZpcnN0VGltZSkge1xuICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICB9KSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kc3RvcmUuanNcbm1hZ2ljKFwic3RvcmVcIiwgZ2V0U3RvcmVzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kcm9vdC5qc1xubWFnaWMoXCJyb290XCIsIChlbCkgPT4gY2xvc2VzdFJvb3QoZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kcmVmcy5qc1xubWFnaWMoXCJyZWZzXCIsIChlbCkgPT4ge1xuICBpZiAoZWwuX3hfcmVmc19wcm94eSlcbiAgICByZXR1cm4gZWwuX3hfcmVmc19wcm94eTtcbiAgZWwuX3hfcmVmc19wcm94eSA9IG1lcmdlUHJveGllcyhnZXRBcnJheU9mUmVmT2JqZWN0KGVsKSk7XG4gIHJldHVybiBlbC5feF9yZWZzX3Byb3h5O1xufSk7XG5mdW5jdGlvbiBnZXRBcnJheU9mUmVmT2JqZWN0KGVsKSB7XG4gIGxldCByZWZPYmplY3RzID0gW107XG4gIGxldCBjdXJyZW50RWwgPSBlbDtcbiAgd2hpbGUgKGN1cnJlbnRFbCkge1xuICAgIGlmIChjdXJyZW50RWwuX3hfcmVmcylcbiAgICAgIHJlZk9iamVjdHMucHVzaChjdXJyZW50RWwuX3hfcmVmcyk7XG4gICAgY3VycmVudEVsID0gY3VycmVudEVsLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdHM7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGVsLmpzXG5tYWdpYyhcImVsXCIsIChlbCkgPT4gZWwpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlnbm9yZS5qc1xudmFyIGhhbmRsZXIgPSAoKSA9PiB7XG59O1xuaGFuZGxlci5pbmxpbmUgPSAoZWwsIHttb2RpZmllcnN9LCB7Y2xlYW51cH0pID0+IHtcbiAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlIDogZWwuX3hfaWdub3JlID0gdHJ1ZTtcbiAgY2xlYW51cCgoKSA9PiB7XG4gICAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmIDogZGVsZXRlIGVsLl94X2lnbm9yZTtcbiAgfSk7XG59O1xuZGlyZWN0aXZlKFwiaWdub3JlXCIsIGhhbmRsZXIpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWVmZmVjdC5qc1xuZGlyZWN0aXZlKFwiZWZmZWN0XCIsIChlbCwge2V4cHJlc3Npb259LCB7ZWZmZWN0OiBlZmZlY3QzfSkgPT4gZWZmZWN0MyhldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvYmluZC5qc1xuZnVuY3Rpb24gYmluZChlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycyA9IFtdKSB7XG4gIGlmICghZWwuX3hfYmluZGluZ3MpXG4gICAgZWwuX3hfYmluZGluZ3MgPSByZWFjdGl2ZSh7fSk7XG4gIGVsLl94X2JpbmRpbmdzW25hbWVdID0gdmFsdWU7XG4gIG5hbWUgPSBtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSA/IGNhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgYmluZFN0eWxlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgICBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kSW5wdXRWYWx1ZShlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgIGlmIChlbC5hdHRyaWJ1dGVzLnZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuZnJvbU1vZGVsKSB7XG4gICAgICBlbC5jaGVja2VkID0gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUoZWwudmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZWwudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsdWUpKSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIodmFsdWUpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiICYmICFbbnVsbCwgdm9pZCAwXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSB2YWx1ZS5zb21lKCh2YWwpID0+IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKHZhbCwgZWwudmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChlbC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZENsYXNzZXMpXG4gICAgZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcygpO1xuICBlbC5feF91bmRvQWRkZWRDbGFzc2VzID0gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZFN0eWxlcylcbiAgICBlbC5feF91bmRvQWRkZWRTdHlsZXMoKTtcbiAgZWwuX3hfdW5kb0FkZGVkU3R5bGVzID0gc2V0U3R5bGVzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kQXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSkge1xuICBpZiAoW251bGwsIHZvaWQgMCwgZmFsc2VdLmluY2x1ZGVzKHZhbHVlKSAmJiBhdHRyaWJ1dGVTaG91bGRudEJlUHJlc2VydmVkSWZGYWxzeShuYW1lKSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNCb29sZWFuQXR0cihuYW1lKSlcbiAgICAgIHZhbHVlID0gbmFtZTtcbiAgICBzZXRJZkNoYW5nZWQoZWwsIG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0SWZDaGFuZ2VkKGVsLCBhdHRyTmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsLmdldEF0dHJpYnV0ZShhdHRyTmFtZSkgIT0gdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSkge1xuICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZTIpID0+IHtcbiAgICByZXR1cm4gdmFsdWUyICsgXCJcIjtcbiAgfSk7XG4gIEFycmF5LmZyb20oZWwub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjYW1lbENhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIGlzQm9vbGVhbkF0dHIoYXR0ck5hbWUpIHtcbiAgY29uc3QgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgXCJkaXNhYmxlZFwiLFxuICAgIFwiY2hlY2tlZFwiLFxuICAgIFwicmVxdWlyZWRcIixcbiAgICBcInJlYWRvbmx5XCIsXG4gICAgXCJoaWRkZW5cIixcbiAgICBcIm9wZW5cIixcbiAgICBcInNlbGVjdGVkXCIsXG4gICAgXCJhdXRvZm9jdXNcIixcbiAgICBcIml0ZW1zY29wZVwiLFxuICAgIFwibXVsdGlwbGVcIixcbiAgICBcIm5vdmFsaWRhdGVcIixcbiAgICBcImFsbG93ZnVsbHNjcmVlblwiLFxuICAgIFwiYWxsb3dwYXltZW50cmVxdWVzdFwiLFxuICAgIFwiZm9ybW5vdmFsaWRhdGVcIixcbiAgICBcImF1dG9wbGF5XCIsXG4gICAgXCJjb250cm9sc1wiLFxuICAgIFwibG9vcFwiLFxuICAgIFwibXV0ZWRcIixcbiAgICBcInBsYXlzaW5saW5lXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJpc21hcFwiLFxuICAgIFwicmV2ZXJzZWRcIixcbiAgICBcImFzeW5jXCIsXG4gICAgXCJkZWZlclwiLFxuICAgIFwibm9tb2R1bGVcIlxuICBdO1xuICByZXR1cm4gYm9vbGVhbkF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0ck5hbWUpO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkge1xuICByZXR1cm4gIVtcImFyaWEtcHJlc3NlZFwiLCBcImFyaWEtY2hlY2tlZFwiLCBcImFyaWEtZXhwYW5kZWRcIl0uaW5jbHVkZXMobmFtZSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9vbi5qc1xuZnVuY3Rpb24gb24oZWwsIGV2ZW50LCBtb2RpZmllcnMsIGNhbGxiYWNrKSB7XG4gIGxldCBsaXN0ZW5lclRhcmdldCA9IGVsO1xuICBsZXQgaGFuZGxlcjMgPSAoZSkgPT4gY2FsbGJhY2soZSk7XG4gIGxldCBvcHRpb25zID0ge307XG4gIGxldCB3cmFwSGFuZGxlciA9IChjYWxsYmFjazIsIHdyYXBwZXIpID0+IChlKSA9PiB3cmFwcGVyKGNhbGxiYWNrMiwgZSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJkb3RcIikpXG4gICAgZXZlbnQgPSBkb3RTeW50YXgoZXZlbnQpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FtZWxcIikpXG4gICAgZXZlbnQgPSBjYW1lbENhc2UyKGV2ZW50KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInBhc3NpdmVcIikpXG4gICAgb3B0aW9ucy5wYXNzaXZlID0gdHJ1ZTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImNhcHR1cmVcIikpXG4gICAgb3B0aW9ucy5jYXB0dXJlID0gdHJ1ZTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIndpbmRvd1wiKSlcbiAgICBsaXN0ZW5lclRhcmdldCA9IHdpbmRvdztcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRvY3VtZW50XCIpKVxuICAgIGxpc3RlbmVyVGFyZ2V0ID0gZG9jdW1lbnQ7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwcmV2ZW50XCIpKVxuICAgIGhhbmRsZXIzID0gd3JhcEhhbmRsZXIoaGFuZGxlcjMsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic3RvcFwiKSlcbiAgICBoYW5kbGVyMyA9IHdyYXBIYW5kbGVyKGhhbmRsZXIzLCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpKVxuICAgIGhhbmRsZXIzID0gd3JhcEhhbmRsZXIoaGFuZGxlcjMsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnRhcmdldCA9PT0gZWwgJiYgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImF3YXlcIikgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0c2lkZVwiKSkge1xuICAgIGxpc3RlbmVyVGFyZ2V0ID0gZG9jdW1lbnQ7XG4gICAgaGFuZGxlcjMgPSB3cmFwSGFuZGxlcihoYW5kbGVyMywgKG5leHQsIGUpID0+IHtcbiAgICAgIGlmIChlbC5jb250YWlucyhlLnRhcmdldCkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5vZmZzZXRXaWR0aCA8IDEgJiYgZWwub2Zmc2V0SGVpZ2h0IDwgMSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVyMyA9IHdyYXBIYW5kbGVyKGhhbmRsZXIzLCAobmV4dCwgZSkgPT4ge1xuICAgIGlmIChpc0tleUV2ZW50KGV2ZW50KSkge1xuICAgICAgaWYgKGlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQoZSwgbW9kaWZpZXJzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG5leHQoZSk7XG4gIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZGVib3VuY2VcIikpIHtcbiAgICBsZXQgbmV4dE1vZGlmaWVyID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKFwiZGVib3VuY2VcIikgKyAxXSB8fCBcImludmFsaWQtd2FpdFwiO1xuICAgIGxldCB3YWl0ID0gaXNOdW1lcmljKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA/IE51bWJlcihuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgOiAyNTA7XG4gICAgaGFuZGxlcjMgPSBkZWJvdW5jZShoYW5kbGVyMywgd2FpdCk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInRocm90dGxlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcInRocm90dGxlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXIzID0gdGhyb3R0bGUoaGFuZGxlcjMsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvbmNlXCIpKSB7XG4gICAgaGFuZGxlcjMgPSB3cmFwSGFuZGxlcihoYW5kbGVyMywgKG5leHQsIGUpID0+IHtcbiAgICAgIG5leHQoZSk7XG4gICAgICBsaXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyMywgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgbGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjMsIG9wdGlvbnMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIzLCBvcHRpb25zKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRvdFN5bnRheChzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLy0vZywgXCIuXCIpO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlMihzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShcXHcpL2csIChtYXRjaCwgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5mdW5jdGlvbiBrZWJhYkNhc2UyKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS5yZXBsYWNlKC9bX1xcc10vLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGlzS2V5RXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIFtcImtleWRvd25cIiwgXCJrZXl1cFwiXS5pbmNsdWRlcyhldmVudCk7XG59XG5mdW5jdGlvbiBpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykge1xuICBsZXQga2V5TW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSkgPT4ge1xuICAgIHJldHVybiAhW1wid2luZG93XCIsIFwiZG9jdW1lbnRcIiwgXCJwcmV2ZW50XCIsIFwic3RvcFwiLCBcIm9uY2VcIl0uaW5jbHVkZXMoaSk7XG4gIH0pO1xuICBpZiAoa2V5TW9kaWZpZXJzLmluY2x1ZGVzKFwiZGVib3VuY2VcIikpIHtcbiAgICBsZXQgZGVib3VuY2VJbmRleCA9IGtleU1vZGlmaWVycy5pbmRleE9mKFwiZGVib3VuY2VcIik7XG4gICAga2V5TW9kaWZpZXJzLnNwbGljZShkZWJvdW5jZUluZGV4LCBpc051bWVyaWMoKGtleU1vZGlmaWVyc1tkZWJvdW5jZUluZGV4ICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIikuc3BsaXQoXCJtc1wiKVswXSkgPyAyIDogMSk7XG4gIH1cbiAgaWYgKGtleU1vZGlmaWVycy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMSAmJiBrZXlUb01vZGlmaWVycyhlLmtleSkuaW5jbHVkZXMoa2V5TW9kaWZpZXJzWzBdKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN5c3RlbUtleU1vZGlmaWVycyA9IFtcImN0cmxcIiwgXCJzaGlmdFwiLCBcImFsdFwiLCBcIm1ldGFcIiwgXCJjbWRcIiwgXCJzdXBlclwiXTtcbiAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMgPSBzeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4ga2V5TW9kaWZpZXJzLmluY2x1ZGVzKG1vZGlmaWVyKSk7XG4gIGtleU1vZGlmaWVycyA9IGtleU1vZGlmaWVycy5maWx0ZXIoKGkpID0+ICFzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5pbmNsdWRlcyhpKSk7XG4gIGlmIChzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzID0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4ge1xuICAgICAgaWYgKG1vZGlmaWVyID09PSBcImNtZFwiIHx8IG1vZGlmaWVyID09PSBcInN1cGVyXCIpXG4gICAgICAgIG1vZGlmaWVyID0gXCJtZXRhXCI7XG4gICAgICByZXR1cm4gZVtgJHttb2RpZmllcn1LZXlgXTtcbiAgICB9KTtcbiAgICBpZiAoYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICBpZiAoa2V5VG9Nb2RpZmllcnMoZS5rZXkpLmluY2x1ZGVzKGtleU1vZGlmaWVyc1swXSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBrZXlUb01vZGlmaWVycyhrZXkpIHtcbiAgaWYgKCFrZXkpXG4gICAgcmV0dXJuIFtdO1xuICBrZXkgPSBrZWJhYkNhc2UyKGtleSk7XG4gIGxldCBtb2RpZmllclRvS2V5TWFwID0ge1xuICAgIGN0cmw6IFwiY29udHJvbFwiLFxuICAgIHNsYXNoOiBcIi9cIixcbiAgICBzcGFjZTogXCItXCIsXG4gICAgc3BhY2ViYXI6IFwiLVwiLFxuICAgIGNtZDogXCJtZXRhXCIsXG4gICAgZXNjOiBcImVzY2FwZVwiLFxuICAgIHVwOiBcImFycm93LXVwXCIsXG4gICAgZG93bjogXCJhcnJvdy1kb3duXCIsXG4gICAgbGVmdDogXCJhcnJvdy1sZWZ0XCIsXG4gICAgcmlnaHQ6IFwiYXJyb3ctcmlnaHRcIixcbiAgICBwZXJpb2Q6IFwiLlwiLFxuICAgIGVxdWFsOiBcIj1cIlxuICB9O1xuICBtb2RpZmllclRvS2V5TWFwW2tleV0gPSBrZXk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtb2RpZmllclRvS2V5TWFwKS5tYXAoKG1vZGlmaWVyKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVyVG9LZXlNYXBbbW9kaWZpZXJdID09PSBrZXkpXG4gICAgICByZXR1cm4gbW9kaWZpZXI7XG4gIH0pLmZpbHRlcigobW9kaWZpZXIpID0+IG1vZGlmaWVyKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbC5qc1xuZGlyZWN0aXZlKFwibW9kZWxcIiwgKGVsLCB7bW9kaWZpZXJzLCBleHByZXNzaW9ufSwge2VmZmVjdDogZWZmZWN0MywgY2xlYW51cH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBsZXQgYXNzaWdubWVudEV4cHJlc3Npb24gPSBgJHtleHByZXNzaW9ufSA9IHJpZ2h0U2lkZU9mRXhwcmVzc2lvbigkZXZlbnQsICR7ZXhwcmVzc2lvbn0pYDtcbiAgbGV0IGV2YWx1YXRlQXNzaWdubWVudCA9IGV2YWx1YXRlTGF0ZXIoZWwsIGFzc2lnbm1lbnRFeHByZXNzaW9uKTtcbiAgdmFyIGV2ZW50ID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiIHx8IFtcImNoZWNrYm94XCIsIFwicmFkaW9cIl0uaW5jbHVkZXMoZWwudHlwZSkgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwibGF6eVwiKSA/IFwiY2hhbmdlXCIgOiBcImlucHV0XCI7XG4gIGxldCBhc3NpZ21lbnRGdW5jdGlvbiA9IGdlbmVyYXRlQXNzaWdubWVudEZ1bmN0aW9uKGVsLCBtb2RpZmllcnMsIGV4cHJlc3Npb24pO1xuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBldmFsdWF0ZUFzc2lnbm1lbnQoKCkgPT4ge1xuICAgIH0sIHtzY29wZToge1xuICAgICAgJGV2ZW50OiBlLFxuICAgICAgcmlnaHRTaWRlT2ZFeHByZXNzaW9uOiBhc3NpZ21lbnRGdW5jdGlvblxuICAgIH19KTtcbiAgfSk7XG4gIGNsZWFudXAoKCkgPT4gcmVtb3ZlTGlzdGVuZXIoKSk7XG4gIGVsLl94X2ZvcmNlTW9kZWxVcGRhdGUgPSAoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDAgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpXG4gICAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgIHdpbmRvdy5mcm9tTW9kZWwgPSB0cnVlO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIFwidmFsdWVcIiwgdmFsdWUpKTtcbiAgICAgIGRlbGV0ZSB3aW5kb3cuZnJvbU1vZGVsO1xuICAgIH0pO1xuICB9O1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwidW5pbnRydXNpdmVcIikgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGVsKSlcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlKCk7XG4gIH0pO1xufSk7XG5mdW5jdGlvbiBnZW5lcmF0ZUFzc2lnbm1lbnRGdW5jdGlvbihlbCwgbW9kaWZpZXJzLCBleHByZXNzaW9uKSB7XG4gIGlmIChlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiAoZXZlbnQsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgIHJldHVybiBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQgJiYgZXZlbnQuZGV0YWlsICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmRldGFpbCB8fCBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gbW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpID8gc2FmZVBhcnNlTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkgOiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jaGVja2VkID8gY3VycmVudFZhbHVlLmNvbmNhdChbbmV3VmFsdWVdKSA6IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGVsMikgPT4gIWNoZWNrZWRBdHRyTG9vc2VDb21wYXJlMihlbDIsIG5ld1ZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpID8gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgICByZXR1cm4gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKTtcbiAgICAgICAgfSkgOiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcmF3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHJldHVybiBtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikgPyBzYWZlUGFyc2VOdW1iZXIocmF3VmFsdWUpIDogbW9kaWZpZXJzLmluY2x1ZGVzKFwidHJpbVwiKSA/IHJhd1ZhbHVlLnRyaW0oKSA6IHJhd1ZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKSB7XG4gIGxldCBudW1iZXIgPSByYXdWYWx1ZSA/IHBhcnNlRmxvYXQocmF3VmFsdWUpIDogbnVsbDtcbiAgcmV0dXJuIGlzTnVtZXJpYzIobnVtYmVyKSA/IG51bWJlciA6IHJhd1ZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyKHZhbHVlQSwgdmFsdWVCKSB7XG4gIHJldHVybiB2YWx1ZUEgPT0gdmFsdWVCO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljMihzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtY2xvYWsuanNcbmRpcmVjdGl2ZShcImNsb2FrXCIsIChlbCkgPT4gcXVldWVNaWNyb3Rhc2soKCkgPT4gbXV0YXRlRG9tKCgpID0+IGVsLnJlbW92ZUF0dHJpYnV0ZShwcmVmaXgoXCJjbG9ha1wiKSkpKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaW5pdC5qc1xuYWRkSW5pdFNlbGVjdG9yKCgpID0+IGBbJHtwcmVmaXgoXCJpbml0XCIpfV1gKTtcbmRpcmVjdGl2ZShcImluaXRcIiwgc2tpcER1cmluZ0Nsb25lKChlbCwge2V4cHJlc3Npb259KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiAhIWV4cHJlc3Npb24udHJpbSgpICYmIGV2YWx1YXRlKGVsLCBleHByZXNzaW9uLCB7fSwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwge30sIGZhbHNlKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10ZXh0LmpzXG5kaXJlY3RpdmUoXCJ0ZXh0XCIsIChlbCwge2V4cHJlc3Npb259LCB7ZWZmZWN0OiBlZmZlY3QzLCBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMn0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGV4cHJlc3Npb24pO1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaHRtbC5qc1xuZGlyZWN0aXZlKFwiaHRtbFwiLCAoZWwsIHtleHByZXNzaW9ufSwge2VmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjJ9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgZWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtYmluZC5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCI6XCIsIGludG8ocHJlZml4KFwiYmluZDpcIikpKSk7XG5kaXJlY3RpdmUoXCJiaW5kXCIsIChlbCwge3ZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24sIG9yaWdpbmFsfSwge2VmZmVjdDogZWZmZWN0M30pID0+IHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm4gYXBwbHlCaW5kaW5nc09iamVjdChlbCwgZXhwcmVzc2lvbiwgb3JpZ2luYWwsIGVmZmVjdDMpO1xuICBpZiAodmFsdWUgPT09IFwia2V5XCIpXG4gICAgcmV0dXJuIHN0b3JlS2V5Rm9yWEZvcihlbCwgZXhwcmVzc2lvbik7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSlcbiAgICAgIHJlc3VsdCA9IFwiXCI7XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIHZhbHVlLCByZXN1bHQsIG1vZGlmaWVycykpO1xuICB9KSk7XG59KTtcbmZ1bmN0aW9uIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIGV4cHJlc3Npb24sIG9yaWdpbmFsLCBlZmZlY3QzKSB7XG4gIGxldCBnZXRCaW5kaW5ncyA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBsZXQgY2xlYW51cFJ1bm5lcnMgPSBbXTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgd2hpbGUgKGNsZWFudXBSdW5uZXJzLmxlbmd0aClcbiAgICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gICAgZ2V0QmluZGluZ3MoKGJpbmRpbmdzKSA9PiB7XG4gICAgICBsZXQgYXR0cmlidXRlcyA9IE9iamVjdC5lbnRyaWVzKGJpbmRpbmdzKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7bmFtZSwgdmFsdWV9KSk7XG4gICAgICBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKS5mb3JFYWNoKCh7bmFtZSwgdmFsdWV9LCBpbmRleCkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzW2luZGV4XSA9IHtcbiAgICAgICAgICBuYW1lOiBgeC1iaW5kOiR7bmFtZX1gLFxuICAgICAgICAgIHZhbHVlOiBgXCIke3ZhbHVlfVwiYFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbCkubWFwKChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xlYW51cFJ1bm5lcnMucHVzaChoYW5kbGUucnVuQ2xlYW51cHMpO1xuICAgICAgICBoYW5kbGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHN0b3JlS2V5Rm9yWEZvcihlbCwgZXhwcmVzc2lvbikge1xuICBlbC5feF9rZXlFeHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1kYXRhLmpzXG5hZGRSb290U2VsZWN0b3IoKCkgPT4gYFske3ByZWZpeChcImRhdGFcIil9XWApO1xuZGlyZWN0aXZlKFwiZGF0YVwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7ZXhwcmVzc2lvbn0sIHtjbGVhbnVwfSkgPT4ge1xuICBleHByZXNzaW9uID0gZXhwcmVzc2lvbiA9PT0gXCJcIiA/IFwie31cIiA6IGV4cHJlc3Npb247XG4gIGxldCBtYWdpY0NvbnRleHQgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKG1hZ2ljQ29udGV4dCwgZWwpO1xuICBsZXQgZGF0YVByb3ZpZGVyQ29udGV4dCA9IHt9O1xuICBpbmplY3REYXRhUHJvdmlkZXJzKGRhdGFQcm92aWRlckNvbnRleHQsIG1hZ2ljQ29udGV4dCk7XG4gIGxldCBkYXRhMiA9IGV2YWx1YXRlKGVsLCBleHByZXNzaW9uLCB7c2NvcGU6IGRhdGFQcm92aWRlckNvbnRleHR9KTtcbiAgaW5qZWN0TWFnaWNzKGRhdGEyLCBlbCk7XG4gIGxldCByZWFjdGl2ZURhdGEgPSByZWFjdGl2ZShkYXRhMik7XG4gIGluaXRJbnRlcmNlcHRvcnMocmVhY3RpdmVEYXRhKTtcbiAgbGV0IHVuZG8gPSBhZGRTY29wZVRvTm9kZShlbCwgcmVhY3RpdmVEYXRhKTtcbiAgcmVhY3RpdmVEYXRhW1wiaW5pdFwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiaW5pdFwiXSk7XG4gIGNsZWFudXAoKCkgPT4ge1xuICAgIHVuZG8oKTtcbiAgICByZWFjdGl2ZURhdGFbXCJkZXN0cm95XCJdICYmIGV2YWx1YXRlKGVsLCByZWFjdGl2ZURhdGFbXCJkZXN0cm95XCJdKTtcbiAgfSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtc2hvdy5qc1xuZGlyZWN0aXZlKFwic2hvd1wiLCAoZWwsIHttb2RpZmllcnMsIGV4cHJlc3Npb259LCB7ZWZmZWN0OiBlZmZlY3QzfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGxldCBoaWRlID0gKCkgPT4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWwuX3hfaXNTaG93biA9IGZhbHNlO1xuICB9KTtcbiAgbGV0IHNob3cgPSAoKSA9PiBtdXRhdGVEb20oKCkgPT4ge1xuICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDEgJiYgZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgfVxuICAgIGVsLl94X2lzU2hvd24gPSB0cnVlO1xuICB9KTtcbiAgbGV0IGNsaWNrQXdheUNvbXBhdGlibGVTaG93ID0gKCkgPT4gc2V0VGltZW91dChzaG93KTtcbiAgbGV0IHRvZ2dsZSA9IG9uY2UoKHZhbHVlKSA9PiB2YWx1ZSA/IHNob3coKSA6IGhpZGUoKSwgKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGVsLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMoZWwsIHZhbHVlLCBzaG93LCBoaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPyBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpIDogaGlkZSgpO1xuICAgIH1cbiAgfSk7XG4gIGxldCBvbGRWYWx1ZTtcbiAgbGV0IGZpcnN0VGltZSA9IHRydWU7XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgIGlmICghZmlyc3RUaW1lICYmIHZhbHVlID09PSBvbGRWYWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW1tZWRpYXRlXCIpKVxuICAgICAgdmFsdWUgPyBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpIDogaGlkZSgpO1xuICAgIHRvZ2dsZSh2YWx1ZSk7XG4gICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgfSkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtZm9yLmpzXG5kaXJlY3RpdmUoXCJmb3JcIiwgKGVsLCB7ZXhwcmVzc2lvbn0sIHtlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXB9KSA9PiB7XG4gIGxldCBpdGVyYXRvck5hbWVzID0gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGVJdGVtcyA9IGV2YWx1YXRlTGF0ZXIoZWwsIGl0ZXJhdG9yTmFtZXMuaXRlbXMpO1xuICBsZXQgZXZhbHVhdGVLZXkgPSBldmFsdWF0ZUxhdGVyKGVsLCBlbC5feF9rZXlFeHByZXNzaW9uIHx8IFwiaW5kZXhcIik7XG4gIGVsLl94X3ByZXZLZXlzID0gW107XG4gIGVsLl94X2xvb2t1cCA9IHt9O1xuICBlZmZlY3QzKCgpID0+IGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSk7XG4gIGNsZWFudXAoKCkgPT4ge1xuICAgIE9iamVjdC52YWx1ZXMoZWwuX3hfbG9va3VwKS5mb3JFYWNoKChlbDIpID0+IGVsMi5yZW1vdmUoKSk7XG4gICAgZGVsZXRlIGVsLl94X3ByZXZLZXlzO1xuICAgIGRlbGV0ZSBlbC5feF9sb29rdXA7XG4gIH0pO1xufSk7XG5mdW5jdGlvbiBsb29wKGVsLCBpdGVyYXRvck5hbWVzLCBldmFsdWF0ZUl0ZW1zLCBldmFsdWF0ZUtleSkge1xuICBsZXQgaXNPYmplY3QgPSAoaSkgPT4gdHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaSk7XG4gIGxldCB0ZW1wbGF0ZUVsID0gZWw7XG4gIGV2YWx1YXRlSXRlbXMoKGl0ZW1zKSA9PiB7XG4gICAgaWYgKGlzTnVtZXJpYzMoaXRlbXMpICYmIGl0ZW1zID49IDApIHtcbiAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShBcnJheShpdGVtcykua2V5cygpLCAoaSkgPT4gaSArIDEpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMgPT09IHZvaWQgMClcbiAgICAgIGl0ZW1zID0gW107XG4gICAgbGV0IGxvb2t1cCA9IGVsLl94X2xvb2t1cDtcbiAgICBsZXQgcHJldktleXMgPSBlbC5feF9wcmV2S2V5cztcbiAgICBsZXQgc2NvcGVzID0gW107XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBpZiAoaXNPYmplY3QoaXRlbXMpKSB7XG4gICAgICBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKGl0ZW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBsZXQgc2NvcGUgPSBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCB2YWx1ZSwga2V5LCBpdGVtcyk7XG4gICAgICAgIGV2YWx1YXRlS2V5KCh2YWx1ZTIpID0+IGtleXMucHVzaCh2YWx1ZTIpLCB7c2NvcGU6IHtpbmRleDoga2V5LCAuLi5zY29wZX19KTtcbiAgICAgICAgc2NvcGVzLnB1c2goc2NvcGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNjb3BlID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbXNbaV0sIGksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlKSA9PiBrZXlzLnB1c2godmFsdWUpLCB7c2NvcGU6IHtpbmRleDogaSwgLi4uc2NvcGV9fSk7XG4gICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGFkZHMgPSBbXTtcbiAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICBsZXQgcmVtb3ZlcyA9IFtdO1xuICAgIGxldCBzYW1lcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBwcmV2S2V5c1tpXTtcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgICAgIHJlbW92ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBwcmV2S2V5cyA9IHByZXZLZXlzLmZpbHRlcigoa2V5KSA9PiAhcmVtb3Zlcy5pbmNsdWRlcyhrZXkpKTtcbiAgICBsZXQgbGFzdEtleSA9IFwidGVtcGxhdGVcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHByZXZJbmRleCA9IHByZXZLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgIGlmIChwcmV2SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXkpO1xuICAgICAgICBhZGRzLnB1c2goW2xhc3RLZXksIGldKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldkluZGV4ICE9PSBpKSB7XG4gICAgICAgIGxldCBrZXlJblNwb3QgPSBwcmV2S2V5cy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIGxldCBrZXlGb3JTcG90ID0gcHJldktleXMuc3BsaWNlKHByZXZJbmRleCAtIDEsIDEpWzBdO1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UoaSwgMCwga2V5Rm9yU3BvdCk7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShwcmV2SW5kZXgsIDAsIGtleUluU3BvdCk7XG4gICAgICAgIG1vdmVzLnB1c2goW2tleUluU3BvdCwga2V5Rm9yU3BvdF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgICAgbGFzdEtleSA9IGtleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gcmVtb3Zlc1tpXTtcbiAgICAgIGxvb2t1cFtrZXldLnJlbW92ZSgpO1xuICAgICAgbG9va3VwW2tleV0gPSBudWxsO1xuICAgICAgZGVsZXRlIGxvb2t1cFtrZXldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2tleUluU3BvdCwga2V5Rm9yU3BvdF0gPSBtb3Zlc1tpXTtcbiAgICAgIGxldCBlbEluU3BvdCA9IGxvb2t1cFtrZXlJblNwb3RdO1xuICAgICAgbGV0IGVsRm9yU3BvdCA9IGxvb2t1cFtrZXlGb3JTcG90XTtcbiAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWxGb3JTcG90LmFmdGVyKG1hcmtlcik7XG4gICAgICAgIGVsSW5TcG90LmFmdGVyKGVsRm9yU3BvdCk7XG4gICAgICAgIG1hcmtlci5iZWZvcmUoZWxJblNwb3QpO1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIHJlZnJlc2hTY29wZShlbEZvclNwb3QsIHNjb3Blc1trZXlzLmluZGV4T2Yoa2V5Rm9yU3BvdCldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2xhc3RLZXkyLCBpbmRleF0gPSBhZGRzW2ldO1xuICAgICAgbGV0IGxhc3RFbCA9IGxhc3RLZXkyID09PSBcInRlbXBsYXRlXCIgPyB0ZW1wbGF0ZUVsIDogbG9va3VwW2xhc3RLZXkyXTtcbiAgICAgIGxldCBzY29wZSA9IHNjb3Blc1tpbmRleF07XG4gICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBsZXQgY2xvbmUyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZUVsLmNvbnRlbnQsIHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCByZWFjdGl2ZShzY29wZSksIHRlbXBsYXRlRWwpO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgbGFzdEVsLmFmdGVyKGNsb25lMik7XG4gICAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHdhcm4oXCJ4LWZvciBrZXkgY2Fubm90IGJlIGFuIG9iamVjdCwgaXQgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBpbnRlZ2VyXCIsIHRlbXBsYXRlRWwpO1xuICAgICAgfVxuICAgICAgbG9va3VwW2tleV0gPSBjbG9uZTI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlZnJlc2hTY29wZShsb29rdXBbc2FtZXNbaV1dLCBzY29wZXNba2V5cy5pbmRleE9mKHNhbWVzW2ldKV0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZUVsLl94X3ByZXZLZXlzID0ga2V5cztcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXJzZUZvckV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgZm9ySXRlcmF0b3JSRSA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLztcbiAgbGV0IHN0cmlwUGFyZW5zUkUgPSAvXlxccypcXCh8XFwpXFxzKiQvZztcbiAgbGV0IGZvckFsaWFzUkUgPSAvKFtcXHNcXFNdKj8pXFxzKyg/OmlufG9mKVxccysoW1xcc1xcU10qKS87XG4gIGxldCBpbk1hdGNoID0gZXhwcmVzc2lvbi5tYXRjaChmb3JBbGlhc1JFKTtcbiAgaWYgKCFpbk1hdGNoKVxuICAgIHJldHVybjtcbiAgbGV0IHJlcyA9IHt9O1xuICByZXMuaXRlbXMgPSBpbk1hdGNoWzJdLnRyaW0oKTtcbiAgbGV0IGl0ZW0gPSBpbk1hdGNoWzFdLnJlcGxhY2Uoc3RyaXBQYXJlbnNSRSwgXCJcIikudHJpbSgpO1xuICBsZXQgaXRlcmF0b3JNYXRjaCA9IGl0ZW0ubWF0Y2goZm9ySXRlcmF0b3JSRSk7XG4gIGlmIChpdGVyYXRvck1hdGNoKSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtLnJlcGxhY2UoZm9ySXRlcmF0b3JSRSwgXCJcIikudHJpbSgpO1xuICAgIHJlcy5pbmRleCA9IGl0ZXJhdG9yTWF0Y2hbMV0udHJpbSgpO1xuICAgIGlmIChpdGVyYXRvck1hdGNoWzJdKSB7XG4gICAgICByZXMuY29sbGVjdGlvbiA9IGl0ZXJhdG9yTWF0Y2hbMl0udHJpbSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuaXRlbSA9IGl0ZW07XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW0sIGluZGV4LCBpdGVtcykge1xuICBsZXQgc2NvcGVWYXJpYWJsZXMgPSB7fTtcbiAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIGxldCBuYW1lcyA9IGl0ZXJhdG9yTmFtZXMuaXRlbS5yZXBsYWNlKFwiW1wiLCBcIlwiKS5yZXBsYWNlKFwiXVwiLCBcIlwiKS5zcGxpdChcIixcIikubWFwKChpKSA9PiBpLnRyaW0oKSk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSwgaSkgPT4ge1xuICAgICAgc2NvcGVWYXJpYWJsZXNbbmFtZV0gPSBpdGVtW2ldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKC9eXFx7LipcXH0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgdHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLml0ZW1dID0gaXRlbTtcbiAgfVxuICBpZiAoaXRlcmF0b3JOYW1lcy5pbmRleClcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmluZGV4XSA9IGluZGV4O1xuICBpZiAoaXRlcmF0b3JOYW1lcy5jb2xsZWN0aW9uKVxuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbl0gPSBpdGVtcztcbiAgcmV0dXJuIHNjb3BlVmFyaWFibGVzO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljMyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtcmVmLmpzXG5mdW5jdGlvbiBoYW5kbGVyMigpIHtcbn1cbmhhbmRsZXIyLmlubGluZSA9IChlbCwge2V4cHJlc3Npb259LCB7Y2xlYW51cH0pID0+IHtcbiAgbGV0IHJvb3QgPSBjbG9zZXN0Um9vdChlbCk7XG4gIGlmICghcm9vdC5feF9yZWZzKVxuICAgIHJvb3QuX3hfcmVmcyA9IHt9O1xuICByb290Ll94X3JlZnNbZXhwcmVzc2lvbl0gPSBlbDtcbiAgY2xlYW51cCgoKSA9PiBkZWxldGUgcm9vdC5feF9yZWZzW2V4cHJlc3Npb25dKTtcbn07XG5kaXJlY3RpdmUoXCJyZWZcIiwgaGFuZGxlcjIpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlmLmpzXG5kaXJlY3RpdmUoXCJpZlwiLCAoZWwsIHtleHByZXNzaW9ufSwge2VmZmVjdDogZWZmZWN0MywgY2xlYW51cH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBsZXQgc2hvdyA9ICgpID0+IHtcbiAgICBpZiAoZWwuX3hfY3VycmVudElmRWwpXG4gICAgICByZXR1cm4gZWwuX3hfY3VycmVudElmRWw7XG4gICAgbGV0IGNsb25lMiA9IGVsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwge30sIGVsKTtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgZWwuYWZ0ZXIoY2xvbmUyKTtcbiAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgfSk7XG4gICAgZWwuX3hfY3VycmVudElmRWwgPSBjbG9uZTI7XG4gICAgZWwuX3hfdW5kb0lmID0gKCkgPT4ge1xuICAgICAgY2xvbmUyLnJlbW92ZSgpO1xuICAgICAgZGVsZXRlIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIH07XG4gICAgcmV0dXJuIGNsb25lMjtcbiAgfTtcbiAgbGV0IGhpZGUgPSAoKSA9PiB7XG4gICAgaWYgKCFlbC5feF91bmRvSWYpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfdW5kb0lmKCk7XG4gICAgZGVsZXRlIGVsLl94X3VuZG9JZjtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUgPyBzaG93KCkgOiBoaWRlKCk7XG4gIH0pKTtcbiAgY2xlYW51cCgoKSA9PiBlbC5feF91bmRvSWYgJiYgZWwuX3hfdW5kb0lmKCkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtb24uanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiQFwiLCBpbnRvKHByZWZpeChcIm9uOlwiKSkpKTtcbmRpcmVjdGl2ZShcIm9uXCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHt2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9ufSwge2NsZWFudXB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBleHByZXNzaW9uID8gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikgOiAoKSA9PiB7XG4gIH07XG4gIGxldCByZW1vdmVMaXN0ZW5lciA9IG9uKGVsLCB2YWx1ZSwgbW9kaWZpZXJzLCAoZSkgPT4ge1xuICAgIGV2YWx1YXRlMigoKSA9PiB7XG4gICAgfSwge3Njb3BlOiB7JGV2ZW50OiBlfSwgcGFyYW1zOiBbZV19KTtcbiAgfSk7XG4gIGNsZWFudXAoKCkgPT4gcmVtb3ZlTGlzdGVuZXIoKSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbmRleC5qc1xuYWxwaW5lX2RlZmF1bHQuc2V0RXZhbHVhdG9yKG5vcm1hbEV2YWx1YXRvcik7XG5hbHBpbmVfZGVmYXVsdC5zZXRSZWFjdGl2aXR5RW5naW5lKHtyZWFjdGl2ZTogaW1wb3J0X3JlYWN0aXZpdHk5LnJlYWN0aXZlLCBlZmZlY3Q6IGltcG9ydF9yZWFjdGl2aXR5OS5lZmZlY3QsIHJlbGVhc2U6IGltcG9ydF9yZWFjdGl2aXR5OS5zdG9wLCByYXc6IGltcG9ydF9yZWFjdGl2aXR5OS50b1Jhd30pO1xudmFyIHNyY19kZWZhdWx0ID0gYWxwaW5lX2RlZmF1bHQ7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL2J1aWxkcy9tb2R1bGUuanNcbnZhciBtb2R1bGVfZGVmYXVsdCA9IHNyY19kZWZhdWx0O1xuZXhwb3J0IHtcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICJmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuLy8gT2xkZXIgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCBldmVudCBvcHRpb25zLCBmZWF0dXJlIGRldGVjdCBpdC5cblxuLy8gQWRvcHRlZCBhbmQgbW9kaWZpZWQgc29sdXRpb24gZnJvbSBCb2hkYW4gRGlkdWtoICgyMDE3KVxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDE1OTQ5OTcvaW9zLTEwLXNhZmFyaS1wcmV2ZW50LXNjcm9sbGluZy1iZWhpbmQtYS1maXhlZC1vdmVybGF5LWFuZC1tYWludGFpbi1zY3JvbGwtcG9zaVxuXG52YXIgaGFzUGFzc2l2ZUV2ZW50cyA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBwYXNzaXZlVGVzdE9wdGlvbnMgPSB7XG4gICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICBoYXNQYXNzaXZlRXZlbnRzID0gdHJ1ZTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlVGVzdE9wdGlvbnMpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlVGVzdE9wdGlvbnMpO1xufVxuXG52YXIgaXNJb3NEZXZpY2UgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0gJiYgKC9pUChhZHxob25lfG9kKS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKSB8fCB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKTtcblxuXG52YXIgbG9ja3MgPSBbXTtcbnZhciBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbnZhciBpbml0aWFsQ2xpZW50WSA9IC0xO1xudmFyIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IHZvaWQgMDtcbnZhciBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSB2b2lkIDA7XG5cbi8vIHJldHVybnMgdHJ1ZSBpZiBgZWxgIHNob3VsZCBiZSBhbGxvd2VkIHRvIHJlY2VpdmUgdG91Y2htb3ZlIGV2ZW50cy5cbnZhciBhbGxvd1RvdWNoTW92ZSA9IGZ1bmN0aW9uIGFsbG93VG91Y2hNb3ZlKGVsKSB7XG4gIHJldHVybiBsb2Nrcy5zb21lKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgaWYgKGxvY2sub3B0aW9ucy5hbGxvd1RvdWNoTW92ZSAmJiBsb2NrLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUoZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxudmFyIHByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gcHJldmVudERlZmF1bHQocmF3RXZlbnQpIHtcbiAgdmFyIGUgPSByYXdFdmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgLy8gRm9yIHRoZSBjYXNlIHdoZXJlYnkgY29uc3VtZXJzIGFkZHMgYSB0b3VjaG1vdmUgZXZlbnQgbGlzdGVuZXIgdG8gZG9jdW1lbnQuXG4gIC8vIFJlY2FsbCB0aGF0IHdlIGRvIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gIC8vIGluIGRpc2FibGVCb2R5U2Nyb2xsIC0gc28gaWYgd2UgcHJvdmlkZSB0aGlzIG9wcG9ydHVuaXR5IHRvIGFsbG93VG91Y2hNb3ZlLCB0aGVuXG4gIC8vIHRoZSB0b3VjaG1vdmUgZXZlbnQgb24gZG9jdW1lbnQgd2lsbCBicmVhay5cbiAgaWYgKGFsbG93VG91Y2hNb3ZlKGUudGFyZ2V0KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gRG8gbm90IHByZXZlbnQgaWYgdGhlIGV2ZW50IGhhcyBtb3JlIHRoYW4gb25lIHRvdWNoICh1c3VhbGx5IG1lYW5pbmcgdGhpcyBpcyBhIG11bHRpIHRvdWNoIGdlc3R1cmUgbGlrZSBwaW5jaCB0byB6b29tKS5cbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBzZXRPdmVyZmxvd0hpZGRlbiA9IGZ1bmN0aW9uIHNldE92ZXJmbG93SGlkZGVuKG9wdGlvbnMpIHtcbiAgLy8gSWYgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0IGlzIGFscmVhZHkgc2V0LCBkb24ndCBzZXQgaXQgYWdhaW4uXG4gIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBfcmVzZXJ2ZVNjcm9sbEJhckdhcCA9ICEhb3B0aW9ucyAmJiBvcHRpb25zLnJlc2VydmVTY3JvbGxCYXJHYXAgPT09IHRydWU7XG4gICAgdmFyIHNjcm9sbEJhckdhcCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgaWYgKF9yZXNlcnZlU2Nyb2xsQmFyR2FwICYmIHNjcm9sbEJhckdhcCA+IDApIHtcbiAgICAgIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJHYXAgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyBpcyBhbHJlYWR5IHNldCwgZG9uJ3Qgc2V0IGl0IGFnYWluLlxuICBpZiAocHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxufTtcblxudmFyIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcgPSBmdW5jdGlvbiByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCkge1xuICBpZiAocHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHByZXZpb3VzQm9keVBhZGRpbmdSaWdodDtcblxuICAgIC8vIFJlc3RvcmUgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0IHRvIHVuZGVmaW5lZCBzbyBzZXRPdmVyZmxvd0hpZGRlbiBrbm93cyBpdFxuICAgIC8vIGNhbiBiZSBzZXQgYWdhaW4uXG4gICAgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZztcblxuICAgIC8vIFJlc3RvcmUgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nIHRvIHVuZGVmaW5lZFxuICAgIC8vIHNvIHNldE92ZXJmbG93SGlkZGVuIGtub3dzIGl0IGNhbiBiZSBzZXQgYWdhaW4uXG4gICAgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9zY3JvbGxIZWlnaHQjUHJvYmxlbXNfYW5kX3NvbHV0aW9uc1xudmFyIGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCA9IGZ1bmN0aW9uIGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCh0YXJnZXRFbGVtZW50KSB7XG4gIHJldHVybiB0YXJnZXRFbGVtZW50ID8gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB0YXJnZXRFbGVtZW50LnNjcm9sbFRvcCA8PSB0YXJnZXRFbGVtZW50LmNsaWVudEhlaWdodCA6IGZhbHNlO1xufTtcblxudmFyIGhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICB2YXIgY2xpZW50WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSAtIGluaXRpYWxDbGllbnRZO1xuXG4gIGlmIChhbGxvd1RvdWNoTW92ZShldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRhcmdldEVsZW1lbnQgJiYgdGFyZ2V0RWxlbWVudC5zY3JvbGxUb3AgPT09IDAgJiYgY2xpZW50WSA+IDApIHtcbiAgICAvLyBlbGVtZW50IGlzIGF0IHRoZSB0b3Agb2YgaXRzIHNjcm9sbC5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICB9XG5cbiAgaWYgKGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCh0YXJnZXRFbGVtZW50KSAmJiBjbGllbnRZIDwgMCkge1xuICAgIC8vIGVsZW1lbnQgaXMgYXQgdGhlIGJvdHRvbSBvZiBpdHMgc2Nyb2xsLlxuICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgdmFyIGRpc2FibGVCb2R5U2Nyb2xsID0gZnVuY3Rpb24gZGlzYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCwgb3B0aW9ucykge1xuICAvLyB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWRcbiAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdkaXNhYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGRpc2FibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGRpc2FibGVCb2R5U2Nyb2xsIG11c3Qgbm90IGhhdmUgYmVlbiBjYWxsZWQgb24gdGhpcyB0YXJnZXRFbGVtZW50IGJlZm9yZVxuICBpZiAobG9ja3Muc29tZShmdW5jdGlvbiAobG9jaykge1xuICAgIHJldHVybiBsb2NrLnRhcmdldEVsZW1lbnQgPT09IHRhcmdldEVsZW1lbnQ7XG4gIH0pKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGxvY2sgPSB7XG4gICAgdGFyZ2V0RWxlbWVudDogdGFyZ2V0RWxlbWVudCxcbiAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9XG4gIH07XG5cbiAgbG9ja3MgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGxvY2tzKSwgW2xvY2tdKTtcblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGRldGVjdCBzaW5nbGUgdG91Y2guXG4gICAgICAgIGluaXRpYWxDbGllbnRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgfVxuICAgIH07XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGRldGVjdCBzaW5nbGUgdG91Y2guXG4gICAgICAgIGhhbmRsZVNjcm9sbChldmVudCwgdGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghZG9jdW1lbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRPdmVyZmxvd0hpZGRlbihvcHRpb25zKTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcyA9IGZ1bmN0aW9uIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzKCkge1xuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICAvLyBDbGVhciBhbGwgbG9ja3Mgb250b3VjaHN0YXJ0L29udG91Y2htb3ZlIGhhbmRsZXJzLCBhbmQgdGhlIHJlZmVyZW5jZXMuXG4gICAgbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAobG9jaykge1xuICAgICAgbG9jay50YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IG51bGw7XG4gICAgICBsb2NrLnRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgaWYgKGRvY3VtZW50TGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgaW5pdGlhbCBjbGllbnRZLlxuICAgIGluaXRpYWxDbGllbnRZID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZU92ZXJmbG93U2V0dGluZygpO1xuICB9XG5cbiAgbG9ja3MgPSBbXTtcbn07XG5cbmV4cG9ydCB2YXIgZW5hYmxlQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCkge1xuICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ2VuYWJsZUJvZHlTY3JvbGwgdW5zdWNjZXNzZnVsIC0gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY2FsbGluZyBlbmFibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxvY2tzID0gbG9ja3MuZmlsdGVyKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgcmV0dXJuIGxvY2sudGFyZ2V0RWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudDtcbiAgfSk7XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuXG4gICAgaWYgKGRvY3VtZW50TGlzdGVuZXJBZGRlZCAmJiBsb2Nrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmICghbG9ja3MubGVuZ3RoKSB7XG4gICAgcmVzdG9yZU92ZXJmbG93U2V0dGluZygpO1xuICB9XG59O1xuXG4iLCAiLy8gdW5jb21tZW50IGZvciBwYWNraW5nXG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tIFwiYm9keS1zY3JvbGwtbG9ja1wiO1xuXG5jbGFzcyBJbWFnZUNvbXBhcmUge1xuICBjb25zdHJ1Y3RvcihlbCwgc2V0dGluZ3MgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY29udHJvbENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGNvbnRyb2xTaGFkb3c6IHRydWUsXG4gICAgICBhZGRDaXJjbGU6IGZhbHNlLFxuICAgICAgYWRkQ2lyY2xlQmx1cjogdHJ1ZSxcbiAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgbGFiZWxPcHRpb25zOiB7XG4gICAgICAgIGJlZm9yZTogXCJCZWZvcmVcIixcbiAgICAgICAgYWZ0ZXI6IFwiQWZ0ZXJcIixcbiAgICAgICAgb25Ib3ZlcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc21vb3RoaW5nOiB0cnVlLFxuICAgICAgc21vb3RoaW5nQW1vdW50OiAxMDAsXG4gICAgICBob3ZlclN0YXJ0OiBmYWxzZSxcbiAgICAgIHZlcnRpY2FsTW9kZTogZmFsc2UsXG4gICAgICBzdGFydGluZ1BvaW50OiA1MCxcbiAgICAgIGZsdWlkTW9kZTogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBzZXR0aW5ncyk7XG5cbiAgICB0aGlzLnNhZmFyaUFnZW50ID1cbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSAhPSAtMSAmJlxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpID09IC0xO1xuXG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy53cmFwcGVyID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsO1xuICAgIHRoaXMuYXJyb3dDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuYXJyb3dBbmltYXRvciA9IFtdO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zbGlkZVdpZHRoID0gNTA7XG4gICAgdGhpcy5saW5lV2lkdGggPSAyO1xuICAgIHRoaXMuYXJyb3dDb29yZGluYXRlcyA9IHtcbiAgICAgIGNpcmNsZTogWzUsIDNdLFxuICAgICAgc3RhbmRhcmQ6IFs4LCAwXSxcbiAgICB9O1xuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgLy8gVGVtcG9yYXJpbHkgZGlzYWJsZSBTYWZhcmkgc21vb3RoaW5nXG4gICAgaWYgKHRoaXMuc2FmYXJpQWdlbnQpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc21vb3RoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fc2hhcGVDb250YWluZXIoKTtcbiAgICB0aGlzLl9nZXRJbWFnZXMoKTtcbiAgICB0aGlzLl9idWlsZENvbnRyb2woKTtcbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIF9ldmVudHMoKSB7XG4gICAgbGV0IGJvZHlTdHlsZXMgPSBgXG5cbiAgICBgO1xuXG4gICAgLy8gRGVza3RvcCBldmVudHNcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0cnVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImljdl9fYm9keVwiKTtcbiAgICAgIGRpc2FibGVCb2R5U2Nyb2xsKHRoaXMuZWwsIHtyZXNlcnZlU2Nyb2xsQmFyR2FwOiB0cnVlfSk7XG4gICAgICB0aGlzLl9zbGlkZUNvbXBhcmUoZXYpO1xuICAgIH0pO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibW91c2Vtb3ZlXCIsXG4gICAgICAoZXYpID0+IHRoaXMuYWN0aXZlICYmIHRoaXMuX3NsaWRlQ29tcGFyZShldilcbiAgICApO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB0aGlzLl9hY3RpdmF0ZShmYWxzZSkpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaWN2X19ib2R5XCIpO1xuICAgICAgZW5hYmxlQm9keVNjcm9sbCh0aGlzLmVsKTtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIC8vIE1vYmlsZSBldmVudHNcblxuICAgIHRoaXMuY29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodHJ1ZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJpY3ZfX2JvZHlcIik7XG4gICAgICBkaXNhYmxlQm9keVNjcm9sbCh0aGlzLmVsLCB7cmVzZXJ2ZVNjcm9sbEJhckdhcDogdHJ1ZX0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChldikgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgJiYgdGhpcy5fc2xpZGVDb21wYXJlKGV2KTtcbiAgICB9KTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZShmYWxzZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJpY3ZfX2JvZHlcIik7XG4gICAgICBlbmFibGVCb2R5U2Nyb2xsKHRoaXMuZWwpO1xuICAgIH0pO1xuXG4gICAgLy8gaG92ZXJcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXR0aW5ncy5ob3ZlclN0YXJ0ICYmIHRoaXMuX2FjdGl2YXRlKHRydWUpO1xuICAgICAgbGV0IGNvb3JkID0gdGhpcy5zZXR0aW5ncy5hZGRDaXJjbGVcbiAgICAgICAgPyB0aGlzLmFycm93Q29vcmRpbmF0ZXMuY2lyY2xlXG4gICAgICAgIDogdGhpcy5hcnJvd0Nvb3JkaW5hdGVzLnN0YW5kYXJkO1xuXG4gICAgICB0aGlzLmFycm93QW5pbWF0b3IuZm9yRWFjaCgoYW5pbSwgaSkgPT4ge1xuICAgICAgICBhbmltLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICR7XG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGVcbiAgICAgICAgICAgID8gYHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke2Nvb3JkWzFdICogKGkgPT09IDAgPyAxIDogLTEpfXB4KTtgXG4gICAgICAgICAgICA6IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtjb29yZFsxXSAqIChpID09PSAwID8gMSA6IC0xKX1weCk7YFxuICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgbGV0IGNvb3JkID0gdGhpcy5zZXR0aW5ncy5hZGRDaXJjbGVcbiAgICAgICAgPyB0aGlzLmFycm93Q29vcmRpbmF0ZXMuY2lyY2xlXG4gICAgICAgIDogdGhpcy5hcnJvd0Nvb3JkaW5hdGVzLnN0YW5kYXJkO1xuXG4gICAgICB0aGlzLmFycm93QW5pbWF0b3IuZm9yRWFjaCgoYW5pbSwgaSkgPT4ge1xuICAgICAgICBhbmltLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICR7XG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGVcbiAgICAgICAgICAgID8gYHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke1xuICAgICAgICAgICAgICAgIGkgPT09IDAgPyBgJHtjb29yZFswXX1weGAgOiBgLSR7Y29vcmRbMF19cHhgXG4gICAgICAgICAgICAgIH0pO2BcbiAgICAgICAgICAgIDogYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke1xuICAgICAgICAgICAgICAgIGkgPT09IDAgPyBgJHtjb29yZFswXX1weGAgOiBgLSR7Y29vcmRbMF19cHhgXG4gICAgICAgICAgICAgIH0pO2BcbiAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVDb21wYXJlKGV2KSB7XG4gICAgbGV0IGJvdW5kcyA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHggPVxuICAgICAgZXYudG91Y2hlcyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZXYudG91Y2hlc1swXS5jbGllbnRYIC0gYm91bmRzLmxlZnRcbiAgICAgICAgOiBldi5jbGllbnRYIC0gYm91bmRzLmxlZnQ7XG4gICAgbGV0IHkgPVxuICAgICAgZXYudG91Y2hlcyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZXYudG91Y2hlc1swXS5jbGllbnRZIC0gYm91bmRzLnRvcFxuICAgICAgICA6IGV2LmNsaWVudFkgLSBib3VuZHMudG9wO1xuXG4gICAgbGV0IHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGVcbiAgICAgID8gKHkgLyBib3VuZHMuaGVpZ2h0KSAqIDEwMFxuICAgICAgOiAoeCAvIGJvdW5kcy53aWR0aCkgKiAxMDA7XG5cbiAgICBpZiAocG9zaXRpb24gPj0gMCAmJiBwb3NpdGlvbiA8PSAxMDApIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MudmVydGljYWxNb2RlXG4gICAgICAgID8gKHRoaXMuY29udHJvbC5zdHlsZS50b3AgPSBgY2FsYygke3Bvc2l0aW9ufSUgLSAke1xuICAgICAgICAgICAgdGhpcy5zbGlkZVdpZHRoIC8gMlxuICAgICAgICAgIH1weClgKVxuICAgICAgICA6ICh0aGlzLmNvbnRyb2wuc3R5bGUubGVmdCA9IGBjYWxjKCR7cG9zaXRpb259JSAtICR7XG4gICAgICAgICAgICB0aGlzLnNsaWRlV2lkdGggLyAyXG4gICAgICAgICAgfXB4KWApO1xuXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5mbHVpZE1vZGUpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGVcbiAgICAgICAgICA/ICh0aGlzLndyYXBwZXIuc3R5bGUuY2xpcFBhdGggPSBgaW5zZXQoMCAwICR7MTAwIC0gcG9zaXRpb259JSAwKWApXG4gICAgICAgICAgOiAodGhpcy53cmFwcGVyLnN0eWxlLmNsaXBQYXRoID0gYGluc2V0KDAgMCAwICR7cG9zaXRpb259JSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudmVydGljYWxNb2RlXG4gICAgICAgICAgPyAodGhpcy53cmFwcGVyLnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7cG9zaXRpb259JSlgKVxuICAgICAgICAgIDogKHRoaXMud3JhcHBlci5zdHlsZS53aWR0aCA9IGBjYWxjKCR7MTAwIC0gcG9zaXRpb259JSlgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUoc3RhdGUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHN0YXRlO1xuICB9XG5cbiAgX3NoYXBlQ29udGFpbmVyKCkge1xuICAgIGxldCBpbXBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGxhYmVsX2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgbGFiZWxfciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgbGFiZWxfbC5jbGFzc0xpc3QuYWRkKFwiaWN2X19sYWJlbFwiLCBcImljdl9fbGFiZWwtYmVmb3JlXCIsIFwia2VlcFwiKTtcbiAgICBsYWJlbF9yLmNsYXNzTGlzdC5hZGQoXCJpY3ZfX2xhYmVsXCIsIFwiaWN2X19sYWJlbC1hZnRlclwiLCBcImtlZXBcIik7XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5sYWJlbE9wdGlvbnMub25Ib3Zlcikge1xuICAgICAgbGFiZWxfbC5jbGFzc0xpc3QuYWRkKFwib24taG92ZXJcIik7XG4gICAgICBsYWJlbF9yLmNsYXNzTGlzdC5hZGQoXCJvbi1ob3ZlclwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGUpIHtcbiAgICAgIGxhYmVsX2wuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgICAgbGFiZWxfci5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik7XG4gICAgfVxuXG4gICAgbGFiZWxfbC5pbm5lckhUTUwgPSB0aGlzLnNldHRpbmdzLmxhYmVsT3B0aW9ucy5iZWZvcmUgfHwgXCJCZWZvcmVcIjtcbiAgICBsYWJlbF9yLmlubmVySFRNTCA9IHRoaXMuc2V0dGluZ3MubGFiZWxPcHRpb25zLmFmdGVyIHx8IFwiQWZ0ZXJcIjtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dMYWJlbHMpIHtcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQobGFiZWxfbCk7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGxhYmVsX3IpO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgIGBpY3ZgLFxuICAgICAgdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGVcbiAgICAgICAgPyBgaWN2X19pY3YtLXZlcnRpY2FsYFxuICAgICAgICA6IGBpY3ZfX2ljdi0taG9yaXpvbnRhbGAsXG4gICAgICB0aGlzLnNldHRpbmdzLmZsdWlkTW9kZSA/IGBpY3ZfX2lzLS1mbHVpZGAgOiBgc3RhbmRhcmRgXG4gICAgKTtcblxuICAgIGltcG9zdGVyLmNsYXNzTGlzdC5hZGQoXCJpY3ZfX2ltcG9zdGVyXCIpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpbXBvc3Rlcik7XG4gIH1cblxuICBfYnVpbGRDb250cm9sKCkge1xuICAgIGxldCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdWlMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYXJyb3dzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGFycm93U2l6ZSA9IFwiMjBcIjtcblxuICAgIGFycm93cy5jbGFzc0xpc3QuYWRkKFwiaWN2X190aGVtZS13cmFwcGVyXCIpO1xuXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDw9IDE7IGlkeCsrKSB7XG4gICAgICBsZXQgYW5pbWF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcblxuICAgICAgbGV0IGFycm93ID0gYDxzdmdcbiAgICAgIGhlaWdodD1cIjE1XCJcbiAgICAgIHdpZHRoPVwiMTVcIlxuICAgICAgIHN0eWxlPVwiXG4gICAgICAgdHJhbnNmb3JtOiBcbiAgICAgICBzY2FsZSgke3RoaXMuc2V0dGluZ3MuYWRkQ2lyY2xlID8gMC43IDogMS41fSkgIFxuICAgICAgIHJvdGF0ZVooJHtcbiAgICAgICAgIGlkeCA9PT0gMFxuICAgICAgICAgICA/IHRoaXMuc2V0dGluZ3MudmVydGljYWxNb2RlXG4gICAgICAgICAgICAgPyBgLTkwZGVnYFxuICAgICAgICAgICAgIDogYDE4MGRlZ2BcbiAgICAgICAgICAgOiB0aGlzLnNldHRpbmdzLnZlcnRpY2FsTW9kZVxuICAgICAgICAgICA/IGA5MGRlZ2BcbiAgICAgICAgICAgOiBgMGRlZ2BcbiAgICAgICB9KTsgaGVpZ2h0OiAke2Fycm93U2l6ZX1weDsgd2lkdGg6ICR7YXJyb3dTaXplfXB4O1xuICAgICAgIFxuICAgICAgICR7XG4gICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRyb2xTaGFkb3dcbiAgICAgICAgICAgPyBgXG4gICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4zMykpO1xuICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAke1xuICAgICAgICAgaWR4ID09PSAwID8gXCItM3B4XCIgOiBcIjNweFwiXG4gICAgICAgfSA1cHggcmdiYSgwLCAwLCAwLCAuMzMpKTtcbiAgICAgICBgXG4gICAgICAgICAgIDogYGBcbiAgICAgICB9XG4gICAgICAgXCJcbiAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHZpZXdCb3g9XCIwIDAgMTUgMTVcIj5cbiAgICAgICA8cGF0aCAke1xuICAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRDaXJjbGVcbiAgICAgICAgICAgPyBgZmlsbD1cInRyYW5zcGFyZW50XCJgXG4gICAgICAgICAgIDogYGZpbGw9XCIke3RoaXMuc2V0dGluZ3MuY29udHJvbENvbG9yfVwiYFxuICAgICAgIH1cbiAgICAgICBzdHJva2U9XCIke3RoaXMuc2V0dGluZ3MuY29udHJvbENvbG9yfVwiXG4gICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgc3Ryb2tlLXdpZHRoPVwiJHt0aGlzLnNldHRpbmdzLmFkZENpcmNsZSA/IDMgOiAwfVwiXG4gICAgICAgZD1cIk00LjUgMS45TDEwIDcuNjVsLTUuNSA1LjRcIlxuICAgICAgIC8+XG4gICAgIDwvc3ZnPmA7XG5cbiAgICAgIGFuaW1hdG9yLmlubmVySFRNTCArPSBhcnJvdztcbiAgICAgIHRoaXMuYXJyb3dBbmltYXRvci5wdXNoKGFuaW1hdG9yKTtcbiAgICAgIGFycm93cy5hcHBlbmRDaGlsZChhbmltYXRvcik7XG4gICAgfVxuXG4gICAgbGV0IGNvb3JkID0gdGhpcy5zZXR0aW5ncy5hZGRDaXJjbGVcbiAgICAgID8gdGhpcy5hcnJvd0Nvb3JkaW5hdGVzLmNpcmNsZVxuICAgICAgOiB0aGlzLmFycm93Q29vcmRpbmF0ZXMuc3RhbmRhcmQ7XG5cbiAgICB0aGlzLmFycm93QW5pbWF0b3IuZm9yRWFjaCgoYW5pbSwgaSkgPT4ge1xuICAgICAgYW5pbS5jbGFzc0xpc3QuYWRkKFwiaWN2X19hcnJvdy13cmFwcGVyXCIpO1xuXG4gICAgICBhbmltLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAke1xuICAgICAgICB0aGlzLnNldHRpbmdzLnZlcnRpY2FsTW9kZVxuICAgICAgICAgID8gYHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke1xuICAgICAgICAgICAgICBpID09PSAwID8gYCR7Y29vcmRbMF19cHhgIDogYC0ke2Nvb3JkWzBdfXB4YFxuICAgICAgICAgICAgfSk7YFxuICAgICAgICAgIDogYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke1xuICAgICAgICAgICAgICBpID09PSAwID8gYCR7Y29vcmRbMF19cHhgIDogYC0ke2Nvb3JkWzBdfXB4YFxuICAgICAgICAgICAgfSk7YFxuICAgICAgfVxuICAgICAgYDtcbiAgICB9KTtcblxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZChcImljdl9fY29udHJvbFwiKTtcblxuICAgIGNvbnRyb2wuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAke3RoaXMuc2V0dGluZ3MudmVydGljYWxNb2RlID8gYGhlaWdodGAgOiBgd2lkdGggYH06ICR7dGhpcy5zbGlkZVdpZHRofXB4O1xuICAgICR7dGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGUgPyBgdG9wYCA6IGBsZWZ0IGB9OiBjYWxjKCR7XG4gICAgICB0aGlzLnNldHRpbmdzLnN0YXJ0aW5nUG9pbnRcbiAgICB9JSAtICR7dGhpcy5zbGlkZVdpZHRoIC8gMn1weCk7XG4gICAgJHtcbiAgICAgIFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgICAgID8gYGBcbiAgICAgICAgOiB0aGlzLnNldHRpbmdzLnNtb290aGluZ1xuICAgICAgICA/IGB0cmFuc2l0aW9uOiAke3RoaXMuc2V0dGluZ3Muc21vb3RoaW5nQW1vdW50fW1zIGVhc2Utb3V0O2BcbiAgICAgICAgOiBgYFxuICAgIH1cbiAgICBgO1xuXG4gICAgdWlMaW5lLmNsYXNzTGlzdC5hZGQoXCJpY3ZfX2NvbnRyb2wtbGluZVwiKTtcblxuICAgIHVpTGluZS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgJHt0aGlzLnNldHRpbmdzLnZlcnRpY2FsTW9kZSA/IGBoZWlnaHRgIDogYHdpZHRoIGB9OiAke3RoaXMubGluZVdpZHRofXB4O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnNldHRpbmdzLmNvbnRyb2xDb2xvcn07XG4gICAgICAgICR7XG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb250cm9sU2hhZG93XG4gICAgICAgICAgICA/IGBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLDAsMCwwLjMzKTtgXG4gICAgICAgICAgICA6IGBgXG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgbGV0IHVpTGluZTIgPSB1aUxpbmUuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJpY3ZfX2NpcmNsZVwiKTtcbiAgICBjaXJjbGUuc3R5bGUuY3NzVGV4dCA9IGBcblxuICAgICAgJHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRDaXJjbGVCbHVyICYmXG4gICAgICAgIGAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KWBcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGJvcmRlcjogJHt0aGlzLmxpbmVXaWR0aH1weCBzb2xpZCAke3RoaXMuc2V0dGluZ3MuY29udHJvbENvbG9yfTtcbiAgICAgICR7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udHJvbFNoYWRvdyAmJlxuICAgICAgICBgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwwLDAsMC4zMylgXG4gICAgICB9O1xuICAgIGA7XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKHVpTGluZSk7XG4gICAgdGhpcy5zZXR0aW5ncy5hZGRDaXJjbGUgJiYgY29udHJvbC5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoYXJyb3dzKTtcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKHVpTGluZTIpO1xuXG4gICAgdGhpcy5hcnJvd0NvbnRhaW5lciA9IGFycm93cztcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjb250cm9sKTtcbiAgfVxuXG4gIF9nZXRJbWFnZXMoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nLCAua2VlcFwiKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgfSk7XG5cbiAgICBsZXQgY2hpbGRyZW5JbWFnZXMgPSBbLi4uY2hpbGRyZW5dLmZpbHRlcihcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW1nXCJcbiAgICApO1xuXG4gICAgLy8gIHRoaXMuc2V0dGluZ3MudmVydGljYWxNb2RlICYmIFsuLi5jaGlsZHJlbl0ucmV2ZXJzZSgpO1xuICAgIHRoaXMuc2V0dGluZ3MudmVydGljYWxNb2RlICYmIGNoaWxkcmVuSW1hZ2VzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8PSAxOyBpZHgrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5JbWFnZXNbaWR4XTtcblxuICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImljdl9faW1nXCIpO1xuICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChpZHggPT09IDAgPyBgaWN2X19pbWctYWAgOiBgaWN2X19pbWctYmApO1xuXG4gICAgICBpZiAoaWR4ID09PSAxKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGFmdGVyVXJsID0gY2hpbGRyZW5JbWFnZXNbMV0uc3JjO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpY3ZfX3dyYXBwZXJcIik7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICAgIHdpZHRoOiAkezEwMCAtIHRoaXMuc2V0dGluZ3Muc3RhcnRpbmdQb2ludH0lOyBcbiAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLnNldHRpbmdzLnN0YXJ0aW5nUG9pbnR9JTtcblxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgXCJvbnRvdWNoc3RhcnRcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICA/IGBgXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldHRpbmdzLnNtb290aGluZ1xuICAgICAgICAgICAgICAgID8gYHRyYW5zaXRpb246ICR7dGhpcy5zZXR0aW5ncy5zbW9vdGhpbmdBbW91bnR9bXMgZWFzZS1vdXQ7YFxuICAgICAgICAgICAgICAgIDogYGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZmx1aWRNb2RlICYmXG4gICAgICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHthZnRlclVybH0pOyBjbGlwLXBhdGg6IGluc2V0KCR7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbE1vZGVcbiAgICAgICAgICAgICAgICAgID8gYCAwIDAgJHsxMDAgLSB0aGlzLnNldHRpbmdzLnN0YXJ0aW5nUG9pbnR9JSAwYFxuICAgICAgICAgICAgICAgICAgOiBgMCAwIDAgJHt0aGlzLnNldHRpbmdzLnN0YXJ0aW5nUG9pbnR9JWBcbiAgICAgICAgICAgICAgfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZmx1aWRNb2RlKSB7XG4gICAgICBsZXQgdXJsID0gY2hpbGRyZW5JbWFnZXNbMF0uc3JjO1xuICAgICAgbGV0IGZsdWlkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmbHVpZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImljdl9fZmx1aWR3cmFwcGVyXCIpO1xuICAgICAgZmx1aWRXcmFwcGVyLnN0eWxlLmNzc1RleHQgPSBgXG4gXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pO1xuICAgICAgICBcbiAgICAgIGA7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGZsdWlkV3JhcHBlcik7XG4gICAgfVxuICB9XG59XG5cbi8vIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZS1jb21wYXJlXCIpO1xuXG4vLyBlbC5mb3JFYWNoKCh2aWV3ZXIpID0+IHtcbi8vICAgbGV0IHYgPSBuZXcgSW1hZ2VDb21wYXJlKHZpZXdlciwge1xuLy8gICAgIGNvbnRyb2xTaGFkb3c6IGZhbHNlLFxuLy8gICAgIHNob3dMYWJlbHM6IHRydWUsXG4vLyAgICAgbGFiZWxPcHRpb25zOiB7XG4vLyAgICAgICBvbkhvdmVyOiB0cnVlLFxuLy8gICAgICAgYmVmb3JlOiBcIkRyYWZ0XCIsXG4vLyAgICAgICBhZnRlcjogXCJGaW5hbFwiLFxuLy8gICAgIH0sXG4vLyAgIH0pLm1vdW50KCk7XG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb21wYXJlO1xuIiwgIi8vIFdlIGltcG9ydCB0aGUgQ1NTIHdoaWNoIGlzIGV4dHJhY3RlZCB0byBpdHMgb3duIGZpbGUgYnkgZXNidWlsZC5cbi8vIFJlbW92ZSB0aGlzIGxpbmUgaWYgeW91IGFkZCBhIHlvdXIgb3duIENTUyBidWlsZCBwaXBlbGluZSAoZS5nIHBvc3Rjc3MpLlxuLy8gaW1wb3J0IFwiLi4vY3NzL2FwcC5jc3NcIlxuXG4vLyBJZiB5b3Ugd2FudCB0byB1c2UgUGhvZW5peCBjaGFubmVscywgcnVuIGBtaXggaGVscCBwaHguZ2VuLmNoYW5uZWxgXG4vLyB0byBnZXQgc3RhcnRlZCBhbmQgdGhlbiB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cuXG4vLyBpbXBvcnQgXCIuL3VzZXJfc29ja2V0LmpzXCJcblxuLy8gWW91IGNhbiBpbmNsdWRlIGRlcGVuZGVuY2llcyBpbiB0d28gd2F5cy5cbi8vXG4vLyBUaGUgc2ltcGxlc3Qgb3B0aW9uIGlzIHRvIHB1dCB0aGVtIGluIGFzc2V0cy92ZW5kb3IgYW5kXG4vLyBpbXBvcnQgdGhlbSB1c2luZyByZWxhdGl2ZSBwYXRoczpcbi8vXG4vLyAgICAgaW1wb3J0IFwiLi92ZW5kb3Ivc29tZS1wYWNrYWdlLmpzXCJcbi8vXG4vLyBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGBucG0gaW5zdGFsbCBzb21lLXBhY2thZ2VgIGFuZCBpbXBvcnRcbi8vIHRoZW0gdXNpbmcgYSBwYXRoIHN0YXJ0aW5nIHdpdGggdGhlIHBhY2thZ2UgbmFtZTpcbi8vXG4vLyAgICAgaW1wb3J0IFwic29tZS1wYWNrYWdlXCJcbi8vXG5cbi8vIEluY2x1ZGUgcGhvZW5peF9odG1sIHRvIGhhbmRsZSBtZXRob2Q9UFVUL0RFTEVURSBpbiBmb3JtcyBhbmQgYnV0dG9ucy5cbmltcG9ydCBcInBob2VuaXhfaHRtbFwiXG5pbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuaW1wb3J0IEltYWdlQ29tcGFyZSBmcm9tIFwiaW1hZ2UtY29tcGFyZS12aWV3ZXJcIjtcbndpbmRvdy5BbHBpbmUgPSBBbHBpbmU7XG5BbHBpbmUuc3RhcnQoKTtcblxuLy8gRXN0YWJsaXNoIFBob2VuaXggU29ja2V0IGFuZCBMaXZlVmlldyBjb25maWd1cmF0aW9uLlxuaW1wb3J0IHtTb2NrZXR9IGZyb20gXCJwaG9lbml4XCJcbmltcG9ydCB7TGl2ZVNvY2tldH0gZnJvbSBcInBob2VuaXhfbGl2ZV92aWV3XCJcbmltcG9ydCB0b3BiYXIgZnJvbSBcIi4uL3ZlbmRvci90b3BiYXJcIlxuXG5sZXQgSG9va3MgPSB7fVxuSG9va3MuTWFpbnRhaW5BdHRycyA9IHtcbiAgYXR0cnMoKXsgcmV0dXJuIHRoaXMuZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyc1wiKS5zcGxpdChcIiwgXCIpIH0sXG4gIGJlZm9yZVVwZGF0ZSgpeyB0aGlzLnByZXZBdHRycyA9IHRoaXMuYXR0cnMoKS5tYXAobmFtZSA9PiBbbmFtZSwgdGhpcy5lbC5nZXRBdHRyaWJ1dGUobmFtZSldKSB9LFxuICB1cGRhdGVkKCl7IHRoaXMucHJldkF0dHJzLmZvckVhY2goKFtuYW1lLCB2YWxdKSA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWwpKSB9XG59XG5Ib29rcy5JbWFnZUNvbXBhcmlzb24gPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UtY29tcGFyZVwiKTtcbiAgICB3aW5kb3cudmlld2VyID0gbmV3IEltYWdlQ29tcGFyZShlbGVtZW50KS5tb3VudCgpO1xuICB9XG59XG5Ib29rcy5kcmFnRHJvcFJlb3JkZXIgPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHVzaEV2ZW50KFwicmVvcmRlcl9lbmRcIiwgeyBcInN0ZXAtaWRcIjogZS50YXJnZXQuaWQgIH0pXG4gICAgfSlcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImRyYWdlbnRlclwiKVxuICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgIFxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICBpZiAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmlkKSBcbiAgICAgICAgdmFyIG9yZGVyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ29yZGVyJyk7XG4gICAgICAgIHZhciBzdGVwSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RlcC1pZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcilcbiAgICAgICAgY29uc29sZS5sb2coc3RlcElkKVxuICAgICAgICB0aGlzLnB1c2hFdmVudChcInJlb3JkZXJfZHJhZ2VudGVyXCIsIHtcIm9yZGVyXCI6IG9yZGVyLCBcInN0ZXAtaWRcIjogc3RlcElkfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBlID0+IHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5pZCkgXG4gICAgICB2YXIgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RlcC1pZCcpO1xuICAgICAgdGhpcy5wdXNoRXZlbnQoXCJyZW9yZGVyX3N0YXJ0XCIsIHtcImlkXCI6IGlkfSlcbiAgICB9KVxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZSA9PiB7XG4gICAgICB0aGlzLnB1c2hFdmVudChcInJlb3JkZXJfZHJhZ2VuZFwiKVxuICAgIH0pXG4gIH1cbn1cbkhvb2tzLm1hcmdpbkZpZWxkcyA9IHtcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IHtcbiAgICAgIHVwZGF0ZVZhbHVlKFwibWFyZ2luLXRvcC1pbnB1dFwiLCB0aGlzLmVsLnZhbHVlKVxuICAgICAgdXBkYXRlVmFsdWUoXCJtYXJnaW4tYm90dG9tLWlucHV0XCIsIHRoaXMuZWwudmFsdWUpXG4gICAgICB1cGRhdGVWYWx1ZShcIm1hcmdpbi1sZWZ0LWlucHV0XCIsIHRoaXMuZWwudmFsdWUpXG4gICAgICB1cGRhdGVWYWx1ZShcIm1hcmdpbi1yaWdodC1pbnB1dFwiLCB0aGlzLmVsLnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxubGV0IGNzcmZUb2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J2NzcmYtdG9rZW4nXVwiKS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG5sZXQgbGl2ZVNvY2tldCA9IG5ldyBMaXZlU29ja2V0KFwiL2xpdmVcIiwgU29ja2V0LCB7XG4gIHBhcmFtczoge19jc3JmX3Rva2VuOiBjc3JmVG9rZW59LFxuICBob29rczogSG9va3MsXG4gIGRvbToge1xuICAgIG9uQmVmb3JlRWxVcGRhdGVkKGZyb20sIHRvKSB7XG4gICAgICBpZiAoZnJvbS5feF9kYXRhU3RhY2spIHtcbiAgICAgICAgd2luZG93LkFscGluZS5jbG9uZShmcm9tLCB0byk7XG4gICAgICB9XG4gICAgfSxcbiAgfVxufSlcblxuLy8gU2hvdyBwcm9ncmVzcyBiYXIgb24gbGl2ZSBuYXZpZ2F0aW9uIGFuZCBmb3JtIHN1Ym1pdHNcbnRvcGJhci5jb25maWcoe2JhckNvbG9yczogezA6IFwiIzI5ZFwifSwgc2hhZG93Q29sb3I6IFwicmdiYSgwLCAwLCAwLCAuMylcIn0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBoeDpwYWdlLWxvYWRpbmctc3RhcnRcIiwgaW5mbyA9PiB0b3BiYXIuc2hvdygpKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwaHg6cGFnZS1sb2FkaW5nLXN0b3BcIiwgaW5mbyA9PiB0b3BiYXIuaGlkZSgpKVxuXG4vLyBjb25uZWN0IGlmIHRoZXJlIGFyZSBhbnkgTGl2ZVZpZXdzIG9uIHRoZSBwYWdlXG5saXZlU29ja2V0LmNvbm5lY3QoKVxuXG4vLyBleHBvc2UgbGl2ZVNvY2tldCBvbiB3aW5kb3cgZm9yIHdlYiBjb25zb2xlIGRlYnVnIGxvZ3MgYW5kIGxhdGVuY3kgc2ltdWxhdGlvbjpcbi8vID4+IGxpdmVTb2NrZXQuZW5hYmxlRGVidWcoKVxuLy8gPj4gbGl2ZVNvY2tldC5lbmFibGVMYXRlbmN5U2ltKDEwMDApICAvLyBlbmFibGVkIGZvciBkdXJhdGlvbiBvZiBicm93c2VyIHNlc3Npb25cbi8vID4+IGxpdmVTb2NrZXQuZGlzYWJsZUxhdGVuY3lTaW0oKVxud2luZG93LmxpdmVTb2NrZXQgPSBsaXZlU29ja2V0XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLE9BQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFVLE9BQU8sV0FBakIsWUFBMEIsQUFBVSxPQUFPLFVBQWpCLFdBQXdCLE9BQU8sVUFBUSxNQUFJLEFBQVksT0FBTyxVQUFuQixjQUEyQixPQUFPLE1BQUksT0FBTyxJQUFHLEtBQUcsQUFBVSxPQUFPLFdBQWpCLFdBQXlCLFFBQVEsVUFBUSxNQUFJLEVBQUUsVUFBUTtBQUFBLFFBQUssU0FBTSxXQUFVO0FBQUMsZUFBTyxTQUFTLEdBQUU7QUFBQyxjQUFJLElBQUU7QUFBRyxxQkFBVyxHQUFFO0FBQUMsZ0JBQUcsRUFBRTtBQUFHLHFCQUFPLEVBQUUsR0FBRztBQUFRLGdCQUFJLElBQUUsRUFBRSxLQUFHLEVBQUMsR0FBSSxHQUFFLE9BQUcsU0FBUTtBQUFJLG1CQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUUsU0FBUSxHQUFFLEVBQUUsU0FBUSxJQUFHLEVBQUUsSUFBRSxNQUFHLEVBQUU7QUFBQTtBQUFRLGlCQUFPLEVBQUUsSUFBRSxHQUFFLEVBQUUsSUFBRSxHQUFFLEVBQUUsSUFBRSxTQUFTLElBQUUsSUFBRSxHQUFFO0FBQUMsY0FBRSxFQUFFLElBQUUsT0FBSSxPQUFPLGVBQWUsSUFBRSxJQUFFLEVBQUMsWUFBVyxNQUFHLEtBQUk7QUFBQSxhQUFLLEVBQUUsSUFBRSxTQUFTLElBQUU7QUFBQyxZQUFhLE9BQU8sVUFBcEIsZUFBNEIsT0FBTyxlQUFhLE9BQU8sZUFBZSxJQUFFLE9BQU8sYUFBWSxFQUFDLE9BQU0sYUFBVyxPQUFPLGVBQWUsSUFBRSxjQUFhLEVBQUMsT0FBTTtBQUFBLGFBQU0sRUFBRSxJQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMsZ0JBQUcsSUFBRSxNQUFJLE1BQUUsRUFBRSxNQUFJLElBQUU7QUFBRSxxQkFBTztBQUFFLGdCQUFHLElBQUUsTUFBRyxBQUFVLE9BQU8sTUFBakIsWUFBb0IsTUFBRyxHQUFFO0FBQVcscUJBQU87QUFBRSxnQkFBSSxJQUFFLE9BQU8sT0FBTztBQUFNLGdCQUFHLEVBQUUsRUFBRSxJQUFHLE9BQU8sZUFBZSxHQUFFLFdBQVUsRUFBQyxZQUFXLE1BQUcsT0FBTSxPQUFJLElBQUUsTUFBRyxBQUFVLE9BQU8sTUFBakI7QUFBbUIsdUJBQVEsS0FBSztBQUFFLGtCQUFFLEVBQUUsR0FBRSxHQUFFLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEdBQUU7QUFBQSxrQkFBSSxLQUFLLE1BQUs7QUFBSSxtQkFBTztBQUFBLGFBQUcsRUFBRSxJQUFFLFNBQVMsSUFBRTtBQUFDLGdCQUFJLEtBQUUsTUFBRyxHQUFFLGFBQVcsV0FBVTtBQUFDLHFCQUFPLEdBQUU7QUFBQSxnQkFBUyxXQUFVO0FBQUMscUJBQU87QUFBQTtBQUFHLG1CQUFPLEVBQUUsRUFBRSxJQUFFLEtBQUksS0FBRztBQUFBLGFBQUcsRUFBRSxJQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQU8sT0FBTyxVQUFVLGVBQWUsS0FBSyxJQUFFO0FBQUEsYUFBSSxFQUFFLElBQUUsSUFBRyxFQUFFLEVBQUUsSUFBRTtBQUFBLFVBQUksQ0FBQyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBQyxVQUFTLElBQUU7QUFBQyxjQUFFLFVBQVEsR0FBRSxVQUFRLEVBQUU7QUFBQSxhQUFLLEtBQUssTUFBSyxFQUFFO0FBQUEsV0FBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLGNBQUk7QUFBRSxjQUFFLFdBQVU7QUFBQyxtQkFBTztBQUFBO0FBQVEsY0FBRztBQUFDLGdCQUFFLEtBQUcsSUFBSSxTQUFTO0FBQUEsbUJBQXVCLElBQU47QUFBUyxZQUFVLE9BQU8sVUFBakIsWUFBMEIsS0FBRTtBQUFBO0FBQVEsWUFBRSxVQUFRO0FBQUEsV0FBRyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUM7QUFBYSxxQkFBVyxJQUFFO0FBQUMsbUJBQU8sU0FBUyxJQUFFO0FBQUMsa0JBQUcsTUFBTSxRQUFRO0FBQUcsdUJBQU8sRUFBRTtBQUFBLGNBQUksT0FBSSxTQUFTLElBQUU7QUFBQyxrQkFBRyxBQUFhLE9BQU8sVUFBcEIsZUFBNEIsT0FBTyxZQUFZLE9BQU87QUFBRyx1QkFBTyxNQUFNLEtBQUs7QUFBQSxjQUFJLE9BQUksRUFBRSxPQUFJLFdBQVU7QUFBQyxvQkFBTSxJQUFJLFVBQVU7QUFBQTtBQUFBO0FBQTJJLHFCQUFXLElBQUU7QUFBQyxtQkFBTyxLQUFFLEFBQVksT0FBTyxVQUFuQixjQUEyQixBQUFVLE9BQU8sT0FBTyxZQUF4QixXQUFpQyxTQUFTLElBQUU7QUFBQyxxQkFBTyxPQUFPO0FBQUEsZ0JBQUcsU0FBUyxJQUFFO0FBQUMscUJBQU8sTUFBRyxBQUFZLE9BQU8sVUFBbkIsY0FBMkIsR0FBRSxnQkFBYyxVQUFRLE9BQUksT0FBTyxZQUFVLFdBQVMsT0FBTztBQUFBLGVBQUk7QUFBQTtBQUFHLHFCQUFXLElBQUUsSUFBRTtBQUFDLG1CQUFPLFNBQVMsSUFBRTtBQUFDLGtCQUFHLE1BQU0sUUFBUTtBQUFHLHVCQUFPO0FBQUEsY0FBRyxPQUFJLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUcsQUFBYSxPQUFPLFVBQXBCLGVBQTRCLENBQUUsUUFBTyxZQUFZLE9BQU87QUFBSTtBQUFPLGtCQUFJLEtBQUUsSUFBRyxLQUFFLE1BQUcsS0FBRSxPQUFHLEtBQUU7QUFBTyxrQkFBRztBQUFDLHlCQUFRLElBQUUsS0FBRSxHQUFFLE9BQU8sYUFBWSxDQUFFLE1BQUcsTUFBRSxHQUFFLFFBQVEsU0FBUSxJQUFFLEtBQUssR0FBRSxRQUFPLENBQUMsTUFBRyxHQUFFLFdBQVMsS0FBRyxLQUFFO0FBQUc7QUFBQSx1QkFBUSxJQUFOO0FBQVMscUJBQUUsTUFBRyxLQUFFO0FBQUEsd0JBQUU7QUFBUSxvQkFBRztBQUFDLHdCQUFHLEFBQU0sR0FBRSxVQUFSLFFBQWdCLEdBQUU7QUFBQSwwQkFBUztBQUFRLHNCQUFHO0FBQUUsMEJBQU07QUFBQTtBQUFBO0FBQUcscUJBQU87QUFBQSxjQUFHLElBQUUsT0FBSSxFQUFFLElBQUUsT0FBSSxXQUFVO0FBQUMsb0JBQU0sSUFBSSxVQUFVO0FBQUE7QUFBQTtBQUFnSixxQkFBVyxJQUFFLElBQUU7QUFBQyxnQkFBRyxJQUFFO0FBQUMsa0JBQUcsQUFBVSxPQUFPLE1BQWpCO0FBQW1CLHVCQUFPLEVBQUUsSUFBRTtBQUFHLGtCQUFJLEtBQUUsT0FBTyxVQUFVLFNBQVMsS0FBSyxJQUFHLE1BQU0sR0FBRTtBQUFJLHFCQUFNLEFBQVcsT0FBWCxZQUFjLEdBQUUsZUFBYyxNQUFFLEdBQUUsWUFBWSxPQUFNLEFBQVEsT0FBUixTQUFXLEFBQVEsT0FBUixRQUFVLE1BQU0sS0FBSyxNQUFHLEFBQWMsT0FBZCxlQUFpQiwyQ0FBMkMsS0FBSyxNQUFHLEVBQUUsSUFBRSxNQUFHO0FBQUE7QUFBQTtBQUFRLHFCQUFXLElBQUUsSUFBRTtBQUFDLFlBQUMsQ0FBTSxNQUFOLFFBQVMsS0FBRSxHQUFFLFdBQVUsTUFBRSxHQUFFO0FBQVEscUJBQVEsS0FBRSxHQUFFLEtBQUUsSUFBSSxNQUFNLEtBQUcsS0FBRSxJQUFFO0FBQUksaUJBQUUsTUFBRyxHQUFFO0FBQUcsbUJBQU87QUFBQTtBQUFFLHFCQUFXLElBQUUsSUFBRTtBQUFDLGdCQUFHLENBQUUsZUFBYTtBQUFHLG9CQUFNLElBQUksVUFBVTtBQUFBO0FBQXFDLHFCQUFXLElBQUUsSUFBRTtBQUFDLHFCQUFRLEtBQUUsR0FBRSxLQUFFLEdBQUUsUUFBTyxNQUFJO0FBQUMsa0JBQUksS0FBRSxHQUFFO0FBQUcsaUJBQUUsYUFBVyxHQUFFLGNBQVksT0FBRyxHQUFFLGVBQWEsTUFBRyxXQUFVLE1BQUksSUFBRSxXQUFTLE9BQUksT0FBTyxlQUFlLElBQUUsR0FBRSxLQUFJO0FBQUE7QUFBQTtBQUFJLHFCQUFXLElBQUUsSUFBRSxJQUFFO0FBQUMsbUJBQU8sTUFBRyxFQUFFLEdBQUUsV0FBVSxLQUFHLE1BQUcsRUFBRSxJQUFFLEtBQUc7QUFBQTtBQUFFLFlBQUUsRUFBRSxJQUFHLEVBQUUsRUFBRSxHQUFFLFdBQVcsV0FBVTtBQUFDLG1CQUFPO0FBQUEsY0FBSyxFQUFFLEVBQUUsR0FBRSxjQUFjLFdBQVU7QUFBQyxtQkFBTztBQUFBLGNBQUssRUFBRSxFQUFFLEdBQUUsVUFBVSxXQUFVO0FBQUMsbUJBQU87QUFBQSxjQUFLLEVBQUUsRUFBRSxHQUFFLFlBQVksV0FBVTtBQUFDLG1CQUFPO0FBQUEsY0FBSyxFQUFFLEVBQUUsR0FBRSxRQUFRLFdBQVU7QUFBQyxtQkFBTztBQUFBLGNBQUssRUFBRSxFQUFFLEdBQUUsWUFBWSxXQUFVO0FBQUMsbUJBQU87QUFBQTtBQUFLLGNBQUksSUFBRSxBQUFhLE9BQU8sUUFBcEIsY0FBeUIsT0FBSyxNQUFLLElBQUUsQUFBYSxPQUFPLFVBQXBCLGNBQTJCLFNBQU8sTUFBSyxJQUFFLEtBQUcsS0FBRyxRQUFPLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLFVBQVMsSUFBRSxXQUFVLElBQUUsVUFBUyxJQUFFLFdBQVUsSUFBRSxXQUFVLElBQUUsYUFBWSxJQUFFLGFBQVksSUFBRSxZQUFXLElBQUUsYUFBWSxJQUFFLGFBQVksSUFBRSxZQUFXLElBQUUsYUFBWSxJQUFFLFNBQVMsSUFBRTtBQUFDLGdCQUFHLEFBQVksT0FBTyxNQUFuQjtBQUFxQixxQkFBTztBQUFFLG1CQUFPLFdBQVU7QUFBQyxxQkFBTztBQUFBO0FBQUEsYUFBSSxJQUFFLFdBQVU7QUFBQyx3QkFBVyxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUUsTUFBSyxLQUFHLEtBQUssVUFBUSxJQUFFLEtBQUssUUFBTSxJQUFFLEtBQUssVUFBUSxNQUFHLFdBQVU7QUFBQyx1QkFBTTtBQUFBLGlCQUFJLEtBQUssZUFBYSxNQUFLLEtBQUssVUFBUSxJQUFFLEtBQUssZUFBYSxNQUFLLEtBQUssV0FBUyxJQUFHLEtBQUssT0FBSztBQUFBO0FBQUcsbUJBQU8sRUFBRSxJQUFFLENBQUMsRUFBQyxLQUFJLFVBQVMsT0FBTSxTQUFTLElBQUU7QUFBQyxtQkFBSyxVQUFRLElBQUUsS0FBSyxTQUFRLEtBQUs7QUFBQSxpQkFBUyxFQUFDLEtBQUksUUFBTyxPQUFNLFdBQVU7QUFBQyxtQkFBSyxZQUFZLGNBQWEsTUFBSyxnQkFBZSxLQUFLLE9BQUssTUFBRyxLQUFLLFFBQVEsT0FBTyxLQUFLLEVBQUMsT0FBTSxLQUFLLFFBQVEsT0FBTSxPQUFNLEtBQUssT0FBTSxTQUFRLEtBQUssV0FBVSxLQUFJLEtBQUssS0FBSSxVQUFTLEtBQUssUUFBUTtBQUFBLGlCQUFlLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxxQkFBTyxLQUFLLFlBQVksT0FBSSxHQUFFLEtBQUssYUFBYSxXQUFVLEtBQUssU0FBUyxLQUFLLEVBQUMsUUFBTyxJQUFFLFVBQVMsT0FBSTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxTQUFRLE9BQU0sV0FBVTtBQUFDLG1CQUFLLGtCQUFpQixLQUFLLE1BQUksTUFBSyxLQUFLLFdBQVMsTUFBSyxLQUFLLGVBQWEsTUFBSyxLQUFLLE9BQUs7QUFBQSxpQkFBSyxFQUFDLEtBQUksZ0JBQWUsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEdBQUUsUUFBTyxLQUFFLEdBQUU7QUFBUyxpQkFBRTtBQUFJLG1CQUFLLFNBQVMsT0FBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLFdBQVM7QUFBQSxpQkFBSyxRQUFTLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsU0FBUztBQUFBO0FBQUEsaUJBQVEsRUFBQyxLQUFJLGtCQUFpQixPQUFNLFdBQVU7QUFBQyxtQkFBSyxZQUFVLEtBQUssUUFBUSxJQUFJLEtBQUs7QUFBQSxpQkFBWSxFQUFDLEtBQUksaUJBQWdCLE9BQU0sV0FBVTtBQUFDLDJCQUFhLEtBQUssZUFBYyxLQUFLLGVBQWE7QUFBQSxpQkFBTyxFQUFDLEtBQUksZ0JBQWUsT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRTtBQUFLLG1CQUFLLGdCQUFjLEtBQUssaUJBQWdCLEtBQUssTUFBSSxLQUFLLFFBQVEsT0FBTyxXQUFVLEtBQUssV0FBUyxLQUFLLFFBQVEsZUFBZSxLQUFLLE1BQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxVQUFVLFNBQVMsSUFBRTtBQUFDLG1CQUFFLGtCQUFpQixHQUFFLGlCQUFnQixHQUFFLGVBQWEsSUFBRSxHQUFFLGFBQWE7QUFBQSxrQkFBTSxLQUFLLGVBQWEsV0FBWSxXQUFVO0FBQUMsbUJBQUUsUUFBUSxXQUFVO0FBQUEsaUJBQU0sS0FBSztBQUFBLGlCQUFXLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sS0FBSyxnQkFBYyxLQUFLLGFBQWEsV0FBUztBQUFBLGlCQUFJLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBSyxRQUFRLFFBQVEsS0FBSyxVQUFTLEVBQUMsUUFBTyxJQUFFLFVBQVM7QUFBQSxtQkFBUTtBQUFBLGVBQUssSUFBRSxXQUFVO0FBQUMsd0JBQVcsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssZ0JBQUUsTUFBSyxLQUFHLEtBQUssUUFBTSxHQUFFLEtBQUssUUFBTSxJQUFFLEtBQUssU0FBTyxFQUFFLE1BQUcsS0FBSSxLQUFLLFNBQU8sSUFBRSxLQUFLLFdBQVMsSUFBRyxLQUFLLGFBQVcsR0FBRSxLQUFLLFVBQVEsS0FBSyxPQUFPLFNBQVEsS0FBSyxhQUFXLE9BQUcsS0FBSyxXQUFTLElBQUksRUFBRSxNQUFLLEdBQUUsS0FBSyxRQUFPLEtBQUssVUFBUyxLQUFLLGFBQVcsSUFBRyxLQUFLLGtCQUFnQixJQUFHLEtBQUssY0FBWSxJQUFJLEVBQUcsV0FBVTtBQUFDLG1CQUFFLE9BQU8saUJBQWUsR0FBRTtBQUFBLGlCQUFXLEtBQUssT0FBTyxnQkFBZSxLQUFLLGdCQUFnQixLQUFLLEtBQUssT0FBTyxRQUFTLFdBQVU7QUFBQyx1QkFBTyxHQUFFLFlBQVk7QUFBQSxtQkFBWSxLQUFLLGdCQUFnQixLQUFLLEtBQUssT0FBTyxPQUFRLFdBQVU7QUFBQyxtQkFBRSxZQUFZLFNBQVEsR0FBRSxlQUFhLEdBQUU7QUFBQSxtQkFBYSxLQUFLLFNBQVMsUUFBUSxNQUFNLFdBQVU7QUFBQyxtQkFBRSxRQUFNLEdBQUUsR0FBRSxZQUFZLFNBQVEsR0FBRSxXQUFXLFFBQVMsU0FBUyxJQUFFO0FBQUMseUJBQU8sR0FBRTtBQUFBLG9CQUFVLEdBQUUsYUFBVztBQUFBLGtCQUFNLEtBQUssU0FBUyxRQUFRLFNBQVMsV0FBVTtBQUFDLG1CQUFFLFFBQU0sR0FBRSxHQUFFLE9BQU8saUJBQWUsR0FBRSxZQUFZO0FBQUEsa0JBQXFCLEtBQUssUUFBUyxXQUFVO0FBQUMsbUJBQUUsWUFBWSxTQUFRLEdBQUUsT0FBTyxlQUFhLEdBQUUsT0FBTyxJQUFJLFdBQVUsU0FBUyxPQUFPLEdBQUUsT0FBTSxLQUFLLE9BQU8sR0FBRSxhQUFZLEdBQUUsUUFBTSxHQUFFLEdBQUUsT0FBTyxPQUFPO0FBQUEsa0JBQU0sS0FBSyxRQUFTLFNBQVMsSUFBRTtBQUFDLG1CQUFFLE9BQU8sZUFBYSxHQUFFLE9BQU8sSUFBSSxXQUFVLFNBQVMsT0FBTyxHQUFFLFFBQU8sS0FBRyxHQUFFLGVBQWEsR0FBRSxTQUFTLFNBQVEsR0FBRSxRQUFNLEdBQUUsR0FBRSxPQUFPLGlCQUFlLEdBQUUsWUFBWTtBQUFBLGtCQUFxQixLQUFLLFNBQVMsUUFBUSxXQUFXLFdBQVU7QUFBQyxtQkFBRSxPQUFPLGVBQWEsR0FBRSxPQUFPLElBQUksV0FBVSxXQUFXLE9BQU8sR0FBRSxPQUFNLE1BQU0sT0FBTyxHQUFFLFdBQVUsTUFBSyxHQUFFLFNBQVMsVUFBUyxJQUFJLEVBQUUsSUFBRSxHQUFFLEVBQUUsS0FBSSxHQUFFLFNBQVMsUUFBTyxHQUFFLFFBQU0sR0FBRSxHQUFFLFNBQVMsU0FBUSxHQUFFLE9BQU8saUJBQWUsR0FBRSxZQUFZO0FBQUEsa0JBQXFCLEtBQUssR0FBRyxHQUFHLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUUsUUFBUSxHQUFFLGVBQWUsS0FBRztBQUFBO0FBQUE7QUFBTSxtQkFBTyxFQUFFLElBQUUsQ0FBQyxFQUFDLEtBQUksUUFBTyxPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUcsS0FBSztBQUFRLGtCQUFHLEtBQUs7QUFBVyxzQkFBTSxJQUFJLE1BQU07QUFBOEYscUJBQU8sS0FBSyxVQUFRLElBQUUsS0FBSyxhQUFXLE1BQUcsS0FBSyxVQUFTLEtBQUs7QUFBQSxpQkFBVyxFQUFDLEtBQUksV0FBVSxPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLEdBQUcsR0FBRTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sS0FBSyxHQUFHLEdBQUcsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRTtBQUFBO0FBQUEsaUJBQVEsRUFBQyxLQUFJLE1BQUssT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsS0FBSztBQUFhLHFCQUFPLEtBQUssU0FBUyxLQUFLLEVBQUMsT0FBTSxJQUFFLEtBQUksSUFBRSxVQUFTLE9BQUk7QUFBQSxpQkFBSSxFQUFDLEtBQUksT0FBTSxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUssV0FBUyxLQUFLLFNBQVMsT0FBUSxTQUFTLElBQUU7QUFBQyx1QkFBTSxDQUFFLElBQUUsVUFBUSxNQUFJLENBQVMsT0FBVCxVQUFZLE9BQUksR0FBRTtBQUFBO0FBQUEsaUJBQVcsRUFBQyxLQUFJLFdBQVUsT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSyxPQUFPLGlCQUFlLEtBQUs7QUFBQSxpQkFBYSxFQUFDLEtBQUksUUFBTyxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHLEtBQUs7QUFBUSxrQkFBRyxLQUFFLE1BQUcsSUFBRyxDQUFDLEtBQUs7QUFBVyxzQkFBTSxJQUFJLE1BQU0sa0JBQWtCLE9BQU8sSUFBRSxVQUFVLE9BQU8sS0FBSyxPQUFNO0FBQStELGtCQUFJLEtBQUUsSUFBSSxFQUFFLE1BQUssSUFBRyxXQUFVO0FBQUMsdUJBQU87QUFBQSxpQkFBSTtBQUFHLHFCQUFPLEtBQUssWUFBVSxHQUFFLFNBQVEsSUFBRSxnQkFBZSxLQUFLLFdBQVcsS0FBSyxNQUFJO0FBQUEsaUJBQUksRUFBQyxLQUFJLFNBQVEsT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxLQUFLO0FBQVEsbUJBQUssWUFBWSxTQUFRLEtBQUssU0FBUyxpQkFBZ0IsS0FBSyxRQUFNO0FBQUUsa0JBQUksS0FBRSxXQUFVO0FBQUMsbUJBQUUsT0FBTyxlQUFhLEdBQUUsT0FBTyxJQUFJLFdBQVUsU0FBUyxPQUFPLEdBQUUsU0FBUSxHQUFFLFFBQVEsR0FBRTtBQUFBLGlCQUFVLEtBQUUsSUFBSSxFQUFFLE1BQUssR0FBRSxFQUFFLEtBQUk7QUFBRyxxQkFBTyxHQUFFLFFBQVEsTUFBTSxXQUFVO0FBQUMsdUJBQU87QUFBQSxpQkFBTyxRQUFRLFdBQVcsV0FBVTtBQUFDLHVCQUFPO0FBQUEsa0JBQU8sR0FBRSxRQUFPLEtBQUssYUFBVyxHQUFFLFFBQVEsTUFBSyxLQUFJO0FBQUEsaUJBQUksRUFBQyxLQUFJLGFBQVksT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMscUJBQU87QUFBQSxpQkFBSSxFQUFDLEtBQUksWUFBVyxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLHFCQUFPLEtBQUssVUFBUSxNQUFJLEVBQUMsTUFBRyxPQUFJLEtBQUssYUFBWSxNQUFLLE9BQU8sZUFBYSxLQUFLLE9BQU8sSUFBSSxXQUFVLDZCQUE0QixFQUFDLE9BQU0sSUFBRSxPQUFNLElBQUUsU0FBUSxJQUFFLFNBQVEsT0FBSTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxXQUFVLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUssU0FBUztBQUFBLGlCQUFNLEVBQUMsS0FBSSxVQUFTLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxLQUFLO0FBQVEsbUJBQUssZUFBYyxNQUFLLE9BQU8sZUFBZSxLQUFLLFFBQU8sS0FBSyxRQUFNLEdBQUUsS0FBSyxTQUFTLE9BQU87QUFBQSxpQkFBTSxFQUFDLEtBQUksV0FBVSxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsS0FBSyxVQUFVLElBQUUsSUFBRSxJQUFFO0FBQUcsa0JBQUcsTUFBRyxDQUFDO0FBQUUsc0JBQU0sSUFBSSxNQUFNO0FBQStFLHVCQUFRLEtBQUUsS0FBSyxTQUFTLE9BQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxVQUFRO0FBQUEsa0JBQUssS0FBRSxHQUFFLEtBQUUsR0FBRSxRQUFPLE1BQUk7QUFBQyxtQkFBRSxJQUFHLFNBQVMsSUFBRSxJQUFFLE1BQUcsS0FBSztBQUFBO0FBQUEsaUJBQWMsRUFBQyxLQUFJLGtCQUFpQixPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFNLGNBQWMsT0FBTztBQUFBLGlCQUFLLEVBQUMsS0FBSSxZQUFXLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUssVUFBUTtBQUFBLGlCQUFJLEVBQUMsS0FBSSxhQUFZLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUssVUFBUTtBQUFBLGlCQUFJLEVBQUMsS0FBSSxZQUFXLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUssVUFBUTtBQUFBLGlCQUFJLEVBQUMsS0FBSSxhQUFZLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUssVUFBUTtBQUFBLGlCQUFJLEVBQUMsS0FBSSxhQUFZLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUssVUFBUTtBQUFBLG1CQUFNO0FBQUEsZUFBSyxJQUFFLEVBQUMsZUFBYyxHQUFFLGFBQVksR0FBRSxPQUFNLEVBQUMsTUFBSyxHQUFFLE9BQU0sR0FBRSxXQUFVLEtBQUcsUUFBTyxTQUFTLElBQUUsSUFBRTtBQUFDLGdCQUFHLEdBQUUsUUFBUSxnQkFBYztBQUFZLHFCQUFPLEdBQUUsS0FBSyxhQUFhO0FBQUksZ0JBQUksS0FBRSxDQUFDLEdBQUUsVUFBUyxHQUFFLEtBQUksR0FBRSxPQUFNLEdBQUUsT0FBTSxHQUFFO0FBQVMsbUJBQU8sR0FBRSxLQUFLLFVBQVU7QUFBQSxhQUFLLFFBQU8sU0FBUyxJQUFFLElBQUU7QUFBQyxnQkFBRyxHQUFFLGdCQUFjO0FBQVkscUJBQU8sR0FBRSxLQUFLLGFBQWE7QUFBSSxnQkFBSSxLQUFFLEVBQUUsS0FBSyxNQUFNLEtBQUc7QUFBRyxtQkFBTyxHQUFFLEVBQUMsVUFBUyxHQUFFLElBQUcsS0FBSSxHQUFFLElBQUcsT0FBTSxHQUFFLElBQUcsT0FBTSxHQUFFLElBQUcsU0FBUSxHQUFFO0FBQUEsYUFBTSxjQUFhLFNBQVMsSUFBRTtBQUFDLGdCQUFJLEtBQUUsR0FBRSxVQUFTLEtBQUUsR0FBRSxLQUFJLEtBQUUsR0FBRSxPQUFNLEtBQUUsR0FBRSxPQUFNLEtBQUUsR0FBRSxTQUFRLEtBQUUsS0FBSyxjQUFZLEdBQUUsU0FBTyxHQUFFLFNBQU8sR0FBRSxTQUFPLEdBQUUsUUFBTyxLQUFFLElBQUksWUFBWSxLQUFLLGdCQUFjLEtBQUcsS0FBRSxJQUFJLFNBQVMsS0FBRyxLQUFFO0FBQUUsZUFBRSxTQUFTLE1BQUksS0FBSyxNQUFNLE9BQU0sR0FBRSxTQUFTLE1BQUksR0FBRSxTQUFRLEdBQUUsU0FBUyxNQUFJLEdBQUUsU0FBUSxHQUFFLFNBQVMsTUFBSSxHQUFFLFNBQVEsR0FBRSxTQUFTLE1BQUksR0FBRSxTQUFRLE1BQU0sS0FBSyxJQUFHLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEdBQUUsU0FBUyxNQUFJLEdBQUUsV0FBVztBQUFBLGdCQUFPLE1BQU0sS0FBSyxJQUFHLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEdBQUUsU0FBUyxNQUFJLEdBQUUsV0FBVztBQUFBLGdCQUFPLE1BQU0sS0FBSyxJQUFHLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEdBQUUsU0FBUyxNQUFJLEdBQUUsV0FBVztBQUFBLGdCQUFPLE1BQU0sS0FBSyxJQUFHLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEdBQUUsU0FBUyxNQUFJLEdBQUUsV0FBVztBQUFBO0FBQU8sZ0JBQUksS0FBRSxJQUFJLFdBQVcsR0FBRSxhQUFXLEdBQUU7QUFBWSxtQkFBTyxHQUFFLElBQUksSUFBSSxXQUFXLEtBQUcsSUFBRyxHQUFFLElBQUksSUFBSSxXQUFXLEtBQUcsR0FBRSxhQUFZLEdBQUU7QUFBQSxhQUFRLGNBQWEsU0FBUyxJQUFFO0FBQUMsZ0JBQUksS0FBRSxJQUFJLFNBQVMsS0FBRyxLQUFFLEdBQUUsU0FBUyxJQUFHLEtBQUUsSUFBSTtBQUFZLG9CQUFPO0FBQUEsbUJBQVEsS0FBSyxNQUFNO0FBQUssdUJBQU8sS0FBSyxXQUFXLElBQUUsSUFBRTtBQUFBLG1CQUFRLEtBQUssTUFBTTtBQUFNLHVCQUFPLEtBQUssWUFBWSxJQUFFLElBQUU7QUFBQSxtQkFBUSxLQUFLLE1BQU07QUFBVSx1QkFBTyxLQUFLLGdCQUFnQixJQUFFLElBQUU7QUFBQTtBQUFBLGFBQUssWUFBVyxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRSxHQUFFLFNBQVMsSUFBRyxLQUFFLEdBQUUsU0FBUyxJQUFHLEtBQUUsR0FBRSxTQUFTLElBQUcsS0FBRSxLQUFLLGdCQUFjLEtBQUssY0FBWSxHQUFFLEtBQUUsR0FBRSxPQUFPLEdBQUUsTUFBTSxJQUFFLEtBQUU7QUFBSSxrQkFBRztBQUFFLGdCQUFJLEtBQUUsR0FBRSxPQUFPLEdBQUUsTUFBTSxJQUFFLEtBQUU7QUFBSSxrQkFBRztBQUFFLGdCQUFJLEtBQUUsR0FBRSxPQUFPLEdBQUUsTUFBTSxJQUFFLEtBQUU7QUFBSSxtQkFBTyxNQUFHLElBQUUsRUFBQyxVQUFTLElBQUUsS0FBSSxNQUFLLE9BQU0sSUFBRSxPQUFNLElBQUUsU0FBUSxHQUFFLE1BQU0sSUFBRSxHQUFFO0FBQUEsYUFBYyxhQUFZLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxnQkFBSSxLQUFFLEdBQUUsU0FBUyxJQUFHLEtBQUUsR0FBRSxTQUFTLElBQUcsS0FBRSxHQUFFLFNBQVMsSUFBRyxLQUFFLEdBQUUsU0FBUyxJQUFHLEtBQUUsS0FBSyxnQkFBYyxLQUFLLGFBQVksS0FBRSxHQUFFLE9BQU8sR0FBRSxNQUFNLElBQUUsS0FBRTtBQUFJLGtCQUFHO0FBQUUsZ0JBQUksS0FBRSxHQUFFLE9BQU8sR0FBRSxNQUFNLElBQUUsS0FBRTtBQUFJLGtCQUFHO0FBQUUsZ0JBQUksS0FBRSxHQUFFLE9BQU8sR0FBRSxNQUFNLElBQUUsS0FBRTtBQUFJLGtCQUFHO0FBQUUsZ0JBQUksS0FBRSxHQUFFLE9BQU8sR0FBRSxNQUFNLElBQUUsS0FBRTtBQUFJLGtCQUFHO0FBQUUsZ0JBQUksS0FBRSxHQUFFLE1BQU0sSUFBRSxHQUFFO0FBQVksbUJBQU0sRUFBQyxVQUFTLElBQUUsS0FBSSxJQUFFLE9BQU0sSUFBRSxPQUFNLEdBQUUsU0FBUSxFQUFDLFFBQU8sSUFBRSxVQUFTO0FBQUEsYUFBSyxpQkFBZ0IsU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGdCQUFJLEtBQUUsR0FBRSxTQUFTLElBQUcsS0FBRSxHQUFFLFNBQVMsSUFBRyxLQUFFLEtBQUssZ0JBQWMsR0FBRSxLQUFFLEdBQUUsT0FBTyxHQUFFLE1BQU0sSUFBRSxLQUFFO0FBQUksa0JBQUc7QUFBRSxnQkFBSSxLQUFFLEdBQUUsT0FBTyxHQUFFLE1BQU0sSUFBRSxLQUFFO0FBQUksbUJBQU8sTUFBRyxJQUFFLEVBQUMsVUFBUyxNQUFLLEtBQUksTUFBSyxPQUFNLElBQUUsT0FBTSxJQUFFLFNBQVEsR0FBRSxNQUFNLElBQUUsR0FBRTtBQUFBLGVBQWUsSUFBRSxXQUFVO0FBQUMsd0JBQVcsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUc7QUFBRyxnQkFBRSxNQUFLLEtBQUcsS0FBSyx1QkFBcUIsRUFBQyxNQUFLLElBQUcsT0FBTSxJQUFHLE9BQU0sSUFBRyxTQUFRLE1BQUksS0FBSyxXQUFTLElBQUcsS0FBSyxhQUFXLElBQUcsS0FBSyxNQUFJLEdBQUUsS0FBSyxVQUFRLEdBQUUsV0FBUyxLQUFJLEtBQUssWUFBVSxHQUFFLGFBQVcsRUFBRSxhQUFXLEdBQUUsS0FBSyxpQkFBZSxFQUFFLE9BQU8sS0FBSyxJQUFHLEtBQUssaUJBQWUsRUFBRSxPQUFPLEtBQUssSUFBRyxLQUFLLGdCQUFjLE9BQUcsS0FBSyxXQUFTLE9BQUcsS0FBSyxhQUFXLEdBQUUsY0FBWSxlQUFjLEtBQUssY0FBWSxJQUFHLE1BQUssU0FBTyxHQUFFLFVBQVEsS0FBSyxnQkFBZSxLQUFLLFNBQU8sR0FBRSxVQUFRLEtBQUssa0JBQWlCLE1BQUssU0FBTyxLQUFLLGdCQUFlLEtBQUssU0FBTyxLQUFLLGlCQUFnQixLQUFHLEVBQUUsb0JBQWtCLEVBQUUsaUJBQWlCLGdCQUFnQixTQUFTLElBQUU7QUFBQyxtQkFBRSxRQUFPLElBQUUsV0FBUyxNQUFHLEdBQUUsY0FBYztBQUFBLGtCQUFnQixLQUFLLHNCQUFvQixHQUFFLHVCQUFxQixLQUFJLEtBQUssZ0JBQWMsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxnQkFBYyxHQUFFLGNBQWMsTUFBRyxDQUFDLEtBQUksS0FBSSxLQUFLLEtBQUUsTUFBSTtBQUFBLGlCQUFLLEtBQUssbUJBQWlCLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsV0FBUyxNQUFJLEdBQUUsbUJBQWlCLEdBQUUsaUJBQWlCLE1BQUcsQ0FBQyxJQUFHLElBQUcsS0FBSSxLQUFJLEtBQUksS0FBSSxLQUFJLEtBQUksS0FBSyxLQUFFLE1BQUk7QUFBQSxpQkFBSyxLQUFLLFNBQU8sR0FBRSxVQUFRLE1BQUssS0FBSyxvQkFBa0IsR0FBRSxxQkFBbUIsS0FBSSxLQUFLLFNBQU8sRUFBRSxHQUFFLFVBQVEsS0FBSSxLQUFLLFdBQVMsR0FBRyxPQUFPLElBQUUsS0FBSyxPQUFPLElBQUcsS0FBSyxNQUFJLEdBQUUsT0FBSyxTQUFRLEtBQUssaUJBQWUsTUFBSyxLQUFLLHNCQUFvQixNQUFLLEtBQUssaUJBQWUsSUFBSSxFQUFHLFdBQVU7QUFBQyxtQkFBRSxTQUFVLFdBQVU7QUFBQyx5QkFBTyxHQUFFO0FBQUE7QUFBQSxpQkFBZSxLQUFLO0FBQUE7QUFBa0IsbUJBQU8sRUFBRSxJQUFFLENBQUMsRUFBQyxLQUFJLFlBQVcsT0FBTSxXQUFVO0FBQUMscUJBQU8sU0FBUyxTQUFTLE1BQU0sWUFBVSxRQUFNO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGVBQWMsT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRSxFQUFFLGFBQWEsRUFBRSxhQUFhLEtBQUssVUFBUyxLQUFLLFdBQVUsRUFBQyxLQUFJLEtBQUs7QUFBTSxxQkFBTSxBQUFNLEdBQUUsT0FBTyxPQUFmLE1BQWtCLEtBQUUsQUFBTSxHQUFFLE9BQU8sT0FBZixNQUFrQixHQUFHLE9BQU8sS0FBSyxZQUFXLEtBQUssT0FBTyxNQUFHLEdBQUcsT0FBTyxLQUFLLFlBQVcsT0FBTyxPQUFPLFNBQVMsTUFBTSxPQUFPO0FBQUEsaUJBQUssRUFBQyxLQUFJLGNBQWEsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsbUJBQUssZ0JBQWMsTUFBRyxLQUFLLGVBQWUsU0FBUSxLQUFLLFNBQVMsSUFBRSxJQUFFO0FBQUEsaUJBQUssRUFBQyxLQUFJLFdBQVUsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssb0JBQUksWUFBUyxRQUFRLElBQUksNEZBQTJGLEtBQUssU0FBTyxFQUFFLE1BQUksS0FBSyxRQUFPLE1BQUssZ0JBQWMsT0FBRyxLQUFLLE9BQUssSUFBSSxLQUFLLFVBQVUsS0FBSyxnQkFBZSxLQUFLLEtBQUssYUFBVyxLQUFLLFlBQVcsS0FBSyxLQUFLLFVBQVEsS0FBSyxtQkFBa0IsS0FBSyxLQUFLLFNBQU8sV0FBVTtBQUFDLHVCQUFPLEdBQUU7QUFBQSxpQkFBYyxLQUFLLEtBQUssVUFBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLFlBQVk7QUFBQSxpQkFBSSxLQUFLLEtBQUssWUFBVSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLGNBQWM7QUFBQSxpQkFBSSxLQUFLLEtBQUssVUFBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLFlBQVk7QUFBQTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxPQUFNLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLG1CQUFLLE9BQU8sSUFBRSxJQUFFO0FBQUEsaUJBQUssRUFBQyxLQUFJLGFBQVksT0FBTSxXQUFVO0FBQUMscUJBQU8sQUFBTyxLQUFLLFdBQVo7QUFBQSxpQkFBcUIsRUFBQyxLQUFJLFVBQVMsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEtBQUs7QUFBVSxxQkFBTyxLQUFLLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxJQUFFLE1BQUk7QUFBQSxpQkFBSSxFQUFDLEtBQUksV0FBVSxPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUUsS0FBSztBQUFVLHFCQUFPLEtBQUsscUJBQXFCLE1BQU0sS0FBSyxDQUFDLElBQUUsTUFBSTtBQUFBLGlCQUFJLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxLQUFLO0FBQVUscUJBQU8sS0FBSyxxQkFBcUIsTUFBTSxLQUFLLENBQUMsSUFBRSxNQUFJO0FBQUEsaUJBQUksRUFBQyxLQUFJLGFBQVksT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEtBQUs7QUFBVSxxQkFBTyxLQUFLLHFCQUFxQixRQUFRLEtBQUssQ0FBQyxJQUFFLE1BQUk7QUFBQSxpQkFBSSxFQUFDLEtBQUksY0FBYSxPQUFNLFdBQVU7QUFBQyxtQkFBSyxlQUFhLEtBQUssSUFBSSxhQUFZLGdCQUFnQixPQUFPLEtBQUssaUJBQWdCLEtBQUssV0FBUyxPQUFHLEtBQUssZ0JBQWMsT0FBRyxLQUFLLG1CQUFrQixLQUFLLGVBQWUsU0FBUSxLQUFLLGtCQUFpQixLQUFLLHFCQUFxQixLQUFLLFFBQVMsU0FBUyxJQUFFO0FBQUMsdUJBQU8sSUFBRSxFQUFFLElBQUUsR0FBRztBQUFBO0FBQUEsaUJBQVcsRUFBQyxLQUFJLG9CQUFtQixPQUFNLFdBQVU7QUFBQyxtQkFBSyx1QkFBc0IsTUFBSyxzQkFBb0IsTUFBSyxLQUFLLGVBQWEsS0FBSyxJQUFJLGFBQVksNkRBQTRELEtBQUssY0FBYztBQUFBLGlCQUF3QixFQUFDLEtBQUksa0JBQWlCLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyxRQUFNLEtBQUssS0FBSyxpQkFBZ0IsTUFBSyxzQkFBb0IsTUFBSyxhQUFhLEtBQUssaUJBQWdCLFdBQVksV0FBVTtBQUFDLHVCQUFPLEdBQUU7QUFBQSxpQkFBa0IsS0FBSztBQUFBLGlCQUF3QixFQUFDLEtBQUksWUFBVyxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssa0JBQUcsQ0FBQyxLQUFLO0FBQUssdUJBQU8sTUFBRztBQUFJLG1CQUFLLGtCQUFtQixXQUFVO0FBQUMsbUJBQUUsUUFBTyxNQUFFLEdBQUUsS0FBSyxNQUFNLElBQUUsTUFBRyxNQUFJLEdBQUUsS0FBSyxVQUFTLEdBQUUsb0JBQXFCLFdBQVU7QUFBQyxxQkFBRSxRQUFPLElBQUUsS0FBSyxVQUFRLFdBQVU7QUFBQSxxQkFBRyxHQUFFLE9BQUssT0FBTSxNQUFHO0FBQUE7QUFBQTtBQUFBLGlCQUFZLEVBQUMsS0FBSSxxQkFBb0IsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLE1BQUssS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHO0FBQUUsY0FBSSxPQUFKLEtBQU8sS0FBSyxRQUFNLEtBQUssS0FBSyxpQkFBZSxXQUFZLFdBQVU7QUFBQyxtQkFBRSxrQkFBa0IsSUFBRSxLQUFFO0FBQUEsaUJBQUssTUFBSSxNQUFHO0FBQUEsaUJBQU0sRUFBQyxLQUFJLHVCQUFzQixPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUc7QUFBRSxjQUFJLE9BQUosS0FBTyxLQUFLLFFBQU0sS0FBSyxLQUFLLGVBQWEsSUFBRSxXQUFZLFdBQVU7QUFBQyxtQkFBRSxvQkFBb0IsSUFBRSxLQUFFO0FBQUEsaUJBQUssTUFBSSxNQUFHO0FBQUEsaUJBQU0sRUFBQyxLQUFJLGVBQWMsT0FBTSxTQUFTLElBQUU7QUFBQyxtQkFBSyxlQUFhLEtBQUssSUFBSSxhQUFZLFNBQVEsS0FBRyxLQUFLLG9CQUFtQixhQUFhLEtBQUssaUJBQWdCLEtBQUssaUJBQWUsS0FBSyxlQUFlLG1CQUFrQixLQUFLLHFCQUFxQixNQUFNLFFBQVMsU0FBUyxJQUFFO0FBQUMsdUJBQU8sSUFBRSxFQUFFLElBQUUsR0FBRyxJQUFJO0FBQUE7QUFBQSxpQkFBUSxFQUFDLEtBQUksZUFBYyxPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLGVBQWEsS0FBSyxJQUFJLGFBQVksS0FBRyxLQUFLLG9CQUFtQixLQUFLLHFCQUFxQixNQUFNLFFBQVMsU0FBUyxJQUFFO0FBQUMsdUJBQU8sSUFBRSxFQUFFLElBQUUsR0FBRyxJQUFJO0FBQUE7QUFBQSxpQkFBUSxFQUFDLEtBQUksb0JBQW1CLE9BQU0sV0FBVTtBQUFDLG1CQUFLLFNBQVMsUUFBUyxTQUFTLElBQUU7QUFBQyxtQkFBRSxlQUFhLEdBQUUsZUFBYSxHQUFFLGNBQVksR0FBRSxRQUFRO0FBQUE7QUFBQSxpQkFBUSxFQUFDLEtBQUksbUJBQWtCLE9BQU0sV0FBVTtBQUFDLHNCQUFPLEtBQUssUUFBTSxLQUFLLEtBQUs7QUFBQSxxQkFBaUI7QUFBRSx5QkFBTTtBQUFBLHFCQUFrQjtBQUFFLHlCQUFNO0FBQUEscUJBQVk7QUFBRSx5QkFBTTtBQUFBO0FBQWtCLHlCQUFNO0FBQUE7QUFBQSxpQkFBWSxFQUFDLEtBQUksZUFBYyxPQUFNLFdBQVU7QUFBQyxxQkFBTSxBQUFTLEtBQUssc0JBQWQ7QUFBQSxpQkFBa0MsRUFBQyxLQUFJLFVBQVMsT0FBTSxTQUFTLElBQUU7QUFBQyxtQkFBSyxJQUFJLEdBQUUsa0JBQWlCLEtBQUssV0FBUyxLQUFLLFNBQVMsT0FBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLGNBQVksR0FBRTtBQUFBO0FBQUEsaUJBQWUsRUFBQyxLQUFJLE9BQU0sT0FBTSxTQUFTLElBQUU7QUFBQyx1QkFBUSxNQUFLLEtBQUs7QUFBcUIscUJBQUsscUJBQXFCLE1BQUcsS0FBSyxxQkFBcUIsSUFBRyxPQUFRLFNBQVMsSUFBRTtBQUFDLHNCQUFJLEtBQUUsRUFBRSxJQUFFLEdBQUc7QUFBRyx5QkFBTSxBQUFLLEdBQUUsUUFBUSxRQUFmO0FBQUE7QUFBQSxpQkFBdUIsRUFBQyxLQUFJLFdBQVUsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUcsSUFBRyxLQUFFLElBQUksRUFBRSxJQUFFLElBQUU7QUFBTSxxQkFBTyxLQUFLLFNBQVMsS0FBSyxLQUFHO0FBQUEsaUJBQUksRUFBQyxLQUFJLFFBQU8sT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssa0JBQUcsS0FBSyxhQUFZO0FBQUMsb0JBQUksS0FBRSxHQUFFLE9BQU0sS0FBRSxHQUFFLE9BQU0sS0FBRSxHQUFFLFNBQVEsS0FBRSxHQUFFLEtBQUksS0FBRSxHQUFFO0FBQVMscUJBQUssSUFBSSxRQUFPLEdBQUcsT0FBTyxJQUFFLEtBQUssT0FBTyxJQUFFLE1BQU0sT0FBTyxJQUFFLE1BQU0sT0FBTyxJQUFFLE1BQUs7QUFBQTtBQUFHLG1CQUFLLGdCQUFjLEtBQUssT0FBTyxJQUFHLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsS0FBSyxLQUFLO0FBQUEsbUJBQU0sS0FBSyxXQUFXLEtBQU0sV0FBVTtBQUFDLHVCQUFPLEdBQUUsT0FBTyxJQUFHLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEdBQUUsS0FBSyxLQUFLO0FBQUE7QUFBQTtBQUFBLGlCQUFXLEVBQUMsS0FBSSxXQUFVLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUUsS0FBSyxNQUFJO0FBQUUscUJBQU8sT0FBSSxLQUFLLE1BQUksS0FBSyxNQUFJLElBQUUsS0FBSyxNQUFJLElBQUUsS0FBSyxJQUFJO0FBQUEsaUJBQWEsRUFBQyxLQUFJLGlCQUFnQixPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFO0FBQUssbUJBQUssdUJBQXFCLENBQUMsS0FBSyxpQkFBZ0IsTUFBSyxzQkFBb0IsS0FBSyxXQUFVLEtBQUssS0FBSyxFQUFDLE9BQU0sV0FBVSxPQUFNLGFBQVksU0FBUSxJQUFHLEtBQUksS0FBSyx3QkFBc0IsS0FBSyxpQkFBZSxXQUFZLFdBQVU7QUFBQyx1QkFBTyxHQUFFO0FBQUEsaUJBQXFCLEtBQUs7QUFBQSxpQkFBd0IsRUFBQyxLQUFJLGlCQUFnQixPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLGdCQUFjLE9BQUcsS0FBSyxpQkFBZSxLQUFLLEtBQUssTUFBTSxLQUFJO0FBQUEsaUJBQUssRUFBQyxLQUFJLG1CQUFrQixPQUFNLFdBQVU7QUFBQyxtQkFBSyxpQkFBZSxLQUFLLFdBQVcsU0FBTyxLQUFJLE1BQUssV0FBVyxRQUFTLFNBQVMsSUFBRTtBQUFDLHVCQUFPO0FBQUEsa0JBQU8sS0FBSyxhQUFXO0FBQUEsaUJBQU0sRUFBQyxLQUFJLGlCQUFnQixPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyxPQUFPLEdBQUUsTUFBTSxTQUFTLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUUsT0FBTSxLQUFFLEdBQUUsT0FBTSxLQUFFLEdBQUUsU0FBUSxLQUFFLEdBQUUsS0FBSSxLQUFFLEdBQUU7QUFBUyxzQkFBRyxPQUFJLEdBQUUsdUJBQXNCLGNBQWEsR0FBRSxpQkFBZ0IsR0FBRSxzQkFBb0IsTUFBSyxXQUFZLFdBQVU7QUFBQyx5QkFBTyxHQUFFO0FBQUEsbUJBQWtCLEdBQUUsdUJBQXNCLEdBQUUsZUFBYSxHQUFFLElBQUksV0FBVSxHQUFHLE9BQU8sR0FBRSxVQUFRLElBQUcsS0FBSyxPQUFPLElBQUUsS0FBSyxPQUFPLElBQUUsS0FBSyxPQUFPLE1BQUcsTUFBSSxLQUFFLE9BQUssS0FBSTtBQUFHLHlCQUFRLEtBQUUsR0FBRSxLQUFFLEdBQUUsU0FBUyxRQUFPLE1BQUk7QUFBQyxzQkFBSSxLQUFFLEdBQUUsU0FBUztBQUFHLHFCQUFFLFNBQVMsSUFBRSxJQUFFLElBQUUsT0FBSSxHQUFFLFFBQVEsSUFBRSxJQUFFLElBQUU7QUFBQTtBQUFHLHlCQUFRLEtBQUUsR0FBRSxLQUFFLEdBQUUscUJBQXFCLFFBQVEsUUFBTyxNQUFJO0FBQUMsa0JBQUMsSUFBRSxFQUFFLEdBQUUscUJBQXFCLFFBQVEsS0FBRyxHQUFHLElBQUk7QUFBQTtBQUFBO0FBQUEsaUJBQVMsRUFBQyxLQUFJLGtCQUFpQixPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUUsS0FBSyxTQUFTLEtBQU0sU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxVQUFRLE1BQUksSUFBRSxjQUFZLEdBQUU7QUFBQTtBQUFnQixvQkFBSSxNQUFLLGVBQWEsS0FBSyxJQUFJLGFBQVksNEJBQTRCLE9BQU8sSUFBRSxPQUFNLEdBQUU7QUFBQSxtQkFBYTtBQUFBLGVBQUssSUFBRSxXQUFVO0FBQUMsd0JBQVcsSUFBRTtBQUFDLGdCQUFFLE1BQUssS0FBRyxLQUFLLFdBQVMsTUFBSyxLQUFLLFFBQU0sTUFBSyxLQUFLLGdCQUFjLE1BQUcsS0FBSyxTQUFPLFdBQVU7QUFBQSxpQkFBRyxLQUFLLFVBQVEsV0FBVTtBQUFBLGlCQUFHLEtBQUssWUFBVSxXQUFVO0FBQUEsaUJBQUcsS0FBSyxVQUFRLFdBQVU7QUFBQSxpQkFBRyxLQUFLLGVBQWEsS0FBSyxrQkFBa0IsS0FBRyxLQUFLLGFBQVcsR0FBRSxLQUFLO0FBQUE7QUFBTyxtQkFBTyxFQUFFLElBQUUsQ0FBQyxFQUFDLEtBQUkscUJBQW9CLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxRQUFRLFNBQVEsV0FBVyxRQUFRLFVBQVMsWUFBWSxRQUFRLElBQUksT0FBTyxVQUFRLElBQUcsUUFBTTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxlQUFjLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEVBQUUsYUFBYSxLQUFLLGNBQWEsRUFBQyxPQUFNLEtBQUs7QUFBQSxpQkFBVSxFQUFDLEtBQUksaUJBQWdCLE9BQU0sV0FBVTtBQUFDLG1CQUFLLFNBQVEsS0FBSyxhQUFXO0FBQUEsaUJBQUksRUFBQyxLQUFJLGFBQVksT0FBTSxXQUFVO0FBQUMsbUJBQUssUUFBUSxZQUFXLEtBQUs7QUFBQSxpQkFBa0IsRUFBQyxLQUFJLFFBQU8sT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRTtBQUFLLG1CQUFLLGVBQWEsS0FBRyxLQUFLLGVBQWEsS0FBRyxFQUFFLFFBQVEsT0FBTSxLQUFLLGVBQWMsb0JBQW1CLE1BQUssS0FBSyxTQUFRLEtBQUssVUFBVSxLQUFLLE9BQU8sU0FBUyxJQUFFO0FBQUMsb0JBQUcsSUFBRTtBQUFDLHNCQUFJLEtBQUUsR0FBRSxRQUFPLEtBQUUsR0FBRSxPQUFNLEtBQUUsR0FBRTtBQUFTLHFCQUFFLFFBQU07QUFBQTtBQUFPLHVCQUFFO0FBQUUsd0JBQU87QUFBQSx1QkFBUTtBQUFJLHVCQUFFLFFBQVMsU0FBUyxJQUFFO0FBQUMsaUNBQVksV0FBVTtBQUFDLDJCQUFFLFVBQVUsRUFBQyxNQUFLO0FBQUEseUJBQU07QUFBQSx3QkFBTSxHQUFFO0FBQU87QUFBQSx1QkFBVztBQUFJLHVCQUFFO0FBQU87QUFBQSx1QkFBVztBQUFJLHVCQUFFLGFBQVcsR0FBRSxHQUFFLFVBQVMsR0FBRTtBQUFPO0FBQUEsdUJBQVc7QUFBSSx1QkFBRSxXQUFVLEdBQUU7QUFBUTtBQUFBLHVCQUFXO0FBQUEsdUJBQU87QUFBSSx1QkFBRSxXQUFVLEdBQUU7QUFBZ0I7QUFBQTtBQUFjLDBCQUFNLElBQUksTUFBTSx5QkFBeUIsT0FBTztBQUFBO0FBQUE7QUFBQSxpQkFBVSxFQUFDLEtBQUksUUFBTyxPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxnQkFBRSxRQUFRLFFBQU8sS0FBSyxlQUFjLG9CQUFtQixJQUFFLEtBQUssU0FBUSxLQUFLLFFBQVEsS0FBSyxNQUFLLFlBQVksU0FBUyxJQUFFO0FBQUMsc0JBQUcsQUFBTSxHQUFFLFdBQVIsT0FBaUIsSUFBRSxRQUFRLE1BQUcsR0FBRSxTQUFRLEdBQUU7QUFBQTtBQUFBLGlCQUFzQixFQUFDLEtBQUksU0FBUSxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUssYUFBVyxHQUFFLEtBQUs7QUFBQSxtQkFBYztBQUFBLGVBQUssSUFBRSxXQUFVO0FBQUMsMEJBQVk7QUFBQyxnQkFBRSxNQUFLO0FBQUE7QUFBRyxtQkFBTyxFQUFFLElBQUUsTUFBSyxDQUFDLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUcsRUFBRSxnQkFBZTtBQUFDLG9CQUFJLEtBQUUsSUFBSTtBQUFlLHFCQUFLLGVBQWUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQSxxQkFBTztBQUFDLG9CQUFJLEtBQUUsSUFBSSxFQUFFO0FBQWUscUJBQUssV0FBVyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUE7QUFBQSxpQkFBTSxFQUFDLEtBQUksa0JBQWlCLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLGlCQUFFLFVBQVEsSUFBRSxHQUFFLEtBQUssSUFBRSxLQUFHLEdBQUUsU0FBTyxXQUFVO0FBQUMsb0JBQUksS0FBRSxHQUFFLFVBQVUsR0FBRTtBQUFjLHNCQUFHLEdBQUU7QUFBQSxpQkFBSSxNQUFJLElBQUUsWUFBVSxLQUFHLEdBQUUsYUFBVyxXQUFVO0FBQUEsaUJBQUcsR0FBRSxLQUFLO0FBQUEsaUJBQUssRUFBQyxLQUFJLGNBQWEsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxpQkFBRSxLQUFLLElBQUUsSUFBRSxPQUFJLEdBQUUsVUFBUSxJQUFFLEdBQUUsaUJBQWlCLGdCQUFlLEtBQUcsR0FBRSxVQUFRLFdBQVU7QUFBQyxzQkFBRyxHQUFFO0FBQUEsaUJBQU8sR0FBRSxxQkFBbUIsV0FBVTtBQUFDLG9CQUFHLEdBQUUsZUFBYSxHQUFFLE9BQU8sWUFBVSxJQUFFO0FBQUMsc0JBQUksS0FBRSxHQUFFLFVBQVUsR0FBRTtBQUFjLHFCQUFFO0FBQUE7QUFBQSxpQkFBSyxNQUFJLElBQUUsWUFBVSxLQUFHLEdBQUUsS0FBSztBQUFBLGlCQUFLLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUcsQ0FBQyxNQUFHLEFBQUssT0FBTDtBQUFPLHVCQUFPO0FBQUssa0JBQUc7QUFBQyx1QkFBTyxLQUFLLE1BQU07QUFBQSx1QkFBUyxJQUFOO0FBQVMsdUJBQU8sV0FBUyxRQUFRLElBQUksaUNBQWdDLEtBQUc7QUFBQTtBQUFBLGlCQUFRLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUcsdUJBQVEsTUFBSztBQUFFLG9CQUFHLEdBQUUsZUFBZSxLQUFHO0FBQUMsc0JBQUksS0FBRSxLQUFFLEdBQUcsT0FBTyxJQUFFLEtBQUssT0FBTyxJQUFFLE9BQUssSUFBRSxLQUFFLEdBQUU7QUFBRyxrQkFBVyxFQUFFLFFBQWIsV0FBZ0IsR0FBRSxLQUFLLEtBQUssVUFBVSxJQUFFLE9BQUksR0FBRSxLQUFLLG1CQUFtQixNQUFHLE1BQUksbUJBQW1CO0FBQUE7QUFBSSxxQkFBTyxHQUFFLEtBQUs7QUFBQSxpQkFBTyxFQUFDLEtBQUksZ0JBQWUsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFHLEFBQUksT0FBTyxLQUFLLElBQUcsV0FBbkI7QUFBMEIsdUJBQU87QUFBRSxrQkFBSSxLQUFFLEdBQUUsTUFBTSxRQUFNLE1BQUk7QUFBSSxxQkFBTSxHQUFHLE9BQU8sSUFBRyxPQUFPLElBQUcsT0FBTyxLQUFLLFVBQVU7QUFBQSxtQkFBUTtBQUFBO0FBQUssWUFBRSxTQUFPLEVBQUMsVUFBUztBQUFHLGNBQUksSUFBRSxXQUFVO0FBQUMsd0JBQVcsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUc7QUFBRyxnQkFBRSxNQUFLO0FBQUcsa0JBQUksS0FBRSxHQUFFLFVBQVEsRUFBQyxPQUFNLGtCQUFpQixNQUFLO0FBQWlCLG1CQUFLLFFBQU0sSUFBRyxLQUFLLGVBQWEsSUFBRyxLQUFLLFVBQVEsSUFBRSxLQUFLLFVBQVEsTUFBSyxLQUFLLFNBQU8sRUFBQyxRQUFPLFdBQVU7QUFBQSxpQkFBRyxTQUFRLFdBQVU7QUFBQSxpQkFBRyxRQUFPLFdBQVU7QUFBQSxtQkFBSSxLQUFLLFFBQVEsR0FBRyxHQUFFLE9BQU8sU0FBUyxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFLFFBQU8sS0FBRSxHQUFFLFFBQU8sS0FBRSxHQUFFLFNBQVEsS0FBRSxHQUFFO0FBQU8sbUJBQUUsVUFBUSxHQUFFLFFBQVEsV0FBVSxHQUFFLFFBQU0sR0FBRSxVQUFVLEdBQUUsT0FBTSxJQUFFLElBQUUsS0FBRyxHQUFFLGFBQWEsUUFBUyxTQUFTLElBQUU7QUFBQyxxQkFBRSxRQUFNLEdBQUUsU0FBUyxHQUFFLE9BQU0sSUFBRSxJQUFFO0FBQUEsb0JBQU0sR0FBRSxlQUFhLElBQUc7QUFBQSxrQkFBTyxLQUFLLFFBQVEsR0FBRyxHQUFFLE1BQU0sU0FBUyxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFLFFBQU8sS0FBRSxHQUFFLFFBQU8sS0FBRSxHQUFFLFNBQVEsS0FBRSxHQUFFO0FBQU8sbUJBQUUsdUJBQXFCLEdBQUUsYUFBYSxLQUFLLE1BQUksSUFBRSxRQUFNLEdBQUUsU0FBUyxHQUFFLE9BQU0sSUFBRSxJQUFFLEtBQUc7QUFBQTtBQUFBO0FBQVEsbUJBQU8sRUFBRSxJQUFFLENBQUMsRUFBQyxLQUFJLFVBQVMsT0FBTSxTQUFTLElBQUU7QUFBQyxtQkFBSyxPQUFPLFNBQU87QUFBQSxpQkFBSSxFQUFDLEtBQUksV0FBVSxPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLE9BQU8sVUFBUTtBQUFBLGlCQUFJLEVBQUMsS0FBSSxVQUFTLE9BQU0sU0FBUyxJQUFFO0FBQUMsbUJBQUssT0FBTyxTQUFPO0FBQUEsaUJBQUksRUFBQyxLQUFJLFFBQU8sT0FBTSxTQUFTLElBQUU7QUFBQyxxQkFBTyxHQUFFLEtBQUssS0FBSyxPQUFNO0FBQUEsaUJBQUssRUFBQyxLQUFJLHNCQUFxQixPQUFNLFdBQVU7QUFBQyxxQkFBTSxDQUFDLEtBQUssV0FBUyxLQUFLLFlBQVUsS0FBSyxRQUFRO0FBQUEsa0JBQWEsQ0FBQyxFQUFDLEtBQUksYUFBWSxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEtBQUssTUFBTSxLQUFHLEtBQUUsSUFBRyxLQUFFO0FBQUcscUJBQU8sS0FBSyxJQUFJLElBQUcsU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBRSxPQUFLLElBQUUsTUFBRztBQUFBLGtCQUFNLEtBQUssSUFBSSxJQUFHLFNBQVMsSUFBRSxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFO0FBQUcsb0JBQUcsSUFBRTtBQUFDLHNCQUFJLEtBQUUsR0FBRSxNQUFNLElBQUssU0FBUyxJQUFFO0FBQUMsMkJBQU8sR0FBRTtBQUFBLHNCQUFXLEtBQUUsR0FBRSxNQUFNLElBQUssU0FBUyxJQUFFO0FBQUMsMkJBQU8sR0FBRTtBQUFBLHNCQUFXLEtBQUUsR0FBRSxNQUFNLE9BQVEsU0FBUyxJQUFFO0FBQUMsMkJBQU8sR0FBRSxRQUFRLEdBQUUsV0FBUztBQUFBLHNCQUFLLEtBQUUsR0FBRSxNQUFNLE9BQVEsU0FBUyxJQUFFO0FBQUMsMkJBQU8sR0FBRSxRQUFRLEdBQUUsV0FBUztBQUFBO0FBQUsscUJBQUUsU0FBTyxLQUFJLElBQUUsTUFBRyxJQUFFLEdBQUUsSUFBRyxRQUFNLEtBQUcsR0FBRSxTQUFPLEtBQUksSUFBRSxNQUFHLEdBQUUsTUFBTSxLQUFHLEdBQUUsSUFBRyxRQUFNO0FBQUE7QUFBUSxxQkFBRSxNQUFHO0FBQUEsa0JBQUssS0FBSyxTQUFTLElBQUUsRUFBQyxPQUFNLElBQUUsUUFBTyxNQUFHLElBQUU7QUFBQSxpQkFBSyxFQUFDLEtBQUksWUFBVyxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsR0FBRSxPQUFNLEtBQUUsR0FBRSxRQUFPLEtBQUUsS0FBSyxNQUFNO0FBQUcscUJBQU8sTUFBSSxNQUFFLFdBQVU7QUFBQSxrQkFBSSxNQUFJLE1BQUUsV0FBVTtBQUFBLGtCQUFJLEtBQUssSUFBSSxJQUFHLFNBQVMsSUFBRSxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFO0FBQUcsb0JBQUcsR0FBRSxNQUFHLElBQUUsSUFBRTtBQUFDLHNCQUFJLElBQUUsS0FBRSxHQUFFLElBQUcsTUFBTSxJQUFLLFNBQVMsSUFBRTtBQUFDLDJCQUFPLEdBQUU7QUFBQSxzQkFBVyxLQUFFLEdBQUUsTUFBTSxPQUFRLFNBQVMsSUFBRTtBQUFDLDJCQUFPLEdBQUUsUUFBUSxHQUFFLFdBQVM7QUFBQTtBQUFLLGtCQUFDLE1BQUUsR0FBRSxJQUFHLE9BQU8sUUFBUSxNQUFNLElBQUUsRUFBRTtBQUFBO0FBQUksbUJBQUUsSUFBRSxJQUFFO0FBQUEsa0JBQU0sS0FBSyxJQUFJLElBQUcsU0FBUyxJQUFFLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUU7QUFBRyxvQkFBRyxJQUFFO0FBQUMsc0JBQUksS0FBRSxHQUFFLE1BQU0sSUFBSyxTQUFTLElBQUU7QUFBQywyQkFBTyxHQUFFO0FBQUE7QUFBVyxxQkFBRSxRQUFNLEdBQUUsTUFBTSxPQUFRLFNBQVMsSUFBRTtBQUFDLDJCQUFPLEdBQUUsUUFBUSxHQUFFLFdBQVM7QUFBQSxzQkFBSyxHQUFFLElBQUUsSUFBRSxLQUFHLEFBQUksR0FBRSxNQUFNLFdBQVosS0FBb0IsT0FBTyxHQUFFO0FBQUE7QUFBQSxrQkFBTztBQUFBLGlCQUFJLEVBQUMsS0FBSSxRQUFPLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxxQkFBTyxNQUFJLE1BQUUsU0FBUyxJQUFFLElBQUU7QUFBQyx1QkFBTztBQUFBLGtCQUFJLEtBQUssSUFBSSxJQUFHLFNBQVMsSUFBRSxJQUFFO0FBQUMsdUJBQU8sR0FBRSxJQUFFO0FBQUE7QUFBQSxpQkFBUSxFQUFDLEtBQUksT0FBTSxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMscUJBQU8sT0FBTyxvQkFBb0IsSUFBRyxJQUFLLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsSUFBRSxHQUFFO0FBQUE7QUFBQSxpQkFBUyxFQUFDLEtBQUksU0FBUSxPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssTUFBTSxLQUFLLFVBQVU7QUFBQSxtQkFBUTtBQUFBLGVBQUssSUFBRSxXQUFVO0FBQUMsd0JBQVcsSUFBRSxJQUFFO0FBQUMsZ0JBQUUsTUFBSyxLQUFHLEtBQUssV0FBUyxJQUFFLEtBQUssWUFBVSxJQUFFLEtBQUssUUFBTSxNQUFLLEtBQUssUUFBTTtBQUFBO0FBQUUsbUJBQU8sRUFBRSxJQUFFLENBQUMsRUFBQyxLQUFJLFNBQVEsT0FBTSxXQUFVO0FBQUMsbUJBQUssUUFBTSxHQUFFLGFBQWEsS0FBSztBQUFBLGlCQUFTLEVBQUMsS0FBSSxtQkFBa0IsT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRTtBQUFLLDJCQUFhLEtBQUssUUFBTyxLQUFLLFFBQU0sV0FBWSxXQUFVO0FBQUMsbUJBQUUsUUFBTSxHQUFFLFFBQU0sR0FBRSxHQUFFO0FBQUEsaUJBQWEsS0FBSyxVQUFVLEtBQUssUUFBTTtBQUFBLG1CQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXJweUI7QUFBQTtBQUFBLE9BQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFVLE9BQU8sV0FBakIsWUFBMEIsQUFBVSxPQUFPLFVBQWpCLFdBQXdCLE9BQU8sVUFBUSxNQUFJLEFBQVksT0FBTyxVQUFuQixjQUEyQixPQUFPLE1BQUksT0FBTyxJQUFHLEtBQUcsQUFBVSxPQUFPLFdBQWpCLFdBQXlCLFFBQVEsb0JBQWtCLE1BQUksRUFBRSxvQkFBa0I7QUFBQSxRQUFLLFNBQUssV0FBVTtBQUFDLGVBQU8sU0FBUyxHQUFFO0FBQUMsY0FBSSxJQUFFO0FBQUcscUJBQVcsR0FBRTtBQUFDLGdCQUFHLEVBQUU7QUFBRyxxQkFBTyxFQUFFLEdBQUc7QUFBUSxnQkFBSSxJQUFFLEVBQUUsS0FBRyxFQUFDLEdBQUksR0FBRSxPQUFHLFNBQVE7QUFBSSxtQkFBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLFNBQVEsR0FBRSxFQUFFLFNBQVEsSUFBRyxFQUFFLElBQUUsTUFBRyxFQUFFO0FBQUE7QUFBUSxpQkFBTyxFQUFFLElBQUUsR0FBRSxFQUFFLElBQUUsR0FBRSxFQUFFLElBQUUsU0FBUyxJQUFFLElBQUUsR0FBRTtBQUFDLGNBQUUsRUFBRSxJQUFFLE9BQUksT0FBTyxlQUFlLElBQUUsSUFBRSxFQUFDLGNBQWEsT0FBRyxZQUFXLE1BQUcsS0FBSTtBQUFBLGFBQUssRUFBRSxJQUFFLFNBQVMsSUFBRTtBQUFDLG1CQUFPLGVBQWUsSUFBRSxjQUFhLEVBQUMsT0FBTTtBQUFBLGFBQU0sRUFBRSxJQUFFLFNBQVMsSUFBRTtBQUFDLGdCQUFJLEtBQUUsTUFBRyxHQUFFLGFBQVcsV0FBVTtBQUFDLHFCQUFPLEdBQUU7QUFBQSxnQkFBUyxXQUFVO0FBQUMscUJBQU87QUFBQTtBQUFHLG1CQUFPLEVBQUUsRUFBRSxJQUFFLEtBQUksS0FBRztBQUFBLGFBQUcsRUFBRSxJQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQU8sT0FBTyxVQUFVLGVBQWUsS0FBSyxJQUFFO0FBQUEsYUFBSSxFQUFFLElBQUUsSUFBRyxFQUFFLEVBQUUsSUFBRTtBQUFBLFVBQUksQ0FBQyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUM7QUFBYSxZQUFFLEVBQUU7QUFBRyxjQUFJLEdBQUUsSUFBRTtBQUFHLGNBQUksSUFBRSxnQ0FBK0IsSUFBRSxBQUFhLE9BQU8sWUFBcEIsY0FBNkIsU0FBTyxVQUFTLElBQUUsQ0FBQyxDQUFDLEtBQUcsYUFBWSxFQUFFLGNBQWMsYUFBWSxJQUFFLENBQUMsQ0FBQyxLQUFHLEVBQUUsZUFBYSw4QkFBNkIsRUFBRTtBQUFjLHFCQUFXLElBQUU7QUFBQyxtQkFBTyxLQUFFLEdBQUUsUUFBTyxJQUFFLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUUsRUFBRSxjQUFjO0FBQVkscUJBQU8sR0FBRSxZQUFVLElBQUUsR0FBRSxRQUFRLFdBQVc7QUFBQSxjQUFJLE1BQUcsSUFBRSxTQUFTLElBQUU7QUFBQyxxQkFBTyxLQUFJLEtBQUUsRUFBRSxlQUFlLFdBQVcsRUFBRSxPQUFNLEVBQUUseUJBQXlCLElBQUcsV0FBVztBQUFBLGNBQUksTUFBRyxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEVBQUUsY0FBYztBQUFRLHFCQUFPLEdBQUUsWUFBVSxJQUFFLEdBQUUsV0FBVztBQUFBLGNBQUk7QUFBQTtBQUFHLHFCQUFXLElBQUUsSUFBRTtBQUFDLGdCQUFJLElBQUUsSUFBRSxLQUFFLEdBQUUsVUFBUyxLQUFFLEdBQUU7QUFBUyxtQkFBTyxPQUFJLE1BQUksTUFBRSxHQUFFLFdBQVcsSUFBRyxLQUFFLEdBQUUsV0FBVyxJQUFHLE1BQUcsTUFBSSxNQUFHLEtBQUcsT0FBSSxHQUFFLGdCQUFjLE1BQUcsTUFBSSxNQUFHLE1BQUksT0FBSSxHQUFFO0FBQUE7QUFBZSxxQkFBVyxJQUFFLElBQUUsSUFBRTtBQUFDLGVBQUUsUUFBSyxHQUFFLE9BQUssSUFBRSxNQUFHLEdBQUUsS0FBRyxHQUFFLE1BQUcsR0FBRSxhQUFhLElBQUUsTUFBSSxHQUFFLGdCQUFnQjtBQUFBO0FBQUksY0FBSSxJQUFFLEVBQUMsUUFBTyxTQUFTLElBQUUsSUFBRTtBQUFDLGdCQUFJLEtBQUUsR0FBRTtBQUFXLGdCQUFHLElBQUU7QUFBQyxrQkFBSSxLQUFFLEdBQUUsU0FBUztBQUFjLGNBQWEsT0FBYixjQUFpQixNQUFHLE1BQUUsR0FBRSxlQUFhLEdBQUUsU0FBUyxnQkFBZSxBQUFXLE9BQVgsWUFBYyxHQUFFLGFBQWEsZUFBYyxJQUFFLGFBQWEsZUFBYSxDQUFDLEdBQUUsWUFBVyxJQUFFLGFBQWEsWUFBVyxhQUFZLEdBQUUsZ0JBQWdCLGNBQWEsR0FBRSxnQkFBYztBQUFBO0FBQUksY0FBRSxJQUFFLElBQUU7QUFBQSxhQUFhLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxjQUFFLElBQUUsSUFBRSxZQUFXLEVBQUUsSUFBRSxJQUFFLGFBQVksR0FBRSxVQUFRLEdBQUUsU0FBUSxJQUFFLFFBQU0sR0FBRSxRQUFPLEdBQUUsYUFBYSxZQUFVLEdBQUUsZ0JBQWdCO0FBQUEsYUFBVSxVQUFTLFNBQVMsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRSxHQUFFO0FBQU0sZUFBRSxVQUFRLE1BQUksSUFBRSxRQUFNO0FBQUcsZ0JBQUksS0FBRSxHQUFFO0FBQVcsZ0JBQUcsSUFBRTtBQUFDLGtCQUFJLEtBQUUsR0FBRTtBQUFVLGtCQUFHLE1BQUcsTUFBRyxDQUFDLE1BQUcsTUFBRyxHQUFFO0FBQVk7QUFBTyxpQkFBRSxZQUFVO0FBQUE7QUFBQSxhQUFJLFFBQU8sU0FBUyxJQUFFLElBQUU7QUFBQyxnQkFBRyxDQUFDLEdBQUUsYUFBYSxhQUFZO0FBQUMsdUJBQVEsSUFBRSxJQUFFLEtBQUUsSUFBRyxLQUFFLEdBQUUsS0FBRSxHQUFFLFlBQVc7QUFBRyxvQkFBRyxBQUFjLE1BQUUsR0FBRSxZQUFVLEdBQUUsU0FBUyxtQkFBdkM7QUFBc0QsdUJBQUcsTUFBRSxJQUFHO0FBQUEscUJBQWU7QUFBQyxzQkFBRyxBQUFXLE9BQVgsVUFBYTtBQUFDLHdCQUFHLEdBQUUsYUFBYSxhQUFZO0FBQUMsMkJBQUU7QUFBRTtBQUFBO0FBQU07QUFBQTtBQUFJLG1CQUFFLE1BQUUsR0FBRSxnQkFBYyxNQUFJLE1BQUUsR0FBRSxhQUFZLEtBQUU7QUFBQTtBQUFNLGlCQUFFLGdCQUFjO0FBQUE7QUFBQSxlQUFLLElBQUUsR0FBRSxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUU7QUFBRSx1QkFBWTtBQUFBO0FBQUUscUJBQVcsSUFBRTtBQUFDLGdCQUFHO0FBQUUscUJBQU8sR0FBRSxnQkFBYyxHQUFFLGFBQWEsU0FBTyxHQUFFO0FBQUE7QUFBRyxjQUFJLElBQUUsU0FBUyxJQUFFO0FBQUMsbUJBQU8sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFHLE1BQUksTUFBRSxLQUFJLEFBQVUsT0FBTyxNQUFqQjtBQUFtQixvQkFBRyxBQUFjLEdBQUUsYUFBaEIsZUFBMEIsQUFBUyxHQUFFLGFBQVgsVUFBcUIsQUFBUyxHQUFFLGFBQVgsUUFBb0I7QUFBQyxzQkFBSSxLQUFFO0FBQUUsa0JBQUMsTUFBRSxFQUFFLGNBQWMsU0FBUyxZQUFVO0FBQUE7QUFBTyx1QkFBRSxFQUFFO0FBQUcsa0JBQUksS0FBRSxHQUFFLGNBQVksR0FBRSxLQUFFLEdBQUUscUJBQW1CLEdBQUUsS0FBRSxHQUFFLGVBQWEsR0FBRSxLQUFFLEdBQUUscUJBQW1CLEdBQUUsS0FBRSxHQUFFLGVBQWEsR0FBRSxLQUFFLEdBQUUseUJBQXVCLEdBQUUsS0FBRSxHQUFFLG1CQUFpQixHQUFFLEtBQUUsR0FBRSw2QkFBMkIsR0FBRSxLQUFFLEFBQUssR0FBRSxpQkFBUCxNQUFvQixLQUFFLE9BQU8sT0FBTyxPQUFNLEtBQUU7QUFBRywwQkFBVyxJQUFFO0FBQUMsbUJBQUUsS0FBSztBQUFBO0FBQUcsMEJBQVcsSUFBRSxJQUFFLElBQUU7QUFBQyxnQkFBSyxHQUFFLFFBQVAsU0FBWSxPQUFHLEdBQUUsWUFBWSxLQUFHLEdBQUUsS0FBRyxZQUFXLElBQUUsSUFBRTtBQUFDLHNCQUFHLEdBQUUsYUFBVztBQUFFLDZCQUFRLEtBQUUsR0FBRSxZQUFXLE1BQUc7QUFBQywwQkFBSSxLQUFFO0FBQU8sNEJBQUksTUFBRSxHQUFFLE9BQUksR0FBRSxNQUFJLElBQUUsS0FBRyxHQUFFLGNBQVksR0FBRSxJQUFFLE1BQUksS0FBRSxHQUFFO0FBQUE7QUFBQSxrQkFBYyxJQUFFO0FBQUE7QUFBSSwwQkFBVyxJQUFFO0FBQUMsbUJBQUU7QUFBRyx5QkFBUSxLQUFFLEdBQUUsWUFBVyxNQUFHO0FBQUMsc0JBQUksS0FBRSxHQUFFLGFBQVksS0FBRSxHQUFFO0FBQUcsc0JBQUcsSUFBRTtBQUFDLHdCQUFJLEtBQUUsR0FBRTtBQUFHLDBCQUFHLEVBQUUsSUFBRSxNQUFJLElBQUUsV0FBVyxhQUFhLElBQUUsS0FBRyxHQUFFLElBQUUsT0FBSSxHQUFFO0FBQUE7QUFBUSx1QkFBRTtBQUFHLHVCQUFFO0FBQUE7QUFBQTtBQUFHLDBCQUFXLElBQUUsSUFBRSxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFO0FBQUcsb0JBQUcsTUFBRyxPQUFPLEdBQUUsS0FBRyxDQUFDLElBQUU7QUFBQyxzQkFBRyxBQUFLLEdBQUUsSUFBRSxRQUFUO0FBQVk7QUFBTyxzQkFBRyxHQUFFLElBQUUsS0FBRyxHQUFFLEtBQUcsQUFBSyxHQUFFLElBQUUsUUFBVDtBQUFZO0FBQUE7QUFBTyxnQkFBYSxHQUFFLGFBQWYsYUFBd0IsU0FBUyxJQUFFLElBQUU7QUFBQyxzQkFBSSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsS0FBRSxHQUFFLFlBQVcsS0FBRSxHQUFFO0FBQVc7QUFBRSwyQkFBSyxNQUFHO0FBQUMsMkJBQUksS0FBRSxHQUFFLGFBQVksS0FBRSxHQUFFLEtBQUcsTUFBRztBQUFDLDRCQUFHLEtBQUUsR0FBRSxhQUFZLEdBQUUsY0FBWSxHQUFFLFdBQVcsS0FBRztBQUFDLCtCQUFFLElBQUUsS0FBRTtBQUFFO0FBQUE7QUFBVyw2QkFBRSxHQUFFO0FBQUcsNEJBQUksS0FBRSxHQUFFLFVBQVMsS0FBRTtBQUFPLDRCQUFHLE9BQUksR0FBRSxZQUFXLFFBQUksSUFBRyxNQUFFLE9BQUksTUFBSyxPQUFFLEdBQUUsT0FBSSxPQUFJLEtBQUUsS0FBRSxRQUFJLElBQUUsYUFBYSxJQUFFLEtBQUcsS0FBRSxHQUFFLE1BQUcsR0FBRSxJQUFFLElBQUUsT0FBSSxLQUFFLE1BQUcsS0FBRSxTQUFJLE1BQUksTUFBRSxRQUFLLE1BQUUsQUFBSyxPQUFMLFNBQVEsRUFBRSxJQUFFLFFBQUssR0FBRSxJQUFFLE9BQUksT0FBSSxLQUFHLE1BQUcsS0FBSSxNQUFFLE1BQUcsR0FBRSxjQUFZLEdBQUUsYUFBWSxJQUFFLFlBQVUsR0FBRSxjQUFhLElBQUU7QUFBQywrQkFBRSxJQUFFLEtBQUU7QUFBRTtBQUFBO0FBQVcsNkJBQUUsR0FBRSxNQUFHLEdBQUUsSUFBRSxJQUFFLE9BQUksS0FBRTtBQUFBO0FBQUUsMEJBQUcsTUFBSSxNQUFFLEdBQUUsUUFBSyxFQUFFLElBQUU7QUFBRywyQkFBRSxZQUFZLEtBQUcsR0FBRSxJQUFFO0FBQUEsMkJBQU87QUFBQyw0QkFBSSxLQUFFLEdBQUU7QUFBRyx3QkFBSyxPQUFMLFNBQVMsT0FBSSxNQUFFLEtBQUcsR0FBRSxhQUFZLE1BQUUsR0FBRSxVQUFVLEdBQUUsaUJBQWUsS0FBSSxHQUFFLFlBQVksS0FBRyxHQUFFO0FBQUE7QUFBSSwyQkFBRSxJQUFFLEtBQUU7QUFBQTtBQUFFLG1CQUFDLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQywyQkFBSyxNQUFHO0FBQUMsMEJBQUksS0FBRSxHQUFFO0FBQVksc0JBQUMsTUFBRSxHQUFFLE9BQUksR0FBRSxNQUFHLEdBQUUsSUFBRSxJQUFFLE9BQUksS0FBRTtBQUFBO0FBQUEsb0JBQUksSUFBRSxJQUFFO0FBQUcsc0JBQUksS0FBRSxFQUFFLEdBQUU7QUFBVSx3QkFBRyxHQUFFLElBQUU7QUFBQSxrQkFBSSxJQUFFLE1BQUcsRUFBRSxTQUFTLElBQUU7QUFBQTtBQUFHLGVBQUMsWUFBVyxJQUFFO0FBQUMsb0JBQUcsR0FBRSxhQUFXLEtBQUcsR0FBRSxhQUFXO0FBQUUsMkJBQVEsS0FBRSxHQUFFLFlBQVcsTUFBRztBQUFDLHdCQUFJLEtBQUUsR0FBRTtBQUFHLDBCQUFJLElBQUUsTUFBRyxLQUFHLEdBQUUsS0FBRyxLQUFFLEdBQUU7QUFBQTtBQUFBLGdCQUFjO0FBQUcsa0JBQUksS0FBRSxJQUFFLEtBQUUsR0FBRSxVQUFTLEtBQUUsR0FBRTtBQUFTLGtCQUFHLENBQUM7QUFBRSxvQkFBRyxPQUFJO0FBQUUseUJBQUksSUFBRSxFQUFFLElBQUUsT0FBSyxJQUFFLEtBQUcsS0FBRSxTQUFTLElBQUUsSUFBRTtBQUFDLDZCQUFRLEtBQUUsR0FBRSxZQUFXLE1BQUc7QUFBQywwQkFBSSxLQUFFLEdBQUU7QUFBWSx5QkFBRSxZQUFZLEtBQUcsS0FBRTtBQUFBO0FBQUUsMkJBQU87QUFBQSxvQkFBRyxJQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMsMkJBQU8sTUFBRyxPQUFJLElBQUUsRUFBRSxnQkFBZ0IsSUFBRSxNQUFHLEVBQUUsY0FBYztBQUFBLG9CQUFJLEdBQUUsVUFBUyxHQUFFLGtCQUFnQixLQUFFO0FBQUEseUJBQVUsT0FBSSxLQUFHLE9BQUksR0FBRTtBQUFDLHNCQUFHLE9BQUk7QUFBRSwyQkFBTyxHQUFFLGNBQVksR0FBRSxhQUFZLElBQUUsWUFBVSxHQUFFLFlBQVc7QUFBRSx1QkFBRTtBQUFBO0FBQUE7QUFBRSxrQkFBRyxPQUFJO0FBQUUsbUJBQUU7QUFBQSxtQkFBTztBQUFDLG9CQUFHLEdBQUUsY0FBWSxHQUFFLFdBQVc7QUFBRztBQUFPLG9CQUFHLEdBQUUsSUFBRSxJQUFFLEtBQUc7QUFBRSwyQkFBUSxLQUFFLEdBQUUsS0FBRSxHQUFFLFFBQU8sS0FBRSxJQUFFLE1BQUk7QUFBQyx3QkFBSSxLQUFFLEdBQUUsR0FBRTtBQUFJLDBCQUFHLEdBQUUsSUFBRSxHQUFFLFlBQVc7QUFBQTtBQUFBO0FBQUsscUJBQU0sQ0FBQyxNQUFHLE9BQUksTUFBRyxHQUFFLGNBQWEsSUFBRSxhQUFZLE1BQUUsR0FBRSxVQUFVLEdBQUUsaUJBQWUsS0FBSSxHQUFFLFdBQVcsYUFBYSxJQUFFLE1BQUk7QUFBQTtBQUFBLFlBQUksU0FBUyxJQUFFLElBQUU7QUFBQyxnQkFBSSxJQUFFLElBQUUsSUFBRSxJQUFFLEtBQUUsR0FBRTtBQUFXLGdCQUFHLEdBQUUsYUFBVyxLQUFHLEdBQUUsYUFBVyxHQUFFO0FBQUMsdUJBQVEsS0FBRSxHQUFFLFNBQU8sR0FBRSxNQUFHLEdBQUU7QUFBSSxxQkFBRyxNQUFFLEdBQUUsS0FBSSxNQUFLLEtBQUUsR0FBRSxjQUFhLEtBQUUsR0FBRSxPQUFNLEtBQUcsTUFBRSxHQUFFLGFBQVcsSUFBRSxHQUFFLGVBQWUsSUFBRSxRQUFLLE1BQUksQ0FBVSxHQUFFLFdBQVosV0FBcUIsTUFBRSxHQUFFLE9BQU0sR0FBRSxlQUFlLElBQUUsSUFBRSxRQUFLLEdBQUUsYUFBYSxRQUFLLE1BQUcsR0FBRSxhQUFhLElBQUU7QUFBRyx1QkFBUSxLQUFFLEdBQUUsWUFBVyxLQUFFLEdBQUUsU0FBTyxHQUFFLE1BQUcsR0FBRTtBQUFJLHFCQUFHLE1BQUUsR0FBRSxLQUFJLE1BQU0sTUFBRSxHQUFFLGdCQUFlLE1BQUUsR0FBRSxhQUFXLElBQUUsR0FBRSxlQUFlLElBQUUsT0FBSSxHQUFFLGtCQUFrQixJQUFFLE9BQUksR0FBRSxhQUFhLE9BQUksR0FBRSxnQkFBZ0I7QUFBQTtBQUFBO0FBQU0scUJBQVcsSUFBRTtBQUFDLG1CQUFPLEVBQUUsT0FBSSxFQUFFLE9BQUksRUFBRSxPQUFJO0FBQUE7QUFBSSxxQkFBVyxJQUFFO0FBQUMsbUJBQU8sU0FBUyxJQUFFO0FBQUMsa0JBQUcsTUFBTSxRQUFRO0FBQUcsdUJBQU8sRUFBRTtBQUFBLGNBQUksT0FBSSxFQUFFLE9BQUksRUFBRSxPQUFJLFdBQVU7QUFBQyxvQkFBTSxJQUFJLFVBQVU7QUFBQTtBQUFBO0FBQTJJLHFCQUFXLElBQUU7QUFBQyxnQkFBRyxBQUFhLE9BQU8sVUFBcEIsZUFBNEIsT0FBTyxZQUFZLE9BQU87QUFBRyxxQkFBTyxNQUFNLEtBQUs7QUFBQTtBQUFHLHFCQUFXLElBQUUsSUFBRTtBQUFDLGdCQUFJLEtBQUUsT0FBTyxLQUFLO0FBQUcsZ0JBQUcsT0FBTyx1QkFBc0I7QUFBQyxrQkFBSSxLQUFFLE9BQU8sc0JBQXNCO0FBQUcsb0JBQUksTUFBRSxHQUFFLE9BQU8sU0FBUyxJQUFFO0FBQUMsdUJBQU8sT0FBTyx5QkFBeUIsSUFBRSxJQUFHO0FBQUEsbUJBQWMsR0FBRSxLQUFLLE1BQU0sSUFBRTtBQUFBO0FBQUcsbUJBQU87QUFBQTtBQUFFLHFCQUFXLElBQUU7QUFBQyxxQkFBUSxLQUFFLEdBQUUsS0FBRSxVQUFVLFFBQU8sTUFBSTtBQUFDLGtCQUFJLEtBQUUsQUFBTSxVQUFVLE9BQWhCLE9BQW1CLFVBQVUsTUFBRztBQUFHLG1CQUFFLElBQUUsRUFBRSxPQUFPLEtBQUcsTUFBSSxRQUFRLFNBQVMsSUFBRTtBQUFDLGtCQUFFLElBQUUsSUFBRSxHQUFFO0FBQUEsbUJBQU0sT0FBTyw0QkFBMEIsT0FBTyxpQkFBaUIsSUFBRSxPQUFPLDBCQUEwQixPQUFJLEVBQUUsT0FBTyxLQUFJLFFBQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sZUFBZSxJQUFFLElBQUUsT0FBTyx5QkFBeUIsSUFBRTtBQUFBO0FBQUE7QUFBTSxtQkFBTztBQUFBO0FBQUUscUJBQVcsSUFBRSxJQUFFLElBQUU7QUFBQyxtQkFBTyxNQUFLLEtBQUUsT0FBTyxlQUFlLElBQUUsSUFBRSxFQUFDLE9BQU0sSUFBRSxZQUFXLE1BQUcsY0FBYSxNQUFHLFVBQVMsVUFBSyxHQUFFLE1BQUcsSUFBRTtBQUFBO0FBQUUscUJBQVcsSUFBRSxJQUFFO0FBQUMsbUJBQU8sRUFBRSxPQUFJLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUcsQUFBYSxPQUFPLFVBQXBCLGVBQTRCLENBQUUsUUFBTyxZQUFZLE9BQU87QUFBSTtBQUFPLGtCQUFJLEtBQUUsSUFBRyxLQUFFLE1BQUcsS0FBRSxPQUFHLEtBQUU7QUFBTyxrQkFBRztBQUFDLHlCQUFRLElBQUUsS0FBRSxHQUFFLE9BQU8sYUFBWSxDQUFFLE1BQUcsTUFBRSxHQUFFLFFBQVEsU0FBUSxJQUFFLEtBQUssR0FBRSxRQUFPLENBQUMsTUFBRyxHQUFFLFdBQVMsS0FBRyxLQUFFO0FBQUc7QUFBQSx1QkFBUSxJQUFOO0FBQVMscUJBQUUsTUFBRyxLQUFFO0FBQUEsd0JBQUU7QUFBUSxvQkFBRztBQUFDLHdCQUFHLEFBQU0sR0FBRSxVQUFSLFFBQWdCLEdBQUU7QUFBQSwwQkFBUztBQUFRLHNCQUFHO0FBQUUsMEJBQU07QUFBQTtBQUFBO0FBQUcscUJBQU87QUFBQSxjQUFHLElBQUUsT0FBSSxFQUFFLElBQUUsT0FBSTtBQUFBO0FBQUksdUJBQVk7QUFBQyxrQkFBTSxJQUFJLFVBQVU7QUFBQTtBQUE2SSxxQkFBVyxJQUFFO0FBQUMsZ0JBQUcsTUFBTSxRQUFRO0FBQUcscUJBQU87QUFBQTtBQUFFLHFCQUFXLElBQUUsSUFBRTtBQUFDLGdCQUFHLElBQUU7QUFBQyxrQkFBRyxBQUFVLE9BQU8sTUFBakI7QUFBbUIsdUJBQU8sRUFBRSxJQUFFO0FBQUcsa0JBQUksS0FBRSxPQUFPLFVBQVUsU0FBUyxLQUFLLElBQUcsTUFBTSxHQUFFO0FBQUkscUJBQU0sQUFBVyxPQUFYLFlBQWMsR0FBRSxlQUFjLE1BQUUsR0FBRSxZQUFZLE9BQU0sQUFBUSxPQUFSLFNBQVcsQUFBUSxPQUFSLFFBQVUsTUFBTSxLQUFLLE1BQUcsQUFBYyxPQUFkLGVBQWlCLDJDQUEyQyxLQUFLLE1BQUcsRUFBRSxJQUFFLE1BQUc7QUFBQTtBQUFBO0FBQVEscUJBQVcsSUFBRSxJQUFFO0FBQUMsWUFBQyxDQUFNLE1BQU4sUUFBUyxLQUFFLEdBQUUsV0FBVSxNQUFFLEdBQUU7QUFBUSxxQkFBUSxLQUFFLEdBQUUsS0FBRSxJQUFJLE1BQU0sS0FBRyxLQUFFLElBQUU7QUFBSSxpQkFBRSxNQUFHLEdBQUU7QUFBRyxtQkFBTztBQUFBO0FBQUUscUJBQVcsSUFBRSxJQUFFO0FBQUMsZ0JBQUcsQ0FBRSxlQUFhO0FBQUcsb0JBQU0sSUFBSSxVQUFVO0FBQUE7QUFBcUMscUJBQVcsSUFBRSxJQUFFO0FBQUMscUJBQVEsS0FBRSxHQUFFLEtBQUUsR0FBRSxRQUFPLE1BQUk7QUFBQyxrQkFBSSxLQUFFLEdBQUU7QUFBRyxpQkFBRSxhQUFXLEdBQUUsY0FBWSxPQUFHLEdBQUUsZUFBYSxNQUFHLFdBQVUsTUFBSSxJQUFFLFdBQVMsT0FBSSxPQUFPLGVBQWUsSUFBRSxHQUFFLEtBQUk7QUFBQTtBQUFBO0FBQUkscUJBQVcsSUFBRSxJQUFFLElBQUU7QUFBQyxtQkFBTyxNQUFHLEVBQUUsR0FBRSxXQUFVLEtBQUcsTUFBRyxFQUFFLElBQUUsS0FBRztBQUFBO0FBQUUscUJBQVcsSUFBRTtBQUFDO0FBQTBCLG1CQUFPLEtBQUUsQUFBWSxPQUFPLFVBQW5CLGNBQTJCLEFBQVUsT0FBTyxPQUFPLFlBQXhCLFdBQWlDLFNBQVMsSUFBRTtBQUFDLHFCQUFPLE9BQU87QUFBQSxnQkFBRyxTQUFTLElBQUU7QUFBQyxxQkFBTyxNQUFHLEFBQVksT0FBTyxVQUFuQixjQUEyQixHQUFFLGdCQUFjLFVBQVEsT0FBSSxPQUFPLFlBQVUsV0FBUyxPQUFPO0FBQUEsZUFBSTtBQUFBO0FBQUcsWUFBRSxFQUFFLEdBQUUsU0FBUSxXQUFVO0FBQUMsbUJBQU87QUFBQSxjQUFJLEVBQUUsRUFBRSxHQUFFLFlBQVcsV0FBVTtBQUFDLG1CQUFPO0FBQUEsY0FBSyxFQUFFLEVBQUUsR0FBRSxjQUFhLFdBQVU7QUFBQyxtQkFBTztBQUFBLGNBQUssRUFBRSxFQUFFLEdBQUUsV0FBVSxXQUFVO0FBQUMsbUJBQU87QUFBQSxjQUFLLEVBQUUsRUFBRSxHQUFFLE9BQU0sV0FBVTtBQUFDLG1CQUFPO0FBQUEsY0FBSyxFQUFFLEVBQUUsR0FBRSxRQUFPLFdBQVU7QUFBQyxtQkFBTztBQUFBO0FBQUssY0FBSSxJQUFFLENBQUMsS0FBSSxNQUFLLElBQUUsaUJBQWdCLElBQUUsQ0FBQyxxQkFBb0Isc0JBQXFCLHNCQUFxQix1QkFBc0IscUJBQW9CLG9CQUFtQixzQkFBcUIsSUFBRSxzQkFBcUIsSUFBRSxnQkFBZSxJQUFFLHVCQUFzQixJQUFFLElBQUksT0FBTyxHQUFFLE1BQUssSUFBRSxDQUFDLFFBQU8sWUFBVyxVQUFTLFNBQVEsWUFBVyxVQUFTLE9BQU0sT0FBTSxRQUFPLFNBQVEsSUFBRSxDQUFDLFlBQVcsVUFBUyxJQUFFLEdBQUUsSUFBRSxRQUFPLElBQUUsRUFBQyxVQUFTLEtBQUksVUFBUyxPQUFLLElBQUUsU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBTyxRQUFRLFNBQU8sUUFBUSxNQUFNLElBQUU7QUFBQTtBQUFJLGNBQUksSUFBRSxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQyxlQUFFLFdBQVcsb0JBQWtCLFFBQVEsSUFBSSxHQUFHLE9BQU8sR0FBRSxJQUFHLEtBQUssT0FBTyxJQUFFLE1BQU0sT0FBTyxJQUFFLFFBQU87QUFBQSxhQUFJLElBQUUsU0FBUyxJQUFFO0FBQUMsbUJBQU0sQUFBWSxPQUFPLE1BQW5CLGFBQXFCLEtBQUUsV0FBVTtBQUFDLHFCQUFPO0FBQUE7QUFBQSxhQUFJLElBQUUsU0FBUyxJQUFFO0FBQUMsbUJBQU8sS0FBSyxNQUFNLEtBQUssVUFBVTtBQUFBLGFBQUssSUFBRSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsZUFBRTtBQUFDLGtCQUFHLEdBQUUsUUFBUSxJQUFJLE9BQU8sSUFBRTtBQUFNLHVCQUFPO0FBQUUsbUJBQUUsR0FBRSxpQkFBZSxHQUFFO0FBQUEscUJBQWlCLEFBQU8sT0FBUCxRQUFVLEFBQUksR0FBRSxhQUFOLEtBQWdCLENBQUUsT0FBRyxHQUFFLFdBQVcsT0FBSSxHQUFFLFFBQVE7QUFBSyxtQkFBTztBQUFBLGFBQU0sSUFBRSxTQUFTLElBQUU7QUFBQyxtQkFBTyxBQUFPLE9BQVAsUUFBVSxBQUFXLEVBQUUsUUFBYixZQUFpQixDQUFFLGVBQWE7QUFBQSxhQUFRLElBQUUsU0FBUyxJQUFFO0FBQUMscUJBQVEsTUFBSztBQUFFLHFCQUFNO0FBQUcsbUJBQU07QUFBQSxhQUFJLEtBQUcsU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBTyxNQUFHLEdBQUU7QUFBQSxhQUFJLEtBQUcsV0FBVTtBQUFDLHdCQUFXLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUUsTUFBSyxLQUFHLEtBQUssTUFBSSxHQUFHLFdBQVcsS0FBRyxLQUFLLFNBQU8sSUFBRSxLQUFLLE9BQUssSUFBRSxLQUFLLE9BQUssSUFBRSxLQUFLLE9BQUssTUFBSyxLQUFLLGVBQWEsT0FBRyxLQUFLLFVBQVEsT0FBRyxLQUFLLFlBQVUsR0FBRSxLQUFLLG9CQUFrQixJQUFHLEtBQUssVUFBUSxXQUFVO0FBQUE7QUFBQTtBQUFHLG1CQUFPLEVBQUUsSUFBRSxNQUFLLENBQUMsRUFBQyxLQUFJLFlBQVcsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsQUFBUyxHQUFFLFlBQVgsUUFBbUIsS0FBRSxHQUFFLGFBQWEsd0JBQXdCLE1BQU0sS0FBSyxRQUFRLEdBQUcsV0FBVyxRQUFLO0FBQUUscUJBQU8sR0FBRSxPQUFLLEtBQUksT0FBRztBQUFBLGlCQUFLLEVBQUMsS0FBSSxpQkFBZ0IsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsR0FBRSxhQUFhLDZCQUE2QixNQUFNLEtBQUssUUFBUSxHQUFHLFdBQVcsUUFBSztBQUFFLHFCQUFPLE1BQUcsS0FBSyxTQUFTLElBQUU7QUFBQSxtQkFBTyxFQUFFLElBQUUsQ0FBQyxFQUFDLEtBQUksWUFBVyxPQUFNLFdBQVU7QUFBQyxxQkFBTyxLQUFLO0FBQUEsaUJBQU8sRUFBQyxLQUFJLFlBQVcsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssbUJBQUssWUFBVSxLQUFLLE1BQU0sS0FBRyxLQUFLLFlBQVUsS0FBSyxxQkFBb0IsTUFBSyxhQUFXLE1BQUssTUFBSyxZQUFVLEtBQUksS0FBSyxvQkFBa0IsS0FBSSxLQUFLLFVBQVEsTUFBRyxLQUFLLEtBQUssaUJBQWlCLEtBQUssUUFBTyxLQUFLLEtBQUksS0FBSSxXQUFVO0FBQUMsbUJBQUcsWUFBWSxHQUFFLFFBQU8sR0FBRSxPQUFNLEdBQUU7QUFBQSxvQkFBYyxNQUFLLG9CQUFrQixLQUFLLFdBQVUsS0FBSyxLQUFLLGlCQUFpQixLQUFLLFFBQU8sS0FBSyxLQUFJLEtBQUs7QUFBQSxpQkFBZSxFQUFDLEtBQUksVUFBUyxPQUFNLFdBQVU7QUFBQyxtQkFBSyxlQUFhLE1BQUcsS0FBSyxVQUFRLE1BQUcsS0FBSztBQUFBLGlCQUFZLEVBQUMsS0FBSSxVQUFTLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUs7QUFBQSxpQkFBVSxFQUFDLEtBQUksU0FBUSxPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUc7QUFBUyxpQkFBRyxXQUFXLEtBQUssU0FBUSxLQUFLLEtBQUssaUJBQWlCLEtBQUssUUFBTyxLQUFLLEtBQUksRUFBQyxPQUFNO0FBQUEsaUJBQU0sRUFBQyxLQUFJLFVBQVMsT0FBTSxTQUFTLElBQUU7QUFBQyxtQkFBSyxVQUFRO0FBQUEsaUJBQUksRUFBQyxLQUFJLHNCQUFxQixPQUFNLFdBQVU7QUFBQyxxQkFBTSxFQUFDLGVBQWMsS0FBSyxLQUFLLGNBQWEsTUFBSyxLQUFLLEtBQUssTUFBSyxNQUFLLEtBQUssS0FBSyxNQUFLLE1BQUssS0FBSyxLQUFLLE1BQUssS0FBSSxLQUFLO0FBQUEsaUJBQU8sRUFBQyxLQUFJLFlBQVcsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBRyxLQUFLLEtBQUssVUFBUztBQUFDLG9CQUFJLEtBQUUsR0FBRSxLQUFLLEtBQUssYUFBVyxFQUFFLDhCQUE4QixPQUFPLEtBQUssS0FBSztBQUFXLHVCQUFNLEVBQUMsTUFBSyxLQUFLLEtBQUssVUFBUyxVQUFTO0FBQUE7QUFBRyxxQkFBTSxFQUFDLE1BQUssV0FBVSxVQUFTO0FBQUEsaUJBQU0sRUFBQyxLQUFJLGlCQUFnQixPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLE9BQUssR0FBRSxRQUFRLEtBQUssTUFBSyxLQUFLLFFBQU0sRUFBRSxrREFBa0QsT0FBTyxLQUFLLE1BQUssRUFBQyxPQUFNLEtBQUssUUFBTyxVQUFTO0FBQUEsbUJBQVE7QUFBQSxlQUFLLEtBQUcsRUFBQyxnQkFBZSxFQUFDLGlCQUFnQixXQUFVO0FBQUMsbUJBQU8sS0FBSyxHQUFHLGFBQWE7QUFBQSxhQUE4QixTQUFRLFdBQVU7QUFBQyxpQkFBSyxpQkFBZSxLQUFLO0FBQUEsYUFBbUIsU0FBUSxXQUFVO0FBQUMsZ0JBQUksS0FBRSxLQUFLO0FBQWtCLGlCQUFLLG1CQUFpQixNQUFJLE1BQUssaUJBQWUsSUFBRSxBQUFLLE9BQUwsTUFBUSxLQUFLLE9BQU8sYUFBYSxLQUFLLEdBQUc7QUFBQTtBQUFVLGFBQUcsaUJBQWUsRUFBQyxTQUFRLFdBQVU7QUFBQyxnQkFBSSxLQUFFO0FBQUssaUJBQUssTUFBSSxLQUFLLEdBQUcsYUFBYSx1QkFBc0IsS0FBSyxVQUFRLFNBQVMsZUFBZSxLQUFLLEdBQUcsYUFBYSxLQUFJLEdBQUcsZ0JBQWdCLEtBQUssU0FBUSxLQUFLLEtBQUksU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxHQUFHLE1BQUk7QUFBQTtBQUFBO0FBQU0sY0FBSSxLQUFHLEdBQUUsS0FBRyxXQUFVO0FBQUMsd0JBQVcsSUFBRSxJQUFFLElBQUU7QUFBQyxnQkFBRSxNQUFLLEtBQUcsS0FBSyxPQUFLLElBQUUsS0FBSyxhQUFXLElBQUUsS0FBSyxXQUFTLE1BQU0sS0FBSyxHQUFFLHVCQUF1QixPQUFJLElBQUksSUFBSSxTQUFTLElBQUU7QUFBQyx1QkFBTyxJQUFJLEdBQUcsSUFBRSxJQUFFO0FBQUEsa0JBQUssS0FBSyx1QkFBcUIsS0FBSyxTQUFTO0FBQUE7QUFBTyxtQkFBTyxFQUFFLElBQUUsTUFBSyxDQUFDLEVBQUMsS0FBSSxjQUFhLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxHQUFFO0FBQVEscUJBQU8sQUFBUyxPQUFULFNBQVcsS0FBRyxJQUFFLFVBQVMsT0FBTSxZQUFXLEdBQUU7QUFBQSxpQkFBVyxFQUFDLEtBQUksbUJBQWtCLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEtBQUssWUFBWSxJQUFHLEtBQUssU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxXQUFXLFFBQUs7QUFBQSxrQkFBSSxLQUFFLElBQUk7QUFBVyxpQkFBRSxTQUFPLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsR0FBRSxPQUFPO0FBQUEsaUJBQVMsR0FBRSxjQUFjO0FBQUEsaUJBQUssRUFBQyxLQUFJLHdCQUF1QixPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBRSxxQkFBTyxHQUFHLGlCQUFpQixJQUFHLFFBQVEsU0FBUyxJQUFFO0FBQUMsbUJBQUUsYUFBYSxpQ0FBK0IsR0FBRSxhQUFhLHlCQUF1QjtBQUFBLGtCQUFNLEtBQUU7QUFBQSxpQkFBSSxFQUFDLEtBQUksb0JBQW1CLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUU7QUFBRyxxQkFBTyxLQUFLLFlBQVksSUFBRSxhQUFhLFFBQVEsU0FBUyxJQUFFO0FBQUMsb0JBQUksS0FBRSxFQUFDLE1BQUssR0FBRSxRQUFNLEtBQUUsR0FBRSxhQUFhO0FBQUcsbUJBQUUsTUFBRyxHQUFFLE9BQUksSUFBRyxHQUFFLE1BQUksR0FBRSxXQUFXLEtBQUcsR0FBRSxPQUFLLEdBQUUsTUFBSyxHQUFFLE9BQUssR0FBRSxNQUFLLEdBQUUsT0FBSyxHQUFFLE1BQUssR0FBRSxJQUFHLEtBQUs7QUFBQSxrQkFBSztBQUFBLGlCQUFJLEVBQUMsS0FBSSxjQUFhLE9BQU0sU0FBUyxJQUFFO0FBQUMsaUJBQUUsUUFBTSxNQUFLLEdBQUUsZ0JBQWdCLElBQUcsR0FBRyxXQUFXLElBQUUsU0FBUTtBQUFBLGlCQUFNLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxpQkFBRyxXQUFXLElBQUUsU0FBUSxHQUFHLFFBQVEsSUFBRSxTQUFTLE9BQU8sU0FBUyxJQUFFO0FBQUMsdUJBQU0sQ0FBQyxPQUFPLEdBQUcsSUFBRTtBQUFBO0FBQUEsaUJBQVEsRUFBQyxLQUFJLGNBQWEsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxrQkFBRyxBQUFPLEdBQUUsYUFBYSxnQkFBdEIsTUFBa0M7QUFBQyxvQkFBSSxLQUFFLEdBQUUsT0FBTyxTQUFTLElBQUU7QUFBQyx5QkFBTSxDQUFDLEdBQUUsWUFBWSxJQUFHLEtBQUssU0FBUyxJQUFFO0FBQUMsMkJBQU8sT0FBTyxHQUFHLElBQUU7QUFBQTtBQUFBO0FBQU8sbUJBQUcsV0FBVyxJQUFFLFNBQVEsS0FBSyxZQUFZLElBQUcsT0FBTyxNQUFJLEdBQUUsUUFBTTtBQUFBO0FBQVUsbUJBQUcsV0FBVyxJQUFFLFNBQVE7QUFBQSxpQkFBSyxFQUFDLEtBQUksb0JBQW1CLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsR0FBRyxpQkFBaUI7QUFBRyxxQkFBTyxNQUFNLEtBQUssSUFBRyxPQUFPLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsU0FBTyxHQUFFLFlBQVksSUFBRyxTQUFPO0FBQUE7QUFBQSxpQkFBTSxFQUFDLEtBQUksZUFBYyxPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLElBQUcsUUFBUSxJQUFFLFlBQVUsSUFBSSxPQUFPLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUcsU0FBUyxJQUFFO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksMkJBQTBCLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsR0FBRyxpQkFBaUI7QUFBRyxxQkFBTyxNQUFNLEtBQUssSUFBRyxPQUFPLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsdUJBQXVCLElBQUcsU0FBTztBQUFBO0FBQUEsaUJBQU0sRUFBQyxLQUFJLDBCQUF5QixPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssWUFBWSxJQUFHLE9BQU8sU0FBUyxJQUFFO0FBQUMsdUJBQU0sQ0FBQyxHQUFHLGNBQWMsSUFBRTtBQUFBO0FBQUEsbUJBQVMsRUFBRSxJQUFFLENBQUMsRUFBQyxLQUFJLFdBQVUsT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSztBQUFBLGlCQUFXLEVBQUMsS0FBSSxxQkFBb0IsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLG1CQUFLLFdBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxjQUFjLEtBQUcsR0FBRSxPQUFPLFdBQVU7QUFBQyxxQkFBRSx3QkFBdUIsQUFBSSxHQUFFLHlCQUFOLEtBQTRCLEdBQUU7QUFBQSxvQkFBZTtBQUFBO0FBQUksa0JBQUksS0FBRSxLQUFLLFNBQVMsT0FBTyxTQUFTLElBQUUsSUFBRTtBQUFDLG9CQUFJLEtBQUUsR0FBRSxTQUFTLEdBQUUsWUFBVyxLQUFFLEdBQUUsTUFBSyxLQUFFLEdBQUU7QUFBUyx1QkFBTyxHQUFFLE1BQUcsR0FBRSxPQUFJLEVBQUMsVUFBUyxJQUFFLFNBQVEsTUFBSSxHQUFFLElBQUcsUUFBUSxLQUFLLEtBQUc7QUFBQSxpQkFBRztBQUFJLHVCQUFRLE1BQUssSUFBRTtBQUFDLG9CQUFJLEtBQUUsR0FBRTtBQUFHLGdCQUFDLElBQUUsR0FBRSxVQUFVLEdBQUUsU0FBUSxJQUFFLElBQUU7QUFBQTtBQUFBLG1CQUFRO0FBQUEsZUFBSyxLQUFHLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGVBQUUsUUFBUSxTQUFTLElBQUU7QUFBQyxrQkFBSSxHQUFHLElBQUUsR0FBRSxPQUFPLFlBQVcsSUFBRztBQUFBO0FBQUEsYUFBWSxLQUFHLFdBQVU7QUFBQyx3QkFBVyxJQUFFLElBQUUsSUFBRTtBQUFDLGdCQUFFLE1BQUssS0FBRyxLQUFLLGFBQVcsSUFBRSxLQUFLLFFBQU0sSUFBRSxLQUFLLFNBQU8sR0FBRSxLQUFLLFlBQVUsSUFBRSxLQUFLLGFBQVcsTUFBSyxLQUFLLGdCQUFjLEdBQUUsUUFBUSxPQUFPLE9BQU8sR0FBRSxNQUFLLEVBQUMsT0FBTSxHQUFFO0FBQUE7QUFBYSxtQkFBTyxFQUFFLElBQUUsQ0FBQyxFQUFDLEtBQUksU0FBUSxPQUFNLFNBQVMsSUFBRTtBQUFDLDJCQUFhLEtBQUssYUFBWSxLQUFLLGNBQWMsU0FBUSxLQUFLLE1BQU0sTUFBTTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxVQUFTLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyxjQUFjLFFBQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxNQUFNO0FBQUEsa0JBQUssS0FBSyxjQUFjLE9BQU8sUUFBUSxNQUFLLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUU7QUFBQSxpQkFBa0IsUUFBUSxTQUFRLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsTUFBTTtBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLFVBQVMsT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSyxVQUFRLEtBQUssTUFBTSxLQUFLO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGlCQUFnQixPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFLE1BQUssS0FBRSxJQUFJLE9BQU8sY0FBVyxLQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxRQUFPLEtBQUssWUFBVSxLQUFLO0FBQVEsaUJBQUUsU0FBTyxTQUFTLElBQUU7QUFBQyxvQkFBRyxBQUFPLEdBQUUsT0FBTyxVQUFoQjtBQUFzQix5QkFBTyxFQUFFLGlCQUFlLEdBQUUsT0FBTztBQUFPLG1CQUFFLFVBQVEsR0FBRSxPQUFPLE9BQU8sWUFBVyxHQUFFLFVBQVUsR0FBRSxPQUFPO0FBQUEsaUJBQVMsR0FBRSxrQkFBa0I7QUFBQSxpQkFBSyxFQUFDLEtBQUksYUFBWSxPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyxjQUFjLGNBQVksS0FBSyxjQUFjLEtBQUssU0FBUSxJQUFHLFFBQVEsTUFBSyxXQUFVO0FBQUMsbUJBQUUsTUFBTSxTQUFTLEdBQUUsU0FBTyxHQUFFLE1BQU0sS0FBSyxPQUFLLE1BQUssR0FBRSxZQUFXLElBQUUsYUFBVyxXQUFXLFdBQVU7QUFBQyx5QkFBTyxHQUFFO0FBQUEsbUJBQWlCLEdBQUUsV0FBVyxtQkFBaUI7QUFBQTtBQUFBLG1CQUFVO0FBQUEsZUFBSyxLQUFHLFNBQVMsSUFBRTtBQUFDLGdCQUFJLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxJQUFHLEtBQUUsSUFBSSxTQUFTLEtBQUcsS0FBRTtBQUFHLGVBQUUsUUFBUSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsNEJBQWEsUUFBTSxHQUFFLEtBQUs7QUFBQSxnQkFBSyxHQUFFLFFBQVEsU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxPQUFPO0FBQUE7QUFBSyxnQkFBSSxJQUFFLEtBQUUsSUFBSSxtQkFBZ0IsS0FBRSxTQUFTLElBQUU7QUFBQyxrQkFBRyxBQUFhLE9BQU8sVUFBcEIsZUFBNEIsQUFBTSxHQUFFLE9BQU8sYUFBZixNQUF5QjtBQUFDLG9CQUFHLE1BQU0sUUFBUSxPQUFLLE1BQUUsRUFBRSxNQUFJO0FBQUMsc0JBQUksS0FBRSxHQUFFLEtBQUUsV0FBVTtBQUFBO0FBQUcseUJBQU0sRUFBQyxHQUFFLElBQUUsR0FBRSxXQUFVO0FBQUMsMkJBQU8sTUFBRyxHQUFFLFNBQU8sRUFBQyxNQUFLLFNBQUksRUFBQyxNQUFLLE9BQUcsT0FBTSxHQUFFO0FBQUEscUJBQU8sR0FBRSxTQUFTLElBQUU7QUFBQywwQkFBTTtBQUFBLHFCQUFHLEdBQUU7QUFBQTtBQUFHLHNCQUFNLElBQUksVUFBVTtBQUFBO0FBQXlJLGtCQUFJLElBQUUsSUFBRSxLQUFFLE1BQUcsS0FBRTtBQUFHLHFCQUFNLEVBQUMsR0FBRSxXQUFVO0FBQUMscUJBQUUsR0FBRSxPQUFPO0FBQUEsaUJBQWEsR0FBRSxXQUFVO0FBQUMsb0JBQUksS0FBRSxHQUFFO0FBQU8sdUJBQU8sS0FBRSxHQUFFLE1BQUs7QUFBQSxpQkFBRyxHQUFFLFNBQVMsSUFBRTtBQUFDLHFCQUFFLE1BQUcsS0FBRTtBQUFBLGlCQUFHLEdBQUUsV0FBVTtBQUFDLG9CQUFHO0FBQUMsd0JBQUcsQUFBTSxHQUFFLFVBQVIsUUFBZ0IsR0FBRTtBQUFBLDBCQUFTO0FBQVEsc0JBQUc7QUFBRSwwQkFBTTtBQUFBO0FBQUE7QUFBQSxjQUFNLEdBQUU7QUFBVyxnQkFBRztBQUFDLG1CQUFJLEdBQUUsS0FBSSxDQUFFLE1BQUUsR0FBRSxLQUFLLFFBQU07QUFBQyxvQkFBSSxLQUFFLEVBQUUsR0FBRSxPQUFNLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcsbUJBQUUsT0FBTyxJQUFFO0FBQUE7QUFBQSxxQkFBVSxJQUFOO0FBQVMsaUJBQUUsRUFBRTtBQUFBLHNCQUFHO0FBQVEsaUJBQUU7QUFBQTtBQUFJLHFCQUFRLE1BQUs7QUFBRSxpQkFBRSxPQUFPLElBQUUsR0FBRTtBQUFJLG1CQUFPLEdBQUU7QUFBQSxhQUFZLEtBQUcsV0FBVTtBQUFDLHdCQUFXLElBQUUsSUFBRTtBQUFDLGdCQUFFLE1BQUssS0FBRyxLQUFLLFNBQU8sSUFBRSxLQUFLLFdBQVMsSUFBRyxLQUFLLFVBQVU7QUFBQTtBQUFHLG1CQUFPLEVBQUUsSUFBRSxNQUFLLENBQUMsRUFBQyxLQUFJLFdBQVUsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEdBQUUsR0FBRSxLQUFFLEdBQUUsR0FBRSxLQUFFLEdBQUU7QUFBRSxxQkFBTyxPQUFPLEdBQUUsR0FBRSxPQUFPLEdBQUUsR0FBRSxPQUFPLEdBQUUsR0FBRSxFQUFDLE1BQUssSUFBRSxPQUFNLElBQUUsT0FBTSxNQUFHLE1BQUssUUFBTyxNQUFHO0FBQUEsbUJBQVEsRUFBRSxJQUFFLENBQUMsRUFBQyxLQUFJLGdCQUFlLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUs7QUFBQSxpQkFBUyxFQUFDLEtBQUksWUFBVyxPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssa0JBQWtCLEtBQUssVUFBUyxLQUFLLFNBQVMsR0FBRTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxxQkFBb0IsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUcsR0FBRSxHQUFFLEtBQUUsVUFBVSxTQUFPLElBQUUsVUFBVSxLQUFHLFFBQU8sS0FBRSxFQUFDLFFBQU8sSUFBRyxZQUFXLElBQUUsVUFBUyxLQUFFLEtBQUUsSUFBSSxJQUFJLE1BQUc7QUFBTSxxQkFBTyxLQUFLLGVBQWUsSUFBRSxLQUFHLEdBQUU7QUFBQSxpQkFBUyxFQUFDLEtBQUksaUJBQWdCLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sT0FBTyxLQUFLLEdBQUUsS0FBRyxJQUFJLElBQUksU0FBUyxJQUFFO0FBQUMsdUJBQU8sU0FBUztBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLHVCQUFzQixPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFNLENBQUMsQ0FBQyxHQUFFLEtBQUcsQUFBSSxPQUFPLEtBQUssSUFBRyxXQUFuQjtBQUFBLGlCQUE0QixFQUFDLEtBQUksZ0JBQWUsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLHFCQUFPLEdBQUUsRUFBRTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxHQUFFLEdBQUUsS0FBRTtBQUFHLGtCQUFHLE9BQU8sR0FBRSxHQUFFLEtBQUssV0FBUyxLQUFLLGFBQWEsS0FBSyxVQUFTLEtBQUcsS0FBSyxTQUFTLElBQUUsS0FBSyxTQUFTLEtBQUcsSUFBRyxJQUFFO0FBQUMsb0JBQUksS0FBRSxLQUFLLFNBQVM7QUFBRSx5QkFBUSxNQUFLO0FBQUUscUJBQUUsTUFBRyxLQUFLLG9CQUFvQixJQUFFLEdBQUUsS0FBRyxJQUFFLElBQUU7QUFBRyx5QkFBUSxNQUFLO0FBQUUscUJBQUUsTUFBRyxHQUFFO0FBQUcsbUJBQUUsSUFBRTtBQUFBO0FBQUEsaUJBQUssRUFBQyxLQUFJLHVCQUFzQixPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUcsR0FBRTtBQUFHLHVCQUFPLEdBQUU7QUFBRyxrQkFBSSxJQUFFLElBQUUsSUFBRSxLQUFFLEdBQUU7QUFBRSxxQkFBTSxBQUFVLE9BQU8sTUFBakIsV0FBb0IsTUFBRyxNQUFFLEtBQUUsSUFBRSxLQUFLLG9CQUFvQixJQUFFLEdBQUUsS0FBRyxJQUFFLElBQUUsTUFBRyxHQUFFLENBQUMsS0FBSSxHQUFHLE1BQUUsS0FBSyxXQUFXLElBQUUsS0FBSSxJQUFFLE1BQUcsS0FBRSxBQUFTLEdBQUUsTUFBWCxTQUFhLEtBQUUsS0FBSyxXQUFXLEdBQUUsT0FBSSxJQUFHLEtBQUcsR0FBRSxNQUFHLElBQUU7QUFBQSxpQkFBSSxFQUFDLEtBQUksZ0JBQWUsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLHFCQUFPLEFBQVMsR0FBRSxNQUFYLFNBQWEsS0FBRyxNQUFLLGVBQWUsSUFBRSxLQUFHO0FBQUEsaUJBQUssRUFBQyxLQUFJLGtCQUFpQixPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsdUJBQVEsTUFBSyxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFLEtBQUcsS0FBRSxHQUFFO0FBQUcsa0JBQUUsT0FBSSxBQUFTLEdBQUUsTUFBWCxVQUFjLEVBQUUsTUFBRyxLQUFLLGVBQWUsSUFBRSxNQUFHLEdBQUUsTUFBRztBQUFBO0FBQUEsaUJBQUssRUFBQyxLQUFJLGNBQWEsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsRUFBRSxFQUFFLElBQUcsS0FBRztBQUFHLHVCQUFRLE1BQUssSUFBRTtBQUFDLG9CQUFJLEtBQUUsR0FBRSxLQUFHLEtBQUUsR0FBRTtBQUFHLGtCQUFFLE9BQUksQUFBUyxHQUFFLE1BQVgsVUFBYyxFQUFFLE9BQUssSUFBRSxNQUFHLEtBQUssV0FBVyxJQUFFO0FBQUE7QUFBSSxxQkFBTztBQUFBLGlCQUFJLEVBQUMsS0FBSSxxQkFBb0IsT0FBTSxTQUFTLElBQUU7QUFBQyxxQkFBTyxLQUFLLHFCQUFxQixLQUFLLFNBQVMsR0FBRTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLGlCQUFFLFFBQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sT0FBTyxHQUFFLFNBQVMsRUFBRTtBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLE9BQU0sT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSztBQUFBLGlCQUFXLEVBQUMsS0FBSSxvQkFBbUIsT0FBTSxXQUFVO0FBQUMscUJBQU0sQ0FBQyxDQUFFLFdBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUcsSUFBSTtBQUFBLGlCQUFJLEVBQUMsS0FBSSxrQkFBaUIsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFHLEdBQUU7QUFBRSx1QkFBTyxLQUFLLHNCQUFzQixJQUFFO0FBQUcsa0JBQUksS0FBRSxHQUFFO0FBQUUsaUJBQUUsVUFBUSxHQUFFO0FBQUcsdUJBQVEsS0FBRSxHQUFFLEtBQUUsR0FBRSxRQUFPO0FBQUkscUJBQUssZ0JBQWdCLEdBQUUsS0FBRSxJQUFHLEtBQUcsR0FBRSxVQUFRLEdBQUU7QUFBQSxpQkFBSyxFQUFDLEtBQUkseUJBQXdCLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyx1QkFBUSxLQUFFLEdBQUUsR0FBRSxLQUFFLEdBQUUsR0FBRSxLQUFFLEdBQUUsS0FBRSxHQUFFLFFBQU8sTUFBSTtBQUFDLG9CQUFJLEtBQUUsR0FBRTtBQUFHLG1CQUFFLFVBQVEsR0FBRTtBQUFHLHlCQUFRLEtBQUUsR0FBRSxLQUFFLEdBQUUsUUFBTztBQUFJLHVCQUFLLGdCQUFnQixHQUFFLEtBQUUsSUFBRyxLQUFHLEdBQUUsVUFBUSxHQUFFO0FBQUE7QUFBQSxpQkFBTSxFQUFDLEtBQUksbUJBQWtCLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxjQUFVLE9BQU8sTUFBakIsV0FBbUIsR0FBRSxVQUFRLEtBQUsscUJBQXFCLEdBQUUsWUFBVyxJQUFFLEdBQUUsWUFBVSxFQUFFLE1BQUcsS0FBSyxlQUFlLElBQUUsTUFBRyxHQUFFLFVBQVE7QUFBQSxpQkFBSSxFQUFDLEtBQUksd0JBQXVCLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEdBQUUsT0FBSSxFQUFFLHdCQUF3QixPQUFPLEtBQUcsS0FBRyxLQUFFLFNBQVMsY0FBYztBQUFZLGlCQUFFLFlBQVUsS0FBSyxrQkFBa0IsSUFBRSxJQUFFO0FBQUcsa0JBQUksS0FBRSxHQUFFLFNBQVEsS0FBRSxNQUFHLENBQUMsR0FBRSxJQUFJLEtBQUcsS0FBRSxFQUFFLE1BQU0sS0FBSyxHQUFFLFlBQVksT0FBTyxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsb0JBQUksS0FBRSxFQUFFLElBQUUsSUFBRyxLQUFFLEdBQUUsSUFBRyxLQUFFLEdBQUU7QUFBRyx1QkFBTyxHQUFFLGFBQVcsS0FBSyxlQUFhLEdBQUUsYUFBYSxLQUFHLENBQUMsSUFBRSxRQUFLLElBQUUsYUFBYSxHQUFFLEtBQUcsR0FBRSxNQUFLLElBQUUsS0FBRyxHQUFHLE9BQU8sR0FBRSxnQkFBZSxLQUFLLE9BQU8sSUFBRSxLQUFLLE9BQU8sTUFBSSxNQUFJLElBQUUsYUFBYSxpQkFBZ0IsS0FBSSxHQUFFLFlBQVUsS0FBSSxDQUFDLE1BQUcsT0FBSSxBQUFLLEdBQUUsVUFBVSxXQUFqQixLQUF5QixHQUFFLHNFQUFvRSxTQUFTLE9BQU8sR0FBRSxVQUFVLFFBQU8sV0FBUyxhQUFZLEdBQUUsVUFBVSxTQUFRLEdBQUUsWUFBWSxHQUFFLFdBQVcsR0FBRSxXQUFVLE1BQUksQ0FBQyxNQUFHLE9BQUssSUFBRSxVQUFTLENBQUMsSUFBRTtBQUFBLGlCQUFLLENBQUMsT0FBRyxTQUFLLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcscUJBQU8sTUFBRyxLQUFFLENBQUMsTUFBRyxLQUFHLEdBQUUsZ0xBQStLLEdBQUUsVUFBVSxTQUFRLEdBQUUsYUFBVyxHQUFFLFlBQVcsR0FBRSw0RkFBMkYsR0FBRSxVQUFVLFNBQVEsS0FBSyxXQUFXLElBQUcsSUFBRztBQUFBLGlCQUFhLEVBQUMsS0FBSSxjQUFhLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLFNBQVMsY0FBYztBQUFRLHFCQUFPLEdBQUUsWUFBVSxJQUFFLEdBQUUsYUFBYSxHQUFFLEtBQUc7QUFBQSxtQkFBTTtBQUFBLGVBQUssS0FBRyxXQUFVO0FBQUMsd0JBQVcsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRztBQUFHLGtCQUFHLEVBQUUsTUFBSyxLQUFHLEtBQUssV0FBUyxPQUFHLENBQUMsTUFBRyxBQUFXLEdBQUUsWUFBWSxTQUF6QjtBQUE4QixzQkFBTSxJQUFJLE1BQU07QUFBK1IsbUJBQUssU0FBTyxJQUFJLEdBQUUsSUFBRSxLQUFHLEtBQUssZ0JBQWMsR0FBRSxpQkFBZSxHQUFFLEtBQUssT0FBSyxJQUFFLEtBQUssU0FBTyxFQUFFLEdBQUUsVUFBUSxLQUFJLEtBQUssYUFBVyxHQUFFLFlBQVcsS0FBSyxvQkFBa0IsR0FBRSxZQUFVLElBQUcsS0FBSyxXQUFTLE9BQU8sT0FBTyxFQUFFLElBQUcsR0FBRSxZQUFVLEtBQUksS0FBSyxnQkFBYyxNQUFLLEtBQUssYUFBVyxNQUFLLEtBQUssV0FBUyxPQUFHLEtBQUssT0FBSyxNQUFLLEtBQUssVUFBUSxHQUFFLEtBQUssUUFBTSxJQUFHLEtBQUssT0FBSyxPQUFPLFNBQVMsTUFBSyxLQUFLLGNBQVksTUFBSyxLQUFLLGtCQUFnQixFQUFFLE9BQU8sV0FBVSxLQUFLLFFBQU0sR0FBRSxTQUFPLElBQUcsS0FBSyxZQUFVLEdBQUUsYUFBVyxJQUFHLEtBQUssZ0JBQWMsR0FBRSxpQkFBZSxHQUFFLEtBQUssZUFBYSxHQUFFLGdCQUFjLE9BQU8sY0FBYSxLQUFLLGlCQUFlLEdBQUUsa0JBQWdCLE9BQU8sZ0JBQWUsS0FBSyxzQkFBb0IsT0FBRyxLQUFLLGVBQWEsT0FBTyxPQUFPLEVBQUMsYUFBWSxLQUFJLG1CQUFrQixPQUFLLEdBQUUsT0FBSyxLQUFJLE9BQU8saUJBQWlCLFlBQVcsU0FBUyxJQUFFO0FBQUMsbUJBQUUsV0FBUztBQUFBLGtCQUFLLEtBQUssT0FBTyxPQUFPLFdBQVU7QUFBQyxtQkFBRSxnQkFBYyxPQUFPLFNBQVM7QUFBQTtBQUFBO0FBQVcsbUJBQU8sRUFBRSxJQUFFLENBQUMsRUFBQyxLQUFJLG9CQUFtQixPQUFNLFdBQVU7QUFBQyxxQkFBTSxBQUFTLEtBQUssZUFBZSxRQUFRLGlDQUFyQztBQUFBLGlCQUFvRSxFQUFDLEtBQUksa0JBQWlCLE9BQU0sV0FBVTtBQUFDLHFCQUFNLEFBQVMsS0FBSyxlQUFlLFFBQVEsNkJBQXJDO0FBQUEsaUJBQWdFLEVBQUMsS0FBSSxlQUFjLE9BQU0sV0FBVTtBQUFDLG1CQUFLLGVBQWUsUUFBUSx5QkFBd0I7QUFBQSxpQkFBVSxFQUFDLEtBQUksbUJBQWtCLE9BQU0sV0FBVTtBQUFDLG1CQUFLLGVBQWUsUUFBUSw2QkFBNEI7QUFBQSxpQkFBVSxFQUFDLEtBQUksZ0JBQWUsT0FBTSxXQUFVO0FBQUMsbUJBQUssZUFBZSxXQUFXO0FBQUEsaUJBQTJCLEVBQUMsS0FBSSxvQkFBbUIsT0FBTSxXQUFVO0FBQUMsbUJBQUssZUFBZSxXQUFXO0FBQUEsaUJBQStCLEVBQUMsS0FBSSxvQkFBbUIsT0FBTSxTQUFTLElBQUU7QUFBQyxtQkFBSyxlQUFjLFFBQVEsSUFBSSw0R0FBMkcsS0FBSyxlQUFlLFFBQVEsK0JBQThCO0FBQUEsaUJBQUssRUFBQyxLQUFJLHFCQUFvQixPQUFNLFdBQVU7QUFBQyxtQkFBSyxlQUFlLFdBQVc7QUFBQSxpQkFBaUMsRUFBQyxLQUFJLGlCQUFnQixPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFLEtBQUssZUFBZSxRQUFRO0FBQStCLHFCQUFPLEtBQUUsU0FBUyxNQUFHO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGFBQVksT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSztBQUFBLGlCQUFTLEVBQUMsS0FBSSxXQUFVLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLFdBQVU7QUFBQyxtQkFBRSxtQkFBa0IsSUFBRSxzQkFBcUIsR0FBRSxPQUFPO0FBQUE7QUFBWSxlQUFDLFlBQVcsVUFBUyxlQUFlLFFBQVEsU0FBUyxlQUFhLElBQUUsT0FBSSxTQUFTLGlCQUFpQixvQkFBbUIsV0FBVTtBQUFDLHVCQUFPO0FBQUE7QUFBQSxpQkFBUSxFQUFDLEtBQUksY0FBYSxPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLE9BQU8sV0FBVztBQUFBLGlCQUFLLEVBQUMsS0FBSSxjQUFhLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSTtBQUFFLGNBQUMsTUFBRSxLQUFLLGNBQWMsSUFBRyxNQUFNLElBQUUsRUFBRTtBQUFBLGlCQUFNLEVBQUMsS0FBSSxRQUFPLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBRyxDQUFDLEtBQUssc0JBQW9CLENBQUMsUUFBUTtBQUFLLHVCQUFPO0FBQUksc0JBQVEsS0FBSztBQUFHLGtCQUFJLEtBQUU7QUFBSSxxQkFBTyxRQUFRLFFBQVEsS0FBRztBQUFBLGlCQUFJLEVBQUMsS0FBSSxPQUFNLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFHLEtBQUssWUFBVztBQUFDLG9CQUFJLEtBQUUsRUFBRSxNQUFJLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcscUJBQUssV0FBVyxJQUFFLElBQUUsSUFBRTtBQUFBLHlCQUFXLEtBQUssa0JBQWlCO0FBQUMsb0JBQUksS0FBRSxFQUFFLE1BQUksSUFBRyxLQUFFLEdBQUUsSUFBRyxLQUFFLEdBQUU7QUFBRyxrQkFBRSxJQUFFLElBQUUsSUFBRTtBQUFBO0FBQUEsaUJBQU0sRUFBQyxLQUFJLGFBQVksT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLGlCQUFFLEdBQUcsSUFBRSxTQUFTLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUU7QUFBZ0IscUJBQUcsU0FBUSxJQUFJLGNBQWMsT0FBTyxJQUFFLHlDQUF3QyxXQUFXLFdBQVU7QUFBQyx5QkFBTyxHQUFFO0FBQUEsbUJBQUksT0FBSSxHQUFFO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksWUFBVyxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLE1BQUssS0FBRSxLQUFLLGlCQUFnQixLQUFFLEdBQUU7QUFBVSxrQkFBRyxDQUFDO0FBQUUsdUJBQU8sR0FBRSxVQUFRLEtBQUksUUFBUSxXQUFVLFdBQVU7QUFBQyxxQkFBRSxjQUFZLE1BQUcsR0FBRSxpQkFBaUIsSUFBRSxXQUFVO0FBQUMsdUJBQUUsSUFBSSxJQUFFLFdBQVUsV0FBVTtBQUFDLDZCQUFNLENBQUM7QUFBQTtBQUFBO0FBQUEscUJBQXFHO0FBQUksc0JBQVEsSUFBSSxjQUFjLE9BQU8sSUFBRTtBQUF3QyxrQkFBSSxLQUFFLEVBQUMsVUFBUyxJQUFHLFNBQVEsU0FBUyxJQUFFLElBQUU7QUFBQyxxQkFBSyxTQUFTLEtBQUssQ0FBQyxJQUFFO0FBQUE7QUFBTSxxQkFBTyxXQUFXLFdBQVU7QUFBQyxtQkFBRSxTQUFTLE9BQU8sU0FBUyxJQUFFLElBQUU7QUFBQyxzQkFBSSxLQUFFLEVBQUUsSUFBRSxJQUFHLEtBQUUsR0FBRSxJQUFHLEtBQUUsR0FBRTtBQUFHLHlCQUFPLEdBQUUsUUFBUSxJQUFFO0FBQUEsbUJBQUk7QUFBQSxpQkFBTSxLQUFHO0FBQUEsaUJBQUksRUFBQyxLQUFJLG9CQUFtQixPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLGlCQUFFLFdBQVUsS0FBSztBQUFhLGtCQUFJLEtBQUUsRUFBRSxJQUFHLEtBQUUsRUFBRSxJQUFHLEtBQUUsS0FBSyxNQUFNLEtBQUssV0FBVSxNQUFFLEtBQUUsTUFBSSxJQUFFLEtBQUUsR0FBRyxZQUFZLEtBQUssY0FBYSxHQUFFLFFBQU8sdUJBQXNCLEdBQUUsU0FBUyxJQUFFO0FBQUMsdUJBQU8sS0FBRTtBQUFBO0FBQUksbUJBQUUsT0FBSSxLQUFLLElBQUksSUFBRSxRQUFPLFdBQVU7QUFBQyx1QkFBTSxDQUFDLGVBQWUsT0FBTyxJQUFFO0FBQUEsa0JBQTJCLEtBQUUsTUFBSyxNQUFLLElBQUksSUFBRSxRQUFPLFdBQVU7QUFBQyx1QkFBTSxDQUFDLFlBQVksT0FBTyxJQUFHO0FBQUEsa0JBQW1ELEtBQUUsTUFBSyxXQUFXLFdBQVU7QUFBQyxtQkFBRSxtQkFBaUIsT0FBTyxXQUFTLEdBQUUsY0FBWSxPQUFPLFNBQVM7QUFBQSxpQkFBVTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxvQkFBbUIsT0FBTSxTQUFTLElBQUU7QUFBQyxxQkFBTyxNQUFHLEdBQUUsV0FBVyxjQUFZLEdBQUcsR0FBRSxNQUFNLEtBQUssTUFBSSxLQUFLLE1BQU07QUFBQSxpQkFBSyxFQUFDLEtBQUksY0FBYSxPQUFNLFdBQVU7QUFBQyxxQkFBTyxLQUFLO0FBQUEsaUJBQVcsRUFBQyxLQUFJLGVBQWMsT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSyxPQUFPO0FBQUEsaUJBQWdCLEVBQUMsS0FBSSxvQkFBbUIsT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSztBQUFBLGlCQUFnQixFQUFDLEtBQUksV0FBVSxPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFNLEdBQUcsT0FBTyxLQUFLLG9CQUFvQixPQUFPO0FBQUEsaUJBQUssRUFBQyxLQUFJLFdBQVUsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLHFCQUFPLEtBQUssT0FBTyxRQUFRLElBQUU7QUFBQSxpQkFBSyxFQUFDLEtBQUksaUJBQWdCLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFO0FBQUcscUJBQU8sR0FBRyxJQUFJLFVBQVMsR0FBRyxPQUFPLEdBQUUsVUFBVSxPQUFPLHNCQUFxQixPQUFNLFNBQVMsSUFBRTtBQUFDLG9CQUFHLENBQUMsR0FBRSxZQUFZLEdBQUUsS0FBSTtBQUFDLHNCQUFJLEtBQUUsR0FBRSxhQUFhLElBQUUsR0FBRTtBQUFXLHFCQUFFLE9BQUssR0FBRSxRQUFNLElBQUUsR0FBRSxhQUFhLG9CQUFtQixJQUFFLE9BQUs7QUFBQTtBQUFHLHFCQUFFO0FBQUEsa0JBQUs7QUFBQSxpQkFBSSxFQUFDLEtBQUksWUFBVyxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUssY0FBYSxHQUFHLFNBQVMsSUFBRTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLE1BQUssS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHLE1BQUssS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHLEtBQUssZUFBZSxLQUFHLEtBQUUsS0FBSyxLQUFLO0FBQUcsbUJBQUssS0FBSyxXQUFXLEtBQUssZ0JBQWUsS0FBSyxLQUFLLFdBQVUsR0FBRyxVQUFVLElBQUUsU0FBUyxJQUFFLElBQUU7QUFBQyxvQkFBRyxBQUFNLE9BQU47QUFBUSx5QkFBTyxHQUFFLFNBQVM7QUFBRyxvQkFBSSxLQUFFLFNBQVMsY0FBYztBQUFZLG1CQUFFLFlBQVU7QUFBRSxvQkFBSSxLQUFFLEdBQUUsUUFBUSxXQUFXO0FBQUcsb0JBQUcsQ0FBQyxNQUFHLENBQUMsR0FBRSxVQUFVO0FBQUcseUJBQU8sR0FBRSxTQUFTO0FBQUcsbUJBQUUsYUFBYSxJQUFFLElBQUUsSUFBRSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLE9BQUosS0FBUSxJQUFFLGtCQUFrQixNQUFJLElBQUUsWUFBWSxHQUFFLEtBQUksR0FBRSxPQUFLLElBQUUsTUFBRyxRQUFLLEdBQUU7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxnQkFBYyxBQUFPLEdBQUUsYUFBYSxPQUF0QjtBQUFBLGlCQUEyQixFQUFDLEtBQUksZ0JBQWUsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLElBQUksR0FBRyxJQUFFLE1BQUssTUFBSyxJQUFFO0FBQUcscUJBQU8sS0FBSyxNQUFNLEdBQUUsTUFBSSxJQUFFLEdBQUUsS0FBSyxLQUFHO0FBQUEsaUJBQUksRUFBQyxLQUFJLFNBQVEsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEdBQUcsR0FBRSxRQUFRLElBQUcsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxZQUFZO0FBQUE7QUFBSyxvQkFBRyxHQUFFO0FBQUEsaUJBQUssRUFBQyxLQUFJLGdCQUFlLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssbUJBQUssTUFBTSxJQUFFLFNBQVMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsR0FBRSxhQUFhLEdBQUUsUUFBUTtBQUFXLGdCQUFPLE9BQVAsT0FBUyxHQUFFLElBQUUsTUFBRyxHQUFFLGNBQWMsSUFBRTtBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGVBQWMsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEdBQUUsYUFBYTtBQUFvQixxQkFBTyxHQUFHLEtBQUssWUFBWSxLQUFHLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsa0JBQWtCO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksZUFBYyxPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssTUFBTTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxtQkFBa0IsT0FBTSxXQUFVO0FBQUMsdUJBQVEsTUFBSyxLQUFLO0FBQU0scUJBQUssTUFBTSxJQUFHLFdBQVUsT0FBTyxLQUFLLE1BQU07QUFBQSxpQkFBSyxFQUFDLEtBQUksbUJBQWtCLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxLQUFLLFlBQVksR0FBRSxhQUFhO0FBQXFCLG9CQUFHLEdBQUUsa0JBQWtCLEdBQUU7QUFBQSxpQkFBTSxFQUFDLEtBQUksb0JBQW1CLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLGtCQUFHLEtBQUssa0JBQWdCLElBQUU7QUFBQyxxQkFBSyxnQkFBYztBQUFFLG9CQUFJLEtBQUUsV0FBVTtBQUFDLHlCQUFJLEdBQUUsaUJBQWdCLElBQUUsZ0JBQWMsT0FBTSxHQUFFLG9CQUFvQixXQUFVLEtBQUcsR0FBRSxvQkFBb0IsWUFBVztBQUFBO0FBQUksbUJBQUUsaUJBQWlCLFdBQVUsS0FBRyxHQUFFLGlCQUFpQixZQUFXO0FBQUE7QUFBQSxpQkFBTSxFQUFDLEtBQUksb0JBQW1CLE9BQU0sV0FBVTtBQUFDLHFCQUFPLFNBQVMsa0JBQWdCLFNBQVMsT0FBSyxLQUFLLGlCQUFlLFNBQVMsZ0JBQWMsU0FBUyxpQkFBZSxTQUFTO0FBQUEsaUJBQU8sRUFBQyxLQUFJLHFCQUFvQixPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLGNBQVksR0FBRSxZQUFZLEtBQUssZUFBYyxNQUFLLGFBQVc7QUFBQSxpQkFBUSxFQUFDLEtBQUksZ0NBQStCLE9BQU0sV0FBVTtBQUFDLG1CQUFLLGNBQVksS0FBSyxlQUFhLFNBQVMsUUFBTSxLQUFLLFdBQVc7QUFBQSxpQkFBVSxFQUFDLEtBQUkscUJBQW9CLE9BQU0sV0FBVTtBQUFDLG1CQUFLLGFBQVcsS0FBSyxvQkFBbUIsS0FBSyxlQUFhLFNBQVMsUUFBTSxLQUFLLFdBQVc7QUFBQSxpQkFBUyxFQUFDLEtBQUksc0JBQXFCLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyx1QkFBc0IsTUFBSyxzQkFBb0IsTUFBRyxTQUFTLEtBQUssaUJBQWlCLFNBQVEsV0FBVTtBQUFBLGtCQUFJLE9BQU8saUJBQWlCLFlBQVcsU0FBUyxJQUFFO0FBQUMsbUJBQUUsYUFBWSxJQUFFLFlBQVksY0FBYSxHQUFFLGdCQUFnQixFQUFDLElBQUcsT0FBTyxTQUFTLE1BQUssTUFBSyxlQUFhLE9BQU8sU0FBUztBQUFBLGlCQUFXLE9BQUksS0FBSyxjQUFhLEtBQUssV0FBVSxLQUFLLGFBQVksS0FBSyxLQUFLLEVBQUMsT0FBTSxTQUFRLFNBQVEsYUFBVyxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUUsYUFBYSxHQUFFLFFBQVEsU0FBUSxLQUFFLEdBQUUsT0FBSyxHQUFFLElBQUk7QUFBYyxzQkFBRyxHQUFFLGtCQUFnQixNQUFHLEdBQUUsUUFBUSxJQUFFLElBQUUsSUFBRSxJQUFFLEVBQUUsRUFBQyxLQUFJLEdBQUUsT0FBSyxHQUFFLFVBQVUsSUFBRSxJQUFFO0FBQUEsa0JBQU8sS0FBSyxLQUFLLEVBQUMsTUFBSyxZQUFXLE9BQU0sYUFBVyxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQyxzQkFBRyxHQUFFLFVBQVUsSUFBRSxJQUFFLElBQUUsSUFBRSxHQUFFLFVBQVUsSUFBRSxJQUFFO0FBQUEsa0JBQU0sS0FBSyxLQUFLLEVBQUMsTUFBSyxRQUFPLE9BQU0sV0FBUyxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQyxzQkFBRyxBQUFXLENBQUMsT0FBWixZQUFlLEdBQUUsVUFBVSxJQUFFLElBQUUsSUFBRSxJQUFFLEdBQUUsVUFBVSxJQUFFLElBQUU7QUFBQSxrQkFBTSxPQUFPLGlCQUFpQixZQUFXLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUU7QUFBQSxrQkFBbUIsT0FBTyxpQkFBaUIsUUFBTyxTQUFTLElBQUU7QUFBQyxtQkFBRTtBQUFpQixvQkFBSSxLQUFFLEdBQUcsRUFBRSxHQUFFLFFBQU8sR0FBRSxRQUFRLGlCQUFnQixTQUFTLElBQUU7QUFBQyx5QkFBTyxHQUFFLGFBQWEsR0FBRSxRQUFRO0FBQUEsb0JBQWtCLEtBQUUsTUFBRyxTQUFTLGVBQWUsS0FBRyxLQUFFLE1BQU0sS0FBSyxHQUFFLGFBQWEsU0FBTztBQUFJLHNCQUFHLENBQUMsR0FBRSxZQUFVLEFBQUksR0FBRSxXQUFOLEtBQWMsR0FBRSxpQkFBaUIsWUFBVyxJQUFHLFdBQVcsSUFBRSxLQUFHLEdBQUUsY0FBYyxJQUFJLE1BQU0sU0FBUSxFQUFDLFNBQVE7QUFBQTtBQUFBLGlCQUFZLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsS0FBSyxrQkFBa0I7QUFBRyxxQkFBTyxLQUFFLEdBQUUsSUFBRSxNQUFHO0FBQUEsaUJBQUssRUFBQyxLQUFJLGtCQUFpQixPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssV0FBVSxLQUFLLGNBQVksSUFBRSxLQUFLO0FBQUEsaUJBQVUsRUFBQyxLQUFJLHFCQUFvQixPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssWUFBVSxNQUFJLE1BQUssT0FBSyxLQUFLLGFBQVksS0FBSyxjQUFZLE1BQUs7QUFBQSxpQkFBTSxFQUFDLEtBQUksV0FBVSxPQUFNLFdBQVU7QUFBQyxxQkFBTyxLQUFLO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGtCQUFpQixPQUFNLFdBQVU7QUFBQyxxQkFBTSxDQUFDLENBQUMsS0FBSztBQUFBLGlCQUFjLEVBQUMsS0FBSSxRQUFPLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLE1BQUssS0FBRSxTQUFTLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUU7QUFBRyxtQkFBRSxHQUFHLElBQUUsU0FBUyxJQUFFO0FBQUMsc0JBQUksS0FBRSxHQUFFLFFBQVEsS0FBRyxLQUFFLEdBQUUsUUFBUSxVQUFVLE9BQU8sTUFBSSxLQUFFLEdBQUUsT0FBTyxnQkFBYyxHQUFFLE9BQU8sYUFBYTtBQUFHLHVCQUFFLEdBQUUsU0FBUyxHQUFFLFFBQU8sSUFBRSxXQUFVO0FBQUMsdUJBQUUsYUFBYSxHQUFFLFFBQU8sU0FBUyxJQUFFLElBQUU7QUFBQyx5QkFBRSxJQUFFLElBQUUsSUFBRSxHQUFFLFFBQU8sSUFBRSxJQUFFO0FBQUE7QUFBQSx1QkFBVSxHQUFHLElBQUksVUFBUyxJQUFJLE9BQU8sSUFBRSxNQUFLLFNBQVMsSUFBRTtBQUFDLHdCQUFJLEtBQUUsR0FBRSxhQUFhO0FBQUcsdUJBQUUsU0FBUyxJQUFFLElBQUUsV0FBVTtBQUFDLHlCQUFFLGFBQWEsSUFBRSxTQUFTLElBQUUsSUFBRTtBQUFDLDJCQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQix1QkFBUSxNQUFLO0FBQUUsbUJBQUU7QUFBQSxpQkFBSyxFQUFDLEtBQUksY0FBYSxPQUFNLFdBQVU7QUFBQyxtQkFBSyxVQUFVLFNBQVEsU0FBUSxRQUFJLEtBQUssVUFBVSxhQUFZLGlCQUFnQjtBQUFBLGlCQUFNLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEtBQUssUUFBUTtBQUFHLHFCQUFPLGlCQUFpQixJQUFFLFNBQVMsSUFBRTtBQUFDLG9CQUFHLEdBQUUsZUFBYztBQUFDLHNCQUFJLEtBQUUsTUFBSyxLQUFHLE1BQUUsS0FBRSxHQUFFLE9BQU8sUUFBUSxJQUFJLE9BQU8sSUFBRSxRQUFNLEdBQUUsU0FBTyxHQUFFLE9BQU8sY0FBYyxJQUFJLE9BQU8sSUFBRSxRQUFNLEVBQUUsR0FBRSxRQUFPLFFBQUssR0FBRSxhQUFhO0FBQUcsd0JBQUksQ0FBTSxHQUFFLGFBQWEsWUFBckIsT0FBOEIsR0FBRSxrQkFBaUIsR0FBRSxTQUFTLElBQUUsSUFBRSxXQUFVO0FBQUMsdUJBQUUsYUFBYSxJQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMseUJBQUUsVUFBVSxTQUFRLElBQUUsSUFBRSxJQUFFLEdBQUUsVUFBVSxTQUFRLElBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVztBQUFBLGlCQUFLLEVBQUMsS0FBSSxXQUFVLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxrQkFBRyxHQUFHLGdCQUFlO0FBQUMsd0JBQVEscUJBQW9CLFNBQVEsb0JBQWtCO0FBQVUsb0JBQUksS0FBRTtBQUFLLHVCQUFPLGlCQUFpQixVQUFTLFNBQVMsSUFBRTtBQUFDLCtCQUFhLEtBQUcsS0FBRSxXQUFXLFdBQVU7QUFBQyx1QkFBRyxtQkFBbUIsU0FBUyxJQUFFO0FBQUMsNkJBQU8sT0FBTyxPQUFPLElBQUUsRUFBQyxRQUFPLE9BQU87QUFBQTtBQUFBLHFCQUFhO0FBQUEsb0JBQU8sT0FBTyxpQkFBaUIsWUFBVyxTQUFTLElBQUU7QUFBQyxzQkFBRyxHQUFFLG9CQUFvQixPQUFPLFdBQVU7QUFBQyx3QkFBSSxLQUFFLEdBQUUsU0FBTyxJQUFHLEtBQUUsR0FBRSxNQUFLLEtBQUUsR0FBRSxJQUFHLEtBQUUsR0FBRSxNQUFLLEtBQUUsR0FBRSxRQUFPLEtBQUUsT0FBTyxTQUFTO0FBQUssdUJBQUUsS0FBSyxpQkFBZSxBQUFVLE9BQVYsV0FBYSxPQUFJLEdBQUUsS0FBSyxLQUFHLEdBQUUsS0FBSyxjQUFjLElBQUUsUUFBTSxHQUFFLFlBQVksSUFBRSxNQUFLLFdBQVU7QUFBQyw0QkFBRyxHQUFFLHNCQUFxQixBQUFVLE9BQU8sTUFBakIsWUFBb0IsV0FBVyxXQUFVO0FBQUMsK0JBQU8sU0FBUyxHQUFFO0FBQUEseUJBQUk7QUFBQTtBQUFBO0FBQUEsbUJBQU8sUUFBSSxPQUFPLGlCQUFpQixTQUFRLFNBQVMsSUFBRTtBQUFDLHNCQUFJLEtBQUUsRUFBRSxHQUFFLFFBQU8sa0JBQWlCLEtBQUUsTUFBRyxHQUFFLGFBQWEsa0JBQWlCLEtBQUUsR0FBRSxXQUFTLEdBQUUsV0FBUyxBQUFJLEdBQUUsV0FBTjtBQUFhLHNCQUFHLE1BQUcsR0FBRSxpQkFBZSxHQUFFLFFBQU0sQ0FBQyxJQUFFO0FBQUMsd0JBQUksS0FBRSxHQUFFLE1BQUssS0FBRSxHQUFFLGFBQWE7QUFBdUIsd0JBQUcsR0FBRSxrQkFBaUIsR0FBRSxnQkFBYztBQUFFLDBCQUFHLEFBQVUsT0FBVjtBQUFZLDJCQUFFLGlCQUFpQixJQUFFLElBQUU7QUFBQSwyQkFBTztBQUFDLDRCQUFHLEFBQWEsT0FBYjtBQUFlLGdDQUFNLElBQUksTUFBTSxZQUFZLE9BQU8saUJBQWdCLHVDQUF1QyxPQUFPO0FBQUksMkJBQUUsZ0JBQWdCLElBQUU7QUFBQTtBQUFBO0FBQUEsbUJBQU07QUFBQTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxtQkFBa0IsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGlCQUFHLGNBQWMsUUFBTywwQkFBeUI7QUFBRyxrQkFBSSxLQUFFLFdBQVU7QUFBQyx1QkFBTyxHQUFHLGNBQWMsUUFBTyx5QkFBd0I7QUFBQTtBQUFJLHFCQUFPLEtBQUUsR0FBRSxNQUFHO0FBQUEsaUJBQUksRUFBQyxLQUFJLG9CQUFtQixPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssbUJBQUssZ0JBQWdCLEVBQUMsSUFBRyxJQUFFLE1BQUssV0FBUyxTQUFTLElBQUU7QUFBQyxtQkFBRSxLQUFLLGNBQWMsSUFBRSxJQUFFLFNBQVMsSUFBRTtBQUFDLHFCQUFFLGFBQWEsSUFBRSxJQUFFLEtBQUc7QUFBQTtBQUFBO0FBQUEsaUJBQVUsRUFBQyxLQUFJLGdCQUFlLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUcsS0FBSyxlQUFlO0FBQUcsbUJBQUssa0JBQWtCLE9BQUssSUFBRyxVQUFVLElBQUUsRUFBQyxNQUFLLFNBQVEsSUFBRyxLQUFLLEtBQUssTUFBSSxLQUFHLEtBQUssb0JBQW9CLE9BQU87QUFBQSxpQkFBYSxFQUFDLEtBQUksbUJBQWtCLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLE9BQU87QUFBUSxtQkFBSyxnQkFBZ0IsRUFBQyxJQUFHLElBQUUsTUFBSyxjQUFZLFNBQVMsSUFBRTtBQUFDLG1CQUFFLFlBQVksSUFBRSxJQUFFLFdBQVU7QUFBQyxxQkFBRyxVQUFVLElBQUUsRUFBQyxNQUFLLFlBQVcsSUFBRyxHQUFFLEtBQUssSUFBRyxRQUFPLE1BQUcsS0FBRyxHQUFFLG9CQUFvQixPQUFPLFdBQVU7QUFBQTtBQUFBO0FBQUEsaUJBQVUsRUFBQyxLQUFJLHNCQUFxQixPQUFNLFdBQVU7QUFBQyxpQkFBRyxVQUFVLFdBQVUsRUFBQyxNQUFLLE1BQUcsTUFBSyxTQUFRLElBQUcsS0FBSyxLQUFLO0FBQUEsaUJBQU8sRUFBQyxLQUFJLHVCQUFzQixPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUUsS0FBSztBQUFnQixxQkFBTyxHQUFFLFdBQVMsR0FBRSxXQUFTLEdBQUUsV0FBUyxHQUFFLFVBQVMsTUFBSyxrQkFBZ0IsRUFBRSxLQUFHO0FBQUEsaUJBQU0sRUFBQyxLQUFJLGFBQVksT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUU7QUFBRSxtQkFBSyxHQUFHLFVBQVMsU0FBUyxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFLE9BQU8sYUFBYSxHQUFFLFFBQVE7QUFBVyxzQkFBSSxJQUFFLGtCQUFpQixHQUFFLE9BQU8sV0FBUyxNQUFHLEdBQUUsYUFBYSxHQUFFLFFBQU8sU0FBUyxJQUFFLElBQUU7QUFBQyx5QkFBTyxHQUFFLFdBQVcsR0FBRSxRQUFPLElBQUU7QUFBQTtBQUFBLGlCQUFPO0FBQUksdUJBQVEsS0FBRSxXQUFVO0FBQUMsb0JBQUksS0FBRSxHQUFFO0FBQUcsbUJBQUUsR0FBRyxJQUFFLFNBQVMsSUFBRTtBQUFDLHNCQUFJLEtBQUUsR0FBRSxRQUFPLEtBQUUsR0FBRSxRQUFNLEdBQUUsS0FBSyxhQUFhLEdBQUUsUUFBUTtBQUFXLHNCQUFHLE1BQUksQ0FBVyxHQUFFLFNBQWIsWUFBbUIsQ0FBQyxHQUFFLFlBQVUsQ0FBQyxHQUFFLFNBQVMsV0FBVTtBQUFDLHdCQUFJLEtBQUU7QUFBRTtBQUFJLHdCQUFJLEtBQUUsR0FBRyxRQUFRLElBQUUscUJBQW1CLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUssMkJBQUksS0FBRSxLQUFHLE9BQUksTUFBSSxJQUFHLFdBQVcsSUFBRSxrQkFBaUIsRUFBQyxJQUFHLElBQUUsTUFBSyxPQUFJLEdBQUUsU0FBUyxJQUFFLElBQUUsV0FBVTtBQUFDLHlCQUFFLGFBQWEsR0FBRSxNQUFLLFNBQVMsSUFBRSxJQUFFO0FBQUMsMkJBQUcsV0FBVyxJQUFFLG1CQUFrQixPQUFJLEdBQUcsZUFBZSxPQUFJLEdBQUUsaUJBQWlCLEtBQUcsR0FBRSxVQUFVLElBQUUsSUFBRSxJQUFFLEdBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZTtBQUFBLGlCQUFLLEtBQUUsR0FBRSxLQUFFLENBQUMsVUFBUyxVQUFTLEtBQUUsR0FBRSxRQUFPO0FBQUk7QUFBQSxpQkFBTSxFQUFDLEtBQUksWUFBVyxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLEtBQUssUUFBUSxhQUFZLEtBQUUsS0FBSyxRQUFRLGFBQVksS0FBRSxLQUFLLFNBQVMsU0FBUyxZQUFXLEtBQUUsS0FBSyxTQUFTLFNBQVM7QUFBVyxpQkFBRyxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUEsaUJBQUssRUFBQyxLQUFJLGlCQUFnQixPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLFdBQVMsTUFBRyxNQUFJLEtBQUssV0FBUztBQUFBLGlCQUFLLEVBQUMsS0FBSSxNQUFLLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUsscUJBQU8saUJBQWlCLElBQUUsU0FBUyxJQUFFO0FBQUMsbUJBQUUsWUFBVSxHQUFFO0FBQUE7QUFBQSxtQkFBUztBQUFBLGVBQUssS0FBRyxFQUFDLGNBQWEsV0FBVTtBQUFDLG1CQUFPLEFBQVMsUUFBUSxjQUFqQjtBQUFBLGFBQTRCLFdBQVUsU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLG1CQUFPLEdBQUUsV0FBVyxLQUFLLFNBQVMsSUFBRTtBQUFBLGFBQUssYUFBWSxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGdCQUFJLEtBQUUsS0FBSyxTQUFTLElBQUUsSUFBRSxLQUFHLEtBQUUsS0FBSyxTQUFTLElBQUUsS0FBRyxLQUFFLEFBQU8sT0FBUCxPQUFTLEtBQUUsR0FBRTtBQUFHLG1CQUFPLEdBQUUsUUFBUSxJQUFFLEtBQUssVUFBVSxNQUFJO0FBQUEsYUFBRyxVQUFTLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxtQkFBTyxLQUFLLE1BQU0sR0FBRSxRQUFRLEtBQUssU0FBUyxJQUFFO0FBQUEsYUFBTSxXQUFVLFNBQVMsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRSxJQUFJO0FBQWUsZUFBRSxLQUFLLE9BQU0sSUFBRSxPQUFJLEdBQUUsVUFBUSxLQUFJLEdBQUUsaUJBQWlCLGdCQUFlLGNBQWEsR0FBRSxpQkFBaUIsaUJBQWdCLDhFQUE2RSxHQUFFLGlCQUFpQixvQkFBbUIsY0FBYSxHQUFFLFVBQVEsV0FBVTtBQUFDLHFCQUFPLEdBQUU7QUFBQSxlQUFNLEdBQUUsWUFBVSxXQUFVO0FBQUMscUJBQU8sR0FBRTtBQUFBLGVBQU0sR0FBRSxxQkFBbUIsV0FBVTtBQUFDLGtCQUFHLEFBQUksR0FBRSxlQUFOLEdBQWlCO0FBQUMsb0JBQUksS0FBRSxJQUFJLElBQUksS0FBRyxLQUFFLEdBQUUsV0FBUyxHQUFFLFFBQU8sS0FBRSxHQUFHLEdBQUUsa0JBQWtCLHFCQUFtQixHQUFFLGFBQVksU0FBUyxJQUFFO0FBQUMseUJBQU8sSUFBSSxJQUFJO0FBQUEsb0JBQUssS0FBRSxLQUFFLEdBQUUsV0FBUyxHQUFFLFNBQU87QUFBSyx1QkFBTSxBQUFjLEdBQUUsa0JBQWtCLHdCQUFsQyxjQUFzRCxHQUFFLE9BQUssQUFBTyxPQUFQLFFBQVUsTUFBRyxLQUFFLEdBQUUsT0FBSyxBQUFNLEdBQUUsV0FBUixNQUFlLEdBQUUsR0FBRSxVQUFRLEtBQUssR0FBRSxLQUFJLEdBQUU7QUFBQTtBQUFBLGVBQWdCLEdBQUU7QUFBQSxhQUFRLG9CQUFtQixTQUFTLElBQUU7QUFBQyxpQkFBSyxrQkFBZ0IsUUFBUSxhQUFhLEdBQUUsUUFBUSxTQUFPLEtBQUksSUFBRyxPQUFPLFNBQVM7QUFBQSxhQUFPLFdBQVUsU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGdCQUFHLEtBQUssZ0JBQWU7QUFBQyxrQkFBRyxPQUFJLE9BQU8sU0FBUyxNQUFLO0FBQUMsb0JBQUcsQUFBWSxHQUFFLFFBQWQsY0FBb0IsR0FBRSxRQUFPO0FBQUMsc0JBQUksS0FBRSxRQUFRLFNBQU87QUFBRyxxQkFBRSxTQUFPLEdBQUUsUUFBTyxRQUFRLGFBQWEsSUFBRSxJQUFHLE9BQU8sU0FBUztBQUFBO0FBQU0sdUJBQU8sR0FBRSxRQUFPLFFBQVEsS0FBRSxTQUFTLElBQUUsSUFBRyxNQUFHO0FBQU0sb0JBQUksS0FBRSxLQUFLLGdCQUFnQixPQUFPLFNBQVM7QUFBTSxxQkFBRSxHQUFFLG1CQUFpQixBQUFhLEdBQUUsU0FBZixjQUFxQixPQUFPLE9BQU8sR0FBRTtBQUFBO0FBQUE7QUFBUyxtQkFBSyxTQUFTO0FBQUEsYUFBSSxXQUFVLFNBQVMsSUFBRSxJQUFFO0FBQUMscUJBQVMsU0FBTyxHQUFHLE9BQU8sSUFBRSxLQUFLLE9BQU87QUFBQSxhQUFJLFdBQVUsU0FBUyxJQUFFO0FBQUMsbUJBQU8sU0FBUyxPQUFPLFFBQVEsSUFBSSxPQUFPLGlCQUFpQixPQUFPLElBQUUsMkJBQTBCO0FBQUEsYUFBTyxVQUFTLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUcsR0FBRyxVQUFVLHFCQUFvQixLQUFFLDRCQUEyQixPQUFPLFdBQVM7QUFBQSxhQUFHLFVBQVMsU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBTSxHQUFHLE9BQU8sSUFBRSxLQUFLLE9BQU87QUFBQSxhQUFJLGlCQUFnQixTQUFTLElBQUU7QUFBQyxnQkFBSSxLQUFFLEdBQUUsV0FBVyxVQUFVO0FBQUcsZ0JBQUcsQUFBSyxPQUFMO0FBQU8scUJBQU8sU0FBUyxlQUFlLE9BQUksU0FBUyxjQUFjLFdBQVcsT0FBTyxJQUFFO0FBQUEsZUFBUyxLQUFHLEVBQUMsTUFBSyxTQUFTLElBQUU7QUFBQyxtQkFBTyxTQUFTLGVBQWUsT0FBSSxFQUFFLG1CQUFtQixPQUFPO0FBQUEsYUFBSyxhQUFZLFNBQVMsSUFBRSxJQUFFO0FBQUMsZUFBRSxVQUFVLE9BQU8sS0FBRyxBQUFJLEdBQUUsVUFBVSxXQUFoQixLQUF3QixHQUFFLGdCQUFnQjtBQUFBLGFBQVUsS0FBSSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRSxNQUFNLEtBQUssR0FBRSxpQkFBaUI7QUFBSSxtQkFBTyxLQUFFLEdBQUUsUUFBUSxNQUFHO0FBQUEsYUFBRyxpQkFBZ0IsU0FBUyxJQUFFO0FBQUMsZ0JBQUksS0FBRSxTQUFTLGNBQWM7QUFBWSxtQkFBTyxHQUFFLFlBQVUsSUFBRSxHQUFFLFFBQVE7QUFBQSxhQUFtQixlQUFjLFNBQVMsSUFBRTtBQUFDLG1CQUFNLEFBQVMsR0FBRSxTQUFYLFVBQWlCLEFBQU8sR0FBRSxhQUFhLE9BQXRCO0FBQUEsYUFBMEIsa0JBQWlCLFNBQVMsSUFBRTtBQUFDLG1CQUFPLEtBQUssSUFBSSxJQUFFLHNCQUFzQixPQUFPLEdBQUU7QUFBQSxhQUFPLHVCQUFzQixTQUFTLElBQUUsSUFBRTtBQUFDLG1CQUFPLEtBQUsseUJBQXlCLEtBQUssSUFBSSxJQUFFLElBQUksT0FBTyxHQUFFLE1BQU0sT0FBTyxJQUFFLFFBQU87QUFBQSxhQUFJLGdCQUFlLFNBQVMsSUFBRTtBQUFDLG1CQUFNLENBQUUsRUFBQyxHQUFFLE1BQUksQ0FBQyxHQUFHLFFBQVEsSUFBRTtBQUFBLGFBQWUsdUJBQXNCLFNBQVMsSUFBRTtBQUFDLGVBQUUsYUFBYSxvQkFBbUIsS0FBSSxLQUFLLFdBQVcsSUFBRSxhQUFZO0FBQUEsYUFBSywyQkFBMEIsU0FBUyxJQUFFLElBQUU7QUFBQyxnQkFBSSxLQUFFLFNBQVMsY0FBYztBQUFZLG1CQUFPLEdBQUUsWUFBVSxJQUFFLEtBQUssZ0JBQWdCLEdBQUUsU0FBUTtBQUFBLGFBQUksV0FBVSxTQUFTLElBQUUsSUFBRTtBQUFDLG1CQUFNLEFBQVksSUFBRSxhQUFhLE9BQUksR0FBRSxhQUFhLHdCQUE5QztBQUFBLGFBQW1FLGFBQVksU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLG1CQUFPLEdBQUUsZ0JBQWMsR0FBRSxRQUFRLEdBQUUsYUFBYSxRQUFLO0FBQUEsYUFBRyxpQkFBZ0IsU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBTyxLQUFLLElBQUksSUFBRSxHQUFHLE9BQU8sR0FBRSxLQUFLLE9BQU8sc0JBQXFCLE1BQU0sT0FBTyxJQUFFO0FBQUEsYUFBUSxnQkFBZSxTQUFTLElBQUUsSUFBRTtBQUFDLGdCQUFJLEtBQUUsTUFBSyxLQUFFLElBQUksSUFBSTtBQUFHLG1CQUFPLEdBQUUsT0FBTyxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsSUFBSSxPQUFPLEdBQUUsTUFBTSxPQUFPLElBQUUsUUFBUSxPQUFPLEdBQUU7QUFBSyxxQkFBTyxHQUFFLHlCQUF5QixHQUFFLElBQUksSUFBRSxLQUFHLElBQUcsSUFBSSxTQUFTLElBQUU7QUFBQyx1QkFBTyxTQUFTLEdBQUUsYUFBYTtBQUFBLGlCQUFNLFFBQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxPQUFPO0FBQUEsa0JBQUs7QUFBQSxlQUFHO0FBQUEsYUFBSSwwQkFBeUIsU0FBUyxJQUFFLElBQUU7QUFBQyxnQkFBSSxLQUFFO0FBQUssbUJBQU8sR0FBRSxjQUFjLEtBQUcsR0FBRSxPQUFPLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEdBQUUsbUJBQW1CLElBQUU7QUFBQSxpQkFBSztBQUFBLGFBQUcsb0JBQW1CLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUssS0FBRSxHQUFFLGNBQVk7QUFBQyxrQkFBRyxHQUFFLFdBQVc7QUFBRyx1QkFBTTtBQUFHLGtCQUFHLEdBQUUsYUFBYTtBQUFHLHVCQUFNO0FBQUE7QUFBQSxhQUFLLFNBQVEsU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBTyxHQUFFLGNBQVksR0FBRSxXQUFXO0FBQUEsYUFBSSxlQUFjLFNBQVMsSUFBRSxJQUFFO0FBQUMsZUFBRSxjQUFZLE9BQU8sR0FBRSxXQUFXO0FBQUEsYUFBSSxZQUFXLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxlQUFFLGNBQWEsSUFBRSxhQUFXLEtBQUksR0FBRSxXQUFXLE1BQUc7QUFBQSxhQUFHLGNBQWEsU0FBUyxJQUFFLElBQUU7QUFBQyxlQUFFLGNBQWEsSUFBRSxhQUFXLEVBQUUsR0FBRTtBQUFBLGFBQWMsVUFBUyxTQUFTLElBQUU7QUFBQyxnQkFBSSxLQUFFLFNBQVMsY0FBYyxTQUFTLFNBQVEsS0FBRSxHQUFFLFFBQU8sS0FBRSxHQUFFO0FBQU8scUJBQVMsUUFBTSxHQUFHLE9BQU8sTUFBRyxJQUFJLE9BQU8sSUFBRyxPQUFPLE1BQUc7QUFBQSxhQUFLLFVBQVMsU0FBUyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRSxNQUFLLEtBQUUsR0FBRSxhQUFhLEtBQUcsS0FBRSxHQUFFLGFBQWE7QUFBRyxZQUFLLE9BQUwsTUFBUyxNQUFFLEtBQUcsQUFBSyxPQUFMLE1BQVMsTUFBRTtBQUFHLGdCQUFJLEtBQUUsTUFBRztBQUFFLG9CQUFPO0FBQUEsbUJBQVE7QUFBSyx1QkFBTztBQUFBLG1CQUFRO0FBQU8sdUJBQU8sS0FBSyxNQUFLLEtBQUssSUFBRSxvQkFBa0IsR0FBRSxpQkFBaUIsUUFBTyxXQUFVO0FBQUMseUJBQU87QUFBQTtBQUFBO0FBQWUsb0JBQUksS0FBRSxTQUFTLEtBQUcsS0FBRSxLQUFLLFNBQVMsSUFBRSxvQkFBbUIsV0FBVTtBQUFDLHlCQUFPLEtBQUUsR0FBRSxjQUFjLElBQUUsZUFBYTtBQUFBO0FBQU0sb0JBQUcsTUFBTTtBQUFHLHlCQUFPLEVBQUUsb0NBQW9DLE9BQU87QUFBSSxvQkFBRyxJQUFFO0FBQUMsc0JBQUksS0FBRTtBQUFHLHNCQUFHLEFBQVksR0FBRSxTQUFkLFdBQW1CO0FBQUMsd0JBQUksS0FBRSxLQUFLLFFBQVEsSUFBRTtBQUFxQix5QkFBSyxXQUFXLElBQUUscUJBQW9CLEdBQUUsTUFBSyxLQUFFLE9BQUksR0FBRTtBQUFBO0FBQUksc0JBQUcsQ0FBQyxNQUFHLEtBQUssUUFBUSxJQUFFO0FBQWEsMkJBQU07QUFBRyx3QkFBSSxLQUFLLFdBQVcsSUFBRSxhQUFZLE9BQUksV0FBVyxXQUFVO0FBQUMsMkJBQU8sR0FBRSxhQUFhLElBQUU7QUFBQSxxQkFBcUI7QUFBQTtBQUFRLDZCQUFXLFdBQVU7QUFBQywyQkFBTyxHQUFFLGFBQWEsSUFBRSxvQkFBbUI7QUFBQSxxQkFBSTtBQUFHLG9CQUFJLEtBQUUsR0FBRTtBQUFLLHNCQUFHLEtBQUssS0FBSyxJQUFFLG9CQUFrQixHQUFFLGlCQUFpQixVQUFTLFNBQVMsSUFBRTtBQUFDLHdCQUFNLEtBQUssSUFBSSxTQUFTLElBQUcsV0FBVSxTQUFTLElBQUU7QUFBQyx3QkFBSSxLQUFFLEVBQUUsSUFBRSxJQUFHLEtBQUUsR0FBRSxJQUFHLEtBQUcsSUFBRSxJQUFHLEdBQUUsY0FBYyxVQUFVLE9BQU8sSUFBRTtBQUFRLHVCQUFFLFNBQVMsSUFBRSxxQkFBb0IsR0FBRSxjQUFjLElBQUU7QUFBQTtBQUFBLG9CQUFpQixLQUFLLEtBQUssSUFBRSxvQkFBa0IsR0FBRSxpQkFBaUIsUUFBTyxTQUFTLElBQUU7QUFBQyx5QkFBTyxHQUFFLGFBQWEsSUFBRTtBQUFBO0FBQUE7QUFBQSxhQUF3QixjQUFhLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxnQkFBSSxLQUFFLEVBQUUsS0FBSyxRQUFRLElBQUUsS0FBRyxJQUFHLEtBQUUsR0FBRSxJQUFHLEtBQUUsR0FBRTtBQUFHLGtCQUFJLE1BQUUsS0FBRyxPQUFJLE1BQUksTUFBSyxTQUFTLElBQUUsS0FBRztBQUFBLGFBQU0sTUFBSyxTQUFTLElBQUUsSUFBRTtBQUFDLG1CQUFNLEFBQUssS0FBSyxRQUFRLElBQUUsUUFBcEIsUUFBeUIsTUFBSyxXQUFXLElBQUUsSUFBRSxPQUFJO0FBQUEsYUFBSyxVQUFTLFNBQVMsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHLFdBQVU7QUFBQSxlQUFHLEtBQUUsRUFBRSxLQUFLLFFBQVEsSUFBRSxPQUFJLENBQUMsR0FBRSxLQUFHLElBQUcsS0FBRSxHQUFFO0FBQUcsZUFBRTtBQUFHLG1CQUFPLE1BQUksS0FBSyxXQUFXLElBQUUsSUFBRSxDQUFDLElBQUUsTUFBSTtBQUFBLGFBQUcsY0FBYSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRSxHQUFFLGdCQUFjLEdBQUUsYUFBYSxLQUFHLEtBQUUsTUFBRyxHQUFFLGNBQWMsUUFBUSxPQUFPLElBQUUsZUFBZSxPQUFPLElBQUU7QUFBTyxrQkFBSSxNQUFLLFFBQVEsSUFBRSxzQkFBb0IsS0FBSyxRQUFRLEdBQUUsTUFBSyx3QkFBc0IsR0FBRSxVQUFVLElBQUk7QUFBQSxhQUFxQixXQUFVLFNBQVMsSUFBRSxJQUFFO0FBQUMsZ0JBQUksS0FBRTtBQUFLLFlBQUMsSUFBRSxNQUFJLEdBQUUsU0FBTyxLQUFLLElBQUksR0FBRSxNQUFLLElBQUksT0FBTyxJQUFFLE1BQU0sT0FBTyxHQUFFLElBQUcsU0FBUyxPQUFPLElBQUUsTUFBTSxPQUFPLEdBQUUsTUFBSyxPQUFNLFNBQVMsSUFBRTtBQUFDLGlCQUFFLFlBQVksSUFBRTtBQUFBO0FBQUEsYUFBc0IsWUFBVyxTQUFTLElBQUU7QUFBQyxtQkFBTyxHQUFFLGdCQUFjLEdBQUUsYUFBYTtBQUFBLGFBQXVCLGVBQWMsU0FBUyxJQUFFLElBQUU7QUFBQyxnQkFBSSxLQUFFLFVBQVUsU0FBTyxLQUFHLEFBQVMsVUFBVSxPQUFuQixTQUFzQixVQUFVLEtBQUcsSUFBRyxLQUFFLElBQUksWUFBWSxJQUFFLEVBQUMsU0FBUSxNQUFHLFlBQVcsTUFBRyxRQUFPO0FBQUksZUFBRSxjQUFjO0FBQUEsYUFBSSxXQUFVLFNBQVMsSUFBRSxJQUFFO0FBQUMsZ0JBQUcsQUFBUyxPQUFUO0FBQVcscUJBQU8sR0FBRSxVQUFVO0FBQUksZ0JBQUksS0FBRSxHQUFFLFVBQVU7QUFBSSxtQkFBTyxHQUFFLFlBQVUsSUFBRTtBQUFBLGFBQUcsWUFBVyxTQUFTLElBQUUsSUFBRTtBQUFDLHFCQUFRLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxJQUFHLEtBQUUsR0FBRSxXQUFTLElBQUcsS0FBRSxHQUFFLFdBQVUsS0FBRSxHQUFFLFlBQVcsS0FBRSxHQUFFLFNBQU8sR0FBRSxNQUFHLEdBQUUsTUFBSTtBQUFDLGtCQUFJLEtBQUUsR0FBRSxJQUFHO0FBQUssaUJBQUUsUUFBUSxNQUFHLEtBQUcsR0FBRSxhQUFhLElBQUUsR0FBRSxhQUFhO0FBQUE7QUFBSSxxQkFBUSxLQUFFLEdBQUUsWUFBVyxLQUFFLEdBQUUsU0FBTyxHQUFFLE1BQUcsR0FBRSxNQUFJO0FBQUMsa0JBQUksS0FBRSxHQUFFLElBQUc7QUFBSyxtQkFBRSxHQUFFLFdBQVcsWUFBVSxDQUFDLEdBQUUsYUFBYSxPQUFJLEdBQUUsZ0JBQWdCLE1BQUcsR0FBRSxhQUFhLE9BQUksR0FBRSxnQkFBZ0I7QUFBQTtBQUFBLGFBQUssbUJBQWtCLFNBQVMsSUFBRSxJQUFFO0FBQUMsMEJBQWEscUJBQW1CLEdBQUcsV0FBVyxJQUFFLElBQUUsRUFBQyxRQUFPLENBQUMsYUFBVyxHQUFFLFdBQVMsR0FBRSxhQUFhLFlBQVcsUUFBSSxHQUFFLGdCQUFnQjtBQUFBLGFBQWEsbUJBQWtCLFNBQVMsSUFBRTtBQUFDLG1CQUFPLEdBQUUscUJBQW9CLENBQVMsR0FBRSxTQUFYLFVBQWlCLEFBQWEsR0FBRSxTQUFmO0FBQUEsYUFBc0IsY0FBYSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUcsR0FBRyxlQUFlLEtBQUc7QUFBQyxrQkFBSSxLQUFFLEdBQUUsUUFBUTtBQUFVLGlCQUFFLFlBQVUsR0FBRSxRQUFPLE1BQUcsR0FBRSxTQUFRLEtBQUssa0JBQWtCLE9BQUksR0FBRSxrQkFBa0IsSUFBRTtBQUFBO0FBQUEsYUFBSyxhQUFZLFNBQVMsSUFBRTtBQUFDLG1CQUFNLCtCQUErQixLQUFLLEdBQUUsWUFBVSxBQUFXLEdBQUUsU0FBYjtBQUFBLGFBQW1CLGtCQUFpQixTQUFTLElBQUU7QUFBQywwQkFBYSxvQkFBa0IsRUFBRSxRQUFRLEdBQUUsS0FBSyx3QkFBc0IsS0FBSSxJQUFFLFVBQVEsQUFBTyxHQUFFLGFBQWEsZUFBdEI7QUFBQSxhQUFtQyxnQkFBZSxTQUFTLElBQUU7QUFBQyxtQkFBTyxFQUFFLFFBQVEsR0FBRSxTQUFPO0FBQUEsYUFBRywwQkFBeUIsU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBTyxHQUFFLGdCQUFjLEFBQU8sR0FBRSxhQUFhLFFBQXRCO0FBQUEsYUFBMEIsZ0JBQWUsU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGdCQUFJLEtBQUUsR0FBRSxhQUFhO0FBQUcsbUJBQU8sQUFBTyxPQUFQLFFBQVcsSUFBRyxZQUFZLE9BQUksQUFBTyxHQUFFLGFBQWEsUUFBdEIsT0FBMEIsSUFBRyxjQUFjLE9BQUksR0FBRyxXQUFXLElBQUUsSUFBRSxFQUFDLFdBQVUsU0FBSyxHQUFHLFdBQVcsSUFBRSxHQUFFLEtBQUcsU0FBSyxHQUFFLFFBQVEsU0FBUyxJQUFFO0FBQUMsaUJBQUUsVUFBVSxTQUFTLE9BQUksR0FBRSxVQUFVLElBQUk7QUFBQSxnQkFBSyxHQUFFLGFBQWEsR0FBRSxLQUFHO0FBQUEsYUFBTSxpQkFBZ0IsU0FBUyxJQUFFLElBQUU7QUFBQyxnQkFBRyxHQUFHLFlBQVksSUFBRSxJQUFFLENBQUMsVUFBUyxhQUFZO0FBQUMsa0JBQUksS0FBRTtBQUFHLGlCQUFFLFdBQVcsUUFBUSxTQUFTLElBQUU7QUFBQyxtQkFBRSxNQUFLLElBQUUsYUFBVyxLQUFLLGFBQVcsQUFBSyxHQUFFLFVBQVUsV0FBakIsTUFBeUIsRUFBRSx5RkFBdUYsMkJBQTJCLE9BQVEsSUFBRSxhQUFXLEdBQUUsV0FBVyxRQUFPLFdBQVUsR0FBRSxLQUFLO0FBQUEsa0JBQU0sR0FBRSxRQUFRLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUU7QUFBQTtBQUFBO0FBQUEsZUFBYyxLQUFHLFdBQVU7QUFBQyx3QkFBVyxJQUFFLElBQUUsSUFBRTtBQUFDLGdCQUFFLE1BQUs7QUFBRyxrQkFBSSxLQUFFLElBQUksT0FBSSxLQUFFLElBQUksSUFBSSxFQUFFLEdBQUUsVUFBVSxJQUFJLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUU7QUFBQSxtQkFBTSxLQUFFO0FBQUcsb0JBQU0sS0FBSyxHQUFFLFVBQVUsUUFBUSxTQUFTLElBQUU7QUFBQyxvQkFBRyxHQUFFLE1BQUssSUFBRSxJQUFJLEdBQUUsS0FBSSxHQUFFLElBQUksR0FBRSxNQUFLO0FBQUMsc0JBQUksS0FBRSxHQUFFLDBCQUF3QixHQUFFLHVCQUF1QjtBQUFHLHFCQUFFLEtBQUssRUFBQyxXQUFVLEdBQUUsSUFBRyxtQkFBa0I7QUFBQTtBQUFBLGtCQUFPLEtBQUssY0FBWSxHQUFFLElBQUcsS0FBSyxhQUFXLElBQUUsS0FBSyxtQkFBaUIsSUFBRSxLQUFLLGtCQUFnQixFQUFFLElBQUcsT0FBTyxTQUFTLElBQUU7QUFBQyx1QkFBTSxDQUFDLEdBQUUsSUFBSTtBQUFBO0FBQUE7QUFBSyxtQkFBTyxFQUFFLElBQUUsQ0FBQyxFQUFDLEtBQUksV0FBVSxPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFLEdBQUcsS0FBSyxLQUFLO0FBQWEsbUJBQUssaUJBQWlCLFFBQVEsU0FBUyxJQUFFO0FBQUMsbUJBQUUsb0JBQWtCLEdBQUcsU0FBUyxlQUFlLEdBQUUsb0JBQW1CLFNBQVMsSUFBRTtBQUFDLHFCQUFHLFNBQVMsZUFBZSxHQUFFLFlBQVcsU0FBUyxJQUFFO0FBQUMsdUJBQUUsMEJBQXdCLEdBQUUsdUJBQXVCLE1BQUksR0FBRSxNQUFJLEdBQUUsc0JBQXNCLFlBQVc7QUFBQTtBQUFBLHFCQUFPLEdBQUcsU0FBUyxlQUFlLEdBQUUsWUFBVyxTQUFTLElBQUU7QUFBQyxrQkFBTSxHQUFFLDBCQUFSLFFBQWdDLEdBQUUsc0JBQXNCLGNBQWE7QUFBQTtBQUFBLGtCQUFPLEFBQVcsS0FBSyxjQUFoQixhQUE0QixLQUFLLGdCQUFnQixVQUFVLFFBQVEsU0FBUyxJQUFFO0FBQUMsbUJBQUcsU0FBUyxlQUFlLEtBQUcsU0FBUyxJQUFFO0FBQUMseUJBQU8sR0FBRSxzQkFBc0IsY0FBYTtBQUFBO0FBQUE7QUFBQSxtQkFBVztBQUFBLGVBQUssS0FBRyxXQUFVO0FBQUMsd0JBQVcsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUUsTUFBSyxLQUFHLEtBQUssT0FBSyxJQUFFLEtBQUssYUFBVyxHQUFFLFlBQVcsS0FBSyxZQUFVLElBQUUsS0FBSyxLQUFHLElBQUUsS0FBSyxTQUFPLEdBQUUsS0FBSyxJQUFHLEtBQUssT0FBSyxJQUFFLEtBQUssWUFBVSxJQUFFLEtBQUssV0FBUyxBQUFVLE9BQU8sS0FBSyxhQUF0QixVQUFnQyxLQUFLLFlBQVUsRUFBQyxhQUFZLElBQUcsZUFBYyxJQUFHLHFCQUFvQixJQUFHLFlBQVcsSUFBRyxjQUFhLElBQUcsZ0JBQWUsSUFBRyxvQkFBbUI7QUFBQTtBQUFJLG1CQUFPLEVBQUUsSUFBRSxNQUFLLENBQUMsRUFBQyxLQUFJLFdBQVUsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsZ0JBQUUsSUFBRSxJQUFFLEVBQUMsY0FBYSxPQUFHLG1CQUFrQixTQUFTLElBQUUsSUFBRTtBQUFDLG9CQUFHLE1BQUcsR0FBRSxXQUFXLE9BQUksR0FBRyxZQUFZO0FBQUcseUJBQU8sR0FBRyxrQkFBa0IsSUFBRSxLQUFHO0FBQUE7QUFBQSxtQkFBVSxFQUFFLElBQUUsQ0FBQyxFQUFDLEtBQUksVUFBUyxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUssVUFBVSxTQUFTLE9BQU8sS0FBSSxLQUFLO0FBQUEsaUJBQUssRUFBQyxLQUFJLFNBQVEsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLG1CQUFLLFVBQVUsUUFBUSxPQUFPLEtBQUksS0FBSztBQUFBLGlCQUFLLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFO0FBQUMsdUJBQVEsS0FBRSxVQUFVLFFBQU8sS0FBRSxJQUFJLE1BQU0sS0FBRSxJQUFFLEtBQUUsSUFBRSxJQUFHLEtBQUUsR0FBRSxLQUFFLElBQUU7QUFBSSxtQkFBRSxLQUFFLEtBQUcsVUFBVTtBQUFHLG1CQUFLLFVBQVUsU0FBUyxPQUFPLEtBQUksUUFBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLE1BQU0sUUFBTztBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGNBQWEsT0FBTSxTQUFTLElBQUU7QUFBQyx1QkFBUSxLQUFFLFVBQVUsUUFBTyxLQUFFLElBQUksTUFBTSxLQUFFLElBQUUsS0FBRSxJQUFFLElBQUcsS0FBRSxHQUFFLEtBQUUsSUFBRTtBQUFJLG1CQUFFLEtBQUUsS0FBRyxVQUFVO0FBQUcsbUJBQUssVUFBVSxRQUFRLE9BQU8sS0FBSSxRQUFRLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsTUFBTSxRQUFPO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksaUNBQWdDLE9BQU0sV0FBVTtBQUFDLGlCQUFHLElBQUksS0FBSyxXQUFVLHFEQUFvRCxTQUFTLElBQUU7QUFBQyxtQkFBRSxhQUFhLG1CQUFrQjtBQUFBO0FBQUEsaUJBQVEsRUFBQyxLQUFJLFdBQVUsT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsS0FBSyxNQUFLLEtBQUUsS0FBSyxZQUFXLEtBQUUsS0FBSyxXQUFVLEtBQUUsS0FBSyxNQUFLLEtBQUUsS0FBSyxlQUFhLEtBQUssbUJBQW1CLE1BQUc7QUFBRSxrQkFBRyxDQUFDLEtBQUssZ0JBQWMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsR0FBRSxvQkFBbUIsS0FBRSxNQUFHLEdBQUcsa0JBQWtCLE1BQUcsS0FBRSxJQUFHLEtBQUUsR0FBRSxnQkFBZSxLQUFFLEdBQUUsY0FBYSxLQUFFLEdBQUUsUUFBUSxXQUFVLEtBQUUsR0FBRSxRQUFRLGlCQUFnQixLQUFFLEdBQUUsUUFBUSxpQkFBZ0IsS0FBRSxHQUFFLFFBQVEsbUJBQWtCLEtBQUUsSUFBRyxLQUFFLElBQUcsS0FBRSxJQUFHLEtBQUUsTUFBSyxLQUFFLEdBQUUsS0FBSywyQkFBMEIsV0FBVTtBQUFDLHlCQUFPLEdBQUUsY0FBYyxJQUFFLElBQUUsSUFBRTtBQUFBO0FBQUssdUJBQU8sS0FBSyxZQUFZLFNBQVEsS0FBRyxLQUFLLFlBQVksV0FBVSxJQUFFLEtBQUcsR0FBRSxLQUFLLFlBQVcsV0FBVTtBQUFDLG9CQUFFLElBQUUsSUFBRSxFQUFDLGNBQWEsQUFBTyxHQUFFLGFBQWEsT0FBdEIsTUFBeUIsWUFBVyxTQUFTLElBQUU7QUFBQywyQkFBTyxHQUFHLGVBQWUsTUFBRyxPQUFLLEdBQUU7QUFBQSxxQkFBSSxtQkFBa0IsU0FBUyxJQUFFO0FBQUMsMkJBQU8sR0FBRyxhQUFhLElBQUUsSUFBRSxLQUFHLEdBQUUsWUFBWSxTQUFRLEtBQUc7QUFBQSxxQkFBRyxhQUFZLFNBQVMsSUFBRTtBQUFDLHVCQUFHLHlCQUF5QixJQUFFLE9BQUssTUFBRSxLQUFHLEdBQUcsV0FBVyxPQUFJLEdBQUUsWUFBWSxPQUFJLEdBQUUsV0FBVyxpQkFBZ0IsS0FBRyxHQUFFLEtBQUs7QUFBQSxxQkFBSSxpQkFBZ0IsU0FBUyxJQUFFO0FBQUMsdUJBQUcsV0FBVyxPQUFJLEdBQUUsZ0JBQWdCLEtBQUcsR0FBRSxXQUFXLGFBQVk7QUFBQSxxQkFBSSx1QkFBc0IsU0FBUyxJQUFFO0FBQUMsMkJBQU0sQ0FBRSxFQUFDLEdBQUUsZ0JBQWMsQUFBTyxHQUFFLGFBQWEsdUJBQXRCLFNBQTRDLENBQU8sR0FBRSxlQUFULFFBQXFCLENBQUMsR0FBRyxZQUFZLEdBQUUsWUFBVyxJQUFFLENBQUMsVUFBUyxlQUFhLENBQUMsR0FBRSxPQUFLLENBQUMsR0FBRSxlQUFlO0FBQUEscUJBQUksYUFBWSxTQUFTLElBQUU7QUFBQyx1QkFBRyx5QkFBeUIsSUFBRSxPQUFLLE1BQUUsS0FBRyxHQUFFLEtBQUs7QUFBQSxxQkFBSSxtQkFBa0IsU0FBUyxJQUFFLElBQUU7QUFBQyx3QkFBRyxHQUFHLGdCQUFnQixJQUFFLEtBQUcsR0FBRSxlQUFlO0FBQUcsNkJBQU07QUFBRyx3QkFBRyxHQUFHLFVBQVUsSUFBRTtBQUFHLDZCQUFPLEdBQUUsWUFBWSxXQUFVLElBQUUsS0FBRyxHQUFHLFdBQVcsSUFBRSxJQUFFLEVBQUMsV0FBVSxTQUFLLEdBQUUsS0FBSyxLQUFHO0FBQUcsd0JBQUcsQUFBVyxHQUFFLFNBQWIsWUFBbUIsR0FBRSxZQUFVLEdBQUUsU0FBUztBQUFTLDZCQUFNO0FBQUcsd0JBQUcsQ0FBQyxHQUFHLGVBQWUsSUFBRSxJQUFFO0FBQUcsNkJBQU8sR0FBRyxjQUFjLE9BQUssSUFBRSxZQUFZLFdBQVUsSUFBRSxLQUFHLEdBQUUsS0FBSyxNQUFJO0FBQUcsd0JBQUcsR0FBRyxXQUFXLEtBQUc7QUFBQywwQkFBSSxLQUFFLEdBQUUsYUFBYTtBQUFvQiw2QkFBTyxHQUFHLFdBQVcsSUFBRSxJQUFFLEVBQUMsU0FBUSxDQUFDLHVCQUFxQixBQUFLLE9BQUwsTUFBUSxHQUFFLGFBQWEsb0JBQW1CLEtBQUcsR0FBRSxhQUFhLG9CQUFtQixHQUFFLFNBQVE7QUFBQTtBQUFHLDJCQUFPLEdBQUcsYUFBYSxJQUFFLEtBQUcsR0FBRyxhQUFhLElBQUUsSUFBRSxLQUFHLE1BQUcsR0FBRSxXQUFXLE9BQUksR0FBRyxZQUFZLE9BQUksQ0FBQyxHQUFFLHlCQUF5QixJQUFFLE1BQUksSUFBRSxZQUFZLFdBQVUsSUFBRSxLQUFHLEdBQUcsa0JBQWtCLElBQUUsS0FBRyxHQUFHLGlCQUFpQixLQUFHLEdBQUUsS0FBSyxLQUFHLFNBQUssSUFBRyxZQUFZLElBQUUsSUFBRSxDQUFDLFVBQVMsZUFBYSxHQUFFLEtBQUssSUFBSSxHQUFHLElBQUUsSUFBRSxHQUFFLGFBQWEsT0FBSyxHQUFHLGlCQUFpQixLQUFHLEdBQUUsWUFBWSxXQUFVLElBQUUsS0FBRztBQUFBO0FBQUEsb0JBQVMsR0FBRSxvQkFBa0IsV0FBVTtBQUFDLDJCQUFRLEtBQUUsSUFBSSxPQUFJLEtBQUUsU0FBUyxpQkFBaUIsVUFBUyxLQUFFLEdBQUUsS0FBRSxHQUFFLFFBQU8sS0FBRSxJQUFFO0FBQUksdUJBQUUsSUFBSSxHQUFFLElBQUcsTUFBSSxRQUFRLE1BQU0sMEJBQTBCLE9BQU8sR0FBRSxJQUFHLElBQUcsbUNBQWlDLEdBQUUsSUFBSSxHQUFFLElBQUc7QUFBQSxxQkFBTyxHQUFFLFNBQU8sS0FBRyxHQUFFLEtBQUsseUNBQXdDLFdBQVU7QUFBQyxxQkFBRSxRQUFRLFNBQVMsSUFBRTtBQUFDLDJCQUFPLEdBQUU7QUFBQTtBQUFBLG9CQUFjLEdBQUUsY0FBYyxXQUFVO0FBQUMseUJBQU8sR0FBRyxhQUFhLElBQUUsSUFBRTtBQUFBLG9CQUFLLEdBQUcsY0FBYyxVQUFTLGVBQWMsR0FBRSxRQUFRLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEdBQUUsV0FBVyxTQUFRO0FBQUEsb0JBQUssR0FBRSxRQUFRLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEdBQUUsV0FBVyxXQUFVO0FBQUEsb0JBQUssTUFBSSxJQUFFLGNBQWEsR0FBRSxXQUFVO0FBQUE7QUFBQSxpQkFBTSxFQUFDLEtBQUksNEJBQTJCLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLENBQUMsVUFBUyxjQUFhLG1CQUFtQixLQUFLLFNBQVMsSUFBRTtBQUFDLHVCQUFPLE9BQUksR0FBRTtBQUFBO0FBQU8scUJBQU0sQUFBSyxHQUFFLGFBQVAsUUFBaUIsTUFBRyxHQUFFLGFBQVcsR0FBRTtBQUFBLGlCQUFZLEVBQUMsS0FBSSxjQUFhLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUs7QUFBQSxpQkFBVyxFQUFDLEtBQUksa0JBQWlCLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxhQUFXLEtBQUssZ0JBQWMsQUFBTyxHQUFFLGFBQWEscUJBQXRCO0FBQUEsaUJBQXlDLEVBQUMsS0FBSSxzQkFBcUIsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBRyxLQUFLLGNBQWE7QUFBQyxvQkFBSSxLQUFFLEVBQUUsR0FBRyxzQkFBc0IsS0FBSyxXQUFVLEtBQUssYUFBWSxLQUFFLEdBQUU7QUFBRyx1QkFBTyxBQUFJLEdBQUUsTUFBTSxHQUFHLFdBQWYsS0FBdUIsQUFBSSxHQUFHLGdCQUFnQixRQUF2QixJQUEwQixLQUFFLE1BQUcsR0FBRTtBQUFBO0FBQUEsaUJBQWMsRUFBQyxLQUFJLGlCQUFnQixPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEtBQUssY0FBYSxLQUFFLE1BQUcsR0FBRSxhQUFhLE9BQUssS0FBSyxVQUFVO0FBQVcsa0JBQUcsQ0FBQyxNQUFHO0FBQUUsdUJBQU87QUFBRSxrQkFBSSxLQUFFLE1BQUssS0FBRSxTQUFTLGNBQWM7QUFBWSxtQkFBRSxHQUFHLFVBQVU7QUFBRyxrQkFBSSxLQUFFLEVBQUUsR0FBRyxzQkFBc0IsSUFBRSxLQUFLLGFBQVksS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFLE1BQU07QUFBRyxxQkFBTyxHQUFFLFlBQVUsSUFBRSxHQUFFLFFBQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRTtBQUFBLGtCQUFXLE1BQU0sS0FBSyxHQUFFLFlBQVksUUFBUSxTQUFTLElBQUU7QUFBQyxtQkFBRSxNQUFJLEdBQUUsYUFBVyxLQUFLLGdCQUFjLEdBQUUsYUFBYSxPQUFLLEdBQUUsVUFBVSxjQUFhLElBQUUsYUFBYSxpQkFBZ0IsS0FBSSxHQUFFLFlBQVU7QUFBQSxrQkFBTSxNQUFNLEtBQUssR0FBRSxRQUFRLFlBQVksUUFBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLGFBQWEsSUFBRTtBQUFBLGtCQUFLLEdBQUUsVUFBUyxHQUFFO0FBQUEsbUJBQWM7QUFBQSxlQUFLLEtBQUcsV0FBVTtBQUFDLHdCQUFXLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxnQkFBRSxNQUFLLEtBQUcsS0FBSyxhQUFXLElBQUUsS0FBSyxRQUFNLElBQUUsS0FBSyxTQUFPLElBQUUsS0FBSyxPQUFLLEtBQUUsR0FBRSxPQUFLLE1BQUssS0FBSyxLQUFHLElBQUUsS0FBSyxLQUFHLEtBQUssR0FBRyxJQUFHLEtBQUssT0FBSyxLQUFLLEdBQUcsYUFBYSxJQUFHLEtBQUssTUFBSSxHQUFFLEtBQUssYUFBVyxHQUFFLEtBQUssY0FBWSxNQUFLLEtBQUssZUFBYSxJQUFHLEtBQUssY0FBWSxJQUFHLEtBQUssT0FBSyxJQUFFLEtBQUssWUFBVSxLQUFLLFNBQU8sS0FBSyxPQUFPLFlBQVUsSUFBRSxHQUFFLEtBQUssY0FBWSxNQUFHLEtBQUssWUFBVSxPQUFHLEtBQUssZUFBYSxXQUFVO0FBQUEsaUJBQUcsS0FBSyxlQUFhLFdBQVU7QUFBQSxpQkFBRyxLQUFLLGlCQUFlLEtBQUssU0FBTyxPQUFLLElBQUcsS0FBSyxZQUFVLElBQUcsS0FBSyxZQUFVLElBQUcsS0FBSyxjQUFZLElBQUcsS0FBSyxXQUFTLEtBQUssU0FBTyxPQUFLLElBQUcsS0FBSyxLQUFLLFNBQVMsS0FBSyxNQUFJLElBQUcsS0FBSyxVQUFRLEtBQUssV0FBVyxRQUFRLE1BQU0sT0FBTyxLQUFLLEtBQUksV0FBVTtBQUFDLHVCQUFNLEVBQUMsS0FBSSxHQUFFLE1BQUssUUFBTyxHQUFFLGlCQUFnQixTQUFRLEdBQUUsY0FBYSxRQUFPLEdBQUUsYUFBWSxPQUFNLEdBQUU7QUFBQSxrQkFBUyxLQUFLLFdBQVcsS0FBSyxXQUFXLGdCQUFlLEtBQUs7QUFBQTtBQUFjLG1CQUFPLEVBQUUsSUFBRSxDQUFDLEVBQUMsS0FBSSxVQUFTLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUssV0FBVyxTQUFPO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGlCQUFnQixPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTSxLQUFFLEdBQUcsSUFBSSxVQUFTLElBQUksT0FBTyxLQUFLLFFBQVEsaUJBQWdCLE1BQU0sSUFBSSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLE9BQUssR0FBRTtBQUFBLGlCQUFPLE9BQU8sU0FBUyxJQUFFO0FBQUMsdUJBQU0sQUFBVSxPQUFPLE1BQWpCO0FBQUE7QUFBcUIscUJBQU8sR0FBRSxTQUFPLEtBQUksSUFBRSxnQkFBYyxLQUFHLEdBQUUsVUFBUSxLQUFLLFdBQVU7QUFBQSxpQkFBSSxFQUFDLEtBQUksUUFBTyxPQUFNLFdBQVU7QUFBQyxxQkFBTyxLQUFLO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGVBQWMsT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSyxRQUFRO0FBQUEsaUJBQVksRUFBQyxLQUFJLGNBQWEsT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSyxHQUFHLGFBQWE7QUFBQSxpQkFBc0IsRUFBQyxLQUFJLGFBQVksT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRSxLQUFLLEdBQUcsYUFBYTtBQUFtQixxQkFBTSxBQUFLLE9BQUwsS0FBTyxPQUFLO0FBQUEsaUJBQUksRUFBQyxLQUFJLFdBQVUsT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxXQUFVO0FBQUE7QUFBRyxtQkFBSyxzQkFBcUIsS0FBSyxZQUFVLE1BQUcsT0FBTyxLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUksS0FBSyxVQUFRLE9BQU8sS0FBSyxLQUFLLFNBQVMsS0FBSyxPQUFPLElBQUksS0FBSyxLQUFJLGFBQWEsS0FBSztBQUFhLGtCQUFJLEtBQUUsV0FBVTtBQUFDLHlCQUFRLE1BQUssTUFBSSxHQUFFO0FBQVUscUJBQUUsWUFBWSxHQUFFLFVBQVU7QUFBQTtBQUFLLGlCQUFHLHNCQUFzQixLQUFLLEtBQUksS0FBSyxJQUFJLGFBQVksV0FBVTtBQUFDLHVCQUFNLENBQUM7QUFBQSxrQkFBZ0QsS0FBSyxRQUFRLFFBQVEsUUFBUSxNQUFLLElBQUcsUUFBUSxTQUFRLElBQUcsUUFBUSxXQUFVO0FBQUEsaUJBQUssRUFBQyxLQUFJLHVCQUFzQixPQUFNLFdBQVU7QUFBQyxrQkFBSTtBQUFFLG1CQUFLLEdBQUcsVUFBVSxPQUFPLGlCQUFnQixvQkFBbUIsY0FBYyxNQUFFLEtBQUssR0FBRyxXQUFXLElBQUksTUFBTSxJQUFFO0FBQUEsaUJBQWEsRUFBQyxLQUFJLGFBQVksT0FBTSxXQUFVO0FBQUMscUJBQU8sS0FBSyxHQUFHLFVBQVUsU0FBUztBQUFBLGlCQUFzQixFQUFDLEtBQUksY0FBYSxPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxrQkFBRyxhQUFhLEtBQUssY0FBYTtBQUFFLHFCQUFLLGNBQVksV0FBVyxXQUFVO0FBQUMseUJBQU8sR0FBRTtBQUFBLG1CQUFjO0FBQUEsbUJBQU87QUFBQyx5QkFBUSxNQUFLLEtBQUs7QUFBVSx1QkFBSyxVQUFVLElBQUc7QUFBaUIscUJBQUssb0JBQW9CO0FBQUE7QUFBQSxpQkFBdUIsRUFBQyxLQUFJLGNBQWEsT0FBTSxXQUFVO0FBQUMsMkJBQWEsS0FBSyxjQUFhLEtBQUssb0JBQW9CO0FBQUEsaUJBQW1CLEVBQUMsS0FBSSxzQkFBcUIsT0FBTSxXQUFVO0FBQUMsdUJBQVEsTUFBSyxLQUFLO0FBQVUscUJBQUssVUFBVSxJQUFHO0FBQUEsaUJBQWtCLEVBQUMsS0FBSSxPQUFNLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxtQkFBSyxXQUFXLElBQUksTUFBSyxJQUFFO0FBQUEsaUJBQUssRUFBQyxLQUFJLGlCQUFnQixPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLGtCQUFHLGNBQWE7QUFBWSx1QkFBTyxLQUFLLFdBQVcsTUFBTSxJQUFFLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEdBQUUsSUFBRTtBQUFBO0FBQUssa0JBQUcsaUJBQWlCLEtBQUssS0FBRztBQUFDLG9CQUFJLEtBQUUsR0FBRyxzQkFBc0IsS0FBSyxJQUFHO0FBQUcsZ0JBQUksR0FBRSxXQUFOLElBQWEsRUFBRSw2Q0FBNkMsT0FBTyxPQUFJLEdBQUUsTUFBSyxHQUFFO0FBQUEscUJBQVE7QUFBQyxvQkFBSSxLQUFFLE1BQU0sS0FBSyxTQUFTLGlCQUFpQjtBQUFJLGdCQUFJLEdBQUUsV0FBTixLQUFjLEVBQUUsbURBQW1ELE9BQU8sSUFBRSxPQUFNLEdBQUUsUUFBUSxTQUFTLElBQUU7QUFBQyx5QkFBTyxHQUFFLFdBQVcsTUFBTSxJQUFFLFNBQVMsSUFBRTtBQUFDLDJCQUFPLEdBQUUsSUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFVLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLG1CQUFLLElBQUksSUFBRSxXQUFVO0FBQUMsdUJBQU0sQ0FBQyxJQUFHLEVBQUU7QUFBQTtBQUFNLGtCQUFJLEtBQUUsR0FBRyxRQUFRLEtBQUcsS0FBRSxHQUFFLE1BQUssS0FBRSxHQUFFLE9BQU0sS0FBRSxHQUFFLFFBQU8sS0FBRSxHQUFFO0FBQU0scUJBQU8sTUFBRyxHQUFHLFNBQVMsS0FBRyxHQUFFLEVBQUMsTUFBSyxJQUFFLE9BQU0sSUFBRSxRQUFPLE9BQUk7QUFBQSxpQkFBSSxFQUFDLEtBQUksVUFBUyxPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEdBQUU7QUFBUyxtQkFBSyxhQUFXLEdBQUUsS0FBSyxjQUFZLE1BQUcsS0FBSyxRQUFNLE1BQUssR0FBRyxVQUFVLEtBQUssV0FBVyxjQUFhLEtBQUssUUFBTyx3QkFBdUIsS0FBSyxVQUFVLFNBQVEsSUFBRSxTQUFTLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUUsTUFBSyxLQUFFLEdBQUU7QUFBTyxtQkFBRSxXQUFTLElBQUksR0FBRyxHQUFFLElBQUc7QUFBRyxvQkFBSSxLQUFFLEdBQUUsZ0JBQWdCLE1BQUs7QUFBUSxtQkFBRTtBQUFrQixvQkFBSSxLQUFFLEdBQUUsaUJBQWlCO0FBQUcsbUJBQUUsYUFBWSxHQUFFLFNBQU8sSUFBRSxHQUFFLFFBQVEsU0FBUyxJQUFFLElBQUU7QUFBQyxxQkFBRSxpQkFBaUIsSUFBRSxTQUFTLElBQUU7QUFBQywyQkFBSSxHQUFFLFNBQU8sS0FBRyxHQUFFLGVBQWUsSUFBRSxJQUFFO0FBQUE7QUFBQSxxQkFBTyxHQUFFLGVBQWUsSUFBRSxJQUFFO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksbUJBQWtCLE9BQU0sV0FBVTtBQUFDLGlCQUFHLElBQUksS0FBSyxJQUFHLElBQUksT0FBTyxHQUFFLE1BQUssU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxnQkFBZ0I7QUFBQTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxrQkFBaUIsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsR0FBRTtBQUFXLGtCQUFHLEtBQUssWUFBVSxLQUFHLEtBQUssVUFBUSxDQUFDLEtBQUssT0FBTztBQUFnQix1QkFBTyxLQUFLLGVBQWUsSUFBRSxJQUFFO0FBQUcsY0FBSSxHQUFHLDBCQUEwQixJQUFFLEtBQUssSUFBSSxPQUFPLFNBQVMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsR0FBRSxNQUFJLEdBQUUsR0FBRyxjQUFjLElBQUksT0FBTyxHQUFFLE1BQUssS0FBRSxNQUFHLEdBQUUsYUFBYTtBQUFtQix1QkFBTyxNQUFHLEdBQUUsYUFBYSxtQkFBa0IsS0FBRyxHQUFFLFVBQVU7QUFBQSxpQkFBSyxXQUF0TixJQUE2TixLQUFLLFNBQVEsTUFBSyxLQUFLLGVBQWUsS0FBSyxDQUFDLE1BQUssV0FBVTtBQUFDLHVCQUFPLEdBQUUsZUFBZSxJQUFFLElBQUU7QUFBQSxtQkFBTSxLQUFLLE9BQU8sUUFBUSxTQUFRLE1BQUssMkJBQTBCLEtBQUssZUFBZSxJQUFFLElBQUUsT0FBSSxLQUFLLEtBQUssZUFBZSxLQUFLLENBQUMsTUFBSyxXQUFVO0FBQUMsdUJBQU8sR0FBRSxlQUFlLElBQUUsSUFBRTtBQUFBO0FBQUEsaUJBQVEsRUFBQyxLQUFJLG1CQUFrQixPQUFNLFdBQVU7QUFBQyxtQkFBSyxLQUFHLEdBQUcsS0FBSyxLQUFLLEtBQUksS0FBSyxHQUFHLGFBQWEsb0JBQW1CLEtBQUssS0FBSztBQUFBLGlCQUFNLEVBQUMsS0FBSSxrQkFBaUIsT0FBTSxTQUFTLElBQUU7QUFBQyxpQkFBRSxRQUFRLFNBQVMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsRUFBRSxJQUFFLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcsdUJBQU8sY0FBYyxJQUFJLFlBQVksWUFBWSxPQUFPLEtBQUcsRUFBQyxRQUFPO0FBQUE7QUFBQSxpQkFBUyxFQUFDLEtBQUksa0JBQWlCLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSztBQUFrQixrQkFBSSxLQUFFLElBQUksR0FBRyxNQUFLLEtBQUssSUFBRyxLQUFLLElBQUcsSUFBRTtBQUFNLGtCQUFHLEdBQUUsaUNBQWdDLEtBQUssYUFBYSxJQUFFLFFBQUksS0FBSyxtQkFBa0IsR0FBRyxJQUFJLEtBQUssSUFBRyxJQUFJLE9BQU8sS0FBSyxRQUFRLFNBQVEsaUJBQWlCLE9BQU8sUUFBTyxNQUFLLFNBQVMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsR0FBRSxRQUFRO0FBQUcsc0JBQUcsR0FBRTtBQUFBLGtCQUFjLEtBQUssY0FBWSxPQUFHLEtBQUssZUFBZSxLQUFHLEtBQUssdUJBQXNCLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUUsTUFBSyxLQUFFLEdBQUU7QUFBRyxxQkFBSyxXQUFXLGFBQWEsSUFBRTtBQUFBO0FBQUcsbUJBQUssY0FBYSxLQUFLLFlBQVUsS0FBRyxLQUFLLHNCQUFxQixLQUFLO0FBQUEsaUJBQWlCLEVBQUMsS0FBSSwyQkFBMEIsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLG1CQUFLLFdBQVcsV0FBVyxxQkFBb0IsQ0FBQyxJQUFFO0FBQUksa0JBQUksS0FBRSxLQUFLLFFBQVEsS0FBRyxLQUFFLE1BQUcsR0FBRyxVQUFVLElBQUUsS0FBSyxRQUFRO0FBQVcsa0JBQUcsTUFBRyxDQUFDLEdBQUUsWUFBWSxPQUFLLEVBQUMsTUFBRyxDQUFDLFNBQVMsSUFBRSxJQUFFO0FBQUMsdUJBQU8sS0FBSyxVQUFVLFFBQUssS0FBSyxVQUFVO0FBQUEsZ0JBQUksR0FBRSxTQUFRLEdBQUU7QUFBVSx1QkFBTyxHQUFFLGtCQUFpQjtBQUFBLGlCQUFJLEVBQUMsS0FBSSxnQkFBZSxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsSUFBRyxLQUFFLE9BQUcsS0FBRSxJQUFJO0FBQUkscUJBQU8sR0FBRSxNQUFNLFNBQVEsU0FBUyxJQUFFO0FBQUMsbUJBQUUsV0FBVyxXQUFXLGVBQWMsQ0FBQztBQUFJLG9CQUFJLEtBQUUsR0FBRSxRQUFRO0FBQUcsc0JBQUcsR0FBRTtBQUFBLGtCQUFjLEdBQUUsTUFBTSxpQkFBZ0IsU0FBUyxJQUFFO0FBQUMsdUJBQU8sS0FBRTtBQUFBLGtCQUFLLEdBQUUsT0FBTyxXQUFVLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUUsd0JBQXdCLElBQUUsT0FBSSxHQUFFLElBQUksR0FBRTtBQUFBLGtCQUFNLEdBQUUsTUFBTSxXQUFVLFNBQVMsSUFBRTtBQUFDLG1CQUFFLElBQUksR0FBRSxPQUFLLEdBQUUsUUFBUSxJQUFHO0FBQUEsa0JBQWMsR0FBRSxNQUFNLGFBQVksU0FBUyxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFLFlBQVk7QUFBRyxnQkFBVSxPQUFPLE1BQWpCLFlBQW9CLEFBQUssR0FBRSxRQUFRLFFBQWYsTUFBbUIsR0FBRSxLQUFLO0FBQUcsb0JBQUksS0FBRSxHQUFFLFFBQVE7QUFBRyxzQkFBRyxHQUFFLFlBQVk7QUFBQSxrQkFBSyxHQUFFLFdBQVUsTUFBRyxLQUFLLDZCQUE2QixLQUFHO0FBQUEsaUJBQUksRUFBQyxLQUFJLG1CQUFrQixPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFO0FBQUssaUJBQUcsZ0JBQWdCLEtBQUssSUFBRyxLQUFLLElBQUksUUFBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLFVBQVU7QUFBQTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxnQkFBZSxPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssS0FBSyxTQUFTLEtBQUssSUFBSTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxxQkFBb0IsT0FBTSxTQUFTLElBQUU7QUFBQyxxQkFBTyxHQUFFLE9BQUssS0FBSyxLQUFHLE9BQUssS0FBSyxTQUFTLEdBQUUsYUFBYSx1QkFBdUIsR0FBRTtBQUFBLGlCQUFNLEVBQUMsS0FBSSxxQkFBb0IsT0FBTSxTQUFTLElBQUU7QUFBQyx1QkFBUSxNQUFLLEtBQUssS0FBSztBQUFTLHlCQUFRLE1BQUssS0FBSyxLQUFLLFNBQVM7QUFBRyxzQkFBRyxPQUFJO0FBQUUsMkJBQU8sS0FBSyxLQUFLLFNBQVMsSUFBRyxJQUFHO0FBQUEsaUJBQVksRUFBQyxLQUFJLGFBQVksT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBRyxDQUFDLEtBQUssYUFBYSxHQUFFLEtBQUk7QUFBQyxvQkFBSSxLQUFFLElBQUksR0FBRSxJQUFFLEtBQUssWUFBVztBQUFNLHVCQUFPLEtBQUssS0FBSyxTQUFTLEtBQUssSUFBSSxHQUFFLE1BQUksSUFBRSxHQUFFLFFBQU8sS0FBSyxjQUFhO0FBQUE7QUFBQSxpQkFBTSxFQUFDLEtBQUksaUJBQWdCLE9BQU0sV0FBVTtBQUFDLHFCQUFPLEtBQUs7QUFBQSxpQkFBYyxFQUFDLEtBQUksV0FBVSxPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLGNBQWEsQUFBSSxLQUFLLGVBQVQsS0FBc0IsTUFBSyxTQUFPLEtBQUssT0FBTyxRQUFRLFFBQU0sS0FBSztBQUFBLGlCQUE2QixFQUFDLEtBQUksMkJBQTBCLE9BQU0sV0FBVTtBQUFDLG1CQUFLLGdCQUFlLEtBQUssZUFBZSxRQUFRLFNBQVMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsRUFBRSxJQUFFLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcsbUJBQUUsaUJBQWU7QUFBQSxrQkFBTSxLQUFLLGlCQUFlO0FBQUEsaUJBQUssRUFBQyxLQUFJLFVBQVMsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxrQkFBRyxLQUFLLG1CQUFpQixLQUFLLFdBQVc7QUFBaUIsdUJBQU8sS0FBSyxhQUFhLEtBQUssRUFBQyxNQUFLLElBQUUsUUFBTztBQUFJLG1CQUFLLFNBQVMsVUFBVTtBQUFHLGtCQUFJLEtBQUU7QUFBRyxtQkFBSyxTQUFTLG9CQUFvQixNQUFHLEtBQUssV0FBVyxLQUFLLDRCQUEyQixXQUFVO0FBQUMsbUJBQUcsZUFBZSxHQUFFLElBQUcsR0FBRSxTQUFTLGNBQWMsS0FBSSxRQUFRLFNBQVMsSUFBRTtBQUFDLHFCQUFFLGVBQWUsR0FBRSxTQUFTLGFBQWEsSUFBRSxLQUFHLE9BQUssTUFBRTtBQUFBO0FBQUEsbUJBQVEsRUFBRSxPQUFJLEtBQUssV0FBVyxLQUFLLHVCQUFzQixXQUFVO0FBQUMsb0JBQUksS0FBRSxHQUFFLGdCQUFnQixJQUFFLFdBQVUsS0FBRSxJQUFJLEdBQUcsSUFBRSxHQUFFLElBQUcsR0FBRSxJQUFHLElBQUU7QUFBTSxxQkFBRSxHQUFFLGFBQWEsSUFBRTtBQUFBLGtCQUFNLEtBQUssZUFBZSxLQUFHLE1BQUcsS0FBSztBQUFBLGlCQUFvQixFQUFDLEtBQUksbUJBQWtCLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUsscUJBQU8sS0FBSyxXQUFXLEtBQUssa0JBQWtCLE9BQU8sSUFBRSxNQUFLLFdBQVU7QUFBQyxvQkFBSSxLQUFFLEdBQUUsR0FBRyxTQUFRLEtBQUUsS0FBRSxHQUFFLFNBQVMsY0FBYyxJQUFHLE9BQU8sR0FBRSxlQUFhLE1BQUssS0FBRSxHQUFFLFNBQVMsU0FBUztBQUFHLHVCQUFNLElBQUksT0FBTyxJQUFFLEtBQUssT0FBTyxJQUFFLE1BQU0sT0FBTyxJQUFFO0FBQUE7QUFBQSxpQkFBUyxFQUFDLEtBQUksa0JBQWlCLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBRyxFQUFFO0FBQUcsdUJBQU07QUFBRyxrQkFBSSxLQUFFLEtBQUssU0FBUyxrQkFBa0IsS0FBRyxLQUFFLElBQUksR0FBRyxNQUFLLEtBQUssSUFBRyxLQUFLLElBQUcsSUFBRTtBQUFHLHFCQUFPLEtBQUssYUFBYSxJQUFFO0FBQUEsaUJBQU0sRUFBQyxLQUFJLFdBQVUsT0FBTSxTQUFTLElBQUU7QUFBQyxxQkFBTyxLQUFLLFVBQVUsR0FBRyxVQUFVO0FBQUEsaUJBQU0sRUFBQyxLQUFJLFdBQVUsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBRyxDQUFDLEdBQUcsVUFBVSxPQUFJLEdBQUUsY0FBYTtBQUFDLG9CQUFJLEtBQUUsR0FBRSxhQUFhLFlBQVksT0FBTyxZQUFVLEdBQUUsYUFBYSxLQUFLLFFBQVE7QUFBUyxvQkFBRyxDQUFDLE1BQUcsS0FBSyxZQUFZLEtBQUc7QUFBQyxzQkFBSSxLQUFFLEtBQUssV0FBVyxpQkFBaUI7QUFBRyxzQkFBRyxJQUFFO0FBQUMsdUJBQUUsTUFBSSxFQUFFLHVCQUF1QixPQUFPLElBQUUsa0RBQWlEO0FBQUcsd0JBQUksS0FBRSxJQUFJLEdBQUcsTUFBSyxJQUFFO0FBQUcsMkJBQU8sS0FBSyxVQUFVLEdBQUcsVUFBVSxHQUFFLE9BQUssSUFBRTtBQUFBO0FBQUUsa0JBQU8sT0FBUCxRQUFVLEVBQUUsMkJBQTJCLE9BQU8sSUFBRSxNQUFLO0FBQUE7QUFBQTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFO0FBQUMsaUJBQUUsZUFBYyxHQUFFLGVBQWMsT0FBTyxLQUFLLFVBQVUsR0FBRyxVQUFVLEdBQUU7QUFBQSxpQkFBTyxFQUFDLEtBQUksdUJBQXNCLE9BQU0sV0FBVTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyxhQUFhLFFBQVEsU0FBUyxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFLE1BQUssS0FBRSxHQUFFO0FBQU8sdUJBQU8sR0FBRSxPQUFPLElBQUU7QUFBQSxrQkFBSyxLQUFLLGVBQWE7QUFBQSxpQkFBSyxFQUFDLEtBQUksYUFBWSxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLG1CQUFLLFdBQVcsVUFBVSxLQUFLLFNBQVEsSUFBRSxTQUFTLElBQUU7QUFBQyxtQkFBRSxrQkFBZ0IsR0FBRSxLQUFLLGVBQWUsS0FBSyxDQUFDLElBQUUsV0FBVTtBQUFDLHlCQUFPLEdBQUU7QUFBQSxzQkFBTSxHQUFFO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksZUFBYyxPQUFNLFdBQVU7QUFBQyxrQkFBSSxLQUFFO0FBQUssbUJBQUssV0FBVyxVQUFVLEtBQUssU0FBUSxRQUFPLFNBQVMsSUFBRTtBQUFDLG1CQUFFLFVBQVUsVUFBUyxJQUFFLFNBQVMsSUFBRTtBQUFDLHNCQUFJLEtBQUUsR0FBRSxNQUFLLEtBQUUsR0FBRTtBQUFPLHlCQUFPLEdBQUUsT0FBTyxJQUFFO0FBQUE7QUFBQSxrQkFBTyxLQUFLLFVBQVUsWUFBVyxTQUFTLElBQUU7QUFBQyxvQkFBSSxLQUFFLEdBQUUsSUFBRyxLQUFFLEdBQUU7QUFBTSx1QkFBTyxHQUFFLFdBQVcsRUFBQyxJQUFHLElBQUUsT0FBTTtBQUFBLGtCQUFNLEtBQUssVUFBVSxjQUFhLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsWUFBWTtBQUFBLGtCQUFLLEtBQUssVUFBVSxpQkFBZ0IsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxlQUFlO0FBQUEsa0JBQUssS0FBSyxRQUFRLFFBQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxRQUFRO0FBQUEsa0JBQUssS0FBSyxRQUFRLFFBQVEsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxRQUFRO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksc0JBQXFCLE9BQU0sV0FBVTtBQUFDLHVCQUFRLE1BQUssS0FBSyxLQUFLLFNBQVMsS0FBSztBQUFJLHFCQUFLLGFBQWEsSUFBRztBQUFBLGlCQUFZLEVBQUMsS0FBSSxrQkFBaUIsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEdBQUUsSUFBRyxLQUFFLEdBQUUsTUFBSyxLQUFFLEdBQUUsT0FBTSxLQUFFLEtBQUssVUFBVTtBQUFHLG1CQUFLLFdBQVcsZ0JBQWdCLElBQUUsSUFBRTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUssbUJBQUssT0FBSyxLQUFLLFVBQVUsS0FBRyxLQUFLLFdBQVcsYUFBYSxJQUFFO0FBQUEsaUJBQUssRUFBQyxLQUFJLGFBQVksT0FBTSxTQUFTLElBQUU7QUFBQyxxQkFBTyxHQUFFLFdBQVcsT0FBSyxHQUFHLE9BQU8sT0FBTyxTQUFTLFVBQVMsTUFBTSxPQUFPLE9BQU8sU0FBUyxNQUFNLE9BQU8sTUFBRztBQUFBLGlCQUFJLEVBQUMsS0FBSSxjQUFhLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQU0sbUJBQUssV0FBVyxTQUFTLElBQUU7QUFBQSxpQkFBSyxFQUFDLEtBQUksZUFBYyxPQUFNLFdBQVU7QUFBQyxxQkFBTyxLQUFLO0FBQUEsaUJBQVksRUFBQyxLQUFJLFFBQU8sT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssbUJBQUssVUFBUyxNQUFLLGVBQWEsS0FBSyxXQUFXLGdCQUFnQixFQUFDLElBQUcsS0FBSyxNQUFLLE1BQUssZUFBYSxLQUFLLGVBQWEsV0FBVTtBQUFDLHVCQUFPLE1BQUcsR0FBRSxJQUFFLEdBQUU7QUFBQSxpQkFBWSxLQUFLLFdBQVcsU0FBUyxNQUFLLEVBQUMsU0FBUSxTQUFJLFdBQVU7QUFBQyx1QkFBTyxHQUFFLFFBQVEsT0FBTyxRQUFRLE1BQUssU0FBUyxJQUFFO0FBQUMseUJBQU8sR0FBRSxPQUFPO0FBQUEsbUJBQUssUUFBUSxTQUFRLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEdBQUUsWUFBWTtBQUFBLG1CQUFLLFFBQVEsV0FBVSxXQUFVO0FBQUMseUJBQU8sR0FBRSxZQUFZLEVBQUMsUUFBTztBQUFBO0FBQUE7QUFBQSxpQkFBa0IsRUFBQyxLQUFJLGVBQWMsT0FBTSxTQUFTLElBQUU7QUFBQyxxQkFBTyxJQUFFLFlBQVUsR0FBRSxrQkFBaUIsTUFBSyxjQUFZLE9BQUcsS0FBSyxRQUFRLFVBQVMsR0FBRSxXQUFTLEtBQUssV0FBVyxHQUFFLFlBQVUsR0FBRSxnQkFBYyxLQUFLLGVBQWUsR0FBRSxpQkFBZ0IsTUFBSyxJQUFJLFNBQVEsV0FBVTtBQUFDLHVCQUFNLENBQUMsa0JBQWlCO0FBQUEsa0JBQUssS0FBSyxXQUFXLGlCQUFpQjtBQUFBLGlCQUFTLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUcsQ0FBQyxLQUFLLGVBQWM7QUFBQyxvQkFBRyxLQUFLLG1CQUFpQixBQUFXLFNBQVMsb0JBQXBCLFlBQXFDLEtBQUssV0FBVyxvQkFBa0IsQUFBVSxPQUFWO0FBQVkseUJBQU8sS0FBSyxXQUFXLGlCQUFpQjtBQUFNLHFCQUFLLHNCQUFxQixLQUFLLFdBQVcsa0JBQWtCLE9BQU0sU0FBUyxpQkFBZSxTQUFTLGNBQWMsUUFBTyxLQUFLLFdBQVcsZ0JBQWMsS0FBSyxXQUFXO0FBQUE7QUFBQSxpQkFBUSxFQUFDLEtBQUksV0FBVSxPQUFNLFNBQVMsSUFBRTtBQUFDLG1CQUFLLFFBQVEsS0FBRyxLQUFLLElBQUksU0FBUSxXQUFVO0FBQUMsdUJBQU0sQ0FBQyxnQkFBZTtBQUFBLGtCQUFLLEtBQUssV0FBVyxnQkFBYyxLQUFLO0FBQUEsaUJBQWlCLEVBQUMsS0FBSSxnQkFBZSxPQUFNLFdBQVU7QUFBQyxtQkFBSyxZQUFVLEdBQUcsY0FBYyxRQUFPLDBCQUF5QixFQUFDLElBQUcsS0FBSyxNQUFLLE1BQUssWUFBVSxLQUFLLGNBQWEsS0FBSyxvQkFBb0Isb0JBQW1CO0FBQUEsaUJBQWUsRUFBQyxLQUFJLGlCQUFnQixPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLE1BQUssS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHLFdBQVU7QUFBQTtBQUFHLGtCQUFHLEtBQUssZUFBYztBQUFDLG9CQUFJLEtBQUUsRUFBRSxLQUFFLE9BQUksQ0FBQyxNQUFLLEtBQUksSUFBRyxLQUFFLEdBQUUsSUFBRyxLQUFFLEVBQUUsR0FBRSxJQUFHLEdBQUcsSUFBRyxLQUFFLFdBQVU7QUFBQTtBQUFHLHVCQUFPLE1BQUcsQUFBTyxHQUFFLGFBQWEsS0FBSyxRQUFRLHFCQUFuQyxRQUFzRCxNQUFFLEtBQUssV0FBVyxnQkFBZ0IsRUFBQyxNQUFLLFdBQVUsUUFBTyxRQUFLLEFBQVUsT0FBTyxHQUFFLE9BQW5CLFlBQXdCLE9BQU8sR0FBRSxLQUFJLEtBQUssV0FBVyxTQUFTLE1BQUssRUFBQyxTQUFRLFFBQUksV0FBVTtBQUFDLHlCQUFPLEdBQUUsUUFBUSxLQUFLLElBQUUsSUFBRSxLQUFLLFFBQVEsTUFBSyxTQUFTLElBQUU7QUFBQyx3QkFBSSxLQUFFO0FBQUssb0JBQU8sT0FBUCxRQUFVLEdBQUUsU0FBUyxLQUFHLEdBQUUsUUFBTyxNQUFFLEdBQUUsVUFBVSxVQUFTLEdBQUUsTUFBSyxTQUFTLElBQUU7QUFBQywwQkFBSSxLQUFFLEdBQUUsTUFBSyxLQUFFLEdBQUU7QUFBTyx5QkFBRSxPQUFPLElBQUU7QUFBQSx5QkFBTSxHQUFFLFlBQVUsR0FBRSxXQUFXLEdBQUUsV0FBVSxHQUFFLGNBQVksR0FBRSxZQUFZLEdBQUUsYUFBWSxHQUFFLGlCQUFlLEdBQUUsZUFBZSxHQUFFLGdCQUFlLE1BQUksR0FBRSxJQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVUsRUFBQyxLQUFJLFlBQVcsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssaUJBQUcsSUFBSSxLQUFLLElBQUcsSUFBSSxPQUFPLEdBQUUsTUFBTSxPQUFPLElBQUUsT0FBTSxTQUFTLElBQUU7QUFBQyxtQkFBRSxnQkFBZ0IsSUFBRyxBQUFPLEdBQUUsYUFBYSx5QkFBdEIsUUFBNkMsSUFBRSxXQUFTLE9BQUcsR0FBRSxnQkFBZ0IsdUJBQXNCLEFBQU8sR0FBRSxhQUFhLHlCQUF0QixRQUE2QyxJQUFFLFdBQVMsT0FBRyxHQUFFLGdCQUFnQix1QkFBc0IsRUFBRSxRQUFRLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEdBQUcsWUFBWSxJQUFFO0FBQUE7QUFBSyxvQkFBSSxLQUFFLEdBQUUsYUFBYTtBQUFpQyxnQkFBTyxPQUFQLFFBQVcsSUFBRSxZQUFVLElBQUUsR0FBRSxnQkFBZ0I7QUFBa0Msb0JBQUksS0FBRSxHQUFHLFFBQVEsSUFBRTtBQUFHLG9CQUFHLElBQUU7QUFBQyxzQkFBSSxLQUFFLEdBQUUsd0JBQXdCLElBQUU7QUFBRyxxQkFBRyxRQUFRLElBQUUsSUFBRSxHQUFFLFdBQVcscUJBQW9CLE1BQUcsR0FBRSxhQUFZLEdBQUcsY0FBYyxJQUFFO0FBQUE7QUFBQTtBQUFBLGlCQUFRLEVBQUMsS0FBSSxVQUFTLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFLEtBQUssT0FBTSxLQUFFLEtBQUssUUFBUTtBQUFnQixxQkFBTyxHQUFFLFFBQVEsU0FBUyxJQUFFO0FBQUMsbUJBQUUsVUFBVSxJQUFJLE9BQU8sT0FBTyxJQUFFLGNBQWEsR0FBRSxhQUFhLEdBQUU7QUFBRyxvQkFBSSxLQUFFLEdBQUUsYUFBYTtBQUFHLGdCQUFPLE9BQVAsUUFBVyxJQUFFLGFBQWEsb0NBQWtDLEdBQUUsYUFBYSxpQ0FBZ0MsR0FBRSxZQUFXLEdBQUUsWUFBVTtBQUFBLGtCQUFLLENBQUMsSUFBRTtBQUFBLGlCQUFLLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxHQUFFLGdCQUFjLEdBQUUsYUFBYTtBQUFHLHFCQUFPLEtBQUUsU0FBUyxNQUFHO0FBQUEsaUJBQU8sRUFBQyxLQUFJLHFCQUFvQixPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMscUJBQU8sR0FBRSxhQUFhLEtBQUssUUFBUSxhQUFXLEtBQUssbUJBQW1CLE1BQUc7QUFBQSxpQkFBTyxFQUFDLEtBQUksc0JBQXFCLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLHFCQUFPLEtBQUUsR0FBRyxHQUFFLFFBQVEsSUFBSSxPQUFPLEdBQUUsT0FBTSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLFlBQVksT0FBSSxHQUFFLFlBQVk7QUFBQSxtQkFBSztBQUFBLGlCQUFPLEVBQUMsS0FBSSxpQkFBZ0IsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBRyxDQUFDLEtBQUs7QUFBYyx1QkFBTyxLQUFLLElBQUksUUFBTyxXQUFVO0FBQUMseUJBQU0sQ0FBQyxxREFBb0QsSUFBRTtBQUFBLG9CQUFLO0FBQUcsa0JBQUksS0FBRSxFQUFFLEtBQUssT0FBTyxJQUFHLFNBQVEsSUFBRyxLQUFFLEdBQUUsSUFBRyxLQUFFLEdBQUU7QUFBRyxxQkFBTyxLQUFLLGNBQWMsV0FBVTtBQUFDLHVCQUFNLENBQUMsSUFBRTtBQUFBLGlCQUFJLFNBQVEsRUFBQyxNQUFLLFFBQU8sT0FBTSxJQUFFLE9BQU0sSUFBRSxLQUFJLEtBQUssbUJBQW1CLE9BQUksU0FBUyxJQUFFLElBQUU7QUFBQyx1QkFBTyxHQUFFLElBQUU7QUFBQSxrQkFBSztBQUFBLGlCQUFJLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFLElBQUU7QUFBQyx1QkFBUSxLQUFFLEtBQUssUUFBUSxXQUFVLEtBQUUsR0FBRSxLQUFFLEdBQUUsV0FBVyxRQUFPLE1BQUk7QUFBQyxvQkFBSSxLQUFFLEdBQUUsV0FBVyxJQUFHO0FBQUssbUJBQUUsV0FBVyxPQUFLLElBQUUsR0FBRSxRQUFRLElBQUUsT0FBSyxHQUFFLGFBQWE7QUFBQTtBQUFJLHFCQUFPLEFBQVMsR0FBRSxVQUFYLFVBQW1CLElBQUUsUUFBTSxHQUFFLE9BQU0sQUFBVSxHQUFFLFlBQVosV0FBcUIsRUFBRSxRQUFRLEdBQUUsU0FBTyxLQUFHLENBQUMsR0FBRSxXQUFTLE9BQU8sR0FBRSxRQUFPO0FBQUEsaUJBQUksRUFBQyxLQUFJLGFBQVksT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyxjQUFjLFdBQVU7QUFBQyx1QkFBTyxHQUFFLE9BQU8sQ0FBQyxLQUFHO0FBQUEsaUJBQUksU0FBUSxFQUFDLE1BQUssSUFBRSxPQUFNLElBQUUsT0FBTSxLQUFLLFlBQVksSUFBRSxLQUFHLEtBQUksS0FBSyxrQkFBa0IsSUFBRTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQyxrQkFBSSxLQUFFO0FBQUssbUJBQUssY0FBYyxXQUFVO0FBQUMsdUJBQU8sR0FBRSxPQUFPLENBQUMsS0FBRztBQUFBLGlCQUFJLFNBQVEsRUFBQyxNQUFLLElBQUUsT0FBTSxJQUFFLE9BQU0sS0FBSyxZQUFZLElBQUUsS0FBRyxLQUFJLEtBQUssa0JBQWtCLElBQUU7QUFBQSxpQkFBTyxFQUFDLEtBQUksb0JBQW1CLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxXQUFVO0FBQUE7QUFBRyxtQkFBSyxXQUFXLGFBQWEsR0FBRSxNQUFLLFNBQVMsSUFBRSxJQUFFO0FBQUMsbUJBQUUsY0FBYyxNQUFLLFlBQVcsRUFBQyxPQUFNLEdBQUUsYUFBYSxHQUFFLFFBQVEsY0FBYSxLQUFJLEdBQUUsYUFBYSxJQUFHLFdBQVUsSUFBRSxVQUFTLElBQUUsS0FBSSxHQUFFLGtCQUFrQixHQUFFLE1BQUssT0FBSTtBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLGFBQVksT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsTUFBSyxLQUFFLEtBQUssa0JBQWtCLEdBQUUsTUFBSyxLQUFHLEtBQUUsV0FBVTtBQUFDLHVCQUFPLEdBQUUsT0FBTyxDQUFDLElBQUUsR0FBRSxPQUFNO0FBQUEsaUJBQVcsS0FBRSxHQUFHLEdBQUUsTUFBSyxFQUFDLFNBQVEsR0FBRTtBQUFPLGlCQUFFLFNBQU8sR0FBRSxNQUFNLFNBQU8sS0FBRyxHQUFHLFdBQVcsSUFBRSxNQUFNLEtBQUssR0FBRTtBQUFRLGtCQUFJLEtBQUUsRUFBQyxNQUFLLFFBQU8sT0FBTSxJQUFFLE9BQU0sSUFBRSxTQUFRLEdBQUcsaUJBQWlCLEtBQUcsS0FBSTtBQUFHLG1CQUFLLGNBQWMsSUFBRSxTQUFRLElBQUUsU0FBUyxJQUFFO0FBQUMsb0JBQUcsR0FBRyxVQUFVLElBQUUsR0FBRSxXQUFXLFFBQVEsa0JBQWlCLEdBQUcsY0FBYyxPQUFJLEFBQU8sR0FBRSxhQUFhLDRCQUF0QixNQUE4QztBQUFDLHNCQUFHLEdBQUcsdUJBQXVCLElBQUcsU0FBTyxHQUFFO0FBQUMsd0JBQUksS0FBRSxFQUFFLE1BQUksSUFBRyxLQUFFLEdBQUU7QUFBRyx1QkFBRTtBQUFHLHVCQUFFLFlBQVksR0FBRSxNQUFLLElBQUUsSUFBRSxJQUFFLFNBQVMsSUFBRTtBQUFDLDRCQUFHLEdBQUUsS0FBRyxHQUFFLHNCQUFzQixHQUFFO0FBQUE7QUFBQTtBQUFBO0FBQWMsd0JBQUcsR0FBRTtBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLHlCQUF3QixPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUUsS0FBSyxtQkFBbUI7QUFBRyxrQkFBRyxJQUFFO0FBQUMsb0JBQUksS0FBRSxFQUFFLElBQUUsSUFBRyxLQUFHLElBQUUsSUFBRyxHQUFFLElBQUcsR0FBRTtBQUFJLHFCQUFLLGFBQWEsS0FBRztBQUFBO0FBQUEsaUJBQU8sRUFBQyxLQUFJLHNCQUFxQixPQUFNLFNBQVMsSUFBRTtBQUFDLHFCQUFPLEtBQUssWUFBWSxLQUFLLFNBQVMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsRUFBRSxJQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcsbUJBQUU7QUFBRyx1QkFBTyxHQUFFLFdBQVc7QUFBQTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxrQkFBaUIsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUcsS0FBSyxtQkFBbUI7QUFBRyx1QkFBTTtBQUFHLG1CQUFLLFlBQVksS0FBSyxDQUFDLElBQUUsSUFBRTtBQUFBLGlCQUFNLEVBQUMsS0FBSSxnQkFBZSxPQUFNLFNBQVMsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxtQkFBSyxjQUFZLEtBQUssWUFBWSxPQUFPLFNBQVMsSUFBRTtBQUFDLG9CQUFJLEtBQUUsRUFBRSxJQUFFLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcsbUJBQUU7QUFBRyx1QkFBTSxDQUFDLEdBQUUsV0FBVyxPQUFLLElBQUUsU0FBUyxLQUFHO0FBQUE7QUFBQSxpQkFBUSxFQUFDLEtBQUksa0JBQWlCLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsU0FBUyxJQUFFO0FBQUMsdUJBQU0sQ0FBRSxHQUFFLElBQUUsR0FBRyxPQUFPLEdBQUUsUUFBUSxXQUFVLFlBQVcsR0FBRSxTQUFPLEVBQUUsSUFBRSwwQkFBeUIsR0FBRTtBQUFBLGlCQUFRLEtBQUUsU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxhQUFhLEdBQUUsUUFBUTtBQUFBLGlCQUFrQixLQUFFLFNBQVMsSUFBRTtBQUFDLHVCQUFNLEFBQVUsR0FBRSxXQUFaO0FBQUEsaUJBQXFCLEtBQUUsU0FBUyxJQUFFO0FBQUMsdUJBQU0sQ0FBQyxTQUFRLFlBQVcsVUFBVSxTQUFTLEdBQUU7QUFBQSxpQkFBVSxLQUFFLFdBQVU7QUFBQyxvQkFBSSxLQUFFLE1BQU0sS0FBSyxHQUFFLFdBQVUsS0FBRSxHQUFFLE9BQU8sS0FBRyxLQUFFLEdBQUUsT0FBTyxJQUFHLE9BQU8sS0FBRyxLQUFFLEdBQUUsT0FBTyxJQUFHLE9BQU87QUFBRyx1QkFBTyxHQUFFLFFBQVEsU0FBUyxJQUFFO0FBQUMscUJBQUUsYUFBYSxxQkFBb0IsR0FBRSxXQUFVLEdBQUUsV0FBUztBQUFBLG9CQUFLLEdBQUUsUUFBUSxTQUFTLElBQUU7QUFBQyxxQkFBRSxhQUFhLHFCQUFvQixHQUFFLFdBQVUsR0FBRSxXQUFTLE1BQUcsR0FBRSxTQUFRLElBQUUsYUFBYSxxQkFBb0IsR0FBRSxXQUFVLEdBQUUsV0FBUztBQUFBLG9CQUFNLEdBQUUsYUFBYSxHQUFFLFFBQVEsaUJBQWdCLEtBQUksR0FBRSxPQUFPLENBQUMsSUFBRyxPQUFPLElBQUcsT0FBTyxJQUFHLE9BQU8sS0FBRztBQUFBLGlCQUFXLEtBQUUsS0FBSyxrQkFBa0IsSUFBRTtBQUFHLGtCQUFHLEdBQUcscUJBQXFCLEtBQUc7QUFBQyxvQkFBSSxLQUFFLEVBQUUsTUFBSSxJQUFHLEtBQUUsR0FBRTtBQUFHLG1CQUFFO0FBQUcsdUJBQU8sS0FBSyxlQUFlLElBQUUsSUFBRSxXQUFVO0FBQUMseUJBQU8sR0FBRSxlQUFlLElBQUUsSUFBRSxJQUFFO0FBQUE7QUFBQTtBQUFLLGtCQUFHLEdBQUcsd0JBQXdCLElBQUcsU0FBTyxHQUFFO0FBQUMsb0JBQUksS0FBRSxFQUFFLE1BQUksSUFBRyxLQUFFLEdBQUUsSUFBRyxLQUFFLEdBQUUsSUFBRyxLQUFFLFdBQVU7QUFBQyx5QkFBTSxDQUFDLElBQUU7QUFBQTtBQUFJLHFCQUFLLFlBQVksSUFBRSxJQUFFLElBQUUsSUFBRSxTQUFTLElBQUU7QUFBQyxzQkFBSSxLQUFFLEdBQUcsSUFBRTtBQUFJLHFCQUFFLGNBQWMsSUFBRSxTQUFRLEVBQUMsTUFBSyxRQUFPLE9BQU0sSUFBRSxPQUFNLElBQUUsS0FBSSxNQUFHO0FBQUE7QUFBQSxxQkFBUztBQUFDLG9CQUFJLEtBQUUsR0FBRztBQUFHLHFCQUFLLGNBQWMsSUFBRSxTQUFRLEVBQUMsTUFBSyxRQUFPLE9BQU0sSUFBRSxPQUFNLElBQUUsS0FBSSxNQUFHO0FBQUE7QUFBQSxpQkFBTSxFQUFDLEtBQUksZUFBYyxPQUFNLFNBQVMsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsS0FBSztBQUFVLGlCQUFHLGlCQUFpQixJQUFHLFFBQVEsU0FBUyxJQUFFO0FBQUMsb0JBQUksS0FBRSxJQUFJLEdBQUcsSUFBRSxJQUFFO0FBQUcsbUJBQUUsVUFBVSxNQUFHO0FBQUUsb0JBQUksS0FBRSxHQUFFLFVBQVUsSUFBSSxTQUFTLElBQUU7QUFBQyx5QkFBTyxHQUFFO0FBQUEsb0JBQXVCLEtBQUUsRUFBQyxLQUFJLEdBQUUsYUFBYSxJQUFHLFNBQVEsSUFBRSxLQUFJLEdBQUUsa0JBQWtCLEdBQUUsTUFBSztBQUFJLG1CQUFFLElBQUksVUFBUyxXQUFVO0FBQUMseUJBQU0sQ0FBQyw2QkFBNEI7QUFBQSxvQkFBSyxHQUFFLGNBQWMsTUFBSyxnQkFBZSxJQUFFLFNBQVMsSUFBRTtBQUFDLHNCQUFHLEdBQUUsSUFBSSxVQUFTLFdBQVU7QUFBQywyQkFBTSxDQUFDLDBCQUF5QjtBQUFBLHNCQUFLLEdBQUUsT0FBTTtBQUFDLHVCQUFFLFNBQVM7QUFBRyx3QkFBSSxLQUFFLEVBQUUsR0FBRSxPQUFNLElBQUcsS0FBRSxHQUFFLElBQUcsS0FBRSxHQUFFO0FBQUcsdUJBQUUsSUFBSSxVQUFTLFdBQVU7QUFBQyw2QkFBTSxDQUFDLG1CQUFtQixPQUFPLEtBQUc7QUFBQTtBQUFBLHlCQUFTO0FBQUMsdUJBQUUsa0JBQWtCLElBQUUsU0FBUyxJQUFFO0FBQUMseUJBQUUsUUFBUSxRQUFRLFdBQVU7QUFBQywyQkFBRSxjQUFZLE1BQUc7QUFBQTtBQUFBLHVCQUFPLEdBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbUIsRUFBQyxLQUFJLG9CQUFtQixPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLG1CQUFLLFdBQVcsYUFBYSxJQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMsb0JBQUksS0FBRSxHQUFFLFNBQVMsSUFBRyxLQUFFLEdBQUUsYUFBYSxHQUFFLFFBQVEsb0JBQWtCLEdBQUUsYUFBYSxHQUFFLFFBQVE7QUFBVyxtQkFBRSxVQUFVLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBQTtBQUFBLGlCQUFPLEVBQUMsS0FBSSxpQkFBZ0IsT0FBTSxTQUFTLElBQUUsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxNQUFLLEtBQUUsS0FBSyxXQUFXLGVBQWUsS0FBRyxLQUFFLEtBQUUsV0FBVTtBQUFDLHVCQUFPLEdBQUUsT0FBTyxDQUFDLEtBQUc7QUFBQSxrQkFBVTtBQUFLLG1CQUFLLGNBQWMsSUFBRSxRQUFPLEVBQUMsS0FBSSxNQUFHLFNBQVMsSUFBRTtBQUFDLG1CQUFFLGdCQUFjLEdBQUUsV0FBVyxZQUFZLElBQUUsTUFBSyxJQUFFLE1BQUksSUFBRSxXQUFXLGtCQUFrQixPQUFLLElBQUUsT0FBSyxLQUFHLEdBQUUsdUJBQXNCLE1BQUcsR0FBRTtBQUFBLGlCQUFNLFFBQVEsV0FBVSxXQUFVO0FBQUMsdUJBQU8sR0FBRSxXQUFXLFNBQVMsT0FBTyxTQUFTO0FBQUE7QUFBQSxpQkFBVSxFQUFDLEtBQUksb0JBQW1CLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRTtBQUFLLGtCQUFHLEFBQUksS0FBSyxjQUFUO0FBQW1CLHVCQUFNO0FBQUcsa0JBQUksS0FBRSxLQUFLLFFBQVEsV0FBVSxLQUFFLFNBQVMsY0FBYztBQUFZLHFCQUFPLEdBQUUsWUFBVSxJQUFFLEdBQUcsSUFBSSxLQUFLLElBQUcsUUFBUSxPQUFPLElBQUUsTUFBTSxPQUFPLFNBQVMsSUFBRTtBQUFDLHVCQUFPLEdBQUUsWUFBWTtBQUFBLGlCQUFLLE9BQU8sU0FBUyxJQUFFO0FBQUMsdUJBQU8sR0FBRSxTQUFTLFNBQU87QUFBQSxpQkFBSSxPQUFPLFNBQVMsSUFBRTtBQUFDLHVCQUFNLEFBQVcsR0FBRSxhQUFhLEdBQUUsUUFBUSxxQkFBcEM7QUFBQSxpQkFBdUQsT0FBTyxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLFFBQVEsY0FBYyxRQUFRLE9BQU8sSUFBRSxNQUFNLE9BQU8sR0FBRSxhQUFhLEtBQUc7QUFBQTtBQUFBLGlCQUFXLEVBQUMsS0FBSSxnQ0FBK0IsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxJQUFFLEtBQUUsTUFBSyxLQUFFLEdBQUUsT0FBTyxTQUFTLElBQUU7QUFBQyx1QkFBTyxBQUFJLEdBQUcsc0JBQXNCLEdBQUUsSUFBRyxJQUFHLFdBQXJDO0FBQUE7QUFBOEMsaUJBQUUsU0FBTyxLQUFLLE9BQUUsS0FBSyxhQUFhLEtBQUssTUFBTSxJQUFFLEVBQUUsTUFBSSxLQUFLLGNBQWMsTUFBSyxxQkFBb0IsRUFBQyxNQUFLLE1BQUcsV0FBVTtBQUFDLG1CQUFFLGNBQVksR0FBRSxZQUFZLE9BQU8sU0FBUyxJQUFFO0FBQUMseUJBQU0sQUFBSyxHQUFFLFFBQVEsUUFBZjtBQUFBO0FBQW9CLG9CQUFJLEtBQUUsR0FBRSxPQUFPLFNBQVMsSUFBRTtBQUFDLHlCQUFPLEFBQUksR0FBRyxzQkFBc0IsR0FBRSxJQUFHLElBQUcsV0FBckM7QUFBQTtBQUE4QyxtQkFBRSxTQUFPLEtBQUcsR0FBRSxjQUFjLE1BQUssa0JBQWlCLEVBQUMsTUFBSyxNQUFHLFNBQVMsSUFBRTtBQUFDLHFCQUFFLFNBQVMsVUFBVSxHQUFFO0FBQUE7QUFBQTtBQUFBLGlCQUFhLEVBQUMsS0FBSSxlQUFjLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRSxhQUFhLDBCQUF3QixLQUFLLE1BQUksR0FBRyxHQUFFLFFBQVEsSUFBRyxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFO0FBQUEscUJBQU8sS0FBSztBQUFBLGlCQUFLLEVBQUMsS0FBSSxjQUFhLE9BQU0sU0FBUyxJQUFFLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUU7QUFBSyxpQkFBRyxXQUFXLElBQUUscUJBQW9CLE9BQUksS0FBSyxXQUFXLGtCQUFrQixPQUFNLEtBQUssZUFBZSxJQUFFLElBQUUsSUFBRSxXQUFVO0FBQUMsbUJBQUUsV0FBVztBQUFBO0FBQUEsaUJBQW1DLEVBQUMsS0FBSSxXQUFVLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sS0FBSyxXQUFXLFFBQVE7QUFBQSxtQkFBTztBQUFBLGVBQUssS0FBRyxHQUFFLEtBQUcsV0FBVTtBQUFDLHdCQUFXLElBQUUsSUFBRSxJQUFFO0FBQUMsdUJBQVEsTUFBSyxFQUFFLE1BQUssS0FBRyxLQUFLLFNBQU8sSUFBRSxLQUFLLGVBQWEsR0FBRSxZQUFXLEtBQUssY0FBWSxJQUFFLEtBQUssY0FBWSxJQUFJLE9BQUksS0FBSyxtQkFBaUIsT0FBRyxLQUFLLEtBQUcsSUFBRSxLQUFLLFdBQVMsR0FBRSxRQUFPLEtBQUssR0FBRyxZQUFVLEtBQUssWUFBWSxVQUFTLEtBQUs7QUFBWSxxQkFBSyxNQUFHLEtBQUssWUFBWTtBQUFBO0FBQUcsbUJBQU8sRUFBRSxJQUFFLE1BQUssQ0FBQyxFQUFDLEtBQUksVUFBUyxPQUFNLFdBQVU7QUFBQyxxQkFBTztBQUFBLGlCQUFPLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFO0FBQUMscUJBQU8sR0FBRTtBQUFBLG1CQUFjLEVBQUUsSUFBRSxDQUFDLEVBQUMsS0FBSSxhQUFZLE9BQU0sV0FBVTtBQUFDLG1CQUFLLFdBQVMsS0FBSztBQUFBLGlCQUFZLEVBQUMsS0FBSSxhQUFZLE9BQU0sV0FBVTtBQUFDLG1CQUFLLFdBQVMsS0FBSztBQUFBLGlCQUFZLEVBQUMsS0FBSSxrQkFBaUIsT0FBTSxXQUFVO0FBQUMsbUJBQUssZ0JBQWMsS0FBSztBQUFBLGlCQUFpQixFQUFDLEtBQUksZUFBYyxPQUFNLFdBQVU7QUFBQyxtQkFBSyxhQUFXLEtBQUs7QUFBQSxpQkFBYyxFQUFDLEtBQUksaUJBQWdCLE9BQU0sV0FBVTtBQUFDLG1CQUFLLG9CQUFtQixNQUFLLG1CQUFpQixPQUFHLEtBQUssZUFBYSxLQUFLO0FBQUEsaUJBQWlCLEVBQUMsS0FBSSxrQkFBaUIsT0FBTSxXQUFVO0FBQUMsbUJBQUssbUJBQWlCLE1BQUcsS0FBSyxnQkFBYyxLQUFLO0FBQUEsaUJBQWlCLEVBQUMsS0FBSSxhQUFZLE9BQU0sU0FBUyxJQUFFO0FBQUMsa0JBQUksS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHLElBQUcsS0FBRSxVQUFVLFNBQU8sS0FBRyxBQUFTLFVBQVUsT0FBbkIsU0FBc0IsVUFBVSxLQUFHLFdBQVU7QUFBQTtBQUFHLHFCQUFPLEtBQUssT0FBTyxjQUFjLE1BQUssSUFBRSxJQUFFO0FBQUEsaUJBQUssRUFBQyxLQUFJLGVBQWMsT0FBTSxTQUFTLElBQUUsSUFBRTtBQUFDLGtCQUFJLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxJQUFHLEtBQUUsVUFBVSxTQUFPLEtBQUcsQUFBUyxVQUFVLE9BQW5CLFNBQXNCLFVBQVUsS0FBRyxXQUFVO0FBQUE7QUFBRyxxQkFBTyxLQUFLLE9BQU8sY0FBYyxJQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMsdUJBQU8sR0FBRSxjQUFjLElBQUUsSUFBRSxJQUFFO0FBQUE7QUFBQSxpQkFBTyxFQUFDLEtBQUksZUFBYyxPQUFNLFNBQVMsSUFBRSxJQUFFO0FBQUMsa0JBQUksS0FBRSxTQUFTLElBQUUsSUFBRTtBQUFDLHVCQUFPLEtBQUUsS0FBRSxHQUFFLEdBQUU7QUFBQTtBQUFTLHFCQUFPLE9BQU8saUJBQWlCLFlBQVksT0FBTyxLQUFHLEtBQUcsS0FBSyxZQUFZLElBQUksS0FBRztBQUFBLGlCQUFJLEVBQUMsS0FBSSxxQkFBb0IsT0FBTSxTQUFTLElBQUU7QUFBQyxrQkFBSSxLQUFFLEdBQUUsTUFBSztBQUFJLHFCQUFPLG9CQUFvQixZQUFZLE9BQU8sS0FBRyxLQUFHLEtBQUssWUFBWSxPQUFPO0FBQUEsaUJBQUssRUFBQyxLQUFJLGVBQWMsT0FBTSxXQUFVO0FBQUMsa0JBQUksS0FBRTtBQUFLLG1CQUFLLFlBQVksUUFBUSxTQUFTLElBQUU7QUFBQyx1QkFBTyxHQUFFLGtCQUFrQjtBQUFBO0FBQUEsbUJBQVM7QUFBQTtBQUFLLFlBQUUsVUFBUTtBQUFBLFdBQUksU0FBUyxHQUFFLEdBQUU7QUFBQyxjQUFJO0FBQUUsY0FBRSxXQUFVO0FBQUMsbUJBQU87QUFBQTtBQUFRLGNBQUc7QUFBQyxnQkFBRSxLQUFHLFNBQVMsb0JBQW1CLElBQUUsTUFBTTtBQUFBLG1CQUFjLElBQU47QUFBUyxZQUFVLE9BQU8sVUFBakIsWUFBMEIsS0FBRTtBQUFBO0FBQVEsWUFBRSxVQUFRO0FBQUEsV0FBRyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBQyxVQUFTLElBQUU7QUFBQyxlQUFFLFdBQVUsSUFBRSxVQUFRLEtBQUksRUFBRSxVQUFRLEdBQUUsUUFBUSxXQUFTLEVBQUU7QUFBQSxhQUFLLEtBQUssTUFBSyxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0E5MHZFO0FBQUE7QUFNQSxNQUFDLFVBQVUsU0FBUSxXQUFVO0FBQzNCO0FBR0EsUUFBQyxZQUFZO0FBQ1gsY0FBSSxXQUFXO0FBQ2YsY0FBSSxVQUFVLENBQUMsTUFBTSxPQUFPLFVBQVU7QUFDdEMsbUJBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxVQUFVLENBQUMsUUFBTyx1QkFBdUIsRUFBRSxHQUFHO0FBQ3hFLG9CQUFPLHdCQUNMLFFBQU8sUUFBUSxLQUFLO0FBQ3RCLG9CQUFPLHVCQUNMLFFBQU8sUUFBUSxLQUFLLDJCQUNwQixRQUFPLFFBQVEsS0FBSztBQUFBO0FBRXhCLGNBQUksQ0FBQyxRQUFPO0FBQ1Ysb0JBQU8sd0JBQXdCLFNBQVUsVUFBVSxTQUFTO0FBQzFELGtCQUFJLFdBQVcsSUFBSSxPQUFPO0FBQzFCLGtCQUFJLGFBQWEsS0FBSyxJQUFJLEdBQUcsS0FBTSxZQUFXO0FBQzlDLGtCQUFJLEtBQUssUUFBTyxXQUFXLFdBQVk7QUFDckMseUJBQVMsV0FBVztBQUFBLGlCQUNuQjtBQUNILHlCQUFXLFdBQVc7QUFDdEIscUJBQU87QUFBQTtBQUVYLGNBQUksQ0FBQyxRQUFPO0FBQ1Ysb0JBQU8sdUJBQXVCLFNBQVUsSUFBSTtBQUMxQywyQkFBYTtBQUFBO0FBQUE7QUFJbkIsWUFBSSxRQUNGLGlCQUNBLGFBQ0EsaUJBQ0EsU0FDQSxXQUFXLFNBQVUsTUFBTSxNQUFNLFVBQVM7QUFDeEMsY0FBSSxLQUFLO0FBQWtCLGlCQUFLLGlCQUFpQixNQUFNLFVBQVM7QUFBQSxtQkFDdkQsS0FBSztBQUFhLGlCQUFLLFlBQVksT0FBTyxNQUFNO0FBQUE7QUFDcEQsaUJBQUssT0FBTyxRQUFRO0FBQUEsV0FFM0IsVUFBVTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsY0FBYztBQUFBLFVBQ2QsV0FBVztBQUFBLFlBQ1QsR0FBRztBQUFBLFlBQ0gsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBO0FBQUEsVUFFVCxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsVUFDYixXQUFXO0FBQUEsV0FFYixVQUFVLFdBQVk7QUFDcEIsaUJBQU8sUUFBUSxRQUFPO0FBQ3RCLGlCQUFPLFNBQVMsUUFBUSxlQUFlO0FBRXZDLGNBQUksTUFBTSxPQUFPLFdBQVc7QUFDNUIsY0FBSSxhQUFhLFFBQVE7QUFDekIsY0FBSSxjQUFjLFFBQVE7QUFFMUIsY0FBSSxlQUFlLElBQUkscUJBQXFCLEdBQUcsR0FBRyxPQUFPLE9BQU87QUFDaEUsbUJBQVMsUUFBUSxRQUFRO0FBQ3ZCLHlCQUFhLGFBQWEsTUFBTSxRQUFRLFVBQVU7QUFDcEQsY0FBSSxZQUFZLFFBQVE7QUFDeEIsY0FBSTtBQUNKLGNBQUksT0FBTyxHQUFHLFFBQVEsZUFBZTtBQUNyQyxjQUFJLE9BQ0YsS0FBSyxLQUFLLGtCQUFrQixPQUFPLFFBQ25DLFFBQVEsZUFBZTtBQUV6QixjQUFJLGNBQWM7QUFDbEIsY0FBSTtBQUFBLFdBRU4sZUFBZSxXQUFZO0FBQ3pCLG1CQUFTLFVBQVMsY0FBYztBQUNoQyxjQUFJLFFBQVEsT0FBTztBQUNuQixnQkFBTSxXQUFXO0FBQ2pCLGdCQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLFNBQVMsTUFBTSxVQUFVO0FBQ3RFLGdCQUFNLFNBQVM7QUFDZixnQkFBTSxVQUFVO0FBQ2hCLGNBQUksUUFBUTtBQUFXLG1CQUFPLFVBQVUsSUFBSSxRQUFRO0FBQ3BELG9CQUFTLEtBQUssWUFBWTtBQUMxQixtQkFBUyxTQUFRLFVBQVU7QUFBQSxXQUU3QixVQUFTO0FBQUEsVUFDUCxRQUFRLFNBQVUsTUFBTTtBQUN0QixxQkFBUyxPQUFPO0FBQ2Qsa0JBQUksUUFBUSxlQUFlO0FBQU0sd0JBQVEsT0FBTyxLQUFLO0FBQUE7QUFBQSxVQUV6RCxNQUFNLFdBQVk7QUFDaEIsZ0JBQUk7QUFBUztBQUNiLHNCQUFVO0FBQ1YsZ0JBQUksZ0JBQWdCO0FBQU0sc0JBQU8scUJBQXFCO0FBQ3RELGdCQUFJLENBQUM7QUFBUTtBQUNiLG1CQUFPLE1BQU0sVUFBVTtBQUN2QixtQkFBTyxNQUFNLFVBQVU7QUFDdkIsb0JBQU8sU0FBUztBQUNoQixnQkFBSSxRQUFRLFNBQVM7QUFDbkIsY0FBQyxrQkFBZ0I7QUFDZixrQ0FBa0IsUUFBTyxzQkFBc0I7QUFDL0Msd0JBQU8sU0FDTCxNQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLGtCQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSzlELFVBQVUsU0FBVSxJQUFJO0FBQ3RCLGdCQUFJLE9BQU8sT0FBTztBQUFhLHFCQUFPO0FBQ3RDLGdCQUFJLE9BQU8sT0FBTyxVQUFVO0FBQzFCLG1CQUNHLElBQUcsUUFBUSxRQUFRLEtBQUssR0FBRyxRQUFRLFFBQVEsSUFDeEMsa0JBQ0EsS0FBSyxXQUFXO0FBQUE7QUFFeEIsOEJBQWtCLEtBQUssSUFBSSxJQUFJO0FBQy9CO0FBQ0EsbUJBQU87QUFBQTtBQUFBLFVBRVQsTUFBTSxXQUFZO0FBQ2hCLGdCQUFJLENBQUM7QUFBUztBQUNkLHNCQUFVO0FBQ1YsZ0JBQUksbUJBQW1CLE1BQU07QUFDM0Isc0JBQU8scUJBQXFCO0FBQzVCLGdDQUFrQjtBQUFBO0FBRXBCLFlBQUMsa0JBQWdCO0FBQ2Ysa0JBQUksUUFBTyxTQUFTLFVBQVUsR0FBRztBQUMvQix1QkFBTyxNQUFNLFdBQVc7QUFDeEIsb0JBQUksT0FBTyxNQUFNLFdBQVcsTUFBTTtBQUNoQyx5QkFBTyxNQUFNLFVBQVU7QUFDdkIsZ0NBQWM7QUFDZDtBQUFBO0FBQUE7QUFHSiw0QkFBYyxRQUFPLHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUtuRCxZQUFJLE9BQU8sV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLFVBQVU7QUFDcEUsaUJBQU8sVUFBVTtBQUFBLG1CQUNSLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUNyRCxpQkFBTyxXQUFZO0FBQ2pCLG1CQUFPO0FBQUE7QUFBQSxlQUVKO0FBQ0wsZUFBSyxTQUFTO0FBQUE7QUFBQSxTQUVoQixLQUFLLFNBQU0sUUFBUTtBQUFBO0FBQUE7OztBQzVKckI7QUFFQSxFQUFDLFlBQVc7QUFDVixRQUFJLGdCQUFnQjtBQUVwQixnQ0FBNEI7QUFDMUIsVUFBSSxPQUFPLE9BQU8sZ0JBQWdCO0FBQVksZUFBTyxPQUFPO0FBRTVELDRCQUFxQixPQUFPLFFBQVE7QUFDbEMsaUJBQVMsVUFBVSxFQUFDLFNBQVMsT0FBTyxZQUFZLE9BQU8sUUFBUTtBQUMvRCxZQUFJLE1BQU0sU0FBUyxZQUFZO0FBQy9CLFlBQUksZ0JBQWdCLE9BQU8sT0FBTyxTQUFTLE9BQU8sWUFBWSxPQUFPO0FBQ3JFLGVBQU87QUFBQTtBQUVULG1CQUFZLFlBQVksT0FBTyxNQUFNO0FBQ3JDLGFBQU87QUFBQTtBQUdULDhCQUEwQixNQUFNLE9BQU87QUFDckMsVUFBSSxRQUFRLFNBQVMsY0FBYztBQUNuQyxZQUFNLE9BQU87QUFDYixZQUFNLE9BQU87QUFDYixZQUFNLFFBQVE7QUFDZCxhQUFPO0FBQUE7QUFHVCx5QkFBcUIsU0FBUztBQUM1QixVQUFJLEtBQUssUUFBUSxhQUFhLFlBQzFCLFNBQVMsaUJBQWlCLFdBQVcsUUFBUSxhQUFhLGlCQUMxRCxPQUFPLGlCQUFpQixlQUFlLFFBQVEsYUFBYSxlQUM1RCxPQUFPLFNBQVMsY0FBYyxTQUM5QixTQUFTLFFBQVEsYUFBYTtBQUVsQyxXQUFLLFNBQVUsUUFBUSxhQUFhLG1CQUFtQixRQUFTLFFBQVE7QUFDeEUsV0FBSyxTQUFTO0FBQ2QsV0FBSyxNQUFNLFVBQVU7QUFFckIsVUFBSTtBQUFRLGFBQUssU0FBUztBQUUxQixXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZO0FBQ2pCLGVBQVMsS0FBSyxZQUFZO0FBQzFCLFdBQUs7QUFBQTtBQUdQLFdBQU8saUJBQWlCLFNBQVMsU0FBUyxHQUFHO0FBQzNDLFVBQUksVUFBVSxFQUFFO0FBRWhCLGFBQU8sV0FBVyxRQUFRLGNBQWM7QUFDdEMsWUFBSSxtQkFBbUIsSUFBSSxjQUFjLHNCQUFzQjtBQUFBLFVBQzdELFdBQVc7QUFBQSxVQUFNLGNBQWM7QUFBQTtBQUdqQyxZQUFJLENBQUMsUUFBUSxjQUFjLG1CQUFtQjtBQUM1QyxZQUFFO0FBQ0YsWUFBRTtBQUNGLGlCQUFPO0FBQUE7QUFHVCxZQUFJLFFBQVEsYUFBYSxnQkFBZ0I7QUFDdkMsc0JBQVk7QUFDWixZQUFFO0FBQ0YsaUJBQU87QUFBQSxlQUNGO0FBQ0wsb0JBQVUsUUFBUTtBQUFBO0FBQUE7QUFBQSxPQUdyQjtBQUVILFdBQU8saUJBQWlCLHNCQUFzQixTQUFVLEdBQUc7QUFDekQsVUFBSSxVQUFVLEVBQUUsT0FBTyxhQUFhO0FBQ3BDLFVBQUcsV0FBVyxDQUFDLE9BQU8sUUFBUSxVQUFVO0FBQ3RDLFVBQUU7QUFBQTtBQUFBLE9BRUg7QUFBQTs7O0FDMUVMLE1BQUksWUFBVyxPQUFPO0FBQ3RCLE1BQUksYUFBWSxPQUFPO0FBQ3ZCLE1BQUksZ0JBQWUsT0FBTztBQUMxQixNQUFJLGdCQUFlLE9BQU8sVUFBVTtBQUNwQyxNQUFJLHFCQUFvQixPQUFPO0FBQy9CLE1BQUksb0JBQW1CLE9BQU87QUFDOUIsTUFBSSxrQkFBaUIsQ0FBQyxXQUFXLFdBQVUsUUFBUSxjQUFjLEVBQUMsT0FBTztBQUN6RSxNQUFJLGNBQWEsQ0FBQyxVQUFVLFdBQVcsTUFBTTtBQUMzQyxRQUFJLENBQUMsUUFBUTtBQUNYLGVBQVMsRUFBQyxTQUFTO0FBQ25CLGVBQVMsT0FBTyxTQUFTO0FBQUE7QUFFM0IsV0FBTyxPQUFPO0FBQUE7QUFFaEIsTUFBSSxlQUFlLENBQUMsUUFBUSxRQUFRLFNBQVM7QUFDM0MsUUFBSSxVQUFVLE9BQU8sV0FBVyxZQUFZLE9BQU8sV0FBVyxZQUFZO0FBQ3hFLGVBQVMsT0FBTyxtQkFBa0I7QUFDaEMsWUFBSSxDQUFDLGNBQWEsS0FBSyxRQUFRLFFBQVEsUUFBUTtBQUM3QyxxQkFBVSxRQUFRLEtBQUssRUFBQyxLQUFLLE1BQU0sT0FBTyxNQUFNLFlBQVksQ0FBRSxRQUFPLGtCQUFpQixRQUFRLFNBQVMsS0FBSztBQUFBO0FBRWxILFdBQU87QUFBQTtBQUVULE1BQUksY0FBYSxDQUFDLFdBQVc7QUFDM0IsV0FBTyxhQUFhLGdCQUFlLFdBQVUsVUFBVSxPQUFPLFVBQVMsY0FBYSxXQUFXLElBQUksV0FBVyxVQUFVLE9BQU8sY0FBYyxhQUFhLFNBQVMsRUFBQyxLQUFLLE1BQU0sT0FBTyxTQUFTLFlBQVksU0FBUSxFQUFDLE9BQU8sUUFBUSxZQUFZLFVBQVM7QUFBQTtBQUkxUCxNQUFJLHFCQUFxQixZQUFXLENBQUMsWUFBWTtBQUMvQztBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBQyxPQUFPO0FBQ3JELHFCQUFpQixLQUFLLGtCQUFrQjtBQUN0QyxZQUFNLE1BQU0sT0FBTyxPQUFPO0FBQzFCLFlBQU0sT0FBTyxJQUFJLE1BQU07QUFDdkIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxZQUFJLEtBQUssTUFBTTtBQUFBO0FBRWpCLGFBQU8sbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUk7QUFBQTtBQUUvRSxRQUFJLGlCQUFpQjtBQUFBLE9BQ2xCLElBQUk7QUFBQSxPQUNKLElBQUk7QUFBQSxPQUNKLElBQUk7QUFBQSxPQUNKLElBQUk7QUFBQSxPQUNKLEtBQUs7QUFBQSxPQUNMLEtBQUs7QUFBQSxPQUNMLEtBQUs7QUFBQSxPQUNMLE1BQU07QUFBQSxPQUNOLE1BQU07QUFBQSxPQUNOLE1BQU07QUFBQSxPQUNOLE9BQU87QUFBQSxPQUNQLE9BQU87QUFBQSxPQUNQLEtBQUs7QUFBQSxPQUNMLEtBQUs7QUFBQTtBQUVSLFFBQUksZ0JBQWdCO0FBQUEsT0FDakIsSUFBSTtBQUFBLE9BQ0osSUFBSTtBQUFBLE9BQ0osSUFBSTtBQUFBO0FBRVAsUUFBSSx1QkFBdUI7QUFDM0IsUUFBSSx3QkFBd0Msd0JBQVE7QUFDcEQsUUFBSSxRQUFRO0FBQ1osK0JBQTJCLFFBQVEsU0FBUyxHQUFHLE1BQU0sT0FBTyxRQUFRO0FBQ2xFLFlBQU0sUUFBUSxPQUFPLE1BQU07QUFDM0IsVUFBSSxRQUFRO0FBQ1osWUFBTSxNQUFNO0FBQ1osZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxpQkFBUyxNQUFNLEdBQUcsU0FBUztBQUMzQixZQUFJLFNBQVMsUUFBUTtBQUNuQixtQkFBUyxJQUFJLElBQUksT0FBTyxLQUFLLElBQUksU0FBUyxNQUFNLE9BQU8sS0FBSztBQUMxRCxnQkFBSSxJQUFJLEtBQUssS0FBSyxNQUFNO0FBQ3RCO0FBQ0Ysa0JBQU0sT0FBTyxJQUFJO0FBQ2pCLGdCQUFJLEtBQUssR0FBRyxPQUFPLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLE1BQU0sUUFBUSxTQUFTLE1BQU07QUFDL0Usa0JBQU0sYUFBYSxNQUFNLEdBQUc7QUFDNUIsZ0JBQUksTUFBTSxHQUFHO0FBQ1gsb0JBQU0sTUFBTSxTQUFVLFNBQVEsY0FBYztBQUM1QyxvQkFBTSxTQUFTLEtBQUssSUFBSSxHQUFHLE1BQU0sUUFBUSxhQUFhLE1BQU0sTUFBTTtBQUNsRSxrQkFBSSxLQUFLLFdBQVcsSUFBSSxPQUFPLE9BQU8sSUFBSSxPQUFPO0FBQUEsdUJBQ3hDLElBQUksR0FBRztBQUNoQixrQkFBSSxNQUFNLE9BQU87QUFDZixzQkFBTSxTQUFTLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxPQUFPLGFBQWE7QUFDM0Qsb0JBQUksS0FBSyxXQUFXLElBQUksT0FBTztBQUFBO0FBRWpDLHVCQUFTLGFBQWE7QUFBQTtBQUFBO0FBRzFCO0FBQUE7QUFBQTtBQUdKLGFBQU8sSUFBSSxLQUFLO0FBQUE7QUFFbEIsUUFBSSxzQkFBc0I7QUFDMUIsUUFBSSx1QkFBdUMsd0JBQVE7QUFDbkQsUUFBSSxpQkFBaUMsd0JBQVEsc0JBQXNCO0FBQ25FLFFBQUksbUJBQW1CO0FBQ3ZCLFFBQUksc0JBQXNCO0FBQzFCLCtCQUEyQixNQUFNO0FBQy9CLFVBQUksb0JBQW9CLGVBQWUsT0FBTztBQUM1QyxlQUFPLG9CQUFvQjtBQUFBO0FBRTdCLFlBQU0sV0FBVyxpQkFBaUIsS0FBSztBQUN2QyxVQUFJLFVBQVU7QUFDWixnQkFBUSxNQUFNLDBCQUEwQjtBQUFBO0FBRTFDLGFBQU8sb0JBQW9CLFFBQVEsQ0FBQztBQUFBO0FBRXRDLFFBQUksaUJBQWlCO0FBQUEsTUFDbkIsZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBO0FBRWIsUUFBSSwyQkFBMkMsd0JBQVE7QUFDdkQsUUFBSSxjQUE4Qix3QkFBUTtBQUMxQyw0QkFBd0IsT0FBTztBQUM3QixVQUFJLFFBQVEsUUFBUTtBQUNsQixjQUFNLE1BQU07QUFDWixpQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxnQkFBTSxPQUFPLE1BQU07QUFDbkIsZ0JBQU0sYUFBYSxlQUFlLFNBQVMsUUFBUSxpQkFBaUIsUUFBUTtBQUM1RSxjQUFJLFlBQVk7QUFDZCx1QkFBVyxPQUFPLFlBQVk7QUFDNUIsa0JBQUksT0FBTyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBSTVCLGVBQU87QUFBQSxpQkFDRSxTQUFTLFFBQVE7QUFDMUIsZUFBTztBQUFBO0FBQUE7QUFHWCxRQUFJLGtCQUFrQjtBQUN0QixRQUFJLHNCQUFzQjtBQUMxQiw4QkFBMEIsU0FBUztBQUNqQyxZQUFNLE1BQU07QUFDWixjQUFRLE1BQU0saUJBQWlCLFFBQVEsQ0FBQyxTQUFTO0FBQy9DLFlBQUksTUFBTTtBQUNSLGdCQUFNLE1BQU0sS0FBSyxNQUFNO0FBQ3ZCLGNBQUksU0FBUyxLQUFNLEtBQUksSUFBSSxHQUFHLFVBQVUsSUFBSSxHQUFHO0FBQUE7QUFBQTtBQUduRCxhQUFPO0FBQUE7QUFFVCw0QkFBd0IsUUFBUTtBQUM5QixVQUFJLE1BQU07QUFDVixVQUFJLENBQUMsUUFBUTtBQUNYLGVBQU87QUFBQTtBQUVULGlCQUFXLE9BQU8sUUFBUTtBQUN4QixjQUFNLFFBQVEsT0FBTztBQUNyQixjQUFNLGdCQUFnQixJQUFJLFdBQVcsUUFBUSxNQUFNLFVBQVU7QUFDN0QsWUFBSSxTQUFTLFVBQVUsT0FBTyxVQUFVLFlBQVkseUJBQXlCLGdCQUFnQjtBQUMzRixpQkFBTyxHQUFHLGlCQUFpQjtBQUFBO0FBQUE7QUFHL0IsYUFBTztBQUFBO0FBRVQsNEJBQXdCLE9BQU87QUFDN0IsVUFBSSxNQUFNO0FBQ1YsVUFBSSxTQUFTLFFBQVE7QUFDbkIsY0FBTTtBQUFBLGlCQUNHLFFBQVEsUUFBUTtBQUN6QixpQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxnQkFBTSxhQUFhLGVBQWUsTUFBTTtBQUN4QyxjQUFJLFlBQVk7QUFDZCxtQkFBTyxhQUFhO0FBQUE7QUFBQTtBQUFBLGlCQUdmLFNBQVMsUUFBUTtBQUMxQixtQkFBVyxRQUFRLE9BQU87QUFDeEIsY0FBSSxNQUFNLE9BQU87QUFDZixtQkFBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBSXBCLGFBQU8sSUFBSTtBQUFBO0FBRWIsUUFBSSxZQUFZO0FBQ2hCLFFBQUksV0FBVztBQUNmLFFBQUksWUFBWTtBQUNoQixRQUFJLFlBQTRCLHdCQUFRO0FBQ3hDLFFBQUksV0FBMkIsd0JBQVE7QUFDdkMsUUFBSSxZQUE0Qix3QkFBUTtBQUN4QyxRQUFJLFdBQVc7QUFDZix3QkFBb0IsUUFBUTtBQUMxQixZQUFNLE1BQU0sS0FBSztBQUNqQixZQUFNLFFBQVEsU0FBUyxLQUFLO0FBQzVCLFVBQUksQ0FBQyxPQUFPO0FBQ1YsZUFBTztBQUFBO0FBRVQsVUFBSSxPQUFPO0FBQ1gsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJLFlBQVk7QUFDaEIsV0FBSyxRQUFRLE1BQU0sT0FBTyxRQUFRLElBQUksUUFBUSxTQUFTO0FBQ3JELGdCQUFRLElBQUksV0FBVztBQUFBLGVBQ2hCO0FBQ0gsc0JBQVU7QUFDVjtBQUFBLGVBQ0c7QUFDSCxzQkFBVTtBQUNWO0FBQUEsZUFDRztBQUNILHNCQUFVO0FBQ1Y7QUFBQSxlQUNHO0FBQ0gsc0JBQVU7QUFDVjtBQUFBLGVBQ0c7QUFDSCxzQkFBVTtBQUNWO0FBQUE7QUFFQTtBQUFBO0FBRUosWUFBSSxjQUFjLE9BQU87QUFDdkIsa0JBQVEsSUFBSSxVQUFVLFdBQVc7QUFBQTtBQUVuQyxvQkFBWSxRQUFRO0FBQ3BCLGdCQUFRO0FBQUE7QUFFVixhQUFPLGNBQWMsUUFBUSxPQUFPLElBQUksVUFBVSxXQUFXLFNBQVM7QUFBQTtBQUV4RSxRQUFJLGlCQUFpQjtBQUNyQiwrQkFBMkIsS0FBSztBQUM5QixhQUFPLElBQUksUUFBUSxnQkFBZ0I7QUFBQTtBQUVyQyxnQ0FBNEIsR0FBRyxHQUFHO0FBQ2hDLFVBQUksRUFBRSxXQUFXLEVBQUU7QUFDakIsZUFBTztBQUNULFVBQUksUUFBUTtBQUNaLGVBQVMsSUFBSSxHQUFHLFNBQVMsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUMxQyxnQkFBUSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQUE7QUFFN0IsYUFBTztBQUFBO0FBRVQsd0JBQW9CLEdBQUcsR0FBRztBQUN4QixVQUFJLE1BQU07QUFDUixlQUFPO0FBQ1QsVUFBSSxhQUFhLE9BQU87QUFDeEIsVUFBSSxhQUFhLE9BQU87QUFDeEIsVUFBSSxjQUFjLFlBQVk7QUFDNUIsZUFBTyxjQUFjLGFBQWEsRUFBRSxjQUFjLEVBQUUsWUFBWTtBQUFBO0FBRWxFLG1CQUFhLFFBQVE7QUFDckIsbUJBQWEsUUFBUTtBQUNyQixVQUFJLGNBQWMsWUFBWTtBQUM1QixlQUFPLGNBQWMsYUFBYSxtQkFBbUIsR0FBRyxLQUFLO0FBQUE7QUFFL0QsbUJBQWEsU0FBUztBQUN0QixtQkFBYSxTQUFTO0FBQ3RCLFVBQUksY0FBYyxZQUFZO0FBQzVCLFlBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTtBQUM5QixpQkFBTztBQUFBO0FBRVQsY0FBTSxhQUFhLE9BQU8sS0FBSyxHQUFHO0FBQ2xDLGNBQU0sYUFBYSxPQUFPLEtBQUssR0FBRztBQUNsQyxZQUFJLGVBQWUsWUFBWTtBQUM3QixpQkFBTztBQUFBO0FBRVQsbUJBQVcsT0FBTyxHQUFHO0FBQ25CLGdCQUFNLFVBQVUsRUFBRSxlQUFlO0FBQ2pDLGdCQUFNLFVBQVUsRUFBRSxlQUFlO0FBQ2pDLGNBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLFdBQVcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU87QUFDN0UsbUJBQU87QUFBQTtBQUFBO0FBQUE7QUFJYixhQUFPLE9BQU8sT0FBTyxPQUFPO0FBQUE7QUFFOUIsMEJBQXNCLEtBQUssS0FBSztBQUM5QixhQUFPLElBQUksVUFBVSxDQUFDLFNBQVMsV0FBVyxNQUFNO0FBQUE7QUFFbEQsUUFBSSxrQkFBa0IsQ0FBQyxRQUFRO0FBQzdCLGFBQU8sT0FBTyxPQUFPLEtBQUssU0FBUyxPQUFPLEtBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxPQUFPO0FBQUE7QUFFdEYsUUFBSSxXQUFXLENBQUMsTUFBTSxRQUFRO0FBQzVCLFVBQUksTUFBTSxNQUFNO0FBQ2QsZUFBTztBQUFBLFdBQ0osT0FBTyxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksV0FBVyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssVUFBVTtBQUN4RSxvQkFBUSxHQUFHLFlBQVk7QUFDdkIsbUJBQU87QUFBQSxhQUNOO0FBQUE7QUFBQSxpQkFFSSxNQUFNLE1BQU07QUFDckIsZUFBTztBQUFBLFdBQ0osT0FBTyxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUk7QUFBQTtBQUFBLGlCQUV2QixTQUFTLFFBQVEsQ0FBQyxRQUFRLFFBQVEsQ0FBQyxjQUFjLE1BQU07QUFDaEUsZUFBTyxPQUFPO0FBQUE7QUFFaEIsYUFBTztBQUFBO0FBRVQsUUFBSSw0QkFBNEI7QUFBQSxNQUM5QjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFFRixRQUFJLFlBQVksT0FBTyxPQUFPO0FBQzlCLFFBQUksWUFBWSxPQUFPLE9BQU87QUFDOUIsUUFBSSxPQUFPLE1BQU07QUFBQTtBQUVqQixRQUFJLEtBQUssTUFBTTtBQUNmLFFBQUksT0FBTztBQUNYLFFBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFLO0FBQzlCLFFBQUksa0JBQWtCLENBQUMsUUFBUSxJQUFJLFdBQVc7QUFDOUMsUUFBSSxTQUFTLE9BQU87QUFDcEIsUUFBSSxTQUFTLENBQUMsS0FBSyxPQUFPO0FBQ3hCLFlBQU0sSUFBSSxJQUFJLFFBQVE7QUFDdEIsVUFBSSxJQUFJLElBQUk7QUFDVixZQUFJLE9BQU8sR0FBRztBQUFBO0FBQUE7QUFHbEIsUUFBSSxpQkFBaUIsT0FBTyxVQUFVO0FBQ3RDLFFBQUksU0FBUyxDQUFDLEtBQUssUUFBUSxlQUFlLEtBQUssS0FBSztBQUNwRCxRQUFJLFVBQVUsTUFBTTtBQUNwQixRQUFJLFFBQVEsQ0FBQyxRQUFRLGFBQWEsU0FBUztBQUMzQyxRQUFJLFFBQVEsQ0FBQyxRQUFRLGFBQWEsU0FBUztBQUMzQyxRQUFJLFNBQVMsQ0FBQyxRQUFRLGVBQWU7QUFDckMsUUFBSSxhQUFhLENBQUMsUUFBUSxPQUFPLFFBQVE7QUFDekMsUUFBSSxXQUFXLENBQUMsUUFBUSxPQUFPLFFBQVE7QUFDdkMsUUFBSSxXQUFXLENBQUMsUUFBUSxPQUFPLFFBQVE7QUFDdkMsUUFBSSxXQUFXLENBQUMsUUFBUSxRQUFRLFFBQVEsT0FBTyxRQUFRO0FBQ3ZELFFBQUksWUFBWSxDQUFDLFFBQVE7QUFDdkIsYUFBTyxTQUFTLFFBQVEsV0FBVyxJQUFJLFNBQVMsV0FBVyxJQUFJO0FBQUE7QUFFakUsUUFBSSxpQkFBaUIsT0FBTyxVQUFVO0FBQ3RDLFFBQUksZUFBZSxDQUFDLFVBQVUsZUFBZSxLQUFLO0FBQ2xELFFBQUksWUFBWSxDQUFDLFVBQVU7QUFDekIsYUFBTyxhQUFhLE9BQU8sTUFBTSxHQUFHO0FBQUE7QUFFdEMsUUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLGFBQWEsU0FBUztBQUNuRCxRQUFJLGVBQWUsQ0FBQyxRQUFRLFNBQVMsUUFBUSxRQUFRLFNBQVMsSUFBSSxPQUFPLE9BQU8sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUMzRyxRQUFJLGlCQUFpQyx3QkFBUTtBQUM3QyxRQUFJLHNCQUFzQixDQUFDLE9BQU87QUFDaEMsWUFBTSxRQUFRLE9BQU8sT0FBTztBQUM1QixhQUFPLENBQUMsUUFBUTtBQUNkLGNBQU0sTUFBTSxNQUFNO0FBQ2xCLGVBQU8sT0FBUSxPQUFNLE9BQU8sR0FBRztBQUFBO0FBQUE7QUFHbkMsUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVyxvQkFBb0IsQ0FBQyxRQUFRO0FBQzFDLGFBQU8sSUFBSSxRQUFRLFlBQVksQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLGdCQUFnQjtBQUFBO0FBRWpFLFFBQUksY0FBYztBQUNsQixRQUFJLFlBQVksb0JBQW9CLENBQUMsUUFBUSxJQUFJLFFBQVEsYUFBYSxPQUFPO0FBQzdFLFFBQUksYUFBYSxvQkFBb0IsQ0FBQyxRQUFRLElBQUksT0FBTyxHQUFHLGdCQUFnQixJQUFJLE1BQU07QUFDdEYsUUFBSSxlQUFlLG9CQUFvQixDQUFDLFFBQVEsTUFBTSxLQUFLLFdBQVcsU0FBUztBQUMvRSxRQUFJLGFBQWEsQ0FBQyxPQUFPLGFBQWEsVUFBVSxZQUFhLFdBQVUsU0FBUyxhQUFhO0FBQzdGLFFBQUksaUJBQWlCLENBQUMsS0FBSyxRQUFRO0FBQ2pDLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDbkMsWUFBSSxHQUFHO0FBQUE7QUFBQTtBQUdYLFFBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVO0FBQzdCLGFBQU8sZUFBZSxLQUFLLEtBQUs7QUFBQSxRQUM5QixjQUFjO0FBQUEsUUFDZCxZQUFZO0FBQUEsUUFDWjtBQUFBO0FBQUE7QUFHSixRQUFJLFdBQVcsQ0FBQyxRQUFRO0FBQ3RCLFlBQU0sSUFBSSxXQUFXO0FBQ3JCLGFBQU8sTUFBTSxLQUFLLE1BQU07QUFBQTtBQUUxQixRQUFJO0FBQ0osUUFBSSxnQkFBZ0IsTUFBTTtBQUN4QixhQUFPLGVBQWdCLGVBQWMsT0FBTyxlQUFlLGNBQWMsYUFBYSxPQUFPLFNBQVMsY0FBYyxPQUFPLE9BQU8sV0FBVyxjQUFjLFNBQVMsT0FBTyxXQUFXLGNBQWMsU0FBUztBQUFBO0FBRS9NLFlBQVEsWUFBWTtBQUNwQixZQUFRLFlBQVk7QUFDcEIsWUFBUSxLQUFLO0FBQ2IsWUFBUSxPQUFPO0FBQ2YsWUFBUSxpQkFBaUI7QUFDekIsWUFBUSw0QkFBNEI7QUFDcEMsWUFBUSxXQUFXO0FBQ25CLFlBQVEsYUFBYTtBQUNyQixZQUFRLE1BQU07QUFDZCxZQUFRLGFBQWE7QUFDckIsWUFBUSxvQkFBb0I7QUFDNUIsWUFBUSxTQUFTO0FBQ2pCLFlBQVEsb0JBQW9CO0FBQzVCLFlBQVEsZ0JBQWdCO0FBQ3hCLFlBQVEsYUFBYTtBQUNyQixZQUFRLFNBQVM7QUFDakIsWUFBUSxZQUFZO0FBQ3BCLFlBQVEsaUJBQWlCO0FBQ3pCLFlBQVEsVUFBVTtBQUNsQixZQUFRLGdCQUFnQjtBQUN4QixZQUFRLFNBQVM7QUFDakIsWUFBUSxhQUFhO0FBQ3JCLFlBQVEsd0JBQXdCO0FBQ2hDLFlBQVEsWUFBWTtBQUNwQixZQUFRLGVBQWU7QUFDdkIsWUFBUSxjQUFjO0FBQ3RCLFlBQVEsUUFBUTtBQUNoQixZQUFRLGtCQUFrQjtBQUMxQixZQUFRLDJCQUEyQjtBQUNuQyxZQUFRLFdBQVc7QUFDbkIsWUFBUSxPQUFPO0FBQ2YsWUFBUSxnQkFBZ0I7QUFDeEIsWUFBUSxZQUFZO0FBQ3BCLFlBQVEsaUJBQWlCO0FBQ3pCLFlBQVEsb0JBQW9CO0FBQzVCLFlBQVEsV0FBVztBQUNuQixZQUFRLFFBQVE7QUFDaEIsWUFBUSx1QkFBdUI7QUFDL0IsWUFBUSxXQUFXO0FBQ25CLFlBQVEsV0FBVztBQUNuQixZQUFRLFlBQVk7QUFDcEIsWUFBUSxhQUFhO0FBQ3JCLFlBQVEsZUFBZTtBQUN2QixZQUFRLFVBQVU7QUFDbEIsWUFBUSxpQkFBaUI7QUFDekIsWUFBUSxpQkFBaUI7QUFDekIsWUFBUSxpQkFBaUI7QUFDekIsWUFBUSxtQkFBbUI7QUFDM0IsWUFBUSxpQkFBaUI7QUFDekIsWUFBUSxTQUFTO0FBQ2pCLFlBQVEsZ0JBQWdCO0FBQ3hCLFlBQVEsaUJBQWlCO0FBQ3pCLFlBQVEsa0JBQWtCO0FBQzFCLFlBQVEsZUFBZTtBQUN2QixZQUFRLFdBQVc7QUFDbkIsWUFBUSxZQUFZO0FBQ3BCLFlBQVEsZUFBZTtBQUFBO0FBSXpCLE1BQUksaUJBQWlCLFlBQVcsQ0FBQyxTQUFTLFdBQVc7QUFDbkQ7QUFDQSxRQUFJLE9BQU87QUFDVCxhQUFPLFVBQVU7QUFBQSxXQUNaO0FBQ0wsYUFBTyxVQUFVO0FBQUE7QUFBQTtBQUtyQixNQUFJLHlCQUF5QixZQUFXLENBQUMsWUFBWTtBQUNuRDtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBQyxPQUFPO0FBQ3JELFFBQUksU0FBUztBQUNiLFFBQUksWUFBWSxJQUFJO0FBQ3BCLFFBQUksY0FBYztBQUNsQixRQUFJO0FBQ0osUUFBSSxjQUFjLE9BQU87QUFDekIsUUFBSSxzQkFBc0IsT0FBTztBQUNqQyxzQkFBa0IsSUFBSTtBQUNwQixhQUFPLE1BQU0sR0FBRyxjQUFjO0FBQUE7QUFFaEMscUJBQWlCLElBQUksVUFBVSxPQUFPLFdBQVc7QUFDL0MsVUFBSSxTQUFTLEtBQUs7QUFDaEIsYUFBSyxHQUFHO0FBQUE7QUFFVixZQUFNLFVBQVUscUJBQXFCLElBQUk7QUFDekMsVUFBSSxDQUFDLFFBQVEsTUFBTTtBQUNqQjtBQUFBO0FBRUYsYUFBTztBQUFBO0FBRVQsbUJBQWUsU0FBUztBQUN0QixVQUFJLFFBQVEsUUFBUTtBQUNsQixnQkFBUTtBQUNSLFlBQUksUUFBUSxRQUFRLFFBQVE7QUFDMUIsa0JBQVEsUUFBUTtBQUFBO0FBRWxCLGdCQUFRLFNBQVM7QUFBQTtBQUFBO0FBR3JCLFFBQUksTUFBTTtBQUNWLGtDQUE4QixJQUFJLFNBQVM7QUFDekMsWUFBTSxVQUFVLDBCQUEwQjtBQUN4QyxZQUFJLENBQUMsUUFBUSxRQUFRO0FBQ25CLGlCQUFPO0FBQUE7QUFFVCxZQUFJLENBQUMsWUFBWSxTQUFTLFVBQVU7QUFDbEMsa0JBQVE7QUFDUixjQUFJO0FBQ0Y7QUFDQSx3QkFBWSxLQUFLO0FBQ2pCLDJCQUFlO0FBQ2YsbUJBQU87QUFBQSxvQkFDUDtBQUNBLHdCQUFZO0FBQ1o7QUFDQSwyQkFBZSxZQUFZLFlBQVksU0FBUztBQUFBO0FBQUE7QUFBQTtBQUl0RCxjQUFRLEtBQUs7QUFDYixjQUFRLGVBQWUsQ0FBQyxDQUFDLFFBQVE7QUFDakMsY0FBUSxZQUFZO0FBQ3BCLGNBQVEsU0FBUztBQUNqQixjQUFRLE1BQU07QUFDZCxjQUFRLE9BQU87QUFDZixjQUFRLFVBQVU7QUFDbEIsYUFBTztBQUFBO0FBRVQscUJBQWlCLFNBQVM7QUFDeEIsWUFBTSxFQUFDLFNBQVE7QUFDZixVQUFJLEtBQUssUUFBUTtBQUNmLGlCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLGVBQUssR0FBRyxPQUFPO0FBQUE7QUFFakIsYUFBSyxTQUFTO0FBQUE7QUFBQTtBQUdsQixRQUFJLGNBQWM7QUFDbEIsUUFBSSxhQUFhO0FBQ2pCLDZCQUF5QjtBQUN2QixpQkFBVyxLQUFLO0FBQ2hCLG9CQUFjO0FBQUE7QUFFaEIsOEJBQTBCO0FBQ3hCLGlCQUFXLEtBQUs7QUFDaEIsb0JBQWM7QUFBQTtBQUVoQiw2QkFBeUI7QUFDdkIsWUFBTSxPQUFPLFdBQVc7QUFDeEIsb0JBQWMsU0FBUyxTQUFTLE9BQU87QUFBQTtBQUV6QyxtQkFBZSxRQUFRLE1BQU0sS0FBSztBQUNoQyxVQUFJLENBQUMsZUFBZSxpQkFBaUIsUUFBUTtBQUMzQztBQUFBO0FBRUYsVUFBSSxVQUFVLFVBQVUsSUFBSTtBQUM1QixVQUFJLENBQUMsU0FBUztBQUNaLGtCQUFVLElBQUksUUFBUSxVQUFVLElBQUk7QUFBQTtBQUV0QyxVQUFJLE1BQU0sUUFBUSxJQUFJO0FBQ3RCLFVBQUksQ0FBQyxLQUFLO0FBQ1IsZ0JBQVEsSUFBSSxLQUFLLE1BQU0sSUFBSTtBQUFBO0FBRTdCLFVBQUksQ0FBQyxJQUFJLElBQUksZUFBZTtBQUMxQixZQUFJLElBQUk7QUFDUixxQkFBYSxLQUFLLEtBQUs7QUFDdkIsWUFBSSxhQUFhLFFBQVEsU0FBUztBQUNoQyx1QkFBYSxRQUFRLFFBQVE7QUFBQSxZQUMzQixRQUFRO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLUixxQkFBaUIsUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVc7QUFDakUsWUFBTSxVQUFVLFVBQVUsSUFBSTtBQUM5QixVQUFJLENBQUMsU0FBUztBQUNaO0FBQUE7QUFFRixZQUFNLFVBQVUsSUFBSTtBQUNwQixZQUFNLE9BQU8sQ0FBQyxpQkFBaUI7QUFDN0IsWUFBSSxjQUFjO0FBQ2hCLHVCQUFhLFFBQVEsQ0FBQyxZQUFZO0FBQ2hDLGdCQUFJLFlBQVksZ0JBQWdCLFFBQVEsY0FBYztBQUNwRCxzQkFBUSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLcEIsVUFBSSxTQUFTLFNBQVM7QUFDcEIsZ0JBQVEsUUFBUTtBQUFBLGlCQUNQLFFBQVEsWUFBWSxPQUFPLFFBQVEsU0FBUztBQUNyRCxnQkFBUSxRQUFRLENBQUMsS0FBSyxTQUFTO0FBQzdCLGNBQUksU0FBUyxZQUFZLFFBQVEsVUFBVTtBQUN6QyxpQkFBSztBQUFBO0FBQUE7QUFBQSxhQUdKO0FBQ0wsWUFBSSxRQUFRLFFBQVE7QUFDbEIsZUFBSyxRQUFRLElBQUk7QUFBQTtBQUVuQixnQkFBUTtBQUFBLGVBQ0Q7QUFDSCxnQkFBSSxDQUFDLE9BQU8sUUFBUSxTQUFTO0FBQzNCLG1CQUFLLFFBQVEsSUFBSTtBQUNqQixrQkFBSSxPQUFPLE1BQU0sU0FBUztBQUN4QixxQkFBSyxRQUFRLElBQUk7QUFBQTtBQUFBLHVCQUVWLE9BQU8sYUFBYSxNQUFNO0FBQ25DLG1CQUFLLFFBQVEsSUFBSTtBQUFBO0FBRW5CO0FBQUEsZUFDRztBQUNILGdCQUFJLENBQUMsT0FBTyxRQUFRLFNBQVM7QUFDM0IsbUJBQUssUUFBUSxJQUFJO0FBQ2pCLGtCQUFJLE9BQU8sTUFBTSxTQUFTO0FBQ3hCLHFCQUFLLFFBQVEsSUFBSTtBQUFBO0FBQUE7QUFHckI7QUFBQSxlQUNHO0FBQ0gsZ0JBQUksT0FBTyxNQUFNLFNBQVM7QUFDeEIsbUJBQUssUUFBUSxJQUFJO0FBQUE7QUFFbkI7QUFBQTtBQUFBO0FBR04sWUFBTSxNQUFNLENBQUMsWUFBWTtBQUN2QixZQUFJLFFBQVEsUUFBUSxXQUFXO0FBQzdCLGtCQUFRLFFBQVEsVUFBVTtBQUFBLFlBQ3hCLFFBQVE7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQTtBQUFBO0FBR0osWUFBSSxRQUFRLFFBQVEsV0FBVztBQUM3QixrQkFBUSxRQUFRLFVBQVU7QUFBQSxlQUNyQjtBQUNMO0FBQUE7QUFBQTtBQUdKLGNBQVEsUUFBUTtBQUFBO0FBRWxCLFFBQUkscUJBQXFDLHVCQUFPLFFBQVE7QUFDeEQsUUFBSSxpQkFBaUIsSUFBSSxJQUFJLE9BQU8sb0JBQW9CLFFBQVEsSUFBSSxDQUFDLFFBQVEsT0FBTyxNQUFNLE9BQU8sT0FBTztBQUN4RyxRQUFJLE9BQXVCO0FBQzNCLFFBQUksYUFBNkIsNkJBQWEsT0FBTztBQUNyRCxRQUFJLGNBQThCLDZCQUFhO0FBQy9DLFFBQUkscUJBQXFDLDZCQUFhLE1BQU07QUFDNUQsUUFBSSx3QkFBd0I7QUFDNUIsS0FBQyxZQUFZLFdBQVcsZUFBZSxRQUFRLENBQUMsUUFBUTtBQUN0RCxZQUFNLFNBQVMsTUFBTSxVQUFVO0FBQy9CLDRCQUFzQixPQUFPLFlBQVksTUFBTTtBQUM3QyxjQUFNLE1BQU0sT0FBTztBQUNuQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFDM0MsZ0JBQU0sS0FBSyxPQUFPLElBQUk7QUFBQTtBQUV4QixjQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUs7QUFDOUIsWUFBSSxRQUFRLE1BQU0sUUFBUSxPQUFPO0FBQy9CLGlCQUFPLE9BQU8sTUFBTSxLQUFLLEtBQUssSUFBSTtBQUFBLGVBQzdCO0FBQ0wsaUJBQU87QUFBQTtBQUFBO0FBQUE7QUFJYixLQUFDLFFBQVEsT0FBTyxTQUFTLFdBQVcsVUFBVSxRQUFRLENBQUMsUUFBUTtBQUM3RCxZQUFNLFNBQVMsTUFBTSxVQUFVO0FBQy9CLDRCQUFzQixPQUFPLFlBQVksTUFBTTtBQUM3QztBQUNBLGNBQU0sTUFBTSxPQUFPLE1BQU0sTUFBTTtBQUMvQjtBQUNBLGVBQU87QUFBQTtBQUFBO0FBR1gsMEJBQXNCLGNBQWMsT0FBTyxVQUFVLE9BQU87QUFDMUQsYUFBTyxjQUFjLFFBQVEsS0FBSyxVQUFVO0FBQzFDLFlBQUksUUFBUSxrQkFBa0I7QUFDNUIsaUJBQU8sQ0FBQztBQUFBLG1CQUNDLFFBQVEsa0JBQWtCO0FBQ25DLGlCQUFPO0FBQUEsbUJBQ0UsUUFBUSxhQUFhLGFBQWMsZUFBYyxVQUFVLHFCQUFxQixjQUFjLFVBQVUscUJBQXFCLGFBQWEsSUFBSSxTQUFTO0FBQ2hLLGlCQUFPO0FBQUE7QUFFVCxjQUFNLGdCQUFnQixPQUFPLFFBQVE7QUFDckMsWUFBSSxDQUFDLGVBQWUsaUJBQWlCLE9BQU8sT0FBTyx1QkFBdUIsTUFBTTtBQUM5RSxpQkFBTyxRQUFRLElBQUksdUJBQXVCLEtBQUs7QUFBQTtBQUVqRCxjQUFNLE1BQU0sUUFBUSxJQUFJLFFBQVEsS0FBSztBQUNyQyxZQUFJLE9BQU8sU0FBUyxPQUFPLGVBQWUsSUFBSSxPQUFPLG1CQUFtQixNQUFNO0FBQzVFLGlCQUFPO0FBQUE7QUFFVCxZQUFJLENBQUMsYUFBYTtBQUNoQixnQkFBTSxRQUFRLE9BQU87QUFBQTtBQUV2QixZQUFJLFNBQVM7QUFDWCxpQkFBTztBQUFBO0FBRVQsWUFBSSxNQUFNLE1BQU07QUFDZCxnQkFBTSxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxhQUFhO0FBQzVELGlCQUFPLGVBQWUsSUFBSSxRQUFRO0FBQUE7QUFFcEMsWUFBSSxPQUFPLFNBQVMsTUFBTTtBQUN4QixpQkFBTyxjQUFjLFNBQVMsT0FBTyxVQUFVO0FBQUE7QUFFakQsZUFBTztBQUFBO0FBQUE7QUFHWCxRQUFJLE9BQXVCO0FBQzNCLFFBQUksYUFBNkIsNkJBQWE7QUFDOUMsMEJBQXNCLFVBQVUsT0FBTztBQUNyQyxhQUFPLGNBQWMsUUFBUSxLQUFLLE9BQU8sVUFBVTtBQUNqRCxZQUFJLFdBQVcsT0FBTztBQUN0QixZQUFJLENBQUMsU0FBUztBQUNaLGtCQUFRLE9BQU87QUFDZixxQkFBVyxPQUFPO0FBQ2xCLGNBQUksQ0FBQyxPQUFPLFFBQVEsV0FBVyxNQUFNLGFBQWEsQ0FBQyxNQUFNLFFBQVE7QUFDL0QscUJBQVMsUUFBUTtBQUNqQixtQkFBTztBQUFBO0FBQUE7QUFHWCxjQUFNLFNBQVMsT0FBTyxRQUFRLFdBQVcsT0FBTyxhQUFhLE9BQU8sT0FBTyxPQUFPLE9BQU8sU0FBUyxPQUFPLE9BQU8sUUFBUTtBQUN4SCxjQUFNLFNBQVMsUUFBUSxJQUFJLFFBQVEsS0FBSyxPQUFPO0FBQy9DLFlBQUksV0FBVyxPQUFPLFdBQVc7QUFDL0IsY0FBSSxDQUFDLFFBQVE7QUFDWCxvQkFBUSxRQUFRLE9BQU8sS0FBSztBQUFBLHFCQUNuQixPQUFPLFdBQVcsT0FBTyxXQUFXO0FBQzdDLG9CQUFRLFFBQVEsT0FBTyxLQUFLLE9BQU87QUFBQTtBQUFBO0FBR3ZDLGVBQU87QUFBQTtBQUFBO0FBR1gsNEJBQXdCLFFBQVEsS0FBSztBQUNuQyxZQUFNLFNBQVMsT0FBTyxPQUFPLFFBQVE7QUFDckMsWUFBTSxXQUFXLE9BQU87QUFDeEIsWUFBTSxTQUFTLFFBQVEsZUFBZSxRQUFRO0FBQzlDLFVBQUksVUFBVSxRQUFRO0FBQ3BCLGdCQUFRLFFBQVEsVUFBVSxLQUFLLFFBQVE7QUFBQTtBQUV6QyxhQUFPO0FBQUE7QUFFVCxpQkFBYSxRQUFRLEtBQUs7QUFDeEIsWUFBTSxTQUFTLFFBQVEsSUFBSSxRQUFRO0FBQ25DLFVBQUksQ0FBQyxPQUFPLFNBQVMsUUFBUSxDQUFDLGVBQWUsSUFBSSxNQUFNO0FBQ3JELGNBQU0sUUFBUSxPQUFPO0FBQUE7QUFFdkIsYUFBTztBQUFBO0FBRVQscUJBQWlCLFFBQVE7QUFDdkIsWUFBTSxRQUFRLFdBQVcsT0FBTyxRQUFRLFVBQVUsV0FBVztBQUM3RCxhQUFPLFFBQVEsUUFBUTtBQUFBO0FBRXpCLFFBQUksa0JBQWtCO0FBQUEsTUFDcEIsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBRUYsUUFBSSxtQkFBbUI7QUFBQSxNQUNyQixLQUFLO0FBQUEsTUFDTCxJQUFJLFFBQVEsS0FBSztBQUNmO0FBQ0Usa0JBQVEsS0FBSyx5QkFBeUIsT0FBTyxxQ0FBcUM7QUFBQTtBQUVwRixlQUFPO0FBQUE7QUFBQSxNQUVULGVBQWUsUUFBUSxLQUFLO0FBQzFCO0FBQ0Usa0JBQVEsS0FBSyw0QkFBNEIsT0FBTyxxQ0FBcUM7QUFBQTtBQUV2RixlQUFPO0FBQUE7QUFBQTtBQUdYLFFBQUksMEJBQTBCLE9BQU8sT0FBTyxJQUFJLGlCQUFpQjtBQUFBLE1BQy9ELEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQTtBQUVQLFFBQUksMEJBQTBCLE9BQU8sT0FBTyxJQUFJLGtCQUFrQjtBQUFBLE1BQ2hFLEtBQUs7QUFBQTtBQUVQLFFBQUksYUFBYSxDQUFDLFVBQVUsT0FBTyxTQUFTLFNBQVMsVUFBVSxTQUFTO0FBQ3hFLFFBQUksYUFBYSxDQUFDLFVBQVUsT0FBTyxTQUFTLFNBQVMsU0FBUyxTQUFTO0FBQ3ZFLFFBQUksWUFBWSxDQUFDLFVBQVU7QUFDM0IsUUFBSSxXQUFXLENBQUMsTUFBTSxRQUFRLGVBQWU7QUFDN0MsbUJBQWUsUUFBUSxLQUFLLGNBQWMsT0FBTyxZQUFZLE9BQU87QUFDbEUsZUFBUyxPQUFPO0FBQ2hCLFlBQU0sWUFBWSxPQUFPO0FBQ3pCLFlBQU0sU0FBUyxPQUFPO0FBQ3RCLFVBQUksUUFBUSxRQUFRO0FBQ2xCLFNBQUMsZUFBZSxNQUFNLFdBQVcsT0FBTztBQUFBO0FBRTFDLE9BQUMsZUFBZSxNQUFNLFdBQVcsT0FBTztBQUN4QyxZQUFNLEVBQUMsS0FBSyxTQUFRLFNBQVM7QUFDN0IsWUFBTSxPQUFPLFlBQVksWUFBWSxjQUFjLGFBQWE7QUFDaEUsVUFBSSxLQUFLLEtBQUssV0FBVyxNQUFNO0FBQzdCLGVBQU8sS0FBSyxPQUFPLElBQUk7QUFBQSxpQkFDZCxLQUFLLEtBQUssV0FBVyxTQUFTO0FBQ3ZDLGVBQU8sS0FBSyxPQUFPLElBQUk7QUFBQSxpQkFDZCxXQUFXLFdBQVc7QUFDL0IsZUFBTyxJQUFJO0FBQUE7QUFBQTtBQUdmLG1CQUFlLEtBQUssY0FBYyxPQUFPO0FBQ3ZDLFlBQU0sU0FBUyxLQUFLO0FBQ3BCLFlBQU0sWUFBWSxPQUFPO0FBQ3pCLFlBQU0sU0FBUyxPQUFPO0FBQ3RCLFVBQUksUUFBUSxRQUFRO0FBQ2xCLFNBQUMsZUFBZSxNQUFNLFdBQVcsT0FBTztBQUFBO0FBRTFDLE9BQUMsZUFBZSxNQUFNLFdBQVcsT0FBTztBQUN4QyxhQUFPLFFBQVEsU0FBUyxPQUFPLElBQUksT0FBTyxPQUFPLElBQUksUUFBUSxPQUFPLElBQUk7QUFBQTtBQUUxRSxrQkFBYyxRQUFRLGNBQWMsT0FBTztBQUN6QyxlQUFTLE9BQU87QUFDaEIsT0FBQyxlQUFlLE1BQU0sT0FBTyxTQUFTLFdBQVc7QUFDakQsYUFBTyxRQUFRLElBQUksUUFBUSxRQUFRO0FBQUE7QUFFckMsaUJBQWEsT0FBTztBQUNsQixjQUFRLE9BQU87QUFDZixZQUFNLFNBQVMsT0FBTztBQUN0QixZQUFNLFFBQVEsU0FBUztBQUN2QixZQUFNLFNBQVMsTUFBTSxJQUFJLEtBQUssUUFBUTtBQUN0QyxVQUFJLENBQUMsUUFBUTtBQUNYLGVBQU8sSUFBSTtBQUNYLGdCQUFRLFFBQVEsT0FBTyxPQUFPO0FBQUE7QUFFaEMsYUFBTztBQUFBO0FBRVQsbUJBQWUsS0FBSyxPQUFPO0FBQ3pCLGNBQVEsT0FBTztBQUNmLFlBQU0sU0FBUyxPQUFPO0FBQ3RCLFlBQU0sRUFBQyxLQUFLLE1BQU0sS0FBSyxTQUFRLFNBQVM7QUFDeEMsVUFBSSxTQUFTLEtBQUssS0FBSyxRQUFRO0FBQy9CLFVBQUksQ0FBQyxRQUFRO0FBQ1gsY0FBTSxPQUFPO0FBQ2IsaUJBQVMsS0FBSyxLQUFLLFFBQVE7QUFBQSxhQUN0QjtBQUNMLDBCQUFrQixRQUFRLE1BQU07QUFBQTtBQUVsQyxZQUFNLFdBQVcsS0FBSyxLQUFLLFFBQVE7QUFDbkMsYUFBTyxJQUFJLEtBQUs7QUFDaEIsVUFBSSxDQUFDLFFBQVE7QUFDWCxnQkFBUSxRQUFRLE9BQU8sS0FBSztBQUFBLGlCQUNuQixPQUFPLFdBQVcsT0FBTyxXQUFXO0FBQzdDLGdCQUFRLFFBQVEsT0FBTyxLQUFLLE9BQU87QUFBQTtBQUVyQyxhQUFPO0FBQUE7QUFFVCx5QkFBcUIsS0FBSztBQUN4QixZQUFNLFNBQVMsT0FBTztBQUN0QixZQUFNLEVBQUMsS0FBSyxNQUFNLEtBQUssU0FBUSxTQUFTO0FBQ3hDLFVBQUksU0FBUyxLQUFLLEtBQUssUUFBUTtBQUMvQixVQUFJLENBQUMsUUFBUTtBQUNYLGNBQU0sT0FBTztBQUNiLGlCQUFTLEtBQUssS0FBSyxRQUFRO0FBQUEsYUFDdEI7QUFDTCwwQkFBa0IsUUFBUSxNQUFNO0FBQUE7QUFFbEMsWUFBTSxXQUFXLE9BQU8sS0FBSyxLQUFLLFFBQVEsT0FBTztBQUNqRCxZQUFNLFNBQVMsT0FBTyxPQUFPO0FBQzdCLFVBQUksUUFBUTtBQUNWLGdCQUFRLFFBQVEsVUFBVSxLQUFLLFFBQVE7QUFBQTtBQUV6QyxhQUFPO0FBQUE7QUFFVCxxQkFBaUI7QUFDZixZQUFNLFNBQVMsT0FBTztBQUN0QixZQUFNLFdBQVcsT0FBTyxTQUFTO0FBQ2pDLFlBQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxJQUFJLElBQUksVUFBVSxJQUFJLElBQUk7QUFDbkUsWUFBTSxTQUFTLE9BQU87QUFDdEIsVUFBSSxVQUFVO0FBQ1osZ0JBQVEsUUFBUSxTQUFTLFFBQVEsUUFBUTtBQUFBO0FBRTNDLGFBQU87QUFBQTtBQUVULDJCQUF1QixhQUFhLFdBQVc7QUFDN0MsYUFBTyxpQkFBaUIsVUFBVSxTQUFTO0FBQ3pDLGNBQU0sV0FBVztBQUNqQixjQUFNLFNBQVMsU0FBUztBQUN4QixjQUFNLFlBQVksT0FBTztBQUN6QixjQUFNLE9BQU8sWUFBWSxZQUFZLGNBQWMsYUFBYTtBQUNoRSxTQUFDLGVBQWUsTUFBTSxXQUFXLFdBQVc7QUFDNUMsZUFBTyxPQUFPLFFBQVEsQ0FBQyxPQUFPLFFBQVE7QUFDcEMsaUJBQU8sU0FBUyxLQUFLLFNBQVMsS0FBSyxRQUFRLEtBQUssTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUk1RCxrQ0FBOEIsUUFBUSxhQUFhLFdBQVc7QUFDNUQsYUFBTyxZQUFZLE1BQU07QUFDdkIsY0FBTSxTQUFTLEtBQUs7QUFDcEIsY0FBTSxZQUFZLE9BQU87QUFDekIsY0FBTSxjQUFjLE9BQU8sTUFBTTtBQUNqQyxjQUFNLFNBQVMsV0FBVyxhQUFhLFdBQVcsT0FBTyxZQUFZO0FBQ3JFLGNBQU0sWUFBWSxXQUFXLFVBQVU7QUFDdkMsY0FBTSxnQkFBZ0IsT0FBTyxRQUFRLEdBQUc7QUFDeEMsY0FBTSxPQUFPLFlBQVksWUFBWSxjQUFjLGFBQWE7QUFDaEUsU0FBQyxlQUFlLE1BQU0sV0FBVyxXQUFXLFlBQVksc0JBQXNCO0FBQzlFLGVBQU87QUFBQSxVQUNMLE9BQU87QUFDTCxrQkFBTSxFQUFDLE9BQU8sU0FBUSxjQUFjO0FBQ3BDLG1CQUFPLE9BQU8sRUFBQyxPQUFPLFNBQVE7QUFBQSxjQUM1QixPQUFPLFNBQVMsQ0FBQyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLO0FBQUEsY0FDeEQ7QUFBQTtBQUFBO0FBQUEsV0FHSCxPQUFPLFlBQVk7QUFDbEIsbUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtmLGtDQUE4QixNQUFNO0FBQ2xDLGFBQU8sWUFBWSxNQUFNO0FBQ3ZCO0FBQ0UsZ0JBQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLFNBQVM7QUFDL0Msa0JBQVEsS0FBSyxHQUFHLE9BQU8sV0FBVyxtQkFBbUIsa0NBQWtDLE9BQU87QUFBQTtBQUVoRyxlQUFPLFNBQVMsV0FBVyxRQUFRO0FBQUE7QUFBQTtBQUd2QyxRQUFJLDBCQUEwQjtBQUFBLE1BQzVCLElBQUksS0FBSztBQUNQLGVBQU8sTUFBTSxNQUFNO0FBQUE7QUFBQSxVQUVqQixPQUFPO0FBQ1QsZUFBTyxLQUFLO0FBQUE7QUFBQSxNQUVkLEtBQUs7QUFBQSxNQUNMO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUjtBQUFBLE1BQ0EsU0FBUyxjQUFjLE9BQU87QUFBQTtBQUVoQyxRQUFJLDBCQUEwQjtBQUFBLE1BQzVCLElBQUksS0FBSztBQUNQLGVBQU8sTUFBTSxNQUFNLEtBQUssT0FBTztBQUFBO0FBQUEsVUFFN0IsT0FBTztBQUNULGVBQU8sS0FBSztBQUFBO0FBQUEsTUFFZCxLQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1I7QUFBQSxNQUNBLFNBQVMsY0FBYyxPQUFPO0FBQUE7QUFFaEMsUUFBSSwyQkFBMkI7QUFBQSxNQUM3QixJQUFJLEtBQUs7QUFDUCxlQUFPLE1BQU0sTUFBTSxLQUFLO0FBQUE7QUFBQSxVQUV0QixPQUFPO0FBQ1QsZUFBTyxLQUFLLE1BQU07QUFBQTtBQUFBLE1BRXBCLElBQUksS0FBSztBQUNQLGVBQU8sTUFBTSxLQUFLLE1BQU0sS0FBSztBQUFBO0FBQUEsTUFFL0IsS0FBSyxxQkFBcUI7QUFBQSxNQUMxQixLQUFLLHFCQUFxQjtBQUFBLE1BQzFCLFFBQVEscUJBQXFCO0FBQUEsTUFDN0IsT0FBTyxxQkFBcUI7QUFBQSxNQUM1QixTQUFTLGNBQWMsTUFBTTtBQUFBO0FBRS9CLFFBQUksa0NBQWtDO0FBQUEsTUFDcEMsSUFBSSxLQUFLO0FBQ1AsZUFBTyxNQUFNLE1BQU0sS0FBSyxNQUFNO0FBQUE7QUFBQSxVQUU1QixPQUFPO0FBQ1QsZUFBTyxLQUFLLE1BQU07QUFBQTtBQUFBLE1BRXBCLElBQUksS0FBSztBQUNQLGVBQU8sTUFBTSxLQUFLLE1BQU0sS0FBSztBQUFBO0FBQUEsTUFFL0IsS0FBSyxxQkFBcUI7QUFBQSxNQUMxQixLQUFLLHFCQUFxQjtBQUFBLE1BQzFCLFFBQVEscUJBQXFCO0FBQUEsTUFDN0IsT0FBTyxxQkFBcUI7QUFBQSxNQUM1QixTQUFTLGNBQWMsTUFBTTtBQUFBO0FBRS9CLFFBQUksa0JBQWtCLENBQUMsUUFBUSxVQUFVLFdBQVcsT0FBTztBQUMzRCxvQkFBZ0IsUUFBUSxDQUFDLFdBQVc7QUFDbEMsOEJBQXdCLFVBQVUscUJBQXFCLFFBQVEsT0FBTztBQUN0RSwrQkFBeUIsVUFBVSxxQkFBcUIsUUFBUSxNQUFNO0FBQ3RFLDhCQUF3QixVQUFVLHFCQUFxQixRQUFRLE9BQU87QUFDdEUsc0NBQWdDLFVBQVUscUJBQXFCLFFBQVEsTUFBTTtBQUFBO0FBRS9FLHlDQUFxQyxhQUFhLFNBQVM7QUFDekQsWUFBTSxtQkFBbUIsVUFBVSxjQUFjLGtDQUFrQywwQkFBMEIsY0FBYywyQkFBMkI7QUFDdEosYUFBTyxDQUFDLFFBQVEsS0FBSyxhQUFhO0FBQ2hDLFlBQUksUUFBUSxrQkFBa0I7QUFDNUIsaUJBQU8sQ0FBQztBQUFBLG1CQUNDLFFBQVEsa0JBQWtCO0FBQ25DLGlCQUFPO0FBQUEsbUJBQ0UsUUFBUSxXQUFXO0FBQzVCLGlCQUFPO0FBQUE7QUFFVCxlQUFPLFFBQVEsSUFBSSxPQUFPLE9BQU8sa0JBQWtCLFFBQVEsT0FBTyxTQUFTLG1CQUFtQixRQUFRLEtBQUs7QUFBQTtBQUFBO0FBRy9HLFFBQUksNEJBQTRCO0FBQUEsTUFDOUIsS0FBSyw0QkFBNEIsT0FBTztBQUFBO0FBRTFDLFFBQUksNEJBQTRCO0FBQUEsTUFDOUIsS0FBSyw0QkFBNEIsT0FBTztBQUFBO0FBRTFDLFFBQUksNkJBQTZCO0FBQUEsTUFDL0IsS0FBSyw0QkFBNEIsTUFBTTtBQUFBO0FBRXpDLFFBQUksb0NBQW9DO0FBQUEsTUFDdEMsS0FBSyw0QkFBNEIsTUFBTTtBQUFBO0FBRXpDLCtCQUEyQixRQUFRLE1BQU0sS0FBSztBQUM1QyxZQUFNLFNBQVMsT0FBTztBQUN0QixVQUFJLFdBQVcsT0FBTyxLQUFLLEtBQUssUUFBUSxTQUFTO0FBQy9DLGNBQU0sT0FBTyxPQUFPLFVBQVU7QUFDOUIsZ0JBQVEsS0FBSyxZQUFZLHNFQUFzRSxTQUFTLFFBQVEsYUFBYTtBQUFBO0FBQUE7QUFHakksUUFBSSxjQUFjLElBQUk7QUFDdEIsUUFBSSxxQkFBcUIsSUFBSTtBQUM3QixRQUFJLGNBQWMsSUFBSTtBQUN0QixRQUFJLHFCQUFxQixJQUFJO0FBQzdCLDJCQUF1QixTQUFTO0FBQzlCLGNBQVE7QUFBQSxhQUNEO0FBQUEsYUFDQTtBQUNILGlCQUFPO0FBQUEsYUFDSjtBQUFBLGFBQ0E7QUFBQSxhQUNBO0FBQUEsYUFDQTtBQUNILGlCQUFPO0FBQUE7QUFFUCxpQkFBTztBQUFBO0FBQUE7QUFHYiwyQkFBdUIsT0FBTztBQUM1QixhQUFPLE1BQU0sZUFBZSxDQUFDLE9BQU8sYUFBYSxTQUFTLElBQUksY0FBYyxPQUFPLFVBQVU7QUFBQTtBQUUvRix1QkFBbUIsUUFBUTtBQUN6QixVQUFJLFVBQVUsT0FBTyxtQkFBbUI7QUFDdEMsZUFBTztBQUFBO0FBRVQsYUFBTyxxQkFBcUIsUUFBUSxPQUFPLGlCQUFpQiwyQkFBMkI7QUFBQTtBQUV6Riw2QkFBeUIsUUFBUTtBQUMvQixhQUFPLHFCQUFxQixRQUFRLE9BQU8seUJBQXlCLDJCQUEyQjtBQUFBO0FBRWpHLHNCQUFrQixRQUFRO0FBQ3hCLGFBQU8scUJBQXFCLFFBQVEsTUFBTSxrQkFBa0IsNEJBQTRCO0FBQUE7QUFFMUYsNkJBQXlCLFFBQVE7QUFDL0IsYUFBTyxxQkFBcUIsUUFBUSxNQUFNLHlCQUF5QixtQ0FBbUM7QUFBQTtBQUV4RyxrQ0FBOEIsUUFBUSxhQUFhLGNBQWMsb0JBQW9CLFVBQVU7QUFDN0YsVUFBSSxDQUFDLE9BQU8sU0FBUyxTQUFTO0FBQzVCO0FBQ0Usa0JBQVEsS0FBSyxrQ0FBa0MsT0FBTztBQUFBO0FBRXhELGVBQU87QUFBQTtBQUVULFVBQUksT0FBTyxjQUFjLENBQUUsZ0JBQWUsT0FBTyxvQkFBb0I7QUFDbkUsZUFBTztBQUFBO0FBRVQsWUFBTSxnQkFBZ0IsU0FBUyxJQUFJO0FBQ25DLFVBQUksZUFBZTtBQUNqQixlQUFPO0FBQUE7QUFFVCxZQUFNLGFBQWEsY0FBYztBQUNqQyxVQUFJLGVBQWUsR0FBRztBQUNwQixlQUFPO0FBQUE7QUFFVCxZQUFNLFFBQVEsSUFBSSxNQUFNLFFBQVEsZUFBZSxJQUFJLHFCQUFxQjtBQUN4RSxlQUFTLElBQUksUUFBUTtBQUNyQixhQUFPO0FBQUE7QUFFVCx5QkFBcUIsT0FBTztBQUMxQixVQUFJLFdBQVcsUUFBUTtBQUNyQixlQUFPLFlBQVksTUFBTTtBQUFBO0FBRTNCLGFBQU8sQ0FBQyxDQUFFLFVBQVMsTUFBTTtBQUFBO0FBRTNCLHdCQUFvQixPQUFPO0FBQ3pCLGFBQU8sQ0FBQyxDQUFFLFVBQVMsTUFBTTtBQUFBO0FBRTNCLHFCQUFpQixPQUFPO0FBQ3RCLGFBQU8sWUFBWSxVQUFVLFdBQVc7QUFBQTtBQUUxQyxvQkFBZ0IsVUFBVTtBQUN4QixhQUFPLFlBQVksT0FBTyxTQUFTLGVBQWU7QUFBQTtBQUVwRCxxQkFBaUIsT0FBTztBQUN0QixhQUFPLElBQUksT0FBTyxZQUFZO0FBQzlCLGFBQU87QUFBQTtBQUVULFFBQUksVUFBVSxDQUFDLFFBQVEsT0FBTyxTQUFTLE9BQU8sVUFBVSxPQUFPO0FBQy9ELG1CQUFlLEdBQUc7QUFDaEIsYUFBTyxRQUFRLEtBQUssRUFBRSxjQUFjO0FBQUE7QUFFdEMsaUJBQWEsT0FBTztBQUNsQixhQUFPLFVBQVU7QUFBQTtBQUVuQix3QkFBb0IsT0FBTztBQUN6QixhQUFPLFVBQVUsT0FBTztBQUFBO0FBRTFCLFFBQUksVUFBVSxNQUFNO0FBQUEsTUFDbEIsWUFBWSxXQUFXLFdBQVcsT0FBTztBQUN2QyxhQUFLLFlBQVk7QUFDakIsYUFBSyxXQUFXO0FBQ2hCLGFBQUssWUFBWTtBQUNqQixhQUFLLFNBQVMsV0FBVyxZQUFZLFFBQVE7QUFBQTtBQUFBLFVBRTNDLFFBQVE7QUFDVixjQUFNLE9BQU8sT0FBTyxPQUFPO0FBQzNCLGVBQU8sS0FBSztBQUFBO0FBQUEsVUFFVixNQUFNLFFBQVE7QUFDaEIsWUFBSSxPQUFPLFdBQVcsT0FBTyxTQUFTLEtBQUssWUFBWTtBQUNyRCxlQUFLLFlBQVk7QUFDakIsZUFBSyxTQUFTLEtBQUssV0FBVyxTQUFTLFFBQVE7QUFDL0Msa0JBQVEsT0FBTyxPQUFPLE9BQU8sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUk1Qyx1QkFBbUIsVUFBVSxVQUFVLE9BQU87QUFDNUMsVUFBSSxNQUFNLFdBQVc7QUFDbkIsZUFBTztBQUFBO0FBRVQsYUFBTyxJQUFJLFFBQVEsVUFBVTtBQUFBO0FBRS9CLHdCQUFvQixNQUFNO0FBQ3hCLGNBQVEsT0FBTyxPQUFPLE9BQU8sU0FBUyxLQUFLO0FBQUE7QUFFN0MsbUJBQWUsTUFBTTtBQUNuQixhQUFPLE1BQU0sUUFBUSxLQUFLLFFBQVE7QUFBQTtBQUVwQyxRQUFJLHdCQUF3QjtBQUFBLE1BQzFCLEtBQUssQ0FBQyxRQUFRLEtBQUssYUFBYSxNQUFNLFFBQVEsSUFBSSxRQUFRLEtBQUs7QUFBQSxNQUMvRCxLQUFLLENBQUMsUUFBUSxLQUFLLE9BQU8sYUFBYTtBQUNyQyxjQUFNLFdBQVcsT0FBTztBQUN4QixZQUFJLE1BQU0sYUFBYSxDQUFDLE1BQU0sUUFBUTtBQUNwQyxtQkFBUyxRQUFRO0FBQ2pCLGlCQUFPO0FBQUEsZUFDRjtBQUNMLGlCQUFPLFFBQVEsSUFBSSxRQUFRLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTtBQUk3Qyx1QkFBbUIsZ0JBQWdCO0FBQ2pDLGFBQU8sWUFBWSxrQkFBa0IsaUJBQWlCLElBQUksTUFBTSxnQkFBZ0I7QUFBQTtBQUVsRixRQUFJLGdCQUFnQixNQUFNO0FBQUEsTUFDeEIsWUFBWSxTQUFTO0FBQ25CLGFBQUssWUFBWTtBQUNqQixjQUFNLEVBQUMsS0FBSyxNQUFNLEtBQUssU0FBUSxRQUFRLE1BQU0sTUFBTSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsTUFBTSxPQUFPO0FBQ3JHLGFBQUssT0FBTztBQUNaLGFBQUssT0FBTztBQUFBO0FBQUEsVUFFVixRQUFRO0FBQ1YsZUFBTyxLQUFLO0FBQUE7QUFBQSxVQUVWLE1BQU0sUUFBUTtBQUNoQixhQUFLLEtBQUs7QUFBQTtBQUFBO0FBR2QsdUJBQW1CLFNBQVM7QUFDMUIsYUFBTyxJQUFJLGNBQWM7QUFBQTtBQUUzQixvQkFBZ0IsUUFBUTtBQUN0QixVQUFJLENBQUMsUUFBUSxTQUFTO0FBQ3BCLGdCQUFRLEtBQUs7QUFBQTtBQUVmLFlBQU0sTUFBTSxPQUFPLFFBQVEsVUFBVSxJQUFJLE1BQU0sT0FBTyxVQUFVO0FBQ2hFLGlCQUFXLE9BQU8sUUFBUTtBQUN4QixZQUFJLE9BQU8sTUFBTSxRQUFRO0FBQUE7QUFFM0IsYUFBTztBQUFBO0FBRVQsUUFBSSxnQkFBZ0IsTUFBTTtBQUFBLE1BQ3hCLFlBQVksU0FBUyxNQUFNO0FBQ3pCLGFBQUssVUFBVTtBQUNmLGFBQUssT0FBTztBQUNaLGFBQUssWUFBWTtBQUFBO0FBQUEsVUFFZixRQUFRO0FBQ1YsZUFBTyxLQUFLLFFBQVEsS0FBSztBQUFBO0FBQUEsVUFFdkIsTUFBTSxRQUFRO0FBQ2hCLGFBQUssUUFBUSxLQUFLLFFBQVE7QUFBQTtBQUFBO0FBRzlCLG1CQUFlLFFBQVEsS0FBSztBQUMxQixhQUFPLE1BQU0sT0FBTyxRQUFRLE9BQU8sT0FBTyxJQUFJLGNBQWMsUUFBUTtBQUFBO0FBRXRFLFFBQUksa0JBQWtCLE1BQU07QUFBQSxNQUMxQixZQUFZLFFBQVEsU0FBUyxhQUFhO0FBQ3hDLGFBQUssVUFBVTtBQUNmLGFBQUssU0FBUztBQUNkLGFBQUssWUFBWTtBQUNqQixhQUFLLFNBQVMsUUFBUSxRQUFRO0FBQUEsVUFDNUIsTUFBTTtBQUFBLFVBQ04sV0FBVyxNQUFNO0FBQ2YsZ0JBQUksQ0FBQyxLQUFLLFFBQVE7QUFDaEIsbUJBQUssU0FBUztBQUNkLHNCQUFRLE9BQU8sT0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBSW5DLGFBQUssb0JBQW9CO0FBQUE7QUFBQSxVQUV2QixRQUFRO0FBQ1YsY0FBTSxRQUFRLE9BQU87QUFDckIsWUFBSSxNQUFNLFFBQVE7QUFDaEIsZ0JBQU0sU0FBUyxLQUFLO0FBQ3BCLGdCQUFNLFNBQVM7QUFBQTtBQUVqQixjQUFNLE9BQU8sT0FBTztBQUNwQixlQUFPLE1BQU07QUFBQTtBQUFBLFVBRVgsTUFBTSxVQUFVO0FBQ2xCLGFBQUssUUFBUTtBQUFBO0FBQUE7QUFHakIsc0JBQWtCLGlCQUFpQjtBQUNqQyxVQUFJO0FBQ0osVUFBSTtBQUNKLFVBQUksT0FBTyxXQUFXLGtCQUFrQjtBQUN0QyxpQkFBUztBQUNULGlCQUFTLE1BQU07QUFDYixrQkFBUSxLQUFLO0FBQUE7QUFBQSxhQUVWO0FBQ0wsaUJBQVMsZ0JBQWdCO0FBQ3pCLGlCQUFTLGdCQUFnQjtBQUFBO0FBRTNCLGFBQU8sSUFBSSxnQkFBZ0IsUUFBUSxRQUFRLE9BQU8sV0FBVyxvQkFBb0IsQ0FBQyxnQkFBZ0I7QUFBQTtBQUVwRyxZQUFRLGNBQWM7QUFDdEIsWUFBUSxXQUFXO0FBQ25CLFlBQVEsWUFBWTtBQUNwQixZQUFRLFNBQVM7QUFDakIsWUFBUSxpQkFBaUI7QUFDekIsWUFBUSxVQUFVO0FBQ2xCLFlBQVEsYUFBYTtBQUNyQixZQUFRLGFBQWE7QUFDckIsWUFBUSxRQUFRO0FBQ2hCLFlBQVEsVUFBVTtBQUNsQixZQUFRLGdCQUFnQjtBQUN4QixZQUFRLFlBQVk7QUFDcEIsWUFBUSxXQUFXO0FBQ25CLFlBQVEsV0FBVztBQUNuQixZQUFRLE1BQU07QUFDZCxZQUFRLGdCQUFnQjtBQUN4QixZQUFRLGtCQUFrQjtBQUMxQixZQUFRLGtCQUFrQjtBQUMxQixZQUFRLGFBQWE7QUFDckIsWUFBUSxPQUFPO0FBQ2YsWUFBUSxRQUFRO0FBQ2hCLFlBQVEsUUFBUTtBQUNoQixZQUFRLFNBQVM7QUFDakIsWUFBUSxRQUFRO0FBQ2hCLFlBQVEsVUFBVTtBQUNsQixZQUFRLGFBQWE7QUFDckIsWUFBUSxRQUFRO0FBQUE7QUFJbEIsTUFBSSxxQkFBcUIsWUFBVyxDQUFDLFNBQVMsV0FBVztBQUN2RDtBQUNBLFFBQUksT0FBTztBQUNULGFBQU8sVUFBVTtBQUFBLFdBQ1o7QUFDTCxhQUFPLFVBQVU7QUFBQTtBQUFBO0FBS3JCLE1BQUksZUFBZTtBQUNuQixNQUFJLFdBQVc7QUFDZixNQUFJLFFBQVE7QUFDWixxQkFBbUIsVUFBVTtBQUMzQixhQUFTO0FBQUE7QUFFWCxvQkFBa0IsS0FBSztBQUNyQixRQUFJLENBQUMsTUFBTSxTQUFTO0FBQ2xCLFlBQU0sS0FBSztBQUNiO0FBQUE7QUFFRix3QkFBc0I7QUFDcEIsUUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjO0FBQzlCLHFCQUFlO0FBQ2YscUJBQWU7QUFBQTtBQUFBO0FBR25CLHVCQUFxQjtBQUNuQixtQkFBZTtBQUNmLGVBQVc7QUFDWCxhQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFlBQU07QUFBQTtBQUVSLFVBQU0sU0FBUztBQUNmLGVBQVc7QUFBQTtBQUliLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJLGlCQUFpQjtBQUNyQixtQ0FBaUMsVUFBVTtBQUN6QyxxQkFBaUI7QUFDakI7QUFDQSxxQkFBaUI7QUFBQTtBQUVuQiwrQkFBNkIsUUFBUTtBQUNuQyxlQUFXLE9BQU87QUFDbEIsY0FBVSxPQUFPO0FBQ2pCLGFBQVMsQ0FBQyxhQUFhLE9BQU8sT0FBTyxVQUFVLEVBQUMsV0FBVyxDQUFDLFNBQVM7QUFDbkUsVUFBSSxnQkFBZ0I7QUFDbEIsa0JBQVU7QUFBQSxhQUNMO0FBQ0w7QUFBQTtBQUFBO0FBR0osVUFBTSxPQUFPO0FBQUE7QUFFZiwwQkFBd0IsVUFBVTtBQUNoQyxhQUFTO0FBQUE7QUFFWCw4QkFBNEIsSUFBSTtBQUM5QixRQUFJLFVBQVUsTUFBTTtBQUFBO0FBRXBCLFFBQUksZ0JBQWdCLENBQUMsYUFBYTtBQUNoQyxVQUFJLGtCQUFrQixPQUFPO0FBQzdCLFVBQUksQ0FBQyxHQUFHLFlBQVk7QUFDbEIsV0FBRyxhQUFhLElBQUk7QUFDcEIsV0FBRyxnQkFBZ0IsTUFBTTtBQUN2QixhQUFHLFdBQVcsUUFBUSxDQUFDLE1BQU07QUFBQTtBQUFBO0FBR2pDLFNBQUcsV0FBVyxJQUFJO0FBQ2xCLGdCQUFVLE1BQU07QUFDZCxZQUFJLG9CQUFvQjtBQUN0QjtBQUNGLFdBQUcsV0FBVyxPQUFPO0FBQ3JCLGdCQUFRO0FBQUE7QUFBQTtBQUdaLFdBQU8sQ0FBQyxlQUFlLE1BQU07QUFDM0I7QUFBQTtBQUFBO0FBS0osTUFBSSxvQkFBb0I7QUFDeEIsTUFBSSxlQUFlO0FBQ25CLE1BQUksYUFBYTtBQUNqQixxQkFBbUIsVUFBVTtBQUMzQixlQUFXLEtBQUs7QUFBQTtBQUVsQix1QkFBcUIsVUFBVTtBQUM3QixpQkFBYSxLQUFLO0FBQUE7QUFFcEIsNkJBQTJCLFVBQVU7QUFDbkMsc0JBQWtCLEtBQUs7QUFBQTtBQUV6Qiw4QkFBNEIsSUFBSSxNQUFNLFVBQVU7QUFDOUMsUUFBSSxDQUFDLEdBQUc7QUFDTixTQUFHLHVCQUF1QjtBQUM1QixRQUFJLENBQUMsR0FBRyxxQkFBcUI7QUFDM0IsU0FBRyxxQkFBcUIsUUFBUTtBQUNsQyxPQUFHLHFCQUFxQixNQUFNLEtBQUs7QUFBQTtBQUVyQyw2QkFBMkIsSUFBSSxPQUFPO0FBQ3BDLFFBQUksQ0FBQyxHQUFHO0FBQ047QUFDRixXQUFPLFFBQVEsR0FBRyxzQkFBc0IsUUFBUSxDQUFDLENBQUMsTUFBTSxXQUFXO0FBQ2pFLFVBQUksVUFBVSxVQUFVLE1BQU0sU0FBUyxPQUFPO0FBQzVDLGNBQU0sUUFBUSxDQUFDLE1BQU07QUFDckIsZUFBTyxHQUFHLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUlyQyxNQUFJLFdBQVcsSUFBSSxpQkFBaUI7QUFDcEMsTUFBSSxxQkFBcUI7QUFDekIscUNBQW1DO0FBQ2pDLGFBQVMsUUFBUSxVQUFVLEVBQUMsU0FBUyxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sbUJBQW1CO0FBQ2pHLHlCQUFxQjtBQUFBO0FBRXZCLG9DQUFrQztBQUNoQztBQUNBLGFBQVM7QUFDVCx5QkFBcUI7QUFBQTtBQUV2QixNQUFJLGNBQWM7QUFDbEIsTUFBSSx5QkFBeUI7QUFDN0IsMkJBQXlCO0FBQ3ZCLGtCQUFjLFlBQVksT0FBTyxTQUFTO0FBQzFDLFFBQUksWUFBWSxVQUFVLENBQUMsd0JBQXdCO0FBQ2pELCtCQUF5QjtBQUN6QixxQkFBZSxNQUFNO0FBQ25CO0FBQ0EsaUNBQXlCO0FBQUE7QUFBQTtBQUFBO0FBSS9CLGdDQUE4QjtBQUM1QixhQUFTO0FBQ1QsZ0JBQVksU0FBUztBQUFBO0FBRXZCLHFCQUFtQixVQUFVO0FBQzNCLFFBQUksQ0FBQztBQUNILGFBQU87QUFDVDtBQUNBLFFBQUksU0FBUztBQUNiO0FBQ0EsV0FBTztBQUFBO0FBRVQsTUFBSSxlQUFlO0FBQ25CLE1BQUksb0JBQW9CO0FBQ3hCLDRCQUEwQjtBQUN4QixtQkFBZTtBQUFBO0FBRWpCLDRDQUEwQztBQUN4QyxtQkFBZTtBQUNmLGFBQVM7QUFDVCx3QkFBb0I7QUFBQTtBQUV0QixvQkFBa0IsV0FBVztBQUMzQixRQUFJLGNBQWM7QUFDaEIsMEJBQW9CLGtCQUFrQixPQUFPO0FBQzdDO0FBQUE7QUFFRixRQUFJLGFBQWE7QUFDakIsUUFBSSxlQUFlO0FBQ25CLFFBQUksa0JBQWtCLElBQUk7QUFDMUIsUUFBSSxvQkFBb0IsSUFBSTtBQUM1QixhQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3pDLFVBQUksVUFBVSxHQUFHLE9BQU87QUFDdEI7QUFDRixVQUFJLFVBQVUsR0FBRyxTQUFTLGFBQWE7QUFDckMsa0JBQVUsR0FBRyxXQUFXLFFBQVEsQ0FBQyxTQUFTLEtBQUssYUFBYSxLQUFLLFdBQVcsS0FBSztBQUNqRixrQkFBVSxHQUFHLGFBQWEsUUFBUSxDQUFDLFNBQVMsS0FBSyxhQUFhLEtBQUssYUFBYSxLQUFLO0FBQUE7QUFFdkYsVUFBSSxVQUFVLEdBQUcsU0FBUyxjQUFjO0FBQ3RDLFlBQUksS0FBSyxVQUFVLEdBQUc7QUFDdEIsWUFBSSxPQUFPLFVBQVUsR0FBRztBQUN4QixZQUFJLFdBQVcsVUFBVSxHQUFHO0FBQzVCLFlBQUksTUFBTSxNQUFNO0FBQ2QsY0FBSSxDQUFDLGdCQUFnQixJQUFJO0FBQ3ZCLDRCQUFnQixJQUFJLElBQUk7QUFDMUIsMEJBQWdCLElBQUksSUFBSSxLQUFLLEVBQUMsTUFBTSxPQUFPLEdBQUcsYUFBYTtBQUFBO0FBRTdELFlBQUksU0FBUyxNQUFNO0FBQ2pCLGNBQUksQ0FBQyxrQkFBa0IsSUFBSTtBQUN6Qiw4QkFBa0IsSUFBSSxJQUFJO0FBQzVCLDRCQUFrQixJQUFJLElBQUksS0FBSztBQUFBO0FBRWpDLFlBQUksR0FBRyxhQUFhLFNBQVMsYUFBYSxNQUFNO0FBQzlDO0FBQUEsbUJBQ1MsR0FBRyxhQUFhLE9BQU87QUFDaEM7QUFDQTtBQUFBLGVBQ0s7QUFDTDtBQUFBO0FBQUE7QUFBQTtBQUlOLHNCQUFrQixRQUFRLENBQUMsT0FBTyxPQUFPO0FBQ3ZDLHdCQUFrQixJQUFJO0FBQUE7QUFFeEIsb0JBQWdCLFFBQVEsQ0FBQyxPQUFPLE9BQU87QUFDckMsd0JBQWtCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSTtBQUFBO0FBRXpDLGFBQVMsUUFBUSxZQUFZO0FBQzNCLFVBQUksYUFBYSxTQUFTO0FBQ3hCO0FBQ0YsaUJBQVcsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUFBO0FBRTlCLGFBQVMsUUFBUSxjQUFjO0FBQzdCLFVBQUksV0FBVyxTQUFTO0FBQ3RCO0FBQ0YsbUJBQWEsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUFBO0FBRWhDLGlCQUFhO0FBQ2IsbUJBQWU7QUFDZixzQkFBa0I7QUFDbEIsd0JBQW9CO0FBQUE7QUFJdEIsMEJBQXdCLE1BQU0sT0FBTyxlQUFlO0FBQ2xELFNBQUssZUFBZSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsaUJBQWlCO0FBQ2pFLFdBQU8sTUFBTTtBQUNYLFdBQUssZUFBZSxLQUFLLGFBQWEsT0FBTyxDQUFDLE1BQU0sTUFBTTtBQUFBO0FBQUE7QUFHOUQsd0JBQXNCLFNBQVMsT0FBTztBQUNwQyxRQUFJLGdCQUFnQixRQUFRLGFBQWE7QUFDekMsV0FBTyxRQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsS0FBSyxXQUFXO0FBQzlDLG9CQUFjLE9BQU87QUFBQTtBQUFBO0FBR3pCLDRCQUEwQixNQUFNO0FBQzlCLFFBQUksS0FBSztBQUNQLGFBQU8sS0FBSztBQUNkLFFBQUksT0FBTyxlQUFlLGNBQWMsZ0JBQWdCLFlBQVk7QUFDbEUsYUFBTyxpQkFBaUIsS0FBSztBQUFBO0FBRS9CLFFBQUksQ0FBQyxLQUFLLFlBQVk7QUFDcEIsYUFBTztBQUFBO0FBRVQsV0FBTyxpQkFBaUIsS0FBSztBQUFBO0FBRS9CLHdCQUFzQixTQUFTO0FBQzdCLFFBQUksWUFBWSxJQUFJLE1BQU0sSUFBSTtBQUFBLE1BQzVCLFNBQVMsTUFBTTtBQUNiLGVBQU8sTUFBTSxLQUFLLElBQUksSUFBSSxRQUFRLFFBQVEsQ0FBQyxNQUFNLE9BQU8sS0FBSztBQUFBO0FBQUEsTUFFL0QsS0FBSyxDQUFDLFFBQVEsU0FBUztBQUNyQixlQUFPLFFBQVEsS0FBSyxDQUFDLFFBQVEsSUFBSSxlQUFlO0FBQUE7QUFBQSxNQUVsRCxLQUFLLENBQUMsUUFBUSxTQUFTO0FBQ3JCLGVBQVEsU0FBUSxLQUFLLENBQUMsUUFBUTtBQUM1QixjQUFJLElBQUksZUFBZSxPQUFPO0FBQzVCLGdCQUFJLGFBQWEsT0FBTyx5QkFBeUIsS0FBSztBQUN0RCxnQkFBSSxXQUFXLE9BQU8sV0FBVyxJQUFJLG1CQUFtQixXQUFXLE9BQU8sV0FBVyxJQUFJLGlCQUFpQjtBQUN4RyxxQkFBTztBQUFBO0FBRVQsZ0JBQUssWUFBVyxPQUFPLFdBQVcsUUFBUSxXQUFXLFlBQVk7QUFDL0Qsa0JBQUksU0FBUyxXQUFXO0FBQ3hCLGtCQUFJLFNBQVMsV0FBVztBQUN4QixrQkFBSSxXQUFXO0FBQ2YsdUJBQVMsVUFBVSxPQUFPLEtBQUs7QUFDL0IsdUJBQVMsVUFBVSxPQUFPLEtBQUs7QUFDL0Isa0JBQUk7QUFDRix1QkFBTyxrQkFBa0I7QUFDM0Isa0JBQUk7QUFDRix1QkFBTyxrQkFBa0I7QUFDM0IscUJBQU8sZUFBZSxLQUFLLE1BQU0saUNBQzVCLFdBRDRCO0FBQUEsZ0JBRS9CLEtBQUs7QUFBQSxnQkFDTCxLQUFLO0FBQUE7QUFBQTtBQUdULG1CQUFPO0FBQUE7QUFFVCxpQkFBTztBQUFBLGNBQ0gsSUFBSTtBQUFBO0FBQUEsTUFFWixLQUFLLENBQUMsUUFBUSxNQUFNLFVBQVU7QUFDNUIsWUFBSSx1QkFBdUIsUUFBUSxLQUFLLENBQUMsUUFBUSxJQUFJLGVBQWU7QUFDcEUsWUFBSSxzQkFBc0I7QUFDeEIsK0JBQXFCLFFBQVE7QUFBQSxlQUN4QjtBQUNMLGtCQUFRLFFBQVEsU0FBUyxHQUFHLFFBQVE7QUFBQTtBQUV0QyxlQUFPO0FBQUE7QUFBQTtBQUdYLFdBQU87QUFBQTtBQUlULDRCQUEwQixPQUFPO0FBQy9CLFFBQUksV0FBVyxDQUFDLFFBQVEsT0FBTyxRQUFRLFlBQVksQ0FBQyxNQUFNLFFBQVEsUUFBUSxRQUFRO0FBQ2xGLFFBQUksVUFBVSxDQUFDLEtBQUssV0FBVyxPQUFPO0FBQ3BDLGFBQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLEtBQUssV0FBVztBQUM1QyxZQUFJLE9BQU8sYUFBYSxLQUFLLE1BQU0sR0FBRyxZQUFZO0FBQ2xELFlBQUksT0FBTyxVQUFVLFlBQVksVUFBVSxRQUFRLE1BQU0sZ0JBQWdCO0FBQ3ZFLGNBQUksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNO0FBQUEsZUFDcEM7QUFDTCxjQUFJLFNBQVMsVUFBVSxVQUFVLE9BQU8sQ0FBRSxrQkFBaUIsVUFBVTtBQUNuRSxvQkFBUSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLdkIsV0FBTyxRQUFRO0FBQUE7QUFFakIsdUJBQXFCLFVBQVUsWUFBWSxNQUFNO0FBQUEsS0FDOUM7QUFDRCxRQUFJLE1BQU07QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLFdBQVcsT0FBTyxNQUFNLEtBQUs7QUFDM0IsZUFBTyxTQUFTLEtBQUssY0FBYyxNQUFNLElBQUksT0FBTyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sTUFBTSxRQUFRLE1BQU07QUFBQTtBQUFBO0FBR3pHLGNBQVU7QUFDVixXQUFPLENBQUMsaUJBQWlCO0FBQ3ZCLFVBQUksT0FBTyxpQkFBaUIsWUFBWSxpQkFBaUIsUUFBUSxhQUFhLGdCQUFnQjtBQUM1RixZQUFJLGFBQWEsSUFBSSxXQUFXLEtBQUs7QUFDckMsWUFBSSxhQUFhLENBQUMsT0FBTyxNQUFNLFFBQVE7QUFDckMsY0FBSSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU07QUFDdEQsY0FBSSxlQUFlO0FBQ25CLGlCQUFPLFdBQVcsT0FBTyxNQUFNO0FBQUE7QUFBQSxhQUU1QjtBQUNMLFlBQUksZUFBZTtBQUFBO0FBRXJCLGFBQU87QUFBQTtBQUFBO0FBR1gsZUFBYSxLQUFLLE1BQU07QUFDdEIsV0FBTyxLQUFLLE1BQU0sS0FBSyxPQUFPLENBQUMsT0FBTyxZQUFZLE1BQU0sVUFBVTtBQUFBO0FBRXBFLGVBQWEsS0FBSyxNQUFNLE9BQU87QUFDN0IsUUFBSSxPQUFPLFNBQVM7QUFDbEIsYUFBTyxLQUFLLE1BQU07QUFDcEIsUUFBSSxLQUFLLFdBQVc7QUFDbEIsVUFBSSxLQUFLLE1BQU07QUFBQSxhQUNSLEtBQUssV0FBVztBQUN2QixZQUFNO0FBQUEsU0FDSDtBQUNILFVBQUksSUFBSSxLQUFLO0FBQ1gsZUFBTyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssTUFBTSxJQUFJO0FBQUEsV0FDckM7QUFDSCxZQUFJLEtBQUssTUFBTTtBQUNmLGVBQU8sSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLE1BQU0sSUFBSTtBQUFBO0FBQUE7QUFBQTtBQU05QyxNQUFJLFNBQVM7QUFDYixpQkFBZSxNQUFNLFVBQVU7QUFDN0IsV0FBTyxRQUFRO0FBQUE7QUFFakIsd0JBQXNCLEtBQUssSUFBSTtBQUM3QixXQUFPLFFBQVEsUUFBUSxRQUFRLENBQUMsQ0FBQyxNQUFNLGNBQWM7QUFDbkQsYUFBTyxlQUFlLEtBQUssSUFBSSxRQUFRO0FBQUEsUUFDckMsTUFBTTtBQUNKLGlCQUFPLFNBQVMsSUFBSSxFQUFDLFFBQVEsZ0JBQWdCO0FBQUE7QUFBQSxRQUUvQyxZQUFZO0FBQUE7QUFBQTtBQUdoQixXQUFPO0FBQUE7QUFJVCxvQkFBa0IsSUFBSSxZQUFZLFNBQVMsSUFBSTtBQUM3QyxRQUFJO0FBQ0osa0JBQWMsSUFBSSxZQUFZLENBQUMsVUFBVSxTQUFTLE9BQU87QUFDekQsV0FBTztBQUFBO0FBRVQsNEJBQTBCLE1BQU07QUFDOUIsV0FBTyxxQkFBcUIsR0FBRztBQUFBO0FBRWpDLE1BQUksdUJBQXVCO0FBQzNCLHdCQUFzQixjQUFjO0FBQ2xDLDJCQUF1QjtBQUFBO0FBRXpCLDJCQUF5QixJQUFJLFlBQVk7QUFDdkMsUUFBSSxtQkFBbUI7QUFDdkIsaUJBQWEsa0JBQWtCO0FBQy9CLFFBQUksWUFBWSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQjtBQUN2RCxRQUFJLE9BQU8sZUFBZSxZQUFZO0FBQ3BDLGFBQU8sOEJBQThCLFdBQVc7QUFBQTtBQUVsRCxRQUFJLFlBQVksNEJBQTRCLFdBQVc7QUFDdkQsV0FBTyxTQUFTLEtBQUssTUFBTSxJQUFJLFlBQVk7QUFBQTtBQUU3Qyx5Q0FBdUMsV0FBVyxNQUFNO0FBQ3RELFdBQU8sQ0FBQyxXQUFXLE1BQU07QUFBQSxPQUN0QixFQUFDLFFBQVEsSUFBSSxTQUFTLE9BQU0sT0FBTztBQUNwQyxVQUFJLFNBQVMsS0FBSyxNQUFNLGFBQWEsQ0FBQyxPQUFPLEdBQUcsYUFBYTtBQUM3RCwwQkFBb0IsVUFBVTtBQUFBO0FBQUE7QUFHbEMsTUFBSSxnQkFBZ0I7QUFDcEIsc0NBQW9DLFlBQVk7QUFDOUMsUUFBSSxjQUFjLGFBQWE7QUFDN0IsYUFBTyxjQUFjO0FBQUE7QUFFdkIsUUFBSSxnQkFBZ0IsT0FBTyxlQUFlLFdBQWlCO0FBQUE7QUFBQTtBQUFBLE9BQ3hEO0FBQ0gsUUFBSSwwQkFBMEIscUJBQXFCLEtBQUssZUFBZSxlQUFlLEtBQUssY0FBYyxZQUFZLG9CQUFvQjtBQUN6SSxRQUFJLE9BQU8sSUFBSSxjQUFjLENBQUMsVUFBVSxVQUFVLGtDQUFrQztBQUNwRixrQkFBYyxjQUFjO0FBQzVCLFdBQU87QUFBQTtBQUVULHVDQUFxQyxXQUFXLFlBQVk7QUFDMUQsUUFBSSxPQUFPLDJCQUEyQjtBQUN0QyxXQUFPLENBQUMsV0FBVyxNQUFNO0FBQUEsT0FDdEIsRUFBQyxRQUFRLElBQUksU0FBUyxPQUFNLE9BQU87QUFDcEMsV0FBSyxTQUFTO0FBQ2QsV0FBSyxXQUFXO0FBQ2hCLFVBQUksZ0JBQWdCLGFBQWEsQ0FBQyxPQUFPLEdBQUc7QUFDNUMsVUFBSSxVQUFVLEtBQUssTUFBTTtBQUN6QixVQUFJLEtBQUssVUFBVTtBQUNqQiw0QkFBb0IsVUFBVSxLQUFLLFFBQVEsZUFBZTtBQUFBLGFBQ3JEO0FBQ0wsZ0JBQVEsS0FBSyxDQUFDLFdBQVc7QUFDdkIsOEJBQW9CLFVBQVUsUUFBUSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLN0QsK0JBQTZCLFVBQVUsT0FBTyxPQUFPLFFBQVE7QUFDM0QsUUFBSSxPQUFPLFVBQVUsWUFBWTtBQUMvQixVQUFJLFNBQVMsTUFBTSxNQUFNLE9BQU87QUFDaEMsVUFBSSxrQkFBa0IsU0FBUztBQUM3QixlQUFPLEtBQUssQ0FBQyxNQUFNLG9CQUFvQixVQUFVLEdBQUcsT0FBTztBQUFBLGFBQ3REO0FBQ0wsaUJBQVM7QUFBQTtBQUFBLFdBRU47QUFDTCxlQUFTO0FBQUE7QUFBQTtBQUdiLG9CQUFrQixJQUFJLFlBQVksYUFBYSxNQUFNO0FBQ25ELFFBQUk7QUFDRixhQUFPLFNBQVMsR0FBRztBQUFBLGFBQ1osR0FBUDtBQUNBLGNBQVEsS0FBSyw0QkFBNEIsRUFBRTtBQUFBO0FBQUEsZUFFaEM7QUFBQTtBQUFBLEdBRVo7QUFDQyxZQUFNO0FBQUE7QUFBQTtBQUtWLE1BQUksaUJBQWlCO0FBQ3JCLGtCQUFnQixVQUFVLElBQUk7QUFDNUIsV0FBTyxpQkFBaUI7QUFBQTtBQUUxQixxQkFBbUIsV0FBVztBQUM1QixxQkFBaUI7QUFBQTtBQUVuQixNQUFJLG9CQUFvQjtBQUN4QixxQkFBbUIsTUFBTSxVQUFVO0FBQ2pDLHNCQUFrQixRQUFRO0FBQUE7QUFFNUIsc0JBQW9CLElBQUksWUFBWSwyQkFBMkI7QUFDN0QsUUFBSSwwQkFBMEI7QUFDOUIsUUFBSSxjQUFjLE1BQU0sS0FBSyxZQUFZLElBQUksd0JBQXdCLENBQUMsU0FBUyxZQUFZLHdCQUF3QixXQUFXLFVBQVUsT0FBTyx3QkFBd0IsSUFBSSxtQkFBbUIseUJBQXlCLDRCQUE0QixLQUFLO0FBQ3hQLFdBQU8sWUFBWSxJQUFJLENBQUMsZUFBZTtBQUNyQyxhQUFPLG9CQUFvQixJQUFJO0FBQUE7QUFBQTtBQUduQywwQkFBd0IsWUFBWTtBQUNsQyxXQUFPLE1BQU0sS0FBSyxZQUFZLElBQUksMkJBQTJCLE9BQU8sQ0FBQyxTQUFTLENBQUMsdUJBQXVCO0FBQUE7QUFFeEcsTUFBSSxzQkFBc0I7QUFDMUIsTUFBSSx5QkFBeUIsSUFBSTtBQUNqQyxNQUFJLHlCQUF5QjtBQUM3QixtQ0FBaUMsVUFBVTtBQUN6QywwQkFBc0I7QUFDdEIsUUFBSSxNQUFNO0FBQ1YsNkJBQXlCO0FBQ3pCLDJCQUF1QixJQUFJLEtBQUs7QUFDaEMsUUFBSSxnQkFBZ0IsTUFBTTtBQUN4QixhQUFPLHVCQUF1QixJQUFJLEtBQUs7QUFDckMsK0JBQXVCLElBQUksS0FBSztBQUNsQyw2QkFBdUIsT0FBTztBQUFBO0FBRWhDLFFBQUksZ0JBQWdCLE1BQU07QUFDeEIsNEJBQXNCO0FBQ3RCO0FBQUE7QUFFRixhQUFTO0FBQ1Q7QUFBQTtBQUVGLCtCQUE2QixJQUFJLFlBQVk7QUFDM0MsUUFBSSxPQUFPLE1BQU07QUFBQTtBQUVqQixRQUFJLFdBQVcsa0JBQWtCLFdBQVcsU0FBUztBQUNyRCxRQUFJLFdBQVc7QUFDZixRQUFJLFVBQVUsQ0FBQyxhQUFhLFNBQVMsS0FBSztBQUMxQyxRQUFJLENBQUMsU0FBUyxpQkFBaUIsbUJBQW1CO0FBQ2xELGFBQVMsS0FBSztBQUNkLFFBQUksWUFBWTtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1I7QUFBQSxNQUNBLGVBQWUsY0FBYyxLQUFLLGVBQWU7QUFBQSxNQUNqRCxVQUFVLFNBQVMsS0FBSyxVQUFVO0FBQUE7QUFFcEMsUUFBSSxZQUFZLE1BQU0sU0FBUyxRQUFRLENBQUMsTUFBTTtBQUM5Qyx1QkFBbUIsSUFBSSxXQUFXLFVBQVU7QUFDNUMsUUFBSSxjQUFjLE1BQU07QUFDdEIsVUFBSSxHQUFHLGFBQWEsR0FBRztBQUNyQjtBQUNGLGVBQVMsVUFBVSxTQUFTLE9BQU8sSUFBSSxZQUFZO0FBQ25ELGlCQUFXLFNBQVMsS0FBSyxVQUFVLElBQUksWUFBWTtBQUNuRCw0QkFBc0IsdUJBQXVCLElBQUksd0JBQXdCLEtBQUssWUFBWTtBQUFBO0FBRTVGLGdCQUFZLGNBQWM7QUFDMUIsV0FBTztBQUFBO0FBRVQsTUFBSSxlQUFlLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFDLE1BQU0sWUFBVztBQUM5RCxRQUFJLEtBQUssV0FBVztBQUNsQixhQUFPLEtBQUssUUFBUSxTQUFTO0FBQy9CLFdBQU8sRUFBQyxNQUFNO0FBQUE7QUFFaEIsTUFBSSxPQUFPLENBQUMsTUFBTTtBQUNsQixtQ0FBaUMsV0FBVyxNQUFNO0FBQUEsS0FDL0M7QUFDRCxXQUFPLENBQUMsRUFBQyxNQUFNLFlBQVc7QUFDeEIsVUFBSSxFQUFDLE1BQU0sU0FBUyxPQUFPLGFBQVksc0JBQXNCLE9BQU8sQ0FBQyxPQUFPLGNBQWM7QUFDeEYsZUFBTyxVQUFVO0FBQUEsU0FDaEIsRUFBQyxNQUFNO0FBQ1YsVUFBSSxZQUFZO0FBQ2QsaUJBQVMsU0FBUztBQUNwQixhQUFPLEVBQUMsTUFBTSxTQUFTLE9BQU87QUFBQTtBQUFBO0FBR2xDLE1BQUksd0JBQXdCO0FBQzVCLHlCQUF1QixVQUFVO0FBQy9CLDBCQUFzQixLQUFLO0FBQUE7QUFFN0Isa0NBQWdDLEVBQUMsUUFBTztBQUN0QyxXQUFPLHVCQUF1QixLQUFLO0FBQUE7QUFFckMsTUFBSSx1QkFBdUIsTUFBTSxJQUFJLE9BQU8sSUFBSTtBQUNoRCw4QkFBNEIseUJBQXlCLDJCQUEyQjtBQUM5RSxXQUFPLENBQUMsRUFBQyxNQUFNLFlBQVc7QUFDeEIsVUFBSSxZQUFZLEtBQUssTUFBTTtBQUMzQixVQUFJLGFBQWEsS0FBSyxNQUFNO0FBQzVCLFVBQUksWUFBWSxLQUFLLE1BQU0sNEJBQTRCO0FBQ3ZELFVBQUksV0FBVyw2QkFBNkIsd0JBQXdCLFNBQVM7QUFDN0UsYUFBTztBQUFBLFFBQ0wsTUFBTSxZQUFZLFVBQVUsS0FBSztBQUFBLFFBQ2pDLE9BQU8sYUFBYSxXQUFXLEtBQUs7QUFBQSxRQUNwQyxXQUFXLFVBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEtBQUs7QUFBQSxRQUMvQyxZQUFZO0FBQUEsUUFDWjtBQUFBO0FBQUE7QUFBQTtBQUlOLE1BQUksVUFBVTtBQUNkLE1BQUksaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBRUYsc0JBQW9CLEdBQUcsR0FBRztBQUN4QixRQUFJLFFBQVEsZUFBZSxRQUFRLEVBQUUsVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUNoRSxRQUFJLFFBQVEsZUFBZSxRQUFRLEVBQUUsVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUNoRSxXQUFPLGVBQWUsUUFBUSxTQUFTLGVBQWUsUUFBUTtBQUFBO0FBSWhFLG9CQUFrQixJQUFJLE1BQU0sU0FBUyxJQUFJO0FBQ3ZDLE9BQUcsY0FBYyxJQUFJLFlBQVksTUFBTTtBQUFBLE1BQ3JDO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUE7QUFBQTtBQUtoQixNQUFJLFlBQVk7QUFDaEIsTUFBSSxZQUFZO0FBQ2hCLG9CQUFrQixVQUFVO0FBQzFCLGNBQVUsS0FBSztBQUNmLG1CQUFlLE1BQU07QUFDbkIsbUJBQWEsV0FBVyxNQUFNO0FBQzVCO0FBQUE7QUFBQTtBQUFBO0FBSU4sOEJBQTRCO0FBQzFCLGdCQUFZO0FBQ1osV0FBTyxVQUFVO0FBQ2YsZ0JBQVU7QUFBQTtBQUVkLDJCQUF5QjtBQUN2QixnQkFBWTtBQUFBO0FBSWQsZ0JBQWMsSUFBSSxVQUFVO0FBQzFCLFFBQUksT0FBTyxlQUFlLGNBQWMsY0FBYyxZQUFZO0FBQ2hFLFlBQU0sS0FBSyxHQUFHLFVBQVUsUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLO0FBQ25EO0FBQUE7QUFFRixRQUFJLE9BQU87QUFDWCxhQUFTLElBQUksTUFBTSxPQUFPO0FBQzFCLFFBQUk7QUFDRjtBQUNGLFFBQUksT0FBTyxHQUFHO0FBQ2QsV0FBTyxNQUFNO0FBQ1gsV0FBSyxNQUFNLFVBQVU7QUFDckIsYUFBTyxLQUFLO0FBQUE7QUFBQTtBQUtoQixnQkFBYyxZQUFZLE1BQU07QUFDOUIsWUFBUSxLQUFLLG1CQUFtQixXQUFXLEdBQUc7QUFBQTtBQUloRCxtQkFBaUI7QUFDZixRQUFJLENBQUMsU0FBUztBQUNaLFdBQUs7QUFDUCxhQUFTLFVBQVU7QUFDbkIsYUFBUyxVQUFVO0FBQ25CO0FBQ0EsY0FBVSxDQUFDLE9BQU8sU0FBUyxJQUFJO0FBQy9CLGdCQUFZLENBQUMsT0FBTyxTQUFTLE1BQU0sWUFBWTtBQUMvQyxzQkFBa0IsQ0FBQyxJQUFJLFVBQVU7QUFDL0IsaUJBQVcsSUFBSSxPQUFPLFFBQVEsQ0FBQyxXQUFXO0FBQUE7QUFFNUMsUUFBSSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLGVBQWU7QUFDakUsVUFBTSxLQUFLLFNBQVMsaUJBQWlCLGlCQUFpQixPQUFPLHFCQUFxQixRQUFRLENBQUMsT0FBTztBQUNoRyxlQUFTO0FBQUE7QUFFWCxhQUFTLFVBQVU7QUFBQTtBQUVyQixNQUFJLHdCQUF3QjtBQUM1QixNQUFJLHdCQUF3QjtBQUM1QiwyQkFBeUI7QUFDdkIsV0FBTyxzQkFBc0IsSUFBSSxDQUFDLE9BQU87QUFBQTtBQUUzQywwQkFBd0I7QUFDdEIsV0FBTyxzQkFBc0IsT0FBTyx1QkFBdUIsSUFBSSxDQUFDLE9BQU87QUFBQTtBQUV6RSwyQkFBeUIsa0JBQWtCO0FBQ3pDLDBCQUFzQixLQUFLO0FBQUE7QUFFN0IsMkJBQXlCLGtCQUFrQjtBQUN6QywwQkFBc0IsS0FBSztBQUFBO0FBRTdCLHVCQUFxQixJQUFJLHVCQUF1QixPQUFPO0FBQ3JELFFBQUksQ0FBQztBQUNIO0FBQ0YsVUFBTSxZQUFZLHVCQUF1QixpQkFBaUI7QUFDMUQsUUFBSSxVQUFVLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUTtBQUMxQyxhQUFPO0FBQ1QsUUFBSSxDQUFDLEdBQUc7QUFDTjtBQUNGLFdBQU8sWUFBWSxHQUFHLGVBQWU7QUFBQTtBQUV2QyxrQkFBZ0IsSUFBSTtBQUNsQixXQUFPLGdCQUFnQixLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVE7QUFBQTtBQUV2RCxvQkFBa0IsSUFBSSxTQUFTLE1BQU07QUFDbkMsNEJBQXdCLE1BQU07QUFDNUIsYUFBTyxJQUFJLENBQUMsS0FBSyxTQUFTO0FBQ3hCLG1CQUFXLEtBQUssSUFBSSxZQUFZLFFBQVEsQ0FBQyxXQUFXO0FBQ3BELFlBQUksYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUl2Qix1QkFBcUIsTUFBTTtBQUN6QixTQUFLLE1BQU0sQ0FBQyxPQUFPLGtCQUFrQjtBQUFBO0FBSXZDLHNCQUFvQixJQUFJLE9BQU87QUFDN0IsUUFBSSxNQUFNLFFBQVEsUUFBUTtBQUN4QixhQUFPLHFCQUFxQixJQUFJLE1BQU0sS0FBSztBQUFBLGVBQ2xDLE9BQU8sVUFBVSxZQUFZLFVBQVUsTUFBTTtBQUN0RCxhQUFPLHFCQUFxQixJQUFJO0FBQUEsZUFDdkIsT0FBTyxVQUFVLFlBQVk7QUFDdEMsYUFBTyxXQUFXLElBQUk7QUFBQTtBQUV4QixXQUFPLHFCQUFxQixJQUFJO0FBQUE7QUFFbEMsZ0NBQThCLElBQUksYUFBYTtBQUM3QyxRQUFJLFFBQVEsQ0FBQyxpQkFBaUIsYUFBYSxNQUFNLEtBQUssT0FBTztBQUM3RCxRQUFJLGlCQUFpQixDQUFDLGlCQUFpQixhQUFhLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxTQUFTLElBQUksT0FBTztBQUMvRyxRQUFJLDBCQUEwQixDQUFDLFlBQVk7QUFDekMsU0FBRyxVQUFVLElBQUksR0FBRztBQUNwQixhQUFPLE1BQU07QUFDWCxXQUFHLFVBQVUsT0FBTyxHQUFHO0FBQUE7QUFBQTtBQUczQixrQkFBYyxnQkFBZ0IsT0FBTyxjQUFjLEtBQUssZUFBZTtBQUN2RSxXQUFPLHdCQUF3QixlQUFlO0FBQUE7QUFFaEQsZ0NBQThCLElBQUksYUFBYTtBQUM3QyxRQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsWUFBWSxNQUFNLEtBQUssT0FBTztBQUMzRCxRQUFJLFNBQVMsT0FBTyxRQUFRLGFBQWEsUUFBUSxDQUFDLENBQUMsYUFBYSxVQUFVLE9BQU8sTUFBTSxlQUFlLE9BQU8sT0FBTztBQUNwSCxRQUFJLFlBQVksT0FBTyxRQUFRLGFBQWEsUUFBUSxDQUFDLENBQUMsYUFBYSxVQUFVLENBQUMsT0FBTyxNQUFNLGVBQWUsT0FBTyxPQUFPO0FBQ3hILFFBQUksUUFBUTtBQUNaLFFBQUksVUFBVTtBQUNkLGNBQVUsUUFBUSxDQUFDLE1BQU07QUFDdkIsVUFBSSxHQUFHLFVBQVUsU0FBUyxJQUFJO0FBQzVCLFdBQUcsVUFBVSxPQUFPO0FBQ3BCLGdCQUFRLEtBQUs7QUFBQTtBQUFBO0FBR2pCLFdBQU8sUUFBUSxDQUFDLE1BQU07QUFDcEIsVUFBSSxDQUFDLEdBQUcsVUFBVSxTQUFTLElBQUk7QUFDN0IsV0FBRyxVQUFVLElBQUk7QUFDakIsY0FBTSxLQUFLO0FBQUE7QUFBQTtBQUdmLFdBQU8sTUFBTTtBQUNYLGNBQVEsUUFBUSxDQUFDLE1BQU0sR0FBRyxVQUFVLElBQUk7QUFDeEMsWUFBTSxRQUFRLENBQUMsTUFBTSxHQUFHLFVBQVUsT0FBTztBQUFBO0FBQUE7QUFLN0MscUJBQW1CLElBQUksT0FBTztBQUM1QixRQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsTUFBTTtBQUMvQyxhQUFPLG9CQUFvQixJQUFJO0FBQUE7QUFFakMsV0FBTyxvQkFBb0IsSUFBSTtBQUFBO0FBRWpDLCtCQUE2QixJQUFJLE9BQU87QUFDdEMsUUFBSSxpQkFBaUI7QUFDckIsV0FBTyxRQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsS0FBSyxZQUFZO0FBQy9DLHFCQUFlLE9BQU8sR0FBRyxNQUFNO0FBQy9CLFNBQUcsTUFBTSxZQUFZLFVBQVUsTUFBTTtBQUFBO0FBRXZDLGVBQVcsTUFBTTtBQUNmLFVBQUksR0FBRyxNQUFNLFdBQVcsR0FBRztBQUN6QixXQUFHLGdCQUFnQjtBQUFBO0FBQUE7QUFHdkIsV0FBTyxNQUFNO0FBQ1gsZ0JBQVUsSUFBSTtBQUFBO0FBQUE7QUFHbEIsK0JBQTZCLElBQUksT0FBTztBQUN0QyxRQUFJLFFBQVEsR0FBRyxhQUFhLFNBQVM7QUFDckMsT0FBRyxhQUFhLFNBQVM7QUFDekIsV0FBTyxNQUFNO0FBQ1gsU0FBRyxhQUFhLFNBQVM7QUFBQTtBQUFBO0FBRzdCLHFCQUFtQixTQUFTO0FBQzFCLFdBQU8sUUFBUSxRQUFRLG1CQUFtQixTQUFTO0FBQUE7QUFJckQsZ0JBQWMsVUFBVSxXQUFXLE1BQU07QUFBQSxLQUN0QztBQUNELFFBQUksU0FBUztBQUNiLFdBQU8sV0FBVztBQUNoQixVQUFJLENBQUMsUUFBUTtBQUNYLGlCQUFTO0FBQ1QsaUJBQVMsTUFBTSxNQUFNO0FBQUEsYUFDaEI7QUFDTCxpQkFBUyxNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFNM0IsWUFBVSxjQUFjLENBQUMsSUFBSSxFQUFDLE9BQU8sV0FBVyxjQUFhLEVBQUMsVUFBVSxnQkFBZTtBQUNyRixRQUFJLE9BQU8sZUFBZTtBQUN4QixtQkFBYSxVQUFVO0FBQ3pCLFFBQUksQ0FBQyxZQUFZO0FBQ2Ysb0NBQThCLElBQUksV0FBVztBQUFBLFdBQ3hDO0FBQ0wseUNBQW1DLElBQUksWUFBWTtBQUFBO0FBQUE7QUFHdkQsOENBQTRDLElBQUksYUFBYSxPQUFPO0FBQ2xFLDZCQUF5QixJQUFJLFlBQVk7QUFDekMsUUFBSSxzQkFBc0I7QUFBQSxNQUN4QixPQUFPLENBQUMsWUFBWTtBQUNsQixXQUFHLGNBQWMsTUFBTSxTQUFTO0FBQUE7QUFBQSxNQUVsQyxlQUFlLENBQUMsWUFBWTtBQUMxQixXQUFHLGNBQWMsTUFBTSxRQUFRO0FBQUE7QUFBQSxNQUVqQyxhQUFhLENBQUMsWUFBWTtBQUN4QixXQUFHLGNBQWMsTUFBTSxNQUFNO0FBQUE7QUFBQSxNQUUvQixPQUFPLENBQUMsWUFBWTtBQUNsQixXQUFHLGNBQWMsTUFBTSxTQUFTO0FBQUE7QUFBQSxNQUVsQyxlQUFlLENBQUMsWUFBWTtBQUMxQixXQUFHLGNBQWMsTUFBTSxRQUFRO0FBQUE7QUFBQSxNQUVqQyxhQUFhLENBQUMsWUFBWTtBQUN4QixXQUFHLGNBQWMsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUdqQyx3QkFBb0IsT0FBTztBQUFBO0FBRTdCLHlDQUF1QyxJQUFJLFdBQVcsT0FBTztBQUMzRCw2QkFBeUIsSUFBSTtBQUM3QixRQUFJLGdCQUFnQixDQUFDLFVBQVUsU0FBUyxTQUFTLENBQUMsVUFBVSxTQUFTLFVBQVUsQ0FBQztBQUNoRixRQUFJLGtCQUFrQixpQkFBaUIsVUFBVSxTQUFTLFNBQVMsQ0FBQyxTQUFTLFNBQVM7QUFDdEYsUUFBSSxtQkFBbUIsaUJBQWlCLFVBQVUsU0FBUyxVQUFVLENBQUMsU0FBUyxTQUFTO0FBQ3hGLFFBQUksVUFBVSxTQUFTLFNBQVMsQ0FBQyxlQUFlO0FBQzlDLGtCQUFZLFVBQVUsT0FBTyxDQUFDLEdBQUcsVUFBVSxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBRXZFLFFBQUksVUFBVSxTQUFTLFVBQVUsQ0FBQyxlQUFlO0FBQy9DLGtCQUFZLFVBQVUsT0FBTyxDQUFDLEdBQUcsVUFBVSxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBRXZFLFFBQUksV0FBVyxDQUFDLFVBQVUsU0FBUyxjQUFjLENBQUMsVUFBVSxTQUFTO0FBQ3JFLFFBQUksZUFBZSxZQUFZLFVBQVUsU0FBUztBQUNsRCxRQUFJLGFBQWEsWUFBWSxVQUFVLFNBQVM7QUFDaEQsUUFBSSxlQUFlLGVBQWUsSUFBSTtBQUN0QyxRQUFJLGFBQWEsYUFBYSxjQUFjLFdBQVcsU0FBUyxNQUFNLE1BQU07QUFDNUUsUUFBSSxRQUFRLGNBQWMsV0FBVyxTQUFTO0FBQzlDLFFBQUksU0FBUyxjQUFjLFdBQVcsVUFBVTtBQUNoRCxRQUFJLFdBQVc7QUFDZixRQUFJLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTztBQUM3RCxRQUFJLGNBQWMsY0FBYyxXQUFXLFlBQVksTUFBTTtBQUM3RCxRQUFJLFNBQVM7QUFDYixRQUFJLGlCQUFpQjtBQUNuQixTQUFHLGNBQWMsTUFBTSxTQUFTO0FBQUEsUUFDOUIsaUJBQWlCO0FBQUEsUUFDakIsaUJBQWlCO0FBQUEsUUFDakIsb0JBQW9CO0FBQUEsUUFDcEIsb0JBQW9CLEdBQUc7QUFBQSxRQUN2QiwwQkFBMEI7QUFBQTtBQUU1QixTQUFHLGNBQWMsTUFBTSxRQUFRO0FBQUEsUUFDN0IsU0FBUztBQUFBLFFBQ1QsV0FBVyxTQUFTO0FBQUE7QUFFdEIsU0FBRyxjQUFjLE1BQU0sTUFBTTtBQUFBLFFBQzNCLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQTtBQUFBO0FBR2YsUUFBSSxrQkFBa0I7QUFDcEIsU0FBRyxjQUFjLE1BQU0sU0FBUztBQUFBLFFBQzlCLGlCQUFpQjtBQUFBLFFBQ2pCLGlCQUFpQjtBQUFBLFFBQ2pCLG9CQUFvQjtBQUFBLFFBQ3BCLG9CQUFvQixHQUFHO0FBQUEsUUFDdkIsMEJBQTBCO0FBQUE7QUFFNUIsU0FBRyxjQUFjLE1BQU0sUUFBUTtBQUFBLFFBQzdCLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQTtBQUViLFNBQUcsY0FBYyxNQUFNLE1BQU07QUFBQSxRQUMzQixTQUFTO0FBQUEsUUFDVCxXQUFXLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFJMUIsb0NBQWtDLElBQUksYUFBYSxlQUFlLElBQUk7QUFDcEUsUUFBSSxDQUFDLEdBQUc7QUFDTixTQUFHLGdCQUFnQjtBQUFBLFFBQ2pCLE9BQU8sRUFBQyxRQUFRLGNBQWMsT0FBTyxjQUFjLEtBQUs7QUFBQSxRQUN4RCxPQUFPLEVBQUMsUUFBUSxjQUFjLE9BQU8sY0FBYyxLQUFLO0FBQUEsUUFDeEQsR0FBRyxTQUFTLE1BQU07QUFBQSxXQUNmLFFBQVEsTUFBTTtBQUFBLFdBQ2Q7QUFDRCxxQkFBVyxJQUFJLGFBQWE7QUFBQSxZQUMxQixRQUFRLEtBQUssTUFBTTtBQUFBLFlBQ25CLE9BQU8sS0FBSyxNQUFNO0FBQUEsWUFDbEIsS0FBSyxLQUFLLE1BQU07QUFBQSxhQUNmLFFBQVE7QUFBQTtBQUFBLFFBRWIsSUFBSSxTQUFTLE1BQU07QUFBQSxXQUNoQixRQUFRLE1BQU07QUFBQSxXQUNkO0FBQ0QscUJBQVcsSUFBSSxhQUFhO0FBQUEsWUFDMUIsUUFBUSxLQUFLLE1BQU07QUFBQSxZQUNuQixPQUFPLEtBQUssTUFBTTtBQUFBLFlBQ2xCLEtBQUssS0FBSyxNQUFNO0FBQUEsYUFDZixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBSW5CLFNBQU8sUUFBUSxVQUFVLHFDQUFxQyxTQUFTLElBQUksT0FBTyxNQUFNLE1BQU07QUFDNUYsUUFBSSwwQkFBMEIsTUFBTTtBQUNsQyxlQUFTLG9CQUFvQixZQUFZLHNCQUFzQixRQUFRLFdBQVc7QUFBQTtBQUVwRixRQUFJLE9BQU87QUFDVCxTQUFHLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxRQUFRO0FBQy9DO0FBQUE7QUFFRixPQUFHLGlCQUFpQixHQUFHLGdCQUFnQixJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEUsU0FBRyxjQUFjLElBQUksTUFBTTtBQUFBLFNBQ3hCLE1BQU0sUUFBUTtBQUNqQixTQUFHLGlCQUFpQixhQUFhLE1BQU0sT0FBTyxFQUFDLDJCQUEyQjtBQUFBLFNBQ3ZFLFFBQVEsUUFBUTtBQUNyQixtQkFBZSxNQUFNO0FBQ25CLFVBQUksVUFBVSxZQUFZO0FBQzFCLFVBQUksU0FBUztBQUNYLFlBQUksQ0FBQyxRQUFRO0FBQ1gsa0JBQVEsa0JBQWtCO0FBQzVCLGdCQUFRLGdCQUFnQixLQUFLO0FBQUEsYUFDeEI7QUFDTCx1QkFBZSxNQUFNO0FBQ25CLGNBQUksb0JBQW9CLENBQUMsUUFBUTtBQUMvQixnQkFBSSxRQUFRLFFBQVEsSUFBSTtBQUFBLGNBQ3RCLElBQUk7QUFBQSxjQUNKLEdBQUksS0FBSSxtQkFBbUIsSUFBSSxJQUFJO0FBQUEsZUFDbEMsS0FBSyxDQUFDLENBQUMsT0FBTztBQUNqQixtQkFBTyxJQUFJO0FBQ1gsbUJBQU8sSUFBSTtBQUNYLG1CQUFPO0FBQUE7QUFFVCw0QkFBa0IsSUFBSSxNQUFNLENBQUMsTUFBTTtBQUNqQyxnQkFBSSxDQUFDLEVBQUU7QUFDTCxvQkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNbEIsdUJBQXFCLElBQUk7QUFDdkIsUUFBSSxTQUFTLEdBQUc7QUFDaEIsUUFBSSxDQUFDO0FBQ0g7QUFDRixXQUFPLE9BQU8saUJBQWlCLFNBQVMsWUFBWTtBQUFBO0FBRXRELHNCQUFvQixJQUFJLGFBQWEsRUFBQyxRQUFRLE9BQU8sUUFBUSxRQUFPLElBQUksU0FBUyxNQUFNO0FBQUEsS0FDcEYsUUFBUSxNQUFNO0FBQUEsS0FDZDtBQUNELFFBQUksR0FBRztBQUNMLFNBQUcsaUJBQWlCO0FBQ3RCLFFBQUksT0FBTyxLQUFLLFFBQVEsV0FBVyxLQUFLLE9BQU8sS0FBSyxRQUFRLFdBQVcsS0FBSyxPQUFPLEtBQUssS0FBSyxXQUFXLEdBQUc7QUFDekc7QUFDQTtBQUNBO0FBQUE7QUFFRixRQUFJLFdBQVcsWUFBWTtBQUMzQixzQkFBa0IsSUFBSTtBQUFBLE1BQ3BCLFFBQVE7QUFDTixvQkFBWSxZQUFZLElBQUk7QUFBQTtBQUFBLE1BRTlCLFNBQVM7QUFDUCxxQkFBYSxZQUFZLElBQUk7QUFBQTtBQUFBLE1BRS9CO0FBQUEsTUFDQSxNQUFNO0FBQ0o7QUFDQSxrQkFBVSxZQUFZLElBQUk7QUFBQTtBQUFBLE1BRTVCO0FBQUEsTUFDQSxVQUFVO0FBQ1I7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlOLDZCQUEyQixJQUFJLFFBQVE7QUFDckMsUUFBSSxhQUFhLGVBQWU7QUFDaEMsUUFBSSxTQUFTLEtBQUssTUFBTTtBQUN0QixnQkFBVSxNQUFNO0FBQ2Qsc0JBQWM7QUFDZCxZQUFJLENBQUM7QUFDSCxpQkFBTztBQUNULFlBQUksQ0FBQyxZQUFZO0FBQ2YsaUJBQU87QUFDUDtBQUFBO0FBRUYsZUFBTztBQUNQLFlBQUksR0FBRztBQUNMLGlCQUFPO0FBQ1QsZUFBTyxHQUFHO0FBQUE7QUFBQTtBQUdkLE9BQUcsbUJBQW1CO0FBQUEsTUFDcEIsZUFBZTtBQUFBLE1BQ2YsYUFBYSxVQUFVO0FBQ3JCLGFBQUssY0FBYyxLQUFLO0FBQUE7QUFBQSxNQUUxQixRQUFRLEtBQUssV0FBVztBQUN0QixlQUFPLEtBQUssY0FBYyxRQUFRO0FBQ2hDLGVBQUssY0FBYztBQUFBO0FBRXJCO0FBQ0E7QUFBQTtBQUFBLE1BRUY7QUFBQTtBQUVGLGNBQVUsTUFBTTtBQUNkLGFBQU87QUFDUCxhQUFPO0FBQUE7QUFFVDtBQUNBLDBCQUFzQixNQUFNO0FBQzFCLFVBQUk7QUFDRjtBQUNGLFVBQUksV0FBVyxPQUFPLGlCQUFpQixJQUFJLG1CQUFtQixRQUFRLE9BQU8sSUFBSSxRQUFRLEtBQUssT0FBTztBQUNyRyxVQUFJLFFBQVEsT0FBTyxpQkFBaUIsSUFBSSxnQkFBZ0IsUUFBUSxPQUFPLElBQUksUUFBUSxLQUFLLE9BQU87QUFDL0YsVUFBSSxhQUFhO0FBQ2YsbUJBQVcsT0FBTyxpQkFBaUIsSUFBSSxrQkFBa0IsUUFBUSxLQUFLLE9BQU87QUFDL0UsZ0JBQVUsTUFBTTtBQUNkLGVBQU87QUFBQTtBQUVULHNCQUFnQjtBQUNoQiw0QkFBc0IsTUFBTTtBQUMxQixZQUFJO0FBQ0Y7QUFDRixrQkFBVSxNQUFNO0FBQ2QsaUJBQU87QUFBQTtBQUVUO0FBQ0EsbUJBQVcsR0FBRyxpQkFBaUIsUUFBUSxXQUFXO0FBQ2xELHFCQUFhO0FBQUE7QUFBQTtBQUFBO0FBSW5CLHlCQUF1QixXQUFXLEtBQUssVUFBVTtBQUMvQyxRQUFJLFVBQVUsUUFBUSxTQUFTO0FBQzdCLGFBQU87QUFDVCxVQUFNLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTztBQUNwRCxRQUFJLENBQUM7QUFDSCxhQUFPO0FBQ1QsUUFBSSxRQUFRLFNBQVM7QUFDbkIsVUFBSSxNQUFNO0FBQ1IsZUFBTztBQUFBO0FBRVgsUUFBSSxRQUFRLFlBQVk7QUFDdEIsVUFBSSxRQUFRLFNBQVMsTUFBTTtBQUMzQixVQUFJO0FBQ0YsZUFBTyxNQUFNO0FBQUE7QUFFakIsUUFBSSxRQUFRLFVBQVU7QUFDcEIsVUFBSSxDQUFDLE9BQU8sU0FBUyxRQUFRLFVBQVUsVUFBVSxTQUFTLFVBQVUsVUFBVSxRQUFRLE9BQU8sS0FBSztBQUNoRyxlQUFPLENBQUMsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLElBQUksS0FBSztBQUFBO0FBQUE7QUFHbEUsV0FBTztBQUFBO0FBSVQsb0JBQWtCLE1BQU0sTUFBTTtBQUM1QixRQUFJO0FBQ0osV0FBTyxXQUFXO0FBQ2hCLFVBQUksVUFBVSxNQUFNLE9BQU87QUFDM0IsVUFBSSxRQUFRLFdBQVc7QUFDckIsa0JBQVU7QUFDVixhQUFLLE1BQU0sU0FBUztBQUFBO0FBRXRCLG1CQUFhO0FBQ2IsZ0JBQVUsV0FBVyxPQUFPO0FBQUE7QUFBQTtBQUtoQyxvQkFBa0IsTUFBTSxPQUFPO0FBQzdCLFFBQUk7QUFDSixXQUFPLFdBQVc7QUFDaEIsVUFBSSxVQUFVLE1BQU0sT0FBTztBQUMzQixVQUFJLENBQUMsWUFBWTtBQUNmLGFBQUssTUFBTSxTQUFTO0FBQ3BCLHFCQUFhO0FBQ2IsbUJBQVcsTUFBTSxhQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFNM0Msa0JBQWdCLFVBQVU7QUFDeEIsYUFBUztBQUFBO0FBSVgsTUFBSSxTQUFTO0FBQ2IsTUFBSSxhQUFhO0FBQ2pCLGlCQUFlLE1BQU0sT0FBTztBQUMxQixRQUFJLENBQUMsWUFBWTtBQUNmLGVBQVMsU0FBUztBQUNsQixtQkFBYTtBQUFBO0FBRWYsUUFBSSxVQUFVLFFBQVE7QUFDcEIsYUFBTyxPQUFPO0FBQUE7QUFFaEIsV0FBTyxRQUFRO0FBQ2YsUUFBSSxPQUFPLFVBQVUsWUFBWSxVQUFVLFFBQVEsTUFBTSxlQUFlLFdBQVcsT0FBTyxNQUFNLFNBQVMsWUFBWTtBQUNuSCxhQUFPLE1BQU07QUFBQTtBQUFBO0FBR2pCLHVCQUFxQjtBQUNuQixXQUFPO0FBQUE7QUFJVCxNQUFJLFlBQVk7QUFDaEIsMkJBQXlCLFVBQVU7QUFDakMsV0FBTyxJQUFJLFNBQVMsYUFBYSxTQUFTLEdBQUc7QUFBQTtBQUUvQyxpQkFBZSxPQUFPLE9BQU87QUFDM0IsVUFBTSxlQUFlLE1BQU07QUFDM0IsZ0JBQVk7QUFDWixvQ0FBZ0MsTUFBTTtBQUNwQyxnQkFBVTtBQUFBO0FBRVosZ0JBQVk7QUFBQTtBQUVkLHFCQUFtQixJQUFJO0FBQ3JCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksZ0JBQWdCLENBQUMsS0FBSyxhQUFhO0FBQ3JDLFdBQUssS0FBSyxDQUFDLEtBQUssU0FBUztBQUN2QixZQUFJLHdCQUF3QixPQUFPO0FBQ2pDLGlCQUFPO0FBQ1QsK0JBQXVCO0FBQ3ZCLGlCQUFTLEtBQUs7QUFBQTtBQUFBO0FBR2xCLGFBQVMsSUFBSTtBQUFBO0FBRWYsMkNBQXlDLFVBQVU7QUFDakQsUUFBSSxRQUFRO0FBQ1osbUJBQWUsQ0FBQyxXQUFXLE9BQU87QUFDaEMsVUFBSSxlQUFlLE1BQU07QUFDekIsY0FBUTtBQUNSLGFBQU8sTUFBTTtBQUFBO0FBQUE7QUFHZjtBQUNBLG1CQUFlO0FBQUE7QUFJakIsTUFBSSxRQUFRO0FBQ1osZ0JBQWMsTUFBTSxVQUFVO0FBQzVCLFVBQU0sUUFBUTtBQUFBO0FBRWhCLCtCQUE2QixLQUFLLFNBQVM7QUFDekMsV0FBTyxRQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsTUFBTSxjQUFjO0FBQ2xELGFBQU8sZUFBZSxLQUFLLE1BQU07QUFBQSxRQUMvQixNQUFNO0FBQ0osaUJBQU8sSUFBSSxTQUFTO0FBQ2xCLG1CQUFPLFNBQVMsS0FBSyxTQUFTLEdBQUc7QUFBQTtBQUFBO0FBQUEsUUFHckMsWUFBWTtBQUFBO0FBQUE7QUFHaEIsV0FBTztBQUFBO0FBSVQsTUFBSSxTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQ2IsYUFBTztBQUFBO0FBQUEsUUFFTCxVQUFVO0FBQ1osYUFBTztBQUFBO0FBQUEsUUFFTCxTQUFTO0FBQ1gsYUFBTztBQUFBO0FBQUEsUUFFTCxNQUFNO0FBQ1IsYUFBTztBQUFBO0FBQUEsSUFFVCxTQUFTO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBRUYsTUFBSSxpQkFBaUI7QUFHckIsTUFBSSxxQkFBcUIsWUFBVztBQUdwQyxRQUFNLFlBQVksTUFBTTtBQUd4QixRQUFNLFlBQVksQ0FBQyxPQUFPLFNBQVMsS0FBSyxVQUFVO0FBR2xELFFBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLGFBQWE7QUFDeEMsUUFBSSxZQUFZLGNBQWMsSUFBSTtBQUNsQyxRQUFJLFlBQVk7QUFDaEIsUUFBSTtBQUNKLFdBQU8sTUFBTSxVQUFVLENBQUMsVUFBVTtBQUNoQyxVQUFJLE1BQU0sU0FBUyxjQUFjO0FBQ2pDLFVBQUksUUFBUSxZQUFZO0FBQ3hCLFVBQUksQ0FBQyxXQUFXO0FBQ2QsdUJBQWUsTUFBTTtBQUNuQixtQkFBUyxPQUFPO0FBQ2hCLHFCQUFXO0FBQUE7QUFBQSxhQUVSO0FBQ0wsbUJBQVc7QUFBQTtBQUViLGtCQUFZO0FBQUE7QUFBQTtBQUtoQixRQUFNLFNBQVM7QUFHZixRQUFNLFFBQVEsQ0FBQyxPQUFPLFlBQVk7QUFHbEMsUUFBTSxRQUFRLENBQUMsT0FBTztBQUNwQixRQUFJLEdBQUc7QUFDTCxhQUFPLEdBQUc7QUFDWixPQUFHLGdCQUFnQixhQUFhLG9CQUFvQjtBQUNwRCxXQUFPLEdBQUc7QUFBQTtBQUVaLCtCQUE2QixJQUFJO0FBQy9CLFFBQUksYUFBYTtBQUNqQixRQUFJLFlBQVk7QUFDaEIsV0FBTyxXQUFXO0FBQ2hCLFVBQUksVUFBVTtBQUNaLG1CQUFXLEtBQUssVUFBVTtBQUM1QixrQkFBWSxVQUFVO0FBQUE7QUFFeEIsV0FBTztBQUFBO0FBSVQsUUFBTSxNQUFNLENBQUMsT0FBTztBQUdwQixNQUFJLFVBQVUsTUFBTTtBQUFBO0FBRXBCLFVBQVEsU0FBUyxDQUFDLElBQUksRUFBQyxhQUFZLEVBQUMsY0FBYTtBQUMvQyxjQUFVLFNBQVMsVUFBVSxHQUFHLGdCQUFnQixPQUFPLEdBQUcsWUFBWTtBQUN0RSxZQUFRLE1BQU07QUFDWixnQkFBVSxTQUFTLFVBQVUsT0FBTyxHQUFHLGdCQUFnQixPQUFPLEdBQUc7QUFBQTtBQUFBO0FBR3JFLFlBQVUsVUFBVTtBQUdwQixZQUFVLFVBQVUsQ0FBQyxJQUFJLEVBQUMsY0FBYSxFQUFDLFFBQVEsY0FBYSxRQUFRLGNBQWMsSUFBSTtBQUd2RixnQkFBYyxJQUFJLE1BQU0sT0FBTyxZQUFZLElBQUk7QUFDN0MsUUFBSSxDQUFDLEdBQUc7QUFDTixTQUFHLGNBQWMsU0FBUztBQUM1QixPQUFHLFlBQVksUUFBUTtBQUN2QixXQUFPLFVBQVUsU0FBUyxXQUFXLFVBQVUsUUFBUTtBQUN2RCxZQUFRO0FBQUEsV0FDRDtBQUNILHVCQUFlLElBQUk7QUFDbkI7QUFBQSxXQUNHO0FBQ0gsbUJBQVcsSUFBSTtBQUNmO0FBQUEsV0FDRztBQUNILG9CQUFZLElBQUk7QUFDaEI7QUFBQTtBQUVBLHNCQUFjLElBQUksTUFBTTtBQUN4QjtBQUFBO0FBQUE7QUFHTiwwQkFBd0IsSUFBSSxPQUFPO0FBQ2pDLFFBQUksR0FBRyxTQUFTLFNBQVM7QUFDdkIsVUFBSSxHQUFHLFdBQVcsVUFBVSxRQUFRO0FBQ2xDLFdBQUcsUUFBUTtBQUFBO0FBRWIsVUFBSSxPQUFPLFdBQVc7QUFDcEIsV0FBRyxVQUFVLHdCQUF3QixHQUFHLE9BQU87QUFBQTtBQUFBLGVBRXhDLEdBQUcsU0FBUyxZQUFZO0FBQ2pDLFVBQUksT0FBTyxVQUFVLFFBQVE7QUFDM0IsV0FBRyxRQUFRO0FBQUEsaUJBQ0YsQ0FBQyxPQUFPLFVBQVUsVUFBVSxDQUFDLE1BQU0sUUFBUSxVQUFVLE9BQU8sVUFBVSxhQUFhLENBQUMsQ0FBQyxNQUFNLFFBQVEsU0FBUyxRQUFRO0FBQzdILFdBQUcsUUFBUSxPQUFPO0FBQUEsYUFDYjtBQUNMLFlBQUksTUFBTSxRQUFRLFFBQVE7QUFDeEIsYUFBRyxVQUFVLE1BQU0sS0FBSyxDQUFDLFFBQVEsd0JBQXdCLEtBQUssR0FBRztBQUFBLGVBQzVEO0FBQ0wsYUFBRyxVQUFVLENBQUMsQ0FBQztBQUFBO0FBQUE7QUFBQSxlQUdWLEdBQUcsWUFBWSxVQUFVO0FBQ2xDLG1CQUFhLElBQUk7QUFBQSxXQUNaO0FBQ0wsVUFBSSxHQUFHLFVBQVU7QUFDZjtBQUNGLFNBQUcsUUFBUTtBQUFBO0FBQUE7QUFHZix1QkFBcUIsSUFBSSxPQUFPO0FBQzlCLFFBQUksR0FBRztBQUNMLFNBQUc7QUFDTCxPQUFHLHNCQUFzQixXQUFXLElBQUk7QUFBQTtBQUUxQyxzQkFBb0IsSUFBSSxPQUFPO0FBQzdCLFFBQUksR0FBRztBQUNMLFNBQUc7QUFDTCxPQUFHLHFCQUFxQixVQUFVLElBQUk7QUFBQTtBQUV4Qyx5QkFBdUIsSUFBSSxNQUFNLE9BQU87QUFDdEMsUUFBSSxDQUFDLE1BQU0sUUFBUSxPQUFPLFNBQVMsVUFBVSxvQ0FBb0MsT0FBTztBQUN0RixTQUFHLGdCQUFnQjtBQUFBLFdBQ2Q7QUFDTCxVQUFJLGNBQWM7QUFDaEIsZ0JBQVE7QUFDVixtQkFBYSxJQUFJLE1BQU07QUFBQTtBQUFBO0FBRzNCLHdCQUFzQixJQUFJLFVBQVUsT0FBTztBQUN6QyxRQUFJLEdBQUcsYUFBYSxhQUFhLE9BQU87QUFDdEMsU0FBRyxhQUFhLFVBQVU7QUFBQTtBQUFBO0FBRzlCLHdCQUFzQixJQUFJLE9BQU87QUFDL0IsVUFBTSxvQkFBb0IsR0FBRyxPQUFPLE9BQU8sSUFBSSxDQUFDLFdBQVc7QUFDekQsYUFBTyxTQUFTO0FBQUE7QUFFbEIsVUFBTSxLQUFLLEdBQUcsU0FBUyxRQUFRLENBQUMsV0FBVztBQUN6QyxhQUFPLFdBQVcsa0JBQWtCLFNBQVMsT0FBTztBQUFBO0FBQUE7QUFHeEQscUJBQW1CLFNBQVM7QUFDMUIsV0FBTyxRQUFRLGNBQWMsUUFBUSxVQUFVLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFBQTtBQUV2RSxtQ0FBaUMsUUFBUSxRQUFRO0FBQy9DLFdBQU8sVUFBVTtBQUFBO0FBRW5CLHlCQUF1QixVQUFVO0FBQy9CLFVBQU0sb0JBQW9CO0FBQUEsTUFDeEI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUVGLFdBQU8sa0JBQWtCLFNBQVM7QUFBQTtBQUVwQywrQ0FBNkMsTUFBTTtBQUNqRCxXQUFPLENBQUMsQ0FBQyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixTQUFTO0FBQUE7QUFJckUsY0FBWSxJQUFJLE9BQU8sV0FBVyxVQUFVO0FBQzFDLFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksV0FBVyxDQUFDLE1BQU0sU0FBUztBQUMvQixRQUFJLFVBQVU7QUFDZCxRQUFJLGNBQWMsQ0FBQyxXQUFXLFlBQVksQ0FBQyxNQUFNLFFBQVEsV0FBVztBQUNwRSxRQUFJLFVBQVUsU0FBUztBQUNyQixjQUFRLFVBQVU7QUFDcEIsUUFBSSxVQUFVLFNBQVM7QUFDckIsY0FBUSxXQUFXO0FBQ3JCLFFBQUksVUFBVSxTQUFTO0FBQ3JCLGNBQVEsVUFBVTtBQUNwQixRQUFJLFVBQVUsU0FBUztBQUNyQixjQUFRLFVBQVU7QUFDcEIsUUFBSSxVQUFVLFNBQVM7QUFDckIsdUJBQWlCO0FBQ25CLFFBQUksVUFBVSxTQUFTO0FBQ3JCLHVCQUFpQjtBQUNuQixRQUFJLFVBQVUsU0FBUztBQUNyQixpQkFBVyxZQUFZLFVBQVUsQ0FBQyxNQUFNLE1BQU07QUFDNUMsVUFBRTtBQUNGLGFBQUs7QUFBQTtBQUVULFFBQUksVUFBVSxTQUFTO0FBQ3JCLGlCQUFXLFlBQVksVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUM1QyxVQUFFO0FBQ0YsYUFBSztBQUFBO0FBRVQsUUFBSSxVQUFVLFNBQVM7QUFDckIsaUJBQVcsWUFBWSxVQUFVLENBQUMsTUFBTSxNQUFNO0FBQzVDLFVBQUUsV0FBVyxNQUFNLEtBQUs7QUFBQTtBQUU1QixRQUFJLFVBQVUsU0FBUyxXQUFXLFVBQVUsU0FBUyxZQUFZO0FBQy9ELHVCQUFpQjtBQUNqQixpQkFBVyxZQUFZLFVBQVUsQ0FBQyxNQUFNLE1BQU07QUFDNUMsWUFBSSxHQUFHLFNBQVMsRUFBRTtBQUNoQjtBQUNGLFlBQUksR0FBRyxjQUFjLEtBQUssR0FBRyxlQUFlO0FBQzFDO0FBQ0YsYUFBSztBQUFBO0FBQUE7QUFHVCxlQUFXLFlBQVksVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUM1QyxVQUFJLFdBQVcsUUFBUTtBQUNyQixZQUFJLCtDQUErQyxHQUFHLFlBQVk7QUFDaEU7QUFBQTtBQUFBO0FBR0osV0FBSztBQUFBO0FBRVAsUUFBSSxVQUFVLFNBQVMsYUFBYTtBQUNsQyxVQUFJLGVBQWUsVUFBVSxVQUFVLFFBQVEsY0FBYyxNQUFNO0FBQ25FLFVBQUksT0FBTyxVQUFVLGFBQWEsTUFBTSxNQUFNLE1BQU0sT0FBTyxhQUFhLE1BQU0sTUFBTSxNQUFNO0FBQzFGLGlCQUFXLFNBQVMsVUFBVTtBQUFBO0FBRWhDLFFBQUksVUFBVSxTQUFTLGFBQWE7QUFDbEMsVUFBSSxlQUFlLFVBQVUsVUFBVSxRQUFRLGNBQWMsTUFBTTtBQUNuRSxVQUFJLE9BQU8sVUFBVSxhQUFhLE1BQU0sTUFBTSxNQUFNLE9BQU8sYUFBYSxNQUFNLE1BQU0sTUFBTTtBQUMxRixpQkFBVyxTQUFTLFVBQVU7QUFBQTtBQUVoQyxRQUFJLFVBQVUsU0FBUyxTQUFTO0FBQzlCLGlCQUFXLFlBQVksVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUM1QyxhQUFLO0FBQ0wsdUJBQWUsb0JBQW9CLE9BQU8sVUFBVTtBQUFBO0FBQUE7QUFHeEQsbUJBQWUsaUJBQWlCLE9BQU8sVUFBVTtBQUNqRCxXQUFPLE1BQU07QUFDWCxxQkFBZSxvQkFBb0IsT0FBTyxVQUFVO0FBQUE7QUFBQTtBQUd4RCxxQkFBbUIsU0FBUztBQUMxQixXQUFPLFFBQVEsUUFBUSxNQUFNO0FBQUE7QUFFL0Isc0JBQW9CLFNBQVM7QUFDM0IsV0FBTyxRQUFRLGNBQWMsUUFBUSxVQUFVLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFBQTtBQUV2RSxxQkFBbUIsU0FBUztBQUMxQixXQUFPLENBQUMsTUFBTSxRQUFRLFlBQVksQ0FBQyxNQUFNO0FBQUE7QUFFM0Msc0JBQW9CLFNBQVM7QUFDM0IsV0FBTyxRQUFRLFFBQVEsbUJBQW1CLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFBQTtBQUUzRSxzQkFBb0IsT0FBTztBQUN6QixXQUFPLENBQUMsV0FBVyxTQUFTLFNBQVM7QUFBQTtBQUV2QywwREFBd0QsR0FBRyxXQUFXO0FBQ3BFLFFBQUksZUFBZSxVQUFVLE9BQU8sQ0FBQyxNQUFNO0FBQ3pDLGFBQU8sQ0FBQyxDQUFDLFVBQVUsWUFBWSxXQUFXLFFBQVEsUUFBUSxTQUFTO0FBQUE7QUFFckUsUUFBSSxhQUFhLFNBQVMsYUFBYTtBQUNyQyxVQUFJLGdCQUFnQixhQUFhLFFBQVE7QUFDekMsbUJBQWEsT0FBTyxlQUFlLFVBQVcsY0FBYSxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUFBO0FBRXpILFFBQUksYUFBYSxXQUFXO0FBQzFCLGFBQU87QUFDVCxRQUFJLGFBQWEsV0FBVyxLQUFLLGVBQWUsRUFBRSxLQUFLLFNBQVMsYUFBYTtBQUMzRSxhQUFPO0FBQ1QsVUFBTSxxQkFBcUIsQ0FBQyxRQUFRLFNBQVMsT0FBTyxRQUFRLE9BQU87QUFDbkUsVUFBTSw2QkFBNkIsbUJBQW1CLE9BQU8sQ0FBQyxhQUFhLGFBQWEsU0FBUztBQUNqRyxtQkFBZSxhQUFhLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLFNBQVM7QUFDL0UsUUFBSSwyQkFBMkIsU0FBUyxHQUFHO0FBQ3pDLFlBQU0sOEJBQThCLDJCQUEyQixPQUFPLENBQUMsYUFBYTtBQUNsRixZQUFJLGFBQWEsU0FBUyxhQUFhO0FBQ3JDLHFCQUFXO0FBQ2IsZUFBTyxFQUFFLEdBQUc7QUFBQTtBQUVkLFVBQUksNEJBQTRCLFdBQVcsMkJBQTJCLFFBQVE7QUFDNUUsWUFBSSxlQUFlLEVBQUUsS0FBSyxTQUFTLGFBQWE7QUFDOUMsaUJBQU87QUFBQTtBQUFBO0FBR2IsV0FBTztBQUFBO0FBRVQsMEJBQXdCLEtBQUs7QUFDM0IsUUFBSSxDQUFDO0FBQ0gsYUFBTztBQUNULFVBQU0sV0FBVztBQUNqQixRQUFJLG1CQUFtQjtBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQTtBQUVULHFCQUFpQixPQUFPO0FBQ3hCLFdBQU8sT0FBTyxLQUFLLGtCQUFrQixJQUFJLENBQUMsYUFBYTtBQUNyRCxVQUFJLGlCQUFpQixjQUFjO0FBQ2pDLGVBQU87QUFBQSxPQUNSLE9BQU8sQ0FBQyxhQUFhO0FBQUE7QUFJMUIsWUFBVSxTQUFTLENBQUMsSUFBSSxFQUFDLFdBQVcsY0FBYSxFQUFDLFFBQVEsU0FBUyxjQUFhO0FBQzlFLFFBQUksWUFBWSxjQUFjLElBQUk7QUFDbEMsUUFBSSx1QkFBdUIsR0FBRyw4Q0FBOEM7QUFDNUUsUUFBSSxxQkFBcUIsY0FBYyxJQUFJO0FBQzNDLFFBQUksUUFBUSxHQUFHLFFBQVEsa0JBQWtCLFlBQVksQ0FBQyxZQUFZLFNBQVMsU0FBUyxHQUFHLFNBQVMsVUFBVSxTQUFTLFVBQVUsV0FBVztBQUN4SSxRQUFJLG9CQUFvQiwyQkFBMkIsSUFBSSxXQUFXO0FBQ2xFLFFBQUksaUJBQWlCLEdBQUcsSUFBSSxPQUFPLFdBQVcsQ0FBQyxNQUFNO0FBQ25ELHlCQUFtQixNQUFNO0FBQUEsU0FDdEIsRUFBQyxPQUFPO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUix1QkFBdUI7QUFBQTtBQUFBO0FBRzNCLFlBQVEsTUFBTTtBQUNkLE9BQUcsc0JBQXNCLE1BQU07QUFDN0IsZ0JBQVUsQ0FBQyxVQUFVO0FBQ25CLFlBQUksVUFBVSxVQUFVLFdBQVcsTUFBTTtBQUN2QyxrQkFBUTtBQUNWLGVBQU8sWUFBWTtBQUNuQixrQkFBVSxNQUFNLEtBQUssSUFBSSxTQUFTO0FBQ2xDLGVBQU8sT0FBTztBQUFBO0FBQUE7QUFHbEIsWUFBUSxNQUFNO0FBQ1osVUFBSSxVQUFVLFNBQVMsa0JBQWtCLFNBQVMsY0FBYyxXQUFXO0FBQ3pFO0FBQ0YsU0FBRztBQUFBO0FBQUE7QUFHUCxzQ0FBb0MsSUFBSSxXQUFXLFlBQVk7QUFDN0QsUUFBSSxHQUFHLFNBQVMsU0FBUztBQUN2QixnQkFBVSxNQUFNO0FBQ2QsWUFBSSxDQUFDLEdBQUcsYUFBYTtBQUNuQixhQUFHLGFBQWEsUUFBUTtBQUFBO0FBQUE7QUFHOUIsV0FBTyxDQUFDLE9BQU8saUJBQWlCO0FBQzlCLGFBQU8sVUFBVSxNQUFNO0FBQ3JCLFlBQUksaUJBQWlCLGVBQWUsTUFBTSxXQUFXLFFBQVE7QUFDM0QsaUJBQU8sTUFBTSxVQUFVLE1BQU0sT0FBTztBQUFBLG1CQUMzQixHQUFHLFNBQVMsWUFBWTtBQUNqQyxjQUFJLE1BQU0sUUFBUSxlQUFlO0FBQy9CLGdCQUFJLFdBQVcsVUFBVSxTQUFTLFlBQVksZ0JBQWdCLE1BQU0sT0FBTyxTQUFTLE1BQU0sT0FBTztBQUNqRyxtQkFBTyxNQUFNLE9BQU8sVUFBVSxhQUFhLE9BQU8sQ0FBQyxhQUFhLGFBQWEsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsS0FBSztBQUFBLGlCQUN2SDtBQUNMLG1CQUFPLE1BQU0sT0FBTztBQUFBO0FBQUEsbUJBRWIsR0FBRyxRQUFRLGtCQUFrQixZQUFZLEdBQUcsVUFBVTtBQUMvRCxpQkFBTyxVQUFVLFNBQVMsWUFBWSxNQUFNLEtBQUssTUFBTSxPQUFPLGlCQUFpQixJQUFJLENBQUMsV0FBVztBQUM3RixnQkFBSSxXQUFXLE9BQU8sU0FBUyxPQUFPO0FBQ3RDLG1CQUFPLGdCQUFnQjtBQUFBLGVBQ3BCLE1BQU0sS0FBSyxNQUFNLE9BQU8saUJBQWlCLElBQUksQ0FBQyxXQUFXO0FBQzVELG1CQUFPLE9BQU8sU0FBUyxPQUFPO0FBQUE7QUFBQSxlQUUzQjtBQUNMLGNBQUksV0FBVyxNQUFNLE9BQU87QUFDNUIsaUJBQU8sVUFBVSxTQUFTLFlBQVksZ0JBQWdCLFlBQVksVUFBVSxTQUFTLFVBQVUsU0FBUyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLekgsMkJBQXlCLFVBQVU7QUFDakMsUUFBSSxTQUFTLFdBQVcsV0FBVyxZQUFZO0FBQy9DLFdBQU8sV0FBVyxVQUFVLFNBQVM7QUFBQTtBQUV2QyxvQ0FBa0MsUUFBUSxRQUFRO0FBQ2hELFdBQU8sVUFBVTtBQUFBO0FBRW5CLHNCQUFvQixTQUFTO0FBQzNCLFdBQU8sQ0FBQyxNQUFNLFFBQVEsWUFBWSxDQUFDLE1BQU07QUFBQTtBQUkzQyxZQUFVLFNBQVMsQ0FBQyxPQUFPLGVBQWUsTUFBTSxVQUFVLE1BQU0sR0FBRyxnQkFBZ0IsT0FBTztBQUcxRixrQkFBZ0IsTUFBTSxJQUFJLE9BQU87QUFDakMsWUFBVSxRQUFRLGdCQUFnQixDQUFDLElBQUksRUFBQyxpQkFBZ0I7QUFDdEQsUUFBSSxPQUFPLGVBQWUsVUFBVTtBQUNsQyxhQUFPLENBQUMsQ0FBQyxXQUFXLFVBQVUsU0FBUyxJQUFJLFlBQVksSUFBSTtBQUFBO0FBRTdELFdBQU8sU0FBUyxJQUFJLFlBQVksSUFBSTtBQUFBO0FBSXRDLFlBQVUsUUFBUSxDQUFDLElBQUksRUFBQyxjQUFhLEVBQUMsUUFBUSxTQUFTLGVBQWUscUJBQW9CO0FBQ3hGLFFBQUksWUFBWSxlQUFlO0FBQy9CLFlBQVEsTUFBTTtBQUNaLGdCQUFVLENBQUMsVUFBVTtBQUNuQixrQkFBVSxNQUFNO0FBQ2QsYUFBRyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPekIsWUFBVSxRQUFRLENBQUMsSUFBSSxFQUFDLGNBQWEsRUFBQyxRQUFRLFNBQVMsZUFBZSxxQkFBb0I7QUFDeEYsUUFBSSxZQUFZLGVBQWU7QUFDL0IsWUFBUSxNQUFNO0FBQ1osZ0JBQVUsQ0FBQyxVQUFVO0FBQ25CLFdBQUcsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQU1yQixnQkFBYyxhQUFhLEtBQUssS0FBSyxPQUFPO0FBQzVDLFlBQVUsUUFBUSxDQUFDLElBQUksRUFBQyxPQUFPLFdBQVcsWUFBWSxZQUFXLEVBQUMsUUFBUSxjQUFhO0FBQ3JGLFFBQUksQ0FBQztBQUNILGFBQU8sb0JBQW9CLElBQUksWUFBWSxVQUFVO0FBQ3ZELFFBQUksVUFBVTtBQUNaLGFBQU8sZ0JBQWdCLElBQUk7QUFDN0IsUUFBSSxZQUFZLGNBQWMsSUFBSTtBQUNsQyxZQUFRLE1BQU0sVUFBVSxDQUFDLFdBQVc7QUFDbEMsVUFBSSxXQUFXLFVBQVUsV0FBVyxNQUFNO0FBQ3hDLGlCQUFTO0FBQ1gsZ0JBQVUsTUFBTSxLQUFLLElBQUksT0FBTyxRQUFRO0FBQUE7QUFBQTtBQUc1QywrQkFBNkIsSUFBSSxZQUFZLFVBQVUsU0FBUztBQUM5RCxRQUFJLGNBQWMsY0FBYyxJQUFJO0FBQ3BDLFFBQUksaUJBQWlCO0FBQ3JCLFlBQVEsTUFBTTtBQUNaLGFBQU8sZUFBZTtBQUNwQix1QkFBZTtBQUNqQixrQkFBWSxDQUFDLGFBQWE7QUFDeEIsWUFBSSxhQUFhLE9BQU8sUUFBUSxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sV0FBWSxHQUFDLE1BQU07QUFDekUsdUJBQWUsWUFBWSxRQUFRLENBQUMsRUFBQyxNQUFNLFNBQVEsVUFBVTtBQUMzRCxxQkFBVyxTQUFTO0FBQUEsWUFDbEIsTUFBTSxVQUFVO0FBQUEsWUFDaEIsT0FBTyxJQUFJO0FBQUE7QUFBQTtBQUdmLG1CQUFXLElBQUksWUFBWSxVQUFVLElBQUksQ0FBQyxXQUFXO0FBQ25ELHlCQUFlLEtBQUssT0FBTztBQUMzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS1IsMkJBQXlCLElBQUksWUFBWTtBQUN2QyxPQUFHLG1CQUFtQjtBQUFBO0FBSXhCLGtCQUFnQixNQUFNLElBQUksT0FBTztBQUNqQyxZQUFVLFFBQVEsZ0JBQWdCLENBQUMsSUFBSSxFQUFDLGNBQWEsRUFBQyxjQUFhO0FBQ2pFLGlCQUFhLGVBQWUsS0FBSyxPQUFPO0FBQ3hDLFFBQUksZUFBZTtBQUNuQixpQkFBYSxjQUFjO0FBQzNCLFFBQUksc0JBQXNCO0FBQzFCLHdCQUFvQixxQkFBcUI7QUFDekMsUUFBSSxRQUFRLFNBQVMsSUFBSSxZQUFZLEVBQUMsT0FBTztBQUM3QyxpQkFBYSxPQUFPO0FBQ3BCLFFBQUksZUFBZSxTQUFTO0FBQzVCLHFCQUFpQjtBQUNqQixRQUFJLE9BQU8sZUFBZSxJQUFJO0FBQzlCLGlCQUFhLFdBQVcsU0FBUyxJQUFJLGFBQWE7QUFDbEQsWUFBUSxNQUFNO0FBQ1o7QUFDQSxtQkFBYSxjQUFjLFNBQVMsSUFBSSxhQUFhO0FBQUE7QUFBQTtBQUt6RCxZQUFVLFFBQVEsQ0FBQyxJQUFJLEVBQUMsV0FBVyxjQUFhLEVBQUMsUUFBUSxjQUFhO0FBQ3BFLFFBQUksWUFBWSxjQUFjLElBQUk7QUFDbEMsUUFBSSxPQUFPLE1BQU0sVUFBVSxNQUFNO0FBQy9CLFNBQUcsTUFBTSxVQUFVO0FBQ25CLFNBQUcsYUFBYTtBQUFBO0FBRWxCLFFBQUksT0FBTyxNQUFNLFVBQVUsTUFBTTtBQUMvQixVQUFJLEdBQUcsTUFBTSxXQUFXLEtBQUssR0FBRyxNQUFNLFlBQVksUUFBUTtBQUN4RCxXQUFHLGdCQUFnQjtBQUFBLGFBQ2Q7QUFDTCxXQUFHLE1BQU0sZUFBZTtBQUFBO0FBRTFCLFNBQUcsYUFBYTtBQUFBO0FBRWxCLFFBQUksMEJBQTBCLE1BQU0sV0FBVztBQUMvQyxRQUFJLFNBQVMsS0FBSyxDQUFDLFVBQVUsUUFBUSxTQUFTLFFBQVEsQ0FBQyxVQUFVO0FBQy9ELFVBQUksT0FBTyxHQUFHLHVDQUF1QyxZQUFZO0FBQy9ELFdBQUcsbUNBQW1DLElBQUksT0FBTyxNQUFNO0FBQUEsYUFDbEQ7QUFDTCxnQkFBUSw0QkFBNEI7QUFBQTtBQUFBO0FBR3hDLFFBQUk7QUFDSixRQUFJLFlBQVk7QUFDaEIsWUFBUSxNQUFNLFVBQVUsQ0FBQyxVQUFVO0FBQ2pDLFVBQUksQ0FBQyxhQUFhLFVBQVU7QUFDMUI7QUFDRixVQUFJLFVBQVUsU0FBUztBQUNyQixnQkFBUSw0QkFBNEI7QUFDdEMsYUFBTztBQUNQLGlCQUFXO0FBQ1gsa0JBQVk7QUFBQTtBQUFBO0FBS2hCLFlBQVUsT0FBTyxDQUFDLElBQUksRUFBQyxjQUFhLEVBQUMsUUFBUSxTQUFTLGNBQWE7QUFDakUsUUFBSSxnQkFBZ0IsbUJBQW1CO0FBQ3ZDLFFBQUksZ0JBQWdCLGNBQWMsSUFBSSxjQUFjO0FBQ3BELFFBQUksY0FBYyxjQUFjLElBQUksR0FBRyxvQkFBb0I7QUFDM0QsT0FBRyxjQUFjO0FBQ2pCLE9BQUcsWUFBWTtBQUNmLFlBQVEsTUFBTSxLQUFLLElBQUksZUFBZSxlQUFlO0FBQ3JELFlBQVEsTUFBTTtBQUNaLGFBQU8sT0FBTyxHQUFHLFdBQVcsUUFBUSxDQUFDLFFBQVEsSUFBSTtBQUNqRCxhQUFPLEdBQUc7QUFDVixhQUFPLEdBQUc7QUFBQTtBQUFBO0FBR2QsZ0JBQWMsSUFBSSxlQUFlLGVBQWUsYUFBYTtBQUMzRCxRQUFJLFdBQVcsQ0FBQyxNQUFNLE9BQU8sTUFBTSxZQUFZLENBQUMsTUFBTSxRQUFRO0FBQzlELFFBQUksYUFBYTtBQUNqQixrQkFBYyxDQUFDLFVBQVU7QUFDdkIsVUFBSSxXQUFXLFVBQVUsU0FBUyxHQUFHO0FBQ25DLGdCQUFRLE1BQU0sS0FBSyxNQUFNLE9BQU8sUUFBUSxDQUFDLE1BQU0sSUFBSTtBQUFBO0FBRXJELFVBQUksVUFBVTtBQUNaLGdCQUFRO0FBQ1YsVUFBSSxTQUFTLEdBQUc7QUFDaEIsVUFBSSxXQUFXLEdBQUc7QUFDbEIsVUFBSSxTQUFTO0FBQ2IsVUFBSSxPQUFPO0FBQ1gsVUFBSSxTQUFTLFFBQVE7QUFDbkIsZ0JBQVEsT0FBTyxRQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxXQUFXO0FBQ2xELGNBQUksUUFBUSwyQkFBMkIsZUFBZSxPQUFPLEtBQUs7QUFDbEUsc0JBQVksQ0FBQyxXQUFXLEtBQUssS0FBSyxTQUFTLEVBQUMsT0FBTyxpQkFBQyxPQUFPLE9BQVE7QUFDbkUsaUJBQU8sS0FBSztBQUFBO0FBQUEsYUFFVDtBQUNMLGlCQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLGNBQUksUUFBUSwyQkFBMkIsZUFBZSxNQUFNLElBQUksR0FBRztBQUNuRSxzQkFBWSxDQUFDLFVBQVUsS0FBSyxLQUFLLFFBQVEsRUFBQyxPQUFPLGlCQUFDLE9BQU8sS0FBTTtBQUMvRCxpQkFBTyxLQUFLO0FBQUE7QUFBQTtBQUdoQixVQUFJLE9BQU87QUFDWCxVQUFJLFFBQVE7QUFDWixVQUFJLFVBQVU7QUFDZCxVQUFJLFFBQVE7QUFDWixlQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsUUFBUSxLQUFLO0FBQ3hDLFlBQUksTUFBTSxTQUFTO0FBQ25CLFlBQUksS0FBSyxRQUFRLFNBQVM7QUFDeEIsa0JBQVEsS0FBSztBQUFBO0FBRWpCLGlCQUFXLFNBQVMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLFNBQVM7QUFDdEQsVUFBSSxVQUFVO0FBQ2QsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxZQUFJLE1BQU0sS0FBSztBQUNmLFlBQUksWUFBWSxTQUFTLFFBQVE7QUFDakMsWUFBSSxjQUFjLElBQUk7QUFDcEIsbUJBQVMsT0FBTyxHQUFHLEdBQUc7QUFDdEIsZUFBSyxLQUFLLENBQUMsU0FBUztBQUFBLG1CQUNYLGNBQWMsR0FBRztBQUMxQixjQUFJLFlBQVksU0FBUyxPQUFPLEdBQUcsR0FBRztBQUN0QyxjQUFJLGFBQWEsU0FBUyxPQUFPLFlBQVksR0FBRyxHQUFHO0FBQ25ELG1CQUFTLE9BQU8sR0FBRyxHQUFHO0FBQ3RCLG1CQUFTLE9BQU8sV0FBVyxHQUFHO0FBQzlCLGdCQUFNLEtBQUssQ0FBQyxXQUFXO0FBQUEsZUFDbEI7QUFDTCxnQkFBTSxLQUFLO0FBQUE7QUFFYixrQkFBVTtBQUFBO0FBRVosZUFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsS0FBSztBQUN2QyxZQUFJLE1BQU0sUUFBUTtBQUNsQixlQUFPLEtBQUs7QUFDWixlQUFPLE9BQU87QUFDZCxlQUFPLE9BQU87QUFBQTtBQUVoQixlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFlBQUksQ0FBQyxXQUFXLGNBQWMsTUFBTTtBQUNwQyxZQUFJLFdBQVcsT0FBTztBQUN0QixZQUFJLFlBQVksT0FBTztBQUN2QixZQUFJLFNBQVMsU0FBUyxjQUFjO0FBQ3BDLGtCQUFVLE1BQU07QUFDZCxvQkFBVSxNQUFNO0FBQ2hCLG1CQUFTLE1BQU07QUFDZixpQkFBTyxPQUFPO0FBQ2QsaUJBQU87QUFBQTtBQUVULHFCQUFhLFdBQVcsT0FBTyxLQUFLLFFBQVE7QUFBQTtBQUU5QyxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFlBQUksQ0FBQyxVQUFVLFNBQVMsS0FBSztBQUM3QixZQUFJLFNBQVMsYUFBYSxhQUFhLGFBQWEsT0FBTztBQUMzRCxZQUFJLFFBQVEsT0FBTztBQUNuQixZQUFJLE1BQU0sS0FBSztBQUNmLFlBQUksU0FBUyxTQUFTLFdBQVcsV0FBVyxTQUFTLE1BQU07QUFDM0QsdUJBQWUsUUFBUSxTQUFTLFFBQVE7QUFDeEMsa0JBQVUsTUFBTTtBQUNkLGlCQUFPLE1BQU07QUFDYixtQkFBUztBQUFBO0FBRVgsWUFBSSxPQUFPLFFBQVEsVUFBVTtBQUMzQixlQUFLLG9FQUFvRTtBQUFBO0FBRTNFLGVBQU8sT0FBTztBQUFBO0FBRWhCLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMscUJBQWEsT0FBTyxNQUFNLEtBQUssT0FBTyxLQUFLLFFBQVEsTUFBTTtBQUFBO0FBRTNELGlCQUFXLGNBQWM7QUFBQTtBQUFBO0FBRzdCLDhCQUE0QixZQUFZO0FBQ3RDLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksYUFBYTtBQUNqQixRQUFJLFVBQVUsV0FBVyxNQUFNO0FBQy9CLFFBQUksQ0FBQztBQUNIO0FBQ0YsUUFBSSxNQUFNO0FBQ1YsUUFBSSxRQUFRLFFBQVEsR0FBRztBQUN2QixRQUFJLE9BQU8sUUFBUSxHQUFHLFFBQVEsZUFBZSxJQUFJO0FBQ2pELFFBQUksZ0JBQWdCLEtBQUssTUFBTTtBQUMvQixRQUFJLGVBQWU7QUFDakIsVUFBSSxPQUFPLEtBQUssUUFBUSxlQUFlLElBQUk7QUFDM0MsVUFBSSxRQUFRLGNBQWMsR0FBRztBQUM3QixVQUFJLGNBQWMsSUFBSTtBQUNwQixZQUFJLGFBQWEsY0FBYyxHQUFHO0FBQUE7QUFBQSxXQUUvQjtBQUNMLFVBQUksT0FBTztBQUFBO0FBRWIsV0FBTztBQUFBO0FBRVQsc0NBQW9DLGVBQWUsTUFBTSxPQUFPLE9BQU87QUFDckUsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSxXQUFXLEtBQUssY0FBYyxTQUFTLE1BQU0sUUFBUSxPQUFPO0FBQzlELFVBQUksUUFBUSxjQUFjLEtBQUssUUFBUSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDekYsWUFBTSxRQUFRLENBQUMsTUFBTSxNQUFNO0FBQ3pCLHVCQUFlLFFBQVEsS0FBSztBQUFBO0FBQUEsZUFFckIsV0FBVyxLQUFLLGNBQWMsU0FBUyxDQUFDLE1BQU0sUUFBUSxTQUFTLE9BQU8sU0FBUyxVQUFVO0FBQ2xHLFVBQUksUUFBUSxjQUFjLEtBQUssUUFBUSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDekYsWUFBTSxRQUFRLENBQUMsU0FBUztBQUN0Qix1QkFBZSxRQUFRLEtBQUs7QUFBQTtBQUFBLFdBRXpCO0FBQ0wscUJBQWUsY0FBYyxRQUFRO0FBQUE7QUFFdkMsUUFBSSxjQUFjO0FBQ2hCLHFCQUFlLGNBQWMsU0FBUztBQUN4QyxRQUFJLGNBQWM7QUFDaEIscUJBQWUsY0FBYyxjQUFjO0FBQzdDLFdBQU87QUFBQTtBQUVULHNCQUFvQixTQUFTO0FBQzNCLFdBQU8sQ0FBQyxNQUFNLFFBQVEsWUFBWSxDQUFDLE1BQU07QUFBQTtBQUkzQyxzQkFBb0I7QUFBQTtBQUVwQixXQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUMsY0FBYSxFQUFDLGNBQWE7QUFDakQsUUFBSSxPQUFPLFlBQVk7QUFDdkIsUUFBSSxDQUFDLEtBQUs7QUFDUixXQUFLLFVBQVU7QUFDakIsU0FBSyxRQUFRLGNBQWM7QUFDM0IsWUFBUSxNQUFNLE9BQU8sS0FBSyxRQUFRO0FBQUE7QUFFcEMsWUFBVSxPQUFPO0FBR2pCLFlBQVUsTUFBTSxDQUFDLElBQUksRUFBQyxjQUFhLEVBQUMsUUFBUSxTQUFTLGNBQWE7QUFDaEUsUUFBSSxZQUFZLGNBQWMsSUFBSTtBQUNsQyxRQUFJLE9BQU8sTUFBTTtBQUNmLFVBQUksR0FBRztBQUNMLGVBQU8sR0FBRztBQUNaLFVBQUksU0FBUyxHQUFHLFFBQVEsVUFBVSxNQUFNO0FBQ3hDLHFCQUFlLFFBQVEsSUFBSTtBQUMzQixnQkFBVSxNQUFNO0FBQ2QsV0FBRyxNQUFNO0FBQ1QsaUJBQVM7QUFBQTtBQUVYLFNBQUcsaUJBQWlCO0FBQ3BCLFNBQUcsWUFBWSxNQUFNO0FBQ25CLGVBQU87QUFDUCxlQUFPLEdBQUc7QUFBQTtBQUVaLGFBQU87QUFBQTtBQUVULFFBQUksT0FBTyxNQUFNO0FBQ2YsVUFBSSxDQUFDLEdBQUc7QUFDTjtBQUNGLFNBQUc7QUFDSCxhQUFPLEdBQUc7QUFBQTtBQUVaLFlBQVEsTUFBTSxVQUFVLENBQUMsVUFBVTtBQUNqQyxjQUFRLFNBQVM7QUFBQTtBQUVuQixZQUFRLE1BQU0sR0FBRyxhQUFhLEdBQUc7QUFBQTtBQUluQyxnQkFBYyxhQUFhLEtBQUssS0FBSyxPQUFPO0FBQzVDLFlBQVUsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUMsT0FBTyxXQUFXLGNBQWEsRUFBQyxjQUFhO0FBQ2pGLFFBQUksWUFBWSxhQUFhLGNBQWMsSUFBSSxjQUFjLE1BQU07QUFBQTtBQUVuRSxRQUFJLGlCQUFpQixHQUFHLElBQUksT0FBTyxXQUFXLENBQUMsTUFBTTtBQUNuRCxnQkFBVSxNQUFNO0FBQUEsU0FDYixFQUFDLE9BQU8sRUFBQyxRQUFRLEtBQUksUUFBUSxDQUFDO0FBQUE7QUFFbkMsWUFBUSxNQUFNO0FBQUE7QUFJaEIsaUJBQWUsYUFBYTtBQUM1QixpQkFBZSxvQkFBb0IsRUFBQyxVQUFVLG1CQUFtQixVQUFVLFFBQVEsbUJBQW1CLFFBQVEsU0FBUyxtQkFBbUIsTUFBTSxLQUFLLG1CQUFtQjtBQUN4SyxNQUFJLGNBQWM7QUFHbEIsTUFBSSxpQkFBaUI7OztBQzVvR3JCLDhCQUE0QixLQUFLO0FBQUUsUUFBSSxNQUFNLFFBQVEsTUFBTTtBQUFFLGVBQVMsSUFBSSxHQUFHLE9BQU8sTUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLFFBQVEsS0FBSztBQUFFLGFBQUssS0FBSyxJQUFJO0FBQUE7QUFBTSxhQUFPO0FBQUEsV0FBYTtBQUFFLGFBQU8sTUFBTSxLQUFLO0FBQUE7QUFBQTtBQU8xTCxNQUFJLG1CQUFtQjtBQUN2QixNQUFJLE9BQU8sV0FBVyxhQUFhO0FBQzdCLHlCQUFxQjtBQUFBLFVBQ25CLFVBQVU7QUFDWiwyQkFBbUI7QUFDbkIsZUFBTztBQUFBO0FBQUE7QUFHWCxXQUFPLGlCQUFpQixlQUFlLE1BQU07QUFDN0MsV0FBTyxvQkFBb0IsZUFBZSxNQUFNO0FBQUE7QUFQNUM7QUFVTixNQUFJLGNBQWMsT0FBTyxXQUFXLGVBQWUsT0FBTyxhQUFhLE9BQU8sVUFBVSxZQUFhLGtCQUFpQixLQUFLLE9BQU8sVUFBVSxhQUFhLE9BQU8sVUFBVSxhQUFhLGNBQWMsT0FBTyxVQUFVLGlCQUFpQjtBQUd2TyxNQUFJLFFBQVE7QUFDWixNQUFJLHdCQUF3QjtBQUM1QixNQUFJLGlCQUFpQjtBQUNyQixNQUFJLDhCQUE4QjtBQUNsQyxNQUFJLDJCQUEyQjtBQUcvQixNQUFJLGlCQUFpQix5QkFBd0IsSUFBSTtBQUMvQyxXQUFPLE1BQU0sS0FBSyxTQUFVLE1BQU07QUFDaEMsVUFBSSxLQUFLLFFBQVEsa0JBQWtCLEtBQUssUUFBUSxlQUFlLEtBQUs7QUFDbEUsZUFBTztBQUFBO0FBR1QsYUFBTztBQUFBO0FBQUE7QUFJWCxNQUFJLGlCQUFpQix5QkFBd0IsVUFBVTtBQUNyRCxRQUFJLElBQUksWUFBWSxPQUFPO0FBTTNCLFFBQUksZUFBZSxFQUFFLFNBQVM7QUFDNUIsYUFBTztBQUFBO0FBSVQsUUFBSSxFQUFFLFFBQVEsU0FBUztBQUFHLGFBQU87QUFFakMsUUFBSSxFQUFFO0FBQWdCLFFBQUU7QUFFeEIsV0FBTztBQUFBO0FBR1QsTUFBSSxvQkFBb0IsNEJBQTJCLFNBQVM7QUFFMUQsUUFBSSw2QkFBNkIsUUFBVztBQUMxQyxVQUFJLHVCQUF1QixDQUFDLENBQUMsV0FBVyxRQUFRLHdCQUF3QjtBQUN4RSxVQUFJLGVBQWUsT0FBTyxhQUFhLFNBQVMsZ0JBQWdCO0FBRWhFLFVBQUksd0JBQXdCLGVBQWUsR0FBRztBQUM1QyxtQ0FBMkIsU0FBUyxLQUFLLE1BQU07QUFDL0MsaUJBQVMsS0FBSyxNQUFNLGVBQWUsZUFBZTtBQUFBO0FBQUE7QUFLdEQsUUFBSSxnQ0FBZ0MsUUFBVztBQUM3QyxvQ0FBOEIsU0FBUyxLQUFLLE1BQU07QUFDbEQsZUFBUyxLQUFLLE1BQU0sV0FBVztBQUFBO0FBQUE7QUFJbkMsTUFBSSx5QkFBeUIsbUNBQWtDO0FBQzdELFFBQUksNkJBQTZCLFFBQVc7QUFDMUMsZUFBUyxLQUFLLE1BQU0sZUFBZTtBQUluQyxpQ0FBMkI7QUFBQTtBQUc3QixRQUFJLGdDQUFnQyxRQUFXO0FBQzdDLGVBQVMsS0FBSyxNQUFNLFdBQVc7QUFJL0Isb0NBQThCO0FBQUE7QUFBQTtBQUtsQyxNQUFJLGlDQUFpQyx5Q0FBd0MsZUFBZTtBQUMxRixXQUFPLGdCQUFnQixjQUFjLGVBQWUsY0FBYyxhQUFhLGNBQWMsZUFBZTtBQUFBO0FBRzlHLE1BQUksZUFBZSx1QkFBc0IsT0FBTyxlQUFlO0FBQzdELFFBQUksVUFBVSxNQUFNLGNBQWMsR0FBRyxVQUFVO0FBRS9DLFFBQUksZUFBZSxNQUFNLFNBQVM7QUFDaEMsYUFBTztBQUFBO0FBR1QsUUFBSSxpQkFBaUIsY0FBYyxjQUFjLEtBQUssVUFBVSxHQUFHO0FBRWpFLGFBQU8sZUFBZTtBQUFBO0FBR3hCLFFBQUksK0JBQStCLGtCQUFrQixVQUFVLEdBQUc7QUFFaEUsYUFBTyxlQUFlO0FBQUE7QUFHeEIsVUFBTTtBQUNOLFdBQU87QUFBQTtBQUdGLE1BQUksb0JBQW9CLDRCQUEyQixlQUFlLFNBQVM7QUFFaEYsUUFBSSxDQUFDLGVBQWU7QUFFbEIsY0FBUSxNQUFNO0FBQ2Q7QUFBQTtBQUlGLFFBQUksTUFBTSxLQUFLLFNBQVUsT0FBTTtBQUM3QixhQUFPLE1BQUssa0JBQWtCO0FBQUEsUUFDNUI7QUFDRjtBQUFBO0FBR0YsUUFBSSxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsU0FBUyxXQUFXO0FBQUE7QUFHdEIsWUFBUSxHQUFHLE9BQU8sbUJBQW1CLFFBQVEsQ0FBQztBQUU5QyxRQUFJLGFBQWE7QUFDZixvQkFBYyxlQUFlLFNBQVUsT0FBTztBQUM1QyxZQUFJLE1BQU0sY0FBYyxXQUFXLEdBQUc7QUFFcEMsMkJBQWlCLE1BQU0sY0FBYyxHQUFHO0FBQUE7QUFBQTtBQUc1QyxvQkFBYyxjQUFjLFNBQVUsT0FBTztBQUMzQyxZQUFJLE1BQU0sY0FBYyxXQUFXLEdBQUc7QUFFcEMsdUJBQWEsT0FBTztBQUFBO0FBQUE7QUFJeEIsVUFBSSxDQUFDLHVCQUF1QjtBQUMxQixpQkFBUyxpQkFBaUIsYUFBYSxnQkFBZ0IsbUJBQW1CLEVBQUUsU0FBUyxVQUFVO0FBQy9GLGdDQUF3QjtBQUFBO0FBQUEsV0FFckI7QUFDTCx3QkFBa0I7QUFBQTtBQUFBO0FBMEJmLE1BQUksbUJBQW1CLDJCQUEwQixlQUFlO0FBQ3JFLFFBQUksQ0FBQyxlQUFlO0FBRWxCLGNBQVEsTUFBTTtBQUNkO0FBQUE7QUFHRixZQUFRLE1BQU0sT0FBTyxTQUFVLE1BQU07QUFDbkMsYUFBTyxLQUFLLGtCQUFrQjtBQUFBO0FBR2hDLFFBQUksYUFBYTtBQUNmLG9CQUFjLGVBQWU7QUFDN0Isb0JBQWMsY0FBYztBQUU1QixVQUFJLHlCQUF5QixNQUFNLFdBQVcsR0FBRztBQUMvQyxpQkFBUyxvQkFBb0IsYUFBYSxnQkFBZ0IsbUJBQW1CLEVBQUUsU0FBUyxVQUFVO0FBQ2xHLGdDQUF3QjtBQUFBO0FBQUEsZUFFakIsQ0FBQyxNQUFNLFFBQVE7QUFDeEI7QUFBQTtBQUFBOzs7QUM1TUosMkJBQW1CO0FBQUEsSUFDakIsWUFBWSxJQUFJLFdBQVcsSUFBSTtBQUM3QixZQUFNLFdBQVc7QUFBQSxRQUNmLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxRQUNmLFdBQVc7QUFBQSxRQUNYLGVBQWU7QUFBQSxRQUNmLFlBQVk7QUFBQSxRQUNaLGNBQWM7QUFBQSxVQUNaLFFBQVE7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQTtBQUFBLFFBRVgsV0FBVztBQUFBLFFBQ1gsaUJBQWlCO0FBQUEsUUFDakIsWUFBWTtBQUFBLFFBQ1osY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsV0FBVztBQUFBO0FBR2IsV0FBSyxXQUFXLE9BQU8sT0FBTyxVQUFVO0FBRXhDLFdBQUssY0FDSCxVQUFVLFVBQVUsUUFBUSxhQUFhLE1BQ3pDLFVBQVUsVUFBVSxRQUFRLGFBQWE7QUFFM0MsV0FBSyxLQUFLO0FBQ1YsV0FBSyxTQUFTO0FBQ2QsV0FBSyxVQUFVO0FBQ2YsV0FBSyxVQUFVO0FBQ2YsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyxnQkFBZ0I7QUFDckIsV0FBSyxTQUFTO0FBQ2QsV0FBSyxhQUFhO0FBQ2xCLFdBQUssWUFBWTtBQUNqQixXQUFLLG1CQUFtQjtBQUFBLFFBQ3RCLFFBQVEsQ0FBQyxHQUFHO0FBQUEsUUFDWixVQUFVLENBQUMsR0FBRztBQUFBO0FBQUE7QUFBQSxJQUlsQixRQUFRO0FBRU4sVUFBSSxLQUFLLGFBQWE7QUFDcEIsYUFBSyxTQUFTLFlBQVk7QUFBQTtBQUc1QixXQUFLO0FBQ0wsV0FBSztBQUNMLFdBQUs7QUFDTCxXQUFLO0FBQUE7QUFBQSxJQUdQLFVBQVU7QUFDUixVQUFJLGFBQWE7QUFBQTtBQUFBO0FBS2pCLFdBQUssR0FBRyxpQkFBaUIsYUFBYSxDQUFDLE9BQU87QUFDNUMsYUFBSyxVQUFVO0FBQ2YsaUJBQVMsS0FBSyxVQUFVLElBQUk7QUFDNUIsMEJBQWtCLEtBQUssSUFBSSxFQUFDLHFCQUFxQjtBQUNqRCxhQUFLLGNBQWM7QUFBQTtBQUVyQixXQUFLLEdBQUcsaUJBQ04sYUFDQSxDQUFDLE9BQU8sS0FBSyxVQUFVLEtBQUssY0FBYztBQUc1QyxXQUFLLEdBQUcsaUJBQWlCLFdBQVcsTUFBTSxLQUFLLFVBQVU7QUFDekQsZUFBUyxLQUFLLGlCQUFpQixXQUFXLE1BQU07QUFDOUMsaUJBQVMsS0FBSyxVQUFVLE9BQU87QUFDL0IseUJBQWlCLEtBQUs7QUFDdEIsYUFBSyxVQUFVO0FBQUE7QUFLakIsV0FBSyxRQUFRLGlCQUFpQixjQUFjLENBQUMsTUFBTTtBQUNqRCxhQUFLLFVBQVU7QUFDZixpQkFBUyxLQUFLLFVBQVUsSUFBSTtBQUM1QiwwQkFBa0IsS0FBSyxJQUFJLEVBQUMscUJBQXFCO0FBQUE7QUFHbkQsV0FBSyxHQUFHLGlCQUFpQixhQUFhLENBQUMsT0FBTztBQUM1QyxhQUFLLFVBQVUsS0FBSyxjQUFjO0FBQUE7QUFFcEMsV0FBSyxHQUFHLGlCQUFpQixZQUFZLE1BQU07QUFDekMsYUFBSyxVQUFVO0FBQ2YsaUJBQVMsS0FBSyxVQUFVLE9BQU87QUFDL0IseUJBQWlCLEtBQUs7QUFBQTtBQUt4QixXQUFLLEdBQUcsaUJBQWlCLGNBQWMsTUFBTTtBQUMzQyxhQUFLLFNBQVMsY0FBYyxLQUFLLFVBQVU7QUFDM0MsWUFBSSxRQUFRLEtBQUssU0FBUyxZQUN0QixLQUFLLGlCQUFpQixTQUN0QixLQUFLLGlCQUFpQjtBQUUxQixhQUFLLGNBQWMsUUFBUSxDQUFDLE1BQU0sTUFBTTtBQUN0QyxlQUFLLE1BQU0sVUFBVTtBQUFBLFVBRW5CLEtBQUssU0FBUyxlQUNWLHlCQUF5QixNQUFNLEtBQU0sT0FBTSxJQUFJLElBQUksWUFDbkQseUJBQXlCLE1BQU0sS0FBTSxPQUFNLElBQUksSUFBSTtBQUFBO0FBQUE7QUFBQTtBQU03RCxXQUFLLEdBQUcsaUJBQWlCLGNBQWMsTUFBTTtBQUMzQyxZQUFJLFFBQVEsS0FBSyxTQUFTLFlBQ3RCLEtBQUssaUJBQWlCLFNBQ3RCLEtBQUssaUJBQWlCO0FBRTFCLGFBQUssY0FBYyxRQUFRLENBQUMsTUFBTSxNQUFNO0FBQ3RDLGVBQUssTUFBTSxVQUFVO0FBQUEsVUFFbkIsS0FBSyxTQUFTLGVBQ1YseUJBQ0UsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLElBQUksTUFBTSxhQUV4Qyx5QkFDRSxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsSUFBSSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFwRCxjQUFjLElBQUk7QUFDaEIsVUFBSSxTQUFTLEtBQUssR0FBRztBQUNyQixVQUFJLElBQ0YsR0FBRyxZQUFZLFNBQ1gsR0FBRyxRQUFRLEdBQUcsVUFBVSxPQUFPLE9BQy9CLEdBQUcsVUFBVSxPQUFPO0FBQzFCLFVBQUksSUFDRixHQUFHLFlBQVksU0FDWCxHQUFHLFFBQVEsR0FBRyxVQUFVLE9BQU8sTUFDL0IsR0FBRyxVQUFVLE9BQU87QUFFMUIsVUFBSSxXQUFXLEtBQUssU0FBUyxlQUN4QixJQUFJLE9BQU8sU0FBVSxNQUNyQixJQUFJLE9BQU8sUUFBUztBQUV6QixVQUFJLFlBQVksS0FBSyxZQUFZLEtBQUs7QUFDcEMsYUFBSyxTQUFTLGVBQ1QsS0FBSyxRQUFRLE1BQU0sTUFBTSxRQUFRLGVBQ2hDLEtBQUssYUFBYSxTQUVuQixLQUFLLFFBQVEsTUFBTSxPQUFPLFFBQVEsZUFDakMsS0FBSyxhQUFhO0FBR3hCLFlBQUksS0FBSyxTQUFTLFdBQVc7QUFDM0IsZUFBSyxTQUFTLGVBQ1QsS0FBSyxRQUFRLE1BQU0sV0FBVyxhQUFhLE1BQU0saUJBQ2pELEtBQUssUUFBUSxNQUFNLFdBQVcsZUFBZTtBQUFBLGVBQzdDO0FBQ0wsZUFBSyxTQUFTLGVBQ1QsS0FBSyxRQUFRLE1BQU0sU0FBUyxRQUFRLGVBQ3BDLEtBQUssUUFBUSxNQUFNLFFBQVEsUUFBUSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLcEQsVUFBVSxPQUFPO0FBQ2YsV0FBSyxTQUFTO0FBQUE7QUFBQSxJQUdoQixrQkFBa0I7QUFDaEIsVUFBSSxXQUFXLFNBQVMsY0FBYztBQUN0QyxVQUFJLFVBQVUsU0FBUyxjQUFjO0FBQ3JDLFVBQUksVUFBVSxTQUFTLGNBQWM7QUFFckMsY0FBUSxVQUFVLElBQUksY0FBYyxxQkFBcUI7QUFDekQsY0FBUSxVQUFVLElBQUksY0FBYyxvQkFBb0I7QUFFeEQsVUFBSSxLQUFLLFNBQVMsYUFBYSxTQUFTO0FBQ3RDLGdCQUFRLFVBQVUsSUFBSTtBQUN0QixnQkFBUSxVQUFVLElBQUk7QUFBQTtBQUd4QixVQUFJLEtBQUssU0FBUyxjQUFjO0FBQzlCLGdCQUFRLFVBQVUsSUFBSTtBQUN0QixnQkFBUSxVQUFVLElBQUk7QUFBQTtBQUd4QixjQUFRLFlBQVksS0FBSyxTQUFTLGFBQWEsVUFBVTtBQUN6RCxjQUFRLFlBQVksS0FBSyxTQUFTLGFBQWEsU0FBUztBQUV4RCxVQUFJLEtBQUssU0FBUyxZQUFZO0FBQzVCLGFBQUssR0FBRyxZQUFZO0FBQ3BCLGFBQUssR0FBRyxZQUFZO0FBQUE7QUFHdEIsV0FBSyxHQUFHLFVBQVUsSUFDaEIsT0FDQSxLQUFLLFNBQVMsZUFDVix1QkFDQSx3QkFDSixLQUFLLFNBQVMsWUFBWSxtQkFBbUI7QUFHL0MsZUFBUyxVQUFVLElBQUk7QUFFdkIsV0FBSyxHQUFHLFlBQVk7QUFBQTtBQUFBLElBR3RCLGdCQUFnQjtBQUNkLFVBQUksVUFBVSxTQUFTLGNBQWM7QUFDckMsVUFBSSxTQUFTLFNBQVMsY0FBYztBQUNwQyxVQUFJLFNBQVMsU0FBUyxjQUFjO0FBQ3BDLFVBQUksU0FBUyxTQUFTLGNBQWM7QUFFcEMsWUFBTSxZQUFZO0FBRWxCLGFBQU8sVUFBVSxJQUFJO0FBRXJCLGVBQVMsTUFBTSxHQUFHLE9BQU8sR0FBRyxPQUFPO0FBQ2pDLFlBQUksV0FBVyxTQUFTLGNBQWM7QUFFdEMsWUFBSSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUtILEtBQUssU0FBUyxZQUFZLE1BQU07QUFBQSxpQkFFdEMsUUFBUSxJQUNKLEtBQUssU0FBUyxlQUNaLFdBQ0EsV0FDRixLQUFLLFNBQVMsZUFDZCxVQUNBLG9CQUNRLHVCQUF1QjtBQUFBO0FBQUEsU0FHbkMsS0FBSyxTQUFTLGdCQUNWO0FBQUE7QUFBQSxrQ0FHSixRQUFRLElBQUksU0FBUztBQUFBLFdBR2pCO0FBQUE7QUFBQTtBQUFBLGVBS0osS0FBSyxTQUFTLFlBQ1YsdUJBQ0EsU0FBUyxLQUFLLFNBQVM7QUFBQSxpQkFFbkIsS0FBSyxTQUFTO0FBQUE7QUFBQSx1QkFFUixLQUFLLFNBQVMsWUFBWSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBSy9DLGlCQUFTLGFBQWE7QUFDdEIsYUFBSyxjQUFjLEtBQUs7QUFDeEIsZUFBTyxZQUFZO0FBQUE7QUFHckIsVUFBSSxRQUFRLEtBQUssU0FBUyxZQUN0QixLQUFLLGlCQUFpQixTQUN0QixLQUFLLGlCQUFpQjtBQUUxQixXQUFLLGNBQWMsUUFBUSxDQUFDLE1BQU0sTUFBTTtBQUN0QyxhQUFLLFVBQVUsSUFBSTtBQUVuQixhQUFLLE1BQU0sVUFBVTtBQUFBLFFBRW5CLEtBQUssU0FBUyxlQUNWLHlCQUNFLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxJQUFJLE1BQU0sYUFFeEMseUJBQ0UsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLElBQUksTUFBTTtBQUFBO0FBQUE7QUFNaEQsY0FBUSxVQUFVLElBQUk7QUFFdEIsY0FBUSxNQUFNLFVBQVU7QUFBQSxNQUN0QixLQUFLLFNBQVMsZUFBZSxXQUFXLGFBQWEsS0FBSztBQUFBLE1BQzFELEtBQUssU0FBUyxlQUFlLFFBQVEsaUJBQ3JDLEtBQUssU0FBUyxvQkFDVCxLQUFLLGFBQWE7QUFBQSxNQUV2QixrQkFBa0IsU0FBUyxrQkFDdkIsS0FDQSxLQUFLLFNBQVMsWUFDZCxlQUFlLEtBQUssU0FBUyxnQ0FDN0I7QUFBQTtBQUlOLGFBQU8sVUFBVSxJQUFJO0FBRXJCLGFBQU8sTUFBTSxVQUFVO0FBQUEsUUFDbkIsS0FBSyxTQUFTLGVBQWUsV0FBVyxhQUFhLEtBQUs7QUFBQSxvQkFDOUMsS0FBSyxTQUFTO0FBQUEsVUFFeEIsS0FBSyxTQUFTLGdCQUNWLCtDQUNBO0FBQUE7QUFJVixVQUFJLFVBQVUsT0FBTyxVQUFVO0FBRS9CLGFBQU8sVUFBVSxJQUFJO0FBQ3JCLGFBQU8sTUFBTSxVQUFVO0FBQUE7QUFBQSxRQUduQixLQUFLLFNBQVMsaUJBQ2Q7QUFBQTtBQUFBLGdCQUdRLEtBQUsscUJBQXFCLEtBQUssU0FBUztBQUFBLFFBRWhELEtBQUssU0FBUyxpQkFDZDtBQUFBO0FBSUosY0FBUSxZQUFZO0FBQ3BCLFdBQUssU0FBUyxhQUFhLFFBQVEsWUFBWTtBQUMvQyxjQUFRLFlBQVk7QUFDcEIsY0FBUSxZQUFZO0FBRXBCLFdBQUssaUJBQWlCO0FBRXRCLFdBQUssVUFBVTtBQUNmLFdBQUssR0FBRyxZQUFZO0FBQUE7QUFBQSxJQUd0QixhQUFhO0FBQ1gsVUFBSSxXQUFXLEtBQUssR0FBRyxpQkFBaUI7QUFDeEMsV0FBSyxHQUFHLFlBQVk7QUFDcEIsZUFBUyxRQUFRLENBQUMsUUFBUTtBQUN4QixhQUFLLEdBQUcsWUFBWTtBQUFBO0FBR3RCLFVBQUksaUJBQWlCLENBQUMsR0FBRyxVQUFVLE9BQ2pDLENBQUMsWUFBWSxRQUFRLFNBQVMsa0JBQWtCO0FBSWxELFdBQUssU0FBUyxnQkFBZ0IsZUFBZTtBQUU3QyxlQUFTLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTztBQUNqQyxZQUFJLFFBQVEsZUFBZTtBQUUzQixjQUFNLFVBQVUsSUFBSTtBQUNwQixjQUFNLFVBQVUsSUFBSSxRQUFRLElBQUksZUFBZTtBQUUvQyxZQUFJLFFBQVEsR0FBRztBQUNiLGNBQUksVUFBVSxTQUFTLGNBQWM7QUFDckMsY0FBSSxXQUFXLGVBQWUsR0FBRztBQUNqQyxrQkFBUSxVQUFVLElBQUk7QUFDdEIsa0JBQVEsTUFBTSxVQUFVO0FBQUEscUJBQ1gsTUFBTSxLQUFLLFNBQVM7QUFBQSxzQkFDbkIsS0FBSyxTQUFTO0FBQUE7QUFBQSxjQUd0QixrQkFBa0IsU0FBUyxrQkFDdkIsS0FDQSxLQUFLLFNBQVMsWUFDZCxlQUFlLEtBQUssU0FBUyxnQ0FDN0I7QUFBQSxjQUdKLEtBQUssU0FBUyxhQUNkLHlCQUF5QiwrQkFDdkIsS0FBSyxTQUFTLGVBQ1YsUUFBUSxNQUFNLEtBQUssU0FBUyxxQkFDNUIsU0FBUyxLQUFLLFNBQVM7QUFBQTtBQUtuQyxrQkFBUSxZQUFZO0FBQ3BCLGVBQUssVUFBVTtBQUNmLGVBQUssR0FBRyxZQUFZLEtBQUs7QUFBQTtBQUFBO0FBRzdCLFVBQUksS0FBSyxTQUFTLFdBQVc7QUFDM0IsWUFBSSxNQUFNLGVBQWUsR0FBRztBQUM1QixZQUFJLGVBQWUsU0FBUyxjQUFjO0FBQzFDLHFCQUFhLFVBQVUsSUFBSTtBQUMzQixxQkFBYSxNQUFNLFVBQVU7QUFBQTtBQUFBLGdDQUVIO0FBQUE7QUFBQTtBQUcxQixhQUFLLEdBQUcsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQW1CMUIsTUFBTyxrQkFBUTs7O0FDalpmLHVCQUFxQjtBQUNyQixpQ0FBeUI7QUFDekIsc0JBQW1CO0FBTm5CLFNBQU8sU0FBUztBQUNoQixpQkFBTztBQU9QLE1BQUksUUFBUTtBQUNaLFFBQU0sZ0JBQWdCO0FBQUEsSUFDcEIsUUFBTztBQUFFLGFBQU8sS0FBSyxHQUFHLGFBQWEsY0FBYyxNQUFNO0FBQUE7QUFBQSxJQUN6RCxlQUFjO0FBQUUsV0FBSyxZQUFZLEtBQUssUUFBUSxJQUFJLFVBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxhQUFhO0FBQUE7QUFBQSxJQUN0RixVQUFTO0FBQUUsV0FBSyxVQUFVLFFBQVEsQ0FBQyxDQUFDLE1BQU0sU0FBUyxLQUFLLEdBQUcsYUFBYSxNQUFNO0FBQUE7QUFBQTtBQUVoRixRQUFNLGtCQUFrQjtBQUFBLElBQ3RCLFVBQVU7QUFDUixZQUFNLFVBQVUsU0FBUyxlQUFlO0FBQ3hDLGFBQU8sU0FBUyxJQUFJLGdCQUFhLFNBQVM7QUFBQTtBQUFBO0FBRzlDLFFBQU0sa0JBQWtCO0FBQUEsSUFDdEIsVUFBVTtBQUNSLFdBQUssR0FBRyxpQkFBaUIsUUFBUSxPQUFLO0FBQ3BDLFVBQUU7QUFDRixhQUFLLFVBQVUsZUFBZSxFQUFFLFdBQVcsRUFBRSxPQUFPO0FBQUE7QUFFdEQsV0FBSyxHQUFHLGlCQUFpQixhQUFhLE9BQUs7QUFDekMsZ0JBQVEsSUFBSTtBQUNaLFVBQUUsYUFBYSxhQUFhO0FBQzVCLFVBQUU7QUFDRixnQkFBUSxJQUFJLEVBQUU7QUFDZCxZQUFJLEVBQUUsT0FBTyxJQUFJO0FBQ2YsZ0JBQU0sVUFBVSxTQUFTLGVBQWUsRUFBRSxPQUFPO0FBQ2pELGNBQUksUUFBUSxRQUFRLGFBQWE7QUFDakMsY0FBSSxTQUFTLFFBQVEsYUFBYTtBQUNsQyxrQkFBUSxJQUFJO0FBQ1osa0JBQVEsSUFBSTtBQUNaLGVBQUssVUFBVSxxQkFBcUIsRUFBQyxTQUFTLE9BQU8sV0FBVztBQUFBO0FBQUE7QUFHcEUsV0FBSyxHQUFHLGlCQUFpQixhQUFhLE9BQUs7QUFDekMsVUFBRSxhQUFhLGFBQWE7QUFDNUIsY0FBTSxVQUFVLFNBQVMsZUFBZSxFQUFFLE9BQU87QUFDakQsWUFBSSxLQUFLLFFBQVEsYUFBYTtBQUM5QixhQUFLLFVBQVUsaUJBQWlCLEVBQUMsTUFBTTtBQUFBO0FBRXpDLFdBQUssR0FBRyxpQkFBaUIsV0FBVyxPQUFLO0FBQ3ZDLGFBQUssVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUlyQixRQUFNLGVBQWU7QUFBQSxJQUNuQixVQUFVO0FBQ1IsV0FBSyxHQUFHLGlCQUFpQixTQUFTLE9BQUs7QUFDckMsb0JBQVksb0JBQW9CLEtBQUssR0FBRztBQUN4QyxvQkFBWSx1QkFBdUIsS0FBSyxHQUFHO0FBQzNDLG9CQUFZLHFCQUFxQixLQUFLLEdBQUc7QUFDekMsb0JBQVksc0JBQXNCLEtBQUssR0FBRztBQUFBO0FBQUE7QUFBQTtBQUtoRCxNQUFJLFlBQVksU0FBUyxjQUFjLDJCQUEyQixhQUFhO0FBQy9FLE1BQUksYUFBYSxJQUFJLG9DQUFXLFNBQVMsdUJBQVE7QUFBQSxJQUMvQyxRQUFRLEVBQUMsYUFBYTtBQUFBLElBQ3RCLE9BQU87QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILGtCQUFrQixNQUFNLElBQUk7QUFDMUIsWUFBSSxLQUFLLGNBQWM7QUFDckIsaUJBQU8sT0FBTyxNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9sQyx3QkFBTyxPQUFPLEVBQUMsV0FBVyxFQUFDLEdBQUcsVUFBUyxhQUFhO0FBQ3BELFNBQU8saUJBQWlCLDBCQUEwQixVQUFRLHNCQUFPO0FBQ2pFLFNBQU8saUJBQWlCLHlCQUF5QixVQUFRLHNCQUFPO0FBR2hFLGFBQVc7QUFNWCxTQUFPLGFBQWE7IiwKICAibmFtZXMiOiBbXQp9Cg==
