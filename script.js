const form = document.querySelector("#form-habits")

var days = {
  d0101: false,
  d0201: false,
  d0301: false,
  d0401: false,
  d0501: false,
  d0601: false,
  d0701: false,
  d0801: false,
  d0901: false,
  d1001: false,
  d1101: false,
  d1201: false,
  d1301: false,
  d1401: false,
  d1501: false,
  d1601: false,
  d1701: false,
  d1801: false,
  d1901: false,
  d2001: false,
  d2101: false,
  d2201: false,
  d2301: false,
  d2401: false,
  d2501: false,
  d2601: false,
  d2701: false,
  d2801: false,
  d2901: false,
  d3001: false,
  d3101: false,

  d0102: false,
  d0202: false,
  d0302: false,
  d0402: false,
  d0502: false,
  d0602: false,
  d0702: false,
  d0802: false,
  d0902: false,
  d1002: false,
  d1102: false,
  d1202: false,
  d1302: false,
  d1402: false,
  d1502: false,
  d1602: false,
  d1702: false,
  d1802: false,
  d1902: false,
  d2002: false,
  d2102: false,
  d2202: false,
  d2302: false,
  d2402: false,
  d2502: false,
  d2602: false,
  d2702: false,
  d2802: false,

  d0103: false,
  d0203: false,
  d0303: false,
  d0403: false,
  d0503: false,
  d0603: false,
  d0703: false,
  d0803: false,
  d0903: false,
  d1003: false,
  d1103: false,
  d1203: false,
  d1303: false,
  d1403: false,
  d1503: false,
  d1603: false,
  d1703: false,
  d1803: false,
  d1903: false,
  d2003: false,
  d2103: false,
  d2203: false,
  d2303: false,
  d2403: false,
  d2503: false,
  d2603: false,
  d2703: false,
  d2803: false,
  d2903: false,
  d3003: false,
  d3103: false,

  d0104: false,
  d0204: false,
  d0304: false,
  d0404: false,
  d0504: false,
  d0604: false,
  d0704: false,
  d0804: false,
  d0904: false,
  d1004: false,
  d1104: false,
  d1204: false,
  d1304: false,
  d1404: false,
  d1504: false,
  d1604: false,
  d1704: false,
  d1804: false,
  d1904: false,
  d2004: false,
  d2104: false,
  d2204: false,
  d2304: false,
  d2404: false,
  d2504: false,
  d2604: false,
  d2704: false,
  d2804: false,
  d2904: false,
  d3004: false,

  d0105: false,
  d0205: false,
  d0305: false,
  d0405: false,
  d0505: false,
  d0605: false,
  d0705: false,
  d0805: false,
  d0905: false,
  d1005: false,
  d1105: false,
  d1205: false,
  d1305: false,
  d1405: false,
  d1505: false,
  d1605: false,
  d1705: false,
  d1805: false,
  d1905: false,
  d2005: false,
  d2105: false,
  d2205: false,
  d2305: false,
  d2405: false,
  d2505: false,
  d2605: false,
  d2705: false,
  d2805: false,
  d2905: false,
  d3005: false,
  d3105: false,

  d0106: false,
  d0206: false,
  d0306: false,
  d0406: false,
  d0506: false,
  d0606: false,
  d0706: false,
  d0806: false,
  d0906: false,
  d1006: false,
  d1106: false,
  d1206: false,
  d1306: false,
  d1406: false,
  d1506: false,
  d1606: false,
  d1706: false,
  d1806: false,
  d1906: false,
  d2006: false,
  d2106: false,
  d2206: false,
  d2306: false,
  d2406: false,
  d2506: false,
  d2606: false,
  d2706: false,
  d2806: false,
  d2906: false,
  d3006: false,
  d3006: false,

  d0107: false,
  d0207: false,
  d0307: false,
  d0407: false,
  d0507: false,
  d0607: false,
  d0707: false,
  d0807: false,
  d0907: false,
  d1007: false,
  d1107: false,
  d1207: false,
  d1307: false,
  d1407: false,
  d1507: false,
  d1607: false,
  d1707: false,
  d1807: false,
  d1907: false,
  d2007: false,
  d2107: false,
  d2207: false,
  d2307: false,
  d2407: false,
  d2507: false,
  d2607: false,
  d2707: false,
  d2807: false,
  d2907: false,
  d3007: false,
  d3107: false,

  d0108: false,
  d0208: false,
  d0308: false,
  d0408: false,
  d0508: false,
  d0608: false,
  d0708: false,
  d0808: false,
  d0908: false,
  d1008: false,
  d1108: false,
  d1208: false,
  d1308: false,
  d1408: false,
  d1508: false,
  d1608: false,
  d1708: false,
  d1808: false,
  d1908: false,
  d2008: false,
  d2108: false,
  d2208: false,
  d2308: false,
  d2408: false,
  d2508: false,
  d2608: false,
  d2708: false,
  d2808: false,
  d2908: false,
  d3008: false,
  d3108: false,

  d0109: false,
  d0209: false,
  d0309: false,
  d0409: false,
  d0509: false,
  d0609: false,
  d0709: false,
  d0809: false,
  d0909: false,
  d1009: false,
  d1109: false,
  d1209: false,
  d1309: false,
  d1409: false,
  d1509: false,
  d1609: false,
  d1709: false,
  d1809: false,
  d1909: false,
  d2009: false,
  d2109: false,
  d2209: false,
  d2309: false,
  d2409: false,
  d2509: false,
  d2609: false,
  d2709: false,
  d2809: false,
  d2909: false,
  d3009: false,

  d0110: false,
  d0210: false,
  d0310: false,
  d0410: false,
  d0510: false,
  d0610: false,
  d0710: false,
  d0810: false,
  d0910: false,
  d1010: false,
  d1110: false,
  d1210: false,
  d1310: false,
  d1410: false,
  d1510: false,
  d1610: false,
  d1710: false,
  d1810: false,
  d1910: false,
  d2010: false,
  d2110: false,
  d2210: false,
  d2310: false,
  d2410: false,
  d2510: false,
  d2610: false,
  d2710: false,
  d2810: false,
  d2910: false,
  d3010: false,
  d3110: false,

  d0111: false,
  d0211: false,
  d0311: false,
  d0411: false,
  d0511: false,
  d0611: false,
  d0711: false,
  d0811: false,
  d0911: false,
  d1011: false,
  d1111: false,
  d1211: false,
  d1311: false,
  d1411: false,
  d1511: false,
  d1611: false,
  d1711: false,
  d1811: false,
  d1911: false,
  d2011: false,
  d2111: false,
  d2211: false,
  d2311: false,
  d2411: false,
  d2511: false,
  d2611: false,
  d2711: false,
  d2811: false,
  d2911: false,
  d3011: false,

  d0112: false,
  d0212: false,
  d0312: false,
  d0412: false,
  d0512: false,
  d0612: false,
  d0712: false,
  d0812: false,
  d0912: false,
  d1012: false,
  d1112: false,
  d1212: false,
  d1312: false,
  d1412: false,
  d1512: false,
  d1612: false,
  d1712: false,
  d1812: false,
  d1912: false,
  d2012: false,
  d2112: false,
  d2212: false,
  d2312: false,
  d2412: false,
  d2512: false,
  d2612: false,
  d2712: false,
  d2812: false,
  d2912: false,
  d3012: false,
  d3112: false,
}

