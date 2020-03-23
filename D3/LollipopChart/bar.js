let dimensions = {
    width: window.innerWidth * 0.9,
    height: 600,
    margin: {
        top: 20,
        right: 80,
        bottom: 30,
        left: 80,
    },
};

dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

var svg = d3.select("figure#chart")
    .append("svg")
    // .attr("width", dimensions.width)
    // .attr("height", dimensions.height)
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .append("g") // group objects
    .attr("transform", `translate(${dimensions.margin.left}, ${dimensions.margin.top})`);

// think scale as function f(x) = something
var xScale = d3.scaleLinear()
    .range([0, dimensions.boundedWidth]);

var yScale = d3.scaleBand()
    .range([0, dimensions.boundedHeight])
    .padding(0.3);

var rowConverter = function(d) {
    return {
        genre: d.genre,
        votes: +d.count // int use +
    }
};

// var rowConverter2 = (d) => {
//     return {
//         genre: d.genre,
//         votes: +d.count
//     }
// };

// loading data in d3v4
// d3.csv("data.csv", rowConverter, function(data) {
    // do stuff with data
// });

// loading data in d3v5
d3.csv("data.csv", rowConverter)
    .then(
        // chart goes here
        function(data) {
            // console.log(data);

            // update the domain of xscale with d3.extent
            // xScale.domain(d3.extent(data, function(d) {return d.votes;}));
            xScale.domain([0, d3.max(data, d => d.votes) * 1.20]);

            yScale.domain(data.map(d => d.genre));

            var xAxis = svg.append("g")
                .attr("class", "x axis")
                .call(d3.axisBottom(xScale)) // axisTop
                .attr("transform", `translate(0, ${dimensions.boundedHeight})`);

            var xAxisText = xAxis.selectAll("text")
                .attr("class", "axis_text");

            var bars = svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("y", d => yScale(d.genre))
                .attr("width", d => xScale(d.votes))
                .attr("height", yScale.bandwidth())
                .attr("fill", "#bada55");

            var yAxis = svg.append("g")
                .attr("class", "y axis")
                .call(d3.axisLeft(yScale));
                
            var yAxisText = yAxis.selectAll("text")
                .attr("class", "axis_text");
        }
    );
