/** * 测试数据 * @type {arry} *//* 2021-03-04 20:19:30*/
var ishb = false;
/* 基金或股票信息*/
var fS_name = '中欧医疗健康混合A';
var fS_code = '003095';
/* 原费率*/
var fund_sourceRate = '1.50';
/* 现费率*/
var fund_Rate = '0.15';
/* 最小申购金额*/
var fund_minsg = '100';
/* 基金持仓股票代码*/
var stockCodes = ['3000152', '6032591', '3003472', '0028212', '6002761', '0006612', '3006772', '3007602', '6007631', '3001222'];/* 基金持仓债券代码*/
var zqCodes = '1230902,1100761';
/* 基金持仓股票代码(新市场号)*/
var stockCodesNew = ['0.300015', '1.603259', '0.300347', '0.002821', '1.600276', '0.000661', '0.300677', '0.300760', '1.600763', '0.300122'];/* 基金持仓债券代码（新市场号）*/
var zqCodesNew = '0.123090,1.110076';
/* 收益率*//* 近一年收益率*/
var syl_1n = '70.15';
/* 近6月收益率*/
var syl_6y = '12.22';
/* 近三月收益率*/
var syl_3y = '17.28';
/* 近一月收益率*/
var syl_1y = '-9.83';
/* 股票仓位测算图*/
var Data_fundSharesPositions = [[1612368000000, 82.9600], [1612454400000, 95.00], [1612713600000, 98.4200], [1612800000000, 99.4100], [1612886400000, 95.00], [1613577600000, 81.0600], [1613664000000, 80.0400], [1613923200000, 85.8500], [1614009600000, 88.100], [1614096000000, 95.00], [1614182400000, 95.00], [1614268800000, 95.00], [1614528000000, 95.00], [1614614400000, 95.00], [1614700800000, 85.7600]];
/* 单位净值走势 equityReturn-净值回报 unitMoney-每份派送金*/
var Data_netWorthTrend = [
  { 'x': 1475078400000, 'y': 1.0, 'equityReturn': 0, 'unitMoney': '' }, {
    'x': 1475164800000,
    'y': 1.0,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1476374400000, 'y': 1.002, 'equityReturn': 0, 'unitMoney': '' }, {
    'x': 1476979200000,
    'y': 0.997,
    'equityReturn': 0,
    'unitMoney': ''
  }, { 'x': 1477584000000, 'y': 0.991, 'equityReturn': 0, 'unitMoney': '' }, {
    'x': 1477843200000,
    'y': 0.993,
    'equityReturn': 0.2018,
    'unitMoney': ''
  }, { 'x': 1477929600000, 'y': 0.995, 'equityReturn': 0.2014, 'unitMoney': '' }, {
    'x': 1478016000000,
    'y': 0.993,
    'equityReturn': -0.201,
    'unitMoney': ''
  }, { 'x': 1478102400000, 'y': 0.991, 'equityReturn': -0.2014, 'unitMoney': '' }, {
    'x': 1478188800000,
    'y': 0.99,
    'equityReturn': -0.1009,
    'unitMoney': ''
  }, { 'x': 1478448000000, 'y': 0.989, 'equityReturn': -0.101, 'unitMoney': '' }, {
    'x': 1478534400000,
    'y': 0.99,
    'equityReturn': 0.1011,
    'unitMoney': ''
  }, { 'x': 1478620800000, 'y': 0.983, 'equityReturn': -0.7071, 'unitMoney': '' }, {
    'x': 1478707200000,
    'y': 0.988,
    'equityReturn': 0.5086,
    'unitMoney': ''
  }, { 'x': 1478793600000, 'y': 0.985, 'equityReturn': -0.3036, 'unitMoney': '' }, {
    'x': 1479052800000,
    'y': 0.984,
    'equityReturn': -0.1015,
    'unitMoney': ''
  }, { 'x': 1479139200000, 'y': 0.985, 'equityReturn': 0.1016, 'unitMoney': '' }, {
    'x': 1479225600000,
    'y': 0.983,
    'equityReturn': -0.203,
    'unitMoney': ''
  }, { 'x': 1479312000000, 'y': 0.982, 'equityReturn': -0.1017, 'unitMoney': '' }, {
    'x': 1479398400000,
    'y': 0.978,
    'equityReturn': -0.4073,
    'unitMoney': ''
  }, { 'x': 1479657600000, 'y': 0.981, 'equityReturn': 0.3067, 'unitMoney': '' }, {
    'x': 1479744000000,
    'y': 0.988,
    'equityReturn': 0.7136,
    'unitMoney': ''
  }, { 'x': 1479830400000, 'y': 0.985, 'equityReturn': -0.3036, 'unitMoney': '' }, {
    'x': 1479916800000,
    'y': 0.99,
    'equityReturn': 0.5076,
    'unitMoney': ''
  }, { 'x': 1480003200000, 'y': 0.994, 'equityReturn': 0.404, 'unitMoney': '' }, {
    'x': 1480262400000,
    'y': 0.995,
    'equityReturn': 0.1006,
    'unitMoney': ''
  }, { 'x': 1480348800000, 'y': 0.988, 'equityReturn': -0.7035, 'unitMoney': '' }, {
    'x': 1480435200000,
    'y': 0.978,
    'equityReturn': -1.0121,
    'unitMoney': ''
  }, { 'x': 1480521600000, 'y': 0.98, 'equityReturn': 0.2045, 'unitMoney': '' }, {
    'x': 1480608000000,
    'y': 0.966,
    'equityReturn': -1.4286,
    'unitMoney': ''
  }, { 'x': 1480867200000, 'y': 0.962, 'equityReturn': -0.4141, 'unitMoney': '' }, {
    'x': 1480953600000,
    'y': 0.96,
    'equityReturn': -0.2079,
    'unitMoney': ''
  }, { 'x': 1481040000000, 'y': 0.968, 'equityReturn': 0.8333, 'unitMoney': '' }, {
    'x': 1481126400000,
    'y': 0.965,
    'equityReturn': -0.3099,
    'unitMoney': ''
  }, { 'x': 1481212800000, 'y': 0.968, 'equityReturn': 0.3109, 'unitMoney': '' }, {
    'x': 1481472000000,
    'y': 0.946,
    'equityReturn': -2.2727,
    'unitMoney': ''
  }, { 'x': 1481558400000, 'y': 0.943, 'equityReturn': -0.3171, 'unitMoney': '' }, {
    'x': 1481644800000,
    'y': 0.939,
    'equityReturn': -0.4242,
    'unitMoney': ''
  }, { 'x': 1481731200000, 'y': 0.928, 'equityReturn': -1.1715, 'unitMoney': '' }, {
    'x': 1481817600000,
    'y': 0.928,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1482076800000, 'y': 0.931, 'equityReturn': 0.3233, 'unitMoney': '' }, {
    'x': 1482163200000,
    'y': 0.93,
    'equityReturn': -0.1074,
    'unitMoney': ''
  }, { 'x': 1482249600000, 'y': 0.932, 'equityReturn': 0.2151, 'unitMoney': '' }, {
    'x': 1482336000000,
    'y': 0.933,
    'equityReturn': 0.1073,
    'unitMoney': ''
  }, { 'x': 1482422400000, 'y': 0.928, 'equityReturn': -0.5359, 'unitMoney': '' }, {
    'x': 1482681600000,
    'y': 0.929,
    'equityReturn': 0.1078,
    'unitMoney': ''
  }, { 'x': 1482768000000, 'y': 0.929, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1482854400000,
    'y': 0.924,
    'equityReturn': -0.5382,
    'unitMoney': ''
  }, { 'x': 1482940800000, 'y': 0.918, 'equityReturn': -0.6494, 'unitMoney': '' }, {
    'x': 1483027200000,
    'y': 0.927,
    'equityReturn': 0.9804,
    'unitMoney': ''
  }, { 'x': 1483113600000, 'y': 0.927, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1483372800000,
    'y': 0.934,
    'equityReturn': 0.7551,
    'unitMoney': ''
  }, { 'x': 1483459200000, 'y': 0.938, 'equityReturn': 0.4283, 'unitMoney': '' }, {
    'x': 1483545600000,
    'y': 0.94,
    'equityReturn': 0.2132,
    'unitMoney': ''
  }, { 'x': 1483632000000, 'y': 0.932, 'equityReturn': -0.8511, 'unitMoney': '' }, {
    'x': 1483891200000,
    'y': 0.935,
    'equityReturn': 0.3219,
    'unitMoney': ''
  }, { 'x': 1483977600000, 'y': 0.933, 'equityReturn': -0.2139, 'unitMoney': '' }, {
    'x': 1484064000000,
    'y': 0.928,
    'equityReturn': -0.5359,
    'unitMoney': ''
  }, { 'x': 1484150400000, 'y': 0.92, 'equityReturn': -0.8621, 'unitMoney': '' }, {
    'x': 1484236800000,
    'y': 0.914,
    'equityReturn': -0.6522,
    'unitMoney': ''
  }, { 'x': 1484496000000, 'y': 0.912, 'equityReturn': -0.2188, 'unitMoney': '' }, {
    'x': 1484582400000,
    'y': 0.918,
    'equityReturn': 0.6579,
    'unitMoney': ''
  }, { 'x': 1484668800000, 'y': 0.92, 'equityReturn': 0.2179, 'unitMoney': '' }, {
    'x': 1484755200000,
    'y': 0.915,
    'equityReturn': -0.5435,
    'unitMoney': ''
  }, { 'x': 1484841600000, 'y': 0.924, 'equityReturn': 0.9836, 'unitMoney': '' }, {
    'x': 1485100800000,
    'y': 0.928,
    'equityReturn': 0.4329,
    'unitMoney': ''
  }, { 'x': 1485187200000, 'y': 0.925, 'equityReturn': -0.3233, 'unitMoney': '' }, {
    'x': 1485273600000,
    'y': 0.932,
    'equityReturn': 0.7568,
    'unitMoney': ''
  }, { 'x': 1485360000000, 'y': 0.936, 'equityReturn': 0.4292, 'unitMoney': '' }, {
    'x': 1486051200000,
    'y': 0.936,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1486310400000, 'y': 0.937, 'equityReturn': 0.1068, 'unitMoney': '' }, {
    'x': 1486396800000,
    'y': 0.941,
    'equityReturn': 0.4269,
    'unitMoney': ''
  }, { 'x': 1486483200000, 'y': 0.941, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1486569600000,
    'y': 0.939,
    'equityReturn': -0.2125,
    'unitMoney': ''
  }, { 'x': 1486656000000, 'y': 0.938, 'equityReturn': -0.1065, 'unitMoney': '' }, {
    'x': 1486915200000,
    'y': 0.948,
    'equityReturn': 1.0661,
    'unitMoney': ''
  }, { 'x': 1487001600000, 'y': 0.943, 'equityReturn': -0.5274, 'unitMoney': '' }, {
    'x': 1487088000000,
    'y': 0.931,
    'equityReturn': -1.2725,
    'unitMoney': ''
  }, { 'x': 1487174400000, 'y': 0.941, 'equityReturn': 1.0741, 'unitMoney': '' }, {
    'x': 1487260800000,
    'y': 0.932,
    'equityReturn': -0.9564,
    'unitMoney': ''
  }, { 'x': 1487520000000, 'y': 0.944, 'equityReturn': 1.2876, 'unitMoney': '' }, {
    'x': 1487606400000,
    'y': 0.956,
    'equityReturn': 1.2712,
    'unitMoney': ''
  }, { 'x': 1487692800000, 'y': 0.96, 'equityReturn': 0.4184, 'unitMoney': '' }, {
    'x': 1487779200000,
    'y': 0.979,
    'equityReturn': 1.9792,
    'unitMoney': ''
  }, { 'x': 1487865600000, 'y': 0.974, 'equityReturn': -0.5107, 'unitMoney': '' }, {
    'x': 1488124800000,
    'y': 0.969,
    'equityReturn': -0.5133,
    'unitMoney': ''
  }, { 'x': 1488211200000, 'y': 0.972, 'equityReturn': 0.3096, 'unitMoney': '' }, {
    'x': 1488297600000,
    'y': 0.97,
    'equityReturn': -0.2058,
    'unitMoney': ''
  }, { 'x': 1488384000000, 'y': 0.969, 'equityReturn': -0.1031, 'unitMoney': '' }, {
    'x': 1488470400000,
    'y': 0.968,
    'equityReturn': -0.1032,
    'unitMoney': ''
  }, { 'x': 1488729600000, 'y': 0.973, 'equityReturn': 0.5165, 'unitMoney': '' }, {
    'x': 1488816000000,
    'y': 0.974,
    'equityReturn': 0.1028,
    'unitMoney': ''
  }, { 'x': 1488902400000, 'y': 0.973, 'equityReturn': -0.1027, 'unitMoney': '' }, {
    'x': 1488988800000,
    'y': 0.966,
    'equityReturn': -0.7194,
    'unitMoney': ''
  }, { 'x': 1489075200000, 'y': 0.972, 'equityReturn': 0.6211, 'unitMoney': '' }, {
    'x': 1489334400000,
    'y': 0.982,
    'equityReturn': 1.0288,
    'unitMoney': ''
  }, { 'x': 1489420800000, 'y': 0.98, 'equityReturn': -0.2037, 'unitMoney': '' }, {
    'x': 1489507200000,
    'y': 0.987,
    'equityReturn': 0.7143,
    'unitMoney': ''
  }, { 'x': 1489593600000, 'y': 0.989, 'equityReturn': 0.2026, 'unitMoney': '' }, {
    'x': 1489680000000,
    'y': 0.982,
    'equityReturn': -0.7078,
    'unitMoney': ''
  }, { 'x': 1489939200000, 'y': 0.986, 'equityReturn': 0.4073, 'unitMoney': '' }, {
    'x': 1490025600000,
    'y': 0.996,
    'equityReturn': 1.0142,
    'unitMoney': ''
  }, { 'x': 1490112000000, 'y': 1.008, 'equityReturn': 1.2048, 'unitMoney': '' }, {
    'x': 1490198400000,
    'y': 1.008,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1490284800000, 'y': 1.005, 'equityReturn': -0.2976, 'unitMoney': '' }, {
    'x': 1490544000000,
    'y': 0.995,
    'equityReturn': -0.995,
    'unitMoney': ''
  }, { 'x': 1490630400000, 'y': 0.998, 'equityReturn': 0.3015, 'unitMoney': '' }, {
    'x': 1490716800000,
    'y': 0.99,
    'equityReturn': -0.8016,
    'unitMoney': ''
  }, { 'x': 1490803200000, 'y': 0.986, 'equityReturn': -0.404, 'unitMoney': '' }, {
    'x': 1490889600000,
    'y': 1.002,
    'equityReturn': 1.6227,
    'unitMoney': ''
  }, { 'x': 1491321600000, 'y': 1.019, 'equityReturn': 1.6966, 'unitMoney': '' }, {
    'x': 1491408000000,
    'y': 1.02,
    'equityReturn': 0.0981,
    'unitMoney': ''
  }, { 'x': 1491494400000, 'y': 1.014, 'equityReturn': -0.5882, 'unitMoney': '' }, {
    'x': 1491753600000,
    'y': 0.998,
    'equityReturn': -1.5779,
    'unitMoney': ''
  }, { 'x': 1491840000000, 'y': 0.991, 'equityReturn': -0.7014, 'unitMoney': '' }, {
    'x': 1491926400000,
    'y': 0.994,
    'equityReturn': 0.3027,
    'unitMoney': ''
  }, { 'x': 1492012800000, 'y': 1.008, 'equityReturn': 1.4085, 'unitMoney': '' }, {
    'x': 1492099200000,
    'y': 0.997,
    'equityReturn': -1.0913,
    'unitMoney': ''
  }, { 'x': 1492358400000, 'y': 0.999, 'equityReturn': 0.2006, 'unitMoney': '' }, {
    'x': 1492444800000,
    'y': 1.008,
    'equityReturn': 0.9009,
    'unitMoney': ''
  }, { 'x': 1492531200000, 'y': 1.006, 'equityReturn': -0.1984, 'unitMoney': '' }, {
    'x': 1492617600000,
    'y': 1.028,
    'equityReturn': 2.1869,
    'unitMoney': ''
  }, { 'x': 1492704000000, 'y': 1.016, 'equityReturn': -1.1673, 'unitMoney': '' }, {
    'x': 1492963200000,
    'y': 0.995,
    'equityReturn': -2.0669,
    'unitMoney': ''
  }, { 'x': 1493049600000, 'y': 0.998, 'equityReturn': 0.3015, 'unitMoney': '' }, {
    'x': 1493136000000,
    'y': 1.003,
    'equityReturn': 0.501,
    'unitMoney': ''
  }, { 'x': 1493222400000, 'y': 1.014, 'equityReturn': 1.0967, 'unitMoney': '' }, {
    'x': 1493308800000,
    'y': 1.002,
    'equityReturn': -1.1834,
    'unitMoney': ''
  }, { 'x': 1493654400000, 'y': 1.004, 'equityReturn': 0.1996, 'unitMoney': '' }, {
    'x': 1493740800000,
    'y': 1.001,
    'equityReturn': -0.2988,
    'unitMoney': ''
  }, { 'x': 1493827200000, 'y': 0.996, 'equityReturn': -0.4995, 'unitMoney': '' }, {
    'x': 1493913600000,
    'y': 0.992,
    'equityReturn': -0.4016,
    'unitMoney': ''
  }, { 'x': 1494172800000, 'y': 0.981, 'equityReturn': -1.1089, 'unitMoney': '' }, {
    'x': 1494259200000,
    'y': 0.982,
    'equityReturn': 0.1019,
    'unitMoney': ''
  }, { 'x': 1494345600000, 'y': 0.985, 'equityReturn': 0.3055, 'unitMoney': '' }, {
    'x': 1494432000000,
    'y': 0.994,
    'equityReturn': 0.9137,
    'unitMoney': ''
  }, { 'x': 1494518400000, 'y': 1.001, 'equityReturn': 0.7042, 'unitMoney': '' }, {
    'x': 1494777600000,
    'y': 1.022,
    'equityReturn': 2.0979,
    'unitMoney': ''
  }, { 'x': 1494864000000, 'y': 1.041, 'equityReturn': 1.8591, 'unitMoney': '' }, {
    'x': 1494950400000,
    'y': 1.027,
    'equityReturn': -1.3449,
    'unitMoney': ''
  }, { 'x': 1495036800000, 'y': 1.027, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1495123200000,
    'y': 1.032,
    'equityReturn': 0.4869,
    'unitMoney': ''
  }, { 'x': 1495382400000, 'y': 1.036, 'equityReturn': 0.3876, 'unitMoney': '' }, {
    'x': 1495468800000,
    'y': 1.042,
    'equityReturn': 0.5792,
    'unitMoney': ''
  }, { 'x': 1495555200000, 'y': 1.038, 'equityReturn': -0.3839, 'unitMoney': '' }, {
    'x': 1495641600000,
    'y': 1.036,
    'equityReturn': -0.1927,
    'unitMoney': ''
  }, { 'x': 1495728000000, 'y': 1.026, 'equityReturn': -0.9653, 'unitMoney': '' }, {
    'x': 1496160000000,
    'y': 1.029,
    'equityReturn': 0.2924,
    'unitMoney': ''
  }, { 'x': 1496246400000, 'y': 1.036, 'equityReturn': 0.6803, 'unitMoney': '' }, {
    'x': 1496332800000,
    'y': 1.026,
    'equityReturn': -0.9653,
    'unitMoney': ''
  }, { 'x': 1496592000000, 'y': 1.017, 'equityReturn': -0.8772, 'unitMoney': '' }, {
    'x': 1496678400000,
    'y': 1.032,
    'equityReturn': 1.4749,
    'unitMoney': ''
  }, { 'x': 1496764800000, 'y': 1.052, 'equityReturn': 1.938, 'unitMoney': '' }, {
    'x': 1496851200000,
    'y': 1.068,
    'equityReturn': 1.5209,
    'unitMoney': ''
  }, { 'x': 1496937600000, 'y': 1.075, 'equityReturn': 0.6554, 'unitMoney': '' }, {
    'x': 1497196800000,
    'y': 1.083,
    'equityReturn': 0.7442,
    'unitMoney': ''
  }, { 'x': 1497283200000, 'y': 1.086, 'equityReturn': 0.277, 'unitMoney': '' }, {
    'x': 1497369600000,
    'y': 1.066,
    'equityReturn': -1.8416,
    'unitMoney': ''
  }, { 'x': 1497456000000, 'y': 1.059, 'equityReturn': -0.6567, 'unitMoney': '' }, {
    'x': 1497542400000,
    'y': 1.054,
    'equityReturn': -0.4721,
    'unitMoney': ''
  }, { 'x': 1497801600000, 'y': 1.067, 'equityReturn': 1.2334, 'unitMoney': '' }, {
    'x': 1497888000000,
    'y': 1.059,
    'equityReturn': -0.7498,
    'unitMoney': ''
  }, { 'x': 1497974400000, 'y': 1.081, 'equityReturn': 2.0774, 'unitMoney': '' }, {
    'x': 1498060800000,
    'y': 1.065,
    'equityReturn': -1.4801,
    'unitMoney': ''
  }, { 'x': 1498147200000, 'y': 1.078, 'equityReturn': 1.2207, 'unitMoney': '' }, {
    'x': 1498406400000,
    'y': 1.098,
    'equityReturn': 1.8553,
    'unitMoney': ''
  }, { 'x': 1498492800000, 'y': 1.102, 'equityReturn': 0.3643, 'unitMoney': '' }, {
    'x': 1498579200000,
    'y': 1.084,
    'equityReturn': -1.6334,
    'unitMoney': ''
  }, { 'x': 1498665600000, 'y': 1.09, 'equityReturn': 0.5535, 'unitMoney': '' }, {
    'x': 1498752000000,
    'y': 1.096,
    'equityReturn': 0.5505,
    'unitMoney': ''
  }, { 'x': 1499011200000, 'y': 1.082, 'equityReturn': -1.2774, 'unitMoney': '' }, {
    'x': 1499097600000,
    'y': 1.071,
    'equityReturn': -1.0166,
    'unitMoney': ''
  }, { 'x': 1499184000000, 'y': 1.086, 'equityReturn': 1.4006, 'unitMoney': '' }, {
    'x': 1499270400000,
    'y': 1.074,
    'equityReturn': -1.105,
    'unitMoney': ''
  }, { 'x': 1499356800000, 'y': 1.061, 'equityReturn': -1.2104, 'unitMoney': '' }, {
    'x': 1499616000000,
    'y': 1.05,
    'equityReturn': -1.0368,
    'unitMoney': ''
  }, { 'x': 1499702400000, 'y': 1.054, 'equityReturn': 0.381, 'unitMoney': '' }, {
    'x': 1499788800000,
    'y': 1.049,
    'equityReturn': -0.4744,
    'unitMoney': ''
  }, { 'x': 1499875200000, 'y': 1.041, 'equityReturn': -0.7626, 'unitMoney': '' }, {
    'x': 1499961600000,
    'y': 1.044,
    'equityReturn': 0.2882,
    'unitMoney': ''
  }, { 'x': 1500220800000, 'y': 1.029, 'equityReturn': -1.4368, 'unitMoney': '' }, {
    'x': 1500307200000,
    'y': 1.021,
    'equityReturn': -0.7775,
    'unitMoney': ''
  }, { 'x': 1500393600000, 'y': 1.035, 'equityReturn': 1.3712, 'unitMoney': '' }, {
    'x': 1500480000000,
    'y': 1.041,
    'equityReturn': 0.5797,
    'unitMoney': ''
  }, { 'x': 1500566400000, 'y': 1.035, 'equityReturn': -0.5764, 'unitMoney': '' }, {
    'x': 1500825600000,
    'y': 1.036,
    'equityReturn': 0.0966,
    'unitMoney': ''
  }, { 'x': 1500912000000, 'y': 1.03, 'equityReturn': -0.5792, 'unitMoney': '' }, {
    'x': 1500998400000,
    'y': 1.018,
    'equityReturn': -1.165,
    'unitMoney': ''
  }, { 'x': 1501084800000, 'y': 1.018, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1501171200000,
    'y': 1.026,
    'equityReturn': 0.7859,
    'unitMoney': ''
  }, { 'x': 1501430400000, 'y': 1.024, 'equityReturn': -0.1949, 'unitMoney': '' }, {
    'x': 1501516800000,
    'y': 1.022,
    'equityReturn': -0.1953,
    'unitMoney': ''
  }, { 'x': 1501603200000, 'y': 1.016, 'equityReturn': -0.5871, 'unitMoney': '' }, {
    'x': 1501689600000,
    'y': 1.005,
    'equityReturn': -1.0827,
    'unitMoney': ''
  }, { 'x': 1501776000000, 'y': 1.003, 'equityReturn': -0.199, 'unitMoney': '' }, {
    'x': 1502035200000,
    'y': 1.012,
    'equityReturn': 0.8973,
    'unitMoney': ''
  }, { 'x': 1502121600000, 'y': 1.018, 'equityReturn': 0.5929, 'unitMoney': '' }, {
    'x': 1502208000000,
    'y': 1.036,
    'equityReturn': 1.7682,
    'unitMoney': ''
  }, { 'x': 1502294400000, 'y': 1.038, 'equityReturn': 0.1931, 'unitMoney': '' }, {
    'x': 1502380800000,
    'y': 1.033,
    'equityReturn': -0.4817,
    'unitMoney': ''
  }, { 'x': 1502640000000, 'y': 1.046, 'equityReturn': 1.2585, 'unitMoney': '' }, {
    'x': 1502726400000,
    'y': 1.039,
    'equityReturn': -0.6692,
    'unitMoney': ''
  }, { 'x': 1502812800000, 'y': 1.036, 'equityReturn': -0.2887, 'unitMoney': '' }, {
    'x': 1502899200000,
    'y': 1.031,
    'equityReturn': -0.4826,
    'unitMoney': ''
  }, { 'x': 1502985600000, 'y': 1.035, 'equityReturn': 0.388, 'unitMoney': '' }, {
    'x': 1503244800000,
    'y': 1.043,
    'equityReturn': 0.7729,
    'unitMoney': ''
  }, { 'x': 1503331200000, 'y': 1.037, 'equityReturn': -0.5753, 'unitMoney': '' }, {
    'x': 1503417600000,
    'y': 1.034,
    'equityReturn': -0.2893,
    'unitMoney': ''
  }, { 'x': 1503504000000, 'y': 1.025, 'equityReturn': -0.8704, 'unitMoney': '' }, {
    'x': 1503590400000,
    'y': 1.026,
    'equityReturn': 0.0976,
    'unitMoney': ''
  }, { 'x': 1503849600000, 'y': 1.03, 'equityReturn': 0.3899, 'unitMoney': '' }, {
    'x': 1503936000000,
    'y': 1.026,
    'equityReturn': -0.3883,
    'unitMoney': ''
  }, { 'x': 1504022400000, 'y': 1.033, 'equityReturn': 0.6823, 'unitMoney': '' }, {
    'x': 1504108800000,
    'y': 1.03,
    'equityReturn': -0.2904,
    'unitMoney': ''
  }, { 'x': 1504195200000, 'y': 1.04, 'equityReturn': 0.9709, 'unitMoney': '' }, {
    'x': 1504454400000,
    'y': 1.047,
    'equityReturn': 0.6731,
    'unitMoney': ''
  }, { 'x': 1504540800000, 'y': 1.049, 'equityReturn': 0.191, 'unitMoney': '' }, {
    'x': 1504627200000,
    'y': 1.041,
    'equityReturn': -0.7626,
    'unitMoney': ''
  }, { 'x': 1504713600000, 'y': 1.043, 'equityReturn': 0.1921, 'unitMoney': '' }, {
    'x': 1504800000000,
    'y': 1.047,
    'equityReturn': 0.3835,
    'unitMoney': ''
  }, { 'x': 1505059200000, 'y': 1.051, 'equityReturn': 0.382, 'unitMoney': '' }, {
    'x': 1505145600000,
    'y': 1.048,
    'equityReturn': -0.2854,
    'unitMoney': ''
  }, { 'x': 1505232000000, 'y': 1.058, 'equityReturn': 0.9542, 'unitMoney': '' }, {
    'x': 1505318400000,
    'y': 1.054,
    'equityReturn': -0.3781,
    'unitMoney': ''
  }, { 'x': 1505404800000, 'y': 1.052, 'equityReturn': -0.1898, 'unitMoney': '' }, {
    'x': 1505664000000,
    'y': 1.058,
    'equityReturn': 0.5703,
    'unitMoney': ''
  }, { 'x': 1505750400000, 'y': 1.051, 'equityReturn': -0.6616, 'unitMoney': '' }, {
    'x': 1505836800000,
    'y': 1.063,
    'equityReturn': 1.1418,
    'unitMoney': ''
  }, { 'x': 1505923200000, 'y': 1.057, 'equityReturn': -0.5644, 'unitMoney': '' }, {
    'x': 1506009600000,
    'y': 1.059,
    'equityReturn': 0.1892,
    'unitMoney': ''
  }, { 'x': 1506268800000, 'y': 1.068, 'equityReturn': 0.8499, 'unitMoney': '' }, {
    'x': 1506355200000,
    'y': 1.064,
    'equityReturn': -0.3745,
    'unitMoney': ''
  }, { 'x': 1506441600000, 'y': 1.066, 'equityReturn': 0.188, 'unitMoney': '' }, {
    'x': 1506528000000,
    'y': 1.081,
    'equityReturn': 1.4071,
    'unitMoney': ''
  }, { 'x': 1506614400000, 'y': 1.08, 'equityReturn': -0.0925, 'unitMoney': '' }, {
    'x': 1507478400000,
    'y': 1.096,
    'equityReturn': 1.4815,
    'unitMoney': ''
  }, { 'x': 1507564800000, 'y': 1.111, 'equityReturn': 1.3686, 'unitMoney': '' }, {
    'x': 1507651200000,
    'y': 1.13,
    'equityReturn': 1.7102,
    'unitMoney': ''
  }, { 'x': 1507737600000, 'y': 1.137, 'equityReturn': 0.6195, 'unitMoney': '' }, {
    'x': 1507824000000,
    'y': 1.145,
    'equityReturn': 0.7036,
    'unitMoney': ''
  }, { 'x': 1508083200000, 'y': 1.14, 'equityReturn': -0.4367, 'unitMoney': '' }, {
    'x': 1508169600000,
    'y': 1.143,
    'equityReturn': 0.2632,
    'unitMoney': ''
  }, { 'x': 1508256000000, 'y': 1.154, 'equityReturn': 0.9624, 'unitMoney': '' }, {
    'x': 1508342400000,
    'y': 1.166,
    'equityReturn': 1.0399,
    'unitMoney': ''
  }, { 'x': 1508428800000, 'y': 1.16, 'equityReturn': -0.5146, 'unitMoney': '' }, {
    'x': 1508688000000,
    'y': 1.179,
    'equityReturn': 1.6379,
    'unitMoney': ''
  }, { 'x': 1508774400000, 'y': 1.183, 'equityReturn': 0.3393, 'unitMoney': '' }, {
    'x': 1508860800000,
    'y': 1.2,
    'equityReturn': 1.437,
    'unitMoney': ''
  }, { 'x': 1508947200000, 'y': 1.193, 'equityReturn': -0.5833, 'unitMoney': '' }, {
    'x': 1509033600000,
    'y': 1.204,
    'equityReturn': 0.922,
    'unitMoney': ''
  }, { 'x': 1509292800000, 'y': 1.191, 'equityReturn': -1.0797, 'unitMoney': '' }, {
    'x': 1509379200000,
    'y': 1.189,
    'equityReturn': -0.1679,
    'unitMoney': ''
  }, { 'x': 1509465600000, 'y': 1.188, 'equityReturn': -0.0841, 'unitMoney': '' }, {
    'x': 1509552000000,
    'y': 1.196,
    'equityReturn': 0.6734,
    'unitMoney': ''
  }, { 'x': 1509638400000, 'y': 1.208, 'equityReturn': 1.0033, 'unitMoney': '' }, {
    'x': 1509897600000,
    'y': 1.246,
    'equityReturn': 3.1457,
    'unitMoney': ''
  }, { 'x': 1509984000000, 'y': 1.24, 'equityReturn': -0.4815, 'unitMoney': '' }, {
    'x': 1510070400000,
    'y': 1.223,
    'equityReturn': -1.371,
    'unitMoney': ''
  }, { 'x': 1510156800000, 'y': 1.231, 'equityReturn': 0.6541, 'unitMoney': '' }, {
    'x': 1510243200000,
    'y': 1.243,
    'equityReturn': 0.9748,
    'unitMoney': ''
  }, { 'x': 1510502400000, 'y': 1.248, 'equityReturn': 0.4023, 'unitMoney': '' }, {
    'x': 1510588800000,
    'y': 1.216,
    'equityReturn': -2.5641,
    'unitMoney': ''
  }, { 'x': 1510675200000, 'y': 1.208, 'equityReturn': -0.6579, 'unitMoney': '' }, {
    'x': 1510761600000,
    'y': 1.236,
    'equityReturn': 2.3179,
    'unitMoney': ''
  }, { 'x': 1510848000000, 'y': 1.202, 'equityReturn': -2.7508, 'unitMoney': '' }, {
    'x': 1511107200000,
    'y': 1.222,
    'equityReturn': 1.6639,
    'unitMoney': ''
  }, { 'x': 1511193600000, 'y': 1.218, 'equityReturn': -0.3273, 'unitMoney': '' }, {
    'x': 1511280000000,
    'y': 1.199,
    'equityReturn': -1.5599,
    'unitMoney': ''
  }, { 'x': 1511366400000, 'y': 1.146, 'equityReturn': -4.4204, 'unitMoney': '' }, {
    'x': 1511452800000,
    'y': 1.148,
    'equityReturn': 0.1745,
    'unitMoney': ''
  }, { 'x': 1511712000000, 'y': 1.129, 'equityReturn': -1.6551, 'unitMoney': '' }, {
    'x': 1511798400000,
    'y': 1.146,
    'equityReturn': 1.5058,
    'unitMoney': ''
  }, { 'x': 1511884800000, 'y': 1.136, 'equityReturn': -0.8726, 'unitMoney': '' }, {
    'x': 1511971200000,
    'y': 1.135,
    'equityReturn': -0.088,
    'unitMoney': ''
  }, { 'x': 1512057600000, 'y': 1.141, 'equityReturn': 0.5286, 'unitMoney': '' }, {
    'x': 1512316800000,
    'y': 1.157,
    'equityReturn': 1.4023,
    'unitMoney': ''
  }, { 'x': 1512403200000, 'y': 1.144, 'equityReturn': -1.1236, 'unitMoney': '' }, {
    'x': 1512489600000,
    'y': 1.15,
    'equityReturn': 0.5245,
    'unitMoney': ''
  }, { 'x': 1512576000000, 'y': 1.146, 'equityReturn': -0.3478, 'unitMoney': '' }, {
    'x': 1512662400000,
    'y': 1.163,
    'equityReturn': 1.4834,
    'unitMoney': ''
  }, { 'x': 1512921600000, 'y': 1.212, 'equityReturn': 4.2132, 'unitMoney': '' }, {
    'x': 1513008000000,
    'y': 1.212,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1513094400000, 'y': 1.218, 'equityReturn': 0.495, 'unitMoney': '' }, {
    'x': 1513180800000,
    'y': 1.224,
    'equityReturn': 0.4926,
    'unitMoney': ''
  }, { 'x': 1513267200000, 'y': 1.207, 'equityReturn': -1.3889, 'unitMoney': '' }, {
    'x': 1513526400000,
    'y': 1.208,
    'equityReturn': 0.0829,
    'unitMoney': ''
  }, { 'x': 1513612800000, 'y': 1.222, 'equityReturn': 1.1589, 'unitMoney': '' }, {
    'x': 1513699200000,
    'y': 1.231,
    'equityReturn': 0.7365,
    'unitMoney': ''
  }, { 'x': 1513785600000, 'y': 1.254, 'equityReturn': 1.8684, 'unitMoney': '' }, {
    'x': 1513872000000,
    'y': 1.245,
    'equityReturn': -0.7177,
    'unitMoney': ''
  }, { 'x': 1514131200000, 'y': 1.243, 'equityReturn': -0.1606, 'unitMoney': '' }, {
    'x': 1514217600000,
    'y': 1.236,
    'equityReturn': -0.5632,
    'unitMoney': ''
  }, { 'x': 1514304000000, 'y': 1.212, 'equityReturn': -1.9417, 'unitMoney': '' }, {
    'x': 1514390400000,
    'y': 1.227,
    'equityReturn': 1.2376,
    'unitMoney': ''
  }, { 'x': 1514476800000, 'y': 1.24, 'equityReturn': 1.0595, 'unitMoney': '' }, {
    'x': 1514649600000,
    'y': 1.24,
    'equityReturn': 0,
    'unitMoney': ''
  }, { 'x': 1514822400000, 'y': 1.235, 'equityReturn': -0.4032, 'unitMoney': '' }, {
    'x': 1514908800000,
    'y': 1.24,
    'equityReturn': 0.4049,
    'unitMoney': ''
  }, { 'x': 1514995200000, 'y': 1.252, 'equityReturn': 0.9677, 'unitMoney': '' }, {
    'x': 1515081600000,
    'y': 1.25,
    'equityReturn': -0.1597,
    'unitMoney': ''
  }, { 'x': 1515340800000, 'y': 1.252, 'equityReturn': 0.16, 'unitMoney': '' }, {
    'x': 1515427200000,
    'y': 1.279,
    'equityReturn': 2.1565,
    'unitMoney': ''
  }, { 'x': 1515513600000, 'y': 1.277, 'equityReturn': -0.1564, 'unitMoney': '' }, {
    'x': 1515600000000,
    'y': 1.275,
    'equityReturn': -0.1566,
    'unitMoney': ''
  }, { 'x': 1515686400000, 'y': 1.293, 'equityReturn': 1.4118, 'unitMoney': '' }, {
    'x': 1515945600000,
    'y': 1.283,
    'equityReturn': -0.7734,
    'unitMoney': ''
  }, { 'x': 1516032000000, 'y': 1.297, 'equityReturn': 1.0912, 'unitMoney': '' }, {
    'x': 1516118400000,
    'y': 1.277,
    'equityReturn': -1.542,
    'unitMoney': ''
  }, { 'x': 1516204800000, 'y': 1.269, 'equityReturn': -0.6265, 'unitMoney': '' }, {
    'x': 1516291200000,
    'y': 1.266,
    'equityReturn': -0.2364,
    'unitMoney': ''
  }, { 'x': 1516550400000, 'y': 1.288, 'equityReturn': 1.7378, 'unitMoney': '' }, {
    'x': 1516636800000,
    'y': 1.291,
    'equityReturn': 0.2329,
    'unitMoney': ''
  }, { 'x': 1516723200000, 'y': 1.295, 'equityReturn': 0.3098, 'unitMoney': '' }, {
    'x': 1516809600000,
    'y': 1.269,
    'equityReturn': -2.0077,
    'unitMoney': ''
  }, { 'x': 1516896000000, 'y': 1.27, 'equityReturn': 0.0788, 'unitMoney': '' }, {
    'x': 1517155200000,
    'y': 1.221,
    'equityReturn': -3.8583,
    'unitMoney': ''
  }, { 'x': 1517241600000, 'y': 1.217, 'equityReturn': -0.3276, 'unitMoney': '' }, {
    'x': 1517328000000,
    'y': 1.222,
    'equityReturn': 0.4108,
    'unitMoney': ''
  }, { 'x': 1517414400000, 'y': 1.198, 'equityReturn': -1.964, 'unitMoney': '' }, {
    'x': 1517500800000,
    'y': 1.201,
    'equityReturn': 0.2504,
    'unitMoney': ''
  }, { 'x': 1517760000000, 'y': 1.174, 'equityReturn': -2.2481, 'unitMoney': '' }, {
    'x': 1517846400000,
    'y': 1.129,
    'equityReturn': -3.833,
    'unitMoney': ''
  }, { 'x': 1517932800000, 'y': 1.118, 'equityReturn': -0.9743, 'unitMoney': '' }, {
    'x': 1518019200000,
    'y': 1.133,
    'equityReturn': 1.3417,
    'unitMoney': ''
  }, { 'x': 1518105600000, 'y': 1.104, 'equityReturn': -2.5596, 'unitMoney': '' }, {
    'x': 1518364800000,
    'y': 1.155,
    'equityReturn': 4.6196,
    'unitMoney': ''
  }, { 'x': 1518451200000, 'y': 1.168, 'equityReturn': 1.1255, 'unitMoney': '' }, {
    'x': 1518537600000,
    'y': 1.181,
    'equityReturn': 1.113,
    'unitMoney': ''
  }, { 'x': 1519228800000, 'y': 1.209, 'equityReturn': 2.3709, 'unitMoney': '' }, {
    'x': 1519315200000,
    'y': 1.201,
    'equityReturn': -0.6617,
    'unitMoney': ''
  }, { 'x': 1519574400000, 'y': 1.22, 'equityReturn': 1.582, 'unitMoney': '' }, {
    'x': 1519660800000,
    'y': 1.212,
    'equityReturn': -0.6557,
    'unitMoney': ''
  }, { 'x': 1519747200000, 'y': 1.202, 'equityReturn': -0.8251, 'unitMoney': '' }, {
    'x': 1519833600000,
    'y': 1.22,
    'equityReturn': 1.4975,
    'unitMoney': ''
  }, { 'x': 1519920000000, 'y': 1.211, 'equityReturn': -0.7377, 'unitMoney': '' }, {
    'x': 1520179200000,
    'y': 1.22,
    'equityReturn': 0.7432,
    'unitMoney': ''
  }, { 'x': 1520265600000, 'y': 1.248, 'equityReturn': 2.2951, 'unitMoney': '' }, {
    'x': 1520352000000,
    'y': 1.246,
    'equityReturn': -0.1603,
    'unitMoney': ''
  }, { 'x': 1520438400000, 'y': 1.286, 'equityReturn': 3.2103, 'unitMoney': '' }, {
    'x': 1520524800000,
    'y': 1.293,
    'equityReturn': 0.5443,
    'unitMoney': ''
  }, { 'x': 1520784000000, 'y': 1.304, 'equityReturn': 0.8507, 'unitMoney': '' }, {
    'x': 1520870400000,
    'y': 1.282,
    'equityReturn': -1.6871,
    'unitMoney': ''
  }, { 'x': 1520956800000, 'y': 1.268, 'equityReturn': -1.092, 'unitMoney': '' }, {
    'x': 1521043200000,
    'y': 1.283,
    'equityReturn': 1.183,
    'unitMoney': ''
  }, { 'x': 1521129600000, 'y': 1.273, 'equityReturn': -0.7794, 'unitMoney': '' }, {
    'x': 1521388800000,
    'y': 1.317,
    'equityReturn': 3.4564,
    'unitMoney': ''
  }, { 'x': 1521475200000, 'y': 1.346, 'equityReturn': 2.202, 'unitMoney': '' }, {
    'x': 1521561600000,
    'y': 1.339,
    'equityReturn': -0.5201,
    'unitMoney': ''
  }, { 'x': 1521648000000, 'y': 1.329, 'equityReturn': -0.7468, 'unitMoney': '' }, {
    'x': 1521734400000,
    'y': 1.303,
    'equityReturn': -1.9564,
    'unitMoney': ''
  }, { 'x': 1521993600000, 'y': 1.349, 'equityReturn': 3.5303, 'unitMoney': '' }, {
    'x': 1522080000000,
    'y': 1.367,
    'equityReturn': 1.3343,
    'unitMoney': ''
  }, { 'x': 1522166400000, 'y': 1.339, 'equityReturn': -2.0483, 'unitMoney': '' }, {
    'x': 1522252800000,
    'y': 1.317,
    'equityReturn': -1.643,
    'unitMoney': ''
  }, { 'x': 1522339200000, 'y': 1.365, 'equityReturn': 3.6446, 'unitMoney': '' }, {
    'x': 1522598400000,
    'y': 1.364,
    'equityReturn': -0.0733,
    'unitMoney': ''
  }, { 'x': 1522684800000, 'y': 1.362, 'equityReturn': -0.1466, 'unitMoney': '' }, {
    'x': 1522771200000,
    'y': 1.346,
    'equityReturn': -1.1747,
    'unitMoney': ''
  }, { 'x': 1523203200000, 'y': 1.348, 'equityReturn': 0.1486, 'unitMoney': '' }, {
    'x': 1523289600000,
    'y': 1.366,
    'equityReturn': 1.3353,
    'unitMoney': ''
  }, { 'x': 1523376000000, 'y': 1.366, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1523462400000,
    'y': 1.394,
    'equityReturn': 2.0498,
    'unitMoney': ''
  }, { 'x': 1523548800000, 'y': 1.359, 'equityReturn': -2.5108, 'unitMoney': '' }, {
    'x': 1523808000000,
    'y': 1.381,
    'equityReturn': 1.6188,
    'unitMoney': ''
  }, { 'x': 1523894400000, 'y': 1.338, 'equityReturn': -3.1137, 'unitMoney': '' }, {
    'x': 1523980800000,
    'y': 1.351,
    'equityReturn': 0.9716,
    'unitMoney': ''
  }, { 'x': 1524067200000, 'y': 1.366, 'equityReturn': 1.1103, 'unitMoney': '' }, {
    'x': 1524153600000,
    'y': 1.369,
    'equityReturn': 0.2196,
    'unitMoney': ''
  }, { 'x': 1524412800000, 'y': 1.367, 'equityReturn': -0.1461, 'unitMoney': '' }, {
    'x': 1524499200000,
    'y': 1.387,
    'equityReturn': 1.4631,
    'unitMoney': ''
  }, { 'x': 1524585600000, 'y': 1.442, 'equityReturn': 3.9654, 'unitMoney': '' }, {
    'x': 1524672000000,
    'y': 1.413,
    'equityReturn': -2.0111,
    'unitMoney': ''
  }, { 'x': 1524758400000, 'y': 1.453, 'equityReturn': 2.8309, 'unitMoney': '' }, {
    'x': 1525190400000,
    'y': 1.462,
    'equityReturn': 0.6194,
    'unitMoney': ''
  }, { 'x': 1525276800000, 'y': 1.452, 'equityReturn': -0.684, 'unitMoney': '' }, {
    'x': 1525363200000,
    'y': 1.48,
    'equityReturn': 1.9284,
    'unitMoney': ''
  }, { 'x': 1525622400000, 'y': 1.511, 'equityReturn': 2.0946, 'unitMoney': '' }, {
    'x': 1525708800000,
    'y': 1.493,
    'equityReturn': -1.1913,
    'unitMoney': ''
  }, { 'x': 1525795200000, 'y': 1.495, 'equityReturn': 0.134, 'unitMoney': '' }, {
    'x': 1525881600000,
    'y': 1.542,
    'equityReturn': 3.1438,
    'unitMoney': ''
  }, { 'x': 1525968000000, 'y': 1.492, 'equityReturn': -3.2425, 'unitMoney': '' }, {
    'x': 1526227200000,
    'y': 1.492,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1526313600000, 'y': 1.535, 'equityReturn': 2.882, 'unitMoney': '' }, {
    'x': 1526400000000,
    'y': 1.548,
    'equityReturn': 0.8469,
    'unitMoney': ''
  }, { 'x': 1526486400000, 'y': 1.52, 'equityReturn': -1.8088, 'unitMoney': '' }, {
    'x': 1526572800000,
    'y': 1.527,
    'equityReturn': 0.4605,
    'unitMoney': ''
  }, { 'x': 1526832000000, 'y': 1.526, 'equityReturn': -0.0655, 'unitMoney': '' }, {
    'x': 1526918400000,
    'y': 1.56,
    'equityReturn': 2.228,
    'unitMoney': ''
  }, { 'x': 1527004800000, 'y': 1.557, 'equityReturn': -0.1923, 'unitMoney': '' }, {
    'x': 1527091200000,
    'y': 1.569,
    'equityReturn': 0.7707,
    'unitMoney': ''
  }, { 'x': 1527177600000, 'y': 1.597, 'equityReturn': 1.7846, 'unitMoney': '' }, {
    'x': 1527436800000,
    'y': 1.614,
    'equityReturn': 1.0645,
    'unitMoney': ''
  }, { 'x': 1527523200000, 'y': 1.531, 'equityReturn': -5.1425, 'unitMoney': '' }, {
    'x': 1527609600000,
    'y': 1.522,
    'equityReturn': -0.5879,
    'unitMoney': ''
  }, { 'x': 1527696000000, 'y': 1.566, 'equityReturn': 2.8909, 'unitMoney': '' }, {
    'x': 1527782400000,
    'y': 1.492,
    'equityReturn': -4.7254,
    'unitMoney': ''
  }, { 'x': 1528041600000, 'y': 1.495, 'equityReturn': 0.2011, 'unitMoney': '' }, {
    'x': 1528128000000,
    'y': 1.551,
    'equityReturn': 3.7458,
    'unitMoney': ''
  }, { 'x': 1528214400000, 'y': 1.584, 'equityReturn': 2.1277, 'unitMoney': '' }, {
    'x': 1528300800000,
    'y': 1.563,
    'equityReturn': -1.3258,
    'unitMoney': ''
  }, { 'x': 1528387200000, 'y': 1.564, 'equityReturn': 0.064, 'unitMoney': '' }, {
    'x': 1528646400000,
    'y': 1.513,
    'equityReturn': -3.2609,
    'unitMoney': ''
  }, { 'x': 1528732800000, 'y': 1.551, 'equityReturn': 2.5116, 'unitMoney': '' }, {
    'x': 1528819200000,
    'y': 1.529,
    'equityReturn': -1.4184,
    'unitMoney': ''
  }, { 'x': 1528905600000, 'y': 1.515, 'equityReturn': -0.9156, 'unitMoney': '' }, {
    'x': 1528992000000,
    'y': 1.49,
    'equityReturn': -1.6502,
    'unitMoney': ''
  }, { 'x': 1529337600000, 'y': 1.388, 'equityReturn': -1.8121, 'unitMoney': '分红：每份派现金0.075元' }, {
    'x': 1529424000000,
    'y': 1.443,
    'equityReturn': 3.9625,
    'unitMoney': ''
  }, { 'x': 1529510400000, 'y': 1.443, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1529596800000,
    'y': 1.455,
    'equityReturn': 0.8316,
    'unitMoney': ''
  }, { 'x': 1529856000000, 'y': 1.466, 'equityReturn': 0.756, 'unitMoney': '' }, {
    'x': 1529942400000,
    'y': 1.461,
    'equityReturn': -0.3411,
    'unitMoney': ''
  }, { 'x': 1530028800000, 'y': 1.408, 'equityReturn': -3.6277, 'unitMoney': '' }, {
    'x': 1530115200000,
    'y': 1.393,
    'equityReturn': -1.0653,
    'unitMoney': ''
  }, { 'x': 1530201600000, 'y': 1.457, 'equityReturn': 4.5944, 'unitMoney': '' }, {
    'x': 1530288000000,
    'y': 1.457,
    'equityReturn': 0,
    'unitMoney': ''
  }, { 'x': 1530460800000, 'y': 1.473, 'equityReturn': 1.0981, 'unitMoney': '' }, {
    'x': 1530547200000,
    'y': 1.453,
    'equityReturn': -1.3578,
    'unitMoney': ''
  }, { 'x': 1530633600000, 'y': 1.426, 'equityReturn': -1.8582, 'unitMoney': '' }, {
    'x': 1530720000000,
    'y': 1.389,
    'equityReturn': -2.5947,
    'unitMoney': ''
  }, { 'x': 1530806400000, 'y': 1.389, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1531065600000,
    'y': 1.442,
    'equityReturn': 3.8157,
    'unitMoney': ''
  }, { 'x': 1531152000000, 'y': 1.454, 'equityReturn': 0.8322, 'unitMoney': '' }, {
    'x': 1531238400000,
    'y': 1.459,
    'equityReturn': 0.3439,
    'unitMoney': ''
  }, { 'x': 1531324800000, 'y': 1.507, 'equityReturn': 3.2899, 'unitMoney': '' }, {
    'x': 1531411200000,
    'y': 1.535,
    'equityReturn': 1.858,
    'unitMoney': ''
  }, { 'x': 1531670400000, 'y': 1.552, 'equityReturn': 1.1075, 'unitMoney': '' }, {
    'x': 1531756800000,
    'y': 1.533,
    'equityReturn': -1.2242,
    'unitMoney': ''
  }, { 'x': 1531843200000, 'y': 1.534, 'equityReturn': 0.0652, 'unitMoney': '' }, {
    'x': 1531929600000,
    'y': 1.481,
    'equityReturn': -3.455,
    'unitMoney': ''
  }, { 'x': 1532016000000, 'y': 1.477, 'equityReturn': -0.2701, 'unitMoney': '' }, {
    'x': 1532275200000,
    'y': 1.37,
    'equityReturn': -7.2444,
    'unitMoney': ''
  }, { 'x': 1532361600000, 'y': 1.364, 'equityReturn': -0.438, 'unitMoney': '' }, {
    'x': 1532448000000,
    'y': 1.401,
    'equityReturn': 2.7126,
    'unitMoney': ''
  }, { 'x': 1532534400000, 'y': 1.385, 'equityReturn': -1.142, 'unitMoney': '' }, {
    'x': 1532620800000,
    'y': 1.365,
    'equityReturn': -1.444,
    'unitMoney': ''
  }, { 'x': 1532880000000, 'y': 1.312, 'equityReturn': -3.8828, 'unitMoney': '' }, {
    'x': 1532966400000,
    'y': 1.322,
    'equityReturn': 0.7622,
    'unitMoney': ''
  }, { 'x': 1533052800000, 'y': 1.295, 'equityReturn': -2.0424, 'unitMoney': '' }, {
    'x': 1533139200000,
    'y': 1.304,
    'equityReturn': 0.695,
    'unitMoney': ''
  }, { 'x': 1533225600000, 'y': 1.258, 'equityReturn': -3.5276, 'unitMoney': '' }, {
    'x': 1533484800000,
    'y': 1.195,
    'equityReturn': -5.0079,
    'unitMoney': ''
  }, { 'x': 1533571200000, 'y': 1.232, 'equityReturn': 3.0962, 'unitMoney': '' }, {
    'x': 1533657600000,
    'y': 1.206,
    'equityReturn': -2.1104,
    'unitMoney': ''
  }, { 'x': 1533744000000, 'y': 1.262, 'equityReturn': 4.6434, 'unitMoney': '' }, {
    'x': 1533830400000,
    'y': 1.297,
    'equityReturn': 2.7734,
    'unitMoney': ''
  }, { 'x': 1534089600000, 'y': 1.322, 'equityReturn': 1.9275, 'unitMoney': '' }, {
    'x': 1534176000000,
    'y': 1.317,
    'equityReturn': -0.3782,
    'unitMoney': ''
  }, { 'x': 1534262400000, 'y': 1.266, 'equityReturn': -3.8724, 'unitMoney': '' }, {
    'x': 1534348800000,
    'y': 1.268,
    'equityReturn': 0.158,
    'unitMoney': ''
  }, { 'x': 1534435200000, 'y': 1.208, 'equityReturn': -4.7319, 'unitMoney': '' }, {
    'x': 1534694400000,
    'y': 1.187,
    'equityReturn': -1.7384,
    'unitMoney': ''
  }, { 'x': 1534780800000, 'y': 1.255, 'equityReturn': 5.7287, 'unitMoney': '' }, {
    'x': 1534867200000,
    'y': 1.255,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1534953600000, 'y': 1.271, 'equityReturn': 1.2749, 'unitMoney': '' }, {
    'x': 1535040000000,
    'y': 1.281,
    'equityReturn': 0.7868,
    'unitMoney': ''
  }, { 'x': 1535299200000, 'y': 1.323, 'equityReturn': 3.2787, 'unitMoney': '' }, {
    'x': 1535385600000,
    'y': 1.314,
    'equityReturn': -0.6803,
    'unitMoney': ''
  }, { 'x': 1535472000000, 'y': 1.3, 'equityReturn': -1.0654, 'unitMoney': '' }, {
    'x': 1535558400000,
    'y': 1.284,
    'equityReturn': -1.2308,
    'unitMoney': ''
  }, { 'x': 1535644800000, 'y': 1.252, 'equityReturn': -2.4922, 'unitMoney': '' }, {
    'x': 1535904000000,
    'y': 1.247,
    'equityReturn': -0.3994,
    'unitMoney': ''
  }, { 'x': 1535990400000, 'y': 1.248, 'equityReturn': 0.0802, 'unitMoney': '' }, {
    'x': 1536076800000,
    'y': 1.229,
    'equityReturn': -1.5224,
    'unitMoney': ''
  }, { 'x': 1536163200000, 'y': 1.217, 'equityReturn': -0.9764, 'unitMoney': '' }, {
    'x': 1536249600000,
    'y': 1.247,
    'equityReturn': 2.4651,
    'unitMoney': ''
  }, { 'x': 1536508800000, 'y': 1.223, 'equityReturn': -1.9246, 'unitMoney': '' }, {
    'x': 1536595200000,
    'y': 1.233,
    'equityReturn': 0.8177,
    'unitMoney': ''
  }, { 'x': 1536681600000, 'y': 1.188, 'equityReturn': -3.6496, 'unitMoney': '' }, {
    'x': 1536768000000,
    'y': 1.17,
    'equityReturn': -1.5152,
    'unitMoney': ''
  }, { 'x': 1536854400000, 'y': 1.152, 'equityReturn': -1.5385, 'unitMoney': '' }, {
    'x': 1537113600000,
    'y': 1.133,
    'equityReturn': -1.6493,
    'unitMoney': ''
  }, { 'x': 1537200000000, 'y': 1.164, 'equityReturn': 2.7361, 'unitMoney': '' }, {
    'x': 1537286400000,
    'y': 1.181,
    'equityReturn': 1.4605,
    'unitMoney': ''
  }, { 'x': 1537372800000, 'y': 1.174, 'equityReturn': -0.5927, 'unitMoney': '' }, {
    'x': 1537459200000,
    'y': 1.203,
    'equityReturn': 2.4702,
    'unitMoney': ''
  }, { 'x': 1537804800000, 'y': 1.21, 'equityReturn': 0.5819, 'unitMoney': '' }, {
    'x': 1537891200000,
    'y': 1.236,
    'equityReturn': 2.1488,
    'unitMoney': ''
  }, { 'x': 1537977600000, 'y': 1.244, 'equityReturn': 0.6472, 'unitMoney': '' }, {
    'x': 1538064000000,
    'y': 1.261,
    'equityReturn': 1.3666,
    'unitMoney': ''
  }, { 'x': 1538928000000, 'y': 1.195, 'equityReturn': -5.2339, 'unitMoney': '' }, {
    'x': 1539014400000,
    'y': 1.18,
    'equityReturn': -1.2552,
    'unitMoney': ''
  }, { 'x': 1539100800000, 'y': 1.154, 'equityReturn': -2.2034, 'unitMoney': '' }, {
    'x': 1539187200000,
    'y': 1.093,
    'equityReturn': -5.286,
    'unitMoney': ''
  }, { 'x': 1539273600000, 'y': 1.099, 'equityReturn': 0.5489, 'unitMoney': '' }, {
    'x': 1539532800000,
    'y': 1.087,
    'equityReturn': -1.0919,
    'unitMoney': ''
  }, { 'x': 1539619200000, 'y': 1.069, 'equityReturn': -1.6559, 'unitMoney': '' }, {
    'x': 1539705600000,
    'y': 1.055,
    'equityReturn': -1.3096,
    'unitMoney': ''
  }, { 'x': 1539792000000, 'y': 1.008, 'equityReturn': -4.455, 'unitMoney': '' }, {
    'x': 1539878400000,
    'y': 1.06,
    'equityReturn': 5.1587,
    'unitMoney': ''
  }, { 'x': 1540137600000, 'y': 1.12, 'equityReturn': 5.6604, 'unitMoney': '' }, {
    'x': 1540224000000,
    'y': 1.095,
    'equityReturn': -2.2321,
    'unitMoney': ''
  }, { 'x': 1540310400000, 'y': 1.067, 'equityReturn': -2.5571, 'unitMoney': '' }, {
    'x': 1540396800000,
    'y': 1.054,
    'equityReturn': -1.2184,
    'unitMoney': ''
  }, { 'x': 1540483200000, 'y': 1.034, 'equityReturn': -1.8975, 'unitMoney': '' }, {
    'x': 1540742400000,
    'y': 1.011,
    'equityReturn': -2.2244,
    'unitMoney': ''
  }, { 'x': 1540828800000, 'y': 1.027, 'equityReturn': 1.5826, 'unitMoney': '' }, {
    'x': 1540915200000,
    'y': 1.06,
    'equityReturn': 3.2132,
    'unitMoney': ''
  }, { 'x': 1541001600000, 'y': 1.067, 'equityReturn': 0.6604, 'unitMoney': '' }, {
    'x': 1541088000000,
    'y': 1.128,
    'equityReturn': 5.717,
    'unitMoney': ''
  }, { 'x': 1541347200000, 'y': 1.114, 'equityReturn': -1.2411, 'unitMoney': '' }, {
    'x': 1541433600000,
    'y': 1.122,
    'equityReturn': 0.7181,
    'unitMoney': ''
  }, { 'x': 1541520000000, 'y': 1.118, 'equityReturn': -0.3565, 'unitMoney': '' }, {
    'x': 1541606400000,
    'y': 1.12,
    'equityReturn': 0.1789,
    'unitMoney': ''
  }, { 'x': 1541692800000, 'y': 1.108, 'equityReturn': -1.0714, 'unitMoney': '' }, {
    'x': 1541952000000,
    'y': 1.129,
    'equityReturn': 1.8953,
    'unitMoney': ''
  }, { 'x': 1542038400000, 'y': 1.147, 'equityReturn': 1.5943, 'unitMoney': '' }, {
    'x': 1542124800000,
    'y': 1.136,
    'equityReturn': -0.959,
    'unitMoney': ''
  }, { 'x': 1542211200000, 'y': 1.147, 'equityReturn': 0.9683, 'unitMoney': '' }, {
    'x': 1542297600000,
    'y': 1.124,
    'equityReturn': -2.0052,
    'unitMoney': ''
  }, { 'x': 1542556800000, 'y': 1.124, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1542643200000,
    'y': 1.106,
    'equityReturn': -1.6014,
    'unitMoney': ''
  }, { 'x': 1542729600000, 'y': 1.129, 'equityReturn': 2.0796, 'unitMoney': '' }, {
    'x': 1542816000000,
    'y': 1.126,
    'equityReturn': -0.2657,
    'unitMoney': ''
  }, { 'x': 1542902400000, 'y': 1.102, 'equityReturn': -2.1314, 'unitMoney': '' }, {
    'x': 1543161600000,
    'y': 1.1,
    'equityReturn': -0.1815,
    'unitMoney': ''
  }, { 'x': 1543248000000, 'y': 1.099, 'equityReturn': -0.0909, 'unitMoney': '' }, {
    'x': 1543334400000,
    'y': 1.112,
    'equityReturn': 1.1829,
    'unitMoney': ''
  }, { 'x': 1543420800000, 'y': 1.099, 'equityReturn': -1.1691, 'unitMoney': '' }, {
    'x': 1543507200000,
    'y': 1.112,
    'equityReturn': 1.1829,
    'unitMoney': ''
  }, { 'x': 1543766400000, 'y': 1.151, 'equityReturn': 3.5072, 'unitMoney': '' }, {
    'x': 1543852800000,
    'y': 1.168,
    'equityReturn': 1.477,
    'unitMoney': ''
  }, { 'x': 1543939200000, 'y': 1.182, 'equityReturn': 1.1986, 'unitMoney': '' }, {
    'x': 1544025600000,
    'y': 1.132,
    'equityReturn': -4.2301,
    'unitMoney': ''
  }, { 'x': 1544112000000, 'y': 1.092, 'equityReturn': -3.5336, 'unitMoney': '' }, {
    'x': 1544371200000,
    'y': 1.075,
    'equityReturn': -1.5568,
    'unitMoney': ''
  }, { 'x': 1544457600000, 'y': 1.09, 'equityReturn': 1.3953, 'unitMoney': '' }, {
    'x': 1544544000000,
    'y': 1.072,
    'equityReturn': -1.6514,
    'unitMoney': ''
  }, { 'x': 1544630400000, 'y': 1.088, 'equityReturn': 1.4925, 'unitMoney': '' }, {
    'x': 1544716800000,
    'y': 1.054,
    'equityReturn': -3.125,
    'unitMoney': ''
  }, { 'x': 1544976000000, 'y': 1.034, 'equityReturn': -1.8975, 'unitMoney': '' }, {
    'x': 1545062400000,
    'y': 1.029,
    'equityReturn': -0.4836,
    'unitMoney': ''
  }, { 'x': 1545148800000, 'y': 0.997, 'equityReturn': -3.1098, 'unitMoney': '' }, {
    'x': 1545235200000,
    'y': 0.986,
    'equityReturn': -1.1033,
    'unitMoney': ''
  }, { 'x': 1545321600000, 'y': 0.968, 'equityReturn': -1.8256, 'unitMoney': '' }, {
    'x': 1545580800000,
    'y': 0.99,
    'equityReturn': 2.2727,
    'unitMoney': ''
  }, { 'x': 1545667200000, 'y': 0.998, 'equityReturn': 0.8081, 'unitMoney': '' }, {
    'x': 1545753600000,
    'y': 0.991,
    'equityReturn': -0.7014,
    'unitMoney': ''
  }, { 'x': 1545840000000, 'y': 0.985, 'equityReturn': -0.6054, 'unitMoney': '' }, {
    'x': 1545926400000,
    'y': 0.989,
    'equityReturn': 0.4061,
    'unitMoney': ''
  }, { 'x': 1546185600000, 'y': 0.989, 'equityReturn': 0, 'unitMoney': '' }, {
    'x': 1546358400000,
    'y': 0.955,
    'equityReturn': -3.4378,
    'unitMoney': ''
  }, { 'x': 1546444800000, 'y': 0.943, 'equityReturn': -1.2565, 'unitMoney': '' }, {
    'x': 1546531200000,
    'y': 0.966,
    'equityReturn': 2.439,
    'unitMoney': ''
  }, { 'x': 1546790400000, 'y': 0.97, 'equityReturn': 0.4141, 'unitMoney': '' }, {
    'x': 1546876800000,
    'y': 0.971,
    'equityReturn': 0.1031,
    'unitMoney': ''
  }, { 'x': 1546963200000, 'y': 0.976, 'equityReturn': 0.5149, 'unitMoney': '' }, {
    'x': 1547049600000,
    'y': 0.97,
    'equityReturn': -0.6148,
    'unitMoney': ''
  }, { 'x': 1547136000000, 'y': 0.971, 'equityReturn': 0.1031, 'unitMoney': '' }, {
    'x': 1547395200000,
    'y': 0.958,
    'equityReturn': -1.3388,
    'unitMoney': ''
  }, { 'x': 1547481600000, 'y': 0.973, 'equityReturn': 1.5658, 'unitMoney': '' }, {
    'x': 1547568000000,
    'y': 0.987,
    'equityReturn': 1.4388,
    'unitMoney': ''
  }, { 'x': 1547654400000, 'y': 0.98, 'equityReturn': -0.7092, 'unitMoney': '' }, {
    'x': 1547740800000,
    'y': 1.002,
    'equityReturn': 2.2449,
    'unitMoney': ''
  }, { 'x': 1548000000000, 'y': 1.015, 'equityReturn': 1.2974, 'unitMoney': '' }, {
    'x': 1548086400000,
    'y': 0.998,
    'equityReturn': -1.6749,
    'unitMoney': ''
  }, { 'x': 1548172800000, 'y': 1.0, 'equityReturn': 0.2004, 'unitMoney': '' }, {
    'x': 1548259200000,
    'y': 1.001,
    'equityReturn': 0.1,
    'unitMoney': ''
  }, { 'x': 1548345600000, 'y': 1.011, 'equityReturn': 0.999, 'unitMoney': '' }, {
    'x': 1548604800000,
    'y': 1.011,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1548691200000, 'y': 1.009, 'equityReturn': -0.1978, 'unitMoney': '' }, {
    'x': 1548777600000,
    'y': 0.997,
    'equityReturn': -1.1893,
    'unitMoney': ''
  }, { 'x': 1548864000000, 'y': 1.004, 'equityReturn': 0.7021, 'unitMoney': '' }, {
    'x': 1548950400000,
    'y': 1.035,
    'equityReturn': 3.0876,
    'unitMoney': ''
  }, { 'x': 1549814400000, 'y': 1.054, 'equityReturn': 1.8357, 'unitMoney': '' }, {
    'x': 1549900800000,
    'y': 1.064,
    'equityReturn': 0.9488,
    'unitMoney': ''
  }, { 'x': 1549987200000, 'y': 1.079, 'equityReturn': 1.4098, 'unitMoney': '' }, {
    'x': 1550073600000,
    'y': 1.082,
    'equityReturn': 0.278,
    'unitMoney': ''
  }, { 'x': 1550160000000, 'y': 1.072, 'equityReturn': -0.9242, 'unitMoney': '' }, {
    'x': 1550419200000,
    'y': 1.12,
    'equityReturn': 4.4776,
    'unitMoney': ''
  }, { 'x': 1550505600000, 'y': 1.106, 'equityReturn': -1.25, 'unitMoney': '' }, {
    'x': 1550592000000,
    'y': 1.094,
    'equityReturn': -1.085,
    'unitMoney': ''
  }, { 'x': 1550678400000, 'y': 1.091, 'equityReturn': -0.2742, 'unitMoney': '' }, {
    'x': 1550764800000,
    'y': 1.106,
    'equityReturn': 1.3749,
    'unitMoney': ''
  }, { 'x': 1551024000000, 'y': 1.145, 'equityReturn': 3.5262, 'unitMoney': '' }, {
    'x': 1551110400000,
    'y': 1.153,
    'equityReturn': 0.6987,
    'unitMoney': ''
  }, { 'x': 1551196800000, 'y': 1.142, 'equityReturn': -0.954, 'unitMoney': '' }, {
    'x': 1551283200000,
    'y': 1.18,
    'equityReturn': 3.3275,
    'unitMoney': ''
  }, { 'x': 1551369600000, 'y': 1.187, 'equityReturn': 0.5932, 'unitMoney': '' }, {
    'x': 1551628800000,
    'y': 1.207,
    'equityReturn': 1.6849,
    'unitMoney': ''
  }, { 'x': 1551715200000, 'y': 1.212, 'equityReturn': 0.4143, 'unitMoney': '' }, {
    'x': 1551801600000,
    'y': 1.204,
    'equityReturn': -0.6601,
    'unitMoney': ''
  }, { 'x': 1551888000000, 'y': 1.181, 'equityReturn': -1.9103, 'unitMoney': '' }, {
    'x': 1551974400000,
    'y': 1.173,
    'equityReturn': -0.6774,
    'unitMoney': ''
  }, { 'x': 1552233600000, 'y': 1.231, 'equityReturn': 4.9446, 'unitMoney': '' }, {
    'x': 1552320000000,
    'y': 1.233,
    'equityReturn': 0.1625,
    'unitMoney': ''
  }, { 'x': 1552406400000, 'y': 1.239, 'equityReturn': 0.4866, 'unitMoney': '' }, {
    'x': 1552492800000,
    'y': 1.232,
    'equityReturn': -0.565,
    'unitMoney': ''
  }, { 'x': 1552579200000, 'y': 1.268, 'equityReturn': 2.9221, 'unitMoney': '' }, {
    'x': 1552838400000,
    'y': 1.324,
    'equityReturn': 4.4164,
    'unitMoney': ''
  }, { 'x': 1552924800000, 'y': 1.3, 'equityReturn': -1.8127, 'unitMoney': '' }, {
    'x': 1553011200000,
    'y': 1.291,
    'equityReturn': -0.6923,
    'unitMoney': ''
  }, { 'x': 1553097600000, 'y': 1.286, 'equityReturn': -0.3873, 'unitMoney': '' }, {
    'x': 1553184000000,
    'y': 1.292,
    'equityReturn': 0.4666,
    'unitMoney': ''
  }, { 'x': 1553443200000, 'y': 1.274, 'equityReturn': -1.3932, 'unitMoney': '' }, {
    'x': 1553529600000,
    'y': 1.26,
    'equityReturn': -1.0989,
    'unitMoney': ''
  }, { 'x': 1553616000000, 'y': 1.299, 'equityReturn': 3.0952, 'unitMoney': '' }, {
    'x': 1553702400000,
    'y': 1.293,
    'equityReturn': -0.4619,
    'unitMoney': ''
  }, { 'x': 1553788800000, 'y': 1.339, 'equityReturn': 3.5576, 'unitMoney': '' }, {
    'x': 1554048000000,
    'y': 1.359,
    'equityReturn': 1.4937,
    'unitMoney': ''
  }, { 'x': 1554134400000, 'y': 1.332, 'equityReturn': -1.9868, 'unitMoney': '' }, {
    'x': 1554220800000,
    'y': 1.329,
    'equityReturn': -0.2252,
    'unitMoney': ''
  }, { 'x': 1554307200000, 'y': 1.323, 'equityReturn': -0.4515, 'unitMoney': '' }, {
    'x': 1554652800000,
    'y': 1.301,
    'equityReturn': -1.6629,
    'unitMoney': ''
  }, { 'x': 1554739200000, 'y': 1.323, 'equityReturn': 1.691, 'unitMoney': '' }, {
    'x': 1554825600000,
    'y': 1.339,
    'equityReturn': 1.2094,
    'unitMoney': ''
  }, { 'x': 1554912000000, 'y': 1.294, 'equityReturn': -3.3607, 'unitMoney': '' }, {
    'x': 1554998400000,
    'y': 1.292,
    'equityReturn': -0.1546,
    'unitMoney': ''
  }, { 'x': 1555257600000, 'y': 1.279, 'equityReturn': -1.0062, 'unitMoney': '' }, {
    'x': 1555344000000,
    'y': 1.295,
    'equityReturn': 1.251,
    'unitMoney': ''
  }, { 'x': 1555430400000, 'y': 1.297, 'equityReturn': 0.1544, 'unitMoney': '' }, {
    'x': 1555516800000,
    'y': 1.293,
    'equityReturn': -0.3084,
    'unitMoney': ''
  }, { 'x': 1555603200000, 'y': 1.298, 'equityReturn': 0.3867, 'unitMoney': '' }, {
    'x': 1555862400000,
    'y': 1.295,
    'equityReturn': -0.2311,
    'unitMoney': ''
  }, { 'x': 1555948800000, 'y': 1.295, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1556035200000,
    'y': 1.303,
    'equityReturn': 0.6178,
    'unitMoney': ''
  }, { 'x': 1556121600000, 'y': 1.305, 'equityReturn': 0.1535, 'unitMoney': '' }, {
    'x': 1556208000000,
    'y': 1.306,
    'equityReturn': 0.0766,
    'unitMoney': ''
  }, { 'x': 1556467200000, 'y': 1.33, 'equityReturn': 1.8377, 'unitMoney': '' }, {
    'x': 1556553600000,
    'y': 1.324,
    'equityReturn': -0.4511,
    'unitMoney': ''
  }, { 'x': 1557072000000, 'y': 1.259, 'equityReturn': -4.9094, 'unitMoney': '' }, {
    'x': 1557158400000,
    'y': 1.302,
    'equityReturn': 3.4154,
    'unitMoney': ''
  }, { 'x': 1557244800000, 'y': 1.279, 'equityReturn': -1.7665, 'unitMoney': '' }, {
    'x': 1557331200000,
    'y': 1.245,
    'equityReturn': -2.6583,
    'unitMoney': ''
  }, { 'x': 1557417600000, 'y': 1.29, 'equityReturn': 3.6145, 'unitMoney': '' }, {
    'x': 1557676800000,
    'y': 1.3,
    'equityReturn': 0.7752,
    'unitMoney': ''
  }, { 'x': 1557763200000, 'y': 1.293, 'equityReturn': -0.5385, 'unitMoney': '' }, {
    'x': 1557849600000,
    'y': 1.33,
    'equityReturn': 2.8616,
    'unitMoney': ''
  }, { 'x': 1557936000000, 'y': 1.343, 'equityReturn': 0.9774, 'unitMoney': '' }, {
    'x': 1558022400000,
    'y': 1.313,
    'equityReturn': -2.2338,
    'unitMoney': ''
  }, { 'x': 1558281600000, 'y': 1.288, 'equityReturn': -1.904, 'unitMoney': '' }, {
    'x': 1558368000000,
    'y': 1.305,
    'equityReturn': 1.3199,
    'unitMoney': ''
  }, { 'x': 1558454400000, 'y': 1.304, 'equityReturn': -0.0766, 'unitMoney': '' }, {
    'x': 1558540800000,
    'y': 1.273,
    'equityReturn': -2.3773,
    'unitMoney': ''
  }, { 'x': 1558627200000, 'y': 1.273, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1558886400000,
    'y': 1.288,
    'equityReturn': 1.1783,
    'unitMoney': ''
  }, { 'x': 1558972800000, 'y': 1.309, 'equityReturn': 1.6304, 'unitMoney': '' }, {
    'x': 1559059200000,
    'y': 1.303,
    'equityReturn': -0.4584,
    'unitMoney': ''
  }, { 'x': 1559145600000, 'y': 1.31, 'equityReturn': 0.5372, 'unitMoney': '' }, {
    'x': 1559232000000,
    'y': 1.324,
    'equityReturn': 1.0687,
    'unitMoney': ''
  }, { 'x': 1559491200000, 'y': 1.315, 'equityReturn': -0.6798, 'unitMoney': '' }, {
    'x': 1559577600000,
    'y': 1.289,
    'equityReturn': -1.9772,
    'unitMoney': ''
  }, { 'x': 1559664000000, 'y': 1.264, 'equityReturn': -1.9395, 'unitMoney': '' }, {
    'x': 1559750400000,
    'y': 1.255,
    'equityReturn': -0.712,
    'unitMoney': ''
  }, { 'x': 1560096000000, 'y': 1.275, 'equityReturn': 1.5936, 'unitMoney': '' }, {
    'x': 1560182400000,
    'y': 1.316,
    'equityReturn': 3.2157,
    'unitMoney': ''
  }, { 'x': 1560268800000, 'y': 1.315, 'equityReturn': -0.076, 'unitMoney': '' }, {
    'x': 1560355200000,
    'y': 1.331,
    'equityReturn': 1.2167,
    'unitMoney': ''
  }, { 'x': 1560441600000, 'y': 1.328, 'equityReturn': -0.2254, 'unitMoney': '' }, {
    'x': 1560700800000,
    'y': 1.316,
    'equityReturn': -0.9036,
    'unitMoney': ''
  }, { 'x': 1560787200000, 'y': 1.33, 'equityReturn': 1.0638, 'unitMoney': '' }, {
    'x': 1560873600000,
    'y': 1.342,
    'equityReturn': 0.9023,
    'unitMoney': ''
  }, { 'x': 1560960000000, 'y': 1.375, 'equityReturn': 2.459, 'unitMoney': '' }, {
    'x': 1561046400000,
    'y': 1.375,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1561305600000, 'y': 1.382, 'equityReturn': 0.5091, 'unitMoney': '' }, {
    'x': 1561392000000,
    'y': 1.38,
    'equityReturn': -0.1447,
    'unitMoney': ''
  }, { 'x': 1561478400000, 'y': 1.427, 'equityReturn': 3.4058, 'unitMoney': '' }, {
    'x': 1561564800000,
    'y': 1.442,
    'equityReturn': 1.0512,
    'unitMoney': ''
  }, { 'x': 1561651200000, 'y': 1.433, 'equityReturn': -0.6241, 'unitMoney': '' }, {
    'x': 1561824000000,
    'y': 1.433,
    'equityReturn': 0,
    'unitMoney': ''
  }, { 'x': 1561910400000, 'y': 1.465, 'equityReturn': 2.2331, 'unitMoney': '' }, {
    'x': 1561996800000,
    'y': 1.484,
    'equityReturn': 1.2969,
    'unitMoney': ''
  }, { 'x': 1562083200000, 'y': 1.45, 'equityReturn': -2.2911, 'unitMoney': '' }, {
    'x': 1562169600000,
    'y': 1.419,
    'equityReturn': -2.1379,
    'unitMoney': ''
  }, { 'x': 1562256000000, 'y': 1.447, 'equityReturn': 1.9732, 'unitMoney': '' }, {
    'x': 1562515200000,
    'y': 1.414,
    'equityReturn': -2.2806,
    'unitMoney': ''
  }, { 'x': 1562601600000, 'y': 1.42, 'equityReturn': 0.4243, 'unitMoney': '' }, {
    'x': 1562688000000,
    'y': 1.422,
    'equityReturn': 0.1408,
    'unitMoney': ''
  }, { 'x': 1562774400000, 'y': 1.421, 'equityReturn': -0.0703, 'unitMoney': '' }, {
    'x': 1562860800000,
    'y': 1.423,
    'equityReturn': 0.1407,
    'unitMoney': ''
  }, { 'x': 1563120000000, 'y': 1.409, 'equityReturn': -0.9838, 'unitMoney': '' }, {
    'x': 1563206400000,
    'y': 1.388,
    'equityReturn': -1.4904,
    'unitMoney': ''
  }, { 'x': 1563292800000, 'y': 1.38, 'equityReturn': -0.5764, 'unitMoney': '' }, {
    'x': 1563379200000,
    'y': 1.36,
    'equityReturn': -1.4493,
    'unitMoney': ''
  }, { 'x': 1563465600000, 'y': 1.366, 'equityReturn': 0.4412, 'unitMoney': '' }, {
    'x': 1563724800000,
    'y': 1.366,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1563811200000, 'y': 1.366, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1563897600000,
    'y': 1.376,
    'equityReturn': 0.7321,
    'unitMoney': ''
  }, { 'x': 1563984000000, 'y': 1.374, 'equityReturn': -0.1453, 'unitMoney': '' }, {
    'x': 1564070400000,
    'y': 1.403,
    'equityReturn': 2.1106,
    'unitMoney': ''
  }, { 'x': 1564329600000, 'y': 1.39, 'equityReturn': -0.9266, 'unitMoney': '' }, {
    'x': 1564416000000,
    'y': 1.391,
    'equityReturn': 0.0719,
    'unitMoney': ''
  }, { 'x': 1564502400000, 'y': 1.383, 'equityReturn': -0.5751, 'unitMoney': '' }, {
    'x': 1564588800000,
    'y': 1.377,
    'equityReturn': -0.4338,
    'unitMoney': ''
  }, { 'x': 1564675200000, 'y': 1.389, 'equityReturn': 0.8715, 'unitMoney': '' }, {
    'x': 1564934400000,
    'y': 1.363,
    'equityReturn': -1.8719,
    'unitMoney': ''
  }, { 'x': 1565020800000, 'y': 1.366, 'equityReturn': 0.2201, 'unitMoney': '' }, {
    'x': 1565107200000,
    'y': 1.391,
    'equityReturn': 1.8302,
    'unitMoney': ''
  }, { 'x': 1565193600000, 'y': 1.42, 'equityReturn': 2.0848, 'unitMoney': '' }, {
    'x': 1565280000000,
    'y': 1.418,
    'equityReturn': -0.1408,
    'unitMoney': ''
  }, { 'x': 1565539200000, 'y': 1.433, 'equityReturn': 1.0578, 'unitMoney': '' }, {
    'x': 1565625600000,
    'y': 1.434,
    'equityReturn': 0.0698,
    'unitMoney': ''
  }, { 'x': 1565712000000, 'y': 1.466, 'equityReturn': 2.2315, 'unitMoney': '' }, {
    'x': 1565798400000,
    'y': 1.466,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1565884800000, 'y': 1.477, 'equityReturn': 0.7503, 'unitMoney': '' }, {
    'x': 1566144000000,
    'y': 1.488,
    'equityReturn': 0.7448,
    'unitMoney': ''
  }, { 'x': 1566230400000, 'y': 1.491, 'equityReturn': 0.2016, 'unitMoney': '' }, {
    'x': 1566316800000,
    'y': 1.475,
    'equityReturn': -1.0731,
    'unitMoney': ''
  }, { 'x': 1566403200000, 'y': 1.489, 'equityReturn': 0.9492, 'unitMoney': '' }, {
    'x': 1566489600000,
    'y': 1.537,
    'equityReturn': 3.2236,
    'unitMoney': ''
  }, { 'x': 1566748800000, 'y': 1.535, 'equityReturn': -0.1301, 'unitMoney': '' }, {
    'x': 1566835200000,
    'y': 1.541,
    'equityReturn': 0.3909,
    'unitMoney': ''
  }, { 'x': 1566921600000, 'y': 1.535, 'equityReturn': -0.3894, 'unitMoney': '' }, {
    'x': 1567008000000,
    'y': 1.531,
    'equityReturn': -0.2606,
    'unitMoney': ''
  }, { 'x': 1567094400000, 'y': 1.541, 'equityReturn': 0.6532, 'unitMoney': '' }, {
    'x': 1567353600000,
    'y': 1.569,
    'equityReturn': 1.817,
    'unitMoney': ''
  }, { 'x': 1567440000000, 'y': 1.561, 'equityReturn': -0.5099, 'unitMoney': '' }, {
    'x': 1567526400000,
    'y': 1.559,
    'equityReturn': -0.1281,
    'unitMoney': ''
  }, { 'x': 1567612800000, 'y': 1.548, 'equityReturn': -0.7056, 'unitMoney': '' }, {
    'x': 1567699200000,
    'y': 1.558,
    'equityReturn': 0.646,
    'unitMoney': ''
  }, { 'x': 1567958400000, 'y': 1.563, 'equityReturn': 0.3209, 'unitMoney': '' }, {
    'x': 1568044800000,
    'y': 1.577,
    'equityReturn': 0.8957,
    'unitMoney': ''
  }, { 'x': 1568131200000, 'y': 1.543, 'equityReturn': -2.156, 'unitMoney': '' }, {
    'x': 1568217600000,
    'y': 1.549,
    'equityReturn': 0.3889,
    'unitMoney': ''
  }, { 'x': 1568563200000, 'y': 1.549, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1568649600000,
    'y': 1.543,
    'equityReturn': -0.3873,
    'unitMoney': ''
  }, { 'x': 1568736000000, 'y': 1.576, 'equityReturn': 2.1387, 'unitMoney': '' }, {
    'x': 1568822400000,
    'y': 1.595,
    'equityReturn': 1.2056,
    'unitMoney': ''
  }, { 'x': 1568908800000, 'y': 1.608, 'equityReturn': 0.815, 'unitMoney': '' }, {
    'x': 1569168000000,
    'y': 1.592,
    'equityReturn': -0.995,
    'unitMoney': ''
  }, { 'x': 1569254400000, 'y': 1.632, 'equityReturn': 2.5126, 'unitMoney': '' }, {
    'x': 1569340800000,
    'y': 1.636,
    'equityReturn': 0.2451,
    'unitMoney': ''
  }, { 'x': 1569427200000, 'y': 1.623, 'equityReturn': -0.7946, 'unitMoney': '' }, {
    'x': 1569513600000,
    'y': 1.627,
    'equityReturn': 0.2465,
    'unitMoney': ''
  }, { 'x': 1569772800000, 'y': 1.637, 'equityReturn': 0.6146, 'unitMoney': '' }, {
    'x': 1570464000000,
    'y': 1.652,
    'equityReturn': 0.9163,
    'unitMoney': ''
  }, { 'x': 1570550400000, 'y': 1.645, 'equityReturn': -0.4237, 'unitMoney': '' }, {
    'x': 1570636800000,
    'y': 1.715,
    'equityReturn': 4.2553,
    'unitMoney': ''
  }, { 'x': 1570723200000, 'y': 1.722, 'equityReturn': 0.4082, 'unitMoney': '' }, {
    'x': 1570982400000,
    'y': 1.721,
    'equityReturn': -0.0581,
    'unitMoney': ''
  }, { 'x': 1571068800000, 'y': 1.722, 'equityReturn': 0.0581, 'unitMoney': '' }, {
    'x': 1571155200000,
    'y': 1.756,
    'equityReturn': 1.9744,
    'unitMoney': ''
  }, { 'x': 1571241600000, 'y': 1.759, 'equityReturn': 0.1708, 'unitMoney': '' }, {
    'x': 1571328000000,
    'y': 1.756,
    'equityReturn': -0.1706,
    'unitMoney': ''
  }, { 'x': 1571587200000, 'y': 1.714, 'equityReturn': -2.3918, 'unitMoney': '' }, {
    'x': 1571673600000,
    'y': 1.737,
    'equityReturn': 1.3419,
    'unitMoney': ''
  }, { 'x': 1571760000000, 'y': 1.705, 'equityReturn': -1.8423, 'unitMoney': '' }, {
    'x': 1571846400000,
    'y': 1.704,
    'equityReturn': -0.0587,
    'unitMoney': ''
  }, { 'x': 1571932800000, 'y': 1.723, 'equityReturn': 1.115, 'unitMoney': '' }, {
    'x': 1572192000000,
    'y': 1.751,
    'equityReturn': 1.6251,
    'unitMoney': ''
  }, { 'x': 1572278400000, 'y': 1.77, 'equityReturn': 1.0851, 'unitMoney': '' }, {
    'x': 1572364800000,
    'y': 1.758,
    'equityReturn': -0.678,
    'unitMoney': ''
  }, { 'x': 1572451200000, 'y': 1.781, 'equityReturn': 1.3083, 'unitMoney': '' }, {
    'x': 1572537600000,
    'y': 1.813,
    'equityReturn': 1.7967,
    'unitMoney': ''
  }, { 'x': 1572796800000, 'y': 1.839, 'equityReturn': 1.4341, 'unitMoney': '' }, {
    'x': 1572883200000,
    'y': 1.829,
    'equityReturn': -0.5438,
    'unitMoney': ''
  }, { 'x': 1572969600000, 'y': 1.819, 'equityReturn': -0.5467, 'unitMoney': '' }, {
    'x': 1573056000000,
    'y': 1.832,
    'equityReturn': 0.7147,
    'unitMoney': ''
  }, { 'x': 1573142400000, 'y': 1.821, 'equityReturn': -0.6004, 'unitMoney': '' }, {
    'x': 1573401600000,
    'y': 1.782,
    'equityReturn': -2.1417,
    'unitMoney': ''
  }, { 'x': 1573488000000, 'y': 1.8, 'equityReturn': 1.0101, 'unitMoney': '' }, {
    'x': 1573574400000,
    'y': 1.853,
    'equityReturn': 2.9444,
    'unitMoney': ''
  }, { 'x': 1573660800000, 'y': 1.879, 'equityReturn': 1.4031, 'unitMoney': '' }, {
    'x': 1573747200000,
    'y': 1.86,
    'equityReturn': -1.0112,
    'unitMoney': ''
  }, { 'x': 1574006400000, 'y': 1.863, 'equityReturn': 0.1613, 'unitMoney': '' }, {
    'x': 1574092800000,
    'y': 1.91,
    'equityReturn': 2.5228,
    'unitMoney': ''
  }, { 'x': 1574179200000, 'y': 1.911, 'equityReturn': 0.0524, 'unitMoney': '' }, {
    'x': 1574265600000,
    'y': 1.878,
    'equityReturn': -1.7268,
    'unitMoney': ''
  }, { 'x': 1574352000000, 'y': 1.788, 'equityReturn': -4.7923, 'unitMoney': '' }, {
    'x': 1574611200000,
    'y': 1.76,
    'equityReturn': -1.566,
    'unitMoney': ''
  }, { 'x': 1574697600000, 'y': 1.774, 'equityReturn': 0.7955, 'unitMoney': '' }, {
    'x': 1574784000000,
    'y': 1.762,
    'equityReturn': -0.6764,
    'unitMoney': ''
  }, { 'x': 1574870400000, 'y': 1.773, 'equityReturn': 0.6243, 'unitMoney': '' }, {
    'x': 1574956800000,
    'y': 1.726,
    'equityReturn': -2.6509,
    'unitMoney': ''
  }, { 'x': 1575216000000, 'y': 1.707, 'equityReturn': -1.1008, 'unitMoney': '' }, {
    'x': 1575302400000,
    'y': 1.702,
    'equityReturn': -0.2929,
    'unitMoney': ''
  }, { 'x': 1575388800000, 'y': 1.718, 'equityReturn': 0.9401, 'unitMoney': '' }, {
    'x': 1575475200000,
    'y': 1.74,
    'equityReturn': 1.2806,
    'unitMoney': ''
  }, { 'x': 1575561600000, 'y': 1.755, 'equityReturn': 0.8621, 'unitMoney': '' }, {
    'x': 1575820800000,
    'y': 1.714,
    'equityReturn': -2.3362,
    'unitMoney': ''
  }, { 'x': 1575907200000, 'y': 1.732, 'equityReturn': 1.0502, 'unitMoney': '' }, {
    'x': 1575993600000,
    'y': 1.73,
    'equityReturn': -0.1155,
    'unitMoney': ''
  }, { 'x': 1576080000000, 'y': 1.727, 'equityReturn': -0.1734, 'unitMoney': '' }, {
    'x': 1576166400000,
    'y': 1.765,
    'equityReturn': 2.2003,
    'unitMoney': ''
  }, { 'x': 1576425600000, 'y': 1.765, 'equityReturn': 0.0, 'unitMoney': '' }, {
    'x': 1576512000000,
    'y': 1.772,
    'equityReturn': 0.3966,
    'unitMoney': ''
  }, { 'x': 1576598400000, 'y': 1.739, 'equityReturn': -1.8623, 'unitMoney': '' }, {
    'x': 1576684800000,
    'y': 1.729,
    'equityReturn': -0.575,
    'unitMoney': ''
  }, { 'x': 1576771200000, 'y': 1.712, 'equityReturn': -0.9832, 'unitMoney': '' }, {
    'x': 1577030400000,
    'y': 1.706,
    'equityReturn': -0.3505,
    'unitMoney': ''
  }, { 'x': 1577116800000, 'y': 1.711, 'equityReturn': 0.2931, 'unitMoney': '' }, {
    'x': 1577203200000,
    'y': 1.709,
    'equityReturn': -0.1169,
    'unitMoney': ''
  }, { 'x': 1577289600000, 'y': 1.715, 'equityReturn': 0.3511, 'unitMoney': '' }, {
    'x': 1577376000000,
    'y': 1.705,
    'equityReturn': -0.5831,
    'unitMoney': ''
  }, { 'x': 1577635200000, 'y': 1.706, 'equityReturn': 0.0587, 'unitMoney': '' }, {
    'x': 1577721600000,
    'y': 1.733,
    'equityReturn': 1.5826,
    'unitMoney': ''
  }, { 'x': 1577894400000, 'y': 1.728, 'equityReturn': -0.2885, 'unitMoney': '' }, {
    'x': 1577980800000,
    'y': 1.715,
    'equityReturn': -0.7523,
    'unitMoney': ''
  }, { 'x': 1578240000000, 'y': 1.7, 'equityReturn': -0.8746, 'unitMoney': '' }, {
    'x': 1578326400000,
    'y': 1.733,
    'equityReturn': 1.9412,
    'unitMoney': ''
  }, { 'x': 1578412800000, 'y': 1.728, 'equityReturn': -0.2885, 'unitMoney': '' }, {
    'x': 1578499200000,
    'y': 1.79,
    'equityReturn': 3.588,
    'unitMoney': ''
  }, { 'x': 1578585600000, 'y': 1.799, 'equityReturn': 0.5028, 'unitMoney': '' }, {
    'x': 1578844800000,
    'y': 1.815,
    'equityReturn': 0.8894,
    'unitMoney': ''
  }, { 'x': 1578931200000, 'y': 1.795, 'equityReturn': -1.1019, 'unitMoney': '' }, {
    'x': 1579017600000,
    'y': 1.824,
    'equityReturn': 1.6156,
    'unitMoney': ''
  }, { 'x': 1579104000000, 'y': 1.854, 'equityReturn': 1.6447, 'unitMoney': '' }, {
    'x': 1579190400000,
    'y': 1.878,
    'equityReturn': 1.2945,
    'unitMoney': ''
  }, { 'x': 1579449600000, 'y': 1.917, 'equityReturn': 2.0767, 'unitMoney': '' }, {
    'x': 1579536000000,
    'y': 1.919,
    'equityReturn': 0.1043,
    'unitMoney': ''
  }, { 'x': 1579622400000, 'y': 1.92, 'equityReturn': 0.0521, 'unitMoney': '' }, {
    'x': 1579708800000,
    'y': 1.866,
    'equityReturn': -2.8125,
    'unitMoney': ''
  }, { 'x': 1580659200000, 'y': 1.776, 'equityReturn': -4.8232, 'unitMoney': '' }, {
    'x': 1580745600000,
    'y': 1.848,
    'equityReturn': 4.0541,
    'unitMoney': ''
  }, { 'x': 1580832000000, 'y': 1.872, 'equityReturn': 1.2987, 'unitMoney': '' }, {
    'x': 1580918400000,
    'y': 1.936,
    'equityReturn': 3.4188,
    'unitMoney': ''
  }, { 'x': 1581004800000, 'y': 1.915, 'equityReturn': -1.0847, 'unitMoney': '' }, {
    'x': 1581264000000,
    'y': 1.924,
    'equityReturn': 0.47,
    'unitMoney': ''
  }, { 'x': 1581350400000, 'y': 1.938, 'equityReturn': 0.7277, 'unitMoney': '' }, {
    'x': 1581436800000,
    'y': 1.973,
    'equityReturn': 1.806,
    'unitMoney': ''
  }, { 'x': 1581523200000, 'y': 1.956, 'equityReturn': -0.8616, 'unitMoney': '' }, {
    'x': 1581609600000,
    'y': 1.968,
    'equityReturn': 0.6135,
    'unitMoney': ''
  }, { 'x': 1581868800000, 'y': 2.019, 'equityReturn': 2.5915, 'unitMoney': '' }, {
    'x': 1581955200000,
    'y': 2.01,
    'equityReturn': -0.4458,
    'unitMoney': ''
  }, { 'x': 1582041600000, 'y': 1.979, 'equityReturn': -1.5423, 'unitMoney': '' }, {
    'x': 1582128000000,
    'y': 2.004,
    'equityReturn': 1.2633,
    'unitMoney': ''
  }, { 'x': 1582214400000, 'y': 2.02, 'equityReturn': 0.7984, 'unitMoney': '' }, {
    'x': 1582473600000,
    'y': 2.031,
    'equityReturn': 0.5446,
    'unitMoney': ''
  }, { 'x': 1582560000000, 'y': 2.05, 'equityReturn': 0.9355, 'unitMoney': '' }, {
    'x': 1582646400000,
    'y': 1.993,
    'equityReturn': -2.7805,
    'unitMoney': ''
  }, { 'x': 1582732800000, 'y': 2.025, 'equityReturn': 1.6056, 'unitMoney': '' }, {
    'x': 1582819200000,
    'y': 1.973,
    'equityReturn': -2.5679,
    'unitMoney': ''
  }, { 'x': 1583078400000, 'y': 2.012, 'equityReturn': 1.9767, 'unitMoney': '' }, {
    'x': 1583164800000,
    'y': 2.063,
    'equityReturn': 2.5348,
    'unitMoney': ''
  }, { 'x': 1583251200000, 'y': 2.073, 'equityReturn': 0.4847, 'unitMoney': '' }, {
    'x': 1583337600000,
    'y': 2.122,
    'equityReturn': 2.3637,
    'unitMoney': ''
  }, { 'x': 1583424000000, 'y': 2.128, 'equityReturn': 0.2828, 'unitMoney': '' }, {
    'x': 1583683200000,
    'y': 2.088,
    'equityReturn': -1.8797,
    'unitMoney': ''
  }, { 'x': 1583769600000, 'y': 2.083, 'equityReturn': -0.2395, 'unitMoney': '' }, {
    'x': 1583856000000,
    'y': 2.051,
    'equityReturn': -1.5362,
    'unitMoney': ''
  }, { 'x': 1583942400000, 'y': 1.983, 'equityReturn': -3.3155, 'unitMoney': '' }, {
    'x': 1584028800000,
    'y': 1.947,
    'equityReturn': -1.8154,
    'unitMoney': ''
  }, { 'x': 1584288000000, 'y': 1.857, 'equityReturn': -4.6225, 'unitMoney': '' }, {
    'x': 1584374400000,
    'y': 1.855,
    'equityReturn': -0.1077,
    'unitMoney': ''
  }, { 'x': 1584460800000, 'y': 1.841, 'equityReturn': -0.7547, 'unitMoney': '' }, {
    'x': 1584547200000,
    'y': 1.805,
    'equityReturn': -1.9555,
    'unitMoney': ''
  }, { 'x': 1584633600000, 'y': 1.865, 'equityReturn': 3.3241, 'unitMoney': '' }, {
    'x': 1584892800000,
    'y': 1.822,
    'equityReturn': -2.3056,
    'unitMoney': ''
  }, { 'x': 1584979200000, 'y': 1.875, 'equityReturn': 2.9089, 'unitMoney': '' }, {
    'x': 1585065600000,
    'y': 1.948,
    'equityReturn': 3.8933,
    'unitMoney': ''
  }, { 'x': 1585152000000, 'y': 1.982, 'equityReturn': 1.7454, 'unitMoney': '' }, {
    'x': 1585238400000,
    'y': 1.993,
    'equityReturn': 0.555,
    'unitMoney': ''
  }, { 'x': 1585497600000, 'y': 1.956, 'equityReturn': -1.8565, 'unitMoney': '' }, {
    'x': 1585584000000,
    'y': 2.002,
    'equityReturn': 2.3517,
    'unitMoney': ''
  }, { 'x': 1585670400000, 'y': 1.974, 'equityReturn': -1.3986, 'unitMoney': '' }, {
    'x': 1585756800000,
    'y': 1.998,
    'equityReturn': 1.2158,
    'unitMoney': ''
  }, { 'x': 1585843200000, 'y': 2.013, 'equityReturn': 0.7508, 'unitMoney': '' }, {
    'x': 1586188800000,
    'y': 2.072,
    'equityReturn': 2.9309,
    'unitMoney': ''
  }, { 'x': 1586275200000, 'y': 2.06, 'equityReturn': -0.5792, 'unitMoney': '' }, {
    'x': 1586361600000,
    'y': 2.152,
    'equityReturn': 4.466,
    'unitMoney': ''
  }, { 'x': 1586448000000, 'y': 2.121, 'equityReturn': -1.4405, 'unitMoney': '' }, {
    'x': 1586707200000,
    'y': 2.136,
    'equityReturn': 0.7072,
    'unitMoney': ''
  }, { 'x': 1586793600000, 'y': 2.172, 'equityReturn': 1.6854, 'unitMoney': '' }, {
    'x': 1586880000000,
    'y': 2.145,
    'equityReturn': -1.2431,
    'unitMoney': ''
  }, { 'x': 1586966400000, 'y': 2.163, 'equityReturn': 0.8392, 'unitMoney': '' }, {
    'x': 1587052800000,
    'y': 2.153,
    'equityReturn': -0.4623,
    'unitMoney': ''
  }, { 'x': 1587312000000, 'y': 2.185, 'equityReturn': 1.4863, 'unitMoney': '' }, {
    'x': 1587398400000,
    'y': 2.171,
    'equityReturn': -0.6407,
    'unitMoney': ''
  }, { 'x': 1587484800000, 'y': 2.215, 'equityReturn': 2.0267, 'unitMoney': '' }, {
    'x': 1587571200000,
    'y': 2.218,
    'equityReturn': 0.1354,
    'unitMoney': ''
  }, { 'x': 1587657600000, 'y': 2.176, 'equityReturn': -1.8936, 'unitMoney': '' }, {
    'x': 1587916800000,
    'y': 2.22,
    'equityReturn': 2.0221,
    'unitMoney': ''
  }, { 'x': 1588003200000, 'y': 2.249, 'equityReturn': 1.3063, 'unitMoney': '' }, {
    'x': 1588089600000,
    'y': 2.219,
    'equityReturn': -1.3339,
    'unitMoney': ''
  }, { 'x': 1588176000000, 'y': 2.181, 'equityReturn': -1.7125, 'unitMoney': '' }, {
    'x': 1588694400000,
    'y': 2.215,
    'equityReturn': 1.5589,
    'unitMoney': ''
  }, { 'x': 1588780800000, 'y': 2.229, 'equityReturn': 0.6321, 'unitMoney': '' }, {
    'x': 1588867200000,
    'y': 2.244,
    'equityReturn': 0.6729,
    'unitMoney': ''
  }, { 'x': 1589126400000, 'y': 2.21, 'equityReturn': -1.5152, 'unitMoney': '' }, {
    'x': 1589212800000,
    'y': 2.279,
    'equityReturn': 3.1222,
    'unitMoney': ''
  }, { 'x': 1589299200000, 'y': 2.365, 'equityReturn': 3.7736, 'unitMoney': '' }, {
    'x': 1589385600000,
    'y': 2.359,
    'equityReturn': -0.2537,
    'unitMoney': ''
  }, { 'x': 1589472000000, 'y': 2.337, 'equityReturn': -0.9326, 'unitMoney': '' }, {
    'x': 1589731200000,
    'y': 2.393,
    'equityReturn': 2.3962,
    'unitMoney': ''
  }, { 'x': 1589817600000, 'y': 2.413, 'equityReturn': 0.8358, 'unitMoney': '' }, {
    'x': 1589904000000,
    'y': 2.37,
    'equityReturn': -1.782,
    'unitMoney': ''
  }, { 'x': 1589990400000, 'y': 2.394, 'equityReturn': 1.0127, 'unitMoney': '' }, {
    'x': 1590076800000,
    'y': 2.352,
    'equityReturn': -1.7544,
    'unitMoney': ''
  }, { 'x': 1590336000000, 'y': 2.386, 'equityReturn': 1.4456, 'unitMoney': '' }, {
    'x': 1590422400000,
    'y': 2.452,
    'equityReturn': 2.7661,
    'unitMoney': ''
  }, { 'x': 1590508800000, 'y': 2.402, 'equityReturn': -2.0392, 'unitMoney': '' }, {
    'x': 1590595200000,
    'y': 2.382,
    'equityReturn': -0.8326,
    'unitMoney': ''
  }, { 'x': 1590681600000, 'y': 2.471, 'equityReturn': 3.7364, 'unitMoney': '' }, {
    'x': 1590940800000,
    'y': 2.511,
    'equityReturn': 1.6188,
    'unitMoney': ''
  }, { 'x': 1591027200000, 'y': 2.457, 'equityReturn': -2.1505, 'unitMoney': '' }, {
    'x': 1591113600000,
    'y': 2.477,
    'equityReturn': 0.814,
    'unitMoney': ''
  }, { 'x': 1591200000000, 'y': 2.505, 'equityReturn': 1.1304, 'unitMoney': '' }, {
    'x': 1591286400000,
    'y': 2.547,
    'equityReturn': 1.6766,
    'unitMoney': ''
  }, { 'x': 1591545600000, 'y': 2.505, 'equityReturn': -1.649, 'unitMoney': '' }, {
    'x': 1591632000000,
    'y': 2.534,
    'equityReturn': 1.1577,
    'unitMoney': ''
  }, { 'x': 1591718400000, 'y': 2.6, 'equityReturn': 2.6046, 'unitMoney': '' }, {
    'x': 1591804800000,
    'y': 2.587,
    'equityReturn': -0.5,
    'unitMoney': ''
  }, { 'x': 1591891200000, 'y': 2.628, 'equityReturn': 1.5848, 'unitMoney': '' }, {
    'x': 1592150400000,
    'y': 2.657,
    'equityReturn': 1.1035,
    'unitMoney': ''
  }, { 'x': 1592236800000, 'y': 2.711, 'equityReturn': 2.0324, 'unitMoney': '' }, {
    'x': 1592323200000,
    'y': 2.748,
    'equityReturn': 1.3648,
    'unitMoney': ''
  }, { 'x': 1592409600000, 'y': 2.675, 'equityReturn': -2.6565, 'unitMoney': '' }, {
    'x': 1592496000000,
    'y': 2.758,
    'equityReturn': 3.1028,
    'unitMoney': ''
  }, { 'x': 1592755200000, 'y': 2.761, 'equityReturn': 0.1088, 'unitMoney': '' }, {
    'x': 1592841600000,
    'y': 2.843,
    'equityReturn': 2.9699,
    'unitMoney': ''
  }, { 'x': 1592928000000, 'y': 2.82, 'equityReturn': -0.809, 'unitMoney': '' }, {
    'x': 1593360000000,
    'y': 2.867,
    'equityReturn': 1.6667,
    'unitMoney': ''
  }, { 'x': 1593446400000, 'y': 2.905, 'equityReturn': 1.3254, 'unitMoney': '' }, {
    'x': 1593532800000,
    'y': 2.838,
    'equityReturn': -2.3064,
    'unitMoney': ''
  }, { 'x': 1593619200000, 'y': 2.8, 'equityReturn': -1.339, 'unitMoney': '' }, {
    'x': 1593705600000,
    'y': 2.839,
    'equityReturn': 1.3929,
    'unitMoney': ''
  }, { 'x': 1593964800000, 'y': 2.81, 'equityReturn': -1.0215, 'unitMoney': '' }, {
    'x': 1594051200000,
    'y': 2.868,
    'equityReturn': 2.0641,
    'unitMoney': ''
  }, { 'x': 1594137600000, 'y': 2.871, 'equityReturn': 0.1046, 'unitMoney': '' }, {
    'x': 1594224000000,
    'y': 2.969,
    'equityReturn': 3.4134,
    'unitMoney': ''
  }, { 'x': 1594310400000, 'y': 3.013, 'equityReturn': 1.482, 'unitMoney': '' }, {
    'x': 1594569600000,
    'y': 3.107,
    'equityReturn': 3.1198,
    'unitMoney': ''
  }, { 'x': 1594656000000, 'y': 3.091, 'equityReturn': -0.515, 'unitMoney': '' }, {
    'x': 1594742400000,
    'y': 3.137,
    'equityReturn': 1.4882,
    'unitMoney': ''
  }, { 'x': 1594828800000, 'y': 2.947, 'equityReturn': -6.0567, 'unitMoney': '' }, {
    'x': 1594915200000,
    'y': 3.001,
    'equityReturn': 1.8324,
    'unitMoney': ''
  }, { 'x': 1595174400000, 'y': 2.954, 'equityReturn': -1.5661, 'unitMoney': '' }, {
    'x': 1595260800000,
    'y': 3.077,
    'equityReturn': 4.1638,
    'unitMoney': ''
  }, { 'x': 1595347200000, 'y': 3.128, 'equityReturn': 1.6575, 'unitMoney': '' }, {
    'x': 1595433600000,
    'y': 3.211,
    'equityReturn': 2.6535,
    'unitMoney': ''
  }, { 'x': 1595520000000, 'y': 3.019, 'equityReturn': -5.9794, 'unitMoney': '' }, {
    'x': 1595779200000,
    'y': 3.057,
    'equityReturn': 1.2587,
    'unitMoney': ''
  }, { 'x': 1595865600000, 'y': 3.063, 'equityReturn': 0.1963, 'unitMoney': '' }, {
    'x': 1595952000000,
    'y': 3.154,
    'equityReturn': 2.9709,
    'unitMoney': ''
  }, { 'x': 1596038400000, 'y': 3.152, 'equityReturn': -0.0634, 'unitMoney': '' }, {
    'x': 1596124800000,
    'y': 3.208,
    'equityReturn': 1.7766,
    'unitMoney': ''
  }, { 'x': 1596384000000, 'y': 3.272, 'equityReturn': 1.995, 'unitMoney': '' }, {
    'x': 1596470400000,
    'y': 3.215,
    'equityReturn': -1.7421,
    'unitMoney': ''
  }, { 'x': 1596556800000, 'y': 3.271, 'equityReturn': 1.7418, 'unitMoney': '' }, {
    'x': 1596643200000,
    'y': 3.188,
    'equityReturn': -2.5375,
    'unitMoney': ''
  }, { 'x': 1596729600000, 'y': 3.157, 'equityReturn': -0.9724, 'unitMoney': '' }, {
    'x': 1596988800000,
    'y': 3.15,
    'equityReturn': -0.2217,
    'unitMoney': ''
  }, { 'x': 1597075200000, 'y': 3.109, 'equityReturn': -1.3016, 'unitMoney': '' }, {
    'x': 1597161600000,
    'y': 3.013,
    'equityReturn': -3.0878,
    'unitMoney': ''
  }, { 'x': 1597248000000, 'y': 2.962, 'equityReturn': -1.6927, 'unitMoney': '' }, {
    'x': 1597334400000,
    'y': 2.974,
    'equityReturn': 0.4051,
    'unitMoney': ''
  }, { 'x': 1597593600000, 'y': 3.006, 'equityReturn': 1.076, 'unitMoney': '' }, {
    'x': 1597680000000,
    'y': 3.042,
    'equityReturn': 1.1976,
    'unitMoney': ''
  }, { 'x': 1597766400000, 'y': 2.954, 'equityReturn': -2.8928, 'unitMoney': '' }, {
    'x': 1597852800000,
    'y': 2.95,
    'equityReturn': -0.1354,
    'unitMoney': ''
  }, { 'x': 1597939200000, 'y': 2.983, 'equityReturn': 1.1186, 'unitMoney': '' }, {
    'x': 1598198400000,
    'y': 2.983,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1598284800000, 'y': 3.022, 'equityReturn': 1.31, 'unitMoney': '' }, {
    'x': 1598371200000,
    'y': 3.022,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1598457600000, 'y': 3.072, 'equityReturn': 1.65, 'unitMoney': '' }, {
    'x': 1598544000000,
    'y': 3.167,
    'equityReturn': 3.09,
    'unitMoney': ''
  }, { 'x': 1598803200000, 'y': 3.155, 'equityReturn': -0.38, 'unitMoney': '' }, {
    'x': 1598889600000,
    'y': 3.152,
    'equityReturn': -0.1,
    'unitMoney': ''
  }, { 'x': 1598976000000, 'y': 3.14, 'equityReturn': -0.38, 'unitMoney': '' }, {
    'x': 1599062400000,
    'y': 3.128,
    'equityReturn': -0.38,
    'unitMoney': ''
  }, { 'x': 1599148800000, 'y': 3.064, 'equityReturn': -2.05, 'unitMoney': '' }, {
    'x': 1599408000000,
    'y': 2.94,
    'equityReturn': -4.05,
    'unitMoney': ''
  }, { 'x': 1599494400000, 'y': 2.936, 'equityReturn': -0.14, 'unitMoney': '' }, {
    'x': 1599580800000,
    'y': 2.816,
    'equityReturn': -4.09,
    'unitMoney': ''
  }, { 'x': 1599667200000, 'y': 2.821, 'equityReturn': 0.18, 'unitMoney': '' }, {
    'x': 1599753600000,
    'y': 2.866,
    'equityReturn': 1.6,
    'unitMoney': ''
  }, { 'x': 1600012800000, 'y': 2.83, 'equityReturn': -1.26, 'unitMoney': '' }, {
    'x': 1600099200000,
    'y': 2.869,
    'equityReturn': 1.38,
    'unitMoney': ''
  }, { 'x': 1600185600000, 'y': 2.806, 'equityReturn': -2.2, 'unitMoney': '' }, {
    'x': 1600272000000,
    'y': 2.762,
    'equityReturn': -1.57,
    'unitMoney': ''
  }, { 'x': 1600358400000, 'y': 2.796, 'equityReturn': 1.23, 'unitMoney': '' }, {
    'x': 1600617600000,
    'y': 2.773,
    'equityReturn': -0.82,
    'unitMoney': ''
  }, { 'x': 1600704000000, 'y': 2.785, 'equityReturn': 0.43, 'unitMoney': '' }, {
    'x': 1600790400000,
    'y': 2.893,
    'equityReturn': 3.88,
    'unitMoney': ''
  }, { 'x': 1600876800000, 'y': 2.857, 'equityReturn': -1.24, 'unitMoney': '' }, {
    'x': 1600963200000,
    'y': 2.883,
    'equityReturn': 0.91,
    'unitMoney': ''
  }, { 'x': 1601222400000, 'y': 2.836, 'equityReturn': -1.63, 'unitMoney': '' }, {
    'x': 1601308800000,
    'y': 2.86,
    'equityReturn': 0.85,
    'unitMoney': ''
  }, { 'x': 1601395200000, 'y': 2.912, 'equityReturn': 1.82, 'unitMoney': '' }, {
    'x': 1602172800000,
    'y': 2.992,
    'equityReturn': 2.75,
    'unitMoney': ''
  }, { 'x': 1602432000000, 'y': 3.101, 'equityReturn': 3.64, 'unitMoney': '' }, {
    'x': 1602518400000,
    'y': 3.149,
    'equityReturn': 1.55,
    'unitMoney': ''
  }, { 'x': 1602604800000, 'y': 3.147, 'equityReturn': -0.06, 'unitMoney': '' }, {
    'x': 1602691200000,
    'y': 3.117,
    'equityReturn': -0.95,
    'unitMoney': ''
  }, { 'x': 1602777600000, 'y': 3.126, 'equityReturn': 0.29, 'unitMoney': '' }, {
    'x': 1603036800000,
    'y': 3.051,
    'equityReturn': -2.4,
    'unitMoney': ''
  }, { 'x': 1603123200000, 'y': 3.09, 'equityReturn': 1.28, 'unitMoney': '' }, {
    'x': 1603209600000,
    'y': 3.086,
    'equityReturn': -0.13,
    'unitMoney': ''
  }, { 'x': 1603296000000, 'y': 3.046, 'equityReturn': -1.3, 'unitMoney': '' }, {
    'x': 1603382400000,
    'y': 2.931,
    'equityReturn': -3.78,
    'unitMoney': ''
  }, { 'x': 1603641600000, 'y': 2.957, 'equityReturn': 0.89, 'unitMoney': '' }, {
    'x': 1603728000000,
    'y': 3.061,
    'equityReturn': 3.52,
    'unitMoney': ''
  }, { 'x': 1603814400000, 'y': 3.081, 'equityReturn': 0.65, 'unitMoney': '' }, {
    'x': 1603900800000,
    'y': 3.145,
    'equityReturn': 2.08,
    'unitMoney': ''
  }, { 'x': 1603987200000, 'y': 3.093, 'equityReturn': -1.65, 'unitMoney': '' }, {
    'x': 1604246400000,
    'y': 3.095,
    'equityReturn': 0.06,
    'unitMoney': ''
  }, { 'x': 1604332800000, 'y': 3.118, 'equityReturn': 0.74, 'unitMoney': '' }, {
    'x': 1604419200000,
    'y': 3.144,
    'equityReturn': 0.83,
    'unitMoney': ''
  }, { 'x': 1604505600000, 'y': 3.14, 'equityReturn': -0.13, 'unitMoney': '' }, {
    'x': 1604592000000,
    'y': 3.069,
    'equityReturn': -2.26,
    'unitMoney': ''
  }, { 'x': 1604851200000, 'y': 3.156, 'equityReturn': 2.83, 'unitMoney': '' }, {
    'x': 1604937600000,
    'y': 3.094,
    'equityReturn': -1.96,
    'unitMoney': ''
  }, { 'x': 1605024000000, 'y': 2.992, 'equityReturn': -3.3, 'unitMoney': '' }, {
    'x': 1605110400000,
    'y': 3.032,
    'equityReturn': 1.34,
    'unitMoney': ''
  }, { 'x': 1605196800000, 'y': 3.025, 'equityReturn': -0.23, 'unitMoney': '' }, {
    'x': 1605456000000,
    'y': 3.048,
    'equityReturn': 0.76,
    'unitMoney': ''
  }, { 'x': 1605542400000, 'y': 2.95, 'equityReturn': -3.22, 'unitMoney': '' }, {
    'x': 1605628800000,
    'y': 2.851,
    'equityReturn': -3.36,
    'unitMoney': ''
  }, { 'x': 1605715200000, 'y': 2.882, 'equityReturn': 1.09, 'unitMoney': '' }, {
    'x': 1605801600000,
    'y': 2.905,
    'equityReturn': 0.8,
    'unitMoney': ''
  }, { 'x': 1606060800000, 'y': 2.889, 'equityReturn': -0.55, 'unitMoney': '' }, {
    'x': 1606147200000,
    'y': 2.877,
    'equityReturn': -0.42,
    'unitMoney': ''
  }, { 'x': 1606233600000, 'y': 2.818, 'equityReturn': -2.05, 'unitMoney': '' }, {
    'x': 1606320000000,
    'y': 2.814,
    'equityReturn': -0.14,
    'unitMoney': ''
  }, { 'x': 1606406400000, 'y': 2.831, 'equityReturn': 0.6, 'unitMoney': '' }, {
    'x': 1606665600000,
    'y': 2.842,
    'equityReturn': 0.39,
    'unitMoney': ''
  }, { 'x': 1606752000000, 'y': 2.936, 'equityReturn': 3.31, 'unitMoney': '' }, {
    'x': 1606838400000,
    'y': 2.936,
    'equityReturn': 0.0,
    'unitMoney': ''
  }, { 'x': 1606924800000, 'y': 2.993, 'equityReturn': 1.94, 'unitMoney': '' }, {
    'x': 1607011200000,
    'y': 3.055,
    'equityReturn': 2.07,
    'unitMoney': ''
  }, { 'x': 1607270400000, 'y': 3.076, 'equityReturn': 0.69, 'unitMoney': '' }, {
    'x': 1607356800000,
    'y': 3.086,
    'equityReturn': 0.33,
    'unitMoney': ''
  }, { 'x': 1607443200000, 'y': 3.039, 'equityReturn': -1.52, 'unitMoney': '' }, {
    'x': 1607529600000,
    'y': 3.1,
    'equityReturn': 2.01,
    'unitMoney': ''
  }, { 'x': 1607616000000, 'y': 3.084, 'equityReturn': -0.52, 'unitMoney': '' }, {
    'x': 1607875200000,
    'y': 3.153,
    'equityReturn': 2.24,
    'unitMoney': ''
  }, { 'x': 1607961600000, 'y': 3.191, 'equityReturn': 1.21, 'unitMoney': '' }, {
    'x': 1608048000000,
    'y': 3.22,
    'equityReturn': 0.91,
    'unitMoney': ''
  }, { 'x': 1608134400000, 'y': 3.284, 'equityReturn': 1.99, 'unitMoney': '' }, {
    'x': 1608220800000,
    'y': 3.265,
    'equityReturn': -0.58,
    'unitMoney': ''
  }, { 'x': 1608480000000, 'y': 3.332, 'equityReturn': 2.05, 'unitMoney': '' }, {
    'x': 1608566400000,
    'y': 3.307,
    'equityReturn': -0.75,
    'unitMoney': ''
  }, { 'x': 1608652800000, 'y': 3.313, 'equityReturn': 0.18, 'unitMoney': '' }, {
    'x': 1608739200000,
    'y': 3.339,
    'equityReturn': 0.78,
    'unitMoney': ''
  }, { 'x': 1608825600000, 'y': 3.401, 'equityReturn': 1.86, 'unitMoney': '' }, {
    'x': 1609084800000,
    'y': 3.383,
    'equityReturn': -0.53,
    'unitMoney': ''
  }, { 'x': 1609171200000, 'y': 3.361, 'equityReturn': -0.65, 'unitMoney': '' }, {
    'x': 1609257600000,
    'y': 3.406,
    'equityReturn': 1.34,
    'unitMoney': ''
  }, { 'x': 1609344000000, 'y': 3.446, 'equityReturn': 1.17, 'unitMoney': '' }, {
    'x': 1609689600000,
    'y': 3.411,
    'equityReturn': -1.02,
    'unitMoney': ''
  }, { 'x': 1609776000000, 'y': 3.473, 'equityReturn': 1.82, 'unitMoney': '' }, {
    'x': 1609862400000,
    'y': 3.537,
    'equityReturn': 1.84,
    'unitMoney': ''
  }, { 'x': 1609948800000, 'y': 3.58, 'equityReturn': 1.22, 'unitMoney': '' }, {
    'x': 1610035200000,
    'y': 3.555,
    'equityReturn': -0.7,
    'unitMoney': ''
  }, { 'x': 1610294400000, 'y': 3.561, 'equityReturn': 0.17, 'unitMoney': '' }, {
    'x': 1610380800000,
    'y': 3.603,
    'equityReturn': 1.18,
    'unitMoney': ''
  }, { 'x': 1610467200000, 'y': 3.557, 'equityReturn': -1.28, 'unitMoney': '' }, {
    'x': 1610553600000,
    'y': 3.505,
    'equityReturn': -1.46,
    'unitMoney': ''
  }, { 'x': 1610640000000, 'y': 3.507, 'equityReturn': 0.06, 'unitMoney': '' }, {
    'x': 1610899200000,
    'y': 3.51,
    'equityReturn': 1.1,
    'unitMoney': '分红：每份派现金0.03561元'
  }, { 'x': 1610985600000, 'y': 3.435, 'equityReturn': -2.14, 'unitMoney': '' }, {
    'x': 1611072000000,
    'y': 3.626,
    'equityReturn': 5.56,
    'unitMoney': ''
  }, { 'x': 1611158400000, 'y': 3.697, 'equityReturn': 1.96, 'unitMoney': '' }, {
    'x': 1611244800000,
    'y': 3.899,
    'equityReturn': 5.46,
    'unitMoney': ''
  }, { 'x': 1611504000000, 'y': 3.981, 'equityReturn': 2.1, 'unitMoney': '' }, {
    'x': 1611590400000,
    'y': 3.838,
    'equityReturn': -3.59,
    'unitMoney': ''
  }, { 'x': 1611676800000, 'y': 3.818, 'equityReturn': -0.52, 'unitMoney': '' }, {
    'x': 1611763200000,
    'y': 3.704,
    'equityReturn': -2.99,
    'unitMoney': ''
  }, { 'x': 1611849600000, 'y': 3.693, 'equityReturn': -0.3, 'unitMoney': '' }, {
    'x': 1612108800000,
    'y': 3.759,
    'equityReturn': 1.79,
    'unitMoney': ''
  }, { 'x': 1612195200000, 'y': 3.793, 'equityReturn': 0.9, 'unitMoney': '' }, {
    'x': 1612281600000,
    'y': 3.854,
    'equityReturn': 1.61,
    'unitMoney': ''
  }, { 'x': 1612368000000, 'y': 3.811, 'equityReturn': -1.12, 'unitMoney': '' }, {
    'x': 1612454400000,
    'y': 3.869,
    'equityReturn': 1.52,
    'unitMoney': ''
  }, { 'x': 1612713600000, 'y': 3.949, 'equityReturn': 2.07, 'unitMoney': '' }, {
    'x': 1612800000000,
    'y': 4.007,
    'equityReturn': 1.47,
    'unitMoney': ''
  }, { 'x': 1612886400000, 'y': 4.095, 'equityReturn': 2.2, 'unitMoney': '' }, {
    'x': 1613577600000,
    'y': 3.864,
    'equityReturn': -5.64,
    'unitMoney': ''
  }, { 'x': 1613664000000, 'y': 3.884, 'equityReturn': 0.52, 'unitMoney': '' }, {
    'x': 1613923200000,
    'y': 3.673,
    'equityReturn': -5.43,
    'unitMoney': ''
  }, { 'x': 1614009600000, 'y': 3.655, 'equityReturn': -0.49, 'unitMoney': '' }, {
    'x': 1614096000000,
    'y': 3.509,
    'equityReturn': -3.99,
    'unitMoney': ''
  }, { 'x': 1614182400000, 'y': 3.523, 'equityReturn': 0.4, 'unitMoney': '' }, {
    'x': 1614268800000,
    'y': 3.439,
    'equityReturn': -2.38,
    'unitMoney': ''
  }, { 'x': 1614528000000, 'y': 3.488, 'equityReturn': 1.42, 'unitMoney': '' }, {
    'x': 1614614400000,
    'y': 3.421,
    'equityReturn': -1.92,
    'unitMoney': ''
  }, { 'x': 1614700800000, 'y': 3.475, 'equityReturn': 1.58, 'unitMoney': '' }];
