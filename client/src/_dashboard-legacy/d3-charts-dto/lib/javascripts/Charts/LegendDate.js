let $ = window.jQuery || {};

class LegendDate {
  constructor(options) {
    this.chart = options.chart;
    this.widget_id = options.widget_id;

    this.container = this.chart.element
      .insert('div', '.chart')
      .attr('class', 'legend_label');

    this.date = this.container.append('div').attr('class', 'date');

    $(window).on(`update:legend_label:${this.widget_id}`, (e, string) => {
      this.date.text(string);
    });
  }
}

export default LegendDate;