function markDay(day) {
  

  if (day == "d0101") {
    days.d0101 = !days.d0101
  } else if (day == "d0201") {
    days.d0201 = !days.d0201
  } else if (day == "d0301") {
    days.d0301 = !days.d0301
  } else if (day == "d0401") {
    days.d0401 = !days.d0401
  } else if (day == "d0501") {
    days.d0501 = !days.d0501
  } else if (day == "d0601") {
    days.d0601 = !days.d0601
  } else if (day == "d0701") {
    days.d0701 = !days.d0701
  } else if (day == "d0801") {
    days.d0801 = !days.d0801
  } else if (day == "d0901") {
    days.d0901 = !days.d0901
  } else if (day == "d1001") {
    days.d1001 = !days.d1001
  } else if (day == "d1101") {
    days.d1101 = !days.d1101
  } else if (day == "d1201") {
    days.d1201 = !days.d1201
  } else if (day == "d1301") {
    days.d1301 = !days.d1301
  } else if (day == "d1401") {
    days.d1401 = !days.d1401
  } else if (day == "d1501") {
    days.d1501 = !days.d1501
  } else if (day == "d1601") {
    days.d1601 = !days.d1601
  } else if (day == "d1701") {
    days.d1701 = !days.d1701
  } else if (day == "d1801") {
    days.d1801 = !days.d1801
  } else if (day == "d1901") {
    days.d1901 = !days.d1901
  } else if (day == "d2001") {
    days.d2001 = !days.d2001
  } else if (day == "d2101") {
    days.d2101 = !days.d2101
  } else if (day == "d2201") {
    days.d2201 = !days.d2201
  } else if (day == "d2301") {
    days.d2301 = !days.d2301
  } else if (day == "d2401") {
    days.d2401 = !days.d2401
  } else if (day == "d2501") {
    days.d2501 = !days.d2501
  } else if (day == "d2601") {
    days.d2601 = !days.d2601
  } else if (day == "d2701") {
    days.d2701 = !days.d2701
  } else if (day == "d2801") {
    days.d2801 = !days.d2801
  } else if (day == "d2901") {
    days.d2901 = !days.d2901
  } else if (day == "d3001") {
    days.d3001 = !days.d3001
  } else if (day == "d3101") {
    days.d3101 = !days.d3101
  }

  if (day == "d0102") {
    days.d0102 = !days.d0102
  } else if (day == "d0202") {
    days.d0202 = !days.d0202
  } else if (day == "d0302") {
    days.d0302 = !days.d0302
  } else if (day == "d0402") {
    days.d0402 = !days.d0402
  } else if (day == "d0502") {
    days.d0502 = !days.d0502
  } else if (day == "d0602") {
    days.d0602 = !days.d0602
  } else if (day == "d0702") {
    days.d0702 = !days.d0702
  } else if (day == "d0802") {
    days.d0802 = !days.d0802
  } else if (day == "d0902") {
    days.d0902 = !days.d0902
  } else if (day == "d1002") {
    days.d1002 = !days.d1002
  } else if (day == "d1102") {
    days.d1102 = !days.d1102
  } else if (day == "d1202") {
    days.d1202 = !days.d1202
  } else if (day == "d1302") {
    days.d1302 = !days.d1302
  } else if (day == "d1402") {
    days.d1402 = !days.d1402
  } else if (day == "d1502") {
    days.d1502 = !days.d1502
  } else if (day == "d1602") {
    days.d1602 = !days.d1602
  } else if (day == "d1702") {
    days.d1702 = !days.d1702
  } else if (day == "d1802") {
    days.d1802 = !days.d1802
  } else if (day == "d1802") {
    days.d1802 = !days.d1802
  } else if (day == "d1902") {
    days.d1902 = !days.d1902
  } else if (day == "d2002") {
    days.d2002 = !days.d2002
  } else if (day == "d2102") {
    days.d2102 = !days.d2102
  } else if (day == "d2202") {
    days.d2202 = !days.d2202
  } else if (day == "d2302") {
    days.d2302 = !days.d2302
  } else if (day == "d2402") {
    days.d2402 = !days.d2402
  } else if (day == "d2502") {
    days.d2502 = !days.d2502
  } else if (day == "d2602") {
    days.d2602 = !days.d2602
  } else if (day == "d2702") {
    days.d2702 = !days.d2702
  } else if (day == "d2802") {
    days.d2802 = !days.d2802
  }

  if (day == "d0103") {
    days.d0103 = !days.d0103
  } else if (day == "d0203") {
    days.d0203 = !days.d0203
  } else if (day == "d0303") {
    days.d0303 = !days.d0303
  } else if (day == "d0403") {
    days.d0403 = !days.d0403
  } else if (day == "d0503") {
    days.d0503 = !days.d0503
  } else if (day == "d0603") {
    days.d0603 = !days.d0603
  } else if (day == "d0703") {
    days.d0703 = !days.d0703
  } else if (day == "d0803") {
    days.d0803 = !days.d0803
  } else if (day == "d0903") {
    days.d0903 = !days.d0903
  } else if (day == "d1003") {
    days.d1003 = !days.d1003
  } else if (day == "d1103") {
    days.d1103 = !days.d1103
  } else if (day == "d1203") {
    days.d1203 = !days.d1203
  } else if (day == "d1303") {
    days.d1303 = !days.d1303
  } else if (day == "d1403") {
    days.d1403 = !days.d1403
  } else if (day == "d1503") {
    days.d1503 = !days.d1503
  } else if (day == "d1603") {
    days.d1603 = !days.d1603
  } else if (day == "d1703") {
    days.d1703 = !days.d1703
  } else if (day == "d1803") {
    days.d1803 = !days.d1803
  } else if (day == "d1803") {
    days.d1803 = !days.d1803
  } else if (day == "d1903") {
    days.d1903 = !days.d1903
  } else if (day == "d2003") {
    days.d2003 = !days.d2003
  } else if (day == "d2103") {
    days.d2103 = !days.d2103
  } else if (day == "d2203") {
    days.d2203 = !days.d2203
  } else if (day == "d2303") {
    days.d2303 = !days.d2303
  } else if (day == "d2403") {
    days.d2403 = !days.d2403
  } else if (day == "d2503") {
    days.d2503 = !days.d2503
  } else if (day == "d2603") {
    days.d2603 = !days.d2603
  } else if (day == "d2703") {
    days.d2703 = !days.d2703
  } else if (day == "d2803") {
    days.d2803 = !days.d2803
  } else if (day == "d2903") {
    days.d2903 = !days.d2903
  } else if (day == "d3003") {
    days.d3003 = !days.d3003
  } else if (day == "d3103") {
    days.d3103 = !days.d3103
  }

  if (day == "d0104") {
    days.d0104 = !days.d0104
  } else if (day == "d0204") {
    days.d0204 = !days.d0204
  } else if (day == "d0304") {
    days.d0304 = !days.d0304
  } else if (day == "d0404") {
    days.d0404 = !days.d0404
  } else if (day == "d0504") {
    days.d0504 = !days.d0504
  } else if (day == "d0604") {
    days.d0604 = !days.d0604
  } else if (day == "d0704") {
    days.d0704 = !days.d0704
  } else if (day == "d0804") {
    days.d0804 = !days.d0804
  } else if (day == "d0904") {
    days.d0904 = !days.d0904
  } else if (day == "d1004") {
    days.d1004 = !days.d1004
  } else if (day == "d1104") {
    days.d1104 = !days.d1104
  } else if (day == "d1204") {
    days.d1204 = !days.d1204
  } else if (day == "d1304") {
    days.d1304 = !days.d1304
  } else if (day == "d1404") {
    days.d1404 = !days.d1404
  } else if (day == "d1504") {
    days.d1504 = !days.d1504
  } else if (day == "d1604") {
    days.d1604 = !days.d1604
  } else if (day == "d1704") {
    days.d1704 = !days.d1704
  } else if (day == "d1804") {
    days.d1804 = !days.d1804
  } else if (day == "d1904") {
    days.d1904 = !days.d1904
  } else if (day == "d2004") {
    days.d2004 = !days.d2004
  } else if (day == "d2104") {
    days.d2104 = !days.d2104
  } else if (day == "d2204") {
    days.d2204 = !days.d2204
  } else if (day == "d2304") {
    days.d2304 = !days.d2304
  } else if (day == "d2404") {
    days.d2404 = !days.d2404
  } else if (day == "d2504") {
    days.d2504 = !days.d2504
  } else if (day == "d2604") {
    days.d2604 = !days.d2604
  } else if (day == "d2704") {
    days.d2704 = !days.d2704
  } else if (day == "d2804") {
    days.d2804 = !days.d2804
  } else if (day == "d2904") {
    days.d2904 = !days.d2904
  } else if (day == "d3004") {
    days.d3004 = !days.d3004
  }

  if (day == "d0105") {
    days.d0105 = !days.d0105
  } else if (day == "d0205") {
    days.d0205 = !days.d0205
  } else if (day == "d0305") {
    days.d0305 = !days.d0305
  } else if (day == "d0405") {
    days.d0405 = !days.d0405
  } else if (day == "d0505") {
    days.d0505 = !days.d0505
  } else if (day == "d0605") {
    days.d0605 = !days.d0605
  } else if (day == "d0705") {
    days.d0705 = !days.d0705
  } else if (day == "d0805") {
    days.d0805 = !days.d0805
  } else if (day == "d0905") {
    days.d0905 = !days.d0905
  } else if (day == "d1005") {
    days.d1005 = !days.d1005
  } else if (day == "d1105") {
    days.d1105 = !days.d1105
  } else if (day == "d1205") {
    days.d1205 = !days.d1205
  } else if (day == "d1305") {
    days.d1305 = !days.d1305
  } else if (day == "d1405") {
    days.d1405 = !days.d1405
  } else if (day == "d1505") {
    days.d1505 = !days.d1505
  } else if (day == "d1605") {
    days.d1605 = !days.d1605
  } else if (day == "d1705") {
    days.d1705 = !days.d1705
  } else if (day == "d1805") {
    days.d1805 = !days.d1805
  } else if (day == "d1905") {
    days.d1905 = !days.d1905
  } else if (day == "d2005") {
    days.d2005 = !days.d2005
  } else if (day == "d2105") {
    days.d2105 = !days.d2105
  } else if (day == "d2205") {
    days.d2205 = !days.d2205
  } else if (day == "d2305") {
    days.d2305 = !days.d2305
  } else if (day == "d2405") {
    days.d2405 = !days.d2405
  } else if (day == "d2505") {
    days.d2505 = !days.d2505
  } else if (day == "d2605") {
    days.d2605 = !days.d2605
  } else if (day == "d2705") {
    days.d2705 = !days.d2705
  } else if (day == "d2805") {
    days.d2805 = !days.d2805
  } else if (day == "d2905") {
    days.d2905 = !days.d2905
  } else if (day == "d3005") {
    days.d3005 = !days.d3005
  } else if (day == "d3105") {
    days.d3105 = !days.d3105
  }

  if (day == "d0106") {
    days.d0106 = !days.d0106
  } else if (day == "d0206") {
    days.d0206 = !days.d0206
  } else if (day == "d0306") {
    days.d0306 = !days.d0306
  } else if (day == "d0406") {
    days.d0406 = !days.d0406
  } else if (day == "d0506") {
    days.d0506 = !days.d0506
  } else if (day == "d0606") {
    days.d0606 = !days.d0606
  } else if (day == "d0706") {
    days.d0706 = !days.d0706
  } else if (day == "d0806") {
    days.d0806 = !days.d0806
  } else if (day == "d0906") {
    days.d0906 = !days.d0906
  } else if (day == "d1006") {
    days.d1006 = !days.d1006
  } else if (day == "d1106") {
    days.d1106 = !days.d1106
  } else if (day == "d1206") {
    days.d1206 = !days.d1206
  } else if (day == "d1306") {
    days.d1306 = !days.d1306
  } else if (day == "d1406") {
    days.d1406 = !days.d1406
  } else if (day == "d1506") {
    days.d1506 = !days.d1506
  } else if (day == "d1606") {
    days.d1606 = !days.d1606
  } else if (day == "d1706") {
    days.d1706 = !days.d1706
  } else if (day == "d1806") {
    days.d1806 = !days.d1806
  } else if (day == "d1906") {
    days.d1906 = !days.d1906
  } else if (day == "d2006") {
    days.d2006 = !days.d2006
  } else if (day == "d2106") {
    days.d2106 = !days.d2106
  } else if (day == "d2206") {
    days.d2206 = !days.d2206
  } else if (day == "d2306") {
    days.d2306 = !days.d2306
  } else if (day == "d2406") {
    days.d2406 = !days.d2406
  } else if (day == "d2506") {
    days.d2506 = !days.d2506
  } else if (day == "d2606") {
    days.d2606 = !days.d2606
  } else if (day == "d2706") {
    days.d2706 = !days.d2706
  } else if (day == "d2806") {
    days.d2806 = !days.d2806
  } else if (day == "d2906") {
    days.d2906 = !days.d2906
  } else if (day == "d3006") {
    days.d3006 = !days.d3006
  }

  if (day == "d0107") {
    days.d0107 = !days.d0107
  } else if (day == "d0207") {
    days.d0207 = !days.d0207
  } else if (day == "d0307") {
    days.d0307 = !days.d0307
  } else if (day == "d0407") {
    days.d0407 = !days.d0407
  } else if (day == "d0507") {
    days.d0507 = !days.d0507
  } else if (day == "d0607") {
    days.d0607 = !days.d0607
  } else if (day == "d0707") {
    days.d0707 = !days.d0707
  } else if (day == "d0807") {
    days.d0807 = !days.d0807
  } else if (day == "d0907") {
    days.d0907 = !days.d0907
  } else if (day == "d1007") {
    days.d1007 = !days.d1007
  } else if (day == "d1107") {
    days.d1107 = !days.d1107
  } else if (day == "d1207") {
    days.d1207 = !days.d1207
  } else if (day == "d1307") {
    days.d1307 = !days.d1307
  } else if (day == "d1407") {
    days.d1407 = !days.d1407
  } else if (day == "d1507") {
    days.d1507 = !days.d1507
  } else if (day == "d1607") {
    days.d1607 = !days.d1607
  } else if (day == "d1707") {
    days.d1707 = !days.d1707
  } else if (day == "d1807") {
    days.d1807 = !days.d1807
  } else if (day == "d1907") {
    days.d1907 = !days.d1907
  } else if (day == "d2007") {
    days.d2007 = !days.d2007
  } else if (day == "d2107") {
    days.d2107 = !days.d2107
  } else if (day == "d2207") {
    days.d2207 = !days.d2207
  } else if (day == "d2307") {
    days.d2307 = !days.d2307
  } else if (day == "d2407") {
    days.d2407 = !days.d2407
  } else if (day == "d2507") {
    days.d2507 = !days.d2507
  } else if (day == "d2607") {
    days.d2607 = !days.d2607
  } else if (day == "d2707") {
    days.d2707 = !days.d2707
  } else if (day == "d2807") {
    days.d2807 = !days.d2807
  } else if (day == "d2907") {
    days.d2907 = !days.d2907
  } else if (day == "d3007") {
    days.d3007 = !days.d3007
  } else if (day == "d3107") {
    days.d3107 = !days.d3107
  }

  if (day == "d0108") {
    days.d0108 = !days.d0108
  } else if (day == "d0208") {
    days.d0208 = !days.d0208
  } else if (day == "d0308") {
    days.d0308 = !days.d0308
  } else if (day == "d0408") {
    days.d0408 = !days.d0408
  } else if (day == "d0508") {
    days.d0508 = !days.d0508
  } else if (day == "d0608") {
    days.d0608 = !days.d0608
  } else if (day == "d0708") {
    days.d0708 = !days.d0708
  } else if (day == "d0808") {
    days.d0808 = !days.d0808
  } else if (day == "d0908") {
    days.d0908 = !days.d0908
  } else if (day == "d1008") {
    days.d1008 = !days.d1008
  } else if (day == "d1108") {
    days.d1108 = !days.d1108
  } else if (day == "d1208") {
    days.d1208 = !days.d1208
  } else if (day == "d1308") {
    days.d1308 = !days.d1308
  } else if (day == "d1408") {
    days.d1408 = !days.d1408
  } else if (day == "d1508") {
    days.d1508 = !days.d1508
  } else if (day == "d1608") {
    days.d1608 = !days.d1608
  } else if (day == "d1708") {
    days.d1708 = !days.d1708
  } else if (day == "d1808") {
    days.d1808 = !days.d1808
  } else if (day == "d1908") {
    days.d1908 = !days.d1908
  } else if (day == "d2008") {
    days.d2008 = !days.d2008
  } else if (day == "d2108") {
    days.d2108 = !days.d2108
  } else if (day == "d2208") {
    days.d2208 = !days.d2208
  } else if (day == "d2308") {
    days.d2308 = !days.d2308
  } else if (day == "d2408") {
    days.d2408 = !days.d2408
  } else if (day == "d2508") {
    days.d2508 = !days.d2508
  } else if (day == "d2608") {
    days.d2608 = !days.d2608
  } else if (day == "d2708") {
    days.d2708 = !days.d2708
  } else if (day == "d2808") {
    days.d2808 = !days.d2808
  } else if (day == "d2908") {
    days.d2908 = !days.d2908
  } else if (day == "d3008") {
    days.d3008 = !days.d3008
  } else if (day == "d3108") {
    days.d3108 = !days.d3108
  }

  if (day == "d0109") {
    days.d0109 = !days.d0109
  } else if (day == "d0209") {
    days.d0209 = !days.d0209
  } else if (day == "d0309") {
    days.d0309 = !days.d0309
  } else if (day == "d0409") {
    days.d0409 = !days.d0409
  } else if (day == "d0509") {
    days.d0509 = !days.d0509
  } else if (day == "d0609") {
    days.d0609 = !days.d0609
  } else if (day == "d0709") {
    days.d0709 = !days.d0709
  } else if (day == "d0809") {
    days.d0809 = !days.d0809
  } else if (day == "d0909") {
    days.d0909 = !days.d0909
  } else if (day == "d1009") {
    days.d1009 = !days.d1009
  } else if (day == "d1109") {
    days.d1109 = !days.d1109
  } else if (day == "d1209") {
    days.d1209 = !days.d1209
  } else if (day == "d1309") {
    days.d1309 = !days.d1309
  } else if (day == "d1409") {
    days.d1409 = !days.d1409
  } else if (day == "d1509") {
    days.d1509 = !days.d1509
  } else if (day == "d1609") {
    days.d1609 = !days.d1609
  } else if (day == "d1709") {
    days.d1709 = !days.d1709
  } else if (day == "d1809") {
    days.d1809 = !days.d1809
  } else if (day == "d1909") {
    days.d1909 = !days.d1909
  } else if (day == "d2009") {
    days.d2009 = !days.d2009
  } else if (day == "d2109") {
    days.d2109 = !days.d2109
  } else if (day == "d2209") {
    days.d2209 = !days.d2209
  } else if (day == "d2309") {
    days.d2309 = !days.d2309
  } else if (day == "d2409") {
    days.d2409 = !days.d2409
  } else if (day == "d2509") {
    days.d2509 = !days.d2509
  } else if (day == "d2609") {
    days.d2609 = !days.d2609
  } else if (day == "d2709") {
    days.d2709 = !days.d2709
  } else if (day == "d2809") {
    days.d2809 = !days.d2809
  } else if (day == "d2909") {
    days.d2909 = !days.d2909
  } else if (day == "d3009") {
    days.d3009 = !days.d3009
  }

  if (day == "d0110") {
    days.d0110 = !days.d0110
  } else if (day == "d0210") {
    days.d0210 = !days.d0210
  } else if (day == "d0310") {
    days.d0310 = !days.d0310
  } else if (day == "d0410") {
    days.d0410 = !days.d0410
  } else if (day == "d0510") {
    days.d0510 = !days.d0510
  } else if (day == "d0610") {
    days.d0610 = !days.d0610
  } else if (day == "d0710") {
    days.d0710 = !days.d0710
  } else if (day == "d0810") {
    days.d0810 = !days.d0810
  } else if (day == "d0910") {
    days.d0910 = !days.d0910
  } else if (day == "d1010") {
    days.d1010 = !days.d1010
  } else if (day == "d1110") {
    days.d1110 = !days.d1110
  } else if (day == "d1210") {
    days.d1210 = !days.d1210
  } else if (day == "d1310") {
    days.d1310 = !days.d1310
  } else if (day == "d1410") {
    days.d1410 = !days.d1410
  } else if (day == "d1510") {
    days.d1510 = !days.d1510
  } else if (day == "d1610") {
    days.d1610 = !days.d1610
  } else if (day == "d1710") {
    days.d1710 = !days.d1710
  } else if (day == "d1810") {
    days.d1810 = !days.d1810
  } else if (day == "d1910") {
    days.d1910 = !days.d1910
  } else if (day == "d2010") {
    days.d2010 = !days.d2010
  } else if (day == "d2110") {
    days.d2110 = !days.d2110
  } else if (day == "d2210") {
    days.d2210 = !days.d2210
  } else if (day == "d2310") {
    days.d2310 = !days.d2310
  } else if (day == "d2410") {
    days.d2410 = !days.d2410
  } else if (day == "d2510") {
    days.d2510 = !days.d2510
  } else if (day == "d2610") {
    days.d2610 = !days.d2610
  } else if (day == "d2710") {
    days.d2710 = !days.d2710
  } else if (day == "d2810") {
    days.d2810 = !days.d2810
  } else if (day == "d2910") {
    days.d2910 = !days.d2910
  } else if (day == "d3010") {
    days.d3010 = !days.d3010
  } else if (day == "d3110") {
    days.d3110 = !days.d3110
  }

  if (day == "d0111") {
    days.d0111 = !days.d0111
  } else if (day == "d0211") {
    days.d0211 = !days.d0211
  } else if (day == "d0311") {
    days.d0311 = !days.d0311
  } else if (day == "d0411") {
    days.d0411 = !days.d0411
  } else if (day == "d0511") {
    days.d0511 = !days.d0511
  } else if (day == "d0611") {
    days.d0611 = !days.d0611
  } else if (day == "d0711") {
    days.d0711 = !days.d0711
  } else if (day == "d0811") {
    days.d0811 = !days.d0811
  } else if (day == "d0911") {
    days.d0911 = !days.d0911
  } else if (day == "d1011") {
    days.d1011 = !days.d1011
  } else if (day == "d1111") {
    days.d1111 = !days.d1111
  } else if (day == "d1211") {
    days.d1211 = !days.d1211
  } else if (day == "d1311") {
    days.d1311 = !days.d1311
  } else if (day == "d1411") {
    days.d1411 = !days.d1411
  } else if (day == "d1511") {
    days.d1511 = !days.d1511
  } else if (day == "d1611") {
    days.d1611 = !days.d1611
  } else if (day == "d1711") {
    days.d1711 = !days.d1711
  } else if (day == "d1811") {
    days.d1811 = !days.d1811
  } else if (day == "d1911") {
    days.d1911 = !days.d1911
  } else if (day == "d2011") {
    days.d2011 = !days.d2011
  } else if (day == "d2111") {
    days.d2111 = !days.d2111
  } else if (day == "d2211") {
    days.d2211 = !days.d2211
  } else if (day == "d2311") {
    days.d2311 = !days.d2311
  } else if (day == "d2411") {
    days.d2411 = !days.d2411
  } else if (day == "d2511") {
    days.d2511 = !days.d2511
  } else if (day == "d2611") {
    days.d2611 = !days.d2611
  } else if (day == "d2711") {
    days.d2711 = !days.d2711
  } else if (day == "d2811") {
    days.d2811 = !days.d2811
  } else if (day == "d2911") {
    days.d2911 = !days.d2911
  } else if (day == "d3011") {
    days.d3011 = !days.d3011
  }

  if (day == "d0112") {
    days.d0112 = !days.d0112
  } else if (day == "d0212") {
    days.d0212 = !days.d0212
  } else if (day == "d0312") {
    days.d0312 = !days.d0312
  } else if (day == "d0412") {
    days.d0412 = !days.d0412
  } else if (day == "d0512") {
    days.d0512 = !days.d0512
  } else if (day == "d0612") {
    days.d0612 = !days.d0612
  } else if (day == "d0712") {
    days.d0712 = !days.d0712
  } else if (day == "d0812") {
    days.d0812 = !days.d0812
  } else if (day == "d0912") {
    days.d0912 = !days.d0912
  } else if (day == "d1012") {
    days.d1012 = !days.d1012
  } else if (day == "d1112") {
    days.d1112 = !days.d1112
  } else if (day == "d1212") {
    days.d1212 = !days.d1212
  } else if (day == "d1312") {
    days.d1312 = !days.d1312
  } else if (day == "d1412") {
    days.d1412 = !days.d1412
  } else if (day == "d1512") {
    days.d1512 = !days.d1512
  } else if (day == "d1612") {
    days.d1612 = !days.d1612
  } else if (day == "d1712") {
    days.d1712 = !days.d1712
  } else if (day == "d1812") {
    days.d1812 = !days.d1812
  } else if (day == "d1912") {
    days.d1912 = !days.d1912
  } else if (day == "d2012") {
    days.d2012 = !days.d2012
  } else if (day == "d2112") {
    days.d2112 = !days.d2112
  } else if (day == "d2212") {
    days.d2212 = !days.d2212
  } else if (day == "d2312") {
    days.d2312 = !days.d2312
  } else if (day == "d2412") {
    days.d2412 = !days.d2412
  } else if (day == "d2512") {
    days.d2512 = !days.d2512
  } else if (day == "d2612") {
    days.d2612 = !days.d2612
  } else if (day == "d2712") {
    days.d2712 = !days.d2712
  } else if (day == "d2812") {
    days.d2812 = !days.d2812
  } else if (day == "d2912") {
    days.d2912 = !days.d2912
  } else if (day == "d3012") {
    days.d3012 = !days.d3012
  } else if (day == "d3112") {
    days.d3112 = !days.d3112
  }
  //update in the localstorage the change made above
  localStorage.setItem("days", JSON.stringify(days))

  //update the variable days the change made
  days = JSON.parse(localStorage.getItem("days"))
  console.log(days)

  // console.log(days.day)
}