/* 累计净值走势*/
var Data_ACWorthTrend = [
  [1475078400000, 1.0], [1475164800000, 1.0], [1476374400000, 1.002], [1476979200000, 0.997], [1477584000000, 0.991], [1477843200000, 0.993], [1477929600000, 0.995], [1478016000000, 0.993], [1478102400000, 0.991], [1478188800000, 0.99], [1478448000000, 0.989], [1478534400000, 0.99], [1478620800000, 0.983], [1478707200000, 0.988], [1478793600000, 0.985], [1479052800000, 0.984], [1479139200000, 0.985], [1479225600000, 0.983], [1479312000000, 0.982], [1479398400000, 0.978], [1479657600000, 0.981], [1479744000000, 0.988], [1479830400000, 0.985], [1479916800000, 0.99], [1480003200000, 0.994], [1480262400000, 0.995], [1480348800000, 0.988], [1480435200000, 0.978], [1480521600000, 0.98], [1480608000000, 0.966], [1480867200000, 0.962], [1480953600000, 0.96], [1481040000000, 0.968], [1481126400000, 0.965], [1481212800000, 0.968], [1481472000000, 0.946], [1481558400000, 0.943], [1481644800000, 0.939], [1481731200000, 0.928], [1481817600000, 0.928], [1482076800000, 0.931], [1482163200000, 0.93], [1482249600000, 0.932], [1482336000000, 0.933], [1482422400000, 0.928], [1482681600000, 0.929], [1482768000000, 0.929], [1482854400000, 0.924], [1482940800000, 0.918], [1483027200000, 0.927], [1483113600000, 0.927], [1483372800000, 0.934], [1483459200000, 0.938], [1483545600000, 0.94], [1483632000000, 0.932], [1483891200000, 0.935], [1483977600000, 0.933], [1484064000000, 0.928], [1484150400000, 0.92], [1484236800000, 0.914], [1484496000000, 0.912], [1484582400000, 0.918], [1484668800000, 0.92], [1484755200000, 0.915], [1484841600000, 0.924], [1485100800000, 0.928], [1485187200000, 0.925], [1485273600000, 0.932], [1485360000000, 0.936], [1486051200000, 0.936], [1486310400000, 0.937], [1486396800000, 0.941], [1486483200000, 0.941], [1486569600000, 0.939], [1486656000000, 0.938], [1486915200000, 0.948], [1487001600000, 0.943], [1487088000000, 0.931], [1487174400000, 0.941], [1487260800000, 0.932], [1487520000000, 0.944], [1487606400000, 0.956], [1487692800000, 0.96], [1487779200000, 0.979], [1487865600000, 0.974], [1488124800000, 0.969], [1488211200000, 0.972], [1488297600000, 0.97], [1488384000000, 0.969], [1488470400000, 0.968], [1488729600000, 0.973], [1488816000000, 0.974], [1488902400000, 0.973], [1488988800000, 0.966], [1489075200000, 0.972], [1489334400000, 0.982], [1489420800000, 0.98], [1489507200000, 0.987], [1489593600000, 0.989], [1489680000000, 0.982], [1489939200000, 0.986], [1490025600000, 0.996], [1490112000000, 1.008], [1490198400000, 1.008], [1490284800000, 1.005], [1490544000000, 0.995], [1490630400000, 0.998], [1490716800000, 0.99], [1490803200000, 0.986], [1490889600000, 1.002], [1491321600000, 1.019], [1491408000000, 1.02], [1491494400000, 1.014], [1491753600000, 0.998], [1491840000000, 0.991], [1491926400000, 0.994], [1492012800000, 1.008], [1492099200000, 0.997], [1492358400000, 0.999], [1492444800000, 1.008], [1492531200000, 1.006], [1492617600000, 1.028], [1492704000000, 1.016], [1492963200000, 0.995], [1493049600000, 0.998], [1493136000000, 1.003], [1493222400000, 1.014], [1493308800000, 1.002], [1493654400000, 1.004], [1493740800000, 1.001], [1493827200000, 0.996], [1493913600000, 0.992], [1494172800000, 0.981], [1494259200000, 0.982], [1494345600000, 0.985], [1494432000000, 0.994], [1494518400000, 1.001], [1494777600000, 1.022], [1494864000000, 1.041], [1494950400000, 1.027], [1495036800000, 1.027], [1495123200000, 1.032], [1495382400000, 1.036], [1495468800000, 1.042], [1495555200000, 1.038], [1495641600000, 1.036], [1495728000000, 1.026], [1496160000000, 1.029], [1496246400000, 1.036], [1496332800000, 1.026], [1496592000000, 1.017], [1496678400000, 1.032], [1496764800000, 1.052], [1496851200000, 1.068], [1496937600000, 1.075], [1497196800000, 1.083], [1497283200000, 1.086], [1497369600000, 1.066], [1497456000000, 1.059], [1497542400000, 1.054], [1497801600000, 1.067], [1497888000000, 1.059], [1497974400000, 1.081], [1498060800000, 1.065], [1498147200000, 1.078], [1498406400000, 1.098], [1498492800000, 1.102], [1498579200000, 1.084], [1498665600000, 1.09], [1498752000000, 1.096], [1499011200000, 1.082], [1499097600000, 1.071], [1499184000000, 1.086], [1499270400000, 1.074], [1499356800000, 1.061], [1499616000000, 1.05], [1499702400000, 1.054], [1499788800000, 1.049], [1499875200000, 1.041], [1499961600000, 1.044], [1500220800000, 1.029], [1500307200000, 1.021], [1500393600000, 1.035], [1500480000000, 1.041], [1500566400000, 1.035], [1500825600000, 1.036], [1500912000000, 1.03], [1500998400000, 1.018], [1501084800000, 1.018], [1501171200000, 1.026], [1501430400000, 1.024], [1501516800000, 1.022], [1501603200000, 1.016], [1501689600000, 1.005], [1501776000000, 1.003], [1502035200000, 1.012], [1502121600000, 1.018], [1502208000000, 1.036], [1502294400000, 1.038], [1502380800000, 1.033], [1502640000000, 1.046], [1502726400000, 1.039], [1502812800000, 1.036], [1502899200000, 1.031], [1502985600000, 1.035], [1503244800000, 1.043], [1503331200000, 1.037], [1503417600000, 1.034], [1503504000000, 1.025], [1503590400000, 1.026], [1503849600000, 1.03], [1503936000000, 1.026], [1504022400000, 1.033], [1504108800000, 1.03], [1504195200000, 1.04], [1504454400000, 1.047], [1504540800000, 1.049], [1504627200000, 1.041], [1504713600000, 1.043], [1504800000000, 1.047], [1505059200000, 1.051], [1505145600000, 1.048], [1505232000000, 1.058], [1505318400000, 1.054], [1505404800000, 1.052], [1505664000000, 1.058], [1505750400000, 1.051], [1505836800000, 1.063], [1505923200000, 1.057], [1506009600000, 1.059], [1506268800000, 1.068], [1506355200000, 1.064], [1506441600000, 1.066], [1506528000000, 1.081], [1506614400000, 1.08], [1507478400000, 1.096], [1507564800000, 1.111], [1507651200000, 1.13], [1507737600000, 1.137], [1507824000000, 1.145], [1508083200000, 1.14], [1508169600000, 1.143], [1508256000000, 1.154], [1508342400000, 1.166], [1508428800000, 1.16], [1508688000000, 1.179], [1508774400000, 1.183], [1508860800000, 1.2], [1508947200000, 1.193], [1509033600000, 1.204], [1509292800000, 1.191], [1509379200000, 1.189], [1509465600000, 1.188], [1509552000000, 1.196], [1509638400000, 1.208], [1509897600000, 1.246], [1509984000000, 1.24], [1510070400000, 1.223], [1510156800000, 1.231], [1510243200000, 1.243], [1510502400000, 1.248], [1510588800000, 1.216], [1510675200000, 1.208], [1510761600000, 1.236], [1510848000000, 1.202], [1511107200000, 1.222], [1511193600000, 1.218], [1511280000000, 1.199], [1511366400000, 1.146], [1511452800000, 1.148], [1511712000000, 1.129], [1511798400000, 1.146], [1511884800000, 1.136], [1511971200000, 1.135], [1512057600000, 1.141], [1512316800000, 1.157], [1512403200000, 1.144], [1512489600000, 1.15], [1512576000000, 1.146], [1512662400000, 1.163], [1512921600000, 1.212], [1513008000000, 1.212], [1513094400000, 1.218], [1513180800000, 1.224], [1513267200000, 1.207], [1513526400000, 1.208], [1513612800000, 1.222], [1513699200000, 1.231], [1513785600000, 1.254], [1513872000000, 1.245], [1514131200000, 1.243], [1514217600000, 1.236], [1514304000000, 1.212], [1514390400000, 1.227], [1514476800000, 1.24], [1514649600000, 1.24], [1514822400000, 1.235], [1514908800000, 1.24], [1514995200000, 1.252], [1515081600000, 1.25], [1515340800000, 1.252], [1515427200000, 1.279], [1515513600000, 1.277], [1515600000000, 1.275], [1515686400000, 1.293], [1515945600000, 1.283], [1516032000000, 1.297], [1516118400000, 1.277], [1516204800000, 1.269], [1516291200000, 1.266], [1516550400000, 1.288], [1516636800000, 1.291], [1516723200000, 1.295], [1516809600000, 1.269], [1516896000000, 1.27], [1517155200000, 1.221], [1517241600000, 1.217], [1517328000000, 1.222], [1517414400000, 1.198], [1517500800000, 1.201], [1517760000000, 1.174], [1517846400000, 1.129], [1517932800000, 1.118], [1518019200000, 1.133], [1518105600000, 1.104], [1518364800000, 1.155], [1518451200000, 1.168], [1518537600000, 1.181], [1519228800000, 1.209], [1519315200000, 1.201], [1519574400000, 1.22], [1519660800000, 1.212], [1519747200000, 1.202], [1519833600000, 1.22], [1519920000000, 1.211], [1520179200000, 1.22], [1520265600000, 1.248], [1520352000000, 1.246], [1520438400000, 1.286], [1520524800000, 1.293], [1520784000000, 1.304], [1520870400000, 1.282], [1520956800000, 1.268], [1521043200000, 1.283], [1521129600000, 1.273], [1521388800000, 1.317], [1521475200000, 1.346], [1521561600000, 1.339], [1521648000000, 1.329], [1521734400000, 1.303], [1521993600000, 1.349], [1522080000000, 1.367], [1522166400000, 1.339], [1522252800000, 1.317], [1522339200000, 1.365], [1522598400000, 1.364], [1522684800000, 1.362], [1522771200000, 1.346], [1523203200000, 1.348], [1523289600000, 1.366], [1523376000000, 1.366], [1523462400000, 1.394], [1523548800000, 1.359], [1523808000000, 1.381], [1523894400000, 1.338], [1523980800000, 1.351], [1524067200000, 1.366], [1524153600000, 1.369], [1524412800000, 1.367], [1524499200000, 1.387], [1524585600000, 1.442], [1524672000000, 1.413], [1524758400000, 1.453], [1525190400000, 1.462], [1525276800000, 1.452], [1525363200000, 1.48], [1525622400000, 1.511], [1525708800000, 1.493], [1525795200000, 1.495], [1525881600000, 1.542], [1525968000000, 1.492], [1526227200000, 1.492], [1526313600000, 1.535], [1526400000000, 1.548], [1526486400000, 1.52], [1526572800000, 1.527], [1526832000000, 1.526], [1526918400000, 1.56], [1527004800000, 1.557], [1527091200000, 1.569], [1527177600000, 1.597], [1527436800000, 1.614], [1527523200000, 1.531], [1527609600000, 1.522], [1527696000000, 1.566], [1527782400000, 1.492], [1528041600000, 1.495], [1528128000000, 1.551], [1528214400000, 1.584], [1528300800000, 1.563], [1528387200000, 1.564], [1528646400000, 1.513], [1528732800000, 1.551], [1528819200000, 1.529], [1528905600000, 1.515], [1528992000000, 1.49], [1529337600000, 1.463], [1529424000000, 1.518], [1529510400000, 1.518], [1529596800000, 1.53], [1529856000000, 1.541], [1529942400000, 1.536], [1530028800000, 1.483], [1530115200000, 1.468], [1530201600000, 1.532], [1530288000000, 1.532], [1530460800000, 1.548], [1530547200000, 1.528], [1530633600000, 1.501], [1530720000000, 1.464], [1530806400000, 1.464], [1531065600000, 1.517], [1531152000000, 1.529], [1531238400000, 1.534], [1531324800000, 1.582], [1531411200000, 1.61], [1531670400000, 1.627], [1531756800000, 1.608], [1531843200000, 1.609], [1531929600000, 1.556], [1532016000000, 1.552], [1532275200000, 1.445], [1532361600000, 1.439], [1532448000000, 1.476], [1532534400000, 1.46], [1532620800000, 1.44], [1532880000000, 1.387], [1532966400000, 1.397], [1533052800000, 1.37], [1533139200000, 1.379], [1533225600000, 1.333], [1533484800000, 1.27], [1533571200000, 1.307], [1533657600000, 1.281], [1533744000000, 1.337], [1533830400000, 1.372], [1534089600000, 1.397], [1534176000000, 1.392], [1534262400000, 1.341], [1534348800000, 1.343], [1534435200000, 1.283], [1534694400000, 1.262], [1534780800000, 1.33], [1534867200000, 1.33], [1534953600000, 1.346], [1535040000000, 1.356], [1535299200000, 1.398], [1535385600000, 1.389], [1535472000000, 1.375], [1535558400000, 1.359], [1535644800000, 1.327], [1535904000000, 1.322], [1535990400000, 1.323], [1536076800000, 1.304], [1536163200000, 1.292], [1536249600000, 1.322], [1536508800000, 1.298], [1536595200000, 1.308], [1536681600000, 1.263], [1536768000000, 1.245], [1536854400000, 1.227], [1537113600000, 1.208], [1537200000000, 1.239], [1537286400000, 1.256], [1537372800000, 1.249], [1537459200000, 1.278], [1537804800000, 1.285], [1537891200000, 1.311], [1537977600000, 1.319], [1538064000000, 1.336], [1538928000000, 1.27], [1539014400000, 1.255], [1539100800000, 1.229], [1539187200000, 1.168], [1539273600000, 1.174], [1539532800000, 1.162], [1539619200000, 1.144], [1539705600000, 1.13], [1539792000000, 1.083], [1539878400000, 1.135], [1540137600000, 1.195], [1540224000000, 1.17], [1540310400000, 1.142], [1540396800000, 1.129], [1540483200000, 1.109], [1540742400000, 1.086], [1540828800000, 1.102], [1540915200000, 1.135], [1541001600000, 1.142], [1541088000000, 1.203], [1541347200000, 1.189], [1541433600000, 1.197], [1541520000000, 1.193], [1541606400000, 1.195], [1541692800000, 1.183], [1541952000000, 1.204], [1542038400000, 1.222], [1542124800000, 1.211], [1542211200000, 1.222], [1542297600000, 1.199], [1542556800000, 1.199], [1542643200000, 1.181], [1542729600000, 1.204], [1542816000000, 1.201], [1542902400000, 1.177], [1543161600000, 1.175], [1543248000000, 1.174], [1543334400000, 1.187], [1543420800000, 1.174], [1543507200000, 1.187], [1543766400000, 1.226], [1543852800000, 1.243], [1543939200000, 1.257], [1544025600000, 1.207], [1544112000000, 1.167], [1544371200000, 1.15], [1544457600000, 1.165], [1544544000000, 1.147], [1544630400000, 1.163], [1544716800000, 1.129], [1544976000000, 1.109], [1545062400000, 1.104], [1545148800000, 1.072], [1545235200000, 1.061], [1545321600000, 1.043], [1545580800000, 1.065], [1545667200000, 1.073], [1545753600000, 1.066], [1545840000000, 1.06], [1545926400000, 1.064], [1546185600000, 1.064], [1546358400000, 1.03], [1546444800000, 1.018], [1546531200000, 1.041], [1546790400000, 1.045], [1546876800000, 1.046], [1546963200000, 1.051], [1547049600000, 1.045], [1547136000000, 1.046], [1547395200000, 1.033], [1547481600000, 1.048], [1547568000000, 1.062], [1547654400000, 1.055], [1547740800000, 1.077], [1548000000000, 1.09], [1548086400000, 1.073], [1548172800000, 1.075], [1548259200000, 1.076], [1548345600000, 1.086], [1548604800000, 1.086], [1548691200000, 1.084], [1548777600000, 1.072], [1548864000000, 1.079], [1548950400000, 1.11], [1549814400000, 1.129], [1549900800000, 1.139], [1549987200000, 1.154], [1550073600000, 1.157], [1550160000000, 1.147], [1550419200000, 1.195], [1550505600000, 1.181], [1550592000000, 1.169], [1550678400000, 1.166], [1550764800000, 1.181], [1551024000000, 1.22], [1551110400000, 1.228], [1551196800000, 1.217], [1551283200000, 1.255], [1551369600000, 1.262], [1551628800000, 1.282], [1551715200000, 1.287], [1551801600000, 1.279], [1551888000000, 1.256], [1551974400000, 1.248], [1552233600000, 1.306], [1552320000000, 1.308], [1552406400000, 1.314], [1552492800000, 1.307], [1552579200000, 1.343], [1552838400000, 1.399], [1552924800000, 1.375], [1553011200000, 1.366], [1553097600000, 1.361], [1553184000000, 1.367], [1553443200000, 1.349], [1553529600000, 1.335], [1553616000000, 1.374], [1553702400000, 1.368], [1553788800000, 1.414], [1554048000000, 1.434], [1554134400000, 1.407], [1554220800000, 1.404], [1554307200000, 1.398], [1554652800000, 1.376], [1554739200000, 1.398], [1554825600000, 1.414], [1554912000000, 1.369], [1554998400000, 1.367], [1555257600000, 1.354], [1555344000000, 1.37], [1555430400000, 1.372], [1555516800000, 1.368], [1555603200000, 1.373], [1555862400000, 1.37], [1555948800000, 1.37], [1556035200000, 1.378], [1556121600000, 1.38], [1556208000000, 1.381], [1556467200000, 1.405], [1556553600000, 1.399], [1557072000000, 1.334], [1557158400000, 1.377], [1557244800000, 1.354], [1557331200000, 1.32], [1557417600000, 1.365], [1557676800000, 1.375], [1557763200000, 1.368], [1557849600000, 1.405], [1557936000000, 1.418], [1558022400000, 1.388], [1558281600000, 1.363], [1558368000000, 1.38], [1558454400000, 1.379], [1558540800000, 1.348], [1558627200000, 1.348], [1558886400000, 1.363], [1558972800000, 1.384], [1559059200000, 1.378], [1559145600000, 1.385], [1559232000000, 1.399], [1559491200000, 1.39], [1559577600000, 1.364], [1559664000000, 1.339], [1559750400000, 1.33], [1560096000000, 1.35], [1560182400000, 1.391], [1560268800000, 1.39], [1560355200000, 1.406], [1560441600000, 1.403], [1560700800000, 1.391], [1560787200000, 1.405], [1560873600000, 1.417], [1560960000000, 1.45], [1561046400000, 1.45], [1561305600000, 1.457], [1561392000000, 1.455], [1561478400000, 1.502], [1561564800000, 1.517], [1561651200000, 1.508], [1561824000000, 1.508], [1561910400000, 1.54], [1561996800000, 1.559], [1562083200000, 1.525], [1562169600000, 1.494], [1562256000000, 1.522], [1562515200000, 1.489], [1562601600000, 1.495], [1562688000000, 1.497], [1562774400000, 1.496], [1562860800000, 1.498], [1563120000000, 1.484], [1563206400000, 1.463], [1563292800000, 1.455], [1563379200000, 1.435], [1563465600000, 1.441], [1563724800000, 1.441], [1563811200000, 1.441], [1563897600000, 1.451], [1563984000000, 1.449], [1564070400000, 1.478], [1564329600000, 1.465], [1564416000000, 1.466], [1564502400000, 1.458], [1564588800000, 1.452], [1564675200000, 1.464], [1564934400000, 1.438], [1565020800000, 1.441], [1565107200000, 1.466], [1565193600000, 1.495], [1565280000000, 1.493], [1565539200000, 1.508], [1565625600000, 1.509], [1565712000000, 1.541], [1565798400000, 1.541], [1565884800000, 1.552], [1566144000000, 1.563], [1566230400000, 1.566], [1566316800000, 1.55], [1566403200000, 1.564], [1566489600000, 1.612], [1566748800000, 1.61], [1566835200000, 1.616], [1566921600000, 1.61], [1567008000000, 1.606], [1567094400000, 1.616], [1567353600000, 1.644], [1567440000000, 1.636], [1567526400000, 1.634], [1567612800000, 1.623], [1567699200000, 1.633], [1567958400000, 1.638], [1568044800000, 1.652], [1568131200000, 1.618], [1568217600000, 1.624], [1568563200000, 1.624], [1568649600000, 1.618], [1568736000000, 1.651], [1568822400000, 1.67], [1568908800000, 1.683], [1569168000000, 1.667], [1569254400000, 1.707], [1569340800000, 1.711], [1569427200000, 1.698], [1569513600000, 1.702], [1569772800000, 1.712], [1570464000000, 1.727], [1570550400000, 1.72], [1570636800000, 1.79], [1570723200000, 1.797], [1570982400000, 1.796], [1571068800000, 1.797], [1571155200000, 1.831], [1571241600000, 1.834], [1571328000000, 1.831], [1571587200000, 1.789], [1571673600000, 1.812], [1571760000000, 1.78], [1571846400000, 1.779], [1571932800000, 1.798], [1572192000000, 1.826], [1572278400000, 1.845], [1572364800000, 1.833], [1572451200000, 1.856], [1572537600000, 1.888], [1572796800000, 1.914], [1572883200000, 1.904], [1572969600000, 1.894], [1573056000000, 1.907], [1573142400000, 1.896], [1573401600000, 1.857], [1573488000000, 1.875], [1573574400000, 1.928], [1573660800000, 1.954], [1573747200000, 1.935], [1574006400000, 1.938], [1574092800000, 1.985], [1574179200000, 1.986], [1574265600000, 1.953], [1574352000000, 1.863], [1574611200000, 1.835], [1574697600000, 1.849], [1574784000000, 1.837], [1574870400000, 1.848], [1574956800000, 1.801], [1575216000000, 1.782], [1575302400000, 1.777], [1575388800000, 1.793], [1575475200000, 1.815], [1575561600000, 1.83], [1575820800000, 1.789], [1575907200000, 1.807], [1575993600000, 1.805], [1576080000000, 1.802], [1576166400000, 1.84], [1576425600000, 1.84], [1576512000000, 1.847], [1576598400000, 1.814], [1576684800000, 1.804], [1576771200000, 1.787], [1577030400000, 1.781], [1577116800000, 1.786], [1577203200000, 1.784], [1577289600000, 1.79], [1577376000000, 1.78], [1577635200000, 1.781], [1577721600000, 1.808], [1577894400000, 1.803], [1577980800000, 1.79], [1578240000000, 1.775], [1578326400000, 1.808], [1578412800000, 1.803], [1578499200000, 1.865], [1578585600000, 1.874], [1578844800000, 1.89], [1578931200000, 1.87], [1579017600000, 1.899], [1579104000000, 1.929], [1579190400000, 1.953], [1579449600000, 1.992], [1579536000000, 1.994], [1579622400000, 1.995], [1579708800000, 1.941], [1580659200000, 1.851], [1580745600000, 1.923], [1580832000000, 1.947], [1580918400000, 2.011], [1581004800000, 1.99], [1581264000000, 1.999], [1581350400000, 2.013], [1581436800000, 2.048], [1581523200000, 2.031], [1581609600000, 2.043], [1581868800000, 2.094], [1581955200000, 2.085], [1582041600000, 2.054], [1582128000000, 2.079], [1582214400000, 2.095], [1582473600000, 2.106], [1582560000000, 2.125], [1582646400000, 2.068], [1582732800000, 2.1], [1582819200000, 2.048], [1583078400000, 2.087], [1583164800000, 2.138], [1583251200000, 2.148], [1583337600000, 2.197], [1583424000000, 2.203], [1583683200000, 2.163], [1583769600000, 2.158], [1583856000000, 2.126], [1583942400000, 2.058], [1584028800000, 2.022], [1584288000000, 1.932], [1584374400000, 1.93], [1584460800000, 1.916], [1584547200000, 1.88], [1584633600000, 1.94], [1584892800000, 1.897], [1584979200000, 1.95], [1585065600000, 2.023], [1585152000000, 2.057], [1585238400000, 2.068], [1585497600000, 2.031], [1585584000000, 2.077], [1585670400000, 2.049], [1585756800000, 2.073], [1585843200000, 2.088], [1586188800000, 2.147], [1586275200000, 2.135], [1586361600000, 2.227], [1586448000000, 2.196], [1586707200000, 2.211], [1586793600000, 2.247], [1586880000000, 2.22], [1586966400000, 2.238], [1587052800000, 2.228], [1587312000000, 2.26], [1587398400000, 2.246], [1587484800000, 2.29], [1587571200000, 2.293], [1587657600000, 2.251], [1587916800000, 2.295], [1588003200000, 2.324], [1588089600000, 2.294], [1588176000000, 2.256], [1588694400000, 2.29], [1588780800000, 2.304], [1588867200000, 2.319], [1589126400000, 2.285], [1589212800000, 2.354], [1589299200000, 2.44], [1589385600000, 2.434], [1589472000000, 2.412], [1589731200000, 2.468], [1589817600000, 2.488], [1589904000000, 2.445], [1589990400000, 2.469], [1590076800000, 2.427], [1590336000000, 2.461], [1590422400000, 2.527], [1590508800000, 2.477], [1590595200000, 2.457], [1590681600000, 2.546], [1590940800000, 2.586], [1591027200000, 2.532], [1591113600000, 2.552], [1591200000000, 2.58], [1591286400000, 2.622], [1591545600000, 2.58], [1591632000000, 2.609], [1591718400000, 2.675], [1591804800000, 2.662], [1591891200000, 2.703], [1592150400000, 2.732], [1592236800000, 2.786], [1592323200000, 2.823], [1592409600000, 2.75], [1592496000000, 2.833], [1592755200000, 2.836], [1592841600000, 2.918], [1592928000000, 2.895], [1593360000000, 2.942], [1593446400000, 2.98], [1593532800000, 2.913], [1593619200000, 2.875], [1593705600000, 2.914], [1593964800000, 2.885], [1594051200000, 2.943], [1594137600000, 2.946], [1594224000000, 3.044], [1594310400000, 3.088], [1594569600000, 3.182], [1594656000000, 3.166], [1594742400000, 3.212], [1594828800000, 3.022], [1594915200000, 3.076], [1595174400000, 3.029], [1595260800000, 3.152], [1595347200000, 3.203], [1595433600000, 3.286], [1595520000000, 3.094], [1595779200000, 3.132], [1595865600000, 3.138], [1595952000000, 3.229], [1596038400000, 3.227], [1596124800000, 3.283], [1596384000000, 3.347], [1596470400000, 3.29], [1596556800000, 3.346], [1596643200000, 3.263], [1596729600000, 3.232], [1596988800000, 3.225], [1597075200000, 3.184], [1597161600000, 3.088], [1597248000000, 3.037], [1597334400000, 3.049], [1597593600000, 3.081], [1597680000000, 3.117], [1597766400000, 3.029], [1597852800000, 3.025], [1597939200000, 3.058], [1598198400000, 3.058], [1598284800000, 3.097], [1598371200000, 3.097], [1598457600000, 3.147], [1598544000000, 3.242], [1598803200000, 3.23], [1598889600000, 3.227], [1598976000000, 3.215], [1599062400000, 3.203], [1599148800000, 3.139], [1599408000000, 3.015], [1599494400000, 3.011], [1599580800000, 2.891], [1599667200000, 2.896], [1599753600000, 2.941], [1600012800000, 2.905], [1600099200000, 2.944], [1600185600000, 2.881], [1600272000000, 2.837], [1600358400000, 2.871], [1600617600000, 2.848], [1600704000000, 2.86], [1600790400000, 2.968], [1600876800000, 2.932], [1600963200000, 2.958], [1601222400000, 2.911], [1601308800000, 2.935], [1601395200000, 2.987], [1602172800000, 3.067], [1602432000000, 3.176], [1602518400000, 3.224], [1602604800000, 3.222], [1602691200000, 3.192], [1602777600000, 3.201], [1603036800000, 3.126], [1603123200000, 3.165], [1603209600000, 3.161], [1603296000000, 3.121], [1603382400000, 3.006], [1603641600000, 3.032], [1603728000000, 3.136], [1603814400000, 3.156], [1603900800000, 3.22], [1603987200000, 3.168], [1604246400000, 3.17], [1604332800000, 3.193], [1604419200000, 3.219], [1604505600000, 3.215], [1604592000000, 3.144], [1604851200000, 3.231], [1604937600000, 3.169], [1605024000000, 3.067], [1605110400000, 3.107], [1605196800000, 3.1], [1605456000000, 3.123], [1605542400000, 3.025], [1605628800000, 2.926], [1605715200000, 2.957], [1605801600000, 2.98], [1606060800000, 2.964], [1606147200000, 2.952], [1606233600000, 2.893], [1606320000000, 2.889], [1606406400000, 2.906], [1606665600000, 2.917], [1606752000000, 3.011], [1606838400000, 3.011], [1606924800000, 3.068], [1607011200000, 3.13], [1607270400000, 3.151], [1607356800000, 3.161], [1607443200000, 3.114], [1607529600000, 3.175], [1607616000000, 3.159], [1607875200000, 3.228], [1607961600000, 3.266], [1608048000000, 3.295], [1608134400000, 3.359], [1608220800000, 3.34], [1608480000000, 3.407], [1608566400000, 3.382], [1608652800000, 3.388], [1608739200000, 3.414], [1608825600000, 3.476], [1609084800000, 3.458], [1609171200000, 3.436], [1609257600000, 3.481], [1609344000000, 3.521], [1609689600000, 3.486], [1609776000000, 3.548], [1609862400000, 3.612], [1609948800000, 3.655], [1610035200000, 3.63], [1610294400000, 3.636], [1610380800000, 3.678], [1610467200000, 3.632], [1610553600000, 3.58], [1610640000000, 3.582], [1610899200000, 3.621], [1610985600000, 3.546], [1611072000000, 3.737], [1611158400000, 3.808], [1611244800000, 4.01], [1611504000000, 4.092], [1611590400000, 3.949], [1611676800000, 3.929], [1611763200000, 3.815], [1611849600000, 3.804], [1612108800000, 3.87], [1612195200000, 3.904], [1612281600000, 3.965], [1612368000000, 3.922], [1612454400000, 3.98], [1612713600000, 4.06], [1612800000000, 4.118], [1612886400000, 4.206], [1613577600000, 3.975], [1613664000000, 3.995], [1613923200000, 3.784], [1614009600000, 3.766], [1614096000000, 3.62], [1614182400000, 3.634], [1614268800000, 3.55], [1614528000000, 3.599], [1614614400000, 3.532], [1614700800000, 3.586]];
