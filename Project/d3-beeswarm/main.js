let dimensions = {
  width: window.innerWidth * 0.9,
  height: 600,
  margin: {
    top: 0,
    right: 150,
    bottom: 60,
    left: 40,
  },
};

dimensions.boundedWidth = dimensions.width -
  dimensions.margin.left -
  dimensions.margin.right
dimensions.boundedHeight = dimensions.height -
  dimensions.margin.top -
  dimensions.margin.bottom

const jitterValue = 100;
let jitter = function () {
  let a = Math.random();
  let direction
  if (a > 0.5) {
    direction = 1;
  } else {
    direction = -1;
  }
  return Math.random() * jitterValue * direction;
}
let rowConverter = function (d) {
  return {
    team: d.team,
    years_competing: +d.years_competing,
    championships: +d.championships,
    winningest: Math.log10(+d.winningest),
    rank: +d.rank
  };
};

d3.csv('data.csv', rowConverter, function (data) {
  let svg = d3
    .select('body')
    .append('svg')
    .attr('viewBox', `0 0 ${dimensions.width} ${dimensions.height}`)
    .append('g')
    .attr('transform', `translate(${dimensions.margin.left},${dimensions.margin.top})`);

  // x scale
  let x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, dimensions.boundedWidth]);

  // r scale
  let r = d3.scaleLinear()
    .domain([1, 15])
    .range([5, 20]);

  // generate the swarm
  let swarm = d3.beeswarm()
    .data(data)
    .distributeOn(function (d) {
      return -1 - x(d.winningest);
    })
    .radius(function (d) {
      return r(d.championships);
    })
    .orientation('horizontal')
    .side('symmetric')
    .arrange();

  svg.append('line')
    .attr('x1', 0 - dimensions.margin.left)
    .attr('x2', dimensions.width)
    .attr('y1', dimensions.boundedHeight / 2)
    .attr('y2', dimensions.boundedHeight / 2)
    .style('stroke', "#f9423a");

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
    .attr('r', function (bee) {
      return r(bee.datum.championships);
    })
    .style('fill', 'rgba(0,0,0,0.2)');
});