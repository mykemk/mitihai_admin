import React from 'react'
import Barchart from "../charts/BarChart";

const DashboardChart = () => {
    return (<Barchart
              labels={[
                "Partners",
                "Members",
                "Users",
                "Products",
                "Events",
                "Trees",
              ]}
              datasets={[
                {
                  label: "Totals",
                  data: [500, 450, 143, 80, 100, 150],
                  colors: [
                    "#EB532D",
                    "#7157D9",
                    "#A854A8",
                    "#9BBF30",
                    "#BF8C0A",
                    "#238C2C",
                  ],
                },
              ]}
            />
    )
}

export default React.memo(DashboardChart)
