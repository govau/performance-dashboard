import d3 from 'd3';

function stackByPercentage(data){
  let transformed = d3.layout.stack()(data);
  // need refactor
  transformed = transformed.map((c) => c.map((d, j) => {
      return {

          x: d.x,
          y: d.y === null ?
                null :
                d.y/(transformed[transformed.length - 1][j].y + transformed[transformed.length - 1][j].y0) * 100,
          name: d.name,
          color: d.color,
          id: d.id,
          altColor: d.altColor,
          altColorDark: d.altColorDark
      }
  }));
  return transformed;
}
module.exports = stackByPercentage;
