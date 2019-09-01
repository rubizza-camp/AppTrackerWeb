// jshint esversion:9
import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Plot from 'react-plotly.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { parseRaitings, loadMinMaxCurrent, dataForPlotTy1 } from '../../../../lib/plotDataParser';

const DataMetrics = data => (
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

const PlotTy1 = ({ countryIndex, storeType, starIndex, starsColors, ploty1Data }) => (
  <>
    <Plot
      config={{ displayModeBar: false }}
      style={{ marginBottom: -10 }}
      data={[
        {
          x: ploty1Data[starIndex].x,
          y: ploty1Data[starIndex].y,
          mode: 'lines',
          line: {
            shape: 'spline',
            width: 2,
            color: starsColors[starIndex]
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
        width: 450,
        height: 120,
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
      <Rating style={{ color: starsColors[starIndex] }} value={5 - starIndex} readOnly />
    </div>
  </>
);

export default function StarsView({ country, countryIndex, parsedData, storeType }) {
  const [starsColors, setStarsColors] = React.useState(['#7e0dff', '#a600eb', '#f200ff', '#eb0098', '#ff0034']);
  const [data, setData] = React.useState(loadMinMaxCurrent({ countryIndex, parsedData, storeType }));
  const [ploty1Data, setPloty1Data] = React.useState(dataForPlotTy1({ countryIndex, parsedData, storeType }));
  return (
    <>
      {[5, 4, 3, 2, 1].map((ratings_per_countries, starIndex) => (
        <Grid key={starIndex} container>
          <Grid item xs={12} sm={6}>
            {DataMetrics({
              color: starsColors[starIndex],
              title: `Star ${ratings_per_countries}`,
              current: {
                color: starsColors[starIndex],
                date: data[starIndex].current.date,
                value: data[starIndex].current.value
              },
              min: {
                color: '#b80003',
                date: data[starIndex].min.date,
                value: data[starIndex].min.value
              },
              max: {
                color: '#00b809',
                date: data[starIndex].max.date,
                value: data[starIndex].max.value
              }
            })}
          </Grid>
          <Grid item xs={12} sm={6} className='flext-center non-selectable' style={{ minHeight: 120 }}>
            <PlotTy1 {...{ countryIndex, storeType, starIndex, starsColors, ploty1Data }} />
          </Grid>
        </Grid>
      ))}
    </>
  );
}