//on load, it will update the variable days with the localstorage info
days = JSON.parse(localStorage.getItem("days")) || days


//returns visually if someday is true or false
function janeiro() {
  days.d0101
    ? (document.getElementById("d0101").checked = true)
    : (document.getElementById("d0101").checked = false)

  days.d0201
    ? (document.getElementById("d0201").checked = true)
    : (document.getElementById("d0201").checked = false)

  days.d0301
    ? (document.getElementById("d0301").checked = true)
    : (document.getElementById("d0301").checked = false)

  days.d0401
    ? (document.getElementById("d0401").checked = true)
    : (document.getElementById("d0401").checked = false)

  days.d0501
    ? (document.getElementById("d0501").checked = true)
    : (document.getElementById("d0501").checked = false)

  days.d0601
    ? (document.getElementById("d0601").checked = true)
    : (document.getElementById("d0601").checked = false)

  days.d0701
    ? (document.getElementById("d0701").checked = true)
    : (document.getElementById("d0701").checked = false)

  days.d0801
    ? (document.getElementById("d0801").checked = true)
    : (document.getElementById("d0801").checked = false)

  days.d0901
    ? (document.getElementById("d0901").checked = true)
    : (document.getElementById("d0901").checked = false)

  days.d1001
    ? (document.getElementById("d1001").checked = true)
    : (document.getElementById("d1001").checked = false)

  days.d1101
    ? (document.getElementById("d1101").checked = true)
    : (document.getElementById("d1101").checked = false)

  days.d1201
    ? (document.getElementById("d1201").checked = true)
    : (document.getElementById("d1201").checked = false)

  days.d1301
    ? (document.getElementById("d1301").checked = true)
    : (document.getElementById("d1301").checked = false)

  days.d1401
    ? (document.getElementById("d1401").checked = true)
    : (document.getElementById("d1401").checked = false)

  days.d1501
    ? (document.getElementById("d1501").checked = true)
    : (document.getElementById("d1501").checked = false)

  days.d1601
    ? (document.getElementById("d1601").checked = true)
    : (document.getElementById("d1601").checked = false)

  days.d1701
    ? (document.getElementById("d1701").checked = true)
    : (document.getElementById("d1701").checked = false)

  days.d1801
    ? (document.getElementById("d1801").checked = true)
    : (document.getElementById("d1801").checked = false)

  days.d1901
    ? (document.getElementById("d1901").checked = true)
    : (document.getElementById("d1901").checked = false)

  days.d2001
    ? (document.getElementById("d2001").checked = true)
    : (document.getElementById("d2001").checked = false)

  days.d2101
    ? (document.getElementById("d2101").checked = true)
    : (document.getElementById("d2101").checked = false)

  days.d2201
    ? (document.getElementById("d2201").checked = true)
    : (document.getElementById("d2201").checked = false)

  days.d2301
    ? (document.getElementById("d2301").checked = true)
    : (document.getElementById("d2301").checked = false)

  days.d2401
    ? (document.getElementById("d2401").checked = true)
    : (document.getElementById("d2401").checked = false)

  days.d2501
    ? (document.getElementById("d2501").checked = true)
    : (document.getElementById("d2501").checked = false)

  days.d2601
    ? (document.getElementById("d2601").checked = true)
    : (document.getElementById("d2601").checked = false)

  days.d2701
    ? (document.getElementById("d2701").checked = true)
    : (document.getElementById("d2701").checked = false)

  days.d2801
    ? (document.getElementById("d2801").checked = true)
    : (document.getElementById("d2801").checked = false)

  days.d2901
    ? (document.getElementById("d2901").checked = true)
    : (document.getElementById("d2901").checked = false)

  days.d3001
    ? (document.getElementById("d3001").checked = true)
    : (document.getElementById("d3001").checked = false)

  days.d3101
    ? (document.getElementById("d3101").checked = true)
    : (document.getElementById("d3101").checked = false)
}

