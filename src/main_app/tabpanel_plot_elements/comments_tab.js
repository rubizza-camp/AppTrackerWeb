// jshint esversion:9
import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Plot from 'react-plotly.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const PieBarChart = (width, height, data) => (
  <Plot
    config={{ displayModeBar: false }}
    style={{ marginBottom: -10 }}
    key='2'
    data={[
      {
        values: [
          data.star_1.current.value,
          data.star_2.current.value,
          data.star_3.current.value,
          data.star_4.current.value,
          data.star_5.current.value
        ],
        labels: ['Star 1', 'Star 2', 'Star 3', 'Star 4', 'Star 5'],
        marker: { colors: ['#ff0034', '#eb0098', '#f200ff', '#a600eb', '#7e0dff'] },
        domain: { column: 0 },
        hoverinfo: 'label+percent+name',
        hole: 0.6,
        type: 'pie'
      }
    ]}
    layout={{
      title: data.star_1.current.date,
      margin: {
        l: 20,
        r: 20,
        b: 50,
        t: 35,
        pad: 0
      },
      showlegend: true,
      legend: {
        x: 0.8,
        y: 1,
        traceorder: 'normal',
        font: {
          family: 'sans-serif',
          size: 12
        }
      },
      width: width,
      height: height,
      font: {
        family: 'Roboto, monospace',
        size: 13,
        color: '#7f7f7f'
      }
    }}
  />
);