/* 累计收益率走势*/
var Data_grandTotal = [
  {
    'name': '中欧医疗健康混合A',
    'data': [[1599062400000, 0], [1599148800000, -2.05], [1599408000000, -6.01], [1599494400000, -6.14], [1599580800000, -9.97], [1599667200000, -9.81], [1599753600000, -8.38], [1600012800000, -9.53], [1600099200000, -8.28], [1600185600000, -10.29], [1600272000000, -11.70], [1600358400000, -10.61], [1600617600000, -11.35], [1600704000000, -10.97], [1600790400000, -7.51], [1600876800000, -8.66], [1600963200000, -7.83], [1601222400000, -9.34], [1601308800000, -8.57], [1601395200000, -6.91], [1602172800000, -4.35], [1602432000000, -0.86], [1602518400000, 0.67], [1602604800000, 0.61], [1602691200000, -0.35], [1602777600000, -0.06], [1603036800000, -2.46], [1603123200000, -1.21], [1603209600000, -1.34], [1603296000000, -2.62], [1603382400000, -6.30], [1603641600000, -5.47], [1603728000000, -2.14], [1603814400000, -1.50], [1603900800000, 0.54], [1603987200000, -1.12], [1604246400000, -1.05], [1604332800000, -0.32], [1604419200000, 0.51], [1604505600000, 0.38], [1604592000000, -1.89], [1604851200000, 0.90], [1604937600000, -1.09], [1605024000000, -4.35], [1605110400000, -3.07], [1605196800000, -3.29], [1605456000000, -2.56], [1605542400000, -5.69], [1605628800000, -8.86], [1605715200000, -7.86], [1605801600000, -7.13], [1606060800000, -7.64], [1606147200000, -8.02], [1606233600000, -9.91], [1606320000000, -10.04], [1606406400000, -9.49], [1606665600000, -9.14], [1606752000000, -6.14], [1606838400000, -6.14], [1606924800000, -4.32], [1607011200000, -2.33], [1607270400000, -1.66], [1607356800000, -1.34], [1607443200000, -2.85], [1607529600000, -0.90], [1607616000000, -1.41], [1607875200000, 0.80], [1607961600000, 2.01], [1608048000000, 2.94], [1608134400000, 4.99], [1608220800000, 4.38], [1608480000000, 6.52], [1608566400000, 5.72], [1608652800000, 5.91], [1608739200000, 6.75], [1608825600000, 8.73], [1609084800000, 8.15], [1609171200000, 7.45], [1609257600000, 8.89], [1609344000000, 10.17], [1609689600000, 9.05], [1609776000000, 11.03], [1609862400000, 13.08], [1609948800000, 14.45], [1610035200000, 13.65], [1610294400000, 13.84], [1610380800000, 15.19], [1610467200000, 13.71], [1610553600000, 12.05], [1610640000000, 12.12], [1610899200000, 13.35], [1610985600000, 10.93], [1611072000000, 17.10], [1611158400000, 19.39], [1611244800000, 25.91], [1611504000000, 28.56], [1611590400000, 23.94], [1611676800000, 23.30], [1611763200000, 19.62], [1611849600000, 19.26], [1612108800000, 21.39], [1612195200000, 22.49], [1612281600000, 24.46], [1612368000000, 23.07], [1612454400000, 24.94], [1612713600000, 27.53], [1612800000000, 29.40], [1612886400000, 32.24], [1613577600000, 24.78], [1613664000000, 25.43], [1613923200000, 18.61], [1614009600000, 18.03], [1614096000000, 13.32], [1614182400000, 13.77], [1614268800000, 11.06], [1614528000000, 12.64], [1614614400000, 10.48], [1614700800000, 12.22]]
  }, {
    'name': '同类平均',
    'data': [[1599062400000, 0], [1599148800000, -0.76], [1599408000000, -2.70], [1599494400000, -2.83], [1599580800000, -4.78], [1599667200000, -4.87], [1599753600000, -3.69], [1600012800000, -3.15], [1600099200000, -2.48], [1600185600000, -2.95], [1600272000000, -3.01], [1600358400000, -1.96], [1600617600000, -2.53], [1600704000000, -3.20], [1600790400000, -2.57], [1600876800000, -4.01], [1600963200000, -4.04], [1601222400000, -3.98], [1601308800000, -3.45], [1601395200000, -3.27], [1602172800000, -1.40], [1602432000000, 0.47], [1602518400000, 0.93], [1602604800000, 0.56], [1602691200000, 0.13], [1602777600000, -0.24], [1603036800000, -1.02], [1603123200000, -0.18], [1603209600000, -0.66], [1603296000000, -1.06], [1603382400000, -2.42], [1603641600000, -2.21], [1603728000000, -1.62], [1603814400000, -0.86], [1603900800000, -0.25], [1603987200000, -1.35], [1604246400000, -0.55], [1604332800000, 0.08], [1604419200000, 0.54], [1604505600000, 1.76], [1604592000000, 1.29], [1604851200000, 2.53], [1604937600000, 1.94], [1605024000000, 0.78], [1605110400000, 1.21], [1605196800000, 0.89], [1605456000000, 1.44], [1605542400000, 0.81], [1605628800000, 0.40], [1605715200000, 0.94], [1605801600000, 1.47], [1606060800000, 2.06], [1606147200000, 1.77], [1606233600000, 0.46], [1606320000000, 0.37], [1606406400000, 0.92], [1606665600000, 0.57], [1606752000000, 1.86], [1606838400000, 1.82], [1606924800000, 1.82], [1607011200000, 2.31], [1607270400000, 2.25], [1607356800000, 2.42], [1607443200000, 1.54], [1607529600000, 1.79], [1607616000000, 1.17], [1607875200000, 2.08], [1607961600000, 2.41], [1608048000000, 2.66], [1608134400000, 3.36], [1608220800000, 3.28], [1608480000000, 4.60], [1608566400000, 3.54], [1608652800000, 4.39], [1608739200000, 4.08], [1608825600000, 4.97], [1609084800000, 5.10], [1609171200000, 4.42], [1609257600000, 5.80], [1609344000000, 7.23], [1609689600000, 8.94], [1609776000000, 10.18], [1609862400000, 10.53], [1609948800000, 11.70], [1610035200000, 11.12], [1610294400000, 10.27], [1610380800000, 12.15], [1610467200000, 11.41], [1610553600000, 10.07], [1610640000000, 10.12], [1610899200000, 11.40], [1610985600000, 10.30], [1611072000000, 11.78], [1611158400000, 13.10], [1611244800000, 13.97], [1611504000000, 14.84], [1611590400000, 12.87], [1611676800000, 13.07], [1611763200000, 10.60], [1611849600000, 10.20], [1612108800000, 11.27], [1612195200000, 12.92], [1612281600000, 12.80], [1612368000000, 12.21], [1612454400000, 11.85], [1612713600000, 13.19], [1612800000000, 15.13], [1612886400000, 16.71], [1613577600000, 15.93], [1613664000000, 15.48], [1613923200000, 12.85], [1614009600000, 12.56], [1614096000000, 10.15], [1614182400000, 10.26], [1614268800000, 8.32], [1614528000000, 9.99], [1614614400000, 9.16], [1614700800000, 10.31]]
  }, {
    'name': '沪深300',
    'data': [[1599062400000, 0], [1599148800000, -0.97], [1599408000000, -3.07], [1599494400000, -2.55], [1599580800000, -4.83], [1599667200000, -4.88], [1599753600000, -3.94], [1600012800000, -3.45], [1600099200000, -2.67], [1600185600000, -3.32], [1600272000000, -3.83], [1600358400000, -1.66], [1600617600000, -2.61], [1600704000000, -3.76], [1600790400000, -3.42], [1600876800000, -5.27], [1600963200000, -5.13], [1601222400000, -4.88], [1601308800000, -4.68], [1601395200000, -4.77], [1602172800000, -2.82], [1602432000000, 0.13], [1602518400000, 0.46], [1602604800000, -0.21], [1602691200000, -0.38], [1602777600000, -0.53], [1603036800000, -1.28], [1603123200000, -0.49], [1603209600000, -0.50], [1603296000000, -0.81], [1603382400000, -2.05], [1603641600000, -2.61], [1603728000000, -2.45], [1603814400000, -1.66], [1603900800000, -0.92], [1603987200000, -2.53], [1604246400000, -2.00], [1604332800000, -0.82], [1604419200000, -0.07], [1604505600000, 1.41], [1604592000000, 1.42], [1604851200000, 3.41], [1604937600000, 2.84], [1605024000000, 1.82], [1605110400000, 1.90], [1605196800000, 0.83], [1605456000000, 1.81], [1605542400000, 1.61], [1605628800000, 1.55], [1605715200000, 2.30], [1605801600000, 2.62], [1606060800000, 3.90], [1606147200000, 3.26], [1606233600000, 1.94], [1606320000000, 2.13], [1606406400000, 3.40], [1606665600000, 2.97], [1606752000000, 5.19], [1606838400000, 5.19], [1606924800000, 4.98], [1607011200000, 5.17], [1607270400000, 4.26], [1607356800000, 4.00], [1607443200000, 2.61], [1607529600000, 2.56], [1607616000000, 1.51], [1607875200000, 2.44], [1607961600000, 2.66], [1608048000000, 2.84], [1608134400000, 4.16], [1608220800000, 3.80], [1608480000000, 4.77], [1608566400000, 3.07], [1608652800000, 3.94], [1608739200000, 3.80], [1608825600000, 4.67], [1609084800000, 5.13], [1609171200000, 4.69], [1609257600000, 6.16], [1609344000000, 8.18], [1609689600000, 9.35], [1609776000000, 11.45], [1609862400000, 12.47], [1609948800000, 14.46], [1610035200000, 14.08], [1610294400000, 12.96], [1610380800000, 16.18], [1610467200000, 15.80], [1610553600000, 13.56], [1610640000000, 13.31], [1610899200000, 14.56], [1610985600000, 12.88], [1611072000000, 13.69], [1611158400000, 15.53], [1611244800000, 15.63], [1611504000000, 16.79], [1611590400000, 14.45], [1611676800000, 14.76], [1611763200000, 11.63], [1611849600000, 11.10], [1612108800000, 12.47], [1612195200000, 14.20], [1612281600000, 13.87], [1612368000000, 13.64], [1612454400000, 13.83], [1612713600000, 15.52], [1612800000000, 18.04], [1612886400000, 20.56], [1613577600000, 19.75], [1613664000000, 19.97], [1613923200000, 16.20], [1614009600000, 15.83], [1614096000000, 12.88], [1614182400000, 13.54], [1614268800000, 10.79], [1614528000000, 12.49], [1614614400000, 11.06], [1614700800000, 13.18]]
  }];
