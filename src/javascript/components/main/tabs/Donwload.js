// jshint esversion:9
import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Plot from 'react-plotly.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

function loadMinMaxValueData() {
  var output = {
    android: {
      downloads: {
        global: {
          current: {
            value: 0,
            date: 0
          },
          min: {
            value: 'Coming soon',
            date: 'Coming soon'
          },
          max: {
            value: 'Coming soon',
            date: 'Coming soon'
          }
        },
        us: {
          current: {
            value: 0,
            date: 0
          },
          min: {
            value: undefined,
            date: undefined
          },
          max: {
            value: undefined,
            date: undefined
          }
        },
        ru: {
          current: {
            value: 0,
            date: 0
          },
          min: {
            value: undefined,
            date: undefined
          },
          max: {
            value: undefined,
            date: undefined
          }
        }
      }
    },
    ios: {
      downloads: {
        global: {
          current: {
            value: 0,
            date: 0
          },
          min: {
            value: 'Coming soon',
            date: 'Coming soon'
          },
          max: {
            value: 'Coming soon',
            date: 'Coming soon'
          }
        },
        us: {
          current: {
            value: 0,
            date: 0
          },
          min: {
            value: undefined,
            date: undefined
          },
          max: {
            value: undefined,
            date: undefined
          }
        },
        ru: {
          current: {
            value: 0,
            date: 0
          },
          min: {
            value: undefined,
            date: undefined
          },
          max: {
            value: undefined,
            date: undefined
          }
        }
      }
    }
  };

  // Android
  //1. Считаем Global
  // Ищем по ru last date
  var lastDate = window.dynamicInfos[window.dynamicInfos.length - 1].Date;

  output.android.downloads.global.current.date = lastDate;
  output.android.downloads.global.current.value = 0;
  output.ios.downloads.global.current.date = lastDate;
  output.ios.downloads.global.current.value = 0;

  for (var i = 0; i < window.dynamicInfos.length; i++) {
    if (window.dynamicInfos[i].ShopType == 'android')
      if (window.dynamicInfos[i].Date == lastDate) {
        switch (window.dynamicInfos[i].Country) {
          case 'ru':
            output.android.downloads.global.current.value += window.dynamicInfos[i].Downloads;
            break;
          case 'us':
            output.android.downloads.global.current.value += window.dynamicInfos[i].Downloads;
            break;
        }
      }

    if (window.dynamicInfos[i].ShopType == 'ios')
      if (window.dynamicInfos[i].Date == lastDate) {
        switch (window.dynamicInfos[i].Country) {
          case 'ru':
            output.ios.downloads.global.current.value += window.dynamicInfos[i].Downloads;
            break;
          case 'us':
            output.ios.downloads.global.current.value += window.dynamicInfos[i].Downloads;
            break;
        }
      }
  }

  // Searching min max value

  for (var i = 0; i < window.dynamicInfos.length; i++) {
    if (window.dynamicInfos[i].ShopType == 'android') {
      switch (window.dynamicInfos[i].Country) {
        case 'ru':
          if (output.android.downloads.ru.max.value == undefined)
            output.android.downloads.ru.max.value = window.dynamicInfos[i].Downloads;
          if (output.android.downloads.ru.min.value == undefined)
            output.android.downloads.ru.min.value = window.dynamicInfos[i].Downloads;

          if (output.android.downloads.ru.max.value < window.dynamicInfos[i].Downloads) {
            output.android.downloads.ru.max.value = window.dynamicInfos[i].Downloads;
            output.android.downloads.ru.max.date = window.dynamicInfos[i].Date;
          }

          if (output.android.downloads.ru.min.value > window.dynamicInfos[i].Downloads) {
            output.android.downloads.ru.min.value = window.dynamicInfos[i].Downloads;
            output.android.downloads.ru.min.date = window.dynamicInfos[i].Date;
          }

          output.android.downloads.ru.current.value = window.dynamicInfos[i].Downloads;
          output.android.downloads.ru.current.date = window.dynamicInfos[i].Date;

          break;
        case 'us':
          if (output.android.downloads.us.max.value == undefined)
            output.android.downloads.us.max.value = window.dynamicInfos[i].Downloads;
          if (output.android.downloads.us.min.value == undefined)
            output.android.downloads.us.min.value = window.dynamicInfos[i].Downloads;

          if (output.android.downloads.us.max.value < window.dynamicInfos[i].Downloads) {
            output.android.downloads.us.max.value = window.dynamicInfos[i].Downloads;
            output.android.downloads.us.max.date = window.dynamicInfos[i].Date;
          }

          if (output.android.downloads.us.min.value > window.dynamicInfos[i].Downloads) {
            output.android.downloads.us.min.value = window.dynamicInfos[i].Downloads;
            output.android.downloads.us.min.date = window.dynamicInfos[i].Date;
          }

          output.android.downloads.us.current.value = window.dynamicInfos[i].Downloads;
          output.android.downloads.us.current.date = window.dynamicInfos[i].Date;

          break;
      }
    }

    if (window.dynamicInfos[i].ShopType == 'ios') {
      switch (window.dynamicInfos[i].Country) {
        case 'ru':
          if (output.ios.downloads.ru.max.value == undefined)
            output.ios.downloads.ru.max.value = window.dynamicInfos[i].Downloads;
          if (output.ios.downloads.ru.min.value == undefined)
            output.ios.downloads.ru.min.value = window.dynamicInfos[i].Downloads;

          if (output.ios.downloads.ru.max.value < window.dynamicInfos[i].Downloads) {
            output.ios.downloads.ru.max.value = window.dynamicInfos[i].Downloads;
            output.ios.downloads.ru.max.date = window.dynamicInfos[i].Date;
          }

          if (output.ios.downloads.ru.min.value > window.dynamicInfos[i].Downloads) {
            output.ios.downloads.ru.min.value = window.dynamicInfos[i].Downloads;
            output.ios.downloads.ru.min.date = window.dynamicInfos[i].Date;
          }

          output.ios.downloads.ru.current.value = window.dynamicInfos[i].Downloads;
          output.ios.downloads.ru.current.date = window.dynamicInfos[i].Date;

          break;
        case 'us':
          if (output.ios.downloads.us.max.value == undefined)
            output.ios.downloads.us.max.value = window.dynamicInfos[i].Downloads;
          if (output.ios.downloads.us.min.value == undefined)
            output.ios.downloads.us.min.value = window.dynamicInfos[i].Downloads;

          if (output.ios.downloads.us.max.value < window.dynamicInfos[i].Downloads) {
            output.ios.downloads.us.max.value = window.dynamicInfos[i].Downloads;
            output.ios.downloads.us.max.date = window.dynamicInfos[i].Date;
          }

          if (output.ios.downloads.us.min.value < window.dynamicInfos[i].Downloads) {
            output.ios.downloads.us.min.value = window.dynamicInfos[i].Downloads;
            output.ios.downloads.us.min.date = window.dynamicInfos[i].Date;
          }

          output.ios.downloads.us.current.value = window.dynamicInfos[i].Downloads;
          output.ios.downloads.us.current.date = window.dynamicInfos[i].Date;

          break;
      }
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
          {data.current.value.toString()}
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
          {data.max.value.toString()}
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
          {data.min.value.toString()}
        </Box>
      </Grid>
    </Grid>
  </Grid>
);

function loadBarChartDownloadsCountData(shop_type) {
  var xN = [];
  var yN = [];

  // Date
  for (var i = 0; i < window.dynamicInfos.length; i++) {
    if (window.dynamicInfos[i].Country == 'ru')
      if (window.dynamicInfos[i].ShopType == shop_type) xN.push(window.dynamicInfos[i].Date);
  }

  // Downloads
  // ru
  var index = 0;
  yN.push([]);
  for (var i = 0; i < window.dynamicInfos.length; i++) {
    if (window.dynamicInfos[i].Country == 'ru')
      if (window.dynamicInfos[i].ShopType == shop_type) yN[index].push(window.dynamicInfos[i].Downloads);
  }
  index++;

  // us
  yN.push([]);
  for (var i = 0; i < window.dynamicInfos.length; i++) {
    if (window.dynamicInfos[i].Country == 'us')
      if (window.dynamicInfos[i].ShopType == shop_type) yN[index].push(window.dynamicInfos[i].Downloads);
  }
  index++;

  return {
    x: xN,
    y: yN
  };
}

const newDownloadBarChartElement = (width, height, data) => (
  <>
    <Plot
      config={{ displayModeBar: false }}
      style={{ marginBottom: -10 }}
      key='2'
      data={[
        {
          x: data.x,
          y: data.y[0],
          name: 'Russian',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#E8C448'
          }
        },
        {
          x: data.x,
          y: data.y[1],
          name: 'United States',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#6561FF'
          }
        }
      ]}
      layout={{
        legend: {
          x: 0,
          y: 1,
          traceorder: 'normal',
          font: {
            family: 'sans-serif',
            size: 12,
            color: '#000'
          },
          bgcolor: '#FFFFFF',
          bordercolor: '#FFFFFF',
          borderRadius: 4,
          borderwidth: 2
        },
        margin: {
          l: 40,
          r: 35,
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
        }
      }}
    />
  </>
);