function loadMinMaxValueData() {
  var output = {
    android: {
      star_1: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_2: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_3: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_4: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_5: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      }
    },
    ios: {
      star_1: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_2: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_3: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_4: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      },
      star_5: {
        current: {
          date: undefined,
          value: undefined
        },
        min: {
          date: undefined,
          value: undefined
        },
        max: {
          date: undefined,
          value: undefined
        }
      }
    }
  };

  //Android
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == 'android') {
      // Находим процентное соотношение
      var sum =
        window.ratings[i].Rating1 +
        window.ratings[i].Rating2 +
        window.ratings[i].Rating3 +
        window.ratings[i].Rating4 +
        window.ratings[i].Rating5;
      var one_per = 100.0 / sum;
      var rat1per = window.ratings[i].Rating1 * one_per;
      var rat2per = window.ratings[i].Rating2 * one_per;
      var rat3per = window.ratings[i].Rating3 * one_per;
      var rat4per = window.ratings[i].Rating4 * one_per;
      var rat5per = window.ratings[i].Rating5 * one_per;

      if (output.android.star_1.current.value == undefined) {
        output.android.star_1.current.value = rat1per;
        output.android.star_2.current.value = rat2per;
        output.android.star_3.current.value = rat3per;
        output.android.star_4.current.value = rat4per;
        output.android.star_5.current.value = rat5per;

        output.android.star_1.current.date = window.ratings[i].Date;
        output.android.star_2.current.date = window.ratings[i].Date;
        output.android.star_3.current.date = window.ratings[i].Date;
        output.android.star_4.current.date = window.ratings[i].Date;
        output.android.star_5.current.date = window.ratings[i].Date;

        output.android.star_1.min.value = rat1per;
        output.android.star_2.min.value = rat2per;
        output.android.star_3.min.value = rat3per;
        output.android.star_4.min.value = rat4per;
        output.android.star_5.min.value = rat5per;

        output.android.star_1.max.value = rat1per;
        output.android.star_2.max.value = rat2per;
        output.android.star_3.max.value = rat3per;
        output.android.star_4.max.value = rat4per;
        output.android.star_5.max.value = rat5per;

        output.android.star_1.min.date = window.ratings[i].Date;
        output.android.star_2.min.date = window.ratings[i].Date;
        output.android.star_3.min.date = window.ratings[i].Date;
        output.android.star_4.min.date = window.ratings[i].Date;
        output.android.star_5.min.date = window.ratings[i].Date;

        output.android.star_1.max.date = window.ratings[i].Date;
        output.android.star_2.max.date = window.ratings[i].Date;
        output.android.star_3.max.date = window.ratings[i].Date;
        output.android.star_4.max.date = window.ratings[i].Date;
        output.android.star_5.max.date = window.ratings[i].Date;
      } else {
        if (output.android.star_1.max.value <= rat1per) {
          output.android.star_1.max.value = rat1per;
          output.android.star_1.max.date = window.ratings[i].Date;
        }
        if (output.android.star_1.min.value >= rat1per) {
          output.android.star_1.min.value = rat1per;
          output.android.star_1.min.date = window.ratings[i].Date;
        }

        if (output.android.star_2.max.value <= rat2per) {
          output.android.star_2.max.value = rat2per;
          output.android.star_2.max.date = window.ratings[i].Date;
        }
        if (output.android.star_2.min.value >= rat2per) {
          output.android.star_2.min.value = rat2per;
          output.android.star_2.min.date = window.ratings[i].Date;
        }

        if (output.android.star_3.max.value <= rat3per) {
          output.android.star_3.max.value = rat3per;
          output.android.star_3.max.date = window.ratings[i].Date;
        }
        if (output.android.star_3.min.value >= rat3per) {
          output.android.star_3.min.value = rat3per;
          output.android.star_3.min.date = window.ratings[i].Date;
        }

        if (output.android.star_4.max.value <= rat4per) {
          output.android.star_4.max.value = rat4per;
          output.android.star_4.max.date = window.ratings[i].Date;
        }
        if (output.android.star_4.min.value >= rat4per) {
          output.android.star_4.min.value = rat4per;
          output.android.star_4.min.date = window.ratings[i].Date;
        }

        if (output.android.star_5.max.value <= rat5per) {
          output.android.star_5.max.value = rat5per;
          output.android.star_5.max.date = window.ratings[i].Date;
        }
        if (output.android.star_5.min.value >= rat5per) {
          output.android.star_5.min.value = rat5per;
          output.android.star_5.min.date = window.ratings[i].Date;
        }
      }

      output.android.star_1.current.value = rat1per;
      output.android.star_2.current.value = rat2per;
      output.android.star_3.current.value = rat3per;
      output.android.star_4.current.value = rat4per;
      output.android.star_5.current.value = rat5per;

      output.android.star_1.current.date = window.ratings[i].Date;
      output.android.star_2.current.date = window.ratings[i].Date;
      output.android.star_3.current.date = window.ratings[i].Date;
      output.android.star_4.current.date = window.ratings[i].Date;
      output.android.star_5.current.date = window.ratings[i].Date;
    }
  }

  //ios
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == 'ios') {
      // Находим процентное соотношение
      var sum =
        window.ratings[i].Rating1 +
        window.ratings[i].Rating2 +
        window.ratings[i].Rating3 +
        window.ratings[i].Rating4 +
        window.ratings[i].Rating5;
      var one_per = 100.0 / sum;
      var rat1per = window.ratings[i].Rating1 * one_per;
      var rat2per = window.ratings[i].Rating2 * one_per;
      var rat3per = window.ratings[i].Rating3 * one_per;
      var rat4per = window.ratings[i].Rating4 * one_per;
      var rat5per = window.ratings[i].Rating5 * one_per;

      if (output.ios.star_1.current.value == undefined) {
        output.ios.star_1.current.value = rat1per;
        output.ios.star_2.current.value = rat2per;
        output.ios.star_3.current.value = rat3per;
        output.ios.star_4.current.value = rat4per;
        output.ios.star_5.current.value = rat5per;

        output.ios.star_1.current.date = window.ratings[i].Date;
        output.ios.star_2.current.date = window.ratings[i].Date;
        output.ios.star_3.current.date = window.ratings[i].Date;
        output.ios.star_4.current.date = window.ratings[i].Date;
        output.ios.star_5.current.date = window.ratings[i].Date;

        output.ios.star_1.min.value = rat1per;
        output.ios.star_2.min.value = rat2per;
        output.ios.star_3.min.value = rat3per;
        output.ios.star_4.min.value = rat4per;
        output.ios.star_5.min.value = rat5per;

        output.ios.star_1.max.value = rat1per;
        output.ios.star_2.max.value = rat2per;
        output.ios.star_3.max.value = rat3per;
        output.ios.star_4.max.value = rat4per;
        output.ios.star_5.max.value = rat5per;

        output.ios.star_1.min.date = window.ratings[i].Date;
        output.ios.star_2.min.date = window.ratings[i].Date;
        output.ios.star_3.min.date = window.ratings[i].Date;
        output.ios.star_4.min.date = window.ratings[i].Date;
        output.ios.star_5.min.date = window.ratings[i].Date;

        output.ios.star_1.max.date = window.ratings[i].Date;
        output.ios.star_2.max.date = window.ratings[i].Date;
        output.ios.star_3.max.date = window.ratings[i].Date;
        output.ios.star_4.max.date = window.ratings[i].Date;
        output.ios.star_5.max.date = window.ratings[i].Date;
      } else {
        if (output.ios.star_1.max.value <= rat1per) {
          output.ios.star_1.max.value = rat1per;
          output.ios.star_1.max.date = window.ratings[i].Date;
        }
        if (output.ios.star_1.min.value >= rat1per) {
          output.ios.star_1.min.value = rat1per;
          output.ios.star_1.min.date = window.ratings[i].Date;
        }

        if (output.ios.star_2.max.value <= rat2per) {
          output.ios.star_2.max.value = rat2per;
          output.ios.star_2.max.date = window.ratings[i].Date;
        }
        if (output.ios.star_2.min.value >= rat2per) {
          output.ios.star_2.min.value = rat2per;
          output.ios.star_2.min.date = window.ratings[i].Date;
        }

        if (output.ios.star_3.max.value <= rat3per) {
          output.ios.star_3.max.value = rat3per;
          output.ios.star_3.max.date = window.ratings[i].Date;
        }
        if (output.ios.star_3.min.value >= rat3per) {
          output.ios.star_3.min.value = rat3per;
          output.ios.star_3.min.date = window.ratings[i].Date;
        }

        if (output.ios.star_4.max.value <= rat4per) {
          output.ios.star_4.max.value = rat4per;
          output.ios.star_4.max.date = window.ratings[i].Date;
        }
        if (output.ios.star_4.min.value >= rat4per) {
          output.ios.star_4.min.value = rat4per;
          output.ios.star_4.min.date = window.ratings[i].Date;
        }

        if (output.ios.star_5.max.value <= rat5per) {
          output.ios.star_5.max.value = rat5per;
          output.ios.star_5.max.date = window.ratings[i].Date;
        }
        if (output.ios.star_5.min.value >= rat5per) {
          output.ios.star_5.min.value = rat5per;
          output.ios.star_5.min.date = window.ratings[i].Date;
        }
      }

      output.ios.star_1.current.value = rat1per;
      output.ios.star_2.current.value = rat2per;
      output.ios.star_3.current.value = rat3per;
      output.ios.star_4.current.value = rat4per;
      output.ios.star_5.current.value = rat5per;

      output.ios.star_1.current.date = window.ratings[i].Date;
      output.ios.star_2.current.date = window.ratings[i].Date;
      output.ios.star_3.current.date = window.ratings[i].Date;
      output.ios.star_4.current.date = window.ratings[i].Date;
      output.ios.star_5.current.date = window.ratings[i].Date;
    }
  }

  return output;
}

