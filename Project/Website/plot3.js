var width = window.innerWidth * 0.16,
    height = window.innerWidth * 0.16,
    margin = 0;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;


// JESSI

d3.csv('Data/jessi.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot30")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=uy4-gePx5xU")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

  svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Jessi' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// JVCKI WAI

d3.csv('Data/jvckiwai.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot31")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=ir7G_H0LFJw")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Jvcki Wai' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// LOCO

d3.csv('Data/loco.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot32")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=SqPVMqamjSk")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'LOCO' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// SIMON DOMINIC

d3.csv('Data/simond.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot33")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=9YXYTBLlXzc")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Simon Dominic' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// GRAY

d3.csv('Data/gray.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot34")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=oFvHoyLpCoQ")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'GRAY' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// PUNCHNELLO

d3.csv('Data/punchnello.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot35")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=Cs9VB2CzDiE")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Punchnello' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// WOO

d3.csv('Data/woo.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot36")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=n-H2R-hKyiQ")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Woo Won-jae' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// LOOPY

d3.csv('Data/loopy.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot37")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=Lg7AT7Cs4Ns")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Loopy' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});


// MINO

d3.csv('Data/mino.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot38")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=IlJHZJ8EqeA")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'MINO' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});


// YOUNG B

d3.csv('Data/youngb.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot39")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=G8RlzZ7uCYI")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'YOUNG B' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// PH-1

d3.csv('Data/ph1.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot310")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=oLXOr8WlFhY")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'pH-1' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// ASH ISLAND

d3.csv('Data/ashisland.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot311")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=rMQ20mMOOuM")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Ash Island' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// COOGIE

d3.csv('Data/coogie.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot312")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=QUpWfIT_sNU")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Coogie' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// HAON

d3.csv('Data/haon.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot313")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=HWl8XAOQnTg")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'HAON' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});


// KID MILLI

d3.csv('Data/kidmilli.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot314")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=xGxiqglTrN8")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Kid Milli' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// GIRIBOY

d3.csv('Data/giriboy.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot315")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=96es5i6FzDc")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Giriboy' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// SWINGS

d3.csv('Data/swings.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot316")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=OkzsLi18FOI")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Swings' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// THE QUIETT

d3.csv('Data/thequiett.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot317")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=1gXWp5yT81U")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'The Quiett' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// DPR LIVE

d3.csv('Data/dprlive.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot318")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=xfJPCenjZzY")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'DPR LIVE' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// ZICO

d3.csv('Data/zico.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot319")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=UuV2BmJ1p_I")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Zico' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// DOK2

d3.csv('Data/dok2.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot320")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=T-rNaRGGVLg")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Dok2' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// NAFLA

d3.csv('Data/nafla.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot321")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=pLpkaXIbsa4")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Nafla' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// OWEN

d3.csv('Data/owen.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot322")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=cWINhE5EEkY")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Owen Ovadoz' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// SIK-K

d3.csv('Data/sikk.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot323")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=1_BTuzaRHYU")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( '♥ Sik-K ♥' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// CHANGMO

d3.csv('Data/changmo.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot324")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=ngTZLvKauRE")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Changmo' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// JUSTHIS

d3.csv('Data/justhis.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot325")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=2B7GHO7sws4")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'JUSTHIS' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// DEAN

d3.csv('Data/dean.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot326")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=wKyMIrBClYw")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'DEAN' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// BEENZINO

d3.csv('Data/beenzino.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot327")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=5rvCbPJkmqs")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Beenzino' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// JAY PARK

d3.csv('Data/jaypark.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot328")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=8sZMrwM2Cec")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'Jay Park' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});

// BEWHY

d3.csv('Data/bewhy.csv', function (data) {
    console.log(data);
data.forEach(function(d, i){
    d.count = +d.count;
    d.num = +d.num;
});

let svg = d3.select("#plot329")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // Compute the position of each group on the pie:
  let pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.count; })
  let data_ready = pie(data)

  let color = d3.scaleOrdinal()
    .domain(data_ready)
    .range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);
  
  // The arc generator
  let arc = d3.arc()
    .innerRadius(radius * 0.4)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  let outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .append("a")
    .attr("xlink:href", "https://www.youtube.com/watch?v=ckZor7HRU1E")
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return color(d.data.num) })
    .attr("stroke", "#343434")
    .style("stroke-width", "2px")
    .style("opacity", 1)

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.word) ; return d.data.word } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "0em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.count) ; return d.data.count } )
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("fill", "#fcfaf1")
    .attr("dy", "1em")
    .attr("text-anchor", "middle")

    svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( 'BeWhy' )
      .attr("transform", "translate(" + 0 + "," + 0  + ")")
    .attr("dy", height/2.1)
    .attr("text-anchor", "middle");

});