function add_DownloadBarChart_with_latency(id, shop_type) {
  setTimeout(() => {
    var width = document.getElementById(id).offsetWidth;
    var height = document.getElementById(id).offsetHeight;

    // Рендерим основное
    ReactDOM.render(
      newDownloadBarChartElement(width, height, loadBarChartDownloadsCountData(shop_type)),
      document.getElementById(id)
    );
  }, 1);
}

export default function Downloads() {
  const data = loadMinMaxValueData();
  return (
    <>
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
          <Grid item xs={12} sm={12}>
            {CataCoveiFoot({
              color: '#a600eb',
              title: 'Global',
              current: {
                color: '#a600eb',
                date: data.android.downloads.global.current.date,
                value: data.android.downloads.global.current.value / 2
              },
              min: {
                color: '#b80003',
                date: data.android.downloads.global.min.date,
                value: data.android.downloads.global.min.value
              },
              max: {
                color: '#00b809',
                date: data.android.downloads.global.max.date,
                value: data.android.downloads.global.max.value
              }
            })}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            id='DownloadsAndroidBarChartId1'
            className='flext-center non-selectable'
            style={{ minHeight: 350 }}
            onLoad={add_DownloadBarChart_with_latency('DownloadsAndroidBarChartId1', 'android')}
          >
            <CircularProgress />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={12}>
            {CataCoveiFoot({
              color: '#6561ff',
              title: 'United States',
              current: {
                color: '#6561ff',
                date: data.android.downloads.us.current.date,
                value: data.android.downloads.us.current.value
              },
              min: {
                color: '#b80003',
                date: data.android.downloads.us.min.date,
                value: data.android.downloads.us.min.value
              },
              max: {
                color: '#00b809',
                date: data.android.downloads.us.max.date,
                value: data.android.downloads.us.max.value
              }
            })}
          </Grid>
          <Grid item xs={12} sm={12}>
            {CataCoveiFoot({
              color: '#e8c448',
              title: 'Russia',
              current: {
                color: '#e8c448',
                date: data.android.downloads.ru.current.date,
                value: data.android.downloads.ru.current.value
              },
              min: {
                color: '#b80003',
                date: data.android.downloads.ru.min.date,
                value: data.android.downloads.ru.min.value
              },
              max: {
                color: '#00b809',
                date: data.android.downloads.ru.max.date,
                value: data.android.downloads.ru.max.value
              }
            })}
          </Grid>
        </Grid>
      </Grid>

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
          <Grid item xs={12} sm={12}>
            {CataCoveiFoot({
              color: '#a600eb',
              title: 'Global',
              current: {
                color: '#a600eb',
                date: data.ios.downloads.global.current.date,
                value: data.ios.downloads.global.current.value / 2
              },
              min: {
                color: '#b80003',
                date: data.ios.downloads.global.min.date,
                value: data.ios.downloads.global.min.value
              },
              max: {
                color: '#00b809',
                date: data.ios.downloads.global.max.date,
                value: data.ios.downloads.global.max.value
              }
            })}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            id='DownloadsIosBarChartId1'
            className='flext-center non-selectable'
            style={{ minHeight: 350 }}
            onLoad={add_DownloadBarChart_with_latency('DownloadsIosBarChartId1', 'ios')}
          >
            <CircularProgress />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={12}>
            {CataCoveiFoot({
              color: '#6561ff',
              title: 'United States',
              current: {
                color: '#6561ff',
                date: data.ios.downloads.us.current.date,
                value: data.ios.downloads.us.current.value
              },
              min: {
                color: '#b80003',
                date: data.ios.downloads.us.min.date,
                value: data.ios.downloads.us.min.value
              },
              max: {
                color: '#00b809',
                date: data.ios.downloads.us.max.date,
                value: data.ios.downloads.us.max.value
              }
            })}
          </Grid>
          <Grid item xs={12} sm={12}>
            {CataCoveiFoot({
              color: '#e8c448',
              title: 'Russia',
              current: {
                color: '#e8c448',
                date: data.ios.downloads.ru.current.date,
                value: data.ios.downloads.ru.current.value
              },
              min: {
                color: '#b80003',
                date: data.ios.downloads.ru.min.date,
                value: data.ios.downloads.ru.min.value
              },
              max: {
                color: '#00b809',
                date: data.ios.downloads.ru.max.date,
                value: data.ios.downloads.ru.max.value
              }
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