const CataCoveiFoot = data => (
  <Grid container className='mm-data-covei-field'>
    <Grid item xs={12} sm={12}>
      <Box fontWeight='fontWeightLight' style={{ color: data.color }}>
        {data.title}
      </Box>
    </Grid>
    <Grid item container xs={4} sm={4} alignItems='flex-start'>
      <Grid item xs={5} sm={5} className='current' style={{ backgroundColor: data.current.color }}>
        <Box fontWeight='fontWeightLight' fontSize={13}>
          Current
        </Box>
      </Grid>
      <Grid item xs={7} sm={7}>
        <Box fontWeight='fontWeightLight' fontSize={14} textAlign='center'>
          {data.current.date}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box fontSize='h6.fontSize' textAlign='center'>
          {data.current.value.toString().slice(0, 8) + '%'}
        </Box>
      </Grid>
    </Grid>
    <Grid item container xs={4} sm={4} alignItems='flex-start'>
      <Grid item xs={4} sm={4} className='max' style={{ backgroundColor: data.max.color }}>
        <Box fontWeight='fontWeightLight' fontSize={13}>
          Max
        </Box>
      </Grid>
      <Grid item xs={7} sm={7}>
        <Box fontWeight='fontWeightLight' fontSize={14} textAlign='center'>
          {data.max.date}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box fontSize='h6.fontSize' textAlign='center'>
          {data.max.value.toString().slice(0, 8) + '%'}
        </Box>
      </Grid>
    </Grid>
    <Grid item container xs={4} sm={4} alignItems='flex-start'>
      <Grid item xs={4} sm={4} className='min' style={{ backgroundColor: data.min.color }}>
        <Box fontWeight='fontWeightLight' fontSize={13}>
          Min
        </Box>
      </Grid>
      <Grid item xs={7} sm={7}>
        <Box fontWeight='fontWeightLight' fontSize={14} textAlign='center'>
          {data.min.date}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box fontSize='h6.fontSize' textAlign='center'>
          {data.min.value.toString().slice(0, 8) + '%'}
        </Box>
      </Grid>
    </Grid>
  </Grid>
);

