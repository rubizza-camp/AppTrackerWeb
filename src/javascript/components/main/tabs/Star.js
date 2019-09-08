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
import { parseRaitings, dataForNewPlotTy, dataForPieBarPlotTy } from '../../../lib/plotDataParser';
import StarsView from './view/StarView';

const PieBarChart = (data) => (
  <Plot
    config={{ displayModeBar: false }}
    style={{ marginBottom: -10 }}
    key='2'
    data={[
      {
        values: [
          data[4].y,
          data[3].y,
          data[2].y,
          data[1].y,
          data[0].y,
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
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      title: data[0].x,
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
      width: 420,
      height: 400,
      font: {
        family: 'Roboto, monospace',
        size: 13,
        color: '#7f7f7f'
      }
    }}
  />
);


const NewBarChartElementWithBotAxis = (data) => (
  <>
    <Plot
      config={{ displayModeBar: false }}
      style={{ marginBottom: -10 }}
      key='2'
      data={[
        {
          x: data[4].x,
          y: data[4].y,
          name: '1 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#FF0034'
          }
        },
        {
          x: data[3].x,
          y: data[3].y,
          name: '2 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#EB0098'
          }
        },
        {
          x: data[2].x,
          y: data[2].y,
          name: '3 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#F200FF'
          }
        },
        {
          x: data[1].x,
          y: data[1].y,
          name: '4 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#A600EB'
          }
        },
        {
          x: data[0].x,
          y: data[0].y,
          name: '5 star',
          stackgroup: 'one',
          line: {
            shape: 'spline',
            width: 2,
            color: '#7E0DFF'
          }
        },
      ]}
      layout={{
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        showlegend: false,
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 0,
          pad: 0
        },
        width: 450,
        height: 400,
        font: {
          family: 'Roboto, monospace',
          size: 13,
          color: '#7f7f7f'
        },
        xaxis: {
          showgrid: true,
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
      }}
    />
  </>
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default function Stars(props) {
  const [value, setValue] = React.useState(0);
  const [appData, setAppData] = React.useState(props.data);
  const [parsedData, setpParsedData] = React.useState(parseRaitings(props));

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
  }

  return (
    <>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          className='background-op40'
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='on'
          aria-label='scrollable auto tabs'
        >
          {parsedData.countries.map((country, index) => (
            <Tab key={index} label={country} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {parsedData.countries.map((country, countryIndex) => (
        <TabPanel key={countryIndex} value={value} index={countryIndex}>
          <Grid container>

            {/* FOOTER IOS*/}
            <Grid item xs={12} sm={12}>
              <div className='plot-cove-comments-title'>
                <div style={{ fontSize: '0.9rem', fontWeight: 400, alignSelf: 'self-start' }}> App store </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 25,
                      backgroundImage: 'url("' + appData.attributes.IconUrl + '") ',
                      backgroundSize: 'cover'
                    }}
                  ></div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 300 }}>  {appData.attributes.Title}</div>
                </div>
                <IconButton className='covei-badge-button' href={appData.attributes.AppleUrl}>
                  <Icon
                    style={{
                      width: '100px',
                      height: '33px',
                      borderRadius: 13,
                      backgroundImage:
                        'url("https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg") ',
                      backgroundSize: 'cover'
                    }}
                  ></Icon>
                </IconButton>
              </div>
            </Grid>

            {/* MAIN CONTENT */}
            <StarsView {...{ country, countryIndex, parsedData }} storeType='ios' />
            <Grid item xs={12} sm={6} className='flext-center non-selectable' style={{ minHeight: 320 }}>
              <NewBarChartElementWithBotAxis {...dataForNewPlotTy(countryIndex, parsedData, 'ios')} />
            </Grid>
            <Grid item xs={12} sm={6} className='flext-center non-selectable' style={{ minHeight: 320 }}>
              <PieBarChart {...dataForPieBarPlotTy(countryIndex, parsedData, 'ios')} />
            </Grid>

            {/* FOOTER ANDROID*/}
            <Grid item xs={12} sm={12}>
              <div className='plot-cove-comments-title'>
                <div style={{ fontSize: '0.9rem', fontWeight: 400, alignSelf: 'self-start' }}>  Google Play</div>

                <IconButton className='covei-badge-button' href={appData.attributes.AndroidUrl}>
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

            {/* MAIN CONTENT */}
            <StarsView {...{ country, countryIndex, parsedData }} storeType='android' />
            <Grid item xs={12} sm={6} className='flext-center non-selectable' style={{ minHeight: 320 }}>
              <NewBarChartElementWithBotAxis {...dataForNewPlotTy(countryIndex, parsedData, 'android')} />
            </Grid>
            <Grid item xs={12} sm={6} className='flext-center non-selectable' style={{ minHeight: 320 }}>
              <PieBarChart {...dataForPieBarPlotTy(countryIndex, parsedData, 'android')} />
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </>
  );
}
