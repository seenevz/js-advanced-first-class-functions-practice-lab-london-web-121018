// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(driver => {
        console.log(driver.name)
    });
}

function logDriversByHometown(drivers, homeTown) {
    let filteredDrivers = drivers.filter(driver => driver.hometown === homeTown)
    // debugger
    logDriverNames(filteredDrivers)
};

function driversByRevenue(drivers) {
    const numberSort = function (driver1, driver2) {
        return driver1.revenue - driver2.revenue
        };
        // debugger
        return drivers.slice().sort(numberSort);
    };

    function driversByName(drivers) {
        const nameSort = function (driver1, driver2) {
            return driver1.name.localeCompare(driver2.name)
        };
        return drivers.slice().sort(nameSort);
    };

    function totalRevenue(drivers) {
        const totalRev = function (total, driver) {
            return total += driver.revenue;
        };
        // debugger
        return drivers.reduce(totalRev, 0);
    };

    function averageRevenue(drivers) {
        const revenue = totalRevenue(drivers);

        return revenue / drivers.length;
    }