function loadPlotStarsCountData(shop_type, data_type) {
  var xN = [];
  var yN = [];

  // Date
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) xN.push(window.ratings[i].Date);
  }

  // Stars
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) yN.push(window.ratings[i][data_type]);
  }

  return {
    x: xN,
    y: yN
  };
}

function loadBarChartStarsCountData(shop_type) {
  var xN = [];
  var yN = [];

  // Date
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) xN.push(window.ratings[i].Date);
  }

  // Stars
  var index = 0;
  yN.push([]);
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) yN[index].push(window.ratings[i].Rating1);
  }
  index++;

  yN.push([]);
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) yN[index].push(window.ratings[i].Rating2);
  }
  index++;

  yN.push([]);
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) yN[index].push(window.ratings[i].Rating3);
  }
  index++;

  yN.push([]);
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) yN[index].push(window.ratings[i].Rating4);
  }
  index++;

  yN.push([]);
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) yN[index].push(window.ratings[i].Rating5);
  }
  index++;

  // Average rating

  yN.push([]);
  for (var i = 0; i < window.ratings.length; i++) {
    if (window.ratings[i].ShopType == shop_type) yN[index].push(window.ratings[i].AverageRating);
  }
  index++;

  return {
    x: xN,
    y: yN
  };
}

const newPlotElementWithBotAxis = (width, height, data, color, rating_stars_count) => (
  <>
    <Plot
      config={{ displayModeBar: false }}
      style={{ marginBottom: -10 }}
      key='2'
      data={[
        {
          x: data.x,
          y: data.y,
          mode: 'lines',
          line: {
            shape: 'spline',
            width: 2,
            color: color
          },
          type: 'scatter'
        }
      ]}
      layout={{
        showlegend: false,
        margin: {
          l: 20,
          r: 20,
          b: 50,
          t: 0,
          pad: 0
        },
        width: width,
        height: height,
        font: {
          family: 'Roboto, monospace',
          size: 13,
          color: '#7f7f7f'
        },
        xaxis: {
          showline: true,
          showgrid: false,
          showticklabels: true,
          linecolor: 'rgb(255,255,255)',
          linewidth: 3,
          autotick: true,
          ticks: 'inside',
          tickcolor: 'rgb(55,55,55)',
          tickwidth: 1,
          ticklen: 3,
          tickfont: {
            family: 'Roboto',
            size: 14,
            color: 'rgb(82, 82, 82)'
          }
        },
        yaxis: {
          showgrid: false,
          zeroline: false,
          showline: false,
          showticklabels: false
        }
      }}
    />
    <div className='plot-cove-comments-rating-title'>
      <Rating style={{ color: color }} value={rating_stars_count} readOnly />
    </div>
  </>
);