function fevereiro() {
  days.d0102
    ? (document.getElementById("d0102").checked = true)
    : (document.getElementById("d0102").checked = false)

  days.d0202
    ? (document.getElementById("d0202").checked = true)
    : (document.getElementById("d0202").checked = false)

  days.d0302
    ? (document.getElementById("d0302").checked = true)
    : (document.getElementById("d0302").checked = false)

  days.d0402
    ? (document.getElementById("d0402").checked = true)
    : (document.getElementById("d0402").checked = false)

  days.d0502
    ? (document.getElementById("d0502").checked = true)
    : (document.getElementById("d0502").checked = false)

  days.d0602
    ? (document.getElementById("d0602").checked = true)
    : (document.getElementById("d0602").checked = false)

  days.d0702
    ? (document.getElementById("d0702").checked = true)
    : (document.getElementById("d0702").checked = false)

  days.d0802
    ? (document.getElementById("d0802").checked = true)
    : (document.getElementById("d0802").checked = false)

  days.d0902
    ? (document.getElementById("d0902").checked = true)
    : (document.getElementById("d0902").checked = false)

  days.d1002
    ? (document.getElementById("d1002").checked = true)
    : (document.getElementById("d1002").checked = false)

  days.d1102
    ? (document.getElementById("d1102").checked = true)
    : (document.getElementById("d1102").checked = false)

  days.d1202
    ? (document.getElementById("d1202").checked = true)
    : (document.getElementById("d1202").checked = false)

  days.d1302
    ? (document.getElementById("d1302").checked = true)
    : (document.getElementById("d1302").checked = false)

  days.d1402
    ? (document.getElementById("d1402").checked = true)
    : (document.getElementById("d1402").checked = false)

  days.d1502
    ? (document.getElementById("d1502").checked = true)
    : (document.getElementById("d1502").checked = false)

  days.d1602
    ? (document.getElementById("d1602").checked = true)
    : (document.getElementById("d1602").checked = false)

  days.d1702
    ? (document.getElementById("d1702").checked = true)
    : (document.getElementById("d1702").checked = false)

  days.d1802
    ? (document.getElementById("d1802").checked = true)
    : (document.getElementById("d1802").checked = false)

  days.d1902
    ? (document.getElementById("d1902").checked = true)
    : (document.getElementById("d1902").checked = false)

  days.d2002
    ? (document.getElementById("d2002").checked = true)
    : (document.getElementById("d2002").checked = false)

  days.d2102
    ? (document.getElementById("d2102").checked = true)
    : (document.getElementById("d2102").checked = false)

  days.d2202
    ? (document.getElementById("d2202").checked = true)
    : (document.getElementById("d2202").checked = false)

  days.d2302
    ? (document.getElementById("d2302").checked = true)
    : (document.getElementById("d2302").checked = false)

  days.d2402
    ? (document.getElementById("d2402").checked = true)
    : (document.getElementById("d2402").checked = false)

  days.d2502
    ? (document.getElementById("d2502").checked = true)
    : (document.getElementById("d2502").checked = false)

  days.d2602
    ? (document.getElementById("d2602").checked = true)
    : (document.getElementById("d2602").checked = false)

  days.d2702
    ? (document.getElementById("d2702").checked = true)
    : (document.getElementById("d2702").checked = false)

  days.d2802
    ? (document.getElementById("d2802").checked = true)
    : (document.getElementById("d2802").checked = false)
}

