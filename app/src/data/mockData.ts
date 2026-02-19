import type { Customer, Product, Scenario, Branch } from '@/types';

export const MOCK_PRODUCT_POOL: Product[] = [
  // Deposits (Reference: app/src/data/Deposit)
  {
    id: 'prod_dep_001',
    name: 'Special Savings Deposit', // (2) เอกสารเปรียบเทียบผลิตภัณฑ์_เงินฝากออมทรัพย์พิเศษ_TH 01022026_New templates.pdf
    category: 'deposit',
    duration: 'No fixed term',
    rating: 5,
    interestRate: 2.20,
    minInvestment: 500,
    features: ['High Interest', 'Flexible Withdrawal'],
    recommended: true,
    riskLevel: 'low',
    description: 'High rate savings with flexibility.',
  },
  {
    id: 'prod_dep_002',
    name: 'Tax-Free Fixed Deposit', // (4) เอกสารเปรียบเทียบผลิตภัณฑ์_เงินฝากประจำปลอดภาษี_TH 01012026_New templates.pdf
    category: 'deposit',
    duration: '24 Months',
    rating: 4,
    interestRate: 2.50,
    minInvestment: 1000,
    features: ['Tax Free', 'Monthly Deposit'],
    recommended: true,
    riskLevel: 'low',
    description: 'Tax-free interest for disciplined savers.',
  },
  {
    id: 'prod_dep_003',
    name: 'Digital Deposit Details', // Product Catalog Digital Deposit (TH)_Eff.2026.02.01.pdf
    category: 'deposit',
    duration: 'No fixed term',
    rating: 5,
    interestRate: 1.88,
    minInvestment: 0,
    features: ['Digital Only', 'High Liquidity'],
    recommended: true,
    riskLevel: 'low',
    description: 'Convenient digital savings account.',
  },

  // Insurance (Reference: app/src/data/Insurance)
  {
    id: 'prod_ins_001',
    name: 'CIMB Thai Sabaidee Savings 12/4', // ประกันชีวิตออนไลน์ ซีไอเอ็มบี ไทย สบายดี เซฟวิ่งส์ 12.4.pdf
    category: 'insurance',
    duration: '12 years',
    rating: 4,
    interestRate: 3.0, // Estimated IRR
    minInvestment: 20000,
    features: ['Tax Deduction', 'Life Protection', 'Guaranteed Cash Back'],
    recommended: true,
    riskLevel: 'low',
    description: 'Savings insurance with guaranteed returns and tax benefits.',
  },

  // Mutual Funds (Reference: app/src/data/Mutual Fund)
  {
    id: 'prod_fund_001',
    name: 'KF-HGOLD', // FFS_KF-HGOLD_TH.pdf
    category: 'fund',
    duration: 'No fixed term',
    rating: 4,
    interestRate: 5.5, // Gold return varies
    minInvestment: 1000,
    features: ['Gold Bullion', 'Hedged'],
    recommended: true,
    riskLevel: 'high',
    description: 'Invests in physical gold with currency hedging.',
  },
  {
    id: 'prod_fund_002',
    name: 'SCBGOLDH RMF', // SCBGOLDHRMF_SUM.pdf
    category: 'fund',
    duration: 'Retirement',
    rating: 4,
    interestRate: 5.0,
    minInvestment: 2000,
    features: ['Tax Deduction', 'Retirement', 'Gold'],
    recommended: true,
    riskLevel: 'high',
    description: 'Gold fund for retirement planning with tax benefits.',
  },
  {
    id: 'prod_fund_003',
    name: 'SCBGOLDH', // SCBGOLDH_SUM.pdf
    category: 'fund',
    duration: 'No fixed term',
    rating: 4,
    interestRate: 5.2,
    minInvestment: 1000,
    features: ['Gold Bullion', 'Currency Hedge'],
    recommended: true,
    riskLevel: 'high',
    description: 'Fund investing in SPDR Gold Trust with hedging.',
  },
  {
    id: 'prod_fund_004',
    name: 'PRINCIPAL EQESG', // en_PRINCIPAL_EQESG_FFS.pdf
    category: 'fund',
    duration: '5+ years',
    rating: 5,
    interestRate: 8.0,
    minInvestment: 5000,
    features: ['Global Equities', 'ESG Focus', 'Sustainable'],
    recommended: true,
    riskLevel: 'high',
    description: 'Global equity fund focusing on ESG criteria.',
  },
  {
    id: 'prod_fund_005',
    name: 'PRINCIPAL FIRMF', // en_PRINCIPAL_FIRMF_FFS.pdf
    category: 'fund',
    duration: 'Retirement',
    rating: 3,
    interestRate: 3.5,
    minInvestment: 2000,
    features: ['Fixed Income', 'Tax Deduction', 'Retirement'],
    recommended: true,
    riskLevel: 'medium',
    description: 'Fixed income RMF for stable retirement savings.',
  },
  {
    id: 'prod_fund_006',
    name: 'PRINCIPAL PRMF', // en_PRINCIPAL_PRMF_FFS.pdf
    category: 'fund',
    duration: 'Retirement',
    rating: 4,
    interestRate: 6.0,
    minInvestment: 2000,
    features: ['Property', 'REITs', 'Tax Deduction'],
    recommended: true,
    riskLevel: 'medium', // Property is high/medium
    description: 'Property fund RMF for income and growth.',
  },
  {
    id: 'prod_fund_007',
    name: 'PRINCIPAL JEQ', // th_PRINCIPAL_JEQ_FFS.pdf
    category: 'fund',
    duration: '5+ years',
    rating: 5,
    interestRate: 9.0,
    minInvestment: 5000,
    features: ['Japan Equities', 'Growth'],
    recommended: true,
    riskLevel: 'high',
    description: 'Invests in high-growth Japanese companies.',
  },
  {
    id: 'prod_fund_008',
    name: 'PRINCIPAL iGOLD', // th_PRINCIPAL_iGOLD_FFS.pdf
    category: 'fund',
    duration: 'No fixed term',
    rating: 4,
    interestRate: 5.4,
    minInvestment: 1000,
    features: ['Gold', 'Alternative Inv'],
    recommended: true,
    riskLevel: 'high',
    description: 'Fund of funds investing in gold ETFs.',
  },
];



