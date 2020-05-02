let dimensions = {
    width: window.innerWidth * 0.9,
    height: 550,
    margin: {
      top: 0,
      right: 150,
      bottom: 60,
      left: 40,
    },
  };
  
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;
  

  var ctrls, config = {
    manyPoints: false,
    sorting: "maxToMin",
    reshuffle: function() {
      if (config.sorting === "shuffled") {
        renewData();
        drawBeeswarm();
      }
    },
    radius: 20,
    orientation: "horizontal",
    side: "symetric",
    strategy: "none"
  };

  let rowConverter = function (d) {
    return {
      word: d.word,
      value: +d.count,
      count: Math.log10(+d.count / 1700),
      num: +d.num,
      initial: d.initial
    };
  };
  
  d3.csv('Data/top100.csv', rowConverter, function (data) {
      console.log(data);
    let svg = d3
      .select('#plot1')
      .append('svg')
      .attr('viewBox', `0 0 ${dimensions.width} ${dimensions.height}`)
      .append('g')
      .attr('transform', `translate(${dimensions.margin.left},${dimensions.margin.top})`);
  
    // x scale
    let x = d3.scaleLinear()
      .domain([0, 1])
      .range([0, dimensions.boundedWidth]);


      svg.append('line')
      .attr('x1', 0 - dimensions.margin.left)
      .attr('x2', dimensions.width)
      .attr('y1', dimensions.boundedHeight / 2)
      .attr('y2', dimensions.boundedHeight / 2)
      .attr("stroke-width", 3)
      .style('stroke', "#cacaca");


    //   let xBand = d3.scaleBand()
    //   .domain(["1548", "1573.5", "51"])
    //   .range([31.492880527309964, 1296])
    //   .padding([0]);

    //   svg
    //   .append("g")
    //   .attr("transform", "translate(0,500)") 
    //   .call(d3.axisBottom(xBand).ticks(2));

    //   svg
    //   .append("rect")
    // .attr("x", xBand("1548") )
    // .attr("y",200)
    // .attr("height", 150)
    // .attr("width", 2 )
    // .style("fill", "#69b3a2")
    // .style("opacity", 0.5);
  
    // generate the swarm
    let swarm = d3.beeswarm()
      .data(data)
      .distributeOn(function (d) {
        return - x(d.count) * 0.7;
      })
      .radius(15)
      .orientation('horizontal')
      .side('symetric')
      .arrange();

      var myColor = d3.scaleOrdinal().domain(data)
      .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab", "#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#bebada","#fb8072","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f", "#1b9e77","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]);

      var div = d3.select("#plot1").append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);

    var Tooltip = d3.select("#plot1")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip");
  
    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      Tooltip
        .style("opacity", 1)
      d3.select(this)
        .style("stroke", "#343434")
        .style("stroke-width", 2)
        .style("opacity", 1)
        .attr("r", 20)
    }
    var mousemove = function(bee) {
      Tooltip
        .html("<b>word: </b>" + bee.datum.word + "<br>" + "<b>count: </b>" + bee.datum.value)
        .style("left", (d3.event.pageX - 60) + "px")
        .style("top", (d3.event.pageY + 20) + "px")
    }
    var mouseleave = function(d) {
      Tooltip
        .style("opacity", 0)
      d3.select(this)
        .style("stroke", "none")
        .style("opacity", 1)
        .attr("r", 15)
    }
    
    // draw the swarm
    svg.selectAll('circle')
      .data(swarm)
      .enter()
      .append('circle')
      .attr('cx', function (bee) {
        return bee.x;
      })
      .attr('cy', function (bee) {
        return (dimensions.boundedHeight / 2) + bee.y *1.5;
      })
      .attr('r', 15)
      .attr("fill", function(bee){
          return myColor(bee.datum.num);
       })
       .on("mouseover", mouseover)
       .on("mousemove", mousemove)
       .on("mouseleave", mouseleave);


      svg.selectAll("text")
      .data(swarm)
      .append("text")
       .attr("dy", "-1.6em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return "Hashtag:";
      })
      .attr("font-size", function(d) {
        return 1;
      });
       console.log(svg.text)
  });