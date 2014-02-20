;(function(){
function f(a) {
  return function() {
    return this[a]
  }
}
function aa(a) {
  return function() {
    return a
  }
}
var p, ca = this;
function r(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function da(a) {
  return"string" == typeof a
}
function ea(a) {
  return a[fa] || (a[fa] = ++ga)
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
var ha, ia, ja, ka, la;
function na() {
  return ca.navigator ? ca.navigator.userAgent : null
}
la = ka = ja = ia = ha = !1;
var oa;
if(oa = na()) {
  var pa = ca.navigator;
  ha = 0 == oa.indexOf("Opera");
  ia = !ha && -1 != oa.indexOf("MSIE");
  ka = (ja = !ha && -1 != oa.indexOf("WebKit")) && -1 != oa.indexOf("Mobile");
  la = !ha && !ja && "Gecko" == pa.product
}
var qa = ha, ra = ia, sa = la, ta = ja, ua = ka, va = ca.navigator, wa = -1 != (va && va.platform || "").indexOf("Mac");
function xa() {
  var a = ca.document;
  return a ? a.documentMode : void 0
}
var ya;
a: {
  var za = "", Ba;
  if(qa && ca.opera) {
    var Ca = ca.opera.version, za = "function" == typeof Ca ? Ca() : Ca
  }else {
    if(sa ? Ba = /rv\:([^\);]+)(\)|;)/ : ra ? Ba = /MSIE\s+([^\);]+)(\)|;)/ : ta && (Ba = /WebKit\/(\S+)/), Ba) {
      var Da = Ba.exec(na()), za = Da ? Da[1] : ""
    }
  }
  if(ra) {
    var Ea = xa();
    if(Ea > parseFloat(za)) {
      ya = String(Ea);
      break a
    }
  }
  ya = za
}
var Fa = {};
function Ga(a) {
  var b;
  if(!(b = Fa[a])) {
    b = 0;
    for(var c = String(ya).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if(0 == n[0].length && 0 == q[0].length) {
          break
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == q[2].length) ? -1 : (0 == n[2].length) > (0 == q[2].length) ? 1 : 0) || (n[2] < q[2] ? -1 : n[2] > q[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Fa[a] = 0 <= b
  }
  return b
}
var Ha = ca.document, Ia = Ha && ra ? xa() || ("CSS1Compat" == Ha.compatMode ? parseInt(ya, 10) : 5) : void 0;
var Ja = Array.prototype, Ka = Ja.indexOf ? function(a, b, c) {
  return Ja.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(da(a)) {
    return da(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
function La(a, b) {
  null != a && this.append.apply(this, arguments)
}
La.prototype.sa = "";
La.prototype.append = function(a, b, c) {
  this.sa += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.sa += arguments[d]
    }
  }
  return this
};
La.prototype.toString = f("sa");
function Ma() {
  return new Na(null, 5, [Oa, !0, Pa, !0, Qa, !1, Ra, !1, Sa, null], null)
}
function s(a) {
  return null != a && !1 !== a
}
function Ta(a) {
  return s(a) ? !1 : !0
}
function t(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : v ? !1 : null
}
function Ua(a) {
  return null == a ? null : a.constructor
}
function w(a, b) {
  var c = Ua(b), c = s(s(c) ? c.eb : c) ? c.cb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Va(a) {
  var b = a.cb;
  return s(b) ? b : "" + x(a)
}
function y(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
var Wa = {}, Xa = {};
function Ya(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  b = Ya[r(null == a ? null : a)];
  if(!b && (b = Ya._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a)
}
function Za(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  c = Za[r(null == a ? null : a)];
  if(!c && (c = Za._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var $a = {}, z = function() {
  function a(a, b, c) {
    if(a ? a.M : a) {
      return a.M(a, b, c)
    }
    var h;
    h = z[r(null == a ? null : a)];
    if(!h && (h = z._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.B : a) {
      return a.B(a, b)
    }
    var c;
    c = z[r(null == a ? null : a)];
    if(!c && (c = z._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), ab = {};
function B(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  b = B[r(null == a ? null : a)];
  if(!b && (b = B._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a)
}
function C(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  b = C[r(null == a ? null : a)];
  if(!b && (b = C._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var bb = {}, D = function() {
  function a(a, b, c) {
    if(a ? a.D : a) {
      return a.D(a, b, c)
    }
    var h;
    h = D[r(null == a ? null : a)];
    if(!h && (h = D._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.C : a) {
      return a.C(a, b)
    }
    var c;
    c = D[r(null == a ? null : a)];
    if(!c && (c = D._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function cb(a, b, c) {
  if(a ? a.ta : a) {
    return a.ta(a, b, c)
  }
  var d;
  d = cb[r(null == a ? null : a)];
  if(!d && (d = cb._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var db = {}, eb = {};
function fb(a) {
  if(a ? a.kb : a) {
    return a.kb()
  }
  var b;
  b = fb[r(null == a ? null : a)];
  if(!b && (b = fb._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function gb(a) {
  if(a ? a.lb : a) {
    return a.lb()
  }
  var b;
  b = gb[r(null == a ? null : a)];
  if(!b && (b = gb._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var hb = {};
function ib(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  d = ib[r(null == a ? null : a)];
  if(!d && (d = ib._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function jb(a) {
  if(a ? a.vb : a) {
    return a.state
  }
  var b;
  b = jb[r(null == a ? null : a)];
  if(!b && (b = jb._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var kb = {};
function lb(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  b = lb[r(null == a ? null : a)];
  if(!b && (b = lb._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a)
}
function mb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  c = mb[r(null == a ? null : a)];
  if(!c && (c = mb._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var nb = {}, ob = function() {
  function a(a, b, c) {
    if(a ? a.O : a) {
      return a.O(a, b, c)
    }
    var h;
    h = ob[r(null == a ? null : a)];
    if(!h && (h = ob._, !h)) {
      throw w("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.N : a) {
      return a.N(a, b)
    }
    var c;
    c = ob[r(null == a ? null : a)];
    if(!c && (c = ob._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function pb(a, b) {
  if(a ? a.s : a) {
    return a.s(a, b)
  }
  var c;
  c = pb[r(null == a ? null : a)];
  if(!c && (c = pb._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function qb(a) {
  if(a ? a.v : a) {
    return a.v(a)
  }
  var b;
  b = qb[r(null == a ? null : a)];
  if(!b && (b = qb._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a)
}
var rb = {};
function sb(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  b = sb[r(null == a ? null : a)];
  if(!b && (b = sb._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var tb = {};
function E(a, b) {
  if(a ? a.ob : a) {
    return a.ob(0, b)
  }
  var c;
  c = E[r(null == a ? null : a)];
  if(!c && (c = E._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
var ub = {};
function vb(a, b, c) {
  if(a ? a.t : a) {
    return a.t(a, b, c)
  }
  var d;
  d = vb[r(null == a ? null : a)];
  if(!d && (d = vb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function wb(a, b, c) {
  if(a ? a.nb : a) {
    return a.nb(0, b, c)
  }
  var d;
  d = wb[r(null == a ? null : a)];
  if(!d && (d = wb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function xb(a) {
  if(a ? a.Fa : a) {
    return a.Fa(a)
  }
  var b;
  b = xb[r(null == a ? null : a)];
  if(!b && (b = xb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function yb(a, b) {
  if(a ? a.Ha : a) {
    return a.Ha(a, b)
  }
  var c;
  c = yb[r(null == a ? null : a)];
  if(!c && (c = yb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function zb(a) {
  if(a ? a.Ia : a) {
    return a.Ia(a)
  }
  var b;
  b = zb[r(null == a ? null : a)];
  if(!b && (b = zb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Ab(a, b, c) {
  if(a ? a.xa : a) {
    return a.xa(a, b, c)
  }
  var d;
  d = Ab[r(null == a ? null : a)];
  if(!d && (d = Ab._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Bb(a, b, c) {
  if(a ? a.mb : a) {
    return a.mb(0, b, c)
  }
  var d;
  d = Bb[r(null == a ? null : a)];
  if(!d && (d = Bb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Cb(a) {
  if(a ? a.jb : a) {
    return a.jb()
  }
  var b;
  b = Cb[r(null == a ? null : a)];
  if(!b && (b = Cb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Db(a) {
  if(a ? a.Na : a) {
    return a.Na(a)
  }
  var b;
  b = Db[r(null == a ? null : a)];
  if(!b && (b = Db._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Eb(a) {
  if(a ? a.Oa : a) {
    return a.Oa(a)
  }
  var b;
  b = Eb[r(null == a ? null : a)];
  if(!b && (b = Eb._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Fb(a) {
  if(a ? a.Ma : a) {
    return a.Ma(a)
  }
  var b;
  b = Fb[r(null == a ? null : a)];
  if(!b && (b = Fb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function Gb(a) {
  this.Eb = a;
  this.n = 0;
  this.f = 1073741824
}
Gb.prototype.ob = function(a, b) {
  return this.Eb.append(b)
};
function Hb(a) {
  var b = new La;
  a.t(null, new Gb(b), Ma());
  return"" + x(b)
}
function Ib(a, b) {
  if(s(F.a ? F.a(a, b) : F.call(null, a, b))) {
    return 0
  }
  var c = Ta(a.L);
  if(s(c ? b.L : c)) {
    return-1
  }
  if(s(a.L)) {
    if(Ta(b.L)) {
      return 1
    }
    c = Jb.a ? Jb.a(a.L, b.L) : Jb.call(null, a.L, b.L);
    return 0 === c ? Jb.a ? Jb.a(a.name, b.name) : Jb.call(null, a.name, b.name) : c
  }
  return Lb ? Jb.a ? Jb.a(a.name, b.name) : Jb.call(null, a.name, b.name) : null
}
function Mb(a, b, c, d, e) {
  this.L = a;
  this.name = b;
  this.na = c;
  this.ia = d;
  this.ra = e;
  this.f = 2154168321;
  this.n = 4096
}
p = Mb.prototype;
p.t = function(a, b) {
  return E(b, this.na)
};
p.v = function() {
  var a = this.ia;
  return null != a ? a : this.ia = a = Nb.a ? Nb.a(H.d ? H.d(this.L) : H.call(null, this.L), H.d ? H.d(this.name) : H.call(null, this.name)) : Nb.call(null, H.d ? H.d(this.L) : H.call(null, this.L), H.d ? H.d(this.name) : H.call(null, this.name))
};
p.G = function(a, b) {
  return new Mb(this.L, this.name, this.na, this.ia, b)
};
p.F = f("ra");
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.c(c, this, null);
      case 3:
        return D.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
p.d = function(a) {
  return D.c(a, this, null)
};
p.a = function(a, b) {
  return D.c(a, this, b)
};
p.s = function(a, b) {
  return b instanceof Mb ? this.na === b.na : !1
};
p.toString = f("na");
function I(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.Ga)) {
    return a.w(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Ob(a, 0)
  }
  if(t(rb, a)) {
    return sb(a)
  }
  if(v) {
    throw Error([x(a), x("is not ISeqable")].join(""));
  }
  return null
}
function J(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.wa)) {
    return a.P(null)
  }
  a = I(a);
  return null == a ? null : B(a)
}
function K(a) {
  return null != a ? a && (a.f & 64 || a.wa) ? a.R(null) : (a = I(a)) ? C(a) : L : L
}
function M(a) {
  return null == a ? null : a && (a.f & 128 || a.Ob) ? a.ba(null) : I(K(a))
}
var F = function() {
  function a(a, b) {
    return a === b || pb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.a(a, d)) {
          if(M(e)) {
            a = d, d = J(e), e = M(e)
          }else {
            return b.a(d, J(e))
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, O(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.k = c.k;
  b.d = aa(!0);
  b.a = a;
  b.i = c.i;
  return b
}();
qb["null"] = aa(0);
Xa["null"] = !0;
Ya["null"] = aa(0);
pb["null"] = function(a, b) {
  return null == b
};
mb["null"] = aa(null);
kb["null"] = !0;
lb["null"] = aa(null);
db["null"] = !0;
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
pb.number = function(a, b) {
  return a === b
};
kb["function"] = !0;
lb["function"] = aa(null);
Wa["function"] = !0;
qb._ = function(a) {
  return ea(a)
};
var Pb = function() {
  function a(a, b, c, d) {
    for(var l = Ya(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Ya(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Ya(a);
    if(0 === c) {
      return b.ua ? "" : b.call(null)
    }
    for(var d = z.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d
}(), Qb = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.ua ? "" : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d
}();
function Rb(a) {
  return a ? a.f & 2 || a.Ea ? !0 : a.f ? !1 : t(Xa, a) : t(Xa, a)
}
function Sb(a) {
  return a ? a.f & 16 || a.va ? !0 : a.f ? !1 : t($a, a) : t($a, a)
}
function Ob(a, b) {
  this.b = a;
  this.g = b;
  this.n = 0;
  this.f = 166199550
}
p = Ob.prototype;
p.v = function() {
  return Tb.d ? Tb.d(this) : Tb.call(null, this)
};
p.ba = function() {
  return this.g + 1 < this.b.length ? new Ob(this.b, this.g + 1) : null
};
p.I = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return Qb.l(this.b, b, this.b[this.g], this.g + 1)
};
p.O = function(a, b, c) {
  return Qb.l(this.b, b, c, this.g)
};
p.w = function() {
  return this
};
p.A = function() {
  return this.b.length - this.g
};
p.P = function() {
  return this.b[this.g]
};
p.R = function() {
  return this.g + 1 < this.b.length ? new Ob(this.b, this.g + 1) : L
};
p.s = function(a, b) {
  return Ub.a ? Ub.a(this, b) : Ub.call(null, this, b)
};
p.B = function(a, b) {
  var c = b + this.g;
  return c < this.b.length ? this.b[c] : null
};
p.M = function(a, b, c) {
  a = b + this.g;
  return a < this.b.length ? this.b[a] : c
};
var Vb = function() {
  function a(a, b) {
    return b < a.length ? new Ob(a, b) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}(), O = function() {
  function a(a, b) {
    return Vb.a(a, b)
  }
  function b(a) {
    return Vb.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}();
function Wb(a) {
  return J(M(a))
}
pb._ = function(a, b) {
  return a === b
};
var Xb = function() {
  function a(a, b) {
    return null != a ? Za(a, b) : Za(L, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(s(e)) {
          a = b.a(a, d), d = J(e), e = M(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.p = 2;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, O(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.k = c.k;
  b.a = a;
  b.i = c.i;
  return b
}();
function Q(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.Ea)) {
      a = a.A(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(t(Xa, a)) {
            a = Ya(a)
          }else {
            if(v) {
              a: {
                a = I(a);
                for(var b = 0;;) {
                  if(Rb(a)) {
                    a = b + Ya(a);
                    break a
                  }
                  a = M(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var Yb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return I(a) ? J(a) : c
      }
      if(Sb(a)) {
        return z.c(a, b, c)
      }
      if(I(a)) {
        a = M(a), b -= 1
      }else {
        return v ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(I(a)) {
          return J(a)
        }
        throw Error("Index out of bounds");
      }
      if(Sb(a)) {
        return z.a(a, b)
      }
      if(I(a)) {
        var c = M(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(v) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), Zb = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.va)) {
        return a.M(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(t($a, a)) {
        return z.a(a, b)
      }
      if(v) {
        if(a ? a.f & 64 || a.wa || (a.f ? 0 : t(ab, a)) : t(ab, a)) {
          return Yb.c(a, b, c)
        }
        throw Error([x("nth not supported on this type "), x(Va(Ua(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.va)) {
      return a.B(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(t($a, a)) {
      return z.a(a, b)
    }
    if(v) {
      if(a ? a.f & 64 || a.wa || (a.f ? 0 : t(ab, a)) : t(ab, a)) {
        return Yb.a(a, b)
      }
      throw Error([x("nth not supported on this type "), x(Va(Ua(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), $b = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.wb) ? a.D(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(bb, a) ? D.c(a, b, c) : v ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.wb) ? a.C(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(bb, a) ? D.a(a, b) : null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), bc = function() {
  function a(a, b, c) {
    return null != a ? cb(a, b, c) : ac.a ? ac.a([b], [c]) : ac.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), s(l)) {
          d = J(l), e = Wb(l), l = M(M(l))
        }else {
          return a
        }
      }
    }
    a.p = 3;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
      return c(b, d, l, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.i(b, e, g, O(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.k = c.k;
  b.c = a;
  b.i = c.i;
  return b
}();
function cc(a) {
  var b = "function" == r(a);
  return b ? b : a ? s(s(null) ? null : a.Ib) ? !0 : a.Rb ? !1 : t(Wa, a) : t(Wa, a)
}
function dc(a) {
  return(a ? a.f & 131072 || a.yb || (a.f ? 0 : t(kb, a)) : t(kb, a)) ? lb(a) : null
}
var ec = {}, fc = 0;
function H(a) {
  if(a && (a.f & 4194304 || a.Lb)) {
    a = a.v(null)
  }else {
    if("number" === typeof a) {
      a = Math.floor(a) % 2147483647
    }else {
      if(!0 === a) {
        a = 1
      }else {
        if(!1 === a) {
          a = 0
        }else {
          if("string" === typeof a) {
            255 < fc && (ec = {}, fc = 0);
            var b = ec[a];
            if("number" !== typeof b) {
              for(var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296
              }
              ec[a] = b;
              fc += 1
            }
            a = b
          }else {
            a = v ? qb(a) : null
          }
        }
      }
    }
  }
  return a
}
function gc(a) {
  return a ? a.f & 16384 || a.Qb ? !0 : a.f ? !1 : t(hb, a) : t(hb, a)
}
function hc(a) {
  return a ? a.n & 512 || a.Jb ? !0 : !1 : !1
}
function ic(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
function jc(a) {
  return s(a) ? !0 : !1
}
function Jb(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Ua(a) === Ua(b)) {
    return a && (a.n & 2048 || a.Ca) ? a.Da(null, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(v) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var kc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = Jb(Zb.a(a, h), Zb.a(b, h));
      if(0 === k && h + 1 < c) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var g = Q(a), h = Q(b);
    return g < h ? -1 : g > h ? 1 : v ? c.l(a, b, g, 0) : null
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c
}(), R = function() {
  function a(a, b, c) {
    for(c = I(c);;) {
      if(c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = M(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    return c ? lc.c ? lc.c(a, J(c), M(c)) : lc.call(null, a, J(c), M(c)) : a.ua ? "" : a.call(null)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), lc = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.zb) ? c.O(null, a, b) : c instanceof Array ? Qb.c(c, a, b) : "string" === typeof c ? Qb.c(c, a, b) : t(nb, c) ? ob.c(c, a, b) : v ? R.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.zb) ? b.N(null, a) : b instanceof Array ? Qb.a(b, a) : "string" === typeof b ? Qb.a(b, a) : t(nb, b) ? ob.a(b, a) : v ? R.a(a, b) : null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function mc(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a)
}
function nc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var x = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new La(b.d(a)), l = d;;) {
        if(s(l)) {
          e = e.append(b.d(J(l))), l = M(l)
        }else {
          return e.toString()
        }
      }
    }
    a.p = 1;
    a.k = function(a) {
      var b = J(a);
      a = K(a);
      return c(b, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.i(b, O(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.k = c.k;
  b.ua = aa("");
  b.d = a;
  b.i = c.i;
  return b
}();
function Ub(a, b) {
  return jc((b ? b.f & 16777216 || b.Pb || (b.f ? 0 : t(tb, b)) : t(tb, b)) ? function() {
    for(var c = I(a), d = I(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(F.a(J(c), J(d))) {
        c = M(c), d = M(d)
      }else {
        return v ? !1 : null
      }
    }
  }() : null)
}
function Nb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Tb(a) {
  if(I(a)) {
    var b = H(J(a));
    for(a = M(a);;) {
      if(null == a) {
        return b
      }
      b = Nb(b, H(J(a)));
      a = M(a)
    }
  }else {
    return 0
  }
}
function oc(a) {
  var b = 0;
  for(a = I(a);;) {
    if(a) {
      var c = J(a), b = (b + (H(T.d ? T.d(c) : T.call(null, c)) ^ H(pc.d ? pc.d(c) : pc.call(null, c)))) % 4503599627370496;
      a = M(a)
    }else {
      return b
    }
  }
}
function qc(a, b, c, d, e) {
  this.j = a;
  this.ya = b;
  this.fa = c;
  this.count = d;
  this.h = e;
  this.n = 0;
  this.f = 65937646
}
p = qc.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.ba = function() {
  return 1 === this.count ? null : this.fa
};
p.I = function(a, b) {
  return new qc(this.j, b, this, this.count + 1, null)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return R.a(b, this)
};
p.O = function(a, b, c) {
  return R.c(b, c, this)
};
p.w = function() {
  return this
};
p.A = f("count");
p.P = f("ya");
p.R = function() {
  return 1 === this.count ? L : this.fa
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new qc(b, this.ya, this.fa, this.count, this.h)
};
p.F = f("j");
function rc(a) {
  this.j = a;
  this.n = 0;
  this.f = 65937614
}
p = rc.prototype;
p.v = aa(0);
p.ba = aa(null);
p.I = function(a, b) {
  return new qc(this.j, b, null, 1, null)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return R.a(b, this)
};
p.O = function(a, b, c) {
  return R.c(b, c, this)
};
p.w = aa(null);
p.A = aa(0);
p.P = aa(null);
p.R = function() {
  return L
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new rc(b)
};
p.F = f("j");
var L = new rc(null), sc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Ob) {
      b = a.b
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.P(null)), a = a.ba(null)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = L;;) {
      if(0 < a) {
        var g = a - 1, e = e.I(null, b[a - 1]);
        a = g
      }else {
        return e
      }
    }
  }
  a.p = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.i = b;
  return a
}();
function tc(a, b, c, d) {
  this.j = a;
  this.ya = b;
  this.fa = c;
  this.h = d;
  this.n = 0;
  this.f = 65929452
}
p = tc.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.ba = function() {
  return null == this.fa ? null : I(this.fa)
};
p.I = function(a, b) {
  return new tc(null, b, this, this.h)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return R.a(b, this)
};
p.O = function(a, b, c) {
  return R.c(b, c, this)
};
p.w = function() {
  return this
};
p.P = f("ya");
p.R = function() {
  return null == this.fa ? L : this.fa
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new tc(b, this.ya, this.fa, this.h)
};
p.F = f("j");
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.wa)) ? new tc(null, a, b, null) : new tc(null, a, I(b), null)
}
function U(a, b, c, d) {
  this.L = a;
  this.name = b;
  this.ha = c;
  this.ia = d;
  this.f = 2153775105;
  this.n = 4096
}
p = U.prototype;
p.t = function(a, b) {
  return E(b, [x(":"), x(this.ha)].join(""))
};
p.v = function() {
  null == this.ia && (this.ia = Nb(H(this.L), H(this.name)) + 2654435769);
  return this.ia
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return $b.a(c, this);
      case 3:
        return $b.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
p.d = function(a) {
  return $b.a(a, this)
};
p.a = function(a, b) {
  return $b.c(a, this, b)
};
p.s = function(a, b) {
  return b instanceof U ? this.ha === b.ha : !1
};
p.toString = function() {
  return[x(":"), x(this.ha)].join("")
};
function uc(a, b, c, d) {
  this.j = a;
  this.za = b;
  this.o = c;
  this.h = d;
  this.n = 0;
  this.f = 32374988
}
p = uc.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.ba = function() {
  sb(this);
  return null == this.o ? null : M(this.o)
};
p.I = function(a, b) {
  return P(b, this)
};
p.toString = function() {
  return Hb(this)
};
function vc(a) {
  null != a.za && (a.o = a.za.ua ? "" : a.za.call(null), a.za = null);
  return a.o
}
p.N = function(a, b) {
  return R.a(b, this)
};
p.O = function(a, b, c) {
  return R.c(b, c, this)
};
p.w = function() {
  vc(this);
  if(null == this.o) {
    return null
  }
  for(var a = this.o;;) {
    if(a instanceof uc) {
      a = vc(a)
    }else {
      return this.o = a, I(this.o)
    }
  }
};
p.P = function() {
  sb(this);
  return null == this.o ? null : J(this.o)
};
p.R = function() {
  sb(this);
  return null != this.o ? K(this.o) : L
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new uc(b, this.za, this.o, this.h)
};
p.F = f("j");
function wc(a, b) {
  this.La = a;
  this.end = b;
  this.n = 0;
  this.f = 2
}
wc.prototype.A = f("end");
wc.prototype.add = function(a) {
  this.La[this.end] = a;
  return this.end += 1
};
wc.prototype.U = function() {
  var a = new xc(this.La, 0, this.end);
  this.La = null;
  return a
};
function xc(a, b, c) {
  this.b = a;
  this.q = b;
  this.end = c;
  this.n = 0;
  this.f = 524306
}
p = xc.prototype;
p.N = function(a, b) {
  return Qb.l(this.b, b, this.b[this.q], this.q + 1)
};
p.O = function(a, b, c) {
  return Qb.l(this.b, b, c, this.q)
};
p.jb = function() {
  if(this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new xc(this.b, this.q + 1, this.end)
};
p.B = function(a, b) {
  return this.b[this.q + b]
};
p.M = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.b[this.q + b] : c
};
p.A = function() {
  return this.end - this.q
};
var yc = function() {
  function a(a, b, c) {
    return new xc(a, b, c)
  }
  function b(a, b) {
    return new xc(a, b, a.length)
  }
  function c(a) {
    return new xc(a, 0, a.length)
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.c = a;
  return d
}();
function zc(a, b, c, d) {
  this.U = a;
  this.Y = b;
  this.j = c;
  this.h = d;
  this.f = 31850732;
  this.n = 1536
}
p = zc.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.ba = function() {
  if(1 < Ya(this.U)) {
    return new zc(Cb(this.U), this.Y, this.j, null)
  }
  var a = sb(this.Y);
  return null == a ? null : a
};
p.I = function(a, b) {
  return P(b, this)
};
p.toString = function() {
  return Hb(this)
};
p.w = function() {
  return this
};
p.P = function() {
  return z.a(this.U, 0)
};
p.R = function() {
  return 1 < Ya(this.U) ? new zc(Cb(this.U), this.Y, this.j, null) : null == this.Y ? L : this.Y
};
p.Ma = function() {
  return null == this.Y ? null : this.Y
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new zc(this.U, this.Y, b, this.h)
};
p.F = f("j");
p.Na = f("U");
p.Oa = function() {
  return null == this.Y ? L : this.Y
};
function Ac(a, b) {
  return 0 === Ya(a) ? b : new zc(a, b, null, null)
}
function Bc(a) {
  for(var b = [];;) {
    if(I(a)) {
      b.push(J(a)), a = M(a)
    }else {
      return b
    }
  }
}
function Cc(a, b) {
  if(Rb(a)) {
    return Q(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && I(c)) {
      c = M(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Fc = function Dc(b) {
  return null == b ? null : null == M(b) ? I(J(b)) : v ? P(J(b), Dc(M(b))) : null
}, Gc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)))
  }
  function b(a, b, c) {
    return P(a, P(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var q = null;
      4 < arguments.length && (q = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q)
    }
    function b(a, c, d, e, g) {
      return P(a, P(c, P(d, P(e, Fc(g)))))
    }
    a.p = 4;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var n = J(a);
      a = K(a);
      return b(c, d, e, n, a)
    };
    a.i = b;
    return a
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return P(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.i(c, g, h, k, O(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 4;
  c.k = d.k;
  c.d = function(a) {
    return I(a)
  };
  c.a = function(a, b) {
    return P(a, b)
  };
  c.c = b;
  c.l = a;
  c.i = d.i;
  return c
}();
function Hc(a, b, c) {
  var d = I(c);
  if(0 === b) {
    return a.ua ? "" : a.call(null)
  }
  c = B(d);
  var e = C(d);
  if(1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c)
  }
  var d = B(e), g = C(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = B(g), h = C(g);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var g = B(h), k = C(h);
  if(4 === b) {
    return a.l ? a.l(c, d, e, g) : a.l ? a.l(c, d, e, g) : a.call(null, c, d, e, g)
  }
  h = B(k);
  k = C(k);
  if(5 === b) {
    return a.J ? a.J(c, d, e, g, h) : a.J ? a.J(c, d, e, g, h) : a.call(null, c, d, e, g, h)
  }
  a = B(k);
  var l = C(k);
  if(6 === b) {
    return a.aa ? a.aa(c, d, e, g, h, a) : a.aa ? a.aa(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a)
  }
  var k = B(l), m = C(l);
  if(7 === b) {
    return a.oa ? a.oa(c, d, e, g, h, a, k) : a.oa ? a.oa(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k)
  }
  var l = B(m), n = C(m);
  if(8 === b) {
    return a.$a ? a.$a(c, d, e, g, h, a, k, l) : a.$a ? a.$a(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l)
  }
  var m = B(n), q = C(n);
  if(9 === b) {
    return a.ab ? a.ab(c, d, e, g, h, a, k, l, m) : a.ab ? a.ab(c, d, e, g, h, a, k, l, m) : a.call(null, c, d, e, g, h, a, k, l, m)
  }
  var n = B(q), u = C(q);
  if(10 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m, n) : a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m, n) : a.call(null, c, d, e, g, h, a, k, l, m, n)
  }
  var q = B(u), A = C(u);
  if(11 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m, n, q) : a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m, n, q) : a.call(null, c, d, e, g, h, a, k, l, m, n, q)
  }
  var u = B(A), G = C(A);
  if(12 === b) {
    return a.Ra ? a.Ra(c, d, e, g, h, a, k, l, m, n, q, u) : a.Ra ? a.Ra(c, d, e, g, h, a, k, l, m, n, q, u) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u)
  }
  var A = B(G), N = C(G);
  if(13 === b) {
    return a.Sa ? a.Sa(c, d, e, g, h, a, k, l, m, n, q, u, A) : a.Sa ? a.Sa(c, d, e, g, h, a, k, l, m, n, q, u, A) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A)
  }
  var G = B(N), S = C(N);
  if(14 === b) {
    return a.Ta ? a.Ta(c, d, e, g, h, a, k, l, m, n, q, u, A, G) : a.Ta ? a.Ta(c, d, e, g, h, a, k, l, m, n, q, u, A, G) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A, G)
  }
  var N = B(S), ba = C(S);
  if(15 === b) {
    return a.Ua ? a.Ua(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N) : a.Ua ? a.Ua(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A, G, N)
  }
  var S = B(ba), ma = C(ba);
  if(16 === b) {
    return a.Va ? a.Va(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S) : a.Va ? a.Va(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S)
  }
  var ba = B(ma), Aa = C(ma);
  if(17 === b) {
    return a.Wa ? a.Wa(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba) : a.Wa ? a.Wa(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba)
  }
  var ma = B(Aa), Kb = C(Aa);
  if(18 === b) {
    return a.Xa ? a.Xa(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma) : a.Xa ? a.Xa(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma)
  }
  Aa = B(Kb);
  Kb = C(Kb);
  if(19 === b) {
    return a.Ya ? a.Ya(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma, Aa) : a.Ya ? a.Ya(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma, Aa) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma, Aa)
  }
  var Ec = B(Kb);
  C(Kb);
  if(20 === b) {
    return a.Za ? a.Za(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma, Aa, Ec) : a.Za ? a.Za(c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma, Aa, Ec) : a.call(null, c, d, e, g, h, a, k, l, m, n, q, u, A, G, N, S, ba, ma, Aa, Ec)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Ic = function() {
  function a(a, b, c, d, e) {
    b = Gc.l(b, c, d, e);
    c = a.p;
    return a.k ? (d = Cc(b, c + 1), d <= c ? Hc(a, d, b) : a.k(b)) : a.apply(a, Bc(b))
  }
  function b(a, b, c, d) {
    b = Gc.c(b, c, d);
    c = a.p;
    return a.k ? (d = Cc(b, c + 1), d <= c ? Hc(a, d, b) : a.k(b)) : a.apply(a, Bc(b))
  }
  function c(a, b, c) {
    b = Gc.a(b, c);
    c = a.p;
    if(a.k) {
      var d = Cc(b, c + 1);
      return d <= c ? Hc(a, d, b) : a.k(b)
    }
    return a.apply(a, Bc(b))
  }
  function d(a, b) {
    var c = a.p;
    if(a.k) {
      var d = Cc(b, c + 1);
      return d <= c ? Hc(a, d, b) : a.k(b)
    }
    return a.apply(a, Bc(b))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, A) {
      var G = null;
      5 < arguments.length && (G = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, G)
    }
    function b(a, c, d, e, g, h) {
      c = P(c, P(d, P(e, P(g, Fc(h)))));
      d = a.p;
      return a.k ? (e = Cc(c, d + 1), e <= d ? Hc(a, e, c) : a.k(c)) : a.apply(a, Bc(c))
    }
    a.p = 5;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, d, e, g, h, a)
    };
    a.i = b;
    return a
  }(), e = function(e, k, l, m, n, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return g.i(e, k, l, m, n, O(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.k = g.k;
  e.a = d;
  e.c = c;
  e.l = b;
  e.J = a;
  e.i = g.i;
  return e
}();
function Jc(a, b) {
  for(;;) {
    if(null == I(b)) {
      return!0
    }
    if(s(a.d ? a.d(J(b)) : a.call(null, J(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d
    }else {
      return v ? !1 : null
    }
  }
}
function Kc(a) {
  return a
}
var Lc = function() {
  function a(a, b, c, e) {
    return new uc(null, function() {
      var m = I(b), n = I(c), q = I(e);
      return m && n && q ? P(a.c ? a.c(J(m), J(n), J(q)) : a.call(null, J(m), J(n), J(q)), d.l(a, K(m), K(n), K(q))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new uc(null, function() {
      var e = I(b), m = I(c);
      return e && m ? P(a.a ? a.a(J(e), J(m)) : a.call(null, J(e), J(m)), d.c(a, K(e), K(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new uc(null, function() {
      var c = I(b);
      if(c) {
        if(hc(c)) {
          for(var e = Db(c), m = Q(e), n = new wc(Array(m), 0), q = 0;;) {
            if(q < m) {
              var u = a.d ? a.d(z.a(e, q)) : a.call(null, z.a(e, q));
              n.add(u);
              q += 1
            }else {
              break
            }
          }
          return Ac(n.U(), d.a(a, Eb(c)))
        }
        return P(a.d ? a.d(J(c)) : a.call(null, J(c)), d.a(a, K(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, g, q) {
      var u = null;
      4 < arguments.length && (u = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, u)
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return Ic.a(a, b)
      }, function A(a) {
        return new uc(null, function() {
          var b = d.a(I, a);
          return Jc(Kc, b) ? P(d.a(J, b), A(d.a(K, b))) : null
        }, null, null)
      }(Xb.i(h, g, O([e, c], 0))))
    }
    a.p = 4;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
      return b(c, d, e, g, a)
    };
    a.i = b;
    return a
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.i(d, h, k, l, O(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.k = e.k;
  d.a = c;
  d.c = b;
  d.l = a;
  d.i = e.i;
  return d
}();
function Mc(a, b) {
  this.m = a;
  this.b = b
}
function Nc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Oc(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Mc(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var Qc = function Pc(b, c, d, e) {
  var g = new Mc(d.m, y(d.b)), h = b.e - 1 >>> c & 31;
  5 === c ? g.b[h] = e : (d = d.b[h], b = null != d ? Pc(b, c - 5, d, e) : Oc(null, c - 5, e), g.b[h] = b);
  return g
};
function Rc(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function Sc(a, b) {
  if(0 <= b && b < a.e) {
    if(b >= Nc(a)) {
      return a.H
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.b[b >>> d & 31], d = e
      }else {
        return c.b
      }
    }
  }else {
    return Rc(b, a.e)
  }
}
var Uc = function Tc(b, c, d, e, g) {
  var h = new Mc(d.m, y(d.b));
  if(0 === c) {
    h.b[e & 31] = g
  }else {
    var k = e >>> c & 31;
    b = Tc(b, c - 5, d.b[k], e, g);
    h.b[k] = b
  }
  return h
};
function V(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.H = e;
  this.h = g;
  this.n = 4;
  this.f = 167668511
}
p = V.prototype;
p.Fa = function() {
  return new Vc(this.e, this.shift, Wc.d ? Wc.d(this.root) : Wc.call(null, this.root), Xc.d ? Xc.d(this.H) : Xc.call(null, this.H))
};
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.C = function(a, b) {
  return z.c(this, b, null)
};
p.D = function(a, b, c) {
  return z.c(this, b, c)
};
p.ta = function(a, b, c) {
  if(0 <= b && b < this.e) {
    return Nc(this) <= b ? (a = y(this.H), a[b & 31] = c, new V(this.j, this.e, this.shift, this.root, a, null)) : new V(this.j, this.e, this.shift, Uc(this, this.shift, this.root, b, c), this.H, null)
  }
  if(b === this.e) {
    return Za(this, c)
  }
  if(v) {
    throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.e), x("]")].join(""));
  }
  return null
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.M(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
p.d = function(a) {
  return this.B(null, a)
};
p.a = function(a, b) {
  return this.M(null, a, b)
};
p.I = function(a, b) {
  if(32 > this.e - Nc(this)) {
    for(var c = this.H.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.H[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new V(this.j, this.e + 1, this.shift, this.root, d, null)
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new Mc(null, Array(32)), d.b[0] = this.root, e = Oc(null, this.shift, new Mc(null, this.H)), d.b[1] = e) : d = Qc(this, this.shift, this.root, new Mc(null, this.H));
  return new V(this.j, this.e + 1, c, d, [b], null)
};
p.kb = function() {
  return z.a(this, 0)
};
p.lb = function() {
  return z.a(this, 1)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return Pb.a(this, b)
};
p.O = function(a, b, c) {
  return Pb.c(this, b, c)
};
p.w = function() {
  return 0 === this.e ? null : 32 > this.e ? O.d(this.H) : v ? W.c ? W.c(this, 0, 0) : W.call(null, this, 0, 0) : null
};
p.A = f("e");
p.bb = function(a, b, c) {
  return cb(this, b, c)
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new V(b, this.e, this.shift, this.root, this.H, this.h)
};
p.F = f("j");
p.B = function(a, b) {
  return Sc(this, b)[b & 31]
};
p.M = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c
};
var Yc = new Mc(null, Array(32)), Zc = new V(null, 0, 5, Yc, [], 0);
function $c(a, b, c, d, e, g) {
  this.u = a;
  this.T = b;
  this.g = c;
  this.q = d;
  this.j = e;
  this.h = g;
  this.f = 32243948;
  this.n = 1536
}
p = $c.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.ba = function() {
  if(this.q + 1 < this.T.length) {
    var a = W.l ? W.l(this.u, this.T, this.g, this.q + 1) : W.call(null, this.u, this.T, this.g, this.q + 1);
    return null == a ? null : a
  }
  return Fb(this)
};
p.I = function(a, b) {
  return P(b, this)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return Pb.a(ad.c ? ad.c(this.u, this.g + this.q, Q(this.u)) : ad.call(null, this.u, this.g + this.q, Q(this.u)), b)
};
p.O = function(a, b, c) {
  return Pb.c(ad.c ? ad.c(this.u, this.g + this.q, Q(this.u)) : ad.call(null, this.u, this.g + this.q, Q(this.u)), b, c)
};
p.w = function() {
  return this
};
p.P = function() {
  return this.T[this.q]
};
p.R = function() {
  if(this.q + 1 < this.T.length) {
    var a = W.l ? W.l(this.u, this.T, this.g, this.q + 1) : W.call(null, this.u, this.T, this.g, this.q + 1);
    return null == a ? L : a
  }
  return Eb(this)
};
p.Ma = function() {
  var a = this.T.length, a = this.g + a < Ya(this.u) ? W.c ? W.c(this.u, this.g + a, 0) : W.call(null, this.u, this.g + a, 0) : null;
  return null == a ? null : a
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return W.J ? W.J(this.u, this.T, this.g, this.q, b) : W.call(null, this.u, this.T, this.g, this.q, b)
};
p.Na = function() {
  return yc.a(this.T, this.q)
};
p.Oa = function() {
  var a = this.T.length, a = this.g + a < Ya(this.u) ? W.c ? W.c(this.u, this.g + a, 0) : W.call(null, this.u, this.g + a, 0) : null;
  return null == a ? L : a
};
var W = function() {
  function a(a, b, c, d, l) {
    return new $c(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new $c(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new $c(a, Sc(a, b), b, c, null, null)
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.l = b;
  d.J = a;
  return d
}();
function bd(a, b, c, d, e) {
  this.j = a;
  this.Z = b;
  this.start = c;
  this.end = d;
  this.h = e;
  this.n = 0;
  this.f = 32400159
}
p = bd.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.C = function(a, b) {
  return z.c(this, b, null)
};
p.D = function(a, b, c) {
  return z.c(this, b, c)
};
p.ta = function(a, b, c) {
  var d = this, e = d.start + b;
  return cd.J ? cd.J(d.j, bc.c(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : cd.call(null, d.j, bc.c(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.M(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
p.d = function(a) {
  return this.B(null, a)
};
p.a = function(a, b) {
  return this.M(null, a, b)
};
p.I = function(a, b) {
  return cd.J ? cd.J(this.j, ib(this.Z, this.end, b), this.start, this.end + 1, null) : cd.call(null, this.j, ib(this.Z, this.end, b), this.start, this.end + 1, null)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return Pb.a(this, b)
};
p.O = function(a, b, c) {
  return Pb.c(this, b, c)
};
p.w = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : P(z.a(a.Z, d), new uc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
p.A = function() {
  return this.end - this.start
};
p.bb = function(a, b, c) {
  return cb(this, b, c)
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return cd.J ? cd.J(b, this.Z, this.start, this.end, this.h) : cd.call(null, b, this.Z, this.start, this.end, this.h)
};
p.F = f("j");
p.B = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Rc(b, this.end - this.start) : z.a(this.Z, this.start + b)
};
p.M = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.c(this.Z, this.start + b, c)
};
function cd(a, b, c, d, e) {
  for(;;) {
    if(b instanceof bd) {
      c = b.start + c, d = b.start + d, b = b.Z
    }else {
      var g = Q(b);
      if(0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new bd(a, b, c, d, e)
    }
  }
}
var ad = function() {
  function a(a, b, c) {
    return cd(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, Q(a))
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Wc(a) {
  return new Mc({}, y(a.b))
}
function Xc(a) {
  var b = Array(32);
  ic(a, 0, b, 0, a.length);
  return b
}
var ed = function dd(b, c, d, e) {
  d = b.root.m === d.m ? d : new Mc(b.root.m, y(d.b));
  var g = b.e - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.b[g];
    b = null != h ? dd(b, c - 5, h, e) : Oc(b.root.m, c - 5, e)
  }
  d.b[g] = b;
  return d
};
function Vc(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.H = d;
  this.f = 275;
  this.n = 88
}
p = Vc.prototype;
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.D(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
p.d = function(a) {
  return this.C(null, a)
};
p.a = function(a, b) {
  return this.D(null, a, b)
};
p.C = function(a, b) {
  return z.c(this, b, null)
};
p.D = function(a, b, c) {
  return z.c(this, b, c)
};
p.B = function(a, b) {
  if(this.root.m) {
    return Sc(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
p.M = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c
};
p.A = function() {
  if(this.root.m) {
    return this.e
  }
  throw Error("count after persistent!");
};
p.mb = function(a, b, c) {
  var d = this;
  if(d.root.m) {
    if(0 <= b && b < d.e) {
      return Nc(this) <= b ? d.H[b & 31] = c : (a = function g(a, k) {
        var l = d.root.m === k.m ? k : new Mc(d.root.m, y(k.b));
        if(0 === a) {
          l.b[b & 31] = c
        }else {
          var m = b >>> a & 31, n = g(a - 5, l.b[m]);
          l.b[m] = n
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.e) {
      return yb(this, c)
    }
    if(v) {
      throw Error([x("Index "), x(b), x(" out of bounds for TransientVector of length"), x(d.e)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
p.xa = function(a, b, c) {
  return Bb(this, b, c)
};
p.Ha = function(a, b) {
  if(this.root.m) {
    if(32 > this.e - Nc(this)) {
      this.H[this.e & 31] = b
    }else {
      var c = new Mc(this.root.m, this.H), d = Array(32);
      d[0] = b;
      this.H = d;
      if(this.e >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = Oc(this.root.m, this.shift, c);
        this.root = new Mc(this.root.m, d);
        this.shift = e
      }else {
        this.root = ed(this, this.shift, this.root, c)
      }
    }
    this.e += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
p.Ia = function() {
  if(this.root.m) {
    this.root.m = null;
    var a = this.e - Nc(this), b = Array(a);
    ic(this.H, 0, b, 0, a);
    return new V(null, this.e, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function fd() {
  this.n = 0;
  this.f = 2097152
}
fd.prototype.s = aa(!1);
var gd = new fd;
function hd(a, b) {
  return jc((null == b ? 0 : b ? b.f & 1024 || b.Mb || (b.f ? 0 : t(db, b)) : t(db, b)) ? Q(a) === Q(b) ? Jc(Kc, Lc.a(function(a) {
    return F.a($b.c(b, J(a), gd), Wb(a))
  }, a)) : null : null)
}
function id(a, b) {
  var c = a.b;
  if(b instanceof U) {
    a: {
      for(var d = c.length, e = b.ha, g = 0;;) {
        if(d <= g) {
          c = -1;
          break a
        }
        var h = c[g];
        if(h instanceof U && e === h.ha) {
          c = g;
          break a
        }
        if(v) {
          g += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if(da(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for(e = 0;;) {
          if(d <= e) {
            c = -1;
            break a
          }
          if(b === c[e]) {
            c = e;
            break a
          }
          if(v) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof Mb) {
        a: {
          d = c.length;
          e = b.na;
          for(g = 0;;) {
            if(d <= g) {
              c = -1;
              break a
            }
            h = c[g];
            if(h instanceof Mb && e === h.na) {
              c = g;
              break a
            }
            if(v) {
              g += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(null == b) {
          a: {
            d = c.length;
            for(e = 0;;) {
              if(d <= e) {
                c = -1;
                break a
              }
              if(null == c[e]) {
                c = e;
                break a
              }
              if(v) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(v) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(F.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(v) {
                  e += 2
                }else {
                  c = null;
                  break a
                }
              }
              c = void 0
            }
          }else {
            c = null
          }
        }
      }
    }
  }
  return c
}
function jd(a, b, c) {
  this.b = a;
  this.g = b;
  this.ra = c;
  this.n = 0;
  this.f = 32374990
}
p = jd.prototype;
p.v = function() {
  return Tb(this)
};
p.ba = function() {
  return this.g < this.b.length - 2 ? new jd(this.b, this.g + 2, this.ra) : null
};
p.I = function(a, b) {
  return P(b, this)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return R.a(b, this)
};
p.O = function(a, b, c) {
  return R.c(b, c, this)
};
p.w = function() {
  return this
};
p.A = function() {
  return(this.b.length - this.g) / 2
};
p.P = function() {
  return new V(null, 2, 5, Yc, [this.b[this.g], this.b[this.g + 1]], null)
};
p.R = function() {
  return this.g < this.b.length - 2 ? new jd(this.b, this.g + 2, this.ra) : L
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new jd(this.b, this.g, b)
};
p.F = f("ra");
function Na(a, b, c, d) {
  this.j = a;
  this.e = b;
  this.b = c;
  this.h = d;
  this.n = 4;
  this.f = 16123663
}
p = Na.prototype;
p.Fa = function() {
  return new kd({}, this.b.length, y(this.b))
};
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = oc(this)
};
p.C = function(a, b) {
  return D.c(this, b, null)
};
p.D = function(a, b, c) {
  a = id(this, b);
  return-1 === a ? c : this.b[a + 1]
};
p.ta = function(a, b, c) {
  a = id(this, b);
  if(-1 === a) {
    if(this.e < ld) {
      a = this.b;
      for(var d = a.length, e = Array(d + 2), g = 0;;) {
        if(g < d) {
          e[g] = a[g], g += 1
        }else {
          break
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Na(this.j, this.e + 1, e, null)
    }
    a = mb;
    d = cb;
    e = md;
    null != e ? e && (e.n & 4 || e.Kb) ? (e = lc.c(yb, xb(e), this), e = zb(e)) : e = lc.c(Za, e, this) : e = lc.c(Xb, L, this);
    return a(d(e, b, c), this.j)
  }
  return c === this.b[a + 1] ? this : v ? (b = y(this.b), b[a + 1] = c, new Na(this.j, this.e, b, null)) : null
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.D(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
p.d = function(a) {
  return this.C(null, a)
};
p.a = function(a, b) {
  return this.D(null, a, b)
};
p.I = function(a, b) {
  return gc(b) ? cb(this, z.a(b, 0), z.a(b, 1)) : lc.c(Za, this, b)
};
p.toString = function() {
  return Hb(this)
};
p.w = function() {
  return 0 <= this.b.length - 2 ? new jd(this.b, 0, null) : null
};
p.A = f("e");
p.s = function(a, b) {
  return hd(this, b)
};
p.G = function(a, b) {
  return new Na(b, this.e, this.b, this.h)
};
p.F = f("j");
var ld = 8;
function kd(a, b, c) {
  this.pa = a;
  this.da = b;
  this.b = c;
  this.n = 56;
  this.f = 258
}
p = kd.prototype;
p.xa = function(a, b, c) {
  if(s(this.pa)) {
    a = id(this, b);
    if(-1 === a) {
      if(this.da + 2 <= 2 * ld) {
        return this.da += 2, this.b.push(b), this.b.push(c), this
      }
      a = nd.a ? nd.a(this.da, this.b) : nd.call(null, this.da, this.b);
      return Ab(a, b, c)
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
p.Ha = function(a, b) {
  if(s(this.pa)) {
    if(b ? b.f & 2048 || b.xb || (b.f ? 0 : t(eb, b)) : t(eb, b)) {
      return Ab(this, T.d ? T.d(b) : T.call(null, b), pc.d ? pc.d(b) : pc.call(null, b))
    }
    for(var c = I(b), d = this;;) {
      var e = J(c);
      if(s(e)) {
        c = M(c), d = Ab(d, T.d ? T.d(e) : T.call(null, e), pc.d ? pc.d(e) : pc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
p.Ia = function() {
  if(s(this.pa)) {
    return this.pa = !1, new Na(null, mc((this.da - this.da % 2) / 2), this.b, null)
  }
  throw Error("persistent! called twice");
};
p.C = function(a, b) {
  return D.c(this, b, null)
};
p.D = function(a, b, c) {
  if(s(this.pa)) {
    return a = id(this, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
p.A = function() {
  if(s(this.pa)) {
    return mc((this.da - this.da % 2) / 2)
  }
  throw Error("count after persistent!");
};
function nd(a, b) {
  for(var c = xb(md), d = 0;;) {
    if(d < a) {
      c = Ab(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function od() {
  this.$ = !1
}
function pd(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.ha === b.ha ? !0 : v ? F.a(a, b) : null
}
var qd = function() {
  function a(a, b, c, h, k) {
    a = y(a);
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = y(a);
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.J = a;
  return c
}(), rd = function() {
  function a(a, b, c, h, k, l) {
    a = a.qa(b);
    a.b[c] = h;
    a.b[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.qa(b);
    a.b[c] = h;
    return a
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.aa = a;
  return c
}();
function sd(a, b, c) {
  this.m = a;
  this.r = b;
  this.b = c
}
p = sd.prototype;
p.W = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = nc(this.r & h - 1);
  if(0 === (this.r & h)) {
    var l = nc(this.r);
    if(2 * l < this.b.length) {
      a = this.qa(a);
      b = a.b;
      g.$ = !0;
      a: {
        for(c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.r |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = td.W(a, b + 5, c, d, e, g);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.r >>> d & 1) && (k[d] = null != this.b[e] ? td.W(a, b + 5, H(this.b[e]), this.b[e], this.b[e + 1], g) : this.b[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new ud(a, l + 1, k)
    }
    return v ? (b = Array(2 * (l + 4)), ic(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, ic(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.$ = !0, a = this.qa(a), a.b = b, a.r |= h, a) : null
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.W(a, b + 5, c, d, e, g), l === h ? this : rd.l(this, a, 2 * k + 1, l)) : pd(d, l) ? e === h ? this : rd.l(this, a, 2 * k + 1, e) : v ? (g.$ = !0, rd.aa(this, a, 2 * k, null, 2 * k + 1, vd.oa ? vd.oa(a, b + 5, l, h, c, d, e) : vd.call(null, a, b + 5, l, h, c, d, e))) : null
};
p.Aa = function() {
  return wd.d ? wd.d(this.b) : wd.call(null, this.b)
};
p.qa = function(a) {
  if(a === this.m) {
    return this
  }
  var b = nc(this.r), c = Array(0 > b ? 4 : 2 * (b + 1));
  ic(this.b, 0, c, 0, 2 * b);
  return new sd(a, this.r, c)
};
p.V = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = nc(this.r & g - 1);
  if(0 === (this.r & g)) {
    var k = nc(this.r);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = td.V(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.r >>> c & 1) && (h[c] = null != this.b[d] ? td.V(a + 5, H(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new ud(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    ic(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    ic(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.$ = !0;
    return new sd(null, this.r | g, a)
  }
  k = this.b[2 * h];
  g = this.b[2 * h + 1];
  return null == k ? (k = g.V(a + 5, b, c, d, e), k === g ? this : new sd(null, this.r, qd.c(this.b, 2 * h + 1, k))) : pd(c, k) ? d === g ? this : new sd(null, this.r, qd.c(this.b, 2 * h + 1, d)) : v ? (e.$ = !0, new sd(null, this.r, qd.J(this.b, 2 * h, null, 2 * h + 1, vd.aa ? vd.aa(a + 5, k, g, b, c, d) : vd.call(null, a + 5, k, g, b, c, d)))) : null
};
p.ka = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.r & e)) {
    return d
  }
  var g = nc(this.r & e - 1), e = this.b[2 * g], g = this.b[2 * g + 1];
  return null == e ? g.ka(a + 5, b, c, d) : pd(c, e) ? g : v ? d : null
};
var td = new sd(null, 0, []);
function ud(a, b, c) {
  this.m = a;
  this.e = b;
  this.b = c
}
p = ud.prototype;
p.W = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.b[h];
  if(null == k) {
    return a = rd.l(this, a, h, td.W(a, b + 5, c, d, e, g)), a.e += 1, a
  }
  b = k.W(a, b + 5, c, d, e, g);
  return b === k ? this : rd.l(this, a, h, b)
};
p.Aa = function() {
  return xd.d ? xd.d(this.b) : xd.call(null, this.b)
};
p.qa = function(a) {
  return a === this.m ? this : new ud(a, this.e, y(this.b))
};
p.V = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.b[g];
  if(null == h) {
    return new ud(null, this.e + 1, qd.c(this.b, g, td.V(a + 5, b, c, d, e)))
  }
  a = h.V(a + 5, b, c, d, e);
  return a === h ? this : new ud(null, this.e, qd.c(this.b, g, a))
};
p.ka = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ka(a + 5, b, c, d) : d
};
function yd(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(pd(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function zd(a, b, c, d) {
  this.m = a;
  this.ga = b;
  this.e = c;
  this.b = d
}
p = zd.prototype;
p.W = function(a, b, c, d, e, g) {
  if(c === this.ga) {
    b = yd(this.b, this.e, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.e) {
        return a = rd.aa(this, a, 2 * this.e, d, 2 * this.e + 1, e), g.$ = !0, a.e += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      ic(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.$ = !0;
      g = this.e + 1;
      a === this.m ? (this.b = b, this.e = g, a = this) : a = new zd(this.m, this.ga, g, b);
      return a
    }
    return this.b[b + 1] === e ? this : rd.l(this, a, b + 1, e)
  }
  return(new sd(a, 1 << (this.ga >>> b & 31), [null, this, null, null])).W(a, b, c, d, e, g)
};
p.Aa = function() {
  return wd.d ? wd.d(this.b) : wd.call(null, this.b)
};
p.qa = function(a) {
  if(a === this.m) {
    return this
  }
  var b = Array(2 * (this.e + 1));
  ic(this.b, 0, b, 0, 2 * this.e);
  return new zd(a, this.ga, this.e, b)
};
p.V = function(a, b, c, d, e) {
  return b === this.ga ? (a = yd(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), ic(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.$ = !0, new zd(null, this.ga, this.e + 1, b)) : F.a(this.b[a], d) ? this : new zd(null, this.ga, this.e, qd.c(this.b, a + 1, d))) : (new sd(null, 1 << (this.ga >>> a & 31), [null, this])).V(a, b, c, d, e)
};
p.ka = function(a, b, c, d) {
  a = yd(this.b, this.e, c);
  return 0 > a ? d : pd(c, this.b[a]) ? this.b[a + 1] : v ? d : null
};
var vd = function() {
  function a(a, b, c, h, k, l, m) {
    var n = H(c);
    if(n === k) {
      return new zd(null, n, 2, [c, h, l, m])
    }
    var q = new od;
    return td.W(a, b, n, c, h, q).W(a, b, k, l, m, q)
  }
  function b(a, b, c, h, k, l) {
    var m = H(b);
    if(m === h) {
      return new zd(null, m, 2, [b, c, k, l])
    }
    var n = new od;
    return td.V(a, m, b, c, n).V(a, h, k, l, n)
  }
  var c = null, c = function(c, e, g, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.aa = b;
  c.oa = a;
  return c
}();
function Ad(a, b, c, d, e) {
  this.j = a;
  this.X = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860
}
p = Ad.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.I = function(a, b) {
  return P(b, this)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return R.a(b, this)
};
p.O = function(a, b, c) {
  return R.c(b, c, this)
};
p.w = function() {
  return this
};
p.P = function() {
  return null == this.o ? new V(null, 2, 5, Yc, [this.X[this.g], this.X[this.g + 1]], null) : J(this.o)
};
p.R = function() {
  return null == this.o ? wd.c ? wd.c(this.X, this.g + 2, null) : wd.call(null, this.X, this.g + 2, null) : wd.c ? wd.c(this.X, this.g, M(this.o)) : wd.call(null, this.X, this.g, M(this.o))
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new Ad(b, this.X, this.g, this.o, this.h)
};
p.F = f("j");
var wd = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Ad(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(s(h) && (h = h.Aa(), s(h))) {
            return new Ad(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Ad(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.c(a, 0, null)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.c = a;
  return c
}();
function Bd(a, b, c, d, e) {
  this.j = a;
  this.X = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860
}
p = Bd.prototype;
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Tb(this)
};
p.I = function(a, b) {
  return P(b, this)
};
p.toString = function() {
  return Hb(this)
};
p.N = function(a, b) {
  return R.a(b, this)
};
p.O = function(a, b, c) {
  return R.c(b, c, this)
};
p.w = function() {
  return this
};
p.P = function() {
  return J(this.o)
};
p.R = function() {
  return xd.l ? xd.l(null, this.X, this.g, M(this.o)) : xd.call(null, null, this.X, this.g, M(this.o))
};
p.s = function(a, b) {
  return Ub(this, b)
};
p.G = function(a, b) {
  return new Bd(b, this.X, this.g, this.o, this.h)
};
p.F = f("j");
var xd = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(s(k) && (k = k.Aa(), s(k))) {
            return new Bd(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Bd(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.l(null, a, 0, null)
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.l = a;
  return c
}();
function Cd(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.root = c;
  this.Q = d;
  this.S = e;
  this.h = g;
  this.n = 4;
  this.f = 16123663
}
p = Cd.prototype;
p.Fa = function() {
  return new Dd({}, this.root, this.e, this.Q, this.S)
};
p.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = oc(this)
};
p.C = function(a, b) {
  return D.c(this, b, null)
};
p.D = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : v ? this.root.ka(0, H(b), b, c) : null
};
p.ta = function(a, b, c) {
  if(null == b) {
    return this.Q && c === this.S ? this : new Cd(this.j, this.Q ? this.e : this.e + 1, this.root, !0, c, null)
  }
  a = new od;
  b = (null == this.root ? td : this.root).V(0, H(b), b, c, a);
  return b === this.root ? this : new Cd(this.j, a.$ ? this.e + 1 : this.e, b, this.Q, this.S, null)
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.D(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
p.d = function(a) {
  return this.C(null, a)
};
p.a = function(a, b) {
  return this.D(null, a, b)
};
p.I = function(a, b) {
  return gc(b) ? cb(this, z.a(b, 0), z.a(b, 1)) : lc.c(Za, this, b)
};
p.toString = function() {
  return Hb(this)
};
p.w = function() {
  if(0 < this.e) {
    var a = null != this.root ? this.root.Aa() : null;
    return this.Q ? P(new V(null, 2, 5, Yc, [null, this.S], null), a) : a
  }
  return null
};
p.A = f("e");
p.s = function(a, b) {
  return hd(this, b)
};
p.G = function(a, b) {
  return new Cd(b, this.e, this.root, this.Q, this.S, this.h)
};
p.F = f("j");
var md = new Cd(null, 0, null, !1, null, 0);
function ac(a, b) {
  for(var c = a.length, d = 0, e = xb(md);;) {
    if(d < c) {
      var g = d + 1, e = e.xa(null, a[d], b[d]), d = g
    }else {
      return zb(e)
    }
  }
}
function Dd(a, b, c, d, e) {
  this.m = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.S = e;
  this.n = 56;
  this.f = 258
}
p = Dd.prototype;
p.xa = function(a, b, c) {
  return Ed(this, b, c)
};
p.Ha = function(a, b) {
  var c;
  a: {
    if(this.m) {
      if(b ? b.f & 2048 || b.xb || (b.f ? 0 : t(eb, b)) : t(eb, b)) {
        c = Ed(this, T.d ? T.d(b) : T.call(null, b), pc.d ? pc.d(b) : pc.call(null, b));
        break a
      }
      c = I(b);
      for(var d = this;;) {
        var e = J(c);
        if(s(e)) {
          c = M(c), d = Ed(d, T.d ? T.d(e) : T.call(null, e), pc.d ? pc.d(e) : pc.call(null, e))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
p.Ia = function() {
  var a;
  if(this.m) {
    this.m = null, a = new Cd(null, this.count, this.root, this.Q, this.S, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
p.C = function(a, b) {
  return null == b ? this.Q ? this.S : null : null == this.root ? null : this.root.ka(0, H(b), b)
};
p.D = function(a, b, c) {
  return null == b ? this.Q ? this.S : c : null == this.root ? c : this.root.ka(0, H(b), b, c)
};
p.A = function() {
  if(this.m) {
    return this.count
  }
  throw Error("count after persistent!");
};
function Ed(a, b, c) {
  if(a.m) {
    if(null == b) {
      a.S !== c && (a.S = c), a.Q || (a.count += 1, a.Q = !0)
    }else {
      var d = new od;
      b = (null == a.root ? td : a.root).W(a.m, 0, H(b), b, c, d);
      b !== a.root && (a.root = b);
      d.$ && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var Fd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = I(a), e = xb(md);;) {
      if(b) {
        a = M(M(b));
        var g = J(b), b = Wb(b), e = Ab(e, g, b), b = a
      }else {
        return zb(e)
      }
    }
  }
  a.p = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.i = b;
  return a
}();
function T(a) {
  return fb(a)
}
function pc(a) {
  return gb(a)
}
function Gd(a) {
  if(a && (a.n & 4096 || a.Nb)) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([x("Doesn't support name: "), x(a)].join(""));
}
var Hd = function() {
  function a(a, b) {
    for(;;) {
      if(I(b) && 0 < a) {
        var c = a - 1, h = M(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(I(a)) {
        a = M(a)
      }else {
        return null
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}(), Id = function() {
  function a(a, b) {
    Hd.a(a, b);
    return b
  }
  function b(a) {
    Hd.d(a);
    return a
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}();
function Jd(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === Q(c) ? J(c) : zb(lc.c(yb, xb(Zc), c))
}
function X(a, b, c, d, e, g, h) {
  E(a, c);
  I(h) && (b.c ? b.c(J(h), a, g) : b.call(null, J(h), a, g));
  c = M(h);
  for(h = Sa.d(g);c && (null == h || 0 !== h);) {
    E(a, d), b.c ? b.c(J(c), a, g) : b.call(null, J(c), a, g), c = M(c), h -= 1
  }
  s(Sa.d(g)) && (E(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
  return E(a, e)
}
var Kd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = I(b), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.B(null, k);
        E(a, l);
        k += 1
      }else {
        if(e = I(e)) {
          g = e, hc(g) ? (e = Db(g), h = Eb(g), g = e, l = Q(e), e = h, h = l) : (l = J(g), E(a, l), e = M(g), g = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.p = 1;
  a.k = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a)
  };
  a.i = b;
  return a
}(), Ld = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Md(a) {
  return[x('"'), x(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ld[a]
  })), x('"')].join("")
}
var Y = function Nd(b, c, d) {
  if(null == b) {
    return E(c, "nil")
  }
  if(void 0 === b) {
    return E(c, "#\x3cundefined\x3e")
  }
  if(v) {
    s(function() {
      var c = $b.a(d, Qa);
      return s(c) ? (c = b ? b.f & 131072 || b.yb ? !0 : b.f ? !1 : t(kb, b) : t(kb, b)) ? dc(b) : c : c
    }()) && (E(c, "^"), Nd(dc(b), c, d), E(c, " "));
    if(null == b) {
      return E(c, "nil")
    }
    if(b.eb) {
      return b.pb(b, c, d)
    }
    if(b && (b.f & 2147483648 || b.K)) {
      return b.t(null, c, d)
    }
    if(Ua(b) === Boolean || "number" === typeof b) {
      return E(c, "" + x(b))
    }
    if(b instanceof Array) {
      return X(c, Nd, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(da(b)) {
      return s(Pa.d(d)) ? E(c, Md(b)) : E(c, b)
    }
    if(cc(b)) {
      return Kd.i(c, O(["#\x3c", "" + x(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + x(b);;) {
          if(Q(d) < c) {
            d = [x("0"), x(d)].join("")
          }else {
            return d
          }
        }
      };
      return Kd.i(c, O(['#inst "', "" + x(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return b instanceof RegExp ? Kd.i(c, O(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.K || (b.f ? 0 : t(ub, b)) : t(ub, b)) ? vb(b, c, d) : v ? Kd.i(c, O(["#\x3c", "" + x(b), "\x3e"], 0)) : null
  }
  return null
}, Od = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(null == a || Ta(I(a))) {
      b = ""
    }else {
      b = x;
      var e = Ma(), g = new La;
      a: {
        var h = new Gb(g);
        Y(J(a), h, e);
        a = I(M(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var n = k.B(null, m);
            E(h, " ");
            Y(n, h, e);
            m += 1
          }else {
            if(a = I(a)) {
              k = a, hc(k) ? (a = Db(k), l = Eb(k), k = a, n = Q(a), a = l, l = n) : (n = J(k), E(h, " "), Y(n, h, e), a = M(k), k = null, l = 0), m = 0
            }else {
              break a
            }
          }
        }
      }
      b = "" + b(g)
    }
    return b
  }
  a.p = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.i = b;
  return a
}();
Ob.prototype.K = !0;
Ob.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
bd.prototype.K = !0;
bd.prototype.t = function(a, b, c) {
  return X(b, Y, "[", " ", "]", c, this)
};
zc.prototype.K = !0;
zc.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
Na.prototype.K = !0;
Na.prototype.t = function(a, b, c) {
  return X(b, function(a) {
    return X(b, Y, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
uc.prototype.K = !0;
uc.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
Ad.prototype.K = !0;
Ad.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
$c.prototype.K = !0;
$c.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
Cd.prototype.K = !0;
Cd.prototype.t = function(a, b, c) {
  return X(b, function(a) {
    return X(b, Y, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
V.prototype.K = !0;
V.prototype.t = function(a, b, c) {
  return X(b, Y, "[", " ", "]", c, this)
};
qc.prototype.K = !0;
qc.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
jd.prototype.K = !0;
jd.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
rc.prototype.K = !0;
rc.prototype.t = function(a, b) {
  return E(b, "()")
};
tc.prototype.K = !0;
tc.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
Bd.prototype.K = !0;
Bd.prototype.t = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this)
};
V.prototype.Ca = !0;
V.prototype.Da = function(a, b) {
  return kc.a(this, b)
};
bd.prototype.Ca = !0;
bd.prototype.Da = function(a, b) {
  return kc.a(this, b)
};
U.prototype.Ca = !0;
U.prototype.Da = function(a, b) {
  return Ib(this, b)
};
Mb.prototype.Ca = !0;
Mb.prototype.Da = function(a, b) {
  return Ib(this, b)
};
function Pd(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.Gb = c;
  this.Hb = d;
  this.f = 2153938944;
  this.n = 2
}
p = Pd.prototype;
p.v = function() {
  return ea(this)
};
p.nb = function(a, b, c) {
  a = I(this.Hb);
  for(var d = null, e = 0, g = 0;;) {
    if(g < e) {
      var h = d.B(null, g), k = Zb.c(h, 0, null), h = Zb.c(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1
    }else {
      if(a = I(a)) {
        hc(a) ? (d = Db(a), a = Eb(a), k = d, e = Q(d), d = k) : (d = J(a), k = Zb.c(d, 0, null), h = Zb.c(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = M(a), d = null, e = 0), g = 0
      }else {
        return null
      }
    }
  }
};
p.t = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  Y(this.state, b, c);
  return E(b, "\x3e")
};
p.F = f("j");
p.vb = f("state");
p.s = function(a, b) {
  return this === b
};
var Rd = function() {
  function a(a) {
    return new Pd(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.f & 64 || c.wa || (c.f ? 0 : t(ab, c)) : t(ab, c)) ? Ic.a(Fd, c) : c, e = $b.a(d, Qd), d = $b.a(d, Qa);
      return new Pd(a, d, e, null)
    }
    a.p = 1;
    a.k = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a)
    };
    a.i = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.i(b, O(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.k = c.k;
  b.d = a;
  b.i = c.i;
  return b
}();
function Sd(a, b) {
  var c = a.Gb;
  if(s(c) && !s(c.d ? c.d(b) : c.call(null, b))) {
    throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(Od.i(O([sc(new Mb(null, "validate", "validate", 1233162959, null), new Mb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  wb(a, c, b)
}
;!sa && !ra || ra && ra && 9 <= Ia || sa && Ga("1.9.1");
ra && Ga("9");
var Ra = new U(null, "dup", "dup"), Lb = new U(null, "default", "default"), Oa = new U(null, "flush-on-newline", "flush-on-newline"), Td = new U(null, "click", "click"), Ud = new U(null, "clientX", "clientX"), Vd = new U(null, "touchstart", "touchstart"), Wd = new U(null, "clientY", "clientY"), Sa = new U(null, "print-length", "print-length"), v = new U(null, "else", "else"), Pa = new U(null, "readably", "readably"), Qd = new U(null, "validator", "validator"), Qa = new U(null, "meta", "meta");
function Xd(a) {
  var b = Yd;
  if("string" === typeof b) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "\x3c$1\x3e\x3c/$2\x3e")
  }
  if(s(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), "\x3c$1\x3e\x3c/$2\x3e")
  }
  if(v) {
    throw[x("Invalid match arg: "), x(b)].join("");
  }
  return null
}
;var Zd = !ra || ra && 9 <= Ia, $d = ra && !Ga("9");
!ta || Ga("528");
sa && Ga("1.9b") || ra && Ga("8") || qa && Ga("9.5") || ta && Ga("528");
sa && !Ga("8") || ra && Ga("9");
function ae(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
ae.prototype.ib = !1;
ae.prototype.defaultPrevented = !1;
ae.prototype.Db = !0;
ae.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Db = !1
};
function be(a) {
  be[" "](a);
  return a
}
be[" "] = function() {
};
function ce(a, b) {
  a && this.Ja(a, b)
}
(function() {
  function a() {
  }
  a.prototype = ae.prototype;
  ce.Fb = ae.prototype;
  ce.prototype = new a;
  ce.prototype.constructor = ce
})();
p = ce.prototype;
p.target = null;
p.relatedTarget = null;
p.offsetX = 0;
p.offsetY = 0;
p.clientX = 0;
p.clientY = 0;
p.screenX = 0;
p.screenY = 0;
p.button = 0;
p.keyCode = 0;
p.charCode = 0;
p.ctrlKey = !1;
p.altKey = !1;
p.shiftKey = !1;
p.metaKey = !1;
p.Cb = !1;
p.qb = null;
p.Ja = function(a, b) {
  var c = this.type = a.type;
  ae.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(sa) {
      var e;
      a: {
        try {
          be(d.nodeName);
          e = !0;
          break a
        }catch(g) {
        }
        e = !1
      }
      e || (d = null)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = ta || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = ta || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Cb = wa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.qb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ib
};
p.preventDefault = function() {
  ce.Fb.preventDefault.call(this);
  var a = this.qb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, $d) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
var de = 0;
function ee() {
}
p = ee.prototype;
p.key = 0;
p.ma = !1;
p.Ba = !1;
p.Ja = function(a, b, c, d, e, g) {
  if("function" == r(a)) {
    this.sb = !0
  }else {
    if(a && a.handleEvent && "function" == r(a.handleEvent)) {
      this.sb = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.la = a;
  this.ub = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.rb = g;
  this.Ba = !1;
  this.key = ++de;
  this.ma = !1
};
p.handleEvent = function(a) {
  return this.sb ? this.la.call(this.rb || this.src, a) : this.la.handleEvent.call(this.la, a)
};
var fe = {}, ge = {}, he = {}, ie = {};
function je(a, b, c, d, e) {
  if("array" == r(b)) {
    for(var g = 0;g < b.length;g++) {
      je(a, b[g], c, d, e)
    }
    return null
  }
  a = ke(a, b, c, !1, d, e);
  b = a.key;
  fe[b] = a;
  return b
}
function ke(a, b, c, d, e, g) {
  if(!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var h = ge;
  b in h || (h[b] = {ca:0, ea:0});
  h = h[b];
  e in h || (h[e] = {ca:0, ea:0}, h.ca++);
  var h = h[e], k = ea(a), l;
  h.ea++;
  if(h[k]) {
    l = h[k];
    for(var m = 0;m < l.length;m++) {
      if(h = l[m], h.la == c && h.rb == g) {
        if(h.ma) {
          break
        }
        d || (l[m].Ba = !1);
        return l[m]
      }
    }
  }else {
    l = h[k] = [], h.ca++
  }
  m = le();
  h = new ee;
  h.Ja(c, m, a, b, e, g);
  h.Ba = d;
  m.src = a;
  m.la = h;
  l.push(h);
  he[k] || (he[k] = []);
  he[k].push(h);
  a.addEventListener ? a != ca && a.Ab || a.addEventListener(b, m, e) : a.attachEvent(b in ie ? ie[b] : ie[b] = "on" + b, m);
  return h
}
function le() {
  var a = me, b = Zd ? function(c) {
    return a.call(b.src, b.la, c)
  } : function(c) {
    c = a.call(b.src, b.la, c);
    if(!c) {
      return c
    }
  };
  return b
}
function ne(a, b, c, d, e) {
  if("array" == r(b)) {
    for(var g = 0;g < b.length;g++) {
      ne(a, b[g], c, d, e)
    }
    return null
  }
  a = ke(a, b, c, !0, d, e);
  b = a.key;
  fe[b] = a;
  return b
}
function oe(a, b, c, d) {
  if(!d.Ka && d.tb) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].ma ? d[e].ub.src = null : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.tb = !1;
    0 == g && (delete ge[a][b][c], ge[a][b].ca--, 0 == ge[a][b].ca && (delete ge[a][b], ge[a].ca--), 0 == ge[a].ca && delete ge[a])
  }
}
function pe(a, b, c, d, e) {
  var g = 1;
  b = ea(b);
  if(a[b]) {
    var h = --a.ea, k = a[b];
    k.Ka ? k.Ka++ : k.Ka = 1;
    try {
      for(var l = k.length, m = 0;m < l;m++) {
        var n = k[m];
        n && !n.ma && (g &= !1 !== qe(n, e))
      }
    }finally {
      a.ea = Math.max(h, a.ea), k.Ka--, oe(c, d, b, k)
    }
  }
  return Boolean(g)
}
function qe(a, b) {
  if(a.Ba) {
    var c = a.key, d = fe[c];
    if(d && !d.ma) {
      var e = d.src, g = d.type, h = d.ub, k = d.capture;
      e.removeEventListener ? e != ca && e.Ab || e.removeEventListener(g, h, k) : e.detachEvent && e.detachEvent(g in ie ? ie[g] : ie[g] = "on" + g, h);
      e = ea(e);
      if(he[e]) {
        var h = he[e], l = Ka(h, d);
        0 <= l && Ja.splice.call(h, l, 1);
        0 == h.length && delete he[e]
      }
      d.ma = !0;
      if(d = ge[g][k][e]) {
        d.tb = !0, oe(g, k, e, d)
      }
      delete fe[c]
    }
  }
  return a.handleEvent(b)
}
function me(a, b) {
  if(a.ma) {
    return!0
  }
  var c = a.type, d = ge;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, g;
  if(!Zd) {
    var h;
    if(!(h = b)) {
      a: {
        h = ["window", "event"];
        for(var k = ca;e = h.shift();) {
          if(null != k[e]) {
            k = k[e]
          }else {
            h = null;
            break a
          }
        }
        h = k
      }
    }
    e = h;
    h = !0 in d;
    k = !1 in d;
    if(h) {
      if(0 > e.keyCode || void 0 != e.returnValue) {
        return!0
      }
      a: {
        var l = !1;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(m) {
            l = !0
          }
        }
        if(l || void 0 == e.returnValue) {
          e.returnValue = !0
        }
      }
    }
    l = new ce;
    l.Ja(e, this);
    e = !0;
    try {
      if(h) {
        for(var n = [], q = l.currentTarget;q;q = q.parentNode) {
          n.push(q)
        }
        g = d[!0];
        g.ea = g.ca;
        for(var u = n.length - 1;!l.ib && 0 <= u && g.ea;u--) {
          l.currentTarget = n[u], e &= pe(g, n[u], c, !0, l)
        }
        if(k) {
          for(g = d[!1], g.ea = g.ca, u = 0;!l.ib && u < n.length && g.ea;u++) {
            l.currentTarget = n[u], e &= pe(g, n[u], c, !1, l)
          }
        }
      }else {
        e = qe(a, l)
      }
    }finally {
      n && (n.length = 0)
    }
    return e
  }
  c = new ce(b, this);
  return e = qe(a, c)
}
;var re = document.createElement("div");
re.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
var se = F.a(re.firstChild.nodeType, 3), te = F.a(re.getElementsByTagName("tbody").length, 0);
F.a(re.getElementsByTagName("link").length, 0);
var ue = /<|&#?\w+;/, ve = /^\s+/, Yd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, we = /<([\w:]+)/, xe = /<tbody/i, ye = new V(null, 3, 5, Yc, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), ze = new V(null, 3, 5, Yc, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), Ae = new V(null, 3, 5, Yc, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null), Be = ac(["col", Lb, "tfoot", "caption", "optgroup", "legend", 
"area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], [new V(null, 3, 5, Yc, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), new V(null, 3, 5, Yc, [0, "", ""], null), ze, ze, ye, new V(null, 3, 5, Yc, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), new V(null, 3, 5, Yc, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), Ae, ze, Ae, ye, ze, new V(null, 3, 5, Yc, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), 
ze]);
function Ce(a, b, c, d) {
  b = Ta(Jd(xe, b));
  F.a(c, "table") && b ? (c = a.firstChild, a = s(c) ? a.firstChild.childNodes : c) : a = F.a(d, "\x3ctable\x3e") && b ? divchildNodes : Zc;
  a = I(a);
  c = null;
  for(var e = b = 0;;) {
    if(e < b) {
      d = c.B(null, e), F.a(d.nodeName, "tbody") && F.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), e += 1
    }else {
      if(a = I(a)) {
        c = a, hc(c) ? (a = Db(c), b = Eb(c), c = a, d = Q(a), a = b, b = d) : (d = J(c), F.a(d.nodeName, "tbody") && F.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), a = M(c), c = null, b = 0), e = 0
      }else {
        break
      }
    }
  }
}
function De(a) {
  var b = Xd(a);
  a = ("" + x(Wb(Jd(we, b)))).toLowerCase();
  var c = $b.c(Be, a, Lb.d(Be)), d = Zb.c(c, 0, null), e = Zb.c(c, 1, null), g = Zb.c(c, 2, null), c = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [x(e), x(b), x(g)].join("");
    for(var c = d;;) {
      if(0 < c) {
        c -= 1, a = a.lastChild
      }else {
        return a
      }
    }
  }();
  s(te) && Ce(c, b, a, e);
  s(function() {
    var a = Ta(se);
    return a ? Jd(ve, b) : a
  }()) && c.insertBefore(document.createTextNode(J(Jd(ve, b))), c.firstChild);
  return c.childNodes
}
function Ee(a) {
  if(a ? a.Bb : a) {
    return a.Bb(a)
  }
  var b;
  b = Ee[r(null == a ? null : a)];
  if(!b && (b = Ee._, !b)) {
    throw w("DomContent.nodes", a);
  }
  return b.call(null, a)
}
function Fe() {
  var a = Gd("world");
  return da(a) ? document.getElementById(a) : a
}
var Ge = function() {
  function a(a, b) {
    return b < a.length ? new uc(null, function() {
      return P(a.item(b), c.a(a, b + 1))
    }, null, null) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}(), He = function() {
  function a(a, b) {
    return b < a.length ? new uc(null, function() {
      return P(a[b], c.a(a, b + 1))
    }, null, null) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}();
function Ie(a) {
  return s(a.item) ? Ge.d(a) : He.d(a)
}
Ee._ = function(a) {
  if(null == a) {
    a = L
  }else {
    if(a ? a.f & 8388608 || a.Ga || (a.f ? 0 : t(rb, a)) : t(rb, a)) {
      a = I(a)
    }else {
      var b;
      b = s(a) ? (b = Ta(a.nodeName)) ? a.length : b : a;
      a = s(b) ? Ie(a) : Lb ? I(new V(null, 1, 5, Yc, [a], null)) : null
    }
  }
  return a
};
Ee.string = function(a) {
  return Id.d(Ee(s(Jd(ue, a)) ? De(a) : document.createTextNode(a)))
};
s("undefined" != typeof NodeList) && (p = NodeList.prototype, p.Ga = !0, p.w = function() {
  return Ie(this)
}, p.va = !0, p.B = function(a, b) {
  return this.item(b)
}, p.M = function(a, b, c) {
  return this.length <= b ? c : Zb.a(this, b)
}, p.Ea = !0, p.A = f("length"));
s("undefined" != typeof StaticNodeList) && (p = StaticNodeList.prototype, p.Ga = !0, p.w = function() {
  return Ie(this)
}, p.va = !0, p.B = function(a, b) {
  return this.item(b)
}, p.M = function(a, b, c) {
  return this.length <= b ? c : Zb.a(this, b)
}, p.Ea = !0, p.A = f("length"));
s("undefined" != typeof HTMLCollection) && (p = HTMLCollection.prototype, p.Ga = !0, p.w = function() {
  return Ie(this)
}, p.va = !0, p.B = function(a, b) {
  return this.item(b)
}, p.M = function(a, b, c) {
  return this.length <= b ? c : Zb.a(this, b)
}, p.Ea = !0, p.A = f("length"));
var Z, Je = window.document.documentElement, Le = function Ke(b) {
  return function(c) {
    b.d ? b.d(function() {
      "undefined" === typeof Z && (Z = function(b, c, g, h) {
        this.ja = b;
        this.gb = c;
        this.fb = g;
        this.hb = h;
        this.n = 0;
        this.f = 393472
      }, Z.eb = !0, Z.cb = "domina.events/t7473", Z.pb = function(b, c) {
        return E(c, "domina.events/t7473")
      }, Z.prototype.C = function(b, c) {
        var g = this.ja[c];
        return s(g) ? g : this.ja[Gd(c)]
      }, Z.prototype.D = function(b, c, g) {
        b = D.a(this, c);
        return s(b) ? b : g
      }, Z.prototype.F = f("hb"), Z.prototype.G = function(b, c) {
        return new Z(this.ja, this.gb, this.fb, c)
      });
      return new Z(c, b, Ke, null)
    }()) : b.call(null, function() {
      "undefined" === typeof Z && (Z = function(b, c, g, h) {
        this.ja = b;
        this.gb = c;
        this.fb = g;
        this.hb = h;
        this.n = 0;
        this.f = 393472
      }, Z.eb = !0, Z.cb = "domina.events/t7473", Z.pb = function(b, c) {
        return E(c, "domina.events/t7473")
      }, Z.prototype.C = function(b, c) {
        var g = this.ja[c];
        return s(g) ? g : this.ja[Gd(c)]
      }, Z.prototype.D = function(b, c, g) {
        b = D.a(this, c);
        return s(b) ? b : g
      }, Z.prototype.F = f("hb"), Z.prototype.G = function(b, c) {
        return new Z(this.ja, this.gb, this.fb, c)
      });
      return new Z(c, b, Ke, null)
    }());
    return!0
  }
};
function Me(a, b, c) {
  var d = Le(c), e = Gd(b);
  return Id.d(function() {
    return function h(a) {
      return new uc(null, function() {
        for(;;) {
          var b = I(a);
          if(b) {
            if(hc(b)) {
              var c = Db(b), n = Q(c), q = new wc(Array(n), 0);
              a: {
                for(var u = 0;;) {
                  if(u < n) {
                    var A = z.a(c, u), A = s(!1) ? ne(A, e, d, !1) : je(A, e, d, !1);
                    q.add(A);
                    u += 1
                  }else {
                    c = !0;
                    break a
                  }
                }
                c = void 0
              }
              return c ? Ac(q.U(), h(Eb(b))) : Ac(q.U(), null)
            }
            q = J(b);
            return P(s(!1) ? ne(q, e, d, !1) : je(q, e, d, !1), h(K(b)))
          }
          return null
        }
      }, null, null)
    }(Ee(a))
  }())
}
var Ne = function() {
  function a(a, d) {
    return b.c(Je, a, d)
  }
  var b = null, b = function(b, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return Me(b, d, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.c = function(a, b, e) {
    return Me(a, b, e)
  };
  return b
}();
var Oe = /#|$/;
var Pe = Rd.d(500), Qe = Rd.d(500), Re = Fe(), Se = Re.getContext("2d"), $ = [], Te = new Image;
function Ue() {
  a: {
    Se.clearRect(0, 0, jb(Pe), jb(Qe));
    for(var a = 0;;) {
      if(a < $.length) {
        Se.drawImage(Te, $[a].x - 15, $[a].y - 15, 30, 30), a += 1
      }else {
        break a
      }
    }
  }
  a: {
    for(a = 0;;) {
      if(a < $.length) {
        b: {
          for(var b = a, c = $.length, d = 0, e = 0, g = 0;;) {
            if(g < c) {
              var e = e + $[g].y, h = g + 1, d = d + $[g].x, g = h
            }else {
              g = (e - $[b].y) / (c - 1);
              h = $[b];
              h.vx += ((d - $[b].x) / (c - 1) - h.x) / 100;
              h.vy += (g - h.y) / 100;
              break b
            }
          }
        }
        b: {
          for(b = a, c = $.length, d = 0;;) {
            if(d < c) {
              d !== b && (g = $[b], e = $[d], h = e.x - g.x, e = e.y - g.y, 8 > (Math.sqrt.d ? Math.sqrt.d(h * h + e * e) : Math.sqrt.call(null, h * h + e * e)) && (g.vx -= $[d].x - g.x, g.vy -= $[d].y - g.y)), d += 1
            }else {
              break b
            }
          }
        }
        b: {
          for(b = a, c = $.length, g = e = d = 0;;) {
            if(g < c) {
              e += $[g].vy, h = g + 1, d += $[g].vx, g = h
            }else {
              g = (e - $[b].vy) / (c - 1);
              h = $[b];
              h.vx += ((d - $[b].vx) / (c - 1) - h.vx) / 8;
              h.vy += (g - h.vy) / 8;
              break b
            }
          }
        }
        b = $[a];
        c = Math.sqrt.d ? Math.sqrt.d(b.vx * b.vx + b.vy * b.vy) : Math.sqrt.call(null, b.vx * b.vx + b.vy * b.vy);
        7 <= c && (c = 7 / c, b.vx *= c, b.vy *= c);
        (0 > b.x && 0 > b.vx || b.x > jb(Pe) && 0 < b.vx) && (b.vx *= -1);
        (0 > b.y && 0 > b.vy || b.y > jb(Qe) && 0 < b.vy) && (b.vy *= -1);
        b = $[a];
        b.x += b.vx;
        b.y += b.vy;
        a += 1
      }else {
        a = null;
        break a
      }
    }
    a = void 0
  }
  return a
}
function Ve() {
  Sd(Pe, document.documentElement.clientWidth);
  Sd(Qe, document.documentElement.clientHeight);
  Re.width = jb(Pe);
  return Re.height = jb(Qe)
}
function We(a) {
  var b = Ud.d(a);
  a = Wd.d(a);
  return $[$.length] = {x:b, y:a, vx:0, vy:0}
}
window.onload = function() {
  window === window.parent ? (Ve(), window.onresize = Ve) : (Re.width = jb(Pe), Re.height = jb(Qe));
  Te.src = "resources/public/img/kurosuke.png";
  return Te.onload = function() {
    Se.fillStyle = "rgba(33, 33, 33, 0.8)";
    var a;
    a = window.location.href;
    var b = a.search(Oe), c;
    b: {
      for(c = 0;0 <= (c = a.indexOf("n", c)) && c < b;) {
        var d = a.charCodeAt(c - 1);
        if(38 == d || 63 == d) {
          if(d = a.charCodeAt(c + 1), !d || 61 == d || 38 == d || 35 == d) {
            break b
          }
        }
        c += 2
      }
      c = -1
    }
    if(0 > c) {
      a = null
    }else {
      d = a.indexOf("\x26", c);
      if(0 > d || d > b) {
        d = b
      }
      c += 2;
      a = decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "))
    }
    a = s(a) ? a : 100;
    for(b = 0;;) {
      if(b < a) {
        $[b] = {x:Math.random() * jb(Pe), y:Math.random() * jb(Qe), vx:0, vy:0}, b += 1
      }else {
        break
      }
    }
    setInterval(Ue, 1E3 / 30);
    return s(ua) ? Ne.c(Fe(), Vd, We) : Ne.c(Fe(), Td, We)
  }
};

})();
