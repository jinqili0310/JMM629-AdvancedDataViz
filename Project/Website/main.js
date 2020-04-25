let dimensions = {
    width: window.innerWidth * 0.9,
    height: 700,
    margin: {
      top: 0,
      right: 150,
      bottom: 60,
      left: 40,
    },
  };
  
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;
  
  const jitterValue = 300;
  let jitter = function () {
    let a = Math.random();
    let direction
    if (a > 0.5) {
      direction = 1;
    } else {
      direction = -1;
    }
    return Math.random() * jitterValue * direction;
  };

  var ctrls, config = {
    manyPoints: false,
    sorting: "maxToMin",
    reshuffle: function() {
      if (config.sorting === "shuffled") {
        renewData();
        drawBeeswarm();
      }
    },
    radius: 4,
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
  
    // r scale
    // let r = d3.scaleLinear()
    //   .domain([1, 15])
    //   .range([5, 20]);
  
    // generate the swarm
    let swarm = d3.beeswarm()
      .data(data)
      .distributeOn(function (d) {
        return - x(d.count) * 0.7;
      })
      .radius(10)
      .orientation('horizontal')
      .side('symetric')
      .arrange();
  
    // svg.append('line')
    //   .attr('x1', 0 - dimensions.margin.left)
    //   .attr('x2', dimensions.width)
    //   .attr('y1', dimensions.boundedHeight / 2)
    //   .attr('y2', dimensions.boundedHeight / 2)
    //   .style('stroke', "grey");

      var myColor = d3.scaleOrdinal().domain(data)
      //.range(["#6e40aa","#7140ab","#743fac","#773fad","#7a3fae","#7d3faf","#803eb0","#833eb0","#873eb1","#8a3eb2","#8d3eb2","#903db2","#943db3","#973db3","#9a3db3","#9d3db3","#a13db3","#a43db3","#a73cb3","#aa3cb2","#ae3cb2","#b13cb2","#b43cb1","#b73cb0","#ba3cb0","#be3caf","#c13dae","#c43dad","#c73dac","#ca3dab","#cd3daa","#d03ea9","#d33ea7","#d53ea6","#d83fa4","#db3fa3","#de3fa1","#e040a0","#e3409e","#e5419c","#e8429a","#ea4298","#ed4396","#ef4494","#f14592","#f34590","#f5468e","#f7478c","#f9488a","#fb4987","#fd4a85","#fe4b83","#ff4d80","#ff4e7e","#ff4f7b","#ff5079","#ff5276","#ff5374","#ff5572","#ff566f","#ff586d","#ff596a","#ff5b68","#ff5d65","#ff5e63","#ff6060","#ff625e","#ff645b","#ff6659","#ff6857","#ff6a54","#ff6c52","#ff6e50","#ff704e","#ff724c","#ff744a","#ff7648","#ff7946","#ff7b44","#ff7d42","#ff8040","#ff823e","#ff843d","#ff873b","#ff893a","#ff8c38","#ff8e37","#fe9136","#fd9334","#fb9633","#f99832","#f89b32","#f69d31","#f4a030","#f2a32f","#f0a52f","#eea82f","#ecaa2e","#eaad2e","#e8b02e","#e6b22e","#e4b52e","#e2b72f","#e0ba2f","#debc30","#dbbf30","#d9c131","#d7c432","#d5c633","#d3c934","#d1cb35","#cece36","#ccd038","#cad239","#c8d53b","#c6d73c","#c4d93e","#c2db40","#c0dd42","#bee044","#bce247","#bae449","#b8e64b","#b6e84e","#b5ea51","#b3eb53","#b1ed56","#b0ef59","#adf05a","#aaf159","#a6f159","#a2f258","#9ef258","#9af357","#96f357","#93f457","#8ff457","#8bf457","#87f557","#83f557","#80f558","#7cf658","#78f659","#74f65a","#71f65b","#6df65c","#6af75d","#66f75e","#63f75f","#5ff761","#5cf662","#59f664","#55f665","#52f667","#4ff669","#4cf56a","#49f56c","#46f46e","#43f470","#41f373","#3ef375","#3bf277","#39f279","#37f17c","#34f07e","#32ef80","#30ee83","#2eed85","#2cec88","#2aeb8a","#28ea8d","#27e98f","#25e892","#24e795","#22e597","#21e49a","#20e29d","#1fe19f","#1edfa2","#1ddea4","#1cdca7","#1bdbaa","#1bd9ac","#1ad7af","#1ad5b1","#1ad4b4","#19d2b6","#19d0b8","#19cebb","#19ccbd","#19cabf","#1ac8c1","#1ac6c4","#1ac4c6","#1bc2c8","#1bbfca","#1cbdcc","#1dbbcd","#1db9cf","#1eb6d1","#1fb4d2","#20b2d4","#21afd5","#22add7","#23abd8","#25a8d9","#26a6db","#27a4dc","#29a1dd","#2a9fdd","#2b9cde","#2d9adf","#2e98e0","#3095e0","#3293e1","#3390e1","#358ee1","#378ce1","#3889e1","#3a87e1","#3c84e1","#3d82e1","#3f80e1","#417de0","#437be0","#4479df","#4676df","#4874de","#4a72dd","#4b70dc","#4d6ddb","#4f6bda","#5169d9","#5267d7","#5465d6","#5663d5","#5761d3","#595fd1","#5a5dd0","#5c5bce","#5d59cc","#5f57ca","#6055c8","#6153c6","#6351c4","#6450c2","#654ec0","#664cbe","#674abb","#6849b9","#6a47b7","#6a46b4","#6b44b2","#6c43af","#6d41ad","#6e40aa"]);
      .range(["#6e40aa","#bf3caf","#fe4b83","#ff7847","#e2b72f","#aff05b","#4c6edb","#23abd8","#1ddfa3","#52f667","#aff05b","#163d4e","#54792f","#d07e93","#c1caf3","#23171b","#2f9df5","#dedd32","#f65f18","#900c00","#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
      //.range(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]);
      //.range(["gold", "blue", "green", "yellow", "black", "grey", "darkgreen", "pink", "brown", "slateblue", "grey1", "orange"]);

      var div = d3.select("body").append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);

    var Tooltip = d3.select("body")
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
        .attr("r", 15)
    }
    var mousemove = function(bee) {
      Tooltip
        .html(bee.datum.word + "<br>" + bee.datum.value)
        .style("left", (d3.event.pageX - 60) + "px")
        .style("top", (d3.event.pageY + 20) + "px")
    }
    var mouseleave = function(d) {
      Tooltip
        .style("opacity", 0)
      d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
        .attr("r", 10)
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
        return (dimensions.boundedHeight / 2) + jitter();
      })
      .attr('r', 10)
      //.style('fill', 'rgba(0,0,0,0.2)')
      .attr("fill", function(bee){
          return myColor(bee.datum.num);
       })
       .on("mouseover", mouseover)
       .on("mousemove", mousemove)
       .on("mouseleave", mouseleave);

    //    svg.selectAll("text")
    //    .data(swarm)
    //    .append("text")
    //    .attr("dx",12)
    //    .attr("dy",".35em")
    //    .text(function(bee){
    //        return bee.datum.initial;
    //    });
    //    console.log(svg.text)
  });