function março() {
  days.d0103
    ? (document.getElementById("d0103").checked = true)
    : (document.getElementById("d0103").checked = false)

  days.d0203
    ? (document.getElementById("d0203").checked = true)
    : (document.getElementById("d0203").checked = false)

  days.d0303
    ? (document.getElementById("d0303").checked = true)
    : (document.getElementById("d0303").checked = false)

  days.d0403
    ? (document.getElementById("d0403").checked = true)
    : (document.getElementById("d0403").checked = false)

  days.d0503
    ? (document.getElementById("d0503").checked = true)
    : (document.getElementById("d0503").checked = false)

  days.d0603
    ? (document.getElementById("d0603").checked = true)
    : (document.getElementById("d0603").checked = false)

  days.d0703
    ? (document.getElementById("d0703").checked = true)
    : (document.getElementById("d0703").checked = false)

  days.d0803
    ? (document.getElementById("d0803").checked = true)
    : (document.getElementById("d0803").checked = false)

  days.d0903
    ? (document.getElementById("d0903").checked = true)
    : (document.getElementById("d0903").checked = false)

  days.d1003
    ? (document.getElementById("d1003").checked = true)
    : (document.getElementById("d1003").checked = false)

  days.d1103
    ? (document.getElementById("d1103").checked = true)
    : (document.getElementById("d1103").checked = false)

  days.d1203
    ? (document.getElementById("d1203").checked = true)
    : (document.getElementById("d1203").checked = false)

  days.d1303
    ? (document.getElementById("d1303").checked = true)
    : (document.getElementById("d1303").checked = false)

  days.d1403
    ? (document.getElementById("d1403").checked = true)
    : (document.getElementById("d1403").checked = false)

  days.d1503
    ? (document.getElementById("d1503").checked = true)
    : (document.getElementById("d1503").checked = false)

  days.d1603
    ? (document.getElementById("d1603").checked = true)
    : (document.getElementById("d1603").checked = false)

  days.d1703
    ? (document.getElementById("d1703").checked = true)
    : (document.getElementById("d1703").checked = false)

  days.d1803
    ? (document.getElementById("d1803").checked = true)
    : (document.getElementById("d1803").checked = false)

  days.d1903
    ? (document.getElementById("d1903").checked = true)
    : (document.getElementById("d1903").checked = false)

  days.d2003
    ? (document.getElementById("d2003").checked = true)
    : (document.getElementById("d2003").checked = false)

  days.d2103
    ? (document.getElementById("d2103").checked = true)
    : (document.getElementById("d2103").checked = false)

  days.d2203
    ? (document.getElementById("d2203").checked = true)
    : (document.getElementById("d2203").checked = false)

  days.d2303
    ? (document.getElementById("d2303").checked = true)
    : (document.getElementById("d2303").checked = false)

  days.d2403
    ? (document.getElementById("d2403").checked = true)
    : (document.getElementById("d2403").checked = false)

  days.d2503
    ? (document.getElementById("d2503").checked = true)
    : (document.getElementById("d2503").checked = false)

  days.d2603
    ? (document.getElementById("d2603").checked = true)
    : (document.getElementById("d2603").checked = false)

  days.d2703
    ? (document.getElementById("d2703").checked = true)
    : (document.getElementById("d2703").checked = false)

  days.d2803
    ? (document.getElementById("d2803").checked = true)
    : (document.getElementById("d2803").checked = false)

  days.d2903
    ? (document.getElementById("d2903").checked = true)
    : (document.getElementById("d2903").checked = false)

  days.d3003
    ? (document.getElementById("d3003").checked = true)
    : (document.getElementById("d3003").checked = false)

  days.d3103
    ? (document.getElementById("d3103").checked = true)
    : (document.getElementById("d3103").checked = false)
}

function abril() {
  days.d0104
    ? (document.getElementById("d0104").checked = true)
    : (document.getElementById("d0104").checked = false)

  days.d0204
    ? (document.getElementById("d0204").checked = true)
    : (document.getElementById("d0204").checked = false)

  days.d0304
    ? (document.getElementById("d0304").checked = true)
    : (document.getElementById("d0304").checked = false)

  days.d0404
    ? (document.getElementById("d0404").checked = true)
    : (document.getElementById("d0404").checked = false)

  days.d0504
    ? (document.getElementById("d0504").checked = true)
    : (document.getElementById("d0504").checked = false)

  days.d0604
    ? (document.getElementById("d0604").checked = true)
    : (document.getElementById("d0604").checked = false)

  days.d0704
    ? (document.getElementById("d0704").checked = true)
    : (document.getElementById("d0704").checked = false)

  days.d0804
    ? (document.getElementById("d0804").checked = true)
    : (document.getElementById("d0804").checked = false)

  days.d0904
    ? (document.getElementById("d0904").checked = true)
    : (document.getElementById("d0904").checked = false)

  days.d1004
    ? (document.getElementById("d1004").checked = true)
    : (document.getElementById("d1004").checked = false)

  days.d1104
    ? (document.getElementById("d1104").checked = true)
    : (document.getElementById("d1104").checked = false)

  days.d1204
    ? (document.getElementById("d1204").checked = true)
    : (document.getElementById("d1204").checked = false)

  days.d1304
    ? (document.getElementById("d1304").checked = true)
    : (document.getElementById("d1304").checked = false)

  days.d1404
    ? (document.getElementById("d1404").checked = true)
    : (document.getElementById("d1404").checked = false)

  days.d1504
    ? (document.getElementById("d1504").checked = true)
    : (document.getElementById("d1504").checked = false)

  days.d1604
    ? (document.getElementById("d1604").checked = true)
    : (document.getElementById("d1604").checked = false)

  days.d1704
    ? (document.getElementById("d1704").checked = true)
    : (document.getElementById("d1704").checked = false)

  days.d1804
    ? (document.getElementById("d1804").checked = true)
    : (document.getElementById("d1804").checked = false)

  days.d1904
    ? (document.getElementById("d1904").checked = true)
    : (document.getElementById("d1904").checked = false)

  days.d2004
    ? (document.getElementById("d2004").checked = true)
    : (document.getElementById("d2004").checked = false)

  days.d2104
    ? (document.getElementById("d2104").checked = true)
    : (document.getElementById("d2104").checked = false)

  days.d2204
    ? (document.getElementById("d2204").checked = true)
    : (document.getElementById("d2204").checked = false)

  days.d2304
    ? (document.getElementById("d2304").checked = true)
    : (document.getElementById("d2304").checked = false)

  days.d2404
    ? (document.getElementById("d2404").checked = true)
    : (document.getElementById("d2404").checked = false)

  days.d2504
    ? (document.getElementById("d2504").checked = true)
    : (document.getElementById("d2504").checked = false)

  days.d2604
    ? (document.getElementById("d2604").checked = true)
    : (document.getElementById("d2604").checked = false)

  days.d2704
    ? (document.getElementById("d2704").checked = true)
    : (document.getElementById("d2704").checked = false)

  days.d2804
    ? (document.getElementById("d2804").checked = true)
    : (document.getElementById("d2804").checked = false)

  days.d2904
    ? (document.getElementById("d2904").checked = true)
    : (document.getElementById("d2904").checked = false)

  days.d3004
    ? (document.getElementById("d3004").checked = true)
    : (document.getElementById("d3004").checked = false)
}

