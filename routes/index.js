var express = require('express');
var router = express.Router();

router.get('/start', function (req, res) {
  res.render('landingPage', {});

});

router.get('/manufacturers', function (req, res) {
  res.render('manufacturers', {});

});

router.get('/tracePage', function (req, res) {
  const { batchNumber } = req.query;
  res.render('tracePage', { batchNumber });

});

router.get('/wheat', function (req, res) {
  res.render('wheat', {});

});

router.get('/downloadFinalCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/final.pdf');

});

router.get('/downloadWheatCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/wheat.pdf');

});

router.get('/downloadSoyCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/soy.pdf');

});

router.get('/downloadYellowPeaCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/yellow_pea.pdf');

});

router.get('/downloadPlasticBottleCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/plastic_bottle.pdf');

});

router.get('/downloadCartonCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/carton.pdf');

});

router.get('/downloadMixingWeightCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/mixing_weights.pdf');

});

router.get('/downloadSeedCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/seeds.pdf');

});

router.get('/downloadTempPlot', function (req, res) {
  res.download(__dirname + '/../public/pdfs/temp_plot.pdf');

});

router.get('/downloadAirPlot', function (req, res) {
  res.download(__dirname + '/../public/pdfs/ambient_air.pdf');

});

router.get('/downloadFertilizer1Certificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/fertilizer1.pdf');

});

router.get('/downloadPesticide1Certificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/pesticide1.pdf');

});

router.get('/downloadRainPlot', function (req, res) {
  res.download(__dirname + '/../public/pdfs/rainfall.pdf');

});

router.get('/downloadpHPlot', function (req, res) {
  res.download(__dirname + '/../public/pdfs/pH_plot.pdf');

});

router.get('/downloadLeafMoisturePlot', function (req, res) {
  res.download(__dirname + '/../public/pdfs/leaf_moisture_trend.png');

});

router.get('/downloadLightPlot', function (req, res) {
  res.download(__dirname + '/../public/pdfs/light_plot.pdf');

});

router.get('/downloadSowingCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/sowing_conditions.pdf');

});

router.get('/downloadFertilizerCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/urea.pdf');

});

router.get('/downloadHarvestCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/harvest_seed_analysis.pdf');

});

router.get('/downloadThreshingCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/threshing.pdf');

});

router.get('/downloadMixingTempCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/mixing_temp.png');

});

router.get('/downloadDistributorStorageCertificate', function (req, res) {
  res.download(__dirname + '/../public/pdfs/distributor_storage.png');
});

router.get('/downloadTracking', function (req, res) {
  res.download(__dirname + '/../public/pdfs/tracking.jpeg');
});

module.exports = router;
