(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.parseAddress = f()
    }
})(function() {
    var define, module, exports;
    return function() {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var p = n[i] = {
                        exports: {}
                    };
                    e[i][0].call(p.exports, function(r) {
                        var n = e[i][1][r];
                        return o(n || r)
                    }, p, p.exports, r, e, n, t)
                }
                return n[i].exports
            }
            for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
            return o
        }
        return r
    }()({
        1: [function(require, module, exports) {
            "use strict";
            (function() {
                var root;
                root = this;
                var XRegExp;
                if (typeof require !== "undefined") {
                    XRegExp = require("xregexp/src/xregexp.js")
                } else XRegExp = root.XRegExp;
                var parser = {};
                var Addr_Match = {};
                var Directional = {
                    north: "N",
                    northeast: "NE",
                    east: "E",
                    southeast: "SE",
                    south: "S",
                    southwest: "SW",
                    west: "W",
                    northwest: "NW"
                };
                var Street_Type = {
                    allee: "aly",
                    alley: "aly",
                    ally: "aly",
                    anex: "anx",
                    annex: "anx",
                    annx: "anx",
                    arcade: "arc",
                    av: "ave",
                    aven: "ave",
                    avenu: "ave",
                    avenue: "ave",
                    avn: "ave",
                    avnue: "ave",
                    bayoo: "byu",
                    bayou: "byu",
                    beach: "bch",
                    bend: "bnd",
                    bluf: "blf",
                    bluff: "blf",
                    bluffs: "blfs",
                    bot: "btm",
                    bottm: "btm",
                    bottom: "btm",
                    boul: "blvd",
                    boulevard: "blvd",
                    boulv: "blvd",
                    branch: "br",
                    brdge: "brg",
                    bridge: "brg",
                    brnch: "br",
                    brook: "brk",
                    brooks: "brks",
                    burg: "bg",
                    burgs: "bgs",
                    bypa: "byp",
                    bypas: "byp",
                    bypass: "byp",
                    byps: "byp",
                    camp: "cp",
                    canyn: "cyn",
                    canyon: "cyn",
                    cape: "cpe",
                    causeway: "cswy",
                    causway: "cswy",
                    cen: "ctr",
                    cent: "ctr",
                    center: "ctr",
                    centers: "ctrs",
                    centr: "ctr",
                    centre: "ctr",
                    circ: "cir",
                    circl: "cir",
                    circle: "cir",
                    circles: "cirs",
                    ck: "crk",
                    cliff: "clf",
                    cliffs: "clfs",
                    club: "clb",
                    cmp: "cp",
                    cnter: "ctr",
                    cntr: "ctr",
                    cnyn: "cyn",
                    common: "cmn",
                    corner: "cor",
                    corners: "cors",
                    course: "crse",
                    court: "ct",
                    courts: "cts",
                    cove: "cv",
                    coves: "cvs",
                    cr: "crk",
                    crcl: "cir",
                    crcle: "cir",
                    crecent: "cres",
                    creek: "crk",
                    crescent: "cres",
                    cresent: "cres",
                    crest: "crst",
                    crossing: "xing",
                    crossroad: "xrd",
                    crscnt: "cres",
                    crsent: "cres",
                    crsnt: "cres",
                    crssing: "xing",
                    crssng: "xing",
                    crt: "ct",
                    curve: "curv",
                    dale: "dl",
                    dam: "dm",
                    div: "dv",
                    divide: "dv",
                    driv: "dr",
                    drive: "dr",
                    drives: "drs",
                    drv: "dr",
                    dvd: "dv",
                    estate: "est",
                    estates: "ests",
                    exp: "expy",
                    expr: "expy",
                    express: "expy",
                    expressway: "expy",
                    expw: "expy",
                    extension: "ext",
                    extensions: "exts",
                    extn: "ext",
                    extnsn: "ext",
                    falls: "fls",
                    ferry: "fry",
                    field: "fld",
                    fields: "flds",
                    flat: "flt",
                    flats: "flts",
                    ford: "frd",
                    fords: "frds",
                    forest: "frst",
                    forests: "frst",
                    forg: "frg",
                    forge: "frg",
                    forges: "frgs",
                    fork: "frk",
                    forks: "frks",
                    fort: "ft",
                    freeway: "fwy",
                    freewy: "fwy",
                    frry: "fry",
                    frt: "ft",
                    frway: "fwy",
                    frwy: "fwy",
                    garden: "gdn",
                    gardens: "gdns",
                    gardn: "gdn",
                    gateway: "gtwy",
                    gatewy: "gtwy",
                    gatway: "gtwy",
                    glen: "gln",
                    glens: "glns",
                    grden: "gdn",
                    grdn: "gdn",
                    grdns: "gdns",
                    green: "grn",
                    greens: "grns",
                    grov: "grv",
                    grove: "grv",
                    groves: "grvs",
                    gtway: "gtwy",
                    harb: "hbr",
                    harbor: "hbr",
                    harbors: "hbrs",
                    harbr: "hbr",
                    haven: "hvn",
                    havn: "hvn",
                    height: "hts",
                    heights: "hts",
                    hgts: "hts",
                    highway: "hwy",
                    highwy: "hwy",
                    hill: "hl",
                    hills: "hls",
                    hiway: "hwy",
                    hiwy: "hwy",
                    hllw: "holw",
                    hollow: "holw",
                    hollows: "holw",
                    holws: "holw",
                    hrbor: "hbr",
                    ht: "hts",
                    hway: "hwy",
                    inlet: "inlt",
                    island: "is",
                    islands: "iss",
                    isles: "isle",
                    islnd: "is",
                    islnds: "iss",
                    jction: "jct",
                    jctn: "jct",
                    jctns: "jcts",
                    junction: "jct",
                    junctions: "jcts",
                    junctn: "jct",
                    juncton: "jct",
                    key: "ky",
                    keys: "kys",
                    knol: "knl",
                    knoll: "knl",
                    knolls: "knls",
                    la: "ln",
                    lake: "lk",
                    lakes: "lks",
                    landing: "lndg",
                    lane: "ln",
                    lanes: "ln",
                    ldge: "ldg",
                    light: "lgt",
                    lights: "lgts",
                    lndng: "lndg",
                    loaf: "lf",
                    lock: "lck",
                    locks: "lcks",
                    lodg: "ldg",
                    lodge: "ldg",
                    loops: "loop",
                    manor: "mnr",
                    manors: "mnrs",
                    meadow: "mdw",
                    meadows: "mdws",
                    medows: "mdws",
                    mill: "ml",
                    mills: "mls",
                    mission: "msn",
                    missn: "msn",
                    mnt: "mt",
                    mntain: "mtn",
                    mntn: "mtn",
                    mntns: "mtns",
                    motorway: "mtwy",
                    mount: "mt",
                    mountain: "mtn",
                    mountains: "mtns",
                    mountin: "mtn",
                    mssn: "msn",
                    mtin: "mtn",
                    neck: "nck",
                    orchard: "orch",
                    orchrd: "orch",
                    overpass: "opas",
                    ovl: "oval",
                    parks: "park",
                    parkway: "pkwy",
                    parkways: "pkwy",
                    parkwy: "pkwy",
                    passage: "psge",
                    paths: "path",
                    pikes: "pike",
                    pine: "pne",
                    pines: "pnes",
                    pk: "park",
                    pkway: "pkwy",
                    pkwys: "pkwy",
                    pky: "pkwy",
                    place: "pl",
                    plain: "pln",
                    plaines: "plns",
                    plains: "plns",
                    plaza: "plz",
                    plza: "plz",
                    point: "pt",
                    points: "pts",
                    port: "prt",
                    ports: "prts",
                    prairie: "pr",
                    prarie: "pr",
                    prk: "park",
                    prr: "pr",
                    rad: "radl",
                    radial: "radl",
                    radiel: "radl",
                    ranch: "rnch",
                    ranches: "rnch",
                    rapid: "rpd",
                    rapids: "rpds",
                    rdge: "rdg",
                    rest: "rst",
                    ridge: "rdg",
                    ridges: "rdgs",
                    river: "riv",
                    rivr: "riv",
                    rnchs: "rnch",
                    road: "rd",
                    roads: "rds",
                    route: "rte",
                    rvr: "riv",
                    row: "row",
                    shoal: "shl",
                    shoals: "shls",
                    shoar: "shr",
                    shoars: "shrs",
                    shore: "shr",
                    shores: "shrs",
                    skyway: "skwy",
                    spng: "spg",
                    spngs: "spgs",
                    spring: "spg",
                    springs: "spgs",
                    sprng: "spg",
                    sprngs: "spgs",
                    spurs: "spur",
                    sqr: "sq",
                    sqre: "sq",
                    sqrs: "sqs",
                    squ: "sq",
                    square: "sq",
                    squares: "sqs",
                    station: "sta",
                    statn: "sta",
                    stn: "sta",
                    str: "st",
                    strav: "stra",
                    strave: "stra",
                    straven: "stra",
                    stravenue: "stra",
                    stravn: "stra",
                    stream: "strm",
                    street: "st",
                    streets: "sts",
                    streme: "strm",
                    strt: "st",
                    strvn: "stra",
                    strvnue: "stra",
                    sumit: "smt",
                    sumitt: "smt",
                    summit: "smt",
                    terr: "ter",
                    terrace: "ter",
                    throughway: "trwy",
                    tpk: "tpke",
                    tr: "trl",
                    trace: "trce",
                    traces: "trce",
                    track: "trak",
                    tracks: "trak",
                    trafficway: "trfy",
                    trail: "trl",
                    trails: "trl",
                    trk: "trak",
                    trks: "trak",
                    trls: "trl",
                    trnpk: "tpke",
                    trpk: "tpke",
                    tunel: "tunl",
                    tunls: "tunl",
                    tunnel: "tunl",
                    tunnels: "tunl",
                    tunnl: "tunl",
                    turnpike: "tpke",
                    turnpk: "tpke",
                    underpass: "upas",
                    union: "un",
                    unions: "uns",
                    valley: "vly",
                    valleys: "vlys",
                    vally: "vly",
                    vdct: "via",
                    viadct: "via",
                    viaduct: "via",
                    view: "vw",
                    views: "vws",
                    vill: "vlg",
                    villag: "vlg",
                    village: "vlg",
                    villages: "vlgs",
                    ville: "vl",
                    villg: "vlg",
                    villiage: "vlg",
                    vist: "vis",
                    vista: "vis",
                    vlly: "vly",
                    vst: "vis",
                    vsta: "vis",
                    walks: "walk",
                    well: "wl",
                    wells: "wls",
                    wy: "way"
                };
                var State_Code = {
                    alabama: "AL",
                    alaska: "AK",
                    "american samoa": "AS",
                    arizona: "AZ",
                    arkansas: "AR",
                    california: "CA",
                    colorado: "CO",
                    connecticut: "CT",
                    delaware: "DE",
                    "district of columbia": "DC",
                    "federated states of micronesia": "FM",
                    florida: "FL",
                    georgia: "GA",
                    guam: "GU",
                    hawaii: "HI",
                    idaho: "ID",
                    illinois: "IL",
                    indiana: "IN",
                    iowa: "IA",
                    kansas: "KS",
                    kentucky: "KY",
                    louisiana: "LA",
                    maine: "ME",
                    "marshall islands": "MH",
                    maryland: "MD",
                    massachusetts: "MA",
                    michigan: "MI",
                    minnesota: "MN",
                    mississippi: "MS",
                    missouri: "MO",
                    montana: "MT",
                    nebraska: "NE",
                    nevada: "NV",
                    "new hampshire": "NH",
                    "new jersey": "NJ",
                    "new mexico": "NM",
                    "new york": "NY",
                    "north carolina": "NC",
                    "north dakota": "ND",
                    "northern mariana islands": "MP",
                    ohio: "OH",
                    oklahoma: "OK",
                    oregon: "OR",
                    palau: "PW",
                    pennsylvania: "PA",
                    "puerto rico": "PR",
                    "rhode island": "RI",
                    "south carolina": "SC",
                    "south dakota": "SD",
                    tennessee: "TN",
                    texas: "TX",
                    utah: "UT",
                    vermont: "VT",
                    "virgin islands": "VI",
                    virginia: "VA",
                    washington: "WA",
                    "west virginia": "WV",
                    wisconsin: "WI",
                    wyoming: "WY"
                };
                var Direction_Code;
                var initialized = false;
                var Normalize_Map = {
                    prefix: Directional,
                    prefix1: Directional,
                    prefix2: Directional,
                    suffix: Directional,
                    suffix1: Directional,
                    suffix2: Directional,
                    type: Street_Type,
                    type1: Street_Type,
                    type2: Street_Type,
                    state: State_Code
                };

                function capitalize(s) {
                    return s && s[0].toUpperCase() + s.slice(1)
                }

                function keys(o) {
                    return Object.keys(o)
                }

                function values(o) {
                    var v = [];
                    keys(o).forEach(function(k) {
                        v.push(o[k])
                    });
                    return v
                }

                function each(o, fn) {
                    keys(o).forEach(function(k) {
                        fn(o[k], k)
                    })
                }

                function invert(o) {
                    var o1 = {};
                    keys(o).forEach(function(k) {
                        o1[o[k]] = k
                    });
                    return o1
                }

                function flatten(o) {
                    return keys(o).concat(values(o))
                }

                function lazyInit() {
                    if (initialized) {
                        return
                    }
                    initialized = true;
                    Direction_Code = invert(Directional);
                    Addr_Match = {
                        type: flatten(Street_Type).sort().filter(function(v, i, arr) {
                            return arr.indexOf(v) === i
                        }).join("|"),
                        fraction: "\\d+\\/\\d+",
                        state: "\\b(?:" + keys(State_Code).concat(values(State_Code)).map(XRegExp.escape).join("|") + ")\\b",
                        direct: values(Directional).sort(function(a, b) {
                            return a.length < b.length
                        }).reduce(function(prev, curr) {
                            return prev.concat([XRegExp.escape(curr.replace(/\w/g, "$&.")), curr])
                        }, keys(Directional)).join("|"),
                        dircode: keys(Direction_Code).join("|"),
                        zip: "(?<zip>\\d{5})[- ]?(?<plus4>\\d{4})?",
                        corner: "(?:\\band\\b|\\bat\\b|&|\\@)"
                    };
                    Addr_Match.number = "(?<number>\\d+-?\\d*)(?=\\D)";
                    Addr_Match.street = "                                       \n      (?:                                                       \n        (?:(?<street_0>" + Addr_Match.direct + ")\\W+               \n           (?<type_0>" + Addr_Match.type + ")\\b                    \n        )                                                       \n        |                                                       \n        (?:(?<prefix_0>" + Addr_Match.direct + ")\\W+)?             \n        (?:                                                     \n          (?<street_1>[^,]*\\d)                                 \n          (?:[^\\w,]*(?<suffix_1>" + Addr_Match.direct + ")\\b)     \n          |                                                     \n          (?<street_2>[^,]+)                                    \n          (?:[^\\w,]+(?<type_2>" + Addr_Match.type + ")\\b)         \n          (?:[^\\w,]+(?<suffix_2>" + Addr_Match.direct + ")\\b)?    \n          |                                                     \n          (?<street_3>[^,]+?)                                   \n          (?:[^\\w,]+(?<type_3>" + Addr_Match.type + ")\\b)?        \n          (?:[^\\w,]+(?<suffix_3>" + Addr_Match.direct + ")\\b)?    \n        )                                                       \n      )";
                    Addr_Match.po_box = "p\\W*(?:[om]|ost\\ ?office)\\W*b(?:ox)?";
                    Addr_Match.sec_unit_type_numbered = "             \n      (?<sec_unit_type_1>su?i?te                      \n        |" + Addr_Match.po_box + "                        \n        |(?:ap|dep)(?:ar)?t(?:me?nt)?                 \n        |ro*m                                         \n        |flo*r?                                       \n        |uni?t                                        \n        |bu?i?ldi?n?g                                 \n        |ha?nga?r                                     \n        |lo?t                                         \n        |pier                                         \n        |slip                                         \n        |spa?ce?                                      \n        |stop                                         \n        |tra?i?le?r                                   \n        |box)(?![a-z]                                 \n      )                                               \n      ";
                    Addr_Match.sec_unit_type_unnumbered = "           \n      (?<sec_unit_type_2>ba?se?me?n?t                 \n        |fro?nt                                       \n        |lo?bby                                       \n        |lowe?r                                       \n        |off?i?ce?                                    \n        |pe?n?t?ho?u?s?e?                             \n        |rear                                         \n        |side                                         \n        |uppe?r                                       \n      )\\b";
                    Addr_Match.sec_unit = "                               \n      (?:                               #fix3             \n        (?:                             #fix1             \n          (?:                                             \n            (?:" + Addr_Match.sec_unit_type_numbered + "\\W*) \n            |(?<sec_unit_type_3>\\#)\\W*                  \n          )                                               \n          (?<sec_unit_num_1>[\\w-]+)                      \n        )                                                 \n        |                                                 \n        " + Addr_Match.sec_unit_type_unnumbered + "           \n      )";
                    Addr_Match.city_and_state = "                       \n      (?:                                               \n        (?<city>[^\\d,]+?)\\W+                          \n        (?<state>" + Addr_Match.state + ")                  \n      )                                                 \n      ";
                    Addr_Match.place = "                                \n      (?:" + Addr_Match.city_and_state + "\\W*)?            \n      (?:" + Addr_Match.zip + ")?                           \n      ";
                    Addr_Match.address = XRegExp("                      \n      ^                                                 \n      [^\\w\\#]*                                        \n      (" + Addr_Match.number + ")\\W*                       \n      (?:" + Addr_Match.fraction + "\\W*)?                  \n         " + Addr_Match.street + "\\W+                      \n      (?:" + Addr_Match.sec_unit + ")?\\W*          #fix2   \n         " + Addr_Match.place + "                           \n      \\W*$", "ix");
                    var sep = "(?:\\W+|$)";
                    Addr_Match.informal_address = XRegExp("                   \n      ^                                                       \n      \\s*                                                    \n      (?:" + Addr_Match.sec_unit + sep + ")?                        \n      (?:" + Addr_Match.number + ")?\\W*                          \n      (?:" + Addr_Match.fraction + "\\W*)?                        \n         " + Addr_Match.street + sep + "                            \n      (?:" + Addr_Match.sec_unit.replace(/_\d/g, "$&1") + sep + ")?  \n      (?:" + Addr_Match.place + ")?                               \n      ", "ix");
                    Addr_Match.po_address = XRegExp("                         \n      ^                                                       \n      \\s*                                                    \n      (?:" + Addr_Match.sec_unit.replace(/_\d/g, "$&1") + sep + ")?  \n      (?:" + Addr_Match.place + ")?                               \n      ", "ix");
                    Addr_Match.intersection = XRegExp("                     \n      ^\\W*                                                 \n      " + Addr_Match.street.replace(/_\d/g, "1$&") + "\\W*?      \n      \\s+" + Addr_Match.corner + "\\s+                         \n      " + Addr_Match.street.replace(/_\d/g, "2$&") + "\\W+     \n      " + Addr_Match.place + "\\W*$", "ix")
                }
                parser.normalize_address = function(parts) {
                    lazyInit();
                    if (!parts) return null;
                    var parsed = {};
                    Object.keys(parts).forEach(function(k) {
                        if (["input", "index"].indexOf(k) !== -1 || isFinite(k)) return;
                        var key = isFinite(k.split("_").pop()) ? k.split("_").slice(0, -1).join("_") : k;
                        if (parts[k]) parsed[key] = parts[k].trim().replace(/^\s+|\s+$|[^\w\s\-#&]/g, "")
                    });
                    each(Normalize_Map, function(map, key) {
                        if (parsed[key] && map[parsed[key].toLowerCase()]) {
                            parsed[key] = map[parsed[key].toLowerCase()]
                        }
                    });
                    ["type", "type1", "type2"].forEach(function(key) {
                        if (key in parsed) parsed[key] = parsed[key].charAt(0).toUpperCase() + parsed[key].slice(1).toLowerCase()
                    });
                    if (parsed.city) {
                        parsed.city = XRegExp.replace(parsed.city, XRegExp("^(?<dircode>" + Addr_Match.dircode + ")\\s+(?=\\S)", "ix"), function(match) {
                            return capitalize(Direction_Code[match.dircode.toUpperCase()]) + " "
                        })
                    }
                    return parsed
                };
                parser.parseAddress = function(address) {
                    lazyInit();
                    var parts = XRegExp.exec(address, Addr_Match.address);
                    return parser.normalize_address(parts)
                };
                parser.parseInformalAddress = function(address) {
                    lazyInit();
                    var parts = XRegExp.exec(address, Addr_Match.informal_address);
                    return parser.normalize_address(parts)
                };
                parser.parsePoAddress = function(address) {
                    lazyInit();
                    var parts = XRegExp.exec(address, Addr_Match.po_address);
                    return parser.normalize_address(parts)
                };
                parser.parseLocation = function(address) {
                    lazyInit();
                    if (XRegExp(Addr_Match.corner, "xi").test(address)) {
                        return parser.parseIntersection(address)
                    }
                    if (XRegExp("^" + Addr_Match.po_box, "xi").test(address)) {
                        return parser.parsePoAddress(address)
                    }
                    return parser.parseAddress(address) || parser.parseInformalAddress(address)
                };
                parser.parseIntersection = function(address) {
                    lazyInit();
                    var parts = XRegExp.exec(address, Addr_Match.intersection);
                    parts = parser.normalize_address(parts);
                    if (parts) {
                        parts.type2 = parts.type2 || "";
                        parts.type1 = parts.type1 || "";
                        if (parts.type2 && !parts.type1 || parts.type1 === parts.type2) {
                            var type = parts.type2;
                            type = XRegExp.replace(type, /s\W*$/, "");
                            if (XRegExp("^" + Addr_Match.type + "$", "ix").test(type)) {
                                parts.type1 = parts.type2 = type
                            }
                        }
                    }
                    return parts
                };
                if (typeof define !== "undefined" && define.amd) {
                    define([], function() {
                        return parser
                    })
                } else if (typeof exports !== "undefined") {
                    exports.parseIntersection = parser.parseIntersection;
                    exports.parseLocation = parser.parseLocation;
                    exports.parseInformalAddress = parser.parseInformalAddress;
                    exports.parseAddress = parser.parseAddress
                } else {
                    root.addressParser = root.addressParser || parser
                }
            })()
        }, {
            "xregexp/src/xregexp.js": 2
        }],
        2: [function(require, module, exports) {
            "use strict";
            var REGEX_DATA = "xregexp";
            var features = {
                astral: false,
                natives: false
            };
            var nativ = {
                exec: RegExp.prototype.exec,
                test: RegExp.prototype.test,
                match: String.prototype.match,
                replace: String.prototype.replace,
                split: String.prototype.split
            };
            var fixed = {};
            var regexCache = {};
            var patternCache = {};
            var tokens = [];
            var defaultScope = "default";
            var classScope = "class";
            var nativeTokens = {
                default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
                class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
            };
            var replacementToken = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g;
            var correctExecNpcg = nativ.exec.call(/()??/, "")[1] === undefined;
            var hasFlagsProp = /x/.flags !== undefined;
            var toString = {}.toString;

            function hasNativeFlag(flag) {
                var isSupported = true;
                try {
                    new RegExp("", flag)
                } catch (exception) {
                    isSupported = false
                }
                return isSupported
            }
            var hasNativeU = hasNativeFlag("u");
            var hasNativeY = hasNativeFlag("y");
            var registeredFlags = {
                g: true,
                i: true,
                m: true,
                u: hasNativeU,
                y: hasNativeY
            };

            function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
                var p;
                regex[REGEX_DATA] = {
                    captureNames: captureNames
                };
                if (isInternalOnly) {
                    return regex
                }
                if (regex.__proto__) {
                    regex.__proto__ = XRegExp.prototype
                } else {
                    for (p in XRegExp.prototype) {
                        regex[p] = XRegExp.prototype[p]
                    }
                }
                regex[REGEX_DATA].source = xSource;
                regex[REGEX_DATA].flags = xFlags ? xFlags.split("").sort().join("") : xFlags;
                return regex
            }

            function clipDuplicates(str) {
                return nativ.replace.call(str, /([\s\S])(?=[\s\S]*\1)/g, "")
            }

            function copyRegex(regex, options) {
                if (!XRegExp.isRegExp(regex)) {
                    throw new TypeError("Type RegExp expected")
                }
                var xData = regex[REGEX_DATA] || {};
                var flags = getNativeFlags(regex);
                var flagsToAdd = "";
                var flagsToRemove = "";
                var xregexpSource = null;
                var xregexpFlags = null;
                options = options || {};
                if (options.removeG) {
                    flagsToRemove += "g"
                }
                if (options.removeY) {
                    flagsToRemove += "y"
                }
                if (flagsToRemove) {
                    flags = nativ.replace.call(flags, new RegExp("[" + flagsToRemove + "]+", "g"), "")
                }
                if (options.addG) {
                    flagsToAdd += "g"
                }
                if (options.addY) {
                    flagsToAdd += "y"
                }
                if (flagsToAdd) {
                    flags = clipDuplicates(flags + flagsToAdd)
                }
                if (!options.isInternalOnly) {
                    if (xData.source !== undefined) {
                        xregexpSource = xData.source
                    }
                    if (xData.flags != null) {
                        xregexpFlags = flagsToAdd ? clipDuplicates(xData.flags + flagsToAdd) : xData.flags
                    }
                }
                regex = augment(new RegExp(options.source || regex.source, flags), hasNamedCapture(regex) ? xData.captureNames.slice(0) : null, xregexpSource, xregexpFlags, options.isInternalOnly);
                return regex
            }

            function dec(hex) {
                return parseInt(hex, 16)
            }

            function getContextualTokenSeparator(match, scope, flags) {
                if (match.input.charAt(match.index - 1) === "(" || match.input.charAt(match.index + match[0].length) === ")" || isPatternNext(match.input, match.index + match[0].length, flags, "[?*+]|{\\d+(?:,\\d*)?}")) {
                    return ""
                }
                return "(?:)"
            }

            function getNativeFlags(regex) {
                return hasFlagsProp ? regex.flags : nativ.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(regex))[1]
            }

            function hasNamedCapture(regex) {
                return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames)
            }

            function hex(dec) {
                return parseInt(dec, 10).toString(16)
            }

            function indexOf(array, value) {
                var len = array.length;
                var i;
                for (i = 0; i < len; ++i) {
                    if (array[i] === value) {
                        return i
                    }
                }
                return -1
            }

            function isPatternNext(pattern, pos, flags, needlePattern) {
                var inlineCommentPattern = "\\(\\?#[^)]*\\)";
                var lineCommentPattern = "#[^#\\n]*";
                var patternsToIgnore = flags.indexOf("x") > -1 ? ["\\s", lineCommentPattern, inlineCommentPattern] : [inlineCommentPattern];
                return nativ.test.call(new RegExp("^(?:" + patternsToIgnore.join("|") + ")*(?:" + needlePattern + ")"), pattern.slice(pos))
            }

            function isType(value, type) {
                return toString.call(value) === "[object " + type + "]"
            }

            function pad4(str) {
                while (str.length < 4) {
                    str = "0" + str
                }
                return str
            }

            function prepareFlags(pattern, flags) {
                var i;
                if (clipDuplicates(flags) !== flags) {
                    throw new SyntaxError("Invalid duplicate regex flag " + flags)
                }
                pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function($0, $1) {
                    if (nativ.test.call(/[gy]/, $1)) {
                        throw new SyntaxError("Cannot use flag g or y in mode modifier " + $0)
                    }
                    flags = clipDuplicates(flags + $1);
                    return ""
                });
                for (i = 0; i < flags.length; ++i) {
                    if (!registeredFlags[flags.charAt(i)]) {
                        throw new SyntaxError("Unknown regex flag " + flags.charAt(i))
                    }
                }
                return {
                    pattern: pattern,
                    flags: flags
                }
            }

            function prepareOptions(value) {
                var options = {};
                if (isType(value, "String")) {
                    XRegExp.forEach(value, /[^\s,]+/, function(match) {
                        options[match] = true
                    });
                    return options
                }
                return value
            }

            function registerFlag(flag) {
                if (!/^[\w$]$/.test(flag)) {
                    throw new Error("Flag must be a single character A-Za-z0-9_$")
                }
                registeredFlags[flag] = true
            }

            function runTokens(pattern, flags, pos, scope, context) {
                var i = tokens.length;
                var leadChar = pattern.charAt(pos);
                var result = null;
                var match;
                var t;
                while (i--) {
                    t = tokens[i];
                    if (t.leadChar && t.leadChar !== leadChar || t.scope !== scope && t.scope !== "all" || t.flag && flags.indexOf(t.flag) === -1) {
                        continue
                    }
                    match = XRegExp.exec(pattern, t.regex, pos, "sticky");
                    if (match) {
                        result = {
                            matchLength: match[0].length,
                            output: t.handler.call(context, match, scope, flags),
                            reparse: t.reparse
                        };
                        break
                    }
                }
                return result
            }

            function setAstral(on) {
                features.astral = on
            }

            function setNatives(on) {
                RegExp.prototype.exec = (on ? fixed : nativ).exec;
                RegExp.prototype.test = (on ? fixed : nativ).test;
                String.prototype.match = (on ? fixed : nativ).match;
                String.prototype.replace = (on ? fixed : nativ).replace;
                String.prototype.split = (on ? fixed : nativ).split;
                features.natives = on
            }

            function toObject(value) {
                if (value == null) {
                    throw new TypeError("Cannot convert null or undefined to object")
                }
                return value
            }

            function XRegExp(pattern, flags) {
                if (XRegExp.isRegExp(pattern)) {
                    if (flags !== undefined) {
                        throw new TypeError("Cannot supply flags when copying a RegExp")
                    }
                    return copyRegex(pattern)
                }
                pattern = pattern === undefined ? "" : String(pattern);
                flags = flags === undefined ? "" : String(flags);
                if (XRegExp.isInstalled("astral") && flags.indexOf("A") === -1) {
                    flags += "A"
                }
                if (!patternCache[pattern]) {
                    patternCache[pattern] = {}
                }
                if (!patternCache[pattern][flags]) {
                    var context = {
                        hasNamedCapture: false,
                        captureNames: []
                    };
                    var scope = defaultScope;
                    var output = "";
                    var pos = 0;
                    var result;
                    var applied = prepareFlags(pattern, flags);
                    var appliedPattern = applied.pattern;
                    var appliedFlags = applied.flags;
                    while (pos < appliedPattern.length) {
                        do {
                            result = runTokens(appliedPattern, appliedFlags, pos, scope, context);
                            if (result && result.reparse) {
                                appliedPattern = appliedPattern.slice(0, pos) + result.output + appliedPattern.slice(pos + result.matchLength)
                            }
                        } while (result && result.reparse);
                        if (result) {
                            output += result.output;
                            pos += result.matchLength || 1
                        } else {
                            var token = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, "sticky")[0];
                            output += token;
                            pos += token.length;
                            if (token === "[" && scope === defaultScope) {
                                scope = classScope
                            } else if (token === "]" && scope === classScope) {
                                scope = defaultScope
                            }
                        }
                    }
                    patternCache[pattern][flags] = {
                        pattern: nativ.replace.call(output, /(?:\(\?:\))+/g, "(?:)"),
                        flags: nativ.replace.call(appliedFlags, /[^gimuy]+/g, ""),
                        captures: context.hasNamedCapture ? context.captureNames : null
                    }
                }
                var generated = patternCache[pattern][flags];
                return augment(new RegExp(generated.pattern, generated.flags), generated.captures, pattern, flags)
            }
            XRegExp.prototype = new RegExp;
            XRegExp.version = "3.2.0";
            XRegExp._clipDuplicates = clipDuplicates;
            XRegExp._hasNativeFlag = hasNativeFlag;
            XRegExp._dec = dec;
            XRegExp._hex = hex;
            XRegExp._pad4 = pad4;
            XRegExp.addToken = function(regex, handler, options) {
                options = options || {};
                var optionalFlags = options.optionalFlags;
                var i;
                if (options.flag) {
                    registerFlag(options.flag)
                }
                if (optionalFlags) {
                    optionalFlags = nativ.split.call(optionalFlags, "");
                    for (i = 0; i < optionalFlags.length; ++i) {
                        registerFlag(optionalFlags[i])
                    }
                }
                tokens.push({
                    regex: copyRegex(regex, {
                        addG: true,
                        addY: hasNativeY,
                        isInternalOnly: true
                    }),
                    handler: handler,
                    scope: options.scope || defaultScope,
                    flag: options.flag,
                    reparse: options.reparse,
                    leadChar: options.leadChar
                });
                XRegExp.cache.flush("patterns")
            };
            XRegExp.cache = function(pattern, flags) {
                if (!regexCache[pattern]) {
                    regexCache[pattern] = {}
                }
                return regexCache[pattern][flags] || (regexCache[pattern][flags] = XRegExp(pattern, flags))
            };
            XRegExp.cache.flush = function(cacheName) {
                if (cacheName === "patterns") {
                    patternCache = {}
                } else {
                    regexCache = {}
                }
            };
            XRegExp.escape = function(str) {
                return nativ.replace.call(toObject(str), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            };
            XRegExp.exec = function(str, regex, pos, sticky) {
                var cacheKey = "g";
                var addY = false;
                var fakeY = false;
                var match;
                var r2;
                addY = hasNativeY && !!(sticky || regex.sticky && sticky !== false);
                if (addY) {
                    cacheKey += "y"
                } else if (sticky) {
                    fakeY = true;
                    cacheKey += "FakeY"
                }
                regex[REGEX_DATA] = regex[REGEX_DATA] || {};
                r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
                    addG: true,
                    addY: addY,
                    source: fakeY ? regex.source + "|()" : undefined,
                    removeY: sticky === false,
                    isInternalOnly: true
                }));
                pos = pos || 0;
                r2.lastIndex = pos;
                match = fixed.exec.call(r2, str);
                if (fakeY && match && match.pop() === "") {
                    match = null
                }
                if (regex.global) {
                    regex.lastIndex = match ? r2.lastIndex : 0
                }
                return match
            };
            XRegExp.forEach = function(str, regex, callback) {
                var pos = 0;
                var i = -1;
                var match;
                while (match = XRegExp.exec(str, regex, pos)) {
                    callback(match, ++i, str, regex);
                    pos = match.index + (match[0].length || 1)
                }
            };
            XRegExp.globalize = function(regex) {
                return copyRegex(regex, {
                    addG: true
                })
            };
            XRegExp.install = function(options) {
                options = prepareOptions(options);
                if (!features.astral && options.astral) {
                    setAstral(true)
                }
                if (!features.natives && options.natives) {
                    setNatives(true)
                }
            };
            XRegExp.isInstalled = function(feature) {
                return !!features[feature]
            };
            XRegExp.isRegExp = function(value) {
                return toString.call(value) === "[object RegExp]"
            };
            XRegExp.match = function(str, regex, scope) {
                var global = regex.global && scope !== "one" || scope === "all";
                var cacheKey = (global ? "g" : "") + (regex.sticky ? "y" : "") || "noGY";
                var result;
                var r2;
                regex[REGEX_DATA] = regex[REGEX_DATA] || {};
                r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
                    addG: !!global,
                    removeG: scope === "one",
                    isInternalOnly: true
                }));
                result = nativ.match.call(toObject(str), r2);
                if (regex.global) {
                    regex.lastIndex = scope === "one" && result ? result.index + result[0].length : 0
                }
                return global ? result || [] : result && result[0]
            };
            XRegExp.matchChain = function(str, chain) {
                return function recurseChain(values, level) {
                    var item = chain[level].regex ? chain[level] : {
                        regex: chain[level]
                    };
                    var matches = [];

                    function addMatch(match) {
                        if (item.backref) {
                            if (!(match.hasOwnProperty(item.backref) || +item.backref < match.length)) {
                                throw new ReferenceError("Backreference to undefined group: " + item.backref)
                            }
                            matches.push(match[item.backref] || "")
                        } else {
                            matches.push(match[0])
                        }
                    }
                    for (var i = 0; i < values.length; ++i) {
                        XRegExp.forEach(values[i], item.regex, addMatch)
                    }
                    return level === chain.length - 1 || !matches.length ? matches : recurseChain(matches, level + 1)
                }([str], 0)
            };
            XRegExp.replace = function(str, search, replacement, scope) {
                var isRegex = XRegExp.isRegExp(search);
                var global = search.global && scope !== "one" || scope === "all";
                var cacheKey = (global ? "g" : "") + (search.sticky ? "y" : "") || "noGY";
                var s2 = search;
                var result;
                if (isRegex) {
                    search[REGEX_DATA] = search[REGEX_DATA] || {};
                    s2 = search[REGEX_DATA][cacheKey] || (search[REGEX_DATA][cacheKey] = copyRegex(search, {
                        addG: !!global,
                        removeG: scope === "one",
                        isInternalOnly: true
                    }))
                } else if (global) {
                    s2 = new RegExp(XRegExp.escape(String(search)), "g")
                }
                result = fixed.replace.call(toObject(str), s2, replacement);
                if (isRegex && search.global) {
                    search.lastIndex = 0
                }
                return result
            };
            XRegExp.replaceEach = function(str, replacements) {
                var i;
                var r;
                for (i = 0; i < replacements.length; ++i) {
                    r = replacements[i];
                    str = XRegExp.replace(str, r[0], r[1], r[2])
                }
                return str
            };
            XRegExp.split = function(str, separator, limit) {
                return fixed.split.call(toObject(str), separator, limit)
            };
            XRegExp.test = function(str, regex, pos, sticky) {
                return !!XRegExp.exec(str, regex, pos, sticky)
            };
            XRegExp.uninstall = function(options) {
                options = prepareOptions(options);
                if (features.astral && options.astral) {
                    setAstral(false)
                }
                if (features.natives && options.natives) {
                    setNatives(false)
                }
            };
            XRegExp.union = function(patterns, flags, options) {
                options = options || {};
                var conjunction = options.conjunction || "or";
                var numCaptures = 0;
                var numPriorCaptures;
                var captureNames;

                function rewrite(match, paren, backref) {
                    var name = captureNames[numCaptures - numPriorCaptures];
                    if (paren) {
                        ++numCaptures;
                        if (name) {
                            return "(?<" + name + ">"
                        }
                    } else if (backref) {
                        return "\\" + (+backref + numPriorCaptures)
                    }
                    return match
                }
                if (!(isType(patterns, "Array") && patterns.length)) {
                    throw new TypeError("Must provide a nonempty array of patterns to merge")
                }
                var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
                var output = [];
                var pattern;
                for (var i = 0; i < patterns.length; ++i) {
                    pattern = patterns[i];
                    if (XRegExp.isRegExp(pattern)) {
                        numPriorCaptures = numCaptures;
                        captureNames = pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames || [];
                        output.push(nativ.replace.call(XRegExp(pattern.source).source, parts, rewrite))
                    } else {
                        output.push(XRegExp.escape(pattern))
                    }
                }
                var separator = conjunction === "none" ? "" : "|";
                return XRegExp(output.join(separator), flags)
            };
            fixed.exec = function(str) {
                var origLastIndex = this.lastIndex;
                var match = nativ.exec.apply(this, arguments);
                var name;
                var r2;
                var i;
                if (match) {
                    if (!correctExecNpcg && match.length > 1 && indexOf(match, "") > -1) {
                        r2 = copyRegex(this, {
                            removeG: true,
                            isInternalOnly: true
                        });
                        nativ.replace.call(String(str).slice(match.index), r2, function() {
                            var len = arguments.length;
                            var i;
                            for (i = 1; i < len - 2; ++i) {
                                if (arguments[i] === undefined) {
                                    match[i] = undefined
                                }
                            }
                        })
                    }
                    if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
                        for (i = 1; i < match.length; ++i) {
                            name = this[REGEX_DATA].captureNames[i - 1];
                            if (name) {
                                match[name] = match[i]
                            }
                        }
                    }
                    if (this.global && !match[0].length && this.lastIndex > match.index) {
                        this.lastIndex = match.index
                    }
                }
                if (!this.global) {
                    this.lastIndex = origLastIndex
                }
                return match
            };
            fixed.test = function(str) {
                return !!fixed.exec.call(this, str)
            };
            fixed.match = function(regex) {
                var result;
                if (!XRegExp.isRegExp(regex)) {
                    regex = new RegExp(regex)
                } else if (regex.global) {
                    result = nativ.match.apply(this, arguments);
                    regex.lastIndex = 0;
                    return result
                }
                return fixed.exec.call(regex, toObject(this))
            };
            fixed.replace = function(search, replacement) {
                var isRegex = XRegExp.isRegExp(search);
                var origLastIndex;
                var captureNames;
                var result;
                if (isRegex) {
                    if (search[REGEX_DATA]) {
                        captureNames = search[REGEX_DATA].captureNames
                    }
                    origLastIndex = search.lastIndex
                } else {
                    search += ""
                }
                if (isType(replacement, "Function")) {
                    result = nativ.replace.call(String(this), search, function() {
                        var args = arguments;
                        var i;
                        if (captureNames) {
                            args[0] = new String(args[0]);
                            for (i = 0; i < captureNames.length; ++i) {
                                if (captureNames[i]) {
                                    args[0][captureNames[i]] = args[i + 1]
                                }
                            }
                        }
                        if (isRegex && search.global) {
                            search.lastIndex = args[args.length - 2] + args[0].length
                        }
                        return replacement.apply(undefined, args)
                    })
                } else {
                    result = nativ.replace.call(this == null ? this : String(this), search, function() {
                        var args = arguments;
                        return nativ.replace.call(String(replacement), replacementToken, function($0, $1, $2) {
                            var n;
                            if ($1) {
                                n = +$1;
                                if (n <= args.length - 3) {
                                    return args[n] || ""
                                }
                                n = captureNames ? indexOf(captureNames, $1) : -1;
                                if (n < 0) {
                                    throw new SyntaxError("Backreference to undefined group " + $0)
                                }
                                return args[n + 1] || ""
                            }
                            if ($2 === "$") {
                                return "$"
                            }
                            if ($2 === "&" || +$2 === 0) {
                                return args[0]
                            }
                            if ($2 === "`") {
                                return args[args.length - 1].slice(0, args[args.length - 2])
                            }
                            if ($2 === "'") {
                                return args[args.length - 1].slice(args[args.length - 2] + args[0].length)
                            }
                            $2 = +$2;
                            if (!isNaN($2)) {
                                if ($2 > args.length - 3) {
                                    throw new SyntaxError("Backreference to undefined group " + $0)
                                }
                                return args[$2] || ""
                            }
                            throw new SyntaxError("Invalid token " + $0)
                        })
                    })
                }
                if (isRegex) {
                    if (search.global) {
                        search.lastIndex = 0
                    } else {
                        search.lastIndex = origLastIndex
                    }
                }
                return result
            };
            fixed.split = function(separator, limit) {
                if (!XRegExp.isRegExp(separator)) {
                    return nativ.split.apply(this, arguments)
                }
                var str = String(this);
                var output = [];
                var origLastIndex = separator.lastIndex;
                var lastLastIndex = 0;
                var lastLength;
                limit = (limit === undefined ? -1 : limit) >>> 0;
                XRegExp.forEach(str, separator, function(match) {
                    if (match.index + match[0].length > lastLastIndex) {
                        output.push(str.slice(lastLastIndex, match.index));
                        if (match.length > 1 && match.index < str.length) {
                            Array.prototype.push.apply(output, match.slice(1))
                        }
                        lastLength = match[0].length;
                        lastLastIndex = match.index + lastLength
                    }
                });
                if (lastLastIndex === str.length) {
                    if (!nativ.test.call(separator, "") || lastLength) {
                        output.push("")
                    }
                } else {
                    output.push(str.slice(lastLastIndex))
                }
                separator.lastIndex = origLastIndex;
                return output.length > limit ? output.slice(0, limit) : output
            };
            XRegExp.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function(match, scope) {
                if (match[1] === "B" && scope === defaultScope) {
                    return match[0]
                }
                throw new SyntaxError("Invalid escape " + match[0])
            }, {
                scope: "all",
                leadChar: "\\"
            });
            XRegExp.addToken(/\\u{([\dA-Fa-f]+)}/, function(match, scope, flags) {
                var code = dec(match[1]);
                if (code > 1114111) {
                    throw new SyntaxError("Invalid Unicode code point " + match[0])
                }
                if (code <= 65535) {
                    return "\\u" + pad4(hex(code))
                }
                if (hasNativeU && flags.indexOf("u") > -1) {
                    return match[0]
                }
                throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")
            }, {
                scope: "all",
                leadChar: "\\"
            });
            XRegExp.addToken(/\[(\^?)\]/, function(match) {
                return match[1] ? "[\\s\\S]" : "\\b\\B"
            }, {
                leadChar: "["
            });
            XRegExp.addToken(/\(\?#[^)]*\)/, getContextualTokenSeparator, {
                leadChar: "("
            });
            XRegExp.addToken(/\s+|#[^\n]*\n?/, getContextualTokenSeparator, {
                flag: "x"
            });
            XRegExp.addToken(/\./, function() {
                return "[\\s\\S]"
            }, {
                flag: "s",
                leadChar: "."
            });
            XRegExp.addToken(/\\k<([\w$]+)>/, function(match) {
                var index = isNaN(match[1]) ? indexOf(this.captureNames, match[1]) + 1 : +match[1];
                var endIndex = match.index + match[0].length;
                if (!index || index > this.captureNames.length) {
                    throw new SyntaxError("Backreference to undefined group " + match[0])
                }
                return "\\" + index + (endIndex === match.input.length || isNaN(match.input.charAt(endIndex)) ? "" : "(?:)")
            }, {
                leadChar: "\\"
            });
            XRegExp.addToken(/\\(\d+)/, function(match, scope) {
                if (!(scope === defaultScope && /^[1-9]/.test(match[1]) && +match[1] <= this.captureNames.length) && match[1] !== "0") {
                    throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + match[0])
                }
                return match[0]
            }, {
                scope: "all",
                leadChar: "\\"
            });
            XRegExp.addToken(/\(\?P?<([\w$]+)>/, function(match) {
                if (!isNaN(match[1])) {
                    throw new SyntaxError("Cannot use integer as capture name " + match[0])
                }
                if (match[1] === "length" || match[1] === "__proto__") {
                    throw new SyntaxError("Cannot use reserved word as capture name " + match[0])
                }
                if (indexOf(this.captureNames, match[1]) > -1) {
                    throw new SyntaxError("Cannot use same name for multiple groups " + match[0])
                }
                this.captureNames.push(match[1]);
                this.hasNamedCapture = true;
                return "("
            }, {
                leadChar: "("
            });
            XRegExp.addToken(/\((?!\?)/, function(match, scope, flags) {
                if (flags.indexOf("n") > -1) {
                    return "(?:"
                }
                this.captureNames.push(null);
                return "("
            }, {
                optionalFlags: "n",
                leadChar: "("
            });
            module.exports = XRegExp
        }, {}]
    }, {}, [1])(1)
});