const newBarChartElementWithBotAxis = (width, height, data) => (
  <>
    <Plot
      config={{ displayModeBar: false }}
      style={{ marginBottom: -10 }}
      key='2'
      data={[
        {
          x: data.x,
          y: data.y[0],
          name: '1 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#FF0034'
          }
        },
        {
          x: data.x,
          y: data.y[1],
          name: '2 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#EB0098'
          }
        },
        {
          x: data.x,
          y: data.y[2],
          name: '3 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#F200FF'
          }
        },
        {
          x: data.x,
          y: data.y[3],
          name: '4 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#A600EB'
          }
        },
        {
          x: data.x,
          y: data.y[4],
          name: '5 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#7E0DFF'
          }
        },
        {
          x: data.x,
          y: data.y[5],
          name: 'Average rating',
          yaxis: 'y2',
          mode: 'lines',
          line: {
            shape: 'spline',
            width: 3,
            color: '#B83C2F'
          },
          type: 'scatter'
        }
      ]}
      layout={{
        showlegend: false,
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 0,
          pad: 0
        },
        width: width,
        height: height,
        font: {
          family: 'Roboto, monospace',
          size: 13,
          color: '#7f7f7f'
        },
        xaxis: {
          showline: true,
          showgrid: true,
          showticklabels: true,
          linecolor: 'rgb(255,255,255)',
          linewidth: 3,
          autotick: true,
          ticks: 'inside',
          tickcolor: 'rgb(55,55,55)',
          tickwidth: 1,
          ticklen: 3,
          tickfont: {
            family: 'Roboto',
            size: 14,
            color: 'rgb(82, 82, 82)'
          }
        },
        yaxis: {
          showgrid: true,
          zeroline: false,
          showline: false,
          showticklabels: true
        },
        yaxis2: {
          showline: false,
          showgrid: false,
          showticklabels: true,
          overlaying: 'y',
          side: 'right'
        }
      }}
    />
  </>
);

function add_plot_with_latency_botAxis(id, shop_type, data_type, color, rating_stars_count) {
  setTimeout(() => {
    var width = document.getElementById(id).offsetWidth;
    var height = document.getElementById(id).offsetHeight;

    // Рендерим основное
    ReactDOM.render(
      newPlotElementWithBotAxis(width, height, loadPlotStarsCountData(shop_type, data_type), color, rating_stars_count),
      document.getElementById(id)
    );
  }, 1);
}

function add_PieBarChart_with_latency(id, data) {
  setTimeout(() => {
    var width = document.getElementById(id).offsetWidth;
    var height = document.getElementById(id).offsetHeight;

    // Рендерим основное
    ReactDOM.render(PieBarChart(width, height, data), document.getElementById(id));
  }, 1);
}

function add_BarChart_with_latency(id, shop_type) {
  setTimeout(() => {
    var width = document.getElementById(id).offsetWidth;
    var height = document.getElementById(id).offsetHeight;

    // Рендерим основное
    ReactDOM.render(
      newBarChartElementWithBotAxis(width, height, loadBarChartStarsCountData(shop_type)),
      document.getElementById(id)
    );
  }, 1);
}