function maio() {
  days.d0105
    ? (document.getElementById("d0105").checked = true)
    : (document.getElementById("d0105").checked = false)

  days.d0205
    ? (document.getElementById("d0205").checked = true)
    : (document.getElementById("d0205").checked = false)

  days.d0305
    ? (document.getElementById("d0305").checked = true)
    : (document.getElementById("d0305").checked = false)

  days.d0405
    ? (document.getElementById("d0405").checked = true)
    : (document.getElementById("d0405").checked = false)

  days.d0505
    ? (document.getElementById("d0505").checked = true)
    : (document.getElementById("d0505").checked = false)

  days.d0605
    ? (document.getElementById("d0605").checked = true)
    : (document.getElementById("d0605").checked = false)

  days.d0705
    ? (document.getElementById("d0705").checked = true)
    : (document.getElementById("d0705").checked = false)

  days.d0805
    ? (document.getElementById("d0805").checked = true)
    : (document.getElementById("d0805").checked = false)

  days.d0905
    ? (document.getElementById("d0905").checked = true)
    : (document.getElementById("d0905").checked = false)

  days.d1005
    ? (document.getElementById("d1005").checked = true)
    : (document.getElementById("d1005").checked = false)

  days.d1105
    ? (document.getElementById("d1105").checked = true)
    : (document.getElementById("d1105").checked = false)

  days.d1205
    ? (document.getElementById("d1205").checked = true)
    : (document.getElementById("d1205").checked = false)

  days.d1305
    ? (document.getElementById("d1305").checked = true)
    : (document.getElementById("d1305").checked = false)

  days.d1405
    ? (document.getElementById("d1405").checked = true)
    : (document.getElementById("d1405").checked = false)

  days.d1505
    ? (document.getElementById("d1505").checked = true)
    : (document.getElementById("d1505").checked = false)

  days.d1605
    ? (document.getElementById("d1605").checked = true)
    : (document.getElementById("d1605").checked = false)

  days.d1705
    ? (document.getElementById("d1705").checked = true)
    : (document.getElementById("d1705").checked = false)

  days.d1805
    ? (document.getElementById("d1805").checked = true)
    : (document.getElementById("d1805").checked = false)

  days.d1905
    ? (document.getElementById("d1905").checked = true)
    : (document.getElementById("d1905").checked = false)

  days.d2005
    ? (document.getElementById("d2005").checked = true)
    : (document.getElementById("d2005").checked = false)

  days.d2105
    ? (document.getElementById("d2105").checked = true)
    : (document.getElementById("d2105").checked = false)

  days.d2205
    ? (document.getElementById("d2205").checked = true)
    : (document.getElementById("d2205").checked = false)

  days.d2305
    ? (document.getElementById("d2305").checked = true)
    : (document.getElementById("d2305").checked = false)

  days.d2405
    ? (document.getElementById("d2405").checked = true)
    : (document.getElementById("d2405").checked = false)

  days.d2505
    ? (document.getElementById("d2505").checked = true)
    : (document.getElementById("d2505").checked = false)

  days.d2605
    ? (document.getElementById("d2605").checked = true)
    : (document.getElementById("d2605").checked = false)

  days.d2705
    ? (document.getElementById("d2705").checked = true)
    : (document.getElementById("d2705").checked = false)

  days.d2805
    ? (document.getElementById("d2805").checked = true)
    : (document.getElementById("d2805").checked = false)

  days.d2905
    ? (document.getElementById("d2905").checked = true)
    : (document.getElementById("d2905").checked = false)

  days.d3005
    ? (document.getElementById("d3005").checked = true)
    : (document.getElementById("d3005").checked = false)

  days.d3105
    ? (document.getElementById("d3105").checked = true)
    : (document.getElementById("d3105").checked = false)
}

function junho() {
  days.d0106
    ? (document.getElementById("d0106").checked = true)
    : (document.getElementById("d0106").checked = false)

  days.d0206
    ? (document.getElementById("d0206").checked = true)
    : (document.getElementById("d0206").checked = false)

  days.d0306
    ? (document.getElementById("d0306").checked = true)
    : (document.getElementById("d0306").checked = false)

  days.d0406
    ? (document.getElementById("d0406").checked = true)
    : (document.getElementById("d0406").checked = false)

  days.d0506
    ? (document.getElementById("d0506").checked = true)
    : (document.getElementById("d0506").checked = false)

  days.d0606
    ? (document.getElementById("d0606").checked = true)
    : (document.getElementById("d0606").checked = false)

  days.d0706
    ? (document.getElementById("d0706").checked = true)
    : (document.getElementById("d0706").checked = false)

  days.d0806
    ? (document.getElementById("d0806").checked = true)
    : (document.getElementById("d0806").checked = false)

  days.d0906
    ? (document.getElementById("d0906").checked = true)
    : (document.getElementById("d0906").checked = false)

  days.d1006
    ? (document.getElementById("d1006").checked = true)
    : (document.getElementById("d1006").checked = false)

  days.d1106
    ? (document.getElementById("d1106").checked = true)
    : (document.getElementById("d1106").checked = false)

  days.d1206
    ? (document.getElementById("d1206").checked = true)
    : (document.getElementById("d1206").checked = false)

  days.d1306
    ? (document.getElementById("d1306").checked = true)
    : (document.getElementById("d1306").checked = false)

  days.d1406
    ? (document.getElementById("d1406").checked = true)
    : (document.getElementById("d1406").checked = false)

  days.d1506
    ? (document.getElementById("d1506").checked = true)
    : (document.getElementById("d1506").checked = false)

  days.d1606
    ? (document.getElementById("d1606").checked = true)
    : (document.getElementById("d1606").checked = false)

  days.d1706
    ? (document.getElementById("d1706").checked = true)
    : (document.getElementById("d1706").checked = false)

  days.d1806
    ? (document.getElementById("d1806").checked = true)
    : (document.getElementById("d1806").checked = false)

  days.d1906
    ? (document.getElementById("d1906").checked = true)
    : (document.getElementById("d1906").checked = false)

  days.d2006
    ? (document.getElementById("d2006").checked = true)
    : (document.getElementById("d2006").checked = false)

  days.d2106
    ? (document.getElementById("d2106").checked = true)
    : (document.getElementById("d2106").checked = false)

  days.d2206
    ? (document.getElementById("d2206").checked = true)
    : (document.getElementById("d2206").checked = false)

  days.d2306
    ? (document.getElementById("d2306").checked = true)
    : (document.getElementById("d2306").checked = false)

  days.d2406
    ? (document.getElementById("d2406").checked = true)
    : (document.getElementById("d2406").checked = false)

  days.d2506
    ? (document.getElementById("d2506").checked = true)
    : (document.getElementById("d2506").checked = false)

  days.d2606
    ? (document.getElementById("d2606").checked = true)
    : (document.getElementById("d2606").checked = false)

  days.d2706
    ? (document.getElementById("d2706").checked = true)
    : (document.getElementById("d2706").checked = false)

  days.d2806
    ? (document.getElementById("d2806").checked = true)
    : (document.getElementById("d2806").checked = false)

  days.d2906
    ? (document.getElementById("d2906").checked = true)
    : (document.getElementById("d2906").checked = false)

  days.d3006
    ? (document.getElementById("d3006").checked = true)
    : (document.getElementById("d3006").checked = false)
}

function julho() {
  days.d0107
    ? (document.getElementById("d0107").checked = true)
    : (document.getElementById("d0107").checked = false)

  days.d0207
    ? (document.getElementById("d0207").checked = true)
    : (document.getElementById("d0207").checked = false)

  days.d0307
    ? (document.getElementById("d0307").checked = true)
    : (document.getElementById("d0307").checked = false)

  days.d0407
    ? (document.getElementById("d0407").checked = true)
    : (document.getElementById("d0407").checked = false)

  days.d0507
    ? (document.getElementById("d0507").checked = true)
    : (document.getElementById("d0507").checked = false)

  days.d0607
    ? (document.getElementById("d0607").checked = true)
    : (document.getElementById("d0607").checked = false)

  days.d0707
    ? (document.getElementById("d0707").checked = true)
    : (document.getElementById("d0707").checked = false)

  days.d0807
    ? (document.getElementById("d0807").checked = true)
    : (document.getElementById("d0807").checked = false)

  days.d0907
    ? (document.getElementById("d0907").checked = true)
    : (document.getElementById("d0907").checked = false)

  days.d1007
    ? (document.getElementById("d1007").checked = true)
    : (document.getElementById("d1007").checked = false)

  days.d1107
    ? (document.getElementById("d1107").checked = true)
    : (document.getElementById("d1107").checked = false)

  days.d1207
    ? (document.getElementById("d1207").checked = true)
    : (document.getElementById("d1207").checked = false)

  days.d1307
    ? (document.getElementById("d1307").checked = true)
    : (document.getElementById("d1307").checked = false)

  days.d1407
    ? (document.getElementById("d1407").checked = true)
    : (document.getElementById("d1407").checked = false)

  days.d1507
    ? (document.getElementById("d1507").checked = true)
    : (document.getElementById("d1507").checked = false)

  days.d1607
    ? (document.getElementById("d1607").checked = true)
    : (document.getElementById("d1607").checked = false)

  days.d1707
    ? (document.getElementById("d1707").checked = true)
    : (document.getElementById("d1707").checked = false)

  days.d1807
    ? (document.getElementById("d1807").checked = true)
    : (document.getElementById("d1807").checked = false)

  days.d1907
    ? (document.getElementById("d1907").checked = true)
    : (document.getElementById("d1907").checked = false)

  days.d2007
    ? (document.getElementById("d2007").checked = true)
    : (document.getElementById("d2007").checked = false)

  days.d2107
    ? (document.getElementById("d2107").checked = true)
    : (document.getElementById("d2107").checked = false)

  days.d2207
    ? (document.getElementById("d2207").checked = true)
    : (document.getElementById("d2207").checked = false)

  days.d2307
    ? (document.getElementById("d2307").checked = true)
    : (document.getElementById("d2307").checked = false)

  days.d2407
    ? (document.getElementById("d2407").checked = true)
    : (document.getElementById("d2407").checked = false)

  days.d2507
    ? (document.getElementById("d2507").checked = true)
    : (document.getElementById("d2507").checked = false)

  days.d2607
    ? (document.getElementById("d2607").checked = true)
    : (document.getElementById("d2607").checked = false)

  days.d2707
    ? (document.getElementById("d2707").checked = true)
    : (document.getElementById("d2707").checked = false)

  days.d2807
    ? (document.getElementById("d2807").checked = true)
    : (document.getElementById("d2807").checked = false)

  days.d2907
    ? (document.getElementById("d2907").checked = true)
    : (document.getElementById("d2907").checked = false)

  days.d3007
    ? (document.getElementById("d3007").checked = true)
    : (document.getElementById("d3007").checked = false)

  days.d3107
    ? (document.getElementById("d3107").checked = true)
    : (document.getElementById("d3107").checked = false)
}

