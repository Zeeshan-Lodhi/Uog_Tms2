// @mui
import { Grid, Container, Typography } from '@mui/material';
// import WorkspacesIcon from '@mui/icons-material/Workspaces';
// components
import Page from '../components/Page';
// sections
import { AppWidgetSummary, } from '../sections/@dashboard/app';
import AliceCarousel from "react-alice-carousel";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <Grid item xs={12} sm={6} md={3} mr={5}>
      <AppWidgetSummary title="Gujrat" total={25} color="info" onDragStart={handleDragStart} role="presentation" icon={'ant-design:'} />
    </Grid>,

    <Grid item xs={12} sm={6} md={3} mr={5}>
      <AppWidgetSummary title="Mandi" total={8} color="warning" onDragStart={handleDragStart} role="presentation" icon={'ant-design:'} />
    </Grid>,

    <Grid item xs={12} sm={6} md={3} mr={5}>
      <AppWidgetSummary title="Gujranwala" total={12} color="error" onDragStart={handleDragStart} role="presentation" icon={'ant-design:'} />
    </Grid>,
    <Grid item xs={12} sm={6} md={3} mr={5}>
      <AppWidgetSummary title="Jehlum" total={12} color="info" onDragStart={handleDragStart} role="presentation" icon={'ant-design:'} />
    </Grid>,
    <Grid item xs={12} sm={6} md={3} mr={5}>
      <AppWidgetSummary title="Sialkot" total={12} color="warning" onDragStart={handleDragStart} role="presentation" icon={'ant-design:'} />
    </Grid>
  ]
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome To Uog Tms
        </Typography>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary title="Total Buses" total={100} />
        </Grid>
        <div className='mt-4' style={{ marginLeft: "35px" }}>
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            // disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
          />
        </div>
      </Container>
    </Page>
  );
}