export default function CommentsPlotTab() {
  const data = loadMinMaxValueData();
  return (
    <>
      {/* Android */}
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div className='plot-cove-comments-title'>
            <div style={{ fontSize: '0.9rem', fontWeight: 400, alignSelf: 'self-start' }}>  Google Play</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 25,
                  backgroundImage: 'url("' + window.applicationData.IconUrl + '") ',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div style={{ fontSize: '1.5rem', fontWeight: 300 }}>  {window.applicationData.Title}</div>
            </div>

            <IconButton className='covei-badge-button' href={window.applicationData.AndroidUrl}>
              <Icon
                style={{
                  width: '100px',
                  height: '40px',
                  borderRadius: 13,
                  backgroundImage:
                    'url("https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png") ',
                  backgroundSize: 'cover'
                }}
              ></Icon>
            </IconButton>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#7e0dff',
            title: 'Star 5',
            current: {
              color: '#7e0dff',
              date: data.android.star_5.current.date,
              value: data.android.star_5.current.value
            },
            min: {
              color: '#b80003',
              date: data.android.star_5.min.date,
              value: data.android.star_5.min.value
            },
            max: {
              color: '#00b809',
              date: data.android.star_5.max.date,
              value: data.android.star_5.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsAndroidPlotTabId1'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsAndroidPlotTabId1', 'android', 'Rating5', '#7E0DFF', 5)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#a600eb',
            title: 'Star 4',
            current: {
              color: '#a600eb',
              date: data.android.star_4.current.date,
              value: data.android.star_4.current.value
            },
            min: {
              color: '#b80003',
              date: data.android.star_4.min.date,
              value: data.android.star_4.min.value
            },
            max: {
              color: '#00b809',
              date: data.android.star_4.max.date,
              value: data.android.star_4.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsAndroidPlotTabId2'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsAndroidPlotTabId2', 'android', 'Rating4', '#A600EB', 4)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#f200ff',
            title: 'Star 3',
            current: {
              color: '#f200ff',
              date: data.android.star_3.current.date,
              value: data.android.star_3.current.value
            },
            min: {
              color: '#b80003',
              date: data.android.star_3.min.date,
              value: data.android.star_3.min.value
            },
            max: {
              color: '#00b809',
              date: data.android.star_3.max.date,
              value: data.android.star_3.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsAndroidPlotTabId3'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsAndroidPlotTabId3', 'android', 'Rating3', '#F200FF', 3)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#eb0098',
            title: 'Star 2',
            current: {
              color: '#eb0098',
              date: data.android.star_2.current.date,
              value: data.android.star_2.current.value
            },
            min: {
              color: '#00b809',
              date: data.android.star_2.min.date,
              value: data.android.star_2.min.value
            },
            max: {
              color: '#b80003',
              date: data.android.star_2.max.date,
              value: data.android.star_2.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsAndroidPlotTabId4'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsAndroidPlotTabId4', 'android', 'Rating2', '#EB0098', 2)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#ff0034',
            title: 'Star 1',
            current: {
              color: '#ff0034',
              date: data.android.star_1.current.date,
              value: data.android.star_1.current.value
            },
            min: {
              color: '#00b809',
              date: data.android.star_1.min.date,
              value: data.android.star_1.min.value
            },
            max: {
              color: '#b80003',
              date: data.android.star_1.max.date,
              value: data.android.star_1.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsAndroidPlotTabId5'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsAndroidPlotTabId5', 'android', 'Rating1', '#FF0034', 1)}
        >
          <CircularProgress />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsAndroidBarChartId1'
          className='flext-center non-selectable'
          style={{ minHeight: 350 }}
          onLoad={add_BarChart_with_latency('CommentsAndroidBarChartId1', 'android')}
        >
          <CircularProgress />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsAndroidPieBarChartId1'
          className='flext-center non-selectable'
          style={{ minHeight: 350 }}
          onLoad={add_PieBarChart_with_latency('CommentsAndroidPieBarChartId1', data.android)}
        >
          <CircularProgress />
        </Grid>
      </Grid>

      {/* Ios */}
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div className='plot-cove-comments-title'>
            <div style={{ fontSize: '0.9rem', fontWeight: 400, alignSelf: 'self-start' }}>  App Store</div>

            <IconButton className='covei-badge-button' href={window.applicationData.AppleUrl}>
              <Icon
                style={{
                  width: '97px',
                  height: '32px',
                  borderRadius: 5,
                  backgroundImage:
                    'url("https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg") ',
                  backgroundSize: 'cover'
                }}
              ></Icon>
            </IconButton>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#7e0dff',
            title: 'Star 5',
            current: {
              color: '#7e0dff',
              date: data.ios.star_5.current.date,
              value: data.ios.star_5.current.value
            },
            min: {
              color: '#b80003',
              date: data.ios.star_5.min.date,
              value: data.ios.star_5.min.value
            },
            max: {
              color: '#00b809',
              date: data.ios.star_5.max.date,
              value: data.ios.star_5.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsIosPlotTabId1'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsIosPlotTabId1', 'ios', 'Rating5', '#7E0DFF', 5)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#a600eb',
            title: 'Star 4',
            current: {
              color: '#a600eb',
              date: data.ios.star_4.current.date,
              value: data.ios.star_4.current.value
            },
            min: {
              color: '#b80003',
              date: data.ios.star_4.min.date,
              value: data.ios.star_4.min.value
            },
            max: {
              color: '#00b809',
              date: data.ios.star_4.max.date,
              value: data.ios.star_4.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsIosPlotTabId2'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsIosPlotTabId2', 'ios', 'Rating4', '#A600EB', 4)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#f200ff',
            title: 'Star 3',
            current: {
              color: '#f200ff',
              date: data.ios.star_3.current.date,
              value: data.ios.star_3.current.value
            },
            min: {
              color: '#b80003',
              date: data.ios.star_3.min.date,
              value: data.ios.star_3.min.value
            },
            max: {
              color: '#00b809',
              date: data.ios.star_3.max.date,
              value: data.ios.star_3.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsIosPlotTabId3'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsIosPlotTabId3', 'ios', 'Rating3', '#F200FF', 3)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#eb0098',
            title: 'Star 2',
            current: {
              color: '#eb0098',
              date: data.ios.star_2.current.date,
              value: data.ios.star_2.current.value
            },
            min: {
              color: '#00b809',
              date: data.ios.star_2.min.date,
              value: data.ios.star_2.min.value
            },
            max: {
              color: '#b80003',
              date: data.ios.star_2.max.date,
              value: data.ios.star_2.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsIosPlotTabId4'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsIosPlotTabId4', 'ios', 'Rating2', '#EB0098', 2)}
        >
          <CircularProgress />
        </Grid>

        <Grid item xs={12} sm={6}>
          {CataCoveiFoot({
            color: '#ff0034',
            title: 'Star 1',
            current: {
              color: '#ff0034',
              date: data.ios.star_1.current.date,
              value: data.ios.star_1.current.value
            },
            min: {
              color: '#00b809',
              date: data.ios.star_1.min.date,
              value: data.ios.star_1.min.value
            },
            max: {
              color: '#b80003',
              date: data.ios.star_1.max.date,
              value: data.ios.star_1.max.value
            }
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsIosPlotTabId5'
          className='flext-center non-selectable'
          style={{ minHeight: 120 }}
          onLoad={add_plot_with_latency_botAxis('CommentsIosPlotTabId5', 'ios', 'Rating1', '#FF0034', 1)}
        >
          <CircularProgress />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsIosBarChartId1'
          className='flext-center non-selectable'
          style={{ minHeight: 350 }}
          onLoad={add_BarChart_with_latency('CommentsIosBarChartId1', 'ios')}
        >
          <CircularProgress />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          id='CommentsIosPieBarChartId1'
          className='flext-center non-selectable'
          style={{ minHeight: 350 }}
          onLoad={add_PieBarChart_with_latency('CommentsIosPieBarChartId1', data.ios)}
        >
          <CircularProgress />
        </Grid>
      </Grid>
    </>
  );
}
