export const tuitionRates = {
    2023_24: {
        undergraduate: {
            usCitizensAndResidents: {
                // This is for 1 to 15 credits where the cost is per credit rather than a flat rate per semester
                costPerCredit: 1200,

                fullTimeCreditRange: [16, 22],
                costPerSemester: 18600,
                costPerYear: 37200,
            },
            nonUSResidents: {
                // This is for 1 to 15 credits where the cost is per credit rather than a flat rate per semester
                costPerCredit: 1350,

                fullTimeCreditRange: [16, 22],
                costPerSemester: 20690,
                costPerYear: 41380,
            },
        },
        graduate: {
            usCitizensAndResidents: {
                // This is for 1 to 15 credits where the cost is per credit rather than a flat rate per semester
                costPerCredit: 1290,

                fullTimeCreditRange: [12, 18],
                costPerSemester: 15500,
                costPerYear: 31000,
            },
            nonUSResidents: {
                // This is for 1 to 15 credits where the cost is per credit rather than a flat rate per semester
                costPerCredit: 1425,

                fullTimeCreditRange: [12, 18],
                costPerSemester: 16990,
                costPerYear: 33980,
            },
        },
    },
};

export const housingRates = {};
export const costOfAttendance = {};
