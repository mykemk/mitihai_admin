export const getWeeklySales = () => {
  let data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Sales",
        data: [1000, 1235, 1500, 1300, 1240, 1356, 1800],
        color: "black",
        background: "#008075",
      },
      {
        label: "Orders",
        data: [1235, 1000, 1300, 1500, 1350, 1240, 1700],
        color: "black",
        background: "silver",
      },
    ],
  };
  return data;
};
//console.log(getWeeklySales())

export const getCategorySales = () => {
  let data = {
    labels: ["Lifestyle", "Kitchen", "Farm", "Fashion", "Health"],
    datasets: [
      {
        label: "Category Sales",
        data: [1000, 1235, 1500, 1300, 1240],
        color: ["#B83211", "#DB2C6F", "#8F398F", "#7157D9", "#29A634"],
      },
    ],
  };
  return data;
};

export const getMembershipTrends = () => {
  let data = {
    labels: [
      "January",
      "Feb",
      "March",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Members",
        data: [100, 150, 200, 550, 300, 230, 50, 90, 10, 70, 160, 190],
        colors: "#9E2B0E",
      },
    ],
  };
  return data;
};
export const getPartnershipTrends = () => {
  let data = {
    labels: [
      "January",
      "Feb",
      "March",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Partners",
        data: [150, 120, 200, 550, 300, 500, 130, 70, 10, 90, 190, 160],
        colors: "#728C23",
      },
    ],
  };
  return data;
};

export const getMemberCategories = () => {
  let data = {
    labels: ["Gold", "Custom", "Vendors"],
    datasets: [
      {
        label: "Category Memberships",
        data: [1000, 1235, 1500],
        color: ["gold", "#DB2C6F", "#B83211"],
      },
    ],
  };
  return data;
};

export const getEventDetails = () => {
  let data = {
    labels: [
      "January",
      "Feb",
      "March",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Event",
        data: [5, 4, 7, 10, 8, 14, 6, 9, 8,0, 20, 19],
        colors: "#BF8C0A",
      },
    ],
  };
  return data;
};

export const getTreeDetails = () => {
  let data = {
    labels: [
      "January",
      "Feb",
      "March",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Trees Planted",
        data: [150, 120, 200, 550, 300, 500, 130, 70, 10, 90, 190, 160],
        colors: "#1D7324",
      },
    ],
  };
  return data;
};

export const getAnnualSales = () => {
  let data = {
    labels: [
      "January",
      "Feb",
      "March",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          1000,
          1235,
          1500,
          1300,
          1240,
          1356,
          1800,
          1500,
          1300,
          1240,
          1235,
        ],
        color: "#96622D",
        background: "#2458B3",
      },
      {
        label: "Orders",
        data: [
          1235,
          1000,
          1300,
          1500,
          1350,
          1240,
          1700,
          1000,
          1300,
          1500,
          1350,
          1000,
        ],
        color: "#87A629",
        background: "#669EFF",
      },
    ],
  };
  return data;
};
//console.log(getAnnualSales())