function agosto() {
  days.d0108
    ? (document.getElementById("d0108").checked = true)
    : (document.getElementById("d0108").checked = false)

  days.d0208
    ? (document.getElementById("d0208").checked = true)
    : (document.getElementById("d0208").checked = false)

  days.d0308
    ? (document.getElementById("d0308").checked = true)
    : (document.getElementById("d0308").checked = false)

  days.d0408
    ? (document.getElementById("d0408").checked = true)
    : (document.getElementById("d0408").checked = false)

  days.d0508
    ? (document.getElementById("d0508").checked = true)
    : (document.getElementById("d0508").checked = false)

  days.d0608
    ? (document.getElementById("d0608").checked = true)
    : (document.getElementById("d0608").checked = false)

  days.d0708
    ? (document.getElementById("d0708").checked = true)
    : (document.getElementById("d0708").checked = false)

  days.d0808
    ? (document.getElementById("d0808").checked = true)
    : (document.getElementById("d0808").checked = false)

  days.d0908
    ? (document.getElementById("d0908").checked = true)
    : (document.getElementById("d0908").checked = false)

  days.d1008
    ? (document.getElementById("d1008").checked = true)
    : (document.getElementById("d1008").checked = false)

  days.d1108
    ? (document.getElementById("d1108").checked = true)
    : (document.getElementById("d1108").checked = false)

  days.d1208
    ? (document.getElementById("d1208").checked = true)
    : (document.getElementById("d1208").checked = false)

  days.d1308
    ? (document.getElementById("d1308").checked = true)
    : (document.getElementById("d1308").checked = false)

  days.d1408
    ? (document.getElementById("d1408").checked = true)
    : (document.getElementById("d1408").checked = false)

  days.d1508
    ? (document.getElementById("d1508").checked = true)
    : (document.getElementById("d1508").checked = false)

  days.d1608
    ? (document.getElementById("d1608").checked = true)
    : (document.getElementById("d1608").checked = false)

  days.d1708
    ? (document.getElementById("d1708").checked = true)
    : (document.getElementById("d1708").checked = false)

  days.d1808
    ? (document.getElementById("d1808").checked = true)
    : (document.getElementById("d1808").checked = false)

  days.d1908
    ? (document.getElementById("d1908").checked = true)
    : (document.getElementById("d1908").checked = false)

  days.d2008
    ? (document.getElementById("d2008").checked = true)
    : (document.getElementById("d2008").checked = false)

  days.d2108
    ? (document.getElementById("d2108").checked = true)
    : (document.getElementById("d2108").checked = false)

  days.d2208
    ? (document.getElementById("d2208").checked = true)
    : (document.getElementById("d2208").checked = false)

  days.d2308
    ? (document.getElementById("d2308").checked = true)
    : (document.getElementById("d2308").checked = false)

  days.d2408
    ? (document.getElementById("d2408").checked = true)
    : (document.getElementById("d2408").checked = false)

  days.d2508
    ? (document.getElementById("d2508").checked = true)
    : (document.getElementById("d2508").checked = false)

  days.d2608
    ? (document.getElementById("d2608").checked = true)
    : (document.getElementById("d2608").checked = false)

  days.d2708
    ? (document.getElementById("d2708").checked = true)
    : (document.getElementById("d2708").checked = false)

  days.d2808
    ? (document.getElementById("d2808").checked = true)
    : (document.getElementById("d2808").checked = false)

  days.d2908
    ? (document.getElementById("d2908").checked = true)
    : (document.getElementById("d2908").checked = false)

  days.d3008
    ? (document.getElementById("d3008").checked = true)
    : (document.getElementById("d3008").checked = false)

  days.d3108
    ? (document.getElementById("d3108").checked = true)
    : (document.getElementById("d3108").checked = false)
}

function setembro() {
  days.d0109
    ? (document.getElementById("d0109").checked = true)
    : (document.getElementById("d0109").checked = false)

  days.d0209
    ? (document.getElementById("d0209").checked = true)
    : (document.getElementById("d0209").checked = false)

  days.d0309
    ? (document.getElementById("d0309").checked = true)
    : (document.getElementById("d0309").checked = false)

  days.d0409
    ? (document.getElementById("d0409").checked = true)
    : (document.getElementById("d0409").checked = false)

  days.d0509
    ? (document.getElementById("d0509").checked = true)
    : (document.getElementById("d0509").checked = false)

  days.d0609
    ? (document.getElementById("d0609").checked = true)
    : (document.getElementById("d0609").checked = false)

  days.d0709
    ? (document.getElementById("d0709").checked = true)
    : (document.getElementById("d0709").checked = false)

  days.d0809
    ? (document.getElementById("d0809").checked = true)
    : (document.getElementById("d0809").checked = false)

  days.d0909
    ? (document.getElementById("d0909").checked = true)
    : (document.getElementById("d0909").checked = false)

  days.d1009
    ? (document.getElementById("d1009").checked = true)
    : (document.getElementById("d1009").checked = false)

  days.d1109
    ? (document.getElementById("d1109").checked = true)
    : (document.getElementById("d1109").checked = false)

  days.d1209
    ? (document.getElementById("d1209").checked = true)
    : (document.getElementById("d1209").checked = false)

  days.d1309
    ? (document.getElementById("d1309").checked = true)
    : (document.getElementById("d1309").checked = false)

  days.d1409
    ? (document.getElementById("d1409").checked = true)
    : (document.getElementById("d1409").checked = false)

  days.d1509
    ? (document.getElementById("d1509").checked = true)
    : (document.getElementById("d1509").checked = false)

  days.d1609
    ? (document.getElementById("d1609").checked = true)
    : (document.getElementById("d1609").checked = false)

  days.d1709
    ? (document.getElementById("d1709").checked = true)
    : (document.getElementById("d1709").checked = false)

  days.d1809
    ? (document.getElementById("d1809").checked = true)
    : (document.getElementById("d1809").checked = false)

  days.d1909
    ? (document.getElementById("d1909").checked = true)
    : (document.getElementById("d1909").checked = false)

  days.d2009
    ? (document.getElementById("d2009").checked = true)
    : (document.getElementById("d2009").checked = false)

  days.d2109
    ? (document.getElementById("d2109").checked = true)
    : (document.getElementById("d2109").checked = false)

  days.d2209
    ? (document.getElementById("d2209").checked = true)
    : (document.getElementById("d2209").checked = false)

  days.d2309
    ? (document.getElementById("d2309").checked = true)
    : (document.getElementById("d2309").checked = false)

  days.d2409
    ? (document.getElementById("d2409").checked = true)
    : (document.getElementById("d2409").checked = false)

  days.d2509
    ? (document.getElementById("d2509").checked = true)
    : (document.getElementById("d2509").checked = false)

  days.d2609
    ? (document.getElementById("d2609").checked = true)
    : (document.getElementById("d2609").checked = false)

  days.d2709
    ? (document.getElementById("d2709").checked = true)
    : (document.getElementById("d2709").checked = false)

  days.d2809
    ? (document.getElementById("d2809").checked = true)
    : (document.getElementById("d2809").checked = false)

  days.d2909
    ? (document.getElementById("d2909").checked = true)
    : (document.getElementById("d2909").checked = false)

  days.d3009
    ? (document.getElementById("d3009").checked = true)
    : (document.getElementById("d3009").checked = false)
}

function outubro() {
  days.d0110
    ? (document.getElementById("d0110").checked = true)
    : (document.getElementById("d0110").checked = false)

  days.d0210
    ? (document.getElementById("d0210").checked = true)
    : (document.getElementById("d0210").checked = false)

  days.d0310
    ? (document.getElementById("d0310").checked = true)
    : (document.getElementById("d0310").checked = false)

  days.d0410
    ? (document.getElementById("d0410").checked = true)
    : (document.getElementById("d0410").checked = false)

  days.d0510
    ? (document.getElementById("d0510").checked = true)
    : (document.getElementById("d0510").checked = false)

  days.d0610
    ? (document.getElementById("d0610").checked = true)
    : (document.getElementById("d0610").checked = false)

  days.d0710
    ? (document.getElementById("d0710").checked = true)
    : (document.getElementById("d0710").checked = false)

  days.d0810
    ? (document.getElementById("d0810").checked = true)
    : (document.getElementById("d0810").checked = false)

  days.d0910
    ? (document.getElementById("d0910").checked = true)
    : (document.getElementById("d0910").checked = false)

  days.d1010
    ? (document.getElementById("d1010").checked = true)
    : (document.getElementById("d1010").checked = false)

  days.d1110
    ? (document.getElementById("d1110").checked = true)
    : (document.getElementById("d1110").checked = false)

  days.d1210
    ? (document.getElementById("d1210").checked = true)
    : (document.getElementById("d1210").checked = false)

  days.d1310
    ? (document.getElementById("d1310").checked = true)
    : (document.getElementById("d1310").checked = false)

  days.d1410
    ? (document.getElementById("d1410").checked = true)
    : (document.getElementById("d1410").checked = false)

  days.d1510
    ? (document.getElementById("d1510").checked = true)
    : (document.getElementById("d1510").checked = false)

  days.d1610
    ? (document.getElementById("d1610").checked = true)
    : (document.getElementById("d1610").checked = false)

  days.d1710
    ? (document.getElementById("d1710").checked = true)
    : (document.getElementById("d1710").checked = false)

  days.d1810
    ? (document.getElementById("d1810").checked = true)
    : (document.getElementById("d1810").checked = false)

  days.d1910
    ? (document.getElementById("d1910").checked = true)
    : (document.getElementById("d1910").checked = false)

  days.d2010
    ? (document.getElementById("d2010").checked = true)
    : (document.getElementById("d2010").checked = false)

  days.d2110
    ? (document.getElementById("d2110").checked = true)
    : (document.getElementById("d2110").checked = false)

  days.d2210
    ? (document.getElementById("d2210").checked = true)
    : (document.getElementById("d2210").checked = false)

  days.d2310
    ? (document.getElementById("d2310").checked = true)
    : (document.getElementById("d2310").checked = false)

  days.d2410
    ? (document.getElementById("d2410").checked = true)
    : (document.getElementById("d2410").checked = false)

  days.d2510
    ? (document.getElementById("d2510").checked = true)
    : (document.getElementById("d2510").checked = false)

  days.d2610
    ? (document.getElementById("d2610").checked = true)
    : (document.getElementById("d2610").checked = false)

  days.d2710
    ? (document.getElementById("d2710").checked = true)
    : (document.getElementById("d2710").checked = false)

  days.d2810
    ? (document.getElementById("d2810").checked = true)
    : (document.getElementById("d2810").checked = false)

  days.d2910
    ? (document.getElementById("d2910").checked = true)
    : (document.getElementById("d2910").checked = false)

  days.d3010
    ? (document.getElementById("d3010").checked = true)
    : (document.getElementById("d3010").checked = false)

  days.d3110
    ? (document.getElementById("d3110").checked = true)
    : (document.getElementById("d3110").checked = false)
}