export const mockCustomers: Customer[] = [
  {
    "id": "3520000037309",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[0], reason: "เพื่อความปลอดภัยของเงินต้นและสภาพคล่องสูง เหมาะสำหรับบัญชีเงินสำรองฉุกเฉิน" },
      { ...MOCK_PRODUCT_POOL[3], reason: "สร้างหลักประกันที่มั่นคงและรับสิทธิประโยชน์ลดหย่อนภาษี" },
      { ...MOCK_PRODUCT_POOL[1], reason: "ออมเงินระยะยาวแบบปลอดภาษี ได้ดอกเบี้ยเต็มเม็ดเต็มหน่วย" }
    ],
    "cif": "3520000037309",
    "prefixTH": "นาย",
    "prefixEN": "MRS.",
    "firstName": "Flower",
    "lastName": "Kurab",
    "firstNameTH": "ฟลาวเวอร์",
    "lastNameTH": "กุหลาบ",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 62,
    "birthDate": "1964-06-22",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "120",
    "occupation": "เกษียณ",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": true,
    "vulnerableDetail": "NoInvestmentKnowledge",
    "yearsWithBank": 12,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL3",
    "openBranchCode": "73",
    "openDate": "2014-10-06",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 168747.3,
        "type": "savings"
      },
      {
        "name": "Loan (LNMPTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "Government Bond",
        "amount": 400000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "N",
    "openFnxFromFlag": "Y",
    "fundCode": "",
    "unitBalance": 0,
    "nav": 0,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 49411,
        "outflow": 22580
      },
      {
        "month": "Nov",
        "inflow": 30350,
        "outflow": 21195
      },
      {
        "month": "Dec",
        "inflow": 46608,
        "outflow": 27420
      }
    ]
  },
  {
    "id": "3550000039180",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[7], reason: "ลงทุนในหุ้นเติบโตทั่วโลก เน้นหุ้นที่มีปัจจัยพื้นฐานดีและยั่งยืน (ESG)" },
      { ...MOCK_PRODUCT_POOL[4], reason: "ลงทุนในทองคำเพื่อป้องกันความเสี่ยงจากอัตราแลกเปลี่ยนและภาวะเงินเฟ้อ" },
      { ...MOCK_PRODUCT_POOL[2], reason: "บัญชีเงินฝากดิจิทัล ดอกเบี้ยสูง สะดวก คล่องตัว" }
    ],
    "cif": "3550000039180",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Nice",
    "lastName": "Sophie",
    "firstNameTH": "ว่อง",
    "lastNameTH": "เคนนี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 42,
    "birthDate": "1984-06-10",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 5,
    "segment": "PREF",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL7",
    "openBranchCode": "135",
    "openDate": "2021-11-22",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 9425313.17,
        "type": "savings"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL DPLUS-A",
        "amount": 100000,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL DPLUS-A",
    "unitBalance": 10000,
    "nav": 11.6937,
    "amount": 100000,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 1142402,
        "outflow": 570932
      },
      {
        "month": "Nov",
        "inflow": 1306160,
        "outflow": 887714
      },
      {
        "month": "Dec",
        "inflow": 1056558,
        "outflow": 628772
      }
    ]
  },
  {
    "id": "3520000033328",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[10], reason: "โอกาสรับผลตอบแทนสูงจากการเติบโตของบริษัทจดทะเบียนในญี่ปุ่น" },
      { ...MOCK_PRODUCT_POOL[6], reason: "ลงทุนในกองทุนทองคำระดับโลก SPDR Gold Trust เพื่อกระจายความเสี่ยง" },
      { ...MOCK_PRODUCT_POOL[0], reason: "พักเงินในบัญชีออมทรัพย์ดอกเบี้ยสูง ก่อนรอจังหวะลงทุนเพิ่ม" }
    ],
    "cif": "3520000033328",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Wong",
    "lastName": "Kenny",
    "firstNameTH": "ใจดี",
    "lastNameTH": "โซฟี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 39,
    "birthDate": "1987-04-27",
    "gender": "M",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 15,
    "segment": "PREF",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "199",
    "openDate": "2011-11-07",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 1443175.57,
        "type": "deposit"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL APDI-A",
        "amount": 5812001.57,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 100000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL APDI-A",
    "unitBalance": 0,
    "nav": 20.2024,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 206396,
        "outflow": 105118
      },
      {
        "month": "Nov",
        "inflow": 410018,
        "outflow": 230367
      },
      {
        "month": "Dec",
        "inflow": 181804,
        "outflow": 93712
      }
    ]
  },
  {
    "id": "3570000048485",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[11], reason: "กระจายการลงทุนในกองทุนทองคำหลากหลายกองทุน (Fund of Funds)" },
      { ...MOCK_PRODUCT_POOL[8], reason: "ลงทุนต่อเนื่องสม่ำเสมอในกองทุนตราสารหนี้ เพื่อการเกษียณ (RMF)" },
      { ...MOCK_PRODUCT_POOL[3], reason: "ประกันชีวิตแบบสะสมทรัพย์ คุ้มครองชีวิตและมีเงินคืนแน่นอน" }
    ],
    "cif": "3570000048485",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Nice",
    "lastName": "Teddy",
    "firstNameTH": "ใจดี",
    "lastNameTH": "เท็ดดี้",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 42,
    "birthDate": "1984-02-12",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "150",
    "occupation": "อาชีพอิสระ",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 10,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "199",
    "openDate": "2016-01-13",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 355903.55,
        "type": "savings"
      },
      {
        "name": "Loan (LNECNT01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "KFCMEGA-A",
        "amount": 297846.93,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "KFCMEGA-A",
    "unitBalance": 49561.8566,
    "nav": 6.0096,
    "amount": 297846.93,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 206165,
        "outflow": 106534
      },
      {
        "month": "Nov",
        "inflow": 341194,
        "outflow": 196416
      },
      {
        "month": "Dec",
        "inflow": 291679,
        "outflow": 171156
      }
    ]
  },
  {
    "id": "3570000026921",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[5], reason: "ออมเงินเพื่อวัยเกษียณกับกองทุน RMF ที่ลงทุนในทองคำ พร้อมสิทธิลดหย่อนภาษี" },
      { ...MOCK_PRODUCT_POOL[9], reason: "สร้างรายได้สม่ำเสมอจากกองทุนรวมอสังหาริมทรัพย์และ REITs" },
      { ...MOCK_PRODUCT_POOL[1], reason: "ฝากประจำปลอดภาษี 24 เดือน สร้างวินัยการออมเพื่อเป้าหมายในอนาคต" }
    ],
    "cif": "3570000026921",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Lucky",
    "lastName": "Nina",
    "firstNameTH": "โชคดี",
    "lastNameTH": "นีน่า",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 41,
    "birthDate": "1985-08-09",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 16,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "3415",
    "openDate": "2010-12-16",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 253285.25,
        "type": "deposit"
      },
      {
        "name": "Loan (LNECNT01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL DPLUS-A",
        "amount": 1507369.26,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 100000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL DPLUS-A",
    "unitBalance": 0,
    "nav": 11.6298,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 86409,
        "outflow": 60304
      },
      {
        "month": "Nov",
        "inflow": 93691,
        "outflow": 51287
      },
      {
        "month": "Dec",
        "inflow": 72652,
        "outflow": 43723
      }
    ]
  },
  {
    "id": "3550000010029",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[10], reason: "เน้นการเติบโตสูงจากการฟื้นตัวของเศรษฐกิจญี่ปุ่น" },
      { ...MOCK_PRODUCT_POOL[7], reason: "ลงทุนระยะยาวในหุ้นยั่งยืนทั่วโลก สอดคล้องกับเทรนด์ ESG" },
      { ...MOCK_PRODUCT_POOL[6], reason: "กระจายความเสี่ยงพอร์ตการลงทุนด้วยทองคำ" }
    ],
    "cif": "3550000010029",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Spark",
    "lastName": "Pree",
    "firstNameTH": "สปาร์ค",
    "lastNameTH": "ปรี",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 37,
    "birthDate": "1989-01-07",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "90",
    "occupation": "นักลงทุน",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 12,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "147",
    "openDate": "2014-01-30",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 259629.36,
        "type": "deposit"
      },
      {
        "name": "Loan (LNPCNM01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL LTF-T",
        "amount": 26301.86,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 100000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL LTF-T",
    "unitBalance": 1327.1165,
    "nav": 19.8188,
    "amount": 26301.86,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 83122,
        "outflow": 39320
      },
      {
        "month": "Nov",
        "inflow": 65867,
        "outflow": 43304
      },
      {
        "month": "Dec",
        "inflow": 77031,
        "outflow": 44139
      }
    ]
  },
  {
    "id": "3500000014594",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[2], reason: "บริหารจัดการเงินสดอย่างมีประสิทธิภาพด้วยบัญชีดิจิทัลดอกเบี้ยสูง" },
      { ...MOCK_PRODUCT_POOL[8], reason: "เริ่มต้นวางแผนภาษีและเกษียณด้วยกองทุน RMF ตราสารหนี้ ความเสี่ยงต่ำ" },
      { ...MOCK_PRODUCT_POOL[3], reason: "สร้างหลักประกันให้คนข้างหลัง พร้อมรับผลตอบแทนที่แน่นอน" }
    ],
    "cif": "3500000014594",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Shiny",
    "lastName": "Natty",
    "firstNameTH": "แวววาว",
    "lastNameTH": "แน็ตตี้",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 35,
    "birthDate": "1991-11-18",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 12,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "2",
    "monthlyIncomeLevel": "LEVEL2",
    "openBranchCode": "58",
    "openDate": "2014-08-21",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 44992.05,
        "type": "savings"
      },
      {
        "name": "Loan (LNPCWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL VNEQ-A",
        "amount": 1181.23,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 3000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL VNEQ-A",
    "unitBalance": 82.5797,
    "nav": 14.3041,
    "amount": 1181.23,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 17834,
        "outflow": 8912
      },
      {
        "month": "Nov",
        "inflow": 22839,
        "outflow": 12398
      },
      {
        "month": "Dec",
        "inflow": 19145,
        "outflow": 10675
      }
    ]
  },
  {
    "id": "3570000038145",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[9], reason: "ลงทุนในสินทรัพย์ทางเลือก (อสังหาฯ) เพื่อโอกาสรับผลตอบแทนที่สม่ำเสมอ" },
      { ...MOCK_PRODUCT_POOL[5], reason: "ใช้สิทธิลดหย่อนภาษีเต็มที่พร้อมกระจายความเสี่ยงในทองคำ" },
      { ...MOCK_PRODUCT_POOL[0], reason: "สภาพคล่องสูง รองรับค่าใช้จ่ายฉุกเฉินของครอบครัว" }
    ],
    "cif": "3570000038145",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Sunny",
    "lastName": "Mimi",
    "firstNameTH": "สดใส",
    "lastNameTH": "มีมี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 42,
    "birthDate": "1984-03-11",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 13,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL3",
    "openBranchCode": "3415",
    "openDate": "2013-11-08",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 235973.21,
        "type": "savings"
      },
      {
        "name": "Loan (LNHLWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL TREASURY",
        "amount": 30020.5,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 10000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL TREASURY",
    "unitBalance": 2443.5718,
    "nav": 12.2855,
    "amount": 30020.5,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 31689,
        "outflow": 16358
      },
      {
        "month": "Nov",
        "inflow": 36684,
        "outflow": 24112
      },
      {
        "month": "Dec",
        "inflow": 34229,
        "outflow": 14394
      }
    ]
  },
  {
    "id": "3570000007370",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[3], reason: "มั่นคง ปลอดภัย มีเงินคืนระหว่างสัญญา ตอบโจทย์แม่บ้านยุคใหม่" },
      { ...MOCK_PRODUCT_POOL[1], reason: "ออมเงินเพื่อการศึกษาบุตร กองทุนรวมปลอดภาษี" },
      { ...MOCK_PRODUCT_POOL[8], reason: "วางแผนเกษียณอย่างมั่นคงด้วยกองทุน RMF ตราสารหนี้" }
    ],
    "cif": "3570000007370",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Wong",
    "lastName": "Nong",
    "firstNameTH": "ว่อง",
    "lastNameTH": "น้อง",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 47,
    "birthDate": "1979-07-01",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 20,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL3",
    "openBranchCode": "116",
    "openDate": "2006-02-22",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 141448.89,
        "type": "deposit"
      },
      {
        "name": "Loan (LNPCWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL USEQ-A",
        "amount": 436511.96,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 5000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL USEQ-A",
    "unitBalance": 0,
    "nav": 12.4254,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 35976,
        "outflow": 18514
      },
      {
        "month": "Nov",
        "inflow": 47767,
        "outflow": 24342
      },
      {
        "month": "Dec",
        "inflow": 40605,
        "outflow": 26566
      }
    ]
  },
  {
    "id": "3500000003469",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[6], reason: "ลงทุนในทองคำเพื่อกระจายความเสี่ยงและป้องกันเงินเฟ้อในระยะยาว" },
      { ...MOCK_PRODUCT_POOL[3], reason: "สร้างหลักประกันชีวิตพร้อมโอกาสรับผลตอบแทนจากการลงทุน" },
      { ...MOCK_PRODUCT_POOL[1], reason: "เก็บออมสม่ำเสมอแบบปลอดภาษี เพื่อเป้าหมายทางการเงินในอนาคต" }
    ],
    "cif": "3500000003469",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Goldy",
    "lastName": "Jenny",
    "firstNameTH": "ทองดี",
    "lastNameTH": "เจนนี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 52,
    "birthDate": "1974-06-23",
    "gender": "M",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 14,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL3",
    "openBranchCode": "120",
    "openDate": "2012-11-16",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 153809.97,
        "type": "savings"
      },
      {
        "name": "Loan (LNECNM01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL iPROPRMF",
        "amount": 5345.41,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 2000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL iPROPRMF",
    "unitBalance": 351.0619,
    "nav": 15.2264,
    "amount": 5345.41,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 41003,
        "outflow": 23606
      },
      {
        "month": "Nov",
        "inflow": 45770,
        "outflow": 28683
      },
      {
        "month": "Dec",
        "inflow": 35654,
        "outflow": 22337
      }
    ]
  },
  {
    "id": "3500000003339",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[9], reason: "สร้างรายได้สม่ำเสมอจากค่าเช่าและส่วนต่างราคาอสังหาริมทรัพย์" },
      { ...MOCK_PRODUCT_POOL[1], reason: "ออมเงินดอกเบี้ยสูงแบบปลอดภาษี ความเสี่ยงต่ำ" },
      { ...MOCK_PRODUCT_POOL[4], reason: "เพิ่มโอกาสรับผลตอบแทนที่ชนะเงินเฟ้อด้วยการลงทุนในหุ้นยั่งยืน" }
    ],
    "cif": "3500000003339",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Brighter",
    "lastName": "Tommy",
    "firstNameTH": "สว่าง",
    "lastNameTH": "ทอมมี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 55,
    "birthDate": "1971-08-16",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 14,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL7",
    "openBranchCode": "199",
    "openDate": "2012-11-06",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 11681959.28,
        "type": "deposit"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL iPROP-D",
        "amount": 8361738.87,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 20000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL iPROP-D",
    "unitBalance": 822924.7973,
    "nav": 10.161,
    "amount": 8361738.87,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 1491338,
        "outflow": 667832
      },
      {
        "month": "Nov",
        "inflow": 1352988,
        "outflow": 854586
      },
      {
        "month": "Dec",
        "inflow": 1249453,
        "outflow": 662860
      }
    ]
  },
  {
    "id": "3500000038421",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[11], reason: "เพิ่มโอกาสทำกำไรจากราคาทองคำโลก ผ่านกองทุนรวมที่บริหารโดยผู้เชี่ยวชาญ" },
      { ...MOCK_PRODUCT_POOL[7], reason: "เติบโตไปพร้อมกับเทรนด์ธุรกิจโลกที่ให้ความสำคัญกับสิ่งแวดล้อมและธรรมาภิบาล" },
      { ...MOCK_PRODUCT_POOL[2], reason: "บริหารสภาพคล่องด้วยบัญชีเงินฝากดิจิทัล ดอกเบี้ยสูงกว่าออมทรัพย์ทั่วไป" }
    ],
    "cif": "3500000038421",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Happy",
    "lastName": "Chris",
    "firstNameTH": "แฮปปี้",
    "lastNameTH": "คริส",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 59,
    "birthDate": "1967-03-08",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "90",
    "occupation": "นักลงทุน",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 8,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "199",
    "openDate": "2018-09-10",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 266690.38,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL VNTG7M1",
        "amount": 935822.79,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL VNTG7M1",
    "unitBalance": 0,
    "nav": 9.2136,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 62223,
        "outflow": 38478
      },
      {
        "month": "Nov",
        "inflow": 98861,
        "outflow": 68928
      },
      {
        "month": "Dec",
        "inflow": 78239,
        "outflow": 45912
      }
    ]
  },
  {
    "id": "3520000015152",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[8], reason: "เตรียมพร้อมสู่วัยเกษียณด้วยกองทุน RMF ตราสารหนี้ มั่นคง ปลอดภัย" },
      { ...MOCK_PRODUCT_POOL[0], reason: "ออมทรัพย์ดอกเบี้ยพิเศษ ถอนได้คล่องตัวเมื่อจำเป็น" },
      { ...MOCK_PRODUCT_POOL[3], reason: "คุ้มครองชีวิตและสุขภาพ พร้อมสิทธิลดหย่อนภาษี" }
    ],
    "cif": "3520000015152",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Wong",
    "lastName": "Laura",
    "firstNameTH": "ว่อง",
    "lastNameTH": "ลอร่า",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 57,
    "birthDate": "1969-01-22",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 19,
    "segment": "PREF",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "199",
    "openDate": "2007-05-14",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 1915060.78,
        "type": "savings"
      },
      {
        "name": "Loan (LNCLWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL TREASURY",
        "amount": 430.7,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 831000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "N",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL TREASURY",
    "unitBalance": 35.0575,
    "nav": 12.2855,
    "amount": 430.7,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 122570,
        "outflow": 82008
      },
      {
        "month": "Nov",
        "inflow": 432114,
        "outflow": 174710
      },
      {
        "month": "Dec",
        "inflow": 435781,
        "outflow": 253831
      }
    ]
  },
  {
    "id": "3570000064993",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[6], reason: "ทางเลือกการลงทุนในทองคำ เพื่อป้องกันความผันผวนของพอร์ตการลงทุน" },
      { ...MOCK_PRODUCT_POOL[9], reason: "รับผลตอบแทนสม่ำเสมอจากการลงทุนในทรัสต์เพื่อการลงทุนในอสังหาริมทรัพย์ (REITs)" },
      { ...MOCK_PRODUCT_POOL[2], reason: "บัญชีเงินฝากคู่ใจนักลงทุน ย้ายเงินสะดวก ดอกเบี้ยสูง" }
    ],
    "cif": "3570000064993",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Sawasdee",
    "lastName": "James",
    "firstNameTH": "สวัสดี",
    "lastNameTH": "เจมส์",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 48,
    "birthDate": "1978-02-21",
    "gender": "M",
    "maritalStatus": "Single",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 4,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "219",
    "openDate": "2022-08-05",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 595982.86,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GSTEP",
        "amount": 6701471.99,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 600000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL GSTEP",
    "unitBalance": 0,
    "nav": 10.0964,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 266871,
        "outflow": 146468
      },
      {
        "month": "Nov",
        "inflow": 267969,
        "outflow": 152793
      },
      {
        "month": "Dec",
        "inflow": 399115,
        "outflow": 262983
      }
    ]
  },
  {
    "id": "3570000031283",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[10], reason: "คว้าโอกาสการเติบโตของเศรษฐกิจญี่ปุ่นและบริษัทชั้นนำในตลาดโตเกียว" },
      { ...MOCK_PRODUCT_POOL[5], reason: "ลงทุนเพื่อวัยเกษียณในกองทุนทองคำ RMF สร้างความมั่นคงในระยะยาว" },
      { ...MOCK_PRODUCT_POOL[0], reason: "เงินฝากออมทรัพย์ดอกเบี้ยพิเศษ ปลอดภัย สภาพคล่องสูง" }
    ],
    "cif": "3570000031283",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Spark",
    "lastName": "Anna",
    "firstNameTH": "สปาร์ค",
    "lastNameTH": "แอนนา",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 51,
    "birthDate": "1975-08-15",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 14,
    "segment": "PREF",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "199",
    "openDate": "2012-03-08",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 1284638.87,
        "type": "deposit"
      },
      {
        "name": "Loan (LNCLWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL iPROP-A",
        "amount": 18872.39,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 5000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL iPROP-A",
    "unitBalance": 1150.075,
    "nav": 16.4097,
    "amount": 18872.39,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 160415,
        "outflow": 102997
      },
      {
        "month": "Nov",
        "inflow": 335266,
        "outflow": 159056
      },
      {
        "month": "Dec",
        "inflow": 491152,
        "outflow": 201491
      }
    ]
  },
  {
    "id": "3500000059906",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[1], reason: "สร้างวินัยการออมด้วยเงินฝากประจำปลอดภาษี เพื่อเป้าหมายระยะสั้น-กลาง" },
      { ...MOCK_PRODUCT_POOL[8], reason: "ออมเงินในกองทุนตราสารหนี้ RMF ลดความเสี่ยงเมื่อใกล้เกษียณ" },
      { ...MOCK_PRODUCT_POOL[3], reason: "หลักประกันที่มั่นคงเพื่อคนในครอบครัว" }
    ],
    "cif": "3500000059906",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Shiny",
    "lastName": "David",
    "firstNameTH": "แวววาว",
    "lastNameTH": "เดวิด",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 58,
    "birthDate": "1968-09-04",
    "gender": "M",
    "maritalStatus": "Single",
    "occupationCode": "80",
    "occupation": "แม่บ้าน/พ่อบ้าน",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 2,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "138",
    "openDate": "2024-06-05",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 379885.18,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "MUSPIN-H-AR",
        "amount": 465228.04,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 2000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "MUSPIN-H-AR",
    "unitBalance": 47165.6721,
    "nav": 9.8637,
    "amount": 465228.04,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 471235,
        "outflow": 295531
      },
      {
        "month": "Nov",
        "inflow": 395477,
        "outflow": 270317
      },
      {
        "month": "Dec",
        "inflow": 209194,
        "outflow": 143531
      }
    ]
  },
  {
    "id": "3500000020788",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[5], reason: "วัยเกษียณที่มั่นคง ด้วยการลงทุนในทองคำ RMF พร้อมสิทธิทางภาษี" },
      { ...MOCK_PRODUCT_POOL[0], reason: "รักษาเงินต้นและมีเงินใช้จ่ายยามฉุกเฉิน ด้วยบัญชีออมทรัพย์พิเศษ" },
      { ...MOCK_PRODUCT_POOL[3], reason: "ประกันชีวิตแบบสะสมทรัพย์ เงินออมงอกเงยพร้อมความคุ้มครอง" }
    ],
    "cif": "3500000020788",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Nice",
    "lastName": "Emily",
    "firstNameTH": "ใจดี",
    "lastNameTH": "เอมิลี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 65,
    "birthDate": "1961-11-20",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 11,
    "segment": "PREF",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "3415",
    "openDate": "2015-07-28",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 351784.22,
        "type": "deposit"
      },
      {
        "name": "Loan (LNPCWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GLEADER-A",
        "amount": 742083.19,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 2000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL GLEADER-A",
    "unitBalance": 0,
    "nav": 10.3753,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 92116,
        "outflow": 61147
      },
      {
        "month": "Nov",
        "inflow": 70984,
        "outflow": 44235
      },
      {
        "month": "Dec",
        "inflow": 86852,
        "outflow": 37025
      }
    ]
  },
  {
    "id": "3520000034350",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[9], reason: "ลงทุนในอสังหาริมทรัพย์และโครงสร้างพื้นฐาน เพื่อเงินปันผลที่สม่ำเสมอ" },
      { ...MOCK_PRODUCT_POOL[4], reason: "กระจายการลงทุนไปทั่วโลกกับกองทุนหุ้นยั่งยืน (ESG)" },
      { ...MOCK_PRODUCT_POOL[2], reason: "บริหารจัดการเงินเดือนและรายได้พิเศษด้วยบัญชีดิจิทัลที่ให้ดอกเบี้ยสูง" }
    ],
    "cif": "3520000034350",
    "prefixTH": "นาง",
    "prefixEN": "MRS.",
    "firstName": "Lucky",
    "lastName": "John",
    "firstNameTH": "โชคดี",
    "lastNameTH": "จอห์น",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 55,
    "birthDate": "1971-10-31",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "50",
    "occupation": "แพทย์/พยาบาล",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 14,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "4",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "116",
    "openDate": "2012-02-17",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 414374.62,
        "type": "deposit"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "1AM-DAILY-RA",
        "amount": 0.01,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "1AM-DAILY-RA",
    "unitBalance": 0.0004,
    "nav": 12.9513,
    "amount": 0.01,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 79577,
        "outflow": 47019
      },
      {
        "month": "Nov",
        "inflow": 62464,
        "outflow": 30236
      },
      {
        "month": "Dec",
        "inflow": 67287,
        "outflow": 30579
      }
    ]
  },
  {
    "id": "3510000004131",
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[11], reason: "เพิ่มโอกาสสร้างผลตอบแทนสูงสุดด้วยกองทุนทองคำ Fund of Funds" },
      { ...MOCK_PRODUCT_POOL[7], reason: "ลงทุนในบริษัทชั้นนำทั่วโลกที่มีธรรมาภิบาลดี เพื่อการเติบโตที่ยั่งยืน" },
      { ...MOCK_PRODUCT_POOL[10], reason: "กระจายความเสี่ยงพอร์ตการลงทุนไปยังตลาดหุ้นญี่ปุ่น" }
    ],
    "cif": "3510000004131",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Wong",
    "lastName": "Sarah",
    "firstNameTH": "ว่อง",
    "lastNameTH": "ซาร่า",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 43,
    "birthDate": "1983-03-03",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "30",
    "occupation": "เจ้าของกิจการ",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 8,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "201",
    "openDate": "2018-10-13",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 572141.03,
        "type": "savings"
      },
      {
        "name": "Loan (LNMPTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL SEQTESGX-O",
        "amount": 61559.59,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 200000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL SEQTESGX-O",
    "unitBalance": 5964.4407,
    "nav": 10.3211,
    "amount": 61559.59,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 319873,
        "outflow": 190780
      },
      {
        "month": "Nov",
        "inflow": 282012,
        "outflow": 114280
      },
      {
        "month": "Dec",
        "inflow": 350739,
        "outflow": 172838
      }
    ]
  },
  {
    "id": "3520000037309",
    "cif": "3520000037309",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Sunny",
    "lastName": "Michael",
    "firstNameTH": "สดใส",
    "lastNameTH": "ไมเคิล",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 47,
    "birthDate": "1979-06-22",
    "gender": "M",
    "maritalStatus": "Single",
    "occupationCode": "30",
    "occupation": "เจ้าของกิจการ",
    "educationCode": "6",
    "education": "6",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": true,
    "vulnerableDetail": "NoInvestmentKnowledge",
    "yearsWithBank": 12,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL3",
    "openBranchCode": "73",
    "openDate": "2014-10-06",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 143609.08,
        "type": "savings"
      },
      {
        "name": "Loan (LNMPTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "Government Bond",
        "amount": 400000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "",
    "unitBalance": 0,
    "nav": 0,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 47855,
        "outflow": 23440
      },
      {
        "month": "Nov",
        "inflow": 34556,
        "outflow": 15860
      },
      {
        "month": "Dec",
        "inflow": 42999,
        "outflow": 19464
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[5], reason: "เพื่อเป็นหลักประกันในอนาคต" },
      { ...MOCK_PRODUCT_POOL[6], reason: "เพิ่มสภาพคล่องทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[9], reason: "คุ้มครองชีวิตและทรัพย์สิน" }
    ],
  },
  {
    "id": "3550000044254",
    "cif": "3550000044254",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Happy",
    "lastName": "Jane",
    "firstNameTH": "แฮปปี้",
    "lastNameTH": "เจน",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 54,
    "birthDate": "1972-06-12",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 3,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "161",
    "openDate": "2023-08-25",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 623747.24,
        "type": "deposit"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "Government Bond",
        "amount": 500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "",
    "unitBalance": 0,
    "nav": 0,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 447631,
        "outflow": 231260
      },
      {
        "month": "Nov",
        "inflow": 311699,
        "outflow": 161046
      },
      {
        "month": "Dec",
        "inflow": 493808,
        "outflow": 339152
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[3], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" },
      { ...MOCK_PRODUCT_POOL[1], reason: "คุ้มครองชีวิตและทรัพย์สิน" },
      { ...MOCK_PRODUCT_POOL[4], reason: "สร้างความมั่นคงทางการเงิน" }
    ],
  },
  {
    "id": "3560000001770",
    "cif": "3560000001770",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Bright",
    "lastName": "Lilly",
    "firstNameTH": "สดใส",
    "lastNameTH": "ลิลลี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 51,
    "birthDate": "1975-12-16",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "80",
    "occupation": "แม่บ้าน/พ่อบ้าน",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 11,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "173",
    "openDate": "2015-04-28",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 557587.34,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "ES-TM",
        "amount": 3132356.89,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "ES-TM",
    "unitBalance": 0,
    "nav": 14.5653,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 230377,
        "outflow": 122870
      },
      {
        "month": "Nov",
        "inflow": 492241,
        "outflow": 249891
      },
      {
        "month": "Dec",
        "inflow": 348271,
        "outflow": 161972
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[9], reason: "สร้างความมั่นคงทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[8], reason: "กระจายความเสี่ยงในการลงทุน" },
      { ...MOCK_PRODUCT_POOL[3], reason: "สร้างความมั่นคงทางการเงิน" }
    ],
  },
  {
    "id": "3550000017306",
    "cif": "3550000017306",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Smile",
    "lastName": "Tony",
    "firstNameTH": "ยิ้มแย้ม",
    "lastNameTH": "โทนี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 56,
    "birthDate": "1970-07-09",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 11,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "4",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "124",
    "openDate": "2015-04-07",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 614677.5,
        "type": "deposit"
      },
      {
        "name": "Loan (LNLWCL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL TREASURY",
        "amount": 25140.4,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 13000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL TREASURY",
    "unitBalance": 2046.3477,
    "nav": 12.2855,
    "amount": 25140.4,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 277403,
        "outflow": 150005
      },
      {
        "month": "Nov",
        "inflow": 251470,
        "outflow": 104150
      },
      {
        "month": "Dec",
        "inflow": 225360,
        "outflow": 95544
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[4], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" },
      { ...MOCK_PRODUCT_POOL[2], reason: "สร้างความมั่นคงทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[0], reason: "ได้รับสิทธิประโยชน์ทางภาษี" }
    ],
  },
  {
    "id": "3570000001634",
    "cif": "3570000001634",
    "prefixTH": "นาง",
    "prefixEN": "MRS.",
    "firstName": "Joy",
    "lastName": "Bella",
    "firstNameTH": "สุขใจ",
    "lastNameTH": "เบลล่า",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 60,
    "birthDate": "1966-03-11",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 22,
    "segment": "CMG",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "35",
    "openDate": "2004-12-27",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 841047.29,
        "type": "deposit"
      },
      {
        "name": "Loan (ODODRS01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "Government Bond",
        "amount": 2000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "",
    "unitBalance": 0,
    "nav": 0,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 83137,
        "outflow": 43507
      },
      {
        "month": "Nov",
        "inflow": 72338,
        "outflow": 37994
      },
      {
        "month": "Dec",
        "inflow": 75878,
        "outflow": 37630
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[7], reason: "เหมาะสำหรับการออมระยะยาว" },
      { ...MOCK_PRODUCT_POOL[3], reason: "กระจายความเสี่ยงในการลงทุน" },
      { ...MOCK_PRODUCT_POOL[4], reason: "เพื่อเป็นหลักประกันในอนาคต" }
    ],
  },
  {
    "id": "3570000022893",
    "cif": "3570000022893",
    "prefixTH": "นาง",
    "prefixEN": "MRS.",
    "firstName": "Light",
    "lastName": "Andy",
    "firstNameTH": "สว่าง",
    "lastNameTH": "แอนดี้",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 77,
    "birthDate": "1949-01-20",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 17,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "35",
    "openDate": "2009-11-24",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 384768.38,
        "type": "savings"
      },
      {
        "name": "Loan (ODCASH01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GHEALTH-A",
        "amount": 1549670.34,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL GHEALTH-A",
    "unitBalance": 0,
    "nav": 4.5552,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 81543,
        "outflow": 55848
      },
      {
        "month": "Nov",
        "inflow": 56567,
        "outflow": 26765
      },
      {
        "month": "Dec",
        "inflow": 50539,
        "outflow": 27599
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[7], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" },
      { ...MOCK_PRODUCT_POOL[4], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" },
      { ...MOCK_PRODUCT_POOL[3], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" }
    ],
  },
  {
    "id": "3550000003873",
    "cif": "3550000003873",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Glow",
    "lastName": "Cindy",
    "firstNameTH": "เปล่งประกาย",
    "lastNameTH": "ซินดี้",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 49,
    "birthDate": "1977-09-20",
    "gender": "M",
    "maritalStatus": "Single",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 13,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "3415",
    "openDate": "2013-01-03",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 410277.53,
        "type": "deposit"
      },
      {
        "name": "Loan (LNPCNM01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL TREASURY",
        "amount": 310.23,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1200000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL TREASURY",
    "unitBalance": 25.2516,
    "nav": 12.2855,
    "amount": 310.23,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 449071,
        "outflow": 275960
      },
      {
        "month": "Nov",
        "inflow": 150775,
        "outflow": 82327
      },
      {
        "month": "Dec",
        "inflow": 137547,
        "outflow": 91903
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[3], reason: "สร้างความมั่นคงทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[4], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" },
      { ...MOCK_PRODUCT_POOL[0], reason: "เพิ่มสภาพคล่องทางการเงิน" }
    ],
  },
  {
    "id": "3570000060735",
    "cif": "3570000060735",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Shine",
    "lastName": "Leo",
    "firstNameTH": "แวววาว",
    "lastNameTH": "ลีโอ",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 47,
    "birthDate": "1979-05-29",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "110",
    "occupation": "นักการเมือง",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 6,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "4",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "35",
    "openDate": "2020-08-20",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 386528.11,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "KFINFRA-A",
        "amount": 110850.74,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "KFINFRA-A",
    "unitBalance": 10837.4384,
    "nav": 10.2285,
    "amount": 110850.74,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 73189,
        "outflow": 40941
      },
      {
        "month": "Nov",
        "inflow": 63721,
        "outflow": 38639
      },
      {
        "month": "Dec",
        "inflow": 96513,
        "outflow": 44012
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[11], reason: "สร้างความมั่นคงทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[9], reason: "สร้างความมั่นคงทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[1], reason: "สร้างความมั่นคงทางการเงิน" }
    ],
  },
  {
    "id": "3500000016598",
    "cif": "3500000016598",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Joy",
    "lastName": "Nina",
    "firstNameTH": "สุขใจ",
    "lastNameTH": "นีน่า",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 52,
    "birthDate": "1974-03-23",
    "gender": "M",
    "maritalStatus": "Single",
    "occupationCode": "50",
    "occupation": "แพทย์/พยาบาล",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 12,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "2",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "75",
    "openDate": "2014-12-08",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 401566.39,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL DPLUS-A",
        "amount": 0.02,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 2000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "N",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL DPLUS-A",
    "unitBalance": 0.0017,
    "nav": 11.6298,
    "amount": 0.02,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 53977,
        "outflow": 27430
      },
      {
        "month": "Nov",
        "inflow": 78025,
        "outflow": 32712
      },
      {
        "month": "Dec",
        "inflow": 95088,
        "outflow": 61617
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[1], reason: "สร้างความมั่นคงทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[9], reason: "คุ้มครองชีวิตและทรัพย์สิน" },
      { ...MOCK_PRODUCT_POOL[10], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" }
    ],
  },
  {
    "id": "3550000026263",
    "cif": "3550000026263",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Bright",
    "lastName": "Oscar",
    "firstNameTH": "สดใส",
    "lastNameTH": "ออสการ์",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 56,
    "birthDate": "1970-03-19",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 10,
    "segment": "PREF",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "199",
    "openDate": "2016-09-19",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 1486145.09,
        "type": "deposit"
      },
      {
        "name": "Loan (LNHLWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL DPLUS-A",
        "amount": 442.55,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL DPLUS-A",
    "unitBalance": 38.0535,
    "nav": 11.6298,
    "amount": 442.55,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 206254,
        "outflow": 113944
      },
      {
        "month": "Nov",
        "inflow": 494723,
        "outflow": 244241
      },
      {
        "month": "Dec",
        "inflow": 274323,
        "outflow": 121655
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[8], reason: "เพิ่มสภาพคล่องทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[10], reason: "สร้างความมั่นคงทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[11], reason: "เหมาะสำหรับการออมระยะยาว" }
    ],
  },
  {
    "id": "3520000000437",
    "cif": "3520000000437",
    "prefixTH": "นาง",
    "prefixEN": "MRS.",
    "firstName": "Smile",
    "lastName": "Ruby",
    "firstNameTH": "ยิ้มแย้ม",
    "lastNameTH": "รูบี้",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 57,
    "birthDate": "1969-07-02",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 22,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "89",
    "openDate": "2004-12-27",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 297266.14,
        "type": "savings"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "ABGDD-A",
        "amount": 11886.04,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "ABGDD-A",
    "unitBalance": 1088.1965,
    "nav": 10.9227,
    "amount": 11886.04,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 77361,
        "outflow": 34240
      },
      {
        "month": "Nov",
        "inflow": 51327,
        "outflow": 24890
      },
      {
        "month": "Dec",
        "inflow": 75244,
        "outflow": 40030
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[6], reason: "เพื่อเพิ่มโอกาสในการรับผลตอบแทนที่สูงขึ้น" },
      { ...MOCK_PRODUCT_POOL[4], reason: "ได้รับสิทธิประโยชน์ทางภาษี" },
      { ...MOCK_PRODUCT_POOL[9], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" }
    ],
  },
  {
    "id": "3520000018554",
    "cif": "3520000018554",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Glow",
    "lastName": "Sam",
    "firstNameTH": "เปล่งประกาย",
    "lastNameTH": "แซม",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 44,
    "birthDate": "1982-01-04",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "170",
    "occupation": "อื่นๆ",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 19,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "150",
    "openDate": "2007-09-01",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 680322.32,
        "type": "deposit"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL FIRMF",
        "amount": 5174816.68,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 100000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL FIRMF",
    "unitBalance": 0,
    "nav": 15.2674,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 472532,
        "outflow": 195742
      },
      {
        "month": "Nov",
        "inflow": 430247,
        "outflow": 173081
      },
      {
        "month": "Dec",
        "inflow": 337244,
        "outflow": 146027
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[8], reason: "กระจายความเสี่ยงในการลงทุน" },
      { ...MOCK_PRODUCT_POOL[0], reason: "เพิ่มสภาพคล่องทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[2], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" }
    ],
  },
  {
    "id": "3590000001308",
    "cif": "3590000001308",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Light",
    "lastName": "Tina",
    "firstNameTH": "สว่าง",
    "lastNameTH": "ทีน่า",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 73,
    "birthDate": "1953-09-11",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "6",
    "education": "6",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 22,
    "segment": "CMG",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "68",
    "openDate": "2004-12-27",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 2935322.24,
        "type": "deposit"
      },
      {
        "name": "Loan (ODODNM01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "ABCA-A",
        "amount": 25956448.04,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "N",
    "openFnxFromFlag": "Y",
    "fundCode": "ABCA-A",
    "unitBalance": 0,
    "nav": 9.4127,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 477079,
        "outflow": 288944
      },
      {
        "month": "Nov",
        "inflow": 210090,
        "outflow": 108091
      },
      {
        "month": "Dec",
        "inflow": 405553,
        "outflow": 174944
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[2], reason: "ได้รับสิทธิประโยชน์ทางภาษี" },
      { ...MOCK_PRODUCT_POOL[3], reason: "ได้รับสิทธิประโยชน์ทางภาษี" },
      { ...MOCK_PRODUCT_POOL[0], reason: "เพื่อเป็นหลักประกันในอนาคต" }
    ],
  },
  {
    "id": "3570000029399",
    "cif": "3570000029399",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Shine",
    "lastName": "Victor",
    "firstNameTH": "แวววาว",
    "lastNameTH": "วิคเตอร์",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 69,
    "birthDate": "1957-06-11",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "20",
    "occupation": "เกษตรกร",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 15,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "31",
    "openDate": "2011-08-05",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 328928.9,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "MGPROP-AC",
        "amount": 147689.81,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 500000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "MGPROP-AC",
    "unitBalance": 13930.3726,
    "nav": 10.602,
    "amount": 147689.81,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 60339,
        "outflow": 27318
      },
      {
        "month": "Nov",
        "inflow": 80813,
        "outflow": 43706
      },
      {
        "month": "Dec",
        "inflow": 85847,
        "outflow": 39830
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[4], reason: "กระจายความเสี่ยงในการลงทุน" },
      { ...MOCK_PRODUCT_POOL[9], reason: "กระจายความเสี่ยงในการลงทุน" },
      { ...MOCK_PRODUCT_POOL[2], reason: "กระจายความเสี่ยงในการลงทุน" }
    ],
  },
  {
    "id": "3530000002077",
    "cif": "3530000002077",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Joy",
    "lastName": "Wendy",
    "firstNameTH": "สุขใจ",
    "lastNameTH": "เวนดี้",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 62,
    "birthDate": "1964-11-23",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 19,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "199",
    "openDate": "2007-08-29",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 592720.83,
        "type": "savings"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL TREASURY",
        "amount": 107.68,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 200000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL TREASURY",
    "unitBalance": 8.7644,
    "nav": 12.2855,
    "amount": 107.68,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 426438,
        "outflow": 201026
      },
      {
        "month": "Nov",
        "inflow": 328516,
        "outflow": 146619
      },
      {
        "month": "Dec",
        "inflow": 285668,
        "outflow": 122512
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[2], reason: "กระจายความเสี่ยงในการลงทุน" },
      { ...MOCK_PRODUCT_POOL[8], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" },
      { ...MOCK_PRODUCT_POOL[0], reason: "เพื่อเป็นหลักประกันในอนาคต" }
    ],
  },
  {
    "id": "3500000035079",
    "cif": "3500000035079",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Smile",
    "lastName": "Xander",
    "firstNameTH": "ยิ้มแย้ม",
    "lastNameTH": "แซนเดอร์",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 50,
    "birthDate": "1976-10-21",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "60",
    "occupation": "กิจการครอบครัว",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 9,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL6",
    "openBranchCode": "128",
    "openDate": "2017-10-10",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 1258337.72,
        "type": "savings"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL DPLUS-A",
        "amount": 570941.57,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 200000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL DPLUS-A",
    "unitBalance": 49092.9826,
    "nav": 11.6298,
    "amount": 570941.57,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 683162,
        "outflow": 439023
      },
      {
        "month": "Nov",
        "inflow": 961144,
        "outflow": 466384
      },
      {
        "month": "Dec",
        "inflow": 901779,
        "outflow": 522781
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[1], reason: "เพื่อเพิ่มโอกาสในการรับผลตอบแทนที่สูงขึ้น" },
      { ...MOCK_PRODUCT_POOL[2], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" },
      { ...MOCK_PRODUCT_POOL[3], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" }
    ],
  },
  {
    "id": "3500000029837",
    "cif": "3500000029837",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Glow",
    "lastName": "Yara",
    "firstNameTH": "เปล่งประกาย",
    "lastNameTH": "ยาร่า",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 48,
    "birthDate": "1978-04-30",
    "gender": "F",
    "maritalStatus": "Married",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "7",
    "education": "7",
    "riskScore": 1,
    "riskProfileLevel": "3",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 10,
    "segment": "PREF",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "199",
    "openDate": "2016-10-10",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 681874.98,
        "type": "savings"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL DPLUS-A",
        "amount": 852.37,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL DPLUS-A",
    "unitBalance": 73.2922,
    "nav": 11.6298,
    "amount": 852.37,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 256273,
        "outflow": 152602
      },
      {
        "month": "Nov",
        "inflow": 335093,
        "outflow": 169605
      },
      {
        "month": "Dec",
        "inflow": 292499,
        "outflow": 172040
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[8], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" },
      { ...MOCK_PRODUCT_POOL[0], reason: "เพิ่มสภาพคล่องทางการเงิน" },
      { ...MOCK_PRODUCT_POOL[11], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" }
    ],
  },
  {
    "id": "3520000020940",
    "cif": "3520000020940",
    "prefixTH": "นาย",
    "prefixEN": "MR.",
    "firstName": "Light",
    "lastName": "Zane",
    "firstNameTH": "สว่าง",
    "lastNameTH": "เซน",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 53,
    "birthDate": "1973-07-15",
    "gender": "M",
    "maritalStatus": "Married",
    "occupationCode": "130",
    "occupation": "พนักงานรัฐวิสาหกิจ",
    "educationCode": "",
    "education": "",
    "riskScore": 1,
    "riskProfileLevel": "5",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 18,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "5",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "3405",
    "openDate": "2008-02-22",
    "existingProducts": [
      {
        "name": "Deposit Account",
        "amount": 936435.3,
        "type": "deposit"
      },
      {
        "name": "Loan (LNLWCL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "ES-TM",
        "amount": 7371.82,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 1000000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "ES-TM",
    "unitBalance": 506.1222,
    "nav": 14.5653,
    "amount": 7371.82,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 389776,
        "outflow": 232152
      },
      {
        "month": "Nov",
        "inflow": 145016,
        "outflow": 84528
      },
      {
        "month": "Dec",
        "inflow": 467818,
        "outflow": 289462
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[6], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" },
      { ...MOCK_PRODUCT_POOL[1], reason: "ได้รับสิทธิประโยชน์ทางภาษี" },
      { ...MOCK_PRODUCT_POOL[8], reason: "เพื่อการเกษียณอายุอย่างมีความสุข" }
    ],
  },
  {
    "id": "3570000019627",
    "cif": "3570000019627",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Shine",
    "lastName": "Amy",
    "firstNameTH": "แวววาว",
    "lastNameTH": "เอมี่",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 45,
    "birthDate": "1981-02-09",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 18,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "4",
    "monthlyIncomeLevel": "LEVEL4",
    "openBranchCode": "44",
    "openDate": "2008-03-14",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 421979.09,
        "type": "savings"
      },
      {
        "name": "Loan (LNECNT01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GQE-A",
        "amount": 2077372.59,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 100000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL GQE-A",
    "unitBalance": 0,
    "nav": 10.4611,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 83573,
        "outflow": 57275
      },
      {
        "month": "Nov",
        "inflow": 88802,
        "outflow": 45676
      },
      {
        "month": "Dec",
        "inflow": 79691,
        "outflow": 42890
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[3], reason: "เพื่อเป็นหลักประกันในอนาคต" },
      { ...MOCK_PRODUCT_POOL[11], reason: "ลงทุนในสินทรัพย์ที่มีคุณภาพ" },
      { ...MOCK_PRODUCT_POOL[10], reason: "ได้รับสิทธิประโยชน์ทางภาษี" }
    ],
  },
  {
    "id": "3520000011010",
    "cif": "3520000011010",
    "prefixTH": "นางสาว",
    "prefixEN": "MISS",
    "firstName": "Joy",
    "lastName": "Brian",
    "firstNameTH": "สุขใจ",
    "lastNameTH": "ไบรอัน",
    "nationalityCode": "TH",
    "residentCountryCode": "TH",
    "age": 47,
    "birthDate": "1979-02-28",
    "gender": "F",
    "maritalStatus": "Single",
    "occupationCode": "40",
    "occupation": "พนักงานบริษัท",
    "educationCode": "8",
    "education": "8",
    "riskScore": 1,
    "riskProfileLevel": "4",
    "vulnerableFlag": false,
    "vulnerableDetail": "",
    "yearsWithBank": 20,
    "segment": "MASS",
    "monthlyIncomeRangeCode": "3",
    "monthlyIncomeLevel": "LEVEL5",
    "openBranchCode": "76",
    "openDate": "2006-11-29",
    "existingProducts": [
      {
        "name": "Savings Account",
        "amount": 1140369.47,
        "type": "savings"
      },
      {
        "name": "Loan (LNPCWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL TREASURY",
        "amount": 4259649.02,
        "type": "investment"
      },
      {
        "name": "Government Bond",
        "amount": 10000,
        "type": "investment"
      }
    ],
    "address": "Bangkok, Thailand",
    "fxRiskFlag": "Y",
    "openFnxFromFlag": "Y",
    "fundCode": "PRINCIPAL TREASURY",
    "unitBalance": 0,
    "nav": 12.2855,
    "amount": 0,
    "cashFlow": [
      {
        "month": "Oct",
        "inflow": 251718,
        "outflow": 160130
      },
      {
        "month": "Nov",
        "inflow": 191745,
        "outflow": 125274
      },
      {
        "month": "Dec",
        "inflow": 359040,
        "outflow": 210698
      }
    ],
    productRecommendations: [
      { ...MOCK_PRODUCT_POOL[8], reason: "เพื่อเป็นหลักประกันในอนาคต" },
      { ...MOCK_PRODUCT_POOL[4], reason: "เหมาะสำหรับการออมระยะยาว" },
      { ...MOCK_PRODUCT_POOL[5], reason: "เพื่อเพิ่มโอกาสในการรับผลตอบแทนที่สูงขึ้น" }
    ],
  }
];