/* 同类排名走势*/
var Data_rateInSimilarType = [
  { 'x': 1482940800000, 'y': 1821, 'sc': '1858' }, {
    'x': 1483027200000,
    'y': 1832,
    'sc': '1899'
  }, { 'x': 1483372800000, 'y': 1776, 'sc': '1861' }, {
    'x': 1483459200000,
    'y': 1790,
    'sc': '1860'
  }, { 'x': 1483545600000, 'y': 1783, 'sc': '1860' }, {
    'x': 1483632000000,
    'y': 1827,
    'sc': '1898'
  }, { 'x': 1483891200000, 'y': 1778, 'sc': '1859' }, {
    'x': 1483977600000,
    'y': 1732,
    'sc': '1860'
  }, { 'x': 1484064000000, 'y': 1680, 'sc': '1862' }, {
    'x': 1484150400000,
    'y': 1692,
    'sc': '1864'
  }, { 'x': 1484236800000, 'y': 1704, 'sc': '1906' }, {
    'x': 1484496000000,
    'y': 1584,
    'sc': '1865'
  }, { 'x': 1484582400000, 'y': 1647, 'sc': '1868' }, {
    'x': 1484668800000,
    'y': 1542,
    'sc': '1868'
  }, { 'x': 1484755200000, 'y': 1574, 'sc': '1873' }, {
    'x': 1484841600000,
    'y': 1630,
    'sc': '1916'
  }, { 'x': 1485100800000, 'y': 1601, 'sc': '1876' }, {
    'x': 1485187200000,
    'y': 1561,
    'sc': '1876'
  }, { 'x': 1485273600000, 'y': 1502, 'sc': '1881' }, {
    'x': 1485360000000,
    'y': 1592,
    'sc': '1927'
  }, { 'x': 1486051200000, 'y': 1531, 'sc': '1944' }, {
    'x': 1486310400000,
    'y': 1552,
    'sc': '1897'
  }, { 'x': 1486396800000, 'y': 1513, 'sc': '1904' }, {
    'x': 1486483200000,
    'y': 1529,
    'sc': '1907'
  }, { 'x': 1486569600000, 'y': 1563, 'sc': '1908' }, {
    'x': 1486656000000,
    'y': 1595,
    'sc': '1969'
  }, { 'x': 1486915200000, 'y': 1458, 'sc': '1928' }, {
    'x': 1487001600000,
    'y': 1500,
    'sc': '1932'
  }, { 'x': 1487088000000, 'y': 1543, 'sc': '1931' }, {
    'x': 1487174400000,
    'y': 1474,
    'sc': '1935'
  }, { 'x': 1487260800000, 'y': 1568, 'sc': '1992' }, {
    'x': 1487520000000,
    'y': 1492,
    'sc': '1955'
  }, { 'x': 1487606400000, 'y': 1437, 'sc': '1959' }, {
    'x': 1487692800000,
    'y': 1446,
    'sc': '1961'
  }, { 'x': 1487779200000, 'y': 1024, 'sc': '1967' }, {
    'x': 1487865600000,
    'y': 1377,
    'sc': '2017'
  }, { 'x': 1488124800000, 'y': 1378, 'sc': '1972' }, {
    'x': 1488211200000,
    'y': 1078,
    'sc': '1986'
  }, { 'x': 1488297600000, 'y': 1207, 'sc': '1991' }, {
    'x': 1488384000000,
    'y': 691,
    'sc': '1993'
  }, { 'x': 1488470400000, 'y': 805, 'sc': '2044' }, { 'x': 1488729600000, 'y': 465, 'sc': '1999' }, {
    'x': 1488816000000,
    'y': 767,
    'sc': '2008'
  }, { 'x': 1488902400000, 'y': 588, 'sc': '2007' }, {
    'x': 1488988800000,
    'y': 1185,
    'sc': '2025'
  }, { 'x': 1489075200000, 'y': 821, 'sc': '2086' }, { 'x': 1489334400000, 'y': 379, 'sc': '2029' }, {
    'x': 1489420800000,
    'y': 413,
    'sc': '2034'
  }, { 'x': 1489507200000, 'y': 231, 'sc': '2042' }, { 'x': 1489593600000, 'y': 218, 'sc': '2045' }, {
    'x': 1489680000000,
    'y': 206,
    'sc': '2108'
  }, { 'x': 1489939200000, 'y': 254, 'sc': '2052' }, { 'x': 1490025600000, 'y': 196, 'sc': '2060' }, {
    'x': 1490112000000,
    'y': 139,
    'sc': '2073'
  }, { 'x': 1490198400000, 'y': 161, 'sc': '2076' }, { 'x': 1490284800000, 'y': 212, 'sc': '2148' }, {
    'x': 1490544000000,
    'y': 223,
    'sc': '2090'
  }, { 'x': 1490630400000, 'y': 154, 'sc': '2091' }, { 'x': 1490716800000, 'y': 158, 'sc': '2117' }, {
    'x': 1490803200000,
    'y': 162,
    'sc': '2118'
  }, { 'x': 1490889600000, 'y': 112, 'sc': '2191' }, { 'x': 1491321600000, 'y': 104, 'sc': '2123' }, {
    'x': 1491408000000,
    'y': 97,
    'sc': '2123'
  }, { 'x': 1491494400000, 'y': 134, 'sc': '2193' }, { 'x': 1491753600000, 'y': 199, 'sc': '2130' }, {
    'x': 1491840000000,
    'y': 310,
    'sc': '2134'
  }, { 'x': 1491926400000, 'y': 234, 'sc': '2136' }, { 'x': 1492012800000, 'y': 169, 'sc': '2147' }, {
    'x': 1492099200000,
    'y': 172,
    'sc': '2218'
  }, { 'x': 1492358400000, 'y': 222, 'sc': '2146' }, { 'x': 1492444800000, 'y': 186, 'sc': '2154' }, {
    'x': 1492531200000,
    'y': 185,
    'sc': '2158'
  }, { 'x': 1492617600000, 'y': 120, 'sc': '2162' }, { 'x': 1492704000000, 'y': 136, 'sc': '2236' }, {
    'x': 1492963200000,
    'y': 157,
    'sc': '2181'
  }, { 'x': 1493049600000, 'y': 212, 'sc': '2196' }, { 'x': 1493136000000, 'y': 189, 'sc': '2196' }, {
    'x': 1493222400000,
    'y': 159,
    'sc': '2196'
  }, { 'x': 1493308800000, 'y': 211, 'sc': '2266' }, { 'x': 1493654400000, 'y': 212, 'sc': '2200' }, {
    'x': 1493740800000,
    'y': 232,
    'sc': '2196'
  }, { 'x': 1493827200000, 'y': 241, 'sc': '2203' }, { 'x': 1493913600000, 'y': 220, 'sc': '2268' }, {
    'x': 1494172800000,
    'y': 174,
    'sc': '2200'
  }, { 'x': 1494259200000, 'y': 167, 'sc': '2202' }, { 'x': 1494345600000, 'y': 125, 'sc': '2206' }, {
    'x': 1494432000000,
    'y': 117,
    'sc': '2207'
  }, { 'x': 1494518400000, 'y': 103, 'sc': '2276' }, { 'x': 1494777600000, 'y': 50, 'sc': '2207' }, {
    'x': 1494864000000,
    'y': 63,
    'sc': '2216'
  }, { 'x': 1494950400000, 'y': 61, 'sc': '2218' }, { 'x': 1495036800000, 'y': 56, 'sc': '2218' }, {
    'x': 1495123200000,
    'y': 47,
    'sc': '2289'
  }, { 'x': 1495382400000, 'y': 54, 'sc': '2222' }, { 'x': 1495468800000, 'y': 76, 'sc': '2224' }, {
    'x': 1495555200000,
    'y': 76,
    'sc': '2232'
  }, { 'x': 1495641600000, 'y': 82, 'sc': '2233' }, { 'x': 1495728000000, 'y': 102, 'sc': '2309' }, {
    'x': 1496160000000,
    'y': 103,
    'sc': '2247'
  }, { 'x': 1496246400000, 'y': 73, 'sc': '2271' }, { 'x': 1496332800000, 'y': 91, 'sc': '2351' }, {
    'x': 1496592000000,
    'y': 117,
    'sc': '2277'
  }, { 'x': 1496678400000, 'y': 86, 'sc': '2279' }, { 'x': 1496764800000, 'y': 72, 'sc': '2273' }, {
    'x': 1496851200000,
    'y': 60,
    'sc': '2278'
  }, { 'x': 1496937600000, 'y': 54, 'sc': '2372' }, { 'x': 1497196800000, 'y': 43, 'sc': '2291' }, {
    'x': 1497283200000,
    'y': 48,
    'sc': '2304'
  }, { 'x': 1497369600000, 'y': 55, 'sc': '2304' }, { 'x': 1497456000000, 'y': 75, 'sc': '2319' }, {
    'x': 1497542400000,
    'y': 77,
    'sc': '2396'
  }, { 'x': 1497801600000, 'y': 73, 'sc': '2311' }, { 'x': 1497888000000, 'y': 93, 'sc': '2319' }, {
    'x': 1497974400000,
    'y': 77,
    'sc': '2322'
  }, { 'x': 1498060800000, 'y': 152, 'sc': '2323' }, { 'x': 1498147200000, 'y': 122, 'sc': '2418' }, {
    'x': 1498406400000,
    'y': 78,
    'sc': '2337'
  }, { 'x': 1498492800000, 'y': 65, 'sc': '2341' }, { 'x': 1498579200000, 'y': 86, 'sc': '2341' }, {
    'x': 1498665600000,
    'y': 70,
    'sc': '2346'
  }, { 'x': 1498752000000, 'y': 95, 'sc': '2438' }, { 'x': 1499011200000, 'y': 135, 'sc': '2352' }, {
    'x': 1499097600000,
    'y': 148,
    'sc': '2356'
  }, { 'x': 1499184000000, 'y': 164, 'sc': '2354' }, { 'x': 1499270400000, 'y': 256, 'sc': '2353' }, {
    'x': 1499356800000,
    'y': 292,
    'sc': '2440'
  }, { 'x': 1499616000000, 'y': 237, 'sc': '2356' }, { 'x': 1499702400000, 'y': 172, 'sc': '2359' }, {
    'x': 1499788800000,
    'y': 247,
    'sc': '2357'
  }, { 'x': 1499875200000, 'y': 484, 'sc': '2356' }, { 'x': 1499961600000, 'y': 402, 'sc': '2455' }, {
    'x': 1500220800000,
    'y': 566,
    'sc': '2364'
  }, { 'x': 1500307200000, 'y': 1185, 'sc': '2364' }, {
    'x': 1500393600000,
    'y': 820,
    'sc': '2365'
  }, { 'x': 1500480000000, 'y': 1461, 'sc': '2370' }, {
    'x': 1500566400000,
    'y': 1323,
    'sc': '2461'
  }, { 'x': 1500825600000, 'y': 760, 'sc': '2369' }, { 'x': 1500912000000, 'y': 871, 'sc': '2372' }, {
    'x': 1500998400000,
    'y': 1499,
    'sc': '2376'
  }, { 'x': 1501084800000, 'y': 1884, 'sc': '2379' }, {
    'x': 1501171200000,
    'y': 1233,
    'sc': '2472'
  }, { 'x': 1501430400000, 'y': 1364, 'sc': '2381' }, {
    'x': 1501516800000,
    'y': 1498,
    'sc': '2379'
  }, { 'x': 1501603200000, 'y': 1726, 'sc': '2382' }, {
    'x': 1501689600000,
    'y': 1954,
    'sc': '2387'
  }, { 'x': 1501776000000, 'y': 1929, 'sc': '2478' }, {
    'x': 1502035200000,
    'y': 1567,
    'sc': '2387'
  }, { 'x': 1502121600000, 'y': 1107, 'sc': '2389' }, {
    'x': 1502208000000,
    'y': 807,
    'sc': '2391'
  }, { 'x': 1502294400000, 'y': 852, 'sc': '2394' }, { 'x': 1502380800000, 'y': 887, 'sc': '2483' }, {
    'x': 1502640000000,
    'y': 947,
    'sc': '2396'
  }, { 'x': 1502726400000, 'y': 1885, 'sc': '2399' }, {
    'x': 1502812800000,
    'y': 2250,
    'sc': '2400'
  }, { 'x': 1502899200000, 'y': 2181, 'sc': '2400' }, {
    'x': 1502985600000,
    'y': 2210,
    'sc': '2493'
  }, { 'x': 1503244800000, 'y': 2112, 'sc': '2400' }, {
    'x': 1503331200000,
    'y': 2279,
    'sc': '2401'
  }, { 'x': 1503417600000, 'y': 2342, 'sc': '2394' }, {
    'x': 1503504000000,
    'y': 2361,
    'sc': '2401'
  }, { 'x': 1503590400000, 'y': 2451, 'sc': '2502' }, {
    'x': 1503849600000,
    'y': 2320,
    'sc': '2408'
  }, { 'x': 1503936000000, 'y': 2346, 'sc': '2409' }, {
    'x': 1504022400000,
    'y': 2296,
    'sc': '2408'
  }, { 'x': 1504108800000, 'y': 2354, 'sc': '2415' }, {
    'x': 1504195200000,
    'y': 2448,
    'sc': '2505'
  }, { 'x': 1504454400000, 'y': 2016, 'sc': '2423' }, {
    'x': 1504540800000,
    'y': 1666,
    'sc': '2425'
  }, { 'x': 1504627200000, 'y': 2307, 'sc': '2420' }, {
    'x': 1504713600000,
    'y': 2382,
    'sc': '2419'
  }, { 'x': 1504800000000, 'y': 2496, 'sc': '2514' }, {
    'x': 1505059200000,
    'y': 2407,
    'sc': '2421'
  }, { 'x': 1505145600000, 'y': 2414, 'sc': '2419' }, {
    'x': 1505232000000,
    'y': 2410,
    'sc': '2419'
  }, { 'x': 1505318400000, 'y': 2399, 'sc': '2424' }, {
    'x': 1505404800000,
    'y': 2477,
    'sc': '2520'
  }, { 'x': 1505664000000, 'y': 2346, 'sc': '2428' }, {
    'x': 1505750400000,
    'y': 2404,
    'sc': '2429'
  }, { 'x': 1505836800000, 'y': 2334, 'sc': '2426' }, {
    'x': 1505923200000,
    'y': 2411,
    'sc': '2432'
  }, { 'x': 1506009600000, 'y': 2482, 'sc': '2531' }, {
    'x': 1506268800000,
    'y': 2379,
    'sc': '2436'
  }, { 'x': 1506355200000, 'y': 2416, 'sc': '2439' }, {
    'x': 1506441600000,
    'y': 2425,
    'sc': '2442'
  }, { 'x': 1506528000000, 'y': 2346, 'sc': '2442' }, {
    'x': 1506614400000,
    'y': 2479,
    'sc': '2541'
  }, { 'x': 1507478400000, 'y': 1157, 'sc': '2464' }, {
    'x': 1507564800000,
    'y': 751,
    'sc': '2462'
  }, { 'x': 1507651200000, 'y': 585, 'sc': '2466' }, { 'x': 1507737600000, 'y': 454, 'sc': '2467' }, {
    'x': 1507824000000,
    'y': 345,
    'sc': '2566'
  }, { 'x': 1508083200000, 'y': 336, 'sc': '2470' }, { 'x': 1508169600000, 'y': 425, 'sc': '2470' }, {
    'x': 1508256000000,
    'y': 260,
    'sc': '2469'
  }, { 'x': 1508342400000, 'y': 160, 'sc': '2469' }, { 'x': 1508428800000, 'y': 188, 'sc': '2571' }, {
    'x': 1508688000000,
    'y': 100,
    'sc': '2473'
  }, { 'x': 1508774400000, 'y': 92, 'sc': '2476' }, { 'x': 1508860800000, 'y': 66, 'sc': '2477' }, {
    'x': 1508947200000,
    'y': 67,
    'sc': '2476'
  }, { 'x': 1509033600000, 'y': 52, 'sc': '2578' }, { 'x': 1509292800000, 'y': 75, 'sc': '2478' }, {
    'x': 1509379200000,
    'y': 75,
    'sc': '2483'
  }, { 'x': 1509465600000, 'y': 57, 'sc': '2485' }, { 'x': 1509552000000, 'y': 26, 'sc': '2486' }, {
    'x': 1509638400000,
    'y': 13,
    'sc': '2586'
  }, { 'x': 1509897600000, 'y': 10, 'sc': '2491' }, { 'x': 1509984000000, 'y': 17, 'sc': '2488' }, {
    'x': 1510070400000,
    'y': 41,
    'sc': '2490'
  }, { 'x': 1510156800000, 'y': 83, 'sc': '2493' }, { 'x': 1510243200000, 'y': 131, 'sc': '2595' }, {
    'x': 1510502400000,
    'y': 194,
    'sc': '2494'
  }, { 'x': 1510588800000, 'y': 210, 'sc': '2494' }, { 'x': 1510675200000, 'y': 133, 'sc': '2495' }, {
    'x': 1510761600000,
    'y': 97,
    'sc': '2503'
  }, { 'x': 1510848000000, 'y': 141, 'sc': '2600' }, { 'x': 1511107200000, 'y': 152, 'sc': '2500' }, {
    'x': 1511193600000,
    'y': 229,
    'sc': '2499'
  }, { 'x': 1511280000000, 'y': 254, 'sc': '2502' }, { 'x': 1511366400000, 'y': 308, 'sc': '2506' }, {
    'x': 1511452800000,
    'y': 251,
    'sc': '2609'
  }, { 'x': 1511712000000, 'y': 200, 'sc': '2519' }, { 'x': 1511798400000, 'y': 144, 'sc': '2511' }, {
    'x': 1511884800000,
    'y': 162,
    'sc': '2514'
  }, { 'x': 1511971200000, 'y': 87, 'sc': '2527' }, { 'x': 1512057600000, 'y': 110, 'sc': '2626' }, {
    'x': 1512316800000,
    'y': 100,
    'sc': '2534'
  }, { 'x': 1512403200000, 'y': 123, 'sc': '2533' }, { 'x': 1512489600000, 'y': 70, 'sc': '2533' }, {
    'x': 1512576000000,
    'y': 68,
    'sc': '2532'
  }, { 'x': 1512662400000, 'y': 87, 'sc': '2634' }, { 'x': 1512921600000, 'y': 51, 'sc': '2529' }, {
    'x': 1513008000000,
    'y': 26,
    'sc': '2529'
  }, { 'x': 1513094400000, 'y': 39, 'sc': '2530' }, { 'x': 1513180800000, 'y': 29, 'sc': '2534' }, {
    'x': 1513267200000,
    'y': 28,
    'sc': '2639'
  }, { 'x': 1513526400000, 'y': 25, 'sc': '2535' }, { 'x': 1513612800000, 'y': 25, 'sc': '2535' }, {
    'x': 1513699200000,
    'y': 30,
    'sc': '2538'
  }, { 'x': 1513785600000, 'y': 21, 'sc': '2542' }, { 'x': 1513872000000, 'y': 26, 'sc': '2644' }, {
    'x': 1514131200000,
    'y': 36,
    'sc': '2535'
  }, { 'x': 1514217600000, 'y': 36, 'sc': '2534' }, { 'x': 1514304000000, 'y': 32, 'sc': '2548' }, {
    'x': 1514390400000,
    'y': 39,
    'sc': '2551'
  }, { 'x': 1514476800000, 'y': 26, 'sc': '2661' }, { 'x': 1514822400000, 'y': 46, 'sc': '2558' }, {
    'x': 1514908800000,
    'y': 49,
    'sc': '2558'
  }, { 'x': 1514995200000, 'y': 49, 'sc': '2558' }, { 'x': 1515081600000, 'y': 56, 'sc': '2660' }, {
    'x': 1515340800000,
    'y': 61,
    'sc': '2554'
  }, { 'x': 1515427200000, 'y': 48, 'sc': '2555' }, { 'x': 1515513600000, 'y': 70, 'sc': '2556' }, {
    'x': 1515600000000,
    'y': 87,
    'sc': '2558'
  }, { 'x': 1515686400000, 'y': 82, 'sc': '2658' }, { 'x': 1515945600000, 'y': 113, 'sc': '2557' }, {
    'x': 1516032000000,
    'y': 97,
    'sc': '2557'
  }, { 'x': 1516118400000, 'y': 113, 'sc': '2557' }, { 'x': 1516204800000, 'y': 190, 'sc': '2556' }, {
    'x': 1516291200000,
    'y': 288,
    'sc': '2660'
  }, { 'x': 1516550400000, 'y': 229, 'sc': '2558' }, { 'x': 1516636800000, 'y': 369, 'sc': '2557' }, {
    'x': 1516723200000,
    'y': 331,
    'sc': '2560'
  }, { 'x': 1516809600000, 'y': 605, 'sc': '2561' }, { 'x': 1516896000000, 'y': 547, 'sc': '2661' }, {
    'x': 1517155200000,
    'y': 1368,
    'sc': '2562'
  }, { 'x': 1517241600000, 'y': 1033, 'sc': '2561' }, {
    'x': 1517328000000,
    'y': 917,
    'sc': '2565'
  }, { 'x': 1517414400000, 'y': 1426, 'sc': '2567' }, {
    'x': 1517500800000,
    'y': 1796,
    'sc': '2670'
  }, { 'x': 1517760000000, 'y': 2194, 'sc': '2576' }, {
    'x': 1517846400000,
    'y': 2307,
    'sc': '2575'
  }, { 'x': 1517932800000, 'y': 2241, 'sc': '2575' }, {
    'x': 1518019200000,
    'y': 2092,
    'sc': '2574'
  }, { 'x': 1518105600000, 'y': 2119, 'sc': '2677' }, {
    'x': 1518364800000,
    'y': 1792,
    'sc': '2577'
  }, { 'x': 1518451200000, 'y': 1760, 'sc': '2567' }, {
    'x': 1518537600000,
    'y': 1533,
    'sc': '2672'
  }, { 'x': 1519228800000, 'y': 535, 'sc': '2595' }, { 'x': 1519315200000, 'y': 152, 'sc': '2697' }, {
    'x': 1519574400000,
    'y': 121,
    'sc': '2603'
  }, { 'x': 1519660800000, 'y': 73, 'sc': '2607' }, { 'x': 1519747200000, 'y': 118, 'sc': '2626' }, {
    'x': 1519833600000,
    'y': 104,
    'sc': '2629'
  }, { 'x': 1519920000000, 'y': 109, 'sc': '2721' }, { 'x': 1520179200000, 'y': 85, 'sc': '2634' }, {
    'x': 1520265600000,
    'y': 58,
    'sc': '2639'
  }, { 'x': 1520352000000, 'y': 55, 'sc': '2643' }, { 'x': 1520438400000, 'y': 30, 'sc': '2645' }, {
    'x': 1520524800000,
    'y': 42,
    'sc': '2739'
  }, { 'x': 1520784000000, 'y': 142, 'sc': '2646' }, { 'x': 1520870400000, 'y': 193, 'sc': '2650' }, {
    'x': 1520956800000,
    'y': 372,
    'sc': '2657'
  }, { 'x': 1521043200000, 'y': 189, 'sc': '2656' }, { 'x': 1521129600000, 'y': 187, 'sc': '2754' }, {
    'x': 1521388800000,
    'y': 60,
    'sc': '2653'
  }, { 'x': 1521475200000, 'y': 50, 'sc': '2660' }, { 'x': 1521561600000, 'y': 58, 'sc': '2660' }, {
    'x': 1521648000000,
    'y': 48,
    'sc': '2658'
  }, { 'x': 1521734400000, 'y': 47, 'sc': '2765' }, { 'x': 1521993600000, 'y': 28, 'sc': '2663' }, {
    'x': 1522080000000,
    'y': 27,
    'sc': '2671'
  }, { 'x': 1522166400000, 'y': 46, 'sc': '2671' }, { 'x': 1522252800000, 'y': 71, 'sc': '2674' }, {
    'x': 1522339200000,
    'y': 53,
    'sc': '2771'
  }, { 'x': 1522598400000, 'y': 43, 'sc': '2663' }, { 'x': 1522684800000, 'y': 32, 'sc': '2663' }, {
    'x': 1522771200000,
    'y': 48,
    'sc': '2772'
  }, { 'x': 1523203200000, 'y': 77, 'sc': '2673' }, { 'x': 1523289600000, 'y': 58, 'sc': '2675' }, {
    'x': 1523376000000,
    'y': 58,
    'sc': '2676'
  }, { 'x': 1523462400000, 'y': 48, 'sc': '2667' }, { 'x': 1523548800000, 'y': 84, 'sc': '2777' }, {
    'x': 1523808000000,
    'y': 93,
    'sc': '2671'
  }, { 'x': 1523894400000, 'y': 93, 'sc': '2673' }, { 'x': 1523980800000, 'y': 93, 'sc': '2673' }, {
    'x': 1524067200000,
    'y': 72,
    'sc': '2686'
  }, { 'x': 1524153600000, 'y': 56, 'sc': '2794' }, { 'x': 1524412800000, 'y': 46, 'sc': '2689' }, {
    'x': 1524499200000,
    'y': 47,
    'sc': '2696'
  }, { 'x': 1524585600000, 'y': 18, 'sc': '2702' }, { 'x': 1524672000000, 'y': 28, 'sc': '2698' }, {
    'x': 1524758400000,
    'y': 17,
    'sc': '2804'
  }, { 'x': 1525190400000, 'y': 11, 'sc': '2734' }, { 'x': 1525276800000, 'y': 14, 'sc': '2737' }, {
    'x': 1525363200000,
    'y': 13,
    'sc': '2839'
  }, { 'x': 1525622400000, 'y': 8, 'sc': '2754' }, { 'x': 1525708800000, 'y': 7, 'sc': '2763' }, {
    'x': 1525795200000,
    'y': 7,
    'sc': '2761'
  }, { 'x': 1525881600000, 'y': 5, 'sc': '2765' }, { 'x': 1525968000000, 'y': 7, 'sc': '2877' }, {
    'x': 1526227200000,
    'y': 7,
    'sc': '2783'
  }, { 'x': 1526313600000, 'y': 7, 'sc': '2781' }, { 'x': 1526400000000, 'y': 6, 'sc': '2775' }, {
    'x': 1526486400000,
    'y': 6,
    'sc': '2769'
  }, { 'x': 1526572800000, 'y': 6, 'sc': '2878' }, { 'x': 1526832000000, 'y': 7, 'sc': '2771' }, {
    'x': 1526918400000,
    'y': 7,
    'sc': '2766'
  }, { 'x': 1527004800000, 'y': 6, 'sc': '2776' }, { 'x': 1527091200000, 'y': 6, 'sc': '2778' }, {
    'x': 1527177600000,
    'y': 6,
    'sc': '2882'
  }, { 'x': 1527436800000, 'y': 6, 'sc': '2779' }, { 'x': 1527523200000, 'y': 6, 'sc': '2778' }, {
    'x': 1527609600000,
    'y': 6,
    'sc': '2774'
  }, { 'x': 1527696000000, 'y': 6, 'sc': '2779' }, { 'x': 1527782400000, 'y': 7, 'sc': '2877' }, {
    'x': 1528041600000,
    'y': 7,
    'sc': '2779'
  }, { 'x': 1528128000000, 'y': 6, 'sc': '2779' }, { 'x': 1528214400000, 'y': 6, 'sc': '2773' }, {
    'x': 1528300800000,
    'y': 6,
    'sc': '2775'
  }, { 'x': 1528387200000, 'y': 6, 'sc': '2879' }, { 'x': 1528646400000, 'y': 6, 'sc': '2781' }, {
    'x': 1528732800000,
    'y': 6,
    'sc': '2776'
  }, { 'x': 1528819200000, 'y': 6, 'sc': '2776' }, { 'x': 1528905600000, 'y': 6, 'sc': '2779' }, {
    'x': 1528992000000,
    'y': 6,
    'sc': '2882'
  }, { 'x': 1529337600000, 'y': 8, 'sc': '2780' }, { 'x': 1529424000000, 'y': 6, 'sc': '2775' }, {
    'x': 1529510400000,
    'y': 6,
    'sc': '2781'
  }, { 'x': 1529596800000, 'y': 5, 'sc': '2885' }, { 'x': 1529856000000, 'y': 4, 'sc': '2778' }, {
    'x': 1529942400000,
    'y': 4,
    'sc': '2774'
  }, { 'x': 1530028800000, 'y': 7, 'sc': '2775' }, { 'x': 1530115200000, 'y': 6, 'sc': '2780' }, {
    'x': 1530201600000,
    'y': 3,
    'sc': '2882'
  }, { 'x': 1530460800000, 'y': 3, 'sc': '2767' }, { 'x': 1530547200000, 'y': 4, 'sc': '2783' }, {
    'x': 1530633600000,
    'y': 3,
    'sc': '2793'
  }, { 'x': 1530720000000, 'y': 3, 'sc': '2788' }, { 'x': 1530806400000, 'y': 4, 'sc': '2889' }, {
    'x': 1531065600000,
    'y': 3,
    'sc': '2791'
  }, { 'x': 1531152000000, 'y': 4, 'sc': '2790' }, { 'x': 1531238400000, 'y': 2, 'sc': '2791' }, {
    'x': 1531324800000,
    'y': 3,
    'sc': '2791'
  }, { 'x': 1531411200000, 'y': 2, 'sc': '2885' }, { 'x': 1531670400000, 'y': 2, 'sc': '2788' }, {
    'x': 1531756800000,
    'y': 2,
    'sc': '2789'
  }, { 'x': 1531843200000, 'y': 2, 'sc': '2790' }, { 'x': 1531929600000, 'y': 2, 'sc': '2787' }, {
    'x': 1532016000000,
    'y': 2,
    'sc': '2889'
  }, { 'x': 1532275200000, 'y': 79, 'sc': '2790' }, { 'x': 1532361600000, 'y': 115, 'sc': '2779' }, {
    'x': 1532448000000,
    'y': 197,
    'sc': '2777'
  }, { 'x': 1532534400000, 'y': 136, 'sc': '2780' }, {
    'x': 1532620800000,
    'y': 1369,
    'sc': '2880'
  }, { 'x': 1532880000000, 'y': 1975, 'sc': '2774' }, {
    'x': 1532966400000,
    'y': 1811,
    'sc': '2772'
  }, { 'x': 1533052800000, 'y': 1963, 'sc': '2769' }, {
    'x': 1533139200000,
    'y': 1636,
    'sc': '2769'
  }, { 'x': 1533225600000, 'y': 1825, 'sc': '2873' }, {
    'x': 1533484800000,
    'y': 2408,
    'sc': '2776'
  }, { 'x': 1533571200000, 'y': 2384, 'sc': '2768' }, {
    'x': 1533657600000,
    'y': 2253,
    'sc': '2768'
  }, { 'x': 1533744000000, 'y': 2048, 'sc': '2772' }, {
    'x': 1533830400000,
    'y': 2241,
    'sc': '2880'
  }, { 'x': 1534089600000, 'y': 1458, 'sc': '2769' }, {
    'x': 1534176000000,
    'y': 1396,
    'sc': '2771'
  }, { 'x': 1534262400000, 'y': 2050, 'sc': '2772' }, {
    'x': 1534348800000,
    'y': 2094,
    'sc': '2772'
  }, { 'x': 1534435200000, 'y': 2457, 'sc': '2882' }, {
    'x': 1534694400000,
    'y': 2568,
    'sc': '2772'
  }, { 'x': 1534780800000, 'y': 2049, 'sc': '2776' }, {
    'x': 1534867200000,
    'y': 2184,
    'sc': '2776'
  }, { 'x': 1534953600000, 'y': 2206, 'sc': '2775' }, {
    'x': 1535040000000,
    'y': 2361,
    'sc': '2883'
  }, { 'x': 1535299200000, 'y': 2446, 'sc': '2779' }, {
    'x': 1535385600000,
    'y': 2546,
    'sc': '2778'
  }, { 'x': 1535472000000, 'y': 2151, 'sc': '2779' }, {
    'x': 1535558400000,
    'y': 2309,
    'sc': '2780'
  }, { 'x': 1535644800000, 'y': 2652, 'sc': '2886' }, {
    'x': 1535904000000,
    'y': 2284,
    'sc': '2789'
  }, { 'x': 1535990400000, 'y': 2348, 'sc': '2781' }, {
    'x': 1536076800000,
    'y': 2508,
    'sc': '2779'
  }, { 'x': 1536163200000, 'y': 2637, 'sc': '2777' }, {
    'x': 1536249600000,
    'y': 2524,
    'sc': '2879'
  }, { 'x': 1536508800000, 'y': 2503, 'sc': '2780' }, {
    'x': 1536595200000,
    'y': 2153,
    'sc': '2776'
  }, { 'x': 1536681600000, 'y': 2509, 'sc': '2770' }, {
    'x': 1536768000000,
    'y': 2622,
    'sc': '2775'
  }, { 'x': 1536854400000, 'y': 2777, 'sc': '2879' }, {
    'x': 1537113600000,
    'y': 2657,
    'sc': '2776'
  }, { 'x': 1537200000000, 'y': 2594, 'sc': '2776' }, {
    'x': 1537286400000,
    'y': 2697,
    'sc': '2775'
  }, { 'x': 1537372800000, 'y': 2750, 'sc': '2763' }, {
    'x': 1537459200000,
    'y': 2864,
    'sc': '2870'
  }, { 'x': 1537804800000, 'y': 2756, 'sc': '2767' }, {
    'x': 1537891200000,
    'y': 2770,
    'sc': '2787'
  }, { 'x': 1537977600000, 'y': 2687, 'sc': '2772' }, {
    'x': 1538064000000,
    'y': 2763,
    'sc': '2877'
  }, { 'x': 1538928000000, 'y': 2752, 'sc': '2794' }, {
    'x': 1539014400000,
    'y': 2770,
    'sc': '2794'
  }, { 'x': 1539100800000, 'y': 2777, 'sc': '2788' }, {
    'x': 1539187200000,
    'y': 2777,
    'sc': '2788'
  }, { 'x': 1539273600000, 'y': 2883, 'sc': '2891' }, {
    'x': 1539532800000,
    'y': 2773,
    'sc': '2778'
  }, { 'x': 1539619200000, 'y': 2773, 'sc': '2778' }, {
    'x': 1539705600000,
    'y': 2757,
    'sc': '2762'
  }, { 'x': 1539792000000, 'y': 2778, 'sc': '2779' }, {
    'x': 1539878400000,
    'y': 2879,
    'sc': '2885'
  }, { 'x': 1540137600000, 'y': 2762, 'sc': '2774' }, {
    'x': 1540224000000,
    'y': 2635,
    'sc': '2772'
  }, { 'x': 1540310400000, 'y': 2637, 'sc': '2772' }, {
    'x': 1540396800000,
    'y': 2731,
    'sc': '2774'
  }, { 'x': 1540483200000, 'y': 2860, 'sc': '2889' }, {
    'x': 1540742400000,
    'y': 2744,
    'sc': '2776'
  }, { 'x': 1540828800000, 'y': 2657, 'sc': '2770' }, {
    'x': 1540915200000,
    'y': 2632,
    'sc': '2761'
  }, { 'x': 1541001600000, 'y': 2611, 'sc': '2763' }, {
    'x': 1541088000000,
    'y': 2745,
    'sc': '2871'
  }, { 'x': 1541347200000, 'y': 2627, 'sc': '2776' }, {
    'x': 1541433600000,
    'y': 2189,
    'sc': '2764'
  }, { 'x': 1541520000000, 'y': 2311, 'sc': '2763' }, {
    'x': 1541606400000,
    'y': 2103,
    'sc': '2762'
  }, { 'x': 1541692800000, 'y': 2570, 'sc': '2876' }, {
    'x': 1541952000000,
    'y': 2610,
    'sc': '2773'
  }, { 'x': 1542038400000, 'y': 2646, 'sc': '2771' }, {
    'x': 1542124800000,
    'y': 2673,
    'sc': '2769'
  }, { 'x': 1542211200000, 'y': 2590, 'sc': '2766' }, {
    'x': 1542297600000,
    'y': 2825,
    'sc': '2872'
  }, { 'x': 1542556800000, 'y': 2627, 'sc': '2757' }, {
    'x': 1542643200000,
    'y': 2367,
    'sc': '2754'
  }, { 'x': 1542729600000, 'y': 2568, 'sc': '2753' }, {
    'x': 1542816000000,
    'y': 2630,
    'sc': '2756'
  }, { 'x': 1542902400000, 'y': 2757, 'sc': '2872' }, {
    'x': 1543161600000,
    'y': 2674,
    'sc': '2763'
  }, { 'x': 1543248000000, 'y': 2688, 'sc': '2758' }, {
    'x': 1543334400000,
    'y': 2676,
    'sc': '2760'
  }, { 'x': 1543420800000, 'y': 2653, 'sc': '2755' }, {
    'x': 1543507200000,
    'y': 2682,
    'sc': '2866'
  }, { 'x': 1543766400000, 'y': 2462, 'sc': '2756' }, {
    'x': 1543852800000,
    'y': 2163,
    'sc': '2757'
  }, { 'x': 1543939200000, 'y': 1942, 'sc': '2763' }, {
    'x': 1544025600000,
    'y': 2315,
    'sc': '2760'
  }, { 'x': 1544112000000, 'y': 2819, 'sc': '2872' }, {
    'x': 1544371200000,
    'y': 2719,
    'sc': '2763'
  }, { 'x': 1544457600000, 'y': 2710, 'sc': '2759' }, {
    'x': 1544544000000,
    'y': 2689,
    'sc': '2760'
  }, { 'x': 1544630400000, 'y': 2616, 'sc': '2765' }, {
    'x': 1544716800000,
    'y': 2782,
    'sc': '2876'
  }, { 'x': 1544976000000, 'y': 2693, 'sc': '2767' }, {
    'x': 1545062400000,
    'y': 2710,
    'sc': '2766'
  }, { 'x': 1545148800000, 'y': 2738, 'sc': '2772' }, {
    'x': 1545235200000,
    'y': 2751,
    'sc': '2773'
  }, { 'x': 1545321600000, 'y': 2887, 'sc': '2889' }, {
    'x': 1545580800000,
    'y': 2742,
    'sc': '2758'
  }, { 'x': 1545667200000, 'y': 2739, 'sc': '2753' }, {
    'x': 1545753600000,
    'y': 2744,
    'sc': '2749'
  }, { 'x': 1545840000000, 'y': 2755, 'sc': '2759' }, {
    'x': 1545926400000,
    'y': 2876,
    'sc': '2876'
  }, { 'x': 1546358400000, 'y': 2772, 'sc': '2772' }, {
    'x': 1546444800000,
    'y': 2772,
    'sc': '2772'
  }, { 'x': 1546531200000, 'y': 2884, 'sc': '2885' }, {
    'x': 1546790400000,
    'y': 2778,
    'sc': '2778'
  }, { 'x': 1546876800000, 'y': 2773, 'sc': '2775' }, {
    'x': 1546963200000,
    'y': 2769,
    'sc': '2775'
  }, { 'x': 1547049600000, 'y': 2769, 'sc': '2775' }, {
    'x': 1547136000000,
    'y': 2879,
    'sc': '2885'
  }, { 'x': 1547395200000, 'y': 2762, 'sc': '2771' }, {
    'x': 1547481600000,
    'y': 2764,
    'sc': '2769'
  }, { 'x': 1547568000000, 'y': 2756, 'sc': '2769' }, {
    'x': 1547654400000,
    'y': 2747,
    'sc': '2769'
  }, { 'x': 1547740800000, 'y': 2646, 'sc': '2886' }, {
    'x': 1548000000000,
    'y': 2698,
    'sc': '2766'
  }, { 'x': 1548086400000, 'y': 2745, 'sc': '2766' }, {
    'x': 1548172800000,
    'y': 2745,
    'sc': '2767'
  }, { 'x': 1548259200000, 'y': 2725, 'sc': '2765' }, {
    'x': 1548345600000,
    'y': 2782,
    'sc': '2883'
  }, { 'x': 1548604800000, 'y': 2556, 'sc': '2762' }, {
    'x': 1548691200000,
    'y': 2468,
    'sc': '2761'
  }, { 'x': 1548777600000, 'y': 2649, 'sc': '2763' }, {
    'x': 1548864000000,
    'y': 2688,
    'sc': '2753'
  }, { 'x': 1548950400000, 'y': 2757, 'sc': '2870' }, {
    'x': 1549814400000,
    'y': 2750,
    'sc': '2782'
  }, { 'x': 1549900800000, 'y': 2751, 'sc': '2784' }, {
    'x': 1549987200000,
    'y': 2758,
    'sc': '2787'
  }, { 'x': 1550073600000, 'y': 2757, 'sc': '2791' }, {
    'x': 1550160000000,
    'y': 2874,
    'sc': '2905'
  }, { 'x': 1550419200000, 'y': 2551, 'sc': '2791' }, {
    'x': 1550505600000,
    'y': 2647,
    'sc': '2791'
  }, { 'x': 1550592000000, 'y': 2693, 'sc': '2792' }, {
    'x': 1550678400000,
    'y': 2752,
    'sc': '2790'
  }, { 'x': 1550764800000, 'y': 2865, 'sc': '2914' }, {
    'x': 1551024000000,
    'y': 2135,
    'sc': '2794'
  }, { 'x': 1551110400000, 'y': 1995, 'sc': '2793' }, {
    'x': 1551196800000,
    'y': 2071,
    'sc': '2793'
  }, { 'x': 1551283200000, 'y': 1789, 'sc': '2800' }, {
    'x': 1551369600000,
    'y': 1813,
    'sc': '2914'
  }, { 'x': 1551628800000, 'y': 2126, 'sc': '2802' }, {
    'x': 1551715200000,
    'y': 2296,
    'sc': '2804'
  }, { 'x': 1551801600000, 'y': 1960, 'sc': '2803' }, {
    'x': 1551888000000,
    'y': 1797,
    'sc': '2802'
  }, { 'x': 1551974400000, 'y': 1707, 'sc': '2919' }, {
    'x': 1552233600000,
    'y': 1375,
    'sc': '2800'
  }, { 'x': 1552320000000, 'y': 1261, 'sc': '2796' }, {
    'x': 1552406400000,
    'y': 1040,
    'sc': '2800'
  }, { 'x': 1552492800000, 'y': 689, 'sc': '2803' }, { 'x': 1552579200000, 'y': 488, 'sc': '2919' }, {
    'x': 1552838400000,
    'y': 264,
    'sc': '2799'
  }, { 'x': 1552924800000, 'y': 273, 'sc': '2800' }, { 'x': 1553011200000, 'y': 206, 'sc': '2800' }, {
    'x': 1553097600000,
    'y': 198,
    'sc': '2802'
  }, { 'x': 1553184000000, 'y': 182, 'sc': '2924' }, { 'x': 1553443200000, 'y': 318, 'sc': '2815' }, {
    'x': 1553529600000,
    'y': 266,
    'sc': '2819'
  }, { 'x': 1553616000000, 'y': 173, 'sc': '2821' }, { 'x': 1553702400000, 'y': 189, 'sc': '2829' }, {
    'x': 1553788800000,
    'y': 170,
    'sc': '2938'
  }, { 'x': 1554048000000, 'y': 262, 'sc': '2832' }, { 'x': 1554134400000, 'y': 225, 'sc': '2831' }, {
    'x': 1554220800000,
    'y': 252,
    'sc': '2833'
  }, { 'x': 1554307200000, 'y': 349, 'sc': '2938' }, { 'x': 1554652800000, 'y': 381, 'sc': '2832' }, {
    'x': 1554739200000,
    'y': 279,
    'sc': '2828'
  }, { 'x': 1554825600000, 'y': 201, 'sc': '2828' }, { 'x': 1554912000000, 'y': 231, 'sc': '2832' }, {
    'x': 1554998400000,
    'y': 238,
    'sc': '2935'
  }, { 'x': 1555257600000, 'y': 206, 'sc': '2835' }, { 'x': 1555344000000, 'y': 329, 'sc': '2837' }, {
    'x': 1555430400000,
    'y': 356,
    'sc': '2840'
  }, { 'x': 1555516800000, 'y': 451, 'sc': '2845' }, { 'x': 1555603200000, 'y': 508, 'sc': '2921' }, {
    'x': 1555862400000,
    'y': 371,
    'sc': '2820'
  }, { 'x': 1555948800000, 'y': 341, 'sc': '2843' }, { 'x': 1556035200000, 'y': 308, 'sc': '2841' }, {
    'x': 1556121600000,
    'y': 222,
    'sc': '2851'
  }, { 'x': 1556208000000, 'y': 192, 'sc': '2948' }, { 'x': 1556467200000, 'y': 86, 'sc': '2843' }, {
    'x': 1556553600000,
    'y': 122,
    'sc': '2960'
  }, { 'x': 1557072000000, 'y': 133, 'sc': '2874' }, { 'x': 1557158400000, 'y': 74, 'sc': '2875' }, {
    'x': 1557244800000,
    'y': 76,
    'sc': '2874'
  }, { 'x': 1557331200000, 'y': 114, 'sc': '2880' }, { 'x': 1557417600000, 'y': 127, 'sc': '2974' }, {
    'x': 1557676800000,
    'y': 66,
    'sc': '2853'
  }, { 'x': 1557763200000, 'y': 67, 'sc': '2873' }, { 'x': 1557849600000, 'y': 72, 'sc': '2876' }, {
    'x': 1557936000000,
    'y': 65,
    'sc': '2877'
  }, { 'x': 1558022400000, 'y': 66, 'sc': '2976' }, { 'x': 1558281600000, 'y': 45, 'sc': '2875' }, {
    'x': 1558368000000,
    'y': 43,
    'sc': '2876'
  }, { 'x': 1558454400000, 'y': 35, 'sc': '2878' }, { 'x': 1558540800000, 'y': 37, 'sc': '2880' }, {
    'x': 1558627200000,
    'y': 39,
    'sc': '2982'
  }, { 'x': 1558886400000, 'y': 50, 'sc': '2881' }, { 'x': 1558972800000, 'y': 99, 'sc': '2885' }, {
    'x': 1559059200000,
    'y': 110,
    'sc': '2886'
  }, { 'x': 1559145600000, 'y': 88, 'sc': '2887' }, { 'x': 1559232000000, 'y': 66, 'sc': '2988' }, {
    'x': 1559491200000,
    'y': 49,
    'sc': '2885'
  }, { 'x': 1559577600000, 'y': 67, 'sc': '2885' }, { 'x': 1559664000000, 'y': 102, 'sc': '2888' }, {
    'x': 1559750400000,
    'y': 78,
    'sc': '2993'
  }, { 'x': 1560096000000, 'y': 67, 'sc': '2901' }, { 'x': 1560182400000, 'y': 106, 'sc': '2901' }, {
    'x': 1560268800000,
    'y': 76,
    'sc': '2903'
  }, { 'x': 1560355200000, 'y': 79, 'sc': '2905' }, { 'x': 1560441600000, 'y': 75, 'sc': '3003' }, {
    'x': 1560700800000,
    'y': 141,
    'sc': '2902'
  }, { 'x': 1560787200000, 'y': 484, 'sc': '2902' }, { 'x': 1560873600000, 'y': 137, 'sc': '2905' }, {
    'x': 1560960000000,
    'y': 109,
    'sc': '2914'
  }, { 'x': 1561046400000, 'y': 101, 'sc': '3017' }, { 'x': 1561305600000, 'y': 112, 'sc': '2917' }, {
    'x': 1561392000000,
    'y': 114,
    'sc': '2923'
  }, { 'x': 1561478400000, 'y': 36, 'sc': '2930' }, { 'x': 1561564800000, 'y': 56, 'sc': '2931' }, {
    'x': 1561651200000,
    'y': 65,
    'sc': '3042'
  }, { 'x': 1561910400000, 'y': 74, 'sc': '2914' }, { 'x': 1561996800000, 'y': 30, 'sc': '2940' }, {
    'x': 1562083200000,
    'y': 46,
    'sc': '2944'
  }, { 'x': 1562169600000, 'y': 39, 'sc': '2946' }, { 'x': 1562256000000, 'y': 34, 'sc': '3047' }, {
    'x': 1562515200000,
    'y': 32,
    'sc': '2941'
  }, { 'x': 1562601600000, 'y': 37, 'sc': '2945' }, { 'x': 1562688000000, 'y': 40, 'sc': '2947' }, {
    'x': 1562774400000,
    'y': 30,
    'sc': '2949'
  }, { 'x': 1562860800000, 'y': 33, 'sc': '3051' }, { 'x': 1563120000000, 'y': 38, 'sc': '2947' }, {
    'x': 1563206400000,
    'y': 42,
    'sc': '2950'
  }, { 'x': 1563292800000, 'y': 42, 'sc': '2949' }, { 'x': 1563379200000, 'y': 46, 'sc': '2948' }, {
    'x': 1563465600000,
    'y': 51,
    'sc': '3054'
  }, { 'x': 1563724800000, 'y': 126, 'sc': '2950' }, { 'x': 1563811200000, 'y': 125, 'sc': '2952' }, {
    'x': 1563897600000,
    'y': 142,
    'sc': '2964'
  }, { 'x': 1563984000000, 'y': 324, 'sc': '2971' }, { 'x': 1564070400000, 'y': 184, 'sc': '3081' }, {
    'x': 1564329600000,
    'y': 644,
    'sc': '2984'
  }, { 'x': 1564416000000, 'y': 545, 'sc': '2990' }, { 'x': 1564502400000, 'y': 547, 'sc': '2981' }, {
    'x': 1564588800000,
    'y': 561,
    'sc': '2987'
  }, { 'x': 1564675200000, 'y': 304, 'sc': '3088' }, { 'x': 1564934400000, 'y': 505, 'sc': '2988' }, {
    'x': 1565020800000,
    'y': 233,
    'sc': '2998'
  }, { 'x': 1565107200000, 'y': 283, 'sc': '3002' }, { 'x': 1565193600000, 'y': 184, 'sc': '3008' }, {
    'x': 1565280000000,
    'y': 84,
    'sc': '3108'
  }, { 'x': 1565539200000, 'y': 138, 'sc': '3013' }, { 'x': 1565625600000, 'y': 216, 'sc': '3013' }, {
    'x': 1565712000000,
    'y': 109,
    'sc': '3012'
  }, { 'x': 1565798400000, 'y': 186, 'sc': '3014' }, { 'x': 1565884800000, 'y': 238, 'sc': '3113' }, {
    'x': 1566144000000,
    'y': 291,
    'sc': '3019'
  }, { 'x': 1566230400000, 'y': 214, 'sc': '3019' }, { 'x': 1566316800000, 'y': 311, 'sc': '3024' }, {
    'x': 1566403200000,
    'y': 247,
    'sc': '3025'
  }, { 'x': 1566489600000, 'y': 111, 'sc': '3120' }, { 'x': 1566748800000, 'y': 121, 'sc': '3025' }, {
    'x': 1566835200000,
    'y': 129,
    'sc': '3030'
  }, { 'x': 1566921600000, 'y': 166, 'sc': '3031' }, { 'x': 1567008000000, 'y': 189, 'sc': '3034' }, {
    'x': 1567094400000,
    'y': 213,
    'sc': '3132'
  }, { 'x': 1567353600000, 'y': 281, 'sc': '3041' }, { 'x': 1567440000000, 'y': 335, 'sc': '3038' }, {
    'x': 1567526400000,
    'y': 274,
    'sc': '3040'
  }, { 'x': 1567612800000, 'y': 252, 'sc': '3045' }, { 'x': 1567699200000, 'y': 268, 'sc': '3140' }, {
    'x': 1567958400000,
    'y': 366,
    'sc': '3044'
  }, { 'x': 1568044800000, 'y': 280, 'sc': '3044' }, { 'x': 1568131200000, 'y': 407, 'sc': '3028' }, {
    'x': 1568217600000,
    'y': 482,
    'sc': '3131'
  }, { 'x': 1568563200000, 'y': 703, 'sc': '3057' }, { 'x': 1568649600000, 'y': 527, 'sc': '3057' }, {
    'x': 1568736000000,
    'y': 432,
    'sc': '3056'
  }, { 'x': 1568822400000, 'y': 374, 'sc': '3066' }, { 'x': 1568908800000, 'y': 385, 'sc': '3162' }, {
    'x': 1569168000000,
    'y': 361,
    'sc': '3072'
  }, { 'x': 1569254400000, 'y': 261, 'sc': '3073' }, { 'x': 1569340800000, 'y': 211, 'sc': '3075' }, {
    'x': 1569427200000,
    'y': 316,
    'sc': '3081'
  }, { 'x': 1569513600000, 'y': 353, 'sc': '3164' }, { 'x': 1569772800000, 'y': 205, 'sc': '3164' }, {
    'x': 1570464000000,
    'y': 102,
    'sc': '3100'
  }, { 'x': 1570550400000, 'y': 141, 'sc': '3103' }, { 'x': 1570636800000, 'y': 90, 'sc': '3102' }, {
    'x': 1570723200000,
    'y': 86,
    'sc': '3197'
  }, { 'x': 1570982400000, 'y': 112, 'sc': '3097' }, { 'x': 1571068800000, 'y': 46, 'sc': '3097' }, {
    'x': 1571155200000,
    'y': 15,
    'sc': '3099'
  }, { 'x': 1571241600000, 'y': 15, 'sc': '3099' }, { 'x': 1571328000000, 'y': 9, 'sc': '3205' }, {
    'x': 1571587200000,
    'y': 15,
    'sc': '3105'
  }, { 'x': 1571673600000, 'y': 13, 'sc': '3104' }, { 'x': 1571760000000, 'y': 12, 'sc': '3103' }, {
    'x': 1571846400000,
    'y': 8,
    'sc': '3104'
  }, { 'x': 1571932800000, 'y': 7, 'sc': '3205' }, { 'x': 1572192000000, 'y': 15, 'sc': '3108' }, {
    'x': 1572278400000,
    'y': 4,
    'sc': '3109'
  }, { 'x': 1572364800000, 'y': 10, 'sc': '3115' }, { 'x': 1572451200000, 'y': 5, 'sc': '3118' }, {
    'x': 1572537600000,
    'y': 4,
    'sc': '3211'
  }, { 'x': 1572796800000, 'y': 4, 'sc': '3119' }, { 'x': 1572883200000, 'y': 9, 'sc': '3120' }, {
    'x': 1572969600000,
    'y': 11,
    'sc': '3118'
  }, { 'x': 1573056000000, 'y': 14, 'sc': '3118' }, { 'x': 1573142400000, 'y': 20, 'sc': '3213' }, {
    'x': 1573401600000,
    'y': 22,
    'sc': '3119'
  }, { 'x': 1573488000000, 'y': 13, 'sc': '3118' }, { 'x': 1573574400000, 'y': 13, 'sc': '3119' }, {
    'x': 1573660800000,
    'y': 16,
    'sc': '3127'
  }, { 'x': 1573747200000, 'y': 13, 'sc': '3222' }, { 'x': 1574006400000, 'y': 12, 'sc': '3126' }, {
    'x': 1574092800000,
    'y': 5,
    'sc': '3124'
  }, { 'x': 1574179200000, 'y': 6, 'sc': '3124' }, { 'x': 1574265600000, 'y': 5, 'sc': '3135' }, {
    'x': 1574352000000,
    'y': 13,
    'sc': '3228'
  }, { 'x': 1574611200000, 'y': 33, 'sc': '3138' }, { 'x': 1574697600000, 'y': 37, 'sc': '3137' }, {
    'x': 1574784000000,
    'y': 40,
    'sc': '3138'
  }, { 'x': 1574870400000, 'y': 26, 'sc': '3144' }, { 'x': 1574956800000, 'y': 39, 'sc': '3237' }, {
    'x': 1575216000000,
    'y': 84,
    'sc': '3152'
  }, { 'x': 1575302400000, 'y': 51, 'sc': '3151' }, { 'x': 1575388800000, 'y': 31, 'sc': '3154' }, {
    'x': 1575475200000,
    'y': 21,
    'sc': '3151'
  }, { 'x': 1575561600000, 'y': 30, 'sc': '3247' }, { 'x': 1575820800000, 'y': 26, 'sc': '3155' }, {
    'x': 1575907200000,
    'y': 57,
    'sc': '3158'
  }, { 'x': 1575993600000, 'y': 33, 'sc': '3162' }, { 'x': 1576080000000, 'y': 35, 'sc': '3162' }, {
    'x': 1576166400000,
    'y': 25,
    'sc': '3253'
  }, { 'x': 1576425600000, 'y': 45, 'sc': '3160' }, { 'x': 1576512000000, 'y': 89, 'sc': '3164' }, {
    'x': 1576598400000,
    'y': 285,
    'sc': '3169'
  }, { 'x': 1576684800000, 'y': 334, 'sc': '3174' }, { 'x': 1576771200000, 'y': 519, 'sc': '3267' }, {
    'x': 1577030400000,
    'y': 327,
    'sc': '3173'
  }, { 'x': 1577116800000, 'y': 972, 'sc': '3166' }, {
    'x': 1577203200000,
    'y': 1380,
    'sc': '3150'
  }, { 'x': 1577289600000, 'y': 1467, 'sc': '3161' }, {
    'x': 1577376000000,
    'y': 1562,
    'sc': '3283'
  }, { 'x': 1577635200000, 'y': 2133, 'sc': '3190' }, {
    'x': 1577721600000,
    'y': 1856,
    'sc': '3283'
  }, { 'x': 1577894400000, 'y': 2068, 'sc': '3189' }, {
    'x': 1577980800000,
    'y': 2241,
    'sc': '3282'
  }, { 'x': 1578240000000, 'y': 2420, 'sc': '3190' }, {
    'x': 1578326400000,
    'y': 2084,
    'sc': '3190'
  }, { 'x': 1578412800000, 'y': 2155, 'sc': '3190' }, {
    'x': 1578499200000,
    'y': 1607,
    'sc': '3192'
  }, { 'x': 1578585600000, 'y': 2187, 'sc': '3281' }, {
    'x': 1578844800000,
    'y': 2106,
    'sc': '3193'
  }, { 'x': 1578931200000, 'y': 2164, 'sc': '3192' }, {
    'x': 1579017600000,
    'y': 1855,
    'sc': '3191'
  }, { 'x': 1579104000000, 'y': 1955, 'sc': '3191' }, {
    'x': 1579190400000,
    'y': 1781,
    'sc': '3283'
  }, { 'x': 1579449600000, 'y': 1647, 'sc': '3195' }, {
    'x': 1579536000000,
    'y': 1073,
    'sc': '3196'
  }, { 'x': 1579622400000, 'y': 1286, 'sc': '3178' }, {
    'x': 1579708800000,
    'y': 1151,
    'sc': '3268'
  }, { 'x': 1580659200000, 'y': 2474, 'sc': '3209' }, {
    'x': 1580745600000,
    'y': 2246,
    'sc': '3209'
  }, { 'x': 1580832000000, 'y': 1658, 'sc': '3216' }, {
    'x': 1580918400000,
    'y': 1227,
    'sc': '3223'
  }, { 'x': 1581004800000, 'y': 1537, 'sc': '3313' }, {
    'x': 1581264000000,
    'y': 1487,
    'sc': '3225'
  }, { 'x': 1581350400000, 'y': 1282, 'sc': '3226' }, {
    'x': 1581436800000,
    'y': 1337,
    'sc': '3227'
  }, { 'x': 1581523200000, 'y': 1816, 'sc': '3233' }, {
    'x': 1581609600000,
    'y': 2009,
    'sc': '3322'
  }, { 'x': 1581868800000, 'y': 1713, 'sc': '3235' }, {
    'x': 1581955200000,
    'y': 1714,
    'sc': '3242'
  }, { 'x': 1582041600000, 'y': 2273, 'sc': '3244' }, {
    'x': 1582128000000,
    'y': 2251,
    'sc': '3248'
  }, { 'x': 1582214400000, 'y': 1985, 'sc': '3335' }, {
    'x': 1582473600000,
    'y': 1458,
    'sc': '3248'
  }, { 'x': 1582560000000, 'y': 1248, 'sc': '3248' }, {
    'x': 1582646400000,
    'y': 1308,
    'sc': '3254'
  }, { 'x': 1582732800000, 'y': 1189, 'sc': '3255' }, {
    'x': 1582819200000,
    'y': 1186,
    'sc': '3342'
  }, { 'x': 1583078400000, 'y': 921, 'sc': '3265' }, { 'x': 1583164800000, 'y': 717, 'sc': '3269' }, {
    'x': 1583251200000,
    'y': 707,
    'sc': '3268'
  }, { 'x': 1583337600000, 'y': 566, 'sc': '3266' }, { 'x': 1583424000000, 'y': 495, 'sc': '3351' }, {
    'x': 1583683200000,
    'y': 189,
    'sc': '3265'
  }, { 'x': 1583769600000, 'y': 366, 'sc': '3266' }, { 'x': 1583856000000, 'y': 387, 'sc': '3267' }, {
    'x': 1583942400000,
    'y': 479,
    'sc': '3268'
  }, { 'x': 1584028800000, 'y': 693, 'sc': '3355' }, { 'x': 1584288000000, 'y': 552, 'sc': '3268' }, {
    'x': 1584374400000,
    'y': 515,
    'sc': '3272'
  }, { 'x': 1584460800000, 'y': 339, 'sc': '3276' }, { 'x': 1584547200000, 'y': 545, 'sc': '3278' }, {
    'x': 1584633600000,
    'y': 343,
    'sc': '3366'
  }, { 'x': 1584892800000, 'y': 314, 'sc': '3278' }, { 'x': 1584979200000, 'y': 184, 'sc': '3291' }, {
    'x': 1585065600000,
    'y': 114,
    'sc': '3296'
  }, { 'x': 1585152000000, 'y': 81, 'sc': '3298' }, { 'x': 1585238400000, 'y': 67, 'sc': '3394' }, {
    'x': 1585497600000,
    'y': 64,
    'sc': '3310'
  }, { 'x': 1585584000000, 'y': 46, 'sc': '3310' }, { 'x': 1585670400000, 'y': 51, 'sc': '3309' }, {
    'x': 1585756800000,
    'y': 47,
    'sc': '3299'
  }, { 'x': 1585843200000, 'y': 25, 'sc': '3389' }, { 'x': 1586188800000, 'y': 22, 'sc': '3313' }, {
    'x': 1586275200000,
    'y': 27,
    'sc': '3314'
  }, { 'x': 1586361600000, 'y': 18, 'sc': '3316' }, { 'x': 1586448000000, 'y': 14, 'sc': '3394' }, {
    'x': 1586707200000,
    'y': 14,
    'sc': '3307'
  }, { 'x': 1586793600000, 'y': 14, 'sc': '3328' }, { 'x': 1586880000000, 'y': 20, 'sc': '3329' }, {
    'x': 1586966400000,
    'y': 26,
    'sc': '3331'
  }, { 'x': 1587052800000, 'y': 30, 'sc': '3424' }, { 'x': 1587312000000, 'y': 36, 'sc': '3346' }, {
    'x': 1587398400000,
    'y': 45,
    'sc': '3357'
  }, { 'x': 1587484800000, 'y': 35, 'sc': '3361' }, { 'x': 1587571200000, 'y': 31, 'sc': '3366' }, {
    'x': 1587657600000,
    'y': 35,
    'sc': '3451'
  }, { 'x': 1587916800000, 'y': 31, 'sc': '3369' }, { 'x': 1588003200000, 'y': 27, 'sc': '3354' }, {
    'x': 1588089600000,
    'y': 29,
    'sc': '3354'
  }, { 'x': 1588176000000, 'y': 39, 'sc': '3434' }, { 'x': 1588694400000, 'y': 77, 'sc': '3367' }, {
    'x': 1588780800000,
    'y': 42,
    'sc': '3365'
  }, { 'x': 1588867200000, 'y': 47, 'sc': '3453' }, { 'x': 1589126400000, 'y': 61, 'sc': '3369' }, {
    'x': 1589212800000,
    'y': 43,
    'sc': '3371'
  }, { 'x': 1589299200000, 'y': 18, 'sc': '3372' }, { 'x': 1589385600000, 'y': 19, 'sc': '3374' }, {
    'x': 1589472000000,
    'y': 28,
    'sc': '3462'
  }, { 'x': 1589731200000, 'y': 16, 'sc': '3380' }, { 'x': 1589817600000, 'y': 15, 'sc': '3383' }, {
    'x': 1589904000000,
    'y': 12,
    'sc': '3386'
  }, { 'x': 1589990400000, 'y': 7, 'sc': '3393' }, { 'x': 1590076800000, 'y': 7, 'sc': '3483' }, {
    'x': 1590336000000,
    'y': 6,
    'sc': '3396'
  }, { 'x': 1590422400000, 'y': 5, 'sc': '3399' }, { 'x': 1590508800000, 'y': 7, 'sc': '3407' }, {
    'x': 1590595200000,
    'y': 9,
    'sc': '3408'
  }, { 'x': 1590681600000, 'y': 6, 'sc': '3501' }, { 'x': 1590940800000, 'y': 6, 'sc': '3407' }, {
    'x': 1591027200000,
    'y': 5,
    'sc': '3408'
  }, { 'x': 1591113600000, 'y': 7, 'sc': '3408' }, { 'x': 1591200000000, 'y': 7, 'sc': '3411' }, {
    'x': 1591286400000,
    'y': 3,
    'sc': '3515'
  }, { 'x': 1591545600000, 'y': 11, 'sc': '3430' }, { 'x': 1591632000000, 'y': 24, 'sc': '3430' }, {
    'x': 1591718400000,
    'y': 3,
    'sc': '3433'
  }, { 'x': 1591804800000, 'y': 2, 'sc': '3432' }, { 'x': 1591891200000, 'y': 3, 'sc': '3533' }, {
    'x': 1592150400000,
    'y': 2,
    'sc': '3439'
  }, { 'x': 1592236800000, 'y': 2, 'sc': '3440' }, { 'x': 1592323200000, 'y': 2, 'sc': '3441' }, {
    'x': 1592409600000,
    'y': 2,
    'sc': '3450'
  }, { 'x': 1592496000000, 'y': 1, 'sc': '3551' }, { 'x': 1592755200000, 'y': 2, 'sc': '3460' }, {
    'x': 1592841600000,
    'y': 1,
    'sc': '3456'
  }, { 'x': 1592928000000, 'y': 2, 'sc': '3555' }, { 'x': 1593360000000, 'y': 4, 'sc': '3481' }, {
    'x': 1593446400000,
    'y': 10,
    'sc': '3583'
  }, { 'x': 1593532800000, 'y': 24, 'sc': '3477' }, { 'x': 1593619200000, 'y': 33, 'sc': '3487' }, {
    'x': 1593705600000,
    'y': 37,
    'sc': '3590'
  }, { 'x': 1593964800000, 'y': 141, 'sc': '3490' }, { 'x': 1594051200000, 'y': 165, 'sc': '3489' }, {
    'x': 1594137600000,
    'y': 237,
    'sc': '3489'
  }, { 'x': 1594224000000, 'y': 435, 'sc': '3494' }, { 'x': 1594310400000, 'y': 351, 'sc': '3598' }, {
    'x': 1594569600000,
    'y': 459,
    'sc': '3511'
  }, { 'x': 1594656000000, 'y': 351, 'sc': '3511' }, { 'x': 1594742400000, 'y': 151, 'sc': '3516' }, {
    'x': 1594828800000,
    'y': 192,
    'sc': '3516'
  }, { 'x': 1594915200000, 'y': 122, 'sc': '3620' }, { 'x': 1595174400000, 'y': 343, 'sc': '3520' }, {
    'x': 1595260800000,
    'y': 180,
    'sc': '3522'
  }, { 'x': 1595347200000, 'y': 196, 'sc': '3531' }, { 'x': 1595433600000, 'y': 146, 'sc': '3535' }, {
    'x': 1595520000000,
    'y': 140,
    'sc': '3638'
  }, { 'x': 1595779200000, 'y': 174, 'sc': '3545' }, { 'x': 1595865600000, 'y': 243, 'sc': '3547' }, {
    'x': 1595952000000,
    'y': 180,
    'sc': '3559'
  }, { 'x': 1596038400000, 'y': 84, 'sc': '3564' }, { 'x': 1596124800000, 'y': 84, 'sc': '3664' }, {
    'x': 1596384000000,
    'y': 84,
    'sc': '3560'
  }, { 'x': 1596470400000, 'y': 106, 'sc': '3561' }, { 'x': 1596556800000, 'y': 92, 'sc': '3561' }, {
    'x': 1596643200000,
    'y': 141,
    'sc': '3561'
  }, { 'x': 1596729600000, 'y': 158, 'sc': '3670' }, { 'x': 1596988800000, 'y': 134, 'sc': '3574' }, {
    'x': 1597075200000,
    'y': 105,
    'sc': '3580'
  }, { 'x': 1597161600000, 'y': 270, 'sc': '3578' }, { 'x': 1597248000000, 'y': 850, 'sc': '3582' }, {
    'x': 1597334400000,
    'y': 1151,
    'sc': '3703'
  }, { 'x': 1597593600000, 'y': 1048, 'sc': '3597' }, {
    'x': 1597680000000,
    'y': 1345,
    'sc': '3603'
  }, { 'x': 1597766400000, 'y': 1487, 'sc': '3603' }, {
    'x': 1597852800000,
    'y': 1178,
    'sc': '3608'
  }, { 'x': 1597939200000, 'y': 1511, 'sc': '3724' }, {
    'x': 1598198400000,
    'y': 1747,
    'sc': '3621'
  }, { 'x': 1598284800000, 'y': 1731, 'sc': '3623' }, {
    'x': 1598371200000,
    'y': 1639,
    'sc': '3623'
  }, { 'x': 1598457600000, 'y': 1368, 'sc': '3626' }, {
    'x': 1598544000000,
    'y': 1068,
    'sc': '3739'
  }, { 'x': 1598803200000, 'y': 1459, 'sc': '3635' }, {
    'x': 1598889600000,
    'y': 1454,
    'sc': '3642'
  }, { 'x': 1598976000000, 'y': 1270, 'sc': '3646' }, {
    'x': 1599062400000,
    'y': 1319,
    'sc': '3650'
  }, { 'x': 1599148800000, 'y': 1667, 'sc': '3765' }, {
    'x': 1599408000000,
    'y': 2049,
    'sc': '3656'
  }, { 'x': 1599494400000, 'y': 1859, 'sc': '3655' }, {
    'x': 1599580800000,
    'y': 2132,
    'sc': '3661'
  }, { 'x': 1599667200000, 'y': 2406, 'sc': '3664' }, {
    'x': 1599753600000,
    'y': 2318,
    'sc': '3783'
  }, { 'x': 1600012800000, 'y': 2762, 'sc': '3674' }, {
    'x': 1600099200000,
    'y': 2817,
    'sc': '3672'
  }, { 'x': 1600185600000, 'y': 3326, 'sc': '3677' }, {
    'x': 1600272000000,
    'y': 3583,
    'sc': '3686'
  }, { 'x': 1600358400000, 'y': 3329, 'sc': '3815' }, {
    'x': 1600617600000,
    'y': 3587,
    'sc': '3692'
  }, { 'x': 1600704000000, 'y': 3540, 'sc': '3697' }, {
    'x': 1600790400000,
    'y': 3457,
    'sc': '3703'
  }, { 'x': 1600876800000, 'y': 3417, 'sc': '3720' }, {
    'x': 1600963200000,
    'y': 3341,
    'sc': '3848'
  }, { 'x': 1601222400000, 'y': 3468, 'sc': '3722' }, {
    'x': 1601308800000,
    'y': 3600,
    'sc': '3715'
  }, { 'x': 1601395200000, 'y': 3635, 'sc': '3859' }, {
    'x': 1602172800000,
    'y': 2641,
    'sc': '3769'
  }, { 'x': 1602432000000, 'y': 2444, 'sc': '3754' }, {
    'x': 1602518400000,
    'y': 2603,
    'sc': '3758'
  }, { 'x': 1602604800000, 'y': 2518, 'sc': '3755' }, {
    'x': 1602691200000,
    'y': 3285,
    'sc': '3780'
  }, { 'x': 1602777600000, 'y': 1911, 'sc': '3926' }, {
    'x': 1603036800000,
    'y': 3040,
    'sc': '3800'
  }, { 'x': 1603123200000, 'y': 1600, 'sc': '3800' }, {
    'x': 1603209600000,
    'y': 3022,
    'sc': '3801'
  }, { 'x': 1603296000000, 'y': 3350, 'sc': '3811' }, {
    'x': 1603382400000,
    'y': 3808,
    'sc': '3955'
  }, { 'x': 1603641600000, 'y': 3543, 'sc': '3813' }, {
    'x': 1603728000000,
    'y': 3319,
    'sc': '3822'
  }, { 'x': 1603814400000, 'y': 3170, 'sc': '3827' }, {
    'x': 1603900800000,
    'y': 3080,
    'sc': '3839'
  }, { 'x': 1603987200000, 'y': 3332, 'sc': '3983' }, {
    'x': 1604246400000,
    'y': 3349,
    'sc': '3839'
  }, { 'x': 1604332800000, 'y': 3388, 'sc': '3839' }, {
    'x': 1604419200000,
    'y': 3198,
    'sc': '3842'
  }, { 'x': 1604505600000, 'y': 3457, 'sc': '3849' }, {
    'x': 1604592000000,
    'y': 3559,
    'sc': '4007'
  }, { 'x': 1604851200000, 'y': 3215, 'sc': '3860' }, {
    'x': 1604937600000,
    'y': 3412,
    'sc': '3858'
  }, { 'x': 1605024000000, 'y': 3575, 'sc': '3865' }, {
    'x': 1605110400000,
    'y': 3200,
    'sc': '3864'
  }, { 'x': 1605196800000, 'y': 2697, 'sc': '4030' }, {
    'x': 1605456000000,
    'y': 2287,
    'sc': '3878'
  }, { 'x': 1605542400000, 'y': 3259, 'sc': '3884' }, {
    'x': 1605628800000,
    'y': 3609,
    'sc': '3890'
  }, { 'x': 1605715200000, 'y': 3493, 'sc': '3893' }, {
    'x': 1605801600000,
    'y': 3696,
    'sc': '4065'
  }, { 'x': 1606060800000, 'y': 3660, 'sc': '3916' }, {
    'x': 1606147200000,
    'y': 3560,
    'sc': '3921'
  }, { 'x': 1606233600000, 'y': 3691, 'sc': '3919' }, {
    'x': 1606320000000,
    'y': 3771,
    'sc': '3928'
  }, { 'x': 1606406400000, 'y': 3943, 'sc': '4086' }, {
    'x': 1606665600000,
    'y': 3805,
    'sc': '3948'
  }, { 'x': 1606752000000, 'y': 3735, 'sc': '3950' }, {
    'x': 1606838400000,
    'y': 3712,
    'sc': '3955'
  }, { 'x': 1606924800000, 'y': 3612, 'sc': '3962' }, {
    'x': 1607011200000,
    'y': 3410,
    'sc': '4122'
  }, { 'x': 1607270400000, 'y': 1799, 'sc': '3980' }, {
    'x': 1607356800000,
    'y': 1722,
    'sc': '3977'
  }, { 'x': 1607443200000, 'y': 1347, 'sc': '3982' }, {
    'x': 1607529600000,
    'y': 1041,
    'sc': '3993'
  }, { 'x': 1607616000000, 'y': 1005, 'sc': '4159' }, {
    'x': 1607875200000,
    'y': 468,
    'sc': '4000'
  }, { 'x': 1607961600000, 'y': 435, 'sc': '4003' }, { 'x': 1608048000000, 'y': 256, 'sc': '4005' }, {
    'x': 1608134400000,
    'y': 109,
    'sc': '4013'
  }, { 'x': 1608220800000, 'y': 159, 'sc': '4192' }, { 'x': 1608480000000, 'y': 187, 'sc': '4020' }, {
    'x': 1608566400000,
    'y': 211,
    'sc': '4023'
  }, { 'x': 1608652800000, 'y': 538, 'sc': '4035' }, { 'x': 1608739200000, 'y': 498, 'sc': '4049' }, {
    'x': 1608825600000,
    'y': 582,
    'sc': '4219'
  }, { 'x': 1609084800000, 'y': 442, 'sc': '4068' }, { 'x': 1609171200000, 'y': 376, 'sc': '4080' }, {
    'x': 1609257600000,
    'y': 644,
    'sc': '4086'
  }, { 'x': 1609344000000, 'y': 775, 'sc': '4260' }, {
    'x': 1609689600000,
    'y': 1235,
    'sc': '4085'
  }, { 'x': 1609776000000, 'y': 1222, 'sc': '4085' }, {
    'x': 1609862400000,
    'y': 1005,
    'sc': '4084'
  }, { 'x': 1609948800000, 'y': 1068, 'sc': '4084' }, {
    'x': 1610035200000,
    'y': 1090,
    'sc': '4257'
  }, { 'x': 1610294400000, 'y': 915, 'sc': '4084' }, {
    'x': 1610380800000,
    'y': 1306,
    'sc': '4089'
  }, { 'x': 1610467200000, 'y': 1541, 'sc': '4083' }, {
    'x': 1610553600000,
    'y': 1574,
    'sc': '4089'
  }, { 'x': 1610640000000, 'y': 1545, 'sc': '4267' }, {
    'x': 1610899200000,
    'y': 1701,
    'sc': '4094'
  }, { 'x': 1610985600000, 'y': 1578, 'sc': '4100' }, {
    'x': 1611072000000,
    'y': 983,
    'sc': '4084'
  }, { 'x': 1611158400000, 'y': 1043, 'sc': '4114' }, {
    'x': 1611244800000,
    'y': 445,
    'sc': '4284'
  }, { 'x': 1611504000000, 'y': 267, 'sc': '4119' }, { 'x': 1611590400000, 'y': 367, 'sc': '4119' }, {
    'x': 1611676800000,
    'y': 697,
    'sc': '4136'
  }, { 'x': 1611763200000, 'y': 623, 'sc': '4147' }, { 'x': 1611849600000, 'y': 796, 'sc': '4311' }, {
    'x': 1612108800000,
    'y': 664,
    'sc': '4157'
  }, { 'x': 1612195200000, 'y': 678, 'sc': '4159' }, { 'x': 1612281600000, 'y': 514, 'sc': '4161' }, {
    'x': 1612368000000,
    'y': 566,
    'sc': '4184'
  }, { 'x': 1612454400000, 'y': 243, 'sc': '4347' }, { 'x': 1612713600000, 'y': 130, 'sc': '4190' }, {
    'x': 1612800000000,
    'y': 264,
    'sc': '4183'
  }, { 'x': 1612886400000, 'y': 198, 'sc': '4355' }, { 'x': 1613577600000, 'y': 122, 'sc': '4231' }, {
    'x': 1613664000000,
    'y': 78,
    'sc': '4390'
  }, { 'x': 1613923200000, 'y': 111, 'sc': '4231' }, { 'x': 1614009600000, 'y': 70, 'sc': '4240' }, {
    'x': 1614096000000,
    'y': 65,
    'sc': '4247'
  }, { 'x': 1614182400000, 'y': 59, 'sc': '4255' }, { 'x': 1614268800000, 'y': 51, 'sc': '4413' }, {
    'x': 1614528000000,
    'y': 178,
    'sc': '4278'
  }, { 'x': 1614614400000, 'y': 255, 'sc': '4208' }, { 'x': 1614700800000, 'y': 413, 'sc': '4117' }];
