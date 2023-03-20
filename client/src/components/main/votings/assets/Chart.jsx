import { Paper, Box, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Chart = ({ data }) => {
    const COLORS = ["#80A92A","#0D2A47"];
    // console.log(data)
    return <>
        <Paper 
    
            sx={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
                alignItems: "center",
                // padding:"8px",
                // border:"2px solid red"
                //   backgroundColor:"grey"
            }}
            elevation={0}
        >
            <Box sx={{}}>
                <PieChart width={60} height={60}  >
                    <Pie
                        data={data}
                        //  color="#000000"
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={30}
                        innerRadius={20}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    {/* <Legend /> */}
                </PieChart>

            </Box>
            <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                    fontFamily: "Roboto",
                    // backgroundColor: "gray",
                    fontSize: "18px",
                    position: "absolute",
                    display: "flex",
                    left: "10px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    color: "rgb(93, 108, 116)"
                }}>
                    <span style={{color:"#FFBB28"}}>{data[0].value}</span>/<span style={{color:"#AF19FF"}}>{data[1].value}</span>
            </Box>
            <Box
                sx={{
                    color: "rgb(93, 108, 116)",
                    fontSize: "16px",
                    ml: "16px"
                }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Box style={{ width: "16px", height: "16px", backgroundColor: "#80A92A", borderRadius: "5px" }}></Box>
                    Approvals
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }} >
                    <Box style={{ width: "16px", height: "16px", backgroundColor: "#0D2A47", borderRadius: "5px" }}></Box>
                    Disapprovals
                </Box>
            </Box>
        </Paper>
    </>
}

export default Chart