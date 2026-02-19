import type { Customer, Product, Scenario, Branch } from '@/types';

export const mockCustomers: Customer[] = [
  {
    "id": "3520000037309",
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
    "occupationCode": "1",
    "occupation": "1",
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
        "amount": 0,
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
        "inflow": 40407,
        "outflow": 23622
      },
      {
        "month": "Nov",
        "inflow": 40615,
        "outflow": 16247
      },
      {
        "month": "Dec",
        "inflow": 49025,
        "outflow": 25393
      }
    ]
  },
  {
    "id": "3550000039180",
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
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
        "inflow": 1085921,
        "outflow": 522920
      },
      {
        "month": "Nov",
        "inflow": 1085310,
        "outflow": 526353
      },
      {
        "month": "Dec",
        "inflow": 1386531,
        "outflow": 600808
      }
    ]
  },
  {
    "id": "3520000033328",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
        "type": "deposit"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL APDI-A",
        "amount": 0,
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
        "inflow": 224227,
        "outflow": 92483
      },
      {
        "month": "Nov",
        "inflow": 325174,
        "outflow": 175428
      },
      {
        "month": "Dec",
        "inflow": 447865,
        "outflow": 237732
      }
    ]
  },
  {
    "id": "3570000048485",
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
    "occupationCode": "42",
    "occupation": "นักบริหาร (อาชีพรับจ้างบริหาร)",
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
        "amount": 0,
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
        "inflow": 305731,
        "outflow": 188130
      },
      {
        "month": "Nov",
        "inflow": 193980,
        "outflow": 90503
      },
      {
        "month": "Dec",
        "inflow": 264020,
        "outflow": 142815
      }
    ]
  },
  {
    "id": "3570000026921",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
        "type": "deposit"
      },
      {
        "name": "Loan (LNECNT01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL DPLUS-A",
        "amount": 0,
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
        "inflow": 95195,
        "outflow": 61589
      },
      {
        "month": "Nov",
        "inflow": 89630,
        "outflow": 38554
      },
      {
        "month": "Dec",
        "inflow": 96052,
        "outflow": 42475
      }
    ]
  },
  {
    "id": "3550000010029",
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
    "occupationCode": "3",
    "occupation": "3",
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
        "amount": 0,
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
        "inflow": 86120,
        "outflow": 39475
      },
      {
        "month": "Nov",
        "inflow": 84428,
        "outflow": 35238
      },
      {
        "month": "Dec",
        "inflow": 98928,
        "outflow": 63150
      }
    ]
  },
  {
    "id": "3500000014594",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 17090,
        "outflow": 11954
      },
      {
        "month": "Nov",
        "inflow": 25429,
        "outflow": 17247
      },
      {
        "month": "Dec",
        "inflow": 17963,
        "outflow": 9808
      }
    ]
  },
  {
    "id": "3570000038145",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 30960,
        "outflow": 12596
      },
      {
        "month": "Nov",
        "inflow": 35876,
        "outflow": 22440
      },
      {
        "month": "Dec",
        "inflow": 34774,
        "outflow": 22542
      }
    ]
  },
  {
    "id": "3570000007370",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
        "type": "deposit"
      },
      {
        "name": "Loan (LNPCWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL USEQ-A",
        "amount": 0,
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
        "inflow": 49196,
        "outflow": 33201
      },
      {
        "month": "Nov",
        "inflow": 38492,
        "outflow": 18837
      },
      {
        "month": "Dec",
        "inflow": 37845,
        "outflow": 21942
      }
    ]
  },
  {
    "id": "3500000003469",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 39754,
        "outflow": 16577
      },
      {
        "month": "Nov",
        "inflow": 46467,
        "outflow": 23129
      },
      {
        "month": "Dec",
        "inflow": 34933,
        "outflow": 19747
      }
    ]
  },
  {
    "id": "3500000003339",
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
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
        "inflow": 1201777,
        "outflow": 828716
      },
      {
        "month": "Nov",
        "inflow": 1484428,
        "outflow": 797562
      },
      {
        "month": "Dec",
        "inflow": 1054514,
        "outflow": 461331
      }
    ]
  },
  {
    "id": "3500000038421",
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
    "occupationCode": "44",
    "occupation": "เกษียณ",
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
        "amount": 0,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL VNTG7M1",
        "amount": 0,
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
        "inflow": 98802,
        "outflow": 58542
      },
      {
        "month": "Nov",
        "inflow": 85044,
        "outflow": 45950
      },
      {
        "month": "Dec",
        "inflow": 90764,
        "outflow": 50434
      }
    ]
  },
  {
    "id": "3520000015152",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 178151,
        "outflow": 119329
      },
      {
        "month": "Nov",
        "inflow": 406608,
        "outflow": 275981
      },
      {
        "month": "Dec",
        "inflow": 303761,
        "outflow": 199504
      }
    ]
  },
  {
    "id": "3570000064993",
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GSTEP",
        "amount": 0,
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
        "inflow": 431694,
        "outflow": 295038
      },
      {
        "month": "Nov",
        "inflow": 479292,
        "outflow": 314513
      },
      {
        "month": "Dec",
        "inflow": 396354,
        "outflow": 224629
      }
    ]
  },
  {
    "id": "3570000031283",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 208279,
        "outflow": 121593
      },
      {
        "month": "Nov",
        "inflow": 104003,
        "outflow": 47652
      },
      {
        "month": "Dec",
        "inflow": 391564,
        "outflow": 176275
      }
    ]
  },
  {
    "id": "3500000059906",
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
    "occupationCode": "44",
    "occupation": "เกษียณ",
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
        "amount": 0,
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
        "inflow": 102624,
        "outflow": 44143
      },
      {
        "month": "Nov",
        "inflow": 445128,
        "outflow": 197912
      },
      {
        "month": "Dec",
        "inflow": 125321,
        "outflow": 76673
      }
    ]
  },
  {
    "id": "3500000020788",
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
        "type": "deposit"
      },
      {
        "name": "Loan (LNPCWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GLEADER-A",
        "amount": 0,
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
        "inflow": 97797,
        "outflow": 67815
      },
      {
        "month": "Nov",
        "inflow": 57790,
        "outflow": 40066
      },
      {
        "month": "Dec",
        "inflow": 71288,
        "outflow": 31347
      }
    ]
  },
  {
    "id": "3520000034350",
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
    "occupationCode": "79",
    "occupation": "เลขานุการ",
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
        "amount": 0,
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
        "inflow": 79651,
        "outflow": 43144
      },
      {
        "month": "Nov",
        "inflow": 79248,
        "outflow": 33066
      },
      {
        "month": "Dec",
        "inflow": 65398,
        "outflow": 35060
      }
    ]
  },
  {
    "id": "3510000004131",
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
    "occupationCode": "27",
    "occupation": "แพทย์",
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
        "amount": 0,
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
        "inflow": 205643,
        "outflow": 141934
      },
      {
        "month": "Nov",
        "inflow": 296242,
        "outflow": 130226
      },
      {
        "month": "Dec",
        "inflow": 483138,
        "outflow": 222628
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
    "occupationCode": "3",
    "occupation": "3",
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
        "amount": 0,
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
        "inflow": 47382,
        "outflow": 21044
      },
      {
        "month": "Nov",
        "inflow": 41619,
        "outflow": 23235
      },
      {
        "month": "Dec",
        "inflow": 32114,
        "outflow": 14735
      }
    ]
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
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
        "inflow": 486456,
        "outflow": 326524
      },
      {
        "month": "Nov",
        "inflow": 310985,
        "outflow": 168323
      },
      {
        "month": "Dec",
        "inflow": 368066,
        "outflow": 193189
      }
    ]
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
    "occupationCode": "3",
    "occupation": "3",
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
        "amount": 0,
        "type": "savings"
      },
      {
        "name": "Loan (LNLWCLT1)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "ES-TM",
        "amount": 0,
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
        "inflow": 422370,
        "outflow": 202245
      },
      {
        "month": "Nov",
        "inflow": 383892,
        "outflow": 218551
      },
      {
        "month": "Dec",
        "inflow": 151209,
        "outflow": 90647
      }
    ]
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
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
        "inflow": 375425,
        "outflow": 203512
      },
      {
        "month": "Nov",
        "inflow": 476657,
        "outflow": 206209
      },
      {
        "month": "Dec",
        "inflow": 280291,
        "outflow": 131145
      }
    ]
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
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
        "inflow": 92795,
        "outflow": 59695
      },
      {
        "month": "Nov",
        "inflow": 81453,
        "outflow": 50982
      },
      {
        "month": "Dec",
        "inflow": 98243,
        "outflow": 51272
      }
    ]
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
        "type": "savings"
      },
      {
        "name": "Loan (ODCASH01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GHEALTH-A",
        "amount": 0,
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
        "inflow": 63708,
        "outflow": 34249
      },
      {
        "month": "Nov",
        "inflow": 75433,
        "outflow": 48404
      },
      {
        "month": "Dec",
        "inflow": 68882,
        "outflow": 35752
      }
    ]
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
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
        "inflow": 262116,
        "outflow": 123834
      },
      {
        "month": "Nov",
        "inflow": 256744,
        "outflow": 146250
      },
      {
        "month": "Dec",
        "inflow": 178926,
        "outflow": 78776
      }
    ]
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
    "occupationCode": "27",
    "occupation": "แพทย์",
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
        "amount": 0,
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
        "inflow": 62567,
        "outflow": 42533
      },
      {
        "month": "Nov",
        "inflow": 91353,
        "outflow": 55057
      },
      {
        "month": "Dec",
        "inflow": 76409,
        "outflow": 34593
      }
    ]
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
    "occupationCode": "26",
    "occupation": "เภสัชกร",
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
        "amount": 0,
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
        "inflow": 59006,
        "outflow": 34130
      },
      {
        "month": "Nov",
        "inflow": 59740,
        "outflow": 39697
      },
      {
        "month": "Dec",
        "inflow": 71157,
        "outflow": 31390
      }
    ]
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 322609,
        "outflow": 143182
      },
      {
        "month": "Nov",
        "inflow": 248439,
        "outflow": 108961
      },
      {
        "month": "Dec",
        "inflow": 217814,
        "outflow": 120160
      }
    ]
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 98723,
        "outflow": 51483
      },
      {
        "month": "Nov",
        "inflow": 89020,
        "outflow": 46911
      },
      {
        "month": "Dec",
        "inflow": 95783,
        "outflow": 55137
      }
    ]
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
    "occupationCode": "6",
    "occupation": "6",
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
        "amount": 0,
        "type": "deposit"
      },
      {
        "name": "Loan (LNHLTL01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL FIRMF",
        "amount": 0,
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
        "inflow": 359077,
        "outflow": 197297
      },
      {
        "month": "Nov",
        "inflow": 296319,
        "outflow": 168252
      },
      {
        "month": "Dec",
        "inflow": 379545,
        "outflow": 256714
      }
    ]
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
        "type": "deposit"
      },
      {
        "name": "Loan (ODODNM01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "ABCA-A",
        "amount": 0,
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
        "inflow": 408054,
        "outflow": 242842
      },
      {
        "month": "Nov",
        "inflow": 462864,
        "outflow": 200616
      },
      {
        "month": "Dec",
        "inflow": 306569,
        "outflow": 189874
      }
    ]
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
    "occupationCode": "44",
    "occupation": "เกษียณ",
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
        "amount": 0,
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
        "inflow": 62407,
        "outflow": 41606
      },
      {
        "month": "Nov",
        "inflow": 51459,
        "outflow": 25246
      },
      {
        "month": "Dec",
        "inflow": 50367,
        "outflow": 33153
      }
    ]
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 468909,
        "outflow": 266551
      },
      {
        "month": "Nov",
        "inflow": 328236,
        "outflow": 134781
      },
      {
        "month": "Dec",
        "inflow": 141000,
        "outflow": 90980
      }
    ]
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
    "occupationCode": "5",
    "occupation": "5",
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
        "amount": 0,
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
        "inflow": 571940,
        "outflow": 266294
      },
      {
        "month": "Nov",
        "inflow": 599852,
        "outflow": 309188
      },
      {
        "month": "Dec",
        "inflow": 722791,
        "outflow": 474140
      }
    ]
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
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
        "inflow": 118278,
        "outflow": 69702
      },
      {
        "month": "Nov",
        "inflow": 243953,
        "outflow": 126288
      },
      {
        "month": "Dec",
        "inflow": 133774,
        "outflow": 65092
      }
    ]
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
    "occupationCode": "3",
    "occupation": "3",
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
        "amount": 0,
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
        "inflow": 180158,
        "outflow": 112126
      },
      {
        "month": "Nov",
        "inflow": 293262,
        "outflow": 123069
      },
      {
        "month": "Dec",
        "inflow": 174974,
        "outflow": 111879
      }
    ]
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
        "type": "savings"
      },
      {
        "name": "Loan (LNECNT01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL GQE-A",
        "amount": 0,
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
        "inflow": 60555,
        "outflow": 36978
      },
      {
        "month": "Nov",
        "inflow": 71126,
        "outflow": 35297
      },
      {
        "month": "Dec",
        "inflow": 97572,
        "outflow": 56967
      }
    ]
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
    "occupationCode": "4",
    "occupation": "4",
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
        "amount": 0,
        "type": "savings"
      },
      {
        "name": "Loan (LNPCWF01)",
        "amount": 0,
        "type": "loan"
      },
      {
        "name": "PRINCIPAL TREASURY",
        "amount": 0,
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
        "inflow": 311700,
        "outflow": 173172
      },
      {
        "month": "Nov",
        "inflow": 285059,
        "outflow": 177595
      },
      {
        "month": "Dec",
        "inflow": 440907,
        "outflow": 224526
      }
    ]
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