export const mockProducts: Product[] = [
  {
    id: 'P001',
    name: 'CIMB Principal Global Equity Fund',
    category: 'fund',
    duration: '3+ years',
    rating: 5,
    interestRate: 12.5,
    minInvestment: 100000,
    features: [
      'Global diversification',
      'Professional fund management',
      'Dividend reinvestment',
      'Online tracking',
    ],
    recommended: true,
    riskLevel: 'high',
    description: 'Invest in global equities for long-term growth potential',
  },
  {
    id: 'P002',
    name: 'CIMB Thai Fixed Income Fund',
    category: 'fund',
    duration: '1-3 years',
    rating: 4,
    interestRate: 4.5,
    minInvestment: 50000,
    features: [
      'Stable returns',
      'Lower volatility',
      'Monthly dividends',
      'Capital preservation',
    ],
    recommended: false,
    riskLevel: 'low',
    description: 'Steady income through Thai government and corporate bonds',
  },
  {
    id: 'P003',
    name: 'CIMB Balanced Growth Portfolio',
    category: 'fund',
    duration: '3+ years',
    rating: 4,
    interestRate: 8.2,
    minInvestment: 100000,
    features: [
      '60% equity / 40% bonds',
      'Automatic rebalancing',
      'Risk-adjusted returns',
      'Quarterly reports',
    ],
    recommended: true,
    riskLevel: 'medium',
    description: 'Balanced approach for moderate risk tolerance',
  },
  {
    id: 'P004',
    name: 'CIMB Retirement Plus Plan',
    category: 'insurance',
    duration: '10+ years',
    rating: 5,
    interestRate: 6.8,
    minInvestment: 5000,
    features: [
      'Tax benefits',
      'Life coverage included',
      'Flexible premiums',
      'Guaranteed returns',
    ],
    recommended: true,
    riskLevel: 'low',
    description: 'Secure your retirement with guaranteed income',
  },
  {
    id: 'P005',
    name: 'CIMB High Yield Savings',
    category: 'savings',
    duration: 'Flexible',
    rating: 3,
    interestRate: 2.5,
    minInvestment: 0,
    features: [
      'No minimum balance',
      'Instant access',
      'Online banking',
      'Auto-save feature',
    ],
    recommended: false,
    riskLevel: 'low',
    description: 'Flexible savings with competitive interest rates',
  },
];