/* 同类排名百分比*/
var Data_rateInSimilarPersent = [
  [1482940800000, 1.9900], [1483027200000, 3.5300], [1483372800000, 4.5700], [1483459200000, 3.7600], [1483545600000, 4.1400], [1483632000000, 3.7400], [1483891200000, 4.3600], [1483977600000, 6.8800], [1484064000000, 9.7700], [1484150400000, 9.2300], [1484236800000, 10.6000], [1484496000000, 15.0700], [1484582400000, 11.8300], [1484668800000, 17.4500], [1484755200000, 15.9600], [1484841600000, 14.9300], [1485100800000, 14.6600], [1485187200000, 16.7900], [1485273600000, 20.1500], [1485360000000, 17.3800], [1486051200000, 21.2400], [1486310400000, 18.1900], [1486396800000, 20.5400], [1486483200000, 19.8200], [1486569600000, 18.0800], [1486656000000, 18.9900], [1486915200000, 24.3800], [1487001600000, 22.3600], [1487088000000, 20.0900], [1487174400000, 23.8200], [1487260800000, 21.2900], [1487520000000, 23.6800], [1487606400000, 26.6500], [1487692800000, 26.2600], [1487779200000, 47.9400], [1487865600000, 31.7300], [1488124800000, 30.1200], [1488211200000, 45.7200], [1488297600000, 39.3800], [1488384000000, 65.3300], [1488470400000, 60.6200], [1488729600000, 76.7400], [1488816000000, 61.8000], [1488902400000, 70.7000], [1488988800000, 41.4800], [1489075200000, 60.6400], [1489334400000, 81.3200], [1489420800000, 79.7000], [1489507200000, 88.6900], [1489593600000, 89.3400], [1489680000000, 90.2300], [1489939200000, 87.6200], [1490025600000, 90.4900], [1490112000000, 93.2900], [1490198400000, 92.2400], [1490284800000, 90.1300], [1490544000000, 89.3300], [1490630400000, 92.6400], [1490716800000, 92.5400], [1490803200000, 92.3500], [1490889600000, 94.8900], [1491321600000, 95.1000], [1491408000000, 95.4300], [1491494400000, 93.8900], [1491753600000, 90.6600], [1491840000000, 85.4700], [1491926400000, 89.0400], [1492012800000, 92.1300], [1492099200000, 92.2500], [1492358400000, 89.6600], [1492444800000, 91.3600], [1492531200000, 91.4300], [1492617600000, 94.4500], [1492704000000, 93.9200], [1492963200000, 92.8000], [1493049600000, 90.3500], [1493136000000, 91.3900], [1493222400000, 92.7600], [1493308800000, 90.6900], [1493654400000, 90.3600], [1493740800000, 89.4400], [1493827200000, 89.0600], [1493913600000, 90.3000], [1494172800000, 92.0900], [1494259200000, 92.4200], [1494345600000, 94.3300], [1494432000000, 94.7000], [1494518400000, 95.4700], [1494777600000, 97.7300], [1494864000000, 97.1600], [1494950400000, 97.2500], [1495036800000, 97.4800], [1495123200000, 97.9500], [1495382400000, 97.5700], [1495468800000, 96.5800], [1495555200000, 96.5900], [1495641600000, 96.3300], [1495728000000, 95.5800], [1496160000000, 95.4200], [1496246400000, 96.7900], [1496332800000, 96.1300], [1496592000000, 94.8600], [1496678400000, 96.2300], [1496764800000, 96.8300], [1496851200000, 97.3700], [1496937600000, 97.7200], [1497196800000, 98.1200], [1497283200000, 97.9200], [1497369600000, 97.6100], [1497456000000, 96.7700], [1497542400000, 96.7900], [1497801600000, 96.8400], [1497888000000, 95.9900], [1497974400000, 96.6800], [1498060800000, 93.4600], [1498147200000, 94.9500], [1498406400000, 96.6600], [1498492800000, 97.2200], [1498579200000, 96.3300], [1498665600000, 97.0200], [1498752000000, 96.1000], [1499011200000, 94.2600], [1499097600000, 93.7200], [1499184000000, 93.0300], [1499270400000, 89.1200], [1499356800000, 88.0300], [1499616000000, 89.9400], [1499702400000, 92.7100], [1499788800000, 89.5200], [1499875200000, 79.4600], [1499961600000, 83.6300], [1500220800000, 76.0600], [1500307200000, 49.8700], [1500393600000, 65.3300], [1500480000000, 38.3500], [1500566400000, 46.2400], [1500825600000, 67.9200], [1500912000000, 63.2800], [1500998400000, 36.9100], [1501084800000, 20.8100], [1501171200000, 50.1200], [1501430400000, 42.7100], [1501516800000, 37.0300], [1501603200000, 27.5400], [1501689600000, 18.1400], [1501776000000, 22.1500], [1502035200000, 34.3500], [1502121600000, 53.6600], [1502208000000, 66.2500], [1502294400000, 64.4100], [1502380800000, 64.2800], [1502640000000, 60.4800], [1502726400000, 21.4300], [1502812800000, 6.2500], [1502899200000, 9.1200], [1502985600000, 11.3500], [1503244800000, 12.00], [1503331200000, 5.0800], [1503417600000, 2.1700], [1503504000000, 1.6700], [1503590400000, 2.0400], [1503849600000, 3.6500], [1503936000000, 2.6200], [1504022400000, 4.6500], [1504108800000, 2.5300], [1504195200000, 2.2800], [1504454400000, 16.8000], [1504540800000, 31.3000], [1504627200000, 4.6700], [1504713600000, 1.5300], [1504800000000, 0.7200], [1505059200000, 0.5800], [1505145600000, 0.2100], [1505232000000, 0.3700], [1505318400000, 1.0300], [1505404800000, 1.7100], [1505664000000, 3.3800], [1505750400000, 1.0300], [1505836800000, 3.7900], [1505923200000, 0.8600], [1506009600000, 1.9400], [1506268800000, 2.3400], [1506355200000, 0.9400], [1506441600000, 0.7000], [1506528000000, 3.9300], [1506614400000, 2.4400], [1507478400000, 53.0400], [1507564800000, 69.5000], [1507651200000, 76.2800], [1507737600000, 81.6000], [1507824000000, 86.5500], [1508083200000, 86.4000], [1508169600000, 82.7900], [1508256000000, 89.4700], [1508342400000, 93.5200], [1508428800000, 92.6900], [1508688000000, 95.9600], [1508774400000, 96.2800], [1508860800000, 97.3400], [1508947200000, 97.2900], [1509033600000, 97.9800], [1509292800000, 96.9700], [1509379200000, 96.9800], [1509465600000, 97.7100], [1509552000000, 98.9500], [1509638400000, 99.5000], [1509897600000, 99.6000], [1509984000000, 99.3200], [1510070400000, 98.3500], [1510156800000, 96.6700], [1510243200000, 94.9500], [1510502400000, 92.2200], [1510588800000, 91.5800], [1510675200000, 94.6700], [1510761600000, 96.1200], [1510848000000, 94.5800], [1511107200000, 93.9200], [1511193600000, 90.8400], [1511280000000, 89.8500], [1511366400000, 87.7100], [1511452800000, 90.3800], [1511712000000, 92.0600], [1511798400000, 94.2700], [1511884800000, 93.5600], [1511971200000, 96.5600], [1512057600000, 95.8100], [1512316800000, 96.0500], [1512403200000, 95.1400], [1512489600000, 97.2400], [1512576000000, 97.3100], [1512662400000, 96.7000], [1512921600000, 97.9800], [1513008000000, 98.9700], [1513094400000, 98.4600], [1513180800000, 98.8600], [1513267200000, 98.9400], [1513526400000, 99.0100], [1513612800000, 99.0100], [1513699200000, 98.8200], [1513785600000, 99.1700], [1513872000000, 99.0200], [1514131200000, 98.5800], [1514217600000, 98.5800], [1514304000000, 98.7400], [1514390400000, 98.4700], [1514476800000, 99.0200], [1514822400000, 98.2000], [1514908800000, 98.0800], [1514995200000, 98.0800], [1515081600000, 97.8900], [1515340800000, 97.6100], [1515427200000, 98.1200], [1515513600000, 97.2600], [1515600000000, 96.6000], [1515686400000, 96.9100], [1515945600000, 95.5800], [1516032000000, 96.2100], [1516118400000, 95.5800], [1516204800000, 92.5700], [1516291200000, 89.1700], [1516550400000, 91.0500], [1516636800000, 85.5700], [1516723200000, 87.0700], [1516809600000, 76.3800], [1516896000000, 79.4400], [1517155200000, 46.6000], [1517241600000, 59.6600], [1517328000000, 64.2500], [1517414400000, 44.4500], [1517500800000, 32.7300], [1517760000000, 14.8300], [1517846400000, 10.4100], [1517932800000, 12.9700], [1518019200000, 18.7300], [1518105600000, 20.8400], [1518364800000, 30.4600], [1518451200000, 31.4400], [1518537600000, 42.6300], [1519228800000, 79.3800], [1519315200000, 94.3600], [1519574400000, 95.3500], [1519660800000, 97.2000], [1519747200000, 95.5100], [1519833600000, 96.0400], [1519920000000, 95.9900], [1520179200000, 96.7700], [1520265600000, 97.8000], [1520352000000, 97.9200], [1520438400000, 98.8700], [1520524800000, 98.4700], [1520784000000, 94.6300], [1520870400000, 92.7200], [1520956800000, 86.0000], [1521043200000, 92.8800], [1521129600000, 93.2100], [1521388800000, 97.7400], [1521475200000, 98.1200], [1521561600000, 97.8200], [1521648000000, 98.1900], [1521734400000, 98.3000], [1521993600000, 98.9500], [1522080000000, 98.9900], [1522166400000, 98.2800], [1522252800000, 97.3400], [1522339200000, 98.0900], [1522598400000, 98.3900], [1522684800000, 98.8000], [1522771200000, 98.2700], [1523203200000, 97.1200], [1523289600000, 97.8300], [1523376000000, 97.8300], [1523462400000, 98.2000], [1523548800000, 96.9800], [1523808000000, 96.5200], [1523894400000, 96.5200], [1523980800000, 96.5200], [1524067200000, 97.3200], [1524153600000, 98.0000], [1524412800000, 98.2900], [1524499200000, 98.2600], [1524585600000, 99.3300], [1524672000000, 98.9600], [1524758400000, 99.3900], [1525190400000, 99.6000], [1525276800000, 99.4900], [1525363200000, 99.5400], [1525622400000, 99.7100], [1525708800000, 99.7500], [1525795200000, 99.7500], [1525881600000, 99.8200], [1525968000000, 99.7600], [1526227200000, 99.7500], [1526313600000, 99.7500], [1526400000000, 99.7800], [1526486400000, 99.7800], [1526572800000, 99.7900], [1526832000000, 99.7500], [1526918400000, 99.7500], [1527004800000, 99.7800], [1527091200000, 99.7800], [1527177600000, 99.7900], [1527436800000, 99.7800], [1527523200000, 99.7800], [1527609600000, 99.7800], [1527696000000, 99.7800], [1527782400000, 99.7600], [1528041600000, 99.7500], [1528128000000, 99.7800], [1528214400000, 99.7800], [1528300800000, 99.7800], [1528387200000, 99.7900], [1528646400000, 99.7800], [1528732800000, 99.7800], [1528819200000, 99.7800], [1528905600000, 99.7800], [1528992000000, 99.7900], [1529337600000, 99.7100], [1529424000000, 99.7800], [1529510400000, 99.7800], [1529596800000, 99.8300], [1529856000000, 99.8600], [1529942400000, 99.8600], [1530028800000, 99.7500], [1530115200000, 99.7800], [1530201600000, 99.9000], [1530460800000, 99.8900], [1530547200000, 99.8600], [1530633600000, 99.8900], [1530720000000, 99.8900], [1530806400000, 99.8600], [1531065600000, 99.8900], [1531152000000, 99.8600], [1531238400000, 99.9300], [1531324800000, 99.8900], [1531411200000, 99.9300], [1531670400000, 99.9300], [1531756800000, 99.9300], [1531843200000, 99.9300], [1531929600000, 99.9300], [1532016000000, 99.9300], [1532275200000, 97.1700], [1532361600000, 95.8600], [1532448000000, 92.9100], [1532534400000, 95.1100], [1532620800000, 52.4700], [1532880000000, 28.8000], [1532966400000, 34.6700], [1533052800000, 29.1100], [1533139200000, 40.9200], [1533225600000, 36.4800], [1533484800000, 13.2600], [1533571200000, 13.8700], [1533657600000, 18.6100], [1533744000000, 26.1200], [1533830400000, 22.1900], [1534089600000, 47.3500], [1534176000000, 49.6200], [1534262400000, 26.0500], [1534348800000, 24.4600], [1534435200000, 14.7500], [1534694400000, 7.3600], [1534780800000, 26.1900], [1534867200000, 21.3300], [1534953600000, 20.5000], [1535040000000, 18.1100], [1535299200000, 11.9800], [1535385600000, 8.3500], [1535472000000, 22.6000], [1535558400000, 16.9400], [1535644800000, 8.1100], [1535904000000, 18.1100], [1535990400000, 15.5700], [1536076800000, 9.7500], [1536163200000, 5.0400], [1536249600000, 12.3300], [1536508800000, 9.9600], [1536595200000, 22.4400], [1536681600000, 9.4200], [1536768000000, 5.5100], [1536854400000, 3.5400], [1537113600000, 4.2900], [1537200000000, 6.5600], [1537286400000, 2.8100], [1537372800000, 0.4700], [1537459200000, 0.2100], [1537804800000, 0.4000], [1537891200000, 0.6100], [1537977600000, 3.0700], [1538064000000, 3.9600], [1538928000000, 1.5000], [1539014400000, 0.8600], [1539100800000, 0.3900], [1539187200000, 0.3900], [1539273600000, 0.2800], [1539532800000, 0.1800], [1539619200000, 0.1800], [1539705600000, 0.1800], [1539792000000, 0.0400], [1539878400000, 0.2100], [1540137600000, 0.4300], [1540224000000, 4.9400], [1540310400000, 4.8700], [1540396800000, 1.5500], [1540483200000, 1.0000], [1540742400000, 1.1500], [1540828800000, 4.0800], [1540915200000, 4.6700], [1541001600000, 5.5000], [1541088000000, 4.3900], [1541347200000, 5.3700], [1541433600000, 20.8000], [1541520000000, 16.3600], [1541606400000, 23.8600], [1541692800000, 10.6400], [1541952000000, 5.8800], [1542038400000, 4.5100], [1542124800000, 3.4700], [1542211200000, 6.3600], [1542297600000, 1.6400], [1542556800000, 4.7200], [1542643200000, 14.0500], [1542729600000, 6.7200], [1542816000000, 4.5700], [1542902400000, 4.0000], [1543161600000, 3.2200], [1543248000000, 2.5400], [1543334400000, 3.0400], [1543420800000, 3.7000], [1543507200000, 6.4200], [1543766400000, 10.6700], [1543852800000, 21.5500], [1543939200000, 29.7100], [1544025600000, 16.1200], [1544112000000, 1.8500], [1544371200000, 1.5900], [1544457600000, 1.7800], [1544544000000, 2.5700], [1544630400000, 5.3900], [1544716800000, 3.2700], [1544976000000, 2.6700], [1545062400000, 2.0200], [1545148800000, 1.2300], [1545235200000, 0.7900], [1545321600000, 0.0700], [1545580800000, 0.5800], [1545667200000, 0.5100], [1545753600000, 0.1800], [1545840000000, 0.1400], [1545926400000, 0], [1546358400000, 0], [1546444800000, 0], [1546531200000, 0.0300], [1546790400000, 0], [1546876800000, 0.0700], [1546963200000, 0.2200], [1547049600000, 0.2200], [1547136000000, 0.2100], [1547395200000, 0.3200], [1547481600000, 0.1800], [1547568000000, 0.4700], [1547654400000, 0.7900], [1547740800000, 8.3200], [1548000000000, 2.4600], [1548086400000, 0.7600], [1548172800000, 0.8000], [1548259200000, 1.4500], [1548345600000, 3.5000], [1548604800000, 7.4600], [1548691200000, 10.6100], [1548777600000, 4.1300], [1548864000000, 2.3600], [1548950400000, 3.9400], [1549814400000, 1.1500], [1549900800000, 1.1900], [1549987200000, 1.0400], [1550073600000, 1.2200], [1550160000000, 1.0700], [1550419200000, 8.6000], [1550505600000, 5.1600], [1550592000000, 3.5500], [1550678400000, 1.3600], [1550764800000, 1.6800], [1551024000000, 23.5900], [1551110400000, 28.5700], [1551196800000, 25.8500], [1551283200000, 36.1100], [1551369600000, 37.7800], [1551628800000, 24.1300], [1551715200000, 18.1200], [1551801600000, 30.0700], [1551888000000, 35.8700], [1551974400000, 41.5200], [1552233600000, 50.8900], [1552320000000, 54.9000], [1552406400000, 62.8600], [1552492800000, 75.4200], [1552579200000, 83.2800], [1552838400000, 90.5700], [1552924800000, 90.2500], [1553011200000, 92.6400], [1553097600000, 92.9300], [1553184000000, 93.7800], [1553443200000, 88.7000], [1553529600000, 90.5600], [1553616000000, 93.8700], [1553702400000, 93.3200], [1553788800000, 94.2100], [1554048000000, 90.7500], [1554134400000, 92.0500], [1554220800000, 91.1000], [1554307200000, 88.1200], [1554652800000, 86.5500], [1554739200000, 90.1300], [1554825600000, 92.8900], [1554912000000, 91.8400], [1554998400000, 91.8900], [1555257600000, 92.7300], [1555344000000, 88.4000], [1555430400000, 87.4600], [1555516800000, 84.1500], [1555603200000, 82.6100], [1555862400000, 86.8400], [1555948800000, 88.0100], [1556035200000, 89.1600], [1556121600000, 92.2100], [1556208000000, 93.4900], [1556467200000, 96.9800], [1556553600000, 95.8800], [1557072000000, 95.3700], [1557158400000, 97.4300], [1557244800000, 97.3600], [1557331200000, 96.0400], [1557417600000, 95.7300], [1557676800000, 97.6900], [1557763200000, 97.6700], [1557849600000, 97.5000], [1557936000000, 97.7400], [1558022400000, 97.7800], [1558281600000, 98.4300], [1558368000000, 98.5000], [1558454400000, 98.7800], [1558540800000, 98.7200], [1558627200000, 98.6900], [1558886400000, 98.2600], [1558972800000, 96.5700], [1559059200000, 96.1900], [1559145600000, 96.9500], [1559232000000, 97.7900], [1559491200000, 98.3000], [1559577600000, 97.6800], [1559664000000, 96.4700], [1559750400000, 97.3900], [1560096000000, 97.6900], [1560182400000, 96.3500], [1560268800000, 97.3800], [1560355200000, 97.2800], [1560441600000, 97.5000], [1560700800000, 95.1400], [1560787200000, 83.3200], [1560873600000, 95.2800], [1560960000000, 96.2600], [1561046400000, 96.6500], [1561305600000, 96.1600], [1561392000000, 96.1000], [1561478400000, 98.7700], [1561564800000, 98.0900], [1561651200000, 97.8600], [1561910400000, 97.4600], [1561996800000, 98.9800], [1562083200000, 98.4400], [1562169600000, 98.6800], [1562256000000, 98.8800], [1562515200000, 98.9100], [1562601600000, 98.7400], [1562688000000, 98.6400], [1562774400000, 98.9800], [1562860800000, 98.9200], [1563120000000, 98.7100], [1563206400000, 98.5800], [1563292800000, 98.5800], [1563379200000, 98.4400], [1563465600000, 98.3300], [1563724800000, 95.7300], [1563811200000, 95.7700], [1563897600000, 95.2100], [1563984000000, 89.0900], [1564070400000, 94.0300], [1564329600000, 78.4200], [1564416000000, 81.7700], [1564502400000, 81.6500], [1564588800000, 81.2200], [1564675200000, 90.1600], [1564934400000, 83.1000], [1565020800000, 92.2300], [1565107200000, 90.5700], [1565193600000, 93.8800], [1565280000000, 97.3000], [1565539200000, 95.4200], [1565625600000, 92.8300], [1565712000000, 96.3800], [1565798400000, 93.8300], [1565884800000, 92.3500], [1566144000000, 90.3600], [1566230400000, 92.9100], [1566316800000, 89.7200], [1566403200000, 91.8300], [1566489600000, 96.4400], [1566748800000, 96.00], [1566835200000, 95.7400], [1566921600000, 94.5200], [1567008000000, 93.7700], [1567094400000, 93.2000], [1567353600000, 90.7600], [1567440000000, 88.9700], [1567526400000, 90.9900], [1567612800000, 91.7200], [1567699200000, 91.4600], [1567958400000, 87.9800], [1568044800000, 90.8000], [1568131200000, 86.5600], [1568217600000, 84.6100], [1568563200000, 77.0000], [1568649600000, 82.7600], [1568736000000, 85.8600], [1568822400000, 87.8000], [1568908800000, 87.8200], [1569168000000, 88.2500], [1569254400000, 91.5100], [1569340800000, 93.1400], [1569427200000, 89.7400], [1569513600000, 88.8400], [1569772800000, 93.5200], [1570464000000, 96.7100], [1570550400000, 95.4600], [1570636800000, 97.1000], [1570723200000, 97.3100], [1570982400000, 96.3800], [1571068800000, 98.5100], [1571155200000, 99.5200], [1571241600000, 99.5200], [1571328000000, 99.7200], [1571587200000, 99.5200], [1571673600000, 99.5800], [1571760000000, 99.6100], [1571846400000, 99.7400], [1571932800000, 99.7800], [1572192000000, 99.5200], [1572278400000, 99.8700], [1572364800000, 99.6800], [1572451200000, 99.8400], [1572537600000, 99.8800], [1572796800000, 99.8700], [1572883200000, 99.7100], [1572969600000, 99.6500], [1573056000000, 99.5500], [1573142400000, 99.3800], [1573401600000, 99.2900], [1573488000000, 99.5800], [1573574400000, 99.5800], [1573660800000, 99.4900], [1573747200000, 99.6000], [1574006400000, 99.6200], [1574092800000, 99.8400], [1574179200000, 99.8100], [1574265600000, 99.8400], [1574352000000, 99.6000], [1574611200000, 98.9500], [1574697600000, 98.8200], [1574784000000, 98.7300], [1574870400000, 99.1700], [1574956800000, 98.8000], [1575216000000, 97.3400], [1575302400000, 98.3800], [1575388800000, 99.0200], [1575475200000, 99.3300], [1575561600000, 99.0800], [1575820800000, 99.1800], [1575907200000, 98.2000], [1575993600000, 98.9600], [1576080000000, 98.8900], [1576166400000, 99.2300], [1576425600000, 98.5800], [1576512000000, 97.1900], [1576598400000, 91.0100], [1576684800000, 89.4800], [1576771200000, 84.1100], [1577030400000, 89.6900], [1577116800000, 69.3000], [1577203200000, 56.1900], [1577289600000, 53.5900], [1577376000000, 52.4200], [1577635200000, 33.1300], [1577721600000, 43.4700], [1577894400000, 35.1500], [1577980800000, 31.7200], [1578240000000, 24.1400], [1578326400000, 34.6700], [1578412800000, 32.4500], [1578499200000, 49.6600], [1578585600000, 33.3400], [1578844800000, 34.0400], [1578931200000, 32.2100], [1579017600000, 41.8700], [1579104000000, 38.7300], [1579190400000, 45.7500], [1579449600000, 48.4500], [1579536000000, 66.4300], [1579622400000, 59.5300], [1579708800000, 64.7800], [1580659200000, 22.9000], [1580745600000, 30.0100], [1580832000000, 48.4500], [1580918400000, 61.9300], [1581004800000, 53.6100], [1581264000000, 53.8900], [1581350400000, 60.2600], [1581436800000, 58.5700], [1581523200000, 43.8300], [1581609600000, 39.5200], [1581868800000, 47.0500], [1581955200000, 47.1300], [1582041600000, 29.9300], [1582128000000, 30.7000], [1582214400000, 40.4800], [1582473600000, 55.1100], [1582560000000, 61.5800], [1582646400000, 59.8000], [1582732800000, 63.4700], [1582819200000, 64.5100], [1583078400000, 71.7900], [1583164800000, 78.0700], [1583251200000, 78.3700], [1583337600000, 82.6700], [1583424000000, 85.2300], [1583683200000, 94.2100], [1583769600000, 88.7900], [1583856000000, 88.1500], [1583942400000, 85.3400], [1584028800000, 79.3400], [1584288000000, 83.1100], [1584374400000, 84.2600], [1584460800000, 89.6500], [1584547200000, 83.3700], [1584633600000, 89.8100], [1584892800000, 90.4200], [1584979200000, 94.4100], [1585065600000, 96.5400], [1585152000000, 97.5400], [1585238400000, 98.0300], [1585497600000, 98.0700], [1585584000000, 98.6100], [1585670400000, 98.4600], [1585756800000, 98.5800], [1585843200000, 99.2600], [1586188800000, 99.3400], [1586275200000, 99.1900], [1586361600000, 99.4600], [1586448000000, 99.5900], [1586707200000, 99.5800], [1586793600000, 99.5800], [1586880000000, 99.4000], [1586966400000, 99.2200], [1587052800000, 99.1200], [1587312000000, 98.9200], [1587398400000, 98.6600], [1587484800000, 98.9600], [1587571200000, 99.0800], [1587657600000, 98.9900], [1587916800000, 99.0800], [1588003200000, 99.1900], [1588089600000, 99.1400], [1588176000000, 98.8600], [1588694400000, 97.7100], [1588780800000, 98.7500], [1588867200000, 98.6400], [1589126400000, 98.1900], [1589212800000, 98.7200], [1589299200000, 99.4700], [1589385600000, 99.4400], [1589472000000, 99.1900], [1589731200000, 99.5300], [1589817600000, 99.5600], [1589904000000, 99.6500], [1589990400000, 99.7900], [1590076800000, 99.8000], [1590336000000, 99.8200], [1590422400000, 99.8500], [1590508800000, 99.7900], [1590595200000, 99.7400], [1590681600000, 99.8300], [1590940800000, 99.8200], [1591027200000, 99.8500], [1591113600000, 99.7900], [1591200000000, 99.7900], [1591286400000, 99.9100], [1591545600000, 99.6800], [1591632000000, 99.3000], [1591718400000, 99.9100], [1591804800000, 99.9400], [1591891200000, 99.9200], [1592150400000, 99.9400], [1592236800000, 99.9400], [1592323200000, 99.9400], [1592409600000, 99.9400], [1592496000000, 99.9700], [1592755200000, 99.9400], [1592841600000, 99.9700], [1592928000000, 99.9400], [1593360000000, 99.8900], [1593446400000, 99.7200], [1593532800000, 99.3100], [1593619200000, 99.0500], [1593705600000, 98.9700], [1593964800000, 95.9600], [1594051200000, 95.2700], [1594137600000, 93.2100], [1594224000000, 87.5500], [1594310400000, 90.2400], [1594569600000, 86.9300], [1594656000000, 90.0000], [1594742400000, 95.7100], [1594828800000, 94.5400], [1594915200000, 96.6300], [1595174400000, 90.2600], [1595260800000, 94.8900], [1595347200000, 94.4500], [1595433600000, 95.8700], [1595520000000, 96.1500], [1595779200000, 95.0900], [1595865600000, 93.1500], [1595952000000, 94.9400], [1596038400000, 97.6400], [1596124800000, 97.7100], [1596384000000, 97.6400], [1596470400000, 97.0200], [1596556800000, 97.4200], [1596643200000, 96.0400], [1596729600000, 95.6900], [1596988800000, 96.2500], [1597075200000, 97.0700], [1597161600000, 92.4500], [1597248000000, 76.2700], [1597334400000, 68.9200], [1597593600000, 70.8600], [1597680000000, 62.6700], [1597766400000, 58.7300], [1597852800000, 67.3500], [1597939200000, 59.4300], [1598198400000, 51.7500], [1598284800000, 52.2200], [1598371200000, 54.7600], [1598457600000, 62.2700], [1598544000000, 71.4400], [1598803200000, 59.8600], [1598889600000, 60.0800], [1598976000000, 65.1700], [1599062400000, 63.8600], [1599148800000, 55.7200], [1599408000000, 43.9600], [1599494400000, 49.1400], [1599580800000, 41.7600], [1599667200000, 34.3300], [1599753600000, 38.7300], [1600012800000, 24.8200], [1600099200000, 23.2800], [1600185600000, 9.5500], [1600272000000, 2.7900], [1600358400000, 12.7400], [1600617600000, 2.8400], [1600704000000, 4.2500], [1600790400000, 6.6400], [1600876800000, 8.1500], [1600963200000, 13.1800], [1601222400000, 6.8200], [1601308800000, 3.1000], [1601395200000, 5.8000], [1602172800000, 29.9300], [1602432000000, 34.9000], [1602518400000, 30.7300], [1602604800000, 32.9400], [1602691200000, 13.1000], [1602777600000, 51.3200], [1603036800000, 20.0], [1603123200000, 57.8900], [1603209600000, 20.4900], [1603296000000, 12.1000], [1603382400000, 3.7200], [1603641600000, 7.0800], [1603728000000, 13.1600], [1603814400000, 17.1700], [1603900800000, 19.7700], [1603987200000, 16.3400], [1604246400000, 12.7600], [1604332800000, 11.7500], [1604419200000, 16.7600], [1604505600000, 10.1800], [1604592000000, 11.1800], [1604851200000, 16.7100], [1604937600000, 11.5600], [1605024000000, 7.5000], [1605110400000, 17.1800], [1605196800000, 33.0800], [1605456000000, 41.0300], [1605542400000, 16.0900], [1605628800000, 7.2200], [1605715200000, 10.2700], [1605801600000, 9.0800], [1606060800000, 6.5400], [1606147200000, 9.2100], [1606233600000, 5.8200], [1606320000000, 4.0000], [1606406400000, 3.5000], [1606665600000, 3.6200], [1606752000000, 5.4400], [1606838400000, 6.1400], [1606924800000, 8.8300], [1607011200000, 17.2700], [1607270400000, 54.8000], [1607356800000, 56.7000], [1607443200000, 66.1700], [1607529600000, 73.9300], [1607616000000, 75.8400], [1607875200000, 88.300], [1607961600000, 89.1300], [1608048000000, 93.6100], [1608134400000, 97.2800], [1608220800000, 96.2100], [1608480000000, 95.3500], [1608566400000, 94.7600], [1608652800000, 86.6700], [1608739200000, 87.7000], [1608825600000, 86.2100], [1609084800000, 89.1300], [1609171200000, 90.7800], [1609257600000, 84.2400], [1609344000000, 81.8100], [1609689600000, 69.7700], [1609776000000, 70.0900], [1609862400000, 75.3900], [1609948800000, 73.8500], [1610035200000, 74.4000], [1610294400000, 77.6000], [1610380800000, 68.0600], [1610467200000, 62.2600], [1610553600000, 61.5100], [1610640000000, 63.7900], [1610899200000, 58.4500], [1610985600000, 61.5100], [1611072000000, 75.9300], [1611158400000, 74.6500], [1611244800000, 89.6100], [1611504000000, 93.5200], [1611590400000, 91.0900], [1611676800000, 83.1500], [1611763200000, 84.9800], [1611849600000, 81.5400], [1612108800000, 84.0300], [1612195200000, 83.7000], [1612281600000, 87.6500], [1612368000000, 86.4700], [1612454400000, 94.4100], [1612713600000, 96.9000], [1612800000000, 93.6900], [1612886400000, 95.4500], [1613577600000, 97.1200], [1613664000000, 98.2200], [1613923200000, 97.3800], [1614009600000, 98.3500], [1614096000000, 98.4700], [1614182400000, 98.6100], [1614268800000, 98.8400], [1614528000000, 95.8400], [1614614400000, 93.9400], [1614700800000, 89.9700]];