function novembro() {
  days.d0111
    ? (document.getElementById("d0111").checked = true)
    : (document.getElementById("d0111").checked = false)

  days.d0211
    ? (document.getElementById("d0211").checked = true)
    : (document.getElementById("d0211").checked = false)

  days.d0311
    ? (document.getElementById("d0311").checked = true)
    : (document.getElementById("d0311").checked = false)

  days.d0411
    ? (document.getElementById("d0411").checked = true)
    : (document.getElementById("d0411").checked = false)

  days.d0511
    ? (document.getElementById("d0511").checked = true)
    : (document.getElementById("d0511").checked = false)

  days.d0611
    ? (document.getElementById("d0611").checked = true)
    : (document.getElementById("d0611").checked = false)

  days.d0711
    ? (document.getElementById("d0711").checked = true)
    : (document.getElementById("d0711").checked = false)

  days.d0811
    ? (document.getElementById("d0811").checked = true)
    : (document.getElementById("d0811").checked = false)

  days.d0911
    ? (document.getElementById("d0911").checked = true)
    : (document.getElementById("d0911").checked = false)

  days.d1011
    ? (document.getElementById("d1011").checked = true)
    : (document.getElementById("d1011").checked = false)

  days.d1111
    ? (document.getElementById("d1111").checked = true)
    : (document.getElementById("d1111").checked = false)

  days.d1211
    ? (document.getElementById("d1211").checked = true)
    : (document.getElementById("d1211").checked = false)

  days.d1311
    ? (document.getElementById("d1311").checked = true)
    : (document.getElementById("d1311").checked = false)

  days.d1411
    ? (document.getElementById("d1411").checked = true)
    : (document.getElementById("d1411").checked = false)

  days.d1511
    ? (document.getElementById("d1511").checked = true)
    : (document.getElementById("d1511").checked = false)

  days.d1611
    ? (document.getElementById("d1611").checked = true)
    : (document.getElementById("d1611").checked = false)

  days.d1711
    ? (document.getElementById("d1711").checked = true)
    : (document.getElementById("d1711").checked = false)

  days.d1811
    ? (document.getElementById("d1811").checked = true)
    : (document.getElementById("d1811").checked = false)

  days.d1911
    ? (document.getElementById("d1911").checked = true)
    : (document.getElementById("d1911").checked = false)

  days.d2011
    ? (document.getElementById("d2011").checked = true)
    : (document.getElementById("d2011").checked = false)

  days.d2111
    ? (document.getElementById("d2111").checked = true)
    : (document.getElementById("d2111").checked = false)

  days.d2211
    ? (document.getElementById("d2211").checked = true)
    : (document.getElementById("d2211").checked = false)

  days.d2311
    ? (document.getElementById("d2311").checked = true)
    : (document.getElementById("d2311").checked = false)

  days.d2411
    ? (document.getElementById("d2411").checked = true)
    : (document.getElementById("d2411").checked = false)

  days.d2511
    ? (document.getElementById("d2511").checked = true)
    : (document.getElementById("d2511").checked = false)

  days.d2611
    ? (document.getElementById("d2611").checked = true)
    : (document.getElementById("d2611").checked = false)

  days.d2711
    ? (document.getElementById("d2711").checked = true)
    : (document.getElementById("d2711").checked = false)

  days.d2811
    ? (document.getElementById("d2811").checked = true)
    : (document.getElementById("d2811").checked = false)

  days.d2911
    ? (document.getElementById("d2911").checked = true)
    : (document.getElementById("d2911").checked = false)

  days.d3011
    ? (document.getElementById("d3011").checked = true)
    : (document.getElementById("d3011").checked = false)
}

function dezembro() {
  days.d0112
    ? (document.getElementById("d0112").checked = true)
    : (document.getElementById("d0112").checked = false)

  days.d0212
    ? (document.getElementById("d0212").checked = true)
    : (document.getElementById("d0212").checked = false)

  days.d0312
    ? (document.getElementById("d0312").checked = true)
    : (document.getElementById("d0312").checked = false)

  days.d0412
    ? (document.getElementById("d0412").checked = true)
    : (document.getElementById("d0412").checked = false)

  days.d0512
    ? (document.getElementById("d0512").checked = true)
    : (document.getElementById("d0512").checked = false)

  days.d0612
    ? (document.getElementById("d0612").checked = true)
    : (document.getElementById("d0612").checked = false)

  days.d0712
    ? (document.getElementById("d0712").checked = true)
    : (document.getElementById("d0712").checked = false)

  days.d0812
    ? (document.getElementById("d0812").checked = true)
    : (document.getElementById("d0812").checked = false)

  days.d0912
    ? (document.getElementById("d0912").checked = true)
    : (document.getElementById("d0912").checked = false)

  days.d1012
    ? (document.getElementById("d1012").checked = true)
    : (document.getElementById("d1012").checked = false)

  days.d1112
    ? (document.getElementById("d1112").checked = true)
    : (document.getElementById("d1112").checked = false)

  days.d1212
    ? (document.getElementById("d1212").checked = true)
    : (document.getElementById("d1212").checked = false)

  days.d1312
    ? (document.getElementById("d1312").checked = true)
    : (document.getElementById("d1312").checked = false)

  days.d1412
    ? (document.getElementById("d1412").checked = true)
    : (document.getElementById("d1412").checked = false)

  days.d1512
    ? (document.getElementById("d1512").checked = true)
    : (document.getElementById("d1512").checked = false)

  days.d1612
    ? (document.getElementById("d1612").checked = true)
    : (document.getElementById("d1612").checked = false)

  days.d1712
    ? (document.getElementById("d1712").checked = true)
    : (document.getElementById("d1712").checked = false)

  days.d1812
    ? (document.getElementById("d1812").checked = true)
    : (document.getElementById("d1812").checked = false)

  days.d1912
    ? (document.getElementById("d1912").checked = true)
    : (document.getElementById("d1912").checked = false)

  days.d2012
    ? (document.getElementById("d2012").checked = true)
    : (document.getElementById("d2012").checked = false)

  days.d2112
    ? (document.getElementById("d2112").checked = true)
    : (document.getElementById("d2112").checked = false)

  days.d2212
    ? (document.getElementById("d2212").checked = true)
    : (document.getElementById("d2212").checked = false)

  days.d2312
    ? (document.getElementById("d2312").checked = true)
    : (document.getElementById("d2312").checked = false)

  days.d2412
    ? (document.getElementById("d2412").checked = true)
    : (document.getElementById("d2412").checked = false)

  days.d2512
    ? (document.getElementById("d2512").checked = true)
    : (document.getElementById("d2512").checked = false)

  days.d2612
    ? (document.getElementById("d2612").checked = true)
    : (document.getElementById("d2612").checked = false)

  days.d2712
    ? (document.getElementById("d2712").checked = true)
    : (document.getElementById("d2712").checked = false)

  days.d2812
    ? (document.getElementById("d2812").checked = true)
    : (document.getElementById("d2812").checked = false)

  days.d2912
    ? (document.getElementById("d2912").checked = true)
    : (document.getElementById("d2912").checked = false)

  days.d3012
    ? (document.getElementById("d3012").checked = true)
    : (document.getElementById("d3012").checked = false)

  days.d3112
    ? (document.getElementById("d3112").checked = true)
    : (document.getElementById("d3112").checked = false)
}

janeiro()
fevereiro()
março()
abril()
maio()
junho()
julho()
agosto()
setembro()
outubro()
novembro()
dezembro()

//localStarage usage
var _lsTotal = 0,
  _xLen,
  _x
for (_x in localStorage) {
  if (!localStorage.hasOwnProperty(_x)) {
    continue
  }
  _xLen = (localStorage[_x].length + _x.length) * 2
  _lsTotal += _xLen
  console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
}
console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB")

/* rascunho p melhorar o código


// for (var i = 0; i < days.length; i++) {
  //   if (day == Object.keys(days)[i]) {
  //     days[i] = !days[i]
  //   }
  // }
  // console.log(days)





// function d0201() {
//   //if it's true, it becomes false and vice versa
//   days.d0201 = !days.d0201

//   //update in the localstorage the change made above
//   localStorage.setItem("days", JSON.stringify(days))

//   //update the variable days the change made
//   days = JSON.parse(localStorage.getItem("days"))

//   console.log(days)
// }




// function update(id) {
//   console.log(typeof id)
//   days.id
//     ? (document.getElementById(id).checked = true)
//     : (document.getElementById(id).checked = false)
// }
// update("d0101")

*/