export const mockScenarios: Scenario[] = [
  {
    id: 'S001',
    title: 'Retirement Planning',
    description: 'Build a secure nest egg for your golden years with stable, long-term investments',
    icon: 'umbrella',
    recommendedProducts: ['P004', 'P002'],
    projectedReturn: 6.5,
    timeHorizon: '10-20 years',
  },
  {
    id: 'S002',
    title: 'Wealth Growth',
    description: 'Maximize returns through diversified global investments for aggressive growth',
    icon: 'trending-up',
    recommendedProducts: ['P001', 'P003'],
    projectedReturn: 10.5,
    timeHorizon: '5-10 years',
  },
  {
    id: 'S003',
    title: 'Education Fund',
    description: 'Save for your children\'s education with balanced risk and steady returns',
    icon: 'graduation-cap',
    recommendedProducts: ['P003', 'P002'],
    projectedReturn: 7.2,
    timeHorizon: '5-15 years',
  },
];

export const mockBranches: Branch[] = [
  {
    id: 'B001',
    name: 'CIMB Sukhumvit Branch',
    address: '123 Sukhumvit Road, Khlong Toei, Bangkok 10110',
    distance: 0.5,
    hours: 'Mon-Fri: 9:30 AM - 3:30 PM',
    phone: '+66 2 123 4567',
    coordinates: { x: 30, y: 40 },
    services: ['Personal Banking', 'Investment Services', 'Loan Services', 'Safe Deposit'],
  },
  {
    id: 'B002',
    name: 'CIMB Rama 9 Branch',
    address: '456 Rama 9 Road, Huai Khwang, Bangkok 10320',
    distance: 2.3,
    hours: 'Mon-Fri: 9:30 AM - 3:30 PM',
    phone: '+66 2 234 5678',
    coordinates: { x: 65, y: 55 },
    services: ['Personal Banking', 'Business Banking', 'Investment Services'],
  },
  {
    id: 'B003',
    name: 'CIMB Silom Branch',
    address: '101 Silom Road, Bang Rak, Bangkok 10500',
    distance: 4.1,
    hours: 'Mon-Fri: 9:30 AM - 3:30 PM',
    phone: '+66 2 345 6789',
    coordinates: { x: 45, y: 70 },
    services: ['Personal Banking', 'Priority Banking', 'Investment Services', 'Insurance'],
  },
  {
    id: 'B004',
    name: 'CIMB Phahonyothin Branch',
    address: '789 Phahonyothin Road, Chatuchak, Bangkok 10400',
    distance: 6.8,
    hours: 'Mon-Fri: 9:30 AM - 3:30 PM',
    phone: '+66 2 456 7890',
    coordinates: { x: 20, y: 25 },
    services: ['Personal Banking', 'Loan Services'],
  },
];




export const findCustomerByName = (firstName: string, lastName: string): Customer | undefined => {
  return mockCustomers.find(
    (c) =>
      c.firstName.toLowerCase() === firstName.toLowerCase() &&
      c.lastName.toLowerCase() === lastName.toLowerCase()
  );
};

export const findCustomerById = (id: string): Customer | undefined => {
  return mockCustomers.find((c) => c.id === id);
};

export const getRecommendedProducts = (riskScore: number): Product[] => {
  if (riskScore <= 3) {
    return mockProducts.filter((p) => p.riskLevel === 'low');
  } else if (riskScore <= 6) {
    return mockProducts.filter((p) => p.riskLevel === 'medium' || p.riskLevel === 'low');
  } else {
    return mockProducts.filter((p) => p.riskLevel === 'high' || p.riskLevel === 'medium');
  }
};

