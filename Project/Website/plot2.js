let dimensions2 = {
  width: window.innerWidth * 0.9,
  height: 650,
  margin: {
    top: 10,
    right: 0,
    bottom: 0,
    left: 10,
  },
};

dimensions2.boundedWidth = dimensions2.width - dimensions2.margin.left - dimensions2.margin.right;
dimensions2.boundedHeight = dimensions2.height - dimensions2.margin.top - dimensions2.margin.bottom;

d3.csv('Data/category-new.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.group = +d.group;
    if (d.category == "alcohol") {
        d.category = "alcohol related";
    } else if (d.category == "crewlabel") {
        d.category = "crew / label";
    } else if (d.category == "culture") {
        d.category = "culture related";
    } else {
        d.category = d.category;
    }
});

let svg = d3.select("#plot2")
    .append("svg")
    // .attr("width", dimensions.boundedWidth)
    // .attr("height", dimensions.boundedHeight);
    .attr('viewBox', `0 0 ${dimensions2.width} ${dimensions2.height}`)
      .append('g')
      .attr('transform', `translate(${dimensions2.margin.left },${dimensions2.margin.top})`);

let x = d3.scaleOrdinal()
    .domain([1,2,3,4,5,6,7,8,9,10])
    .range([120, 220, 320, 420, 520, 620, 720, 820, 920, 1020]);

let r = d3.scaleLinear()
    .domain([2, 1151])
    .range([10, 100]);

let color = d3.scaleOrdinal()
    .domain([1,2,3,4,5,6,7,8,9,10])
    //.range(["#6e40aa","#bf3caf","#fe4b83","#ff7847","#e2b72f","#aff05b","#4c6edb","#23abd8","#1ddfa3","#52f667"]);
    //.range(["#6e40aa","#c83dac","#ff5375","#ff8c38","#c9d33a","#79f659","#28ea8d","#1eb8d0","#4775de","#6e40aa"]);
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);

var div = d3.select("#plot2").append("div")	
    .attr("class", "tooltip")		
    .style("opacity", 0);

  var Tooltip = d3.select("#plot2")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip");

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "#343434")
      .style("opacity", 1)
  };
  var mousemove = function(d) {
    Tooltip
      .html("<b>category: </b>" + d.category + "<br>" + "<b>word: </b>" + d.word + "<br>" + "<b>count: </b>" + d.count)
      .style("left", (d3.event.pageX - 60) + "px")
      .style("top", (d3.event.pageY + 20) + "px")
  };
  var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("opacity", 1)
  };

let node = svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("r", function (d) {
        return r(d.count * 1.2);
      })
      .attr("cx", dimensions2.boundedWidth)
      .attr("cy", dimensions2.boundedHeight)
      .style("fill", function(d){ return color(d.group)})
      .style("fill-opacity", 0.8)
      .attr("stroke", "#343434")
      .style("stroke-width", 2)
      .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
      .call(d3.drag() // call specific function when circle is dragged
           .on("start", dragstarted)
           .on("drag", dragged)
           .on("end", dragended));
  
// Features of the forces applied to the nodes:
var simulation = d3.forceSimulation()
    .force("x", d3.forceX().strength(0.5).x( function(d){ return x(d.group) } ))
    .force("y", d3.forceY().strength(0.1).y( dimensions2.boundedHeight/1.5 ))
    .force("center", d3.forceCenter().x((dimensions2.boundedWidth+dimensions.margin.left)/2).y(dimensions2.boundedHeight / 2)) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(.1).radius(35).iterations(1)); // Force that avoids circle overlapping

// Apply these forces to the nodes and update their positions.
// Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
simulation
    .nodes(data)
    .on("tick", function(d){
      node
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
    });

// What happens when a circle is dragged?
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(.03).restart();
  d.fx = d.x;
  d.fy = d.y;
};
function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
};
function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(.03);
  d.fx = null;
  d.fy = null;
};


  });