/* 规模变动 mom-较上期环比*/
var Data_fluctuationScale = {
  'categories': ['2019-12-31', '2020-03-31', '2020-06-30', '2020-09-30', '2020-12-31'],
  'series': [{ 'y': 20.28, 'mom': '75.95%' }, { 'y': 26.48, 'mom': '30.55%' }, {
    'y': 80.20,
    'mom': '202.84%'
  }, { 'y': 81.72, 'mom': '1.90%' }, { 'y': 102.08, 'mom': '24.91%' }]
};
/* 持有人结构*/
var Data_holderStructure = {
  'series': [{ 'name': '机构持有比例', 'data': [3.24, 23.24, 4.36, 6.4] }, {
    'name': '个人持有比例',
    'data': [96.76, 76.76, 95.64, 93.6]
  }, { 'name': '内部持有比例', 'data': [0.33, 0.35, 0.23, 0.11] }],
  'categories': ['2018-12-31', '2019-06-30', '2019-12-31', '2020-06-30']
};
/* 资产配置*/
var Data_assetAllocation = {
  'series': [{
    'name': '股票占净比',
    'type': null,
    'data': [93.91, 89.29, 94.92, 91.82],
    'yAxis': 0
  }, { 'name': '债券占净比', 'type': null, 'data': [0, 0.24, 0.41, 0.2], 'yAxis': 0 }, {
    'name': '现金占净比',
    'type': null,
    'data': [5.26, 12.04, 4.83, 9.63],
    'yAxis': 0
  }, {
    'name': '净资产',
    'type': 'line',
    'data': [58.2826305768, 193.8899218878, 203.8950652394, 232.4286153708],
    'yAxis': 1
  }], 'categories': ['2020-03-31', '2020-06-30', '2020-09-30', '2020-12-31']
};
/* 业绩评价 ['选股能力', '收益率', '抗风险', '稳定性','择时能力']*/
var Data_performanceEvaluation = {
  'avr': '64.50',
  'categories': ['选证能力', '收益率', '抗风险', '稳定性', '择时能力'],
  'dsc': ['反映基金挑选证券而实现风险\u003cbr\u003e调整后获得超额收益的能力', '根据阶段收益评分，反映基金的盈利能力', '反映基金投资收益的回撤情况', '反映基金投资收益的波动性', '反映基金根据对市场走势的判断，\u003cbr\u003e通过调整仓位及配置而跑赢基金业\u003cbr\u003e绩基准的能力'],
  'data': [50.0, 90.0, 50.0, 20.0, 70.0]
};
/* 现任基金经理*/
var Data_currentFundManager = [{
  'id': '30324814',
  'pic': 'https://pdf.dfcfw.com/pdf/H8_JPG30324814_1.jpg',
  'name': '葛兰',
  'star': 3,
  'workTime': '5年又241天',
  'fundSize': '441.91亿(9只基金)',
  'power': {
    'avr': '55.98',
    'categories': ['经验值', '收益率', '抗风险', '稳定性', '择时能力'],
    'dsc': ['反映基金经理从业年限和管理基金的经验', '根据基金经理投资的阶段收益评分，反映\u003cbr\u003e基金经理投资的盈利能力', '反映基金经理投资的回撤控制能力', '反映基金经理投资收益的波动', '反映基金经理根据对市场的判断，通过\u003cbr\u003e调整仓位及配置而跑赢业绩的基准能力'],
    'data': [78.10, 89.10, 1.60, 3.10, 59.10],
    'jzrq': '2021-03-03'
  },
  'profit': {
    'categories': ['任期收益', '同类平均', '沪深300'],
    'series': [{
      'data': [{ 'name': null, 'color': '#7cb5ec', 'y': 269.993 }, {
        'name': null,
        'color': '#414c7b',
        'y': 85.69
      }, { 'name': null, 'color': '#f7a35c', 'y': 68.05 }]
    }],
    'jzrq': '2021-03-03'
  }
}];
/* 申购赎回*/
var Data_buySedemption = {
  'series': [{ 'name': '期间申购', 'data': [10.91, 23.29, 26.31, 14.98] }, {
    'name': '期间赎回',
    'data': [9.39, 8.91, 25.85, 13.43]
  }, { 'name': '总份额', 'data': [13.23, 27.61, 28.07, 29.62] }],
  'categories': ['2020-03-31', '2020-06-30', '2020-09-30', '2020-12-31']
};
/* 同类型基金涨幅榜（页面底部通栏）*/
var swithSameType = [
  ['502023_鹏华国证钢铁行业指数_21.08', '000433_安信鑫发优选混合_18.48', '008099_广发价值领先混合_18.34', '168203_中融国证钢铁行业指数_17.65', '008189_国泰中证钢铁ETF联_17.10'], ['005968_创金合信工业周期股票_38.04', '005969_创金合信工业周期股票_37.81', '008099_广发价值领先混合_34.65', '002943_广发多因子混合_34.38', '001951_金鹰改革红利混合_34.36'], ['001951_金鹰改革红利混合_63.21', '003834_华夏能源革新股票_60.61', '005968_创金合信工业周期股票_59.30', '005969_创金合信工业周期股票_58.77', '540008_汇丰晋信低碳先锋股票_57.63'], ['005968_创金合信工业周期股票_138.94', '005969_创金合信工业周期股票_137.30', '004997_广发高端制造股票A_121.79', '001384_东方新思路混合A_106.47', '001385_东方新思路混合C_105.66'], ['001679_前海开源中国稀缺资产_303.13', '002079_前海开源中国稀缺资产_301.99', '001216_易方达新收益混合A_219.80', '001217_易方达新收益混合C_216.23', '001643_汇丰晋信智造先锋股票_215.33']];
